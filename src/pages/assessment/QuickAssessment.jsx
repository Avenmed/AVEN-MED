/* AVEN MED — Assessment: Quick AVEN Assessment. Registry data module. */
import React from 'react';

const quickAssessment = {
  slug: "assessment/quick-assessment",
  priority: 0.85,
  changefreq: "monthly",
  seo: {
    title: "Quick AVEN Assessment ($50) in Orland Park, IL | AVEN MED",
    description: "The Quick AVEN Assessment ($50, credited toward treatment) is a focused consultation with Alaa Mashal, FNP-BC in Orland Park, IL — an expert first read and a clear recommendation. A fast, low-commitment first step.",
  },
  tags: ["assessment", "quick"],
  hub: { order: 20, blurb: "A focused first step — an expert read and a clear recommendation. $50, credited toward treatment." },
  serviceName: "Quick AVEN Assessment",
  serviceShort: "The Quick Assessment",
  breadcrumbName: "Quick Assessment",
  procedureName: "Quick AVEN Assessment — Focused Consultation",
  procedureDescription:
    "The Quick AVEN Assessment in Orland Park, IL — a focused consultation with Alaa Mashal, FNP-BC including an Aura skin analysis and a first recommendation, credited toward treatment.",
  faqHeading: "The Quick Assessment, answered.",

  hero: {
    eyebrow: "The AVEN Assessment · Quick",
    headline: <>The Quick <em>Assessment.</em></>,
    subheadline:
      "A focused first step with Alaa Mashal, FNP-BC — an expert read on what you're seeing and a clear sense of your next step, without a long commitment.",
  },

  overview: {
    eyebrow: "What It Is",
    headline: <>A focused first <em>step.</em></>,
    body: [
      "The Quick AVEN Assessment is a short, focused consultation with Alaa Mashal, FNP-BC. It includes an Aura skin analysis — a fast, expert read on what your skin or your goal is showing, and a clear recommendation for a sensible next step.",
      "It's designed to be low-commitment: an easy, honest way to get a professional opinion and understand your options before deciding whether to go further. Like everything at AVEN, it's consultation-first — no pressure to treat.",
    ],
  },

  priceCallout: {
    price: "$50",
    unit: "focused visit",
    note: "The $50 is credited toward your treatment, so nothing is wasted — it moves with you into your care.",
  },

  whoFor: {
    eyebrow: "Who It's For",
    headline: <>When a focused visit <em>fits.</em></>,
    intro: "The Quick Assessment is often the right first step when:",
    items: [
      { name: "You're Exploring", note: "You're curious and want an expert opinion before committing to anything." },
      { name: "You Have One Concern", note: "You'd like a focused read on a single question or goal." },
      { name: "You Want a Fast Read", note: "You'd value a quick, professional recommendation to point you in the right direction." },
      { name: "You're Short on Time", note: "A focused visit fits your schedule better than a longer consultation right now." },
    ],
  },

  included: {
    eyebrow: "What's Included",
    headline: <>What you <em>get.</em></>,
    items: [
      "A focused consultation with Alaa Mashal, FNP-BC",
      "An Aura skin analysis — an expert read on your skin",
      "A clear first recommendation and next step",
      "Honest, no-pressure guidance",
      "The $50 credited toward your treatment",
    ],
  },

  compare: {
    eyebrow: "Quick vs. Comprehensive",
    headline: <>How it differs from the Comprehensive <em>Assessment.</em></>,
    body: [
      "The Quick Assessment is a focused first read — ideal for a single concern or an initial opinion. The Comprehensive AVEN Assessment is a longer, in-depth visit (up to 60 minutes) for multiple concerns, full planning, and a written treatment roadmap you keep.",
      "If you're exploring or have one clear question, Quick is usually the right start. If you have several concerns, want a long-term plan, or would like to fold in wellness or preventive goals, the Comprehensive Assessment is the better fit — and we can always upgrade the conversation if a Quick visit reveals more to discuss.",
    ],
    note: "Both are credited toward your treatment, so neither is ever a wasted step.",
  },

  crossLinksIntro: "After your Quick Assessment, your recommendation may point toward any part of the practice:",
  crossLinks: [
    { label: "Aesthetics", path: "/aesthetics", note: "Considered, natural-looking aesthetic treatments." },
    { label: "Wellness", path: "/wellness", note: "Prevention-first wellness and metabolic care." },
    { label: "Meet Your Provider", path: "/providers/alaa-mashal", note: "The clinician you'll meet — Alaa Mashal, FNP-BC." },
  ],

  faqs: [
    { q: "What is the Quick Assessment?", a: "It's a short, focused consultation with Alaa Mashal, FNP-BC, including an Aura skin analysis and a clear first recommendation. It's an easy, low-commitment way to get an expert opinion and understand your options." },
    { q: "How much is it, and is it credited?", a: "The Quick AVEN Assessment is $50, and that fee is credited toward your treatment — so if you move forward, nothing is wasted. It moves with you into your care." },
    { q: "When does a Quick Assessment make sense?", a: "It's ideal when you're exploring, have a single concern, want a fast professional read, or are short on time. For multiple concerns or long-term planning, the Comprehensive Assessment is a better fit." },
    { q: "How is it different from the Comprehensive Assessment?", a: "The Quick Assessment is a focused first read; the Comprehensive AVEN Assessment is a longer, in-depth visit (up to 60 minutes) for multiple concerns, full planning, and a written roadmap you keep. Both are credited toward treatment." },
    { q: "Do I have to book treatment afterward?", a: "No. There's no obligation and no pressure. You're welcome to take your recommendation, think it over, and decide in your own time." },
    { q: "Will I still get a recommendation?", a: "Yes. Even in a focused visit, you'll leave with a clear, honest recommendation and a sensible next step — that's the point of the visit." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>A simple first <em>step.</em></>,
    copy: "Begin with a Quick AVEN Assessment — a focused, no-pressure read on your options, credited toward your treatment.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default quickAssessment;
