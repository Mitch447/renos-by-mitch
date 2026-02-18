import { FadeIn, GoldLine, GoldAccent } from "./utils";

const BENEFITS = [
  {
    icon: "◈",
    title: "Fixed, Transparent Pricing",
    body: "Our quotes are detailed, clear, and binding. No hidden costs, no surprise invoices. What we say it costs is what you pay.",
  },
  {
    icon: "◇",
    title: "Dedicated Project Manager",
    body: "One point of contact throughout your project. You'll always know exactly where things stand — no chasing, no confusion.",
  },
  {
    icon: "◉",
    title: "Vetted, Skilled Trades",
    body: "We work with a trusted network of craftspeople who share our standards. Every specialist is licensed, insured, and accountable.",
  },
  {
    icon: "◈",
    title: "Clean, Respectful Worksites",
    body: "We treat your home with the respect it deserves. Daily cleanup, protective measures, and courteous crews are non-negotiable.",
  },
  {
    icon: "◇",
    title: "On-Time Completion",
    body: "We build realistic timelines and honour them. Our scheduling discipline means your life gets back to normal when we said it would.",
  },
  {
    icon: "◉",
    title: "Craftsmanship Warranty",
    body: "We stand behind our work with a comprehensive warranty. If something isn't right, we make it right — without debate.",
  },
];

export default function Solution() {
  return (
    <section id="work" style={{ padding: "120px 8vw", background: "var(--ivory)" }}>

      {/* Header row */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 80, alignItems: "start", marginBottom: 80,
      }}
        className="solution-header"
      >
        <FadeIn>
          <div>
            <GoldAccent />
            <h2 className="display" style={{
              fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300,
              lineHeight: 1.1, color: "var(--charcoal)", marginBottom: 32,
            }}>
              The Standard<br />
              You <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Deserve</em>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: "var(--muted)", fontWeight: 300, maxWidth: 400 }}>
              At Renos By Mitch, we've built our reputation one meticulous project at a time.
              Our approach isn't just about making your home more beautiful — it's about making
              the entire experience feel effortless and worthy of your investment.
            </p>
          </div>
        </FadeIn>

        {/* Editorial image block */}
        <FadeIn delay={0.2}>
          <div style={{ position: "relative" }}>
            <div style={{
              width: "100%", paddingBottom: "120%",
              background: "linear-gradient(135deg, var(--charcoal) 0%, #2A2520 100%)",
              position: "relative", overflow: "hidden",
            }}>
              {/* Replace this div with an <img> tag pointing to a real photo */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div className="display" style={{ fontSize: 80, color: "rgba(184,147,90,0.2)", fontWeight: 300 }}>⌂</div>
                  <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginTop: 16 }}>
                    Crafted Interiors
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(245,240,232,0.3))" }} />
            </div>
            {/* Gold offset label */}
            <div style={{ position: "absolute", bottom: -20, left: -20, background: "var(--gold)", padding: "16px 28px" }}>
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#fff" }}>Est. 2010</div>
            </div>
          </div>
        </FadeIn>
      </div>

      <GoldLine style={{ marginBottom: 80, marginTop: 40 }} />

      {/* Benefits grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40 }}>
        {BENEFITS.map((b, i) => (
          <FadeIn key={b.title} delay={i * 0.08}>
            <div style={{ borderTop: "1px solid rgba(184,147,90,0.25)", paddingTop: 32 }}>
              <div style={{ fontSize: 20, color: "var(--gold)", marginBottom: 16 }}>{b.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 500, color: "var(--charcoal)", marginBottom: 12, letterSpacing: 0.3 }}>{b.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--muted)", fontWeight: 300 }}>{b.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .solution-header { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
