/* AVEN MED — per-route SEO metadata.
 *
 * applySeo(route) updates <title>, meta description, canonical, and the OG/
 * Twitter title/description/url on every client-side navigation. Content is
 * client-rendered, so this keeps the head accurate for Google's renderer,
 * social scrapers, and the browser tab. It is fully effective once the app
 * moves from hash routing to History-API routing (see SEO_AUDIT.md, Critical #1). */

import { SERVICE_SLUGS } from './pages/Service.jsx';
import { REGISTRY_SEO } from './content/registry.jsx';

const BASE_URL = "https://avenmedil.com";
const ROBOTS_INDEX = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const ROBOTS_NOINDEX = "noindex, follow";

const DEFAULT = {
  title: "AVEN MED · Medical Spa & Family Medicine in Orland Park, IL",
  description: "AVEN MED is a private medical spa in Orland Park, IL offering Botox, dermal fillers, Sculptra, microneedling, IV therapy, medical weight loss, and family medicine. Led by Alaa Mashal, FNP-BC.",
};

const STATIC_ROUTE_SEO = {
  "/": DEFAULT,
  "/about": {
    title: "About & Founder — Alaa Mashal, FNP-BC · AVEN MED, Orland Park IL",
    description: "Meet Alaa Mashal, FNP-BC — founder and lead practitioner of AVEN MED in Orland Park, IL. A board-certified Family Nurse Practitioner and the only injector at the practice.",
  },
  "/concerns": {
    title: "Patient Concerns — Causes & Treatment Options · AVEN MED, Orland Park IL",
    description: "Explore common skin and aesthetic concerns — fine lines, volume loss, uneven tone, sun damage, texture, pores, acne, scarring, laxity, and excessive sweating. Understand the causes, then plan individualized treatment through the AVEN Assessment at AVEN MED in Orland Park, IL.",
  },
  "/providers": {
    title: "Meet Your Provider — Alaa Mashal, FNP-BC · AVEN MED, Orland Park IL",
    description: "Meet the clinician behind AVEN MED in Orland Park, IL — Alaa Mashal, FNP-BC, founder and lead practitioner. Care here is personal and continuous: the provider who assesses you is the one who cares for you.",
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
    description: "Cash-pay family medicine in Orland Park, IL — relationship-based primary care with continuity and coordination. Contact AVEN MED for current visit pricing and scheduling.",
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

// Data-driven pages (treatments, and future categories) contribute their own
// title/description straight from the content registry.
export const ROUTE_SEO = { ...STATIC_ROUTE_SEO, ...REGISTRY_SEO };

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

// Short breadcrumb labels for the clean routes (Home is implicit).
const CRUMBS = {
  "/about": "About",
  "/concerns": "Patient Concerns",
  "/providers": "Meet Your Provider",
  "/aesthetics": "Aesthetics",
  "/wellness": "Wellness",
  "/family-medicine": "Family Medicine",
  "/assessment": "The AVEN Assessment",
  "/memberships": "Memberships",
  "/contact": "Contact",
  "/notes": "Notes",
};

function setBreadcrumb(route, url) {
  const existing = document.getElementById("breadcrumb-dynamic");
  let name = CRUMBS[route];
  if (!name && route.startsWith("/service/")) name = titleize(route.replace("/service/", ""));
  // Home (or unknown) has no second crumb — drop any dynamic breadcrumb.
  if (!name) { if (existing) existing.remove(); return; }
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL + "/" },
      { "@type": "ListItem", "position": 2, "name": name, "item": url },
    ],
  };
  let el = existing;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "breadcrumb-dynamic";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function applySeo(route) {
  let meta = ROUTE_SEO[route];
  let robots = ROBOTS_INDEX;
  let notFound = false;

  if (!meta && route && route.startsWith("/service/")) {
    const slug = route.replace("/service/", "").split("/")[0];
    if (SERVICE_SLUGS.includes(slug)) {
      const name = titleize(slug);
      meta = {
        title: `${name} · AVEN MED, Orland Park IL`,
        description: `${name} at AVEN MED — a private medical spa and family medicine practice in Orland Park, IL, led by Alaa Mashal, FNP-BC.`,
      };
    } else {
      // Unknown service slug — not a real page. Don't let it get indexed.
      notFound = true;
      robots = ROBOTS_NOINDEX;
      meta = { title: "Page not found · AVEN MED", description: "This page could not be found." };
    }
  }
  if (!meta) meta = DEFAULT;

  const url = BASE_URL + (route === "/" ? "/" : route);

  document.title = meta.title;
  setMeta("name", "description", meta.description);
  setMeta("name", "robots", robots);
  setCanonical(url);
  setMeta("property", "og:title", meta.title);
  setMeta("property", "og:description", meta.description);
  setMeta("property", "og:url", url);
  setMeta("name", "twitter:title", meta.title);
  setMeta("name", "twitter:description", meta.description);
  if (notFound) {
    const b = document.getElementById("breadcrumb-dynamic");
    if (b) b.remove();
  } else {
    setBreadcrumb(route, url);
  }
}
