'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollArrow from './ScrollArrow';

const words = ['Spaces', 'That', 'Define', 'You'];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-bgDark pt-[160px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
          alt="Luxury interior"
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
          sizes="100vw"
          unoptimized
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 100%)',
          }}
        />
      </div>

      <div className="pointer-events-none absolute left-0 top-0 z-[2] h-20 w-20 border-l-2 border-t-2 border-gold" />
      <div className="pointer-events-none absolute right-0 top-0 z-[2] h-20 w-20 border-r-2 border-t-2 border-gold" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-[2] h-20 w-20 border-b-2 border-l-2 border-gold" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-[2] h-20 w-20 border-b-2 border-r-2 border-gold" />

      <div className="relative z-[2] mx-auto max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] md:text-sm"
          style={{ color: 'var(--gold)', textShadow: '0 1px 2px rgba(0,0,0,0.85), 0 0 14px rgba(0,0,0,0.55)' }}
        >
          INTERIOR DESIGN · ARCHITECTURE · CONSTRUCTION
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-x-2 font-playfair text-white"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.15,
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6 + i * 0.12,
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {word === 'You' ? (
                <span className="italic text-gold">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-4 font-cormorant text-lg text-white/80"
        >
          Crafting environments that reflect your vision
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="rounded-md bg-gold px-8 py-3 font-montserrat text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.03] hover:bg-goldHover"
          >
            Explore Our Work
          </Link>
          <Link
            href="#contact"
            className="rounded-md border-2 border-white px-8 py-3 font-montserrat text-sm uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-textDark"
          >
            Book Free Consultation
          </Link>
        </motion.div>
      </div>

      <ScrollArrow />
    </section>
  );
}
