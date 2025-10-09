import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Eye, 
  Target, 
  Heart, 
  Users, 
  Award, 
  Building2,
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  BookOpen,
  FileText,
  Clock,
  CheckCircle
} from 'lucide-react';
import { AnimatedBackground } from '@/components/ui/animated-background';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import useScrollAnimation from '@/utils/useScrollAnimation';

const ProfileSchool = () => {
  // Tetap dipertahankan untuk konsistensi
  useScrollAnimation();
  useEffect(() => {
    document.title = "Profil Yayasan - Yayasan Masjid Ibnusina Jatibening";
  }, []);

  // Data profil yayasan (disesuaikan)
  const founderInfo = {
    name: "KH. Dr. Ibnusina Al-Jatibening",
    title: "Pendiri Yayasan Masjid Ibnusina Jatibening",
    birthYear: "1955",
    photo: "https://picsum.photos/400/400?random=7"
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'url("bg-masjid.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-white"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Profil Yayasan <br />
              <span className="text-emerald-300 text-3xl md:text-4xl font-semibold">
                Masjid Ibnusina Jatibening
              </span>
            </h1>
            <div className="h-1 w-24 bg-white mx-auto mb-6 rounded-full" />
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Lembaga dakwah yang menjadi pusat ibadah, pendidikan Al-Qur’an, dan pemberdayaan umat di Jatibening, Bekasi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Konten Profil - SATU HALAMAN */}
      <section className="py-16 relative overflow-hidden">
        <AnimatedBackground />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto space-y-12"
          >
            {/* Visi & Misi */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-200/50">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-emerald-800">Visi & Misi</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-emerald-700 mb-3 flex items-center">
                    <Eye className="h-5 w-5 mr-2" /> Visi
                  </h3>
                  <p className="text-emerald-700/80 italic leading-relaxed">
                    "Menjadikan Masjid Ibnusina sebagai pusat peradaban Islam yang menebarkan manfaat, membina umat, dan membangun generasi Qur’ani."
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-700 mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2" /> Misi
                  </h3>
                  <ul className="space-y-2 text-emerald-700/80">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>Mengelola masjid sebagai pusat ibadah, ilmu, dan ukhuwah Islamiyah.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>Menyelenggarakan program pendidikan Al-Qur’an (LBQ) untuk semua usia.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>Memberdayakan masyarakat melalui kegiatan sosial dan ekonomi umat.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>Mengembangkan dakwah digital untuk menjangkau generasi muda.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tentang Yayasan */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-200/50">
                <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                  <Building2 className="h-6 w-6 mr-2" /> Tentang Kami
                </h2>
                <p className="text-emerald-700/80 leading-relaxed mb-4">
                  Yayasan Masjid Ibnusina Jatibening didirikan pada tahun 2009 oleh KH. Dr. Ibnusina Al-Jatibening dengan tujuan menjadikan masjid sebagai pusat peradaban Islam.
                </p>
                <p className="text-emerald-700/80 leading-relaxed mb-6">
                  Di bawah naungan yayasan, masjid ini tidak hanya menjadi tempat shalat, tetapi juga wadah pembinaan akhlak, pendidikan Al-Qur’an, pemberdayaan ekonomi, dan kegiatan sosial bagi masyarakat sekitar.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-emerald-600 mr-2" />
                    <span className="text-emerald-700/80">Berdiri: 2009</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-emerald-600 mr-2" />
                    <span className="text-emerald-700/80">1000+ Jamaah</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
                    <span className="text-emerald-700/80">Jatibening, Bekasi</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 text-emerald-600 mr-2" />
                    <span className="text-emerald-700/80">Program LBQ Aktif</span>
                  </div>
                </div>
              </div>

              {/* Pendiri */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-200/50">
                <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                  <User className="h-6 w-6 mr-2" /> Pendiri Yayasan
                </h2>
                <div className="text-center mb-6">
                  <img 
                    src={founderInfo.photo}
                    alt={founderInfo.name}
                    className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-emerald-300 shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-emerald-800 mt-4">{founderInfo.name}</h3>
                  <p className="text-emerald-600">{founderInfo.title}</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                  <p className="text-emerald-700 italic">
                    “Masjid adalah jantung peradaban umat. Di sanalah iman dikuatkan, ilmu disebarkan, dan ukhuwah dibangun.”
                  </p>
                </div>
              </div>
            </div>

            {/* Program Unggulan */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-200/50">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                <Heart className="h-6 w-6 mr-2" /> Program Unggulan
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Program LBQ", desc: "Tahsin & tahfiz Al-Qur’an untuk anak-anak hingga dewasa" },
                  { title: "Kajian Rutin", desc: "Kajian ilmu agama mingguan terbuka untuk umum" },
                  { title: "Santunan Yatim", desc: "Bantuan bulanan untuk anak yatim dan dhuafa" },
                  { title: "Dakwah Digital", desc: "Konten islami melalui media sosial dan YouTube" },
                  { title: "Pelatihan Umat", desc: "Kewirausahaan halal dan pelatihan keterampilan" },
                  { title: "Kegiatan Sosial", desc: "Bazaar murah, sembako, dan layanan kesehatan gratis" }
                ].map((prog, i) => (
                  <div key={i} className="bg-emerald-50 p-5 rounded-xl border border-emerald-200">
                    <h4 className="font-bold text-emerald-800 mb-2">{prog.title}</h4>
                    <p className="text-emerald-700/80 text-sm">{prog.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Kontak Singkat */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-200/50 text-center">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">Ingin Berpartisipasi?</h2>
              <p className="text-emerald-700/80 mb-6">
                Bergabunglah dalam kegiatan, donasi, atau dukung program dakwah kami.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-600" />
                  <span>(021) 8888-7777</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-600" />
                  <span>info@masjidibnusina.or.id</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-600" />
                  <span>Jl. Jatibening Raya No. 123, Bekasi</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfileSchool;