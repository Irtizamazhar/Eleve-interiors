'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const productsMega = {
  wallCoverings: {
    title: 'Wall Coverings',
    links: [
      { label: 'PVC Wall Panels', href: '/products#wall-coverings' },
      { label: 'Fluted Panels (WPC)', href: '/products#wall-coverings' },
      { label: 'Acoustic Panels', href: '/products#wall-coverings' },
      { label: 'PU Stone Panels', href: '/products#wall-coverings' },
      { label: 'UV Marble Sheets', href: '/products#wall-coverings' },
    ],
  },
  windowBlinds: {
    title: 'Window Blinds',
    links: [
      { label: 'Roller Blinds', href: '/products#window-blinds' },
      { label: 'Vertical Blinds', href: '/products#window-blinds' },
      { label: 'Wooden Blinds', href: '/products#window-blinds' },
      { label: 'Venetian Blinds', href: '/products#window-blinds' },
      { label: 'Zebra Blinds', href: '/products#window-blinds' },
      { label: 'Chick Blinds', href: '/products#window-blinds' },
    ],
  },
  floorings: {
    title: 'Floorings',
    links: [
      { label: 'SPC Flooring', href: '/products#floorings' },
      { label: 'Wooden Flooring', href: '/products#floorings' },
      { label: 'Vinyl Flooring', href: '/products#floorings' },
      { label: 'Epoxy Flooring', href: '/products#floorings' },
      { label: 'Artificial Grass', href: '/products#floorings' },
      { label: 'Carpet Tiles', href: '/products#floorings' },
      { label: 'Sports Flooring', href: '/products#floorings' },
      { label: 'Gym Flooring', href: '/products#floorings' },
    ],
  },
};

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/process', label: 'Process' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-[1000] border-b border-border bg-white transition-all duration-300 ${
          scrolled ? 'top-0 shadow-nav' : 'top-0 md:top-10'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 md:px-6 md:py-4">
          <Link href="/" className="flex-shrink-0" aria-label="Elevé Interiors">
            <span className="block md:hidden">
              <Logo align="left" variant="light" height={72} />
            </span>
            <span className="hidden md:block">
              <Logo align="left" variant="light" height={96} />
            </span>
          </Link>

          <div className="hidden items-center gap-8 xl:flex">
            <Link
              href="/"
              className="nav-link group relative font-medium text-textDark transition-colors hover:text-gold"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute -bottom-1 left-0 z-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
            {/* Products with mega-menu */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className="nav-link font-medium text-textDark transition-colors hover:text-gold"
              >
                <span className="relative">
                  Products
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </span>
              </button>
              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full pt-2 -translate-x-1/2"
                  >
                    <div className="w-[680px] rounded-lg border border-border bg-white p-6 shadow-card-hover">
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <p className="mb-3 font-montserrat text-xs font-semibold uppercase tracking-wider text-gold">
                            {productsMega.wallCoverings.title}
                          </p>
                          <ul className="space-y-2">
                            {productsMega.wallCoverings.links.map((l) => (
                              <li key={l.label}>
                                <Link
                                  href={l.href}
                                  className="text-sm text-textDark transition-colors hover:text-gold"
                                >
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="mb-3 font-montserrat text-xs font-semibold uppercase tracking-wider text-gold">
                            {productsMega.windowBlinds.title}
                          </p>
                          <ul className="space-y-2">
                            {productsMega.windowBlinds.links.map((l) => (
                              <li key={l.label}>
                                <Link
                                  href={l.href}
                                  className="text-sm text-textDark transition-colors hover:text-gold"
                                >
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="mb-3 font-montserrat text-xs font-semibold uppercase tracking-wider text-gold">
                            {productsMega.floorings.title}
                          </p>
                          <ul className="space-y-2">
                            {productsMega.floorings.links.map((l) => (
                              <li key={l.label}>
                                <Link
                                  href={l.href}
                                  className="text-sm text-textDark transition-colors hover:text-gold"
                                >
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link group relative font-medium text-textDark transition-colors hover:text-gold"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute -bottom-1 left-0 z-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-md bg-gold px-5 py-2.5 font-medium text-white transition-all duration-300 hover:bg-goldHover hover:scale-[1.03]"
            >
              Get Consultation
            </Link>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-textDark xl:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1001] flex flex-col bg-white px-6 pt-24 pb-8 lg:hidden"
          >
            <button
              type="button"
              className="absolute right-6 top-8 text-textDark"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>
            <div className="flex flex-col gap-6">
              <Link
                href="/"
                className="font-medium text-textDark hover:text-gold"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="font-medium text-textDark hover:text-gold"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-textDark hover:text-gold"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="inline-block rounded-md bg-gold px-6 py-3 text-center font-medium text-white hover:bg-goldHover"
                onClick={() => setMenuOpen(false)}
              >
                Get Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
