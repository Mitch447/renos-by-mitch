import { FadeIn, GoldAccent } from "./utils";

const STEPS = [
  {
    step: "01",
    title: "Free Consultation",
    time: "Week 1",
    body: "We meet at your home. Mitch walks the space with you, listens to your vision, and provides an honest assessment. No pressure, no sales pitch — just clarity.",
  },
  {
    step: "02",
    title: "Detailed Proposal",
    time: "Week 1–2",
    body: "You receive a comprehensive, itemized quote with materials, labour, timeline, and milestones. Everything is transparent before a single tool is touched.",
  },
  {
    step: "03",
    title: "Design & Permits",
    time: "Weeks 2–4",
    body: "Our team handles all design coordination, material procurement, and permit applications. You make decisions on finishes and fixtures with our expert guidance.",
  },
  {
    step: "04",
    title: "Construction",
    time: "As Scheduled",
    body: "Our skilled crew executes with precision. Daily progress updates, weekly walkthroughs with you, and rigorous quality checks at every stage.",
  },
  {
    step: "05",
    title: "Final Reveal",
    time: "On Time",
    body: "We walk every inch of your newly renovated home together. Every detail is inspected, every last touch is perfect before we hand over the keys.",
  },
];

export default function Process() {
  return (
    <section id="process" style={{ padding: "120px 8vw", background: "var(--charcoal)" }}>

      {/* Section header */}
      <FadeIn>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: 80,
          flexWrap: "wrap", gap: 32,
        }}>
          <div>
            <GoldAccent />
            <h2 className="display" style={{
              fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300,
              lineHeight: 1.1, color: "#fff",
            }}>
              How It<br />
              <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Unfolds</em>
            </h2>
          </div>
          <p style={{
            fontSize: 15, lineHeight: 1.8,
            color: "rgba(255,255,255,0.4)", fontWeight: 300, maxWidth: 340,
          }}>
            A renovation should feel like a collaborative journey, not a gamble.
            Here's exactly what to expect when you work with Renos By Mitch.
          </p>
        </div>
      </FadeIn>

      {/* Steps */}
      <div>
        {STEPS.map((s, i) => (
          <FadeIn key={s.step} delay={i * 0.1}>
            <div
              className="process-row"
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 200px",
                gap: 40, padding: "40px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                alignItems: "start",
              }}
            >
              <div className="display" style={{ fontSize: 13, letterSpacing: 3, color: "var(--gold)", fontWeight: 500, paddingTop: 4 }}>
                {s.step}
              </div>
              <div>
                <h3 className="display" style={{ fontSize: 28, fontWeight: 400, color: "#fff", marginBottom: 12, lineHeight: 1.2 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.45)", fontWeight: 300, maxWidth: 480 }}>
                  {s.body}
                </p>
              </div>
              <div style={{ textAlign: "right", paddingTop: 4 }}>
                <span style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
                  {s.time}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-row { grid-template-columns: 50px 1fr !important; }
          .process-row > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
