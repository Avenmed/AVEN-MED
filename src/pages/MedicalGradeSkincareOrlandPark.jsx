/* AVEN MED — Medical-Grade Skincare in Orland Park. Data module for the content registry. */
import React from 'react';

const medicalGradeSkincare = {
  slug: "medical-grade-skincare-orland-park",
  priority: 0.85,
  changefreq: "monthly",
  seo: {
    title: "Medical-Grade Skincare in Orland Park, IL — Personalized Routines | AVEN MED",
    description: "Medical-grade skincare in Orland Park, IL at AVEN MED — professionally selected, personalized routines that protect and extend your in-office results. Led by Alaa Mashal, MSN, APRN, FNP-BC. Every routine begins with the AVEN Assessment.",
  },
  tags: ["skin", "skincare", "maintenance"],
  treatmentName: "Medical-Grade Skincare",
  treatmentShort: "Medical-Grade Skincare",
  breadcrumbName: "Medical-Grade Skincare in Orland Park",
  procedureName: "Medical-Grade Skincare — Personalized Professional Routines",
  procedureDescription:
    "Personalized medical-grade skincare in Orland Park, IL guided by Alaa Mashal, MSN, APRN, FNP-BC — professionally selected products and routines that support skin health and extend in-office results.",

  hero: {
    eyebrow: "Skin · Daily Care",
    headline: <>Medical-Grade Skincare in <em>Orland Park.</em></>,
    subheadline:
      "The daily foundation beneath every result — professionally selected, personalized to your skin, and built to last.",
  },

  whyAven: {
    headline: <>Your routine is where results are <em>kept.</em></>,
    intro:
      "In-office treatments do a lot, but what you do every day is what protects and extends them. Medical-grade skincare is chosen for your skin, not pulled from a shelf. Every routine begins with the AVEN Assessment. Before we recommend products, we consider:",
    considers: [
      "Your skin type and condition",
      "Your primary concerns",
      "Sensitivity and reactivity",
      "Products you're already using",
      "The in-office treatments in your plan",
      "Pigmentation history",
      "Your lifestyle and routine",
      "Long-term skin goals",
    ],
    body:
      "From there we build a routine that's effective but realistic — one you'll actually follow — and we adjust it as your skin and your treatment plan evolve. Fewer, better-chosen products beat a crowded shelf.",
    practitionerLine:
      "Your routine is guided by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner — as part of your overall plan.",
  },

  treats: {
    intro:
      "Medical-grade skincare is formulated with higher concentrations of active ingredients than most over-the-counter products, and it's chosen for a purpose. A well-built routine can help support:",
    items: [
      { name: "Skin Barrier Health", note: "A stronger, better-hydrated barrier is the foundation of healthy skin." },
      { name: "Tone & Texture", note: "Consistent daily actives support smoother, more even-looking skin." },
      { name: "Pigment Concerns", note: "Targeted ingredients can help address uneven tone over time." },
      { name: "Early Signs of Aging", note: "Proven actives support the skin against fine lines and dullness." },
      { name: "Acne-Prone Skin", note: "A considered routine helps keep congestion and breakouts in check." },
      { name: "Sun Protection", note: "Daily SPF is the single most protective habit for your skin." },
      { name: "Treatment Results", note: "Good skincare protects and extends the results of in-office treatments." },
      { name: "Long-Term Skin Health", note: "A sustainable routine you can maintain for the long run." },
    ],
  },

  howItWorks: {
    eyebrow: "Why It's Different",
    headline: <>What 'medical-grade' actually <em>means.</em></>,
    body: [
      "Medical-grade (or professional) skincare is formulated with higher, more active concentrations of proven ingredients, and it's typically dispensed through a medical practice so it can be matched to your skin. That's the key difference — it isn't just stronger, it's guided.",
      "The value isn't in owning more products; it's in using the right few, in the right order, consistently. A good routine usually rests on a small number of essentials — sun protection, a proven active or two, and support for the skin barrier — chosen for your specific needs.",
      "Skincare also works with your in-office treatments, not separately from them. Prepping the skin beforehand and supporting it afterward is often what makes the difference between a good result and a lasting one.",
    ],
  },

  comparison: {
    eyebrow: "Medical-Grade · Over-the-Counter",
    headline: "Guided actives vs. the drugstore aisle.",
    intro:
      "Over-the-counter products have their place, but medical-grade skincare differs in a few meaningful ways. Neither replaces professional guidance — which is the point.",
    items: [
      { name: "Formulation", note: "Medical-grade products generally use higher, more effective concentrations of proven active ingredients." },
      { name: "Guidance", note: "They're selected and adjusted for your skin by a practitioner, rather than chosen off a shelf by guesswork." },
      { name: "Integration", note: "They're built to work with your in-office plan — prepping and protecting your skin so results last." },
    ],
    closing: "The goal isn't the most products or the strongest ones — it's the right routine for your skin, and one you'll keep.",
  },

  whatToExpect: [
    { label: "Assessment", body: "We read your skin, review what you already use, and understand your goals before recommending anything." },
    { label: "Your Routine", body: "You receive a personalized, realistic routine — often a focused set of essentials rather than a long list." },
    { label: "Introducing Actives", body: "Stronger actives are introduced gradually so your skin adjusts comfortably, with clear instructions on order and frequency." },
    { label: "Ongoing Adjustment", body: "We refine your routine over time as your skin, the seasons, and your treatment plan change." },
  ],

  faqs: [
    { q: "What is medical-grade skincare?", a: "Medical-grade (or professional) skincare is formulated with higher, more active concentrations of proven ingredients and is typically dispensed through a medical practice so it can be matched to your skin. The value is as much in the guidance as in the products themselves." },
    { q: "How is it different from what I buy at the store?", a: "Beyond generally higher active concentrations, the key difference is that medical-grade products are selected and adjusted for your specific skin by a practitioner, and integrated with any in-office treatments — rather than chosen off a shelf." },
    { q: "Do I really need a professional routine?", a: "You don't need a complicated one. What helps most people is a focused set of the right products used consistently. A professional routine simply makes sure those few products are the right ones for your skin and goals." },
    { q: "Will I need a lot of products?", a: "Usually not. We favor fewer, better-chosen essentials — sun protection, a proven active or two, and barrier support — over a crowded shelf. A routine you'll actually follow is worth more than an elaborate one you won't." },
    { q: "Why does skincare matter with in-office treatments?", a: "Because daily care is what protects and extends your results. Prepping the skin before treatments and supporting it afterward often makes the difference between a good outcome and a lasting one." },
    { q: "How long until I see a difference?", a: "Skincare rewards consistency. Some improvements — like hydration and comfort — come quickly, while changes in tone, texture, and clarity build over weeks to months of steady use." },
    { q: "Can strong actives irritate my skin?", a: "They can if introduced too fast. That's exactly why we phase actives in gradually and give clear instructions on order and frequency, adjusting based on how your skin responds." },
    { q: "Is medical-grade skincare suitable for sensitive skin?", a: "Often yes, when it's chosen carefully. Sensitivity is one of the first things we assess, and a good routine can actually strengthen a reactive skin barrier over time." },
    { q: "What's the single most important product?", a: "For nearly everyone, it's daily sun protection. Sun exposure drives much of visible aging and pigmentation and can undo the results of other treatments, so SPF is the foundation of any routine we build." },
    { q: "Can you help with acne or pigmentation through skincare?", a: "A targeted routine can support both, and often works alongside in-office treatments. We'll be honest about what skincare can achieve on its own versus what benefits from additional treatment." },
    { q: "Why start with an assessment?", a: "Because skincare should be matched to your skin, not guessed at. An assessment lets us understand your skin type, concerns, sensitivities, and goals so your routine is effective, safe, and sustainable." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Build a routine that actually <em>works.</em></>,
    copy: "Begin with an AVEN Assessment to receive a personalized, medical-grade skincare routine matched to your skin and your goals.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default medicalGradeSkincare;
