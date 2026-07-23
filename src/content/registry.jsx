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
// Future category templates plug in here (wellness, familyMedicine, membership,
// education) and get registered the same way.

import botox from '../pages/BotoxOrlandPark.jsx';
import lipFillers from '../pages/LipFillersOrlandPark.jsx';
import cheek from '../pages/CheekFillersOrlandPark.jsx';
import jawline from '../pages/JawlineFillersOrlandPark.jsx';
import chin from '../pages/ChinFillersOrlandPark.jsx';
import skinpen from '../pages/SkinPenMicroneedlingOrlandPark.jsx';
import sculptra from '../pages/SculptraOrlandPark.jsx';

// type -> template component
export const TEMPLATES = {
  treatment: TreatmentTemplate,
};

// Grouped by type so new categories slot in cleanly.
const TREATMENTS = [botox, lipFillers, cheek, jawline, chin, skinpen, sculptra];

const GROUPS = [
  { type: 'treatment', pages: TREATMENTS },
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
