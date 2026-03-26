'use client';

import TopHeaderBar from '@/components/TopHeaderBar';
import Navbar from '@/components/Navbar';
import AboutShowcase from '@/components/AboutShowcase';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <TopHeaderBar />
      <Navbar />
      <main className="pt-20 md:pt-28">
        <AboutShowcase />
      </main>
      <Footer />
    </>
  );
}
