'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faAward, faCertificate } from '@fortawesome/free-solid-svg-icons';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const awards = [
  {
    icon: faTrophy,
    num: '01',
    title: 'Brands of the Year',
    desc: "Recognized among Pakistan's top interior design brands for quality and innovation.",
  },
  {
    icon: faAward,
    num: '02',
    title: 'Pakistan Standards',
    desc: 'Certified by Pakistan Standards & Quality Control Authority for product excellence.',
  },
  {
    icon: faCertificate,
    num: '03',
    title: 'ISO 9001:2015',
    desc: 'Internationally certified quality management system ensuring consistent service delivery.',
  },
];

export default function Awards() {
  return (
    <section className="bg-bgLight py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll delay={0}>
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-gold">HUGE HONOR</p>
          <h2 className="mt-2 font-playfair text-3xl font-semibold text-textDark md:text-4xl">Our Awards & Recognition</h2>
        </AnimateOnScroll>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {awards.map((a, i) => (
            <AnimateOnScroll key={a.title} delay={i * 0.15}>
              <div className="rounded-card border-2 border-border bg-white p-8 text-center transition-all duration-350 hover:-translate-y-1.5 hover:border-gold hover:shadow-card-hover">
                <div className="mx-auto flex h-12 w-12 items-center justify-center text-gold">
                  <FontAwesomeIcon icon={a.icon} className="text-3xl" />
                </div>
                <div className="mx-auto mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-gold font-playfair text-sm font-bold text-white">
                  {a.num}
                </div>
                <h3 className="mt-3 font-playfair text-xl font-bold text-textDark">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-textBody">{a.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
