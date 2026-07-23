# AVEN MED — Technical SEO Audit & Implementation

**Site:** https://avenmedil.com · **Stack:** Vite + React SPA, hash routing, Netlify
**Date:** 2026-07-23

This document is both the audit and the record of what was implemented. Items marked
**[DONE]** shipped in this commit. Items marked **[ACTION]** require a decision or a change
that isn't safe to auto-apply blind on a live launch site (mainly the routing switch).

---

## ⚠️ The one finding that dominates everything: hash routing (CRITICAL #1)

The app renders every page client-side and navigates with **hash routing** (`#/about`,
`#/aesthetics`, …). Search engines treat everything after `#` as the *same* URL, so today
**only the homepage (`/`) is a real, indexable URL.** All other pages are invisible to Google
as distinct pages, and a sitemap of clean URLs (`/about`, `/aesthetics`, …) currently 404s.

Almost every other SEO improvement (per-page indexing, per-page titles/canonicals in the raw
HTML, the sitemap, per-page breadcrumbs) only reaches full value **after** this is fixed.

**The fix (needs implementation + verification, not a blind push):**
1. Switch `useHashRoute` (in `src/app.jsx`) to the History API (`pushState` + `popstate`, read
   `location.pathname`).
2. Update internal links from `href="#/x"` → `href="/x"` (≈22 links across pages + header).
3. Add a Netlify SPA fallback so deep links/refreshes resolve: `public/_redirects` →
   `/*    /index.html    200`.
4. Add a one-time backward-compat redirect: on load, if `location.hash` starts with `#/`,
   `history.replaceState` to the clean path (keeps old links/bookmarks/Google-cached URLs working).
5. Handle the two special cases: `Service.jsx` parses the route for its slug, and `Notes.jsx`
   uses in-page `#anchor` links — both need checking against the new scheme.
6. Then submit `sitemap.xml` to Search Console.

**Why it wasn't auto-applied:** it touches the router + ~22 links + Netlify config + two edge
cases, and there is no local Node/build here to test it. A subtle bug would break navigation for
live visitors right at launch. It should ship as its own change, verified on a Netlify deploy
preview (click every nav item + refresh on a deep link). Happy to do it on your go-ahead.

Everything below this line is either DONE or a smaller ACTION.

---

## 1. Search Engine Indexing
- **[DONE]** No `noindex` anywhere — confirmed clean. Added an explicit
  `robots: index, follow, max-image-preview:large` meta.
- **[DONE]** `public/robots.txt` created — allows all crawlers, points to the sitemap.
- **[DONE]** `public/sitemap.xml` created with all 8 core pages (gated — see Critical #1; don't
  submit until routing ships).
- **[DONE]** Canonical added (`https://avenmedil.com/`), and kept accurate per route by the new
  dynamic head manager.

## 2. Metadata
- **[DONE]** Homepage `<title>` + meta description rewritten for local intent
  ("Medical Spa & Family Medicine in Orland Park, IL").
- **[DONE]** Full **Open Graph** + **Twitter Card** (`summary_large_image`) tags added, with a
  purpose-built **1200×630 share image** (`/assets/og-image.jpg`).
- **[DONE]** Per-route titles/descriptions/canonical/OG via `src/seo.js` (`applySeo`), wired into
  `app.jsx`. Fully effective once routing ships; already improves the browser tab + social scraping.
- **[DONE]** H1: fixed the **duplicate `<h1>`** on About (2 → 1; second became `<h2>`, no visual change).
- **[ACTION]** Raw per-page titles in the initial HTML require the routing switch (SPA limitation).

## 3. Structured Data (JSON-LD) — validated ✓
- **[DONE]** Added a `@graph` in `index.html`: **WebSite**, **MedicalClinic + MedicalBusiness**
  (with LocalBusiness properties: NAP, geo, price range, area served, services), **Person**
  (Alaa Mashal, FNP-BC — founder/practitioner), **FAQPage** (5 Q&As), **BreadcrumbList**.
- Note on schema types: schema.org's `Physician` type actually models a *practice/office*, not a
  person — so the practitioner is correctly modeled as `Person` (founder/employee of the
  `MedicalClinic`). This is the accurate, valid representation of "MedicalClinic + Physician".
- **[ACTION]** Per-page `FAQPage`/`BreadcrumbList` (e.g. the Memberships & Assessment FAQs, page
  breadcrumbs) should be injected per route after the routing switch.

## 4. Local SEO
- **[DONE]** `geo.region`, `geo.placename`, `geo.position`, `ICBM` meta tags.
- **[DONE]** NAP baked into schema + kept consistent site-wide (14470 LaGrange Rd, Ste 101, Orland
  Park, IL 60462 · (708) 734-6902 · info@avenmedil.com).
- **[DONE]** Target keywords woven into titles/descriptions/schema: *Aven Med, Orland Park IL,
  medical spa, Botox, dermal fillers, weight loss, family medicine, Sculptra, microneedling, IV therapy.*
- **[ACTION — verify]** The geo coordinates (41.6063, -87.8614) are an estimate — confirm they
  match your Google Business Profile pin exactly.
- **[ACTION — high value]** Claim/optimize **Google Business Profile** (same NAP), and add your
  **opening hours** (schema + GBP). Consider service landing pages once routing ships:
  `/botox-orland-park`, `/dermal-fillers-orland-park`, `/medical-weight-loss-orland-park`,
  `/family-medicine-orland-park` — these rank well for "[service] + [city]".

## 5. Performance
- **[DONE]** **Fonts: 11 families → 3.** index.html was loading Cormorant, Jost, JetBrains Mono
  **plus 8 unused families** (Italiana, Tenor Sans, Playfair, DM Serif, Outfit, Manrope, Karla,
  Work Sans — only offered in the hidden dev "tweaks" tool). Removed the 8 unused → big
  render-blocking / FCP / LCP win. No visual change (defaults untouched).
- **[DONE]** Removed the render-competing `<link rel="preload" as="audio">` for the intro chime.
- **[DONE]** Immutable long-cache for content-hashed JS/CSS via `netlify.toml` (media left on
  Netlify's default so your filename-based asset swaps still propagate).
- **[DONE]** Moved the Podium script out of the invalid `</head>…<body>` gap to a valid position.
- **Already good (prior work):** every video is 720p/CRF-27/faststart, audio-stripped, lazy-loaded
  via IntersectionObserver, data-saver aware; Gzip/Brotli handled by Netlify.
- **[ACTION]** Core Web Vitals (LCP/CLS/FCP) can't be measured from here — run **PageSpeed
  Insights** on the live URL after deploy. Likely LCP contributor: the homepage hero background
  video; likely CLS: none obvious (fixed aspect-ratio slots). If LCP needs help, add a `poster`
  still to the hero video.

## 6. Accessibility
- **[DONE]** Duplicate H1 fixed (About).
- **[DONE]** `<html lang="en">`, decorative media `aria-hidden`, logo has descriptive `alt` — all
  confirmed/kept.
- **[ACTION — verify]** Color contrast: the muted warm-grey text (`--muted #7A6B58`,
  `--muted-2 #A39580`) on clay `#E9DDC8` may fall below WCAG AA (4.5:1) for small text. Worth a
  contrast check; darkening `--muted-2` slightly would fix it without changing the look much.
- **[ACTION]** Add a visible skip-to-content link and confirm focus states on the mobile menu.

## 7. Internal Linking
- **[DONE]** Header nav links to all 8 pages (present sitewide) — no orphan pages in the nav.
- **[ACTION]** Add contextual cross-links between services (e.g. Aesthetics → Memberships →
  Assessment → Contact) using descriptive anchor text. Currently CTAs mostly say "Book" — good for
  conversion, weaker for SEO anchor signals. (Do after routing so links are crawlable.)

## 8. URLs
- **[DONE]** Target URL structure defined (clean `/about`, `/aesthetics`, …) in the sitemap + seo.js.
- **[ACTION]** Activate it via the routing switch (Critical #1). No duplicate-content today because
  only `/` resolves; after the switch, the per-route canonicals prevent any dupes.

## 9. Google Search Console Readiness
- **[DONE]** robots.txt, sitemap.xml, canonical, OG, structured data all in place.
- **[BLOCKER]** Until hash routing is replaced, Google can only index the homepage. Verify the
  property in GSC now; submit the sitemap **after** routing ships.

## 10. Priority Summary

**Critical**
1. Replace hash routing with History-API routing + Netlify SPA fallback (unlocks per-page indexing).

**High**
2. Ship & submit the sitemap after #1; verify property in Search Console.
3. Claim/optimize Google Business Profile with matching NAP + hours.
4. Verify geo coordinates match the GBP pin.

**Medium**
5. Per-page structured data (FAQ/breadcrumb) + service landing pages for "[service] Orland Park".
6. Contextual internal links between services with descriptive anchors.
7. Confirm color contrast on muted text; add skip-link.
8. Run PageSpeed Insights on live; add a hero-video `poster` if LCP needs it.

**Nice-to-have**
9. Dedicated hours in schema; review/rating schema once you have reviews; blog/Notes content cadence.

---

### Shipped in this commit
`index.html` (meta + OG/Twitter + JSON-LD + trimmed fonts + fixes) · `public/robots.txt` ·
`public/sitemap.xml` · `public/assets/og-image.jpg` · `src/seo.js` + `app.jsx` (dynamic head) ·
`src/pages/About.jsx` (H1 fix) · `netlify.toml` (caching + security headers).
