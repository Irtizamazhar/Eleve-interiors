'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const floorings = ['SPC Flooring', 'Wooden Flooring', 'Vinyl Flooring', 'Sports Flooring', 'Kids EVA Flooring', 'Carpet Tiles', 'Artificial Grass'];
const blinds = ['Roller Blinds', 'Vertical Blinds', 'Wooden Blinds', 'Venetian Blinds', 'Zebra Blinds', 'Chick Blinds'];
const wallCoverings = ['PVC Wall Panels', 'Fluted Panels (WPC)', 'Acoustic Panels', 'PU Stone Panels', 'UV Marble Sheet'];
const company = ['About', 'Services', 'Projects', 'Process', 'Contact'];
const servicesSub = ['Interior Design', 'Architectural Design', 'Retail Design', 'Residential Design'];

export default function Footer() {
  return (
    <footer className="border-t-2 border-gold bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block" aria-label="Elevé Interiors">
              <Logo align="left" variant="light" />
            </Link>
            <p className="mt-4 font-cormorant text-sm text-textBody">
              Crafting environments that reflect your vision.
            </p>
            <p className="mt-2 flex items-start gap-2 text-xs text-textBody">
              <span className="mt-0.5">📍</span>
              Office No. 09, 3rd Floor, United Plaza, Fazl-e-Haq Road, Blue Area, Islamabad
            </p>
            <p className="mt-1 text-xs text-textBody">
              <a href="tel:+923343893891" className="hover:text-gold">+92 334 3893891</a>
              {' · '}
              <a href="mailto:hello@eleveinteriors.com" className="hover:text-gold">hello@eleveinteriors.com</a>
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.linkedin.com/company/112252855" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-textDark transition-colors hover:border-gold hover:text-gold" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-sm" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100064059482388" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-textDark transition-colors hover:border-gold hover:text-gold" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} className="text-sm" />
              </a>
              <a href="https://www.instagram.com/ladybugstudio2020" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-textDark transition-colors hover:border-gold hover:text-gold" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: Floorings */}
          <div>
            <h3 className="font-montserrat text-xs font-semibold uppercase tracking-[0.1em] text-gold">Floorings</h3>
            <ul className="mt-4 space-y-2">
              {floorings.map((name) => (
                <li key={name}>
                  <Link href="#products" className="text-sm text-textBody transition-colors hover:text-gold">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Window Blinds */}
          <div>
            <h3 className="font-montserrat text-xs font-semibold uppercase tracking-[0.1em] text-gold">Window Blinds</h3>
            <ul className="mt-4 space-y-2">
              {blinds.map((name) => (
                <li key={name}>
                  <Link href="#products" className="text-sm text-textBody transition-colors hover:text-gold">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Wall Coverings */}
          <div>
            <h3 className="font-montserrat text-xs font-semibold uppercase tracking-[0.1em] text-gold">Wall Coverings</h3>
            <ul className="mt-4 space-y-2">
              {wallCoverings.map((name) => (
                <li key={name}>
                  <Link href="#products" className="text-sm text-textBody transition-colors hover:text-gold">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company */}
          <div>
            <h3 className="font-montserrat text-xs font-semibold uppercase tracking-[0.1em] text-gold">Company</h3>
            <ul className="mt-4 space-y-2">
              {company.map((name) => (
                <li key={name}>
                  <Link href={`#${name.toLowerCase()}`} className="text-sm text-textBody transition-colors hover:text-gold">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-3 font-montserrat text-xs font-semibold uppercase tracking-wider text-gold">Services</p>
            <ul className="mt-2 space-y-1">
              {servicesSub.map((name) => (
                <li key={name}>
                  <Link href="#services" className="text-sm text-textBody transition-colors hover:text-gold">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border bg-bgLight px-6 py-4 -mx-6 -mb-6">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 md:flex-row">
            <p className="text-[0.85rem] text-textBody">
              © {new Date().getFullYear()} Elevé Interiors. All rights reserved.
            </p>
            <p className="text-[0.85rem] text-textBody">Islamabad, Pakistan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
