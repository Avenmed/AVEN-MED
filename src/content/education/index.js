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
// Lightweight METADATA only (no bodies). Shape of an entry (pure data, NO JSX):
//   {
//     slug: "unique-article-slug",           // → /education/<slug>
//     title: "…",
//     shortTitle: "…",                       // optional terse label (cards/related)
//     excerpt: "One–two sentence summary for cards, search, and meta description.",
//     category: "skin-health",               // one EDU_CATEGORIES slug
//     tags: ["acne", "scarring"],            // powers search + related
//     authorId: "aven-editorial",            // → people.js
//     reviewerId: "alaa-mashal",             // clinical reviewer (required)
//     datePublished: "2026-08-22",
//     dateModified: "2026-08-22",            // last-reviewed / last-updated
//     readingTime: 6,                        // minutes
//     relatedArticles: ["other-slug"],       // optional curated article→article (resolved to published only)
//     featured: false,                       // editor's-pick strip on the hub
//     hidden: false,                         // hide from hub/search (keep route)
//     status: "published",                   // "published" | "clinical-review" | "draft"
//   }
// The BODY file (src/pages/education/articles/<slug>.jsx) carries the readable
// content and its OWN links/refs: { keyTakeaways?, body[], faqs?, relatedServices?,
// relatedConcerns?, references? } — see ArticleTemplate.
//
// STATUS GATE (hard requirement): an article is public ONLY when status is
// "published" — which must mean a clinician has actually reviewed it. "clinical-
// review" and "draft" are fully held: no route, no sitemap, no index, and not even
// resolvable by direct URL (getEducationArticle reads publishedArticles()).
export const EDU_ARTICLES = [
  // ---- WAVE 1 (Phase 8.8A) — PUBLISHED 2026-08-29 ---------------------------
  // Authored by the AVEN Editorial Team, clinically reviewed by Alaa Mashal, MSN,
  // APRN, FNP-BC, and published on her approval. Her decisions are recorded in the
  // article bodies: Botox settles at 10–14 days; duration "about 3 to 4 months" is a
  // typical range, never a promise; GLP-1 risk stays high level with candidacy
  // reviewed individually; the weight-loss programme is clinician-guided, not
  // physician-directed; SkinPen follows the device labeling (22+, isotretinoin);
  // filler carries AVEN's 18+ practice policy and the full vascular escalation.
  // Every citation points at a specific verified document, never an organisation
  // home page. A future article stays at "clinical-review" until Alaa reviews it.
  {
    slug: "the-aven-assessment-what-to-expect",
    title: "The AVEN Assessment: What to Expect and Why It Comes First",
    shortTitle: "The AVEN Assessment",
    excerpt: "How the AVEN Assessment works — the two consultation tiers, what happens during your visit, and why every plan at AVEN begins with an evaluation rather than a treatment.",
    category: "patient-guides",
    tags: ["assessment", "consultation", "first visit", "patient guide"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 5, featured: true, status: "published",
  },
  {
    slug: "what-is-botox-how-it-works",
    title: "What Is Botox and How Does It Work?",
    shortTitle: "What Is Botox?",
    excerpt: "A clear, medically reviewed explanation of what Botox is, how botulinum toxin softens dynamic lines, which areas it treats, and what to realistically expect.",
    category: "aesthetics",
    tags: ["botox", "neuromodulator", "wrinkles", "injectables"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 5, status: "published",
  },
  {
    slug: "how-long-does-botox-last",
    title: "How Long Does Botox Last?",
    shortTitle: "How Long Does Botox Last?",
    excerpt: "Botox typically lasts about three to four months, but duration varies. Here's what influences how long results last — and why the effect is temporary by design.",
    category: "aesthetics",
    tags: ["botox", "duration", "neuromodulator", "injectables"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 4, status: "published",
  },
  {
    slug: "how-to-choose-a-med-spa",
    title: "How to Choose a Med Spa or Aesthetic Provider",
    shortTitle: "Choosing a Med Spa",
    excerpt: "What actually matters when choosing a med spa or aesthetic provider — who performs your treatment, the quality of the consultation, safety, and the red flags worth slowing down for.",
    category: "patient-guides",
    tags: ["choosing a provider", "med spa", "safety", "patient guide"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 5, status: "published",
  },
  {
    slug: "what-is-sculptra-vs-filler",
    title: "What Is Sculptra and How Is It Different From Filler?",
    shortTitle: "Sculptra vs. Filler",
    excerpt: "Sculptra stimulates your own collagen gradually, while hyaluronic-acid fillers add volume immediately. Understanding the two mechanisms is the real difference.",
    category: "aesthetics",
    tags: ["sculptra", "filler", "biostimulator", "volume"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 5, status: "published",
  },
  {
    slug: "what-is-skinpen-microneedling",
    title: "What Is SkinPen Microneedling?",
    shortTitle: "SkinPen Microneedling",
    excerpt: "How SkinPen microneedling works, what it targets — texture, acne scarring, pore appearance — and what a treatment, recovery, and realistic timeline look like.",
    category: "aesthetics",
    tags: ["microneedling", "skinpen", "collagen", "texture", "acne scars"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 5, status: "published",
  },
  {
    slug: "medical-weight-loss-what-a-program-includes",
    title: "Medical Weight Loss: What a Clinician-Guided Program Includes",
    shortTitle: "Medical Weight Loss",
    excerpt: "What a clinician-guided medical weight-loss program actually includes: a medical evaluation, individualized goals, nutrition and lifestyle support, monitoring, and medication only when appropriate.",
    category: "wellness",
    tags: ["medical weight loss", "metabolic health", "nutrition", "wellness"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 5, status: "published",
  },
  {
    slug: "glp-1-medications-for-weight-management",
    title: "GLP-1 Medications for Weight Management: An Educational Guide",
    shortTitle: "GLP-1 for Weight Management",
    excerpt: "An educational guide to GLP-1 receptor agonists for weight management — how they work, approved uses, side effects, and why they belong inside a supervised medical program.",
    category: "wellness",
    tags: ["glp-1", "weight management", "medication", "wellness"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 5, status: "published",
  },
  {
    slug: "lip-filler-first-time-patients",
    title: "Lip Filler: What First-Time Patients Should Know",
    shortTitle: "Lip Filler for First-Timers",
    excerpt: "What first-time lip filler patients should know — how hyaluronic-acid filler works, what the appointment and recovery feel like, and why restraint matters more than volume.",
    category: "aesthetics",
    tags: ["lip filler", "dermal filler", "injectables", "first time"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 5, status: "published",
  },
  {
    slug: "acne-scars-vs-acne-marks",
    title: "Acne Scars vs. Acne Marks: Understanding the Difference",
    shortTitle: "Acne Scars vs. Marks",
    excerpt: "Acne marks are discoloration that often fades; acne scars are textural changes that usually need treatment. Knowing the difference guides the right plan.",
    category: "skin-health",
    tags: ["acne scars", "acne marks", "hyperpigmentation", "skin health"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 5, status: "published",
  },
  // ---- BRIDAL EDUCATION LIBRARY — HELD in "clinical-review" -----------------
  // Ten articles authored to complete the Bridal Journey's education layer. They
  // answer "what does this mean when planning around a wedding?" — the general
  // Education articles answer "what is this treatment?" — and link across rather
  // than restating. Slugs match BRIDAL_EDUCATION_REFS in content/bridal/index.js
  // exactly; that registry's own status field must flip to "published" in the SAME
  // commit as these, or the Bridal cards will stay hidden while the routes are live.
  // Filed under existing categories only (no new topic page is created).
  // datePublished below is the AUTHORING date — set it to the real publish date when
  // Alaa's review completes, as was done for the Wave 1 articles.
  {
    slug: "when-to-begin-wedding-skincare",
    title: "When to Begin Wedding Skincare",
    shortTitle: "When to Begin",
    excerpt: "Starting earlier buys options rather than obligations. How to think about a bridal timeline without turning it into a treatment calendar.",
    category: "patient-guides",
    tags: ["bridal", "planning", "skincare", "timing"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 5, status: "clinical-review",
  },
  {
    slug: "treatment-timing-before-a-wedding",
    title: "Understanding Treatment Timing Before a Wedding",
    shortTitle: "Treatment Timing",
    excerpt: "Treatments differ less in what they do than in how they behave over time — immediate, settling, or cumulative. Why that shapes sequencing.",
    category: "patient-guides",
    tags: ["bridal", "timing", "planning", "treatments"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 6, status: "clinical-review",
  },
  {
    slug: "why-not-to-try-new-treatments-before-an-event",
    title: "Why New Treatments Shouldn't Be Scheduled Right Before an Event",
    shortTitle: "Nothing New Before an Event",
    excerpt: "Not because treatments are dangerous, but because individual response is learned by having one. As a date approaches, predictability is worth more.",
    category: "patient-guides",
    tags: ["bridal", "safety", "timing", "planning"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 6, status: "clinical-review",
  },
  {
    slug: "how-to-prepare-for-a-bridal-consultation",
    title: "How to Prepare for a Bridal Consultation",
    shortTitle: "Preparing for Your Consultation",
    excerpt: "What to bring, what to say, and why what does not bother you is as useful as what does. Practical preparation for a bridal assessment.",
    category: "patient-guides",
    tags: ["bridal", "assessment", "consultation", "patient guide"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 6, status: "clinical-review",
  },
  {
    slug: "building-a-medical-grade-skincare-routine",
    title: "Creating a Medical-Grade Skincare Routine",
    shortTitle: "A Skincare Routine That Works",
    excerpt: "What \"medical-grade\" does and does not mean, why shorter routines outperform longer ones, and why the daily part is the first thing to settle.",
    category: "skin-health",
    tags: ["bridal", "skincare", "medical-grade", "routine"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 6, status: "clinical-review",
  },
  {
    slug: "managing-acne-before-a-wedding",
    title: "Managing Acne Before a Wedding",
    shortTitle: "Acne Before a Wedding",
    excerpt: "Active acne, the marks it leaves and true scarring are three different problems. Why sequence matters more than urgency, and why no date can be promised.",
    category: "skin-health",
    tags: ["bridal", "acne", "skin health", "planning"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 6, status: "clinical-review",
  },
  {
    slug: "injectable-treatment-timing",
    title: "What to Know About Injectable Treatment Timing",
    shortTitle: "Injectable Timing",
    excerpt: "How a neuromodulator, a hyaluronic-acid filler and a biostimulator each behave between the appointment and the day — without a countdown.",
    category: "aesthetics",
    tags: ["bridal", "injectables", "botox", "filler", "timing"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 7, status: "clinical-review",
  },
  {
    slug: "wedding-week-skincare-guidance",
    title: "Wedding-Week Skincare Guidance",
    shortTitle: "Wedding Week",
    excerpt: "The final week is not the moment to introduce anything new. What to do instead, and why treatment timing this close is individualized rather than prescribed.",
    category: "patient-guides",
    tags: ["bridal", "wedding week", "skincare", "planning"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 5, status: "clinical-review",
  },
  {
    slug: "bridal-skincare-myths",
    title: "Bridal Skincare Myths",
    shortTitle: "Bridal Myths",
    excerpt: "More is not better, medical-grade is not a regulated category, a facial does not fix everything, and not every bride needs injectables.",
    category: "patient-guides",
    tags: ["bridal", "myths", "skincare", "expectations"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 6, status: "clinical-review",
  },
  {
    slug: "post-wedding-maintenance",
    title: "Post-Wedding Maintenance",
    shortTitle: "After the Wedding",
    excerpt: "The date stops driving. What is worth keeping, what is worth stopping, and why a plan that never gets smaller was probably never a plan.",
    category: "aesthetics",
    tags: ["bridal", "maintenance", "long-term care", "after"],
    authorId: "aven-editorial", reviewerId: "alaa-mashal",
    datePublished: "2026-08-29", dateModified: "2026-08-29",
    readingTime: 5, status: "clinical-review",
  },
];

// ---- Helpers (pure) --------------------------------------------------------
export function categoryBySlug(slug) {
  return EDU_CATEGORIES.find((c) => c.slug === slug) || null;
}
export const categoriesInOrder = () => [...EDU_CATEGORIES].sort((a, b) => a.order - b.order);

// The single source of truth for "is this article public?" — status must be
// "published". Legacy `published:false` is honored as not-public for back-compat.
export function isPublishedArticle(a) {
  if (a.status) return a.status === "published";
  return a.published !== false;
}

// Published, non-hidden articles only (for public listings).
export function publishedArticles() {
  return EDU_ARTICLES.filter(isPublishedArticle);
}

// Published, visible articles in a category (drives indexation + sitemap gating
// of the category page: index only once a topic has ≥1 published article).
export function publishedArticlesInCategory(slug) {
  return publishedArticles().filter((a) => a.category === slug && !a.hidden);
}
export function categoryHasArticles(slug) {
  return publishedArticlesInCategory(slug).length > 0;
}
