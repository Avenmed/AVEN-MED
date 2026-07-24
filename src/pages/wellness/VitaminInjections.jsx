/* AVEN MED — Wellness: Vitamin Injections. Registry data module (wellness type). */
import React from 'react';

const vitaminInjections = {
  slug: "wellness/vitamin-injections",
  priority: 0.85,
  changefreq: "monthly",
  seo: {
    title: "Vitamin Injections in Orland Park, IL — B12 & More | AVEN MED",
    description: "Vitamin injections in Orland Park, IL at AVEN MED — including B12 and lipotropic injections, selected for the right candidate and monitored by a practitioner. Led by Alaa Mashal, FNP-BC. Every plan begins with the AVEN Assessment.",
  },
  tags: ["vitamins", "injections", "energy", "metabolic", "wellness"],
  serviceName: "Vitamin Injections",
  serviceShort: "Vitamin injections",
  breadcrumbName: "Vitamin Injections",
  hub: { order: 30, blurb: "Targeted B12, lipotropic, and vitamin injections to support energy and wellness." },
  procedureName: "Vitamin Injections — Intramuscular Micronutrient Therapy",
  procedureDescription:
    "Vitamin injections in Orland Park, IL by Alaa Mashal, FNP-BC — intramuscular B12 and lipotropic injections, selected through candidate evaluation and monitored as part of an individualized wellness plan.",

  hero: {
    eyebrow: "Wellness · Micronutrients",
    headline: <>Vitamin <em>Injections.</em></>,
    subheadline:
      "Targeted micronutrient support — quick, focused injections selected for the right candidate and monitored properly, not handed out on request.",
  },

  overview: {
    eyebrow: "Overview",
    headline: <>Focused support, chosen with <em>care.</em></>,
    body: [
      "Vitamin injections deliver specific nutrients intramuscularly, so absorption isn't limited by digestion. They're quick and targeted — a focused way to support a documented need or a specific goal, rather than a broad infusion.",
      "The key word is targeted. Injections aren't automatically better than a good diet or an oral supplement, and more isn't the same as better. At AVEN, they're matched to the right candidate and used where they genuinely make sense — decided through evaluation, not offered indiscriminately.",
      "Used thoughtfully, they can be a convenient support within a wellness plan. Used blindly, they're just a shot. We practice the former.",
    ],
  },

  pillars: {
    eyebrow: "What We Offer",
    headline: <>The injections, and what they're <em>for.</em></>,
    intro:
      "Each injection has a specific purpose, and not everyone needs one. Depending on your evaluation, options may include:",
    items: [
      { name: "Vitamin B12", note: "Supports energy metabolism and neurological health; often considered when intake or absorption is low." },
      { name: "Lipotropic (MIC)", note: "A blend of compounds (such as methionine, inositol, and choline) sometimes used to support metabolism alongside a weight plan." },
      { name: "Vitamin D", note: "Considered when a deficiency is confirmed on testing — not given routinely without evaluation." },
      { name: "Tailored Combinations", note: "Where appropriate, injections are chosen to fit your specific goals and history." },
    ],
  },

  candidacy: {
    headline: <>Candidate selection comes <em>first.</em></>,
    intro:
      "Vitamin injections help most when they address a real need. Rather than offering them to everyone, we select candidates carefully. An injection may be worth considering when:",
    considers: [
      "Bloodwork or history points to a specific deficiency",
      "Absorption may be limited (diet, GI conditions, certain medications)",
      "You're pursuing a metabolic or weight-management goal",
      "You want a convenient, targeted support with oversight",
      "You'd prefer guidance over guessing with supplements",
    ],
    notFor: [
      "You're seeking injections without any evaluation",
      "Your levels are already normal and a need isn't established",
      "A medical condition or medication makes them inappropriate",
      "You expect them to replace nutrition or medical care",
    ],
    note: "Injections are never a substitute for a balanced diet or medical treatment, and appropriateness is confirmed only through evaluation — not on request.",
  },

  medications: {
    eyebrow: "Monitoring",
    headline: <>We don't inject <em>blindly.</em></>,
    body: [
      "Good micronutrient care means checking, not assuming. Where it's relevant, we consider testing your levels before starting, so an injection addresses a genuine need rather than a guess — and so we're not adding something your body doesn't require.",
      "Once you begin, we monitor how you respond and adjust frequency or approach accordingly. Some nutrients can accumulate or interact, so ongoing oversight is part of doing this responsibly rather than a formality.",
      "The goal is the least you need for the benefit you want — targeted support, reviewed over time, and stopped or changed when that's the right call.",
    ],
    note: "Monitoring and any lab testing are individualized; not every injection requires the same follow-up.",
  },

  journey: [
    { label: "Consultation", body: "We review your goals, symptoms, and history to see whether an injection is appropriate." },
    { label: "Evaluation", body: "Where relevant, we consider testing to confirm a genuine need before starting." },
    { label: "Injection", body: "The chosen injection is given quickly and comfortably, with clear guidance." },
    { label: "Follow-Up", body: "We monitor your response and adjust the plan — frequency, type, or stopping — over time." },
  ],

  faqs: [
    { q: "What are vitamin injections?", a: "They're intramuscular injections of specific nutrients — such as vitamin B12 or a lipotropic (MIC) blend — that deliver a focused dose without relying on digestion. At AVEN they're selected for the right candidate and monitored, not offered indiscriminately." },
    { q: "Which injections do you offer?", a: "Commonly vitamin B12 and lipotropic (MIC) injections, with vitamin D considered when a deficiency is confirmed on testing. The right choice — if any — depends on your evaluation, goals, and history." },
    { q: "What is a lipotropic (MIC) injection?", a: "It's a blend of compounds such as methionine, inositol, and choline that some practices use to support metabolism alongside a weight-management plan. It's one possible support, not a fat-burning shortcut, and it's used within an individualized plan." },
    { q: "Do vitamin injections give you energy?", a: "If you're genuinely low in a nutrient like B12, correcting that may support energy. But injections don't create energy out of nothing, and we won't promise a boost if your levels are already normal — which is why we assess first." },
    { q: "Am I a good candidate?", a: "You may be if testing or history points to a real need, if absorption is a concern, or if you're pursuing a related metabolic goal. If your levels are normal and no need is established, we'll tell you honestly that an injection isn't warranted." },
    { q: "Do you check my levels first?", a: "Where it's relevant, yes — we'd rather confirm a genuine need than inject blindly. Some situations are straightforward, but testing helps ensure an injection is addressing something real and being used responsibly." },
    { q: "How often would I need them?", a: "It varies by the nutrient, your need, and how you respond. We monitor over time and adjust frequency accordingly, rather than committing you to a fixed schedule or package." },
    { q: "Are there risks or side effects?", a: "Injections are generally well tolerated, with possible minor soreness or bruising at the site. Because some nutrients can accumulate or interact, medical oversight and monitoring are part of using them safely." },
    { q: "Can injections replace a healthy diet?", a: "No. They're a targeted support, never a substitute for balanced nutrition, sleep, or medical care. We use them to complement a healthy foundation, not to paper over its absence." },
    { q: "Why is an assessment required?", a: "Because a good injection plan is built on a real need. An assessment lets us determine whether an injection is appropriate, which one, and how to monitor it — so your care is safe and genuinely useful." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Targeted support, chosen <em>properly.</em></>,
    copy: "Begin with an AVEN Assessment to learn whether a vitamin injection fits your needs — and how we'd monitor it.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default vitaminInjections;
