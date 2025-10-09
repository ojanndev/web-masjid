import { AnimatedBackground } from "@/components/ui/animated-background";

const AboutSection = () => {
  // Gunakan satu gambar utama masjid (ganti dengan URL asli jika sudah punya)
  const masjidImageUrl = "https://images.unsplash.com/photo-1590273089302-ebbc53986b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzamlkfGVufDB8fDB8fHww";

  return (
    <section
      id="about"
      className="py-10 md:py-16 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-teal-600 font-medium text-sm md:text-base uppercase tracking-wide">
            ABOUT MASJID
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-800">
            Masjid Ibnusina Jatibening Bekasi
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto items-center">
          {/* Left Content - Text */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Masjid Ibnusina Jatibening merupakan pusat kegiatan ibadah,
                dakwah, dan sosial yang berada di bawah naungan{" "}
                <strong>Yayasan Masjid Ibnusina Jatibening.</strong> Masjid ini
                menjadi tempat bernaung umat untuk memperkuat keimanan,
                memperluas ilmu agama, dan mempererat ukhuwah Islamiyah di
                lingkungan Jatibening dan sekitarnya.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Di bawah pengelolaan yayasan, Masjid Ibnusina tidak hanya
                berfokus pada kegiatan ibadah, tetapi juga menjadi pusat
                pendidikan, pemberdayaan masyarakat, dan pengembangan ekonomi
                umat. Dengan semangat kolaborasi, masjid ini menghadirkan
                berbagai program seperti kajian rutin, pendidikan Al-Qur’an,
                kegiatan sosial, dan pelatihan keumatan berbasis teknologi serta
                nilai-nilai Islam.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                <h4 className="font-bold text-teal-600 mb-2">
                  Pusat Kegiatan Umat
                </h4>
                <p className="text-gray-600 text-sm">
                  Menjadi wadah utama dakwah dan pembinaan umat Islam
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                <h4 className="font-bold text-teal-600 mb-2">
                  Berbasis Nilai Islam
                </h4>
                <p className="text-gray-600 text-sm">
                  Mengedepankan nilai keislaman dalam setiap kegiatan
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-teal-600 mb-2">
                  Program Sosial & Edukatif
                </h4>
                <p className="text-gray-600 text-sm">
                  Mendukung pendidikan dan kesejahteraan masyarakat sekitar
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h4 className="font-bold text-teal-600 mb-2">
                  Lingkungan Nyaman
                </h4>
                <p className="text-gray-600 text-sm">
                  Masjid yang bersih, nyaman, dan ramah bagi jamaah dari semua
                  kalangan
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Single Image (DIPERBESAR) */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group overflow-hidden rounded-xl shadow-lg w-full max-w-lg">
              <img
                src={masjidImageUrl}
                alt="Masjid Ibnusina Jatibening Bekasi"
                className="w-full h-auto max-h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;