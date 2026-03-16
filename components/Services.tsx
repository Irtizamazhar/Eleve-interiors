'use client';

import { motion } from 'framer-motion';
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
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    num: '01',
    name: 'Architectural Design',
    icon: faDraftingCompass,
    desc: 'Complete architectural planning and structural design for residential and commercial projects.',
  },
  {
    num: '02',
    name: '3D Visualization',
    icon: faCube,
    desc: 'Photorealistic renders and walkthroughs before construction begins.',
  },
  {
    num: '03',
    name: 'Interior Design',
    icon: faCouch,
    desc: 'Full-service design for homes, offices, cafes, restaurants, and retail spaces.',
  },
  {
    num: '04',
    name: 'Retail Design',
    icon: faStore,
    desc: 'Brand-aligned retail environments — shops and showrooms that drive sales.',
  },
  {
    num: '05',
    name: 'Renovation',
    icon: faHammer,
    desc: 'Thoughtful renovations that modernise spaces while preserving character.',
  },
  {
    num: '06',
    name: 'Industrial Design',
    icon: faIndustry,
    desc: 'Functional industrial interiors designed for efficiency and brand identity.',
  },
  {
    num: '07',
    name: 'Restaurant & Cafe Design',
    icon: faUtensils,
    desc: 'Atmospheric dining environments that keep guests coming back.',
  },
  {
    num: '08',
    name: 'Landscape Design',
    icon: faLeaf,
    desc: 'Outdoor spaces and gardens that complement your architecture beautifully.',
  },
  {
    num: '09',
    name: 'Office Interior Design',
    icon: faBuilding,
    desc: 'Contemporary workplace design fostering productivity and culture.',
  },
  {
    num: '10',
    name: 'Sciography',
    icon: faSun,
    desc: 'Expert shadow and light studies for optimal natural lighting in every space.',
  },
  {
    num: '11',
    name: 'Residential Design',
    icon: faHome,
    desc: 'Personalised interiors crafted around your lifestyle and taste.',
  },
  {
    num: '12',
    name: 'Fast Food Interiors',
    icon: faCity,
    desc: 'High-energy fast food interiors that maximise throughput and brand impact.',
  },
];

export default function Services() {
  const { ref, hasRevealed } = useScrollReveal(0.1);

  return (
    <section id="services" ref={ref} className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20">
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
            What We Offer
          </p>
          <h2 className="mt-2 font-playfair text-3xl text-dark md:text-4xl">
            Our <span className="italic text-gold">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 border border-gold/30 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative border-b border-r border-gold/30 p-6 last:border-b-0 hover:-translate-y-1 xl:border-b xl:border-r xl:last:border-r-0"
            >
              <span className="absolute right-4 top-4 font-playfair text-2xl text-gold/30">
                {s.num}
              </span>
              <div className="mb-4 flex h-[46px] w-[46px] items-center justify-center border border-gold transition-colors group-hover:bg-gold">
                <FontAwesomeIcon
                  icon={s.icon}
                  className="text-gold transition-colors group-hover:text-dark"
                />
              </div>
              <h3 className="font-playfair text-base text-dark">{s.name}</h3>
              <p className="mt-2 font-cormorant text-[13px] text-taupe">
                {s.desc}
              </p>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gold"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
