import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState(false);
  const isMobile = useIsMobile();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        "service_ani8i5a",
        "template_8qxavoa",
        form.current,
        "Z3-K96bRYFHghMHeW"
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result);
          setStatus("success");
          setLoading(false);
          form.current?.reset();
        },
        (error) => {
          console.error("EMAILJS ERROR:", error);
          setStatus("error");
          setLoading(false);
        }
      );
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    fontSize: "14px",
    fontFamily: "'DM Sans', sans-serif",
    background: "#f8f4ef",
    border: "1px solid #e0d5c0",
    borderRadius: "3px",
    color: "#2a1f0e",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div style={{ background: "#f8f4ef", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>

      {/* EN-TÊTE */}
      <section style={{ borderBottom: "1px solid #e0d5c0", padding: isMobile ? "60px 24px 40px" : "80px 40px 60px", maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: ".15em", textTransform: "uppercase", color: "#c17f24", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ display: "inline-block", width: "32px", height: "1px", background: "#c17f24" }} />
          Contact
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, fontWeight: 700 }}>
          Parlons de votre<br />
          <em style={{ color: "#c17f24" }}>projet</em>
        </h1>
      </section>

      {/* CONTENU */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "40px 24px" : "60px 40px", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr", gap: isMobile ? "40px" : "80px", alignItems: "start" }}>

        {/* Infos */}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.8 }}>
            Un projet en tête, une question, une opportunité d'alternance ?
            N'hésite pas à m'écrire, je réponds rapidement.
          </p>
          <div>
            {[
              { label: "Email", value: "sophiemorales6440@gmail.com", href: "mailto:sophiemorales6440@gmail.com" },
              { label: "GitHub", value: "sophiemorales6440", href: "https://github.com/sophiemorales6440" },
              { label: "LinkedIn", value: "sophie-morales", href: "https://www.linkedin.com/in/sophie-morales-30292b397/" },
              { label: "Localisation", value: "Landes, France", href: null },
            ].map(({ label, value, href }) => (
              <div key={label} style={{ padding: "18px 0", borderBottom: "1px solid #e0d5c0", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#c17f24" }}>{label}</span>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "14px", color: "#2a1f0e", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#c17f24")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#2a1f0e")}
                  >
                    {value}
                  </a>
                ) : (
                  <span style={{ fontSize: "14px", color: "#2a1f0e" }}>{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire */}
        <div style={{ background: "#f0e6d3", padding: isMobile ? "28px 24px" : "40px", borderRadius: "4px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", marginBottom: "32px", color: "#2a1f0e" }}>
            M'envoyer un message
          </h2>
          <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { name: "user_name", label: "Nom", type: "text", placeholder: "Ton nom" },
              { name: "user_email", label: "Email", type: "email", placeholder: "Ton email" },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#666" }}>{label}</label>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = "#c17f24")}
                  onBlur={e => (e.currentTarget.style.borderColor = "#e0d5c0")}
                />
              </div>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#666" }}>Message</label>
              <textarea
                name="message"
                placeholder="Ton message"
                required
                rows={5}
                style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
                onFocus={e => (e.currentTarget.style.borderColor = "#c17f24")}
                onBlur={e => (e.currentTarget.style.borderColor = "#e0d5c0")}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{ marginTop: "8px", background: loading ? "#c4846a" : "#c17f24", color: "#fff", padding: "14px 28px", fontSize: "13px", letterSpacing: ".08em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, border: "none", borderRadius: "3px", cursor: loading ? "not-allowed" : "pointer", alignSelf: "flex-start" }}
            >
              {loading ? "Envoi en cours…" : "Envoyer ↗"}
            </button>
          </form>

          {status === "success" && (
            <p style={{ marginTop: "20px", fontSize: "14px", color: "#2d8a4e", padding: "12px 16px", background: "#edf7f1", borderLeft: "3px solid #2d8a4e", borderRadius: "2px" }}>
              Message envoyé avec succès !
            </p>
          )}
          {status === "error" && (
            <p style={{ marginTop: "20px", fontSize: "14px", color: "#c0392b", padding: "12px 16px", background: "#fdf0ee", borderLeft: "3px solid #c0392b", borderRadius: "2px" }}>
              Une erreur est survenue. Réessaie.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}