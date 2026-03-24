'use client';

import TopHeaderBar from '@/components/TopHeaderBar';
import Navbar from '@/components/Navbar';
import Process from '@/components/Process';
import Footer from '@/components/Footer';

export default function ProcessPage() {
  return (
    <>
      <TopHeaderBar />
      <Navbar />
      <main className="pt-28 md:pt-40">
        <Process />
      </main>
      <Footer />
    </>
  );
}
