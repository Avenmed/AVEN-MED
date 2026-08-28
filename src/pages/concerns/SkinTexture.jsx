/* AVEN MED — Patient Concern: Skin Texture. Registry data module. */
import React from 'react';

const skinTexture = {
  slug: "concerns/skin-texture",
  priority: 0.8,
  changefreq: "monthly",
  seo: {
    title: "Skin Texture — Causes & Treatment Options | AVEN MED",
    description: "Rough, uneven or dull texture has more than one cause. How AVEN MED in Orland Park works out which one you have before choosing a treatment.",
  },
  tags: ["texture", "pores", "skin-quality"],
  concernName: "Skin Texture",
  concernShort: "Skin texture",
  breadcrumbName: "Skin Texture",
  conditionName: "Uneven Skin Texture",
  hub: { group: "Tone, Texture & Clarity", order: 60, blurb: "Rough, dull, or uneven surface texture — and what's beneath it." },

  hero: {
    eyebrow: "Patient Concerns · Skin Quality",
    headline: <>Skin <em>Texture.</em></>,
    subheadline:
      "Rough, bumpy, or dull skin that doesn't catch the light the way it used to. Texture has several causes — and it's one of the most rewarding concerns to address well.",
  },

  causes: {
    headline: <>What makes texture <em>uneven.</em></>,
    intro:
      "Smooth skin reflects light evenly; rough or uneven skin scatters it, reading as dull or bumpy. Several things drive that change:",
    items: [
      { name: "Slowed Cell Turnover", note: "As we age, dead cells shed more slowly and build up, dulling the surface." },
      { name: "Sun Damage", note: "UV exposure roughens and thickens the skin's surface over time." },
      { name: "Congestion", note: "Clogged pores and buildup create a bumpy, uneven feel." },
      { name: "Acne History", note: "Past breakouts can leave residual roughness and superficial scarring." },
      { name: "Dehydration & Barrier", note: "A dry or compromised barrier looks flat, flaky, and rough." },
      { name: "Collagen Change", note: "Declining collagen affects surface smoothness and resilience." },
    ],
  },

  signs: {
    headline: <>What patients often <em>notice.</em></>,
    intro:
      "Texture concerns are often described as skin that looks tired or feels 'not smooth' despite a good routine. Common signs include:",
    items: [
      { name: "Roughness", note: "Skin that feels rough or grainy to the touch." },
      { name: "Dullness", note: "A flat, lackluster complexion that lacks glow." },
      { name: "Small Bumps", note: "Congestion, tiny bumps, or an uneven surface." },
      { name: "Enlarged-Looking Pores", note: "Pores that appear more prominent within rough texture." },
      { name: "Uneven Makeup", note: "Foundation that clings, cakes, or sits unevenly." },
      { name: "Superficial Scarring", note: "Faint residual texture from past breakouts." },
    ],
  },

  riskFactors: {
    intro: "Some factors make texture concerns more likely or more pronounced:",
    items: [
      "Cumulative sun exposure",
      "Aging and slowing cell turnover",
      "A history of acne or congestion",
      "Dehydrated or barrier-compromised skin",
      "Inconsistent exfoliation or skincare",
      "Smoking and poor sleep",
    ],
  },

  whenToSeek: {
    intro: "Texture is rarely urgent, but an evaluation helps when:",
    items: [
      "Skincare alone hasn't smoothed things out",
      "You're unsure if texture is congestion, sun damage, or scarring",
      "Makeup no longer sits the way you'd like",
      "You want a plan for lasting smoothness rather than a quick scrub",
      "You'd like honest guidance before investing in treatments",
    ],
    note: "Over-exfoliating in pursuit of smoothness often backfires — professional guidance protects your barrier.",
  },

  assessment: {
    headline: <>Smooth skin starts with the <em>cause.</em></>,
    intro:
      "Rough texture from sun damage, from congestion, and from old acne all look similar but respond to different treatments. The AVEN Assessment identifies what's driving your texture so the plan improves it without over-stripping your skin.",
    identifies: [
      { name: "Source of Roughness", note: "Whether it's buildup, sun damage, scarring, or barrier issues." },
      { name: "Skin Barrier Health", note: "How resilient your skin is and how much it can tolerate." },
      { name: "Pore & Congestion Level", note: "The degree of clogging contributing to the surface feel." },
      { name: "Your Goals", note: "Everyday glow versus deeper resurfacing over a series." },
    ],
  },

  treatmentOptions: {
    headline: <>Renew the surface, support the <em>skin.</em></>,
    intro:
      "Texture responds well to a combination of professional resurfacing and consistent daily care. Depending on your assessment, options may include:",
    items: [
      { name: "SkinPen Microneedling", path: "/skinpen-microneedling-orland-park", note: "Collagen induction that smooths texture from within over a series." },
      { name: "Chemical Peels", path: "/chemical-peels-orland-park", note: "Controlled resurfacing to renew a rough or dull surface." },
      { name: "Skin Rejuvenation", path: "/skin-rejuvenation-orland-park", note: "A sequenced plan combining treatments for overall skin quality." },
      { name: "Facials", path: "/facials-orland-park", note: "Regular deep-cleansing and exfoliation to maintain smoothness." },
      { name: "Medical-Grade Skincare", path: "/medical-grade-skincare-orland-park", note: "Daily actives that keep cell turnover healthy between treatments." },
    ],
    closing: "The right mix depends on what's causing your texture and how your skin tolerates treatment — decided together at your AVEN Assessment.",
  },

  lifestyle: {
    intro: "Smooth skin is maintained daily, not just in-office:",
    items: [
      "Consistent, appropriate exfoliation — not over-exfoliation",
      "Daily sun protection",
      "Barrier-supporting hydration",
      "A proven active such as a retinoid, when suitable",
      "Not picking at bumps or congestion",
      "Adequate water and sleep",
    ],
    note: "More scrubbing isn't better — a healthy barrier is what keeps skin smooth.",
  },

  faqs: [
    { q: "What causes rough or uneven skin texture?", a: "Usually a mix — slowed cell turnover, sun damage, congestion, past acne, or a dehydrated barrier. Because the causes differ, the first step is identifying which apply to your skin rather than reaching for a single fix." },
    { q: "Can texture actually be improved?", a: "Yes — texture is one of the more rewarding concerns to treat. With the right combination of resurfacing and daily care, most people see genuinely smoother, brighter skin, though results build gradually and vary by person." },
    { q: "Isn't exfoliating more the answer?", a: "Not usually. Over-exfoliating damages the barrier and can make texture, redness, and sensitivity worse. Effective texture care is about the right treatments and consistency, not aggression — which is why guidance helps." },
    { q: "How is texture different from large pores?", a: "They overlap — rough texture can make pores look more prominent — but pores are their own concern with their own drivers. We assess both and address whichever is contributing to how your skin looks and feels." },
    { q: "Will one treatment smooth my skin?", a: "Occasionally a single treatment helps, but lasting smoothness usually comes from a short series plus daily skincare. We plan realistically rather than promising one-and-done results." },
    { q: "Is there downtime?", a: "It depends on the treatment. Some resurfacing has little to no downtime; deeper work may involve a few days of flaking or redness. We match the plan to the recovery you can accommodate." },
    { q: "Can old acne texture be smoothed?", a: "Superficial post-acne texture often improves with resurfacing and collagen-building treatments. Deeper, true acne scars are their own concern with a dedicated approach, which we'll distinguish for you." },
    { q: "Why start with an assessment?", a: "Because the cause of your texture determines the treatment — and the wrong, too-aggressive approach can harm your skin. An assessment lets us plan effectively while protecting your barrier." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Smoother skin, done <em>properly.</em></>,
    copy: "Begin with an AVEN Assessment to find what's driving your texture and a plan that smooths without stripping.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default skinTexture;
