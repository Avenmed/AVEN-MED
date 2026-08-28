/* AVEN MED — Jawline Filler in Orland Park. Data module for the content registry.
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
 *     assessed individually; filler and neuromodulator routinely performed at the
 *     same visit when clinically appropriate, filler first and neuromodulator last.
 *
 *  B. OBJECTIVE CLINICAL FACT — FDA dermal filler safety information: the common
 *     reactions and their usual course, that reactions can emerge weeks to years
 *     later, unintentional intravascular injection being rare but serious and
 *     possibly permanent (necrosis or scarring, vision abnormalities, blindness,
 *     stroke), and the symptoms warranting immediate medical attention.
 *
 * JAWLINE FILLER AND MASSETER NEUROMODULATOR ARE NOT THE SAME TREATMENT and are
 * deliberately not conflated: filler adds structure, the neuromodulator reduces
 * muscle activity. The comparison module exists because patients genuinely arrive
 * unable to tell which they need; neither is framed as superior.
 *
 * NO BRAND IS NAMED. No blanket lidocaine claim, no cannula/technique claim, no
 * numbing protocol, and no "twelve to twenty-four months" blanket duration — all
 * legacy and unverified. No "snatched" or sculpted-jaw promise. Regulatory status is
 * not made a patient-facing topic, and no approval is claimed or implied. */
import React from 'react';

const jawline = {
  slug: "jawline-fillers-orland-park",
  priority: 0.9,
  seo: {
    title: "Jawline Filler in Orland Park, IL | AVEN MED",
    description:
      "Jawline filler in Orland Park, IL — structural definition planned for your lower face by Alaa Mashal, MSN, APRN, FNP-BC. Assessment first.",
  },
  treatmentName: "Jawline Filler",
  treatmentShort: "Jawline Filler",
  tags: ["injectable", "filler", "jaw", "lower-face", "contour"],
  breadcrumbName: "Jawline Fillers in Orland Park",
  procedureName: "Jawline Filler — Hyaluronic Acid Contouring",
  procedureDescription:
    "Hyaluronic acid jawline filler in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC. Structural support along the jaw, planned around lower-face proportion, following an individualized assessment.",

  editorial: true,
  sectionOrder: [
    "hero", "whyAven", "approach", "provider", "assessment", "treats",
    "howItWorks", "comparison", "whatToExpect", "safety", "faq",
    "related", "relatedConcerns", "bridal", "finalCta",
  ],

  hero: {
    eyebrow: "Aesthetics · Filler & Balancing",
    headline: <>Jawline Filler in <em>Orland Park.</em></>,
    subheadline:
      "Structure placed along the jaw, in proportion to the face it belongs to. A defined jaw is one that fits — not the sharpest line the product could produce.",
  },

  whyAven: {
    headline: <>Definition has to fit the <em>face.</em></>,
    intro:
      "A jawline is easy to sell and easy to overbuild. It takes a lot of product relative to other areas, the change is dramatic in photographs, and a heavier, wider lower face reads as a stronger one for exactly as long as it takes for the rest of the face to look out of step with it.",
    body:
      "AVEN plans the jaw against the whole lower face rather than as a line to be sharpened, and is candid about a limit patients are rarely told: where the jaw looks soft because skin has loosened rather than because structure is missing, adding product weighs down the very tissue that is descending. Sometimes the honest recommendation here is less, or nothing, or a different treatment entirely.",
    practitionerLine:
      "Every injection at AVEN is placed by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner and the only injector at the practice.",
  },

  approach: {
    eyebrow: "How the Plan Is Made",
    headline: <>What is actually softening the <em>line.</em></>,
    body: [
      "A jaw can lose definition for reasons that look similar and behave completely differently. Before anything is drawn up, Alaa separates them: bone that gives little structural support, soft tissue that has descended over the jaw border, skin that has loosened, or a heavy masseter widening the angle. Filler genuinely helps the first. It does not tighten skin, and where laxity is the real story, it adds weight rather than definition.",
      "The chin is assessed before the jaw, not alongside it. The jaw is read as one continuous line from the chin back to the angle, and building the sides while the front sits back tends to widen the lower face instead of defining it — which is why the chin is often treated first, or treated instead.",
      "Then proportion, honestly. A jaw is judged against the midface and the neck, not against a photograph of somebody else's. What can be added before the lower face starts to look heavy is a real ceiling, and it is set before treatment rather than discovered afterwards.",
    ],
    considers: [
      "Existing bone structure and where support is genuinely missing",
      "Chin projection, assessed first as part of the same line",
      "Whether softness is volume, descended tissue, or skin laxity",
      "Masseter bulk and whether it is widening the angle",
      "Proportion against the midface and neck",
      "Previous filler along the jaw, and how much remains",
    ],
    closing:
      "This area takes more product than most, which makes restraint a deliberate decision rather than a default.",
  },

  provider: {
    eyebrow: "Who Treats You",
    headline: <>One practitioner, every <em>visit.</em></>,
    body: [
      "AVEN MED is founded and led by Alaa Mashal, MSN, APRN, FNP-BC — Founder & Clinical Director, a board-certified Family Nurse Practitioner, and the practice's only injector. The person who assesses your lower face is the person who treats it and the person who reviews it once it has settled.",
      "It matters here because the jaw is usually built over more than one visit, and because it interacts with the chin and, for some patients, with masseter treatment. Holding all of that in one clinical picture across years is what keeps a lower face balanced rather than accumulated.",
    ],
  },

  assessmentIntro: {
    headline: <>We look before we <em>treat.</em></>,
    body:
      "No syringe count is quoted before your lower face has been assessed — a number given in advance is a guess with a price on it. An Aura skin analysis is part of every AVEN Assessment; it looks at skin, and plays no part in choosing your product, deciding volume or planning placement. That is Alaa's clinical examination. The fee is credited toward your treatment.",
  },
  assessmentTiers: {
    quickExtras: ["An honest read on whether structure is what is missing"],
    comprehensiveExtras: ["Full lower-face and proportion analysis", "Staged chin-and-jaw treatment planning"],
  },

  treats: {
    intro:
      "Placed along the jaw, hyaluronic acid can restore structure where the underlying support is modest. Depending on your anatomy and goals, jawline filler may be considered for:",
    items: [
      { name: "A Softened Jaw Border", note: "Definition where the line between face and neck has blurred." },
      { name: "Limited Structural Support", note: "A jaw that has always been light on bony projection at the angle." },
      { name: "Chin-to-Jaw Continuity", note: "Carrying one line from the chin back to the angle.", path: "/chin-fillers-orland-park" },
      { name: "Early Lower-Face Heaviness", note: "Support at the border can improve how early jowling reads — it does not lift it." },
      { name: "Asymmetry", note: "Balancing a jaw where the two sides differ in structure." },
      { name: "Lower-Face Proportion", note: "Bringing the jaw into balance with the chin and midface." },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: <>Building an edge, not <em>tightening</em> one.</>,
    body: [
      "Hyaluronic acid is a gel form of a substance your skin already contains. Placed along the jaw it occupies space and holds its shape against the bone, so there is a firmer edge for the soft tissue above to sit on. What you see as definition is contrast — a defined jaw is one where the line between the face and the neck is distinct, and adding structure at that border sharpens the transition.",
      "Placement decides whether that reads as definition or as width. Product kept close to the jaw border and to the angle builds an edge; the same amount placed further into the soft tissue of the cheek and lower face builds bulk. This area also takes more product than most on the face, which is precisely why the amount is planned to a proportion rather than to an effect.",
      "The limit is honest and important: this adds structure, it does not tighten skin. Where the jaw looks soft because skin and tissue have loosened and descended, building underneath adds weight to tissue that is already coming down. That is why the assessment separates structure from laxity before anything is placed.",
    ],
  },

  comparison: {
    eyebrow: "Jawline Filler · Masseter Neuromodulator",
    headline: "Two different tools for one jaw.",
    intro:
      "Patients often arrive knowing they want something done about their jaw without knowing which of these it is — and they are genuinely different treatments. One adds structure that is missing; the other reduces the activity of a muscle that is doing too much. Neither is the better treatment; they answer opposite findings.",
    items: [
      { name: "Jawline Filler", note: "Adds structure along the jaw border where support is modest, defining the line between face and neck. The change is visible the same day and can be reduced with hyaluronidase where clinically appropriate." },
      { name: "Masseter Neuromodulator", note: "Relaxes an enlarged chewing muscle so it gradually loses bulk, which can soften a wide lower face over months. It adds nothing, and it only helps where muscle is genuinely the cause.", path: "/masseter-botox-orland-park" },
      { name: "Sometimes Both", note: "A jaw can be under-supported at the border and wide at the angle at the same time. Where that is the case they are sequenced and judged separately rather than done as one treatment." },
    ],
    closing: "Wanting a better jawline does not tell us which of these you need. The examination does.",
  },

  whatToExpect: [
    { label: "Treatment", body: "Filler is placed along the jaw in stages, checked against the whole lower face as it goes rather than delivered as a set quantity. Comfort measures are discussed with you beforehand." },
    { label: "Immediately after", body: "Swelling is normal, can be uneven between the sides, and often exaggerates the definition at first — so the jaw you leave with is not the result. Bruising and tenderness for a few days are common." },
    { label: "Settling", body: "Most swelling eases over the first days, with the settled result at around two weeks. Judging the line before then, particularly in photographs, is not useful." },
    { label: "Follow-Up", body: "We review once it has settled and decide whether anything further is worth adding. Building the jaw across more than one visit is the normal path here, not a second sale." },
    { label: "Longevity", body: "How long it lasts depends on the product selected, how much was placed and where, and how your body breaks it down. A single figure across every filler and every jaw would be misleading, so what is reasonable for your plan is discussed at your assessment." },
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
      { name: "What filler cannot do here", note: "It adds structure; it does not tighten skin or lift tissue that has descended. Where laxity rather than lost support is what has softened the jaw, filler is the wrong tool for it, and adding more will not become the right one." },
      { name: "Medications and history", note: "Blood thinners and some supplements increase bleeding, bruising and swelling. We review them with you. If bleeding risk is significant, treatment may be deferred or coordinated with the clinician who prescribed it — never stop a prescribed medication for an aesthetic treatment on your own." },
      { name: "If filler needs to be reduced", note: "Hyaluronic acid can be treated with hyaluronidase when that is clinically appropriate, and AVEN keeps Hylenex on site so it is available without delay. It is a medical treatment in its own right — it needs assessment, carries its own risks, and is not a precise undo." },
    ],
    closing:
      "None of this is meant to alarm you. It is what a reasonable person would want to know before a medical injection, and it is the same conversation you will have in the room.",
  },

  faqs: [
    { q: "Is this the same as masseter Botox?", a: "No — they answer opposite findings. Filler adds structure along the jaw where support is missing. A masseter neuromodulator relaxes an enlarged chewing muscle so it gradually loses bulk, which can narrow a wide lower face. One adds, the other reduces, and which you need is what the examination determines." },
    { q: "Will it give me a sharp, sculpted jawline?", a: "It can define the line between your face and neck, within what your proportions can carry. What it will not do is produce a jaw that belongs to a different face — past a certain point, more product widens and weighs down the lower face rather than defining it. The ceiling is set at your assessment rather than discovered afterwards." },
    { q: "How much will I need?", a: "More than most facial areas, which is exactly why the amount is planned to your proportions rather than to an effect. It is common to build across more than one visit and review in between, and it is never sold as a package." },
    { q: "Will it help my jowls?", a: "Only up to a point, and it is worth being clear about why. Support at the jaw border can improve how early heaviness reads, but filler does not tighten skin or lift tissue that has descended. Where laxity is the real cause, adding structure underneath weighs down the tissue that is already coming down — so you may be told this is not the right treatment for what is bothering you." },
    { q: "Should my chin be treated first?", a: "Often, yes. The chin and jaw are read as one continuous line, and building the sides while the front sits back tends to widen the lower face rather than define it. Sometimes treating the chin is all that is needed." },
    { q: "How long will it last?", a: "It varies with the product selected, how much was placed and where, and how quickly your body breaks it down. Quoting one number for every filler and every jaw would be misleading, so what is reasonable for your plan is discussed at your assessment." },
    { q: "Can it be dissolved?", a: "Hyaluronic acid filler can be treated with hyaluronidase where that is clinically appropriate, and AVEN keeps Hylenex on site. Dissolving is its own medical treatment — it needs assessment, carries its own risks, and does not return the jaw precisely to its starting point." },
    { q: "Can I have filler and Botox at the same visit?", a: "Often, yes. Where both are appropriate — jaw structure and masseter treatment frequently come up together — Alaa routinely does them in one appointment, filler first and the neuromodulator last, with aftercare for both." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  related: [
    { label: "Chin Fillers in Orland Park", path: "/chin-fillers-orland-park" },
    { label: "Masseter Botox in Orland Park", path: "/masseter-botox-orland-park" },
    { label: "Cheek Fillers in Orland Park", path: "/cheek-fillers-orland-park" },
    { label: "Lip Fillers in Orland Park", path: "/lip-fillers-orland-park" },
  ],

  finalCta: {
    headline: <>A jaw that fits the <em>face.</em></>,
    copy: "Begin with an AVEN Assessment for an honest read on whether structure is what your lower face is actually missing.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default jawline;
