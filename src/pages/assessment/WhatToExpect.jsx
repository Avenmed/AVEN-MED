/* AVEN MED — Assessment: What to Expect. Registry data module. */
import React from 'react';

const whatToExpect = {
  slug: "assessment/what-to-expect",
  priority: 0.8,
  changefreq: "monthly",
  seo: {
    title: "What to Expect at Your AVEN Assessment — Orland Park, IL | AVEN MED",
    description: "What to expect at your AVEN Assessment in Orland Park, IL — from before your visit through meeting Alaa Mashal, MSN, APRN, FNP-BC, your consultation and evaluation, to leaving with a personalized plan. A calm, unhurried, no-pressure experience.",
  },
  tags: ["assessment", "experience"],
  hub: { order: 40, blurb: "A step-by-step walkthrough of your visit — so you know exactly what to expect." },
  serviceName: "What to Expect",
  serviceShort: "Your visit",
  breadcrumbName: "What to Expect",
  procedureName: "The AVEN Assessment — What to Expect",
  procedureDescription:
    "A step-by-step overview of the AVEN Assessment experience in Orland Park, IL — from preparation through meeting Alaa Mashal, MSN, APRN, FNP-BC, consultation, evaluation, and leaving with a personalized plan.",
  faqHeading: "Your visit, answered.",

  hero: {
    eyebrow: "The AVEN Assessment · Your Visit",
    headline: <>What to <em>expect.</em></>,
    subheadline:
      "Knowing how a visit will go makes it easier to relax into it. Here's exactly what your AVEN Assessment looks like — unhurried, welcoming, and entirely without pressure.",
  },

  overview: {
    eyebrow: "The Experience",
    headline: <>Calm, unhurried, and <em>clear.</em></>,
    body: [
      "An AVEN Assessment is meant to feel like a conversation, not a procedure. From the moment you arrive to the moment you leave with a plan, the goal is that you feel comfortable, informed, and never rushed.",
      "Below is the shape of a typical visit. Yours may vary depending on what you're here for — but the spirit is always the same: listen first, explain clearly, and decide together.",
    ],
  },

  timeline: {
    eyebrow: "Step by Step",
    headline: <>From arrival to your <em>plan.</em></>,
    steps: [
      { label: "Before Your Visit", body: "There's little you need to do. It helps to jot down your goals and questions, and to bring a list of any medications or supplements you take. Come as you are." },
      { label: "Arrival", body: "You're welcomed into a calm, private space. There's no crowded waiting room and no rush — the visit is yours." },
      { label: "Meeting Your Provider", body: "You meet Alaa Mashal, MSN, APRN, FNP-BC, the founder and lead practitioner. The same person who assesses you is the person who'll care for you." },
      { label: "The Consultation", body: "We start by listening — what's bringing you in, what you'd like to change or maintain, and what matters most to you. This is the heart of the visit." },
      { label: "Evaluation", body: "Depending on your goals, this may include a review of your history, an Aura skin analysis, or a considered look at your facial anatomy or health — always explained as we go." },
      { label: "Your Recommendations", body: "We talk through your options honestly — what may help, what to prioritize, what can wait, and the alternatives — so the plan reflects you, not a template." },
      { label: "Questions", body: "There's dedicated time for your questions. Nothing is too small, and you're never made to feel rushed toward a decision." },
      { label: "Next Steps", body: "Together we decide what, if anything, comes next — and when. It's completely fine to take time to think it over." },
      { label: "Leaving With a Plan", body: "You leave with a clear, personalized plan (written, for the Comprehensive Assessment) — and the confidence of knowing exactly what happens next." },
    ],
  },

  prepare: {
    eyebrow: "Before You Come",
    headline: <>A little prep <em>helps.</em></>,
    intro: "None of this is required, but it makes your visit more productive:",
    items: [
      "A few notes on your goals and questions",
      "A list of medications and supplements you take",
      "Relevant medical history, if any",
      "Any recent, relevant test results you have",
      "An open mind — and permission to take your time",
    ],
    note: "You're welcome to bring someone with you if that helps you feel comfortable.",
  },

  crossLinksIntro: "Ready to begin, or want to understand your options first?",
  crossLinks: [
    { label: "Meet Your Provider", path: "/providers/alaa-mashal", note: "Get to know Alaa Mashal, MSN, APRN, FNP-BC before your visit." },
    { label: "Aesthetics", path: "/aesthetics", note: "Explore considered aesthetic treatments." },
    { label: "Wellness", path: "/wellness", note: "Explore prevention-first wellness care." },
  ],

  faqs: [
    { q: "How long does the visit take?", a: "It depends on the type of Assessment. The Quick AVEN Assessment is a focused visit; the Comprehensive AVEN Assessment runs up to about sixty minutes. Either way, you won't be rushed." },
    { q: "Can I bring someone with me?", a: "Yes, absolutely. You're welcome to bring a partner, friend, or family member if it helps you feel comfortable and supported during your visit." },
    { q: "Will I feel pressured to make a decision?", a: "No. The visit is built around education and shared decisions, not pressure. It's completely fine to take your plan home and decide in your own time." },
    { q: "Do I need to prepare anything?", a: "Very little. Jotting down your goals and questions and bringing a list of your medications and supplements is helpful, but you can simply come as you are." },
    { q: "Will I leave with a plan?", a: "Yes. You leave with a clear, personalized plan and a sense of exactly what happens next. With the Comprehensive Assessment, that plan is written for you to keep." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Come as you <em>are.</em></>,
    copy: "Begin with an AVEN Assessment — a calm, unhurried visit that leaves you with clarity and a plan.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default whatToExpect;
