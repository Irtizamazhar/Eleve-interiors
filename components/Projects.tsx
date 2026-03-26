'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const projects = [
  {
    id: 1,
    src: '/projects/recent-work-1.png',
    title: 'Code Valley Office',
    category: 'Commercial Interior',
    gallery: [
      '/projects/recent-work-1.png',
      '/projects/recent-work-2.png',
      '/projects/recent-work-3.png',
      '/projects/recent-work-4.png',
    ],
  },
  {
    id: 2,
    src: '/projects/recent-work-2-main.png',
    title: 'ARY Digital Shan-e-sahoor 2024',
    category: 'Residential Design',
    includeCardImageInPopup: false,
    gallery: [
      '/projects/recent-work-2-click-1.png',
      '/projects/recent-work-2-click-2.png',
      '/projects/recent-work-2-click-3.png',
    ],
  },
  {
    id: 3,
    src: '/projects/recent-work-3-main.png',
    title: 'ARY News Defence Day Set 2018',
    category: 'Residential Design',
    gallery: ['/projects/recent-work-3-bedroom-2.png', '/projects/recent-work-3-bedroom-3.png'],
    includeCardImageInPopup: true,
    preserveFullImage: true,
  },
  {
    id: 4,
    src: '/projects/recent-work-4-kitchen-2.png',
    title: 'Kitchen Design',
    category: 'Kitchen Design',
    gallery: ['/projects/recent-work-4-main.png'],
    preserveFullImage: true,
  },
  {
    id: 5,
    src: '/projects/recent-work-5-bedroom-2.png',
    title: 'Bed Room design',
    category: 'Bed Room design',
    gallery: ['/projects/recent-work-5-bedroom-2.png'],
    preserveFullImage: true,
  },
  {
    id: 6,
    src: '/projects/recent-work-6-main.png',
    title: 'Garden Courtyard',
    category: 'Landscape Design',
    gallery: ['/projects/recent-work-6-click.png'],
  },
  {
    id: 7,
    src: '/projects/recent-work-7-main.png',
    title: 'Modern Living Space',
    category: 'Residential Design',
    gallery: ['/projects/recent-work-7-click.png'],
  },
  {
    id: 8,
    src: '/projects/recent-work-8-main.png',
    title: 'Modern Bedroom Interior',
    category: 'Residential Design',
    gallery: ['/projects/recent-work-8-click.png'],
  },
  {
    id: 9,
    src: '/projects/recent-work-9-main.png',
    title: 'Contemporary Living & Dining',
    category: 'Residential Design',
    gallery: ['/projects/recent-work-9-click.png'],
  },
  {
    id: 10,
    src: '/projects/recent-work-10-main.png',
    title: 'Modern Cafe Interior',
    category: 'Hospitality Design',
    gallery: [
      '/projects/recent-work-10-click-1.png',
      '/projects/recent-work-10-click-2.png',
    ],
  },
  {
    id: 11,
    src: '/projects/recent-work-11-main.png',
    title: 'Executive Office Interior',
    category: 'Commercial Interior',
    gallery: ['/projects/recent-work-11-click.png'],
  },
  {
    id: 12,
    src: '/projects/recent-work-12-main.png',
    title: 'Modern Bathroom Design',
    category: 'Residential Design',
    gallery: ['/projects/recent-work-12-main.png'],
  },
  {
    id: 13,
    src: '/projects/recent-work-13-main.png',
    title: 'Outdoor & Living Ambience',
    category: 'Residential Design',
    gallery: [
      '/projects/recent-work-13-click-1.png',
      '/projects/recent-work-13-click-2.png',
      '/projects/recent-work-13-click-3.png',
    ],
  },
  {
    id: 14,
    src: '/projects/recent-work-14-main.png',
    title: 'Bed Room Design (Day Light)',
    category: 'Residential Design',
    gallery: ['/projects/recent-work-14-click.png'],
  },
  {
    id: 15,
    src: '/projects/recent-work-15-main.png',
    title: 'Mezzanine Restaurants Design',
    category: 'Restaurant Design',
    gallery: [
      '/projects/recent-work-15-click-1.png',
      '/projects/recent-work-15-click-2.png',
      '/projects/recent-work-15-click-3.png',
    ],
  },
  {
    id: 16,
    src: '/projects/recent-work-16-main.png',
    title: 'Restaurant Design',
    category: 'Restaurant Design',
    gallery: [
      '/projects/recent-work-16-click-1.png',
      '/projects/recent-work-16-click-2.png',
      '/projects/recent-work-16-click-3.png',
      '/projects/recent-work-16-click-4.png',
    ],
  },
  {
    id: 17,
    src: '/projects/recent-work-17-main.png',
    title: 'Restaurant Exterior Design',
    category: 'Restaurant Design',
    gallery: ['/projects/recent-work-17-main.png'],
  },
  {
    id: 18,
    src: '/projects/recent-work-18-main.png',
    title: 'Roof Top Restaurants Design',
    category: 'Restaurant Design',
    gallery: [
      '/projects/recent-work-18-click-1.png',
      '/projects/recent-work-18-click-2.png',
      '/projects/recent-work-18-click-3.png',
      '/projects/recent-work-18-click-4.png',
    ],
  },
  {
    id: 19,
    src: '/projects/recent-work-19-main.png',
    title: 'Kitchen Design',
    category: 'Kitchen Design',
    gallery: ['/projects/recent-work-19-main.png'],
    preserveFullImage: true,
  },
  {
    id: 20,
    src: '/projects/recent-work-20-main.png',
    title: 'ARY NEWS Shan-e-ifart Ramzan SHOW Set Design 2017',
    category: 'TV Show Set Design',
    gallery: [
      '/projects/recent-work-20-click-1.png',
      '/projects/recent-work-20-click-2.png',
      '/projects/recent-work-20-click-3.png',
      '/projects/recent-work-20-click-4.png',
    ],
    preserveFullImage: true,
  },
  {
    id: 21,
    src: '/projects/recent-work-21-main.png',
    title: 'Luxury Living Room Design',
    category: 'Residential Design',
    gallery: ['/projects/recent-work-21-click-1.png'],
    preserveFullImage: true,
  },
  {
    id: 23,
    src: '/projects/recent-work-23-main.png',
    title: 'Drawing Room Interior Design',
    category: 'Residential Design',
    gallery: ['/projects/recent-work-23-click-1.png'],
    preserveFullImage: true,
  },
  {
    id: 24,
    src: '/projects/recent-work-24-main.png',
    title: 'Garden Design',
    category: 'Garden Design',
    gallery: ['/projects/recent-work-24-click-1.png'],
    preserveFullImage: true,
  },
];

function extractYear(title: string) {
  const match = title.match(/\b(19|20)\d{2}\b/);
  return match?.[0] ?? null;
}

function titleWithoutYear(title: string) {
  const year = extractYear(title);
  if (!year) return title;
  return title.replace(year, '').trim();
}

function projectYear(title: string) {
  // Agar title me year na ho to hum default year show kar dete hain
  return extractYear(title) ?? '2024';
}

export default function Projects() {
  const [activeGallery, setActiveGallery] = useState<{ title: string; images: string[]; cropTop?: boolean } | null>(null);

  return (
    <section id="projects" className="bg-bgLight py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll delay={0}>
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-gold">RECENT WORK</p>
          <h2 className="mt-2 font-playfair text-3xl font-semibold text-textDark md:text-4xl">
            We Produce the Finest Interior Solutions
          </h2>
        </AnimateOnScroll>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <AnimateOnScroll key={p.id} delay={i * 0.1}>
              <Link
                href="#contact"
                onClick={(e) => {
                  if (!p.gallery) return;
                  e.preventDefault();
                  const popupImages = p.includeCardImageInPopup === false ? p.gallery : [p.src, ...p.gallery];
                  const mergedImages = popupImages.filter((img, idx, arr) => arr.indexOf(img) === idx);
                  setActiveGallery({ title: p.title, images: mergedImages, cropTop: p.id === 6 });
                }}
                className="group relative block h-[280px] w-full overflow-hidden rounded-card transition-all duration-400 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="relative h-full w-full">
<Image
                    src={p.src}
                    alt={p.title}
                    fill
                    className={`${p.id === 6 ? 'object-cover object-[center_72%]' : p.preserveFullImage ? 'object-cover object-top' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <div
                  className="absolute inset-0 flex translate-y-full flex-col items-center justify-end bg-[rgba(201,168,76,0.88)] p-6 transition-transform duration-400 group-hover:translate-y-0"
                >
                  <h3 className="font-playfair text-xl font-bold text-white">
                    {titleWithoutYear(p.title)}
                    <span className="ml-2 inline-block rounded bg-black/20 px-2 py-0.5 text-xs font-semibold text-white/95">
                      {projectYear(p.title)}
                    </span>
                  </h3>
                  <p className="mt-1 text-sm text-white/80">{p.category}</p>
                  <span className="mt-3 inline-block rounded border-2 border-white px-4 py-2 font-montserrat text-xs font-medium uppercase text-white transition-colors group-hover:bg-white group-hover:text-textDark">
                    View Project →
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {activeGallery && (
        <div className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/75 p-4">
          <div className="w-full max-w-6xl rounded-card bg-white p-4 md:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-playfair text-xl font-semibold text-textDark md:text-2xl">
                {titleWithoutYear(activeGallery.title)}
                <span className="ml-3 inline-block rounded bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                  {projectYear(activeGallery.title)}
                </span>
              </h3>
              <button
                type="button"
                onClick={() => setActiveGallery(null)}
                className="flex h-9 w-9 items-center justify-center rounded border border-border text-xl leading-none text-textDark hover:border-gold hover:text-gold"
                aria-label="Close gallery"
              >
                ×
              </button>
            </div>
            <div className="max-h-[72vh] space-y-4 overflow-y-auto pr-1">
              {activeGallery.images.map((img, idx) => (
                <div
                  key={img}
                  className="relative h-[52vh] min-h-[280px] w-full overflow-hidden rounded md:h-[56vh] md:min-h-[360px]"
                >
                  <Image
                    src={img}
                    alt={`${activeGallery.title} ${idx + 1}`}
                    fill
                    className={activeGallery.cropTop ? 'object-cover object-[center_72%]' : 'object-contain bg-white'}
                    sizes="(max-width: 768px) 100vw, 90vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
