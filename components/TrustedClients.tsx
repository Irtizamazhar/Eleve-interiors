'use client';

import AnimateOnScroll from '@/components/AnimateOnScroll';

const brands = [
  'Gul Ahmed',
  'Bahria Town',
  'Bank Islami',
  'Aga Khan Foundation',
  'The City School',
  'Iqra University',
];

export default function TrustedClients() {
  const duplicated = [...brands, ...brands];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll delay={0}>
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-gold">HUGE HONOR</p>
          <h2 className="mt-2 font-playfair text-3xl font-semibold text-textDark md:text-4xl">Trusted By Leading Brands</h2>
        </AnimateOnScroll>
        <div className="mt-12 overflow-hidden">
          <div
            className="logo-track flex w-max gap-4"
            style={{ animation: 'scroll 20s linear infinite' }}
          >
            {duplicated.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-20 min-w-[180px] items-center justify-center rounded-lg border border-border bg-white px-8 py-4 transition-all duration-300 hover:scale-105 hover:border-gold hover:grayscale-0 grayscale"
              >
                <span className="font-playfair text-lg font-semibold tracking-wide text-textMuted transition-colors hover:text-textDark">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
