/* AVEN MED — Provider: Alaa Mashal, MSN, APRN, FNP-BC. Registry data module (provider type).
 *
 * Only established facts are used (name, MSN / APRN / FNP-BC — board-certified Family Nurse
 * Practitioner, founder & clinical director, AVEN's only injector, she/her, and
 * the practice's actual service areas). Education, licensure specifics, additional
 * certifications, memberships, languages, and years of experience are NOT invented
 * — they are flagged via credentials.note and left for the owner to provide. */
import React from 'react';

const alaaMashal = {
  slug: "providers/alaa-mashal",
  priority: 0.9,
  changefreq: "monthly",
  seo: {
    title: "Meet Alaa Mashal, MSN, APRN, FNP-BC — Founder of AVEN MED",
    description: "Meet Alaa Mashal, MSN, APRN, FNP-BC — founder and clinical director of AVEN MED in Orland Park, IL. Honest, continuous, patient-centered care across aesthetics, wellness, and family medicine.",
  },
  tags: ["provider", "founder"],
  hub: { order: 10, blurb: "Founder and clinical director of AVEN MED — board-certified Family Nurse Practitioner." },
  serviceName: "Alaa Mashal, MSN, APRN, FNP-BC",
  serviceShort: "Alaa Mashal",
  breadcrumbName: "Alaa Mashal, MSN, APRN, FNP-BC",
  personName: "Alaa Mashal, MSN, APRN, FNP-BC",
  jobTitle: "Founder & Clinical Director, AVEN MED",
  faqHeading: "Getting to know Alaa.",

  portrait: {
    label: "Alaa Mashal, MSN, APRN, FNP-BC · portrait",
    meta: "natural light · 4:5 · placeholder",
    aspect: "4/5",
    video: "assets/alaa-2.mp4",
  },

  hero: {
    eyebrow: "Meet Your Provider",
    headline: <>Alaa Mashal, <em>MSN, APRN, FNP-BC.</em></>,
    role: "Founder & Clinical Director",
    subheadline:
      "Board-certified Family Nurse Practitioner and founder of AVEN MED — the person who will listen to you, plan with you, and care for you at every visit.",
  },

  welcome: {
    eyebrow: "A Welcome",
    headline: <>You'll be cared for by one <em>practitioner.</em></>,
    body: [
      "AVEN MED was founded and is led by Alaa Mashal, MSN, APRN, FNP-BC, a board-certified Family Nurse Practitioner. At AVEN, the person who assesses you is the person who cares for you — there's no handoff, no rotating faces, and no losing your history between visits.",
      "That continuity is deliberate. It means your care builds over time, your provider knows your file, and every conversation picks up where the last one left off. It's the quiet advantage behind everything else AVEN does.",
    ],
  },

  philosophy: {
    eyebrow: "Professional Philosophy",
    headline: <>Restraint, and the long <em>view.</em></>,
    body: [
      "Alaa's practice is built around restraint and the long view of patient care — doing what's genuinely right for you rather than what's easiest to sell. In aesthetics, that means natural-looking results and conservative planning. In wellness and family medicine, it means honest, evidence-based guidance.",
      "The through-line is trust. Care should feel like a relationship with someone who listens carefully, explains clearly, and tells you the truth — including when the answer is to wait, to do less, or to see someone else.",
    ],
    note: "The goal is always that you look and feel like yourself — cared for, never overdone.",
  },

  focus: {
    eyebrow: "Areas of Focus",
    headline: <>Where Alaa's care is <em>concentrated.</em></>,
    intro:
      "As AVEN's clinical director, Alaa's work spans the full practice. Her areas of focus include:",
    items: [
      { name: "Injectable Aesthetics", note: "Neuromodulators, dermal fillers, and biostimulators — placed conservatively and mapped to your anatomy." },
      { name: "Facial Balancing", note: "A considered, whole-face approach that prioritizes proportion over volume." },
      { name: "Skin Health", note: "Microneedling, peels, and medical-grade skincare within a longer-term plan." },
      { name: "Medical Weight Loss", note: "Physician-directed, whole-person weight and metabolic care." },
      { name: "Preventive Wellness", note: "Proactive, prevention-first guidance and lab interpretation." },
      { name: "Family Medicine", note: "Relationship-based primary care for adults and families." },
    ],
  },

  credentials: {
    eyebrow: "Credentials",
    headline: <>Qualifications & <em>training.</em></>,
    items: [
      { name: "Education & Certification", note: "Master of Science in Nursing (MSN); Advanced Practice Registered Nurse (APRN); board-certified Family Nurse Practitioner (FNP-BC)." },
      { name: "Role at AVEN", note: "Founder and clinical director; AVEN's only injector." },
    ],
    note: "Full details of Alaa's education, licensure, and additional certifications are being finalized and will be published here soon — and you're always welcome to ask about them at your visit.",
  },

  consultationApproach: {
    eyebrow: "Consultation Philosophy",
    headline: <>Every relationship begins with an <em>Assessment.</em></>,
    body: [
      "Alaa doesn't recommend treatments before understanding you. Every patient relationship at AVEN begins with the AVEN Assessment — a real conversation about your history, goals, and options before anything is decided.",
      "It's consultation-first by design. You'll be educated, not sold to; you'll make decisions together with your provider; and you'll never be pressured to move faster than you're comfortable with. A plan you understand is worth far more than a quick yes.",
    ],
  },

  whatToExpect: {
    eyebrow: "What Patients Can Expect",
    headline: <>How it feels to be <em>cared for here.</em></>,
    intro: "Whatever brings you in, you can expect care that feels like this:",
    items: [
      { name: "To Be Heard", note: "Unhurried time and genuine listening before any recommendation." },
      { name: "Honesty", note: "Straight answers about what will help, what won't, and what can wait." },
      { name: "Continuity", note: "The same provider who knows your history, visit after visit." },
      { name: "No Pressure", note: "Space to ask questions, think it over, and decide in your own time." },
      { name: "Natural Results", note: "An aesthetic philosophy of restraint — like yourself, only rested." },
      { name: "Coordinated Care", note: "A provider who helps connect the dots and refers when it serves you." },
    ],
  },

  personalApproach: {
    eyebrow: "A Personal Approach",
    headline: <>Care that treats you as a <em>person.</em></>,
    body: [
      "Behind the clinical work is a simple belief: patients do best when they're treated as people, not cases or transactions. That shapes the small things — the unhurried pace, the plain-language explanations, the willingness to say 'let's wait' — as much as the big ones.",
      "It's why AVEN keeps its panel personal and its pace calm. Care that's rushed or impersonal rarely serves anyone well; care that's attentive and continuous tends to serve everyone better.",
    ],
  },

  whyAven: {
    eyebrow: "Why AVEN",
    headline: <>Why AVEN was <em>created.</em></>,
    body: [
      "AVEN MED was created to be the kind of practice patients actually want: attentive, honest, and continuous, across aesthetics, wellness, and family medicine under one roof. Somewhere you're known — not processed.",
      "The idea was to bring the restraint and care of thoughtful medicine to every part of the experience, from an aesthetic consultation to a primary-care visit, and to hold it all together with one trusted provider and one consistent standard.",
    ],
  },

  crossLinksIntro: "Explore the care Alaa leads — every path begins with an Assessment:",
  crossLinks: [
    { label: "About AVEN", path: "/about", note: "The practice, its story, and the philosophy behind the care." },
    { label: "The AVEN Assessment", path: "/assessment/the-aven-assessment", note: "Where every plan begins — a consultation-first evaluation." },
    { label: "Aesthetics", path: "/aesthetics", note: "Considered, natural-looking aesthetic treatments." },
    { label: "Wellness", path: "/wellness", note: "Prevention-first wellness and metabolic care." },
    { label: "Family Medicine", path: "/family-medicine", note: "Relationship-based primary care for adults and families." },
  ],

  faqs: [
    { q: "Who will I see at AVEN MED?", a: "You'll see Alaa Mashal, MSN, APRN, FNP-BC — the founder and clinical director. AVEN is built around continuity, so the person who assesses you is the person who cares for you at every visit." },
    { q: "What are Alaa's credentials?", a: "Alaa Mashal is a Master of Science in Nursing (MSN), an Advanced Practice Registered Nurse (APRN), and a board-certified Family Nurse Practitioner (FNP-BC). She is the founder and clinical director of AVEN MED. You're always welcome to ask more at your visit." },
    { q: "Does Alaa perform all treatments personally?", a: "Alaa is AVEN's only injector, and she leads care across the practice. Continuity with one trusted provider is central to how AVEN works." },
    { q: "What is Alaa's approach to aesthetics?", a: "Restraint and natural-looking results. The philosophy is conservative planning and facial balance over volume — the aim is that you look like yourself, rested, never overdone." },
    { q: "Do I have to commit to treatment to meet Alaa?", a: "No. Every relationship begins with the AVEN Assessment — a consultation-first visit with no pressure to proceed. You're welcome to meet, ask questions, and decide in your own time." },
    { q: "Does Alaa provide primary care as well as aesthetics?", a: "Yes. As a Family Nurse Practitioner, Alaa's focus spans aesthetics, wellness, and family medicine, so your care can be coordinated under one trusted provider." },
    { q: "Do you see patients from outside Orland Park?", a: "Yes. AVEN MED welcomes patients from Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, New Lenox, and across the Southwest suburbs." },
  ],

  finalCta: {
    headline: <>Meet <em>Alaa.</em></>,
    copy: "Begin with an AVEN Assessment — a calm, honest first conversation with the practitioner who will care for you.",
  },

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

export default alaaMashal;
