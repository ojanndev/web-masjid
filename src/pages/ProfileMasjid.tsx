import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/About';
import AboutRqd from '@/components/AboutRqd';
import AboutKhoirunnisa from '@/components/AboutKhoirunnisa';
import AboutApm from '@/components/AboutApm';       // ✅ Import baru
import AboutIrma from '@/components/AboutIrma';     // ✅ Import baru
import useScrollAnimation from '@/utils/useScrollAnimation';

const ProfileSchool = () => {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Profil Masjid - Masjid Darussalam Taman Persada Raya";
  }, []);

  const [selectedPage, setSelectedPage] = useState("utama");

  // ✅ Tambahkan 2 lembaga baru: apm & irma
  const lembagaList = [
    { id: "utama", logo: "/logo-masjid.svg" },
    { id: "rumahquran", logo: "/logo-rqd.svg" },
    { id: "khoirunnisa", logo: "/logo-mtk.svg" },
    { id: "apm", logo: "/logo-apm.svg" },
    { id: "irma", logo: "/logo-irma.svg" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("bg-img3.jpg")' }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-3"
          >
            Profil Masjid Darussalam
          </motion.h1>
          <p className="text-gray-200 text-lg">
            Pusat ibadah, pendidikan Qur’an, dan dakwah umat di Taman Persada Raya
          </p>
        </div>
      </section>

      {/* Pilihan Logo Lembaga */}
      <section className="bg-gray-50 py-10 border-b border-gray-100">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6">
          {lembagaList.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setSelectedPage(item.id)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="transition-transform duration-300 focus:outline-none"
            >
            <img
              src={item.logo.trim()}
              alt={item.id}
              className={`object-contain w-44 h-44 md:w-52 md:h-52 transition-all duration-300 ${
                selectedPage === item.id ? "scale-110 drop-shadow-xl" : "opacity-90 hover:opacity-100"
              }`}
            />
            </motion.button>
          ))}
        </div>
      </section>

      {/* Konten Dinamis */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {selectedPage === "utama" && (
              <motion.div
                key="utama"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AboutSection />
              </motion.div>
            )}

            {selectedPage === "rumahquran" && (
              <motion.div
                key="rumahquran"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AboutRqd />
              </motion.div>
            )}

            {selectedPage === "khoirunnisa" && (
              <motion.div
                key="khoirunnisa"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AboutKhoirunnisa />
              </motion.div>
            )}

            {/* ✅ Tambahkan APM */}
            {selectedPage === "apm" && (
              <motion.div
                key="apm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AboutApm />
              </motion.div>
            )}

            {/* ✅ Tambahkan IRMA */}
            {selectedPage === "irma" && (
              <motion.div
                key="irma"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AboutIrma />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfileSchool;