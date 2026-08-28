/* AVEN MED — Sculptra® in Orland Park. Data module for the content registry.
 *
 * Treatment Page v2 (Wave 3). Content only; layout and SEO come from
 * TreatmentTemplate. Opts into `editorial` + `sectionOrder`, both per-page.
 *
 * TWO SOURCE CLASSES, deliberately kept separate:
 *
 *  A. OBJECTIVE FACT — current Sculptra Aesthetic IFU (Galderma), verified:
 *      · indicated "for use in immune-competent people as a single regimen for
 *        correction of shallow to deep nasolabial fold contour deficiencies and
 *        other facial wrinkles in which deep dermal grid pattern (cross-hatch)
 *        injection technique is appropriate";
 *      · CONTRAINDICATED in hypersensitivity to any component, and in patients
 *        "with known history of or susceptibility to keloid formation or
 *        hypertrophic scarring" — an ABSOLUTE contraindication, not a caution;
 *      · safety and effectiveness NOT evaluated in subjects who are pregnant,
 *        lactating, breast feeding, or under 18 years of age; nor in history of
 *        keloid formation, hypertrophic scarring, connective tissue disease or
 *        active inflammatory conditions;
 *      · treatment deferred where an inflammatory process (cysts, pimples,
 *        rashes, hives) or infection is present until resolved and controlled;
 *      · "Treatment ... can result in small papules ... typically not visible and
 *        asymptomatic ... However, visible nodules, sometimes with redness or
 *        color change to the skin, have been reported. Patients should report
 *        these events";
 *      · injection-site reactions "have included delayed occurrence of
 *        subcutaneous papules and nodules ... occurring days to months after
 *        injection";
 *      · "It is recommended to massage in a circular fashion the treated areas
 *        for 5 minutes, 5 times per day for 5 days following any injection
 *        session, according to the physician's advice" — the 5-5-5 instruction;
 *      · additional sessions assessed "after at least three weeks";
 *      · increased risk of papules and nodules reported in published literature
 *        after injections in the periorbital area.
 *
 *  B. AVEN PRACTICE POLICY (Alaa Mashal, MSN, APRN, FNP-BC): 18+ for injectables;
 *     no elective aesthetic treatment during pregnancy or breastfeeding; the
 *     approximate course pattern (see `treatmentPlanning`) stated as a pattern and
 *     never a package; report a lump that is persistent, visible, painful or
 *     otherwise concerning; and future facial-surgery plans are discussed, with
 *     treatment possibly postponed pending the surgeon's input.
 *
 * AVEN's usual ">= ~6 weeks" session spacing is MORE conservative than the IFU's
 * "at least three weeks" — compatible, not contradictory. Both are recorded.
 *
 * DO NOT import HA filler language: Sculptra is not dissolvable, and no Hylenex /
 * hyaluronidase preparedness statement belongs on this page. No cannula or numbing
 * protocol (the legacy version carried both, unverified). Per the Wave 1 editorial
 * policy, regulatory status is not made a patient-facing topic. */
import React from 'react';

const sculptra = {
  slug: "sculptra-orland-park",
  priority: 0.9,
  seo: {
    title: "Sculptra in Orland Park, IL | AVEN MED",
    description:
      "Sculptra in Orland Park, IL — a collagen-stimulating injectable planned as a gradual course by Alaa Mashal, MSN, APRN, FNP-BC. Assessment first.",
  },
  treatmentName: "Sculptra®",
  treatmentShort: "Sculptra",
  tags: ["injectable", "biostimulator", "collagen", "volume", "aging", "contour"],
  relatedConcerns: ["concerns/facial-volume-loss", "concerns/skin-laxity"],
  breadcrumbName: "Sculptra in Orland Park",
  procedureName: "Sculptra — Poly-L-Lactic Acid Collagen Stimulator",
  procedureDescription:
    "Sculptra (poly-L-lactic acid) collagen-stimulating injectable in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC. A gradual, planned course addressing facial structure, following an individualized assessment.",

  editorial: true,
  sectionOrder: [
    "hero", "whyAven", "approach", "provider", "assessment", "treats",
    "howItWorks", "comparison", "treatmentPlanning", "whatToExpect", "safety",
    "faq", "related", "relatedConcerns", "bridal", "finalCta",
  ],

  hero: {
    eyebrow: "Aesthetics · Biostimulators",
    headline: <>Sculptra® in <em>Orland Park.</em></>,
    subheadline:
      "Not filler. Sculptra prompts your own collagen over months, so the change arrives slowly enough that nobody catches it happening — which is also why it asks for patience rather than a single appointment.",
  },

  whyAven: {
    headline: <>A treatment you cannot rush or take <em>back.</em></>,
    intro:
      "Almost everything else on this site can be judged in two weeks and, if it is hyaluronic acid, undone. Sculptra is neither. The result builds over months out of collagen your own body makes, and once it is made there is no enzyme that removes it. That single fact should change how the treatment is approached, and at AVEN it does.",
    body:
      "So this is planned in smaller amounts than you might be offered elsewhere, with real gaps between sessions and an honest willingness to stop early if your face has got where it needed to go. Patients who want a visible difference this month are told plainly that this is the wrong treatment for that — and that wanting it is not a fault.",
    practitionerLine:
      "Every injection at AVEN is placed by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner and the only injector at the practice.",
  },

  approach: {
    eyebrow: "How the Plan Is Made",
    headline: <>Planned for where your face will <em>be.</em></>,
    body: [
      "Sculptra is judged differently from filler because you are not planning for how a face looks at the end of the appointment — you are planning for how it will look in six months, once collagen has been laid down. Alaa reads the pattern of loss rather than a single hollow: which areas have thinned, whether the change is broad and diffuse or confined somewhere specific, and how the framework is likely to keep changing.",
      "Diffuse loss across several regions is what this treatment is genuinely good at. A single defined area that wants shape is usually a filler problem, and saying so is part of the assessment rather than a missed sale.",
      "Your history then sets the boundaries, and some of them are absolute. A known history of or susceptibility to keloid or hypertrophic scarring rules this treatment out entirely — that is the product's own contraindication, not a preference. Plans for facial surgery matter too, and are best raised before treatment rather than after.",
    ],
    considers: [
      "Whether volume loss is diffuse or confined to one area",
      "The pattern and stage of structural change",
      "Skin quality and how it will drape over rebuilt support",
      "Any history of keloid or hypertrophic scarring",
      "Previous injectable treatment, and what remains",
      "Whether facial surgery is planned or being considered",
    ],
    closing:
      "The plan is deliberately built to be added to. It is far easier to place a little more at the next session than to wait out collagen you did not want.",
  },

  provider: {
    eyebrow: "Who Treats You",
    headline: <>One practitioner, every <em>visit.</em></>,
    body: [
      "AVEN MED is founded and led by Alaa Mashal, MSN, APRN, FNP-BC — Founder & Clinical Director, a board-certified Family Nurse Practitioner, and the practice's only injector. The person who assesses your face is the person who treats it and the person who judges, months later, what it actually did.",
      "Continuity is not a nicety with this treatment, it is the mechanism by which it is done well. A course runs across a year or more, each session is decided by how the last one responded, and that judgment only exists if the same clinician has watched the whole arc.",
    ],
  },

  assessmentIntro: {
    headline: <>We look before we <em>treat.</em></>,
    body:
      "No vial count is quoted before your face has been assessed — with a treatment that builds over months, a number given in advance is a guess with a price on it. An Aura skin analysis is part of every AVEN Assessment; it looks at skin, and plays no part in deciding your candidacy, the number of vials, or where anything is placed. That is Alaa's clinical examination. The fee is credited toward your treatment.",
  },
  assessmentTiers: {
    quickExtras: ["An honest read on whether a gradual treatment suits your goal"],
    comprehensiveExtras: ["Full facial structure and volume-pattern analysis", "A staged course mapped across the year"],
  },

  treats: {
    intro:
      "Because Sculptra works by prompting collagen rather than placing volume, it suits broad structural change rather than shaping one feature. Depending on your anatomy and goals, it may be considered for:",
    items: [
      { name: "Diffuse Volume Loss", note: "Thinning spread across several areas rather than one hollow." },
      { name: "Temple Hollowing", note: "Gradual support where the temples have narrowed." },
      { name: "Midface Flattening", note: "Support through a cheek that has lost its curve.", path: "/cheek-fillers-orland-park" },
      { name: "Lower-Face Framework", note: "Structural support where the lower face has thinned." },
      { name: "Overall Facial Balance", note: "Proportion considered across the whole face rather than one region." },
      { name: "A Preference for Gradual Change", note: "For people who would rather nobody noticed a single step." },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: <>The product leaves. The collagen <em>stays.</em></>,
    body: [
      "Sculptra is poly-L-lactic acid — a biocompatible, biodegradable material used in medicine for decades, suspended and injected into the deep dermis. Unlike hyaluronic acid, it is not a gel that holds a shape. Placed in the skin, it acts as a stimulus your body responds to by producing its own new collagen in the treated area over the following weeks and months.",
      "The particles themselves are gradually broken down and cleared. What remains, and what you eventually see, is collagen your own body made — which is the reason the change is slow, the reason it keeps developing after a session has finished, and the reason more than one session is usually planned.",
      "It is also the reason this treatment cannot be undone. Hyaluronic acid filler can be treated with an enzyme that breaks it down; there is no equivalent for collagen you have grown. Nothing on this page should be read as implying otherwise, and it is the single strongest argument for building slowly.",
    ],
  },

  comparison: {
    eyebrow: "Sculptra · Hyaluronic Acid Filler",
    headline: "Two injectables that behave nothing alike.",
    intro:
      "Both are injected, and that is roughly where the similarity ends. One places a gel that holds a shape immediately; the other asks your body to build support over months. Neither is better — they answer different questions, and are often planned together.",
    items: [
      { name: "Sculptra", note: "Stimulates your own collagen. Gradual, cumulative, planned as a course, and suited to broad structural loss. It cannot be dissolved — what is built is yours to keep, wanted or not." },
      { name: "Hyaluronic Acid Filler", note: "Places a gel that holds its shape from the moment it goes in. Precise, judged the same day, suited to shaping a specific feature, and reducible with hyaluronidase where clinically appropriate.", path: "/lip-fillers-orland-park" },
      { name: "Often Both, in Order", note: "Broad support from a biostimulator and specific shape from filler do different work. Where both apply they are sequenced across a plan rather than done together." },
    ],
    closing: "If you want to see the difference in the mirror before you leave, this is not the treatment for that — and you will be told so.",
  },

  treatmentPlanning: {
    eyebrow: "The Course",
    headline: <>Built across a year, not an <em>appointment.</em></>,
    intro:
      "Sculptra is planned as a course. The pattern below is how AVEN generally approaches it and is a starting point for discussion, not a package, a prescription or a quantity you are committed to — yours is set at your assessment and revised as your face responds:",
    factors: [
      "Roughly two to three vials in total across an initial treatment year",
      "Commonly divided across sessions rather than placed at once",
      "Approximately one to two vials at any given session",
      "Sessions generally at least around six weeks apart, sometimes nearer three months",
      "Maintenance, where wanted, often around once a year",
      "Typically around one to two vials at a maintenance visit, depending on goals",
    ],
    closing:
      "Every one of those figures is an approximation that yields to what your face actually does. Sessions are judged on response rather than counted off a schedule, and stopping early because you have got where you wanted is a good outcome, not an unfinished one. Pricing is discussed at your assessment and never published by the vial.",
  },

  whatToExpect: [
    { label: "Treatment", body: "Sculptra is placed in the deep dermis across the planned areas. A session generally takes around half an hour to forty-five minutes depending on how much is being covered, and comfort measures are discussed with you beforehand." },
    { label: "Immediately after", body: "You may leave looking fuller than you will be in a week. That is fluid from the injection, not the result — it settles, and the real change has not started yet. Swelling, tenderness and bruising for a few days are normal." },
    { label: "The 5-5-5 massage", body: "The product's instructions recommend massaging the treated areas in a circular fashion for five minutes, five times a day, for five days after any session, according to your clinician's advice. Alaa will show you how and tell you if yours should differ." },
    { label: "When change begins", body: "Weeks to months, not days. Collagen is built slowly, and it keeps building after the swelling has gone — which is why the face at two weeks tells you very little about the face at four months." },
    { label: "Between sessions", body: "The product information advises assessing the need for further sessions after at least three weeks; AVEN generally waits longer, around six weeks or more, so there is something real to judge." },
    { label: "Longer term", body: "Results from stimulated collagen can be long-lasting, though skin and facial structure continue to change. Maintenance is planned around your face rather than a fixed calendar." },
  ],

  safety: {
    eyebrow: "Safety & Candidacy",
    headline: <>What to know <em>first.</em></>,
    intro:
      "Sculptra is a medical injectable with its own risk profile — different from filler, and different from a neuromodulator. It is not right for everyone, and one restriction is absolute. Your history is reviewed before anything is recommended. The general information below comes from the product's own instructions for use; the practice policies are AVEN's own.",
    items: [
      { name: "Keloid or hypertrophic scarring", note: "Sculptra should not be used in anyone with a known history of, or susceptibility to, keloid formation or hypertrophic scarring. This is the product's own contraindication and it is absolute — not something to weigh against how much you want the treatment." },
      { name: "Common after treatment", note: "Injection-site reactions include bruising, bleeding, swelling, discomfort, inflammation and redness. These usually appear soon after a session and settle." },
      { name: "Papules and nodules", note: "Treatment can result in small papules in the treated area. These are typically not visible and cause no symptoms, and may only be noticed by pressing on the area. Visible nodules, sometimes with redness or a change in skin colour, have also been reported." },
      { name: "They can appear late", note: "Papules and nodules have occurred days to months after injection, not only in the days afterwards. Careful placement in the deep dermis matters, and so does the massage — but nothing about technique removes this risk, and any clinic telling you otherwise is overselling." },
      { name: "Tell us about a lump", note: "Contact AVEN about any lump that is persistent, visible, painful or otherwise concerning, however long after treatment it appears. That is not a nuisance call — it is what we would rather you did." },
      { name: "When treatment is deferred", note: "Where an inflammatory process such as cysts, pimples, a rash or hives, or an infection is present, treatment is postponed until it has resolved and is controlled." },
      { name: "Age, pregnancy and breastfeeding", note: "AVEN treats adults 18 and over for injectables and does not perform elective aesthetic treatment during pregnancy or while breastfeeding. The product's safety and effectiveness have not been evaluated in people who are pregnant, lactating or breastfeeding, or under 18." },
      { name: "Also not evaluated in", note: "Connective tissue disease, active inflammatory conditions, and a history of keloid formation or hypertrophic scarring. Bring your full medical history and medications — some medications and supplements increase bruising and bleeding, and never stop a prescribed medication for an aesthetic treatment on your own." },
      { name: "If you are considering facial surgery", note: "Tell us. Where a facelift or other facial surgery is planned or being considered, Alaa may recommend holding off and discussing Sculptra with your surgeon first, so the sequence is decided by the people doing both." },
      { name: "It cannot be dissolved", note: "There is no enzyme that removes collagen your body has produced, and hyaluronidase does nothing here. This is the central reason the course is built conservatively and reviewed rather than front-loaded." },
    ],
    closing:
      "None of this is meant to alarm you. It is what a reasonable person would want to know before committing to a treatment that builds slowly and cannot be reversed, and it is the same conversation you will have in the room.",
  },

  faqs: [
    { q: "Is Sculptra just another filler?", a: "No, and the difference matters. Hyaluronic acid filler places a gel that holds its shape immediately and can be reduced with an enzyme. Sculptra prompts your body to build its own collagen over months — slower to arrive, and not removable once it is there." },
    { q: "When will I actually see something?", a: "Weeks to months rather than days, and it keeps developing after a session. Any fullness in the first days is fluid from the injection, not the result. If you need a visible change soon, this is the wrong treatment and we will say so." },
    { q: "How many vials and how many sessions?", a: "It is planned to your face rather than sold as a package. As a general pattern AVEN works with roughly two to three vials across an initial year, commonly one to two at a session, with sessions usually at least around six weeks apart. Yours is set at your assessment and revised as your face responds." },
    { q: "What is the 5-5-5 massage?", a: "The product's instructions recommend massaging the treated areas in a circular fashion for five minutes, five times a day, for five days after any session, according to your clinician's advice. Alaa will show you how, and will tell you if yours should be different." },
    { q: "What about lumps or nodules?", a: "Small papules can occur and are often invisible and symptomless — noticed only by pressing on the area. Visible nodules, sometimes with redness or a colour change, have also been reported, and they can appear days to months after treatment rather than immediately. Contact AVEN about any lump that is persistent, visible, painful or concerning." },
    { q: "Can Sculptra be dissolved if I don't like it?", a: "No. Hyaluronidase breaks down hyaluronic acid filler; it does nothing to collagen your own body has made. That is exactly why the course is built in small steps with real gaps, rather than aiming for the finished result at the first visit." },
    { q: "I'm thinking about a facelift eventually. Does that matter?", a: "Yes, and it is worth raising now rather than later. Where facial surgery is planned or being considered, Alaa may recommend holding off on Sculptra and discussing it with your surgeon first, so the order of things is decided by the people doing both." },
    { q: "Can I have Sculptra with Botox or filler?", a: "Often, yes — they do genuinely different jobs, and a plan may include more than one. Where several treatments are appropriate they are sequenced across your plan rather than combined without thought, and the sequence is set at your assessment." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  related: [
    { label: "Cheek Fillers in Orland Park", path: "/cheek-fillers-orland-park" },
    { label: "SkinPen Microneedling in Orland Park", path: "/skinpen-microneedling-orland-park" },
    { label: "Lip Fillers in Orland Park", path: "/lip-fillers-orland-park" },
    { label: "Botox in Orland Park", path: "/botox-orland-park" },
  ],

  finalCta: {
    headline: <>Slow is the <em>point.</em></>,
    copy: "Begin with an AVEN Assessment to find out whether a gradual, collagen-led course suits your face — and your patience.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default sculptra;
