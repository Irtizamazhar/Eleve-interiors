'use client';

import { useState, useEffect } from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reveal = () => setShow(true);
    if (document.readyState === 'complete') {
      reveal();
    } else {
      window.addEventListener('load', reveal);
      return () => window.removeEventListener('load', reveal);
    }
  }, []);

  if (!show) return null;

  return (
    <a
      href="https://wa.me/923343893891"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-20 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-105 md:bottom-7 md:right-7 md:h-[58px] md:w-[58px]"
      style={{ animation: 'pulse-whatsapp 2s ease-in-out infinite' }}
      aria-label="Chat on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl md:text-[28px]" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded bg-bgDark px-3 py-2 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 md:block" style={{ top: '50%', transform: 'translateY(-50%)' }}>
        Chat on WhatsApp
      </span>
    </a>
  );
}
