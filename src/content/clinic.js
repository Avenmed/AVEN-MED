/* AVEN MED — centralized clinic configuration.
 * Single source of truth for business NAP, contact, geo, and social links.
 * Import from here instead of hard-coding these values.
 *
 * NOTE: index.html's static JSON-LD/meta can't import JS, so its NAP/geo/social
 * must be kept in sync with this file by hand. */

export const CLINIC = {
  name: "AVEN MED",
  url: "https://avenmedil.com",

  // Address (NAP)
  streetAddress: "14470 LaGrange Rd, Ste 101",
  addressLocality: "Orland Park",
  addressRegion: "IL",
  postalCode: "60462",
  country: "US",

  // Phone — three forms for three uses
  phoneE164: "+17087346902",       // tel: links, waitlist hand-off
  phoneSchema: "+1-708-734-6902",  // schema.org "telephone"
  phoneDisplay: "(708) 734 · 6902",// visible text

  email: "info@avenmedil.com",

  // Geo — ESTIMATE; confirm against the Google Business Profile pin.
  lat: 41.6063,
  lng: -87.8614,

  // Communities served (local SEO)
  areas: ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"],

  // Social profiles
  social: {
    instagram: "https://instagram.com/avenmedil",
    facebook: "https://facebook.com/avenmedil",
    tiktok: "https://tiktok.com/@avenmedil",
  },
};

// Flat list for schema `sameAs` / `areaServed`.
export const CLINIC_SAME_AS = [CLINIC.social.instagram, CLINIC.social.facebook, CLINIC.social.tiktok];
export const DEFAULT_AREAS = CLINIC.areas;
