'use client';

import TopHeaderBar from '@/components/TopHeaderBar';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <>
      <TopHeaderBar />
      <Navbar />
      <main className="pt-28 md:pt-40">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
