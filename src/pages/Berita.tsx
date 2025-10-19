import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Berita = () => {
  useEffect(() => {
    document.title = "Berita & Informasi - Masjid Darussalam";
  }, []);

  const articles = [
    {
      id: 1,
      title: "Mengamalkan Sunnah yang Seragam",
      date: "Kamis, 2 Oktober 2025 | 9 Rabiul Akhir 1447 H",
      excerpt: "*KAJIAN MUSLIMAH RUTIN* — Bersama Ustazah Ammi Nur Baits. Hadirilah...!!! 📌 Kamis, 9 Rabiul Akhir 1447 H *02.00 WIB*",
      image: "https://picsum.photos/600/400?random=1"
    },
    {
      id: 2,
      title: "Mengikuti Tata Cara Shalat Nabi shallallahu alaihi wasallam",
      date: "Jumat, 26 September 2025",
      excerpt: "HADIRILAH KAJIAN KHUSUS MUSLIMAH | MT HABIBAH SHALIHAN 📍 Ustazah Maryam Ummu Saffanah — Judul: \"Mengikuti Tata Cara Shalat Nabi shalallahu alaihi wasallam\"",
      image: "https://picsum.photos/600/400?random=2"
    },
    {
      id: 3,
      title: "Sibukkan Diri Dengan Dzikir Ringan",
      date: "Kamis Pagi, 26 Rabiul Akhir 1447 H",
      excerpt: "\"Kajian Khusus Muslimah\" — Klaten Bukan kuatnya badan yang membuat hati tenang, melainkan lisan yang senantiasa basah dengan dzikir kepada Ar-Rahman.",
      image: "https://picsum.photos/600/400?random=3"
    },
    {
      id: 4,
      title: "Urip Miguna Mati Sampurna",
      date: "Senin, 20 Januari 2025",
      excerpt: "Renungan akhir pekan tentang makna hidup dan kematian dalam perspektif Islam.",
      image: "https://picsum.photos/600/400?random=4"
    },
    {
      id: 5,
      title: "Semangat Menuntut Ilmu Nabi Musa Kepada Khidir",
      date: "Rabu, 15 Januari 2025",
      excerpt: "Kajian tafsir Surah Al-Kahfi ayat 60-82 bersama Ust. Ahmad Fauzi.",
      image: "https://picsum.photos/600/400?random=5"
    },
    {
      id: 6,
      title: "5 Tingkatan Manusia Ketika Shalat",
      date: "Ahad, 12 Januari 2025",
      excerpt: "Mengenal kualitas shalat kita: apakah hanya gerakan, atau sudah menyentuh hati?",
      image: "https://picsum.photos/600/400?random=6"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("bg-img3.jpg")' }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md">
            Berita & Informasi <br />
            <span className="text-gray-300 text-3xl md:text-4xl font-semibold">
              Masjid Darussalam
            </span>
          </h1>
          <div className="h-px w-24 bg-white/30 mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Update kegiatan, kajian, dan program dakwah di Taman Persada Raya, Bekasi.
          </p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-12">
            <p className="text-emerald-800 font-medium text-sm uppercase tracking-wide">
              INFO TERKINI
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
              Kajian & Kegiatan Terbaru
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Gambar penuh */}
                <div className="relative h-64 w-full">
                  <img
                    src={article.image.trim()}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gelap untuk teks */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-200 text-xs mb-2">
                      {article.date}
                    </p>
                    <p className="text-gray-200 text-sm line-clamp-2 opacity-90">
                      {article.excerpt}
                    </p>
                    <span className="mt-2 inline-block text-emerald-300 font-medium text-sm">
                      Baca Selengkapnya →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Berita;