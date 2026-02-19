import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STATS = [
  [],
  [],
  ["20yr", "Experience"],
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh", position: "relative",
        display: "flex", alignItems: "center",
        overflow: "hidden", background: "var(--charcoal)",
      }}
    >
      {/* Parallax background */}
      <motion.div style={{ position: "absolute", inset: 0, y }}>
        {/* Background photo */}
<img
  src="/iStock-1034604148.jpg"
  alt="North Vancouver"
  style={{
    position: "absolute", inset: 0,
    width: "100%", height: "100%",
    objectFit: "cover", objectPosition: "center",
  }}
/>
{/* Dark overlay so text remains readable */}
<div style={{
  position: "absolute", inset: 0,
  background: "linear-gradient(to right, rgba(28,28,28,0.85) 0%, rgba(28,28,28,0.5) 60%, rgba(28,28,28,0.3) 100%)",
}} />
{/* Warm radial glow */}
<div style={{
  position: "absolute", inset: 0,
  background: "radial-gradient(ellipse at 30% 50%, rgba(184,147,90,0.12) 0%, transparent 60%)",
}} />
      </motion.div>

      {/* Large decorative year */}
      <div
        className="display"
        style={{
          position: "absolute", right: "-2%", top: "10%",
          fontSize: "clamp(160px, 22vw, 320px)",
          fontWeight: 300, color: "rgba(255,255,255,0.03)",
          lineHeight: 1, userSelect: "none", letterSpacing: -8,
        }}
      >
        2010
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, position: "relative", zIndex: 10, width: "100%", padding: "120px 8vw 80px" }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}
        >
          <div style={{ width: 40, height: 1, background: "var(--gold)" }} />
          <span style={{
            fontSize: 11, letterSpacing: 4, textTransform: "uppercase",
            color: "var(--gold)", fontWeight: 400,
          }}>
            North Vancouver · Since 2010
          </span>
        </motion.div>

        {/* Headline */}
        <div style={{ maxWidth: 900 }}>
          <motion.h1
            className="display"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontSize: "clamp(52px, 8vw, 120px)",
              fontWeight: 300, lineHeight: 0.95,
              color: "#fff", letterSpacing: -2, marginBottom: 32,
            }}
          >
            Your Home,<br />
            <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Transformed</em><br />
            <span style={{ fontSize: "0.75em" }}>With Intention</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            style={{
              fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.8,
              color: "rgba(255,255,255,0.55)", maxWidth: 520,
              fontWeight: 300, marginBottom: 52,
            }}
          >
            Residential renovations crafted for those who understand that the spaces we inhabit
            shape the lives we lead. Precision craftsmanship, honest timelines, exceptional results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}
          >
            <a
              href="#contact"
              style={{
                padding: "16px 44px",
                background: "var(--gold)", color: "#fff",
                textDecoration: "none", fontSize: 11, letterSpacing: 3,
                textTransform: "uppercase", fontWeight: 500, transition: "all 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "var(--gold-light)")}
              onMouseLeave={(e) => (e.target.style.background = "var(--gold)")}
            >
              Book Free Consultation
            </a>
            <a
              href="#process"
              style={{
                color: "rgba(255,255,255,0.5)", textDecoration: "none",
                fontSize: 11, letterSpacing: 3, textTransform: "uppercase",
                display: "flex", alignItems: "center", gap: 12,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              See how we work
              <svg width="32" height="1" viewBox="0 0 32 1">
                <line x1="0" y1="0.5" x2="32" y2="0.5" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden-mobile"
          style={{ position: "absolute", bottom: 60, right: "8vw", display: "flex", gap: 48 }}
        >
          {STATS.map(([number, label]) => (
            <div key={label} style={{ textAlign: "right" }}>
              <div className="display" style={{ fontSize: 36, fontWeight: 300, color: "var(--gold-light)", lineHeight: 1 }}>
                {number}
              </div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: 6 }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Fade into next section */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 120,
        background: "linear-gradient(transparent, var(--warm-white))",
        zIndex: 5,
      }} />
    </section>
  );
}
