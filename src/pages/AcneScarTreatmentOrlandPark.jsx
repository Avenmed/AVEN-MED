/* AVEN MED — Acne Scar Treatment in Orland Park. Data module for the content registry. */
import React from 'react';

const acneScarTreatment = {
  slug: "acne-scar-treatment-orland-park",
  priority: 0.9,
  seo: {
    title: "Acne Scar Treatment in Orland Park, IL — Texture & Scars | AVEN MED",
    description: "Acne scar treatment in Orland Park, IL at AVEN MED — a planned, realistic approach to softening acne-scar texture with treatments like microneedling. Led by Alaa Mashal, MSN, APRN, FNP-BC. Every plan begins with the AVEN Assessment.",
  },
  tags: ["skin", "acne-scars", "texture", "collagen"],
  treatmentName: "Acne Scar Treatment",
  treatmentShort: "Acne Scar Treatment",
  breadcrumbName: "Acne Scar Treatment in Orland Park",
  procedureName: "Acne Scar Treatment — Texture & Scar Improvement",
  procedureDescription:
    "Acne scar treatment in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC — a planned, individualized approach using treatments such as microneedling to soften acne-scar texture over a series.",

  hero: {
    eyebrow: "Skin · Texture",
    headline: <>Acne Scar Treatment in <em>Orland Park.</em></>,
    subheadline:
      "A planned approach to softening the texture acne leaves behind — gradual, realistic, and tailored to your scars.",
  },

  whyAven: {
    headline: <>Scars respond to a plan, not a <em>promise.</em></>,
    intro:
      "Acne scars vary — in type, depth, and how they'll respond — so honest, individualized planning matters more than any single device. Every plan begins with the AVEN Assessment. Before we recommend treatment, we consider:",
    considers: [
      "Your scar type and depth",
      "Your skin type and tone",
      "Pigmentation history",
      "Whether acne is still active",
      "Treatments you've already tried",
      "Sensitivity and reactivity",
      "Relevant medical history",
      "Your goals and expectations",
    ],
    body:
      "From there we build a realistic plan — usually a series, sometimes combining treatments — aimed at meaningful improvement in texture. We're clear about what's achievable, because managing expectations is part of doing this well.",
    practitionerLine:
      "Your care is led by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner — from assessment through your series.",
  },

  treats: {
    intro:
      "Different acne scars respond differently, and part of the plan is matching the treatment to the scar. Depending on your skin, treatment may help soften:",
    items: [
      { name: "Rolling Scars", note: "Broad, wave-like depressions may improve as collagen rebuilds." },
      { name: "Boxcar Scars", note: "Sharper-edged depressions can soften with a considered series." },
      { name: "General Uneven Texture", note: "The overall roughness left by past acne may smooth over time." },
      { name: "Shallow Atrophic Scars", note: "Superficial depressed scars often respond best." },
      { name: "Post-Acne Marks", note: "Flat red or brown marks are usually color, not true scars, and often fade — we'll distinguish them for you." },
      { name: "Skin Smoothness", note: "A smoother-looking, more even surface as the plan progresses." },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: <>Remodeling texture over <em>time.</em></>,
    body: [
      "Most acne scarring is 'atrophic' — small depressions where the skin healed with less support beneath it. Treatments like microneedling work by prompting the skin to build new collagen in those areas, gradually filling and softening the texture from within.",
      "This is remodeling, not erasing. Improvement is gradual and cumulative, which is why acne scar treatment is almost always planned as a series spaced several weeks apart, sometimes combining modalities such as microneedling and peels.",
      "Realistic expectations are central to how we practice. The goal is meaningful softening and smoother-looking skin — not a promise of perfectly scar-free skin, which no treatment can guarantee.",
    ],
  },

  comparison: {
    eyebrow: "Scars · Marks · Active Acne",
    headline: "Know what you're actually treating.",
    intro:
      "'Acne scars' is often used loosely. Telling true scars apart from marks and active acne is the first step, because each is treated differently — and in a different order.",
    items: [
      { name: "True Scars", note: "Changes in texture (depressions) from how the skin healed. These are what scar treatment targets." },
      { name: "Post-Acne Marks", note: "Flat red or brown discoloration that is color, not texture. Often fades on its own or with pigment-focused care." },
      { name: "Active Acne", note: "Current breakouts should be controlled first — treating scars while acne is active is rarely the right move." },
    ],
    closing: "Part of your assessment is identifying exactly what you have, so the plan targets the right thing.",
  },

  whatToExpect: [
    { label: "Assessment", body: "We identify your scar type and depth, confirm your acne is controlled, and set realistic goals before recommending anything." },
    { label: "A Series", body: "Scar treatment is planned as a series — often several sessions spaced weeks apart — sometimes combining modalities for the best result." },
    { label: "Recovery", body: "Downtime depends on the treatment used; microneedling, for example, typically means a day or two of redness. We tell you what to expect each time." },
    { label: "The Timeline", body: "Improvement is gradual as new collagen forms over the weeks and months of your series. Results vary from patient to patient." },
  ],

  faqs: [
    { q: "Can acne scars be completely removed?", a: "Honestly, no treatment can guarantee complete removal of acne scars. Our goal is meaningful softening and smoother-looking texture through a considered plan. We're upfront about what's realistically achievable for your specific scars." },
    { q: "What treatments help acne scars?", a: "Atrophic (depressed) acne scars often respond to collagen-remodeling treatments such as microneedling, sometimes combined with peels. The right approach depends on your scar type, skin, and history, which we determine at your assessment." },
    { q: "How many treatments will I need?", a: "Acne scar treatment is almost always a series — often several sessions spaced weeks apart — because improvement is gradual and cumulative. The exact number is planned individually, never sold as a fixed package." },
    { q: "Should I treat my active acne first?", a: "Yes, in nearly all cases. Treating scars while acne is still active rarely makes sense. We typically get your acne under control first, then plan scar treatment — the right sequence protects your results." },
    { q: "What's the difference between acne scars and dark marks?", a: "True scars are changes in texture (depressions), while post-acne marks are flat red or brown discoloration — color, not texture. Marks often fade over time; scars need dedicated treatment. Distinguishing them is part of your assessment." },
    { q: "How long until I see results?", a: "Because scar treatment works by rebuilding collagen, improvement develops gradually over the weeks and months of your series. It is a steady, cumulative process rather than an overnight change." },
    { q: "Is there downtime?", a: "It depends on the treatment. Microneedling, for instance, usually means a day or two of redness similar to a mild sunburn. We match the plan to the recovery you can accommodate and explain it in advance." },
    { q: "Are acne scar treatments safe for deeper skin tones?", a: "Many are, but the risk of pigment change makes careful treatment selection and technique especially important for deeper tones. Your pigmentation history is a key part of what we assess before recommending anything." },
    { q: "Can acne scar treatment be combined with other treatments?", a: "Yes. Modalities such as microneedling and peels are sometimes combined within a scar plan, and skincare supports the results. We sequence everything thoughtfully during your assessment." },
    { q: "Will my results last?", a: "Improvements from rebuilt collagen can be lasting, though skin continues to age and change. We'll discuss any maintenance that makes sense for you as part of the plan." },
    { q: "Why is an assessment required first?", a: "Because acne scars vary so much. An assessment lets us identify your scar type, confirm your acne is controlled, and set realistic goals so we can plan safely and effectively." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Softer texture, realistic <em>expectations.</em></>,
    copy: "Begin with an AVEN Assessment to receive a realistic, individualized acne scar plan based on your scar type and goals.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default acneScarTreatment;
