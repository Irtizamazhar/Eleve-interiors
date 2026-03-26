'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const testimonials = [
  {
    quote:
      'Elevé Interiors completely transformed our office space. The attention to detail, the premium materials, and the timely delivery were beyond our expectations. Truly a world-class team right here in Islamabad.',
    name: 'Ahmed Raza',
    role: 'CEO, TechVentures Pakistan',
    initials: 'AR',
  },
  {
    quote:
      'We hired Elevé for our restaurant interior and the result was stunning. Every corner tells a story. Our customers constantly compliment the ambiance. Best investment we ever made.',
    name: 'Sara Malik',
    role: 'Owner, The Dining Co.',
    initials: 'SM',
  },
  {
    quote:
      'From the initial consultation to the final handover, the entire process was smooth and transparent. No hidden costs, no delays. Elevé Interiors delivers exactly what they promise.',
    name: 'Usman Tariq',
    role: 'Director, Bahria Town Islamabad',
    initials: 'UT',
  },
  {
    quote:
      'Our home feels like a 5-star hotel now. The team understood our vision perfectly and brought it to life with such elegance. We get compliments from every single guest who visits.',
    name: 'Hina and Bilal Chaudhry',
    role: 'Homeowners, DHA Phase 2 Islamabad',
    initials: 'HC',
  },
  {
    quote:
      'Elevé designed our TV show set for ARY Digital and the on-screen result was absolutely phenomenal. Professional, creative, and efficient. I would not trust anyone else with our sets.',
    name: 'Kamran Shah',
    role: 'Production Head, ARY Digital',
    initials: 'KS',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll delay={0}>
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-gold">Testimonials</p>
          <h2 className="mt-2 font-playfair text-3xl font-semibold text-textDark md:text-4xl">
            What Our Clients Say
          </h2>
        </AnimateOnScroll>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 0.1}>
              <article className="flex h-full flex-col rounded-card border border-border border-l-[3px] border-l-gold bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-350 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="font-playfair text-6xl leading-none text-gold" style={{ fontFamily: 'serif' }}>
                  &ldquo;
                </span>
                <p className="mt-2 font-cormorant text-base leading-[1.9] text-textBody">{t.quote}</p>
                <div className="mt-4 flex gap-0.5 text-gold">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <FontAwesomeIcon key={n} icon={faStar} className="text-sm" />
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold font-montserrat text-xs font-bold text-textDark"
                    aria-hidden
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-playfair font-bold text-textDark">{t.name}</p>
                    <p className="font-montserrat text-xs text-textMuted">{t.role}</p>
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
