import { useState } from "react";
import { FadeIn, GoldAccent } from "./utils";

const FORMSPREE_URL = "https://formspree.io/f/mnjbzoew";
const LOCATION      = "North Vancouver, BC";

const inputStyle = {
  width: "100%",
  padding: "14px 18px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "#fff",
  fontSize: 14,
  fontFamily: "DM Sans, sans-serif",
  fontWeight: 300,
  outline: "none",
  transition: "border-color 0.2s",
  borderRadius: 0,
};

export default function CTA() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({ name: "", email: "", phone: "", project: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", project: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{ padding: "120px 8vw", background: "var(--charcoal)", position: "relative", overflow: "hidden" }}>

      {/* Decorative circles */}
      {[500, 350].map((size, i) => (
        <div key={size} style={{
          position: "absolute", right: -100 + i * 40, top: -100 + i * 40,
          width: size, height: size, borderRadius: "50%",
          border: `1px solid rgba(184,147,90,${0.08 - i * 0.03})`,
          pointerEvents: "none",
        }} />
      ))}

      <div style={{ maxWidth: 1000, position: "relative", zIndex: 10 }}>
        <FadeIn>
          {/* Header */}
          <GoldAccent />
          <h2 className="display" style={{
            fontSize: "clamp(40px, 7vw, 96px)", fontWeight: 300,
            lineHeight: 0.95, color: "#fff", marginBottom: 32, letterSpacing: -1,
          }}>
            Ready for a<br />
            Home You <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Love?</em>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.9, color: "rgba(255,255,255,0.45)", fontWeight: 300, maxWidth: 480, marginBottom: 56 }}>
            Your free consultation is a no-obligation conversation with Mitch himself.
            Bring your ideas, your questions, and your wish list. We'll bring the expertise, the honesty,
            and a clear path forward.
          </p>

          {/* Success state */}
          {status === "success" ? (
            <div style={{
              padding: "48px 40px",
              border: "1px solid rgba(184,147,90,0.3)",
              maxWidth: 560, textAlign: "center",
            }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>✓</div>
              <h3 className="display" style={{ fontSize: 28, fontWeight: 300, color: "var(--gold-light)", marginBottom: 12 }}>
                Message Received
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", fontWeight: 300, lineHeight: 1.8 }}>
                Thank you for reaching out. Mitch will be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 560 }}>

              {/* Name + Email */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                <div>
                  <label style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.3)", display: "block", marginBottom: 8 }}>
                    Full Name *
                  </label>
                  <input
                    name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder="Jane Smith"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.3)", display: "block", marginBottom: 8 }}>
                    Email Address *
                  </label>
                  <input
                    name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="jane@example.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>
              </div>

              {/* Phone + Project type */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                <div>
                  <label style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.3)", display: "block", marginBottom: 8 }}>
                    Phone Number
                  </label>
                  <input
                    name="phone" type="tel"
                    value={form.phone} onChange={handleChange}
                    placeholder="(604) 555-0123"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.3)", display: "block", marginBottom: 8 }}>
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={form.project} onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  >
                    <option value="" style={{ background: "#1C1C1C" }}>Select a project...</option>
                    <option value="Kitchen Renovation" style={{ background: "#1C1C1C" }}>Kitchen Renovation</option>
                    <option value="Bathroom Remodel" style={{ background: "#1C1C1C" }}>Bathroom Remodel</option>
                    <option value="Basement Finishing" style={{ background: "#1C1C1C" }}>Basement Finishing</option>
                    <option value="Whole-Home Renovation" style={{ background: "#1C1C1C" }}>Whole-Home Renovation</option>
                    <option value="Addition or Extension" style={{ background: "#1C1C1C" }}>Addition or Extension</option>
                    <option value="Other" style={{ background: "#1C1C1C" }}>Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.3)", display: "block", marginBottom: 8 }}>
                  Tell Us About Your Project
                </label>
                <textarea
                  name="message"
                  value={form.message} onChange={handleChange}
                  placeholder="Describe your project, timeline, and any questions you have..."
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                />
              </div>

              {/* Submit button */}
              <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 8 }}>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    padding: "18px 52px",
                    background: status === "sending" ? "var(--stone)" : "var(--gold)",
                    color: "#fff", border: "none",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    fontSize: 11, letterSpacing: 3, textTransform: "uppercase",
                    fontWeight: 500, transition: "all 0.3s", fontFamily: "DM Sans, sans-serif",
                  }}
                  onMouseEnter={(e) => { if (status !== "sending") e.target.style.background = "var(--gold-light)"; }}
                  onMouseLeave={(e) => { if (status !== "sending") e.target.style.background = "var(--gold)"; }}
                >
                  {status === "sending" ? "Sending..." : "Book Free Consultation"}
                </button>
                {status === "error" && (
                  <span style={{ fontSize: 12, color: "#ff6b6b" }}>Something went wrong — please try again.</span>
                )}
              </div>

              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", marginTop: 4 }}>
                * Required fields. We'll respond within one business day.
              </p>
            </form>
          )}

          {/* Location */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 48 }}>
            <span style={{ fontSize: 14 }}>📍</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>{LOCATION}</span>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
