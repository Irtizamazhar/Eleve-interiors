'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { end: 350, suffix: '+', label: 'Projects' },
  { end: 10, suffix: '+', label: 'Years' },
  { end: 98, suffix: '%', label: 'Satisfaction' },
  { end: 12, suffix: '', label: 'Awards' },
];

function AnimatedNumber({
  end,
  suffix,
  duration = 2,
  inView,
}: {
  end: number;
  suffix: string;
  duration?: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="border-y border-gold/30 bg-cream py-12"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-6 md:gap-12">
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center gap-8">
            <div className="text-center">
              <span className="font-playfair text-4xl font-semibold text-gold md:text-5xl">
                <AnimatedNumber
                  end={s.end}
                  suffix={s.suffix}
                  inView={inView}
                />
              </span>
              <p className="font-montserrat text-xs uppercase tracking-wider text-taupe">
                {s.label}
              </p>
            </div>
            {i < stats.length - 1 && (
              <div className="hidden h-12 w-px bg-gold/50 md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
