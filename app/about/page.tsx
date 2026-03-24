'use client';

import TopHeaderBar from '@/components/TopHeaderBar';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <TopHeaderBar />
      <Navbar />
      <main className="pt-28 md:pt-40">
        <About />
      </main>
      <Footer />
    </>
  );
}
