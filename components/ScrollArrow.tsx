'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function ScrollArrow() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY < 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <p
        className="font-montserrat text-[8px] uppercase text-white"
        style={{ letterSpacing: '5px' }}
      >
        Scroll Down
      </p>
      <motion.button
        type="button"
        onClick={scrollToAbout}
        className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/80 text-white transition-colors hover:bg-white/15"
        aria-label="Scroll to about section"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
      </motion.button>
    </motion.div>
  );
}
