/* AVEN MED — Wellness: Preventive Wellness. Registry data module (wellness type). */
import React from 'react';

const preventiveWellness = {
  slug: "wellness/preventive-wellness",
  priority: 0.85,
  changefreq: "monthly",
  seo: {
    title: "Preventive Wellness in Orland Park, IL — Proactive Care | AVEN MED",
    description: "Preventive wellness in Orland Park, IL at AVEN MED — proactive, individualized guidance to understand your risk factors, build sustainable routines, and stay engaged with your health, coordinated with primary care.",
  },
  tags: ["prevention", "wellness", "longevity", "metabolic"],
  hub: { order: 45, blurb: "Proactive, individualized guidance to understand your risks and build sustainable routines." },
  serviceName: "Preventive Wellness",
  serviceShort: "Preventive wellness",
  breadcrumbName: "Preventive Wellness",
  procedureName: "Preventive Wellness — Proactive Individualized Guidance",
  procedureDescription:
    "Preventive wellness guidance in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC — proactive, individualized support to understand risk factors, build sustainable routines, and stay engaged with one's health, coordinated with primary care.",

  hero: {
    eyebrow: "Wellness · Proactive Care",
    headline: <>Preventive <em>Wellness.</em></>,
    subheadline:
      "Proactive, individualized guidance to understand your risk factors, build routines that last, and stay engaged with your health — alongside, not instead of, your regular care.",
  },

  overview: {
    eyebrow: "Overview",
    headline: <>Health is easier to keep than to <em>rebuild.</em></>,
    body: [
      "Preventive wellness is about being proactive rather than reactive — understanding your personal risk factors, building sustainable habits, and staying engaged with your health before problems become harder to address. It's guidance and partnership more than any single test or treatment.",
      "We're careful about what that does and doesn't mean. Preventive care can meaningfully reduce risk and support better long-term health, but it cannot prevent every disease or guarantee early detection, and we won't imply that it can. Honesty about limits is part of practicing responsibly.",
      "It's also designed to work with established medical care, not around it. Preventive wellness complements the screenings and guidelines your primary care provider follows, and we'll always encourage timely, appropriate care — including urgent or specialty evaluation — when your situation calls for it.",
    ],
  },

  candidacy: {
    headline: <>Who it's <em>for.</em></>,
    intro:
      "Preventive wellness suits people who want to take an active, informed role in their long-term health. It may be a good fit when:",
    considers: [
      "You'd rather be proactive than wait for problems",
      "You want to understand your personal risk factors",
      "You're ready to build sustainable, realistic routines",
      "You want support staying engaged and accountable",
      "You value coordination with your broader medical care",
    ],
    notFor: [
      "You're seeking a guarantee against illness",
      "You want wellness testing to replace recommended screenings",
      "You have acute or urgent symptoms needing prompt care",
      "You need specialty evaluation for a specific condition",
    ],
    note: "Preventive wellness complements — it does not replace — established screening guidelines or primary and specialty care. Urgent or concerning symptoms should be evaluated promptly in the appropriate setting.",
  },

  pillars: {
    eyebrow: "What We Focus On",
    headline: <>The everyday drivers of <em>health.</em></>,
    intro:
      "Most long-term health is shaped by a handful of modifiable factors. Together we look at:",
    items: [
      { name: "Health History Review", note: "Your history and personal risk factors, which shape everything that follows." },
      { name: "Lifestyle & Behavioral Risks", note: "The day-to-day habits that quietly influence long-term health." },
      { name: "Basic Health Measurements", note: "Blood pressure and other basic measurements to establish a picture over time." },
      { name: "Screening Discussions", note: "Conversations about age- and risk-appropriate screening — guiding you toward, not around, guidelines." },
      { name: "Nutrition & Movement", note: "Sustainable, realistic guidance on eating and activity rather than rigid rules." },
      { name: "Sleep & Stress", note: "Two underrated drivers of health, addressed practically." },
      { name: "Weight & Metabolic Health", note: "Support for a healthy weight and metabolic markers over the long term." },
      { name: "Engagement & Accountability", note: "Follow-up that keeps you connected to your health, not just seen once." },
    ],
  },

  medications: {
    eyebrow: "How It Fits Your Care",
    headline: <>With your care, not <em>around it.</em></>,
    body: [
      "Preventive wellness is deliberately built to complement established medicine. When it comes to screenings — the tests and checks recommended by national guidelines for your age and risk — our role is to encourage and support them, not to substitute wellness testing for them.",
      "It also works best in coordination with primary care. Where appropriate, we align with your Family Medicine provider so your preventive efforts and your medical care reinforce each other rather than duplicate or conflict.",
      "And we're clear about scope: if something you raise needs prompt or specialized attention, we'll say so and direct you to urgent, emergency, or specialty care as appropriate. Knowing when to refer is as important as the guidance itself.",
    ],
    note: "Wellness guidance does not replace guideline-based screening, and it is not a substitute for urgent or specialty medical care.",
  },

  journey: [
    { label: "Review", body: "We review your history, risk factors, and current habits to understand where you stand." },
    { label: "Your Plan", body: "You receive individualized, realistic guidance across the factors that matter most for you." },
    { label: "Building Habits", body: "We focus on sustainable changes you can actually keep, not an overwhelming overhaul." },
    { label: "Follow-Up", body: "Regular check-ins support accountability and adjust the plan as your life and health change." },
  ],

  longTerm: {
    eyebrow: "Realistic About Prevention",
    headline: <>Risk reduction, not <em>guarantees.</em></>,
    body: [
      "Prevention is about improving your odds and staying engaged — not certainty. No practice can prevent every disease or promise to catch everything early, and anyone suggesting otherwise is overpromising. What we can do is help you understand your risks and act on them consistently.",
      "The most powerful preventive tools are unglamorous and cumulative: steady habits, attention to the basics, keeping up with recommended screenings, and staying connected to your care. That's where we focus, over months and years rather than a single visit.",
      "Throughout, we'll be direct about when something falls outside preventive wellness and needs prompt medical, urgent, emergency, or specialty attention instead.",
    ],
  },

  crossLinksIntro:
    "Preventive wellness works hand in hand with your primary care. Where appropriate, we coordinate with:",
  crossLinks: [
    { label: "Family Medicine", path: "/family-medicine/primary-care", note: "Primary care at AVEN — where screenings and ongoing medical care are managed and coordinated." },
  ],

  faqs: [
    { q: "What is preventive wellness?", a: "It's proactive, individualized guidance to help you understand your risk factors, build sustainable routines, and stay engaged with your health — a partnership focused on the long term rather than a single test or treatment." },
    { q: "Can AVEN prevent me from getting sick?", a: "No one can prevent every illness, and we won't imply otherwise. Preventive wellness can meaningfully reduce risk and support better health, but it deals in improved odds and engagement, not guarantees." },
    { q: "Does this replace my annual physical or screenings?", a: "No. Preventive wellness complements guideline-based screenings and your primary care — it doesn't replace them. We encourage you to keep up with recommended screenings and coordinate with your Family Medicine provider." },
    { q: "Will you promise early detection?", a: "No. We won't promise to catch anything early, because no approach can guarantee that. We focus on understanding your risks, supporting recommended screening, and acting sensibly on what we learn." },
    { q: "What measurements or checks are involved?", a: "Depending on your needs, this may include reviewing your history, discussing lifestyle and behavioral risk factors, basic measurements like blood pressure, and age- and risk-appropriate screening conversations — always individualized." },
    { q: "How is this different from Family Medicine?", a: "Family Medicine is your primary medical care; preventive wellness is proactive guidance that complements it — habits, risk reduction, and engagement. Where appropriate, the two are coordinated so they reinforce each other." },
    { q: "What if I have a specific symptom or concern?", a: "We'll take it seriously and, if it needs prompt or specialized attention, direct you to urgent, emergency, or specialty care. Preventive wellness is not the right setting for acute problems, and we'll say so clearly." },
    { q: "What lifestyle areas do you address?", a: "Typically nutrition, movement, sleep, stress, and weight and metabolic health — the modifiable factors that most influence long-term health — with realistic, sustainable guidance rather than rigid rules." },
    { q: "How do you help me stay on track?", a: "Through follow-up and accountability. Building habits is easier with regular check-ins that adjust the plan as your life changes, rather than a single visit and a handout." },
    { q: "Why start with an assessment?", a: "Because prevention should be personal. An assessment lets us understand your history, risks, and goals so the guidance is individualized and genuinely useful — not generic advice." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Be proactive about your <em>health.</em></>,
    copy: "Begin with an AVEN Assessment to build an individualized, realistic preventive plan — coordinated with your broader care.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default preventiveWellness;
