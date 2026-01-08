import { useEffect, useRef, useState } from "react";
import "../styles/stats.css";

const formatComma = (n) => n.toLocaleString("en-US");
const formatOneDecimal = (n) => {
  const s = n.toFixed(1);
  return s.endsWith(".0") ? s.slice(0, -2) : s;
};

function useCountUp(target, durationMs = 1200, decimals = 0) {
  const [val, setVal] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const step = (t) => {
      if (!startRef.current) startRef.current = t;
      const progress = Math.min((t - startRef.current) / durationMs, 1);

      const current = target * progress;
      setVal(current);

      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, durationMs]);

  // kəsr istəsən (1.4 kimi)
  return decimals ? Number(val.toFixed(decimals)) : Math.round(val);
}

export default function Stats() {
  const c1700 = useCountUp(1700, 800, 0); // sürətli
  const c14 = useCountUp(1.4, 1600, 1); // yavaş
  const c40 = useCountUp(40, 2000, 0); // daha yavaş

  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          <div className="stat">
            <div className="stat__value">{formatComma(c1700)}+</div>
            <div className="stat__text">
              Over than 1700 companies <br /> using Brand India
            </div>
          </div>

          <div className="stat">
            <div className="stat__value">${formatOneDecimal(c14)}+ billion</div>
            <div className="stat__text">
              Helped clients generate over <br /> $1.4B funding
            </div>
          </div>

          <div className="stat">
            <div className="stat__value">{formatComma(c40)}+ years</div>
            <div className="stat__text">
              With over 40 years of global <br /> business experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
