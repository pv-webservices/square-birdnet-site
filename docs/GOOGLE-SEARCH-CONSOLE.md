# Google Search Console — squarebirdnet.com

A step-by-step guide for getting the SQUARE website into Google and keeping an
eye on it afterwards. No coding is needed for anything in this guide.

- **Website address (the "canonical" address):** `https://squarebirdnet.com`
  (without `www`). `https://www.squarebirdnet.com` automatically forwards to it.
- **Sitemap:** `https://squarebirdnet.com/sitemap.xml`
- **Domain registrar / DNS:** GoDaddy (the domain's nameservers are
  `ns19.domaincontrol.com` and `ns20.domaincontrol.com`, which are GoDaddy's).
- **Hosting:** Netlify.

---

## 0. Historical issues and current verification (October 2026)

The earlier audit recorded an unprocessed sitemap submitted on 28 September
2026. Its historical findings were:

1. **Every address Google was given was a redirect.** Netlify serves the site
   at `squarebirdnet.com` and forwards `www.squarebirdnet.com` there. But the
   sitemap, `robots.txt` and the "canonical" tag on every page all pointed to
   `www.squarebirdnet.com`. So Google was told "the real page is the www
   address", followed it, and was sent straight back to the non-www address.
   Google does not index addresses that redirect, and conflicting signals like
   this slow everything down.
2. **The sitemap listed pages that `robots.txt` blocked.** Privacy Policy and
   Terms were in the sitemap and also blocked in `robots.txt` — Search Console
   reports that as an error.
3. **The 404 inherited conflicting homepage metadata.** The old layout
   supplied an index directive and homepage canonical. Next.js can inject
   its own noindex on not-found responses, so archived source alone does not
   prove the old 404 was actually indexable.
These are historical findings documented by the earlier audit, not proof of
current production failures. On **9 October 2026 (IST)**, fresh public HTTP
checks found 11 directly accessible apex pages, consistent apex canonicals,
valid sitemap XML, permissive robots.txt, and correct HTTPS www redirects.
See [the technical audit and evidence](INDEXING-AUDIT-2026-10-09.md).

The exact reason for the reported Search Console sitemap fetch failure is
still unverified without that account's error details and live test. A
"Couldn't fetch" status should be investigated; it is not evidence by itself
that the current site is broken, or merely waiting. There is no guaranteed
indexing timetable.

Use the **Domain** property `squarebirdnet.com`, or a verified **URL-prefix**
property `https://squarebirdnet.com/`. The www URL-prefix property does not
cover the apex sitemap. This property scope limitation is different from an
HTTP fetch failure. Submit the exact apex sitemap URL directly, rather than
relying on a redirected www sitemap address.

---

## 1. Checks before submitting

Do these after every deployment that changes the site's structure. Each one
takes a minute in a normal web browser.

| Check | How | What you should see |
| --- | --- | --- |
| HTTPS works | Open `https://squarebirdnet.com` | The page loads with a padlock in the address bar |
| HTTP forwards to HTTPS | Type `http://squarebirdnet.com` | The address changes to `https://squarebirdnet.com` |
| www forwards to non-www | Type `www.squarebirdnet.com` | The address changes to `https://squarebirdnet.com` |
| robots.txt | Open `https://squarebirdnet.com/robots.txt` | `Allow: /` and `Sitemap: https://squarebirdnet.com/sitemap.xml`. **No** `www`, and no `Disallow` lines for Privacy or Terms |
| Sitemap | Open `https://squarebirdnet.com/sitemap.xml` | A list of 11 addresses, **all** starting `https://squarebirdnet.com/` (no `www`) |
| 404 page | Open `https://squarebirdnet.com/this-does-not-exist` | The branded "Page not found" page |
| Important pages | Click through Home, Services, each service, Projects, Videos, FAQ, Contact | Every page loads with images |

Seeing "This XML file does not appear to have any style information" when you
open the sitemap is **normal** — it is written for Google, not for people.

**Optional check (technical):** the canonical tag. On any page, right-click →
*View page source* → press Ctrl+F and search for `canonical`. The address shown
must start with `https://squarebirdnet.com` and match the page you are on.

---

## 2. Add the website as a Domain property

A **Domain** property covers every version of the address (`http`, `https`,
`www` and non-`www`) in one place. It is verified with a DNS record.

> Open [Search Console](https://search.google.com/search-console) and check
> the property list and ownership status first. An existing verification TXT
> record does not establish that your current account has verified access.
> If the Domain property is already verified for your account, skip to section 3.

1. Go to <https://search.google.com/search-console> and sign in with the
   Google account that should own the website data.
2. Click the property menu at the top-left → **Add property**.
3. Choose **Domain** (the left-hand box), type `squarebirdnet.com` — no
   `https://`, no `www` — and click **Continue**.
4. Google shows a TXT record that starts `google-site-verification=…`.
   Click **Copy**.
5. In a new tab, sign in to **GoDaddy** → **My Products** → next to
   `squarebirdnet.com` click **DNS** (or *Manage DNS*).
6. Click **Add New Record** and fill in:
   - **Type:** `TXT`
   - **Name / Host:** `@`
   - **Value:** paste the text you copied
   - **TTL:** leave the default (1 hour)
7. Click **Save**. Do not delete or edit the existing A and CNAME records —
   they connect the domain to Netlify.
8. Return to Search Console and click **Verify**. If it fails, wait 15–60
   minutes and click **Verify** again; DNS changes can take time to spread.

Keep the TXT record permanently. Removing it un-verifies the property.

---

## 3. Submit the sitemap

1. In Search Console, select the `squarebirdnet.com` property.
2. In the left menu click **Sitemaps**.
3. In a Domain property, enter the full URL
   `https://squarebirdnet.com/sitemap.xml`. In the apex HTTPS URL-prefix
   property, enter `sitemap.xml` if the interface already supplies that prefix.
4. If the exact canonical sitemap is already submitted, open its row and
   expand the fetch error details before considering another submission.
   An obsolete www entry can be removed from the report for clarity;
   removing it does not make Google forget the sitemap or its URLs.

What to expect:

- **One sitemap is enough.** It lists every page that should be in Google. You
  do not need to submit pages one by one.
- **"Couldn't fetch"** means Google's reported attempt failed. Open the row,
  record its exact URL, last read and expanded diagnostic details. Inspect
  that exact URL and run **Test live URL**; expand **Page availability** and
  check **Crawl allowed? Yes** and **Page fetch: Successful**. XML need not
  itself be indexable. If the current test fails, investigate the stated cause
  immediately, including Crawl Stats host availability and Manual Actions.
- **"Unknown"** can mean an unprocessed file or an unrecognized format.
  Public HTTP/XML checks help distinguish these possibilities but cannot
  establish Google's own fetch result.
- **"Success"** means Google fetched and processed the sitemap. It does not
  guarantee that every listed page will be crawled or indexed.
- After fixing a demonstrated fetch problem, resubmit once. If current tests
  succeed and the canonical sitemap is already submitted, monitor its next
  read rather than repeatedly deleting and resubmitting it.

---

## 4. Indexable pages (11)

These are all the pages that should appear in Google. The sitemap lists
exactly these.

**Main pages (6)**

| Page | Address |
| --- | --- |
| Home | https://squarebirdnet.com/ |
| About | https://squarebirdnet.com/about |
| Services overview | https://squarebirdnet.com/services |
| Projects | https://squarebirdnet.com/projects |
| Contact | https://squarebirdnet.com/contact |
| FAQ | https://squarebirdnet.com/faq |

**Service pages (4)**

| Page | Address |
| --- | --- |
| Bird Netting | https://squarebirdnet.com/services/bird-netting |
| Invisible Grill | https://squarebirdnet.com/services/invisible-grill |
| Bird Spikes | https://squarebirdnet.com/services/bird-spikes |
| Cricket Net | https://squarebirdnet.com/services/cricket-net |

**Media (1)**

| Page | Address |
| --- | --- |
| Videos | https://squarebirdnet.com/videos |

### Pages worth requesting manually

The sitemap helps Google discover pages; discovery and indexing are not
guaranteed. Optionally request the most important eligible pages once, within
the quota shown by your account:

- **Day 1:** Home, Bird Netting, Invisible Grill, Services overview, Contact
- **Day 2:** Bird Spikes, Cricket Net, Projects, About

How to request: paste the address into the search bar at the very top of
Search Console → press Enter → wait for the result → click
**Test live URL**. If the fetch succeeds and indexing is allowed, click
**Request indexing**. Request each page **once**; repeating it does not help.

If the result says **"URL is not on Google"** right after launch, that is
not a diagnosis: a page may be undiscovered, excluded, or crawled but not
indexed. Read the stated reason and last crawl date. Check **"Page fetch: Successful"** and
**"Indexing allowed? Yes"** lines when you click *Test live URL*.

---

## 5. Pages that should NOT be submitted

These pages are deliberately marked `noindex` ("don't show in Google, but do
follow the links on it"). Do not request indexing for them — Search Console
would only report them as "Excluded by 'noindex' tag", which is correct.

| Page | Why it is excluded |
| --- | --- |
| https://squarebirdnet.com/privacy-policy | Legal page. Useful to visitors via the footer, but no one searches for it, and it should not compete with service pages |
| https://squarebirdnet.com/terms | Same as above |
| Any non-existent address (404 page) | Error page — it returns a real "404 Not Found" status and must never be indexed |

Seeing these under **Pages → Why pages aren't indexed → Excluded by 'noindex'
tag** is the expected, healthy result. Likewise, `www.squarebirdnet.com` and
`http://` addresses appearing under **Page with redirect** is normal.

---

## 6. The first 4 weeks

Tick these off once a week. Most reports need a few days of data before they
show anything.

**Week 1**
- [ ] Sitemaps report shows **Success** for `sitemap.xml`.
- [ ] Priority pages requested (section 4, two batches).
- [ ] **Pages** report: note how many pages are *Indexed* vs *Not indexed*.
      Low numbers in the first week are normal.
- [ ] Set up **Bing Webmaster Tools** (<https://www.bing.com/webmasters>):
      choose **Import from Google Search Console** — it copies the site and
      sitemap across in a few clicks. Bing also powers several other search
      engines.

**Week 2**
- [ ] **Pages** report: open *Why pages aren't indexed*. Anything other than
      *Excluded by 'noindex'* and *Page with redirect* is worth a look —
      for example *Crawled – currently not indexed* or *Discovered – currently
      not indexed*. Read the reason, live-test the page, and assess content and
      Google's selected canonical rather than assuming time will resolve it.
- [ ] **Enhancements** (left menu, below *Experience*): check *Breadcrumbs*
      and *FAQ* for errors. The site publishes breadcrumbs on every inner page
      and FAQ data on the FAQ and service pages.
- [ ] **Google Business Profile:** for a local service business this is often
      more valuable than the website itself in search results. Make sure the
      profile exists, its phone numbers match the website exactly
      (+91 91044 16804 / +91 62076 09077), and its website link is
      `https://squarebirdnet.com` (no `www`).

**Week 3**
- [ ] **Performance → Search results:** check *Total impressions* and
      *Queries*. Expect very small numbers at first; the trend matters more.
- [ ] Review indexing status for all 11 pages; full indexing is not guaranteed. For any that are not, use URL
      Inspection → *Test live URL* to confirm the page fetches successfully.

**Week 4**
- [ ] **Core Web Vitals** (under *Experience*): this report only appears once
      Google has enough real-visitor data, which can take a month or more for a
      new site. "Not enough data" is normal.
- [ ] **HTTPS** report (under *Experience*): every page should be served over
      HTTPS.
- [ ] Review the Bing Webmaster Tools *Site Explorer* for crawl errors.

**After that — monthly**
- Glance at *Pages* and *Performance*. Search Console also emails the owner
  when a new problem appears, so make sure that email address is monitored.

---

## 7. When the website changes

- **New page added:** update `app/sitemap.ts` for a static page, or
  `data/services.ts` and the matching route for a service. Rebuild and run
  the audits; adding a route alone does not automatically add it to the sitemap.
- **Page renamed or removed:** ask the developer to add a permanent (301)
  redirect from the old address so existing Google results keep working.
- **Changing to `www` (or any other domain):** the canonical address is set in
  `netlify.toml` (`NEXT_PUBLIC_SITE_URL`) and must match Netlify's primary
  domain. Changing one without the other recreates the problem in section 0.

## 8. Diagnostics and regression checks

- Under **Settings → Crawl stats**, check host status and DNS resolution,
  server connectivity, robots.txt fetches, response codes and crawl dates.
- Review **Security & Manual Actions → Manual actions** and **Security issues**.
  These reports were not available to the public HTTP audit.
- For each of the five old www URLs, compare the reported last crawl with the
  latest live test. **Page with redirect** is expected; **Redirect error** is
  a failed attempt and should be investigated if it persists on fresh crawls.
  Do not request indexing for www redirects.
- Inspect canonical apex pages and compare **User-declared canonical** and
  **Google-selected canonical** in the indexed report. A live fetch is not
  confirmation that Google has indexed the page or chosen that canonical.
- Run `npm run typecheck`, `npm run build`, then `npm run audit:seo`.
  To audit live content: set `AUDIT_BASE_URL=https://squarebirdnet.com` and
  run `npm run audit:seo`.
- With Python 3 and curl available, run
  `python scripts/audit-crawlability.py` for production host/redirect, XML,
  source-route, robots, header, canonical, image and 404 checks. JSON evidence
  is saved under `docs/evidence/`. For local checks, start the production
  server and pass `--base http://localhost:3107 --output docs/evidence/crawlability-local.json`.
- `scripts/audit-navigation.playwright.js` is a function for Playwright MCP's
  `browser_run_code_unsafe` filename input. It verifies desktop/mobile
  navigation on production and the local production server on port 3107.

Official references: [property coverage](https://support.google.com/webmasters/answer/34592?hl=en),
[sitemap diagnostics](https://support.google.com/webmasters/answer/7451001),
[URL Inspection](https://support.google.com/webmasters/answer/12482179?hl=en),
and [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
