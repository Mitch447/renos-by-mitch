import { FadeIn, GoldAccent } from "./utils";

const CREDENTIALS = [
  "Red Seal Certified Carpenter",
  "Member, Greater Vancouver Home Builders' Association",
  "Licensed & Fully Insured in British Columbia",
  "Over 200 residential projects completed",
];

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 8vw", background: "var(--ivory)" }}>
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>

        {/* Photo block */}
        <FadeIn>
          <div style={{ position: "relative" }}>
            <div style={{
              width: "100%", paddingBottom: "130%",
              background: "linear-gradient(160deg, #2A2520, var(--graphite))",
              position: "relative", overflow: "hidden",
            }}>
              {/*
                TODO: Replace this placeholder with a real photo of Mitch.
                <img src="/images/mitch.jpg" alt="Mitch Sullivan" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              */}
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div className="display" style={{ fontSize: 100, color: "rgba(184,147,90,0.15)", fontWeight: 300 }}>M</div>
                <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginTop: 8 }}>
                  Mitch Sullivan
                </div>
              </div>
            </div>

            {/* Offset years-of-experience badge */}
            <div style={{
              position: "absolute", bottom: -32, right: -32,
              width: 160, height: 120,
              background: "var(--charcoal)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: 4,
            }}>
              <div className="display" style={{ fontSize: 36, fontWeight: 300, color: "var(--gold)" }}>20</div>
              <div style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.4)", textAlign: "center", lineHeight: 1.6 }}>
                Years<br />Experience
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Copy */}
        <FadeIn delay={0.2}>
          <div>
            <GoldAccent />
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 300, lineHeight: 1.1, color: "var(--charcoal)", marginBottom: 32 }}>
              Meet <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Mitch</em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", fontWeight: 300, marginBottom: 24 }}>
              Mitch Sullivan has been transforming homes in North and West Vancouver for over twenty years.
              What started as a passion for craftsmanship became a commitment: to run the kind of
              renovation company he wished had existed when he renovated his own first home.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", fontWeight: 300, marginBottom: 40 }}>
              Every project Mitch takes on, he manages personally. He believes that your home is your most
              significant investment — and that it deserves the full weight of his experience, his network,
              and his name behind every decision made.
            </p>

            {/* Credentials list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {CREDENTIALS.map((c) => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 20, height: 1, background: "var(--gold)", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "var(--graphite)", fontWeight: 300 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
}
