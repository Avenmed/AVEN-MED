/* AVEN MED — Facials in Orland Park. Data module for the content registry. */
import React from 'react';

const facials = {
  slug: "facials-orland-park",
  priority: 0.85,
  changefreq: "monthly",
  seo: {
    title: "Facials in Orland Park, IL — Results-Focused Treatments | AVEN MED",
    description: "Results-focused facials in Orland Park, IL at AVEN MED — professional treatments tailored to your skin that support health, glow, and your broader skin plan. Led by Alaa Mashal, FNP-BC. Every treatment begins with the AVEN Assessment.",
  },
  tags: ["skin", "facial", "maintenance"],
  treatmentName: "Facials",
  treatmentShort: "Facials",
  breadcrumbName: "Facials in Orland Park",
  procedureName: "Facials — Results-Focused Professional Skin Treatments",
  procedureDescription:
    "Results-focused professional facials in Orland Park, IL guided by Alaa Mashal, FNP-BC — tailored treatments that support skin health, glow, and your broader skin plan.",

  hero: {
    eyebrow: "Skin · Treatment",
    headline: <>Facials in <em>Orland Park.</em></>,
    subheadline:
      "Professional, results-focused treatments tailored to your skin — supporting real skin health, not just an hour of pampering.",
  },

  whyAven: {
    headline: <>A facial with a <em>purpose.</em></>,
    intro:
      "A facial can be relaxing, but at AVEN it's also purposeful — chosen to support your skin and your broader plan, not a generic menu treatment. Every facial begins with the AVEN Assessment. Before we tailor yours, we consider:",
    considers: [
      "Your skin type and condition",
      "Your primary concerns",
      "Sensitivity and reactivity",
      "Where you are in your skin plan",
      "Any recent treatments",
      "Pigmentation history",
      "Your skincare routine",
      "Your goals",
    ],
    body:
      "From there we tailor the treatment — the cleansing, exfoliation, extractions if appropriate, and the actives and masks used — to what your skin needs that day. The aim is healthy, glowing skin that fits into a bigger picture.",
    practitionerLine:
      "Your skin care is overseen by Alaa Mashal, FNP-BC — a board-certified Family Nurse Practitioner — as part of your overall plan.",
  },

  treats: {
    intro:
      "A tailored facial deep-cleans, exfoliates, and nourishes the skin in ways a home routine can't fully match. Depending on your skin, a treatment may help support:",
    items: [
      { name: "Dull, Tired Skin", note: "A fresher, more luminous-looking complexion." },
      { name: "Congestion", note: "Deep cleansing and appropriate extractions to clear buildup." },
      { name: "Hydration", note: "Restored moisture and comfort for dry or dehydrated skin." },
      { name: "Texture", note: "Smoother-feeling skin through professional exfoliation." },
      { name: "Maintenance", note: "Regular support to keep skin healthy between other treatments." },
      { name: "Relaxation", note: "A restorative experience that's good for skin and wellbeing." },
      { name: "Skin-Plan Support", note: "A complement to your in-office treatments and daily routine." },
      { name: "Overall Radiance", note: "Healthier-looking, well-cared-for skin." },
    ],
  },

  howItWorks: {
    eyebrow: "Tailored, Not Generic",
    headline: <>Where facials fit in your <em>plan.</em></>,
    body: [
      "A professional facial typically layers several steps — cleansing, exfoliation, extractions where appropriate, and targeted actives, masks, and hydration — adjusted to your skin on the day. Because it's tailored rather than fixed, the same patient's facial can look different from one visit to the next.",
      "We're honest about where facials fit. They're excellent for skin health, maintenance, glow, and comfort — but they aren't a substitute for treatments that target deeper concerns like significant wrinkles, volume loss, or established acne scarring. Those have their own dedicated approaches.",
      "At their best, facials are part of a rhythm: gentle, regular care that keeps your skin healthy and supports the more targeted work in your plan, rather than a stand-alone fix.",
    ],
  },

  comparison: {
    eyebrow: "Facials · Medical Treatments",
    headline: "Maintenance vs. targeted change.",
    intro:
      "Facials and medical skin treatments do different jobs, and the best plans often use both. Knowing the difference keeps expectations realistic.",
    items: [
      { name: "Facials", note: "Support skin health, cleansing, hydration, and glow — ideal for regular maintenance and comfort with little to no downtime." },
      { name: "Medical Treatments", note: "Target specific concerns — peels for resurfacing, microneedling for scars and texture, injectables for lines and volume — with more defined, sometimes stronger effects." },
      { name: "Better Together", note: "Facials maintain and support the skin between the more targeted treatments in your plan. We sequence both for you." },
    ],
    closing: "We'll always be clear about what a facial can and can't do, so your expectations match reality.",
  },

  whatToExpect: [
    { label: "Assessment", body: "We understand your skin and where it is in your plan before tailoring the treatment to the day's needs." },
    { label: "The Treatment", body: "A relaxing, layered treatment — cleansing, exfoliation, extractions if appropriate, and targeted actives and hydration." },
    { label: "Afterward", body: "Most facials have little to no downtime, though skin may look slightly flushed briefly. You'll receive simple aftercare guidance." },
    { label: "A Rhythm", body: "Facials work best as regular maintenance. We'll suggest a cadence that supports your skin and the rest of your plan." },
  ],

  faqs: [
    { q: "What kind of facials do you offer?", a: "Rather than a fixed menu, our facials are tailored to your skin on the day — the cleansing, exfoliation, extractions if appropriate, and the actives and masks are chosen for what your skin needs and where you are in your plan." },
    { q: "Are facials just relaxing, or do they actually help?", a: "Both. A professional facial is restorative, but it's also purposeful — deep cleansing, exfoliation, and hydration support genuine skin health. We focus on results as well as the experience." },
    { q: "Can a facial treat wrinkles or acne scars?", a: "Not directly. Facials support skin health, glow, and maintenance, but deeper concerns like significant wrinkles, volume loss, or established acne scarring have their own dedicated treatments. We'll be honest about what fits your goals." },
    { q: "How often should I get a facial?", a: "Many people benefit from regular facials as maintenance, often every few weeks to a couple of months, but the right cadence depends on your skin and plan. We'll suggest a rhythm that supports your goals." },
    { q: "Is there any downtime?", a: "Most facials have little to no downtime. Skin may look slightly flushed for a short while, and occasionally extractions can leave temporary redness. You can usually return to your day right away." },
    { q: "Are facials safe for sensitive skin?", a: "Often yes, when tailored carefully. Sensitivity is one of the first things we assess, and the treatment is adjusted — gentler exfoliation, soothing actives — to suit reactive skin." },
    { q: "Can I get a facial if I have active acne?", a: "Sometimes, with the right approach — certain facials can support acne-prone skin. But active acne is a medical concern we may address more directly first. Your assessment determines what's appropriate and in what order." },
    { q: "Should I get a facial before an event?", a: "A facial can leave skin looking fresh and glowing, but it's best not to try a new or stronger treatment right before an important date. We recommend timing it a little ahead so skin has time to settle." },
    { q: "Do facials replace my skincare routine?", a: "No — they complement it. Your daily medical-grade routine is the foundation; facials provide periodic professional support on top of it. The two work best together." },
    { q: "How do facials fit with my other treatments?", a: "Facials are excellent maintenance between more targeted treatments like peels, microneedling, or injectables. We sequence everything so your facials support, rather than interfere with, the rest of your plan." },
    { q: "Why begin with an assessment?", a: "Because a tailored facial should be matched to your skin and your plan. An assessment lets us understand your skin type, concerns, and goals so the treatment genuinely supports your skin health." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Healthy, glowing skin — with <em>purpose.</em></>,
    copy: "Begin with an AVEN Assessment to receive a facial tailored to your skin, your concerns, and your broader skin plan.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default facials;
