/* AVEN MED — Acne Scar Treatment in Orland Park. Data module for the registry.
 *
 * Treatment Page v2 (Wave 4). This page is about what acne LEAVES BEHIND. Active
 * disease belongs to /acne-treatment-orland-park and the two are deliberately kept
 * distinct — no paragraph here should be swappable with that page.
 *
 * ⚠️ DOES NOT CONTRADICT THE LOCKED SkinPen PAGE. SkinPen is referenced as the
 * treatment most often relevant to depressed acne scarring, and routed to rather
 * than described in detail. Its device-specific screening — mechanical microneedling
 * only, 22+, current isotretinoin contraindicated, six months after oral
 * isotretinoin, pregnancy/nursing contraindicated, active acne and keloid screening
 * — lives on that page and is NOT duplicated here, where it would drift out of sync.
 * SkinPen itself is untouched by this wave.
 *
 * SOURCE CLASSES:
 *  A. AVEN PRACTICE POLICY: active acne is controlled before scar-directed
 *     treatment; candidacy depends on the procedure ultimately chosen; no promise
 *     of removal.
 *  B. GENERAL CLINICAL BACKGROUND: acne can leave flat discolouration that fades on
 *     its own, and textural scarring that does not; depressed and raised scarring
 *     behave differently. Stated as background, not as a diagnosis of any reader.
 *
 * NOT PROMISED: removal, erasure, permanence, a scar-free result, or any percentage
 * of improvement. Prefer improvement, softening, appearance. No RF, laser, IPL or
 * energy modality is referenced — AVEN owns none. No scar-classification system is
 * asserted beyond what is genuinely descriptive. */
import React from 'react';

const acneScarTreatment = {
  slug: "acne-scar-treatment-orland-park",
  priority: 0.9,
  seo: {
    title: "Acne Scar Treatment in Orland Park, IL | AVEN MED",
    description:
      "Acne scar treatment in Orland Park, IL — what acne left behind, assessed by type and treated realistically by Alaa Mashal, MSN, APRN, FNP-BC.",
  },
  tags: ["skin", "acne-scars", "texture", "collagen"],
  relatedConcerns: ["concerns/acne-scars", "concerns/skin-texture"],
  treatmentName: "Acne Scar Treatment",
  treatmentShort: "Acne Scar Treatment",
  breadcrumbName: "Acne Scar Treatment in Orland Park",
  procedureName: "Acne Scar Treatment — Individualized Scar Improvement Planning",
  procedureDescription:
    "Acne scar treatment in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC — residual acne scarring assessed by type and addressed with an individualized plan, following an assessment.",

  editorial: true,
  sectionOrder: [
    "hero", "whyAven", "approach", "provider", "assessment", "treats",
    "howItWorks", "comparison", "treatmentPlanning", "whatToExpect", "safety",
    "faq", "related", "relatedConcerns", "bridal", "finalCta",
  ],

  hero: {
    eyebrow: "Skin · Texture & Scarring",
    headline: <>Acne Scar Treatment in <em>Orland Park.</em></>,
    subheadline:
      "For what acne left behind. Some of it will fade on its own and needs patience rather than treatment — the rest needs the right treatment, and knowing which is which comes first.",
  },

  whyAven: {
    headline: <>Half of what people call scarring <em>isn't.</em></>,
    intro:
      "A great many people arrive asking to have scars treated when a substantial part of what is bothering them is flat discolouration — the red or brown marks acne leaves as it settles. Those commonly fade over months without any treatment at all. Selling a course of procedures for something that was going to resolve anyway is one of the easier things a clinic can do, and one of the least defensible.",
    body:
      "So the first job here is to separate what will fade from what will not, and to say plainly when the honest answer is time, protection and patience. For genuine textural scarring the second job is expectation: meaningful improvement is realistic, and a scar-free result is not something any treatment can promise.",
    practitionerLine:
      "Your care is led by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner — after an assessment.",
  },

  approach: {
    eyebrow: "How the Plan Is Made",
    headline: <>First, what is actually <em>there.</em></>,
    body: [
      "Acne leaves behind more than one kind of change and they do not respond alike. Flat marks — the red or brown discolouration left where a lesion was — are pigment and vascular change rather than scarring, and they generally fade with time and sun protection. Textural scarring is a genuine change in the skin's structure, most often depressed, and it does not resolve on its own. Raised scarring behaves differently again and needs its own consideration.",
      "Alaa assesses what is present, how it is distributed, how deep and sharply defined the depressions are, and how your skin has behaved after inflammation in the past — because skin that pigments readily changes what can safely be done to it.",
      "Whether your acne is still active is the question that determines everything else. Treating scarring while lesions are still forming means working on a moving target, and most scar-directed treatments are inappropriate over actively inflamed skin.",
    ],
    considers: [
      "Flat discolouration versus genuine textural scarring",
      "Whether depressions are shallow and broad or deep and sharply defined",
      "Distribution, and how much of the area is involved",
      "Whether acne is still active anywhere",
      "How your skin pigments after inflammation",
      "Your goals, and what improvement would be worth it to you",
    ],
    closing:
      "Being told that part of what bothers you will fade by itself is a real result of an assessment, not a way of turning you away.",
  },

  provider: {
    eyebrow: "Who Treats You",
    headline: <>One practitioner, every <em>visit.</em></>,
    body: [
      "AVEN MED is founded and led by Alaa Mashal, MSN, APRN, FNP-BC — Founder & Clinical Director and a board-certified Family Nurse Practitioner. She assesses the scarring, decides whether and what to treat, and performs the treatment.",
      "Scar work is slow and cumulative, judged across a series and often across seasons. What matters clinically is what your skin did after the last session — which only exists as usable information when one clinician has watched the whole course.",
    ],
  },

  assessmentIntro: {
    headline: <>Assessed before it is <em>treated.</em></>,
    body:
      "What you have is established before anything is proposed, because a meaningful share of what people call scarring will fade without treatment. An Aura skin analysis is part of every AVEN Assessment and can help document how your skin looks over time, but it does not diagnose scarring or decide what should treat it — that is Alaa's clinical examination. The fee is credited toward your treatment.",
  },
  assessmentTiers: {
    quickExtras: ["A clear read on what is scarring and what will fade"],
    comprehensiveExtras: ["Full scar-pattern and skin evaluation", "A staged plan with realistic expectations set out"],
  },

  treats: {
    intro:
      "This page is about what remains once acne has settled. Depending on what is actually present, a plan may address:",
    items: [
      { name: "Depressed Acne Scarring", note: "Textural indentations left where inflammation damaged the skin's structure." },
      { name: "Uneven Texture After Acne", note: "Surface irregularity across an area rather than discrete scars." },
      { name: "Enlarged-Looking Pores", note: "Where the texture left behind reads as coarser skin." },
      { name: "Flat Marks", note: "Red or brown discolouration — often better answered by time and sun protection than by treatment." },
      { name: "Deciding What Is Worth Treating", note: "Sometimes the useful outcome is knowing which parts do not need a procedure." },
      { name: "Acne Still Active", note: "If lesions are still forming, that is treated first.", path: "/acne-treatment-orland-park" },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: <>Rebuilding what inflammation took <em>out.</em></>,
    body: [
      "A depressed acne scar is a deficit. Inflammation deep in the skin damaged collagen and the supporting structure, and when the skin healed it did so with less material than it started with — so the surface sits lower than the skin around it. That is why creams and surface treatments do so little for it: the problem is not on the surface, it is underneath.",
      "Improving that means prompting the skin to lay down new collagen in the area, gradually filling the deficit from below. Because it depends on your own repair response, change is slow, cumulative and built across a series rather than delivered in one appointment — and how much improvement is achievable depends on how deep and sharply defined the scarring is.",
      "Flat marks work differently and are worth separating out. Red marks are lingering vascular change and brown marks are pigment left after inflammation; neither is a structural deficit, and both commonly settle over months on their own, with sun protection making a genuine difference to how quickly brown marks resolve.",
    ],
  },

  comparison: {
    eyebrow: "Marks · Scars",
    headline: "Two things that look alike.",
    intro:
      "Telling these apart changes the recommendation entirely, and it is the single most useful thing an assessment does on this page.",
    items: [
      { name: "Flat Marks", note: "Red or brown discolouration where a lesion was. Not a structural change, commonly fades over months, and helped more by sun protection and patience than by a procedure." },
      { name: "Textural Scarring", note: "A genuine deficit in the skin's structure, usually depressed. It does not resolve on its own, and improving it means prompting new collagen over a series." },
      { name: "Frequently Both", note: "Most people have a mixture, which is why a plan often treats one part and deliberately waits on the other." },
    ],
    closing: "Run a finger over it: if the surface is smooth and only the colour differs, time is usually doing the work for you.",
  },

  treatmentPlanning: {
    eyebrow: "The Plan",
    headline: <>Improvement, measured <em>honestly.</em></>,
    intro:
      "Scar treatment is slow, cumulative and best judged against where you started rather than against unblemished skin. What shapes the plan:",
    factors: [
      "Active acne controlled first, wherever lesions are still forming",
      "The type and depth of scarring actually present",
      "Which procedure suits it — and the candidacy that procedure requires",
      "A series spaced over weeks, not a single appointment",
      "Sun protection throughout, particularly where marks are involved",
      "Photographs at the start, because gradual change is hard to see in a mirror",
    ],
    closing:
      "Where microneedling is the right route, it has its own device-specific requirements set out on its own page — and whether you meet them is part of the plan rather than an afterthought. Pricing is discussed at your assessment.",
  },

  whatToExpect: [
    { label: "The assessment", body: "Establishing what is scarring and what is marking, an honest view of how much improvement is realistic, and whether active acne needs handling first." },
    { label: "If acne is still active", body: "That is treated first. It is not a delay tactic — it limits the scarring there will be to treat and makes scar-directed treatment appropriate rather than counterproductive." },
    { label: "The treatment itself", body: "Depends on which procedure suits your scarring, and the experience and recovery are described on that treatment's own page rather than generalised here." },
    { label: "Between sessions", body: "Change accumulates across a series spaced over weeks. Judging after one session is not useful, which is why photographs at the start earn their place." },
    { label: "How results are measured", body: "Against where you started, not against skin that never had acne. Meaningful softening and smoother-looking texture is the goal, and it is a real one." },
  ],

  safety: {
    eyebrow: "Safety & Candidacy",
    headline: <>What to know <em>first.</em></>,
    intro:
      "The treatments used for acne scarring have their own candidacy requirements, and which apply depends on what is ultimately recommended for you. What follows is what matters before that choice is made.",
    items: [
      { name: "Active acne comes first", note: "Where lesions are still forming, active acne is treated before scar-directed work. Treating scarring over inflamed skin means chasing a moving target and can aggravate it." },
      { name: "Candidacy depends on the procedure", note: "Each treatment carries its own requirements — microneedling, for instance, has device-specific contraindications including an age requirement and restrictions around recent isotretinoin and pregnancy. Those are set out on that treatment's page and assessed properly before anything is booked, rather than summarised here where they would go out of date." },
      { name: "Pigmentation history matters", note: "Skin that darkens readily after inflammation needs a more cautious approach and careful aftercare, because any treatment that works by controlled injury carries that risk." },
      { name: "Scarring history matters", note: "A tendency to keloid or abnormal scarring changes what is appropriate, and for some treatments rules them out. Tell us before rather than after." },
      { name: "Sun protection is part of it", note: "Particularly where flat marks are involved, sun exposure prolongs brown discolouration and can undo progress. Daily broad-spectrum sunscreen is genuinely part of the treatment." },
      { name: "No removal is promised", note: "No treatment can guarantee complete removal of acne scarring, and anyone promising it is selling. Meaningful softening and smoother-looking skin is the honest goal, and how much is achievable depends on the scarring you actually have." },
    ],
    closing:
      "If part of what is bothering you will resolve on its own, you will be told that — even though it means recommending less.",
  },

  faqs: [
    { q: "Can acne scars be completely removed?", a: "No treatment can guarantee complete removal, and you should be cautious of anyone who says otherwise. Meaningful softening and smoother-looking skin is realistic and worth having; how much is achievable depends on how deep and sharply defined your scarring is." },
    { q: "Are my red and brown marks scars?", a: "Usually not. Flat discolouration left where a lesion was is pigment and vascular change rather than a structural deficit, and it commonly fades over months on its own — faster with diligent sun protection. If the surface feels smooth and only the colour differs, time is often doing the work." },
    { q: "Do I need to clear my acne first?", a: "If lesions are still forming, yes. Controlling active acne first limits the scarring there will be to treat, and most scar-directed treatments are inappropriate over actively inflamed skin. It is sequencing, not a delay." },
    { q: "Is microneedling the answer?", a: "It is often the right route for depressed acne scarring, and improving the appearance of facial acne scars is what the device is indicated for. It also carries its own requirements — including an age requirement and restrictions around recent isotretinoin and pregnancy — which are set out on its own page and assessed before anything is booked." },
    { q: "How long does it take?", a: "Longer than most people expect. Improvement is cumulative across a series spaced over weeks, and it builds as new collagen matures. Photographs at the start are worth taking, because gradual change is genuinely difficult to see in a mirror." },
    { q: "Will one session help?", a: "Rarely meaningfully. Scar treatment works by accumulating small structural gains, so a series is the realistic path. Judging after a single session tells you very little." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  related: [
    { label: "SkinPen Microneedling in Orland Park", path: "/skinpen-microneedling-orland-park" },
    { label: "Acne Treatment in Orland Park", path: "/acne-treatment-orland-park" },
    { label: "Chemical Peels in Orland Park", path: "/chemical-peels-orland-park" },
    { label: "Skin Rejuvenation in Orland Park", path: "/skin-rejuvenation-orland-park" },
  ],

  finalCta: {
    headline: <>Know what you're actually <em>treating.</em></>,
    copy: "Begin with an AVEN Assessment to separate what will fade from what needs treating — and to hear honestly what improvement is realistic.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default acneScarTreatment;
