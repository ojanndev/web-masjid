import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  Laptop, 
  Heart,
  Building,
  Target,
  Shield
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Berlandaskan Al-Qur’an & Sunnah",
      description: "Seluruh aktivitas yayasan dijiwai oleh nilai-nilai Islam yang shahih dan moderat."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Pusat Dakwah & Pendidikan",
      description: "Masjid sebagai pusat peradaban: tempat ibadah, belajar, dan pemberdayaan umat."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Pengurus Amanah & Profesional",
      description: "Dikelola oleh tim yang kompeten, berintegritas, dan memiliki komitmen tinggi terhadap dakwah."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Program LBQ",
      description: "Bimbingan baca dan hafal Al-Qur’an dengan metode terstruktur melalui program LBQ untuk santri dan masyarakat sekitar."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Pendidikan Karakter Islami",
      description: "Membentuk generasi berakhlak mulia, cinta masjid, dan peduli terhadap sesama."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Transparansi & Akuntabilitas",
      description: "Laporan keuangan dan kegiatan yayasan terbuka untuk jamaah dan donatur."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-emerald-600 font-medium text-sm md:text-base uppercase tracking-wide mb-2 block">
            NILAI UTAMA KAMI
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Keunggulan Yayasan Masjid Ibnusina Jatibening
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Kami hadir sebagai perpanjangan tangan masjid dalam membina, memberdayakan, 
            dan menebarkan manfaat bagi umat dengan semangat ukhuwah dan amal jariyah.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl 
                         transition-all duration-500 p-6 md:p-8 text-center border border-white/50
                         hover:border-emerald-300 hover:-translate-y-2 min-h-[260px] flex flex-col justify-center"
            >
              {/* Icon dengan animasi */}
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl w-16 h-16 
                              flex items-center justify-center mb-6 mx-auto text-white shadow-lg
                              group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 
                             group-hover:text-emerald-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed 
                            group-hover:text-gray-800 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto border border-white/50">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Mari Berkontribusi untuk Umat!
            </h3>
            <p className="text-gray-700 mb-6 text-base md:text-lg">
              Dukung program dakwah, pendidikan, dan pemberdayaan masjid Ibnusina Jatibening.
            </p>
            <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white 
                               px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold 
                               hover:from-emerald-700 hover:to-emerald-800 transform hover:scale-105 
                               transition-all duration-300 shadow-lg hover:shadow-xl">
              Donasi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;