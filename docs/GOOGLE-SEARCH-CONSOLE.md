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

## 0. Why the sitemap was not being picked up (October 2026)

The sitemap was submitted on 28 September 2026 and had not been processed.
An audit found these problems on the live site at that time:

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
3. **The 404 ("page not found") page told Google to index it** and claimed to
   be the homepage.
4. **Four days is short.** For a brand-new domain it is normal for Search
   Console to show "Couldn't fetch" or "Pending" for several days, and for
   pages to take one to four weeks to appear.

All of these are fixed in the code. **They only take effect once the updated
site is deployed to Netlify.** After deploying, work through section 1 and
then resubmit the sitemap (section 3).

> If you added the site as a **URL-prefix** property for
> `https://www.squarebirdnet.com/`, Google will never fetch the sitemap,
> because everything on `www` forwards to the non-www address. Use a
> **Domain** property instead (section 2), which covers both.

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

> A `google-site-verification` TXT record already exists on
> `squarebirdnet.com`, so the Domain property may already be set up and
> verified. Open [Search Console](https://search.google.com/search-console)
> and check the property list first. If `squarebirdnet.com` is listed with a
> globe icon, skip to section 3.

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
3. Under *Add a new sitemap* type `sitemap.xml` (Search Console fills in the
   rest) and click **Submit**.
4. If an older entry is listed — especially one with `www` in it — click it,
   then the three-dot menu → **Remove sitemap**, and submit the new one.

What to expect:

- **One sitemap is enough.** It lists every page that should be in Google. You
  do not need to submit pages one by one.
- **"Couldn't fetch", "Pending" or "Processing"** can show for several days on
  a new property, even when everything is correct. Do not keep resubmitting —
  check again after 3–5 days. If it still says *Couldn't fetch* after a week,
  open the sitemap address in a browser to confirm it loads.
- **"Success"** means Google read the file. It does not mean every page is
  indexed yet — that happens gradually over the following weeks.

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

Google finds every page through the sitemap, so this is optional. Requesting
the most important pages can speed up the first crawl. Search Console allows
roughly 10 requests per day, so use two small batches:

- **Day 1:** Home, Bird Netting, Invisible Grill, Services overview, Contact
- **Day 2:** Bird Spikes, Cricket Net, Projects, About

How to request: paste the address into the search bar at the very top of
Search Console → press Enter → wait for the result → click
**Request indexing**. Request each page **once**; repeating it does not help.

If the result says **"URL is not on Google"** right after launch, that is
expected — it means the page has not been crawled *yet*, not that something is
wrong. The thing to check is the **"Page fetch: Successful"** and
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
      not indexed* (both usually resolve with time).
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
- [ ] Confirm all 11 pages are indexed. For any that are not, use URL
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

- **New page added:** it is added to the sitemap automatically when the site
  is rebuilt. Optionally request indexing for it once.
- **Page renamed or removed:** ask the developer to add a permanent (301)
  redirect from the old address so existing Google results keep working.
- **Changing to `www` (or any other domain):** the canonical address is set in
  `netlify.toml` (`NEXT_PUBLIC_SITE_URL`) and must match Netlify's primary
  domain. Changing one without the other recreates the problem in section 0.
