/* AVEN MED — Family Medicine: Primary Care & Family Medicine. Registry data
 * module (familyMedicine type). Flagship page for the section. */
import React from 'react';

const primaryCare = {
  slug: "family-medicine/primary-care",
  priority: 0.9,
  changefreq: "monthly",
  seo: {
    title: "Primary Care in Orland Park, IL | AVEN MED",
    description: "Relationship-based primary care for adults and families at AVEN MED in Orland Park — prevention, chronic-condition support and coordination, with continuity.",
  },
  tags: ["primary-care", "continuity", "prevention", "family-medicine"],
  hub: { order: 10, blurb: "Relationship-based primary care for adults and families — evidence-based, continuous, and coordinated." },
  serviceName: "Primary Care & Family Medicine",
  serviceShort: "Primary care",
  breadcrumbName: "Primary Care & Family Medicine",
  procedureName: "Primary Care & Family Medicine",
  procedureDescription:
    "Relationship-based primary care and family medicine in Orland Park, IL with Alaa Mashal, MSN, APRN, FNP-BC — evidence-based preventive care, chronic-condition support, acute outpatient concerns, medication management, and specialist coordination for adults and families.",
  ctaLabel: "Schedule a Family Medicine Consultation",
  faqHeading: "Primary care, answered.",

  hero: {
    eyebrow: "Family Medicine · Primary Care",
    headline: <>Primary Care & Family <em>Medicine.</em></>,
    subheadline:
      "A steady medical home for adults and families — evidence-based care, real continuity, and a provider who knows your history and coordinates the rest of your care.",
  },

  overview: {
    eyebrow: "Overview",
    headline: <>A relationship, not a <em>transaction.</em></>,
    body: [
      "Primary care is the foundation of good health — the ongoing relationship with a provider who knows your history, helps you stay well, treats the everyday things, and helps you navigate the rest of the medical system. It's less about any single visit and more about continuity over time.",
      "At AVEN, family medicine is practiced that way: evidence-based, unhurried, and centered on you. The goal is a provider who recognizes your name and your file, who you can build a real relationship with, and who treats your health as an ongoing conversation rather than a series of disconnected appointments.",
      "It is deliberately grounded and medical — not a luxury product. What sets it apart is attention and continuity, not exclusivity: careful listening, honest guidance, and coordinated follow-through.",
    ],
  },

  whoWeServe: {
    eyebrow: "Who We Serve",
    headline: <>Care for adults and <em>families.</em></>,
    intro:
      "AVEN Family Medicine is a primary-care home for adults and families across the Southwest suburbs. It's often a good fit when:",
    items: [
      { name: "Establishing Care", note: "Adults who want a primary-care provider and a medical home they can return to." },
      { name: "Families Seeking Continuity", note: "Households who prefer one practice that knows them over time." },
      { name: "Managing a Condition", note: "Patients living with ongoing conditions who want steady, coordinated support." },
      { name: "Between Providers", note: "People who've lost continuity and want to re-establish consistent care." },
      { name: "Preventive-Minded", note: "Those who want to stay ahead of their health, not just react to problems." },
      { name: "New to the Area", note: "Patients looking for a local, dependable primary-care relationship." },
    ],
    note: "Whether AVEN is the right primary-care home for a specific family member depends on their needs and our provider's scope — we're always honest about fit and will point you elsewhere when that serves you better.",
  },

  visitTypes: {
    eyebrow: "Visit Types",
    headline: <>Different visits, one <em>relationship.</em></>,
    intro:
      "Primary care spans several kinds of visits, all connected by the same continuous record and provider:",
    items: [
      { name: "New-Patient Visits", note: "A thorough first visit to understand your history, medications, and goals, and to establish care." },
      { name: "Routine Follow-Up", note: "Regular check-ins to review how you're doing and adjust your plan over time." },
      { name: "Preventive Visits", note: "Wellness-focused visits for screenings, risk review, and staying ahead of problems." },
      { name: "Acute Concerns", note: "Outpatient evaluation of common, non-emergency illnesses and new symptoms appropriate for primary care." },
      { name: "Chronic-Care Visits", note: "Ongoing management and monitoring for established, stable conditions." },
      { name: "Medication Reviews", note: "Dedicated attention to what you take, why, and whether it still fits." },
    ],
  },

  careAreas: {
    eyebrow: "What Primary Care Covers",
    headline: <>Broad by design, honest about <em>limits.</em></>,
    intro:
      "Primary care is generalist by nature — it covers a wide range within an outpatient scope, and coordinates the rest. Depending on your needs, care may include:",
    items: [
      { name: "Preventive Care", note: "Age- and risk-appropriate screening discussions, vaccinations where offered, and lifestyle guidance." },
      { name: "Acute Concerns", note: "Evaluation and treatment of common, non-emergency illnesses suited to outpatient care." },
      { name: "Chronic-Condition Support", note: "Ongoing management of stable conditions such as blood pressure or thyroid, within scope." },
      { name: "Medication Management", note: "Reviewing, adjusting, and coordinating your medications thoughtfully and safely." },
      { name: "Labs & Interpretation", note: "Ordering relevant labs when clinically appropriate and interpreting them in context." },
      { name: "Referrals & Coordination", note: "Connecting you with specialists when needed and helping coordinate that care." },
      { name: "Women's General Health", note: "Common women's general-health needs addressed within the provider's scope." },
      { name: "Men's General Health", note: "Common men's general-health needs addressed within the provider's scope." },
    ],
    note: "This is a general description of primary care, not a promise that every condition can be managed at AVEN. Some concerns are better served by a specialist or a different level of care, and we'll tell you honestly when that's the case.",
  },

  journey: {
    eyebrow: "The Care Journey",
    headline: <>Continuity, visit to <em>visit.</em></>,
    steps: [
      { label: "New-Patient Visit", body: "We review your history, medications, and goals in depth, and begin your continuous record." },
      { label: "A Shared Plan", body: "Together we set priorities — prevention, any conditions, and what matters most to you." },
      { label: "Follow-Up", body: "Regular visits track progress, adjust the plan, and keep small issues from becoming large ones." },
      { label: "Coordination", body: "When you need a specialist or testing, we help arrange it and keep the picture connected." },
    ],
  },

  scope: {
    eyebrow: "Scope & Escalation",
    headline: <>Knowing what belongs <em>where.</em></>,
    body: [
      "Primary care handles a great deal, but part of practicing it well is recognizing what belongs elsewhere. AVEN Family Medicine is outpatient primary care — it does not replace urgent care, emergency care, or specialty care, and we'll always direct you to the right setting when your situation calls for it.",
      "For a medical emergency — such as chest pain, difficulty breathing, signs of a stroke, severe bleeding, or any life-threatening symptom — call 911 or go to the nearest emergency department. Please don't wait for a primary-care appointment when a situation is urgent or severe.",
      "For problems that need prompt but non-emergency attention outside our availability, urgent care may be the right choice; for conditions that need specialized expertise, we'll help coordinate a specialist referral. Getting you to the appropriate level of care is part of the job, not a hand-off we take lightly.",
    ],
    note: "If you're ever unsure how serious something is, err on the side of caution and seek urgent or emergency care.",
  },

  prepare: {
    eyebrow: "Before Your First Visit",
    headline: <>Come <em>prepared.</em></>,
    intro:
      "A productive first visit is easier when you bring a clear picture of your health. It helps to have:",
    items: [
      "A photo ID",
      "A current list of all medications and supplements, with doses",
      "Your relevant medical and surgical history",
      "Any recent test results or records you can access",
      "Names of any specialists you see",
      "Your pharmacy information",
      "A short list of your questions and concerns",
      "Relevant family medical history, if known",
    ],
    note: "Insurance participation is being established for AVEN Family Medicine, and coverage varies by plan. Contact AVEN MED to confirm what applies to you, and for current visit pricing and scheduling.",
  },

  crossLinksIntro:
    "Primary care coordinates naturally with AVEN Wellness. Where it's clinically useful, we connect the two:",
  crossLinks: [
    { label: "Wellness Consultation", path: "/wellness/consultation", note: "A provider-led visit to map health goals to the right wellness path." },
    { label: "Preventive Wellness", path: "/wellness/preventive-wellness", note: "Proactive guidance that complements guideline-based primary care." },
    { label: "Longevity & Lab Testing", path: "/wellness/longevity-lab-testing", note: "Clinician-guided lab evaluation, coordinated with your primary care." },
    { label: "Nutrition & Metabolic Support", path: "/wellness/nutrition-metabolic-support", note: "Practical nutrition guidance alongside your medical care." },
    { label: "Medical Weight Loss", path: "/wellness/medical-weight-loss", note: "A clinician-guided program for weight and metabolic health." },
  ],

  faqs: [
    { q: "What is primary care?", a: "Primary care is your ongoing medical home — a continuous relationship with a provider who knows your history, supports prevention, treats everyday concerns within scope, manages stable conditions, and helps coordinate specialists. Its value is continuity over time, not any single visit." },
    { q: "Who does AVEN Family Medicine serve?", a: "We provide primary care for adults and families across Orland Park and the Southwest suburbs. Whether we're the right fit for a specific family member depends on their needs and our provider's scope, and we'll be honest about that." },
    { q: "Is this a replacement for urgent or emergency care?", a: "No. AVEN Family Medicine is outpatient primary care and does not replace urgent care, emergency care, or specialty care. For an emergency, call 911 or go to the nearest emergency department; we'll direct you to the appropriate setting whenever a situation calls for it." },
    { q: "Can you treat any condition?", a: "No practice can. Primary care covers a broad range within an outpatient scope, but some conditions are better served by a specialist or a different level of care. When that's true, we'll tell you honestly and help coordinate the right referral." },
    { q: "Do you manage chronic conditions?", a: "We support ongoing management of stable chronic conditions within our scope, such as blood pressure or thyroid concerns, with regular follow-up and monitoring. More complex or unstable conditions may need specialist involvement, which we help coordinate." },
    { q: "Will I see the same provider each time?", a: "Continuity is central to how we practice — the goal is a consistent relationship with a provider who knows your file, so care builds over time rather than starting over each visit." },
    { q: "Do you handle referrals to specialists?", a: "Yes. When you need specialized care, we help arrange the referral and coordinate with the specialist so your overall picture stays connected rather than fragmented." },
    { q: "What should I bring to my first visit?", a: "A photo ID, a current list of your medications and supplements with doses, your relevant medical history, any recent test results, your pharmacy information, and a short list of your questions. Family history is helpful if you know it." },
    { q: "Can you order and interpret labs?", a: "Yes, when it's clinically appropriate. We order relevant labs based on your needs and interpret the results in the context of your history, symptoms, and goals rather than in isolation." },
    { q: "How does primary care work with AVEN Wellness?", a: "They complement each other. Primary care is your medical home; wellness services like preventive wellness, nutrition, and lab testing can support your goals alongside it. Where it's clinically useful, we coordinate the two." },
    { q: "How does payment work, and do you take insurance?", a: "Insurance participation is being established for AVEN Family Medicine. Coverage and network participation vary from plan to plan, so please contact us to confirm what applies to you before your visit — and self-pay remains available either way. We don't publish visit pricing on the site; contact AVEN MED for current pricing and scheduling." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>A medical home you can <em>return to.</em></>,
    copy: "Establish care with AVEN Family Medicine — evidence-based primary care built on continuity and coordination.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default primaryCare;
