/* AVEN MED — Lip Fillers in Orland Park.
 * Original lip-filler content on the shared TreatmentTemplate. */
import React from 'react';
import TreatmentTemplate from './TreatmentTemplate.jsx';

const lipFillers = {
  slug: "lip-fillers-orland-park",
  treatmentName: "Lip Filler",
  treatmentShort: "Lip Filler",
  breadcrumbName: "Lip Fillers in Orland Park",
  procedureName: "Lip Filler — Hyaluronic Acid Lip Enhancement",
  procedureDescription:
    "Natural-looking hyaluronic acid lip filler in Orland Park, IL by Alaa Mashal, FNP-BC. Enhances lip shape, hydration, symmetry, and proportion while preserving a natural, balanced result.",

  hero: {
    eyebrow: "Aesthetics · Filler & Balancing",
    headline: <>Lip Fillers in <em>Orland Park.</em></>,
    subheadline:
      "Sub-millimeter lip enhancement built around your natural shape — hydration, balance, and proportion, never volume for its own sake.",
  },

  treats: {
    intro:
      "Lip filler at AVEN is a matter of millimeters. Whether you want a barely-there refresh or a fuller, more defined lip, the work begins with your own anatomy — shape, border, symmetry, hydration, and how your lips sit within your face. We enhance proportion; we never chase volume. Both a subtle first-timer's hydration and a fuller, sculpted result are possible — the plan is written to your goal, not a menu.",
    items: [
      { name: "Hydration & Texture", note: "Soft hyaluronic hydration for smoother, healthier-looking lips." },
      { name: "Volume & Fullness", note: "Restoring or adding fullness in careful, balanced increments." },
      { name: "Shape & Definition", note: "Refining the border and cupid's bow for a defined, natural edge." },
      { name: "Symmetry", note: "Balancing an uneven upper or lower lip." },
      { name: "Upper-to-Lower Proportion", note: "Correcting the ratio between the lips for harmony." },
      { name: "Vertical Lip Lines", note: "Softening the fine lines that form around the mouth over time." },
      { name: "Downturned Corners", note: "Subtle support for the oral commissures." },
      { name: "Age-Related Thinning", note: "Gently restoring lips that have lost volume over the years." },
      { name: "Philtrum & Cupid's Bow", note: "Defining the central architecture of the upper lip." },
      { name: "A Natural First Step", note: "A conservative, understated enhancement for first-timers." },
    ],
  },

  comparison: {
    eyebrow: "Lip Filler · Lip Flip",
    headline: "Two ways to enhance a lip.",
    intro:
      "Lip filler and a lip flip create different effects through entirely different mechanisms. Neither is better — the right choice, or a combination of the two, depends on your natural lip and what you're hoping for. Determining that is exactly what the AVEN Assessment is for.",
    items: [
      { name: "Lip Filler", note: "Hyaluronic acid, placed with precision, adds hydration, subtle volume, structure, and definition. Results last roughly six to twelve months and can be dissolved if ever needed." },
      { name: "Lip Flip", note: "A few units of neuromodulator relax the upper lip border so it rolls gently outward — showing a little more lip when you smile. No volume is added; it lasts about two to three months." },
      { name: "Filler + Flip", note: "For some lips, a small amount of filler paired with a flip gives the most balanced result. When that's the right approach we'll say so — and when it isn't, we'll say that too." },
    ],
    closing: "We recommend the least you need to reach your goal — never the most we could do.",
  },

  whatToExpect: [
    { label: "Treatment", body: "After a topical numbing cream, the filler is placed with a fine needle or a blunt cannula over fifteen to thirty minutes. Most patients feel mild pressure rather than pain." },
    { label: "Recovery & Swelling", body: "Lips are expressive and vascular, so some swelling — and occasional bruising — is normal for the first two to three days, often most noticeable the next morning. It settles quickly." },
    { label: "Results & Longevity", body: "You'll see shape immediately; the true, settled result appears at about two weeks once swelling resolves. Hyaluronic lip filler typically lasts six to twelve months." },
    { label: "Maintenance", body: "We plan touch-ups around your lips, not a calendar. Because the filler is hyaluronic acid, it can be adjusted or dissolved — your result is never permanent or out of your control." },
  ],

  faqs: [
    { q: "Will lip filler look natural?", a: "That is the entire point of our approach. We work in small, balanced increments mapped to your existing lip and face, so the result reads as a softer, more defined version of your own mouth — never as ‘work.’ If a natural result isn't achievable with the amount you're asking for, we'll tell you." },
    { q: "Does lip filler hurt?", a: "Very little. We apply a topical numbing cream first, and many of our fillers contain lidocaine. Most patients describe mild pressure rather than pain, and a cannula technique can further reduce discomfort and bruising." },
    { q: "How much swelling should I expect?", a: "Some swelling is normal and expected for the first two to three days — lips are vascular and expressive. It is often most noticeable the morning after treatment and settles steadily from there. Most patients feel social within a few days." },
    { q: "How long does lip filler last?", a: "Hyaluronic acid lip filler generally lasts six to twelve months, depending on the specific product, the area, and your metabolism. Lips tend to metabolize filler a little faster than some other areas of the face." },
    { q: "Can lip filler be dissolved or reversed?", a: "Yes. Hyaluronic acid filler can be dissolved with an enzyme called hyaluronidase if you ever want to reverse or adjust your result. This reversibility is one reason we and many patients prefer it — your lips are never out of your control." },
    { q: "What is the difference between lip filler and a lip flip?", a: "Lip filler adds hydration and volume with hyaluronic acid and lasts six to twelve months. A lip flip uses a few units of neuromodulator to gently roll the upper lip outward, adding no volume, and lasts two to three months. Sometimes the two are combined — your assessment determines which suits you." },
    { q: "Will my lips look overfilled or ‘duck-like’?", a: "Not at AVEN. Our philosophy is conservative and proportion-first — we treat lips as one part of a balanced face, not in isolation. We would rather do too little and build slowly than overfill. Many lips need only a fraction of a syringe." },
    { q: "How much does lip filler cost in Orland Park?", a: "We do not publish per-syringe pricing, because the right amount only makes sense once your lips have been assessed. Your personalized plan and pricing are quoted at your AVEN Assessment — and the assessment fee is credited toward your treatment." },
    { q: "Can I get just a very subtle enhancement?", a: "Absolutely — subtle is often what we recommend. A small amount of hyaluronic acid can restore hydration and definition without noticeably changing your size. Starting conservatively also lets us refine over time rather than all at once." },
    { q: "When will I see my final result?", a: "You'll see shape right away, but the final, settled result appears at about two weeks, once any swelling has fully resolved. We often re-evaluate at that point to confirm you're exactly where you want to be." },
    { q: "Is there any downtime?", a: "Minimal. Most patients return to normal activities the same day. We ask that you expect some swelling and possible bruising for a few days and avoid strenuous exercise, heat, and alcohol for the first twenty-four hours." },
    { q: "Can lip filler be combined with other treatments?", a: "Yes. Lips are often treated as part of a broader facial-balancing plan — with a lip flip, chin or cheek support, or neuromodulators. Any combination is mapped out and sequenced during your assessment." },
    { q: "I've never had filler before — where do I start?", a: "You start with the AVEN Assessment, and we start small. A conservative first treatment — sometimes just hydration or a lip flip — lets you see how your lips respond before building toward your goal." },
    { q: "Who performs lip filler at AVEN MED?", a: "Every treatment is performed by Alaa Mashal, FNP-BC — the founder and only injector at AVEN MED. You will always be treated by the same practitioner, visit after visit." },
    { q: "Do you treat patients outside of Orland Park?", a: "Yes. AVEN MED welcomes patients from across the Southwest suburbs, including Tinley Park, Frankfort, Mokena, Palos Heights, Homer Glen, and New Lenox." },
  ],

  related: [
    { label: "Botox", path: "/botox-orland-park" },
    { label: "Chin Filler", path: "/aesthetics" },
    { label: "Cheek Filler", path: "/aesthetics" },
    { label: "Jawline Filler", path: "/aesthetics" },
    { label: "Sculptra", path: "/service/sculptra" },
    { label: "SkinPen Microneedling", path: "/service/microneedling" },
  ],

  localAreas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],
};

const LipFillersOrlandPark = ({ navigate }) => <TreatmentTemplate data={lipFillers} navigate={navigate} />;

export default LipFillersOrlandPark;
