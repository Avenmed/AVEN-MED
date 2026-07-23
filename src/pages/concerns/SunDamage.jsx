/* AVEN MED — Patient Concern: Sun Damage. Registry data module. */
import React from 'react';

const sunDamage = {
  slug: "concerns/sun-damage",
  priority: 0.8,
  changefreq: "monthly",
  seo: {
    title: "Sun Damage in Orland Park, IL — Causes & Options | AVEN MED",
    description: "Understand sun damage — sunspots, texture, and premature aging from UV exposure — and the individualized treatment options at AVEN MED in Orland Park, IL. Every plan begins with the AVEN Assessment.",
  },
  tags: ["sun", "pigment", "tone", "aging"],
  concernName: "Sun Damage",
  concernShort: "Sun damage",
  breadcrumbName: "Sun Damage",
  conditionName: "Photoaging (Sun Damage)",

  hero: {
    eyebrow: "Patient Concerns · Skin Quality",
    headline: <>Sun <em>Damage.</em></>,
    subheadline:
      "Most of what we think of as 'aging skin' is actually accumulated sun exposure. The good news: much of it can be improved — and prevented from getting worse.",
  },

  causes: {
    headline: <>What the sun <em>does.</em></>,
    intro:
      "Sun damage — clinically, photoaging — is the cumulative effect of ultraviolet exposure on the skin over years. It works on several layers at once:",
    items: [
      { name: "Pigment Overproduction", note: "UV triggers melanin, creating sunspots, freckling, and mottled color." },
      { name: "Collagen Breakdown", note: "UV degrades collagen and elastin, driving lines, laxity, and thinning." },
      { name: "Vascular Change", note: "Sun exposure can leave persistent redness and visible small vessels." },
      { name: "Rough Texture", note: "The surface becomes rough, dry, or leathery with chronic exposure." },
      { name: "Precancerous Change", note: "Long-term damage can produce rough spots that need medical evaluation." },
      { name: "Cumulative, Not One-Time", note: "Damage builds over a lifetime — including incidental daily exposure." },
    ],
  },

  signs: {
    headline: <>What patients often <em>notice.</em></>,
    intro:
      "Sun damage tends to show first where exposure is greatest — the face, chest, hands, and shoulders. Common signs include:",
    items: [
      { name: "Sunspots", note: "Flat brown spots (solar lentigines) on the face, chest, or hands." },
      { name: "Mottled Tone", note: "A patchy mix of light and dark, and general dullness." },
      { name: "Fine Lines & Laxity", note: "Premature wrinkling and loss of firmness." },
      { name: "Redness & Vessels", note: "Persistent redness or visible small blood vessels." },
      { name: "Rough Patches", note: "Dry, scaly, or rough areas of skin." },
      { name: "Leathery Texture", note: "A thickened, weathered look in heavily exposed skin." },
    ],
  },

  riskFactors: {
    intro: "Sun damage accumulates for everyone, but some factors increase it:",
    items: [
      "A history of sunburns or tanning (including tanning beds)",
      "Fair skin that burns easily",
      "Outdoor work or hobbies",
      "Living or vacationing in high-UV environments",
      "Inconsistent sun protection over the years",
      "Certain medications that increase sun sensitivity",
    ],
  },

  whenToSeek: {
    intro: "Beyond cosmetic concerns, sun damage has a medical dimension. Seek evaluation when:",
    items: [
      "Discoloration and texture are bothering you cosmetically",
      "You'd like a plan to improve accumulated damage",
      "You want to protect against further change",
      "A spot is rough, persistent, or won't heal",
      "Any spot is new, changing, growing, or bleeding",
    ],
    note: "New, changing, non-healing, or unusual spots should be evaluated promptly by a physician or dermatologist to rule out skin cancer. This page is educational and not a diagnosis.",
  },

  assessment: {
    headline: <>Read the damage, layer by <em>layer.</em></>,
    intro:
      "Sun damage rarely shows up as a single problem — it's usually pigment, texture, redness, and early aging together. The AVEN Assessment evaluates each layer so the plan addresses what's actually there and in a sensible order.",
    identifies: [
      { name: "Pigment vs. Vascular", note: "Whether brown discoloration, redness, or both are present." },
      { name: "Texture & Collagen", note: "Surface roughness and the degree of collagen change." },
      { name: "Your Skin Tone", note: "How your skin will respond, guiding safe treatment choices." },
      { name: "Anything Medical", note: "Whether any spot warrants medical evaluation before cosmetic work." },
    ],
  },

  treatmentOptions: {
    headline: <>Repair, then <em>protect.</em></>,
    intro:
      "Improving sun damage usually means combining resurfacing, collagen support, and daily protection — sequenced to your skin. Depending on your assessment, options may include:",
    items: [
      { name: "Chemical Peels", path: "/chemical-peels-orland-park", note: "Resurfacing to lift surface pigment and refresh tone and texture." },
      { name: "SkinPen Microneedling", path: "/skinpen-microneedling-orland-park", note: "Collagen induction to improve texture and skin quality." },
      { name: "Skin Rejuvenation", path: "/skin-rejuvenation-orland-park", note: "A longer-term, sequenced plan for cumulative damage." },
      { name: "Medical-Grade Skincare", path: "/medical-grade-skincare-orland-park", note: "Daily actives and SPF to repair and prevent further damage." },
      { name: "Facials", path: "/facials-orland-park", note: "Supportive maintenance for brighter, healthier-looking skin." },
    ],
    closing: "AVEN's advanced laser and energy-based treatments for pigment and vessels are forthcoming, and may factor into future plans. What fits you today is decided at your AVEN Assessment.",
  },

  lifestyle: {
    intro: "No treatment outpaces ongoing sun exposure, so daily protection is the foundation:",
    items: [
      "Daily broad-spectrum SPF 30+, reapplied outdoors",
      "Hats, sunglasses, and shade during peak hours",
      "No tanning beds",
      "Antioxidant and repair-focused skincare",
      "Regular self-checks for new or changing spots",
      "An annual professional skin check where advised",
    ],
    note: "Protecting the skin now is what allows any repair work to hold.",
  },

  faqs: [
    { q: "Can sun damage be reversed?", a: "Much of the visible damage — pigment, texture, dullness, early lines — can be meaningfully improved with the right plan, though 'reversed' overstates it. We aim for genuine improvement and, crucially, preventing further damage, without promising perfect skin." },
    { q: "Is sun damage only a cosmetic problem?", a: "No. Alongside the cosmetic changes, chronic sun exposure carries real medical risk, including skin cancer. That's why we always flag any suspicious spot for medical evaluation before focusing on appearance." },
    { q: "I'm already damaged — is sunscreen still worth it?", a: "Absolutely. Damage is cumulative, so daily protection prevents further change and protects any improvement you make. It's the single most valuable habit at any age." },
    { q: "What treatments help sun damage most?", a: "It depends on what's present. Resurfacing treatments help pigment and texture, collagen-building treatments help firmness, and skincare supports it all. A combination, sequenced individually, usually gives the best result." },
    { q: "Are treatments safe for my skin tone?", a: "Many are, but the right choice and settings differ by skin tone, especially where pigment is involved. Assessing your skin type first is how we treat sun damage safely across all tones." },
    { q: "How long until I see improvement?", a: "It's gradual. Some brightness appears early, but meaningful change in pigment, texture, and firmness builds over weeks to months and often across a series. Timelines vary from person to person." },
    { q: "Should I get a spot checked before cosmetic treatment?", a: "Yes, if a spot is new, changing, rough, or non-healing. We won't treat over anything that should first be medically evaluated — your health comes before the cosmetic plan." },
    { q: "Why start with an assessment?", a: "Because sun damage is layered — pigment, redness, texture, and aging together. An assessment lets us evaluate each and build a safe, sensible plan rather than treating one thing in isolation." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Undo what you can. Protect the <em>rest.</em></>,
    copy: "Begin with an AVEN Assessment for a layered read on your sun damage and a plan to improve and protect your skin.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default sunDamage;
