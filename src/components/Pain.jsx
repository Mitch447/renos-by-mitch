import { FadeIn, GoldLine, GoldAccent } from "./utils";

const PAINS = [
  {
    num: "01",
    title: "Contractors Who Disappear",
    body: "You've heard the stories — or lived them. Work stalls halfway through, calls go unanswered, and your home sits open and unfinished for months. You deserve a professional who shows up.",
  },
  {
    num: "02",
    title: "Budgets That Balloon",
    body: "What started as a reasonable quote somehow doubles by completion. Hidden costs, change-order surprises, and vague scopes leave you feeling taken advantage of in your own home.",
  },
  {
    num: "03",
    title: "Quality That Doesn't Last",
    body: "The tile grout cracks. The cabinetry warps. The paint peels. After investing in a renovation, the last thing you want is to do it over again in five years.",
  },
  {
    num: "04",
    title: "The Chaos and Disruption",
    body: "A renovation should feel exciting, not like a siege. Without the right team, your home becomes a construction zone that intrudes on every corner of your daily life — for far too long.",
  },
];

export default function Pain() {
  return (
    <section id="problem" style={{ padding: "120px 8vw", background: "var(--warm-white)" }}>

      {/* Section intro */}
      <FadeIn>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 80, marginBottom: 80, flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 auto", maxWidth: 400 }}>
            <GoldAccent />
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, lineHeight: 1.1, color: "var(--charcoal)" }}>
              Sound<br />
              <em style={{ color: "var(--stone)", fontStyle: "italic" }}>familiar?</em>
            </h2>
          </div>
          <div style={{ flex: 1, minWidth: 280, paddingTop: 8 }}>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: "var(--muted)", fontWeight: 300, maxWidth: 480 }}>
              For homeowners in their prime years — when your home should be a sanctuary, not a source
              of stress — a bad renovation experience is more than an inconvenience. It's a breach of trust.
            </p>
          </div>
        </div>
      </FadeIn>

      <GoldLine style={{ marginBottom: 80 }} />

      {/* Pain grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 1,
        background: "rgba(184,147,90,0.12)",
      }}>
        {PAINS.map((pain, i) => (
          <FadeIn key={pain.num} delay={i * 0.1}>
            <div
              style={{ padding: "48px 40px", background: "var(--warm-white)", transition: "background 0.3s", cursor: "default" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ivory)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--warm-white)")}
            >
              <div className="display" style={{ fontSize: 12, letterSpacing: 4, color: "var(--gold)", marginBottom: 24, fontWeight: 500 }}>
                {pain.num}
              </div>
              <h3 className="display" style={{ fontSize: 24, fontWeight: 400, color: "var(--charcoal)", marginBottom: 16, lineHeight: 1.2 }}>
                {pain.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--muted)", fontWeight: 300 }}>
                {pain.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
