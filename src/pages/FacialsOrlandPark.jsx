/* AVEN MED — Facials in Orland Park. Data module for the content registry.
 *
 * Treatment Page v2 (Wave 4), and deliberately the LIGHTEST page in the family.
 * A facial is a low-risk, non-invasive supportive service and must not be dressed
 * in the safety architecture of an injectable or a device. No emergency escalation
 * list, no rare-catastrophic-complication section, no device contraindication dump.
 * That restraint is a requirement of this brief, not an oversight.
 *
 * The safety module is therefore titled "When We Adjust or Postpone" and carries
 * only what genuinely applies: active infection, significant irritation or
 * inflammation, open wounds, and conditions a facial could aggravate.
 *
 * AVEN PRACTICE POLICY used here: facials are generally safe and non-invasive;
 * treatment may be modified or postponed for the conditions above; every new
 * patient begins with provider assessment in the broader AVEN model, after which
 * appropriate patients may coordinate with the esthetician for facials and
 * skincare. The Assessment tiers are NOT redefined — nothing here says or implies
 * that a facial requires the Comprehensive tier, and the canonical tier facts come
 * from content/assessment-tiers.js as everywhere else.
 *
 * NO ESTHETICIAN IS NAMED — none is canonical — and nothing implies an esthetician
 * diagnoses medical conditions. No facial brand, protocol, product or device is
 * invented. */
import React from 'react';

const facials = {
  slug: "facials-orland-park",
  priority: 0.9,
  changefreq: "monthly",
  seo: {
    title: "Facials in Orland Park, IL | AVEN MED",
    description:
      "Facials in Orland Park, IL — supportive, non-invasive skin care within a clinical plan led by Alaa Mashal, MSN, APRN, FNP-BC. Assessment first.",
  },
  tags: ["skin", "facial", "maintenance"],
  treatmentName: "Facials",
  treatmentShort: "Facials",
  breadcrumbName: "Facials in Orland Park",
  procedureName: "Facials — Supportive Professional Skin Care",
  procedureDescription:
    "Facials in Orland Park, IL at AVEN MED — non-invasive, supportive skin treatments delivered within a clinically led plan, following an AVEN Assessment.",

  editorial: true,
  sectionOrder: [
    "hero", "whyAven", "approach", "provider", "assessment", "treats",
    "howItWorks", "whatToExpect", "safety", "faq",
    "related", "bridal", "finalCta",
  ],

  hero: {
    eyebrow: "Skin · Supportive Care",
    headline: <>Facials in <em>Orland Park.</em></>,
    subheadline:
      "Comfortable, non-invasive care for your skin — genuinely restorative, honestly described. A facial maintains and supports skin rather than changing its structure.",
  },

  whyAven: {
    headline: <>Pleasant is not the same as <em>pointless.</em></>,
    intro:
      "Facials get dismissed in medical settings and oversold in others. Both are wrong. A facial will not remodel your skin's structure, and it is worth saying so plainly — but cleansing, gentle exfoliation, extraction where appropriate and proper hydration are real care, and consistent maintenance is a legitimate part of how skin stays in good condition.",
    body:
      "What AVEN adds is context. A facial here sits inside a plan someone is actually overseeing, so it complements what else is happening to your skin rather than colliding with it — and it is timed around treatments rather than booked into the middle of a recovery.",
    practitionerLine:
      "Your skin is assessed by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner — before treatments are arranged.",
  },

  approach: {
    eyebrow: "How the Plan Is Made",
    headline: <>Suited to your skin, and to your <em>week.</em></>,
    body: [
      "The facial is matched to the state of your skin rather than picked from a list — whether it is dehydrated, congested, sensitive or simply due for maintenance changes what should be done and how gently.",
      "Timing matters as much as content. Where you are in a treatment plan determines what is appropriate now: skin recovering from a peel or microneedling should not receive a facial in the same window, and a facial before an event is planned with enough room that any transient flushing has settled.",
    ],
    considers: [
      "Current skin condition — dehydrated, congested, sensitive or settled",
      "Sensitivity, and how your skin reacts to being handled",
      "Where you are in any active treatment plan",
      "Your home routine and what it is already doing",
      "Any events you are timing around",
    ],
    closing:
      "Facials are spaced around procedures rather than stacked with them, so neither undoes the other.",
  },

  provider: {
    eyebrow: "Who You'll See",
    headline: <>Assessed by a clinician, cared for by the <em>team.</em></>,
    body: [
      "AVEN MED is founded and led by Alaa Mashal, MSN, APRN, FNP-BC — Founder & Clinical Director and a board-certified Family Nurse Practitioner. Every new patient's skin is assessed by her, and the plan — including whether facials fit into it and when — is set there.",
      "From there, appropriate patients coordinate with our esthetician for facials and supportive skincare, working to that plan. The clinical assessment and any diagnosis stay with Alaa; the esthetician delivers the supportive care within it. That division is deliberate and is how a facial here stays connected to everything else being done to your skin.",
    ],
  },

  assessmentIntro: {
    headline: <>We look <em>first.</em></>,
    body:
      "New patients begin with an AVEN Assessment so that treatments — including facials — are chosen for your skin and sequenced sensibly with anything else planned. An Aura skin analysis is part of every AVEN Assessment and adds to the picture of your skin; it does not diagnose conditions. The fee is credited toward your treatment.",
  },
  assessmentTiers: {
    quickExtras: ["A clear view of what your skin needs now"],
    comprehensiveExtras: ["Full skin analysis and history review", "A plan showing where facials fit alongside other treatments"],
  },

  treats: {
    intro:
      "A facial is supportive care rather than a corrective procedure. Depending on your skin, one may help with:",
    items: [
      { name: "Cleansing and Congestion", note: "Deep cleansing, and extraction where it is appropriate." },
      { name: "Hydration", note: "Comfort and hydration for skin that feels tight or dull." },
      { name: "Maintenance Between Treatments", note: "Keeping skin in good condition between procedures." },
      { name: "Dull-Looking Skin", note: "A fresher, better-conditioned appearance in the short term." },
      { name: "Skin That Needs Gentleness", note: "A calmer option when active treatment is not appropriate right now." },
      { name: "Time to Look After It", note: "An hour of genuine care — which is a reasonable thing to want." },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: <>Surface care, honestly <em>described.</em></>,
    body: [
      "A facial works at the surface. Cleansing and gentle exfoliation clear away buildup, extraction addresses congestion where suitable, and hydrating steps leave the skin more comfortable and better conditioned. It is genuine care, and skin that is regularly cleaned, hydrated and handled gently generally behaves better.",
      "What it does not do is change the skin's structure. Depressed scarring, established lines and pigment sitting deeper in the skin are not what a facial reaches — those need the treatments that work at that level, and a facial should never be sold as a substitute for one. Its effects are real, largely short-term, and best thought of as maintenance rather than correction.",
    ],
  },

  whatToExpect: [
    { label: "Before", body: "Arrive with clean skin if you can, and mention anything that has changed — new products, recent treatments, or skin that has been unsettled lately." },
    { label: "During", body: "Cleansing, gentle exfoliation, extraction where appropriate, and hydrating steps, adjusted to how your skin is behaving on the day. It should be comfortable throughout." },
    { label: "Afterward", body: "Most people return to their day straight away. Skin can look slightly flushed for a short while, and extractions can leave temporary marks that settle." },
    { label: "Aftercare", body: "Simple guidance, usually keeping things gentle for a day and wearing sunscreen as normal." },
    { label: "How often", body: "Regular maintenance suits many people, and the spacing is set around your skin and anything else in your plan rather than a fixed schedule." },
  ],

  safety: {
    eyebrow: "Before Your Facial",
    headline: <>When we adjust or <em>postpone.</em></>,
    intro:
      "Facials are non-invasive and generally low-risk, so this is short by design. A few situations mean changing the treatment or waiting — none of them is a problem, and all are better mentioned in advance.",
    items: [
      { name: "Active infection", note: "An active skin infection, or a cold sore in the area, means postponing until it has resolved." },
      { name: "Broken or open skin", note: "Open wounds, sores or broken skin in the treatment area are left alone and worked around, or the facial is rescheduled." },
      { name: "Significant irritation", note: "Where skin is already inflamed or irritated, a facial can aggravate it. The treatment is adjusted to something calmer, or held until the skin has settled." },
      { name: "Conditions a facial could aggravate", note: "Some skin conditions flare with handling, product or heat. Tell us what you have and the treatment is modified accordingly." },
      { name: "Recent treatments", note: "If you have recently had a peel, microneedling or another procedure, say so — facials are spaced around those rather than performed during recovery." },
      { name: "Sensitivity and reactions", note: "Let us know about sensitive skin, allergies or past reactions to products so the facial can be adapted before it starts rather than during." },
    ],
    closing:
      "Postponing is not a refusal — it is a different date, and the treatment is better for the wait.",
  },

  faqs: [
    { q: "Will a facial fix my acne scars or wrinkles?", a: "No, and it is worth being straightforward about that. A facial works at the surface — cleansing, gentle exfoliation, extraction and hydration. Structural concerns such as depressed scarring or established lines need treatments that work at that level, and a facial is not a substitute for one." },
    { q: "Do I need an assessment first?", a: "New patients are assessed so that treatments are chosen for your skin and sequenced sensibly with anything else planned. It is also how we know a facial is appropriate for your skin right now rather than assuming it." },
    { q: "My skin is sensitive or irritated. Can I still have one?", a: "Often yes, with the treatment adapted to something gentler — and sometimes the honest answer is to wait until the skin has settled, because a facial on already-inflamed skin can aggravate it. Tell us in advance and it is planned around." },
    { q: "Is there any downtime?", a: "Very little. Most people return to their day straight away, though skin may look slightly flushed for a short while and extractions can leave temporary marks that settle." },
    { q: "How do facials fit with my other treatments?", a: "As maintenance between them rather than alongside them. Facials are spaced around procedures such as peels and microneedling so neither interferes with the other — which is one of the advantages of having it all planned in one place." },
    { q: "How often should I have one?", a: "Regular maintenance suits many people, and the spacing depends on your skin and what else is in your plan. There is no fixed schedule, and more frequent is not automatically better." },
    { q: "Who performs the facial?", a: "Your skin is assessed and your plan set by Alaa Mashal, MSN, APRN, FNP-BC. Facials and supportive skincare are then delivered by our esthetician, working to that plan — with clinical assessment remaining with Alaa." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  related: [
    { label: "Medical-Grade Skincare in Orland Park", path: "/medical-grade-skincare-orland-park" },
    { label: "Chemical Peels in Orland Park", path: "/chemical-peels-orland-park" },
    { label: "Skin Rejuvenation in Orland Park", path: "/skin-rejuvenation-orland-park" },
    { label: "SkinPen Microneedling in Orland Park", path: "/skinpen-microneedling-orland-park" },
  ],

  finalCta: {
    headline: <>Looked after, <em>properly.</em></>,
    copy: "Begin with an AVEN Assessment so your facials fit sensibly alongside everything else planned for your skin.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default facials;
