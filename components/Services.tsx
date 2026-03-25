'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDraftingCompass,
  faCube,
  faCouch,
  faStore,
  faHammer,
  faIndustry,
  faUtensils,
  faLeaf,
  faBuilding,
  faSun,
  faHome,
  faCity,
} from '@fortawesome/free-solid-svg-icons';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const services = [
  {
    num: '01',
    name: 'Architectural Design',
    icon: faDraftingCompass,
    desc: 'Complete architectural planning and structural design for residential and commercial projects.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    bullets: ['Concept plans and zoning strategy', 'Floor plans, elevations, and sections', 'Authority-ready drawing sets', 'Material and facade recommendations'],
    
    timeline: '6-12 weeks',
  },
  {
    num: '02',
    name: '3D Visualization',
    icon: faCube,
    desc: 'Photorealistic renders and walkthroughs before construction begins.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    bullets: ['High-resolution interior/exterior renders', 'Lighting and mood simulation', 'Multiple camera views per area', 'Design revisions before final output'],
    timeline: '1-3 weeks',
  },
  {
    num: '03',
    name: 'Interior Design',
    icon: faCouch,
    desc: 'Full-service design for homes, offices, cafes, restaurants, and retail spaces.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    bullets: ['Space planning and concept themes', 'Furniture, color, and finish selection', 'Custom joinery and detailing', 'Site supervision and styling'],   
    timeline: '4-10 weeks',
  },
  {
    num: '04',
    name: 'Retail Design',
    icon: faStore,
    desc: 'Brand-aligned retail environments that drive sales.',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80',
    bullets: ['Customer journey and zoning layout', 'Display system and shelving strategy', 'Brand-focused lighting and signage', 'Cash counter and storage planning'],
   
    timeline: '4-8 weeks',
  },
  {
    num: '05',
    name: 'Renovation',
    icon: faHammer,
    desc: 'Thoughtful renovations that modernise spaces while preserving character.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80',
    bullets: ['Demolition and reconstruction planning', 'MEP upgrades and layout improvements', 'Interior finishing and fit-outs', 'On-site quality and timeline management'],
   
    timeline: '6-16 weeks',
  },
  {
    num: '06',
    name: 'Industrial Design',
    icon: faIndustry,
    desc: 'Functional industrial interiors designed for efficiency and brand identity.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    bullets: ['Workflow-led space planning', 'Durable material and finish selection', 'Safety-compliant design detailing', 'Operational lighting solutions'],
    
    timeline: '8-14 weeks',
  },
  {
    num: '07',
    name: 'Restaurant & Cafe Design',
    icon: faUtensils,
    desc: 'Atmospheric dining environments that keep guests coming back.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    bullets: ['Theme-based dining experience design', 'Kitchen and service flow planning', 'Lighting and acoustic treatment', 'Branding touchpoints and ambience styling'],
    
    timeline: '5-12 weeks',
  },
  {
    num: '08',
    name: 'Landscape Design',
    icon: faLeaf,
    desc: 'Outdoor spaces and gardens that complement your architecture beautifully.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    bullets: ['Garden zoning and softscape planning', 'Hardscape paths and seating layout', 'Lighting and irrigation concept', 'Plant palette based on climate'],

    timeline: '3-8 weeks',
  },
  {
    num: '09',
    name: 'Office Interior Design',
    icon: faBuilding,
    desc: 'Contemporary workplace design fostering productivity and culture.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    bullets: ['Workstation and cabin planning', 'Meeting room and collaboration zones', 'Brand-integrated reception design', 'Ergonomic and acoustic optimization'],

    timeline: '4-10 weeks',
  },
  {
    num: '10',
    name: 'Sciography',
    icon: faSun,
    desc: 'Expert shadow and light studies for optimal natural lighting in every space.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    bullets: ['Sun path and shadow analysis', 'Daylight penetration studies', 'Window and opening optimization', 'Artificial + natural light balance'],
   
    timeline: '1-2 weeks',
  },
  {
    num: '11',
    name: 'Residential Design',
    icon: faHome,
    desc: 'Personalised interiors crafted around your lifestyle and taste.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    bullets: ['Lifestyle-based space planning', 'Room-wise mood boards and themes', 'Material, furniture, and decor curation', 'Execution drawings and supervision'],
    
    timeline: '6-12 weeks',
  },
  {
    num: '12',
    name: 'Fast Food Interiors',
    icon: faCity,
    desc: 'High-energy fast food interiors that maximise throughput and brand impact.',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80',
    bullets: ['Fast-turnover seating layouts', 'Counter and kitchen workflow setup', 'Durable easy-maintenance finishes', 'Signage and brand wall integration'],

    timeline: '4-8 weeks',
  },
];

const stats = [
  { label: 'Projects Completed', value: 150, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'Commercial Spaces', value: 50, suffix: '+' },
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
];

const faqs = [
  {
    q: 'Do you offer complete renovation services?',
    a: 'Yes, we handle full renovations from concept to completion including demolition, construction, and interior finishing.',
  },
  {
    q: 'Is 3D visualization included in every package?',
    a: '3D visualization is included in our Standard and Premium packages. It can also be booked as a standalone service.',
  },
  {
    q: 'Do you work outside Islamabad?',
    a: 'Yes, we regularly take projects in Rawalpindi, Lahore, and other major cities across Pakistan.',
  },
  {
    q: 'How long does a typical interior design project take?',
    a: 'Residential projects typically take 6–12 weeks. Commercial projects range from 4–16 weeks depending on scale.',
  },
  {
    q: 'Do you provide material sourcing and procurement?',
    a: 'Absolutely. We source all materials, manage vendor relationships, and ensure quality control throughout the project.',
  },
  {
    q: 'What is your payment structure?',
    a: 'We work on a milestone-based payment structure: 30% upfront, 40% at midpoint, and 30% on completion.',
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [animateStats, setAnimateStats] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const targetValues = useMemo(() => stats.map((s) => s.value), []);

  useEffect(() => {
    if (!animateStats) return;
    const duration = 1200;
    const stepMs = 25;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += stepMs;
      const progress = Math.min(elapsed / duration, 1);
      setCounts(targetValues.map((t) => Math.round(t * progress)));
      if (progress >= 1) clearInterval(timer);
    }, stepMs);
    return () => clearInterval(timer);
  }, [animateStats, targetValues]);

  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll delay={0}>
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-gold">WHAT WE OFFER</p>
          <h2 className="mt-2 font-playfair text-3xl font-semibold text-textDark md:text-4xl">
            Our <span className="italic text-gold">Services</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.05}>
          <div className="mt-8 rounded-md border border-gold/35 bg-gradient-to-r from-bgDark via-[#24201a] to-bgDark px-5 py-4 text-center">
            <p className="font-montserrat text-sm font-medium text-white/90 md:text-base">
              We serve Islamabad, Rawalpindi, Lahore & across Pakistan — On-site consultations available.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div ref={statsRef} className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, idx) => (
              <div key={s.label} className="rounded-card border border-border bg-bgLight px-4 py-5 text-center">
                <p className="font-playfair text-2xl font-bold text-gold md:text-3xl">
                  {counts[idx]}
                  {s.suffix}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-textBody">{s.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.num} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-card border border-border bg-white transition-all duration-350 hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className="relative h-52 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute right-4 top-3 font-playfair text-[2.2rem] font-extrabold text-white/60">{s.num}</span>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center">
                      <FontAwesomeIcon icon={s.icon} className="text-xl text-gold" />
                    </div>
                    <h3 className="font-playfair text-lg font-bold text-textDark">{s.name}</h3>
                  </div>
                  <p className="text-[0.92rem] leading-relaxed text-textBody">{s.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.bullets.map((point) => (
                      <li key={point} className="text-sm text-textBody">
                        • {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <Link
                      href="/contact"
                      className="rounded-md bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-goldHover"
                    >
                      Get Free Quote
                    </Link>
                    <Link
                      href="/projects"
                      className="text-xs font-semibold uppercase tracking-wide text-textDark transition-colors hover:text-gold"
                    >
                      View Projects →
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.1}>
          <div className="mt-16">
            <h3 className="font-playfair text-2xl font-semibold text-textDark md:text-3xl">
              Frequently Asked <span className="italic text-gold">Questions</span>
            </h3>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={item.q} className="overflow-hidden rounded-card border border-border bg-white">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="font-montserrat text-sm font-semibold text-textDark md:text-base">{item.q}</span>
                      <span className="ml-3 text-lg text-gold">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-textBody">{item.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="mt-16 rounded-md bg-bgDark px-6 py-10 text-center md:px-10 md:py-12">
            <h3 className="font-playfair text-2xl font-semibold text-white md:text-3xl">Ready to Transform Your Space?</h3>
            <p className="mt-2 text-sm text-white/80 md:text-base">
              Book a free 30-minute consultation with our senior designer.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-goldHover"
              >
                Book Free Consultation
              </Link>
              <a
                href="tel:+923343893891"
                className="rounded-md border border-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-gold hover:text-white"
              >
                Call Now: +92 334 3893891
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      <FloatingWhatsApp />
    </section>
  );
}
