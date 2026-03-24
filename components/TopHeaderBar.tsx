'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function TopHeaderBar() {
  return (
    <div className="hidden bg-bgDark text-white md:block" style={{ height: 40 }}>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
        <p className="hidden text-xs text-white/90 md:block">
          Mon – Sat 10:00 AM – 8:00 PM
        </p>
        <p
          className="font-montserrat text-xs font-medium text-gold"
          style={{ letterSpacing: '0.15em' }}
        >
          Elevé Interiors — Islamabad
        </p>
        <div className="flex items-center gap-3">
          <a
            href="tel:+923343893891"
            className="hidden text-sm text-gold transition-colors hover:text-goldHover md:inline"
          >
            +92 334 3893891
          </a>
          <a
            href="https://www.linkedin.com/company/112252855"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors hover:text-gold"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="text-sm" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100064059482388"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors hover:text-gold"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} className="text-sm" />
          </a>
          <a
            href="https://www.instagram.com/ladybugstudio2020"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors hover:text-gold"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
}
