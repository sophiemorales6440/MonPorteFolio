import photoprofile from "../assets/images/profile.png";
import Projects from "../components/Projects";
import Cassette from "../components/Cassette";

export default function Home() {
  return (
    <div style={{ background: "#f8f4ef", color: "#2a1f0e", fontFamily: "'DM Sans', sans-serif" }}>

      {/* HERO */}
<section style={{
  background: "#f8f4ef",
  minHeight: "88vh",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
}}>
  {/* Cercles décoratifs */}
  <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "400px", height: "400px", borderRadius: "50%", background: "#f0e6d3", opacity: .7, zIndex: 0 }} />
  <div style={{ position: "absolute", left: "-40px", bottom: "40px", width: "120px", height: "120px", borderRadius: "50%", background: "#f0e6d3", opacity: .4, zIndex: 0 }} />
{/* Cercle gauche centre */}
<div style={{ position: "absolute", left: "10px", top: "40%", transform: "translateY(-50%)", width: "280px", height: "280px", borderRadius: "50%", background: "#f0e6d3", opacity: .5, zIndex: 0 }} />

{/* Cercle petit gauche bas */}
<div style={{ position: "absolute", left: "60px", bottom: "10px", width: "100px", height: "100px", borderRadius: "50%", background: "#e0d5c0", opacity: .4, zIndex: 0 }} />
  {/* Conteneur centré */}
  <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", padding: "100px 60px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "40px", position: "relative", zIndex: 1 }}>

    {/* Colonne gauche */}
    <div>
      <div style={{ fontFamily: "'VT323', monospace", fontSize: "13px", color: "#c17f24", letterSpacing: ".15em", marginBottom: "24px" }}>
        — portfolio 2026 —
      </div>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px, 5vw, 72px)", lineHeight: 1.05, fontWeight: 700, marginBottom: "8px", color: "#2a1f0e" }}>
        Bonjour,<br />je suis <em style={{ color: "#c17f24" }}>Sophie</em>
      </h1>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 3vw, 36px)", lineHeight: 1.1, fontWeight: 400, fontStyle: "italic", color: "#888", marginBottom: "28px" }}>
        Développeuse Full Stack 🍀
      </h2>
      <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.8, maxWidth: "420px", marginBottom: "32px" }}>
        Passionnée par la création d'expériences web, du backend à l'interface.
        Je construis des applications modernes avec React, Node.js et TypeScript.
      </p>

      {/* Carte identité */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
        <div style={{ width: "56px", height: "56px", borderRadius: "50%", overflow: "hidden", border: "2px solid #c17f24", flexShrink: 0 }}>
          <img src={photoprofile} alt="Sophie" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 38%" }} />
        </div>
        <div>
          <div style={{ fontSize: "14px", fontWeight: 500, color: "#2a1f0e" }}>Sophie Morales</div>
          <div style={{ fontSize: "11px", color: "#c17f24", letterSpacing: ".1em", textTransform: "uppercase" }}>Wild Code School 2026</div>
        </div>
      </div>

      {/* Boutons */}
      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
        <a href="#projects" style={{ background: "#c17f24", color: "#fff", padding: "13px 28px", fontSize: "13px", letterSpacing: ".06em", textTransform: "uppercase", textDecoration: "none", borderRadius: "3px", fontWeight: 500 }}>
          Voir mes projets
        </a>
        <a href="#contact" style={{ background: "transparent", color: "#2a1f0e", padding: "12px 28px", fontSize: "13px", letterSpacing: ".06em", textTransform: "uppercase", textDecoration: "none", border: "1px solid #2a1f0e", borderRadius: "3px" }}>
          Me contacter
        </a>
      </div>
    </div>

    {/* Colonne droite — cassette */}
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Cassette />
    </div>

  </div>
</section>
      {/* PROJETS */}
      <section id="projects" style={{ background: "#f8f4ef", padding: "0px 40px", fontFamily: "'DM Sans', sans-serif", borderTop: "1px solid #e0d5c0" }}></section>
      <Projects />

      {/* CONTACT */}
      <section id="contact" style={{ background: "#2a1f0e", padding: "80px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "11px", letterSpacing: ".15em", textTransform: "uppercase", color: "#c17f24", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ display: "inline-block", width: "32px", height: "1px", background: "#c17f24" }} />
            Contact
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", marginBottom: "14px", color: "#f8f4ef" }}>
            Travaillons<br /><em style={{ color: "#c17f24" }}>ensemble</em>
          </h2>
          <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7 }}>
            Un projet en tete ? N'hesite pas a me contacter, je serais ravie d'en discuter.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { href: "mailto:sophiemorales6440@gmail.com", icon: "✉", label: "sophiemorales6440@gmail.com" },
            { href: "https://github.com/sophiemorales6440", icon: "↗", label: "GitHub · sophiemorales6440" },
            { href: "https://www.linkedin.com/in/sophie-morales-30292b397/", icon: "in", label: "LinkedIn" },
          ].map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px 20px", border: "1px solid #3a2f1e", borderRadius: "4px", textDecoration: "none", color: "#f8f4ef", fontSize: "14px" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#c17f24")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#3a2f1e")}
            >
              <span style={{ color: "#c17f24" }}>{link.icon}</span> {link.label}
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}