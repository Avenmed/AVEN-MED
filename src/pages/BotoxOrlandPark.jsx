/* AVEN MED — Botox® in Orland Park.
 * First treatment landing page; content only. Layout/SEO come from
 * TreatmentTemplate. To add another treatment, copy this file's shape. */
import React from 'react';

const botox = {
  slug: "botox-orland-park",
  priority: 0.9,
  seo: {
    title: "Botox® in Orland Park, IL — Natural Neuromodulator Treatments | AVEN MED",
    description: "Natural-looking Botox in Orland Park, IL at AVEN MED. Neuromodulator treatments for forehead lines, crow's feet, brow lift, and lip flip, led by Alaa Mashal, FNP-BC. Every plan begins with the AVEN Assessment.",
  },
  treatmentName: "Botox®",
  treatmentShort: "Botox",
  breadcrumbName: "Botox in Orland Park",
  procedureName: "Botox — Neuromodulator Injections",
  procedureDescription:
    "Natural-looking neuromodulator (Botox, Dysport, Xeomin) treatments in Orland Park, IL, mapped to individual facial anatomy by Alaa Mashal, FNP-BC. Softens dynamic expression lines while preserving natural movement.",

  hero: {
    eyebrow: "Aesthetics · Neuromodulators",
    headline: <>Botox® in <em>Orland Park.</em></>,
    subheadline:
      "Natural-looking neuromodulator treatments designed to soften expression lines while preserving the character that makes you look like yourself.",
  },

  treats: {
    intro:
      "Neuromodulators are placed in precise micro-doses, mapped to how your face actually moves — never to a template. Depending on your anatomy and goals, Botox can address:",
    items: [
      { name: "Forehead Lines", note: "Horizontal lines softened while keeping natural brow movement." },
      { name: "Frown Lines", note: "The vertical ‘11s’ between the brows, eased at rest." },
      { name: "Crow's Feet", note: "Fine lines at the outer eye, relaxed without flattening your smile." },
      { name: "Bunny Lines", note: "Wrinkles along the bridge of the nose when you scrunch." },
      { name: "Brow Lift", note: "A subtle lift and opening of the eye through targeted placement." },
      { name: "Lip Flip", note: "A soft eversion of the upper lip — a few units, no filler." },
      { name: "Gummy Smile", note: "Relaxing the upper lip to show less gum when you smile." },
      { name: "Chin Dimpling", note: "Smoothing the ‘orange-peel’ texture of the chin." },
      { name: "Jaw Slimming", note: "Masseter treatment to slim the jawline and ease clenching." },
      { name: "Neck Bands", note: "Softening the vertical platysmal cords of the neck." },
    ],
  },

  comparison: {
    eyebrow: "Botox · Dysport · Xeomin",
    headline: "Three neuromodulators, one honest conversation.",
    intro:
      "Botox, Dysport, and Xeomin are all FDA-approved botulinum toxin type A neuromodulators. They share the same fundamental mechanism — temporarily relaxing a targeted muscle so the skin above it smooths. The differences between them are subtle, and the right choice depends on your anatomy, your goals, and how your face moves. That is exactly what the AVEN Assessment is for.",
    items: [
      { name: "Botox®", note: "The most studied and widely recognized of the three. Precise and predictable — well suited to detailed, small-area work." },
      { name: "Dysport®", note: "Spreads slightly more from each point, which can suit broader areas such as the forehead. Some patients notice onset a day or two sooner." },
      { name: "Xeomin®", note: "A ‘naked’ formulation with no complexing proteins. Often chosen by patients who prefer the purest product available." },
    ],
    closing:
      "We recommend based on what serves your face — never a house preference, and never a hard sell.",
  },

  whatToExpect: [
    { label: "Treatment", body: "The injections take ten to fifteen minutes. Fine needles, mapped to your anatomy — most describe it as a series of quick pinches. You return to your day immediately." },
    { label: "Recovery", body: "No downtime. Stay upright for four hours and skip strenuous exercise, facials, and lying flat for the rest of the day. Minor redness settles within the hour." },
    { label: "Results", body: "Movement begins to soften around day three to five, with full effect at ten to fourteen days — a rested, natural version of your expression. Never frozen." },
    { label: "Maintenance", body: "Results last, on average, three to four months. We re-evaluate at every visit rather than treating on a fixed schedule — over time, many patients need less." },
  ],

  faqs: [
    { q: "Is Botox safe?", a: "Yes. Botox has been FDA-approved and used cosmetically for over two decades. At AVEN MED it is administered only by Alaa Mashal, FNP-BC, a board-certified Family Nurse Practitioner, after a full assessment of your anatomy and health history." },
    { q: "Does Botox hurt?", a: "Very little. We use fine needles and precise placement; most patients describe a series of quick pinches. No numbing is usually needed, and you can return to your day right away." },
    { q: "How soon will I see results?", a: "Movement begins to soften around three to five days after treatment, with the full effect visible at ten to fourteen days. We often re-assess at two weeks to confirm you are exactly where you want to be." },
    { q: "How long does Botox last?", a: "On average, three to four months. This varies with the area treated, your metabolism, and how expressive the muscle is. We plan maintenance around your face, not a fixed calendar." },
    { q: "Will Botox make me look frozen?", a: "No — that is the opposite of our approach. We use conservative micro-dosing mapped to how your face moves, so expression is preserved. The goal is a softer, rested version of you, not a treated look." },
    { q: "What is preventative Botox?", a: "Preventative (or 'baby') Botox uses small, conservative doses to soften lines before they become etched into the skin at rest. It is popular with patients in their twenties and thirties who want to age slowly and naturally." },
    { q: "What is the difference between Botox and dermal fillers?", a: "Botox relaxes muscles to soften dynamic lines caused by movement. Fillers add volume to restore structure or plumpness. They solve different problems and are often used together in a considered plan." },
    { q: "What is a Botox brow lift?", a: "By relaxing the muscles that pull the brow down, a few precisely placed units can create a subtle lift and a more open, rested eye — without surgery." },
    { q: "What is a lip flip?", a: "A lip flip uses two to four units along the upper lip border to gently evert (roll outward) the lip, giving a softer, fuller look to the upper lip. It uses no filler and lasts a shorter time than filler." },
    { q: "How much does Botox cost in Orland Park?", a: "We do not publish per-unit pricing, because unit counts only make sense once your face has been assessed. Your personalized plan and pricing are quoted at your AVEN Assessment — and the assessment fee is credited toward your treatment." },
    { q: "Is there any downtime?", a: "None. You can return to work and normal activities immediately. We simply ask that you stay upright for four hours and avoid strenuous exercise, facials, and heat for the rest of the day." },
    { q: "Can I exercise after Botox?", a: "We recommend avoiding strenuous exercise for twenty-four hours, as increased blood flow and pressure can affect how the product settles." },
    { q: "Who performs Botox at AVEN MED?", a: "Every treatment is performed by Alaa Mashal, FNP-BC — the founder and only injector at AVEN MED. You will always be treated by the same practitioner, visit after visit." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from across the Southwest suburbs, including Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, and New Lenox." },
    { q: "How do I get started?", a: "Every plan begins with the AVEN Assessment — a focused Quick Assessment or a Comprehensive Assessment, both credited toward your treatment. It is the honest first step before any recommendation is made." },
  ],

  related: [
    { label: "Lip Flip in Orland Park", path: "/lip-flip-orland-park" },
    { label: "Masseter Botox in Orland Park", path: "/masseter-botox-orland-park" },
    { label: "TMJ Botox in Orland Park", path: "/tmj-botox-orland-park" },
    { label: "Hyperhidrosis Treatment in Orland Park", path: "/hyperhidrosis-treatment-orland-park" },
    { label: "Lip Fillers in Orland Park", path: "/lip-fillers-orland-park" },
    { label: "Sculptra in Orland Park", path: "/sculptra-orland-park" },
  ],

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default botox;
