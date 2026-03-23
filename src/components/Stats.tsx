import { useEffect, useState, useRef } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

const stats = [
  { value: 6, label: "Projets réalisés", suffix: "" },
  { value: 5, label: "Langages maîtrisés", suffix: "" },
  { value: 5, label: "Mois de formation", suffix: "" },
  { value: 100, label: "Lignes de passion", suffix: "%" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{ fontFamily: "'VT323', monospace", fontSize: "56px", color: "#c17f24", lineHeight: 1 }}>
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  const isMobile = useIsMobile();

  return (
    <section style={{ background: "#2a1f0e", padding: isMobile ? "40px 24px" : "60px 40px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: "40px" }}>
        {stats.map(({ value, label, suffix }) => (
          <div key={label} style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
            <Counter target={value} suffix={suffix} />
            <div style={{ width: "24px", height: "1px", background: "#c17f24", opacity: .6 }} />
            <div style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#888", fontFamily: "'DM Sans', sans-serif" }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}