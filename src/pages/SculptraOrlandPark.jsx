/* AVEN MED — Sculptra® in Orland Park.
 * Original, medically-toned content on the shared TreatmentTemplate. */
import React from 'react';
import TreatmentTemplate from './TreatmentTemplate.jsx';

const sculptra = {
  slug: "sculptra-orland-park",
  treatmentName: "Sculptra®",
  treatmentShort: "Sculptra",
  breadcrumbName: "Sculptra in Orland Park",
  procedureName: "Sculptra — Poly-L-Lactic Acid Collagen Stimulator",
  procedureDescription:
    "Sculptra (poly-L-lactic acid) collagen-stimulating injectable in Orland Park, IL, performed by Alaa Mashal, FNP-BC. A gradual, planned approach to facial structure, subtle volume, and balance.",

  hero: {
    eyebrow: "Aesthetics · Biostimulators",
    headline: <>Sculptra® in <em>Orland Park.</em></>,
    subheadline:
      "A gradual collagen-stimulating treatment designed to support facial structure, restore subtle volume, and improve overall facial balance over time.",
  },

  whyAven: {
    headline: <>Not a one-size volume fix. A structural <em>plan.</em></>,
    intro:
      "Sculptra is a biostimulator, not an off-the-shelf volume treatment — and we don't approach it that way. Every recommendation at AVEN MED begins with the AVEN Assessment, so the plan is built around your face and how it is changing over time. Before we recommend Sculptra, we consider:",
    considers: [
      "Facial anatomy",
      "Volume-loss patterns",
      "Skin quality",
      "Bone structure",
      "Facial proportions",
      "Relevant medical history",
      "Previous injectable treatments",
      "Long-term goals",
    ],
    body:
      "From there we plan conservatively — the areas, the number of sessions, and the pace — so change arrives gradually and looks natural. The aim is that you simply look rested and like yourself, not treated.",
    practitionerLine:
      "Your treatment is performed by Alaa Mashal, FNP-BC — a board-certified Family Nurse Practitioner and the only injector at the practice.",
  },

  treats: {
    intro:
      "Sculptra works gradually, by supporting your own collagen, so it is suited to structural and quality changes rather than an instant plump. Depending on your anatomy and goals, Sculptra may help improve or support:",
    items: [
      { name: "Gradual Volume Loss", note: "Subtle, age-related loss of facial volume may be softened over time." },
      { name: "Temple Hollowing", note: "Hollowing through the temples can be gently supported." },
      { name: "Cheek Flattening", note: "Flattening through the mid-face may be re-supported for a softer contour." },
      { name: "Lower-Face Support", note: "Structural support along the lower face, where the framework often thins." },
      { name: "Facial Contour", note: "Overall contour may be improved as new collagen builds." },
      { name: "Skin Quality", note: "Some patients notice improved skin quality alongside structure." },
      { name: "Early Structural Aging", note: "Early changes in the facial framework can be addressed proactively." },
      { name: "Facial Balance", note: "Proportion and balance across the face, considered as a whole." },
      { name: "Long-Term Collagen Support", note: "A collagen-led approach that works with your biology over months." },
      { name: "Gradual-Change Preference", note: "Well suited to patients who prefer subtle, gradual change over an immediate result." },
    ],
  },

  howItWorks: {
    eyebrow: "Poly-L-Lactic Acid",
    headline: <>How Sculptra stimulates <em>collagen.</em></>,
    body: [
      "Sculptra is made of poly-L-lactic acid (PLLA) — a biocompatible, biodegradable material that has been used in medicine for decades. It is not a gel that sits in the skin to create instant volume.",
      "Instead, once it is placed, Sculptra acts as a signal. Over the following weeks and months, your body responds by producing its own new collagen in the treated areas. That gradually rebuilt collagen is what supports facial structure and subtle volume — which is why Sculptra is described as a collagen stimulator, or biostimulator.",
      "Because it relies on your own collagen, the change is gradual and progressive — not an instant, final result. Most patients are planned for more than one session, spaced several weeks apart, and results continue to develop over time. How many sessions, which areas, and how much product all vary from patient to patient.",
    ],
  },

  comparison: {
    eyebrow: "Sculptra · Dermal Filler",
    headline: "Two different tools, two different jobs.",
    intro:
      "Sculptra and traditional hyaluronic-acid filler are both injectables, but they work in fundamentally different ways. Neither is better — the right choice depends on your anatomy and what you're hoping to achieve, which is exactly what the AVEN Assessment determines.",
    items: [
      { name: "Sculptra", note: "A poly-L-lactic acid biostimulator that prompts your own collagen over months. Gradual and progressive; suited to broad structural support and usually a planned series. It is not dissolvable the way HA filler is." },
      { name: "Dermal Filler", note: "Hyaluronic-acid gel that adds volume directly and is visible right away. Suited to targeted shaping — lips, chin, cheeks — and can be dissolved if needed. Longevity varies by area." },
      { name: "Which Fits You", note: "Often it isn't either-or. A structural biostimulator and a targeted filler can play different roles within one considered plan. We recommend based on your face — not a preference." },
    ],
    closing:
      "We use both, and we choose based on your anatomy and goals — never a house preference, and never a hard sell.",
  },

  whatToExpect: [
    { label: "Consultation & Planning", body: "We map your anatomy and volume-loss pattern first, then plan the areas, sessions, and pace before any product is placed." },
    { label: "The Session", body: "A treatment session typically takes about thirty to forty-five minutes, depending on the areas being addressed." },
    { label: "The Injection", body: "Sculptra is placed with fine needles or a blunt cannula. A numbing option and careful technique keep most patients comfortable." },
    { label: "Swelling & Bruising", body: "Temporary swelling, tenderness, and occasional bruising are normal for a few days and settle on their own." },
    { label: "Aftercare", body: "We provide simple aftercare and — where clinically appropriate — specific massage instructions for the treated areas, explained clearly in person." },
    { label: "When Changes Begin", body: "Because this is collagen stimulation, changes appear gradually over weeks to months rather than immediately." },
    { label: "A Planned Series", body: "More than one session is often recommended, spaced several weeks apart, to build structure progressively." },
    { label: "Maintenance", body: "Results can be long-lasting, and we plan periodic maintenance around your face rather than a fixed schedule. Timelines vary by patient." },
  ],

  treatmentPlanning: {
    eyebrow: "Treatment Planning",
    headline: <>How many sessions? It <em>depends.</em></>,
    intro:
      "The number of sessions and the amount of product vary from patient to patient — Sculptra is planned to your face, never to a package. What shapes your plan includes:",
    factors: [
      "Your facial anatomy",
      "The degree of volume loss",
      "Age-related structural change",
      "The areas being treated",
      "Any prior injectable treatments",
      "Your long-term goals",
    ],
    closing:
      "Whatever the plan, it is written for you and explained before anything begins — and pricing is discussed at your assessment, never published by the vial or as a package.",
  },

  faqs: [
    { q: "What is Sculptra?", a: "Sculptra is an injectable made of poly-L-lactic acid (PLLA), a biocompatible material used in medicine for decades. Rather than adding gel volume, it stimulates your body to produce its own collagen gradually, supporting facial structure over time." },
    { q: "Is Sculptra a filler?", a: "It is an injectable, but it works differently from traditional filler. Hyaluronic-acid filler adds volume directly and is visible immediately; Sculptra is a collagen stimulator (biostimulator) that prompts gradual change over weeks to months. It is not an instant-volume filler." },
    { q: "How does Sculptra stimulate collagen?", a: "Once placed, the poly-L-lactic acid acts as a signal that your body responds to by producing new collagen in the treated areas over the following weeks and months. That rebuilt collagen is what supports structure and subtle volume." },
    { q: "When will I see results?", a: "Results are gradual. Because Sculptra relies on your own collagen, changes develop over weeks to months rather than appearing right away. Many patients notice progressive improvement across a planned series." },
    { q: "How many treatments will I need?", a: "It varies. Sculptra is often planned as a series of sessions spaced several weeks apart, but the number depends on your anatomy, degree of volume loss, and goals. Your recommended plan is determined at your assessment, not from a package menu." },
    { q: "How long can Sculptra results last?", a: "For many patients, results from stimulated collagen can be long-lasting — often a couple of years — though this varies from person to person. We plan periodic maintenance rather than promising a fixed timeline." },
    { q: "What areas can Sculptra treat?", a: "Sculptra is commonly used for broad, structural areas such as the temples, cheeks, and lower face, and to support overall facial balance. It is generally not used for fine, targeted areas like the lips. Appropriate areas are determined during your assessment." },
    { q: "Is there downtime?", a: "Downtime is usually minimal. Temporary swelling, tenderness, and occasional bruising can occur for a few days. Most patients return to normal activities the same day, following simple aftercare." },
    { q: "Does Sculptra look natural?", a: "Because it works gradually with your own collagen, Sculptra is designed to look natural — subtle structural support that develops over time rather than a sudden change. Our conservative planning is built around that goal." },
    { q: "Can Sculptra be combined with Botox?", a: "Often, yes. Sculptra addresses structure and volume while neuromodulators address dynamic lines, so they can be complementary parts of one plan. Any combination and its timing are decided during your assessment." },
    { q: "Can Sculptra be combined with dermal filler?", a: "Yes. A structural biostimulator like Sculptra and a targeted hyaluronic-acid filler can play different roles in the same considered plan — for example, broad support from Sculptra with precise shaping from filler." },
    { q: "Is Sculptra reversible?", a: "Unlike hyaluronic-acid filler, Sculptra cannot be dissolved with an enzyme. This is one reason we plan it conservatively and gradually — building slowly rather than overcorrecting." },
    { q: "Who may not be a good candidate for Sculptra?", a: "Candidacy depends on your health history, skin, and goals — and patients who want an immediate, dramatic result may be better suited to another treatment. Certain medical conditions or histories may make Sculptra inappropriate. Your assessment determines suitability." },
    { q: "What should I avoid after treatment?", a: "We generally advise avoiding strenuous exercise, significant sun or heat, and alcohol for a short period, and we'll provide any specific massage instructions in person where clinically appropriate. You'll receive clear, personalized aftercare guidance." },
    { q: "Why is an AVEN Assessment required before Sculptra?", a: "Sculptra is a medical procedure, and candidacy, treatment areas, the number of sessions, and results all vary by patient. An assessment lets us evaluate your anatomy, volume-loss pattern, history, and goals so we can plan safely and conservatively." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from across the Southwest suburbs, including Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, and New Lenox." },
  ],

  related: [
    { label: "Botox in Orland Park", path: "/botox-orland-park" },
    { label: "Lip Fillers in Orland Park", path: "/lip-fillers-orland-park" },
    { label: "SkinPen Microneedling in Orland Park", path: "/skinpen-microneedling-orland-park" },
    { label: "Cheek Filler", path: "/aesthetics" },
    { label: "Chin Filler", path: "/aesthetics" },
    { label: "Jawline Filler", path: "/aesthetics" },
    { label: "Medical-Grade Skincare", path: "/aesthetics" },
  ],

  finalCta: {
    headline: <>Plan for gradual, natural-looking <em>change.</em></>,
    copy: "Begin with an AVEN Assessment to receive recommendations based on your anatomy, volume-loss pattern, goals, and long-term treatment plan.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

const SculptraOrlandPark = ({ navigate }) => <TreatmentTemplate data={sculptra} navigate={navigate} />;

export default SculptraOrlandPark;
