/* AVEN MED — per-route SEO metadata.
 *
 * applySeo(route) updates <title>, meta description, canonical, and the OG/
 * Twitter title/description/url on every client-side navigation. Content is
 * client-rendered, so this keeps the head accurate for Google's renderer,
 * social scrapers, and the browser tab. It is fully effective once the app
 * moves from hash routing to History-API routing (see SEO_AUDIT.md, Critical #1). */

const BASE_URL = "https://avenmedil.com";

const DEFAULT = {
  title: "AVEN MED · Medical Spa & Family Medicine in Orland Park, IL",
  description: "AVEN MED is a private medical spa in Orland Park, IL offering Botox, dermal fillers, Sculptra, microneedling, IV therapy, medical weight loss, and family medicine. Led by Alaa Mashal, FNP-BC.",
};

export const ROUTE_SEO = {
  "/": DEFAULT,
  "/about": {
    title: "About & Founder — Alaa Mashal, FNP-BC · AVEN MED, Orland Park IL",
    description: "Meet Alaa Mashal, FNP-BC — founder and lead practitioner of AVEN MED in Orland Park, IL. A board-certified Family Nurse Practitioner and the only injector at the practice.",
  },
  "/aesthetics": {
    title: "Botox, Fillers, Sculptra & Microneedling · AVEN MED, Orland Park IL",
    description: "Botox, dermal fillers, Sculptra biostimulators, and microneedling in Orland Park, IL. Considered aesthetic treatments sequenced into pathways at AVEN MED, led by Alaa Mashal, FNP-BC.",
  },
  "/wellness": {
    title: "Wellness & IV Therapy · AVEN MED, Orland Park IL",
    description: "Concierge wellness, IV therapy, and medical weight loss in Orland Park, IL. Prevention-first care and bloodwork at AVEN MED.",
  },
  "/family-medicine": {
    title: "Family Medicine · AVEN MED, Orland Park IL",
    description: "Self-pay family medicine in Orland Park, IL — transparent pricing, continuity of care, one practitioner every visit. AVEN MED.",
  },
  "/assessment": {
    title: "The AVEN Assessment · AVEN MED, Orland Park IL",
    description: "The AVEN Assessment is a paid consultation that opens your personalized treatment pathway at AVEN MED in Orland Park, IL.",
  },
  "/memberships": {
    title: "Memberships · AVEN MED, Orland Park IL",
    description: "AVEN Maintenance ($100/mo) and Signature ($200/mo) memberships bank monthly toward treatments at AVEN MED, Orland Park, IL.",
  },
  "/contact": {
    title: "Contact & Book · AVEN MED, Orland Park IL",
    description: "Contact AVEN MED in Orland Park, IL. Book your AVEN Assessment — 14470 LaGrange Rd, Ste 101. Call (708) 734-6902.",
  },
  "/notes": {
    title: "Notes · AVEN MED, Orland Park IL",
    description: "Notes from AVEN MED — perspectives on aesthetics, skin health, and wellness from a private Orland Park practice.",
  },
};

function setMeta(attr, key, value) {
  if (!value) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function titleize(slug) {
  return slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function applySeo(route) {
  let meta = ROUTE_SEO[route];
  if (!meta && route && route.startsWith("/service/")) {
    const name = titleize(route.replace("/service/", ""));
    meta = {
      title: `${name} · AVEN MED, Orland Park IL`,
      description: `${name} at AVEN MED — a private medical spa and family medicine practice in Orland Park, IL, led by Alaa Mashal, FNP-BC.`,
    };
  }
  if (!meta) meta = DEFAULT;

  const url = BASE_URL + (route === "/" ? "/" : route);

  document.title = meta.title;
  setMeta("name", "description", meta.description);
  setCanonical(url);
  setMeta("property", "og:title", meta.title);
  setMeta("property", "og:description", meta.description);
  setMeta("property", "og:url", url);
  setMeta("name", "twitter:title", meta.title);
  setMeta("name", "twitter:description", meta.description);
}
