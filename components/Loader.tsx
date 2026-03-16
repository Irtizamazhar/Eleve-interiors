'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/Logo';

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark"
        >
          <motion.div
            animate={{ scale: [1, 1.07, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.7))',
            }}
          >
            <Logo height={138} />
          </motion.div>

          {/* Scanning gold bar */}
          <motion.div
            className="mt-8 h-0.5 w-48 bg-gold"
            initial={{ x: -96 }}
            animate={{ x: 96 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.3 }}
          />

          <p
            className="mt-6 font-montserrat text-[9px] tracking-[6px] text-taupe"
            style={{ letterSpacing: '6px' }}
          >
            Elevating your space
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
