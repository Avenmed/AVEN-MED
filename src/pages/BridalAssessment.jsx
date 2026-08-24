/* AVEN MED — Bridal Assessment (/bridal-journey/assessment).
 *
 * A consultation-first entry point to the AVEN Bridal Journey. It PREPARES the
 * AVEN team for a conversation — it does NOT diagnose, recommend treatment, or
 * book anything. The form is registry-driven (BRIDAL_ASSESSMENT_FIELDS) and is
 * intentionally NOT connected to any booking/CRM/EMR/email system: submission is
 * a front-end placeholder (see onSubmit). Reuses the site's .field/.btn styling.
 *
 * Accessibility: labelled fields, aria-invalid + aria-describedby errors,
 * role="alert" messages, focus moves to the first error, 44px+ touch targets. */
import React from 'react';
import { Eyebrow, Logo, Reveal, HeroBg, DividerMark } from '../components.jsx';
import { CLINIC } from '../content/clinic.js';
import { BRIDAL_ASSESSMENT_FIELDS } from '../content/bridal/index.js';
import { useJsonLd, BridalConcernSelector, BridalDisclaimer } from './bridal/BridalComponents.jsx';
import { trackBridalSubmit } from '../analytics.js';

const BASE = CLINIC.url;
// Warm terracotta error text, deepened for WCAG AA: #9A4A32 is 4.6:1 on --bg
// (the previous #b0563a was 3.7:1). Stays on-brand, not a generic alert red.
const ERR = "#9A4A32";

function initialValues() {
  const v = {};
  BRIDAL_ASSESSMENT_FIELDS.forEach((f) => {
    v[f.id] = f.type === "multiselect" ? [] : f.type === "checkbox" ? false : "";
  });
  return v;
}

function validate(values) {
  const errs = {};
  BRIDAL_ASSESSMENT_FIELDS.forEach((f) => {
    const val = values[f.id];
    if (f.required) {
      if (f.type === "checkbox" && !val) errs[f.id] = "Please acknowledge to continue.";
      else if (f.type === "multiselect" && (!val || !val.length)) errs[f.id] = "Please select at least one.";
      else if (typeof val === "string" && !val.trim()) errs[f.id] = "This field is required.";
    }
    if (f.type === "email" && typeof val === "string" && val.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      errs[f.id] = "Please enter a valid email address.";
    }
  });
  return errs;
}

const buildSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE}/bridal-journey/assessment`,
      "name": "Bridal Assessment · The AVEN Bridal Journey",
      "url": `${BASE}/bridal-journey/assessment`,
      "inLanguage": "en-US",
      "about": { "@id": `${BASE}/#clinic` },
      "breadcrumb": { "@id": `${BASE}/bridal-journey/assessment#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE}/bridal-journey/assessment#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE}/` },
        { "@type": "ListItem", "position": 2, "name": "The AVEN Bridal Journey", "item": `${BASE}/bridal-journey` },
        { "@type": "ListItem", "position": 3, "name": "Bridal Assessment", "item": `${BASE}/bridal-journey/assessment` },
      ],
    },
  ],
});

function Field({ field, value, error, onChange }) {
  const describedBy = error ? `${field.id}-error` : undefined;
  const common = { id: field.id, "aria-invalid": !!error, "aria-describedby": describedBy };

  if (field.type === "checkbox") {
    return (
      <div className="field" style={{ flexDirection: "row", alignItems: "flex-start", gap: 12 }}>
        <input type="checkbox" {...common} checked={value} onChange={(e) => onChange(e.target.checked)}
          style={{ width: 20, height: 20, marginTop: 2, flexShrink: 0 }} required={field.required} />
        <label htmlFor={field.id} style={{ textTransform: "none", letterSpacing: "normal", fontSize: 14, color: "var(--ivory-soft)", lineHeight: 1.6 }}>
          {field.label}{field.required && " *"}
        </label>
        {error && <span id={describedBy} role="alert" style={{ color: ERR, fontSize: 12, flexBasis: "100%" }}>{error}</span>}
      </div>
    );
  }

  // Multiselect renders a button group (no single labellable control), so the
  // label must associate via aria-labelledby, not a dangling htmlFor.
  const isMulti = field.type === "multiselect";
  return (
    <div className="field">
      <label id={`${field.id}-label`} htmlFor={isMulti ? undefined : field.id}>{field.label}{field.required && " *"}{field.help ? ` · ${field.help}` : ""}</label>
      {field.type === "textarea" ? (
        <textarea {...common} value={value} placeholder={field.placeholder} onChange={(e) => onChange(e.target.value)} />
      ) : field.type === "select" ? (
        <select {...common} value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="">Select…</option>
          {field.options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : isMulti ? (
        <BridalConcernSelector labelledBy={`${field.id}-label`} options={field.options} value={value} onChange={onChange} />
      ) : (
        <input {...common} type={field.type} value={value} placeholder={field.placeholder}
          autoComplete={field.autoComplete} onChange={(e) => onChange(e.target.value)} required={field.required} />
      )}
      {error && <span id={describedBy} role="alert" style={{ color: ERR, fontSize: 12 }}>{error}</span>}
    </div>
  );
}

const BridalAssessmentPage = ({ navigate }) => {
  useJsonLd("bridal-assessment-schema", React.useMemo(buildSchema, []));
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [submitError, setSubmitError] = React.useState("");
  // Synchronous guard — blocks a same-tick double-submit that the async `sending`
  // state (and the disabled button) can't catch before React re-renders.
  const sendingRef = React.useRef(false);

  const setField = (id) => (val) => setValues((v) => ({ ...v, [id]: val }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending || sendingRef.current) return; // prevent double-submit
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = document.getElementById(Object.keys(errs)[0]);
      if (first) first.focus();
      return;
    }
    sendingRef.current = true;
    setSubmitError("");
    setSending(true);
    try {
      // Send ONLY the approved, non-sensitive fields to our own server-side function
      // (which forwards to Podium). Skin concerns, aesthetic goals, treatment history,
      // skincare routine, wellness goals, and free-text answers NEVER leave the browser.
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        weddingDate: values.weddingDate,
        consultationTiming: values.consultationTiming,
        referral: values.referral,
        consent: values.consent,
      };
      const res = await fetch("/api/podium/bridal-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error("submit_failed");
      trackBridalSubmit(); // GA4 — only after a confirmed successful handoff; no PII
      setSubmitted(true);  // the form is never cleared until success
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      // Never surface backend/Podium error details to the visitor.
      setSubmitError("Something went wrong sending your details. Please try again in a moment, or contact us directly.");
    } finally {
      sendingRef.current = false;
      setSending(false);
    }
  };

  return (
    <main className="page">
      {/* HERO */}
      <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 56 }}>
        <HeroBg />
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal>
            <div className="body-sm" style={{ marginBottom: 22, color: "var(--muted)" }}>
              <a href="/bridal-journey" onClick={(e) => { e.preventDefault(); navigate("/bridal-journey"); }} style={{ color: "var(--muted)" }}>The AVEN Bridal Journey</a>
              <span style={{ margin: "0 10px", color: "var(--gold)" }}>/</span>
              <span style={{ color: "var(--ivory-soft)" }}>Bridal Assessment</span>
            </div>
            <Eyebrow>Bridal Assessment</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(40px, 6vw, 84px)", margin: "22px 0 22px", lineHeight: 1.02, fontWeight: 300 }}>
              Let's <em>begin.</em>
            </h1>
            <p className="lede" style={{ maxWidth: "56ch" }}>
              Share a few details so our team can prepare for your consultation. This is a
              conversation starter — not a booking, and not a request for medical treatment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container" style={{ maxWidth: 720 }}>
          {!submitted ? (
            <Reveal>
              {/* Disclaimers */}
              <div style={{ marginBottom: 40, display: "grid", gap: 12 }}>
                <BridalDisclaimer>
                  <strong style={{ color: "var(--ivory-soft)", fontStyle: "normal" }}>Medical disclaimer (placeholder):</strong> This form does not provide medical advice, diagnosis, or treatment, and completing it does not create a provider–patient relationship. Any plan is made with a qualified provider at a consultation.
                </BridalDisclaimer>
                <BridalDisclaimer>
                  <strong style={{ color: "var(--ivory-soft)", fontStyle: "normal" }}>Privacy (placeholder):</strong> Your information is used only to prepare for your visit. A finalized privacy notice will appear here before launch.
                </BridalDisclaimer>
              </div>

              <form onSubmit={onSubmit} noValidate style={{ display: "grid", gap: 30 }}>
                {BRIDAL_ASSESSMENT_FIELDS.map((f) => (
                  <Field key={f.id} field={f} value={values[f.id]} error={errors[f.id]} onChange={setField(f.id)} />
                ))}
                <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap", marginTop: 8 }}>
                  <button type="submit" className="btn solid" style={{ height: 56 }} disabled={sending} aria-busy={sending}>
                    <span>{sending ? "Sending…" : "Submit"}</span><span className="arrow"></span>
                  </button>
                  <span className="body-sm" style={{ color: "var(--muted)" }}>We'll reach out to arrange your consultation.</span>
                </div>
                {submitError && (
                  <div role="alert" className="body-sm" style={{ color: ERR }}>
                    {submitError} <a href={`mailto:${CLINIC.email}`} style={{ color: ERR, borderBottom: `1px solid ${ERR}` }}>{CLINIC.email}</a>
                  </div>
                )}
              </form>
            </Reveal>
          ) : (
            <Reveal>
              <div style={{ padding: "40px 0" }}>
                <Logo size={48} />
                <div className="label" style={{ marginTop: 32, color: "var(--gold)" }}>Received</div>
                <h2 className="display" style={{ fontSize: "clamp(34px, 5vw, 56px)", margin: "16px 0 20px", fontWeight: 300 }}>
                  Thank you, {(values.name || "").split(" ")[0] || "friend"}.
                </h2>
                <p className="body" style={{ maxWidth: "52ch" }}>
                  Your Bridal Journey has been received. Our team will review your request and
                  contact you regarding your Bridal consultation.
                </p>
                <BridalDisclaimer style={{ marginTop: 20 }}>
                  Prefer to reach us directly? Email {CLINIC.email} or call {CLINIC.phoneDisplay}.
                </BridalDisclaimer>
                <div style={{ marginTop: 36, display: "flex", gap: 24, flexWrap: "wrap" }}>
                  <button className="link" onClick={() => { setSubmitted(false); setValues(initialValues()); }}>
                    <span>Start over</span><span className="arrow"></span>
                  </button>
                  <button className="link" onClick={() => navigate("/bridal-journey")}>
                    <span>Back to the Bridal Journey</span><span className="arrow"></span>
                  </button>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <DividerMark />
      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default BridalAssessmentPage;
