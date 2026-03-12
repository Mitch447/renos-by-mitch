import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
    :root {
      --ivory: #F5F0E8; --warm-white: #FAFAF7; --charcoal: #1C1C1C;
      --graphite: #3A3A3A; --stone: #8A8278; --gold: #B8935A;
      --gold-light: #D4AF82; --muted: #6B6560;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { background: var(--warm-white); color: var(--charcoal); font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
    .display { font-family: 'Cormorant Garamond', Georgia, serif; }
    ::selection { background: var(--gold); color: #fff; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--ivory); }
    ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 2px; }
    .grain::after { content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 9999; opacity: 0.025; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); }
  `}</style>
);

const FadeIn = ({ children, delay = 0, y = 40, style = {} }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} style={style}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >{children}</motion.div>
  );
};

const GoldAccent = () => <div style={{ width: 48, height: 2, background: "var(--gold)", marginBottom: 24 }} />;
const GoldLine = () => <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(184,147,90,0.4), transparent)" }} />;

// Photo slot — pass src when ready, shows branded placeholder until then
const Photo = ({ src, alt, style = {} }) => (
  <div style={{ overflow: "hidden", background: "linear-gradient(135deg, #2A2520, var(--graphite))", ...style }}>
    {src
      ? <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      : <div style={{ width: "100%", height: "100%", minHeight: 200, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div className="display" style={{ fontSize: 48, color: "rgba(184,147,90,0.2)", fontWeight: 300 }}>⌂</div>
          <div style={{ fontSize: 9, letterSpacing: 4, color: "rgba(255,255,255,0.2)", textTransform: "uppercase" }}>{alt}</div>
        </div>
    }
  </div>
);

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["Work", "Process", "About", "Contact"];
  return (
    <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "all 0.4s ease", background: scrolled ? "rgba(250,250,247,0.96)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(184,147,90,0.15)" : "none" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 32, height: 32, border: "1.5px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span className="display" style={{ color: "var(--gold)", fontSize: 14, fontWeight: 500 }}>M</span>
        </div>
        <span className="display" style={{ fontSize: 15, letterSpacing: 2, fontWeight: 500, color: scrolled ? "var(--charcoal)" : "#fff", textTransform: "uppercase", transition: "color 0.4s" }}>Renos By Mitch</span>
      </div>
      <div style={{ display: "flex", gap: 40, alignItems: "center" }} className="nav-links">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: scrolled ? "var(--muted)" : "rgba(255,255,255,0.6)", textDecoration: "none", fontWeight: 400, transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "var(--gold)"}
            onMouseLeave={e => e.target.style.color = scrolled ? "var(--muted)" : "rgba(255,255,255,0.6)"}
          >{l}</a>
        ))}
        <a href="#contact" style={{ padding: "10px 24px", border: "1px solid var(--gold)", color: "var(--gold)", textDecoration: "none", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", transition: "all 0.3s" }}
          onMouseEnter={e => { e.target.style.background = "var(--gold)"; e.target.style.color = "#fff"; }}
          onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "var(--gold)"; }}
        >Get in Touch</a>
      </div>
      <button onClick={() => setMenuOpen(!menuOpen)} className="nav-burger"
        style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: 5 }}
      >
        {[0,1,2].map(i => (
          <span key={i} style={{ display: "block", width: 24, height: 1.5, background: scrolled ? "var(--charcoal)" : "#fff", transition: "all 0.3s",
            transform: i===0 && menuOpen ? "rotate(45deg) translate(4px,4px)" : i===2 && menuOpen ? "rotate(-45deg) translate(4px,-4px)" : "none",
            opacity: i===1 && menuOpen ? 0 : 1 }} />
        ))}
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "var(--warm-white)", borderBottom: "1px solid rgba(184,147,90,0.2)", padding: "24px 40px", display: "flex", flexDirection: "column", gap: 20 }}
          >
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "var(--charcoal)", textDecoration: "none" }}
              >{l}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`@media(max-width:768px){.nav-links{display:none!important}.nav-burger{display:flex!important}}`}</style>
    </motion.nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  // ── PHOTO SLOT: set to your hero image path when ready ──
  const HERO_IMAGE = null;
  return (
    <section ref={ref} style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", background: "var(--charcoal)" }}>
      <motion.div style={{ position: "absolute", inset: 0, y }}>
        {HERO_IMAGE
          ? <img src={HERO_IMAGE} alt="Renos By Mitch kitchen renovation" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }} />
          : <>
              <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(184,147,90,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(184,147,90,0.06) 1px,transparent 1px)`, backgroundSize: "80px 80px" }} />
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%,rgba(184,147,90,0.12) 0%,transparent 60%)" }} />
            </>
        }
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(28,28,28,0.88) 55%, rgba(28,28,28,0.3))" }} />
      </motion.div>
      <div className="display" style={{ position: "absolute", right: "-2%", top: "10%", fontSize: "clamp(160px,22vw,320px)", fontWeight: 300, color: "rgba(255,255,255,0.03)", lineHeight: 1, userSelect: "none", letterSpacing: -8 }}>2026</div>
      <motion.div style={{ opacity, position: "relative", zIndex: 10, width: "100%", padding: "140px 8vw 100px" }}>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}
        >
          <div style={{ width: 40, height: 1, background: "var(--gold)" }} />
          <span style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "var(--gold)", fontWeight: 400 }}>North Vancouver · Est. 2026</span>
        </motion.div>
        <div style={{ maxWidth: 860 }}>
          <motion.h1 className="display" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ fontSize: "clamp(52px,8vw,114px)", fontWeight: 300, lineHeight: 0.95, color: "#fff", letterSpacing: -2, marginBottom: 36 }}
          >
            Kitchens. Bathrooms.<br />
            <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>And the Details.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7 }}
            style={{ fontSize: "clamp(15px,1.5vw,18px)", lineHeight: 1.85, color: "rgba(255,255,255,0.6)", maxWidth: 500, fontWeight: 300, marginBottom: 56 }}
          >
            I take on a small number of projects at a time so I can give each one the attention it deserves. My goal is simple — do great work and make the whole experience as enjoyable as possible.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
            style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}
          >
            <a href="#contact" style={{ padding: "18px 48px", background: "var(--gold)", color: "#fff", textDecoration: "none", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 500, transition: "all 0.3s", display: "inline-block" }}
              onMouseEnter={e => e.target.style.background = "var(--gold-light)"}
              onMouseLeave={e => e.target.style.background = "var(--gold)"}
            >Start a Conversation</a>
            <a href="#work" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12, transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
            >See Our Work <svg width="32" height="1" viewBox="0 0 32 1"><line x1="0" y1="0.5" x2="32" y2="0.5" stroke="currentColor" strokeWidth="1"/></svg></a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}
          style={{ position: "absolute", bottom: 60, right: "8vw", display: "flex", gap: 48 }} className="hero-stats"
        >
          {[["15+","Years Experience"],["100%","Owner-Led"],["North Van","Only"]].map(([n,l]) => (
            <div key={l} style={{ textAlign: "right" }}>
              <div className="display" style={{ fontSize: 32, fontWeight: 300, color: "var(--gold-light)", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(transparent,var(--warm-white))", zIndex: 5 }} />
      <style>{`@media(max-width:768px){.hero-stats{display:none!important}}`}</style>
    </section>
  );
}

// ── Difference ────────────────────────────────────────────────────────────────
function Difference() {
  const points = [
    { num: "01", title: "I Care", body: "I'm on your job every day. You'll have my direct number and I'll keep you in the loop as things progress. No chasing, no wondering where things are at." },
    { num: "02", title: "A Personal Experience", body: "Renovations can be stressful — I get it, I've been on both sides of it. I work hard to keep things calm, clear, and even enjoyable. You should feel good about the process, not just the result." },
    { num: "03", title: "Kitchens & Bathrooms at Heart", body: "Most of my work is kitchens and bathrooms — that's where my experience runs deepest. I'm also open to the right custom project, so if you have something in mind, it's worth a conversation." },
    { num: "04", title: "Straight Shooting", body: "I'll give you an honest estimate, a realistic timeline, and a straight answer to every question. If something changes, I'll tell you upfront — what it means, what it costs, and why." },
  ];
  return (
    <section id="difference" style={{ padding: "120px 8vw", background: "var(--warm-white)" }}>
      <FadeIn>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 80, marginBottom: 80, flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 auto", maxWidth: 380 }}>
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
      <GoldLine />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 1, background: "rgba(184,147,90,0.12)", marginTop: 1 }}>
        {points.map((p, i) => (
          <FadeIn key={p.num} delay={i * 0.1}>
            <div style={{ padding: "48px 40px", background: "var(--warm-white)", transition: "background 0.3s", cursor: "default" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--ivory)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--warm-white)"}
            >
              <div className="display" style={{ fontSize: 12, letterSpacing: 4, color: "var(--gold)", marginBottom: 24, fontWeight: 500 }}>{p.num}</div>
              <h3 className="display" style={{ fontSize: 24, fontWeight: 400, color: "var(--charcoal)", marginBottom: 16, lineHeight: 1.2 }}>{p.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--muted)", fontWeight: 300 }}>{p.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ── Work ──────────────────────────────────────────────────────────────────────
function Work() {
  // ── PHOTO SLOTS — replace null with your image paths ──
  // e.g. "/images/kitchen-1.jpg"
  const photos = [
    { src: "/project-1.jpg", alt: "Kitchen Renovation" },
    { src: "/project-2.jpg", alt: "Kitchen Detail — Custom Pantry" },
    { src: null, alt: "Project Photo 3" },
    { src: null, alt: "Project Photo 4" },
    { src: null, alt: "Project Photo 5" },
  ];
  return (
    <section id="work" style={{ padding: "120px 8vw", background: "var(--ivory)" }}>
      <FadeIn>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 32 }}>
          <div>
            <GoldAccent />
            <h2 className="display" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, lineHeight: 1.1, color: "var(--charcoal)" }}>
              Recent<br/><em style={{ color: "var(--gold)", fontStyle: "italic" }}>Projects</em>
            </h2>
          </div>
      
        </div>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 12 }}>
        <FadeIn style={{ gridColumn: "1/7", gridRow: "1/3" }}>
          <Photo src={photos[0].src} alt={photos[0].alt} style={{ height: 520 }} />
        </FadeIn>
        <FadeIn delay={0.1} style={{ gridColumn: "7/13", gridRow: "1/2" }}>
          <Photo src={photos[1].src} alt={photos[1].alt} style={{ height: 254 }} />
        </FadeIn>
        <FadeIn delay={0.2} style={{ gridColumn: "7/13", gridRow: "2/3" }}>
          <Photo src={photos[2].src} alt={photos[2].alt} style={{ height: 254 }} />
        </FadeIn>
        <FadeIn delay={0.15} style={{ gridColumn: "1/7", gridRow: "3/4" }}>
          <Photo src={photos[3].src} alt={photos[3].alt} style={{ height: 320 }} />
        </FadeIn>
        <FadeIn delay={0.25} style={{ gridColumn: "7/13", gridRow: "3/4" }}>
          <Photo src={photos[4].src} alt={photos[4].alt} style={{ height: 320 }} />
        </FadeIn>
      </div>

    </section>
  );
}

// ── Process ───────────────────────────────────────────────────────────────────
function Process() {
  const steps = [
    { step: "01", title: "We Talk", time: "Day 1", body: "When you reach out, I call you back myself. We'll have a relaxed conversation about what you're thinking — your space, your ideas, your timeline. No pressure, just a chat." },
    { step: "02", title: "I Come to You", time: "Week 1", body: "I'll come see the space in person. We'll walk through it together and discuss your ideas — from there I'll put together an estimate." },
    { step: "03", title: "An Estimate", time: "Week 1–2", body: "I'll put together a written estimate covering materials, labour, and timeline. From there, as selections get finalized, we can work toward a detailed quote before anything gets started." },
    { step: "04", title: "We Get to Work", time: "Scheduled Start", body: "I show up when I say I will. I'll keep you updated as we go, and you'll always have my number if something comes up or you have a question." },
    { step: "05", title: "Final Walkthrough", time: "On Schedule", body: "When the work is done, we walk through it together. I want to make sure you're genuinely happy with everything before I consider the job finished." },
  ];
  return (
    <section id="process" style={{ padding: "120px 8vw", background: "var(--charcoal)" }}>
      <FadeIn>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 80, flexWrap: "wrap", gap: 32 }}>
          <div>
            <GoldAccent />
            <h2 className="display" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, lineHeight: 1.1, color: "#fff" }}>
              How I<br/><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Work</em>
            </h2>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.4)", fontWeight: 300, maxWidth: 340 }}>
            Here's what working together actually looks like, from the first message to handing back your space.
          </p>
        </div>
      </FadeIn>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {steps.map((s, i) => (
          <FadeIn key={s.step} delay={i * 0.1}>
            <div className="process-row" style={{ display: "grid", gridTemplateColumns: "80px 1fr 180px", gap: 40, padding: "40px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", alignItems: "start" }}>
              <div className="display" style={{ fontSize: 13, letterSpacing: 3, color: "var(--gold)", fontWeight: 500, paddingTop: 4 }}>{s.step}</div>
              <div>
                <h3 className="display" style={{ fontSize: 28, fontWeight: 400, color: "#fff", marginBottom: 12, lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.85, color: "rgba(255,255,255,0.45)", fontWeight: 300, maxWidth: 520 }}>{s.body}</p>
              </div>
              <div style={{ textAlign: "right", paddingTop: 4 }}>
                <span style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>{s.time}</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      <style>{`@media(max-width:768px){.process-row{grid-template-columns:50px 1fr!important}.process-row>div:last-child{display:none}}`}</style>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────
function Testimonials() {
  const [active, setActive] = useState(0);
  // ── Replace with real testimonials when you have them ──
  const reviews = [
    { quote: "We'd been a bit anxious going in — it's a big investment and you hear stories. But Mitch was easy to work with from day one. He kept us informed, the kitchen came out beautifully, and the whole thing was much less stressful than we expected.", author: "Sarah & Tom K.", location: "North Vancouver", project: "Full Kitchen Renovation" },
    { quote: "Mitch was on site every day and easy to reach whenever we had questions. The bathroom turned out exactly how we'd hoped — clean, well finished, and on budget. We'd absolutely work with him again.", author: "Jennifer M.", location: "North Vancouver", project: "Master Bathroom Renovation" },
    { quote: "We appreciated how straightforward the whole process was. The estimate was clear, the timeline was accurate, and the finished kitchen is something we're really proud of. Good work and a good experience.", author: "David & Carol P.", location: "North Vancouver", project: "Kitchen & Powder Room" },
  ];
  return (
    <section id="testimonials" style={{ padding: "120px 8vw", background: "var(--warm-white)" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}><GoldAccent /></div>
          <h2 className="display" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, lineHeight: 1.1, color: "var(--charcoal)" }}>
            What People<br/><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Have Said</em>
          </h2>
        </div>
      </FadeIn>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <div style={{ textAlign: "center", padding: "0 40px", marginBottom: 48 }}>
              <div className="display" style={{ fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 300, lineHeight: 1.7, color: "var(--charcoal)", fontStyle: "italic", marginBottom: 40 }}>
                "{reviews[active].quote}"
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{ width: 32, height: 1, background: "var(--gold)", marginBottom: 16 }} />
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--charcoal)", letterSpacing: 1 }}>{reviews[active].author}</div>
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "var(--stone)" }}>{reviews[active].location}</div>
                <div style={{ fontSize: 11, letterSpacing: 1, color: "var(--gold)", marginTop: 4 }}>{reviews[active].project}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ width: i===active ? 32 : 8, height: 1, background: i===active ? "var(--gold)" : "rgba(184,147,90,0.3)", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
          ))}
        </div>
      </div>
      <FadeIn delay={0.3}>
        <div style={{ display: "flex", justifyContent: "center", gap: 60, marginTop: 80, flexWrap: "wrap" }}>
          {[["15+","Years\nExperience"],["100%","Owner\nOn Site"],["North Van","Only\nService Area"]].map(([n,l]) => (
            <div key={n} style={{ textAlign: "center" }}>
              <div className="display" style={{ fontSize: 36, fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "var(--stone)", marginTop: 8, whiteSpace: "pre-line", lineHeight: 1.6 }}>{l}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────
function About() {
  // ── PHOTO SLOT — replace null with Mitch's photo when ready ──
  const MITCH_PHOTO = null;
  return (
    <section id="about" style={{ padding: "120px 8vw", background: "var(--ivory)" }}>
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>
        <FadeIn>
          <div style={{ position: "relative" }}>
            <Photo src={MITCH_PHOTO} alt="Mitch Baniulis — General Contractor" style={{ width: "100%", height: 560 }} />
            <div style={{ position: "absolute", bottom: -32, right: -32, width: 160, height: 120, background: "var(--charcoal)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 4 }}>
              <div className="display" style={{ fontSize: 36, fontWeight: 300, color: "var(--gold)" }}>15+</div>
              <div style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.4)", textAlign: "center", lineHeight: 1.6 }}>Years in<br/>North Van</div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div>
            <GoldAccent />
            <h2 className="display" style={{ fontSize: "clamp(32px,4vw,54px)", fontWeight: 300, lineHeight: 1.1, color: "var(--charcoal)", marginBottom: 32 }}>
              Meet <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Mitch</em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", fontWeight: 300, marginBottom: 24 }}>
              Mitch Baniulis has been working in renovation and construction in North Vancouver for over 15 years. Renos By Mitch grew out of a simple idea — that doing fewer projects and doing them really well was more rewarding than doing a lot of them.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", fontWeight: 300, marginBottom: 24 }}>
              Most of my work is kitchens and bathrooms — that's where my experience runs deepest and where I genuinely love the process. I'm also open to custom work and detail-oriented projects where that same care and craftsmanship applies.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", fontWeight: 300, marginBottom: 40 }}>
              A renovation is a big deal. It's your home, your money, and a real disruption to your daily life. I take that seriously. My goal isn't just a beautiful finished space — it's that you look back on the whole experience and feel good about it.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {["Licensed General Contractor — British Columbia","Fully insured, WorkSafeBC compliant","Based in North Vancouver since 2026","Kitchens, bathrooms & custom detail work"].map(c => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 20, height: 1, background: "var(--gold)", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "var(--graphite)", fontWeight: 300 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:60px!important}}`}</style>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", project: "", message: "" });
  const [status, setStatus] = useState("idle");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mnjbzoew", {
        method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  };
  const inp = {
    width: "100%", padding: "14px 0", background: "transparent", border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.15)", color: "#fff",
    fontSize: 15, fontFamily: "'DM Sans',sans-serif", fontWeight: 300, outline: "none", transition: "border-color 0.3s",
  };
  const lbl = { fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", fontWeight: 400, display: "block", marginBottom: 4, marginTop: 32 };
  const focus = e => e.target.style.borderBottomColor = "var(--gold)";
  const blur  = e => e.target.style.borderBottomColor = "rgba(255,255,255,0.15)";
  return (
    <section id="contact" style={{ padding: "120px 8vw", background: "var(--charcoal)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -100, top: -100, width: 500, height: 500, borderRadius: "50%", border: "1px solid rgba(184,147,90,0.06)", pointerEvents: "none" }} />
      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start", position: "relative", zIndex: 10 }}>
        <FadeIn>
          <GoldAccent />
          <h2 className="display" style={{ fontSize: "clamp(40px,6vw,80px)", fontWeight: 300, lineHeight: 0.95, color: "#fff", marginBottom: 32, letterSpacing: -1 }}>
            Let's talk<br/>about your<br/><em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>project.</em>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: "rgba(255,255,255,0.45)", fontWeight: 300, maxWidth: 400, marginBottom: 56 }}>
            Fill in the form and I'll get back to you personally — usually within a day. We'll have a conversation, figure out if it's a good fit, and go from there.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[["✉","info@renosbymitch.ca"],["⊕","North Vancouver, BC"],["◷","Mon – Sat, 7am – 6pm"]].map(([icon,text]) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontSize: 14, color: "var(--gold)" }}>{icon}</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>{text}</span>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          {status === "sent"
            ? <div style={{ paddingTop: 40 }}>
                <div style={{ width: 48, height: 48, border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32 }}>
                  <span style={{ color: "var(--gold)", fontSize: 20 }}>✓</span>
                </div>
                <h3 className="display" style={{ fontSize: 32, fontWeight: 300, color: "#fff", marginBottom: 16 }}>Message received.</h3>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", fontWeight: 300, lineHeight: 1.8 }}>I'll be in touch shortly. Looking forward to hearing about your project.</p>
              </div>
            : <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                  <div>
                    <label style={lbl}>Your Name</label>
                    <input required style={inp} placeholder="Jane Smith" value={form.name} onChange={e => setForm({...form,name:e.target.value})} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label style={lbl}>Phone</label>
                    <input style={inp} placeholder="(604) 555-0123" type="tel" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} onFocus={focus} onBlur={blur} />
                  </div>
                </div>
                <div>
                  <label style={lbl}>Email Address</label>
                  <input required type="email" style={inp} placeholder="jane@email.com" value={form.email} onChange={e => setForm({...form,email:e.target.value})} onFocus={focus} onBlur={blur} />
                </div>
                <div>
                  <label style={lbl}>What are you looking to renovate?</label>
                  <select style={{...inp, appearance:"none", cursor:"pointer"}} value={form.project} onChange={e => setForm({...form,project:e.target.value})} onFocus={focus} onBlur={blur}>
                    <option value="" style={{background:"#1C1C1C"}}>Select one...</option>
                    <option value="Kitchen" style={{background:"#1C1C1C"}}>Kitchen</option>
                    <option value="Bathroom" style={{background:"#1C1C1C"}}>Bathroom</option>
                    <option value="Kitchen & Bathroom" style={{background:"#1C1C1C"}}>Kitchen & Bathroom</option>
                    <option value="Custom / Other" style={{background:"#1C1C1C"}}>Custom / Other</option>
                    <option value="Not sure yet" style={{background:"#1C1C1C"}}>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label style={lbl}>Tell Mitch a bit about your project</label>
                  <textarea style={{...inp, resize:"none", minHeight:100}} placeholder="Size of the space, what you're hoping to change, rough timeline..." value={form.message} onChange={e => setForm({...form,message:e.target.value})} onFocus={focus} onBlur={blur} />
                </div>
                <button type="submit" disabled={status==="sending"} style={{ marginTop: 40, padding: "18px 52px", background: status==="sending" ? "transparent" : "var(--gold)", border: "1px solid var(--gold)", color: status==="sending" ? "var(--gold)" : "#fff", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 500, cursor: status==="sending" ? "wait" : "pointer", transition: "all 0.3s", fontFamily: "'DM Sans',sans-serif" }}
                  onMouseEnter={e => { if(status!=="sending"){e.target.style.background="var(--gold-light)";e.target.style.borderColor="var(--gold-light)";}}}
                  onMouseLeave={e => { if(status!=="sending"){e.target.style.background="var(--gold)";e.target.style.borderColor="var(--gold)";}}}
                >{status==="sending" ? "Sending..." : "Send Message"}</button>
                {status==="error" && <p style={{marginTop:16,fontSize:13,color:"#e88",fontWeight:300}}>Something went wrong. Please email info@renosbymitch.ca directly.</p>}
              </form>
          }
        </FadeIn>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;gap:60px!important}}input::placeholder,textarea::placeholder{color:rgba(255,255,255,0.2)}`}</style>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#111", padding: "60px 8vw 40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 40, marginBottom: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 28, height: 28, border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="display" style={{ color: "var(--gold)", fontSize: 12, fontWeight: 500 }}>M</span>
            </div>
            <span className="display" style={{ fontSize: 14, letterSpacing: 2, color: "#fff", textTransform: "uppercase" }}>Renos By Mitch</span>
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.8, color: "rgba(255,255,255,0.3)", fontWeight: 300, maxWidth: 260 }}>
            Kitchen &amp; bathroom renovations in North Vancouver. Good work, good experience.
          </p>
        </div>
        <div style={{ display: "flex", gap: 60, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20, fontWeight: 500 }}>Navigate</div>
            {["Work","Process","About","Contact"].map(l => (
              <div key={l} style={{ marginBottom: 12 }}>
                <a href={`#${l.toLowerCase()}`} style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: 0.5, transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "var(--gold-light)"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.35)"}
                >{l}</a>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20, fontWeight: 500 }}>Services</div>
            {["Kitchen Renovations","Bathroom Renovations","Custom Detail Work","North Vancouver"].map(s => (
              <div key={s} style={{ marginBottom: 12 }}>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: 0.5 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: 0.5 }}>© 2026 Renos By Mitch. All rights reserved. North Vancouver, BC.</span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.15)", letterSpacing: 0.5 }}>Licensed & Insured · BC Contractor #[Your License #]</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="grain">
      <FontLink />
      <Nav />
      <main>
        <Hero />
        <Difference />
        <Work />
        <Process />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
