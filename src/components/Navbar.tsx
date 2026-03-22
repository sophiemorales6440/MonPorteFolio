import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Navbar() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Accueil", end: true },
    { to: "/projects", label: "Projets" },
    { to: "/about", label: "À propos" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50,
      background: "rgba(250, 247, 242, 0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #e0d5c0",
    }}>
      <nav style={{
        maxWidth: "1200px", margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 24px", height: "64px",
      }}>

        {/* Logo */}
        <NavLink to="/" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "20px", fontStyle: "italic",
          color: "#2a1f0e", textDecoration: "none",
        }}>
          Sophie M.
        </NavLink>

        {/* Desktop — liens */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                style={({ isActive }) => ({
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px", letterSpacing: ".08em",
                  textTransform: "uppercase", textDecoration: "none",
                  color: isActive ? "#c17f24" : "#666",
                  borderBottom: isActive ? "1px solid #c17f24" : "1px solid transparent",
                  paddingBottom: "2px", transition: "color .2s",
                })}
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}

        {/* Mobile — burger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "flex", flexDirection: "column", gap: "5px" }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: "22px", height: "2px", background: "#2a1f0e", borderRadius: "1px",
                transition: "all .2s",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                  : i === 1 ? "opacity: 0"
                  : "rotate(-45deg) translate(5px, -5px)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        )}
      </nav>

      {/* Mobile — menu déroulant */}
      {isMobile && menuOpen && (
        <div style={{ background: "#f8f4ef", borderTop: "1px solid #e0d5c0", padding: "16px 24px", display: "flex", flexDirection: "column", gap: "0" }}>
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px", letterSpacing: ".08em",
                textTransform: "uppercase", textDecoration: "none",
                color: isActive ? "#c17f24" : "#666",
                padding: "14px 0",
                borderBottom: "1px solid #e0d5c0",
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}