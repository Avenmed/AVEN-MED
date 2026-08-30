/* AVEN MED — Wellness: Wellness Consultation. Registry data module (wellness type).
 * The primary entry point into AVEN Wellness. */
import React from 'react';

const wellnessConsultation = {
  slug: "wellness/consultation",
  priority: 0.9,
  changefreq: "monthly",
  seo: {
    title: "Wellness Consultation in Orland Park | AVEN MED",
    description: "A provider-led visit to review your goals, history and concerns, then map you to the right wellness service at AVEN MED — or tell you that you need none.",
  },
  tags: ["consultation", "wellness", "prevention"],
  hub: { order: 5, blurb: "Not sure where to start? A provider-led visit that maps your goals to the right wellness path." },
  serviceName: "Wellness Consultation",
  serviceShort: "The wellness consultation",
  breadcrumbName: "Wellness Consultation",
  procedureName: "Wellness Consultation — Provider-Led Wellness Evaluation",
  procedureDescription:
    "A provider-led wellness consultation in Orland Park, IL with Alaa Mashal, MSN, APRN, FNP-BC — a review of goals, health history, medications, and concerns to determine the appropriate AVEN Wellness next steps.",

  hero: {
    eyebrow: "Wellness · Start Here",
    headline: <>The Wellness <em>Consultation.</em></>,
    subheadline:
      "Know you want to feel better but unsure where to begin? This is the place to start — a provider-led visit that maps your goals to the right path, with no pressure and no assumptions.",
  },

  overview: {
    eyebrow: "Overview",
    headline: <>One conversation before any <em>plan.</em></>,
    body: [
      "AVEN Wellness spans several services — preventive care, medical weight loss, nutrition, IV therapy, lab testing, and more — and it isn't always obvious which one fits. The wellness consultation exists to answer exactly that: it's the front door, designed for people who want to improve their health but aren't sure of the right next step.",
      "It's a genuine, provider-led visit, not a sales pitch. We review your goals, history, and concerns, and then talk honestly about what — if anything — makes sense for you. Education comes before any recommendation, and you're never pushed toward a service you don't need.",
      "Sometimes the outcome is a specific wellness plan; sometimes it's a referral to primary care or a specialist; sometimes it's reassurance and a couple of sensible habits. All of those are good outcomes, because the point is the right next step, not a particular one.",
    ],
  },

  candidacy: {
    headline: <>Who should <em>start here.</em></>,
    intro:
      "The wellness consultation is the right starting point for most people exploring AVEN Wellness. It's especially useful when:",
    considers: [
      "You want to improve your health but aren't sure how",
      "You're weighing several options and want guidance",
      "You'd like a provider's honest read before committing",
      "You prefer a plan built around your goals, not a template",
      "You want to understand what AVEN can and can't help with",
    ],
    notFor: [
      "You already know exactly which service you want (book it directly)",
      "You have an acute or emergency medical problem",
      "You need urgent evaluation of a specific, worrying symptom",
    ],
    note: "A wellness consultation is not for emergencies. If you have severe, sudden, or worrying symptoms, seek urgent or emergency care rather than booking a consultation.",
  },

  pillars: {
    eyebrow: "Before Your Visit",
    headline: <>A little preparation goes a long <em>way.</em></>,
    intro:
      "The more complete the picture, the better the guidance. It helps to come ready to discuss:",
    items: [
      { name: "Health History", note: "Your medical history and any conditions — the foundation for everything we discuss." },
      { name: "Medications & Supplements", note: "Everything you currently take, so recommendations are safe and coordinated." },
      { name: "Symptoms & Concerns", note: "What's prompting your visit and what you'd most like to address." },
      { name: "Your Goals", note: "What 'better' looks like for you — the destination we're mapping toward." },
      { name: "Relevant Measurements", note: "Recent labs or measurements, if you have them, to review together." },
      { name: "An Open Conversation", note: "Questions, hesitations, and preferences — this is a discussion, not a script." },
    ],
  },

  medications: {
    eyebrow: "How We Decide Next Steps",
    headline: <>Guidance, matched to <em>you.</em></>,
    body: [
      "During the visit, your provider weighs everything together — your history, goals, symptoms, current medications, and any relevant measurements — to determine what's genuinely appropriate. There's no default recommendation and no quota; the right next step depends entirely on you.",
      "Depending on that picture, recommendations may include preventive wellness, medical weight loss, GLP-1 therapy, nutrition and metabolic support, IV therapy, vitamin injections, or longevity and lab testing — and family medicine when ongoing primary care is what you need. Often it's one of these; sometimes it's a thoughtful combination, sequenced sensibly.",
      "Just as importantly, we'll tell you when the answer is none of the above — when your situation calls for primary, urgent, emergency, or specialty care instead. Pointing you to the right setting is part of doing this well.",
    ],
    note: "Recommendations are individualized and made only after the consultation — never assumed in advance.",
  },

  journey: [
    { label: "Before the Visit", body: "You gather your history, medications, and goals; nothing formal is required — just come ready to talk." },
    { label: "The Consultation", body: "A provider-led conversation that reviews your health and goals and explores what fits." },
    { label: "Your Recommendations", body: "You leave with clear, honest next steps — which may be a plan, a referral, or simple guidance." },
    { label: "Follow-Up Planning", body: "If you move forward, we outline follow-up so your plan has structure and accountability." },
  ],

  longTerm: {
    eyebrow: "Clear About Scope",
    headline: <>When wellness isn't the right <em>setting.</em></>,
    body: [
      "A wellness consultation is the right starting point for proactive, non-urgent health goals — but it is not a substitute for primary, urgent, emergency, or specialty care, and part of our job is knowing the difference.",
      "If your situation calls for ongoing primary care, we can point you toward Family Medicine. If a symptom needs prompt evaluation, we'll direct you to urgent or emergency care. If a specific condition needs specialized expertise, we'll encourage the appropriate specialty referral.",
      "None of that is a dead end — it's the responsible next step. Getting you to the right kind of care is exactly what a good first conversation should do.",
    ],
  },

  consultation: {
    headline: <>The consultation <em>itself.</em></>,
    intro:
      "Your wellness consultation is the AVEN Assessment applied to your health goals — a paid, provider-led visit, credited toward your program so it's never wasted. Two ways to begin:",
  },

  crossLinksIntro:
    "A consultation may point toward any of these, depending on what genuinely fits you — including primary care when that's what you need:",
  crossLinks: [
    { label: "Preventive Wellness", path: "/wellness/preventive-wellness", note: "Proactive guidance to understand risks and build sustainable routines." },
    { label: "Medical Weight Loss", path: "/wellness/medical-weight-loss", note: "A clinician-guided, whole-person weight-management program." },
    { label: "GLP-1 Therapy", path: "/wellness/glp-1-therapy", note: "Medically monitored GLP-1 medication, as one part of a program." },
    { label: "Nutrition & Metabolic Support", path: "/wellness/nutrition-metabolic-support", note: "Practical, sustainable nutrition and lifestyle guidance." },
    { label: "IV Therapy", path: "/wellness/iv-therapy", note: "Custom infusions for hydration, recovery, and wellness support." },
    { label: "Vitamin Injections", path: "/wellness/vitamin-injections", note: "Targeted B12, lipotropic, and vitamin injections, for the right candidate." },
    { label: "Longevity & Lab Testing", path: "/wellness/longevity-lab-testing", note: "Clinician-guided lab evaluation and interpretation." },
    { label: "Family Medicine", path: "/family-medicine/primary-care", note: "Ongoing primary care at AVEN, when that's what you need." },
  ],

  faqs: [
    { q: "What is a wellness consultation?", a: "It's a provider-led visit designed to be your starting point in AVEN Wellness. We review your goals, history, and concerns and then map you to the right service — or to primary, urgent, or specialty care if that's what you need." },
    { q: "Who should book one?", a: "Anyone who wants to improve their health but isn't sure which service fits. If you already know exactly what you want, you can book that directly; the consultation is for when you'd value guidance first." },
    { q: "Will I be pressured to buy something?", a: "No. This is education-first, not a sales pitch. Sometimes the best recommendation is a couple of simple habits or a referral elsewhere — and we'll tell you that honestly rather than steer you toward a service you don't need." },
    { q: "What should I bring or prepare?", a: "It helps to come ready to discuss your health history, current medications and supplements, your symptoms and concerns, your goals, and any recent labs or measurements you have. Nothing formal is required." },
    { q: "What might be recommended?", a: "Depending on your needs, recommendations may include preventive wellness, medical weight loss, GLP-1 therapy, nutrition and metabolic support, IV therapy, vitamin injections, or longevity and lab testing — and family medicine when ongoing primary care fits. Often it's one; sometimes a sensible combination." },
    { q: "How does the provider decide what's right for me?", a: "By weighing your history, goals, symptoms, medications, and any relevant measurements together. There's no default recommendation — the right next step is individualized and decided only after the conversation." },
    { q: "Is the consultation credited toward treatment?", a: "Yes. The wellness consultation is the AVEN Assessment, a paid provider visit that's credited toward your program, so the time you invest goes toward your care rather than being an extra cost." },
    { q: "What if I actually need urgent or specialty care?", a: "We'll tell you plainly and point you to the right setting — primary, urgent, emergency, or specialty care. A wellness consultation isn't a substitute for those, and directing you appropriately is part of the visit's value." },
    { q: "How is this different from just booking a service?", a: "If you know what you want, booking directly is perfectly fine. The consultation exists for the many people who aren't sure — it turns 'I want to feel better' into a clear, individualized plan." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Not sure where to start? Start <em>here.</em></>,
    copy: "Begin with an AVEN Assessment — a provider-led wellness consultation that turns your goals into a clear, individualized next step.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default wellnessConsultation;
