import { useEffect, useState } from "react";

type QuoteType = {
  content: string;
  author: string;
};

export default function Quote() {
  const [quote, setQuote] = useState<QuoteType | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchQuote() {
    setLoading(true);
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();
      setQuote({ content: data.value, author: "Chuck Norris" });
    } catch {
      setQuote({ content: "Impossible de charger la citation.", author: "" });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <section style={{
      background: "#2a1f0e",
      color: "#f8f4ef",
      padding: "60px 40px",
      textAlign: "center",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <p style={{
        fontSize: "11px", letterSpacing: ".15em", textTransform: "uppercase",
        color: "#c17f24", marginBottom: "28px",
        display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
      }}>
        <span style={{ display: "inline-block", width: "32px", height: "1px", background: "#c17f24" }} />
        Chuck Norris facts
        <span style={{ display: "inline-block", width: "32px", height: "1px", background: "#c17f24" }} />
      </p>

      <div style={{ maxWidth: "640px", margin: "0 auto", minHeight: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {loading ? (
          <p style={{ color: "#666", fontStyle: "italic", fontSize: "15px" }}>Chargement…</p>
        ) : (
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(16px, 2.5vw, 22px)",
            fontStyle: "italic",
            lineHeight: 1.6,
            color: "#f8f4ef",
          }}>
            "{quote?.content}"
          </p>
        )}
      </div>

      {!loading && quote?.author && (
        <p style={{
          marginTop: "20px",
          fontSize: "12px", letterSpacing: ".1em", textTransform: "uppercase",
          color: "#c17f24",
        }}>
          — {quote.author}
        </p>
      )}

      <button
        onClick={fetchQuote}
        disabled={loading}
        style={{
          marginTop: "32px",
          background: "transparent",
          border: "1px solid #444",
          color: "#f8f4ef",
          padding: "10px 24px",
          fontSize: "12px", letterSpacing: ".1em", textTransform: "uppercase",
          fontFamily: "'DM Sans', sans-serif",
          borderRadius: "3px",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "border-color .2s, color .2s",
          opacity: loading ? 0.5 : 1,
        }}
        onMouseEnter={e => {
          if (!loading) {
            e.currentTarget.style.borderColor = "#c17f24";
            e.currentTarget.style.color = "#c17f24";
          }
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "#444";
          e.currentTarget.style.color = "#f8f4ef";
        }}
      >
        Nouvelle citation →
      </button>
    </section>
  );
}