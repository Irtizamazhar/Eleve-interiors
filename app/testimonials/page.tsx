'use client';

import TopHeaderBar from '@/components/TopHeaderBar';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function TestimonialsPage() {
  return (
    <>
      <TopHeaderBar />
      <Navbar />
      <main className="pt-28 md:pt-40">
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
