'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram as faInstagramBrand } from '@fortawesome/free-brands-svg-icons';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=United+Plaza+Fazl-e-Haq+Road+Blue+Area+Islamabad';

const serviceOptions = [
  'Architectural Design',
  '3D Visualization',
  'Interior Design',
  'Retail Design',
  'Renovation',
  'Industrial Design',
  'Restaurant & Cafe Design',
  'Landscape Design',
  'Office Interior Design',
  'Sciography',
  'Residential Design',
  'Fast Food Interiors',
];

export default function Contact() {
  const { ref, hasRevealed } = useScrollReveal(0.15);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mx-auto h-0.5 w-12 bg-gold" />
          <p
            className="mt-4 font-montserrat text-xs uppercase tracking-[5px] text-gold"
            style={{ letterSpacing: '5px' }}
          >
            Get in Touch
          </p>
          <h2 className="mt-2 font-playfair text-3xl text-dark md:text-4xl">
            <span className="italic text-gold">Contact</span> Us
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          {/* Left: Info */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-gold">
                <FontAwesomeIcon icon={faLocationDot} className="text-gold" />
              </div>
              <div>
                <p className="font-montserrat text-xs uppercase tracking-wider text-gold">
                  Location
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-cormorant text-taupe transition-colors hover:text-gold hover:underline"
                >
                  Office No. 09, 3rd Floor, United Plaza, Fazl-e-Haq Road, Blue Area, Islamabad
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-gold">
                <FontAwesomeIcon icon={faPhone} className="text-gold" />
              </div>
              <div>
                <p className="font-montserrat text-xs uppercase tracking-wider text-gold">
                  Phone
                </p>
                <a href="tel:+923343893891" className="font-cormorant text-taupe hover:text-gold">+92 334 3893891</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-gold">
                <FontAwesomeIcon icon={faEnvelope} className="text-gold" />
              </div>
              <div>
                <p className="font-montserrat text-xs uppercase tracking-wider text-gold">
                  Email
                </p>
                <p className="font-cormorant text-taupe">
                  hello@eleveinteriors.com
                </p>
              </div>
            </div>
            <a href="https://www.instagram.com/ladybugstudio2020" target="_blank" rel="noopener noreferrer" className="flex gap-4 transition-opacity hover:opacity-80">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-gold">
                <FontAwesomeIcon icon={faInstagramBrand} className="text-gold" />
              </div>
              <div>
                <p className="font-montserrat text-xs uppercase tracking-wider text-gold">
                  Instagram
                </p>
                <p className="font-cormorant text-taupe">@ladybugstudio2020</p>
              </div>
            </a>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-1">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600/20 to-green-700/20 py-16 text-center"
              >
                <p className="font-playfair text-2xl text-dark">
                  Enquiry Sent!
                </p>
                <p className="mt-2 font-cormorant text-taupe">
                  We will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-b border-gold/50 bg-transparent">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full border-0 bg-transparent py-3 font-cormorant text-dark placeholder:text-taupe/70 focus:outline-none focus:ring-0"
                      required
                    />
                  </div>
                  <div className="border-b border-gold/50 bg-transparent">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full border-0 bg-transparent py-3 font-cormorant text-dark placeholder:text-taupe/70 focus:outline-none focus:ring-0"
                      required
                    />
                  </div>
                </div>
                <div className="border-b border-gold/50 bg-transparent">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border-0 bg-transparent py-3 font-cormorant text-dark placeholder:text-taupe/70 focus:outline-none focus:ring-0"
                    required
                  />
                </div>
                <div className="border-b border-gold/50 bg-transparent">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full border-0 bg-transparent py-3 font-cormorant text-dark placeholder:text-taupe/70 focus:outline-none focus:ring-0"
                  />
                </div>
                <div className="border-b border-gold/50 bg-transparent">
                  <select
                    className="w-full border-0 bg-transparent py-3 font-cormorant text-dark focus:outline-none focus:ring-0 [&>option]:bg-cream"
                    required
                  >
                    <option value="">Select Service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="border-b border-gold/50 bg-transparent">
                  <textarea
                    placeholder="Project Brief"
                    rows={4}
                    className="w-full resize-none border-0 bg-transparent py-3 font-cormorant text-dark placeholder:text-taupe/70 focus:outline-none focus:ring-0"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold to-gold2 py-4 font-montserrat text-sm font-medium uppercase tracking-wider text-dark transition-opacity hover:opacity-95"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Map — United Plaza, Blue Area, Islamabad */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 overflow-hidden rounded border border-gold/30"
        >
          <div className="aspect-video w-full">
            <iframe
              title="Elevé Interiors — United Plaza, Blue Area, Islamabad"
              src="https://www.google.com/maps?q=United+Plaza+Fazl-e-Haq+Road+Blue+Area+Islamabad&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
          <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block border-t border-gold/30 bg-white/90 px-4 py-3 font-montserrat text-xs text-taupe transition-colors hover:bg-white hover:text-gold hover:underline"
        >
          Office No. 09, 3rd Floor, United Plaza, Fazl-e-Haq Road, Blue Area, Islamabad
        </a>
        </motion.div>
      </div>
    </section>
  );
}
