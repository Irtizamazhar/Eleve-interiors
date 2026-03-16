'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  '01 Consultation',
  '02 Concept Design',
  '03 3D Visualisation',
  '04 Execution',
  '05 Handover',
];

export default function Process() {
  const { ref, hasRevealed } = useScrollReveal(0.15);

  return (
    <section id="process" ref={ref} className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto h-0.5 w-12 bg-gold" />
          <p
            className="mt-4 font-montserrat text-[10px] uppercase tracking-[5px] text-gold"
            style={{ letterSpacing: '5px' }}
          >
            How We Work
          </p>
          <h2 className="mt-2 font-playfair text-3xl text-dark md:text-4xl">
            Our <span className="italic text-gold">Process</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-[39px] hidden h-px bg-gold/50 md:block" />

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  className="relative z-10 flex h-[78px] w-[78px] flex-shrink-0 items-center justify-center rounded-full border-2 border-gold font-playfair text-lg font-semibold text-gold transition-colors hover:bg-gold hover:text-dark"
                  whileHover={{ scale: 1.05 }}
                >
                  {step.split(' ')[0]}
                </motion.div>
                <p className="mt-4 font-montserrat text-xs uppercase tracking-wider text-taupe">
                  {step.split(' ').slice(1).join(' ')}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
