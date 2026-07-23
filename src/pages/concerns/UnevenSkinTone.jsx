/* AVEN MED — Patient Concern: Uneven Skin Tone. Registry data module. */
import React from 'react';

const unevenSkinTone = {
  slug: "concerns/uneven-skin-tone",
  priority: 0.8,
  changefreq: "monthly",
  seo: {
    title: "Uneven Skin Tone in Orland Park, IL — Causes & Options | AVEN MED",
    description: "Understand uneven skin tone — redness, discoloration, and pigmentation — and the individualized treatment options at AVEN MED in Orland Park, IL. Every plan begins with the AVEN Assessment.",
  },
  tags: ["tone", "pigment", "sun"],
  concernName: "Uneven Skin Tone",
  concernShort: "Uneven skin tone",
  breadcrumbName: "Uneven Skin Tone",
  conditionName: "Uneven Skin Tone and Pigmentation",

  hero: {
    eyebrow: "Patient Concerns · Skin Quality",
    headline: <>Uneven Skin <em>Tone.</em></>,
    subheadline:
      "Discoloration, redness, and patchiness can have several very different causes — and knowing which is yours is what separates a plan that works from one that doesn't.",
  },

  causes: {
    headline: <>Where uneven tone comes <em>from.</em></>,
    intro:
      "'Uneven tone' is an umbrella for a few distinct issues, each with its own mechanism. Identifying the type is essential, because the treatments differ:",
    items: [
      { name: "Sun-Related Pigment", note: "UV exposure triggers excess melanin — sunspots and general mottling accumulate over years." },
      { name: "Post-Inflammatory Pigment", note: "Dark marks left behind after acne, irritation, or injury, especially in deeper skin tones." },
      { name: "Melasma", note: "Hormonally influenced patches, often on the cheeks or forehead, that can be stubborn and sun-sensitive." },
      { name: "Redness & Vascular Tone", note: "Persistent redness or flushing from surface vessels or reactive skin." },
      { name: "Uneven Texture", note: "Rough or dull texture that scatters light and reads as uneven color." },
      { name: "Barrier Disruption", note: "A compromised skin barrier can leave tone blotchy and reactive." },
    ],
  },

  signs: {
    headline: <>What patients often <em>notice.</em></>,
    intro:
      "Uneven tone shows up in different ways depending on its cause. People commonly describe:",
    items: [
      { name: "Dark Spots", note: "Discrete brown spots or freckling from sun exposure." },
      { name: "Patchy Discoloration", note: "Larger areas of uneven brown or grey-brown color." },
      { name: "Lingering Marks", note: "Spots that remain after a blemish has healed." },
      { name: "Persistent Redness", note: "Diffuse redness across the cheeks, nose, or chin." },
      { name: "Dullness", note: "An overall tired, flat, or 'muddy' complexion." },
      { name: "Makeup Dependence", note: "Feeling you need coverage to even things out." },
    ],
  },

  riskFactors: {
    intro: "Several factors raise the likelihood of tone changes or make them harder to resolve:",
    items: [
      "Significant sun exposure or tanning history",
      "Deeper skin tones (higher risk of post-inflammatory pigment)",
      "Hormonal influences, including pregnancy and some medications",
      "A history of acne or skin irritation",
      "Aggressive or unsuitable skincare and treatments",
      "Rosacea-prone or reactive skin",
    ],
  },

  whenToSeek: {
    intro: "Professional evaluation is especially useful for pigment, because the wrong treatment can worsen it. Consider an assessment when:",
    items: [
      "Discoloration is spreading or deepening",
      "Marks from acne or irritation aren't fading",
      "You suspect melasma, which needs careful handling",
      "Products have made things worse rather than better",
      "You want to treat pigment safely for your skin tone",
    ],
    note: "Any new, changing, or unusual spot should be evaluated by a physician to rule out medical concerns — this page is educational, not a diagnosis.",
  },

  assessment: {
    headline: <>Identify the pigment, then <em>treat it.</em></>,
    intro:
      "Sun spots, melasma, and post-inflammatory marks can look similar but respond very differently — and some treatments that help one can aggravate another. The AVEN Assessment identifies what type of unevenness you have and how your skin is likely to respond.",
    identifies: [
      { name: "Type of Discoloration", note: "Whether it's sun-related, post-inflammatory, melasma, or vascular." },
      { name: "Depth of Pigment", note: "Surface versus deeper pigment, which changes what's realistic." },
      { name: "Your Skin Tone", note: "Your risk of pigment change, which guides safe treatment selection." },
      { name: "Contributing Triggers", note: "Sun, hormones, or irritation that must be managed alongside treatment." },
    ],
  },

  treatmentOptions: {
    headline: <>A careful, layered <em>approach.</em></>,
    intro:
      "Tone usually improves through a combination of professional treatment, daily skincare, and diligent sun protection — approached gently, because pigment can rebound if pushed too hard. Options may include:",
    items: [
      { name: "Chemical Peels", path: "/chemical-peels-orland-park", note: "Resurfacing that can help lift surface pigment and even tone." },
      { name: "SkinPen Microneedling", path: "/skinpen-microneedling-orland-park", note: "Supports tone and texture; used carefully in pigment-prone skin." },
      { name: "Medical-Grade Skincare", path: "/medical-grade-skincare-orland-park", note: "Targeted actives and daily SPF — the backbone of any pigment plan." },
      { name: "Skin Rejuvenation", path: "/skin-rejuvenation-orland-park", note: "A sequenced plan for overall clarity and evenness over time." },
      { name: "Facials", path: "/facials-orland-park", note: "Supportive maintenance for brighter, healthier-looking skin." },
    ],
    closing: "Pigment rewards patience and the right sequence far more than aggressive treatment. Your safe, individualized plan is built at the AVEN Assessment.",
  },

  lifestyle: {
    intro: "With tone more than almost any concern, daily habits determine the outcome:",
    items: [
      "Daily broad-spectrum SPF, reapplied outdoors",
      "Sun avoidance and protective hats",
      "Gentle, barrier-supporting skincare",
      "Not picking at blemishes or marks",
      "Managing known triggers where possible",
      "Patience — pigment fades gradually",
    ],
    note: "Without consistent sun protection, even the best pigment treatment tends to return.",
  },

  faqs: [
    { q: "Why is my skin tone uneven?", a: "It could be sun-related pigment, marks left after acne or irritation, melasma, persistent redness, or uneven texture — often more than one at once. Because each behaves differently, identifying the type is the first and most important step." },
    { q: "Can uneven tone be fully cleared?", a: "Many people see meaningful improvement, but we don't promise complete or permanent clearing — pigment in particular can be stubborn and can recur, especially with sun exposure. We're honest about what's realistic for your skin." },
    { q: "What is melasma, and is it different?", a: "Melasma is a hormonally influenced, sun-sensitive form of pigmentation that tends to be persistent and can worsen with aggressive treatment. It needs a especially careful, individualized approach, which is why assessment matters." },
    { q: "Will treatment make my pigmentation worse?", a: "It can, if the wrong treatment or too-aggressive a setting is used — particularly in deeper skin tones or with melasma. Careful selection based on your skin type is exactly what protects against that." },
    { q: "How important is sunscreen, really?", a: "For uneven tone, it's essential. Sun exposure drives and re-triggers most pigmentation, so daily broad-spectrum SPF is non-negotiable if you want results to last." },
    { q: "Do dark marks from acne count as scars?", a: "Usually not — flat brown or red marks left after a blemish are discoloration, not true (textured) scars, and often fade with pigment-focused care. Distinguishing the two is part of your assessment." },
    { q: "Is redness treated the same as brown discoloration?", a: "No. Redness is often vascular or inflammatory, while brown discoloration is pigment. They call for different strategies, so we identify which you have before recommending anything." },
    { q: "Why do I need an assessment first?", a: "Because treating pigment incorrectly can worsen it. An assessment identifies your type of unevenness and your skin's likely response, so we can plan safely and effectively rather than guessing." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Clearer, more even — <em>safely.</em></>,
    copy: "Begin with an AVEN Assessment to identify what's behind your uneven tone and a plan that's safe for your skin.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default unevenSkinTone;
