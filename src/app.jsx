/* AVEN MED — App shell + router + tweaks */
import React from 'react';
import { Header, Footer } from './components.jsx';
import AnnouncementBar from './AnnouncementBar.jsx';
import { BOOKING_ENABLED } from './config.js';
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
import ServicePage from './pages/Service.jsx';
import NotesPage from './pages/Notes.jsx';
import BotoxOrlandPark from './pages/BotoxOrlandPark.jsx';
import LipFillersOrlandPark from './pages/LipFillersOrlandPark.jsx';

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

  // Keep <title>, meta description, and canonical accurate per route.
  React.useEffect(() => {
    applySeo(route);
  }, [route]);

  // Apply tweaks to :root
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--gold", t.accent);
    root.style.setProperty("--gold-bright", t.accent);
    root.style.setProperty("--gold-soft", t.accent + "8c");
    root.style.setProperty("--bg", t.bg);
    root.style.setProperty("--serif", `"${t.fontDisplay}", "Cormorant Garamond", serif`);
    root.style.setProperty("--sans", `"${t.fontSans}", -apple-system, sans-serif`);
  }, [t.accent, t.bg, t.fontDisplay, t.fontSans]);

  const Page = (() => {
    if (route.startsWith("/service/")) return ServicePage;
    if (route.startsWith("/notes")) return NotesPage;
    switch (route) {
      case "/botox-orland-park": return BotoxOrlandPark;
      case "/lip-fillers-orland-park": return LipFillersOrlandPark;
      case "/about": return AboutPage;
      case "/aesthetics": return AestheticsPage;
      case "/wellness": return WellnessPage;
      case "/family-medicine": return FamilyMedicinePage;
      case "/assessment": return AssessmentPage;
      case "/memberships": return MembershipsPage;
      case "/contact": return ContactPage;
      default: return Home;
    }
  })();

  const isHome = route === "/";

  return (
    <>
      {isHome && !BOOKING_ENABLED && <AnnouncementBar />}
      <Header route={route} navigate={navigate} />
      {isHome ? (
        <div className={"homepage-content" + (homeRevealed ? " revealed" : "")}>
          <Page key={route} navigate={navigate} />
        </div>
      ) : (
        <Page key={route} navigate={navigate} />
      )}
      <Footer navigate={navigate} />
      {new URLSearchParams(window.location.search).get('tweaks') === '1' && <Tweaks t={t} setTweak={setTweak} />}
      {introActive && <Intro onDone={onIntroDone} />}
    </>
  );
};

export default App;
