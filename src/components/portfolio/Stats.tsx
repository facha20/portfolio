import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 4, label: "Projets réalisés", suffix: "+" },
  { value: 12, label: "Technologies maîtrisées", suffix: "+" },
  { value: 500, label: "Heures de pratique", suffix: "+" },
  { value: 3, label: "Certifications", suffix: "" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10 rounded-3xl bg-gradient-brand shadow-elegant">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center text-primary-foreground"
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tight mb-1">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm opacity-90">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
