/* AVEN MED — per-route SEO metadata.
 *
 * applySeo(route) updates <title>, meta description, canonical, and the OG/
 * Twitter title/description/url on every client-side navigation. Content is
 * client-rendered, so this keeps the head accurate for Google's renderer,
 * social scrapers, and the browser tab. It is fully effective once the app
 * moves from hash routing to History-API routing (see SEO_AUDIT.md, Critical #1). */

import { SERVICE_SLUGS } from './pages/Service.jsx';
import { REGISTRY_SEO, getEducationArticle } from './content/registry.jsx';
import { categoryBySlug, categoryHasArticles } from './content/education/index.js';
import { BRIDAL_ROUTE_SEO, bridalIndexable } from './content/bridal/index.js';

const BASE_URL = "https://avenmedil.com";
const ROBOTS_INDEX = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const ROBOTS_NOINDEX = "noindex, follow";

const DEFAULT = {
  title: "AVEN MED · Medical Spa & Family Medicine in Orland Park, IL",
  description: "A private practice in Orland Park, IL bringing aesthetics, wellness and family medicine under one clinician — Alaa Mashal, MSN, APRN, FNP-BC.",
};

const STATIC_ROUTE_SEO = {
  "/": DEFAULT,
  "/about": {
    title: "About AVEN MED & Alaa Mashal, FNP-BC | Orland Park",
    description: "How AVEN MED was built and the thinking behind it — a practice led by Alaa Mashal, MSN, APRN, FNP-BC, where restraint is the point rather than the exception.",
  },
  "/concerns": {
    title: "Patient Concerns — Causes & Options | AVEN MED",
    description: "Start from what is actually bothering you. Common skin and aesthetic concerns explained by AVEN MED in Orland Park, with the pathways each one may lead to.",
  },
  "/providers": {
    title: "Meet Your Provider | AVEN MED, Orland Park IL",
    description: "One clinician assesses you, treats you and reviews the result. Why continuity is the model at AVEN MED in Orland Park rather than a rotating list of injectors.",
  },
  "/aesthetics": {
    title: "Aesthetic Treatments in Orland Park, IL | AVEN MED",
    description: "Botox, fillers, biostimulators, microneedling and skin treatments in Orland Park — sequenced into a plan rather than sold from a menu, by one injector.",
  },
  "/wellness": {
    title: "Wellness & IV Therapy · AVEN MED, Orland Park IL",
    description: "Provider-led wellness in Orland Park, IL — IV therapy, medical weight management, vitamin injections and clinician-guided lab testing at AVEN MED.",
  },
  "/family-medicine": {
    title: "Family Medicine · AVEN MED, Orland Park IL",
    description: "Family medicine in Orland Park, IL — relationship-based primary care with continuity and coordination. Contact AVEN MED about insurance, pricing and scheduling.",
  },
  "/assessment": {
    title: "The AVEN Assessment · AVEN MED, Orland Park IL",
    description: "The AVEN Assessment is a paid consultation that opens your personalized treatment pathway at AVEN MED in Orland Park, IL.",
  },
  "/memberships": {
    title: "Memberships · AVEN MED, Orland Park IL",
    description: "AVEN memberships bank a monthly contribution toward your treatments in Orland Park, IL — care planned over time rather than decided one visit at a time.",
  },
  "/contact": {
    title: "Contact & Book · AVEN MED, Orland Park IL",
    description: "Contact AVEN MED in Orland Park, IL. Book your AVEN Assessment — 14470 LaGrange Rd, Ste 101. Call (708) 734-6902.",
  },
  "/notes": {
    title: "Notes · AVEN MED, Orland Park IL",
    description: "Notes from AVEN MED — perspectives on aesthetics, skin health, and wellness from a private Orland Park practice.",
  },
  "/education": {
    title: "Education Center | AVEN MED, Orland Park IL",
    description: "Clear, clinically reviewed writing on aesthetics, skin health and wellness from AVEN MED in Orland Park. Every article is reviewed before it is published.",
  },
};

// Data-driven pages (treatments, and future categories) contribute their own
// title/description straight from the content registry.
export const ROUTE_SEO = { ...STATIC_ROUTE_SEO, ...REGISTRY_SEO, ...BRIDAL_ROUTE_SEO };

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
  "/education": "Education Center",
};

function setBreadcrumb(route, url) {
  const existing = document.getElementById("breadcrumb-dynamic");

  // Education article pages own their full breadcrumb via the article schema
  // (see ArticleTemplate) — don't emit a second, conflicting BreadcrumbList.
  if (route.startsWith("/education/") && !route.startsWith("/education/topics/")) {
    if (existing) existing.remove();
    return;
  }

  // Bridal Journey pages own their BreadcrumbList in-page (see BridalJourney /
  // BridalAssessment schema) — don't emit a second, conflicting one here.
  if (route === "/bridal-journey" || route.startsWith("/bridal-journey/")) {
    if (existing) existing.remove();
    return;
  }

  // Build the crumb chain. Education adds a middle "Education Center" crumb.
  let items = [{ "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL + "/" }];

  if (route.startsWith("/education/topics/")) {
    const cat = categoryBySlug(route.replace("/education/topics/", "").split("/")[0]);
    if (!cat) { if (existing) existing.remove(); return; }
    items.push({ "@type": "ListItem", "position": 2, "name": "Education Center", "item": BASE_URL + "/education" });
    items.push({ "@type": "ListItem", "position": 3, "name": cat.label, "item": url });
  } else {
    let name = CRUMBS[route];
    if (!name && route.startsWith("/service/")) name = titleize(route.replace("/service/", ""));
    // Home (or unknown) has no second crumb — drop any dynamic breadcrumb.
    if (!name) { if (existing) existing.remove(); return; }
    items.push({ "@type": "ListItem", "position": 2, "name": name, "item": url });
  }

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items,
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

// PURE resolver — no DOM. The single source of truth for a route's SEO identity,
// shared by the client (applySeo, below) AND the build-time prerender/SSG step
// (scripts/prerender.mjs), so the two can never drift. Returns everything needed
// to write a route's <head> statically.
export function resolveSeo(route) {
  let meta = ROUTE_SEO[route];
  let robots = ROBOTS_INDEX;
  let notFound = false;

  if (!meta && route && route.startsWith("/service/")) {
    const slug = route.replace("/service/", "").split("/")[0];
    if (SERVICE_SLUGS.includes(slug)) {
      const name = titleize(slug);
      meta = {
        title: `${name} · AVEN MED, Orland Park IL`,
        description: `${name} at AVEN MED — a private medical spa and family medicine practice in Orland Park, IL, led by Alaa Mashal, MSN, APRN, FNP-BC.`,
      };
    } else {
      // Unknown service slug — not a real page. Don't let it get indexed.
      notFound = true;
      robots = ROBOTS_NOINDEX;
      meta = { title: "Page not found · AVEN MED", description: "This page could not be found." };
    }
  }

  // Education Center category landing (/education/topics/<slug>).
  if (!meta && route && route.startsWith("/education/topics/")) {
    const slug = route.replace("/education/topics/", "").split("/")[0];
    const cat = categoryBySlug(slug);
    if (cat) {
      meta = {
        title: `${cat.label} — Education Center · AVEN MED, Orland Park IL`,
        description: `${cat.blurb} Clinically reviewed guides from AVEN MED in Orland Park, IL.`,
      };
      // Hold empty category pages from the index until they have ≥1 published
      // article; restores automatically once content ships.
      if (!categoryHasArticles(slug)) robots = ROBOTS_NOINDEX;
    } else {
      notFound = true;
      robots = ROBOTS_NOINDEX;
      meta = { title: "Page not found · AVEN MED", description: "This page could not be found." };
    }
  }

  // Education Center article (/education/<slug>). '/education' and the topics
  // sub-tree are handled above, so anything left here is an article slug.
  if (!meta && route && route.startsWith("/education/") && !route.startsWith("/education/topics/")) {
    const slug = route.replace("/education/", "").split("/")[0];
    const article = getEducationArticle(slug);
    if (article) {
      meta = {
        title: `${article.title} · AVEN MED, Orland Park IL`,
        description: article.excerpt,
      };
    } else {
      notFound = true;
      robots = ROBOTS_NOINDEX;
      meta = { title: "Page not found · AVEN MED", description: "This page could not be found." };
    }
  }

  // Anything still unresolved is a genuinely unknown route → NotFound. Never let
  // it fall through to the homepage's DEFAULT metadata (soft-404 / duplicate
  // content). "/" always resolves via ROUTE_SEO, so it never reaches here.
  if (!meta) {
    notFound = true;
    robots = ROBOTS_NOINDEX;
    meta = { title: "Page not found · AVEN MED", description: "This page could not be found." };
  }

  // Hold unfinished architecture from the index while its content is placeholder.
  // These routes stay live and in the nav — only their indexability changes, and
  // it restores automatically when the content is published.
  if ((route === "/bridal-journey" || route.startsWith("/bridal-journey/")) && !bridalIndexable()) {
    robots = ROBOTS_NOINDEX;
  }

  // Canonical/OG URL for the route. For not-found routes, point the canonical at
  // Home rather than self-canonicalizing the invalid URL.
  const url = BASE_URL + (route === "/" ? "/" : route);
  const canonical = notFound ? BASE_URL + "/" : url;

  return { title: meta.title, description: meta.description, robots, canonical, url, notFound };
}

// Applies the resolved SEO to the live document on every client-side navigation.
// Idempotent (setMeta/setCanonical update existing tags), so it harmlessly
// re-affirms the values the prerender already wrote into the static <head>.
export function applySeo(route) {
  const { title, description, robots, canonical, url, notFound } = resolveSeo(route);

  document.title = title;
  setMeta("name", "description", description);
  setMeta("name", "robots", robots);
  setCanonical(canonical);
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", canonical);
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  if (notFound) {
    const b = document.getElementById("breadcrumb-dynamic");
    if (b) b.remove();
  } else {
    setBreadcrumb(route, url);
  }
}
