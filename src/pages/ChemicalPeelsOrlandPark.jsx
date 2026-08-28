/* AVEN MED — Chemical Peels in Orland Park. Data module for the content registry.
 *
 * Treatment Page v2 (Wave 4). Content only; layout and SEO come from
 * TreatmentTemplate. Opts into `editorial` + `sectionOrder`, both per-page.
 *
 * SOURCE CLASSES, kept separate:
 *
 *  A. AVEN PRACTICE POLICY (Alaa Mashal, MSN, APRN, FNP-BC):
 *      · NO chemical peel during pregnancy, regardless of agent — Alaa's explicit
 *        instruction, and stated here without softening;
 *      · peel selection and intensity adjusted to Fitzpatrick type, current skin
 *        condition, history and concern; for deeper skin tones a cautious approach,
 *        discussion of post-inflammatory hyperpigmentation risk, appropriate pre-
 *        and post-care, and strict sun protection;
 *      · tretinoin generally used ~3-4x/week per tolerance and prescription;
 *        generally stopped ~2 weeks before a peel and restarted ~2-4 weeks after
 *        depending on peel depth, healing and barrier recovery.
 *
 *  B. PROFESSIONAL CONSENSUS — ASDS Guidelines Task Force: Consensus
 *     Recommendations Regarding the Safety of Lasers, Dermabrasion, Chemical
 *     Peels, Energy Devices, and Skin Surgery During and After Isotretinoin Use.
 *     Waldman et al., Dermatol Surg 2017;43(10):1249-1262 (PMID 28498204). Its
 *     finding of insufficient evidence to justify delaying treatment applies to
 *     SUPERFICIAL chemical peels; it is NOT extended here to medium or deep peels,
 *     and it is not used to assert that any peel is appropriate during isotretinoin.
 *     (This is the source that was wrongly described in an earlier wave as covering
 *     microneedling. It does not. It is genuinely on point HERE and nowhere else so
 *     far in this programme.)
 *
 * NO PEEL AGENT, PERCENTAGE, BRAND, DEPTH PROTOCOL, LAYER COUNT OR NEUTRALISATION
 * STEP IS NAMED. AVEN's peel inventory is not established in any verified source,
 * and the legacy page never named one either — so nothing had to be removed, and
 * nothing is invented. Per the Wave 1 editorial policy, regulatory status is not a
 * patient-facing topic. */
import React from 'react';

const chemicalPeels = {
  slug: "chemical-peels-orland-park",
  priority: 0.9,
  seo: {
    title: "Chemical Peels in Orland Park, IL | AVEN MED",
    description:
      "Chemical peels in Orland Park, IL — depth and formulation matched to your skin type and history by Alaa Mashal, MSN, APRN, FNP-BC. Assessment first.",
  },
  tags: ["skin", "texture", "tone", "acne", "aging", "pigment"],
  relatedConcerns: ["concerns/uneven-skin-tone", "concerns/sun-damage", "concerns/skin-texture", "concerns/large-pores"],
  treatmentName: "Chemical Peels",
  treatmentShort: "Chemical Peels",
  breadcrumbName: "Chemical Peels in Orland Park",
  procedureName: "Chemical Peel — Medical Skin Resurfacing",
  procedureDescription:
    "Chemical peels in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC — controlled resurfacing with depth and formulation selected for skin type, pigmentation history and concern, following an individualized assessment.",

  editorial: true,
  sectionOrder: [
    "hero", "whyAven", "approach", "provider", "assessment", "treats",
    "howItWorks", "comparison", "treatmentPlanning", "whatToExpect", "safety",
    "faq", "related", "relatedConcerns", "bridal", "finalCta",
  ],

  hero: {
    eyebrow: "Skin · Resurfacing",
    headline: <>Chemical Peels in <em>Orland Park.</em></>,
    subheadline:
      "A controlled injury to the surface of the skin, chosen for the skin it is going onto. The selection is the treatment — the same peel is a good idea on one face and a bad one on another.",
  },

  whyAven: {
    headline: <>The wrong peel is worse than <em>none.</em></>,
    intro:
      "Most treatments on this site fail by underdelivering. A peel can fail in the other direction: too deep for the skin it is on, or on skin primed to respond to injury with pigment, and the result is months of a problem the patient did not arrive with. That asymmetry is why peels are not sold from a menu here.",
    body:
      "So the recommendation is often gentler than expected, sometimes staged over a series rather than delivered in one visit, and occasionally deferred entirely until skin is calmer or a routine has been fixed. Deeper is not stronger medicine — it is more risk, and it should only be spent where it buys something.",
    practitionerLine:
      "Your treatment is performed by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner — after an assessment.",
  },

  approach: {
    eyebrow: "How the Plan Is Made",
    headline: <>The skin decides the <em>peel.</em></>,
    body: [
      "The first question is how your skin responds to being injured, because that is what a peel is. Alaa assesses your Fitzpatrick skin type and, more importantly, your actual history: whether a spot, a scratch or a past treatment tends to leave a mark that lingers. Skin that pigments readily after inflammation is not skin that cannot be peeled — it is skin that is peeled differently, more cautiously, and with more attention to what happens before and after.",
      "Then the current state of the skin. Barrier condition, active irritation, how much sun it has had recently, and what you are already using all change what is safe this month. A peel on a compromised barrier is a different treatment from the same peel on a settled one.",
      "Finally the goal, honestly matched to depth. Surface dullness and rough texture do not need what pigment or scarring might, and the aim is the least aggressive option that will actually move the concern — not the strongest one you would tolerate.",
    ],
    considers: [
      "Fitzpatrick skin type and how your skin has pigmented before",
      "Whether marks from spots or injuries tend to linger",
      "Current barrier condition and any active irritation",
      "Recent sun exposure and your realistic sun habits",
      "Current skincare, including any prescription topicals",
      "The concern being treated, and the least depth that addresses it",
    ],
    closing:
      "A peel that has to be recovered from twice is not a stronger treatment. It is a planning failure.",
  },

  provider: {
    eyebrow: "Who Treats You",
    headline: <>One practitioner, every <em>visit.</em></>,
    body: [
      "AVEN MED is founded and led by Alaa Mashal, MSN, APRN, FNP-BC — Founder & Clinical Director, a board-certified Family Nurse Practitioner. She assesses your skin, selects the peel and performs the treatment herself.",
      "That matters here because peel selection is a judgment rather than a protocol, and the most useful input is how your skin responded to the last one. A series planned and adjusted by the same clinician is how depth gets increased safely — or how it is decided that it should not be.",
    ],
  },

  assessmentIntro: {
    headline: <>We look before we <em>treat.</em></>,
    body:
      "No peel is selected before your skin has been assessed and your history taken — the same treatment is appropriate for one person and a poor idea for another. An Aura skin analysis is part of every AVEN Assessment and adds to the picture of your skin, but it does not choose the peel, set its strength, or decide whether you are a candidate. That is Alaa's examination. The fee is credited toward your treatment.",
  },
  assessmentTiers: {
    quickExtras: ["A clear read on whether a peel suits your skin now"],
    comprehensiveExtras: ["Full skin, pigmentation and history review", "A staged plan with the skincare that supports it"],
  },

  treats: {
    intro:
      "By removing the outermost layer of skin in a controlled way, a well-chosen peel prompts renewal. Depending on your skin and the depth selected, a peel may be considered for:",
    items: [
      { name: "Rough or Uneven Texture", note: "Surface roughness that has not responded to routine care." },
      { name: "Dullness", note: "Skin that has stopped reflecting light the way it used to." },
      { name: "Surface Pigment", note: "Some superficial pigment and unevenness, where the skin is a suitable candidate." },
      { name: "Congestion", note: "Certain peels can help clearer, less congested skin." },
      { name: "Fine Surface Lines", note: "Fine lines that sit in the surface rather than in movement." },
      { name: "As Part of a Plan", note: "Sequenced with other treatments rather than used as a standalone event.", path: "/skin-rejuvenation-orland-park" },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: <>Controlled injury, controlled <em>renewal.</em></>,
    body: [
      "A peel applies a solution that loosens the bonds holding the outermost skin cells together, so that layer separates and sheds. The skin beneath responds by renewing — replacing what was removed with newer, more evenly organised cells. That is the whole mechanism, and it is the same in principle whether the peel is very light or considerably deeper.",
      "What changes between peels is how far down that controlled injury reaches. A superficial peel works within the outermost layer and asks little of the skin to recover. Deeper peels reach further, do more, and correspondingly take more recovery and carry more risk. Depth is the variable that matters — not brand, not strength on a label, and certainly not how dramatically the skin flakes afterwards.",
      "It is also why the same peel behaves differently on different skin. Any injury triggers inflammation, and in some skin inflammation reliably leaves pigment behind. The treatment is not the solution alone; it is the solution matched to how a particular skin answers being injured.",
    ],
  },

  comparison: {
    eyebrow: "Peels · Microneedling",
    headline: "Resurfacing, or remodelling.",
    intro:
      "Both improve skin quality and they are frequently confused, but they work at different levels and answer different concerns. For many people they are sequenced rather than chosen between.",
    items: [
      { name: "Chemical Peel", note: "Works from the surface down, removing the outer layer so it renews. Better suited to tone, dullness and surface texture, and judged over days as the skin sheds and settles." },
      { name: "Microneedling", note: "Works from within, creating controlled channels that prompt new collagen over weeks. Better suited to depressed acne scarring and structural texture.", path: "/skinpen-microneedling-orland-park" },
      { name: "Often Sequenced", note: "Where both suit your skin they are ordered and spaced rather than combined, so each can be judged on its own and the skin is not asked to recover from two things at once." },
    ],
    closing: "The safest option that actually moves your concern — never the most aggressive one you would tolerate.",
  },

  treatmentPlanning: {
    eyebrow: "The Plan",
    headline: <>Which peel, and how <em>many.</em></>,
    intro:
      "There is no single best peel, only the one that fits your skin and goal today. What shapes the plan:",
    factors: [
      "Fitzpatrick type and your pigmentation history",
      "The concern, and the least depth likely to move it",
      "Barrier condition and any current irritation",
      "Whether a series of lighter treatments beats one deeper one",
      "How much recovery you can genuinely accommodate",
      "The home care and sun protection that will support it",
    ],
    closing:
      "For many concerns a series of gentler peels does more than one aggressive treatment and risks less. Pricing is discussed at your assessment and never published as a package.",
  },

  whatToExpect: [
    { label: "Before", body: "Your routine is reviewed and certain actives are paused beforehand — including prescription topicals, on instructions given for your specific peel. You will be asked to avoid sun in the run-up, and to arrive with clean skin." },
    { label: "Treatment", body: "The solution is applied and watched closely while it works, then managed according to the peel being used. Warmth, tingling or mild stinging during application is usual, and a lighter peel is generally a short appointment." },
    { label: "The following days", body: "What happens next depends entirely on depth — from mild dryness and light flaking after a superficial peel, to more visible peeling and a longer recovery with deeper treatments. You will be told which of those to expect before you agree to it." },
    { label: "Aftercare", body: "Gentle, simple care while the barrier rebuilds, and no picking or pulling at skin that is lifting. Prescription actives are restarted only when instructed, once the skin has genuinely recovered." },
    { label: "Sun", body: "Freshly resurfaced skin is more vulnerable, and sun exposure during recovery is the most reliable way to undo the result or provoke pigment. Daily broad-spectrum sunscreen, reapplied, is part of the treatment rather than advice attached to it." },
    { label: "Results", body: "Some freshness shows once the skin settles, and for most concerns the meaningful change accumulates over a series rather than arriving after one appointment." },
  ],

  safety: {
    eyebrow: "Safety & Candidacy",
    headline: <>What to know <em>first.</em></>,
    intro:
      "A peel is a controlled injury to your skin, which is exactly why it works and exactly why selection matters. Most reactions are expected and short-lived, but the treatment is not appropriate for everyone or at every moment. Your skin and history are reviewed before anything is chosen.",
    items: [
      { name: "Not during pregnancy", note: "AVEN does not perform chemical peels during pregnancy, whichever agent is involved. This is not a case-by-case judgment here — if you are pregnant or think you might be, tell us and the treatment waits." },
      { name: "Breastfeeding and elective treatment", note: "AVEN does not perform elective aesthetic treatment while breastfeeding either. Tell us so it can be discussed rather than discovered." },
      { name: "Pigmentation risk", note: "Any inflammation can be followed by post-inflammatory hyperpigmentation — darkening that appears after the skin has healed. Deeper skin tones are at greater risk of it, which does not mean peels are unsuitable for deeper skin: it means the peel is chosen more cautiously, the preparation and aftercare matter more, and sun protection is non-negotiable." },
      { name: "What is expected afterwards", note: "Redness, tightness, dryness and flaking or peeling are the normal course, scaled to depth. Skin will look worse before it looks better with anything beyond a superficial peel, and that is the treatment working rather than going wrong." },
      { name: "When treatment waits", note: "Active infection at the site, a cold sore, open or broken skin, significant irritation, sunburn or a recently compromised barrier all mean postponing. None of these is a refusal — they are a date." },
      { name: "Prescription topicals", note: "Retinoids such as tretinoin are generally paused for around two weeks before a peel and restarted roughly two to four weeks afterwards, depending on the peel's depth and how your barrier has recovered. Those timings are guidance for the peel you are having — follow the instructions given to you, and do not change how you take a prescription without speaking to the clinician who prescribed it." },
      { name: "Isotretinoin", note: "Tell us if you take it now or have recently. Professional consensus has found insufficient evidence to justify routinely delaying superficial chemical peels for current or recent isotretinoin, but that does not extend to deeper peels, and it does not make any peel automatically appropriate. It is assessed for your skin and the depth being considered rather than settled by a rule." },
      { name: "Your history matters", note: "Tell us about a tendency to scar abnormally, cold sores, recent procedures, and any medical condition or medication affecting healing. Much of what makes a peel unwise is invisible on the surface." },
      { name: "If something worries you", note: "Contact AVEN about spreading redness, a sore that is not settling, unusual pain, blistering or signs of infection. Most recoveries are uneventful; we would still rather hear from you early." },
    ],
    closing:
      "None of this is meant to alarm you. It is what a reasonable person would want to know before deliberately injuring their skin for a reason.",
  },

  faqs: [
    { q: "How do you choose which peel I get?", a: "From your skin rather than from a menu. Fitzpatrick type and your actual pigmentation history, the state of your barrier, what you are already using, and the concern being treated all narrow it — and the aim is the least depth that will genuinely move the concern rather than the strongest you would tolerate." },
    { q: "Are peels appropriate for deeper skin tones?", a: "Yes, with care. The relevant fact is that inflammation can be followed by post-inflammatory hyperpigmentation, and deeper skin tones carry more of that risk. That changes how a peel is selected, prepared for and followed up — a cautious approach, attentive aftercare and strict sun protection — rather than ruling the treatment out." },
    { q: "I use tretinoin. What happens?", a: "It is generally paused for around two weeks before a peel and restarted roughly two to four weeks afterwards, depending on the depth of the peel and how well your barrier has recovered. You will be given instructions for your specific peel — and you should not change how you take a prescription without speaking to whoever prescribed it." },
    { q: "Can I have a peel while pregnant?", a: "No. AVEN does not perform chemical peels during pregnancy, regardless of which agent would be used. If you are pregnant or think you might be, tell us and we will plan around it." },
    { q: "How much peeling should I expect?", a: "It depends entirely on depth. A superficial peel may cause only mild dryness and light flaking; deeper treatments involve visible peeling and a longer recovery. You will be told which to expect before you agree to the treatment, not afterwards." },
    { q: "Why does sun protection matter so much afterwards?", a: "Freshly resurfaced skin is more vulnerable, and sun exposure during recovery is the most reliable way to lose the result or provoke pigment — the exact problem many people came in to treat. Daily broad-spectrum sunscreen, reapplied, is part of the treatment." },
    { q: "Will one peel be enough?", a: "Sometimes, for surface dullness or texture. More often a series of gentler peels achieves more than a single aggressive one and asks less of your skin. The number is planned at your assessment and never sold as a package." },
    { q: "Can a peel treat my acne scars?", a: "Peels work at the surface, so they can help tone and superficial texture. Depressed acne scarring is a structural problem and usually better addressed by microneedling, and active acne is generally controlled first. You will get an honest answer about which of those you are actually dealing with." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  related: [
    { label: "SkinPen Microneedling in Orland Park", path: "/skinpen-microneedling-orland-park" },
    { label: "Skin Rejuvenation in Orland Park", path: "/skin-rejuvenation-orland-park" },
    { label: "Medical-Grade Skincare in Orland Park", path: "/medical-grade-skincare-orland-park" },
    { label: "Acne Treatment in Orland Park", path: "/acne-treatment-orland-park" },
  ],

  finalCta: {
    headline: <>The right peel for your <em>skin.</em></>,
    copy: "Begin with an AVEN Assessment for a peel chosen around your skin type, your pigmentation history and what you can realistically recover from.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default chemicalPeels;
