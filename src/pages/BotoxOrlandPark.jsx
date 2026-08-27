/* AVEN MED — Botox® in Orland Park.
 *
 * PROTOTYPE for the treatment child-page system. Content only; layout and SEO come
 * from TreatmentTemplate. This page opts into the editorial presentation and a
 * page-specific section order via `editorial` and `sectionOrder` — neither is on by
 * default, so no other treatment page is affected by anything written here.
 *
 * CLINICAL SOURCING: every statement in `safety` is drawn from the FDA-approved
 * BOTOX Cosmetic prescribing information (contraindications §4.1/§4.2, warnings
 * §5.6, adverse reactions §6.1, pregnancy §8.1). Nothing here states an AVEN-
 * specific practice policy; where a statement would require one, it is omitted and
 * flagged for Alaa rather than invented. */
import React from 'react';

const botox = {
  slug: "botox-orland-park",
  priority: 0.9,
  seo: {
    title: "Botox in Orland Park, IL — Natural Results | AVEN MED",
    description:
      "Natural-looking Botox in Orland Park, IL. Conservative, anatomy-mapped dosing by Alaa Mashal, FNP-BC. Every plan begins with an AVEN Assessment.",
  },
  treatmentName: "Botox®",
  treatmentShort: "Botox",
  tags: ["injectable", "neuromodulator", "wrinkles", "aging"],
  relatedConcerns: ["concerns/fine-lines-and-wrinkles"],
  breadcrumbName: "Botox in Orland Park",
  procedureName: "Botox — Neuromodulator Injections",
  procedureDescription:
    "Natural-looking neuromodulator (Botox, Dysport, Xeomin) treatments in Orland Park, IL, mapped to individual facial anatomy by Alaa Mashal, MSN, APRN, FNP-BC. Softens dynamic expression lines while preserving natural movement.",

  // Prototype opt-ins. Absent on every other treatment module.
  editorial: true,
  sectionOrder: [
    "hero", "whyAven", "approach", "provider", "assessment", "treats",
    "howItWorks", "comparison", "whatToExpect", "safety", "faq",
    "related", "relatedConcerns", "bridal", "finalCta",
  ],

  hero: {
    eyebrow: "Aesthetics · Neuromodulators",
    headline: <>Botox® in <em>Orland Park.</em></>,
    subheadline:
      "Small, precisely placed doses that soften expression lines while leaving your expression intact. Every plan begins by looking at how your face actually moves.",
  },

  whyAven: {
    headline: <>We start with the face, not the <em>units.</em></>,
    intro:
      "A neuromodulator is an easy thing to sell. It is quick, it is popular, and there is always somewhere else on a face it could be used. AVEN is built the other way around: the first question is not how much you would like, but whether treatment is the right answer, and if so, where the least of it will do the most.",
    considers: [
      "How your face moves, at rest and in expression",
      "Which lines are dynamic and which have settled",
      "Facial balance rather than one isolated area",
      "What you actually want to change",
      "Previous treatment, where relevant",
      "Whether treatment is warranted at all",
    ],
    body:
      "That means you will sometimes be told that an area does not need treating, or that something other than a neuromodulator would serve you better. Education comes before recommendation here, and a recommendation is not a sale.",
    practitionerLine:
      "Every injection at AVEN is placed by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner and the only injector at the practice.",
  },

  approach: {
    eyebrow: "How the Plan Is Made",
    headline: <>Before the units, the <em>judgment.</em></>,
    body: [
      "There is no standard dose, because there is no standard face. Before anything is drawn up, Alaa watches how your muscles actually behave — at rest and in motion, which side pulls harder, where a line appears only when you move and where it has already settled into the skin.",
      "That reading is also where the decision gets made about whether a neuromodulator is the right tool. A line that stays when your face is completely still is not being caused by movement, and relaxing the muscle is not the answer to it. Saying so is part of the job.",
    ],
    considers: [
      "Facial movement and expression",
      "Treatment area and surrounding muscles",
      "Facial balance and proportion",
      "Your goals for the result",
      "Previous treatment, where relevant",
      "Preserving the expression that reads as you",
    ],
    closing:
      "AVEN would rather begin conservatively and reassess than use more product simply because more can be sold.",
    // Existing asset. Depicts a clinician assessing a patient's face — the pre-treatment
    // evaluation this section describes. Labelled for what it shows; it is not presented
    // as Botox being administered.
    media: {
      src: "/assets/alaa-loop-2.mp4",
      label: "Facial assessment · in-room",
      meta: "natural light · 4:5 · placeholder",
      aspect: "4/5",
    },
  },

  provider: {
    eyebrow: "Who Treats You",
    headline: <>One practitioner, every <em>visit.</em></>,
    body: [
      "AVEN MED is founded and led by Alaa Mashal, MSN, APRN, FNP-BC — Founder & Clinical Director, a board-certified Family Nurse Practitioner, and the practice's only injector. The person who assesses your face is the person who treats it, and the person who sees the result when you come back.",
      "She also practises as a Family Nurse Practitioner, which means she is used to looking at a patient rather than at an area. External appearance and general health are not separate subjects to her, and occasionally that means raising something worth attention that has nothing to do with aesthetics.",
      "There is no handoff here, no rotating injector, and no losing your history between visits. Continuity is the quiet advantage behind results that stay consistent.",
    ],
  },

  assessmentIntro: {
    headline: <>We look before we <em>treat.</em></>,
    body:
      "No unit count is quoted before your face has been assessed — a number given in advance is a guess with a price on it. An Aura skin analysis is part of every AVEN Assessment, and the fee is credited toward your treatment.",
  },
  assessmentTiers: {
    quickExtras: ["Facial movement assessment", "A clear first recommendation"],
    comprehensiveExtras: ["Full facial analysis", "Medical review", "Long-term treatment planning"],
  },

  treats: {
    intro:
      "Neuromodulators are placed in small, precise doses, mapped to how your face actually moves. Depending on your anatomy and goals, Botox can be used to address:",
    items: [
      { name: "Forehead Lines", note: "Horizontal lines softened while keeping natural brow movement." },
      { name: "Frown Lines", note: "The vertical ‘11s’ between the brows, eased at rest." },
      { name: "Crow's Feet", note: "Fine lines at the outer eye, relaxed without flattening your smile." },
      { name: "Bunny Lines", note: "Wrinkles along the bridge of the nose when you scrunch." },
      { name: "Brow Lift", note: "A subtle lift and opening of the eye through targeted placement." },
      { name: "Lip Flip", note: "A soft eversion of the upper lip — a few units, no filler.", path: "/lip-flip-orland-park" },
      { name: "Gummy Smile", note: "Relaxing the upper lip to show less gum when you smile." },
      { name: "Chin Dimpling", note: "Smoothing the ‘orange-peel’ texture of the chin." },
      { name: "Jaw Slimming", note: "Masseter treatment to slim the jawline and ease clenching.", path: "/masseter-botox-orland-park" },
      { name: "Neck Bands", note: "Softening the vertical platysmal cords of the neck." },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: <>Relaxing movement, not erasing <em>expression.</em></>,
    body: [
      "The lines Botox addresses are made by movement. Every time you raise your brows, squint or frown, the muscle underneath folds the skin above it — and over years, that fold begins to stay. A neuromodulator temporarily reduces the signal reaching the specific muscle it is placed in, so that muscle contracts less strongly and the skin above it creases less.",
      "It works on the muscle, not on the skin, and only where it is placed. That is why placement matters more than quantity: relaxing the right muscle by the right amount softens a line while the surrounding muscles keep doing their work. The aim is a face that still moves and reads as yours.",
      "Because the effect is temporary, treatment is planned as something reviewed and adjusted over time rather than decided once. How long it lasts varies with the area, the dose and the individual.",
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
    { label: "Recovery", body: "Most people go straight back to their day. Stay upright for four hours and skip strenuous exercise, facials, and lying flat for the rest of the day. Redness usually settles within the hour; some bruising is possible." },
    { label: "Results", body: "Movement begins to soften around day three to five, with the full effect at ten to fourteen days — a rested version of your own expression rather than a treated one." },
    { label: "Maintenance", body: "Results commonly last around three to four months, though this varies. We re-evaluate at every visit rather than treating on a fixed schedule." },
  ],

  safety: {
    eyebrow: "Safety & Candidacy",
    headline: <>What to know <em>first.</em></>,
    intro:
      "Botulinum toxin has been used cosmetically for over two decades and is well studied. It is still a medical treatment, it carries risks, and it is not right for everyone — which is why your history is reviewed before anything is recommended. The following is drawn from the approved prescribing information.",
    items: [
      { name: "Common after treatment", note: "Reactions at the injection site — tenderness, redness, swelling or bruising — can occur, and headache is among the most commonly reported effects. These are generally temporary." },
      { name: "Less common", note: "Temporary drooping of an eyelid or weakness in nearby muscles is a recognised effect of treatment around the brow and eye, and eye irritation has been reported with treatment near the outer eye." },
      { name: "When it should not be used", note: "Botox Cosmetic is not given to anyone with a known allergy to a botulinum toxin preparation or to any ingredient in it, or where there is an infection at the intended injection site." },
      { name: "Tell us about", note: "Neuromuscular conditions — including myasthenia gravis and Lambert-Eaton syndrome — and other neuromuscular or motor nerve disorders can increase the risk of significant effects from botulinum toxin." },
      { name: "Pregnancy and breastfeeding", note: "There are no adequate studies of Botox Cosmetic in pregnancy, and it is not known whether it passes into breast milk. Tell us if either applies so it can be discussed before anything is planned." },
      { name: "Effects are temporary", note: "The result fades gradually as muscle activity returns over months. It is not switched off on request — which is part of why the plan starts conservatively and is reviewed rather than pushed." },
    ],
    closing:
      "Botulinum toxin products carry a boxed warning that effects can, rarely, spread beyond the injection site; the prescribing information notes no definitive serious reports of this associated with cosmetic use at the labelled dose. If anything feels wrong after treatment, contact us.",
  },

  faqs: [
    { q: "Is Botox safe?", a: "Botulinum toxin has been used cosmetically for over two decades and is well studied, but like any medical treatment it carries risks and is not appropriate for everyone. The Safety & Candidacy section above sets out the main points. At AVEN MED it is administered only by Alaa Mashal, MSN, APRN, FNP-BC, after a review of your anatomy and health history." },
    { q: "Will Botox make me look frozen?", a: "That is the opposite of the goal here. Conservative dosing mapped to how your face moves is intended to soften a line while leaving surrounding expression intact — a rested version of your own face rather than a treated one. If you are worried about it, say so at your Assessment; it directly shapes the plan." },
    { q: "Does Botox hurt?", a: "Very little. We use fine needles and precise placement; most patients describe a series of quick pinches. No numbing is usually needed, and you can return to your day right away." },
    { q: "How soon will I see results?", a: "Movement begins to soften around three to five days after treatment, with the full effect visible at ten to fourteen days. We often re-assess at two weeks to confirm you are where you want to be." },
    { q: "How long does Botox last?", a: "Commonly around three to four months, though it varies with the area treated, the dose, and how expressive the muscle is. We plan maintenance around your face rather than a fixed calendar." },
    { q: "How does AVEN decide how much to use?", a: "By watching how your face actually moves before anything is drawn up — which muscles pull hardest, where a line is caused by movement and where it has settled, and what you want to change. The plan starts conservatively and is reviewed, rather than beginning with a number." },
    { q: "What is preventative Botox?", a: "Preventative (or 'baby') Botox describes using small, conservative doses earlier, with the aim of softening lines caused by movement before they settle into the skin at rest. Whether it makes sense for you depends on your face and your goals, and that is a conversation to have at an Assessment rather than a default recommendation." },
    { q: "What is the difference between Botox and dermal fillers?", a: "Botox relaxes muscles to soften lines caused by movement. Fillers add volume to restore structure or plumpness. They solve different problems and are often used together in a considered plan." },
    { q: "How much does Botox cost in Orland Park?", a: "We do not publish per-unit pricing, because unit counts only make sense once your face has been assessed. Your personalized plan and pricing are quoted at your AVEN Assessment — and the assessment fee is credited toward your treatment." },
    { q: "Who performs Botox at AVEN MED?", a: "Every treatment is performed by Alaa Mashal, MSN, APRN, FNP-BC — the founder and only injector at AVEN MED. You will always be treated by the same practitioner, visit after visit." },
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

  finalCta: {
    headline: <>Before any units, a <em>conversation.</em></>,
    copy: "Begin with an AVEN Assessment — your face read carefully, your options explained, and a plan you understand before anything is decided.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default botox;
