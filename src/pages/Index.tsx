"use client";

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import RentalSection from '@/components/RentalSection';
import KajianSection from '@/components/KajianSection';
import DonasiSection from '@/components/DonasiSection';
import LaporanKeuanganSection from '@/components/LaporanKeuanganSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';


import Footer from '@/components/Footer';
// import BottomBar from '@/components/BottomBar';
import useScrollAnimation from '@/utils/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Masjid Darussalam Taman Persada Raya, Bekasi";
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <LaporanKeuanganSection />
      <DonasiSection />
      <RentalSection />
      <KajianSection />
      <FloatingWhatsApp />

      <Footer />
      {/* <BottomBar /> */}
    </div>
  );
};

export default Index;