'use client';

import Loader from '@/components/Loader';
import TopHeaderBar from '@/components/TopHeaderBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import WhyChooseUs from '@/components/WhyChooseUs';
import TrustedClients from '@/components/TrustedClients';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import StatsCounter from '@/components/StatsCounter';
import Awards from '@/components/Awards';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Loader />
      <TopHeaderBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <TrustedClients />
        <Projects />
        <Process />
        <StatsCounter />
        <Awards />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  );
}
