'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    title: 'Luxury Office Suite',
    category: 'Commercial Interior',
    span: 'lg:col-span-7 lg:row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    title: 'Contemporary Villa',
    category: 'Residential Design',
    span: 'lg:col-span-5',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    title: 'Fine Dining Space',
    category: 'Restaurant Design',
    span: 'lg:col-span-5',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80',
    title: 'Premium Showroom',
    category: 'Retail Design',
    span: 'lg:col-span-4',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
    title: 'Artisan Cafe',
    category: 'Cafe Design',
    span: 'lg:col-span-4',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    title: 'Garden Courtyard',
    category: 'Landscape Design',
    span: 'lg:col-span-4',
  },
];

export default function Projects() {
  const { ref, hasRevealed } = useScrollReveal(0.1);

  return (
    <section id="projects" ref={ref} className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mx-auto h-0.5 w-12 bg-gold" />
          <p
            className="mt-4 font-montserrat text-[10px] uppercase tracking-[5px] text-gold"
            style={{ letterSpacing: '5px' }}
          >
            Portfolio
          </p>
          <h2 className="mt-2 font-playfair text-3xl text-dark md:text-4xl">
            Selected <span className="italic text-gold">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group relative min-h-[280px] overflow-hidden md:min-h-[240px] ${p.span}`}
            >
              <Image
                src={p.src}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-dark/0 transition-colors duration-300 group-hover:bg-dark/80" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="font-playfair text-xl text-cream md:text-2xl">
                  {p.title}
                </h3>
                <p className="font-montserrat text-xs uppercase tracking-widest text-gold">
                  {p.category}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
