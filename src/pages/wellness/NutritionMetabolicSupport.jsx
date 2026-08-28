/* AVEN MED — Wellness: Nutrition & Metabolic Support. Registry data module (wellness type). */
import React from 'react';

const nutritionMetabolicSupport = {
  slug: "wellness/nutrition-metabolic-support",
  priority: 0.85,
  changefreq: "monthly",
  seo: {
    title: "Nutrition & Metabolic Support | AVEN MED Orland Park",
    description: "Practical, individualized nutrition and lifestyle guidance at AVEN MED in Orland Park, built around your wider care. No fad diets and no rigid meal plans.",
  },
  tags: ["nutrition", "metabolic", "weight", "wellness"],
  hub: { order: 47, blurb: "Practical, individualized nutrition and lifestyle guidance — integrated with your plan." },
  serviceName: "Nutrition & Metabolic Support",
  serviceShort: "Nutrition & metabolic support",
  breadcrumbName: "Nutrition & Metabolic Support",
  procedureName: "Nutrition & Metabolic Support — Practical Lifestyle Guidance",
  procedureDescription:
    "Nutrition and metabolic support in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC — practical, individualized nutrition and lifestyle guidance integrated with medical weight loss and broader wellness care.",

  hero: {
    eyebrow: "Wellness · Nutrition",
    headline: <>Nutrition & Metabolic <em>Support.</em></>,
    subheadline:
      "Practical, individualized nutrition guidance built for real life — integrated with your wellness and weight plans, and free of fad diets and rigid rules.",
  },

  overview: {
    eyebrow: "Overview",
    headline: <>Sustainable beats <em>strict.</em></>,
    body: [
      "Most people don't struggle with nutrition because they lack information — they struggle because the advice they're given is rigid, extreme, or impossible to keep. Our approach is the opposite: practical, individualized guidance that fits your life and that you can actually sustain.",
      "We don't do fad diets, and we don't hand out a single universal meal plan. What works is built around your history, preferences, and goals, with an emphasis on the fundamentals — balanced meals, adequate protein and fiber, hydration, and steady habits — rather than short-lived extremes.",
      "This service also integrates with the rest of AVEN. It supports and complements medical weight loss and broader wellness care, and it's distinct from a medication-only approach: here, nutrition and lifestyle are the foundation, whether or not medication is part of your plan.",
    ],
  },

  candidacy: {
    headline: <>Who it <em>helps.</em></>,
    intro:
      "Nutrition and metabolic support suits people who want sustainable change and real-world guidance. It may be a good fit when:",
    considers: [
      "You want practical guidance, not another fad diet",
      "You're pursuing a metabolic or weight-related goal",
      "You want nutrition support alongside a weight or wellness plan",
      "You're maintaining results after weight loss",
      "You'd value habits you can keep, not rules you'll abandon",
    ],
    notFor: [
      "You want a rigid, one-size meal plan to follow rigidly",
      "You need specialized medical nutrition therapy for a specific condition",
      "You're seeking care for a suspected eating disorder",
      "You expect nutrition alone to replace medical treatment you need",
    ],
    note: "This is general nutrition and lifestyle guidance, not a diagnosis. Patients who need specialized medical nutrition therapy or eating-disorder care may be referred to an appropriate specialist.",
  },

  pillars: {
    eyebrow: "What We Work On",
    headline: <>The fundamentals, done <em>consistently.</em></>,
    intro:
      "Rather than chasing trends, we focus on the basics that actually move metabolic health — tailored to you:",
    items: [
      { name: "Nutrition History", note: "Understanding how you actually eat and live before changing anything." },
      { name: "Eating Patterns", note: "Working with your real routines and preferences, not against them." },
      { name: "Balanced Meals", note: "Practical guidance on protein, fiber, hydration, and building satisfying meals." },
      { name: "Blood Sugar Awareness", note: "Simple, sustainable ways to support steadier energy and blood-sugar balance." },
      { name: "Metabolic Health", note: "Habits that support your metabolism and long-term metabolic markers." },
      { name: "Movement & Resistance Training", note: "Support for activity and muscle-preserving resistance training, at your level." },
      { name: "Sleep & Stress", note: "Addressing two factors that strongly influence appetite, cravings, and metabolism." },
      { name: "Sustainable Habits", note: "Small, repeatable changes that compound — the opposite of a crash diet." },
    ],
  },

  medications: {
    eyebrow: "More Than Medication",
    headline: <>The foundation beneath the <em>medicine.</em></>,
    body: [
      "This service is deliberately distinct from medication-only weight loss. Medication can be a useful tool for some patients, but nutrition and lifestyle are the foundation that makes any result sustainable — and they matter whether or not medication is ever part of your plan.",
      "For patients using GLP-1 or other weight-management medications, nutrition support becomes especially important. Reduced appetite makes it easy to under-eat protein or fall short on nutrients, so we focus on protein adequacy, hydration, and muscle-preserving habits so results are healthy, not just lighter on the scale.",
      "And when the medication chapter changes — a dose adjusts or ends — the habits built here are what carry results forward. That integration with medical weight loss, rather than a medication handed out alone, is the whole point.",
    ],
    note: "Nutrition and lifestyle support complements medical weight loss and is not a substitute for medical evaluation or care.",
  },

  journey: [
    { label: "Nutrition History", body: "We start by understanding how you eat, live, and where you want to go — no judgment, no template." },
    { label: "A Practical Approach", body: "You get individualized, realistic guidance built around your preferences and goals." },
    { label: "Building Habits", body: "We focus on small, sustainable changes that fit your life and actually stick." },
    { label: "Follow-Up", body: "Regular check-ins provide accountability and adjust the plan, including for weight-loss maintenance." },
  ],

  longTerm: {
    eyebrow: "Maintenance & the Long View",
    headline: <>Keeping what you've <em>built.</em></>,
    body: [
      "The hardest part of any health change is keeping it, which is why maintenance is central here rather than an afterthought. Sustainable habits — not short-term restriction — are what carry results through the months and years after an initial goal is reached.",
      "We keep the guidance flexible and human. Life changes, appetites change, and plans should adapt with them; a rigid diet that collapses under real life helps no one. Follow-up and accountability keep you supported through those changes.",
      "And we know our limits. If your situation calls for specialized medical nutrition therapy or eating-disorder care, we'll say so and help connect you with an appropriate specialist rather than stretch beyond what this service is meant to do.",
    ],
  },

  faqs: [
    { q: "Is this a diet program?", a: "No. We don't do fad diets or restrictive programs. This is practical, individualized nutrition and lifestyle guidance focused on sustainable habits that fit your real life — the opposite of a crash diet." },
    { q: "Will you give me a strict meal plan to follow?", a: "No. We avoid rigid, universal meal plans because they rarely last. Instead we build flexible guidance around your preferences and routines, emphasizing fundamentals like protein, fiber, hydration, and balanced meals." },
    { q: "How is this different from medication-only weight loss?", a: "Medication-only approaches lean on the drug alone. Here, nutrition and lifestyle are the foundation — whether or not medication is part of your plan — which is what makes results sustainable. It's designed to integrate with medical weight loss, not replace or duplicate it." },
    { q: "Can this support me while I'm on a GLP-1 medication?", a: "Yes, and it's especially valuable then. Reduced appetite makes it easy to under-eat protein or nutrients, so we focus on protein, hydration, and muscle-preserving habits so your results are healthy and durable." },
    { q: "Do you treat eating disorders?", a: "No. We provide general nutrition and lifestyle guidance, not eating-disorder care. If we identify a need for that or for specialized medical nutrition therapy, we'll refer you to an appropriate specialist." },
    { q: "What does metabolic support actually mean?", a: "Practical habits that support how your body handles energy — balanced meals, blood-sugar awareness, movement including resistance training, and attention to sleep and stress — rather than a supplement or a quick fix." },
    { q: "Will I have to give up the foods I love?", a: "Generally not. Sustainable nutrition works with your preferences, not against them. Extreme elimination tends to backfire; we focus on realistic adjustments you can live with long term." },
    { q: "How does this help with weight-loss maintenance?", a: "Maintenance is a core focus. The sustainable habits we build are exactly what carry results forward after an initial goal — or after a medication is adjusted or stopped — supported by ongoing follow-up." },
    { q: "How important are sleep and stress to nutrition?", a: "Very. Both strongly influence appetite, cravings, and metabolism, so we address them alongside food and movement rather than treating nutrition in isolation." },
    { q: "Why start with an assessment?", a: "Because good nutrition guidance is personal. An assessment lets us understand how you actually eat and live, and what you want to achieve, so the plan is realistic and truly yours." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Nutrition that actually <em>lasts.</em></>,
    copy: "Begin with an AVEN Assessment for practical, individualized nutrition and metabolic guidance built around your life.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default nutritionMetabolicSupport;
