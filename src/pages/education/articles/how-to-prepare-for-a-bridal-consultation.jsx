/* Bridal Education — practical preparation. Assessment facts come from the canonical
 * tier object, never a literal. No instruction to stop any medication. */
import { QUICK_ASSESSMENT, COMPREHENSIVE_ASSESSMENT } from "../../../content/assessment-tiers.js";

export default {
  keyTakeaways: [
    "You do not need to arrive knowing what you want — working that out is the point of the visit.",
    "Bring your date, your current skincare, your medical history and medications, and any past aesthetic treatment.",
    "What does not bother you is as useful to say as what does. It stops a plan widening past your actual goals.",
    "An Aura skin analysis is part of every AVEN Assessment; it adds to the picture and does not diagnose or decide treatment on its own.",
    "Photographs are a communication tool, not a target. Faces differ, and so do outcomes.",
  ],
  body: [
    {
      type: "lede",
      text: "A bridal consultation goes better when you arrive with information rather than a shopping list. You do not need a plan — that is what the visit produces. What helps is being able to answer honestly when someone asks what has changed, what you have tried, and what you actually want.",
    },
    {
      type: "section",
      heading: "Bring the date, and be honest about it",
      body: [
        "Your wedding date is the single most useful piece of context you can offer, because it determines what is realistically available. A longer runway opens up approaches that build gradually. A shorter one narrows the plan toward things that are predictable and familiar.",
        "It is worth saying if the date is fixed, if travel or a second event sits near it, or if there is a photography day before the wedding itself. Those details change sequencing in ways that are not obvious from the date alone.",
      ],
    },
    {
      type: "section",
      heading: "What to bring, practically",
      body: [
        "None of this needs to be formal. A note on your phone is fine.",
      ],
    },
    {
      type: "list",
      items: [
        "Your current skincare — ideally the actual products, or photographs of the labels. What you already use is reviewed before anything is added.",
        "Your medical history and any conditions relevant to skin or healing, including whether you are pregnant or breastfeeding.",
        "Your current medications and supplements. Bring the list; do not change anything on it before your visit.",
        "Any previous aesthetic treatment — what it was, roughly when, who performed it, and how you felt about the result.",
        "Any past reaction to a treatment, product or anaesthetic, and any history of cold sores or of scarring unusually.",
        "What bothers you, in your own words. It does not need to be clinical language.",
        "What does not bother you, which is just as useful and far less often mentioned.",
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Do not stop or change a prescription medication in order to book or attend a consultation. Bring the list as it is. Alaa reviews any medication considerations when working out whether and how treatment might proceed — and changing how you take something you were prescribed is a conversation with the clinician who prescribed it, never a step you take on your own."
    },
    {
      type: "section",
      heading: "On photographs and inspiration",
      body: [
        "Bringing images is genuinely useful, but for a narrower reason than people expect. They are helpful for communication — showing what you find natural, what reads as too much to you, the sort of result you are drawn to. They are not useful as targets, because the face in the photograph is not your face, and much of what you are responding to may be structure, lighting or editing rather than treatment.",
        "The most productive way to use them is to say what specifically you like about the image. That gives a clinician something to work with. \"This\" gives them very little.",
      ],
    },
    { type: "cta" },
    {
      type: "section",
      heading: "What the visit itself involves",
      body: [
        `Every AVEN relationship begins with a paid Assessment, and it comes in two forms. The Quick Assessment is ${QUICK_ASSESSMENT.pricePrefix.toLowerCase()} ${QUICK_ASSESSMENT.price}, runs ${QUICK_ASSESSMENT.durationInclusion.toLowerCase()}, and suits a single specific question. The Comprehensive Assessment is ${COMPREHENSIVE_ASSESSMENT.price} and ${COMPREHENSIVE_ASSESSMENT.durationNote}, and is built for weighing several considerations or planning across time — it is the one that ends with a written plan you keep.`,
        "Both include an Aura skin analysis, and both are credited toward treatment if you go ahead. Neither is a requirement of the other: a bridal plan does not oblige you to book the longer visit, and choosing the focused one is not a lesser start.",
        "Aura is skin imaging. It adds to the picture of your skin and helps document how things look over time. It does not diagnose a condition and it does not decide your treatment — that judgment is Alaa's clinical examination and your history.",
      ],
    },
    {
      type: "section",
      heading: "Questions worth asking",
      body: [
        "You are allowed to interview the practice. Reasonable questions include who will actually perform any treatment and what their training is for it, what a realistic result looks like for you specifically, what a treatment does not address, what happens if you do not like the outcome, and what the plan would be if you decided to do nothing.",
        "That last question is a good test. A practice that can answer it well is one that has thought about whether you need treatment at all.",
      ],
    },
  ],
  faqs: [
    { q: "Do I need to know what treatments I want beforehand?", a: "No. Arriving without a list is normal and often better — it leaves the conversation open. What helps is being able to describe what you notice and what you would like to be different, in whatever words you have." },
    { q: "Which Assessment should I book for bridal planning?", a: "Either can work. A single specific question suits the Quick Assessment; weighing several considerations or wanting a written plan across time points to the Comprehensive. Bridal planning does not require the longer visit — if you are unsure, start with the concern that brought you in." },
    { q: "Should I stop my skincare or medication before coming in?", a: "No. You do not need to stop or change anything to book or attend a consultation — bring your products and your medication list as they are. Changing either beforehand removes the information the visit is meant to gather. Where a medication is relevant to a specific treatment, that is worked out individually at the assessment; prescription changes are always a conversation with the clinician who prescribed them, never something to do on your own." },
    { q: "Can I bring photographs of results I like?", a: "Yes, and it is genuinely helpful — as communication rather than as a target. Say what you like about the image. Individual anatomy differs, results vary between people, and no outcome can be guaranteed." },
    { q: "Will I be pressured to book something?", a: "No. The Assessment is a consultation, not a commitment, and leaving to think about it is a normal outcome. So is being told that a treatment is not appropriate, or not yet." },
  ],
  relatedServices: [
    { label: "The AVEN Assessment", path: "/assessment", note: "The two tiers and what each includes." },
    { label: "The AVEN Assessment: What to Expect", path: "/education/the-aven-assessment-what-to-expect", note: "The visit in depth." },
    { label: "The AVEN Bridal Journey", path: "/bridal-journey", note: "How bridal planning is structured." },
    { label: "Meet Your Provider", path: "/providers/alaa-mashal", note: "The clinician who assesses and treats you." },
  ],
  references: [
    { label: "Best questions to ask when considering a cosmetic treatment", publisher: "American Academy of Dermatology", url: "https://www.aad.org/public/cosmetic/safety/ask-questions" },
    { label: "Fillers: Preparation — what to tell your clinician beforehand", publisher: "American Academy of Dermatology", url: "https://www.aad.org/public/cosmetic/wrinkles/fillers-preparation" },
    { label: "Your safety: cosmetic treatments", publisher: "American Academy of Dermatology", url: "https://www.aad.org/public/cosmetic/safety" },
  ],
};
