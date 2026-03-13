import { FadeIn, GoldLine, GoldAccent } from "./utils";

const PAINS = [
  {
    num: "01",
    title: "I Care",
    body: "I'm on your job every day. You'll have my direct number and I'll keep you in the loop as things progress. No chasing, no wondering where things are at.",
  },
  {
    num: "02",
    title: "A Personal Experience",
    body: "Renovations can be stressful — I get it, I've been on both sides of it. I work hard to keep things calm, clear, and enjoyable. You should feel good about the result and the process.",
  },
  {
    num: "03",
    title: "Kitchens & Bathrooms at Heart",
    body: "Most of my work is kitchens and bathrooms — that's where my experience runs deepest. I'm also open to the right custom project, so if you have something in mind, it's worth a conversation.",
  },
  {
    num: "04",
    title: "Straight Shooting",
    body: "I'll give you an honest estimate, a realistic timeline, and a straight answer to every question. If something changes, I'll tell you upfront — what it means, what it costs, and why.",
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
            <h2 className="display" style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: 300, lineHeight: 1.1, color: "var(--charcoal)" }}>
              How I like<br/><em style={{ color: "var(--gold)", fontStyle: "italic" }}>to work</em>
            </h2>
          </div>
          <div style={{ flex: 1, minWidth: 280, paddingTop: 8 }}>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: "var(--muted)", fontWeight: 300, maxWidth: 480 }}>
              I started Renos By Mitch because I wanted to build something where the client experience mattered as much as the finished product. For me that means staying small, staying hands-on, and caring about every detail — not just the ones that are easy to see.
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
