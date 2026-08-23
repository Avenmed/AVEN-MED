/* AVEN MED — GA4 analytics (privacy-scoped, SPA-aware).
 *
 * ONE GA4 config (G-VERJY5YD8S). No GTM, no advertising pixels, no Google Signals,
 * no User-ID, no form-field capture. Client-only: every DOM/gtag access lives inside
 * a function called at runtime in the browser — there are NO top-level side effects,
 * so importing this module is safe (incl. any build-time SSR module evaluation).
 *
 * PRIVACY CONTRACT (healthcare site):
 *  - page_location/page_path are pathname-only (NO query string) — a sensitive query
 *    (e.g. the Podium prefill with name/email/phone) can never reach GA4.
 *  - Event params are hard-whitelisted; anything else is dropped. Values are truncated.
 *  - We NEVER send name/email/phone/message/interest, symptoms, diagnoses, treatment
 *    answers, patient identifiers, Podium conversation content, or a full outbound URL.
 *  - UTM campaign attribution is preserved (non-PII) via campaign_* on config.
 */

const GA_ID = "G-VERJY5YD8S";

// Event params that may be sent. Everything else is dropped.
const ALLOWED_PARAMS = new Set([
  "page_path", "page_location", "page_title", "page_type",
  "from_page_type", "cta_destination", "tier", "link_location", "network",
]);

let inited = false;
let lastPageType = "";

function pushGtag() {
  // gtag shim — queues into dataLayer until gtag/js loads, then GA processes it.
  window.dataLayer.push(arguments);
}

// Only utm_* → campaign_* (attribution, non-PII). Never generic query passthrough.
function campaignFromUtms() {
  try {
    const p = new URLSearchParams(window.location.search);
    const map = { utm_source: "campaign_source", utm_medium: "campaign_medium", utm_campaign: "campaign_name", utm_content: "campaign_content", utm_term: "campaign_term" };
    const out = {};
    for (const k in map) { const v = p.get(k); if (v) out[map[k]] = String(v).slice(0, 100); }
    return out;
  } catch (e) { return {}; }
}

export function initAnalytics() {
  if (inited) return;
  if (typeof window === "undefined" || typeof document === "undefined") return;
  inited = true;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") window.gtag = pushGtag;

  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);

  window.gtag("js", new Date());
  // send_page_view:false → we control page views manually for the SPA (no auto/dup).
  // No ad features, no Google Signals. IP anonymization is automatic in GA4.
  window.gtag("config", GA_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    ...campaignFromUtms(),
  });

  attachDelegatedListeners();
}

// One page_view per route (initial load + each SPA route change), pathname-only.
export function trackPageView(pathname, title, pageType) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  lastPageType = pageType || "";
  window.gtag("event", "page_view", {
    page_path: pathname,
    page_location: window.location.origin + pathname, // NO query string
    page_title: (title || document.title || "").slice(0, 200),
    page_type: pageType || "",
  });
}

function track(name, params) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const safe = {};
  const p = params || {};
  for (const k in p) if (ALLOWED_PARAMS.has(k) && p[k] != null && p[k] !== "") safe[k] = String(p[k]).slice(0, 120);
  window.gtag("event", name, safe);
}

// Contact form → Podium handoff. NO form values. Named for what actually happens
// (a hand-off to booking, not a confirmed appointment).
export function trackContactHandoff() {
  track("contact_handoff", {});
}

function linkLocation(el) {
  try {
    if (el.closest(".hdr, header")) return "header";
    if (el.closest(".ftr, footer")) return "footer";
    if (window.location.pathname === "/contact") return "contact_page";
    return "body";
  } catch (e) { return "body"; }
}

// One delegated, capture-phase listener handles all safe click events. It reads only
// static hrefs/data-attributes — never form state. tel:/mailto: send a placement
// label, NOT the number/address. CTAs are marked with data-aven-cta (no PII).
function attachDelegatedListeners() {
  document.addEventListener("click", (e) => {
    const el = e.target && e.target.closest ? e.target.closest("a, [data-aven-cta]") : null;
    if (!el) return;
    const href = el.getAttribute ? (el.getAttribute("href") || "") : "";
    if (href.startsWith("tel:")) return track("phone_click", { link_location: linkLocation(el) });
    if (href.startsWith("mailto:")) return track("email_click", { link_location: linkLocation(el) });
    const cta = el.getAttribute ? el.getAttribute("data-aven-cta") : null;
    if (cta === "assessment") return track("assessment_cta_click", { from_page_type: lastPageType, cta_destination: href });
    if (cta === "assessment-tier") return track("assessment_tier_detail_click", { tier: el.getAttribute("data-tier") || "" });
    if (cta === "membership") return track("membership_cta_click", { from_page_type: lastPageType });
  }, true);
}
