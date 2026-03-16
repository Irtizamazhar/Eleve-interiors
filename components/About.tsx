'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { value: '350+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12', label: 'Design Awards' },
  { value: '40+', label: 'Expert Team' },
];

export default function About() {
  const { ref, hasRevealed } = useScrollReveal(0.15);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-cream py-[110px]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-[90px] px-6 lg:grid-cols-2">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
              alt="Elevé Interiors craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gold frame effect */}
            <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-gold" />
            <div className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-gold" />
            <div className="absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-gold" />
            <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-gold" />
          </div>
          {/* Badge — 10+ & text circle ke andar, centered */}
          <div className="absolute -bottom-4 -right-4 flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-gold bg-dark p-2 text-center shadow-lg">
            <span className="font-playfair text-2xl font-semibold leading-tight text-gold">
              10+
            </span>
            <span className="mt-0.5 font-montserrat text-[7px] uppercase leading-tight tracking-wider text-taupe2">
              Years of Excellence
            </span>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col justify-center"
        >
          <div className="h-0.5 w-[46px] bg-gold" />
          <p
            className="mt-4 font-montserrat text-[10px] uppercase tracking-[5px] text-gold"
            style={{ letterSpacing: '5px' }}
          >
            Our Story
          </p>
          <h2 className="mt-2 font-playfair text-3xl text-dark md:text-4xl">
            Where Design Meets{' '}
            <span className="italic text-gold">Craftsmanship</span>
          </h2>
          <p
            className="mt-6 font-cormorant text-lg text-taupe"
            style={{ lineHeight: 1.8 }}
          >
            At Elevé Interiors, we believe every space tells a story. From
            residential sanctuaries to commercial landmarks, we blend
            architectural precision with interior artistry to create
            environments that inspire and endure.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div key={s.label}>
                <span className="font-playfair text-2xl font-semibold text-gold">
                  {s.value}
                </span>
                <p className="font-montserrat text-xs text-taupe">{s.label}</p>
              </div>
            ))}
          </div>
          <Link
            href="#contact"
            className="mt-8 inline-block w-fit border border-gold px-6 py-3 font-montserrat text-xs uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-dark"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
