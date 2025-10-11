import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedBackground } from '@/components/ui/animated-background';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomBar from '@/components/BottomBar';
import useScrollAnimation from '@/utils/useScrollAnimation';

const GalleryMasjid = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useScrollAnimation();

  useEffect(() => {
    document.title = "Galeri Kegiatan - Yayasan Masjid Ibnusina Jatibening";
  }, []);

  // ✅ Konten disesuaikan dengan kegiatan masjid/yayasan
  const galleryItems = [
    {
      id: 1,
      title: "Kajian Rutin Ahad Pagi",
      date: "Mei 2024",
      description: "Kajian ilmu agama untuk jamaah umum oleh Ust. Ahmad Fauzi, Lc.",
      image: "https://picsum.photos/800/600?random=1"
    },
    {
      id: 2,
      title: "Program LBQ Anak-Anak",
      date: "April 2024",
      description: "Pembelajaran tahsin & tahfiz Al-Qur’an untuk santri usia 6-12 tahun.",
      image: "https://picsum.photos/800/600?random=2"
    },
    {
      id: 3,
      title: "Santunan Yatim & Dhuafa",
      date: "Ramadhan 1445 H",
      description: "Penyaluran bantuan kepada 50 keluarga dhuafa di lingkungan Jatibening.",
      image: "https://picsum.photos/800/600?random=3"
    },
    {
      id: 4,
      title: "Pelatihan Multimedia Dakwah",
      date: "Maret 2024",
      description: "Pelatihan konten islami untuk remaja masjid menggunakan smartphone.",
      image: "https://picsum.photos/800/600?random=4"
    },
    {
      id: 5,
      title: "Bazaar Murah Ramadhan",
      date: "Ramadhan 1445 H",
      description: "Bazaar sembako murah untuk jamaah dan warga sekitar masjid.",
      image: "https://picsum.photos/800/600?random=5"
    },
    {
      id: 6,
      title: "Pembinaan Keluarga Sakinah",
      date: "Februari 2024",
      description: "Kegiatan konseling dan edukasi pernikahan berbasis Islam.",
      image: "https://picsum.photos/800/600?random=6"
    },
    {
      id: 7,
      title: "Peringatan Isra Mi'raj",
      date: "Rajab 1445 H",
      description: "Peringatan Isra Mi'raj Nabi Muhammad SAW dengan tausiyah dan doa bersama.",
      image: "https://picsum.photos/800/600?random=7"
    },
    {
      id: 8,
      title: "Kegiatan Kebersihan Masjid",
      date: "Januari 2024",
      description: "Gotong royong jamaah membersihkan area masjid dan lingkungan.",
      image: "https://picsum.photos/800/600?random=8"
    }
  ];

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    const index = galleryItems.findIndex(item => item.id === id);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryItems.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryItems[nextIndex].id);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryItems[prevIndex].id);
  };

  return (
    <div className="min-h-screen overflow-x-hidden pb-24">
      <Navbar />
      
      {/* Hero Section - Tema Hijau */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("bg-masjid.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-white"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight drop-shadow-md">
              Galeri Kegiatan <br />
              <span className="text-emerald-300 text-3xl md:text-4xl font-semibold">Yayasan Masjid Ibnusina</span>
            </h1>
            <div className="h-1 w-20 bg-white mx-auto mb-4 rounded" />
            <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
              Dokumentasi dakwah, pendidikan, dan pemberdayaan umat di Jatibening
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <AnimatedBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header Galeri */}
            <div className="text-center mb-12">
              <p className="text-emerald-600 font-medium text-sm uppercase tracking-wider">
                Aktivitas Terkini
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                Jejak Kebaikan di Masjid Ibnusina
              </h2>
            </div>

            {/* Grid Galeri */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-emerald-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(item.id)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image.trim()}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-emerald-600 text-white p-3 rounded-full">
                        <Camera className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-xs text-emerald-600 mb-2">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span>{item.date}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal - Modern & Hijau */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-500 hover:text-emerald-600 transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-emerald-200 transition-colors bg-black/40 rounded-full p-2 md:p-3"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-emerald-200 transition-colors bg-black/40 rounded-full p-2 md:p-3"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {(() => {
              const currentItem = galleryItems[currentImageIndex];
              return currentItem ? (
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/3 h-96 md:h-full">
                    <img 
                      src={currentItem.image.trim()}
                      alt={currentItem.title}
                      className="w-full h-full object-contain bg-gray-50"
                    />
                  </div>
                  <div className="md:w-1/3 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{currentItem.title}</h3>
                        <div className="text-sm text-emerald-600 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {currentItem.date}
                        </div>
                      </div>
                      <p className="text-gray-700 text-base leading-relaxed mb-6">
                        {currentItem.description}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 text-center pt-4 border-t border-gray-200">
                      {currentImageIndex + 1} dari {galleryItems.length}
                    </div>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </div>
      )}
      
      <Footer />
      <BottomBar />
    </div>
  );
};

export default GalleryMasjid;