# SQUARE — Bird Net & Invisible Grill

Production website for SQUARE, built with Next.js 15 (App Router), React 19 and
TypeScript. No CSS framework — the design system lives in `app/globals.css`.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/                      Routes, metadata, sitemap and robots
components/
  layout/                 Header (sticky, dropdown, mobile drawer) and Footer
  home/                   One file per homepage section
  services/               ServicePage template shared by every /services/<slug>
  contact/ faq/ videos/   Page-specific interactive pieces
  ui/                     Reveal, Accordion, BeforeAfter, ProjectGallery,
                          VideoPlayer, CountUp, PageHero, CtaBand, map, icons
data/                     All editable content (see below)
lib/leads.ts              Lead validation + submission abstraction
scripts/build-media.mjs   Image pipeline (originals -> optimised WebP)
media-source/             Original client + generated assets, never shipped
```

## Editing content

Everything the client is likely to change is in `data/` — no copy is buried in
JSX:

| File | Contains |
| --- | --- |
| `data/site.ts` | Contact details, WhatsApp link builder, metrics, service areas, process, materials, why-choose, reviews |
| `data/services.ts` | The six services — each entry drives both the index and its own page |
| `data/projects.ts` | Project gallery and case-study content |
| `data/faqs.ts` | FAQ categories, plus the homepage selection |
| `data/videos.ts` | Client video clips and their poster frames |

Adding a service is a data entry in `data/services.ts` plus a one-line route
file under `app/services/<slug>/page.tsx`.

## Before launch — items marked `TODO(client)`

Search the repo for `TODO(client)` and confirm each one:

- **Metrics** (`data/site.ts`) — years, projects, customers, warranty period.
- **Reviews** (`data/site.ts`) — the rating, review count and testimonials are
  indicative copy and must be replaced with verified Google reviews.
- **Project details** (`data/projects.ts`) — imagery is real client work; the
  locations and narrative copy should be confirmed.
- **Social links** (`data/site.ts`) — currently point at platform home pages.
- **Legal pages** — `app/privacy-policy` and `app/terms` need a legal review.
- **Domain** — `https://www.squarebirdnet.com` is hard-coded in
  `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts`.

## Lead form

`lib/leads.ts` is the single integration point. With no endpoint configured the
form resolves locally so the UI can be demonstrated. To go live, implement a
server route against the client's CRM/SMTP provider and set:

```
NEXT_PUBLIC_LEAD_ENDPOINT=/api/leads
```

Credentials belong on the server only — never in this repo or in any
`NEXT_PUBLIC_` variable.

## Media pipeline

Original photographs, the logo and video poster frames live in `media-source/`,
outside `public/` so the heavy originals are never deployed. To regenerate the
optimised WebP derivatives in `public/images`:

```bash
node scripts/build-media.mjs
```

Client videos in `public/videos` are used as supplied and are never autoplayed —
posters are extracted stills, and an MP4 is only fetched when a visitor presses
play.
