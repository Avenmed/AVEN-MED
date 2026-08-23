/* AVEN MED — App shell + router + tweaks */
import React from 'react';
import { Header, Footer } from './components.jsx';
import { applySeo } from './seo.js';
import Intro from './Intro.jsx';
import {
  useTweaks, TweaksPanel, TweakSection,
  TweakColor, TweakToggle, TweakSelect,
} from './tweaks-panel.jsx';
import Home from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import AestheticsPage from './pages/Aesthetics.jsx';
import WellnessPage from './pages/Wellness.jsx';
import AssessmentPage from './pages/Assessment.jsx';
import FamilyMedicinePage from './pages/FamilyMedicine.jsx';
import MembershipsPage from './pages/Memberships.jsx';
import ContactPage from './pages/Contact.jsx';
import ConcernsPage from './pages/Concerns.jsx';
import ProvidersPage from './pages/Providers.jsx';
import ServicePage from './pages/Service.jsx';
import NotesPage from './pages/Notes.jsx';
import EducationPage from './pages/Education.jsx';
import EducationCategoryPage from './pages/EducationCategory.jsx';
import ArticleTemplate from './pages/ArticleTemplate.jsx';
import BridalJourneyPage from './pages/BridalJourney.jsx';
import BridalAssessmentPage from './pages/BridalAssessment.jsx';
import NotFoundPage from './pages/NotFound.jsx';
import { getRegistryPage, TEMPLATES, getEducationArticle, getRelatedArticles, getServiceLinksBySlugs } from './content/registry.jsx';
import { initAnalytics, trackPageView } from './analytics.js';

// Safe GA4 page_type derived from the EXISTING registry/route system (no second
// route registry, no health data). Broad buckets only.
function pageTypeFor(route) {
  if (route === "/") return "home";
  const reg = getRegistryPage(route);
  if (reg) {
    return ({ treatment: "treatment", concern: "concern", wellness: "wellness", familyMedicine: "family_medicine", assessment: "assessment", provider: "provider" })[reg.type] || "other";
  }
  if (route === "/about") return "about";
  if (route === "/notes") return "notes";
  if (route === "/memberships") return "membership";
  if (route === "/contact") return "contact";
  if (route === "/assessment") return "assessment";
  if (route === "/providers") return "provider";
  if (route === "/education" || route.startsWith("/education/")) return "education";
  if (route.startsWith("/bridal-journey")) return "bridal";
  if (["/aesthetics", "/concerns", "/wellness", "/family-medicine"].includes(route)) return "hub";
  return "not_found";
}
import { validateBridal } from './content/bridal/index.js';
import { categoryBySlug } from './content/education/index.js';

// Stable wrapper so registry pages don't remount on every App render.
// key={route} handles remounting on navigation; the schema template cleans
// up its own JSON-LD on unmount.
const RegistryPage = ({ route, navigate }) => {
  const entry = getRegistryPage(route);
  if (!entry) return null;
  const Template = TEMPLATES[entry.type];
  return <Template data={entry.data} navigate={navigate} />;
};

// Education Center category landing — slug derived from the path. Unknown category
// slugs resolve to the NotFound experience (not a silent hub fallback).
const EducationCategoryRoute = ({ route, navigate }) => {
  const slug = route.replace(/^\/education\/topics\//, "").replace(/\/+$/, "");
  if (!categoryBySlug(slug)) return <NotFoundPage navigate={navigate} />;
  return <EducationCategoryPage category={slug} navigate={navigate} />;
};

// Education Center article — resolved from the registry (single source of truth),
// with related articles attached. Unknown/unpublished slugs resolve to NotFound.
const EducationArticleRoute = ({ route, navigate }) => {
  const slug = route.replace(/^\/education\//, "").replace(/\/+$/, "");
  const article = getEducationArticle(slug);
  if (!article) return <NotFoundPage navigate={navigate} />;
  const relatedArticles = getRelatedArticles(slug, 3);
  return <ArticleTemplate article={{ ...article, relatedArticles }} navigate={navigate} />;
};

// Clean-path routing via the History API.
// Legacy #/ hash URLs (old links, bookmarks, cached Google results) are read as
// the clean path so nothing breaks; an in-page anchor like #section (no slash)
// is left alone for native scrolling.
const cleanRouteFromLocation = () => {
  const h = window.location.hash;
  let p = (h && h.startsWith("#/")) ? h.slice(1).split("?")[0] : window.location.pathname;
  p = (p || "/").replace(/\/+$/, "");   // normalize trailing slash
  return p === "" ? "/" : p;
};

const useHistoryRoute = () => {
  const [route, setRoute] = React.useState(cleanRouteFromLocation);
  React.useEffect(() => {
    // One-time: rewrite a legacy #/ hash URL to its clean path.
    const h = window.location.hash;
    if (h && h.startsWith("#/")) {
      window.history.replaceState(null, "", cleanRouteFromLocation());
    }
    const onPop = () => {
      setRoute(cleanRouteFromLocation());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  const navigate = (p) => {
    if (p === route) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.history.pushState(null, "", p);
    setRoute(p);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return [route, navigate];
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#9a7d4a",
  "bg": "#E9DDC8",
  "showWatermarks": true,
  "fontDisplay": "Cormorant Garamond",
  "fontSans": "Jost"
}/*EDITMODE-END*/;

const Tweaks = ({ t, setTweak }) => (
  <TweaksPanel title="AVEN · Tweaks">
    <TweakSection label="Palette" />
    <TweakColor
      label="Gold accent"
      value={t.accent}
      onChange={(v) => setTweak("accent", v)}
      options={["#9a7d4a", "#b08f5b", "#7a623a", "#c9a96e", "#86663d"]}
    />
    <TweakColor
      label="Background"
      value={t.bg}
      onChange={(v) => setTweak("bg", v)}
      options={["#E9DDC8", "#E2D4BC", "#EDE3D1", "#DCCDB3", "#f3ecdc"]}
    />
    <TweakSection label="Typography" />
    <TweakSelect
      label="Display serif"
      value={t.fontDisplay}
      onChange={(v) => setTweak("fontDisplay", v)}
      options={["Cormorant Garamond", "Italiana", "Tenor Sans", "Playfair Display", "DM Serif Display"]}
    />
    <TweakSelect
      label="Sans"
      value={t.fontSans}
      onChange={(v) => setTweak("fontSans", v)}
      options={["Jost", "Outfit", "Manrope", "Karla", "Work Sans"]}
    />
    <TweakSection label="Visual" />
    <TweakToggle
      label="Logo watermarks"
      value={t.showWatermarks}
      onChange={(v) => setTweak("showWatermarks", v)}
    />
  </TweaksPanel>
);

const App = () => {
  const [route, navigate] = useHistoryRoute();
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // ---------- First-visit intro ----------
  // Only play on home route, only first time per session, and not if reduced motion.
  // ?intro=1 in the URL forces a replay (useful for demos/testing).
  const shouldPlayIntro = React.useMemo(() => {
    if (route !== "/") return false;
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("intro") === "1") return true;
    } catch (e) {}
    try {
      if (sessionStorage.getItem("aven-intro-played") === "true") return false;
    } catch (e) {}
    if (typeof window !== "undefined" && window.matchMedia) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    }
    return true;
  }, []); // computed once on mount

  const [introActive, setIntroActive] = React.useState(shouldPlayIntro);
  const [homeRevealed, setHomeRevealed] = React.useState(!shouldPlayIntro);

  const onIntroDone = React.useCallback(() => {
    setIntroActive(false);
    setHomeRevealed(true);
  }, []);

  // Load GA4 once (privacy-scoped; client-only).
  React.useEffect(() => { initAnalytics(); }, []);

  // Keep <title>, meta description, and canonical accurate per route — then send
  // exactly one GA4 page_view per route (initial mount + each client-side change),
  // pathname-only, after applySeo has set the correct document.title.
  React.useEffect(() => {
    applySeo(route);
    trackPageView(route, document.title, pageTypeFor(route));
  }, [route]);

  // DEV-only: surface bridal registry issues in the console. Dead-code-eliminated
  // from production builds (import.meta.env.DEV === false), so zero prod impact.
  React.useEffect(() => {
    if (!import.meta.env.DEV) return;
    const issues = validateBridal({
      serviceSlugExists: (s) => getServiceLinksBySlugs([s]).length > 0,
      articlePublished: (slug) => !!getEducationArticle(slug),
    });
    if (issues.length) console.warn("[bridal] registry validation issues:\n" + issues.map((i) => " • " + i).join("\n"));
  }, []);

  // Apply tweaks to :root — ONLY when the dev tweaks panel is active (?tweaks=1).
  // The design tokens are locked in styles.css (:root). Applying the tweak DEFAULTS
  // unconditionally used to write an inline override on <html> for EVERY visitor,
  // which silently reverted the Phase 8.5 accessible --gold (#7A5C30, 4.6:1) back to
  // t.accent (#9a7d4a, 2.89:1 — fails AA). Normal page loads now leave the CSS tokens
  // untouched; the panel still tunes them live in dev.
  const tweaksOn = React.useMemo(() => {
    try { return new URLSearchParams(window.location.search).get("tweaks") === "1"; } catch (e) { return false; }
  }, []);
  React.useEffect(() => {
    if (!tweaksOn) return;
    const root = document.documentElement;
    root.style.setProperty("--gold", t.accent);
    root.style.setProperty("--gold-bright", t.accent);
    root.style.setProperty("--gold-soft", t.accent + "8c");
    root.style.setProperty("--bg", t.bg);
    root.style.setProperty("--serif", `"${t.fontDisplay}", "Cormorant Garamond", serif`);
    root.style.setProperty("--sans", `"${t.fontSans}", -apple-system, sans-serif`);
  }, [tweaksOn, t.accent, t.bg, t.fontDisplay, t.fontSans]);

  const Page = (() => {
    if (getRegistryPage(route)) return RegistryPage;
    if (route.startsWith("/service/")) return ServicePage;
    if (route.startsWith("/notes")) return NotesPage;
    if (route === "/education") return EducationPage;
    if (route.startsWith("/education/topics/")) return EducationCategoryRoute;
    if (route.startsWith("/education/")) return EducationArticleRoute;
    if (route === "/bridal-journey") return BridalJourneyPage;
    if (route === "/bridal-journey/assessment") return BridalAssessmentPage;
    switch (route) {
      case "/": return Home;
      case "/about": return AboutPage;
      case "/concerns": return ConcernsPage;
      case "/providers": return ProvidersPage;
      case "/aesthetics": return AestheticsPage;
      case "/wellness": return WellnessPage;
      case "/family-medicine": return FamilyMedicinePage;
      case "/assessment": return AssessmentPage;
      case "/memberships": return MembershipsPage;
      case "/contact": return ContactPage;
      // Any other route is genuinely unknown → NotFound (no silent Home fallback).
      default: return NotFoundPage;
    }
  })();

  const isHome = route === "/";

  return (
    <>
      <Header route={route} navigate={navigate} />
      {isHome ? (
        <div className={"homepage-content" + (homeRevealed ? " revealed" : "")}>
          <Page key={route} route={route} navigate={navigate} />
        </div>
      ) : (
        <Page key={route} route={route} navigate={navigate} />
      )}
      <Footer navigate={navigate} />
      {new URLSearchParams(window.location.search).get('tweaks') === '1' && <Tweaks t={t} setTweak={setTweak} />}
      {introActive && <Intro onDone={onIntroDone} />}
    </>
  );
};

export default App;
