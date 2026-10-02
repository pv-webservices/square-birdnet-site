/**
 * Technical SEO audit for the production build.
 *
 * Starts `next start` on a free port (or audits AUDIT_BASE_URL if set), then
 * crawls every URL in the sitemap plus every internal link it finds, and checks:
 *
 *   - HTTP status of pages, internal links, #anchors, images and media
 *   - <title> and meta description: present, length, unique
 *   - exactly one <h1> and no skipped heading levels
 *   - canonical: self-referencing on indexable pages, absent on noindex pages
 *   - robots meta: "index, follow, max-image-preview:large" vs "noindex, follow"
 *   - Open Graph / Twitter tags, image alt text, JSON-LD validity
 *   - sitemap.xml matches the indexable pages; robots.txt references it
 *   - unknown URLs return a real 404 with noindex and no canonical
 *
 * Run after a build:  npm run build && npm run audit:seo
 * Exit code is 1 when any error is found; warnings do not fail the run.
 */
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import net from "node:net";
import path from "node:path";

const require = createRequire(import.meta.url);
const ROOT = process.cwd();
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://squarebirdnet.com").replace(/\/+$/, "");

const TITLE_MAX = 65;
const DESCRIPTION_MIN = 70;
const DESCRIPTION_MAX = 170;
const INDEX_ROBOTS = "index, follow, max-image-preview:large";
const REQUIRED_SOCIAL = [
  "og:title",
  "og:description",
  "og:url",
  "og:type",
  "og:site_name",
  "og:locale",
  "og:image",
  "og:image:width",
  "og:image:height",
  "og:image:alt",
  "twitter:card",
  "twitter:title",
  "twitter:description",
  "twitter:image",
];

const errors = [];
const warnings = [];
const error = (where, message) => errors.push(`${where}: ${message}`);
const warn = (where, message) => warnings.push(`${where}: ${message}`);

/* ------------------------------------------------------------ server -- */

function freePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
  });
}

async function startServer() {
  if (process.env.AUDIT_BASE_URL) return { base: process.env.AUDIT_BASE_URL.replace(/\/+$/, ""), stop: () => {} };
  if (!existsSync(path.join(ROOT, ".next", "BUILD_ID"))) {
    console.error("No production build found. Run `npm run build` first.");
    process.exit(1);
  }
  const port = await freePort();
  const nextBin = require.resolve("next/dist/bin/next");
  const child = spawn(process.execPath, [nextBin, "start", "-p", String(port)], { cwd: ROOT, stdio: "ignore" });
  const base = `http://localhost:${port}`;
  for (let attempt = 0; attempt < 60; attempt++) {
    try {
      await fetch(`${base}/robots.txt`);
      return { base, stop: () => child.kill() };
    } catch {
      await new Promise((r) => setTimeout(r, 500));
    }
  }
  child.kill();
  throw new Error("next start did not respond within 30 seconds");
}

/* ------------------------------------------------------------ parsing -- */

const ENTITIES = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
const decode = (value) =>
  value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&([a-z]+);/gi, (match, name) => ENTITIES[name.toLowerCase()] ?? match);

function attributes(tag) {
  const attrs = {};
  for (const [, name, value] of tag.matchAll(/([a-zA-Z_:][\w:.-]*)="([^"]*)"/g)) attrs[name.toLowerCase()] = decode(value);
  return attrs;
}

const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((m) => attributes(m[0]));

function parsePage(raw) {
  const jsonLd = [...raw.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  // Drop script bodies (RSC payload, JSON-LD) so only rendered markup is inspected.
  const html = raw.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  const head = html.split(/<body\b/i)[0];

  const meta = tags(head, "meta");
  const byName = (key) => meta.filter((m) => m.name === key || m.property === key).map((m) => m.content ?? "");
  const titles = [...head.matchAll(/<title>([\s\S]*?)<\/title>/g)].map((m) => decode(m[1]).trim());
  const canonicals = tags(head, "link").filter((l) => l.rel === "canonical").map((l) => l.href);
  const headings = [...html.matchAll(/<h([1-6])\b/gi)].map((m) => Number(m[1]));
  const ids = new Set(tags(html, "[a-z0-9]+").map((a) => a.id).filter(Boolean));
  const links = tags(html, "a").map((a) => a.href).filter(Boolean);
  const images = tags(html, "img");
  const media = [...tags(html, "video"), ...tags(html, "source")].flatMap((v) => [v.src, v.poster]).filter(Boolean);
  const icons = tags(head, "link").filter((l) => /icon|manifest/.test(l.rel ?? "")).map((l) => l.href);

  return { titles, byName, canonicals, headings, ids, links, images, media, icons, jsonLd };
}

/* ------------------------------------------------------------ crawler -- */

async function main() {
  const { base, stop } = await startServer();
  const toLocal = (url) => (url.startsWith(SITE_URL) ? url.slice(SITE_URL.length) || "/" : url);
  const statusCache = new Map();

  async function status(pathname) {
    if (!statusCache.has(pathname)) {
      statusCache.set(
        pathname,
        fetch(`${base}${pathname}`, { redirect: "manual" })
          .then((r) => r.status)
          .catch(() => 0),
      );
    }
    return statusCache.get(pathname);
  }

  try {
    // robots.txt
    const robots = await (await fetch(`${base}/robots.txt`)).text();
    if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) error("robots.txt", `missing "Sitemap: ${SITE_URL}/sitemap.xml"`);
    if (/^Disallow:\s*\/\s*$/m.test(robots)) error("robots.txt", "blocks the entire site");
    if (/^Disallow:\s*\/_next/m.test(robots)) error("robots.txt", "blocks /_next (CSS/JS)");

    // sitemap.xml
    const sitemapResponse = await fetch(`${base}/sitemap.xml`);
    const sitemap = await sitemapResponse.text();
    if (!sitemapResponse.ok || !sitemap.includes("<urlset")) error("sitemap.xml", "missing or not a <urlset>");
    const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1]));
    const sitemapPages = new Set();
    for (const url of sitemapUrls) {
      if (!url.startsWith(`${SITE_URL}/`)) error("sitemap.xml", `${url} is not on ${SITE_URL}`);
      else sitemapPages.add(toLocal(url));
    }
    for (const lastmod of sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) {
      if (Number.isNaN(Date.parse(lastmod[1]))) error("sitemap.xml", `invalid lastmod ${lastmod[1]}`);
    }

    // Crawl
    const queue = ["/", ...sitemapPages];
    const seen = new Set();
    const pages = new Map();
    const pendingAnchors = [];
    const assets = new Map(); // local path -> first page referencing it

    while (queue.length) {
      const pathname = queue.shift();
      if (seen.has(pathname)) continue;
      seen.add(pathname);

      const response = await fetch(`${base}${pathname}`, { redirect: "manual" });
      if (response.status !== 200) {
        error(pathname, `returned HTTP ${response.status}`);
        continue;
      }
      if (!(response.headers.get("content-type") ?? "").includes("text/html")) continue;
      const page = parsePage(await response.text());
      pages.set(pathname, page);

      for (const href of page.links) {
        if (/^(mailto:|tel:|https?:)/.test(href) && !href.startsWith(SITE_URL)) continue;
        const [target, hash] = toLocal(href).split("#");
        const targetPath = target || pathname;
        if (!targetPath.startsWith("/")) continue;
        if (targetPath.endsWith(".xml") || targetPath.endsWith(".txt")) {
          if ((await status(targetPath)) !== 200) error(pathname, `link to ${href} is broken`);
          continue;
        }
        if (hash) pendingAnchors.push({ from: pathname, href, targetPath, hash });
        if (!seen.has(targetPath)) queue.push(targetPath);
      }

      for (const img of page.images) {
        if (!("alt" in img)) error(pathname, `<img src="${img.src}"> has no alt attribute`);
        if (img.src && !img.src.startsWith("data:")) assets.set(img.src, assets.get(img.src) ?? pathname);
      }
      for (const src of [...page.media, ...page.icons]) assets.set(src, assets.get(src) ?? pathname);
      const ogImage = page.byName("og:image")[0];
      if (ogImage) assets.set(toLocal(ogImage), assets.get(toLocal(ogImage)) ?? pathname);
    }

    // Per-page checks
    const titleOwners = new Map();
    const descriptionOwners = new Map();
    const indexable = [];

    for (const [pathname, page] of pages) {
      const robotsMeta = page.byName("robots");
      const noindex = robotsMeta.some((r) => r.includes("noindex"));
      const expectedCanonical = pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
      // Next.js prints the root canonical without its trailing slash; both forms are the same URL.
      const matchesCanonical = (url) => url === expectedCanonical || (pathname === "/" && url === SITE_URL);

      if (robotsMeta.length !== 1) error(pathname, `${robotsMeta.length} robots meta tags (${robotsMeta.join(" | ")})`);
      if (noindex) {
        if (robotsMeta[0] !== "noindex, follow") error(pathname, `noindex page robots is "${robotsMeta[0]}"`);
        if (page.canonicals.length) error(pathname, "noindex page must not declare a canonical");
        if (sitemapPages.has(pathname)) error(pathname, "noindex page is listed in the sitemap");
      } else {
        indexable.push(pathname);
        if (robotsMeta[0] !== INDEX_ROBOTS) error(pathname, `robots is "${robotsMeta[0]}", expected "${INDEX_ROBOTS}"`);
        if (page.canonicals.length !== 1) error(pathname, `${page.canonicals.length} canonical tags`);
        else if (!matchesCanonical(page.canonicals[0])) error(pathname, `canonical ${page.canonicals[0]} ≠ ${expectedCanonical}`);
        if (!sitemapPages.has(pathname)) error(pathname, "indexable page missing from the sitemap");
        const ogUrl = page.byName("og:url")[0];
        if (ogUrl && !matchesCanonical(ogUrl)) error(pathname, `og:url ${ogUrl} ≠ canonical`);
        for (const key of REQUIRED_SOCIAL) if (!page.byName(key)[0]) error(pathname, `missing ${key}`);
      }

      const [title] = page.titles;
      if (page.titles.length !== 1) error(pathname, `${page.titles.length} <title> tags`);
      else if (!noindex) {
        if (title.length > TITLE_MAX) warn(pathname, `title is ${title.length} chars (> ${TITLE_MAX}): "${title}"`);
        titleOwners.set(title, [...(titleOwners.get(title) ?? []), pathname]);
      }

      const descriptions = page.byName("description");
      if (descriptions.length !== 1) error(pathname, `${descriptions.length} meta descriptions`);
      else if (!noindex) {
        const length = descriptions[0].length;
        if (length < DESCRIPTION_MIN || length > DESCRIPTION_MAX) warn(pathname, `description is ${length} chars`);
        descriptionOwners.set(descriptions[0], [...(descriptionOwners.get(descriptions[0]) ?? []), pathname]);
      }

      const h1s = page.headings.filter((h) => h === 1).length;
      if (h1s !== 1) error(pathname, `${h1s} <h1> elements`);
      page.headings.reduce((previous, level) => {
        if (level > previous + 1) error(pathname, `heading level skips from h${previous} to h${level}`);
        return level;
      }, 1);

      for (const block of page.jsonLd) {
        try {
          JSON.parse(block);
        } catch (e) {
          error(pathname, `invalid JSON-LD: ${e.message}`);
        }
      }
      if (/localhost|127\.0\.0\.1/.test(page.canonicals.join(" ") + page.byName("og:url").join(" "))) {
        error(pathname, "development URL in canonical/og:url");
      }
    }

    for (const [title, owners] of titleOwners) if (owners.length > 1) error("titles", `"${title}" shared by ${owners.join(", ")}`);
    for (const [text, owners] of descriptionOwners) {
      if (owners.length > 1) error("descriptions", `"${text.slice(0, 50)}…" shared by ${owners.join(", ")}`);
    }

    // Anchors
    for (const { from, href, targetPath, hash } of pendingAnchors) {
      const target = pages.get(targetPath);
      if (target && !target.ids.has(decodeURIComponent(hash))) error(from, `anchor ${href} has no matching id`);
    }

    // Assets
    for (const [src, from] of assets) {
      const local = toLocal(src);
      if (!local.startsWith("/")) continue;
      if (local.startsWith("/_next/image")) {
        const original = new URL(local, base).searchParams.get("url") ?? "";
        if (!existsSync(path.join(ROOT, "public", decodeURIComponent(original)))) error(from, `image ${original} is missing from public/`);
        continue;
      }
      const code = await status(local);
      if (code !== 200) error(from, `asset ${local} returned HTTP ${code}`);
    }

    // 404 handling
    const missingPath = "/this-page-should-not-exist-404-check";
    const missing = await fetch(`${base}${missingPath}`);
    if (missing.status !== 404) error("404", `unknown URL returned HTTP ${missing.status}`);
    const missingPage = parsePage(await missing.text());
    // Next.js adds its own <meta name="robots" content="noindex"> to not-found
    // responses; alongside ours that is consistent (noindex, links followed).
    const missingRobots = missingPage.byName("robots");
    if (!missingRobots.includes("noindex, follow") || missingRobots.some((r) => !r.includes("noindex") || r.includes("nofollow"))) {
      error("404", `robots is "${missingRobots.join(" | ")}", expected "noindex, follow"`);
    }
    if (missingPage.canonicals.length) error("404", "404 page declares a canonical");

    // Report
    const noindexPages = [...pages.keys()].filter((p) => !indexable.includes(p));
    console.log(`\nSEO audit — ${SITE_URL} (served from ${base})`);
    console.log(`  Pages crawled:      ${pages.size}`);
    console.log(`  Indexable pages:    ${indexable.length}`);
    console.log(`  noindex pages:      ${noindexPages.length} (${noindexPages.join(", ") || "none"})`);
    console.log(`  Sitemap URLs:       ${sitemapUrls.length}`);
    console.log(`  Internal anchors:   ${pendingAnchors.length} checked`);
    console.log(`  Assets checked:     ${assets.size}`);
    for (const line of warnings) console.log(`  WARN  ${line}`);
    for (const line of errors) console.log(`  ERROR ${line}`);
    console.log(errors.length ? `\n✗ ${errors.length} error(s), ${warnings.length} warning(s)` : `\n✓ No errors (${warnings.length} warning(s))`);
    process.exitCode = errors.length ? 1 : 0;
  } finally {
    stop();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
