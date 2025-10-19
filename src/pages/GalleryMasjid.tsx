import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// BottomBar dihapus sesuai permintaan

const GalleryMasjid = () => {
  useEffect(() => {
    document.title = "Galeri Kegiatan - Masjid Darussalam";
  }, []);

  const images = [
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
    "https://picsum.photos/600/400?random=4",
    "https://picsum.photos/600/400?random=5",
    "https://picsum.photos/600/400?random=6",
    "https://picsum.photos/600/400?random=7",
    "https://picsum.photos/600/400?random=8",
    "https://picsum.photos/600/400?random=9",
    "https://picsum.photos/600/400?random=10",
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section dengan Background Gambar */}
      <section 
        className="relative min-h-[30vh] flex items-center justify-center pt-16"
        style={{
          backgroundImage: 'url("/bg-img2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">
            Galeri Kegiatan
          </h1>
          <p className="text-gray-200 text-lg drop-shadow-sm">
            Dokumentasi dakwah, pendidikan, dan pemberdayaan umat di Masjid Darussalam
          </p>
        </div>
      </section>

      {/* Auto-Scroll Gallery */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4 space-y-10">
          
          {/* Track 1 (Kiri → Kanan) */}
          <div 
            className="relative w-full overflow-hidden"
            onMouseEnter={(e) => e.currentTarget.querySelector('.scroll-track')?.classList.add('paused')}
            onMouseLeave={(e) => e.currentTarget.querySelector('.scroll-track')?.classList.remove('paused')}
          >
            <div className="flex scroll-track animate-scroll-left">
              {[...images, ...images].map((src, i) => (
                <div key={`track1-${i}`} className="flex-shrink-0 mx-2">
                  <div className="rounded-xl shadow-md overflow-hidden">
                    <img 
                      src={src.trim()} 
                      alt={`Galeri ${i + 1}`} 
                      className="w-64 h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Track 2 (Kanan → Kiri) */}
          <div 
            className="relative w-full overflow-hidden"
            onMouseEnter={(e) => e.currentTarget.querySelector('.scroll-track')?.classList.add('paused')}
            onMouseLeave={(e) => e.currentTarget.querySelector('.scroll-track')?.classList.remove('paused')}
          >
            <div className="flex scroll-track animate-scroll-right">
              {[...images, ...images].map((src, i) => (
                <div key={`track2-${i}`} className="flex-shrink-0 mx-2">
                  <div className="rounded-xl shadow-md overflow-hidden">
                    <img 
                      src={src.trim()} 
                      alt={`Galeri ${i + 1}`} 
                      className="w-64 h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
      {/* BottomBar dihapus */}

      {/* Animation Style */}
      <style jsx global>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }

        .paused {
          animation-play-state: paused !important;
        }

        .scroll-track {
          display: flex;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default GalleryMasjid;