import { useEffect, useState } from "react";

type QuoteType = {
  content: string;
  author: string;
};

export default function Quote() {
  const [quote, setQuote] = useState<QuoteType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        setQuote({ content: data.value, author: "Chuck Norris" });
      } catch {
        // Enlevez "err" si vous ne l'utilisez pas
        setQuote({ content: "Impossible de charger la citation.", author: "" });
      } finally {
        setLoading(false);
      }
    }

    fetchQuote();
  }, []);

  return (
    <section className="py-12 px-6 bg-gray-700 text-white text-center rounded-lg my-12 max-w-3xl mx-auto shadow-lg">
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <>
          <p className="text-xl italic">"{quote?.content}"</p>
          <p className="mt-4 font-semibold">- {quote?.author}</p>
        </>
      )}
    </section>
  );
}