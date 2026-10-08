"""Read-only HTTP/SEO regression audit. Requires Python 3 and curl, no packages.

Production: python scripts/audit-crawlability.py
Local: python scripts/audit-crawlability.py --base http://localhost:3000
Artifacts include each redirect response's headers and GET-body SHA256.
"""
import argparse
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
import hashlib
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import subprocess
import tempfile
from urllib.parse import urljoin, urlsplit
from urllib.robotparser import RobotFileParser
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
SITE = 'https://squarebirdnet.com'
UA = {'browser': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130.0.0.0 Safari/537.36',
      'googlebot': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'}
NS = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9', 'i': 'http://www.google.com/schemas/sitemap-image/1.1'}


class Page(HTMLParser):
    def __init__(self, body):
        super().__init__(convert_charrefs=True)
        self.canonicals, self.robots, self.links, self.h1 = [], [], [], 0
        self.feed(body)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonicals.append(attrs.get('href', ''))
        if tag == 'meta' and attrs.get('name', '').lower() in ('robots', 'googlebot'):
            self.robots.append(attrs.get('content', '').lower())
        if tag == 'a' and attrs.get('href'):
            self.links.append(attrs['href'])
        if tag == 'h1':
            self.h1 += 1


def request(url, agent, method):
    chain = []
    visited = set()
    body = b''
    for _ in range(7):
        if url in visited:
            raise RuntimeError(f'redirect loop at {url}')
        visited.add(url)
        with tempfile.TemporaryDirectory() as directory:
            headers, output = Path(directory)/'headers', Path(directory)/'body'
            command = ['curl', '--silent', '--show-error', '--max-time', '30', '--compressed',
                       '--user-agent', UA[agent], '--dump-header', str(headers), '--output', str(output)]
            if method == 'HEAD':
                command.append('--head')
            result = subprocess.run(command + [url], capture_output=True)
            if result.returncode:
                raise RuntimeError(result.stderr.decode(errors='replace'))
            raw = headers.read_text(encoding='utf-8')
            blocks = [block for block in re.split(r'\r?\n\r?\n', raw) if block.startswith('HTTP/')]
            lines = blocks[-1].splitlines()
            status = int(lines[0].split()[1])
            parsed = {}
            for line in lines[1:]:
                if ':' in line:
                    key, value = line.split(':', 1)
                    parsed.setdefault(key.lower(), []).append(value.strip())
            body = output.read_bytes() if method == 'GET' else b''
        chain.append({'url': url, 'status': status, 'headers': parsed,
                      'bytes': len(body), 'sha256': hashlib.sha256(body).hexdigest() if body else None})
        if status not in (301, 302, 303, 307, 308):
            return chain, body
        locations = parsed.get('location', [])
        if len(locations) != 1:
            raise RuntimeError(f'HTTP {status} has {len(locations)} Location headers: {url}')
        url = urljoin(url, locations[0])
        if urlsplit(url).scheme not in ('http', 'https'):
            raise RuntimeError(f'invalid redirect destination {url}')
    raise RuntimeError(f'more than six redirects: {url}')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base', default=SITE)
    parser.add_argument('--output', default='docs/evidence/crawlability-production.json')
    args = parser.parse_args()
    base = args.base.rstrip('/')
    production = base == SITE
    routes, legal = [], []
    for file in sorted((ROOT/'app').rglob('page.tsx')):
        relative = file.parent.relative_to(ROOT/'app')
        if any(part.startswith(('(', '[', '@')) for part in relative.parts):
            raise RuntimeError(f'route needs explicit resolution: {file}')
        route = '/' + relative.as_posix() if relative.parts else '/'
        text = file.read_text(encoding='utf-8')
        (legal if re.search(r'noIndex:\s*true', text) else routes).append(route)
    origins = [SITE, 'http://squarebirdnet.com', 'http://www.squarebirdnet.com', 'https://www.squarebirdnet.com'] if production else [base]
    paths = routes + ['/robots.txt', '/sitemap.xml']
    tasks = [(origin + path, agent, method, path) for origin in origins for path in paths
             for agent in UA for method in ['GET']]
    tasks += [(base + path, agent, 'GET', path) for path in legal + ['/this-page-should-not-exist-404-check'] for agent in UA]
    tasks += [(origin + path, agent, 'HEAD', path) for origin in origins
              for path in ['/', '/about', '/robots.txt', '/sitemap.xml'] for agent in UA]
    if production:
        tasks += [('https://square-birdnet-site.netlify.app' + path, 'browser', 'GET', path)
                  for path in ['/', '/about', '/robots.txt', '/sitemap.xml']]
    errors, warnings, bodies, records = [], [], {}, []

    def inspect(task):
        url, agent, method, path = task
        record = {'url': url, 'agent': agent, 'method': method, 'path': path, 'failures': []}
        body = b''
        try:
            chain, body = request(url, agent, method)
            record.update(chain=chain, hops=len(chain)-1, final=chain[-1]['url'])
            expected = 404 if path == '/this-page-should-not-exist-404-check' else 200
            if chain[-1]['status'] != expected:
                record['failures'].append(f'final HTTP {chain[-1]["status"]}, expected {expected}')
            alternate = 'netlify.app' in urlsplit(url).hostname
            if not alternate:
                if record['final'] != base + path:
                    record['failures'].append(f'final target must be {base + path}')
                if url.startswith(base + '/') and len(chain) != 1:
                    record['failures'].append('canonical URL redirects')
                if any(hop['status'] not in (301, 308) for hop in chain[:-1]):
                    record['failures'].append('non-permanent redirect')
            if method == 'GET' and path in routes + legal + ['/this-page-should-not-exist-404-check']:
                page = Page(body.decode('utf-8'))
                record.update(canonicals=page.canonicals, robots=page.robots, h1=page.h1)
                header_robots = ' '.join(chain[-1]['headers'].get('x-robots-tag', [])).lower()
                directives = ' '.join(page.robots) + ' ' + header_robots
                if path in routes:
                    if 'noindex' in directives or re.search(r'\bnone\b', directives):
                        record['failures'].append('indexable route has noindex/none')
                    if 'nofollow' in directives:
                        record['failures'].append('indexable route has unexpected nofollow')
                    expected_canonical = SITE + path
                    if len(page.canonicals) != 1 or page.canonicals[0].rstrip('/') != expected_canonical.rstrip('/'):
                        record['failures'].append(f'canonical must be {expected_canonical}')
                    if page.h1 != 1:
                        record['failures'].append(f'expected one H1, found {page.h1}')
                elif 'noindex' not in directives or page.canonicals:
                    record['failures'].append('legal/404 must be noindex without canonical')
                for href in page.links:
                    parsed = urlsplit(href)
                    if parsed.hostname in ('www.squarebirdnet.com', 'square-birdnet-site.netlify.app') or (parsed.hostname == 'squarebirdnet.com' and parsed.scheme != 'https'):
                        record['failures'].append(f'noncanonical internal link: {href}')
        except Exception as exc:
            record['failures'].append(str(exc))
        return record, body

    with ThreadPoolExecutor(max_workers=4) as pool:
        for record, body in pool.map(inspect, tasks):
            bodies[(record['url'], record['agent'], record['method'])] = body
            errors.extend(f'{record["method"]} {record["url"]} [{record["agent"]}]: {message}' for message in record['failures'])
            if 'chain' in record and record['hops'] > 1:
                warnings.append(f'{record["url"]} [{record["method"]}/{record["agent"]}]: {record["hops"]} redirect hops')
            if 'chain' in record and 'netlify.app' in urlsplit(record['url']).hostname and record['hops'] == 0:
                warnings.append(f'{record["url"]}: accessible alias with apex canonical; consider platform alias redirect')
            records.append(record)
    sitemap_summaries = []
    for agent in UA:
        try:
            raw = bodies[(base+'/sitemap.xml', agent, 'GET')]
            raw.decode('utf-8', errors='strict')
            tree = ET.fromstring(raw)
            if tree.tag != '{'+NS['s']+'}urlset':
                raise ValueError('wrong sitemap namespace or root')
            urls = [node.text for node in tree.findall('s:url/s:loc', NS)]
            expected = {SITE + route for route in routes}
            if len(urls) != len(set(urls)) or set(urls) != expected:
                raise ValueError(f'sitemap/route mismatch; missing={expected-set(urls)}, extra={set(urls)-expected}')
            robot_text = bodies[(base+'/robots.txt', agent, 'GET')].decode('utf-8')
            robot = RobotFileParser()
            robot.parse(robot_text.splitlines())
            if not robot.site_maps() or SITE+'/sitemap.xml' not in robot.site_maps():
                raise ValueError('robots does not reference canonical sitemap')
            for url in urls + [SITE+'/sitemap.xml']:
                if not robot.can_fetch('Googlebot', url) or not robot.can_fetch('*', url):
                    raise ValueError(f'robots blocks {url}')
            for date in tree.findall('s:url/s:lastmod', NS):
                parsed = datetime.fromisoformat(date.text.replace('Z', '+00:00'))
                if parsed.replace(tzinfo=parsed.tzinfo or timezone.utc) > datetime.now(timezone.utc):
                    raise ValueError(f'future lastmod {date.text}')
            images = [node.text for node in tree.findall('s:url/i:image/i:loc', NS)]
            for image in set(images):
                if not image.startswith(SITE+'/'):
                    raise ValueError(f'noncanonical sitemap image {image}')
                chain, _ = request(base + image[len(SITE):], agent, 'GET')
                if len(chain) != 1 or chain[-1]['status'] != 200:
                    raise ValueError(f'inaccessible/redirecting sitemap image {image}')
                if not ' '.join(chain[-1]['headers'].get('content-type', [])).startswith('image/'):
                    raise ValueError(f'sitemap image is not an image: {image}')
            sitemap_summaries.append({'agent': agent, 'urls': urls, 'images': images, 'robots': robot_text, 'xml_valid': True})
        except Exception as exc:
            errors.append(f'sitemap/robots [{agent}]: {exc}')
    for record in records:
        if record['path'] == '/sitemap.xml' and 'chain' in record:
            media = ' '.join(record['chain'][-1]['headers'].get('content-type', []))
            if not re.search(r'(application|text)/xml', media):
                errors.append(f'{record["url"]}: invalid XML Content-Type {media}')
    output = ROOT / args.output
    output.parent.mkdir(parents=True, exist_ok=True)
    report = {'checked_at_utc': datetime.now(timezone.utc).isoformat(), 'base': base,
              'commit': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip(),
              'routes': routes, 'legal': legal, 'records': records, 'sitemap': sitemap_summaries,
              'errors': errors, 'warnings': sorted(set(warnings)),
              'limitations': ['UA spoofing does not verify real Googlebot access.', 'Public responses do not identify the Netlify deployed commit.']}
    output.write_text(json.dumps(report, indent=2), encoding='utf-8')
    for agent in UA:
        (output.parent / f'{output.stem}-{agent}-sitemap.xml').write_bytes(bodies[(base+'/sitemap.xml', agent, 'GET')])
        (output.parent / f'{output.stem}-{agent}-robots.txt').write_bytes(bodies[(base+'/robots.txt', agent, 'GET')])
    print(f'{len(records)} HTTP checks; {len(routes)} source indexable routes; {len(errors)} failures; {len(set(warnings))} warnings. Evidence: {output}')
    for message in errors + sorted(set(warnings)):
        print(message)
    return bool(errors)


if __name__ == '__main__':
    raise SystemExit(main())
