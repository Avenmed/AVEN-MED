/* AVEN MED — content registry.
 *
 * The single source of truth for data-driven pages: routing, per-page SEO
 * metadata, and the sitemap all derive from this file. Adding a page means
 * adding its data module to the right group below — no edits to app.jsx or
 * seo.js required.
 *
 * Each data module is a plain object: { slug, priority?, seo:{title,description},
 * ...content }. `type` selects the template it renders through (TEMPLATES). */

import TreatmentTemplate from '../pages/TreatmentTemplate.jsx';
import ConcernTemplate from '../pages/ConcernTemplate.jsx';
import WellnessTemplate from '../pages/WellnessTemplate.jsx';
import FamilyMedicineTemplate from '../pages/FamilyMedicineTemplate.jsx';
import AssessmentTemplate from '../pages/AssessmentTemplate.jsx';
import ProviderTemplate from '../pages/ProviderTemplate.jsx';
// Future category templates plug in here (membership, education) and get
// registered the same way.

import botox from '../pages/BotoxOrlandPark.jsx';
import lipFillers from '../pages/LipFillersOrlandPark.jsx';
import cheek from '../pages/CheekFillersOrlandPark.jsx';
import jawline from '../pages/JawlineFillersOrlandPark.jsx';
import chin from '../pages/ChinFillersOrlandPark.jsx';
import lipFlip from '../pages/LipFlipOrlandPark.jsx';
import masseter from '../pages/MasseterBotoxOrlandPark.jsx';
import tmj from '../pages/TMJBotoxOrlandPark.jsx';
import hyperhidrosis from '../pages/HyperhidrosisOrlandPark.jsx';
import skinpen from '../pages/SkinPenMicroneedlingOrlandPark.jsx';
import sculptra from '../pages/SculptraOrlandPark.jsx';
import chemicalPeels from '../pages/ChemicalPeelsOrlandPark.jsx';
import skinRejuvenation from '../pages/SkinRejuvenationOrlandPark.jsx';
import acneTreatment from '../pages/AcneTreatmentOrlandPark.jsx';
import acneScarTreatment from '../pages/AcneScarTreatmentOrlandPark.jsx';
import medicalGradeSkincare from '../pages/MedicalGradeSkincareOrlandPark.jsx';
import facials from '../pages/FacialsOrlandPark.jsx';
import skinTightening from '../pages/SkinTighteningOrlandPark.jsx';

// Patient Concerns — educational pages that bridge a symptom to individualized
// treatment planning. A distinct content type from treatments.
import fineLinesWrinkles from '../pages/concerns/FineLinesWrinkles.jsx';
import facialVolumeLoss from '../pages/concerns/FacialVolumeLoss.jsx';
import unevenSkinTone from '../pages/concerns/UnevenSkinTone.jsx';
import sunDamage from '../pages/concerns/SunDamage.jsx';
import skinTexture from '../pages/concerns/SkinTexture.jsx';
import largePores from '../pages/concerns/LargePores.jsx';
import acneConcern from '../pages/concerns/Acne.jsx';
import acneScarsConcern from '../pages/concerns/AcneScars.jsx';
import skinLaxity from '../pages/concerns/SkinLaxity.jsx';
import excessiveSweating from '../pages/concerns/ExcessiveSweating.jsx';

// Wellness — concierge, prevention-first services (medical weight loss, IV
// therapy, vitamin injections, …). A distinct content type from treatments.
import medicalWeightLoss from '../pages/wellness/MedicalWeightLoss.jsx';
import ivTherapy from '../pages/wellness/IVTherapy.jsx';
import vitaminInjections from '../pages/wellness/VitaminInjections.jsx';
import glp1Therapy from '../pages/wellness/GLP1Therapy.jsx';
import wellnessConsultation from '../pages/wellness/WellnessConsultation.jsx';
import preventiveWellness from '../pages/wellness/PreventiveWellness.jsx';
import longevityLabTesting from '../pages/wellness/LongevityLabTesting.jsx';
import nutritionMetabolicSupport from '../pages/wellness/NutritionMetabolicSupport.jsx';

// Family Medicine — relationship-based primary care for adults and families.
import primaryCare from '../pages/family-medicine/PrimaryCare.jsx';

// Assessment — the consultation-first entry point to every AVEN relationship.
import theAvenAssessment from '../pages/assessment/TheAvenAssessment.jsx';
import quickAssessment from '../pages/assessment/QuickAssessment.jsx';
import comprehensiveAssessment from '../pages/assessment/ComprehensiveAssessment.jsx';
import assessmentWhatToExpect from '../pages/assessment/WhatToExpect.jsx';
import assessmentFAQ from '../pages/assessment/AssessmentFAQ.jsx';

// Meet Your Provider — the clinician(s) behind AVEN.
import alaaMashal from '../pages/providers/AlaaMashal.jsx';

// Education Center — pure-data article index + categories (bodies are lazy-loaded
// per article by ArticleTemplate; see src/content/education/index.js).
import { EDU_CATEGORIES, publishedArticles, categoryBySlug } from './education/index.js';

// Bridal Journey — pure-data journey registry (see src/content/bridal/index.js).
import { bridalSitemapRoutes } from './bridal/index.js';

// type -> template component
export const TEMPLATES = {
  treatment: TreatmentTemplate,
  concern: ConcernTemplate,
  wellness: WellnessTemplate,
  familyMedicine: FamilyMedicineTemplate,
  assessment: AssessmentTemplate,
  provider: ProviderTemplate,
};

// Grouped by type so new categories slot in cleanly.
const TREATMENTS = [
  botox, lipFillers, cheek, jawline, chin, lipFlip, masseter, tmj, hyperhidrosis, skinpen, sculptra,
  chemicalPeels, skinRejuvenation, acneTreatment, acneScarTreatment, medicalGradeSkincare, facials,
  skinTightening,
];

const CONCERNS = [
  fineLinesWrinkles, facialVolumeLoss, unevenSkinTone, sunDamage, skinTexture,
  largePores, acneConcern, acneScarsConcern, skinLaxity, excessiveSweating,
];

const WELLNESS = [
  medicalWeightLoss, ivTherapy, vitaminInjections, glp1Therapy,
  wellnessConsultation, preventiveWellness, longevityLabTesting, nutritionMetabolicSupport,
];

const FAMILY_MEDICINE = [
  primaryCare,
];

const ASSESSMENT = [
  theAvenAssessment, quickAssessment, comprehensiveAssessment, assessmentWhatToExpect, assessmentFAQ,
];

const PROVIDERS = [
  alaaMashal,
];

const GROUPS = [
  { type: 'treatment', pages: TREATMENTS },
  { type: 'concern', pages: CONCERNS },
  { type: 'wellness', pages: WELLNESS },
  { type: 'familyMedicine', pages: FAMILY_MEDICINE },
  { type: 'assessment', pages: ASSESSMENT },
  { type: 'provider', pages: PROVIDERS },
];

export const ENTRIES = GROUPS.flatMap((g) =>
  g.pages.map((d) => ({
    slug: d.slug,
    type: g.type,
    data: d,
    seo: d.seo,
    priority: d.priority ?? 0.8,
    changefreq: d.changefreq ?? 'monthly',
  }))
);

// Tag-based related content: rank other pages of the SAME content type by shared
// descriptive tags, most-overlap first, and return descriptive-anchor links.
// Same-type scoping keeps treatment→treatment and concern→concern separate, so a
// concern can never surface in a treatment page's "Related Treatments" (or vice
// versa) just because they share a tag.
function relatedFromTags(entry, all, limit = 6) {
  const mine = new Set(entry.data.tags || []);
  if (!mine.size) return [];
  return all
    .filter((o) => o.type === entry.type && o.slug !== entry.slug && (o.data.tags || []).some((t) => mine.has(t)))
    .map((o) => ({ o, score: (o.data.tags || []).filter((t) => mine.has(t)).length }))
    .sort((a, b) => b.score - a.score || b.o.priority - a.o.priority)
    .slice(0, limit)
    .map((x) => ({ label: x.o.data.breadcrumbName, path: `/${x.o.slug}` }));
}

// A page with an explicit `related` keeps it (hand-curated). A page with `tags`
// and no explicit `related` gets links generated automatically from its tags.
ENTRIES.forEach((e) => {
  if (!e.data.related && e.data.tags) {
    e.data.related = relatedFromTags(e, ENTRIES);
  }
});

const BY_SLUG = Object.fromEntries(ENTRIES.map((e) => [e.slug, e]));

// Router helper: pathname ("/botox-orland-park") -> entry or null.
export function getRegistryPage(pathname) {
  const slug = (pathname || '').replace(/^\/+/, '').replace(/\/+$/, '');
  return slug ? BY_SLUG[slug] || null : null;
}

// Hub directories, derived from the registry. A hub (Concerns, Wellness, and
// future Family Medicine / Education) calls this with its content type and
// renders the returned cards — no hardcoded page lists. Each page controls its
// own hub card via an optional `hub` field on its data module:
//   hub: { group?, blurb?, order?, hidden?, soon? }
// - group : grouping label (grouped hubs like Concerns); omit for flat hubs.
// - blurb : hub card description; falls back to the page's SEO description.
// - order : sort order (ascending); unset sorts last, so new pages append.
// - hidden: exclude this page from its hub entirely.
// - soon  : render as a non-linking "Soon" card even though the page exists.
// A newly registered page appears automatically (with fallbacks) — no hub edit.
export function getHubEntries(type) {
  return ENTRIES
    .filter((e) => e.type === type && !(e.data.hub && e.data.hub.hidden))
    .map((e) => ({
      label: e.data.breadcrumbName,
      path: `/${e.slug}`,
      blurb: (e.data.hub && e.data.hub.blurb) || (e.seo && e.seo.description) || "",
      group: (e.data.hub && e.data.hub.group) || null,
      order: e.data.hub && typeof e.data.hub.order === "number" ? e.data.hub.order : 999,
      soon: !!(e.data.hub && e.data.hub.soon),
    }))
    .sort((a, b) => a.order - b.order);
}

// Resolve a list of registry slugs to { label, path } links. Lets other systems
// (e.g. the Bridal Journey) reference existing service pages by slug WITHOUT
// re-describing them — service pages stay the single source of truth. Unknown
// slugs are dropped. Falls back to a titleized slug if no breadcrumbName.
export function getServiceLinksBySlugs(slugs = []) {
  return slugs
    .map((slug) => BY_SLUG[slug])
    .filter(Boolean)
    .map((e) => ({
      label: (e.data && e.data.breadcrumbName) || (e.data && e.data.serviceShort) || e.slug,
      path: `/${e.slug}`,
    }));
}

// Per-route SEO for seo.js: { "/slug": { title, description } }.
export const REGISTRY_SEO = Object.fromEntries(ENTRIES.map((e) => [`/${e.slug}`, e.seo]));

// For sitemap generation / auditing.
export const REGISTRY_URLS = ENTRIES.map((e) => ({ slug: e.slug, priority: e.priority, changefreq: e.changefreq }));

// ============================================================================
// EDUCATION CENTER — reads the pure-data index; bodies load lazily elsewhere.
// ============================================================================

// Published, visible article cards (optionally filtered/searched). Powers the
// hub, category pages, and search. Lightweight — never touches article bodies.
export function searchArticles({ category, tag, query } = {}) {
  let list = publishedArticles().filter((a) => !a.hidden);
  if (category) list = list.filter((a) => a.category === category);
  if (tag) list = list.filter((a) => (a.tags || []).includes(tag));
  if (query) {
    const q = query.trim().toLowerCase();
    if (q) list = list.filter((a) =>
      `${a.title} ${a.excerpt} ${(a.tags || []).join(" ")} ${a.category}`.toLowerCase().includes(q));
  }
  return list;
}

export function getEducationCards(opts) {
  return searchArticles(opts).map((a) => ({
    slug: a.slug, title: a.title, excerpt: a.excerpt, category: a.category,
    path: `/education/${a.slug}`, readingTime: a.readingTime,
    dateModified: a.dateModified || a.datePublished, featured: !!a.featured,
  }));
}

// Route resolver for an article path -> the metadata entry, or null.
export function getEducationArticle(slug) {
  return publishedArticles().find((a) => a.slug === slug) || null;
}

// Same-topic related articles (category match + shared tags), ranked.
export function getRelatedArticles(slug, limit = 3) {
  const a = getEducationArticle(slug);
  if (!a) return [];
  const mine = new Set(a.tags || []);
  return publishedArticles()
    .filter((o) => o.slug !== slug && !o.hidden && (o.category === a.category || (o.tags || []).some((t) => mine.has(t))))
    .map((o) => ({ o, score: (o.category === a.category ? 1 : 0) + (o.tags || []).filter((t) => mine.has(t)).length }))
    .sort((x, y) => y.score - x.score)
    .slice(0, limit)
    .map((x) => ({ label: x.o.title, path: `/education/${x.o.slug}` }));
}

// ============================================================================
// DYNAMIC SITEMAP — the registry is the single source of truth. This pure-data
// list feeds the build-time sitemap generator (scripts/generate-sitemap.mjs) and
// any auditing. Static routes + every registry page + Education hub/categories/
// articles. No hand-maintained URL list.
// ============================================================================
const STATIC_SITEMAP_ROUTES = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/about", priority: 0.8, changefreq: "monthly" },
  { path: "/aesthetics", priority: 0.9, changefreq: "monthly" },
  { path: "/concerns", priority: 0.8, changefreq: "monthly" },
  { path: "/wellness", priority: 0.9, changefreq: "monthly" },
  { path: "/family-medicine", priority: 0.9, changefreq: "monthly" },
  { path: "/assessment", priority: 0.9, changefreq: "monthly" },
  { path: "/providers", priority: 0.8, changefreq: "monthly" },
  { path: "/memberships", priority: 0.7, changefreq: "monthly" },
  { path: "/contact", priority: 0.8, changefreq: "monthly" },
  { path: "/notes", priority: 0.5, changefreq: "monthly" },
  { path: "/education", priority: 0.8, changefreq: "weekly" },
];

export function getSitemapEntries() {
  const out = [];
  STATIC_SITEMAP_ROUTES.forEach((r) => out.push({ loc: r.path, priority: r.priority, changefreq: r.changefreq }));
  REGISTRY_URLS.forEach((u) => out.push({ loc: `/${u.slug}`, priority: u.priority, changefreq: u.changefreq }));
  EDU_CATEGORIES.forEach((c) => out.push({ loc: `/education/topics/${c.slug}`, priority: 0.6, changefreq: "weekly" }));
  publishedArticles().forEach((a) => out.push({ loc: `/education/${a.slug}`, priority: 0.7, changefreq: "monthly", lastmod: a.dateModified || a.datePublished }));
  bridalSitemapRoutes().forEach((r) => out.push({ loc: r.loc, priority: r.priority, changefreq: r.changefreq }));
  // de-dupe by loc, stable order
  const seen = new Set();
  return out.filter((e) => (seen.has(e.loc) ? false : (seen.add(e.loc), true)));
}
