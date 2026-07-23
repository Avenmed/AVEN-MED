/* AVEN MED — Patient Concern: Acne Scars. Registry data module. */
import React from 'react';

const acneScars = {
  slug: "concerns/acne-scars",
  priority: 0.8,
  changefreq: "monthly",
  seo: {
    title: "Acne Scars in Orland Park, IL — Causes & Treatment Options | AVEN MED",
    description: "Understand acne scars — how they form, the different types, and the individualized treatment options at AVEN MED in Orland Park, IL. Every plan begins with the AVEN Assessment.",
  },
  tags: ["acne", "scars", "texture"],
  concernName: "Acne Scars",
  concernShort: "Acne scars",
  breadcrumbName: "Acne Scars",
  conditionName: "Acne Scarring",

  hero: {
    eyebrow: "Patient Concerns · Texture",
    headline: <>Acne <em>Scars.</em></>,
    subheadline:
      "The texture acne can leave behind is real and often treatable — but it's frequently confused with marks that fade on their own. Knowing which you have is where an honest plan begins.",
  },

  causes: {
    headline: <>How scars <em>form.</em></>,
    intro:
      "True acne scars are changes in the skin's texture, created when a breakout disrupts the deeper layers and the skin heals imperfectly. Several factors shape them:",
    items: [
      { name: "Inflammatory Damage", note: "Deeper, inflamed breakouts injure the tissue beneath the surface." },
      { name: "Disrupted Healing", note: "The skin heals with too little or too much collagen, leaving a depression or raised area." },
      { name: "Picking & Squeezing", note: "Manipulating breakouts increases inflammation and scarring risk." },
      { name: "Delayed Treatment", note: "Acne left uncontrolled for long periods is more likely to scar." },
      { name: "Genetic Tendency", note: "Some people are simply more prone to scarring." },
      { name: "Depth of Acne", note: "Nodular and cystic acne carries the highest scarring risk." },
    ],
  },

  signs: {
    headline: <>The types of <em>scarring.</em></>,
    intro:
      "Acne scars aren't all the same, and the type guides treatment. The main categories are:",
    items: [
      { name: "Rolling Scars", note: "Broad, wave-like depressions that give an uneven surface." },
      { name: "Boxcar Scars", note: "Sharper-edged, box-like depressions." },
      { name: "Ice-Pick Scars", note: "Small, deep, narrow pits — often the most stubborn." },
      { name: "Raised Scars", note: "Firm, raised scars, more common on the chest, back, or jaw." },
      { name: "General Uneven Texture", note: "Overall roughness from multiple shallow scars." },
      { name: "Post-Acne Marks", note: "Flat red or brown discoloration — color, not true scarring." },
    ],
  },

  riskFactors: {
    intro: "Some factors make acne scarring more likely:",
    items: [
      "A history of deep, cystic, or nodular acne",
      "Picking, squeezing, or aggressive extractions",
      "Acne left untreated for a long time",
      "A genetic tendency to scar",
      "Delayed control of inflammation",
      "Deeper skin tones (higher risk of accompanying pigment)",
    ],
  },

  whenToSeek: {
    intro: "An evaluation helps set realistic expectations and the right sequence. Consider it when:",
    items: [
      "You have texture changes left after acne has healed",
      "You're unsure whether you have scars or marks",
      "Your acne is controlled and you're ready to address scarring",
      "You've been told scars 'can't be helped' and want a second opinion",
      "You want an honest sense of what's achievable",
    ],
    note: "Active acne is treated first — addressing scars while breakouts continue rarely makes sense.",
  },

  assessment: {
    headline: <>Scars respond to a plan, not a <em>promise.</em></>,
    intro:
      "Acne scars vary in type and depth, and they respond differently — so honest, individualized planning matters more than any single device. The AVEN Assessment identifies your scar type and confirms your acne is controlled before recommending treatment.",
    identifies: [
      { name: "Scars vs. Marks", note: "Whether you have true textured scars, flat discoloration, or both." },
      { name: "Scar Type & Depth", note: "Rolling, boxcar, ice-pick, or raised — each responds differently." },
      { name: "Acne Status", note: "Whether active acne needs controlling first." },
      { name: "Realistic Outcome", note: "What meaningful improvement looks like for your specific scars." },
    ],
  },

  treatmentOptions: {
    headline: <>Softening texture over <em>time.</em></>,
    intro:
      "Most acne scarring improves gradually as collagen is rebuilt, usually over a planned series and sometimes combining treatments. Depending on your assessment, options may include:",
    items: [
      { name: "Acne Scar Treatment", path: "/acne-scar-treatment-orland-park", note: "A planned, individualized approach to softening scar texture." },
      { name: "SkinPen Microneedling", path: "/skinpen-microneedling-orland-park", note: "Collagen induction that helps remodel depressed scars over a series." },
      { name: "Chemical Peels", path: "/chemical-peels-orland-park", note: "Resurfacing that can support texture and tone alongside scar work." },
      { name: "Skin Rejuvenation", path: "/skin-rejuvenation-orland-park", note: "A sequenced, longer-term plan for overall skin quality." },
      { name: "Acne Treatment", path: "/acne-treatment-orland-park", note: "Controlling active acne first — the essential first step." },
    ],
    closing: "No treatment guarantees perfectly scar-free skin. The goal is meaningful softening, planned realistically at your AVEN Assessment.",
  },

  lifestyle: {
    intro: "Supporting your skin protects both your results and against new scarring:",
    items: [
      "Never picking or squeezing breakouts",
      "Keeping active acne well controlled",
      "Diligent daily sun protection (sun worsens scars and marks)",
      "Consistent, barrier-supporting skincare",
      "Patience through a gradual, collagen-based process",
    ],
    note: "The best scar prevention is calm, well-controlled acne and hands-off healing.",
  },

  faqs: [
    { q: "Can acne scars be completely removed?", a: "Honestly, no treatment can guarantee complete removal. Our goal is meaningful softening and smoother-looking texture through a considered plan. We're upfront about what's realistically achievable for your specific scars." },
    { q: "What's the difference between scars and dark marks?", a: "True scars are changes in texture — depressions or raised areas — while post-acne marks are flat red or brown discoloration, which is color, not texture. Marks often fade over time; scars need dedicated treatment. Distinguishing them is part of your assessment." },
    { q: "Should I treat my active acne first?", a: "Yes, in nearly all cases. Treating scars while acne is still active rarely makes sense. We typically get your acne under control first, then plan scar treatment — the right order protects your results." },
    { q: "What treatments help acne scars?", a: "Depressed (atrophic) scars often respond to collagen-remodeling treatments such as microneedling, sometimes combined with peels. The right approach depends on your scar type and skin, determined at your assessment." },
    { q: "How many treatments will I need?", a: "Scar treatment is almost always a series — often several sessions spaced weeks apart — because improvement is gradual and cumulative. The exact number is planned individually, never sold as a fixed package." },
    { q: "How long until I see improvement?", a: "Because scar treatment works by rebuilding collagen, improvement develops gradually over weeks and months. It's a steady, cumulative process rather than an overnight change, and results vary by person." },
    { q: "Are all acne scars treatable the same way?", a: "No. Rolling, boxcar, ice-pick, and raised scars each behave differently, and some are more stubborn than others. Matching the treatment to the scar type is exactly why assessment matters." },
    { q: "Can scars be prevented?", a: "Not entirely, but the risk drops significantly when acne is controlled early, inflammation is calmed, and breakouts aren't picked. Prompt, proper acne care is the best scar prevention." },
    { q: "Why start with an assessment?", a: "Because scars vary so much and are easily confused with marks. An assessment identifies your scar type, confirms your acne is controlled, and sets realistic goals so we plan safely and effectively." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Softer texture, realistic <em>expectations.</em></>,
    copy: "Begin with an AVEN Assessment to identify your scar type and receive a realistic, individualized plan.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default acneScars;
