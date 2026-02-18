const NAV_LINKS = ["Process", "Work", "About", "Testimonials", "Contact"];

const SERVICES = [
  "Kitchen Renovations",
  "Bathroom Remodels",
  "Basement Finishing",
  "Whole-Home Renovations",
  "Additions & Extensions",
];

export default function Footer() {
  return (
    <footer style={{ background: "#111", padding: "60px 8vw 40px" }}>

      {/* Top row */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-start", flexWrap: "wrap",
        gap: 40, marginBottom: 48,
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{
              width: 28, height: 28,
              border: "1px solid var(--gold)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span className="display" style={{ color: "var(--gold)", fontSize: 12, fontWeight: 500 }}>M</span>
            </div>
            <span className="display" style={{ fontSize: 14, letterSpacing: 2, color: "#fff", textTransform: "uppercase" }}>
              Renos By Mitch
            </span>
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.8, color: "rgba(255,255,255,0.3)", fontWeight: 300, maxWidth: 280 }}>
            Residential renovations in North and West Vancouver,
            crafted with precision and pride since 2005.
          </p>
        </div>

        {/* Link columns */}
        <div style={{ display: "flex", gap: 60, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20, fontWeight: 500 }}>
              Navigate
            </div>
            {NAV_LINKS.map((link) => (
              <div key={link} style={{ marginBottom: 12 }}>
                <a
                  href={`#${link.toLowerCase()}`}
                  style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: 0.5, transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--gold-light)")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.35)")}
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20, fontWeight: 500 }}>
              Services
            </div>
            {SERVICES.map((s) => (
              <div key={s} style={{ marginBottom: 12 }}>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: 0.5 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: 32,
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: 16,
      }}>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: 0.5 }}>
          © {new Date().getFullYear()} Renos By Mitch. All rights reserved. North Vancouver, BC.
        </span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.15)", letterSpacing: 0.5 }}>
          Licensed & Insured · BC Contractor #12345
        </span>
      </div>
    </footer>
  );
}
