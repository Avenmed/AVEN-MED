/* AVEN MED — Lip Fillers in Orland Park.
 *
 * PROTOTYPE #2 for the Treatment Page v2 system. Opts into the editorial path and a
 * page-specific section order via `editorial` / `sectionOrder` — neither is on by
 * default, so no other treatment page is affected by anything written here.
 *
 * TWO SOURCE CLASSES, deliberately kept separate:
 *
 *  A. AVEN PRACTICE POLICY — from the completed Website Treatment & Safety
 *     Questionnaire answered by Alaa Mashal, MSN, APRN, FNP-BC (Founder & Clinical
 *     Director): 18+, no aesthetic treatment during pregnancy or breastfeeding,
 *     medication/history review without instructing anyone to stop a prescribed
 *     anticoagulant, the vascular warning signs she counsels, Hylenex kept on site,
 *     the areas AVEN does not inject, and same-visit filler + neuromodulator.
 *
 *  B. OBJECTIVE CLINICAL FACTS — FDA "Dermal Fillers (Soft Tissue Fillers)" consumer
 *     safety information and the FDA 2021 dermal-filler advisory panel materials.
 *     Common effects, the intravascular-injection risk, the emergency warning signs,
 *     absorbability, and the fact that removing filler is itself an intervention that
 *     carries its own risks all come from there — NOT from AVEN policy.
 *
 * Nothing here states a policy Alaa did not give, and no product brand is named
 * because AVEN's current HA inventory is not established in any source. */
import React from 'react';

const lipFillers = {
  slug: "lip-fillers-orland-park",
  priority: 0.9,
  seo: {
    title: "Lip Filler in Orland Park, IL — Natural Results | AVEN MED",
    description:
      "Natural-looking lip filler in Orland Park, IL. Conservative, proportion-first planning by Alaa Mashal, FNP-BC. Every plan begins with an AVEN Assessment.",
  },
  treatmentName: "Lip Filler",
  treatmentShort: "Lip Filler",
  tags: ["injectable", "filler", "lips", "volume"],
  breadcrumbName: "Lip Fillers in Orland Park",
  procedureName: "Lip Filler — Hyaluronic Acid Lip Enhancement",
  procedureDescription:
    "Hyaluronic acid lip filler in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC. Shape, definition and proportion planned around the patient's own lip, with conservative, individually assessed treatment.",

  // Prototype opt-ins. Absent on every other treatment module.
  editorial: true,
  sectionOrder: [
    "hero", "whyAven", "approach", "provider", "assessment", "treats",
    "howItWorks", "comparison", "whatToExpect", "safety", "faq",
    "related", "bridal", "finalCta",
  ],
  // `relatedConcerns` is deliberately absent — no concern mapping has been approved
  // for this page, and inventing one is not this pass's job.

  hero: {
    eyebrow: "Aesthetics · Filler & Balancing",
    headline: <>Lip Fillers in <em>Orland Park.</em></>,
    subheadline:
      "Small, considered changes planned around the lip you already have. The question is never how much could be added — it's what, if anything, would actually suit your face.",
  },

  whyAven: {
    headline: <>Proportion, not <em>volume.</em></>,
    intro:
      "Lips are among the most noticeable results in aesthetics, which is why they are also the easiest place for treatment to start showing. A lip that has had too much done rarely reads as a fuller lip; it reads as a treated one, and it changes how the whole face is seen.",
    body:
      "So we work in the other direction. Lips are treated as one part of a face rather than an area to be maximised, we would rather place too little and see you again, and you will sometimes be told the honest answer is a smaller change than you came in for — or none at all.",
    // AVEN PRACTICE POLICY (Alaa): AVEN does not perform under-eye/tear-trough, nose
    // or brow/periorbital filler. Stated as AVEN's own boundary, never as a comment
    // on anyone else's practice. FDA separately recommends against filler in the
    // periorbital area, nose and glabella.
    practitionerLine:
      "Restraint also means having boundaries. AVEN treats the lips and the lower face; we do not perform under-eye, nose or brow filler, because those are not areas we are willing to treat.",
  },

  approach: {
    eyebrow: "How the Plan Is Made",
    headline: <>Before the syringe, the <em>proportions.</em></>,
    body: [
      "Every lip already has a shape, a border, a ratio between upper and lower, and a way it behaves when you speak and smile. Alaa reads all of that before anything is drawn up — where the lip genuinely lacks support, where it is simply asymmetric, and where the thing you have noticed is really about the skin around the mouth rather than the lip itself.",
      "That reading is also where the decision gets made about whether filler is the right tool at all. Not every concern about the mouth is a volume problem, and adding product to something that is not a volume problem tends to make it more obvious rather than less.",
    ],
    considers: [
      "Existing lip shape and border",
      "The volume already there",
      "Upper-to-lower lip relationship",
      "Symmetry, and how much is worth changing",
      "How the lips move in speech and smile",
      "Proportion to the rest of the face",
      "Any filler already placed, here or elsewhere",
      "What you actually want to change",
    ],
    closing:
      "We would rather begin conservatively and build than place more than a lip needs.",
    // MEDIA SLOT INTENTIONALLY EMPTY — see the report. /assets/lip-filler.mp4 exists
    // and is clinically relevant, but it is a tight close-up of a needle entering a
    // lip. On a section arguing that we look and measure proportion before we treat,
    // procedure footage says the opposite thing. What is still needed is Alaa
    // assessing lip shape with no syringe in frame.
  },

  provider: {
    eyebrow: "Who Treats You",
    headline: <>One practitioner, every <em>visit.</em></>,
    body: [
      "Every syringe at AVEN is placed by Alaa Mashal, MSN, APRN, FNP-BC — Founder & Clinical Director, a board-certified Family Nurse Practitioner, and the practice's only injector. The person who assesses your lips is the person who treats them, and the person who sees them again at your review.",
      "She also practises as a Family Nurse Practitioner, which means your medications and medical history are reviewed as a matter of course rather than as a form to sign. On a treatment that goes into one of the most vascular areas of the face, that review is part of the treatment.",
    ],
  },

  assessmentIntro: {
    headline: <>We look before we <em>fill.</em></>,
    body:
      "Lips are read in person — shape, border, proportion and movement — before any plan is written. An Aura skin analysis is included in every AVEN Assessment, and the fee is credited toward your treatment.",
  },
  assessmentTiers: {
    quickExtras: ["A clear first recommendation"],
    comprehensiveExtras: ["Full facial analysis", "Long-term treatment planning"],
  },

  treats: {
    intro:
      "Lip filler at AVEN is a matter of small increments. Whether you want a barely-there refinement or a fuller, more defined lip, the work begins with your own anatomy — shape, border, symmetry, and how your lips sit within your face. We plan for proportion rather than volume for its own sake.",
    items: [
      { name: "Volume & Fullness", note: "Restoring or adding fullness in careful, balanced increments." },
      { name: "Shape & Definition", note: "Refining the border and cupid's bow for a defined, natural edge." },
      { name: "Symmetry", note: "Balancing an uneven upper or lower lip, where that is achievable." },
      { name: "Upper-to-Lower Proportion", note: "Adjusting the ratio between the lips for better harmony." },
      { name: "Vertical Lip Lines", note: "Softening the fine lines that form around the mouth over time." },
      { name: "Downturned Corners", note: "Subtle support at the corners of the mouth." },
      { name: "Age-Related Thinning", note: "Gently restoring lips that have lost volume over the years." },
      { name: "Philtrum & Cupid's Bow", note: "Defining the central architecture of the upper lip." },
      { name: "A Subtle Refresh", note: "A small, understated change when the goal is softening rather than size.", },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: <>A gel that adds shape where it is <em>placed.</em></>,
    body: [
      "Hyaluronic acid is a substance the body already makes. The filler is a gel form of it, placed in small amounts precisely where support or definition is wanted — so the result comes from where it sits and how it is shaped, not from how much is used.",
      "It is a temporary material. Absorbable fillers like these are gradually broken down by the body, which is why treatment is planned as something reviewed and adjusted over time rather than decided once. How long it lasts varies with the product, the amount placed, the area, and the individual.",
      "It is worth being clear about what filler does not do. It adds volume and structure where it is placed; it does not tighten skin, change the texture of the lips, or alter how the muscles around the mouth behave. Those are different problems with different answers.",
    ],
  },

  comparison: {
    eyebrow: "Lip Filler · Lip Flip",
    headline: "Two ways to change a lip.",
    intro:
      "Lip filler and a lip flip create different effects through entirely different mechanisms. Neither is better — the right choice, or a combination of the two, depends on your natural lip and what you're hoping for. Determining that is exactly what the AVEN Assessment is for.",
    items: [
      { name: "Lip Filler", note: "Hyaluronic acid gel, placed with precision, adds volume, structure and definition. It is absorbed gradually, so the result is temporary and is reviewed over time." },
      { name: "Lip Flip", note: "A few units of neuromodulator relax the upper lip border so it rolls gently outward — showing a little more lip when you smile. No volume is added, and it wears off sooner than filler." },
      { name: "Filler + Flip", note: "For some lips a small amount of filler alongside a flip gives the more balanced result, and the two can be done at the same visit when that is appropriate. When it isn't the right approach, we'll say so." },
    ],
    closing: "We recommend the least you need to reach your goal — never the most we could do.",
  },

  whatToExpect: [
    { label: "Before", body: "Tell us about your medical history, and about every medication and supplement you take — including blood thinners. Never stop a prescribed medication for an aesthetic treatment; we will review it with you and give you instructions based on your situation." },
    { label: "Treatment", body: "The filler is placed over roughly fifteen to thirty minutes. Comfort measures are discussed and chosen at your visit; most patients describe pressure rather than sharp pain." },
    { label: "Recovery & Swelling", body: "Lips are expressive and vascular, so swelling — and sometimes bruising — is common in the first days and is often most noticeable the morning after. Most people are comfortable in company again within a few days." },
    { label: "Results & Review", body: "Shape is visible immediately, but the settled result appears once swelling resolves, usually around two weeks. We re-evaluate then rather than treating again straight away." },
  ],

  safety: {
    eyebrow: "Safety & Candidacy",
    headline: <>What to know <em>first.</em></>,
    intro:
      "Hyaluronic acid filler is well established and most reactions are mild and short-lived. It is still a medical injection into one of the most vascular areas of the face, a small number of complications are serious and time-critical, and it is not right for everyone. Your history is reviewed before anything is recommended. The general information below is drawn from the FDA's dermal filler safety information; the practice policies are AVEN's own.",
    items: [
      { name: "Common after treatment", note: "Swelling and bruising are the most common effects. They usually appear soon after injection and settle over days to weeks. Tenderness and small lumps as the filler settles are also common." },
      { name: "Less common", note: "Asymmetry, firmness or nodules, and infection can occur. The FDA also notes that filler reactions can occasionally appear weeks, months or even years after treatment." },
      { name: "Vascular complications", note: "Uncommon but serious. Filler entering a blood vessel can interrupt blood flow and, rarely, injure tissue or affect vision. Lips and the area around the mouth are among the most frequently reported sites, which is why we treat this region conservatively and deliberately." },
      { name: "Signs that need us now", note: "Severe or unusual pain, skin that turns white, grey, blue or blotchy, skin that feels cold, or any change in vision. Contact AVEN immediately. Vision changes, or any sign of a stroke, need emergency care straight away — do not wait for us to call back." },
      { name: "When we won't treat", note: "AVEN treats adults 18 and over, and does not perform aesthetic treatment during pregnancy or while breastfeeding. Active infection or a sore at the treatment site, and known allergy to a filler component, also rule treatment out." },
      { name: "Medications and history", note: "Blood thinners and some supplements increase bleeding, bruising and swelling. We review them with you — and if bleeding risk is significant, treatment may be deferred or coordinated with the provider who prescribed it." },
      { name: "If filler needs to be reduced", note: "Hyaluronic acid filler can be treated with hyaluronidase when that is clinically appropriate. AVEN keeps Hylenex on site so it is available without delay. Dissolving is a medical treatment in its own right — it requires assessment, carries its own risks, and is not a precise undo." },
    ],
    closing:
      "None of this is meant to alarm you. It is the information a reasonable person would want before a medical injection, and it is the same conversation you will have in the room.",
  },

  faqs: [
    { q: "Will lip filler look natural?", a: "That is the entire point of our approach. We work in small, balanced increments mapped to your existing lip and face, so the result reads as a more defined version of your own mouth. If a natural-looking result isn't achievable with the amount you're asking for, we'll tell you." },
    { q: "How do you avoid an overfilled result?", a: "By planning for proportion rather than size, by starting with less than the lip could take, and by reviewing at about two weeks before deciding whether anything more is warranted. Building slowly is easier than correcting, and quite often the answer is that no more is needed." },
    { q: "Does lip filler hurt?", a: "Most patients describe pressure rather than sharp pain. Comfort measures are discussed and selected at your visit based on the treatment and on you." },
    { q: "How much swelling and downtime should I expect?", a: "Swelling is common for the first few days and is often most noticeable the morning after treatment; bruising is possible. Most people return to normal activities the same day and feel comfortable in company again within a few days." },
    { q: "How long does lip filler last?", a: "Hyaluronic acid filler is absorbed gradually, so the result is temporary. How long it lasts varies with the product, the amount placed, the area and the individual — which is why we review rather than book to a calendar." },
    { q: "Can lip filler be dissolved?", a: "Hyaluronic acid filler can be treated with an enzyme called hyaluronidase when that is clinically appropriate, and AVEN keeps Hylenex on site so it is available without delay. It is not an undo button: dissolving is a medical treatment that needs its own assessment, carries its own risks, and may not remove filler as precisely as people expect. Knowing it exists is a reason for confidence, not a reason to be casual about how much is placed." },
    { q: "What if I already have filler, or wasn't happy with filler placed elsewhere?", a: "Come and be assessed. Alaa evaluates patients who have had filler elsewhere, including those unhappy with a result or who have had a complication, and decides individually whether treatment is safe and appropriate. That assessment is honest — sometimes the recommendation is to wait, or to do nothing." },
    { q: "Can I make only a very subtle change?", a: "Yes, and subtle is often what we recommend. A small amount can restore definition without a noticeable change in size, and starting conservatively lets us refine over time rather than all at once." },
    { q: "Can lip filler and Botox be done at the same visit?", a: "Often, yes, when it is clinically appropriate for you. Where both are planned, the filler is generally placed first and the neuromodulator last. Whether combining them serves you is decided at your assessment, not assumed." },
    { q: "I've never had filler before — where do I start?", a: "You start with the AVEN Assessment, and we start small. A conservative first treatment lets you see how your lips respond before building toward your goal." },
    { q: "How much does lip filler cost in Orland Park?", a: "Pricing is quoted at your AVEN Assessment, once your lips have been assessed and a plan is agreed — and the assessment fee is credited toward your treatment." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from across the Southwest suburbs, including Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, and New Lenox." },
  ],

  related: [
    { label: "Lip Flip in Orland Park", path: "/lip-flip-orland-park" },
    { label: "Botox in Orland Park", path: "/botox-orland-park" },
    { label: "Cheek Fillers in Orland Park", path: "/cheek-fillers-orland-park" },
    { label: "Chin Fillers in Orland Park", path: "/chin-fillers-orland-park" },
    { label: "Jawline Fillers in Orland Park", path: "/jawline-fillers-orland-park" },
    { label: "Sculptra in Orland Park", path: "/sculptra-orland-park" },
  ],

  finalCta: {
    headline: <>Before any filler, a <em>conversation.</em></>,
    copy: "Begin with an AVEN Assessment — your lips read carefully, your options explained, and a plan you understand before anything is placed.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default lipFillers;
