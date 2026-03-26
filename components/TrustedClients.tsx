'use client';

import AnimateOnScroll from '@/components/AnimateOnScroll';

const brands = [
  'Good Morning Pakistan',
  'Pavilion A-Sports',
  'ARY Digital',

  'Mezzanine Restaurants',
  'Code Valley Office',
];

export default function TrustedClients() {
  const duplicated = [...brands, ...brands];
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll delay={0}>
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-gold">HUGE HONOR</p>
          <h2 className="mt-2 font-playfair text-3xl font-semibold text-textDark md:text-4xl">Trusted By Leading Brands</h2>
        </AnimateOnScroll>
        <div className="mt-10 overflow-hidden md:mt-12">
          <div
            className="logo-track flex w-max gap-4"
            style={{ animation: 'scroll 20s linear infinite' }}
          >
            {duplicated.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-16 min-w-[150px] items-center justify-center rounded-lg border border-border bg-white px-5 py-3 transition-all duration-300 hover:scale-105 hover:border-gold hover:grayscale-0 grayscale sm:h-20 sm:min-w-[180px] sm:px-8 sm:py-4"
              >
                <span className="font-playfair text-base font-bold tracking-wide text-textBody transition-colors hover:text-textDark sm:text-lg">
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
