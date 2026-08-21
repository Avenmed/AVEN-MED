/* AVEN MED — Wellness: Medical Weight Loss. Registry data module (wellness type). */
import React from 'react';

const medicalWeightLoss = {
  slug: "wellness/medical-weight-loss",
  priority: 0.9,
  changefreq: "monthly",
  seo: {
    title: "Medical Weight Loss in Orland Park, IL — Physician-Directed | AVEN MED",
    description: "Physician-directed medical weight loss in Orland Park, IL at AVEN MED — a whole-person program combining medical evaluation, nutrition, movement, coaching, and, when appropriate, GLP-1 medication.",
  },
  tags: ["weight", "metabolic", "glp-1", "longevity", "wellness"],
  serviceName: "Medical Weight Loss",
  serviceShort: "Medical weight loss",
  breadcrumbName: "Medical Weight Loss",
  hub: { order: 10, blurb: "A physician-directed, whole-person program — with GLP-1 medication as one option when appropriate." },
  procedureName: "Medical Weight Loss — Physician-Directed Program",
  procedureDescription:
    "Physician-directed medical weight loss in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC — an individualized, whole-person program combining medical evaluation, nutrition and lifestyle guidance, and, when clinically appropriate, GLP-1 medication.",

  hero: {
    eyebrow: "Wellness · Metabolic Health",
    headline: <>Medical Weight <em>Loss.</em></>,
    subheadline:
      "A physician-directed program built around your metabolism and your life — not a medication handed out in isolation. Education and evaluation come first.",
  },

  overview: {
    eyebrow: "Overview",
    headline: <>Weight is medical. We treat it <em>that way.</em></>,
    body: [
      "Sustainable weight change is rarely about willpower alone. Weight is influenced by metabolism, hormones, sleep, stress, medications, and history — which is why a genuinely medical approach looks at the whole person rather than reaching for a single lever.",
      "Medical weight loss at AVEN MED is a practitioner-led program, not a prescription counter. It combines a thorough medical evaluation, a personalized plan, nutrition and movement guidance, ongoing coaching, and — when it's clinically appropriate and only then — medication as one tool among several.",
      "The goal is steady, sustainable progress and better metabolic health you can maintain, supported by the same restraint and individualized care we bring to everything else. We don't promise a number or a timeline; we build a plan and adjust it with you.",
    ],
  },

  candidacy: {
    headline: <>Who it's <em>for.</em></>,
    intro:
      "Medical weight loss suits people who want structure, medical oversight, and a sustainable plan rather than a crash diet. Candidacy is always individual and confirmed through evaluation — but it's often a good fit when:",
    considers: [
      "You've struggled to lose weight despite real effort",
      "You want medical guidance, not another fad diet",
      "You have weight-related health concerns to address",
      "You're looking for a sustainable, long-term approach",
      "You want honest guidance on whether medication fits",
      "You'd value coaching and accountability along the way",
    ],
    notFor: [
      "You're seeking a rapid, guaranteed result",
      "You want medication without medical evaluation",
      "You're pregnant or breastfeeding (for certain options)",
      "Certain medical histories may make some options unsuitable",
    ],
    note: "None of this is a diagnosis or a decision made online — suitability, and whether any medication is appropriate, is determined only after a medical evaluation with your practitioner.",
  },

  pillars: {
    eyebrow: "A Whole-Person Program",
    headline: <>More than a <em>prescription.</em></>,
    intro:
      "Lasting results come from addressing several factors together. Depending on your plan, your program may include:",
    items: [
      { name: "Medical Evaluation", note: "A thorough review of your health, history, labs, and the factors influencing your weight." },
      { name: "Personalized Planning", note: "A plan built around your body, goals, and life — never a template." },
      { name: "Nutrition Guidance", note: "Practical, sustainable nutrition direction rather than restrictive dieting." },
      { name: "Movement & Exercise", note: "Realistic activity guidance that fits your ability and routine." },
      { name: "Lifestyle Coaching", note: "Support for sleep, stress, and the habits that quietly shape weight." },
      { name: "Monitoring & Follow-Up", note: "Regular check-ins to track progress and adjust the plan over time." },
    ],
  },

  medications: {
    eyebrow: "One Option, Not the Only One",
    headline: <>Where GLP-1 medications <em>fit.</em></>,
    body: [
      "GLP-1 medications (such as semaglutide and tirzepatide) have changed what's possible in medical weight management by helping regulate appetite and blood sugar. For the right patient, they can be a genuinely useful tool — but they are one option within a program, not the program itself.",
      "Whether a GLP-1 medication is appropriate for you is a medical decision made only after evaluation, weighing your health history, goals, and the potential benefits and side effects. Some patients are good candidates; others are better served by other elements of the plan. We'll always be honest about which applies to you.",
      "When medication is part of your plan, it's prescribed and monitored by your practitioner and paired with nutrition, movement, and coaching — because medication works best alongside sustainable habits, and because the aim is health you can maintain, not dependence on a single intervention.",
    ],
    note: "Medication is never a substitute for evaluation, and it's never guaranteed or handed out on request — it's considered only when clinically appropriate.",
  },

  journey: [
    { label: "Evaluation", body: "We begin with a medical evaluation — your health, history, labs where indicated, and the factors influencing your weight." },
    { label: "Your Plan", body: "You receive an individualized plan spanning nutrition, movement, lifestyle, and — if appropriate — medication, with realistic expectations." },
    { label: "Support", body: "Coaching and guidance help you put the plan into practice, with adjustments as your body and life respond." },
    { label: "Monitoring", body: "Regular follow-ups track progress and safety, refining the plan over time rather than following a fixed script." },
  ],

  longTerm: {
    eyebrow: "The Long View",
    headline: <>Built to <em>last.</em></>,
    body: [
      "Losing weight is one chapter; keeping it off is the longer one. Our program is designed with maintenance in mind from the start — building sustainable habits alongside any medical intervention so progress doesn't unravel the moment a plan ends.",
      "Over time, that means monitoring your health, adjusting the plan as your needs change, and — where medication is involved — thoughtful, practitioner-guided decisions about duration, dosing, and eventual tapering rather than indefinite default use.",
      "Long-term weight management is a partnership. We stay involved through follow-up and review, focusing on your metabolic health and how you feel, not just the number on a scale.",
    ],
  },

  consultation: {
    headline: <>Begin with a <em>consultation.</em></>,
    intro:
      "Every weight-loss plan starts with the AVEN Assessment — a proper medical review of your goals, health, and history before any recommendation. Both tiers are credited toward your program.",
  },

  faqs: [
    { q: "What is medical weight loss?", a: "It's a physician-directed program that treats weight as a medical matter — combining evaluation, personalized planning, nutrition and lifestyle guidance, monitoring, and, when appropriate, medication. It's the opposite of a one-size diet or a medication handed out in isolation." },
    { q: "Do I have to take medication like semaglutide or tirzepatide?", a: "No. GLP-1 medications are one option within the program, not a requirement. Whether they're appropriate for you is a medical decision made after evaluation, and many patients are supported effectively through the plan's other elements." },
    { q: "How much weight will I lose?", a: "We don't promise a specific number or timeline — results vary widely based on your body, health, and how the plan fits your life. Our focus is steady, sustainable progress and better metabolic health, with honest expectations from the start." },
    { q: "Is this just about appearance?", a: "No. Medical weight loss is about metabolic health — how you feel, move, and function, and reducing weight-related health risks. Any change in appearance is a byproduct of improving your health, not the primary goal." },
    { q: "How do you decide if GLP-1 medication is right for me?", a: "Through a medical evaluation of your health history, goals, and the potential benefits and risks. Some patients are good candidates and some aren't, and we'll tell you honestly which applies. Medication is never prescribed without that assessment." },
    { q: "What does the program involve besides medication?", a: "A great deal: medical evaluation, a personalized plan, practical nutrition guidance, realistic movement recommendations, lifestyle coaching around sleep and stress, and regular monitoring. These are the foundation, with medication as a possible addition." },
    { q: "Will I regain the weight afterward?", a: "Maintenance is built into the program precisely to reduce that risk. We focus on sustainable habits alongside any medical intervention, and we stay involved through follow-up. No approach can guarantee permanence, which is why the long-term plan matters." },
    { q: "How often will I be seen?", a: "You'll have regular follow-ups to monitor progress, safety, and how you're responding, so the plan can be adjusted over time. The exact cadence is individualized and set with you." },
    { q: "Are the medications safe?", a: "GLP-1 medications are well studied and, for appropriate patients, generally well tolerated, but like any medication they carry potential side effects. That's exactly why they're prescribed and monitored by your practitioner rather than obtained without oversight." },
    { q: "Who leads the program?", a: "Your care is directed by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner — from evaluation through ongoing follow-up." },
    { q: "Why does it start with an assessment?", a: "Because weight is individual and medical. An assessment lets us understand your health, history, and goals so we can build a safe, personalized plan rather than guessing or defaulting to medication." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>A medical plan for lasting <em>change.</em></>,
    copy: "Begin with an AVEN Assessment for a physician-directed weight-loss plan built around your health, your goals, and your life.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default medicalWeightLoss;
