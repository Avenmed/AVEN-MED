/* AVEN MED — Medical-Grade Skincare in Orland Park. Data module for the registry.
 *
 * Treatment Page v2 (Wave 4), deliberately LIGHTER than a procedure page. This is a
 * clinically guided home-care pathway, not a treatment, and it does not carry a
 * procedure's safety architecture.
 *
 * ⚠️ CLAIM DISCIPLINE. The legacy version asserted that medical-grade skincare is
 * "formulated with higher, more active concentrations" and uses "higher, more
 * effective concentrations of proven active ingredients". Both are removed. That is
 * an industry marketing claim, "medical-grade" is not a regulated designation, and
 * AVEN cannot support a blanket potency superiority claim across every product on
 * either side of the line. The page now earns trust on selection, appropriateness
 * and follow-up instead.
 *
 * NOT INVENTED: no brand, no product line, no ingredient named as an AVEN
 * prescription or stocked item, no percentage, no step-count protocol. AVEN's actual
 * dispensary is not established in any verified source.
 *
 * AVEN PRACTICE POLICY used here: prescription-strength products require appropriate
 * medical evaluation and counselling; more products are not automatically better;
 * every product should have a job. */
import React from 'react';

const medicalGradeSkincare = {
  slug: "medical-grade-skincare-orland-park",
  priority: 0.9,
  changefreq: "monthly",
  seo: {
    title: "Medical-Grade Skincare in Orland Park, IL | AVEN MED",
    description:
      "Clinically guided skincare in Orland Park, IL — a short routine chosen for your skin by Alaa Mashal, MSN, APRN, FNP-BC, not a shelf of products.",
  },
  tags: ["skin", "skincare", "maintenance"],
  treatmentName: "Medical-Grade Skincare",
  treatmentShort: "Medical-Grade Skincare",
  breadcrumbName: "Medical-Grade Skincare in Orland Park",
  procedureName: "Medical-Grade Skincare — Clinically Guided Home Care",
  procedureDescription:
    "Clinically guided skincare in Orland Park, IL selected by Alaa Mashal, MSN, APRN, FNP-BC — a routine matched to your skin and goals, with prescription-strength products used only after appropriate evaluation.",

  editorial: true,
  sectionOrder: [
    "hero", "whyAven", "approach", "provider", "assessment", "treats",
    "howItWorks", "comparison", "whatToExpect", "safety", "faq",
    "related", "bridal", "finalCta",
  ],

  hero: {
    eyebrow: "Skin · Daily Care",
    headline: <>Medical-Grade Skincare in <em>Orland Park.</em></>,
    subheadline:
      "The part that happens every day without you. Chosen for your skin, kept short enough that you will actually do it, and adjusted when it stops fitting.",
  },

  whyAven: {
    headline: <>Most people are using too <em>much.</em></>,
    intro:
      "The commonest skincare problem walking into a clinic is not a missing product. It is six of them, bought over two years for different reasons, several doing the same job, at least one causing the irritation the others are being used to fix. More steps feel like more care, and for a great many people they are the reason the skin is unhappy.",
    body:
      "So the recommendation here is frequently subtraction. A short routine where each product has a clear job, introduced one thing at a time so it is obvious what helped, and reviewed rather than accumulated. The measure of a good routine is not how advanced it looks — it is whether you are still doing it in six months.",
    practitionerLine:
      "Your routine is selected by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner — as part of your assessment.",
  },

  approach: {
    eyebrow: "How the Plan Is Made",
    headline: <>Fewer products, chosen for a <em>reason.</em></>,
    body: [
      "It starts with everything you are currently using, including the things you have stopped and why. That alone often explains the picture — overlapping actives, a product being blamed for a reaction it did not cause, or a step abandoned before it had time to work.",
      "Then what your skin actually needs versus what it can tolerate, which are not the same question. Reactive or already-irritated skin needs the barrier settled before anything active is introduced, and starting in the right order matters more than the individual products.",
      "And finally what you will realistically keep up. A routine built for someone with fifteen unhurried minutes twice a day is a bad routine for someone who has neither. Where prescription-strength products are appropriate, that requires proper evaluation and counselling first, and it is decided individually.",
    ],
    considers: [
      "Everything you currently use, including what you stopped and why",
      "Whether products are overlapping or working against each other",
      "Barrier condition and how reactive your skin is",
      "What the skin needs versus what it can currently tolerate",
      "The realistic time and effort you will sustain",
      "Whether prescription-strength treatment is clinically indicated",
    ],
    closing:
      "One change at a time, reviewed. Introducing three new products together makes it impossible to know which one worked or which one caused the reaction.",
  },

  provider: {
    eyebrow: "Who Selects It",
    headline: <>Chosen by a <em>clinician.</em></>,
    body: [
      "AVEN MED is founded and led by Alaa Mashal, MSN, APRN, FNP-BC — Founder & Clinical Director and a board-certified Family Nurse Practitioner. Your routine is selected as part of a clinical assessment rather than recommended over a counter.",
      "The practical difference is what happens next: the routine is reviewed alongside whatever else is being done to your skin, adjusted when your skin changes, and where something prescription-strength is genuinely indicated, there is a clinician able to evaluate and counsel you properly for it.",
    ],
  },

  assessmentIntro: {
    headline: <>Selected, not <em>sold.</em></>,
    body:
      "A routine is chosen after your skin has been assessed and your current products reviewed — which is frequently where the actual problem turns up. An Aura skin analysis is part of every AVEN Assessment and adds to the picture, but it does not diagnose anything or select your products; that is Alaa's examination and your history. The fee is credited toward your treatment.",
  },
  assessmentTiers: {
    quickExtras: ["A clear view of what to keep, stop and add"],
    comprehensiveExtras: ["Full skin and routine review", "A written routine you can actually follow"],
  },

  treats: {
    intro:
      "Daily care does the quiet, cumulative work between appointments. A well-chosen routine may help with:",
    items: [
      { name: "Protecting Results", note: "Holding what in-clinic treatment achieved, rather than losing it between visits." },
      { name: "Barrier Recovery", note: "Settling skin that has become irritated, often by doing less rather than more." },
      { name: "Daily Sun Protection", note: "The single most useful habit for tone, pigment and long-term skin quality." },
      { name: "Preparing for Treatment", note: "Skin in good condition tolerates procedures better and recovers more predictably." },
      { name: "Simplifying an Overloaded Routine", note: "Removing overlap so what remains can actually work." },
      { name: "Ongoing Maintenance", note: "The long, undramatic phase where most skin results are kept or lost." },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: <>What 'medical-grade' does and doesn't <em>mean.</em></>,
    body: [
      "It is worth being straight about the term. 'Medical-grade' is a marketing description rather than a regulated category, and it does not by itself guarantee that a product is stronger, better absorbed or more effective than something bought elsewhere. Plenty of over-the-counter products are excellent, and price is a poor guide in either direction.",
      "What genuinely changes outcomes is that the product is chosen for your skin by someone who examined it, introduced in a sensible order, reviewed when it is not working, and — where something prescription-strength is clinically indicated — properly evaluated and counselled for first. That last part is a real distinction, because prescription-strength treatment requires a clinician and is not something to obtain casually.",
      "The rest is consistency. Skincare works cumulatively over weeks and months, and a modest routine followed daily reliably outperforms an ambitious one abandoned in a fortnight. That is the whole reason routines here are kept short.",
    ],
  },

  comparison: {
    eyebrow: "Guided · Guesswork",
    headline: "The difference isn't the bottle.",
    intro:
      "The useful comparison is not between shelves. It is between a routine chosen for your skin and one assembled from recommendations meant for someone else's.",
    items: [
      { name: "Chosen for Your Skin", note: "Selected after an examination, introduced one change at a time, and reviewed. When something does not suit you, it is identified and changed rather than persevered with." },
      { name: "Assembled from Advice", note: "Products bought individually for different reasons, often overlapping, frequently including two doing the same job — and no way to tell which one is causing a problem." },
      { name: "Where Prescription Comes In", note: "Some things genuinely require a clinician's evaluation and counselling. That is a real line, and it is not the same as the marketing one." },
    ],
    closing: "The goal is not the strongest routine or the longest one. It is the shortest routine that does the job and that you will keep.",
  },

  whatToExpect: [
    { label: "The review", body: "Bring what you use, or photographs of it. Reviewing the actual products, including what you stopped and why, is usually more informative than a description of your routine." },
    { label: "What you leave with", body: "Usually a shorter routine than you arrived with, with each product having a stated job and an order to use it in." },
    { label: "Introducing changes", body: "One thing at a time, with a little space between, so it is clear what helped and what did not agree with you." },
    { label: "The first weeks", body: "Some actives cause an adjustment period. Mild, settling dryness can be expected; skin becoming genuinely sore or inflamed is not, and is worth telling us about rather than pushing through." },
    { label: "Review", body: "Routines are revisited as skin and seasons change, and alongside any in-clinic treatment. It is not meant to be a permanent prescription." },
  ],

  safety: {
    eyebrow: "Before You Start",
    headline: <>Worth knowing <em>first.</em></>,
    intro:
      "Skincare is low-risk, and this is not a procedure. A few things genuinely matter, and they are mostly about not making your skin worse while trying to improve it.",
    items: [
      { name: "Prescription-strength products", note: "Where something prescription-strength is clinically indicated, it requires appropriate medical evaluation and counselling first. Do not obtain or share prescription products informally — the evaluation exists for a reason." },
      { name: "Tell us if you're pregnant or breastfeeding", note: "It genuinely changes what is appropriate to use, so raise it before a routine is built rather than after." },
      { name: "Irritation is not progress", note: "A mild adjustment period with some actives is expected. Persistent stinging, rawness or worsening redness is not, and pushing through it usually sets your skin back. Stop and tell us." },
      { name: "One change at a time", note: "Adding several products together makes a reaction impossible to attribute, which is why changes are introduced with space between them." },
      { name: "Sun protection is not optional", note: "It is the step that protects everything else, particularly during any treatment plan and where pigment is a concern." },
      { name: "Around procedures", note: "Certain products are paused before and after treatments such as peels and microneedling, on instructions specific to that treatment. Follow the guidance given to you rather than a general rule." },
    ],
    closing:
      "If something is not agreeing with your skin, contact AVEN rather than working through it. Changing one product is usually all it takes.",
  },

  faqs: [
    { q: "Is medical-grade skincare actually better?", a: "Not automatically, and we would rather say so. 'Medical-grade' is a marketing description rather than a regulated category, and plenty of over-the-counter products are excellent. What reliably changes outcomes is the product being chosen for your skin, introduced sensibly and reviewed — plus proper evaluation where something prescription-strength is involved." },
    { q: "How many products will I need?", a: "Usually fewer than you have. Short routines get followed and long ones get abandoned, and a great deal of skin irritation comes from overlapping products doing the same job. Each thing recommended should have a clear reason for being there." },
    { q: "Do I need a prescription?", a: "Sometimes, sometimes not. Where prescription-strength treatment is clinically indicated it requires proper evaluation and counselling first — which is one of the genuine differences between a clinic and a shop." },
    { q: "My skin is sensitive. Is this for me?", a: "Often especially so, because sensitive skin is frequently sensitised skin — irritated by a routine doing too much. The usual first step there is settling the barrier and removing overlap, before anything active is introduced." },
    { q: "How long before I see a difference?", a: "Skincare works cumulatively over weeks to months, not days. That is also why changes are introduced one at a time: it is the only way to know what actually helped." },
    { q: "Can I keep using my current products?", a: "Often some of them, yes. Bring what you use and it will be reviewed honestly — the goal is the shortest routine that works, not replacing everything you own." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  related: [
    { label: "Skin Rejuvenation in Orland Park", path: "/skin-rejuvenation-orland-park" },
    { label: "Facials in Orland Park", path: "/facials-orland-park" },
    { label: "Chemical Peels in Orland Park", path: "/chemical-peels-orland-park" },
    { label: "Acne Treatment in Orland Park", path: "/acne-treatment-orland-park" },
  ],

  finalCta: {
    headline: <>The routine you'll actually <em>keep.</em></>,
    copy: "Begin with an AVEN Assessment for a routine chosen around your skin — and usually shorter than the one you arrived with.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default medicalGradeSkincare;
