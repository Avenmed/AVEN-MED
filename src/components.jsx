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
  { label: "AURA", path: "/aura" },
  { label: "The Reading", path: "/reading" },
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
          <span className="phone">(704) 488 · 8280</span>
          <a
            href="#/contact"
            onClick={(e) => { e.preventDefault(); navigate("/contact"); }}
            className="btn"
            style={{ height: 38, padding: "0 18px", fontSize: 10, color: "var(--gold)", borderColor: "var(--gold-soft)" }}
          >
            <span>Book a Reading</span>
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
          <nav style={{ display: "flex", flexDirection: "column", gap: 28, marginTop: 80 }}>
            {NAV.map((n) => (
              <a key={n.path} href={"#" + n.path}
                onClick={(e) => { e.preventDefault(); navigate(n.path); setMobileOpen(false); }}
                style={{
                  fontFamily: "var(--serif)", fontSize: 38, fontWeight: 300,
                  color: route === n.path ? "var(--gold)" : "var(--ivory)",
                  letterSpacing: "-0.01em"
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
    <div className="container">
      <div className="ftr-grid">
        <div className="brand-block">
          <Logo size={42} />
          <div style={{
            fontFamily: "var(--serif)", fontSize: 22, letterSpacing: "0.36em",
            textTransform: "uppercase", fontWeight: 300, color: "var(--ivory)"
          }}>AVEN MED</div>
          <p className="body-sm" style={{ margin: 0 }}>
            A clinic for aesthetics, wellness, and the long, quiet practice
            of looking like yourself. By appointment only.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 12 }}>
            {["Instagram", "Journal", "Newsletter"].map((s) => (
              <a key={s} href="#" className="body-sm" style={{
                borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 2,
                fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--ivory-soft)"
              }}>{s}</a>
            ))}
          </div>
        </div>

        <div>
          <h5>Clinic</h5>
          <ul>
            {[
              ["Home", "/"], ["About AVEN", "/about"], ["The Philosophy", "/about"],
              ["Memberships", "/memberships"], ["Journal", "#"]
            ].map(([l, p]) => (
              <li key={l}><a href={"#" + p}
                onClick={(e) => { if (p.startsWith("/")) { e.preventDefault(); navigate(p); } }}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h5>Practice</h5>
          <ul>
            {[
              ["Aesthetics", "/aesthetics"], ["Wellness", "/wellness"],
              ["The Reading", "/reading"], ["Concierge", "/wellness"],
              ["Advanced Rejuvenation", "/aesthetics"]
            ].map(([l, p]) => (
              <li key={l}><a href={"#" + p} onClick={(e) => { e.preventDefault(); navigate(p); }}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h5>Visit</h5>
          <ul>
            <li>Clinic address — TBD</li>
            <li>Orland Park · IL 60462</li>
            <li style={{ marginTop: 14 }}>hello@avenmed.co</li>
            <li>(704) 488 · 8280</li>
            <li style={{ marginTop: 14, color: "var(--muted)" }}>Mon – Sat · By Appointment</li>
          </ul>
        </div>
      </div>

      <div className="divider-mark" style={{ marginTop: 80 }}>
        <span className="line"></span>
        <Logo size={32} />
        <span className="line"></span>
      </div>

      <div className="copy">
        <span>© 2026 AVEN MED · Aesthetics & Wellness</span>
        <span>Privacy · Terms · Accessibility</span>
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
