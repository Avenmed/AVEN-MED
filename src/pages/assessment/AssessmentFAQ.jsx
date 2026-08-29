/* AVEN MED — Assessment: Assessment FAQ. Registry data module. */
import React from 'react';

const assessmentFAQ = {
  slug: "assessment/faq",
  priority: 0.8,
  changefreq: "monthly",
  seo: {
    title: "AVEN Assessment — Questions Answered | AVEN MED",
    description: "Whether treatment is required, taking time to decide, bringing someone, raising several concerns at once — the questions patients actually ask before booking.",
  },
  tags: ["assessment", "faq"],
  hub: { order: 50, blurb: "Straight answers to the questions patients ask most about the Assessment." },
  serviceName: "Assessment FAQ",
  serviceShort: "The Assessment",
  breadcrumbName: "Assessment FAQ",
  procedureName: "The AVEN Assessment — Frequently Asked Questions",
  procedureDescription:
    "Frequently asked questions about the AVEN Assessment in Orland Park, IL — the consultation-first evaluation with Alaa Mashal, MSN, APRN, FNP-BC that begins every patient relationship.",
  faqHeading: "Your questions, answered.",

  hero: {
    eyebrow: "The AVEN Assessment · FAQ",
    headline: <>Questions, <em>answered.</em></>,
    subheadline:
      "The things patients most often ask about the AVEN Assessment — answered plainly, so you can arrive knowing exactly what to expect.",
  },

  overview: {
    eyebrow: "Before You Ask",
    headline: <>No such thing as a small <em>question.</em></>,
    body: [
      "The Assessment exists to answer your questions, so it makes sense to start here. Below are the ones we hear most often. If yours isn't covered, that's exactly what your visit is for — nothing is too small to ask.",
    ],
  },

  faqs: [
    { q: "Do I have to receive treatment?", a: "No. There's no obligation of any kind. The Assessment is a consultation, and many patients leave with a plan they choose to act on later — or reconsider entirely. Whether and when to treat is always your decision." },
    { q: "Can I think about it before deciding?", a: "Absolutely, and we encourage it. Good decisions rarely need to be rushed. You're welcome to take your plan home, sit with it, and move forward whenever the timing feels right for you." },
    { q: "Can I bring someone with me?", a: "Yes. You're welcome to bring a partner, friend, or family member. Many patients find it helpful to have someone with them during the conversation." },
    { q: "Can we discuss more than one concern?", a: "Yes. The Assessment is designed to look at the whole picture. We can discuss several concerns and, importantly, how to prioritize them. The Comprehensive Assessment is especially suited to multiple goals." },
    { q: "Can wellness be included?", a: "Yes, where relevant. The Assessment isn't limited to aesthetics — we can discuss metabolic health, weight, energy, and preventive goals, and point you toward the right wellness services." },
    { q: "Can family medicine be included?", a: "Yes, when appropriate. If ongoing primary care is part of what you're looking for, we can discuss whether AVEN Family Medicine fits your needs during your visit." },
    { q: "Will I receive recommendations?", a: "Yes. You'll leave with clear, honest, individualized recommendations — and, with the Comprehensive Assessment, a written plan you keep. Guidance is the whole point of the visit." },
    { q: "Do you pressure patients?", a: "No. Consultation-first and no-pressure is genuinely how we practice, not a slogan. We explain your options, answer your questions, and let you decide in your own time. You will never be pushed toward a treatment." },
    { q: "Is the Assessment paid, and is it credited?", a: "Yes. The Assessment is a paid consultation — the Quick AVEN Assessment starts at $50 and the Comprehensive is $200 — and the fee is credited toward your treatment, so the time you invest moves into your care." },
    { q: "Why is the consultation paid?", a: "Because it's real clinical time and attention. A paid consultation lets the practice slow down and give every patient unhurried focus — and since the fee credits toward treatment, no appointment is wasted." },
    { q: "Who will I meet?", a: "You'll meet Alaa Mashal, MSN, APRN, FNP-BC, the founder and clinical director of AVEN MED. The person who assesses you is the person who cares for you — continuity is central to how AVEN works." },
    { q: "What if AVEN isn't the right fit for my concern?", a: "We'll tell you honestly. If something is outside our scope or better served elsewhere — including urgent, emergency, or specialty care — we'll say so and help point you in the right direction." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  crossLinksIntro: "Want to go deeper before you book?",
  crossLinks: [
    { label: "What to Expect", path: "/assessment/what-to-expect", note: "A step-by-step walkthrough of your visit." },
    { label: "Meet Your Provider", path: "/providers/alaa-mashal", note: "Get to know Alaa Mashal, MSN, APRN, FNP-BC." },
    { label: "The AVEN Assessment", path: "/assessment/the-aven-assessment", note: "Why every plan at AVEN begins here." },
  ],

  finalCta: {
    headline: <>Still have <em>questions?</em></>,
    copy: "The Assessment is the place to ask them. Begin with an AVEN Assessment and get honest, individualized answers.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default assessmentFAQ;
