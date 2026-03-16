'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? 'border-b border-gold bg-dark'
            : 'bg-transparent'
        }`}
        style={{
          padding: scrolled ? '16px 32px' : '28px 64px',
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between" style={{ isolation: 'isolate' }}>
          <Link href="/" className="relative flex-shrink-0 transition-all duration-300" aria-label="Elevé Interiors">
            <Logo
              height={scrolled ? 54 : 88}
              align="left"
              className="transition-all duration-300"
            />
          </Link>

          {/* Desktop nav — no overlap: flex-nowrap, clear gaps */}
          <div className="hidden flex-nowrap items-center gap-6 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link group relative shrink-0 whitespace-nowrap font-montserrat text-[10px] font-medium uppercase leading-none text-taupe2 transition-colors hover:text-gold"
                style={{ letterSpacing: '2px' }}
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute -bottom-1 left-0 z-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" aria-hidden />
              </Link>
            ))}
            <Link
              href="#contact"
              className="nav-link group relative shrink-0 overflow-hidden whitespace-nowrap border border-gold bg-transparent px-4 py-2 font-montserrat text-[10px] font-medium uppercase leading-none text-gold transition-colors hover:text-dark"
              style={{ letterSpacing: '2px' }}
            >
              <span className="relative z-10">Get Consultation</span>
              <span className="absolute inset-0 z-0 -translate-x-full bg-gold transition-transform duration-300 group-hover:translate-x-0" aria-hidden />
            </Link>
          </div>

          {/* Mobile hamburger — lg to xl par bhi show */}
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center text-gold xl:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1001] flex flex-col items-center justify-center bg-dark lg:hidden"
          >
            <button
              type="button"
              className="absolute right-8 top-8 text-gold"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="font-montserrat text-lg uppercase tracking-widest text-taupe2 hover:text-gold"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                <Link
                  href="#contact"
                  className="inline-block border border-gold px-6 py-3 font-montserrat text-sm uppercase tracking-widest text-gold hover:bg-gold hover:text-dark"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
