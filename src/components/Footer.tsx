import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "#2a1f0e", padding: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", borderTop: "1px solid #2a2a2a" }}>

      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontStyle: "italic", color: "#f8f4ef" }}>
        Sophie M.
      </span>

      <div style={{ display: "flex", gap: "24px", alignItems: "center", color: "#666", fontSize: "20px" }}>
        <a href="https://github.com/sophiemorales6440" target="_blank" rel="noopener noreferrer" style={{ color: "#666" }}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sophie-morales-30292b397/" target="_blank" rel="noopener noreferrer" style={{ color: "#666" }}>
          <FaLinkedin />
        </a>
        <Link to="/contact" style={{ color: "#666" }}>
          <FaEnvelope />
        </Link>
      </div>

      <p style={{ fontSize: "12px", color: "#444" }}>
        &copy; 2026 Sophie Morales
      </p>

    </footer>
  );
}