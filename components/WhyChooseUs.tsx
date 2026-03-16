'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faDollarSign, faPaintRoller, faStar } from '@fortawesome/free-solid-svg-icons';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const features = [
  {
    icon: faCheckCircle,
    title: 'Experienced Interior Designers',
    desc: 'Skilled professionals with 10+ years delivering residential and commercial excellence.',
  },
  {
    icon: faDollarSign,
    title: 'Clear Pricing & Timelines',
    desc: 'No hidden costs. Transparent quotes and guaranteed on-time project delivery.',
  },
  {
    icon: faPaintRoller,
    title: 'Complete Design & Execution',
    desc: 'One expert team from concept to handover — zero coordination headaches.',
  },
  {
    icon: faStar,
    title: 'Premium Local Materials',
    desc: "Quality materials suited to Pakistan's climate for long-lasting, low-maintenance interiors.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-bgLight py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <AnimateOnScroll direction="left" delay={0}>
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-gold">BEST IN THE INDUSTRY</p>
          <h2 className="mt-2 font-playfair text-3xl font-semibold text-textDark md:text-4xl">Why Choose Elevé Interiors?</h2>
          <p className="mt-4 text-textBody" style={{ lineHeight: 1.8 }}>
            We combine design expertise with transparent processes and premium materials to deliver spaces you will love.
          </p>
          <ul className="mt-8 space-y-6">
            {features.map((f, i) => (
              <li key={f.title} className="group flex gap-4 border-l-4 border-transparent pl-4 transition-colors hover:border-gold">
                <div className="flex-shrink-0 text-gold">
                  <FontAwesomeIcon icon={f.icon} className="text-xl" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-textDark">{f.title}</h3>
                  <p className="mt-1 text-textBody" style={{ lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="tel:+923001234567"
            className="mt-8 inline-block rounded-md bg-gold px-6 py-3 font-montserrat text-sm font-medium text-white transition-all duration-300 hover:bg-goldHover hover:scale-[1.03]"
          >
            Call Us Now → +92 300 1234567
          </a>
        </AnimateOnScroll>
        <AnimateOnScroll direction="right" delay={0.1}>
          <div className="relative">
            <div className="absolute -left-3 -top-3 z-10 h-full w-full border-[3px] border-gold" style={{ borderRadius: 2 }} />
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                alt="Elevé Interiors team"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
