/* AVEN MED — Chemical Peels in Orland Park. Data module for the content registry. */
import React from 'react';

const chemicalPeels = {
  slug: "chemical-peels-orland-park",
  priority: 0.9,
  seo: {
    title: "Chemical Peels in Orland Park, IL — Medical-Grade Resurfacing | AVEN MED",
    description: "Medical-grade chemical peels in Orland Park, IL at AVEN MED — resurfacing matched to your skin to improve tone, texture, and clarity. Led by Alaa Mashal, MSN, APRN, FNP-BC. Every plan begins with the AVEN Assessment.",
  },
  tags: ["skin", "texture", "tone", "acne", "aging", "pigment"],
  relatedConcerns: ["concerns/uneven-skin-tone", "concerns/sun-damage", "concerns/skin-texture"],
  treatmentName: "Chemical Peels",
  treatmentShort: "Chemical Peels",
  breadcrumbName: "Chemical Peels in Orland Park",
  procedureName: "Chemical Peel — Medical-Grade Skin Resurfacing",
  procedureDescription:
    "Medical-grade chemical peels in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC — controlled resurfacing tailored to skin type and concern to improve tone, texture, and clarity.",

  hero: {
    eyebrow: "Skin · Resurfacing",
    headline: <>Chemical Peels in <em>Orland Park.</em></>,
    subheadline:
      "Medical-grade resurfacing that refreshes tone, texture, and clarity — matched to your skin, never a one-size peel.",
  },

  whyAven: {
    headline: <>A peel is a medical treatment, not a spa menu <em>item.</em></>,
    intro:
      "The wrong peel on the wrong skin can do more harm than good — which is why we never treat peels as an off-the-shelf service. Every recommendation begins with the AVEN Assessment. Before we choose a peel, we consider:",
    considers: [
      "Your skin type and tone",
      "The concerns you want to address",
      "Your pigmentation history",
      "Sensitivity and reactivity",
      "Recent sun exposure",
      "Any prior peels or treatments",
      "Relevant medical history",
      "Long-term skin goals",
    ],
    body:
      "From there we match the peel — its type and strength — to your skin and goals, and we build it into a plan rather than a single dramatic treatment. Restraint and skin health come first.",
    practitionerLine:
      "Your treatment is performed by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner — after an assessment.",
  },

  treats: {
    intro:
      "By removing the outermost, damaged layer of skin in a controlled way, a well-chosen peel can refresh how the skin looks and feels. Depending on your skin, a peel may help improve:",
    items: [
      { name: "Uneven Tone", note: "Overall tone can look more even and bright." },
      { name: "Rough Texture", note: "The surface may feel smoother as it renews." },
      { name: "Mild Pigmentation", note: "Some surface pigment and dullness may improve with the right peel." },
      { name: "Dullness", note: "Skin can look fresher and more luminous." },
      { name: "Acne-Prone Skin", note: "Certain peels can support clearer, less congested skin." },
      { name: "Clogged Pores", note: "Pores may look more refined as buildup is reduced." },
      { name: "Surface Fine Lines", note: "Fine surface lines may soften with resurfacing." },
      { name: "Overall Radiance", note: "A healthier-looking, more even complexion." },
    ],
  },

  howItWorks: {
    eyebrow: "Controlled Resurfacing",
    headline: <>How a peel <em>works.</em></>,
    body: [
      "A chemical peel applies a professional solution that gently loosens and removes the outermost, damaged skin cells in a controlled way. As that layer sheds, the skin is prompted to renew, revealing fresher skin underneath.",
      "Peels come in different strengths and formulations, from superficial 'lunchtime' peels with little downtime to deeper medical peels that resurface more and require more recovery. The right one depends entirely on your skin and goal — which is what we determine together.",
      "Results build with time and often with a considered series, rather than from one aggressive treatment. Deeper is not automatically better; the safest effective option for your skin is what we aim for.",
    ],
  },

  comparison: {
    eyebrow: "Peels · Microneedling",
    headline: "Resurfacing vs. remodeling.",
    intro:
      "Chemical peels and microneedling both improve skin quality, but they work through different mechanisms. Neither is better — and for many patients they are complementary. Your assessment decides what fits your skin.",
    items: [
      { name: "Chemical Peel", note: "Removes the outer, damaged layer of skin to refresh tone, texture, and clarity from the surface down." },
      { name: "Microneedling", note: "Creates controlled micro-channels that prompt new collagen — remodeling the skin from within over time." },
      { name: "Sometimes Both", note: "Peels and microneedling can be sequenced within one skin plan to address both surface and structure. We map the order to your skin." },
    ],
    closing: "We recommend the safest effective option for your skin — never the most aggressive one available.",
  },

  whatToExpect: [
    { label: "Preparation", body: "We may adjust your skincare and ask you to avoid sun and certain actives beforehand. Prep matters, especially for deeper peels." },
    { label: "The Treatment", body: "The solution is applied and monitored closely. You may feel warmth or mild tingling; most superficial peels take only about fifteen to thirty minutes." },
    { label: "Recovery", body: "Downtime depends on the peel's depth — from mild flaking over a few days to more noticeable peeling with deeper treatments. We tell you exactly what to expect." },
    { label: "Aftercare & Sun", body: "Gentle aftercare and diligent daily SPF are essential while the skin renews. Results appear as the skin settles, and often build over a series." },
  ],

  treatmentPlanning: {
    eyebrow: "Treatment Planning",
    headline: <>Which peel, and how <em>many?</em></>,
    intro:
      "There is no single 'best' peel — only the one that's right for your skin and goal today. What shapes your plan includes:",
    factors: [
      "Your skin type and tone",
      "The specific concern being treated",
      "Your sensitivity and history",
      "Whether a series will serve you better than a single treatment",
      "How much downtime you can accommodate",
      "Your long-term skin goals",
    ],
    closing: "Whatever the plan, it is chosen for your skin and explained clearly — and pricing is discussed at your assessment, never published as a package.",
  },

  faqs: [
    { q: "What does a chemical peel do?", a: "A chemical peel applies a professional solution that removes the outermost, damaged layer of skin in a controlled way, prompting renewal. Depending on the peel and your skin, it can help refresh tone, texture, clarity, and radiance." },
    { q: "Are all chemical peels the same?", a: "No. Peels range from superficial treatments with little downtime to deeper medical peels that resurface more and require more recovery. Choosing the right type and strength for your skin is exactly what the assessment is for." },
    { q: "Will a peel help with acne or acne scars?", a: "Certain peels can support clearer, less congested skin and may help refine surface texture. Deeper acne scarring is often better addressed with treatments like microneedling, and active acne should be managed first. We'll advise honestly on what fits." },
    { q: "Is there downtime?", a: "It depends on the peel's depth. A superficial peel may cause mild flaking over a few days, while a deeper peel involves more noticeable peeling and recovery. We match the peel to the downtime you can accommodate and tell you what to expect." },
    { q: "Does a peel hurt?", a: "Most patients feel warmth, tingling, or mild stinging during application, which is temporary. Deeper peels are more intense, and we monitor closely throughout." },
    { q: "How many peels will I need?", a: "Many concerns respond best to a considered series rather than one aggressive treatment. The number depends on your skin and goals and is planned at your assessment — never sold as a fixed package." },
    { q: "When will I see results?", a: "Some freshness is visible once the skin settles after peeling, and results often build over a series. Timelines vary by peel type and by patient." },
    { q: "Are peels safe for deeper skin tones?", a: "Some peels can be appropriate across a range of skin tones, but the risk of pigment change makes careful selection especially important for deeper tones. This is a key reason we assess your pigmentation history before recommending anything." },
    { q: "Can I wear makeup afterward?", a: "This depends on the peel. For lighter peels, makeup is often fine within a day; deeper peels require more recovery before makeup. We provide specific guidance for your treatment." },
    { q: "Why is sun protection so important after a peel?", a: "Freshly resurfaced skin is more vulnerable to the sun, and sun exposure can undo results or cause pigment change. Diligent daily SPF is essential during recovery and beyond." },
    { q: "Can a peel be combined with other treatments?", a: "Yes. Peels are often one part of a broader skin plan alongside microneedling or medical-grade skincare, sequenced thoughtfully during your assessment." },
    { q: "Who performs peels at AVEN MED?", a: "Every treatment is performed by Alaa Mashal, MSN, APRN, FNP-BC — the founder of AVEN MED — after an assessment of your skin and history." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>The right peel for your <em>skin.</em></>,
    copy: "Begin with an AVEN Assessment to receive a peel recommendation based on your skin type, concerns, and long-term goals.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default chemicalPeels;
