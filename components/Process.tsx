'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPencilRuler, faCube, faHammer, faKey } from '@fortawesome/free-solid-svg-icons';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const steps = [
  { num: '01', title: 'Consultation', desc: 'We listen to your needs and vision.', icon: faComments },
  { num: '02', title: 'Concept Design', desc: 'Initial sketches and direction.', icon: faPencilRuler },
  { num: '03', title: '3D Visualisation', desc: 'Photorealistic renders for approval.', icon: faCube },
  { num: '04', title: 'Execution', desc: 'Skilled on-site implementation.', icon: faHammer },
  { num: '05', title: 'Handover', desc: 'Final walkthrough and keys.', icon: faKey },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll delay={0}>
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-gold">HOW WE WORK</p>
          <h2 className="mt-2 font-playfair text-3xl font-semibold text-textDark md:text-4xl">
            Our <span className="italic text-gold">Process</span>
          </h2>
        </AnimateOnScroll>
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-5 hidden border-t-2 border-dashed border-gold md:block" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.num} delay={i * 0.15}>
                <div className="relative z-10 rounded-card border border-border bg-white p-6 text-center transition-all duration-350 hover:-translate-y-1 hover:border-gold hover:shadow-gold-soft">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gold font-playfair text-sm font-bold text-white">
                    {s.num}
                  </div>
                  <div className="mt-3 flex justify-center text-gold">
                    <FontAwesomeIcon icon={s.icon} className="text-2xl" />
                  </div>
                  <h3 className="mt-2 font-playfair text-lg font-bold text-textDark">{s.title}</h3>
                  <p className="mt-1 text-sm text-textBody">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
