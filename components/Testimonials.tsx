'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    quote:
      'Elevé transformed our home into a sanctuary. Their attention to detail and ability to understand our vision was exceptional. We could not be happier.',
    name: 'Ayesha Rahman',
    role: 'Residential Client',
    location: 'Islamabad',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80',
  },
  {
    quote:
      'From concept to completion, the team delivered a stunning restaurant interior that has become the talk of the city. Professional and creative throughout.',
    name: 'Kamran Sheikh',
    role: 'Restaurant Owner',
    location: 'Lahore',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80',
  },
  {
    quote:
      'Our new office space has boosted morale and impressed every client who walks in. Elevé Interiors understood our brand and brought it to life.',
    name: 'Sara Malik',
    role: 'Corporate Client',
    location: 'Rawalpindi',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80',
  },
];

export default function Testimonials() {
  const { ref, hasRevealed } = useScrollReveal(0.15);

  return (
    <section id="testimonials" ref={ref} className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6">
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
            Testimonials
          </p>
          <h2 className="mt-2 font-playfair text-3xl text-dark md:text-4xl">
            What <span className="italic text-gold">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group border border-gold/30 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 shadow-sm"
            >
              <div className="mb-4 flex gap-1 text-gold">
                {[1, 2, 3, 4, 5].map((n) => (
                  <FontAwesomeIcon key={n} icon={faStar} className="text-sm" />
                ))}
              </div>
              <FontAwesomeIcon
                icon={faQuoteRight}
                className="mb-4 text-2xl text-gold/50"
              />
              <p className="font-cormorant text-lg text-taupe" style={{ lineHeight: 1.7 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-playfair font-semibold text-dark">
                    {t.name}
                  </p>
                  <p className="font-montserrat text-xs text-taupe">
                    {t.role}, {t.location}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
