import { useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile"; 

const faces = {
  a: ["React", "TypeScript", "Tailwind CSS", "Figma", "HTML / CSS", "Vite"],
  b: ["Node.js", "Express", "MySQL", "REST API", "Git / GitHub", "TypeScript"],
};

export default function Cassette() {
  const isMobile = useIsMobile();
  const [currentFace, setCurrentFace] = useState<"a" | "b">("a");
  const [playing, setPlaying] = useState(true);

  const reelStyle: React.CSSProperties = {
  width: isMobile ? "48px" : "64px",
  height: isMobile ? "48px" : "64px",
  borderRadius: "50%",
  background: "#f0e6d3",
  border: "3px solid #d4cdc4",
  display: "flex", alignItems: "center", justifyContent: "center",
  position: "relative",
  animation: playing ? "spin 2s linear infinite" : "none",
};

  return (
<section style={{ 
  background: "#f2ece4", 
  padding: isMobile ? "24px 16px" : "60px 40px", 
  overflow: "hidden",
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  gap: "28px", 
  fontFamily: "'DM Sans', sans-serif" 
}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes tape-move { from { left: -30%; } to { left: 100%; } }
        .face-tab { padding: 8px 20px; font-size: 12px; letter-spacing: .1em; text-transform: uppercase; color: #aaa; cursor: pointer; border-bottom: 2px solid transparent; transition: all .2s; background: none; border-top: none; border-left: none; border-right: none; font-family: 'DM Sans', sans-serif; }
        .face-tab.active { color: #c17f24; border-bottom-color: #c17f24; }
        .face-tab:hover { color: #c17f24; }
      `}</style>

      {/* Étiquette */}
      <div style={{ background: "#c17f24", borderRadius: "3px", padding: "6px 20px", fontSize: "11px", letterSpacing: ".15em", textTransform: "uppercase", color: "#fff" }}>
        Sophie Morales · Dev portfolio
      </div>

      {/* Corps de la cassette */}
<div style={{ background: "#f8f4ef", borderRadius: "8px", padding: isMobile ? "16px" : "24px 32px", width: "100%", maxWidth: "520px", border: "1px solid #e0d5c0", overflow: "hidden" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <div>
            <div style={{ fontFamily: "'VT323', monospace", fontSize: "26px", color: "#2a1f0e", letterSpacing: ".08em" }}>SOPHIE_DEV</div>
            <div style={{ fontSize: "11px", color: "#999", letterSpacing: ".1em", textTransform: "uppercase" }}>Full Stack · Vol. 1</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "11px", color: "#c17f24", letterSpacing: ".1em", textTransform: "uppercase" }}>C-90</div>
            <div style={{ fontSize: "11px", color: "#999", letterSpacing: ".1em", textTransform: "uppercase" }}>CHROME</div>
          </div>
        </div>

        {/* Bobines */}
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: isMobile ? "30px" : "60px", margin: "8px 0 20px" }}>          <div style={{ ...reelStyle }}>
            {[0, 60, 120].map(deg => (
              <div key={deg} style={{ position: "absolute", width: "2px", height: "22px", background: "#ccc", borderRadius: "1px", transformOrigin: "center center", transform: `rotate(${deg}deg) translateY(-11px)` }} />
            ))}
            <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#c17f24" }} />
          </div>

          <div style={{ fontFamily: "'VT323', monospace", fontSize: "13px", color: "#bbb", letterSpacing: ".1em", textAlign: "center" }}>
            <div>PLAY</div>
            <div style={{ color: "#c17f24", fontSize: "18px" }}>&#9654;</div>
          </div>

          <div style={{ ...reelStyle, animation: playing ? "spin-reverse 2s linear infinite" : "none" }}>
            {[0, 60, 120].map(deg => (
              <div key={deg} style={{ position: "absolute", width: "2px", height: "22px", background: "#ccc", borderRadius: "1px", transformOrigin: "center center", transform: `rotate(${deg}deg) translateY(-11px)` }} />
            ))}
            <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#c17f24" }} />
          </div>
        </div>

        {/* Bande */}
        <div style={{ height: "6px", background: "#e0d5c0", borderRadius: "3px", margin: "0 8px 20px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "50%", width: "30%", height: "2px", background: "#c17f24", transform: "translateY(-50%)", animation: playing ? "tape-move 3s linear infinite" : "none", opacity: 0.5 }} />
        </div>

        {/* Onglets Face A / B */}
        <div style={{ display: "flex", borderBottom: "1px solid #e0d5c0", marginBottom: "16px" }}>
          <button className={`face-tab${currentFace === "a" ? " active" : ""}`} onClick={() => setCurrentFace("a")}>
            Face A — Frontend
          </button>
          <button className={`face-tab${currentFace === "b" ? " active" : ""}`} onClick={() => setCurrentFace("b")}>
            Face B — Backend
          </button>
        </div>

        {/* Skills */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {faces[currentFace].map(skill => (
            <div key={skill} style={{ background: "#f0e6d3", border: "1px solid #e0d5c0", borderRadius: "3px", padding: "8px 12px", fontSize: "12px", color: "#444", letterSpacing: ".06em", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c17f24", flexShrink: 0, display: "inline-block" }} />
              {skill}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px", paddingTop: "12px", borderTop: "1px solid #e0d5c0" }}>
          <div style={{ fontFamily: "'VT323', monospace", fontSize: "14px", color: "#bbb", letterSpacing: ".08em" }}>
            WILD CODE SCHOOL · 2026
          </div>
          <button
            onClick={() => setPlaying(p => !p)}
            style={{ background: "#c17f24", color: "#fff", border: "none", borderRadius: "3px", padding: "6px 16px", fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
          >
            {playing ? "⏸ Pause" : "▶ Play"}
          </button>
        </div>
      </div>

      <div style={{ fontSize: "11px", color: "#aaa", letterSpacing: ".08em", textTransform: "uppercase" }}>
        Be kind, rewind  😉
      </div>
    </section>
  );
}