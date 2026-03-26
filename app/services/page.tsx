'use client';

import TopHeaderBar from '@/components/TopHeaderBar';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <>
      <TopHeaderBar />
      <Navbar />
      <main className="pt-16 md:pt-24">
        <Services />
      </main>
      <Footer />
    </>
  );
}
