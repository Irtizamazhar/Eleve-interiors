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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          <motion.div
            animate={{ scale: [1, 1.07, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
          >
            <Logo variant="light" height={170} />
          </motion.div>

          <motion.div
            className="mt-8 h-0.5 w-48 bg-gold"
            initial={{ x: -96 }}
            animate={{ x: 96 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.3 }}
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
