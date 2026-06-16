/* AVEN MED — shared components */
import React from 'react';

const Logo = ({ size = 22, style = {} }) => (
  <img
    src="assets/logo.png"
    alt="AVEN MED"
    style={{ width: size, height: "auto", display: "block", ...style }}
  />
);

const Brand = ({ onClick }) => (
  <a
    href="#/"
    onClick={(e) => { e.preventDefault(); onClick && onClick("/"); }}
    className="brand"
    style={{ display: "flex", alignItems: "center", gap: 14 }}
    aria-label="AVEN MED home"
  >
    <Logo size={30} />
    <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
      <span style={{
        fontFamily: "var(--serif)", fontSize: 18, letterSpacing: "0.42em",
        textTransform: "uppercase", fontWeight: 300, color: "var(--ivory)"
      }}>AVEN MED</span>
      <span style={{
        fontFamily: "var(--sans)", fontSize: 8.5, letterSpacing: "0.34em",
        textTransform: "uppercase", fontWeight: 400, color: "var(--gold)",
        marginTop: 6
      }}>Aesthetics · Wellness</span>
    </span>
  </a>
);

const NAV = [
  { label: "Home", path: "/" },
  { label: "About AVEN", path: "/about" },
  { label: "Aesthetics", path: "/aesthetics" },
  { label: "Wellness", path: "/wellness" },
  { label: "Family Medicine", path: "/family-medicine" },
  { label: "AVEN Assessment", path: "/assessment" },
  { label: "Memberships", path: "/memberships" },
  { label: "Contact", path: "/contact" },
];

const Header = ({ route, navigate }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header className={"hdr" + (scrolled ? " scrolled" : "")}>
        <Brand onClick={navigate} />
        <nav>
          {NAV.map((n) => (
            <a
              key={n.path}
              href={"#" + n.path}
              onClick={(e) => { e.preventDefault(); navigate(n.path); }}
              className={route === n.path ? "active" : ""}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="right">
          <a className="phone" href="tel:+17044888280" style={{ color: "var(--ivory-soft)" }}>(704) 488 · 8280</a>
          <a
            href="#/contact"
            onClick={(e) => { e.preventDefault(); navigate("/contact"); }}
            className="btn"
            style={{ height: 38, padding: "0 18px", fontSize: 10, color: "var(--gold)", borderColor: "var(--gold-soft)" }}
          >
            <span>Book</span>
          </a>
          <button className="menu-btn" onClick={() => setMobileOpen(true)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 100, background: "rgba(243,236,220,0.97)",
          backdropFilter: "blur(20px)", padding: 32, display: "flex", flexDirection: "column"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Brand onClick={(p) => { navigate(p); setMobileOpen(false); }} />
            <button onClick={() => setMobileOpen(false)} aria-label="Close"
              style={{ fontSize: 26, color: "var(--ivory)" }}>×</button>
          </div>
          <nav style={{
            display: "flex", flexDirection: "column", gap: 36, marginTop: 100,
            alignItems: "center", textAlign: "center"
          }}>
            {NAV.map((n) => (
              <a key={n.path} href={"#" + n.path}
                onClick={(e) => { e.preventDefault(); navigate(n.path); setMobileOpen(false); }}
                style={{
                  fontFamily: "var(--serif)", fontSize: 24, fontWeight: 300,
                  fontStyle: "italic",
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

const Footer = ({ navigate }) => (
  <footer className="ftr">
    <div className="container" style={{ textAlign: "center", padding: "100px 24px 60px" }}>
      <Logo size={36} style={{ margin: "0 auto 24px", opacity: 0.9 }} />
      <div style={{
        fontFamily: "var(--serif)", fontSize: 18, letterSpacing: "0.42em",
        textTransform: "uppercase", fontWeight: 300, color: "var(--ivory)", marginBottom: 6
      }}>AVEN MED</div>
      <div style={{
        fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.34em",
        textTransform: "uppercase", fontWeight: 400, color: "var(--gold)", marginBottom: 44
      }}>Orland Park · By Appointment</div>

      <div style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 28 }}>
        Now welcoming founding members
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, fontSize: 13, color: "var(--ivory-soft)", marginBottom: 56 }}>
        <a href="mailto:info@avenmedil.com" style={{ color: "var(--ivory-soft)", borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 2 }}>info@avenmedil.com</a>
        <a href="tel:+17044888280" style={{ color: "var(--ivory-soft)", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 2 }}>(704) 488 · 8280</a>
        <div style={{ display: "flex", gap: 24, marginTop: 4 }}>
          <a href="https://instagram.com/avenmedil" target="_blank" rel="noreferrer" style={{ color: "var(--ivory-soft)", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 2 }}>Instagram</a>
          <a href="https://facebook.com/avenmedil" target="_blank" rel="noreferrer" style={{ color: "var(--ivory-soft)", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 2 }}>Facebook</a>
          <a href="https://tiktok.com/@avenmedil" target="_blank" rel="noreferrer" style={{ color: "var(--ivory-soft)", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 2 }}>TikTok</a>
        </div>
        <div style={{ marginTop: 12, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", textAlign: "center", lineHeight: 1.6 }}>
          14470 LaGrange Rd, Ste 101<br />Orland Park, IL 60462
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
        fontSize: 10, letterSpacing: "0.18em", color: "var(--muted-2)", textTransform: "uppercase", fontFamily: "var(--sans)"
      }}>
        © 2026 AVEN MED
      </div>
    </div>
  </footer>
);

// Placeholder image slot with explainer label (intentional — to be filled with real cinematic stills/video)
const Ph = ({ label = "Imagery", meta = "", style = {}, dark = false, className = "", aspect, children }) => (
  <div
    className={"ph " + (dark ? "dark " : "") + className}
    style={{ aspectRatio: aspect, ...style }}
  >
    {label && <span className="ph-label">{label}</span>}
    {meta && <span className="ph-meta">{meta}</span>}
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

export { Logo, Brand, Header, Footer, Ph, Reveal, DividerMark, Eyebrow, NAV };
