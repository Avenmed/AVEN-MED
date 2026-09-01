/* AVEN MED — shared components */
import React from 'react';
import Video from './Video.jsx';
import { CLINIC } from './content/clinic.js';
import { BOOKING_ENABLED } from './config.js';

/* Cinematic animation behind a page's top hero/title area.
 * Drop as the first child of a hero <section className="has-hero-bg">. */
const HeroBg = () => (
  <div className="hero-header-bg" aria-hidden="true">
    <Video src="/assets/home-hero-bg-v2.mp4" />
  </div>
);

// The one primary call-to-action, site-wide. Change the label in ONE place here.
// Destination defaults to /contact (high-intent booking) — the historical behavior,
// so every existing caller is unchanged. Early-stage / educational surfaces pass
// `to="/assessment"` so a first-time visitor lands on the Assessment explainer (and
// its own booking CTA) instead of being pushed straight into scheduling. One prop,
// one rule — no per-page ad-hoc routing.
const ASSESSMENT_CTA_LABEL = "Start Your AVEN Assessment";
const AssessmentCTA = ({ navigate, className = "btn solid", style = {}, showArrow = true, label = ASSESSMENT_CTA_LABEL, to = "/contact" }) => (
  <a
    href={to}
    onClick={(e) => { e.preventDefault(); navigate(to); }}
    className={className}
    style={style}
    data-aven-cta="assessment"
  >
    <span>{label}</span>{showArrow && <span className="arrow"></span>}
  </a>
);

// `alt` defaults to the brand name so every existing usage is unchanged. Pass alt=""
// for purely decorative marks (watermarks, dividers) so a screen reader doesn't
// announce "AVEN MED" again for an image that carries no content.
const Logo = ({ size = 22, style = {}, alt = "AVEN MED" }) => (
  <img
    src="/assets/logo.png"
    alt={alt}
    style={{ width: size, height: "auto", display: "block", ...style }}
  />
);

const Brand = ({ onClick }) => (
  <a
    href="/"
    onClick={(e) => { e.preventDefault(); onClick && onClick("/"); }}
    className="brand"
    style={{ display: "flex", alignItems: "center", gap: 14 }}
    aria-label="AVEN MED home"
  >
    <Logo size={36} />
    <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
      <span style={{
        fontFamily: "var(--serif)", fontSize: 18, letterSpacing: "0.42em",
        textTransform: "uppercase", fontWeight: 300, color: "var(--ivory)",
        whiteSpace: "nowrap"
      }}>AVEN MED</span>
      <span style={{
        fontFamily: "var(--sans)", fontSize: 8.5, letterSpacing: "0.34em",
        textTransform: "uppercase", fontWeight: 400, color: "var(--gold)",
        marginTop: 6, whiteSpace: "nowrap"
      }}>Aesthetics · Wellness</span>
    </span>
  </a>
);

// Single source of truth for BOTH desktop and mobile navigation (order + labels
// + destinations). Order follows the patient journey — Trust → Services →
// Signature Experience → Assessment → Membership → Education → Contact. Groups
// below are code-organization only (no visible dividers/labels/dropdowns). If AVEN
// later launches multiple journeys, the "Signature Programs" group is where a
// broader "Journeys" item would evolve.
// Single source of truth for ALL navigation (desktop main bar + mobile menu),
// in patient-journey order. The upper utility strip carries only practice info
// (no links), so the whole navigation lives here. Groups below are code
// organization only — no visible dividers/labels.
// `label` = full wording (used in the mobile menu, which has vertical room).
// `short` = terse editorial label for the space-constrained DESKTOP bar. Nav
// labels should be crisper than page titles — the fuller title lives on the page.
const NAV = [
  { label: "Home", path: "/" },
  // Brand & Trust
  { label: "About AVEN", path: "/about", short: "About" },
  // "Meet Your Provider" kept in full on desktop too — the warmth is worth the width.
  { label: "Meet Your Provider", path: "/providers" },
  // Clinical Services
  { label: "Aesthetics", path: "/aesthetics" },
  { label: "Wellness", path: "/wellness" },
  { label: "Family Medicine", path: "/family-medicine" },
  // Signature Programs
  { label: "Bridal Journey", path: "/bridal-journey" },
  // Patient Journey
  { label: "AVEN Assessment", path: "/assessment", short: "Assessment" },
  { label: "Memberships", path: "/memberships" },
  // Education
  { label: "Education", path: "/education" },
  // Contact
  { label: "Contact", path: "/contact" },
];

const Header = ({ route, navigate }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const triggerRef = React.useRef(null);   // hamburger — focus returns here on close
  const dialogRef = React.useRef(null);     // the modal overlay (for the focus trap)
  const closeBtnRef = React.useRef(null);   // receives focus when the menu opens

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = React.useCallback(() => setMobileOpen(false), []);

  // Mobile menu = accessible modal dialog. While open: focus moves in (to the close
  // button), Tab/Shift+Tab are trapped inside, Escape closes, background scroll is
  // locked (scrollbar width compensated to avoid layout shift), and on close focus
  // returns to the hamburger. The overlay itself is conditionally rendered, so while
  // closed it is fully absent from the DOM (and from assistive tech). Lightweight —
  // no dialog library — within the existing React architecture.
  React.useEffect(() => {
    if (!mobileOpen) return;
    const dialog = dialogRef.current;
    (closeBtnRef.current || dialog)?.focus();

    const scrollBarW = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPad = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollBarW > 0) document.body.style.paddingRight = `${scrollBarW}px`;

    const onKeyDown = (e) => {
      if (e.key === "Escape") { e.preventDefault(); closeMenu(); return; }
      if (e.key !== "Tab" || !dialog) return;
      const f = dialog.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPad;
      triggerRef.current?.focus();
    };
  }, [mobileOpen, closeMenu]);

  return (
    <>
      {/* Wave 8 — skip link. First keyboard stop on every route. Targets the page's
          <main> landmark by query rather than a hard id, so it works on all 50+
          routes without touching a single page file. */}
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          const main = document.querySelector("main");
          if (!main) return;
          main.setAttribute("tabindex", "-1");
          main.focus({ preventScroll: false });
          main.scrollIntoView({ block: "start", behavior: "instant" });
          main.addEventListener("blur", () => main.removeAttribute("tabindex"), { once: true });
        }}
      >
        Skip to main content
      </a>
      <header className={"hdr" + (scrolled ? " scrolled" : "")}>
        {/* Level 1 — a quiet utility strip: practice info only. */}
        <div className="hdr-utility">
          <span className="hdr-util-tag">Orland Park · By Appointment</span>
          <span className="hdr-util-contact">
            <a className="hdr-util-link" href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
            <span className="hdr-util-sep" aria-hidden="true">|</span>
            <a className="hdr-util-link" href={`tel:${CLINIC.phoneE164}`}>{CLINIC.phoneDisplay}</a>
          </span>
        </div>

        {/* Level 2 — main navigation: logo (left) · optically centered nav · CTA (right). */}
        <div className="hdr-main">
          <Brand onClick={navigate} />
          <div className="hdr-nav-wrap">
            <nav className="hdr-nav" aria-label="Primary">
              {NAV.map((n) => (
                <a
                  key={n.path}
                  href={n.path}
                  onClick={(e) => { e.preventDefault(); navigate(n.path); }}
                  className={route === n.path ? "active" : ""}
                  aria-current={route === n.path ? "page" : undefined}
                >
                  {n.short || n.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="hdr-actions">
            <AssessmentCTA
              navigate={navigate}
              label="Start AVEN Assessment"
              className="btn solid hdr-cta"
              showArrow={false}
              style={{ height: 40, padding: "0 18px", fontSize: 10.5 }}
            />
            <button
              ref={triggerRef}
              className="menu-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          style={{
            position: "fixed", inset: 0, zIndex: 100, background: "rgba(233,221,200,0.97)",
            backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
            padding: 32, display: "flex", flexDirection: "column", overflowY: "auto"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Brand onClick={(p) => { navigate(p); setMobileOpen(false); }} />
            <button
              ref={closeBtnRef}
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{
                width: 44, height: 44, display: "grid", placeItems: "center",
                fontSize: 26, lineHeight: 1, color: "var(--ivory)", flexShrink: 0
              }}
            >×</button>
          </div>
          <nav aria-label="Site" style={{
            display: "flex", flexDirection: "column", gap: 28, marginTop: 88,
            alignItems: "center", textAlign: "center"
          }}>
            {NAV.map((n) => (
              <a key={n.path} href={n.path}
                onClick={(e) => { e.preventDefault(); navigate(n.path); setMobileOpen(false); }}
                aria-current={route === n.path ? "page" : undefined}
                style={{
                  fontFamily: "var(--serif)", fontSize: 24, fontWeight: 300,
                  fontStyle: "italic", padding: "8px 24px",
                  color: route === n.path ? "var(--gold)" : "var(--ivory)",
                  letterSpacing: "-0.005em"
                }}>
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

// Secondary information architecture. The header (v1.0) stays deliberately minimal,
// so the footer carries restrained, grouped discovery — and is the site-wide home for
// Patient Concerns and Field Notes, which are intentionally kept out of the primary
// NAV. Every path resolves to a real live route. Descriptive anchors, no dump.
const FOOTER_NAV = [
  { h: "Care", links: [
    { label: "Aesthetics", path: "/aesthetics" },
    { label: "Patient Concerns", path: "/concerns" },
    { label: "Wellness", path: "/wellness" },
    { label: "Family Medicine", path: "/family-medicine" },
  ] },
  { h: "The Practice", links: [
    { label: "About AVEN", path: "/about" },
    { label: "Meet Your Provider", path: "/providers" },
    { label: "The AVEN Assessment", path: "/assessment" },
    { label: "Memberships", path: "/memberships" },
  ] },
  { h: "Explore", links: [
    { label: "The Bridal Journey", path: "/bridal-journey" },
    { label: "Education", path: "/education" },
    { label: "Field Notes", path: "/notes" },
    { label: "Contact", path: "/contact" },
  ] },
];

const Footer = ({ navigate }) => (
  <footer className="ftr">
    <nav aria-label="Footer" className="container" style={{ paddingTop: "clamp(48px, 6vw, 72px)", paddingBottom: 8 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 40, maxWidth: 760, margin: "0 auto" }}>
        {FOOTER_NAV.map((g) => (
          <div key={g.h}>
            <h2>{g.h}</h2>
            <ul>
              {g.links.map((l) => (
                <li key={l.path}>
                  <a href={l.path} onClick={(e) => { e.preventDefault(); navigate(l.path); }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
    <div className="container" style={{ textAlign: "center", padding: "clamp(36px, 4vw, 52px) 24px clamp(32px, 4vw, 48px)", borderTop: "1px solid var(--hairline)" }}>
      <Logo size={36} style={{ margin: "0 auto 24px", opacity: 0.9 }} />
      <div style={{
        fontFamily: "var(--serif)", fontSize: 18, letterSpacing: "0.42em",
        textTransform: "uppercase", fontWeight: 300, color: "var(--ivory)", marginBottom: 6
      }}>AVEN MED</div>
      <div style={{
        fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.34em",
        textTransform: "uppercase", fontWeight: 400, color: "var(--gold)", marginBottom: 44
      }}>Orland Park · By Appointment</div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, fontSize: 13, color: "var(--ivory-soft)", marginBottom: 56 }}>
        <a href={`mailto:${CLINIC.email}`} style={{ color: "var(--ivory-soft)", borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 2 }}>{CLINIC.email}</a>
        <a href={`tel:${CLINIC.phoneE164}`} style={{ color: "var(--ivory-soft)", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 2 }}>{CLINIC.phoneDisplay}</a>
        <div style={{ display: "flex", gap: 24, marginTop: 4 }}>
          <a href={CLINIC.social.instagram} target="_blank" rel="noreferrer" style={{ color: "var(--ivory-soft)", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 2 }}>Instagram</a>
          <a href={CLINIC.social.facebook} target="_blank" rel="noreferrer" style={{ color: "var(--ivory-soft)", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 2 }}>Facebook</a>
          <a href={CLINIC.social.tiktok} target="_blank" rel="noreferrer" style={{ color: "var(--ivory-soft)", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 2 }}>TikTok</a>
        </div>
        <div style={{ marginTop: 12, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", textAlign: "center", lineHeight: 1.6 }}>
          {CLINIC.streetAddress}<br />{CLINIC.addressLocality}, {CLINIC.addressRegion} {CLINIC.postalCode}
        </div>
      </div>

      <div style={{
        fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 15,
        color: "var(--muted)", marginTop: 28,
      }}>
        AVEN MED — Aesthetics · Wellness
      </div>

      <div style={{
        marginTop: 24,
        fontSize: 10, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase", fontFamily: "var(--sans)"
      }}>
        © 2026 AVEN MED
      </div>
    </div>
  </footer>
);

// Image slot — a clean clay-toned block until a real photo is dropped into the
// same container later. `label`/`meta` (art-direction hints) are accepted but no
// longer rendered, so nothing reads as unfinished on the live site. Pass `note`
// only for an intentional status label (e.g. "Design in development").
const Ph = ({ label, meta, style = {}, dark = false, className = "", aspect, children, note }) => (
  <div
    className={"ph " + (dark ? "dark " : "") + className}
    style={{ aspectRatio: aspect, ...style }}
  >
    {note && <span className="ph-note">{note}</span>}
    {children}
  </div>
);

const Reveal = ({ children, delay = 0, as: As = "div", style = {}, ...rest }) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setShown(true), delay); io.disconnect(); }
    }, { threshold: 0.14 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <As ref={ref} className={"reveal" + (shown ? " in" : "")} style={style} {...rest}>{children}</As>
  );
};

const DividerMark = () => (
  <div className="container">
    <div className="divider-mark">
      <span className="line"></span>
      <Logo size={28} />
      <span className="line"></span>
    </div>
  </div>
);

const Eyebrow = ({ children, muted = false }) => (
  <div className={"eyebrow" + (muted ? " muted" : "")}>
    <span className="dot"></span>{children}
  </div>
);


/* Pre-opening notice — the single place the September 15 date lives in hub copy.
 *
 * Renders only while BOOKING_ENABLED is false and removes itself the day the switch
 * flips, so there is no launch-day edit on any hub. Deliberately inert: static text,
 * not focusable, no form, no CTA, no analytics, no scarcity or response-time promise.
 *
 * `subject` is what the hub actually speaks for — "AVEN Aesthetics", "AVEN Wellness",
 * "AVEN Family Medicine" — or "AVEN MED" for /concerns, which is a patient-entry
 * surface rather than a clinical discipline. `nextStep` is the hand-off the hub can
 * honestly name: the Assessment where the hub sells the Assessment, "your next step"
 * where it doesn't. Style matches the existing .body-sm editorial line it replaces. */
const PreOpeningNote = ({ subject, nextStep = "your AVEN Assessment", style = {} }) => {
  if (BOOKING_ENABLED) return null;
  return (
    <p className="body-sm" style={{ marginTop: 20, marginBottom: 0, maxWidth: "44ch", color: "var(--muted)", ...style }}>
      {subject} opens September 15. Share your details now and our team will
      reach out to coordinate {nextStep}.
    </p>
  );
};

export { Logo, Brand, Header, Footer, Ph, Reveal, DividerMark, Eyebrow, NAV, HeroBg, AssessmentCTA, ASSESSMENT_CTA_LABEL, PreOpeningNote };
