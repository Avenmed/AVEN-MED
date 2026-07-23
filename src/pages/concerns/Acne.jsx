/* AVEN MED — Patient Concern: Acne. Registry data module. */
import React from 'react';

const acne = {
  slug: "concerns/acne",
  priority: 0.8,
  changefreq: "monthly",
  seo: {
    title: "Acne in Orland Park, IL — Causes & Treatment Options | AVEN MED",
    description: "Understand acne — its drivers, patterns, and why it's a medical concern — and the individualized treatment options at AVEN MED in Orland Park, IL. Every plan begins with the AVEN Assessment.",
  },
  tags: ["acne", "oil", "skin-quality"],
  concernName: "Acne",
  concernShort: "Acne",
  breadcrumbName: "Acne",
  conditionName: "Acne Vulgaris",

  hero: {
    eyebrow: "Patient Concerns · Medical Skin",
    headline: <>Acne.</>,
    subheadline:
      "Acne is a medical condition, not a hygiene problem or a phase to wait out. Understanding what's driving yours is the first step toward calmer skin — and protecting it from scarring.",
  },

  causes: {
    headline: <>What actually drives <em>acne.</em></>,
    intro:
      "Acne almost always involves several factors at once, which is why a single product rarely solves it. The core drivers are:",
    items: [
      { name: "Excess Oil", note: "Overactive oil glands, often influenced by hormones, feed breakouts." },
      { name: "Clogged Pores", note: "Dead skin cells and oil block follicles, forming the base of a breakout." },
      { name: "Acne Bacteria", note: "C. acnes bacteria multiply in clogged pores and drive inflammation." },
      { name: "Inflammation", note: "The immune response creates the redness, swelling, and tenderness." },
      { name: "Hormonal Influence", note: "Hormonal shifts commonly trigger or worsen acne, often along the lower face." },
      { name: "Contributing Factors", note: "Genetics, certain products, stress, and some medications can all play a role." },
    ],
  },

  signs: {
    headline: <>The many forms of <em>acne.</em></>,
    intro:
      "Acne looks different from person to person, and the type guides the treatment. Common presentations include:",
    items: [
      { name: "Blackheads & Whiteheads", note: "Non-inflamed clogged pores (comedones)." },
      { name: "Papules & Pustules", note: "Red, tender bumps and classic 'pimples.'" },
      { name: "Deep Nodules", note: "Painful, deeper bumps that can raise the risk of scarring." },
      { name: "Hormonal Pattern", note: "Cyclical breakouts, often along the jaw and chin." },
      { name: "Oiliness & Congestion", note: "A shiny, congested T-zone or overall texture." },
      { name: "Post-Acne Marks", note: "Red or brown marks left after breakouts heal." },
    ],
  },

  riskFactors: {
    intro: "Acne can affect anyone, but some factors increase or prolong it:",
    items: [
      "Hormonal changes and cycles",
      "Family history of acne",
      "Oily or congestion-prone skin",
      "Certain medications and supplements",
      "Pore-clogging products or heavy cosmetics",
      "High stress and disrupted sleep",
    ],
  },

  whenToSeek: {
    intro: "Professional care is worthwhile earlier than many people think — particularly to prevent scarring:",
    items: [
      "Breakouts persist despite over-the-counter products",
      "Acne is painful, deep, or leaving marks",
      "You're seeing early scarring",
      "Breakouts are affecting your confidence",
      "You want a medical plan rather than trial and error",
    ],
    note: "Treating acne promptly and properly is one of the best ways to reduce the risk of permanent scarring.",
  },

  assessment: {
    headline: <>Treat the drivers, not just the <em>spots.</em></>,
    intro:
      "Because acne has several drivers and several forms, effective treatment works on more than one at a time. The AVEN Assessment identifies what's fueling your acne so the plan is medical and individualized — never a generic protocol.",
    identifies: [
      { name: "Type & Severity", note: "Comedonal, inflammatory, hormonal, or deeper acne — and how active." },
      { name: "Likely Drivers", note: "Oil, congestion, hormones, or products contributing to breakouts." },
      { name: "Scarring Risk", note: "How urgent it is to calm inflammation to protect the skin." },
      { name: "What You've Tried", note: "Previous products and treatments, to refine rather than repeat." },
    ],
  },

  treatmentOptions: {
    headline: <>A medical, layered <em>plan.</em></>,
    intro:
      "Acne usually responds best to a combination approach — calming the skin, keeping pores clear, and, when appropriate, medical management. Depending on your assessment, options may include:",
    items: [
      { name: "Acne Treatment", path: "/acne-treatment-orland-park", note: "An individualized medical plan for active acne — the primary path." },
      { name: "Medical-Grade Skincare", path: "/medical-grade-skincare-orland-park", note: "Targeted actives that keep pores clear and support the plan daily." },
      { name: "Chemical Peels", path: "/chemical-peels-orland-park", note: "Certain peels can help clear congestion in appropriate skin." },
      { name: "Facials", path: "/facials-orland-park", note: "Supportive deep-cleansing care for acne-prone skin, where suitable." },
      { name: "Acne Scar Treatment", path: "/acne-scar-treatment-orland-park", note: "For scarring, addressed separately once acne is controlled." },
    ],
    closing: "Active acne is treated first and medically; scars come later. Your individualized plan is built at the AVEN Assessment — no single product suits everyone.",
  },

  lifestyle: {
    intro: "Habits support acne care but don't replace a medical plan:",
    items: [
      "A consistent, non-stripping routine morning and night",
      "Non-comedogenic products and cosmetics",
      "Not picking or squeezing breakouts",
      "Daily sun protection (some acne treatments increase sensitivity)",
      "Managing stress and sleep where possible",
      "Patience — acne rewards consistency over intensity",
    ],
    note: "Acne is not caused by poor hygiene, and over-washing usually makes it worse.",
  },

  faqs: [
    { q: "Is acne really a medical condition?", a: "Yes. Acne is a genuine medical condition involving oil, clogged pores, bacteria, and inflammation, often with a hormonal component. Treating it as such — rather than as a hygiene issue — is what leads to real improvement." },
    { q: "Will my acne be completely cured?", a: "We don't promise a permanent cure, because acne is chronic for many people and responses vary. Our goal is meaningful, sustained control and protecting your skin from scarring, with honest expectations throughout." },
    { q: "Why hasn't a single product worked?", a: "Because acne usually has several drivers at once, one product rarely addresses all of them. Effective plans typically combine skincare, in-office care, and sometimes medical management, tailored to your skin." },
    { q: "Do I need prescription medication?", a: "Sometimes, sometimes not. Medical management may be part of an appropriate plan when indicated for you, but it's an individualized decision made during and after your assessment — not automatic." },
    { q: "Can you help hormonal acne?", a: "Hormonal patterns, often along the jaw and chin, are common and are taken into account when we build your plan. We'll also advise if additional medical evaluation is appropriate." },
    { q: "Can acne treatment prevent scarring?", a: "Controlling active acne well can reduce the risk of scarring, though it can't guarantee none. Addressing acne promptly and properly is one of the most effective ways to protect your skin's future." },
    { q: "What about the marks left after breakouts?", a: "Flat red or brown marks are usually discoloration, not true scars, and often fade with time and pigment-focused care. Textured (true) scars are treated separately once acne is controlled." },
    { q: "How long until I see results?", a: "Acne rewards consistency. Most plans show progress over several weeks, and some skin adjusts before it improves. We review and refine as your skin responds, without promising a fixed timeline." },
    { q: "Why start with an assessment?", a: "Because acne is individual — its drivers, forms, and best treatment vary. An assessment lets us build a safe, medical, personalized plan instead of guessing with a generic protocol." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Calmer skin, protected from <em>scarring.</em></>,
    copy: "Begin with an AVEN Assessment for an individualized, medical acne plan based on your skin and its drivers.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default acne;
