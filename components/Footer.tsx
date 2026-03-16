'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookF,
  faPinterestP,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const services = [
  'Architectural Design',
  'Interior Design',
  'Retail Design',
  'Residential Design',
];
const sectors = ['Residential', 'Commercial', 'Retail', 'Hospitality'];
const company = ['About', 'Projects', 'Process', 'Contact'];

const socials = [
  { icon: faInstagram, href: '#', label: 'Instagram' },
  { icon: faFacebookF, href: '#', label: 'Facebook' },
  { icon: faPinterestP, href: '#', label: 'Pinterest' },
  { icon: faLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: faWhatsapp, href: '#', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="bg-dark2 border-t border-gold/20">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block" aria-label="Elevé Interiors">
              <Logo height={82} align="left" />
            </Link>
            <p className="mt-4 font-cormorant text-sm text-taupe2">
              Crafting environments that reflect your vision. Luxury interior
              design, architecture & construction.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center border border-gold/50 text-taupe2 transition-colors hover:border-gold hover:text-gold"
                >
                  <FontAwesomeIcon icon={s.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat text-xs uppercase tracking-[3px] text-gold">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.map((name) => (
                <li key={name}>
                  <Link
                    href="#services"
                    className="font-cormorant text-taupe2 transition-colors hover:text-gold"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="font-montserrat text-xs uppercase tracking-[3px] text-gold">
              Sectors
            </h3>
            <ul className="mt-4 space-y-2">
              {sectors.map((name) => (
                <li key={name}>
                  <Link
                    href="#projects"
                    className="font-cormorant text-taupe2 transition-colors hover:text-gold"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-montserrat text-xs uppercase tracking-[3px] text-gold">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {company.map((name) => (
                <li key={name}>
                  <Link
                    href={`#${name.toLowerCase()}`}
                    className="font-cormorant text-taupe2 transition-colors hover:text-gold"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-gold/20 pt-8 md:flex-row">
          <p className="font-montserrat text-xs text-taupe">
            © {new Date().getFullYear()} Elevé Interiors. All rights reserved.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=United+Plaza+Fazl-e-Haq+Road+Blue+Area+Islamabad"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 font-montserrat text-xs text-taupe transition-colors hover:text-gold md:mt-0"
          >
            <FontAwesomeIcon icon={faLocationDot} className="text-gold" />
            Office No. 09, 3rd Floor, United Plaza, Fazl-e-Haq Road, Blue Area, Islamabad
          </a>
        </div>
      </div>
    </footer>
  );
}
