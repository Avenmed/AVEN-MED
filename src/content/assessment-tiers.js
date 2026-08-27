/* AVEN MED — the two AVEN Assessment tiers.
 *
 * ONE canonical source for the tier FACTS that appear on more than one page:
 * tier name, how the price is presented, duration, the Aura inclusion, the
 * fee-credit line, and the Comprehensive-only written plan.
 *
 * Before this existed, /assessment and the three service templates each carried
 * their own copy of the same facts, and they had already drifted: the templates
 * showed a flat "$50" where /assessment shows "From $50", dropped the Quick
 * duration entirely, and wrote "Aura Skin Analysis" against the site-wide
 * "Aura skin analysis".
 *
 * What lives here is only what is genuinely shared. Each page keeps its own
 * prose — the blurb and the discipline-specific evaluation items (facial vs
 * skin vs wellness) are page voice, not configuration, and stay where they are.
 *
 * CLINICAL: an Aura skin analysis is part of EVERY AVEN Assessment. It is a
 * property of both tiers here, never an optional extra a page can omit.
 *
 * The two tiers stay distinct products: `writtenPlan` is Comprehensive-only and
 * must never be added to Quick.
 */

export const QUICK_ASSESSMENT = {
  key: "quick",
  label: "Quick",
  name: "Quick AVEN Assessment",
  // "From $50" — the price is a starting point, not a flat fee. The prefix is
  // part of the fact, which is why it lives here and not in one page's markup.
  pricePrefix: "From",
  price: "$50",
  durationNote: "focused visit",
  durationInclusion: "5–10 minutes with Alaa",
  auraInclusion: "Aura skin analysis included",
  writtenPlanInclusion: null,
  creditInclusion: "The $50 is credited toward your treatment",
  creditNote: "Credited toward your treatment.",
  detailPath: "/assessment/quick-assessment",
};

export const COMPREHENSIVE_ASSESSMENT = {
  key: "comprehensive",
  label: "Comprehensive",
  name: "Comprehensive AVEN Assessment",
  pricePrefix: null,
  price: "$200",
  durationNote: "up to 60 minutes",
  durationInclusion: "Up to 60 minutes with Alaa",
  auraInclusion: "Aura skin analysis included",
  // Comprehensive ONLY. The written plan is the distinction between the tiers.
  writtenPlanInclusion: "Written plan — yours to keep",
  creditInclusion: "The $200 is credited toward your treatment",
  creditNote: "Credited toward your treatment.",
  detailPath: "/assessment/comprehensive-assessment",
};

export const ASSESSMENT_TIERS = [QUICK_ASSESSMENT, COMPREHENSIVE_ASSESSMENT];

/* Compose a tier's inclusion list: the shared facts in a fixed order, with the
 * page's own discipline-specific items in the middle. Duration first, then what
 * this page evaluates, then Aura (always), then the written plan (Comprehensive
 * only). `credit` is opt-in because some layouts already carry `creditNote` as a
 * separate line and would otherwise say it twice. */
export function tierInclusions(tier, extras = [], { credit = false } = {}) {
  return [
    tier.durationInclusion,
    ...extras,
    tier.auraInclusion,
    ...(tier.writtenPlanInclusion ? [tier.writtenPlanInclusion] : []),
    ...(credit ? [tier.creditInclusion] : []),
  ];
}
