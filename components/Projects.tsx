'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const projects = [
  { id: 1, src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', title: 'Luxury Office Suite', category: 'Commercial Interior' },
  { id: 2, src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', title: 'Contemporary Villa', category: 'Residential Design' },
  { id: 3, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', title: 'Fine Dining Space', category: 'Restaurant Design' },
  { id: 4, src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80', title: 'Premium Showroom', category: 'Retail Design' },
  { id: 5, src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80', title: 'Artisan Cafe', category: 'Cafe Design' },
  { id: 6, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', title: 'Garden Courtyard', category: 'Landscape Design' },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-bgLight py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll delay={0}>
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-gold">RECENT WORK</p>
          <h2 className="mt-2 font-playfair text-3xl font-semibold text-textDark md:text-4xl">
            We Produce the Finest Interior Solutions
          </h2>
        </AnimateOnScroll>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <AnimateOnScroll key={p.id} delay={i * 0.1}>
              <Link
                href="#contact"
                className="group relative block h-[280px] w-full overflow-hidden rounded-card transition-all duration-400 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="relative h-full w-full">
<Image
                    src={p.src}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <div
                  className="absolute inset-0 flex flex-col items-center justify-end bg-[rgba(201,168,76,0.88)] p-6 transition-transform duration-400 group-hover:translate-y-0"
                  style={{ transform: 'translateY(100%)' }}
                >
                  <h3 className="font-playfair text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{p.category}</p>
                  <span className="mt-3 inline-block rounded border-2 border-white px-4 py-2 font-montserrat text-xs font-medium uppercase text-white transition-colors group-hover:bg-white group-hover:text-textDark">
                    View Project →
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
