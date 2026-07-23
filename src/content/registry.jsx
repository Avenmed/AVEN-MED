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
// Future category templates plug in here (wellness, familyMedicine, membership,
// education) and get registered the same way.

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

// type -> template component
export const TEMPLATES = {
  treatment: TreatmentTemplate,
  concern: ConcernTemplate,
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

const GROUPS = [
  { type: 'treatment', pages: TREATMENTS },
  { type: 'concern', pages: CONCERNS },
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

// Per-route SEO for seo.js: { "/slug": { title, description } }.
export const REGISTRY_SEO = Object.fromEntries(ENTRIES.map((e) => [`/${e.slug}`, e.seo]));

// For sitemap generation / auditing.
export const REGISTRY_URLS = ENTRIES.map((e) => ({ slug: e.slug, priority: e.priority, changefreq: e.changefreq }));
