import { FadeIn, GoldAccent } from "./utils";

// ── Update these with real contact details ────────────────────────────────────
const PHONE        = "";
const PHONE_HREF   = "tel:+1";
const EMAIL        = "info@renosbymitch.ca";
const EMAIL_HREF   = "mailto:info@renosbymitch.ca";
const LOCATION     = "North Vancouver, BC";
// ─────────────────────────────────────────────────────────────────────────────

const CONTACT_DETAILS = [
  { icon: "✉",  text: EMAIL,   href: EMAIL_HREF  },
  { icon: "📍", text: LOCATION, href: null        },
];

export default function CTA() {
  return (
    <section id="contact" style={{ padding: "120px 8vw", background: "var(--charcoal)", position: "relative", overflow: "hidden" }}>

      {/* Decorative circles */}
      {[500, 350].map((size, i) => (
        <div
          key={size}
          style={{
            position: "absolute",
            right: -100 + i * 40,
            top: -100 + i * 40,
            width: size, height: size,
            borderRadius: "50%",
            border: `1px solid rgba(184,147,90,${0.08 - i * 0.03})`,
            pointerEvents: "none",
          }}
        />
      ))}

      <div style={{ maxWidth: 800, position: "relative", zIndex: 10 }}>
        <FadeIn>
          <GoldAccent />
          <h2
            className="display"
            style={{
              fontSize: "clamp(40px, 7vw, 96px)", fontWeight: 300,
              lineHeight: 0.95, color: "#fff", marginBottom: 32, letterSpacing: -1,
            }}
          >
            Ready for a<br />
            Home You <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Love?</em>
          </h2>

          <p style={{ fontSize: 16, lineHeight: 1.9, color: "rgba(255,255,255,0.45)", fontWeight: 300, maxWidth: 480, marginBottom: 56 }}>
            Your free consultation is a no-obligation conversation with Mitch himself.
            Bring your ideas, your questions, and your wish list. We'll bring the expertise, the honesty,
            and a clear path forward.
          </p>

          {/* Primary CTAs */}
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 60 }}>
            <a
              href={EMAIL_HREF}
              style={{
                padding: "18px 52px",
                background: "var(--gold)", color: "#fff",
                textDecoration: "none", fontSize: 11, letterSpacing: 3,
                textTransform: "uppercase", fontWeight: 500, transition: "all 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "var(--gold-light)")}
              onMouseLeave={(e) => (e.target.style.background = "var(--gold)")}
            >
              Send a Message
            </a>
          </div>

          {/* Contact info row */}
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            {CONTACT_DETAILS.map(({ icon, text, href }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 14 }}>{icon}</span>
                {href ? (
                  <a href={href} style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 300, textDecoration: "none" }}>
                    {text}
                  </a>
                ) : (
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>{text}</span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
