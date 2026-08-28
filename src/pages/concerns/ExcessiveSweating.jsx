/* AVEN MED — Patient Concern: Excessive Sweating (Hyperhidrosis). Registry data module. */
import React from 'react';

const excessiveSweating = {
  slug: "concerns/excessive-sweating",
  priority: 0.8,
  changefreq: "monthly",
  seo: {
    title: "Excessive Sweating in Orland Park, IL — Hyperhidrosis Options | AVEN MED",
    description: "Understand excessive sweating (hyperhidrosis) — why it happens and the individualized treatment options at AVEN MED in Orland Park, IL. Every plan begins with the AVEN Assessment.",
  },
  tags: ["sweating", "medical"],
  concernName: "Excessive Sweating",
  concernShort: "Excessive sweating",
  breadcrumbName: "Excessive Sweating",
  conditionName: "Hyperhidrosis (Excessive Sweating)",
  hub: { group: "Medical Concerns", order: 100, blurb: "Hyperhidrosis — a common, treatable medical condition." },

  hero: {
    eyebrow: "Patient Concerns · Medical",
    headline: <>Excessive <em>Sweating.</em></>,
    subheadline:
      "Sweating far beyond what's needed to cool the body — hyperhidrosis — is a genuine, common, and treatable medical condition. It isn't about hygiene or nerves, and you don't have to just live with it.",
  },

  causes: {
    headline: <>Why some people sweat <em>excessively.</em></>,
    intro:
      "Hyperhidrosis happens when sweat glands are overactive, signaling far more than the body needs for temperature control. It falls into two broad types:",
    items: [
      { name: "Primary Hyperhidrosis", note: "Overactive nerve signals to sweat glands, often focused on the underarms, hands, feet, or face — usually without an underlying illness." },
      { name: "A Genetic Component", note: "Primary hyperhidrosis frequently runs in families and often starts in youth." },
      { name: "Secondary Hyperhidrosis", note: "Sweating caused by another condition or a medication, which needs medical evaluation." },
      { name: "Localized Overactivity", note: "Specific areas — commonly underarms — sweat excessively while the rest of the body is normal." },
      { name: "Triggers", note: "Heat, stress, and anxiety can amplify sweating but aren't the root cause." },
      { name: "Not Hygiene-Related", note: "Hyperhidrosis has nothing to do with cleanliness — it's a physiological overactivity." },
    ],
  },

  signs: {
    headline: <>What patients often <em>notice.</em></>,
    intro:
      "Hyperhidrosis is more than occasional sweating — it interferes with daily life. Common experiences include:",
    items: [
      { name: "Soaked Clothing", note: "Visible underarm sweat that ruins or stains clothes." },
      { name: "Sweating at Rest", note: "Excessive sweating even when cool or inactive." },
      { name: "Damp Hands or Feet", note: "Clammy palms that affect handshakes, writing, or grip." },
      { name: "Antiperspirant Failure", note: "Ordinary or even clinical antiperspirants not being enough." },
      { name: "Social Impact", note: "Avoiding certain clothes, activities, or contact out of self-consciousness." },
      { name: "Daily Disruption", note: "Sweating that genuinely interferes with work or confidence." },
    ],
  },

  riskFactors: {
    intro: "Some factors are associated with excessive sweating:",
    items: [
      "A family history of hyperhidrosis",
      "Onset in childhood or adolescence",
      "Heat, humidity, and physical exertion (as triggers)",
      "Stress and anxiety (as triggers)",
      "Certain underlying conditions or medications (in secondary cases)",
    ],
  },

  whenToSeek: {
    intro: "Excessive sweating is worth evaluating — it's treatable, and occasionally a sign of something else. Consider an assessment when:",
    items: [
      "Sweating interferes with work, clothing, or social life",
      "Clinical antiperspirants aren't enough",
      "You sweat excessively even when cool or at rest",
      "Sweating started suddenly or is new in adulthood",
      "It's accompanied by other symptoms",
    ],
    note: "Sudden, new, or generalized sweating — or sweating with other symptoms — should be medically evaluated to rule out an underlying cause. This page is educational, not a diagnosis.",
  },

  assessment: {
    headline: <>A treatable condition, taken <em>seriously.</em></>,
    intro:
      "Hyperhidrosis deserves a proper evaluation — both to confirm it's primary and to plan effective, appropriate treatment. The AVEN Assessment reviews your pattern and history so care is individualized and anything that needs further medical work-up is flagged.",
    identifies: [
      { name: "Pattern & Areas", note: "Where and how much you sweat, and how it affects daily life." },
      { name: "Primary vs. Secondary", note: "Whether an underlying cause or medication may be involved." },
      { name: "Prior Measures", note: "What you've already tried, from antiperspirants to other options." },
      { name: "Suitability", note: "Whether in-office treatment is appropriate for you." },
    ],
  },

  treatmentOptions: {
    headline: <>Real relief, medically <em>directed.</em></>,
    intro:
      "For focal hyperhidrosis, particularly of the underarms, effective in-office treatment is available and can dramatically reduce sweating for months at a time. Depending on your assessment, options may include:",
    items: [
      { name: "Hyperhidrosis Treatment", path: "/hyperhidrosis-treatment-orland-park", note: "Neuromodulator injections that calm overactive sweat glands — the primary in-office option." },
    ],
    closing: "The right approach depends on your pattern and history. Whether in-office treatment suits you is decided together at your AVEN Assessment — and we'll refer on if an underlying cause needs evaluation.",
  },

  lifestyle: {
    intro: "Everyday measures can help manage sweating alongside treatment:",
    items: [
      "Clinical-strength antiperspirants, applied correctly",
      "Breathable, natural-fiber clothing",
      "Identifying and managing personal triggers",
      "Stress-management techniques where anxiety is a trigger",
      "Sweat-resistant garments or liners when helpful",
    ],
    note: "These help many people but often aren't enough on their own for true hyperhidrosis — which is where medical treatment comes in.",
  },

  faqs: [
    { q: "Is excessive sweating a real medical condition?", a: "Yes. Hyperhidrosis is a recognized medical condition in which sweat glands are overactive. It's common, it's not about hygiene or nerves, and it's genuinely treatable — you don't have to simply put up with it." },
    { q: "How is excessive sweating treated?", a: "For focal hyperhidrosis, especially of the underarms, neuromodulator injections can calm the overactive sweat glands and markedly reduce sweating for months. Clinical topicals and lifestyle measures may also be part of the plan, tailored to you." },
    { q: "How long does treatment last?", a: "In-office neuromodulator treatment for underarm sweating typically lasts several months before it's repeated. The exact duration varies by person, and we'll set realistic expectations for you." },
    { q: "Does treatment stop sweating completely?", a: "It substantially reduces sweating in the treated area for many people, but we don't promise it eliminates it entirely, and the body still regulates temperature elsewhere. The goal is meaningful, life-improving relief." },
    { q: "Is it safe to reduce sweating in one area?", a: "Treating a focal area like the underarms is well-established and doesn't prevent your body from cooling itself, since sweating continues normally elsewhere. Suitability is confirmed during your assessment." },
    { q: "Could my sweating signal another problem?", a: "Sometimes. Sweating that's sudden, new in adulthood, generalized, or accompanied by other symptoms can be 'secondary' to another cause and needs medical evaluation. Part of the assessment is distinguishing this." },
    { q: "Will antiperspirants be enough?", a: "For some people, clinical-strength antiperspirants help, and they're often a reasonable first step. But true hyperhidrosis frequently outpaces them, which is when in-office treatment becomes worthwhile." },
    { q: "Is excessive sweating caused by poor hygiene?", a: "Not at all. Hyperhidrosis is a physiological overactivity of sweat glands and has nothing to do with cleanliness. It's a medical issue, and it's treated as one." },
    { q: "Why start with an assessment?", a: "Because we first confirm the type of hyperhidrosis and rule out an underlying cause, then plan appropriate treatment. An assessment ensures your care is safe, individualized, and effective." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>You don't have to just live with <em>it.</em></>,
    copy: "Begin with an AVEN Assessment to evaluate your excessive sweating and find an appropriate, effective plan.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default excessiveSweating;
