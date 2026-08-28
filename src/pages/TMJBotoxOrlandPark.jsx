/* AVEN MED — TMJ Botox in Orland Park. Data module for the content registry.
 *
 * Treatment Page v2 (neuromodulator family, Wave 1). The most compliance-sensitive
 * page in the family. Framed as symptom-directed, appropriate only for selected
 * patients after individualized assessment, muscle-targeted rather than joint-
 * targeted, and explicitly not a substitute for dental evaluation.
 *
 * CLINICAL SOURCING. Two source classes, kept separate:
 *  - OBJECTIVE FACT: contraindications, the neuromuscular-disorder warning, the
 *    pregnancy/lactation position and the boxed warning come from the FDA labeling
 *    for onabotulinumtoxinA (BOTOX Cosmetic §4, §5, §8.1, §8.2 and the boxed
 *    warning; BOTOX §5.5).
 *  - AVEN POLICY: the 18+ minimum, the pregnancy/breastfeeding position, medication
 *    review, the ~14-day follow-up and the dental-coordination boundary are AVEN's
 *    own, already approved.
 * TMJ/TMD is NOT an approved indication for onabotulinumtoxinA. The page therefore
 * never states or implies FDA approval for this use, and equally does not make
 * off-label status a promotional feature — it simply does not claim approval, and
 * says plainly that labeled outcome data for this use does not exist.
 *
 * The previous version carried a FAQ "Is it safe?" answered in reassurance terms.
 * That framing is removed: risk now lives in Safety & Candidacy, where it can be
 * stated properly rather than resolved in a sentence. */
import React from 'react';

const tmj = {
  slug: "tmj-botox-orland-park",
  priority: 0.9,
  seo: {
    title: "TMJ Botox in Orland Park, IL | AVEN MED",
    description:
      "TMJ-focused Botox in Orland Park, IL — may suit selected patients with clenching-related jaw-muscle tension, after assessment. Alaa Mashal, MSN, APRN, FNP-BC.",
  },
  treatmentName: "TMJ Botox",
  treatmentShort: "TMJ Botox",
  tags: ["injectable", "neuromodulator", "jaw"],
  breadcrumbName: "TMJ Botox in Orland Park",
  procedureName: "TMJ Botox — Neuromodulator for Jaw-Muscle Tension",
  procedureDescription:
    "Neuromodulator treatment of the jaw muscles in Orland Park, IL by Alaa Mashal, MSN, APRN, FNP-BC — may be appropriate for selected patients with clenching-related jaw-muscle tension, following an individualized medical assessment.",

  editorial: true,
  sectionOrder: [
    "hero", "whyAven", "approach", "provider", "assessment", "treats",
    "howItWorks", "comparison", "whatToExpect", "safety", "faq",
    "related", "relatedConcerns", "bridal", "finalCta",
  ],

  hero: {
    eyebrow: "Aesthetics · Neuromodulators",
    headline: <>TMJ Botox in <em>Orland Park.</em></>,
    subheadline:
      "For selected patients whose jaw symptoms are driven by overworked muscle, relaxing that muscle may help. It treats the muscle, not the joint — and it is not right for everyone.",
  },

  whyAven: {
    headline: <>A treatment that has to be <em>earned.</em></>,
    intro:
      "Jaw pain has many causes. Some are muscular, some are joint, some are dental, some are none of those. A neuromodulator only does one thing here — it reduces how hard a muscle pulls — so it can only help the people whose problem is actually that muscle. Offering it to everyone with a sore jaw would be easy and mostly useless.",
    body:
      "So this is not a routine offering at AVEN, and it is not the first thing suggested. You may be told your symptoms do not look muscle-driven, or that a dentist should look before anything is injected, or that treatment is reasonable to try with clearly stated expectations. Saying no, or not yet, is a legitimate outcome of the assessment.",
    practitionerLine:
      "Any treatment is performed by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner — after an individualized assessment.",
  },

  approach: {
    eyebrow: "How the Plan Is Made",
    headline: <>First, whether it is the <em>muscle.</em></>,
    body: [
      "The assessment is mostly about separating causes. Alaa asks where the pain actually sits and when it is worst, whether you wake with it or build it through the day, whether the jaw clicks, locks or limits how wide you can open, and whether the chewing muscles are tender when pressed. Pain that is worst on waking, with tender, hard-working muscles and no joint locking, points somewhere quite different from a jaw that catches mid-movement.",
      "Your dental history matters as much as your medical one — recent dental work, a changed bite, a night guard that helps or doesn't, and what you have already been told by a dentist. Where the picture suggests a joint, bite or dental cause, the honest step is evaluation by the right clinician first, not an injection that will not reach the problem.",
      "Where treatment is reasonable, expectations are set before anything is given: which symptom is being targeted, roughly when a change would be noticeable, and what result would count as it not having worked.",
    ],
    considers: [
      "Whether symptoms appear muscle-driven",
      "Pattern, timing and history of clenching or grinding",
      "Joint signs — clicking, locking, limited opening",
      "Tenderness and bulk of the chewing muscles",
      "Dental history, bite changes and prior TMJ care",
      "Whether referral or shared care fits better",
    ],
    closing:
      "AVEN is a cash-pay practice and does not bill insurance. Where treatment is appropriate, cost is discussed at your assessment before anything is agreed.",
  },

  provider: {
    eyebrow: "Who Treats You",
    headline: <>One practitioner, every <em>visit.</em></>,
    body: [
      "AVEN MED is founded and led by Alaa Mashal, MSN, APRN, FNP-BC — Founder & Clinical Director, a board-certified Family Nurse Practitioner, and the practice's only injector. The person who assesses your symptoms is the person who treats them and the person who judges, months later, whether it actually helped.",
      "She also practises as a Family Nurse Practitioner, which is relevant here in a way it is not for a cosmetic treatment: jaw symptoms sit at the border of dentistry, medicine and muscle, and the right instinct is often to send you to someone else. AVEN works alongside your dentist or physician rather than around them.",
    ],
  },

  assessmentIntro: {
    headline: <>Assessed before anything is <em>offered.</em></>,
    body:
      "Nothing is recommended before an individualized evaluation, because whether this treatment can help you is the entire question. An Aura skin analysis is part of every AVEN Assessment; it is a skin tool and plays no part in evaluating your jaw — that assessment is Alaa's clinical examination and history. The fee is credited toward your treatment.",
  },
  assessmentTiers: {
    quickExtras: ["An initial read on whether symptoms look muscle-driven"],
    comprehensiveExtras: ["Full jaw-muscle and symptom evaluation", "Long-term planning and referral where appropriate"],
  },

  treats: {
    intro:
      "For appropriately selected patients, relaxing overactive jaw-closing muscles may ease symptoms that come from those muscles working too hard. Results vary and treatment is not appropriate for everyone. It may be considered for:",
    items: [
      { name: "Muscle-Related Jaw Tension", note: "Tightness and fatigue in overworked chewing muscles." },
      { name: "Clenching-Related Soreness", note: "Discomfort associated with daytime or night-time clenching." },
      { name: "Grinding Activity", note: "May reduce grinding-related muscle activity in appropriate cases." },
      { name: "Tenderness on Chewing", note: "Soreness in the masseter or temporalis with use." },
      { name: "Alongside Dental Care", note: "Used with a night guard or dental treatment, not instead of it." },
      { name: "Cosmetic Jaw Slimming", note: "If your goal is the shape of the lower face rather than symptoms.", path: "/masseter-botox-orland-park" },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: <>Less force, not a repaired <em>joint.</em></>,
    body: [
      "Clenching and grinding are muscles doing sustained work they were never meant to do — often for hours, often at night. Muscles held under that kind of load become tight, tender and fatigued, much like any overworked muscle, and that muscular strain is a recognisable source of jaw ache, soreness on chewing and tension around the temple and jaw angle.",
      "A neuromodulator temporarily reduces the signal reaching the muscle it is placed in, so the muscle cannot contract as forcefully. The clenching does not stop, but the force behind it drops — and for people whose symptoms come from that force, easing it can ease the symptom.",
      "What it does not do is act on the temporomandibular joint itself. It does not repair a disc, change a bite, correct joint structure or treat arthritis in the joint. Where the problem is inside the joint rather than in the muscles working across it, this treatment is aimed at the wrong tissue — which is precisely why the assessment tries to tell the two apart before anything is offered.",
    ],
  },

  comparison: {
    eyebrow: "Muscle · Joint · Care Team",
    headline: "Where this fits, and where it doesn't.",
    intro:
      "Jaw symptoms are rarely one thing, and this treatment addresses one part of the picture. Knowing which part matters, because it determines whether an injection is a reasonable step or a distraction from the real cause.",
    items: [
      { name: "Muscle-Driven Symptoms", note: "Overworked chewing muscles from clenching or grinding. This is the part a neuromodulator may help, in selected patients, with individual results." },
      { name: "Joint, Bite or Dental Causes", note: "Disc problems, joint disease, bite issues and dental causes are not treated by relaxing a muscle. These need dental or specialist evaluation, and treatment aimed at the actual cause." },
      { name: "Your Care Team", note: "Alaa strongly encourages dental follow-up where appropriate. We are glad to work alongside your dentist or physician — and to refer when someone else should be leading." },
    ],
    closing: "If your symptoms do not look muscle-driven, you will be told that rather than treated anyway.",
  },

  whatToExpect: [
    { label: "Assessment First", body: "We begin by evaluating whether treatment is likely to help you at all, and whether another clinician should look first. Nothing is recommended before that." },
    { label: "Treatment", body: "When appropriate, a neuromodulator is placed into selected jaw-closing muscles with fine needles. It takes a few minutes." },
    { label: "Recovery", body: "Most people return to their day. These are muscles in constant use, so tenderness or a tired feeling on chewing is common in the first days, and bruising is possible. Stay upright for four hours and skip strenuous exercise for the rest of the day." },
    { label: "Onset", body: "Any change is usually noticed over one to two weeks as the muscles respond. The degree of relief varies considerably from patient to patient, and some people notice little." },
    { label: "Follow-Up", body: "We review at around fourteen days against the symptom we set out to change — not against a general sense of improvement. If it did not help, that is useful information and is acted on rather than repeated." },
    { label: "Duration", body: "Effects typically last a few months and are not permanent. This is symptom management while the underlying habit or cause is addressed, not a cure." },
  ],

  safety: {
    eyebrow: "Safety & Candidacy",
    headline: <>What to know <em>first.</em></>,
    intro:
      "This is a prescription medical treatment placed in muscles you use to eat and speak, and it is not appropriate for everyone. Your history is reviewed before anything is recommended. The points below are drawn from the prescribing information for botulinum toxin, together with AVEN's own practice policies.",
    items: [
      { name: "It treats muscle, not the joint", note: "Relaxing overworked chewing muscles does not repair the temporomandibular joint, correct a bite, or treat a dental cause. It is not a cure for TMJ or TMD, and it is not a substitute for dental evaluation." },
      { name: "Relief is not guaranteed", note: "Response varies, and some patients notice little or no change. How much a given person improves is genuinely difficult to predict beforehand, which is why the symptom being targeted and what would count as success are agreed explicitly before treatment rather than afterwards." },
      { name: "Common after treatment", note: "Injection-site reactions — tenderness, redness, swelling or bruising — can occur, and headache is among the most commonly reported effects of botulinum toxin treatment. These are generally temporary." },
      { name: "Effects specific to the jaw", note: "Because working muscles are being relaxed, chewing can feel weaker or tire more easily with firm foods while the effect is present. Placement is kept within the target muscles, which is what protects normal smiling and jaw movement." },
      { name: "When it should not be used", note: "Botulinum toxin is not given to anyone with a known hypersensitivity to a botulinum toxin preparation or to any ingredient in it, or where there is an infection at the intended injection site." },
      { name: "Tell us about", note: "Neuromuscular conditions — including myasthenia gravis and Lambert-Eaton syndrome — and other peripheral motor neuropathic or neuromuscular junction disorders warrant monitoring with botulinum toxin. Bring your medications, supplements and medical history; never stop a prescribed medication for a treatment like this without speaking to the clinician who prescribed it." },
      { name: "Age, pregnancy and breastfeeding", note: "AVEN treats adults 18 and over for injectable treatment, and does not perform elective treatment during pregnancy or while breastfeeding. There are no adequate data on use in pregnancy, and it is not known whether it passes into breast milk." },
      { name: "Keep your dentist involved", note: "Where a dental, bite or structural cause is possible, dental evaluation should happen regardless of whether muscle treatment is used. Muscle treatment can quiet a symptom while the underlying cause continues — which is a reason for coordinated care, not a reason to skip it." },
    ],
    closing:
      "Botulinum toxin products carry a boxed warning that effects can, rarely, spread beyond the injection site, with symptoms such as swallowing or breathing difficulty that can be serious. If you have any difficulty swallowing, speaking or breathing after treatment, seek emergency medical care. For anything else that doesn't seem right, contact AVEN.",
  },

  faqs: [
    { q: "Does this cure TMJ or TMD?", a: "No. It does not treat the joint itself, repair a disc, change a bite or address a dental cause. It reduces how forcefully the chewing muscles contract, which may ease symptoms for people whose problem is that muscular overwork. It is symptom management, not a cure." },
    { q: "Is it right for everyone with jaw pain?", a: "No, and that is the main point of the assessment. Jaw pain has muscular, joint, dental and other causes, and this treatment only reaches one of them. For many people another approach is more appropriate, and you will be told so." },
    { q: "Should I still see my dentist?", a: "Yes. Alaa strongly encourages dental evaluation where appropriate — a bite, joint or dental cause needs the clinician who can actually assess it. Muscle treatment can quiet a symptom while the underlying cause carries on, which is a reason for shared care rather than a reason to skip it." },
    { q: "How will I know whether it worked?", a: "Because we agree beforehand which symptom is being targeted and roughly when a change should show. At the follow-up around two weeks we review against that, rather than a general impression. If it did not help, that is a real answer and we act on it." },
    { q: "Will my chewing be affected?", a: "You are having chewing muscles relaxed, so firm foods can feel like harder work while the effect is present. Placement stays within the target muscles, which is what protects normal jaw movement and smiling." },
    { q: "How long does it last?", a: "Typically a few months, and it is not permanent. Muscle activity returns gradually, and whether to repeat is judged on how much the first course actually helped." },
    { q: "Does insurance cover it?", a: "AVEN MED is a cash-pay practice and does not bill insurance. Cost is discussed at your assessment. We cannot speak to what an individual insurer may or may not do." },
    { q: "How is this different from cosmetic masseter Botox?", a: "The muscle can overlap; the purpose does not. Cosmetic masseter treatment is about the appearance of the lower face and is assessed on anatomy and proportion. This is symptom-directed, assessed on your symptom pattern and history, and often belongs alongside dental care." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  related: [
    { label: "Masseter Botox in Orland Park", path: "/masseter-botox-orland-park" },
    { label: "Botox in Orland Park", path: "/botox-orland-park" },
    { label: "Jawline Fillers in Orland Park", path: "/jawline-fillers-orland-park" },
    { label: "Chin Fillers in Orland Park", path: "/chin-fillers-orland-park" },
  ],

  finalCta: {
    headline: <>Find out if it's right for <em>you.</em></>,
    copy: "Begin with an AVEN Assessment for an individualized evaluation of whether your jaw symptoms look muscle-driven — and whether this treatment is a reasonable step.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default tmj;
