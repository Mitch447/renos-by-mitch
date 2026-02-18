import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, GoldAccent } from "./utils";

const REVIEWS = [
  {
    quote: "We'd had two bad experiences with contractors before finding Mitch. The difference was night and day. Our kitchen renovation came in exactly on budget, two days ahead of schedule, and the quality is simply stunning. We finally have the home we always envisioned.",
    author: "Catherine & Robert H.",
    location: "North Vancouver",
    project: "Full Kitchen & Dining Renovation",
  },
  {
    quote: "Mitch's team turned our dated 1980s master suite into something out of a design magazine. What impressed us most wasn't just the craftsmanship — it was the communication. We always knew what was happening, and they respected our space completely.",
    author: "Margaret L.",
    location: "West Vancouver",
    project: "Master Suite Renovation",
  },
  {
    quote: "At our stage of life, we weren't willing to settle. We wanted it done right, the first time. Renos By Mitch delivered precisely that. Two years later, everything still looks and works perfectly. Worth every cent.",
    author: "David & Susan T.",
    location: "Lions Bay",
    project: "Whole-Home Renovation",
  },
];

const TRUST_BADGES = [
  ["200+", "Projects\nCompleted"],
  ["A+",   "BBB\nRating"],
  ["100%", "Licensed\n& Insured"],
  ["5★",   "Google\nReviews"],
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" style={{ padding: "120px 8vw", background: "var(--warm-white)" }}>

      {/* Heading */}
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
            <GoldAccent style={{ margin: "0 auto" }} />
          </div>
          <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, lineHeight: 1.1, color: "var(--charcoal)" }}>
            Client <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Stories</em>
          </h2>
        </div>
      </FadeIn>

      {/* Carousel */}
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ textAlign: "center", padding: "0 40px", marginBottom: 48 }}>
              <p className="display" style={{
                fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 300,
                lineHeight: 1.6, color: "var(--charcoal)", fontStyle: "italic", marginBottom: 40,
              }}>
                "{REVIEWS[active].quote}"
              </p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{ width: 32, height: 1, background: "var(--gold)", marginBottom: 16 }} />
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--charcoal)", letterSpacing: 1 }}>
                  {REVIEWS[active].author}
                </div>
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "var(--stone)" }}>
                  {REVIEWS[active].location}
                </div>
                <div style={{ fontSize: 11, letterSpacing: 1, color: "var(--gold)", marginTop: 4 }}>
                  {REVIEWS[active].project}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot / line pagination */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Review ${i + 1}`}
              style={{
                width: i === active ? 32 : 8,
                height: 1,
                background: i === active ? "var(--gold)" : "rgba(184,147,90,0.3)",
                border: "none", cursor: "pointer",
                transition: "all 0.3s", padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* Trust badges */}
      <FadeIn delay={0.3}>
        <div style={{ display: "flex", justifyContent: "center", gap: 60, marginTop: 80, flexWrap: "wrap" }}>
          {TRUST_BADGES.map(([number, label]) => (
            <div key={number} style={{ textAlign: "center" }}>
              <div className="display" style={{ fontSize: 40, fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>
                {number}
              </div>
              <div style={{
                fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
                color: "var(--stone)", marginTop: 8,
                whiteSpace: "pre-line", lineHeight: 1.6,
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
