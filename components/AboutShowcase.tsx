'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faStore, faChartLine } from '@fortawesome/free-solid-svg-icons';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const cards = [
  {
    icon: faUserTie,
    title: 'Expert partners, personal service',
    description:
      'We bring deep tech + design expertise, not templates. Our team combines strategic thinking with hands-on execution to deliver projects that matter. When you work with Eleve, you work directly with seasoned professionals who genuinely care about your success.',
  },
  {
    icon: faStore,
    title: 'Local business champions',
    description:
      'Locally grounded, with a genuine passion for helping small businesses grow and succeed through smart, intentional design. We understand the unique challenges and opportunities that come with serving our community, and we are here to help you thrive.',
  },
  {
    icon: faChartLine,
    title: 'Measurable business impact',
    description:
      'We deliver strategic design and technology solutions that drive real results for your business. From increased efficiency to enhanced customer experience, our proven approach helps small businesses achieve sustainable growth and competitive advantage.',
  },
];

export default function AboutShowcase() {
  return (
    <section className="bg-bgLight py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll delay={0}>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-playfair text-3xl font-semibold text-textDark md:text-5xl">
              About <span className="text-gold">Eleve</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl font-cormorant text-xl leading-relaxed text-textBody md:text-2xl">
              At Eleve, we bring thoughtful design and tech solutions to small businesses,
              built on trust, collaboration, and real connection.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <AnimateOnScroll key={card.title} delay={idx * 0.1}>
              <article className="group h-full rounded-[18px] border border-border bg-white p-7 shadow-card transition-all duration-350 hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <FontAwesomeIcon icon={card.icon} className="text-[26px]" />
                </div>
                <h2 className="font-playfair text-2xl font-semibold leading-tight text-textDark">
                  {card.title}
                </h2>
                <p className="mt-3 font-cormorant text-[1.08rem] leading-8 text-textBody">
                  {card.description}
                </p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
