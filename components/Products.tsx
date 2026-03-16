'use client';

import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

// Native img URLs – sab load hon, koi Next Image block nahi
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80';

const products = [
  // Wall coverings – interior/wall style images
  { title: 'PVC Wall Panels', category: 'Wall Covering', desc: 'Lightweight PVC panels ideal for feature walls in lounges, bedrooms and offices.', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80' },
  { title: 'Fluted Panels (WPC)', category: 'Wall Covering', desc: 'Modern fluted WPC panels for TV walls, bed backdrops and reception areas.', img: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=900&q=80' },
  { title: 'Acoustic Panels', category: 'Wall Covering', desc: 'Sound-absorbing panels for offices, studios and home cinemas with designer finishes.', img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=900&q=80' },
  { title: 'PU Stone Panels', category: 'Wall Covering', desc: 'Lightweight PU stone panels giving natural stone look on feature walls and exteriors.', img: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=900&q=80' },
  { title: 'UV Marble Sheets', category: 'Wall Covering', desc: 'High-gloss marble sheets for lobbies, counters and statement walls without heavy stone.', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80' },
  // Window blinds
  { title: 'Roller Blinds', category: 'Window Blinds', desc: 'Clean roller blinds for modern apartments, offices and bedrooms.', img: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=900&q=80' },
  { title: 'Vertical Blinds', category: 'Window Blinds', desc: 'Functional vertical blinds for large windows, showrooms and offices.', img: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=900&q=80' },
  { title: 'Wooden Blinds', category: 'Window Blinds', desc: 'Warm wooden slat blinds adding natural character to windows.', img: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?w=900&q=80' },
  { title: 'Venetian Blinds', category: 'Window Blinds', desc: 'Classic venetian blinds offering precise control of light and privacy.', img: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?w=900&q=80' },
  { title: 'Zebra Blinds', category: 'Window Blinds', desc: 'Day & night zebra blinds with alternating sheer and solid stripes.', img: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=900&q=80' },
  { title: 'Chick Blinds', category: 'Window Blinds', desc: 'Traditional chick blinds for a cosy, diffused daylight effect.', img: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=900&q=80' },
  // Floorings
  { title: 'SPC Flooring', category: 'Flooring', desc: 'Waterproof SPC planks ideal for apartments, offices and commercial corridors.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80' },
  { title: 'Wooden Flooring', category: 'Flooring', desc: 'Engineered wooden floors bringing warmth to bedrooms and living spaces.', img: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=900&q=80' },
  { title: 'Vinyl Flooring', category: 'Flooring', desc: 'Resilient vinyl floors perfect for kitchens, retail and high traffic zones.', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80' },
  { title: 'Epoxy Flooring', category: 'Flooring', desc: 'Seamless epoxy flooring for showrooms, garages and industrial spaces.', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=900&q=80' },
  { title: 'Artificial Grass', category: 'Flooring', desc: 'Soft artificial turf for terraces, balconies, play areas and rooftops.', img: 'https://images.unsplash.com/photo-1514986888952-8cd320577b68?w=900&q=80' },
  { title: 'Carpet Tiles', category: 'Flooring', desc: 'Durable carpet tiles for modular layouts in offices and institutions.', img: 'https://images.unsplash.com/photo-1521783593447-5702f2c0c8f2?w=900&q=80' },
  { title: 'Sports Flooring', category: 'Flooring', desc: 'Multi-purpose sports flooring for indoor courts and activity zones.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80' },
  { title: 'Gym Flooring', category: 'Flooring', desc: 'Impact-resistant rubber flooring for gyms and fitness studios.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80' },
];

export default function Products() {
  return (
    <section id="products" className="bg-bgLight py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll delay={0}>
          <p className="font-montserrat text-sm font-bold uppercase tracking-[0.2em] text-gold">
            BEST SELLING
          </p>
          <h2 className="mt-2 font-playfair text-3xl font-semibold text-textDark md:text-4xl">
            Our Interior Solutions
          </h2>
        </AnimateOnScroll>
        <div className="mt-12 space-y-10">
          {/* Wall Coverings */}
          <div id="wall-coverings">
            <p className="font-montserrat text-sm font-bold uppercase tracking-[0.2em] text-gold">
              WALL COVERINGS
            </p>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .filter((p) => p.category === 'Wall Covering')
                .map((p, i) => (
                  <AnimateOnScroll key={p.title} delay={i * 0.1}>
                    <Link
                      href="#contact"
                      className="group block overflow-hidden rounded-card bg-white shadow-card transition-all duration-350 hover:-translate-y-1.5 hover:shadow-card-hover"
                    >
                      <div className="relative h-[220px] w-full overflow-hidden bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.img}
                          alt={p.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMG; }}
                        />
                      </div>
                      <div className="p-5">
                        <p className="font-montserrat text-xs font-semibold uppercase tracking-wider text-gold">
                          {p.category}
                        </p>
                        <h3 className="mt-1 font-playfair text-lg font-bold text-textDark">{p.title}</h3>
                        <p className="mt-1 line-clamp-2 text-sm text-textBody">{p.desc}</p>
                        <span className="mt-2 inline-block text-sm font-medium text-gold underline-offset-2 transition-colors group-hover:underline">
                          View Details →
                        </span>
                      </div>
                    </Link>
                  </AnimateOnScroll>
                ))}
            </div>
          </div>

          {/* Window Blinds */}
          <div id="window-blinds">
            <p className="font-montserrat text-sm font-bold uppercase tracking-[0.2em] text-gold">
              WINDOW BLINDS
            </p>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .filter((p) => p.category === 'Window Blinds')
                .map((p, i) => (
                  <AnimateOnScroll key={p.title} delay={i * 0.1}>
                    <Link
                      href="#contact"
                      className="group block overflow-hidden rounded-card bg-white shadow-card transition-all duration-350 hover:-translate-y-1.5 hover:shadow-card-hover"
                    >
                      <div className="relative h-[220px] w-full overflow-hidden bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.img}
                          alt={p.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMG; }}
                        />
                      </div>
                      <div className="p-5">
                        <p className="font-montserrat text-xs font-semibold uppercase tracking-wider text-gold">
                          {p.category}
                        </p>
                        <h3 className="mt-1 font-playfair text-lg font-bold text-textDark">{p.title}</h3>
                        <p className="mt-1 line-clamp-2 text-sm text-textBody">{p.desc}</p>
                        <span className="mt-2 inline-block text-sm font-medium text-gold underline-offset-2 transition-colors group-hover:underline">
                          View Details →
                        </span>
                      </div>
                    </Link>
                  </AnimateOnScroll>
                ))}
            </div>
          </div>

          {/* Floorings */}
          <div id="floorings">
            <p className="font-montserrat text-sm font-bold uppercase tracking-[0.2em] text-gold">
              FLOORINGS
            </p>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .filter((p) => p.category === 'Flooring')
                .map((p, i) => (
                  <AnimateOnScroll key={p.title} delay={i * 0.1}>
                    <Link
                      href="#contact"
                      className="group block overflow-hidden rounded-card bg-white shadow-card transition-all duration-350 hover:-translate-y-1.5 hover:shadow-card-hover"
                    >
                      <div className="relative h-[220px] w-full overflow-hidden bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.img}
                          alt={p.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMG; }}
                        />
                      </div>
                      <div className="p-5">
                        <p className="font-montserrat text-xs font-semibold uppercase tracking-wider text-gold">
                          {p.category}
                        </p>
                        <h3 className="mt-1 font-playfair text-lg font-bold text-textDark">{p.title}</h3>
                        <p className="mt-1 line-clamp-2 text-sm text-textBody">{p.desc}</p>
                        <span className="mt-2 inline-block text-sm font-medium text-gold underline-offset-2 transition-colors group-hover:underline">
                          View Details →
                        </span>
                      </div>
                    </Link>
                  </AnimateOnScroll>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
