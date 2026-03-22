import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ background: "#f8f4ef", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
      <div style={{ maxWidth: "600px", width: "100%", textAlign: "center" }}>

        <style>{`@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');`}</style>

        {/* Numéro 404 style VHS */}
        <div style={{ fontFamily: "'VT323', monospace", fontSize: "clamp(80px, 20vw, 160px)", lineHeight: 1, color: "#c17f24", marginBottom: "8px", letterSpacing: ".05em" }}>
          404
        </div>

        {/* Étiquette cassette */}
        <div style={{ display: "inline-block", background: "#2a1f0e", borderRadius: "3px", padding: "6px 20px", fontSize: "11px", letterSpacing: ".15em", textTransform: "uppercase", color: "#f8f4ef", marginBottom: "40px" }}>
          Erreur de lecture — Page introuvable
        </div>

        {/* Ligne décorative */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center", marginBottom: "32px" }}>
          <span style={{ display: "inline-block", width: "48px", height: "1px", background: "#e0d5c0" }} />
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "13px", color: "#999", fontStyle: "italic" }}>face B introuvable</span>
          <span style={{ display: "inline-block", width: "48px", height: "1px", background: "#e0d5c0" }} />
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 4vw, 36px)", lineHeight: 1.2, fontWeight: 700, marginBottom: "16px", color: "#2a1f0e" }}>
          Cette page a été<br /><em style={{ color: "#c17f24" }}>effacée</em> ou n'existe pas
        </h1>

        <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.7, marginBottom: "40px", maxWidth: "400px", margin: "0 auto 40px" }}>
          Peut-être qu'elle la bande est cassée. Retourne à l'accueil et réessaie.
        </p>

        <Link
          to="/"
          style={{ display: "inline-block", background: "#c17f24", color: "#fff", padding: "13px 32px", fontSize: "13px", letterSpacing: ".08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "3px", fontWeight: 500 }}
        >
          Retour a l'accueil
        </Link>

      </div>
    </div>
  );
}