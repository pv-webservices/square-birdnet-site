# SQUARE technical indexing audit — 9 October 2026 (IST)

**Outcome: No active technical fault reproduced; Google processing or indexing remains pending.**

The public production site is technically crawlable and consistently points to
`https://squarebirdnet.com`. The reported five HTTPS www redirect failures and
sitemap fetch failure were not reproduced. Google's current fetch, selected
canonical and indexing status remain unverified because the connected accounts
do not have access to the requested Search Console property. This does not
establish that Google's only remaining issue is processing time.

## A. Root Cause Analysis

### Historical source defects, already corrected by the published October 2 release

| Responsible files | Malfunction and evidence | Crawling/indexing impact | Confidence |
| --- | --- | --- | --- |
| `app/sitemap.ts`, `app/robots.ts`, `app/layout.tsx` at `2296ffc` | `git show 2296ffc:...` confirms hardcoded www sitemap URLs, www sitemap directive, www metadataBase and schema URLs. The layout also supplied a homepage canonical to descendants. Current files and live HTML consistently use apex URLs. | Conflicting domain and per-page canonical signals; sitemap supplied alternatives rather than the intended apex URLs. | High for archived source and current correction; historical live behavior is documented, not newly reproduced. |
| `app/sitemap.ts`, `app/robots.ts` at `2296ffc` | Legal pages were listed in the sitemap while explicitly disallowed in robots. They are now crawlable, noindex, absent from the sitemap and without canonical tags. | Prevented reading legal-page indexing directives and supplied URLs not intended for indexing. Does not prove why Google failed to fetch the whole sitemap. | High. |
| Old `app/layout.tsx`, `app/not-found.tsx` | The not-found component had no metadata override while the layout supplied homepage canonical/index metadata. The current 404 returns HTTP 404, noindex and no canonical. | Conflicting signals on missing pages. Next.js may inject noindex itself, so old source does not establish actual historical 404 indexability. | High for inherited source conflict and current behavior; historical runtime unavailable. |
| Old `app/sitemap.ts` | `lastModified = new Date()` advertised build time as every page's modification date. Current `lib/lastModified.ts` uses Git history and omits dates when unavailable. | Unreliable optional modification hints, not a demonstrated fetch blocker. | High. |

The reported September 27 last crawl predates the October 2 correction. This
supports a historical explanation for the redirect report, but does not prove
what Google currently sees. The October 6 failed sitemap submission occurred
after that release and therefore still needs its own Google-side diagnosis.

### Confirmed current documentation faults

`docs/GOOGLE-SEARCH-CONSOLE.md` incorrectly equated a www property with Google
being unable ever to fetch a sitemap, instructed a relative sitemap submission
under a Domain property, implied fixed indexing timelines and a fixed daily
request quota, and claimed every new route automatically entered the sitemap.
These were corrected. The impact is misleading owner actions and diagnosis,
not a production HTTP blocker. Confidence: high, based on source and the
official references linked below.

### Current observations that do not explain the reported failures

- **HTTP www uses two hops:** `http://www → https://www → https://apex`, both
  301, same path preserved, then 200. The single-hop comment in `netlify.toml`
  does not match observed HTTP behavior. HTTPS www uses one 301. No loop,
  broken destination or temporary redirect appeared. The exact platform rule
  precedence producing the HTTP extra hop was not established; no rule changed.
- **Netlify alias is directly accessible:** sampled alias pages return 200
  with apex canonicals; its robots and sitemap reference apex. This is an
  alternate host to monitor, not a demonstrated apex indexing failure.
- **Cache age is substantial:** sitemap responses use Netlify/Next.js cache
  layers, `Cache-Control: public,max-age=0,must-revalidate` and an October 2
  `X-Nextjs-Date`. The served sitemap matches the current local build exactly;
  cache age alone is not evidence of stale or broken XML. No purge was needed.
- No 403, 429 or 5xx response, login challenge, unexpected noindex header or
  user-agent-specific failure appeared on the tested indexable routes. This
  is a point-in-time test, not proof of every Google request or CDN location.

## B. Changes Implemented

| File | Purpose |
| --- | --- |
| `docs/GOOGLE-SEARCH-CONSOLE.md` | Correct property scope, submission instructions, error diagnosis, indexing expectations and future sitemap maintenance. Add actionable live-test, Crawl Stats, manual-action and security checks. |
| `scripts/audit-crawlability.py` | New read-only checker using Python standard-library XML/HTML/robots parsers and curl. Checks all four hosts, full chains, GET/HEAD, two user agents, source routes versus sitemap, canonical/noindex headers, robots permissions, dates, images and 404s. Saves actionable failures and full response headers. No dependency installation. |
| `scripts/audit-navigation.playwright.js` | Repeatable Playwright MCP function checking all 11 navigation destinations at desktop/mobile sizes, expanding mobile services, following About, checking its canonical and drawer closure on production and localhost. |
| `docs/INDEXING-AUDIT-2026-10-09.md` | This report, release identity, diagnosis limits and owner handoff. |
| `docs/evidence/crawlability-{production,local}.json` | Complete HTTP evidence, every redirect response's headers, body hashes, metadata summaries and validation results. |
| `docs/evidence/crawlability-{production,local}-{browser,googlebot}-{sitemap.xml,robots.txt}` | Exact fetched sitemap and robots bodies. |
| `docs/evidence/http-matrix.md` | All 146 production HTTP checks rendered as an individual-URL matrix. |
| `docs/evidence/dns.json`, `tls.json`, `platform-verification.json` | DNS/TLS evidence and read-only Netlify deployment/configuration and Search Console access results. |
| `docs/evidence/navigation.json`, `browser-console.log` | Browser verification summary and one localhost image-preload warning during responsive navigation. |

No application, visual design, contact-form, sitemap-generation, metadata,
DNS or redirect behavior was changed. No commit, push or deployment was made.

## C. Test Results

### Production HTTP and redirect matrix

[Full individual-URL, method and user-agent matrix](evidence/http-matrix.md)
and [raw headers and response evidence](evidence/crawlability-production.json).

For every path below, both browser-like and Googlebot-like GET requests passed:

| Path | HTTPS apex | HTTP apex | HTTPS www | HTTP www | Apex canonical/result |
| --- | --- | --- | --- | --- | --- |
| `/` | 200 | 301 → apex 200 | 301 → apex 200 | 301 → HTTPS www → 301 → apex 200 | Self; PASS |
| `/about` | 200 | 301 → apex 200 | 301 → apex 200 | 301 → HTTPS www → 301 → apex 200 | Self; PASS |
| `/services` | 200 | 301 → apex 200 | 301 → apex 200 | 301 → HTTPS www → 301 → apex 200 | Self; PASS |
| `/projects` | 200 | 301 → apex 200 | 301 → apex 200 | 301 → HTTPS www → 301 → apex 200 | Self; PASS |
| `/contact` | 200 | 301 → apex 200 | 301 → apex 200 | 301 → HTTPS www → 301 → apex 200 | Self; PASS |
| `/faq` | 200 | 301 → apex 200 | 301 → apex 200 | 301 → HTTPS www → 301 → apex 200 | Self; PASS |
| `/videos` | 200 | 301 → apex 200 | 301 → apex 200 | 301 → HTTPS www → 301 → apex 200 | Self; PASS |
| `/services/bird-netting` | 200 | 301 → apex 200 | 301 → apex 200 | 301 → HTTPS www → 301 → apex 200 | Self; PASS |
| `/services/invisible-grill` | 200 | 301 → apex 200 | 301 → apex 200 | 301 → HTTPS www → 301 → apex 200 | Self; PASS |
| `/services/bird-spikes` | 200 | 301 → apex 200 | 301 → apex 200 | 301 → HTTPS www → 301 → apex 200 | Self; PASS |
| `/services/cricket-net` | 200 | 301 → apex 200 | 301 → apex 200 | 301 → HTTPS www → 301 → apex 200 | Self; PASS |
| `/robots.txt` | 200 | 301 → apex 200 | 301 → apex 200 | 301 → HTTPS www → 301 → apex 200 | Crawl allowed; apex sitemap; PASS |
| `/sitemap.xml` | 200 | 301 → apex 200 | 301 → apex 200 | 301 → HTTPS www → 301 → apex 200 | Valid UTF-8 application/xml; PASS |

Each redirect preserves the listed path. Sitemap and robots checks require no
cookies or JavaScript. HEAD agrees with GET for `/`, `/about`, robots and
sitemap on all four hosts and both user agents. Canonical apex URLs never
redirected. The canonical root serialized without a trailing slash is URL-equivalent.

Legal pages `/privacy-policy` and `/terms`: 200, noindex/follow, no canonical,
absent from sitemap, allowed to crawl. Unknown route:
`/this-page-should-not-exist-404-check`: 404, noindex, no canonical. PASS.

Sitemap: 11 unique URLs match all current source routes intended for indexing.
Standard XML parser accepts its namespace and body. Nine image entries are
accessible with direct 200 and image content types. Browser and bot-like
responses contain the same expected URL set. All dates are valid, not future,
and match the October 2 Git commit that touched shared `data/site.ts`. If Git
history is missing, the existing helper returns undefined and Next.js omits
optional lastmod. No public sitemap/robots override, middleware, competing
`_redirects`/`_headers` file or SPA fallback was found.

Live and local sitemap bytes match, SHA256:
`93d6683e7a908ab45183f5f2ce5d633773082587ffd566ddd15d1ea77f6b0475`.

### Automated project and browser checks

| Check | Result |
| --- | --- |
| `npm run typecheck` | PASS |
| `npm run build` (installed Next.js 15.5.25) | PASS; 20 prerendered entries, including metadata routes |
| `npm run audit:seo` | PASS: 13 pages, 11 indexable, 2 legal noindex, 188 anchors, 63 assets; zero errors/warnings |
| Same audit with `AUDIT_BASE_URL=https://squarebirdnet.com` | PASS with the same counts; zero errors/warnings |
| `python scripts/audit-crawlability.py` | PASS: 146 production HTTP cases; zero failures, 38 informational warnings (34 method/UA instances of HTTP www's two hops plus 4 directly accessible alias endpoints) |
| Checker against local production server | PASS: 40 HTTP cases, zero failures/warnings |
| Playwright navigation function | PASS: production/local × 1440/390px; 11 destinations each, About navigation/canonical and mobile drawer closure |
| `git diff --check` | PASS |

`npm run lint` was attempted after confirming this Next.js CLI still supports
it. It exited 1 at the ESLint configuration prompt: the repository has no
ESLint configuration/dependency. It did not perform linting. No setup choice,
codemod or dependency installation was made. This is an existing tooling gap,
not a crawlability failure; typecheck, build and both SEO audits passed.

The existing SEO audit checks unique titles/descriptions, heading hierarchy,
image alt attributes, social metadata, JSON-LD JSON syntax, internal HTML links
and 404 metadata. Raw GET HTML has meaningful headings/content without executing
JavaScript. This verifies technical signals, not Google's content-quality
judgment, rich-result eligibility or its own soft-404 classification.

## D. Deployment Verification

- Repository: `https://github.com/pv-webservices/square-birdnet-site`.
- Local `main`, remote HEAD and the published Netlify commit:
  `dda7fcd006377af8d3b42dd31037232ea7fed16c` (`sitemap added`).
- [Currently published production deploy](https://app.netlify.com/projects/square-birdnet-site/deploys/6abfac355a2b125a9ff0bade):
  `6abfac355a2b125a9ff0bade`, built October 2, 18:35:58–18:36:44 IST.
- Netlify UI confirms linked repository, production branch `main`, active build,
  public production visibility, Next.js Runtime, `npm run build`, `.next` publish
  directory and `/` base. Deploy summary: 5 redirect rules, 1 header rule and
  1 function deployed; build/deploy/post-processing completed.
- Domain UI confirms apex primary, automatic www redirect, HTTPS for both.
  Web security UI shows WAF disabled, no active firewall or rate-limit rules.
- Fresh full production matrix completed at **00:19:33 IST on October 9**
  (UTC timestamp stored in the JSON). Additional real-browser checks passed.
  This is verification of the existing production release; no new release was needed.
- DNS: apex A `75.2.60.5`; www CNAME
  `square-birdnet-site.netlify.app`; NS `ns19.domaincontrol.com` and
  `ns20.domaincontrol.com`. Apex AAAA query returned no AAAA answer, not a
  conflicting IPv6 target. These public observations match the supplied setup.
- Verified TLS 1.3 connections to apex, www and alias. The Let's Encrypt apex
  certificate covers both custom names and expires December 25, 2026 UTC.
  Certificate validation was enabled. See [TLS evidence](evidence/tls.json).

## E. Google Search Console Actions

1. Sign in with the verified property owner or an account granted access. The
   connected default and hosting-owner sessions were denied access to
   `sc-domain:squarebirdnet.com`; no verification or submissions were changed.
2. Select Domain property `squarebirdnet.com` to cover HTTP/HTTPS and www/apex.
   A verified URL-prefix property `https://squarebirdnet.com/` is also suitable
   for apex pages. A www-only property does not cover apex URLs.
3. Inspect `https://squarebirdnet.com/`; read the recorded index verdict,
   exclusion reason, last crawl, user-declared and Google-selected canonical.
   Run **Test live URL** and check successful fetching, crawl allowed and
   indexing allowed. Repeat for `/about`, `/projects`, `/contact`, `/faq` and
   priority service pages. Request indexing once for eligible important pages.
4. In **Sitemaps**, open the existing `https://squarebirdnet.com/sitemap.xml`
   row. Record submitted URL, last read and expanded error details. Inspect
   that exact XML URL and run its live test; check **Page availability** for
   crawl permission and fetch success, not whether the XML itself is indexed.
5. If it was submitted only in the wrong property, submit once under the
   appropriate property: full URL for Domain; `sitemap.xml` only when an apex
   URL-prefix interface already supplies the origin. If correctly submitted
   and fresh tests pass, monitor the next read. If a genuine fetch problem
   is identified and corrected, resubmit once. Avoid repeated deletion/submission.
6. Open **Pages → Redirect error**, compare the September 27 last crawl with
   fresh post-October-2 evidence and monitor the validation begun October 7.
   Live-test the five www examples as needed; their final apex pages should
   fetch. Do not ask Google to index www redirects. **Page with redirect** is
   expected; persistent **Redirect error** on fresh crawls needs investigation.
7. Under **Settings → Crawl stats**, inspect host availability, DNS, connection,
   robots fetch and response-code problems around the failed sitemap attempt.
8. Check **Manual actions** and **Security issues** for unresolved findings.
9. Track actual indexed URLs and selected canonicals. A successful live test or
   sitemap does not prove indexing. Preserve the error details if Google still
   cannot fetch despite healthy public tests, and investigate that mismatch.

## F. Remaining Uncertainties

- Private GSC fetch details, Crawl Stats, actual indexing count, selected
  canonical, Manual Actions and Security Issues were not accessible. The
  historical dates are supplied by the task, not independently read in GSC.
- A spoofed Googlebot UA is not a verified Googlebot IP or Google's rendering
  service. Real Google access and geographical/intermittent failures require
  GSC live testing and, if necessary, scoped verified-crawler logs.
- GoDaddy account records were not edited or inspected privately. Public DNS
  and TLS passed; email verification, DMARC and unrelated records were untouched.
- Netlify's aggregate dashboard error percentage does not identify a sitemap
  failure. It includes requests outside this test and intentional 404 checks;
  no request-specific historical cause was inferred from it. Historical
  function/CDN logs and exact HTTP www redirect precedence remain unreviewed.
- No guarantee of indexing or timetable is made. Eligibility passed in our
  tests; Google's final selection and content-quality decisions remain external.

## G. Final Outcome

**No active technical fault reproduced; Google processing or indexing remains pending.**

The older canonical/robots/sitemap defects were already corrected in the
published October 2 release and their current production behavior passes.
Documentation errors are corrected and regression tools/evidence are available.
There is no demonstrated application or DNS fix to deploy. Owner-side GSC
diagnostics are the outstanding step to determine why Google's reported fetch
failed and whether the canonical pages are now indexed.

Official references:
[Google property scope](https://support.google.com/webmasters/answer/34592?hl=en),
[sitemap error diagnostics](https://support.google.com/webmasters/answer/7451001),
[URL Inspection interpretation](https://support.google.com/webmasters/answer/12482179?hl=en),
[sitemap URL and lastmod guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap),
[Netlify Next.js runtime](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/).
