
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PhotoGallery from '@/components/About';
import Features from '@/components/Features';
import DonasiSection from '@/components/DonasiSection';
// import Pricing from '@/components/Pricing';
// import FAQ from '@/components/FAQ';
// import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
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
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <PhotoGallery />
      <Features />
      <DonasiSection />
      {/* <Pricing /> */}
      {/* <FAQ /> */}
      {/* <CTA /> */}
      <Footer />
      {/* <ProfileSchool /> */}
    </div>
  );
};

export default Index;
