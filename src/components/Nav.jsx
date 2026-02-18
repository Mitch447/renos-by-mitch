import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = ["Process", "Work", "About", "Testimonials"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "20px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(250,250,247,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(184,147,90,0.15)" : "none",
      }}
    >
      {/* Logo */}
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
        <div style={{
          width: 32, height: 32,
          border: "1.5px solid var(--gold)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span className="display" style={{ color: "var(--gold)", fontSize: 14, fontWeight: 500, letterSpacing: 1 }}>M</span>
        </div>
        <span className="display" style={{
          fontSize: 15, letterSpacing: 2, fontWeight: 500,
          color: scrolled ? "var(--charcoal)" : "#fff",
          textTransform: "uppercase",
          transition: "color 0.4s",
        }}>
          Renos By Mitch
        </span>
      </a>

      {/* Desktop links */}
      <div className="hidden-mobile" style={{ display: "flex", gap: 40, alignItems: "center" }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontSize: 12, letterSpacing: 2, textTransform: "uppercase",
              color: scrolled ? "var(--muted)" : "rgba(255,255,255,0.6)",
              textDecoration: "none", fontWeight: 400,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.target.style.color = scrolled ? "var(--muted)" : "rgba(255,255,255,0.6)")}
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            padding: "10px 24px",
            border: "1px solid var(--gold)",
            color: "var(--gold)", textDecoration: "none",
            fontSize: 11, letterSpacing: 2, textTransform: "uppercase",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => { e.target.style.background = "var(--gold)"; e.target.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "var(--gold)"; }}
        >
          Consultation
        </a>
      </div>

      {/* Mobile burger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="show-mobile"
        style={{
          background: "none", border: "none", cursor: "pointer",
          display: "none", flexDirection: "column", gap: 5,
        }}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block", width: 24, height: 1.5,
              background: scrolled ? "var(--charcoal)" : "#fff",
              transition: "all 0.3s",
              transform:
                i === 0 && menuOpen ? "rotate(45deg) translate(4px,4px)" :
                i === 2 && menuOpen ? "rotate(-45deg) translate(4px,-4px)" : "none",
              opacity: i === 1 && menuOpen ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "absolute", top: "100%", left: 0, right: 0,
              background: "var(--warm-white)",
              borderBottom: "1px solid rgba(184,147,90,0.2)",
              padding: "24px 40px",
              display: "flex", flexDirection: "column", gap: 20,
            }}
          >
            {[...NAV_LINKS, "Consultation"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: 13, letterSpacing: 2, textTransform: "uppercase",
                  color: "var(--charcoal)", textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
