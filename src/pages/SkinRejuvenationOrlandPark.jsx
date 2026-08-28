/* AVEN MED — Skin Rejuvenation in Orland Park. Data module for the registry.
 *
 * Treatment Page v2 (Wave 4). This page is a PATHWAY, not a procedure. "Skin
 * rejuvenation" is not one modality at AVEN and this page must never imply it is.
 *
 * ⚠️ RF / LASER / ENERGY: none is referenced, offered or hinted at. AVEN owns no
 * radiofrequency, laser, IPL or other energy device — Wave 0 removed the last of
 * that language site-wide and it stays removed. Audited: the legacy version of this
 * page was already free of it, and nothing was reintroduced here.
 *
 * Because no single procedure owns this page, there is deliberately NO invented
 * biological mechanism. "How It Works" explains the planning logic — how a pathway
 * is chosen and sequenced — rather than pretending rejuvenation has a device
 * mechanism of its own. Collagen, resurfacing and cell-turnover language is left to
 * the pages that actually own those mechanisms.
 *
 * Safety here is deliberately LIGHT and routing-oriented: the real contraindications
 * belong to the constituent treatments, each of which has its own v2 page, and
 * duplicating them here would go stale the moment one of those pages changed.
 *
 * Every treatment named is a service AVEN currently offers and is linked to its own
 * page. No forthcoming service, no device AVEN does not own, no upsell grid. */
import React from 'react';

const skinRejuvenation = {
  slug: "skin-rejuvenation-orland-park",
  priority: 0.9,
  seo: {
    title: "Skin Rejuvenation in Orland Park, IL | AVEN MED",
    description:
      "Skin rejuvenation in Orland Park, IL — not one treatment but a sequenced plan built for your skin by Alaa Mashal, MSN, APRN, FNP-BC. Assessment first.",
  },
  tags: ["skin", "texture", "tone", "aging", "collagen"],
  relatedConcerns: ["concerns/sun-damage", "concerns/uneven-skin-tone", "concerns/fine-lines-and-wrinkles"],
  treatmentName: "Skin Rejuvenation",
  treatmentShort: "Skin Rejuvenation",
  breadcrumbName: "Skin Rejuvenation in Orland Park",
  procedureName: "Skin Rejuvenation — Individualized Skin Treatment Planning",
  procedureDescription:
    "Skin rejuvenation planning in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC — an individualized pathway sequencing AVEN's existing skin treatments and home care, following an assessment.",

  editorial: true,
  sectionOrder: [
    "hero", "whyAven", "approach", "provider", "assessment", "treats",
    "howItWorks", "comparison", "treatmentPlanning", "whatToExpect", "safety",
    "faq", "related", "relatedConcerns", "bridal", "finalCta",
  ],

  hero: {
    eyebrow: "Skin · Rejuvenation",
    headline: <>Skin Rejuvenation in <em>Orland Park.</em></>,
    subheadline:
      "Not a treatment — a decision about which treatment. This is the page for people who know their skin isn't what it was and have no idea where to start.",
  },

  whyAven: {
    headline: <>A word that means whatever the clinic <em>sells.</em></>,
    intro:
      "'Skin rejuvenation' is a category, not a procedure, and in most places it quietly means whichever machine the clinic has bought. That is worth naming, because it explains why the same phrase gets you completely different treatments in two clinics on the same street.",
    body:
      "At AVEN it means the opposite: no treatment is decided before the skin is looked at, and the honest answer is often simpler and cheaper than expected. Frequently the first recommendation is not a procedure at all — it is fixing a routine, or protecting the skin properly, and reassessing once that has had time to work.",
    practitionerLine:
      "Your care is led by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner — from assessment through every step.",
  },

  approach: {
    eyebrow: "How the Plan Is Made",
    headline: <>Why two people get different <em>plans.</em></>,
    body: [
      "The starting point is what is actually bothering you, in your words, because 'my skin looks tired' can mean texture, tone, laxity or simply dehydration, and those go in different directions. Alaa separates them: what is surface, what is structural, what is pigment, and what is really just a barrier that has been stripped by a routine doing too much.",
      "Then what your skin will tolerate and when. Reactive skin, a compromised barrier, a summer of sun exposure ahead, or a routine already causing irritation all change the order of things — sometimes for months. Sequencing is most of the skill here: the same two treatments in the wrong order can undo each other.",
      "And what you will realistically keep doing. A plan built around daily steps you will abandon in three weeks is not a plan. Two people with similar skin often leave with different pathways for exactly that reason.",
    ],
    considers: [
      "What is actually bothering you, in your own description",
      "Whether the change is surface, structural, pigment or barrier",
      "How reactive your skin is and what it will tolerate now",
      "Your current routine, and whether it is helping or irritating",
      "Sun exposure ahead, and the season the plan starts in",
      "What you will realistically sustain day to day",
    ],
    closing:
      "The order matters as much as the choice. Doing the right things in the wrong sequence is one of the commonest ways skin plans fail.",
  },

  provider: {
    eyebrow: "Who Treats You",
    headline: <>One practitioner, every <em>visit.</em></>,
    body: [
      "AVEN MED is founded and led by Alaa Mashal, MSN, APRN, FNP-BC — Founder & Clinical Director and a board-certified Family Nurse Practitioner. She assesses your skin, builds the plan, and adjusts it as your skin answers.",
      "A pathway only works if someone is holding the whole arc — what has been tried, what your skin did with it, and what should come next. That is the actual product on this page: continuity of judgment rather than any single appointment.",
    ],
  },

  assessmentIntro: {
    headline: <>The plan starts <em>here.</em></>,
    body:
      "This page cannot tell you what your skin needs, which is rather the point — the assessment is the treatment plan. An Aura skin analysis is part of every AVEN Assessment and adds to the picture of your skin, but it does not diagnose anything or choose your pathway; that is Alaa's examination and your history. The fee is credited toward your treatment.",
  },
  assessmentTiers: {
    quickExtras: ["A clear first recommendation and where to start"],
    comprehensiveExtras: ["Full skin analysis and history review", "A sequenced plan you keep, with the home care that supports it"],
  },

  treats: {
    intro:
      "A rejuvenation plan is built around what your skin actually needs rather than a fixed list. Over time, a considered plan may help with:",
    items: [
      { name: "Overall Skin Quality", note: "Skin that behaves better, not just looks better in one photograph." },
      { name: "Texture", note: "Roughness and unevenness, addressed at the level they actually sit." },
      { name: "Tone and Clarity", note: "More even tone, where the cause has been correctly identified." },
      { name: "Early Signs of Aging", note: "Fine surface lines and early change, approached gradually." },
      { name: "Congestion", note: "Clearer skin where buildup and routine are contributing." },
      { name: "Holding Your Results", note: "Maintaining progress rather than repeating the same first step." },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: <>How a pathway gets <em>chosen.</em></>,
    body: [
      "There is no single mechanism to describe here, and any page claiming otherwise is describing a machine rather than a plan. What this page can honestly explain is the reasoning — because that is what you are actually getting.",
      "The concern is first sorted by where it lives. Something sitting in the surface of the skin is addressed at the surface; something structural, like depressed scarring or texture with depth to it, needs a treatment that works within the skin; pigment is its own problem with its own risks; and a great deal of what looks like ageing is a barrier that has been over-treated and needs less rather than more. Each of those points somewhere different, and getting the category wrong is how people end up paying for treatments that were never going to help.",
      "Then it is sequenced. Treatments that ask the skin to recover are spaced rather than stacked, the daily routine is fixed early because it determines what everything else can build on, and the plan is revisited once the skin has had time to answer. Nothing here happens in one appointment, and the pathway is expected to change as your skin does.",
    ],
  },

  comparison: {
    eyebrow: "The Building Blocks",
    headline: "What a plan is actually built from.",
    intro:
      "These are the AVEN treatments a rejuvenation plan draws on. Not everyone needs all of them, most people need fewer than they expect, and each has its own page with its own candidacy and risks.",
    items: [
      { name: "Microneedling", note: "Works within the skin to prompt collagen over a series — suited to depressed acne scarring and structural texture. Has its own device-specific screening.", path: "/skinpen-microneedling-orland-park" },
      { name: "Chemical Peels", note: "Work at the surface, removing the outer layer so it renews — suited to tone, dullness and surface texture, with depth chosen for your skin.", path: "/chemical-peels-orland-park" },
      { name: "Daily Skincare", note: "The part that runs every day between appointments, and usually the part that decides whether anything else holds.", path: "/medical-grade-skincare-orland-park" },
    ],
    closing: "Facials sit alongside these as supportive maintenance rather than as a treatment for change. Where a biostimulator or injectable is genuinely relevant to your face, that is a separate conversation, not a default addition.",
  },

  treatmentPlanning: {
    eyebrow: "The Pathway",
    headline: <>Where it usually <em>starts.</em></>,
    intro:
      "Most plans follow a recognisable shape, though yours is set at your assessment rather than from this list:",
    factors: [
      "Settle the basics first — barrier, daily protection, and a routine that is not causing irritation",
      "Treat the category the concern actually belongs to, rather than the most impressive option",
      "Space treatments that ask the skin to recover, rather than stacking them",
      "Reassess once the skin has had genuine time to answer, not after a fortnight",
      "Add a second treatment only if the first has done what it can",
      "Move to maintenance once you are where you wanted to be",
    ],
    closing:
      "Stopping because your skin has got where it needed to go is a successful outcome, not an abandoned plan. Pricing for any treatment is discussed at your assessment and never sold as a bundle.",
  },

  whatToExpect: [
    { label: "The assessment", body: "A conversation about what is bothering you and an examination of your skin, ending with an honest first recommendation — which is sometimes a procedure and quite often is not." },
    { label: "The first phase", body: "Frequently daily care and protection rather than an appointment, particularly where the barrier is irritated. It is unglamorous and it decides how well everything after it works." },
    { label: "Treatments, if needed", body: "Each has its own preparation, experience and recovery, described on its own page. They are spaced rather than combined so each can be judged on its own." },
    { label: "Reassessment", body: "Skin answers slowly. Plans are reviewed after enough time to see a real response, and changed when the answer is that something is not working." },
    { label: "Maintenance", body: "Holding a result is a different and lighter phase than reaching one. Most people spend far longer here than in active treatment." },
  ],

  safety: {
    eyebrow: "Candidacy",
    headline: <>What this page can and cannot <em>tell you.</em></>,
    intro:
      "This is a planning page rather than a procedure, so it carries no risks of its own. What matters is that each treatment a plan might include has genuine candidacy requirements — and those live with the treatments themselves rather than being summarised here, where they would quietly go out of date.",
    items: [
      { name: "Candidacy belongs to the treatment", note: "Microneedling has device-specific contraindications, peels have their own restrictions including pregnancy, and prescription-strength skincare needs its own evaluation. Each is assessed on its own terms when it is actually being proposed for you." },
      { name: "Timing is part of safety", note: "Active irritation, a compromised barrier, sunburn, an active infection or a course of sun ahead all change what is appropriate now. Waiting is frequently the correct clinical answer rather than a delay." },
      { name: "Pregnancy and breastfeeding", note: "AVEN does not perform elective aesthetic treatment during pregnancy or while breastfeeding, and chemical peels specifically are not performed in pregnancy. Tell us, and the plan is built around it." },
      { name: "Tell us what you're using", note: "Prescription topicals, actives and recent treatments elsewhere all affect what can be done and when. Most of what makes a plan unsafe is in the history rather than on the surface." },
      { name: "Less is a real recommendation", note: "Where skin is already irritated by a routine doing too much, the honest plan is to remove things and reassess. Being told to do less is not being told nothing is available." },
    ],
    closing:
      "Nothing on this page is a treatment you can book. It is how AVEN decides which treatment, in which order — and the specifics come from the assessment.",
  },

  faqs: [
    { q: "What does AVEN actually mean by skin rejuvenation?", a: "A plan rather than a procedure. Elsewhere the phrase usually means whichever device the clinic owns; here it means the treatments and daily care that suit your skin, chosen and sequenced after an assessment. There is no 'skin rejuvenation' appointment to book." },
    { q: "Where do most people start?", a: "More often with daily care than with a procedure — particularly where the barrier is irritated or protection has been inconsistent. It is the least exciting recommendation and frequently the one that changes the most, because it determines what any treatment afterwards can build on." },
    { q: "Why would two people with similar skin get different plans?", a: "Because the concern may sit at different levels, the skin may tolerate different things, the season and sun exposure ahead differ, and what each person will realistically keep doing differs. Sequencing is most of the skill, and it is individual." },
    { q: "Do I need microneedling, a peel, or both?", a: "It depends on where the concern actually lives — surface, structural, or pigment. Peels work at the surface; microneedling works within the skin. Where both suit your skin they are sequenced rather than combined, and plenty of people need neither." },
    { q: "Will I be sold a package?", a: "No. Plans are built in phases and reassessed as your skin responds, and stopping because you have got where you wanted is a good outcome. Pricing for any individual treatment is discussed at your assessment." },
    { q: "How long before I see anything?", a: "Skin answers slowly, and honest plans are reviewed after enough time to see a real response rather than after a fortnight. Anything promising a transformation on a fixed schedule is describing a sale rather than a treatment." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  related: [
    { label: "SkinPen Microneedling in Orland Park", path: "/skinpen-microneedling-orland-park" },
    { label: "Chemical Peels in Orland Park", path: "/chemical-peels-orland-park" },
    { label: "Medical-Grade Skincare in Orland Park", path: "/medical-grade-skincare-orland-park" },
    { label: "Facials in Orland Park", path: "/facials-orland-park" },
  ],

  finalCta: {
    headline: <>Start with the <em>plan.</em></>,
    copy: "Begin with an AVEN Assessment for an honest first recommendation — including, quite often, that you need less than you expected.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default skinRejuvenation;
