/* AVEN MED — people registry (authors & clinical reviewer).
 *
 * Central, pure-data identity source for the Education Center byline + "medically
 * reviewed by" system, and reusable site-wide. One consistent clinical-reviewer
 * identity — never multiple names.
 *
 * No JSX / no React here (kept pure so the build-time sitemap generator and the
 * app can both import it). */

export const PEOPLE = {
  // Default author for educational articles — allows the library to scale while
  // every article is clinically reviewed before publication.
  "aven-editorial": {
    id: "aven-editorial",
    name: "AVEN Editorial Team",
    shortName: "AVEN Editorial",
    role: "AVEN MED",
    isClinicalReviewer: false,
    bio: "The AVEN Editorial Team researches and drafts educational content, which is then reviewed by a qualified clinician before publication.",
  },

  // The single, standard clinical reviewer identity for the Education Center.
  "alaa-mashal": {
    id: "alaa-mashal",
    name: "Alaa Mashal, MSN, APRN, FNP-BC",
    shortName: "Alaa Mashal",
    credential: "MSN, APRN, FNP-BC",
    role: "Founder & Clinical Director, AVEN",
    isClinicalReviewer: true,
    profilePath: "/providers/alaa-mashal",
    bio: "Alaa Mashal, MSN, APRN, FNP-BC is the founder and clinical director of AVEN MED. Every AVEN educational article is reviewed for medical accuracy before it is published.",
  },
};

// Convention: articles set author = DEFAULT_AUTHOR_ID and reviewer =
// CLINICAL_REVIEWER_ID unless a specific author is named.
export const DEFAULT_AUTHOR_ID = "aven-editorial";
export const CLINICAL_REVIEWER_ID = "alaa-mashal";
export const CLINICAL_REVIEWER = PEOPLE[CLINICAL_REVIEWER_ID];

export function getPerson(id) {
  return (id && PEOPLE[id]) || null;
}
