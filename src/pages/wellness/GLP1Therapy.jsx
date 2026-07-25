/* AVEN MED — Wellness: GLP-1 Therapy. Registry data module (wellness type). */
import React from 'react';

const glp1Therapy = {
  slug: "wellness/glp-1-therapy",
  priority: 0.85,
  changefreq: "monthly",
  seo: {
    title: "GLP-1 Therapy in Orland Park, IL — Medically Monitored | AVEN MED",
    description: "GLP-1 therapy in Orland Park, IL at AVEN MED — semaglutide and tirzepatide prescribed and monitored as one part of a physician-directed weight-management program, never in isolation. Led by Alaa Mashal, MSN, APRN, FNP-BC. Every plan begins with the AVEN Assessment.",
  },
  tags: ["glp-1", "weight", "metabolic", "medication", "wellness"],
  serviceName: "GLP-1 Therapy",
  serviceShort: "GLP-1 therapy",
  breadcrumbName: "GLP-1 Therapy",
  hub: { order: 40, blurb: "Dedicated, medically monitored GLP-1 care for appropriate candidates." },
  procedureName: "GLP-1 Therapy — Medically Monitored Medication",
  procedureDescription:
    "GLP-1 therapy in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC — semaglutide or tirzepatide, prescribed and monitored as one component of a physician-directed medical weight-management program.",

  hero: {
    eyebrow: "Wellness · Metabolic Health",
    headline: <>GLP-1 <em>Therapy.</em></>,
    subheadline:
      "A closer look at the medications — how they work, how they're monitored, and how they fit into a complete weight-management program as one part of it, never the whole of it.",
  },

  overview: {
    eyebrow: "Overview",
    headline: <>What GLP-1 medications <em>are.</em></>,
    body: [
      "GLP-1 medications — including semaglutide and tirzepatide — are prescription treatments that mimic gut hormones your body already makes. They help regulate appetite and blood sugar, which for the right patient can make it easier to eat less and feel satisfied sooner.",
      "This page explains the medications specifically. The full, physician-directed program they belong to is our Medical Weight Loss program — and that distinction matters: a GLP-1 medication is one component of comprehensive medical weight management, not a standalone solution.",
      "We're deliberate about that framing because it's medically honest. The medication can be a powerful tool, but lasting results come from the whole program — evaluation, nutrition, movement, coaching, and monitoring — with medication used where it genuinely fits.",
    ],
  },

  candidacy: {
    headline: <>Who they may be <em>for.</em></>,
    intro:
      "Whether a GLP-1 medication is appropriate is a medical decision, made only after evaluation. It may be worth considering when:",
    considers: [
      "You have weight-related health goals a practitioner supports",
      "Lifestyle efforts alone haven't achieved your goals",
      "You want medically supervised, monitored treatment",
      "You understand it works best within a fuller program",
      "You're prepared for gradual, monitored dosing",
    ],
    notFor: [
      "You're pregnant, trying to conceive, or breastfeeding",
      "You have certain personal or family medical histories",
      "You want medication without evaluation or monitoring",
      "You expect a guaranteed or rapid result",
    ],
    note: "This is not medical advice or a diagnosis. Candidacy, and whether a GLP-1 is safe and appropriate for you, is determined only through a medical evaluation with your practitioner.",
  },

  pillars: {
    eyebrow: "What to Understand",
    headline: <>The realities, <em>plainly.</em></>,
    intro:
      "Going in with clear expectations matters. A few things we make sure every patient understands:",
    items: [
      { name: "Gradual Titration", note: "Dosing typically starts low and increases slowly to improve tolerability — it's not a quick switch." },
      { name: "Appetite Regulation", note: "The main effect is reduced appetite and earlier fullness, not a metabolism 'trick.'" },
      { name: "Common Side Effects", note: "Nausea, digestive changes, and reduced appetite are common, especially early; most ease over time." },
      { name: "Individual Response", note: "Results and tolerability vary widely — no number or timeline is promised." },
      { name: "One Component", note: "Medication supports, but doesn't replace, nutrition, movement, and coaching." },
      { name: "Ongoing Monitoring", note: "Regular follow-up checks your response, side effects, and whether to continue or adjust." },
    ],
  },

  medications: {
    eyebrow: "Where It Fits",
    headline: <>One part of a bigger <em>plan.</em></>,
    body: [
      "At AVEN, a GLP-1 is never prescribed in isolation. It's integrated into the Medical Weight Loss program, so the medication is paired with nutrition guidance, realistic movement, lifestyle coaching, and regular monitoring — the elements that make results sustainable.",
      "That integration is the point. Medication can reduce appetite, but the habits built alongside it are what carry results forward, especially if the medication is later adjusted or stopped. Treating the drug as the whole answer tends to disappoint; treating it as one tool within a program tends to work.",
      "If you're focused on the medication specifically, this page is for you — but we'd encourage reading it alongside the Medical Weight Loss program, which is the complete approach it belongs to.",
    ],
    note: "Medication is only one component of comprehensive medical weight management — never a substitute for the whole program.",
  },

  journey: [
    { label: "Evaluation", body: "A medical review of your health, history, and goals determines whether a GLP-1 is appropriate at all." },
    { label: "Prescription", body: "If appropriate, medication is prescribed within your program — with clear guidance on use and dosing." },
    { label: "Titration & Support", body: "Dosing is increased gradually while coaching, nutrition, and movement support the plan." },
    { label: "Monitoring", body: "Regular follow-up tracks response, side effects, and safety, adjusting the plan over time." },
  ],

  longTerm: {
    eyebrow: "The Long View",
    headline: <>Planning beyond the <em>prescription.</em></>,
    body: [
      "GLP-1 therapy raises real long-term questions: how long to continue, whether and when to adjust or taper, and how to hold results afterward. We address these deliberately rather than defaulting to indefinite use.",
      "Because weight can return if a medication simply stops without a plan, maintenance is built in from the start — the nutrition, movement, and habits that sustain progress are developed alongside the medication, not after it. Any decision about duration or tapering is made with your practitioner, based on your health and goals.",
      "The aim is durable metabolic health you can maintain, with medication playing whatever role is genuinely right for you over time — not a permanent default and not a quick fix.",
    ],
  },

  crossLinksIntro:
    "GLP-1 therapy is one part of how we approach weight. Explore the complete, physician-directed program it belongs to:",
  crossLinks: [
    { label: "Medical Weight Loss", path: "/wellness/medical-weight-loss", note: "The comprehensive, whole-person program — evaluation, nutrition, movement, coaching, and medication when appropriate." },
  ],

  faqs: [
    { q: "What are GLP-1 medications?", a: "GLP-1 medications, such as semaglutide and tirzepatide, are prescription treatments that mimic gut hormones to help regulate appetite and blood sugar. For appropriate patients, they can make it easier to eat less and feel full sooner." },
    { q: "How is GLP-1 therapy different from your Medical Weight Loss program?", a: "GLP-1 therapy refers to the medications specifically; Medical Weight Loss is the complete, physician-directed program. The medication is one component of that program — alongside evaluation, nutrition, movement, coaching, and monitoring — not a standalone service." },
    { q: "Can I just get the medication on its own?", a: "No. We prescribe GLP-1 medications only within a monitored program, because that's how they're used safely and effectively. Medication without evaluation, coaching, and follow-up isn't an approach we consider responsible." },
    { q: "What are the side effects?", a: "The most common are nausea, digestive changes, and reduced appetite, usually most noticeable early and often easing with time and gradual dosing. Less common but more serious effects exist, which is why medical evaluation and monitoring are essential." },
    { q: "How much weight will I lose?", a: "We don't promise a specific amount or timeline — response varies widely between individuals. The focus is on gradual, sustainable progress and metabolic health within the full program, with honest expectations rather than headline numbers." },
    { q: "How are the medications monitored?", a: "Through regular follow-ups that track your response, side effects, dosing, and overall safety, with adjustments as needed. Monitoring is a core part of GLP-1 therapy, not an optional add-on." },
    { q: "Do I take it forever?", a: "Not necessarily. Duration is individualized, and we plan deliberately around how long to continue and whether to adjust or taper, rather than defaulting to indefinite use. Building sustainable habits alongside the medication is what supports results if it's later reduced." },
    { q: "Will I regain weight if I stop?", a: "Weight can return if a medication simply stops without a plan, which is exactly why maintenance is built into the program from the start. We focus on the habits that carry results forward, and any tapering is planned with your practitioner." },
    { q: "Are GLP-1 medications safe?", a: "They're well studied and, for appropriate patients, generally well tolerated — but they carry potential risks and aren't right for everyone. That's why they're prescribed and monitored medically rather than obtained without oversight." },
    { q: "Who prescribes and oversees the medication?", a: "Your care is directed by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner — from evaluation through ongoing monitoring and follow-up." },
    { q: "Why does it start with an assessment?", a: "Because whether a GLP-1 is safe and appropriate for you is an individual medical decision. An assessment lets us evaluate your health and goals and, if suitable, integrate the medication into a proper program." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Medication, in its proper <em>place.</em></>,
    copy: "Begin with an AVEN Assessment to learn whether GLP-1 therapy fits you — as one part of a complete, physician-directed plan.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default glp1Therapy;
