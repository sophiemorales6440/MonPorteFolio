import photoprofile from "../assets/images/profile.png";

{/* HERO */}
<section style={{ background: "#f8f4ef", minHeight: "88vh", padding: "100px 60px 60px", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>

  {/* Cercles décoratifs */}
  <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "400px", height: "400px", borderRadius: "50%", background: "#f0e6d3", opacity: .7, zIndex: 0 }} />
  <div style={{ position: "absolute", right: "120px", bottom: "-80px", width: "220px", height: "220px", borderRadius: "50%", background: "#e0d5c0", opacity: .5, zIndex: 0 }} />
  <div style={{ position: "absolute", left: "-40px", bottom: "60px", width: "120px", height: "120px", borderRadius: "50%", background: "#f0e6d3", opacity: .4, zIndex: 0 }} />

  {/* Contenu */}
  <div style={{ position: "relative", zIndex: 1, maxWidth: "720px" }}>
    <div style={{ fontFamily: "'VT323', monospace", fontSize: "13px", color: "#c17f24", letterSpacing: ".15em", marginBottom: "24px" }}>
      — portfolio 2026 —
    </div>

    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px, 7vw, 80px)", lineHeight: 1.05, fontWeight: 700, marginBottom: "8px", color: "#2a1f0e" }}>
      Bonjour,<br />je suis <em style={{ color: "#c17f24" }}>Sophie</em>
    </h1>

    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 4vw, 40px)", lineHeight: 1.1, fontWeight: 400, fontStyle: "italic", color: "#888", marginBottom: "36px" }}>
      Développeuse Full Stack 🍀
    </h2>

    <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.8, maxWidth: "480px", marginBottom: "40px", fontFamily: "'DM Sans', sans-serif" }}>
      Passionnée par la création d'expériences web, du backend à l'interface.
      Je construis des applications modernes avec React, Node.js et TypeScript.
    </p>

    {/* Carte identité inline */}
    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
      <div style={{ width: "64px", height: "64px", borderRadius: "50%", overflow: "hidden", border: "2px solid #c17f24", flexShrink: 0 }}>
        <img src={photoprofile} alt="Sophie" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 38%" }} />
      </div>
      <div>
        <div style={{ fontSize: "14px", fontWeight: 500, color: "#2a1f0e", fontFamily: "'DM Sans', sans-serif" }}>Sophie Morales</div>
        <div style={{ fontSize: "11px", color: "#c17f24", letterSpacing: ".1em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>Wild Code School · 2026</div>
      </div>
    </div>

    {/* Boutons */}
    <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
      <a href="#projects" style={{ background: "#c17f24", color: "#fff", padding: "13px 28px", fontSize: "13px", letterSpacing: ".06em", textTransform: "uppercase", textDecoration: "none", borderRadius: "3px", fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
        Voir mes projets
      </a>
      <a href="#contact" style={{ background: "transparent", color: "#2a1f0e", padding: "12px 28px", fontSize: "13px", letterSpacing: ".06em", textTransform: "uppercase", textDecoration: "none", border: "1px solid #2a1f0e", borderRadius: "3px", fontFamily: "'DM Sans', sans-serif" }}>
        Me contacter
      </a>
    </div>
  </div>
</section>