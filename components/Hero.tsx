'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollArrow from './ScrollArrow';

const words = ['Spaces','That','Define','You'];
const heroLoopLines = [
  'Crafting Luxury Interiors...',
  'Transforming Your Spaces...',
  'Designing Dream Homes...',
  'Building Premium Offices...',
];

function TypewriterWord({
  text,
  startDelayMs,
  speedMs,
  className = '',
}: {
  text: string;
  startDelayMs: number;
  speedMs: number;
  className?: string;
}) {
  const [shown, setShown] = useState('');

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    setShown('');
    timeoutId = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length && intervalId) clearInterval(intervalId);
      }, speedMs);
    }, startDelayMs);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, startDelayMs, speedMs]);

  return (
    <span
      className={className}
      style={{ display: 'inline-block', minWidth: `${text.length}ch` }}
    >
      {shown}
    </span>
  );
}

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [typedLine, setTypedLine] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fullLine = heroLoopLines[lineIndex];
    const typeSpeed = deleting ? 40 : 70;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = fullLine.slice(0, typedLine.length + 1);
        setTypedLine(next);
        if (next === fullLine) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        const next = fullLine.slice(0, Math.max(typedLine.length - 1, 0));
        setTypedLine(next);
        if (next.length === 0) {
          setDeleting(false);
          setLineIndex((prev) => (prev + 1) % heroLoopLines.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [typedLine, deleting, lineIndex]);

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-bgDark pt-32 md:pt-[160px]">
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          src="/videos/hero-7578546.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 100%)',
          }}
        />
      </div>

      <div className="pointer-events-none absolute left-0 top-0 z-[2] h-12 w-12 border-l-2 border-t-2 border-gold md:h-20 md:w-20" />
      <div className="pointer-events-none absolute right-0 top-0 z-[2] h-12 w-12 border-r-2 border-t-2 border-gold md:h-20 md:w-20" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-[2] h-12 w-12 border-b-2 border-l-2 border-gold md:h-20 md:w-20" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-[2] h-12 w-12 border-b-2 border-r-2 border-gold md:h-20 md:w-20" />

      <div className="relative z-[2] mx-auto max-w-6xl px-4 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:text-xs sm:tracking-[0.2em] md:text-sm"
          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.85), 0 0 14px rgba(0,0,0,0.55)' }}
        >
          INTERIOR DESIGN · ARCHITECTURE · CONSTRUCTION
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-x-1 font-playfair text-white sm:gap-x-1.5"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.15,
          }}
        >
          {words.map((word, i) => (
            <TypewriterWord
              key={word}
              text={word}
              startDelayMs={600 + i * 140}
              speedMs={55}
              className={word === 'You' ? 'italic text-gold' : undefined}
            />
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-4 font-cormorant text-lg text-white/80"
        >
          {typedLine}
          <span className="blink-cursor ml-0.5 text-[#C9A84C]">|</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            href="#projects"
            className="w-full max-w-[290px] rounded-md bg-gold px-6 py-3 text-center font-montserrat text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.03] hover:bg-goldHover sm:w-auto sm:px-8"
          >
            Explore Our Work
          </Link>
          <Link
            href="#contact"
            className="w-full max-w-[290px] rounded-md border-2 border-white px-6 py-3 text-center font-montserrat text-sm uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-textDark sm:w-auto sm:px-8"
          >
            Book Free Consultation
          </Link>
        </motion.div>
      </div>

      <ScrollArrow />
    </section>
  );
}
