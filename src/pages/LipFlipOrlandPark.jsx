/* AVEN MED — Lip Flip in Orland Park. Data module for the content registry.
 *
 * Treatment Page v2 (neuromodulator family, Wave 1). Content only; layout and SEO
 * come from TreatmentTemplate. Opts into `editorial` + `sectionOrder`, both of
 * which are per-page, so no other treatment page is affected by anything here.
 *
 * CLINICAL SOURCING. Two source classes, kept separate:
 *  - OBJECTIVE FACT: contraindications, the neuromuscular-disorder warning, the
 *    pregnancy/lactation position and the boxed warning are drawn from the FDA
 *    labeling for onabotulinumtoxinA (BOTOX Cosmetic §1, §4, §5, §8.1, §8.2 and
 *    the boxed warning; BOTOX §5.5).
 *  - AVEN POLICY: the 18+ minimum, the pregnancy/breastfeeding practice position,
 *    medication review and the ~14-day follow-up are AVEN's own, already approved.
 * A lip flip is NOT among the labeled cosmetic indications (which are glabellar,
 * lateral canthal, forehead and platysma), so no labeled frequency data exists for
 * it. That is stated plainly rather than filled in with invented numbers. */
import React from 'react';

const lipFlip = {
  slug: "lip-flip-orland-park",
  priority: 0.9,
  seo: {
    title: "Lip Flip in Orland Park, IL — No Filler | AVEN MED",
    description:
      "A lip flip in Orland Park, IL — a few units of neuromodulator that reveal more upper lip, with no filler. Alaa Mashal, MSN, APRN, FNP-BC.",
  },
  treatmentName: "Lip Flip",
  treatmentShort: "Lip Flip",
  tags: ["injectable", "neuromodulator", "lips"],
  breadcrumbName: "Lip Flip in Orland Park",
  procedureName: "Lip Flip — Neuromodulator Upper-Lip Treatment",
  procedureDescription:
    "A lip flip in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC — a few units of neuromodulator along the upper lip that gently everts it for a subtle, natural enhancement without filler.",

  editorial: true,
  sectionOrder: [
    "hero", "whyAven", "approach", "provider", "assessment", "treats",
    "howItWorks", "comparison", "whatToExpect", "safety", "faq",
    "related", "relatedConcerns", "bridal", "finalCta",
  ],

  hero: {
    eyebrow: "Aesthetics · Neuromodulators",
    headline: <>Lip Flip in <em>Orland Park.</em></>,
    subheadline:
      "A few units of neuromodulator, no filler — the upper lip rolls gently outward and shows a little more of itself. Nothing is added.",
  },

  // Philosophy only. The decision factors live in `approach` — putting a list here
  // as well is the duplication the Botox prototype removed.
  whyAven: {
    headline: <>The smallest treatment still deserves a <em>reason.</em></>,
    intro:
      "A lip flip is quick, inexpensive and easy to add to a visit, which is exactly why it gets sold as an afterthought. AVEN treats it as a decision: a few units placed in the muscle that shapes your mouth is still a treatment, and it should be the right one before it is the fast one.",
    body:
      "So the honest answer is sometimes that a flip will not do what you are picturing. If you want more lip rather than more visible lip, that is filler, and you will be told so plainly rather than sold a flip that disappoints in a month. Recommending less, or nothing, is part of the work.",
    practitionerLine:
      "Every injection at AVEN is placed by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner and the only injector at the practice.",
  },

  approach: {
    eyebrow: "How the Plan Is Made",
    headline: <>Planned around how your mouth <em>moves.</em></>,
    body: [
      "A lip flip is not a measurement, it is a judgment about movement. Before anything is drawn up, Alaa looks at where your lip sits at rest, how far it travels when you speak and smile, how much upper lip and tooth you show, and how strong the muscle around your mouth actually is. A lip that already everts easily needs almost nothing; a firm, downward-pulling lip behaves differently.",
      "That reading also decides whether a flip is the right tool at all. The treatment changes how the lip sits — it cannot change how much lip there is. When the goal is fullness, shape or structure, the honest answer is filler, or nothing for now.",
    ],
    considers: [
      "Resting lip position and shape",
      "How the lip moves when you speak and smile",
      "How much upper lip and tooth you show",
      "Strength of the muscle around the mouth",
      "Overall lip and facial proportion",
      "Previous lip treatment, where relevant",
    ],
    closing:
      "Because the dose is small, there is little room to correct an overcorrection — so AVEN begins conservatively and reviews, rather than chasing the effect in one visit.",
    // MEDIA SLOT INTENTIONALLY EMPTY — no existing asset honestly depicts a
    // perioral assessment. See the Wave 1 report for the asset that would fit.
  },

  provider: {
    eyebrow: "Who Treats You",
    headline: <>One practitioner, every <em>visit.</em></>,
    body: [
      "AVEN MED is founded and led by Alaa Mashal, MSN, APRN, FNP-BC — Founder & Clinical Director, a board-certified Family Nurse Practitioner, and the practice's only injector. The person who assesses your lip is the person who treats it, and the person who sees the result when you come back.",
      "That continuity matters more here than the size of the treatment suggests. A lip flip is a small dose in a mobile, expressive area, and knowing how your lip responded last time is what makes the next visit better rather than a fresh guess.",
    ],
  },

  assessmentIntro: {
    headline: <>We look before we <em>treat.</em></>,
    body:
      "No unit count is quoted before your mouth has been assessed — a number given in advance is a guess with a price on it. An Aura skin analysis is part of every AVEN Assessment; the lip plan itself comes from Alaa's clinical examination of how your lip moves, not from an image. The fee is credited toward your treatment.",
  },
  assessmentTiers: {
    quickExtras: ["A clear answer on flip, filler, or neither"],
    comprehensiveExtras: ["Full facial and lip analysis", "Long-term treatment planning"],
  },

  treats: {
    intro:
      "A lip flip relaxes the muscle along the upper lip border so the lip rolls slightly outward and shows more of its own pink. It adds no volume and no structure. Depending on your anatomy and goals, it may be considered for:",
    items: [
      { name: "A More Visible Upper Lip", note: "More lip on show, without adding anything to it." },
      { name: "More Lip in a Smile", note: "A touch more upper lip revealed when you smile." },
      { name: "A Softer Gummy Smile", note: "In some cases, slightly less gum shown when smiling." },
      { name: "A Conservative First Step", note: "A small, temporary option before considering filler." },
      { name: "Alongside Filler", note: "A small flip planned with conservative filler, where both suit the lip.", path: "/lip-fillers-orland-park" },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: <>Changing how the lip sits, not how much lip there <em>is.</em></>,
    body: [
      "The upper lip is ringed by a muscle that closes and purses the mouth. When it contracts, it pulls the lip border inward and downward — which is part of why a lip can read as thin even when there is a reasonable amount of tissue there. A neuromodulator temporarily reduces the signal reaching that muscle where it is placed, so it contracts a little less strongly and the lip border rolls gently outward, or 'flips'.",
      "Nothing is added and nothing is filled. What changes is position, not quantity — the same lip, sitting differently. This is the whole reason a flip and a filler are not interchangeable: one adjusts a muscle, the other adds hyaluronic acid gel to create volume and shape.",
      "It also explains why the dose is deliberately tiny. The muscle being relaxed is the one you use to speak, drink and seal your lips, so the aim is to soften its pull slightly rather than switch it off. Because the effect is temporary and the dose small, a lip flip is shorter-lived than most neuromodulator treatments.",
    ],
  },

  comparison: {
    eyebrow: "Lip Flip · Lip Filler",
    headline: "A flip, a filler, or both?",
    intro:
      "These are different tools with different jobs, and neither is the upgrade of the other. A flip changes how the lip sits; filler changes how much lip there is. Which one serves your goal is what the Assessment settles.",
    items: [
      { name: "Lip Flip", note: "A few units relax the muscle at the upper lip border so it rolls outward. No volume, no shape change, and the shortest-lived of the neuromodulator treatments." },
      { name: "Lip Filler", note: "Hyaluronic acid gel adds hydration, volume and structure. It is placed incrementally, lasts far longer, and can be dissolved if needed.", path: "/lip-fillers-orland-park" },
      { name: "Sometimes Both", note: "For some lips a small flip alongside conservative filler reads more naturally than either alone. Planned to your mouth, never as a package." },
    ],
    closing: "We recommend the least that reaches your goal — never the most that could be sold.",
  },

  whatToExpect: [
    { label: "Treatment", body: "A few units are placed along the upper lip border with fine needles. It takes a few minutes, and most people describe a couple of quick pinches." },
    { label: "Recovery", body: "Most people return to their day straight away. Avoid pressing, rubbing or massaging the area, and skip strenuous exercise and lying flat for the rest of the day. Brief redness or a small bruise is possible — the lip is a well-supplied area." },
    { label: "Onset", body: "The change begins over several days and settles at about two weeks. It is subtle by design; if you are looking for an obvious difference, this is not the treatment for it." },
    { label: "Follow-Up", body: "We review the settled result at around fourteen days — how the lip sits, how it moves, whether it is even, and how you feel about it. Whether any adjustment is appropriate is a clinical judgment made then, not a promise made now." },
    { label: "Longevity", body: "Because so little product is used, a lip flip is short-lived — commonly a couple of months, less than most neuromodulator treatments. This varies from person to person." },
  ],

  safety: {
    eyebrow: "Safety & Candidacy",
    headline: <>What to know <em>first.</em></>,
    intro:
      "A lip flip is small, but it is still a prescription medical treatment, and it is not right for everyone. Your history is reviewed before anything is recommended. The points below are drawn from the approved prescribing information for botulinum toxin, together with AVEN's own practice policies.",
    items: [
      { name: "Common after treatment", note: "Injection-site reactions — tenderness, redness, swelling or bruising — can occur, and headache is among the most commonly reported effects of botulinum toxin treatment. These are generally temporary." },
      { name: "Effects specific to the lip", note: "The muscle treated is the one that closes and shapes your mouth, so while the effect is present some people notice their lip feels different in use — forming certain sounds, drinking from a straw, or getting a firm lip seal. The dose is kept small precisely to limit this, and it resolves as the effect wears off." },
      { name: "What the labeling does and doesn't cover", note: "A lip flip is not among the cosmetic uses in the approved labeling, so there is no labeled figure for how often lip-specific effects occur. We would rather tell you that than quote a number we cannot support." },
      { name: "When it should not be used", note: "Botulinum toxin is not given to anyone with a known hypersensitivity to a botulinum toxin preparation or to any ingredient in it, or where there is an infection at the intended injection site." },
      { name: "Tell us about", note: "Neuromuscular conditions — including myasthenia gravis and Lambert-Eaton syndrome — and other peripheral motor neuropathic or neuromuscular junction disorders warrant monitoring with botulinum toxin. Bring your medications, supplements and medical history; never stop a prescribed medication for an aesthetic treatment without speaking to the clinician who prescribed it." },
      { name: "Age, pregnancy and breastfeeding", note: "AVEN treats adults 18 and over for aesthetic injectables, and does not perform elective aesthetic treatment during pregnancy or while breastfeeding. The labeling notes there are no adequate data in pregnancy and no data on whether it is present in human milk." },
      { name: "Effects are temporary", note: "The result fades gradually as muscle activity returns. It cannot be dissolved or switched off on request — unlike filler — which is exactly why the first dose is a conservative one." },
    ],
    closing:
      "Botulinum toxin products carry a boxed warning that effects can, rarely, spread beyond the injection site, with symptoms such as swallowing or breathing difficulty that can be serious. If you have any difficulty swallowing, speaking or breathing after treatment, seek emergency medical care. For anything else that doesn't seem right, contact AVEN.",
  },

  faqs: [
    { q: "What is a lip flip?", a: "A few units of neuromodulator placed along the upper lip border. Relaxing that muscle lets the lip roll gently outward, so a little more of it shows. Nothing is added to the lip — it is a change in position, not in volume." },
    { q: "Does a lip flip add volume like filler?", a: "No. A flip adds no product and no structure; it changes how the existing lip sits. If you want genuine fullness or shape, hyaluronic acid lip filler is the tool for that, and we will tell you so rather than sell you a flip that won't get you there." },
    { q: "How long does a lip flip last?", a: "Because so little product is used, it is the shortest-lived of the neuromodulator treatments — commonly around a couple of months, though this varies from person to person." },
    { q: "Will it change how I talk or drink?", a: "The muscle treated is the one you use to purse and seal your lips, so some people notice a difference in forming certain sounds, using a straw, or getting a firm lip seal while the effect is present. Keeping the dose small is how that is limited, and it wears off with the treatment." },
    { q: "Can a lip flip help a gummy smile?", a: "Sometimes. Relaxing the upper lip can reduce how much gum shows in a smile for some people. Whether it suits your smile specifically is an individual assessment, not a given." },
    { q: "Can I have a lip flip and filler together?", a: "For some lips, yes — a small flip alongside conservative filler can read more naturally than either alone. It is planned to your mouth at the assessment, and it is not automatically the better option." },
    { q: "Is there downtime?", a: "Little for most people, and most return to their day straight away. Avoid pressing or massaging the area, skip strenuous exercise and lying flat for the rest of the day, and expect that brief redness or a small bruise is possible." },
    { q: "Can it be reversed if I don't like it?", a: "No. Unlike hyaluronic acid filler, a neuromodulator cannot be dissolved — it wears off on its own over the following weeks. That is the main reason we start conservatively rather than aiming for the full effect at the first visit." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  related: [
    { label: "Lip Fillers in Orland Park", path: "/lip-fillers-orland-park" },
    { label: "Botox in Orland Park", path: "/botox-orland-park" },
    { label: "Cheek Fillers in Orland Park", path: "/cheek-fillers-orland-park" },
    { label: "Chin Fillers in Orland Park", path: "/chin-fillers-orland-park" },
  ],

  finalCta: {
    headline: <>A small change, done <em>right.</em></>,
    copy: "Begin with an AVEN Assessment to find out whether a lip flip, filler, or neither is the honest answer for your lips.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default lipFlip;
