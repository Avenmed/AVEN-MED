/* AVEN MED — Chin Filler in Orland Park. Data module for the content registry.
 *
 * Treatment Page v2 (filler family, Wave 2). Content only; layout and SEO come from
 * TreatmentTemplate. Opts into `editorial` + `sectionOrder`, both per-page.
 *
 * TWO SOURCE CLASSES, deliberately kept separate:
 *
 *  A. AVEN PRACTICE POLICY (Alaa Mashal, MSN, APRN, FNP-BC): filler is 18+; no
 *     elective aesthetic treatment during pregnancy or breastfeeding; medication and
 *     history review WITHOUT ever instructing anyone to stop a prescribed
 *     anticoagulant; Hylenex kept on site for clinically indicated use; prior filler
 *     and work done elsewhere assessed individually; filler and neuromodulator
 *     routinely performed at the same visit when clinically appropriate, filler
 *     first and neuromodulator last.
 *
 *  B. OBJECTIVE CLINICAL FACT — FDA dermal filler safety information: the common
 *     reactions and their usual course, that reactions can emerge weeks to years
 *     later, unintentional intravascular injection being rare but serious and
 *     possibly permanent (necrosis or scarring, vision abnormalities, blindness,
 *     stroke), and the symptoms warranting immediate medical attention.
 *
 * NO BRAND IS NAMED. No blanket lidocaine claim, no cannula/technique claim and no
 * numbing protocol — the legacy versions of all three were unverified. The legacy
 * "lasts around a year or more" and "adjustable and reversible" absolutes are gone.
 * Regulatory status is not made a patient-facing topic, and no approval is claimed
 * or implied. Skeletal limits are stated as a clinical ceiling, not as a referral
 * protocol, which AVEN has not established. */
import React from 'react';

const chin = {
  slug: "chin-fillers-orland-park",
  priority: 0.9,
  seo: {
    title: "Chin Filler in Orland Park, IL | AVEN MED",
    description:
      "Chin filler in Orland Park, IL — millimetre changes to projection and profile balance, planned by Alaa Mashal, MSN, APRN, FNP-BC. Assessment first.",
  },
  treatmentName: "Chin Filler",
  treatmentShort: "Chin Filler",
  tags: ["injectable", "filler", "chin", "lower-face", "contour", "profile"],
  breadcrumbName: "Chin Fillers in Orland Park",
  procedureName: "Chin Filler — Non-Surgical Hyaluronic Acid Enhancement",
  procedureDescription:
    "Hyaluronic acid chin filler in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC. Refines chin projection and profile proportion in small, considered amounts, following an individualized assessment.",

  editorial: true,
  sectionOrder: [
    "hero", "whyAven", "approach", "provider", "assessment", "treats",
    "howItWorks", "comparison", "whatToExpect", "safety", "faq",
    "related", "relatedConcerns", "bridal", "finalCta",
  ],

  hero: {
    eyebrow: "Aesthetics · Filler & Balancing",
    headline: <>Chin Filler in <em>Orland Park.</em></>,
    subheadline:
      "A small, precise change to how far the chin comes forward — judged against the nose and lips rather than on its own. This is proportion work, not enlargement.",
  },

  whyAven: {
    headline: <>A millimetre is the whole <em>treatment.</em></>,
    intro:
      "The chin is the area where the smallest amount does the most, and where a little too much is most obvious in profile. Almost nobody arrives asking for a bigger chin — they arrive because something about their profile does not sit right, and the chin is often, though not always, what is behind that.",
    body:
      "So AVEN treats this as a proportion question rather than a volume one, and starts well short of the target. There is also an honest ceiling here: a chin that sits back for skeletal reasons can be improved only so far by filler, and when the change you want is beyond what filler can reasonably do, that is said rather than approached one syringe at a time.",
    practitionerLine:
      "Every injection at AVEN is placed by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner and the only injector at the practice.",
  },

  approach: {
    eyebrow: "How the Plan Is Made",
    headline: <>Assessed from the <em>side.</em></>,
    body: [
      "Most chin concerns are invisible face-on and obvious in profile, so that is where the assessment happens. Alaa looks at how far the chin projects relative to the nose and lower lip, how the lower face is proportioned against the rest, whether the chin sits centred, and where the soft tissue ends and the bone begins.",
      "That last point sets the limit. A chin that reads as recessive because there is little bony projection behind it can be improved with filler, but only to a degree — past that, adding more starts to widen or round the chin rather than bring it forward, which reads as a treated chin rather than a balanced one. Where the honest answer is that a surgical opinion would serve you better, you will hear it.",
      "The chin is also rarely treated in isolation. It works with the jaw as one line, and a mentalis muscle that dimples or strains the chin at rest is a separate finding with a separate answer — which is why what is recommended here is sometimes not filler at all.",
    ],
    considers: [
      "Chin projection assessed in profile",
      "Relationship to the nose, lips and lower face",
      "How much of the shortfall is soft tissue versus bone",
      "Chin-to-jaw continuity as one line",
      "Centring and asymmetry",
      "Mentalis activity — dimpling or strain at rest",
    ],
    closing:
      "Small amounts, reviewed once settled. A chin is easier to build toward than to walk back.",
  },

  provider: {
    eyebrow: "Who Treats You",
    headline: <>One practitioner, every <em>visit.</em></>,
    body: [
      "AVEN MED is founded and led by Alaa Mashal, MSN, APRN, FNP-BC — Founder & Clinical Director, a board-certified Family Nurse Practitioner, and the practice's only injector. The person who assesses your profile is the person who treats it and the person who reviews it once it has settled.",
      "This is precise work in a small area where the useful judgment is comparative — what your profile looked like before, what a previous amount actually achieved, and how your chin holds product over time. That is a record, not a technique, and it only exists when the same clinician has kept it.",
    ],
  },

  assessmentIntro: {
    headline: <>We look before we <em>treat.</em></>,
    body:
      "No amount is quoted before your profile has been assessed — a number given in advance is a guess with a price on it. An Aura skin analysis is part of every AVEN Assessment; it looks at skin, and plays no part in choosing your product, deciding volume or planning placement. That is Alaa's clinical examination. The fee is credited toward your treatment.",
  },
  assessmentTiers: {
    quickExtras: ["A clear read on whether the chin is what to treat"],
    comprehensiveExtras: ["Full profile and facial proportion analysis", "Staged lower-face treatment planning"],
  },

  treats: {
    intro:
      "Placed precisely, a small amount of hyaluronic acid can change how the lower face is proportioned. Depending on your anatomy and goals, chin filler may be considered for:",
    items: [
      { name: "Chin Projection", note: "A chin that sits back relative to the nose and lower lip in profile." },
      { name: "Profile Proportion", note: "Bringing the lower face into balance rather than making the chin larger." },
      { name: "Lip-to-Chin Relationship", note: "Refining how the lower lip and chin sit together." },
      { name: "Chin-to-Jaw Continuity", note: "A cleaner line where the chin meets the jaw.", path: "/jawline-fillers-orland-park" },
      { name: "Asymmetry", note: "Gentle balancing of a chin that sits slightly off centre." },
      { name: "A Dimpled Chin", note: "Usually a muscle finding rather than a volume one — often answered with a neuromodulator instead.", path: "/botox-orland-park" },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: <>Changing a line, not a <em>size.</em></>,
    body: [
      "Hyaluronic acid is a gel form of a substance your skin already contains. Placed at the chin it occupies space and holds its shape, so the point of the chin sits slightly further forward or slightly lower than it did. Because the profile is read as a line running from the nose through the lips to the chin, moving one point on that line changes how the whole lower face is proportioned — which is why a very small amount can make a visible difference.",
      "Direction matters as much as amount. Product placed to carry the chin forward reads as projection; the same volume spread wider reads as a broader, heavier chin. That is the difference between a profile that looks balanced and one that looks treated, and it is decided by placement rather than by how much is used.",
      "The limit is the bone underneath. Filler sits on the existing framework and can improve on it, but it cannot move the jaw, change your bite, or produce the degree of change that surgery to the chin can. Where the shortfall is genuinely skeletal, there is a point past which more filler makes the chin wider rather than more projected.",
    ],
  },

  comparison: {
    eyebrow: "Chin Filler · Surgical Options",
    headline: "Filler, or something more permanent?",
    intro:
      "The chin can be addressed non-surgically with filler or surgically with an implant or bone surgery. These are genuinely different commitments, and part of an honest assessment is saying when the change you want sits outside what filler can do. AVEN offers the non-surgical option only.",
    items: [
      { name: "Chin Filler", note: "Works within your existing framework, in small amounts, with the result visible the same day and adjustable over time. It can be reduced with hyaluronidase where that is clinically appropriate." },
      { name: "Surgical Options", note: "An implant or bone surgery changes the underlying structure and suits larger, lasting change. It involves a procedure, recovery and a commitment that filler does not — and it is not something AVEN performs." },
      { name: "Which Fits You", note: "Modest refinement of proportion usually suits filler. A significant structural change, or a bite or jaw concern, is a conversation for a surgeon — and you will be told when that is the case." },
    ],
    closing: "We recommend the approach that fits your face, not the one that keeps you in our chair.",
  },

  whatToExpect: [
    { label: "Treatment", body: "A small amount of filler is placed at the chin, checked against your profile as it goes rather than delivered as a set quantity. Comfort measures are discussed with you beforehand." },
    { label: "Immediately after", body: "Swelling is normal and can briefly exaggerate the projection, so the profile you leave with is not the result. Bruising is possible, and tenderness in the area for a few days is common." },
    { label: "Settling", body: "Most swelling eases over the first days, with the settled result at around two weeks. Judging a chin in the first week — particularly in photographs — is not useful." },
    { label: "Follow-Up", body: "We review once it has settled and decide together whether anything further is worth adding. Building at the review is the normal path in this area rather than a second sale." },
    { label: "Longevity", body: "How long it lasts depends on the product selected, how much was placed and how your body breaks it down. A single figure across every filler and every chin would be misleading, so what is reasonable for your plan is discussed at your assessment." },
  ],

  safety: {
    eyebrow: "Safety & Candidacy",
    headline: <>What to know <em>first.</em></>,
    intro:
      "Hyaluronic acid filler is well established and most reactions are mild and short-lived. It remains a medical injection, a small number of complications are serious and time-critical, and it is not right for everyone. Your history is reviewed before anything is recommended. The general information below is drawn from the FDA's dermal filler safety information; the practice policies are AVEN's own.",
    items: [
      { name: "Common after treatment", note: "Bruising, swelling, firmness, tenderness, pain, redness, lumps or bumps, changes in skin colour and itching are the commonly reported reactions. Most appear soon after treatment and settle over days to weeks." },
      { name: "Sometimes later", note: "Reactions do not always appear straight away. The FDA notes that filler reactions can emerge weeks, months or even years after treatment — so tell us about a new lump, swelling or tenderness in a treated area however long it has been." },
      { name: "Vascular complications", note: "Rare, but the most serious risk of any filler treatment. Filler entering a blood vessel can interrupt blood supply, and the consequences can be permanent — including skin necrosis or scarring, vision abnormalities, blindness and stroke. It is the reason filler is treated as a medical procedure wherever on the face it is placed." },
      { name: "Signs that need help now", note: "Unusual pain, any change in vision, skin turning white, grey or blue near the treated area, or any sign of a stroke — sudden trouble speaking, facial drooping, weakness or numbness, severe headache, dizziness or confusion. Vision changes and stroke signs need emergency care immediately; do not wait for us to call back. For anything else that worries you, contact AVEN straight away." },
      { name: "When we won't treat", note: "AVEN treats adults 18 and over for filler and does not perform elective aesthetic treatment during pregnancy or while breastfeeding. Active infection or a sore at the treatment site, and known allergy to a filler component, also rule treatment out." },
      { name: "What filler cannot do here", note: "It works on top of your existing bone. It does not move the jaw, correct a bite, or replace what surgery to the chin achieves. If your concern is skeletal or dental, more filler is not the answer to it, and you will be told that rather than treated toward it." },
      { name: "Medications and history", note: "Blood thinners and some supplements increase bleeding, bruising and swelling. We review them with you. If bleeding risk is significant, treatment may be deferred or coordinated with the clinician who prescribed it — never stop a prescribed medication for an aesthetic treatment on your own." },
      { name: "If filler needs to be reduced", note: "Hyaluronic acid can be treated with hyaluronidase when that is clinically appropriate, and AVEN keeps Hylenex on site so it is available without delay. It is a medical treatment in its own right — it needs assessment, carries its own risks, and is not a precise undo." },
    ],
    closing:
      "None of this is meant to alarm you. It is what a reasonable person would want to know before a medical injection, and it is the same conversation you will have in the room.",
  },

  faqs: [
    { q: "Will it just make my chin look bigger?", a: "That is the failure mode, and it comes from placement rather than from the treatment itself. Product directed to carry the chin forward reads as projection and balance; the same amount spread wider reads as a broader, heavier chin. Planning to your profile rather than to a quantity is what keeps the difference." },
    { q: "How much will I need?", a: "Usually a small amount — this is one of the areas where very little does a great deal. It is decided at your assessment against your profile, and it is common to start short of the target and review rather than place everything at once." },
    { q: "What if my chin issue is skeletal?", a: "Then filler has a real ceiling. It sits on the framework you have and can improve on it, but it cannot move bone or change a bite, and past a certain point more product widens the chin instead of projecting it. Where a surgical opinion would genuinely serve you better, you will be told that." },
    { q: "How long will it last?", a: "It varies with the product selected, how much was placed and how quickly your body breaks it down. Quoting one number for every filler and every chin would be misleading, so what is reasonable for your plan is discussed at your assessment." },
    { q: "Does it hurt?", a: "Most people find it very manageable, and it is a small amount of product in a small area. Discomfort varies between people, and comfort measures are discussed with you before treatment rather than assumed." },
    { q: "Can it be dissolved?", a: "Hyaluronic acid filler can be treated with hyaluronidase where that is clinically appropriate, and AVEN keeps Hylenex on site. Dissolving is its own medical treatment — it needs assessment, carries its own risks, and does not return the chin precisely to its starting point." },
    { q: "Can I have filler and Botox at the same visit?", a: "Often, yes — a dimpled chin and a recessive chin frequently turn up together, and the first is usually a muscle finding rather than a volume one. Where both are appropriate, Alaa routinely does them in one appointment, filler first and the neuromodulator last, with aftercare for both." },
    { q: "I've had chin filler elsewhere. Will you treat me?", a: "Yes, and we will assess what is already there first. Existing product changes what should happen next, and the honest recommendation is sometimes to wait, sometimes to reduce rather than add. What is appropriate is decided individually rather than promised in advance." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  related: [
    { label: "Jawline Fillers in Orland Park", path: "/jawline-fillers-orland-park" },
    { label: "Cheek Fillers in Orland Park", path: "/cheek-fillers-orland-park" },
    { label: "Lip Fillers in Orland Park", path: "/lip-fillers-orland-park" },
    { label: "Botox in Orland Park", path: "/botox-orland-park" },
  ],

  finalCta: {
    headline: <>Bring the profile into <em>balance.</em></>,
    copy: "Begin with an AVEN Assessment for an honest read on your profile — including whether the chin is what should be treated at all.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default chin;
