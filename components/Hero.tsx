'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollArrow from './ScrollArrow';

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + Math.random() * 90}%`,
  top: `${10 + Math.random() * 80}%`,
  delay: Math.random() * 4,
  duration: 3 + Math.random() * 4,
}));

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-dark pt-[120px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
          alt="Luxury interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,8,6,0.75), rgba(10,8,6,0.85))',
          }}
        />
      </div>

      {/* Corner decorations */}
      <div className="pointer-events-none absolute left-0 top-0 z-[2] h-20 w-20 border-l-2 border-t-2 border-gold" />
      <div className="pointer-events-none absolute right-0 top-0 z-[2] h-20 w-20 border-r-2 border-t-2 border-gold" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-[2] h-20 w-20 border-b-2 border-l-2 border-gold" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-[2] h-20 w-20 border-b-2 border-r-2 border-gold" />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute z-[2] h-1 w-1 rounded-full bg-gold/60"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [-20, -120], opacity: [0.6, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-[2] mx-auto max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-montserrat text-[9px] uppercase tracking-[7px] text-gold"
          style={{ letterSpacing: '7px' }}
        >
          Interior Design · Architecture · Construction
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-4 font-playfair text-cream"
          style={{
            fontSize: 'clamp(56px, 9vw, 120px)',
            lineHeight: 1.1,
          }}
        >
          Spaces That
          <br />
          <span className="italic text-gold">Define You</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-4 font-montserrat text-[10px] uppercase tracking-[7px] text-taupe"
          style={{ letterSpacing: '7px' }}
        >
          RESIDENTIAL | COMMERCIAL | RETAIL
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.1 }}
          className="mx-auto mt-4 h-px w-[60px] bg-gold"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25 }}
          className="mt-4 font-cormorant text-lg italic text-taupe2"
        >
          Crafting environments that reflect your vision
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="bg-gradient-to-r from-gold to-gold2 px-8 py-3 font-montserrat text-sm font-medium uppercase tracking-wider text-dark transition-opacity hover:opacity-95"
          >
            Explore Work
          </Link>
          <Link
            href="#contact"
            className="border border-gold px-8 py-3 font-montserrat text-sm uppercase tracking-wider text-gold transition-colors hover:bg-gold/10"
          >
            Book Consultation
          </Link>
        </motion.div>
      </div>

      <ScrollArrow />
    </section>
  );
}
