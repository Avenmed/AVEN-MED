/* AVEN MED — Patient Concern: Large Pores. Registry data module. */
import React from 'react';

const largePores = {
  slug: "concerns/large-pores",
  priority: 0.8,
  changefreq: "monthly",
  seo: {
    title: "Large Pores — Causes & Treatment Options | AVEN MED",
    description: "Pores do not open and close, but they can look larger. What actually drives it, and the skin-quality treatments AVEN MED in Orland Park considers.",
  },
  tags: ["pores", "texture", "skin-quality", "oil"],
  concernName: "Large Pores",
  concernShort: "Large pores",
  breadcrumbName: "Large Pores",
  conditionName: "Enlarged Facial Pores",
  hub: { group: "Tone, Texture & Clarity", order: 70, blurb: "Why pores look larger, and what genuinely refines them." },

  hero: {
    eyebrow: "Patient Concerns · Skin Quality",
    headline: <>Large <em>Pores.</em></>,
    subheadline:
      "Pores can't be 'shrunk' on demand — but they can genuinely be refined. Understanding why yours look larger is what makes real, lasting improvement possible.",
  },

  causes: {
    headline: <>Why pores look <em>larger.</em></>,
    intro:
      "Pore size is partly fixed by genetics, but how prominent pores appear is influenced by several changeable factors:",
    items: [
      { name: "Excess Oil", note: "Higher oil production stretches pores and makes them more visible." },
      { name: "Congestion", note: "Pores clogged with oil and debris look wider and more obvious." },
      { name: "Loss of Firmness", note: "As collagen declines, pores lose their support and appear to sag open." },
      { name: "Sun Damage", note: "UV breaks down the collagen that keeps pores tight, enlarging their look." },
      { name: "Rough Texture", note: "Uneven surrounding texture accentuates how pores read." },
      { name: "Genetics & Skin Type", note: "Naturally oilier and thicker skin tends toward more visible pores." },
    ],
  },

  signs: {
    headline: <>What patients often <em>notice.</em></>,
    intro:
      "Pore concerns usually center on the central face, where oil glands are densest. People commonly describe:",
    items: [
      { name: "Visible Pores", note: "Prominent pores across the nose, cheeks, and forehead." },
      { name: "Shiny T-Zone", note: "Oiliness and shine through the central face." },
      { name: "Blackheads", note: "Dark, congested pores, especially around the nose." },
      { name: "Uneven Surface", note: "An 'orange-peel' or rough-looking texture up close." },
      { name: "Makeup That Emphasizes", note: "Foundation settling into and highlighting pores." },
      { name: "Loss of Smoothness", note: "Skin that no longer looks as refined as it once did." },
    ],
  },

  riskFactors: {
    intro: "Some factors make pores more prominent or harder to refine:",
    items: [
      "Naturally oily or thick skin",
      "Genetics and family skin type",
      "Cumulative sun exposure",
      "A history of acne or congestion",
      "Aging and collagen loss",
      "Inconsistent cleansing or heavy, pore-clogging products",
    ],
  },

  whenToSeek: {
    intro: "An evaluation is helpful when pores are a persistent concern:",
    items: [
      "Pores look increasingly prominent over time",
      "Oiliness and congestion aren't controlled by your routine",
      "You've tried 'pore-shrinking' products without results",
      "You want realistic expectations and a genuine plan",
      "Pores appear alongside texture or acne concerns",
    ],
    note: "Be wary of products promising to 'close' pores permanently — refinement is real, elimination is not.",
  },

  assessment: {
    headline: <>Refine, with honest <em>expectations.</em></>,
    intro:
      "Because pore size is partly genetic, the goal is realistic refinement — reducing oil, clearing congestion, and rebuilding the collagen that supports pores. The AVEN Assessment identifies which of these is driving your pores' appearance.",
    identifies: [
      { name: "Oil & Congestion", note: "How much oil production and clogging are contributing." },
      { name: "Skin Firmness", note: "Whether collagen loss is letting pores appear to sag open." },
      { name: "Sun & Texture", note: "The role of sun damage and surrounding texture." },
      { name: "Realistic Goals", note: "What refinement is genuinely achievable for your skin type." },
    ],
  },

  treatmentOptions: {
    headline: <>Cleaner, tighter, <em>smoother.</em></>,
    intro:
      "Pore appearance improves by controlling oil, clearing congestion, and supporting collagen — usually through a combination. Depending on your assessment, options may include:",
    items: [
      { name: "SkinPen Microneedling", path: "/skinpen-microneedling-orland-park", note: "Builds collagen to help support and refine the look of pores." },
      { name: "Chemical Peels", path: "/chemical-peels-orland-park", note: "Clears congestion and renews the surface for a smoother look." },
      { name: "Medical-Grade Skincare", path: "/medical-grade-skincare-orland-park", note: "Targeted actives to manage oil and keep pores clear daily." },
      { name: "Facials", path: "/facials-orland-park", note: "Deep cleansing and extractions to reduce visible congestion." },
      { name: "Skin Rejuvenation", path: "/skin-rejuvenation-orland-park", note: "A sequenced plan for firmer, smoother, more refined skin." },
    ],
    closing: "No treatment permanently shrinks pores, but the right combination genuinely refines them. Your plan is built at the AVEN Assessment.",
  },

  lifestyle: {
    intro: "Daily habits do a lot to keep pores clear and refined:",
    items: [
      "Consistent, gentle cleansing — especially in the evening",
      "Non-comedogenic (non-pore-clogging) products",
      "Daily sun protection to preserve collagen",
      "A suitable active such as a retinoid or salicylic acid",
      "Not squeezing or picking at pores",
      "Regular, appropriate exfoliation",
    ],
    note: "Managing oil and congestion consistently does more for pores than any single treatment.",
  },

  faqs: [
    { q: "Can large pores be permanently shrunk?", a: "No — and any product claiming to permanently close pores is overpromising. Pore size is partly genetic. What we can do is genuinely refine their appearance by managing oil, clearing congestion, and supporting collagen." },
    { q: "Why do my pores look bigger than they used to?", a: "Often it's a combination of collagen loss letting pores 'sag' open, sun damage, and ongoing oil and congestion. Aging and cumulative UV exposure are common reasons pores become more prominent over time." },
    { q: "What actually helps large pores?", a: "Controlling oil, keeping pores clear, and rebuilding supportive collagen — usually through a combination of skincare, resurfacing, and collagen-building treatments. The right mix depends on what's driving yours." },
    { q: "Do pore-minimizing products work?", a: "Some ingredients genuinely help by managing oil and turnover, but no cream closes pores. Products are an important part of the plan, not a standalone miracle — we'll help you use effective ones." },
    { q: "Are blackheads the same as large pores?", a: "They're related. Blackheads are congested pores, and clearing them makes pores look smaller, but firmness and oil also matter. We address the full picture rather than just extractions." },
    { q: "Will microneedling help my pores?", a: "It can, by building collagen that supports pore structure and smooths surrounding texture, often over a series. Whether it's right for you depends on your skin, which the assessment determines." },
    { q: "How long until I see a difference?", a: "Pore refinement is gradual — congestion can improve fairly quickly, while collagen-based improvement builds over weeks to months. Consistency with daily care is what sustains it." },
    { q: "Why start with an assessment?", a: "Because pores look large for different reasons — oil, firmness, sun damage — and the plan should match yours. An assessment lets us set realistic goals and target the actual cause." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Genuinely refined, not <em>overpromised.</em></>,
    copy: "Begin with an AVEN Assessment for an honest read on your pores and a realistic plan to refine them.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default largePores;
