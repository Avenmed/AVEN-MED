/* AVEN MED — Acne Treatment in Orland Park. Data module for the content registry. */
import React from 'react';

const acneTreatment = {
  slug: "acne-treatment-orland-park",
  priority: 0.9,
  seo: {
    title: "Acne Treatment in Orland Park, IL — Medical Acne Care | AVEN MED",
    description: "Medical acne treatment in Orland Park, IL at AVEN MED — an individualized approach to active acne combining in-office care, skincare, and, when appropriate, medical management. Led by Alaa Mashal, MSN, APRN, FNP-BC. Every plan begins with the AVEN Assessment.",
  },
  tags: ["skin", "acne"],
  relatedConcerns: ["concerns/acne"],
  treatmentName: "Acne Treatment",
  treatmentShort: "Acne Treatment",
  breadcrumbName: "Acne Treatment in Orland Park",
  procedureName: "Acne Treatment — Individualized Medical Acne Care",
  procedureDescription:
    "Individualized medical acne treatment in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC — combining in-office treatments, skincare, and appropriate medical management to calm active acne and protect skin health.",

  hero: {
    eyebrow: "Skin · Medical",
    headline: <>Acne Treatment in <em>Orland Park.</em></>,
    subheadline:
      "A medical, individualized approach to active acne — calming breakouts and protecting the skin's future, not chasing a quick fix.",
  },

  whyAven: {
    headline: <>Acne is medical. We treat it that <em>way.</em></>,
    intro:
      "Acne has many drivers — oil, bacteria, clogged pores, inflammation, and often hormones — so a single product rarely solves it. Every plan begins with the AVEN Assessment. Before we recommend treatment, we consider:",
    considers: [
      "Your acne type and severity",
      "Your skin type",
      "Triggers and patterns",
      "Possible hormonal factors",
      "Treatments you've already tried",
      "Your risk of scarring",
      "Relevant medical history",
      "Your goals",
    ],
    body:
      "From there we build an individualized plan that may combine in-office treatments, a targeted skincare routine, and — when appropriate — medical management. The aim is calmer skin now and less scarring later.",
    practitionerLine:
      "Your care is led by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner — from assessment onward.",
  },

  treats: {
    intro:
      "Acne isn't one condition, and the plan depends on what's driving yours. Depending on your skin, a considered plan may help improve:",
    items: [
      { name: "Inflammatory Acne", note: "The red, tender papules and pustules of active breakouts." },
      { name: "Comedonal Acne", note: "Blackheads and whiteheads from clogged pores." },
      { name: "Persistent Breakouts", note: "Acne that hasn't responded to over-the-counter products." },
      { name: "Hormonal Patterns", note: "Breakouts that follow a cyclical or jawline pattern." },
      { name: "Oiliness & Congestion", note: "Excess oil and the buildup that feeds breakouts." },
      { name: "Uneven Texture", note: "The rough, congested texture that can come with acne." },
      { name: "Scarring Risk", note: "Calming active acne to help protect the skin's future." },
      { name: "Skin Confidence", note: "Steady progress toward clearer, calmer skin." },
    ],
  },

  howItWorks: {
    eyebrow: "The Approach",
    headline: <>A layered, individualized <em>plan.</em></>,
    body: [
      "Because acne has several drivers, effective treatment usually works on more than one at once. A plan may combine a targeted skincare routine, in-office treatments to calm and clear the skin, and — when appropriate — medical management prescribed and monitored by your practitioner.",
      "Acne treatment rewards consistency over intensity. Results build over weeks as the skin responds, and the plan is adjusted along the way based on how your skin is doing rather than a fixed script.",
      "We're also thinking about the future: calming active acne well can help reduce the risk of the scarring that acne can leave behind. What works for you is determined individually — there is no universal acne cure.",
    ],
  },

  comparison: {
    eyebrow: "Active Acne · Acne Scars",
    headline: "First the acne, then the marks it leaves.",
    intro:
      "Active acne and acne scarring are different problems that call for different treatments — and the order matters. Treating scars while acne is still active rarely makes sense. Your assessment sorts out the right sequence.",
    items: [
      { name: "Active Acne", note: "Current breakouts, inflammation, and congestion — treated first with a medical, individualized plan." },
      { name: "Acne Scars", note: "The texture left behind after acne resolves — addressed with dedicated scar treatments once acne is controlled." },
      { name: "The Right Order", note: "Calm the acne first; then, if scarring remains, plan scar treatment. Getting this sequence right protects your results." },
    ],
    closing: "We'll always be honest about what stage you're at and what's realistic to expect.",
  },

  whatToExpect: [
    { label: "Assessment", body: "We evaluate what's driving your acne and rule in the right approach for your skin, history, and goals." },
    { label: "Your Plan", body: "You receive an individualized plan that may combine skincare, in-office treatments, and appropriate medical management." },
    { label: "The Timeline", body: "Acne rewards consistency. Improvement builds over weeks, and some plans get a little worse before better as the skin adjusts." },
    { label: "Follow-Up", body: "We review your progress and adjust the plan over time. There's no guaranteed timeline — every case is individual." },
  ],

  faqs: [
    { q: "How do you treat acne at AVEN MED?", a: "With an individualized, medical approach. After an assessment, your plan may combine a targeted skincare routine, in-office treatments to calm and clear the skin, and — when appropriate — medical management. There's no single product or one-size protocol." },
    { q: "Will my acne be completely cleared?", a: "We don't promise complete or permanent clearing, because acne is a chronic condition for many people and responses vary. Our goal is meaningful, sustained improvement and protecting your skin from scarring, with honest expectations from the start." },
    { q: "How long until I see improvement?", a: "Acne rewards consistency over intensity. Most plans show progress over several weeks, and some skin adjusts before it improves. We review and refine the plan as your skin responds." },
    { q: "Do I need prescription medication?", a: "Sometimes, sometimes not. Medical management may be part of an appropriate plan, but only when indicated for you. That decision is individualized and made with you during and after your assessment." },
    { q: "Can you help hormonal acne?", a: "Hormonal patterns are common, especially along the lower face and jaw. We take possible hormonal factors into account when building your plan and will advise if additional evaluation is appropriate." },
    { q: "What causes acne?", a: "Acne typically involves a mix of excess oil, clogged pores, acne-causing bacteria, and inflammation, often influenced by hormones and genetics. Because several factors are usually involved, effective treatment often works on more than one at a time." },
    { q: "Should I stop my current products?", a: "Not without discussing it. Part of the assessment is reviewing what you're already using so we can keep what helps, remove what irritates, and build a routine that supports rather than fights your skin." },
    { q: "Can acne treatment prevent scarring?", a: "Controlling active acne well can help reduce the risk of the scarring acne can leave behind, though it can't guarantee no scarring. Addressing acne promptly and appropriately is one of the best ways to protect your skin's future." },
    { q: "What about acne scars I already have?", a: "Existing scars are treated separately, and usually once your active acne is under control. We offer dedicated acne scar treatment and will plan the right sequence for you." },
    { q: "Is acne treatment appropriate for all skin tones?", a: "Yes, though the approach and precautions differ by skin type — particularly around the risk of post-inflammatory pigmentation. That individualized planning is exactly what the assessment provides." },
    { q: "Why is an assessment required first?", a: "Because acne is individual. An assessment lets us understand what's driving your breakouts and build a safe, effective plan rather than guessing with a generic protocol." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Calmer skin, protected for the <em>future.</em></>,
    copy: "Begin with an AVEN Assessment to receive an individualized acne plan based on your skin, your triggers, and your goals.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default acneTreatment;
