'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const stats = [
  { end: 350, suffix: '+', label: 'Projects' },
  { end: 98, suffix: '%', label: 'Satisfaction' },
  { end: 12, suffix: '', label: 'Awards' },
  { end: 40, suffix: '+', label: 'Team' },
];

function AnimatedStat({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) {
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

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.45fr_0.55fr] lg:gap-16">
        <AnimateOnScroll direction="left" delay={0}>
          <div className="relative">
            <div
              className="pointer-events-none absolute z-10 border-[3px] border-gold"
              style={{ top: -12, left: -12, right: -12, bottom: -24, borderRadius: 6 }}
              aria-hidden
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[6px]">
              <Image
                src="/about-craftsmanship.png"
                alt="Premium interior design and craftsmanship"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
            <div className="absolute -bottom-3 right-6 z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-gold bg-bgDark p-2 text-center shadow-lg md:-bottom-4 md:right-8 md:h-28 md:w-28">
              <span className="font-playfair text-xl font-semibold leading-tight text-gold md:text-2xl">10+</span>
              <span className="mt-0.5 font-montserrat text-[7px] uppercase leading-tight tracking-wider text-white/80 md:text-[7px]">
                Years of Excellence
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right" delay={0.1}>
          <div ref={ref} className="flex flex-col justify-center">
            <div className="h-0.5 w-12 bg-gold" />
            <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              OUR STORY
            </p>
            <h2 className="mt-2 font-playfair text-3xl font-semibold text-textDark md:text-4xl">
              Where Design Meets <span className="italic text-gold">Craftsmanship</span>
            </h2>
            <p className="mt-6 font-cormorant text-lg text-textBody" style={{ lineHeight: 1.9 }}>
              At Elevé Interiors, we believe every space tells a story. From residential sanctuaries to commercial landmarks, we blend architectural precision with interior artistry to create environments that inspire and endure.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="font-playfair text-3xl font-bold text-gold md:text-4xl">
                    <AnimatedStat end={s.end} suffix={s.suffix} inView={inView} />
                  </span>
                  <p className="font-montserrat text-sm text-textBody">{s.label}</p>
                </div>
              ))}
            </div>
            <Link
              href="#contact"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-md bg-gold px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-goldHover hover:scale-[1.03]"
            >
              Get in Touch
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
