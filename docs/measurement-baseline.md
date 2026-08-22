# AVEN MED — Post-Launch Measurement Baseline & Plan (Phase 9.0)

**Audit + instrumentation PLAN. No tracking installed, no site/runtime changes.** No fake IDs,
no fabricated Search Console verification, no invented ranking data, no PHI/PII collection.

---

## Day 0 — Launch Baseline (record)

| Field | Value |
|---|---|
| Launch date | 2026-08-22 |
| Production URL | https://avenmedil.com |
| Production commit | `8ba1f0f` |
| Production bundle | `assets/index-CTwY_1UE.js` |
| Sitemap | **55** URLs (HTTPS-only, canonical, no trailing-slash variants) |
| Static-head prerender | 65 routes, 0 errors |
| Indexable routes | The 55 sitemap URLs (`index,follow`) |
| Held routes | `/bridal-journey` (+ `/assessment`) `noindex,follow`; 10 Wave-1 Education articles `clinical-review` (no route/sitemap/index); empty Education topic pages `noindex` |
| Analytics | **NONE installed** (no GA4/GTM/gtag/pixels/custom/call/form tracking/consent tooling) |
| Search Console | **NOT verified** (no verification meta/file in repo; owner DNS status unknown) |
| GBP | Owner-managed; not modifiable here |
| robots.txt | Present, `Allow: /`, blocks nothing; references sitemap |
| Organic visibility | **Not yet measurable** — establish via GSC after verification (no rank data fabricated) |
| Local visibility | **Not yet measurable** — establish via GSC + GBP insights after access |
| Third-party scripts | **Podium** widget only (`connect.podium.com/widget.js`) |

---

## §1 — Existing analytics inventory (audit)

| Integration | Status |
|---|---|
| Google Analytics / GA4 | **NOT INSTALLED** |
| Google Tag Manager / gtag / dataLayer | **NOT INSTALLED** |
| Google Search Console verification | **NOT INSTALLED** (no meta tag / HTML file in repo) |
| Meta (Facebook) Pixel | **NOT INSTALLED** |
| TikTok Pixel | **NOT INSTALLED** |
| Microsoft / Bing (UET/Clarity) | **NOT INSTALLED** (`clarity` matches were the word "clarity" in skin content) |
| Custom analytics / call tracking / form tracking | **NOT INSTALLED** |
| Consent / cookie tooling | **NOT INSTALLED** (`consent` match = bridal form consent checkbox) |
| Podium widget | **INSTALLED + WORKING** — loads; emits its own `digitalData` console warning (benign, third-party); has its own conversation analytics in the Podium dashboard (owner-side) |

Nothing to remove or de-duplicate. Clean slate for a single, privacy-careful GA4 install.

## §2 — Search Console readiness

- `sitemap.xml`: accessible (200), valid XML, **55** URLs, HTTPS-only, canonical, **0** bridal / **0** Wave-1 articles / **0** empty topic pages / **0** trailing-slash duplicates.
- `robots.txt`: `User-agent: * / Allow: /` — does **not** block `/`, CSS, JS, images, or any page family; references the sitemap.
- **Owner action required** (no fabricated token): verify the property, then submit the sitemap. See §19.

## §6 — Conversion event taxonomy (restrained; GA4 snake_case)

`page_view` is auto-collected; attach a **`page_type`** param per route (home · service · concern ·
wellness · family-medicine · assessment · assessment-detail · provider · hub · education · memberships ·
bridal · contact) for grouping — this replaces a swarm of `*_view` events.

**PRIMARY CONVERSIONS**
- `contact_submit` — Contact form submitted / handed off to booking. *(event only — NO field values, NO destination URL with prefilled name/email/phone.)*
- `phone_click` — `tel:` clicked. Param: `location` (header/footer/contact/provider). *(NOT the number.)*
- `email_click` — `mailto:` clicked. Param: `location`. *(NOT the address.)*
- `podium_message_start` — a Podium conversation is initiated *(only if Podium exposes a safe, documented signal; else omit).*
- `bridal_assessment_submit` — bridal form submitted *(deferred; Bridal is held).*

**SECONDARY CONVERSIONS (mid-funnel intent)**
- `assessment_cta_click` — a "Start Your AVEN Assessment" CTA clicked. Params: `from_page_type`, `cta_destination` (/assessment or /contact).
- `assessment_tier_detail_click` — "See what's included" clicked. Param: `tier` (quick/comprehensive).
- `podium_open` — Podium widget opened (click on the bubble/trigger).
- `membership_cta_click` — membership CTA clicked.

**ENGAGEMENT**
- `outbound_social_click` — Instagram/Facebook/TikTok. Param: `network`.
- `faq_expand` *(optional; enable only if genuinely useful — otherwise skip as noise).*

~10 events + `page_type`. No meaningless events.

## §7 — Assessment funnel measurement

Funnel (GA4 Explore), built from the above — never from form content:
`page_view (page_type=service|concern)` → `assessment_cta_click (from_page_type=…)` →
`page_view (page_type=assessment)` → `assessment_tier_detail_click (tier=…)` →
`contact_submit` / `phone_click` / `email_click`.
Answers: how many see Assessment, which page sent them, which service they researched (`from_page_type`),
which tier they explored, and whether they proceeded — **with zero medical data**.

## §8 — Privacy / healthcare analytics review (conservative)

- **Never send to GA4 or any pixel:** form field values (name, email, phone, message, `interest`),
  symptoms, diagnoses, treatment answers, patient identifiers.
- **Contact form leak risk (flagged):** `Contact.onSubmit` appends `name`/`email`/`phone` to the Podium
  booking URL as query params. `contact_submit` must be a **bare event** — do **not** capture that
  outbound URL (or its query) in analytics, or it becomes PII in GA4. Same discipline for any
  redirect-with-params.
- `phone_click`/`email_click`: send the event + a static `location` label only — **not** the actual
  number/address as user-provided data.
- **GA4 config:** rely on GA4's IP anonymization (default); **disable Google Signals** (avoid
  demographics/remarketing on a medical site); do not enable advertising features initially.
- **Advertising pixels (Meta/TikTok): DEFER pending legal/compliance review.** Sending page URLs of
  aesthetic/weight-loss pages to ad platforms is a recognized healthcare tracking-tech risk (FTC/HHS
  guidance). **Flag for owner + legal decision before any pixel.**
- Page **paths** (e.g., `/botox-orland-park`) are service pages, not a diagnosis of the visitor, and are
  acceptable in analytics — but the reasoning is documented here so it stays deliberate.

## §9 — Phone / email conversion tracking

Links verified correct in production: `tel:+17087346902`, `mailto:info@avenmedil.com`, display
`(708) 734-6902`. Track `phone_click` / `email_click` with a `location` param (which placement), never
the value itself.

## §10 — Podium measurement (safe scope)

- Safe: `podium_open` via a click listener on the Podium trigger element (`#podium-bubble` / "Text us").
- `podium_message_start` only if Podium exposes a documented event/callback — **do not reverse-engineer
  or modify Podium.** Conversation contents / names / numbers / medical info: **never**.
- Podium's own dashboard remains the owner's source for conversation detail.
- The benign `digitalData` console warning is Podium's — **leave it** unless it becomes a real issue.

## §11 — Google Business Profile checklist (owner-authenticated; not modified here)

**Complete now:** exact name **AVEN MED**; primary category **Medical Spa** (+ accurate secondaries,
e.g., Nurse Practitioner / Family Practice / Weight Loss Service — only what's confirmed); website
`https://avenmedil.com`; phone `(708) 734-6902`; address `14470 LaGrange Rd, Ste 101, Orland Park, IL
60462`; **by-appointment** hours (mirror the Contact page); appointment URL (`/contact`, or the Podium
booking link once live); services list mirroring the site; a factual description (no invented claims);
seed Q&A; **review request workflow** (compliant, un-gated).
**Wait for the media shoot:** premium interior/provider/treatment photos (interim: logo + exterior OK).
Do not invent business info. NAP must match the site exactly.

## §12–13 — Local baseline + query clusters (measure first; no city pages)

Primary market **Orland Park, IL**; observe **Tinley Park · Frankfort · Mokena · Palos Heights · Homer
Glen · New Lenox**. **Ranking data is not available pre-verification — none is fabricated here.** Baseline
is established from GSC (queries/position/impressions) after the owner verifies the property. Clusters to
monitor (not individual-keyword obsession):

| Cluster | Seed queries |
|---|---|
| **Brand** | AVEN MED, AVEN MED Orland Park, AVEN Assessment |
| **Aesthetics** | botox, lip filler, sculptra, microneedling, chemical peel, skin tightening (+ "Orland Park" / "near me") |
| **Concerns** | fine lines, acne scars, skin laxity, facial volume loss |
| **Wellness** | medical weight loss, glp-1, metabolic support (+ "Orland Park") |
| **Family Medicine** | primary care, preventive care, family medicine Orland Park |
| **Assessment / differentiation** | aven assessment, skin analysis, aesthetic consultation |
| **Local modifiers** | + "orland park", + "near me" applied across the above |

Priority commercial-local queries to watch: `med spa Orland Park`, `Botox Orland Park`, `lip filler Orland
Park`, `microneedling Orland Park`, `Sculptra Orland Park`, `medical weight loss Orland Park`, `family
medicine Orland Park`.

## §14 — UTM standard (lowercase, hyphenated; no PII)

`utm_source` (channel): `instagram` · `facebook` · `tiktok` · `gbp` · `email` · `influencer-<name>` ·
`partner-<name>` · `qr` · `google-ads`.
`utm_medium`: `organic-social` · `paid-social` · `email` · `referral` · `qr` · `cpc` · `print`.
`utm_campaign`: `launch-2026` · `founding-members` · `bridal-2026` · `kahwa-collab` · `grand-opening-2026`.
`utm_content`: placement, e.g. `bio-link` · `story-2026-09` · `card-front` · `sleeve`.
Rules: all lowercase, hyphens (never spaces/underscores), stable source vocabulary, **never** encode a
person's name/number in a UTM. Do not launch campaigns yet.

## §15 — QR-code attribution

Each QR encodes a site URL + UTMs: `utm_source=qr&utm_medium=qr&utm_campaign=<context>&utm_content=<placement>`.
Examples: Kahwa → `campaign=kahwa-collab&content=coffee-sleeve`; grand opening → `campaign=grand-opening-2026&content=event-signage`;
clinic cards → `campaign=clinic-materials&content=business-card`; bridal partner → `campaign=bridal-2026&content=partner-<vendor>`;
influencer → `source=influencer-<name>&medium=qr&campaign=launch-2026`. No personal data in codes.

## §16 — Owner dashboard (one Looker Studio report; GA4 + GSC + GBP)

- **Traffic** (GA4): users, sessions, organic sessions, local-organic where inferable.
- **Search** (GSC): impressions, clicks, CTR, avg position, indexed pages.
- **Patient intent** (GA4 events): `assessment_cta_click`, `contact_submit`, `phone_click`, `email_click`, `podium_open`.
- **Content** (GA4): top `page_type`, top services/concerns; Education once published.
- **Local** (GBP insights, not GA4): website clicks, calls, direction requests, review count/rating.
Keep it to a single, readable report — not an enterprise build.

## §18 — 7 / 30 / 60 / 90-day plan

| Checkpoint | Focus | Decisions to MAKE | Decisions to AVOID |
|---|---|---|---|
| **Day 7** | Crawl / indexation / coverage errors (GSC) | fix technical crawl/coverage issues; confirm sitemap processed + priority pages discovered | judging rankings; content changes |
| **Day 30** | Early queries, pages, CTR, first conversion behavior | small title/meta CTR tweaks on real query data; note top intent | wholesale content rewrites; reacting to volatility |
| **Day 60** | Content opportunities, internal-link performance, local movement | prioritize Wave-2 topics by real query demand; consider publishing reviewed Wave-1 | over-investing before trends stabilize |
| **Day 90** | Meaningful SEO trends, conversion paths, content ROI, GBP/local | strategic content/media/local investment based on evidence | over-reacting to sub-90-day noise |

## §19 — Search Console submission (owner steps; nothing fabricated)

1. **Create + verify** a GSC property for `avenmedil.com` — recommend the **Domain property** via a
   **DNS TXT** record at the registrar (covers http/https + all subdomains). Alternatives: an HTML meta
   tag (give me the token and I'll add it in a follow-up phase) or auto-verify once GA4 is live.
2. **Submit** `https://avenmedil.com/sitemap.xml`.
3. **URL-inspect** these priority pages (not dozens): `/`, `/aesthetics`, `/botox-orland-park`,
   `/assessment`, `/wellness`, `/wellness/medical-weight-loss`, `/family-medicine`, `/providers/alaa-mashal`.

## §20 — What the owner must provide before any implementation

1. **GA4 Measurement ID** (`G-XXXXXXXXXX`) — or authorization + a Google account to create the property. *(No fake ID will be deployed.)*
2. **Search Console** — owner verifies the property (DNS TXT recommended), or hands me the HTML-tag token to add.
3. **GBP access** — owner-managed; I provide the checklist only.
4. **Advertising-pixel decision** — recommend **deferring** Meta/TikTok pending legal/compliance review.
5. **Call-tracking decision** — whether to add call attribution beyond `tel:` click events.

## §21 — Production safety

Any future analytics install must be a single, lazy, privacy-scoped snippet that preserves Header v1.0,
design, routes, SEO/prerender/sitemap, accessibility, the Wave-1 clinical-review hold, Bridal noindex,
Podium, and contact behavior — no unrelated changes.

## Recommended next phase

**Phase 9.1 — GA4 + GSC instrumentation** (only after the owner provides the GA4 ID and verifies GSC):
implement the §6 event taxonomy with `page_type` grouping and the §8 privacy rules, wire the SPA
`page_view` on route change (Home→Aesthetics→Botox→Assessment = 4 page_views, no duplicates), submit the
sitemap, and stand up the §16 Looker Studio dashboard. Advertising pixels remain deferred pending legal review.
