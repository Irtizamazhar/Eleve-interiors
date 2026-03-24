'use client';

import TopHeaderBar from '@/components/TopHeaderBar';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  return (
    <>
      <TopHeaderBar />
      <Navbar />
      <main className="pt-28 md:pt-40">
        <Products />
      </main>
      <Footer />
    </>
  );
}
