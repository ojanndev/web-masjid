
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PhotoGallery from '@/components/About';
import Features from '@/components/Features';
import RentalSection from '@/components/RentalSection';
import DonasiSection from '@/components/DonasiSection';
// import Pricing from '@/components/Pricing';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

// import FAQ from '@/components/FAQ';
// import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import BottomBar from '@/components/BottomBar';
// import ProfileSchool from '@/components/ProfileSchool';
import useScrollAnimation from '@/utils/useScrollAnimation';

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();

  // Set page title
  useEffect(() => {
    document.title = "yayasan Masjid IBNUSINA Jatibening";
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden pb-20">
      <Navbar />
      <Hero />
      <PhotoGallery />
      <Features />
      <RentalSection />
      <DonasiSection />
      <FloatingWhatsApp />

      {/* <Pricing /> */}
      {/* <FAQ /> */}
      {/* <CTA /> */}
      <Footer />
      <BottomBar />
      {/* <ProfileSchool /> */}
    </div>
  );
};

export default Index;
