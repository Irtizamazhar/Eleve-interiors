'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const stats = [
  { end: 350, suffix: '+', label: 'Projects' },
  { end: 98, suffix: '%', label: 'Satisfaction' },
  { end: 12, suffix: '', label: 'Awards' },
  { end: 40, suffix: '+', label: 'Team Members' },
];

function AnimatedNumber({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const progress = Math.min(elapsed / 2, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, inView]);
  return <span>{count}{suffix}</span>;
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <AnimateOnScroll delay={0}>
      <section ref={ref} className="bg-bgDark py-20">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-6 md:gap-12">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-8">
              <div className="text-center">
                <span className="font-playfair text-4xl font-extrabold text-gold md:text-[3.5rem]">
                  <AnimatedNumber end={s.end} suffix={s.suffix} inView={inView} />
                </span>
                <p className="mt-2 font-montserrat text-xs uppercase tracking-wider text-white">
                  {s.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden h-14 w-px bg-gold/60 md:block" />
              )}
            </div>
          ))}
        </div>
      </section>
    </AnimateOnScroll>
  );
}
