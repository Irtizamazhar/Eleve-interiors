'use client';

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

const services = [
  { num: '01', name: 'Architectural Design', icon: faDraftingCompass, desc: 'Complete architectural planning and structural design for residential and commercial projects.' },
  { num: '02', name: '3D Visualization', icon: faCube, desc: 'Photorealistic renders and walkthroughs before construction begins.' },
  { num: '03', name: 'Interior Design', icon: faCouch, desc: 'Full-service design for homes, offices, cafes, restaurants, and retail spaces.' },
  { num: '04', name: 'Retail Design', icon: faStore, desc: 'Brand-aligned retail environments — shops and showrooms that drive sales.' },
  { num: '05', name: 'Renovation', icon: faHammer, desc: 'Thoughtful renovations that modernise spaces while preserving character.' },
  { num: '06', name: 'Industrial Design', icon: faIndustry, desc: 'Functional industrial interiors designed for efficiency and brand identity.' },
  { num: '07', name: 'Restaurant & Cafe Design', icon: faUtensils, desc: 'Atmospheric dining environments that keep guests coming back.' },
  { num: '08', name: 'Landscape Design', icon: faLeaf, desc: 'Outdoor spaces and gardens that complement your architecture beautifully.' },
  { num: '09', name: 'Office Interior Design', icon: faBuilding, desc: 'Contemporary workplace design fostering productivity and culture.' },
  { num: '10', name: 'Sciography', icon: faSun, desc: 'Expert shadow and light studies for optimal natural lighting in every space.' },
  { num: '11', name: 'Residential Design', icon: faHome, desc: 'Personalised interiors crafted around your lifestyle and taste.' },
  { num: '12', name: 'Fast Food Interiors', icon: faCity, desc: 'High-energy fast food interiors that maximise throughput and brand impact.' },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll delay={0}>
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-gold">WHAT WE OFFER</p>
          <h2 className="mt-2 font-playfair text-3xl font-semibold text-textDark md:text-4xl">
            Our <span className="italic text-gold">Services</span>
          </h2>
        </AnimateOnScroll>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.num} delay={i * 0.08}>
              <div className="group relative rounded-card border border-border bg-white p-7 transition-all duration-350 hover:-translate-y-1 hover:shadow-gold-hover">
                <span className="absolute right-5 top-5 font-playfair text-[2.5rem] font-extrabold text-gold opacity-25">{s.num}</span>
                <div className="mb-3 flex h-9 w-9 items-center justify-center">
                  <FontAwesomeIcon icon={s.icon} className="text-2xl text-gold" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-textDark">{s.name}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-textBody">{s.desc}</p>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-350 group-hover:w-full" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
