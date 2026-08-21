/* AVEN MED — Assessment: The AVEN Assessment (flagship). Registry data module. */
import React from 'react';

const theAvenAssessment = {
  slug: "assessment/the-aven-assessment",
  priority: 0.9,
  changefreq: "monthly",
  seo: {
    title: "The AVEN Assessment in Orland Park, IL | AVEN MED",
    description: "The AVEN Assessment is where every patient relationship begins at AVEN MED in Orland Park, IL — a personalized consultation with Alaa Mashal, MSN, APRN, FNP-BC that reviews your history, goals, and options, then builds a plan. Consultation-first, never sales-driven.",
  },
  tags: ["assessment", "consultation"],
  hub: { order: 10, blurb: "What the Assessment is, and why every plan at AVEN begins here." },
  serviceName: "The AVEN Assessment",
  serviceShort: "The AVEN Assessment",
  breadcrumbName: "The AVEN Assessment",
  procedureName: "The AVEN Assessment — Personalized Consultation",
  procedureDescription:
    "The AVEN Assessment in Orland Park, IL — a personalized, consultation-first evaluation with Alaa Mashal, MSN, APRN, FNP-BC that reviews a patient's history, lifestyle, and goals before any treatment recommendation.",
  faqHeading: "The AVEN Assessment, answered.",

  hero: {
    eyebrow: "The AVEN Assessment",
    headline: <>Every plan begins <em>here.</em></>,
    subheadline:
      "Before any treatment, there's a conversation. The AVEN Assessment is where we get to know you, understand your goals, and build a plan together — thoughtfully, and without pressure.",
  },

  overview: {
    eyebrow: "What It Is",
    headline: <>A consultation, not a <em>sales pitch.</em></>,
    body: [
      "The AVEN Assessment is a dedicated, one-on-one consultation with Alaa Mashal, MSN, APRN, FNP-BC. It's the starting point for every patient relationship at AVEN — aesthetics, wellness, or family medicine — because good care begins with understanding, not with a syringe or a script.",
      "In practical terms, it's protected time to talk. We listen to what's bringing you in, review your history and goals, and only then discuss what might make sense for you. Nothing is recommended before that conversation, and nothing is decided for you.",
      "Whether you arrive knowing exactly what you want or simply feeling that something could be better, the Assessment turns that into a clear, honest, individualized plan — one you understand and feel comfortable with.",
    ],
  },

  covers: {
    eyebrow: "What We Cover",
    headline: <>A whole picture, not a single <em>concern.</em></>,
    intro:
      "Depending on why you're here, the Assessment may include any of the following — always at your pace and comfort:",
    items: [
      { name: "Personalized Consultation", note: "Unhurried time to talk through what matters to you." },
      { name: "Medical History Review", note: "A look at your health history, medications, and anything relevant to safe care." },
      { name: "Lifestyle Discussion", note: "How your daily life, routines, and priorities shape the right approach." },
      { name: "Your Goals & Priorities", note: "What you'd like to change or maintain — and what matters most first." },
      { name: "Facial Assessment", note: "When aesthetics are part of the conversation, a considered read of your facial anatomy and skin." },
      { name: "Wellness Discussion", note: "Where relevant, your metabolic health, energy, and preventive goals." },
      { name: "Family Medicine Discussion", note: "When appropriate, whether ongoing primary care fits your needs." },
      { name: "Personalized Recommendations", note: "A clear plan — including how to prioritize and sequence, and what can wait." },
    ],
  },

  philosophy: {
    eyebrow: "How We Practice",
    headline: <>Shared decisions, honest <em>education.</em></>,
    body: [
      "The Assessment is built around shared decision-making. We explain what we see and what your options are — the benefits, the limits, the alternatives — and then we decide together. You're the one who chooses; our job is to make sure you're choosing with good information.",
      "Education comes before any recommendation. We'd rather you leave understanding your skin, your health, or your options than feeling rushed toward a treatment. Questions are welcome, and there's no such thing as too many.",
      "And there's genuinely no pressure. It's completely fine to take time, think it over, or decide the timing isn't right. A good plan keeps whether you act on it today or months from now — the Assessment is yours to keep either way.",
    ],
    note: "Consultation-first isn't a tagline here — it's how every relationship at AVEN actually begins.",
  },

  crossLinksIntro:
    "Where the Assessment leads depends entirely on you. It may open into any part of the practice:",
  crossLinks: [
    { label: "Meet Your Provider", path: "/providers/alaa-mashal", note: "The clinician you'll meet — Alaa Mashal, MSN, APRN, FNP-BC, founder of AVEN MED." },
    { label: "Aesthetics", path: "/aesthetics", note: "Considered, natural-looking aesthetic treatments." },
    { label: "Wellness", path: "/wellness", note: "Prevention-first wellness, weight, and metabolic care." },
    { label: "Family Medicine", path: "/family-medicine", note: "Relationship-based primary care for adults and families." },
  ],

  faqs: [
    { q: "Why does every plan begin with an Assessment?", a: "Because good care depends on understanding you first. The Assessment lets us review your history, goals, and options before recommending anything, so your plan is safe, individualized, and honest — never a guess or a default." },
    { q: "Is the Assessment the same as booking a treatment?", a: "No. The Assessment is a consultation — a conversation and evaluation that comes before any treatment decision. Whether, when, and what to treat is decided together during it, never assumed in advance." },
    { q: "Do I have to receive treatment after my Assessment?", a: "Not at all. There's no obligation and no pressure. Many patients take time to consider their plan, and that's completely welcome. The Assessment is valuable on its own — you leave with understanding and a plan you keep." },
    { q: "Can we talk about more than one concern?", a: "Yes. The Assessment is designed to look at the whole picture, and we can discuss multiple concerns — and how to prioritize them — in one conversation. The Comprehensive Assessment is especially suited to that." },
    { q: "Can wellness or family medicine be part of it?", a: "Yes, when relevant. The Assessment isn't limited to aesthetics — we can discuss wellness goals or whether ongoing primary care fits your needs, and point you to the right part of the practice." },
    { q: "Who will I meet?", a: "You'll meet Alaa Mashal, MSN, APRN, FNP-BC — the founder and clinical director of AVEN MED. Continuity matters here, so the person who assesses you is the person who cares for you." },
    { q: "Which Assessment should I choose?", a: "The Quick AVEN Assessment is a focused first step; the Comprehensive AVEN Assessment is a longer, in-depth visit with a written plan. Both are credited toward your treatment. You can read more about each and decide what fits." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Start with a <em>conversation.</em></>,
    copy: "Begin with an AVEN Assessment — the thoughtful first step toward a plan that's genuinely yours.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default theAvenAssessment;
