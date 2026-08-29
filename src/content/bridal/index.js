/* AVEN MED — Bridal Journey registry.
 *
 * The single source of truth for the AVEN Bridal Journey: routing, hero,
 * introduction, timeline stages, service/education references, FAQs, the
 * assessment-form field schema, the timeline-builder data model, SEO, and the
 * dynamic-sitemap routes all derive from here. PURE DATA — no JSX / no React —
 * so the app AND the build-time sitemap generator can both import it.
 *
 * STATUS: Architecture approved — production v1.0 (permanent AVEN feature). Only
 * the CONTENT is still in progress; the fields below intentionally hold approved
 * placeholders until copy is finalized. Do not make structural changes unless a
 * future feature genuinely requires them.
 *  - No final marketing copy. Fields that still need approved copy hold clearly
 *    marked "[Placeholder — …]" strings.
 *  - No invented medical claims, treatment recommendations, pricing, packages,
 *    guarantees, or approved timings. Stage labels/date-ranges below are the ones
 *    specified for the program; the goals / service assignments / safety notes
 *    inside each stage are PLACEHOLDERS to be filled with provider-approved
 *    guidance. Treatments are referenced by registry slug (never re-described)
 *    so existing service pages stay the source of truth.
 *  - The registry is built to support multiple wedding-related journeys later
 *    (see BRIDAL_AUDIENCES) without restructuring — only the "bride" journey is
 *    enabled now. */

const PLACEHOLDER = "[Placeholder — approved copy pending]";

// ---- Future journey audiences (extensibility only; not built yet) ----------
// Proves the data model supports more journeys later. Only "bride" is enabled.
export const BRIDAL_AUDIENCES = [
  { id: "bride", label: "Bride", enabled: true },
  { id: "groom", label: "Groom", enabled: false },
  { id: "mother-of-bride", label: "Mother of the Bride", enabled: false },
  { id: "mother-of-groom", label: "Mother of the Groom", enabled: false },
  { id: "wedding-party", label: "Wedding Party", enabled: false },
  { id: "engagement", label: "Engagement Preparation", enabled: false },
];

// ---- Lifecycle / campaign metadata (optional, internal) --------------------
// Organizes content by the patient's broader WEDDING-PLANNING lifecycle — NOT a
// medical schedule and NOT a calendar season. This metadata is optional and does
// not affect the current page unless a consumer explicitly reads it. Future
// consumers: campaign segmentation, personalized content, email sequences,
// education filtering, seasonal landing experiences, CRM tagging, patient-portal
// milestones, timeline reminders, and paid-ad campaigns. Attached at the journey,
// education-reference, and resource levels (the cleanest levels — no duplication
// at the timeline-stage level, which stays purely a planning-window structure).
export const BRIDAL_LIFECYCLE_STAGES = [
  "engagement", "planning", "preparation", "wedding", "post-wedding", "maintenance",
];

// ---- Timeline stages -------------------------------------------------------
// Labels + date ranges are the program's approved stage structure. monthsMin/
// monthsMax bound each window (in months before the wedding) purely for factual
// date math in the timeline builder — NOT a medical schedule. Everything else is
// PLANNING-LEVEL guidance only: each stage explains how planning changes as the
// date approaches. It states no treatment calendar, no cutoff date, no protocol
// and no recovery promise — every clinical decision stays with Alaa at the
// Assessment. `safetyNote` and `consultationGuidance` remain placeholders (they
// render nothing) because they would require clinical specifics AVEN has not
// approved. relatedServices/relatedArticles hold registry slugs only (empty
// until approved).
export const BRIDAL_TIMELINE_STAGES = [
  {
    id: "12-plus-months", label: "12+ months before", range: "12+ months before",
    monthsMin: 12, monthsMax: Infinity,
    intro:
      "The advantage this far out is simple: nothing has to be rushed, and nothing has to be combined. The approaches that work gradually — collagen-led treatment, a resurfacing series, the daily routine that takes longest to show — are only genuinely on the table when there is a year to give them.",
    goals: [
      "Begin with an AVEN Assessment, so the plan is built from your face rather than from a date.",
      "Settle the daily part first — skincare is the slowest thing to show and the easiest thing to start.",
    ],
    relatedServices: [], relatedArticles: [],
    consultationGuidance: PLACEHOLDER,
    safetyNote: "[Placeholder — timing/safety guidance to be provided by the clinical team]",
    image: null, ctaLabel: "Discuss this stage", ctaHref: "/bridal-journey/assessment", enabled: true,
  },
  {
    id: "9-12-months", label: "9–12 months before", range: "9–12 months before",
    monthsMin: 9, monthsMax: 12,
    intro:
      "This is where a course begins rather than finishes. Anything that works as a series is started here so there is room to watch how your skin actually responds between sessions instead of compressing them.",
    goals: [
      "Start any planned course now, while the gaps between sessions can stay comfortable.",
      "Record where you are starting from — photographs at the beginning earn their place later.",
    ],
    relatedServices: [], relatedArticles: [],
    consultationGuidance: PLACEHOLDER,
    safetyNote: "[Placeholder — timing/safety guidance to be provided by the clinical team]",
    image: null, ctaLabel: "Discuss this stage", ctaHref: "/bridal-journey/assessment", enabled: true,
  },
  {
    id: "6-9-months", label: "6–9 months before", range: "6–9 months before",
    monthsMin: 6, monthsMax: 9,
    intro:
      "The reviewing stage. The first results are readable now, so the plan is adjusted to how your skin answered rather than how it was expected to. This is also the last stretch where introducing something new is comfortable rather than tight.",
    goals: [
      "Review what has actually changed, and adjust the plan to the evidence.",
      "If something new belongs in the plan, this is the unhurried moment to add it.",
    ],
    relatedServices: [], relatedArticles: [],
    consultationGuidance: PLACEHOLDER,
    safetyNote: "[Placeholder — timing/safety guidance to be provided by the clinical team]",
    image: null, ctaLabel: "Discuss this stage", ctaHref: "/bridal-journey/assessment", enabled: true,
  },
  {
    id: "3-6-months", label: "3–6 months before", range: "3–6 months before",
    monthsMin: 3, monthsMax: 6,
    intro:
      "The plan narrows. Attention moves to what is already working rather than to what else could be added — not because adding is unsafe, but because there is progressively less room to see how you respond and to change course if you would rather.",
    goals: [
      "Consolidate: refine what is working instead of widening the plan.",
      "Keep maintenance predictable so nothing needs catching up later.",
    ],
    relatedServices: [], relatedArticles: [],
    consultationGuidance: PLACEHOLDER,
    safetyNote: "[Placeholder — timing/safety guidance to be provided by the clinical team]",
    image: null, ctaLabel: "Discuss this stage", ctaHref: "/bridal-journey/assessment", enabled: true,
  },
  {
    id: "1-3-months", label: "1–3 months before", range: "1–3 months before",
    monthsMin: 1, monthsMax: 3,
    intro:
      "Conservative by design. Anything in this window is best kept to treatment your face has already met, where both you and Alaa know how you respond. A first-ever treatment this close is discouraged as a matter of planning — you would be learning your response and preparing for a wedding at the same time.",
    goals: [
      "Stay with the familiar — repeat what has already been assessed on you.",
      "Leave room for anything to settle, and for a review if you want one.",
    ],
    relatedServices: [], relatedArticles: [],
    consultationGuidance: PLACEHOLDER,
    safetyNote: "[Placeholder — timing/safety guidance to be provided by the clinical team]",
    image: null, ctaLabel: "Discuss this stage", ctaHref: "/bridal-journey/assessment", enabled: true,
  },
  {
    id: "wedding-month", label: "Wedding month", range: "The wedding month",
    monthsMin: 0.25, monthsMax: 1,
    intro:
      "The plan stops advancing and starts being protected. This month is about steadiness — keeping the routine you have built and letting everything that was done earlier read as your own skin rather than as recent treatment.",
    goals: [
      "Hold the routine steady rather than changing it.",
      "Raise anything on your mind now, while there is still time to talk it through.",
    ],
    relatedServices: [], relatedArticles: [],
    consultationGuidance: PLACEHOLDER,
    safetyNote: "[Placeholder — timing/safety guidance to be provided by the clinical team]",
    image: null, ctaLabel: "Discuss this stage", ctaHref: "/bridal-journey/assessment", enabled: true,
  },
  {
    id: "wedding-week", label: "Wedding week", range: "The wedding week",
    monthsMin: 0, monthsMax: 0.25,
    intro:
      "This week belongs to rest and routine rather than to planning. AVEN deliberately does not prescribe from a page what can or cannot happen in the final days — that is a clinical judgment Alaa makes with you, and the right time to raise it is at your Assessment rather than in the week itself.",
    goals: [
      "Keep to the routine your skin already knows.",
      "Anything you are unsure about is a conversation with Alaa, not a decision made from a website.",
    ],
    relatedServices: [], relatedArticles: [],
    consultationGuidance: PLACEHOLDER,
    safetyNote: "[Placeholder — timing/safety guidance to be provided by the clinical team]",
    image: null, ctaLabel: "Discuss this stage", ctaHref: "/bridal-journey/assessment", enabled: true,
  },
  {
    id: "after-wedding", label: "After the wedding", range: "After the wedding",
    monthsMin: -Infinity, monthsMax: 0,
    intro:
      "The date stops driving. Care returns to the long arc it was always meant to follow — maintenance planned around your face rather than around a calendar, and anything deliberately deferred can now be considered properly.",
    goals: [
      "Return to maintenance at a rhythm set by your face, not by a date.",
      "Revisit anything that was set aside, with the time it deserves.",
    ],
    relatedServices: [], relatedArticles: [],
    consultationGuidance: PLACEHOLDER,
    safetyNote: "[Placeholder — timing/safety guidance to be provided by the clinical team]",
    image: null, ctaLabel: "Discuss this stage", ctaHref: "/bridal-journey/assessment", enabled: true,
  },
];

// ---- Service connections (references only — never re-described here) --------
// Registry slugs of existing AVEN service pages that brides commonly ask about.
// The page resolves these to live labels/links via the content registry, so
// service pages remain the single source of truth. Appropriateness for any
// individual is determined only at the AVEN Assessment (surfaced with a
// disclaimer on the page) — this is NOT a statement that each fits every bride.
export const BRIDAL_SERVICE_SLUGS = [
  "botox-orland-park",
  "lip-fillers-orland-park",
  "cheek-fillers-orland-park",
  "jawline-fillers-orland-park",
  "chin-fillers-orland-park",
  "sculptra-orland-park",
  "skinpen-microneedling-orland-park",
  "chemical-peels-orland-park",
  "facials-orland-park",
  "acne-treatment-orland-park",
  "acne-scar-treatment-orland-park",
  "skin-rejuvenation-orland-park",
  "medical-grade-skincare-orland-park",
  "wellness/medical-weight-loss",
];

// ---- Education connections (planned Education Center articles) --------------
// References only. These articles are NOT written yet and are NOT in the
// Education index, so the page renders them as non-linking "planned" cards until
// they exist. slugs are proposed (education route = /education/<slug>).
// lifecycleStages here are content/campaign tags (see BRIDAL_LIFECYCLE_STAGES) —
// optional, used later for bridal-education filtering. Not medical timing.
export const BRIDAL_EDUCATION_REFS = [
  { slug: "when-to-begin-wedding-skincare", title: "When to begin wedding skincare", status: "planned", lifecycleStages: ["engagement", "planning"] },
  { slug: "treatment-timing-before-a-wedding", title: "Understanding treatment timing before a wedding", status: "planned", lifecycleStages: ["planning", "preparation"] },
  { slug: "why-not-to-try-new-treatments-before-an-event", title: "Why new treatments shouldn't be scheduled right before an event", status: "planned", lifecycleStages: ["preparation", "wedding"] },
  { slug: "how-to-prepare-for-a-bridal-consultation", title: "How to prepare for a bridal consultation", status: "planned", lifecycleStages: ["engagement", "planning"] },
  { slug: "building-a-medical-grade-skincare-routine", title: "Creating a medical-grade skincare routine", status: "planned", lifecycleStages: ["planning", "preparation"] },
  { slug: "managing-acne-before-a-wedding", title: "Managing acne before a wedding", status: "planned", lifecycleStages: ["planning", "preparation"] },
  { slug: "injectable-treatment-timing", title: "What to know about injectable treatment timing", status: "planned", lifecycleStages: ["planning", "preparation"] },
  { slug: "wedding-week-skincare-guidance", title: "Wedding-week skincare guidance", status: "planned", lifecycleStages: ["wedding"] },
  { slug: "bridal-skincare-myths", title: "Bridal skincare myths", status: "planned", lifecycleStages: ["engagement", "planning"] },
  { slug: "post-wedding-maintenance", title: "Post-wedding maintenance", status: "planned", lifecycleStages: ["post-wedding", "maintenance"] },
];

// ---- FAQs (medically responsible placeholder answers; final copy pending) ---
export const BRIDAL_FAQS = [
  { q: "When should I begin my bridal journey?", a: "There's no single right time — earlier simply allows more flexibility. The best starting point for you is decided together at your AVEN Assessment." },
  { q: "Is the journey personalized?", a: "Yes. Every bridal plan is individual and is created with your provider at a consultation — this page is an overview, not a plan." },
  { q: "Do I need to know which treatments I want?", a: "No. You don't need a list beforehand; the Assessment is where goals and options are discussed." },
  { q: "What happens during the Bridal Assessment?", a: "It's a consultation-first conversation about your goals, timing, and questions — no obligation to proceed." },
  { q: "Can I start if my wedding is only a few months away?", a: "You're welcome to begin at any point before your date; what's appropriate is determined at your consultation." },
  { q: "Can members of my wedding party participate?", a: "Anyone is welcome to begin with their own AVEN Assessment — care is always individual, so each person is assessed and planned for on their own terms. Ask at your Assessment and we will help you think it through." },
  { q: "Are treatment results guaranteed?", a: "No. AVEN does not guarantee outcomes; care is individualized and discussed honestly at consultation." },
  { q: "Can treatments be performed immediately before the wedding?", a: "Timing is a clinical decision made with your provider and is not something this page prescribes." },
  { q: "Is every treatment appropriate for every patient?", a: "No. Appropriateness is always individual and is determined during the AVEN Assessment." },
];

// ---- Assessment form field schema ------------------------------------------
// Drives the Bridal Assessment form (registry-driven, extensible). NON-CLINICAL,
// CRM/pre-consultation planning info ONLY — no skin/treatment/wellness/medical or
// open-ended clinical questions (removed by design). Submission upserts a Podium CRM
// contact server-side; it does not diagnose, recommend treatment, or book anything.
// types: text | email | tel | date | select | checkbox
export const BRIDAL_ASSESSMENT_FIELDS = [
  { id: "name", label: "Full name", type: "text", required: true, autoComplete: "name", placeholder: "First and last name" },
  { id: "email", label: "Email", type: "email", required: true, autoComplete: "email", placeholder: "you@example.com" },
  // Required: Podium identifies contacts primarily by phone, so a lead without one
  // cannot be deduped reliably.
  { id: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", placeholder: "(708) 555-0142" },
  { id: "weddingDate", label: "Wedding date", type: "date", required: false },
  { id: "engagementDate", label: "Engagement date", type: "date", required: false, help: "Optional" },
  { id: "consultationTiming", label: "When would you like to consult?", type: "select", required: false,
    options: ["As soon as possible", "Within 1 month", "1–3 months", "Just exploring for now"] },
  { id: "appointmentTiming", label: "Preferred appointment timing", type: "select", required: false,
    options: ["Weekday mornings", "Weekday afternoons", "Evenings", "Weekends", "No preference"] },
  { id: "referral", label: "How did you hear about AVEN?", type: "select", required: false,
    options: ["Instagram", "Friend or family", "Google", "A current patient", "Other"] },
  { id: "consent", label: "I understand this form helps AVEN prepare for a consultation and is not a request for medical treatment or a booking.", type: "checkbox", required: true },
];

// ---- Timeline builder data model ("Build My Bridal Timeline") ---------------
// PLANNING AID ONLY (permanent design constraint). This tool is a planning/
// education aid — it must
// NOT diagnose, prescribe, determine candidacy, or generate definitive medical
// recommendations. The only computed output is factual date math (months
// remaining, and which approved stage-window the date falls in) plus generic
// next-step + education pointers. No treatment-personalization logic is
// implemented; approved rules can be added to computeTimelinePlan() later.
export const BRIDAL_TIMELINE_BUILDER = {
  inputs: [
    { id: "weddingDate", label: "Wedding date", type: "date", required: true },
    { id: "planningStage", label: "Where are you in planning?", type: "select",
      options: ["Just engaged", "Actively planning", "Wedding is soon", "Not sure"] },
    { id: "concerns", label: "What's on your mind? (optional)", type: "multiselect",
      options: ["Skin health", "Injectables", "Wellness", "Just exploring"] },
  ],
  disclaimer: "This is a planning and education tool only. It does not diagnose, recommend treatment, or determine what's right for you. Your personalized plan is created after a consultation with a qualified AVEN provider.",
};

// Pure, side-effect-free planner. Given inputs (and a reference "now" date passed
// in by the caller — never read the clock here), returns factual planning context
// only. NO medical logic. Returns null if there's no usable wedding date.
export function computeTimelinePlan({ weddingDate } = {}, nowISO) {
  if (!weddingDate || !nowISO) return null;
  const wed = new Date(weddingDate + "T00:00:00");
  const now = new Date(nowISO + "T00:00:00");
  if (isNaN(wed.getTime()) || isNaN(now.getTime())) return null;
  const msPerDay = 86400000;
  const days = Math.round((wed - now) / msPerDay);
  const months = days / 30.437; // approximate; display-only
  const stage = BRIDAL_TIMELINE_STAGES.find((s) => months > s.monthsMin && months <= s.monthsMax)
    || (months <= 0 ? BRIDAL_TIMELINE_STAGES[BRIDAL_TIMELINE_STAGES.length - 1] : BRIDAL_TIMELINE_STAGES[0]);
  return {
    daysRemaining: days,
    monthsRemaining: Math.max(0, Math.round(months)),
    isPast: days < 0,
    currentStageId: stage ? stage.id : null,
    currentStageLabel: stage ? stage.label : null,
    // Intentionally NO treatment recommendations — planning topics to DISCUSS at
    // an Assessment only. Approved, provider-authored rules can extend this later.
    nextStep: { label: "Begin Your Bridal Journey", href: "/bridal-journey/assessment" },
  };
}

// ---- SEO (per bridal route) — factual, non-marketing, no claims/pricing -----
export const BRIDAL_ROUTE_SEO = {
  "/bridal-journey": {
    title: "The AVEN Bridal Journey · AVEN MED, Orland Park IL",
    description: "The AVEN Bridal Journey — a personalized, consultation-first approach to preparing for your wedding across aesthetics, skincare, and wellness, planned around your date with a qualified provider in Orland Park, IL.",
  },
  "/bridal-journey/assessment": {
    title: "Bridal Assessment · The AVEN Bridal Journey, Orland Park IL",
    description: "Begin the AVEN Bridal Journey with a Bridal Assessment — a consultation-first conversation that helps our team prepare for your visit. Orland Park, IL.",
  },
};

// ---- Patient journey (the AVEN experience, first contact → long-term care) --
// Distinct from the treatment timeline: the timeline answers "WHEN might planning
// occur?"; this answers "WHAT does the experience with AVEN look like?" Structural
// placeholders only — no polished marketing copy, and nothing here implies every
// patient receives the same treatment plan (that's individualized at consultation;
// the component surfaces that disclaimer). Reusable for any future audience.
export const BRIDAL_PATIENT_JOURNEY = {
  eyebrow: "Your AVEN Bridal Experience",
  title: PLACEHOLDER,
  introduction:
    "From the first conversation to long after the day itself, this is the shape the relationship takes.",
  steps: [
    { id: "assessment", order: 1, title: "Begin Your Bridal Assessment", description: "Everything starts with a conversation rather than a treatment. You share your date and what is on your mind; Alaa listens first.", icon: "", ctaLabel: "Begin Your Bridal Journey", ctaDestination: "/bridal-journey/assessment", enabled: true },
    { id: "meet-provider", order: 2, title: "Meet With Your Provider", description: "You meet the clinician who will actually care for you. The person who assesses you is the person who treats you, at every visit.", icon: "", ctaLabel: "Meet Your Provider", ctaDestination: "/providers", enabled: true },
    { id: "personalized-plan", order: 3, title: "Receive Your Personalized Plan", description: "You leave with a plan built around your face, your goals and the time you have — not a package, and not a template.", icon: "", ctaLabel: "", ctaDestination: "", enabled: true },
    { id: "begin-journey", order: 4, title: "Begin Your Journey", description: "Care begins at a pace that leaves room to see how you respond, and to adjust before anything is repeated.", icon: "", ctaLabel: "", ctaDestination: "", enabled: true },
    { id: "prepare-wedding", order: 5, title: "Prepare for the Wedding", description: "As the date comes closer the plan gets more conservative on purpose, so nothing is still settling when it matters.", icon: "", ctaLabel: "", ctaDestination: "", enabled: true },
    { id: "maintenance", order: 6, title: "Continue With Long-Term Maintenance", description: "After the wedding, care carries on at a rhythm set by your face rather than by a date.", icon: "", ctaLabel: "", ctaDestination: "", enabled: true },
  ],
};

// ---- Resources (FUTURE downloadable / interactive materials) ---------------
// Placeholders only. NO real PDFs/checklists/downloads/gated forms/lead-capture
// exist or are created here. All items are status:"planned" + enabled:false with
// empty destinations, so the BridalResources component renders NOTHING publicly
// (no empty section, no broken links). Reusable for future groom/wedding-party/
// wellness/event journeys.
export const BRIDAL_RESOURCES = {
  eyebrow: "Bridal Resources",
  title: PLACEHOLDER,
  introduction: PLACEHOLDER,
  items: [
    { id: "bridal-checklist", slug: "bridal-journey-checklist", title: "Bridal Journey Checklist", description: "", resourceType: "checklist", format: "pdf", lifecycleStages: ["engagement", "planning"], audience: ["bride"], thumbnail: "", destination: "", external: false, requiresForm: false, status: "planned", enabled: false },
    { id: "treatment-planner", slug: "bridal-treatment-planner", title: "Bridal Treatment Planner", description: "", resourceType: "planner", format: "interactive", lifecycleStages: ["planning", "preparation"], audience: ["bride"], thumbnail: "", destination: "", external: false, requiresForm: false, status: "planned", enabled: false },
    { id: "wedding-week-guide", slug: "wedding-week-skincare-guide", title: "Wedding-Week Skincare Guide", description: "", resourceType: "guide", format: "pdf", lifecycleStages: ["wedding"], audience: ["bride"], thumbnail: "", destination: "", external: false, requiresForm: false, status: "planned", enabled: false },
    { id: "skincare-tracker", slug: "bridal-skincare-tracker", title: "Bridal Skincare Tracker", description: "", resourceType: "tracker", format: "interactive", lifecycleStages: ["planning", "preparation"], audience: ["bride"], thumbnail: "", destination: "", external: false, requiresForm: false, status: "planned", enabled: false },
    { id: "consult-prep-guide", slug: "bridal-consultation-preparation-guide", title: "Bridal Consultation Preparation Guide", description: "", resourceType: "guide", format: "pdf", lifecycleStages: ["engagement", "planning"], audience: ["bride"], thumbnail: "", destination: "", external: false, requiresForm: false, status: "planned", enabled: false },
    { id: "post-wedding-guide", slug: "post-wedding-maintenance-guide", title: "Post-Wedding Maintenance Guide", description: "", resourceType: "guide", format: "pdf", lifecycleStages: ["post-wedding", "maintenance"], audience: ["bride"], thumbnail: "", destination: "", external: false, requiresForm: false, status: "planned", enabled: false },
  ],
};

// ---- The journeys ----------------------------------------------------------
// Only "bride" is enabled. New journeys slot in with the same shape.
export const BRIDAL_JOURNEYS = [
  {
    id: "bride",
    slug: "bridal-journey",
    title: "The AVEN Bridal Journey",
    shortTitle: "Bridal Journey",
    category: "journey",
    audience: "bride",
    status: "draft",          // CONTENT status: draft | published (architecture is v1.0/approved)
    enabled: true,
    lifecycleStages: BRIDAL_LIFECYCLE_STAGES,  // optional/internal — see note above
    seo: BRIDAL_ROUTE_SEO["/bridal-journey"],
    // Restrained, non-medical TEMPORARY copy so the (currently noindex) page never
    // shows literal placeholder text. Final approved bridal content replaces these.
    hero: {
      eyebrow: "The AVEN Bridal Journey",
      headline: "Begin early. Arrive as yourself.",
      supporting: "A considered, consultation-first way to prepare for your wedding — unhurried, individual, and planned around your date with your AVEN provider.",
      primaryCtaLabel: "Begin Your Bridal Journey",
      primaryCtaHref: "/bridal-journey/assessment",
      secondaryCtaLabel: "Explore the Timeline",
      secondaryCtaHref: "#timeline",
      media: null,                     // bridal photography/video slot (placeholder)
      weddingDatePrompt: true,
    },
    introduction: {
      eyebrow: "The Journey",
      headline: "An overview, not a plan.",
      body: [
        "The AVEN Bridal Journey is a way to think about your care in the months before your wedding — calm, individual, and shaped by a conversation with your provider.",
        "It is an overview, not a medical plan. What's right for you, and when, is decided together at your AVEN Assessment.",
      ],
      note: PLACEHOLDER,
    },
    timelineStages: BRIDAL_TIMELINE_STAGES,
    patientJourney: BRIDAL_PATIENT_JOURNEY,
    resources: BRIDAL_RESOURCES,
    relatedServices: BRIDAL_SERVICE_SLUGS,
    relatedArticles: BRIDAL_EDUCATION_REFS,
    faqs: BRIDAL_FAQS,
    // FAQ answers are restrained but not owner-approved yet → do NOT emit FAQPage
    // schema until they are finalized (visible FAQ still renders).
    structuredData: { includeFaq: false, includeService: true },
    primaryCta: { label: "Begin Your Bridal Journey", href: "/bridal-journey/assessment" },
    secondaryCta: { label: "Explore the Timeline", href: "#timeline" },
  },
];

// ---- Helpers (pure) --------------------------------------------------------
export function getBridalJourney(slug) {
  return BRIDAL_JOURNEYS.find((j) => j.slug === slug && j.enabled !== false) || null;
}
export function enabledBridalJourneys() {
  return BRIDAL_JOURNEYS.filter((j) => j.enabled !== false);
}
export function getBridalTimeline(journeyId) {
  const j = BRIDAL_JOURNEYS.find((x) => x.id === journeyId);
  return (j ? j.timelineStages : BRIDAL_TIMELINE_STAGES).filter((s) => s.enabled !== false);
}

// The Bridal Journey is indexable only once its content is published (status).
// While "draft" (placeholder copy), the routes stay LIVE and in the nav, but
// seo.js marks them noindex and they're excluded from the sitemap. Restores
// automatically when status flips to "published".
export function bridalIndexable() {
  const j = getBridalJourney("bridal-journey");
  return !!j && j.status === "published";
}

// All live bridal routes regardless of publish status — used for PRERENDERING
// (the routes are reachable even while draft; they simply render noindex).
export function bridalPublicRoutes() {
  const rows = [];
  enabledBridalJourneys().forEach((j) => {
    rows.push(`/${j.slug}`);
    rows.push(`/${j.slug}/assessment`);
  });
  return rows;
}

// Sitemap rows for the dynamic sitemap (consumed by registry.getSitemapEntries).
// Only the public landing + its assessment entry point — and only while published.
export function bridalSitemapRoutes() {
  if (!bridalIndexable()) return [];
  const rows = [];
  enabledBridalJourneys().forEach((j) => {
    rows.push({ loc: `/${j.slug}`, priority: 0.9, changefreq: "monthly" });
    rows.push({ loc: `/${j.slug}/assessment`, priority: 0.5, changefreq: "monthly" });
  });
  return rows;
}

// Only resources that are enabled AND have a destination render publicly — so
// planned/disabled placeholders never create an empty section or a broken link.
export function enabledResources(journey) {
  const items = (journey && journey.resources && journey.resources.items) || [];
  return items.filter((r) => r.enabled && r.destination);
}

// ---- Lightweight, DEV-only registry validation -----------------------------
// No dependencies. Returns an array of issue strings (empty = valid). Existence
// checks are dependency-injected so this pure module needs no import of the JSX
// content registry: pass serviceSlugExists / articlePublished from the caller
// (see the DEV call in app.jsx). Never runs in production (guarded by import.meta
// .env.DEV there), so it has no production performance impact.
export function validateBridal({ serviceSlugExists, articlePublished } = {}) {
  const issues = [];
  const seenJourneyIds = new Set();
  const seenSlugs = new Set();
  const validLc = new Set(BRIDAL_LIFECYCLE_STAGES);
  const badLc = (arr, where) => (arr || []).forEach((v) => { if (!validLc.has(v)) issues.push(`${where}: invalid lifecycle "${v}"`); });

  BRIDAL_JOURNEYS.forEach((j) => {
    if (seenJourneyIds.has(j.id)) issues.push(`Duplicate journey id: ${j.id}`);
    seenJourneyIds.add(j.id);
    if (seenSlugs.has(j.slug)) issues.push(`Duplicate journey slug: ${j.slug}`);
    seenSlugs.add(j.slug);
    if (typeof j.enabled !== "boolean") issues.push(`Journey ${j.id}: enabled must be boolean`);
    badLc(j.lifecycleStages, `Journey ${j.id}`);

    const stageIds = new Set();
    (j.timelineStages || []).forEach((s) => {
      if (stageIds.has(s.id)) issues.push(`Journey ${j.id}: duplicate timeline-stage id "${s.id}"`);
      stageIds.add(s.id);
    });

    const stepIds = new Set();
    ((j.patientJourney && j.patientJourney.steps) || []).forEach((st) => {
      if (stepIds.has(st.id)) issues.push(`Journey ${j.id}: duplicate patient-journey step id "${st.id}"`);
      stepIds.add(st.id);
    });

    if (serviceSlugExists) (j.relatedServices || []).forEach((slug) => {
      if (!serviceSlugExists(slug)) issues.push(`Journey ${j.id}: service reference not found in registry: "${slug}"`);
    });

    (j.relatedArticles || []).forEach((a) => {
      badLc(a.lifecycleStages, `Article "${a.slug}"`);
      if (a.status === "published" && articlePublished && !articlePublished(a.slug)) {
        issues.push(`Journey ${j.id}: article marked published but not found: "${a.slug}"`);
      }
    });

    ((j.resources && j.resources.items) || []).forEach((r) => {
      badLc(r.lifecycleStages, `Resource "${r.id}"`);
      if (r.enabled && !r.destination) issues.push(`Resource "${r.id}": enabled but has no destination`);
    });

    if (j.structuredData && j.structuredData.includeFaq) {
      const withoutAnswer = (j.faqs || []).filter((f) => f.q && !f.a);
      if (withoutAnswer.length) issues.push(`Journey ${j.id}: FAQ schema requested but ${withoutAnswer.length} question(s) have no visible answer`);
    }
  });
  return issues;
}
