/* AVEN MED — SkinPen® Microneedling in Orland Park. Data module for the registry.
 *
 * Treatment Page v2 (Wave 3). Content only; layout and SEO come from
 * TreatmentTemplate. Opts into `editorial` + `sectionOrder`, both per-page.
 *
 * SkinPen is MECHANICAL microneedling. It is NOT RF microneedling, not
 * radiofrequency, and not an energy-based device. AVEN owns and offers no RF
 * treatment (see the Wave 0 removal). Evidence about RF or energy devices must
 * never be generalised to this page.
 *
 * SOURCING NOTE — the 2017 ASDS Guidelines Task Force isotretinoin consensus was
 * REVIEWED AND NOT USED here. Its conclusions cover superficial chemical peels,
 * nonablative lasers and superficial/focal dermabrasion; it does not address
 * microneedling of any kind and therefore establishes no SkinPen exception to the
 * device labeling. An earlier draft of this wave mischaracterised that paper as
 * microneedling evidence; that characterisation is wrong and is deliberately not
 * reproduced.
 *
 * TWO SOURCE CLASSES, deliberately kept separate:
 *
 *  A. OBJECTIVE FACT — current SkinPen Precision Elite labeling, verified:
 *      · "prescription only, minimally invasive, micro-needling device ...
 *        intended to be used as a treatment to improve the appearance of wrinkles
 *        of the neck for Fitzpatrick skin types II - IV and to improve the
 *        appearance of facial acne scars in adults with all Fitzpatrick skin
 *        types aged 22 years and older";
 *      · CONTRAINDICATIONS — active skin cancer in the treatment area(s); open
 *        wounds, sores or irritated skin in the treatment area(s); allergy to
 *        stainless steel or anesthetics; hemorrhagic or hemostatic dysfunction;
 *        PREGNANT OR NURSING; CURRENTLY TAKING ISOTRETINOIN (such as Accutane);
 *      · "You should wait six months following oral isotretinoin (such as
 *        Accutane) use before receiving treatment";
 *      · may be cautioned to avoid sun exposure and stop topical retinoid therapy
 *        24 hours prior; at least 24 hours after autoimmune therapies;
 *      · PRECAUTIONS (not evaluated / may not be appropriate) — actinic keratosis;
 *        active acne; collagen vascular disease or cardiac abnormalities;
 *        diabetes; eczema, psoriasis and other chronic conditions;
 *        immunosuppressive therapy; contact dermatitis history; raised moles;
 *        rosacea; active bacterial or fungal infection; ACTIVE VIRAL HERPES
 *        SIMPLEX (such as cold sores); warts; KELOID SCARS; ANTICOAGULANTS;
 *        scars and stretchmarks less than one year old; scleroderma;
 *        wound-healing deficiencies;
 *      · glossary defines active acne as where there are "currently pustules,
 *        cysts or lesions on the skin at the time of evaluation";
 *      · optional comfort: "if pretreatment numbing is desired, a topical
 *        anesthetic agent may be used";
 *      · "Within the first 72 hours post-treatment you should avoid sweaty
 *        exercise and sun exposure";
 *      · clinical study series — acne scars: 3 treatments 4 weeks apart; neck
 *        wrinkles: 4 treatments 4 weeks apart; and it is recommended to avoid
 *        other facial aesthetic treatments the month following a treatment.
 *
 *  B. AVEN PRACTICE POLICY (Alaa Mashal, MSN, APRN, FNP-BC): no SkinPen over
 *     active inflammatory or cystic acne, particularly multiple active lesions,
 *     though an isolated blemish may simply be avoided; patients with a tendency
 *     toward keloids or abnormal scarring are generally not treated; active cold
 *     sore postpones treatment and a history of them must be disclosed; barrier
 *     support and daily broad-spectrum SPF with reapplication, minimising direct
 *     sun for roughly 10-14 days and no intentional tanning while healing; and a
 *     general maintenance pattern of about four treatments a year when appropriate.
 *
 * NO ANTIVIRAL REGIMEN IS PUBLISHED — no drug, dose, start or stop date. AVEN has
 * not established one, so the page screens, explains why, and leaves the decision
 * to Alaa. The filler-family anticoagulant policy is deliberately NOT copied here:
 * this device lists blood thinners among its own precautions, and that governs.
 * DEVICE AGE: the indicated population is 22+ for facial acne scars; AVEN's general
 * 18+ aesthetic policy is NOT asserted on this page and must not be, since it would
 * imply an indication the labeling does not support. */
import React from 'react';

const skinpen = {
  slug: "skinpen-microneedling-orland-park",
  priority: 0.9,
  seo: {
    title: "SkinPen Microneedling in Orland Park, IL | AVEN MED",
    description:
      "SkinPen microneedling in Orland Park, IL — medical collagen induction for acne scars and texture, planned by Alaa Mashal, MSN, APRN, FNP-BC.",
  },
  treatmentName: "SkinPen®",
  treatmentShort: "SkinPen",
  tags: ["skin", "collagen", "texture", "acne-scars", "aging"],
  relatedConcerns: ["concerns/acne-scars", "concerns/skin-texture", "concerns/large-pores"],
  breadcrumbName: "SkinPen Microneedling in Orland Park",
  procedureName: "SkinPen Microneedling — Collagen Induction Therapy",
  procedureDescription:
    "SkinPen Precision mechanical microneedling (collagen induction therapy) in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC. A planned course addressing acne scarring and skin texture, following an individualized assessment.",

  editorial: true,
  sectionOrder: [
    "hero", "whyAven", "approach", "provider", "assessment", "treats",
    "howItWorks", "comparison", "treatmentPlanning", "whatToExpect", "safety",
    "faq", "related", "relatedConcerns", "bridal", "finalCta",
  ],

  hero: {
    eyebrow: "Skin · Collagen Induction",
    headline: <>SkinPen® Microneedling in <em>Orland Park.</em></>,
    subheadline:
      "A prescription medical device that makes thousands of controlled microchannels in the skin so it rebuilds its own collagen. Mechanical needling — no heat, no energy, no radiofrequency.",
  },

  whyAven: {
    headline: <>A medical procedure that gets sold as a <em>facial.</em></>,
    intro:
      "Microneedling sits in an awkward place. The word covers everything from a prescription medical device to a roller bought online, so it has drifted into being treated as a pleasant add-on — something booked between other things, without anyone asking what is in your medical history first.",
    body:
      "AVEN treats it as what it is: a prescription device with a real contraindication list, used after your skin and history have been reviewed. That review genuinely changes answers. Some people are told to wait, some are told this is not their treatment at all, and some are told the honest route to what they want is a course rather than the single session they came in asking for.",
    practitionerLine:
      "Your treatment is performed by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner — in a medical setting.",
  },

  approach: {
    eyebrow: "How the Plan Is Made",
    headline: <>The history matters as much as the <em>skin.</em></>,
    body: [
      "Two things are assessed, and the second is the one usually skipped elsewhere. First the skin itself: what kind of scarring is present and whether it is the sort that responds, how your texture behaves, how reactive your skin is, and how it has pigmented after injury or inflammation in the past.",
      "Then the history, because this device carries genuine restrictions. Recent isotretinoin, pregnancy or nursing, a tendency to keloid or abnormal scarring, cold sores, active acne, blood thinners, healing problems — each of these changes what happens next, and several of them mean not today. None of it is discoverable by looking at your face, which is why the questions get asked.",
      "Where treatment is appropriate, depth and spacing are set to your skin and to the area rather than run at a fixed setting, and the number of sessions is planned around what your particular concern actually needs.",
    ],
    considers: [
      "Scar type and whether it is likely to respond",
      "Skin texture, reactivity and barrier condition",
      "How your skin has pigmented after past inflammation",
      "Recent isotretinoin, and how long ago",
      "History of cold sores, keloids or abnormal scarring",
      "Medications, including blood thinners, and healing history",
    ],
    closing:
      "A treatment postponed because the timing is wrong is not a treatment refused. It is the same plan, started when it can work.",
  },

  provider: {
    eyebrow: "Who Treats You",
    headline: <>One practitioner, every <em>visit.</em></>,
    body: [
      "AVEN MED is founded and led by Alaa Mashal, MSN, APRN, FNP-BC — Founder & Clinical Director and a board-certified Family Nurse Practitioner. She takes the history, assesses the skin and performs the treatment herself, in a medical setting.",
      "Her Family Nurse Practitioner background does real work on this page in particular. Most of what determines whether SkinPen is appropriate for you today is medical history rather than skin — medications, healing, infection, pregnancy — and that is general-practice territory before it is aesthetic territory.",
    ],
  },

  assessmentIntro: {
    headline: <>Assessed before it is <em>booked.</em></>,
    body:
      "Nothing is planned before your skin and medical history have been reviewed, because several of the things that rule this treatment out are invisible. An Aura skin analysis is part of every AVEN Assessment and adds to the picture of your skin, but it does not diagnose your scarring, decide your candidacy, set needle depth or device settings, or override a contraindication. That is Alaa's examination and your history. The fee is credited toward your treatment.",
  },
  assessmentTiers: {
    quickExtras: ["A first read on whether your scarring is likely to respond"],
    comprehensiveExtras: ["Full skin, scar-pattern and history review", "A planned course with maintenance mapped out"],
  },

  treats: {
    intro:
      "SkinPen works through your skin's own repair response, so it suits texture and scarring rather than surface pigment or laxity. The device is indicated for improving the appearance of facial acne scars and of wrinkles on the neck. Depending on your skin, it may be considered for:",
    items: [
      { name: "Atrophic Acne Scars", note: "Depressed acne scarring — the device's primary indication, and what it does best.", path: "/acne-scar-treatment-orland-park" },
      { name: "Uneven Texture", note: "Roughness and irregular surface quality across an area." },
      { name: "Neck Wrinkles", note: "The device is also indicated for the appearance of wrinkles on the neck." },
      { name: "Enlarged-Looking Pores", note: "Pores can read as more refined as overall skin quality improves." },
      { name: "Fine Lines", note: "Fine lines may soften as new collagen forms — a gradual, quality change." },
      { name: "Overall Skin Quality", note: "The broader goal: skin that is smoother and better conditioned over a course." },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: <>Controlled injury, deliberate <em>repair.</em></>,
    body: [
      "SkinPen is a mechanical device. A sterile, single-use cartridge of fine needles moves rapidly against the skin, creating thousands of very small, controlled channels at a depth set for the area being treated. There is no heat, no light and no radiofrequency involved — the effect comes from the needles alone, which is what distinguishes mechanical microneedling from energy-based devices.",
      "Each of those channels is a small, deliberate injury. Skin responds to injury by repairing, and that repair response prompts new collagen and elastin — the proteins that give skin its firmness and smoothness. Enough controlled channels, spread evenly, and the repair is broad enough to change texture rather than heal a single spot. This is why it is called collagen induction therapy.",
      "Because it depends on your own healing, two things follow. Results build over the weeks after a session rather than appearing at the end of it, and anything interfering with healing — active infection, certain medications, recent isotretinoin — genuinely matters. That is also why a course spaced over weeks does more than a single appointment.",
    ],
  },

  comparison: {
    eyebrow: "Medical Device · At-Home Rollers",
    headline: "Not everything called microneedling is this.",
    intro:
      "The word now covers a prescription medical device and a roller sold online, and they are not the same procedure. This is shared as education rather than judgment — a gentle at-home tool has its place, it is simply a different thing.",
    items: [
      { name: "SkinPen", note: "A prescription-only medical device using sterile, single-use cartridges, at a depth chosen for your skin and area, after a review of your history against a real contraindication list." },
      { name: "At-Home Rollers and Pens", note: "Fixed, shallow depth that cannot be tailored, devices that are reused and difficult to sterilise properly, and no history review at all — which is the part that matters most here." },
      { name: "Where Each Fits", note: "Light at-home tools can support a routine. Changing acne scarring is a medical procedure with medical screening behind it, and treating one as the other is where problems start." },
    ],
    closing: "The needle depth is not what makes this medical. The questions asked beforehand are.",
  },

  treatmentPlanning: {
    eyebrow: "The Course",
    headline: <>Usually a series, then <em>upkeep.</em></>,
    intro:
      "Meaningful change in scarring or texture generally comes from a planned course rather than one appointment, followed by maintenance if you want to hold it. What that looks like:",
    factors: [
      "In the device's acne-scar study, patients had 3 treatments spaced 4 weeks apart",
      "In the neck-wrinkle study, 4 treatments spaced 4 weeks apart",
      "AVEN's usual maintenance pattern is around four treatments a year, roughly seasonal, where appropriate",
      "Your own number depends on the scarring, your skin and how it responds",
      "Other facial aesthetic treatments are generally avoided in the month following a session",
      "Plans are revised on response rather than completed for their own sake",
    ],
    closing:
      "None of this is a package or a commitment. It is what a realistic course tends to look like, and yours is set at your assessment and adjusted as your skin answers. Pricing is discussed at your assessment and never published as a package.",
  },

  whatToExpect: [
    { label: "Before", body: "Arrive with clean skin and no makeup. You may be asked to stop topical retinoids and avoid sun exposure for about 24 hours beforehand, and to leave at least 24 hours after any autoimmune therapy. Options for comfort are discussed, and a topical anesthetic may be used if you want one." },
    { label: "Treatment", body: "The skin is cleaned and prepared, then the device is passed over the treatment area at the planned depth. Most sessions take around thirty to sixty minutes depending on the area." },
    { label: "The first days", body: "Expect redness like a mild sunburn for roughly one to two days, often with tightness, sensitivity and some dryness or light flaking as the skin renews. Makeup is generally avoided for about a day." },
    { label: "First 72 hours", body: "Avoid sweaty exercise and sun exposure. The product information notes that exposure to these can bring on itching, burning, stinging or tingling, scaling and dryness, redness, swelling, and tenderness." },
    { label: "Aftercare", body: "Support the barrier with a gentle product used as instructed, wear broad-spectrum sunscreen daily and reapply it, keep direct sun to a minimum for roughly ten to fourteen days, and do not deliberately tan while the skin is healing." },
    { label: "When change appears", body: "Gradually over the weeks after a session as new collagen forms, and building across a course. It is not an immediate result and should not be judged as one." },
  ],

  safety: {
    eyebrow: "Safety & Candidacy",
    headline: <>What to know <em>first.</em></>,
    intro:
      "This is a prescription medical device with a real list of situations in which it should not be used, several of which are invisible on examination. Your history is reviewed before anything is booked. The device-specific information below comes from the SkinPen Precision labeling; the practice policies are AVEN's own.",
    items: [
      { name: "When it must not be used", note: "Active skin cancer in the treatment area; open wounds, sores or irritated skin in the treatment area; an allergy to stainless steel or to anesthetics; a bleeding or clotting disorder; pregnancy or nursing; and current use of isotretinoin." },
      { name: "Pregnancy and nursing", note: "This is a contraindication for the device itself, not simply a preference about elective treatment — if you are pregnant or nursing, SkinPen is not performed, and we would rather tell you that before you book." },
      { name: "Isotretinoin", note: "Current use rules treatment out. After finishing oral isotretinoin such as Accutane, the device's instruction is to wait six months before treatment. That is the standard we follow rather than one we have decided locally." },
      { name: "Cold sores and herpes", note: "An active cold sore means postponing until it has resolved. If you get them at all, tell us before treatment — a procedure on the skin can be relevant to whether one recurs. Whether any precaution is appropriate for you is Alaa's decision at your assessment; we do not put a medication plan on a web page." },
      { name: "Keloids and abnormal scarring", note: "Keloid scars are among the conditions the labeling flags for consideration, and AVEN goes further: a tendency toward keloids or abnormal scarring generally means we do not treat. A single previous scar is not the same thing as that tendency, which is why it is a conversation rather than a checkbox." },
      { name: "Active acne", note: "SkinPen is not performed over active inflammatory or cystic acne, particularly where several active lesions are present — the labeling flags active acne, meaning pustules, cysts or lesions present at the time of evaluation. An isolated blemish can simply be worked around. Acne scarring and texture left behind by past acne are a different matter, and are what this treatment is for." },
      { name: "Blood thinners and medications", note: "Anticoagulants are among the conditions the labeling identifies for consideration, so tell us what you take, including supplements. Whether treatment is appropriate is decided individually within what the device allows — and you should never stop a prescribed medication for an aesthetic treatment on your own." },
      { name: "Also tell us about", note: "Actinic keratosis, rosacea, eczema or psoriasis, diabetes, connective tissue disease or cardiac abnormalities, immunosuppressive therapy, contact dermatitis, raised moles in the area, warts, active bacterial or fungal infection, scars or stretchmarks less than a year old, scleroderma, and any difficulty healing. The device has not been evaluated in these situations, so each is assessed rather than assumed." },
      { name: "Who the device is indicated for", note: "The facial acne-scar indication is for adults aged 22 and over, across all Fitzpatrick skin types; the neck-wrinkle indication covers Fitzpatrick types II to IV. Because the treatment works mechanically rather than with heat or light, skin tone is handled differently than with energy devices — but your pigmentation history is still assessed individually." },
      { name: "Sun and healing", note: "Avoid sweaty exercise and sun exposure for the first 72 hours. Wear broad-spectrum sunscreen daily and reapply, keep direct sun to a minimum for roughly ten to fourteen days, and do not deliberately tan while the skin is healing." },
    ],
    closing:
      "If anything after treatment worries you — spreading redness, a sore that is not settling, unusual pain, or signs of infection — contact AVEN. Most recoveries are uneventful, and we would rather hear from you early than late.",
  },

  faqs: [
    { q: "Is this the same as RF microneedling?", a: "No. SkinPen is mechanical microneedling — fine needles only, with no heat, light or radiofrequency involved. AVEN does not own or offer any radiofrequency or energy-based device, so nothing on this page should be read as one." },
    { q: "I finished Accutane recently. Can I book?", a: "Not straight away. Current isotretinoin use rules treatment out entirely, and after finishing oral isotretinoin the device's instruction is to wait six months. We follow that rather than making a local judgment about it, so the answer is a date rather than a no." },
    { q: "I get cold sores. Does that stop me?", a: "Not by itself, but tell us. An active cold sore means postponing until it has cleared, and if you get them at all that is worth knowing before a procedure on the skin. Whether any precaution is appropriate for you is decided by Alaa at your assessment — it is not something to standardise on a website." },
    { q: "Will it help my acne scars?", a: "Improving the appearance of facial acne scars is what the device is indicated for, and depressed scarring is where it does its best work over a planned course. Whether your particular scarring is the type that responds is assessed individually rather than promised in advance." },
    { q: "Can I have it while I still have active acne?", a: "Not over active inflammatory or cystic acne, particularly where several lesions are present. An isolated blemish can be worked around. Once acne is settled and what remains is scarring or texture, that is exactly the situation this treatment is for." },
    { q: "How many treatments will I need?", a: "Usually a series rather than one appointment. In the device's acne-scar study patients had three treatments four weeks apart; AVEN's usual maintenance pattern afterwards is around four a year, roughly seasonal, where appropriate. Yours depends on your scarring and how your skin responds." },
    { q: "How much downtime is there?", a: "Expect redness like a mild sunburn for roughly one to two days, often with tightness, dryness or light flaking, and makeup generally avoided for about a day. Sweaty exercise and sun are avoided for the first 72 hours. Recovery varies between people." },
    { q: "Does it hurt?", a: "Comfort options are discussed beforehand and a topical anesthetic may be used if you would like one. Most people describe pressure and vibration rather than sharpness, and sensitivity varies by area and by person." },
    { q: "What about sun afterwards?", a: "It matters more than usual while the skin is renewing. Avoid sun exposure for the first 72 hours, wear broad-spectrum sunscreen daily and reapply it, keep direct sun to a minimum for roughly ten to fourteen days, and do not deliberately tan while healing." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  related: [
    { label: "Acne Scar Treatment in Orland Park", path: "/acne-scar-treatment-orland-park" },
    { label: "Chemical Peels in Orland Park", path: "/chemical-peels-orland-park" },
    { label: "Medical-Grade Skincare in Orland Park", path: "/medical-grade-skincare-orland-park" },
    { label: "Sculptra in Orland Park", path: "/sculptra-orland-park" },
  ],

  finalCta: {
    headline: <>Start with the <em>history.</em></>,
    copy: "Begin with an AVEN Assessment to review your skin, your scarring and the history that decides whether this is the right treatment now.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default skinpen;
