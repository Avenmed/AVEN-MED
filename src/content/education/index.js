/* AVEN MED — Education Center content index.
 *
 * The single source of truth for the Education Center's routing, hub/category
 * listings, search, filtering, related content, breadcrumbs, structured data, and
 * the dynamic sitemap. PURE DATA — no JSX / no React — so both the app and the
 * build-time sitemap generator can import it.
 *
 * SCALE MODEL (built for hundreds of articles):
 *  - This index holds only lightweight article METADATA (cards) — never bodies.
 *    The hub, search, related, category pages and sitemap all read from here, so
 *    they stay fast no matter how many articles exist.
 *  - Article BODIES live one-per-file under src/pages/education/articles/<slug>.jsx
 *    and are lazy-loaded per article (code-split) by ArticleTemplate. Adding an
 *    article = one metadata entry here + one body file there.
 *
 * ARCHITECTURE-ONLY: EDU_ARTICLES is intentionally EMPTY. No article content is
 * generated in this phase. */

// ---- Categories (8, approved) ----------------------------------------------
// Editorial: label, slug, order, blurb, and an optional relatedHub linking the
// category back to the matching live section for internal linking.
export const EDU_CATEGORIES = [
  { slug: "aesthetics", label: "Aesthetics", order: 10, relatedHub: "/aesthetics",
    blurb: "Injectables, facial balancing, and the thinking behind natural-looking results." },
  { slug: "skin-health", label: "Skin Health", order: 20, relatedHub: "/concerns",
    blurb: "Acne, texture, tone, scarring, and building healthy skin over time." },
  { slug: "wellness", label: "Wellness", order: 30, relatedHub: "/wellness",
    blurb: "Prevention-first care — labs, metabolic health, IV therapy, and vitality." },
  { slug: "family-medicine", label: "Family Medicine", order: 40, relatedHub: "/family-medicine",
    blurb: "Everyday primary care, chronic-condition support, and staying well." },
  { slug: "patient-guides", label: "Patient Guides", order: 50, relatedHub: "/assessment",
    blurb: "What to expect, how to prepare, and how to get the most from your care." },
  { slug: "aven-philosophy", label: "AVEN Philosophy", order: 60, relatedHub: "/assessment",
    blurb: "How AVEN approaches medicine — restraint, continuity, and honest care." },
  { slug: "news-research", label: "News & Research", order: 70,
    blurb: "Evidence updates, FDA approvals, emerging treatments, and scientific developments." },
  { slug: "practice-updates", label: "Practice Updates", order: 80,
    blurb: "AVEN announcements, new technology and providers, and community involvement." },
];

// ---- Articles (metadata index) ---------------------------------------------
// EMPTY by design in this phase. Shape of a future entry (pure data, NO JSX):
//   {
//     slug: "unique-article-slug",           // → /education/<slug>
//     title: "…",
//     excerpt: "One–two sentence summary for cards, search, and meta description.",
//     category: "skin-health",               // one EDU_CATEGORIES slug
//     subcategories: ["acne"],               // optional facets
//     tags: ["acne", "scarring"],            // powers search + related
//     authorId: "aven-editorial",            // → people.js
//     reviewerId: "alaa-mashal",             // clinical reviewer (required)
//     datePublished: "2026-08-01",
//     dateModified: "2026-08-01",
//     readingTime: 6,                        // minutes
//     featured: false,                       // editor's-pick strip on the hub
//     hidden: false,                         // hide from hub/search (keep route)
//     published: true,                       // false = draft (no route/sitemap/index)
//   }
export const EDU_ARTICLES = [];

// ---- Helpers (pure) --------------------------------------------------------
export function categoryBySlug(slug) {
  return EDU_CATEGORIES.find((c) => c.slug === slug) || null;
}
export const categoriesInOrder = () => [...EDU_CATEGORIES].sort((a, b) => a.order - b.order);

// Published, non-hidden articles only (for public listings).
export function publishedArticles() {
  return EDU_ARTICLES.filter((a) => a.published !== false);
}

// Published, visible articles in a category (drives indexation + sitemap gating
// of the category page: index only once a topic has ≥1 published article).
export function publishedArticlesInCategory(slug) {
  return publishedArticles().filter((a) => a.category === slug && !a.hidden);
}
export function categoryHasArticles(slug) {
  return publishedArticlesInCategory(slug).length > 0;
}
