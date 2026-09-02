import Stats from "../components/Stats";
import { useIsMobile } from "../hooks/useIsMobile";


export default function About() {
  const isMobile = useIsMobile();

  const skills = [
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "JavaScript", level: 90 },
    { name: "MySQL", level: 70 },
    { name: "Git", level: 80 },
  ];

  return (
    <div style={{ background: "#f8f4ef", color: "#2a1f0e", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>

      {/* EN-TÊTE */}
      <section style={{ borderBottom: "1px solid #e0d5c0", padding: isMobile ? "60px 24px 40px" : "80px 40px 60px", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "40px", maxWidth: "1100px", margin: "0 auto" }}>
        <div>
          <p style={{ fontSize: "11px", letterSpacing: ".15em", textTransform: "uppercase", color: "#c17f24", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ display: "inline-block", width: "32px", height: "1px", background: "#c17f24" }} />
            À propos
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, fontWeight: 700, marginBottom: "24px" }}>
            Qui suis-je,<br /><em style={{ color: "#c17f24" }}>vraiment ?</em>
          </h1>
          <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.8 }}>
            Passionnée par le développement et la création web, je crée des applications modernes et performantes.
            J'aime résoudre des problèmes complexes, et transformer des idées en produits concrets.
            Mon approche allie créativité et rigueur technique.
          </p>
        </div>

        {/* Carte identité */}
        <div style={{ background: "#f0e6d3", borderRadius: "4px", padding: "36px", display: "flex", flexDirection: "column", gap: "0", alignSelf: "start" }}>
          {[
            { label: "Formation", value: "Wild Code School — Bac+2 Web · GRETA-CFA Aquitaine — RNCP 6 (en cours)" },
            { label: "Spécialité", value: "Full Stack · React & Node.js" },
            { label: "Localisation", value: "Landes, France 🌲" },
            { label: "Disponibilité", value: "Alternance recherchée — dès le 5 octobre 2026" },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: "4px", paddingBottom: "20px", marginBottom: "20px", borderBottom: "1px solid #e0d5c0" }}>
              <span style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#c17f24" }}>{label}</span>
              <span style={{ fontSize: "15px", color: "#2a1f0e" }}>{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section style={{ padding: isMobile ? "40px 24px" : "60px 40px", maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: ".15em", textTransform: "uppercase", color: "#c17f24", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ display: "inline-block", width: "32px", height: "1px", background: "#c17f24" }} />
          Compétences
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", marginBottom: "48px" }}>
          Mon <em style={{ fontStyle: "italic", color: "#c17f24" }}>stack</em> technique
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px" }}>
          {skills.map(({ name, level }) => (
            <div key={name} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "14px", fontWeight: 500 }}>{name}</span>
                <span style={{ fontSize: "12px", color: "#c17f24" }}>{level}%</span>
              </div>
              <div style={{ height: "3px", background: "#e0d5c0", borderRadius: "2px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${level}%`, background: "#c17f24", borderRadius: "2px" }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CITATION */}
     <Stats/>
     </div>
  );
}