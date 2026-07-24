/* AVEN MED — Wellness: IV Therapy. Registry data module (wellness type). */
import React from 'react';

const ivTherapy = {
  slug: "wellness/iv-therapy",
  priority: 0.85,
  changefreq: "monthly",
  seo: {
    title: "IV Therapy in Orland Park, IL — Custom Infusions | AVEN MED",
    description: "IV therapy in Orland Park, IL at AVEN MED — custom-formulated infusions for hydration, recovery, energy, and wellness support, delivered under medical oversight. Led by Alaa Mashal, FNP-BC. Every plan begins with the AVEN Assessment.",
  },
  tags: ["iv", "hydration", "recovery", "energy", "wellness"],
  serviceName: "IV Therapy",
  serviceShort: "IV therapy",
  breadcrumbName: "IV Therapy",
  procedureName: "IV Therapy — Custom Intravenous Infusions",
  procedureDescription:
    "Custom-formulated IV therapy in Orland Park, IL by Alaa Mashal, FNP-BC — intravenous hydration and micronutrient infusions for recovery, energy, and wellness support, provided under medical evaluation and oversight.",

  hero: {
    eyebrow: "Wellness · Infusions",
    headline: <>IV <em>Therapy.</em></>,
    subheadline:
      "Custom infusions for hydration, recovery, and wellness support — formulated for you and delivered under medical oversight, not from a fixed menu handed to everyone.",
  },

  overview: {
    eyebrow: "Overview",
    headline: <>What IV therapy actually <em>is.</em></>,
    body: [
      "IV (intravenous) therapy delivers fluids and micronutrients — vitamins, minerals, and antioxidants — directly into the bloodstream through a small catheter. Because it bypasses digestion, the body can access what's delivered quickly and completely, which is the main practical difference from taking supplements by mouth.",
      "At AVEN MED, infusions are formulated to your needs rather than pulled off a menu. The right ingredients, the right situation, and whether IV therapy is appropriate for you at all are decided through evaluation — because an infusion is a medical treatment, not a spa amenity.",
      "It's also worth being clear about scope: IV therapy can be a genuine support for hydration, recovery, and general wellness, but it isn't a cure-all and doesn't replace good nutrition, sleep, or medical care. We'll always frame it honestly as one supportive tool.",
    ],
  },

  pillars: {
    eyebrow: "Common Reasons Patients Come In",
    headline: <>Support, matched to the <em>moment.</em></>,
    intro:
      "People seek IV therapy for different reasons, and the formulation follows the goal. Depending on your evaluation, an infusion may support:",
    items: [
      { name: "Hydration", note: "Rapid rehydration after travel, heat, illness, or heavy exertion." },
      { name: "Recovery", note: "Support for bouncing back after intense activity, a demanding stretch, or feeling run-down." },
      { name: "Energy", note: "B-vitamin and nutrient blends that may support energy when levels are low." },
      { name: "Wellness Support", note: "General nutrient support as part of a broader, prevention-minded routine." },
      { name: "Immune Support", note: "Seasonal support formulations, often around travel or busy periods." },
      { name: "Skin & Radiance", note: "Antioxidant-focused infusions some patients use alongside their skin plan." },
    ],
  },

  medications: {
    eyebrow: "Safety & Medical Oversight",
    headline: <>A medical treatment, treated <em>seriously.</em></>,
    body: [
      "IV therapy is safe for most healthy adults when done properly, but it isn't right for everyone. Certain heart, kidney, or other medical conditions, some medications, and pregnancy can make infusions inappropriate — which is exactly why we evaluate before we ever place an IV.",
      "Every infusion at AVEN is reviewed and overseen by Alaa Mashal, FNP-BC, and administered with proper technique and monitoring. Minor effects like a cool sensation, mild bruising at the site, or a vitamin taste can occur; we watch for anything more and keep the visit comfortable and controlled.",
      "We also won't offer an infusion we don't think you need. If hydration, rest, or a conversation with your physician is the better answer, we'll say so.",
    ],
    note: "Nothing here is a diagnosis or a promise — appropriateness is determined only through a medical evaluation.",
  },

  journey: [
    { label: "Consultation", body: "We review your goals, health history, and whether IV therapy is appropriate for you." },
    { label: "Formulation", body: "A suitable infusion is selected or tailored to your needs — never a one-size drip." },
    { label: "The Infusion", body: "You relax as the infusion is delivered and monitored, typically over about thirty to sixty minutes." },
    { label: "Aftercare", body: "We share simple aftercare and discuss whether occasional infusions fit your broader plan." },
  ],

  longTerm: {
    eyebrow: "In Context",
    headline: <>A support, not a <em>substitute.</em></>,
    body: [
      "IV therapy works best as one supportive element within a healthy routine — not as a replacement for hydration, balanced nutrition, sleep, or medical care. We're deliberate about that framing because honesty matters more than hype.",
      "For some patients, occasional infusions are a useful complement to their wellness or aesthetic plan; for others, they're an as-needed option around travel, recovery, or busy seasons. There's no schedule you're obligated to, and no outcome we'd ever guarantee.",
    ],
  },

  crossLinksIntro:
    "Some patients pair IV therapy with their skin and aesthetic care — for antioxidant support, or a pre-treatment infusion around procedures. Where it's medically appropriate, we plan them together.",
  crossLinks: [
    { label: "Skin Rejuvenation", path: "/skin-rejuvenation-orland-park", note: "A sequenced plan for overall skin quality that some pair with antioxidant infusions." },
    { label: "Medical-Grade Skincare", path: "/medical-grade-skincare-orland-park", note: "The daily foundation of healthy skin, complemented by wellness support." },
    { label: "Aesthetics at AVEN", path: "/aesthetics", note: "Considered aesthetic treatments, sometimes supported by pre-treatment infusions." },
  ],

  faqs: [
    { q: "What is IV therapy?", a: "IV therapy delivers fluids and micronutrients directly into the bloodstream through a small catheter, so the body can access them quickly and fully. At AVEN it's formulated to your needs and provided under medical oversight, not offered as a fixed menu." },
    { q: "How is it different from taking supplements?", a: "Because IV therapy bypasses digestion, delivery is direct and absorption isn't limited by the gut. That said, oral nutrition and supplements remain the foundation for most people — IV therapy is a supportive tool, not a replacement." },
    { q: "What can IV therapy help with?", a: "Patients commonly seek it for hydration, recovery, energy support, general wellness, seasonal immune support, and antioxidant support for skin. What's appropriate for you — if anything — is determined at your evaluation." },
    { q: "Is IV therapy safe?", a: "For most healthy adults, when properly evaluated and administered, it's generally well tolerated. But it isn't right for everyone — certain medical conditions, medications, and pregnancy can make it inappropriate, which is why we evaluate first and oversee every infusion." },
    { q: "Will it give me more energy or cure fatigue?", a: "It may support energy, particularly if you're dehydrated or low in certain nutrients, but we don't promise it cures fatigue. Persistent tiredness deserves a medical evaluation to understand the cause rather than repeated infusions." },
    { q: "How long does an infusion take?", a: "Most infusions take about thirty to sixty minutes, during which you can relax comfortably. We'll give you a clear sense of timing for your specific formulation." },
    { q: "How often should I get IV therapy?", a: "There's no obligatory schedule. For some it's an occasional, as-needed support around travel or recovery; for others it's a periodic complement to a wellness plan. Frequency is individual and discussed honestly, never sold as a package." },
    { q: "Are there side effects?", a: "Minor effects such as a cool sensation, mild bruising at the insertion site, or a temporary vitamin taste can occur. More significant reactions are uncommon, and we monitor throughout the visit for your safety." },
    { q: "Can IV therapy help my skin?", a: "Certain antioxidant-focused infusions are used by some patients alongside their skin plan, and pre-treatment infusions can support comfort around procedures. They complement — but don't replace — medical-grade skincare and in-office treatments." },
    { q: "Do I need an assessment first?", a: "Yes. Because IV therapy is a medical treatment, we evaluate your health, goals, and suitability before recommending or providing any infusion. It ensures your care is safe and genuinely appropriate." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Support, formulated for <em>you.</em></>,
    copy: "Begin with an AVEN Assessment to learn whether IV therapy fits your goals — and what a sensible, individualized approach looks like.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default ivTherapy;
