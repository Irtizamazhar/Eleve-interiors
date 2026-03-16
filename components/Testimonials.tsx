'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const testimonials = [
  {
    quote: 'Elevé transformed our home into a sanctuary. Their attention to detail and ability to understand our vision was exceptional. We could not be happier.',
    name: 'Ayesha Rahman',
    role: 'Residential Client',
    location: 'Islamabad',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80',
  },
  {
    quote: 'From concept to completion, the team delivered a stunning restaurant interior that has become the talk of the city. Professional and creative throughout.',
    name: 'Kamran Sheikh',
    role: 'Restaurant Owner',
    location: 'Lahore',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80',
  },
  {
    quote: 'Our new office space has boosted morale and impressed every client who walks in. Elevé Interiors understood our brand and brought it to life.',
    name: 'Sara Malik',
    role: 'Corporate Client',
    location: 'Rawalpindi',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll delay={0}>
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-gold">CLIENT LOVE</p>
          <h2 className="mt-2 font-playfair text-3xl font-semibold text-textDark md:text-4xl">
            What <span className="italic text-gold">Our Clients Say</span>
          </h2>
        </AnimateOnScroll>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 0.1}>
              <article className="rounded-card border border-border bg-white p-7 transition-all duration-350 hover:-translate-y-1 hover:border-gold hover:shadow-card-hover">
                <span className="font-playfair text-6xl leading-none text-gold" style={{ fontFamily: 'serif' }}>&ldquo;</span>
                <p className="mt-2 font-cormorant text-base italic leading-relaxed text-textBody" style={{ lineHeight: 1.9 }}>
                  {t.quote}
                </p>
                <div className="mt-4 flex gap-0.5 text-gold">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <FontAwesomeIcon key={n} icon={faStar} className="text-sm" />
                  ))}
                </div>
                <div className="mt-4 border-t border-border pt-4 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="48px" unoptimized />
                  </div>
                  <div>
                    <p className="font-playfair font-bold text-textDark">{t.name}</p>
                    <p className="font-montserrat text-xs text-textMuted">{t.role}, {t.location}</p>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
