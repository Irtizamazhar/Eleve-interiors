'use client';

import TopHeaderBar from '@/components/TopHeaderBar';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <TopHeaderBar />
      <Navbar />
      <main className="pt-28 md:pt-40">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
