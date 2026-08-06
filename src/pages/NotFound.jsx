/* AVEN MED — Not Found (404).
 *
 * Rendered for any route that resolves to no real page (unknown top-level paths
 * and unknown nested slugs). Calm, AVEN-branded, with a clear "not found" message
 * and two ways back. seo.js marks these routes noindex,follow and points the
 * canonical at Home (never a self-canonical to the invalid URL). Because the site
 * is a Netlify SPA, the HTTP status is 200 (the deep-link fallback), so the page
 * and its metadata — not the status code — carry the "not found" signal. */
import React from 'react';
import { Eyebrow, Logo, Reveal, HeroBg, AssessmentCTA } from '../components.jsx';

const NotFoundPage = ({ navigate }) => (
  <main className="page">
    <section className="has-hero-bg" style={{ paddingTop: 200, paddingBottom: 140, textAlign: "center" }}>
      <HeroBg />
      <div className="container" style={{ maxWidth: 680 }}>
        <Reveal>
          <Logo size={48} style={{ margin: "0 auto 28px", opacity: 0.9 }} />
          <Eyebrow>· Page not found</Eyebrow>
          <h1 className="display" style={{ fontSize: "clamp(40px, 6vw, 84px)", margin: "22px auto 20px", maxWidth: "14ch", fontWeight: 300, lineHeight: 1.02 }}>
            This page isn't <em>here.</em>
          </h1>
          <p className="lede" style={{ margin: "0 auto 40px", maxWidth: "46ch" }}>
            The page you're looking for doesn't exist at this address. Let's get you
            back to something calm.
          </p>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }} className="btn solid" style={{ height: 52 }}>
              <span>Back home</span><span className="arrow"></span>
            </a>
            <AssessmentCTA navigate={navigate} className="link" />
          </div>
        </Reveal>
      </div>
    </section>
    <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
  </main>
);

export default NotFoundPage;
