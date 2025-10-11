"use client";

import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  const whatsappNumber = "6281234567890"; // ← GANTI DENGAN NOMOR CS ADMIN
  const prefillMessage = "Assalamualaikum, saya ingin menyewa gedung Masjid Darussalam. Mohon informasi lebih lanjut.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prefillMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      aria-label="Hubungi Admin via WhatsApp"
    >
      <div className="relative">
        {/* Badge (opsional) */}
        <div className="absolute -top-2 -right-2 bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-1 rounded-full whitespace-nowrap">
          CS Gedung
        </div>

        {/* Tombol dengan ikon dari public/icon-wa.svg */}
        <div className=" p-3.5 rounded-full shadow-lg w-14 h-14 flex items-center justify-center transition-all duration-300">
          <img
            src="/icon-wa.svg"
            alt="WhatsApp"
            className="w-7 h-7"
          />
        </div>
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;