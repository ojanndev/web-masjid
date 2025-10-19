const AboutKhoirunnisa = () => {
  const khoirunnisaImageUrl = "/bg-img2.jpg"; // Ganti dengan foto kegiatan muslimah jika tersedia

  return (
    <section
      id="khoirunnisa"
      className="py-10 md:py-16 relative overflow-hidden bg-white"
    >
      {/* Background Image (halus, seperti di AboutSection) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: `url(${khoirunnisaImageUrl})` }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-emerald-800 font-medium text-sm md:text-base uppercase tracking-wide">
            MAJELIS TA’LIM
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-yellow-600">
           MT.Khoirunnisa<br />Darussalam
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto items-center">
          {/* Left Content - Text */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                <strong>Majelis Ta’lim Khoirunnisa</strong> adalah wadah pembinaan
                dan silaturahmi bagi muslimah di lingkungan Masjid Darussalam,
                Taman Persada Raya, Bekasi. Nama <em>“Khoirunnisa”</em> diambil
                dari hadis Nabi: <em>“Sebaik-baik wanita adalah yang membawa
                kebaikan bagi keluarganya.”</em>
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                Majelis ini hadir untuk memperkuat iman, memperluas ilmu agama,
                dan membangun ukhuwah islamiyah di antara para muslimah dari
                berbagai usia — mulai dari remaja putri hingga ibu-ibu.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Kajian rutin kitab kuning dan tafsir Al-Qur’an</li>
                <li>Sesi parenting islami dan manajemen rumah tangga</li>
                <li>Pelatihan keterampilan (menjahit, memasak, UMKM)</li>
                <li>Program santunan anak yatim dan dhuafa</li>
                <li>Kegiatan amal dan bakti sosial bulanan</li>
              </ul>
            </div>

            {/* Informasi Pendaftaran / Bergabung */}
            <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Terbuka untuk Semua Muslimah!</h4>
              <p className="text-gray-700 text-sm md:text-base mb-3">
                Tidak ada biaya pendaftaran. Kegiatan diadakan setiap pekan di Masjid Darussalam.
                <br />
                <strong>Waktu:</strong> Setiap Ahad pagi, pukul 08.00–10.00 WIB.
              </p>
              <a
                href="https://wa.me/6281234567890" // Ganti dengan nomor WhatsApp resmi
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-300 shadow-sm"
              >
                Gabung Sekarang
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group overflow-hidden rounded-xl w-full max-w-lg shadow-sm">
              <img
                src={khoirunnisaImageUrl}
                alt="Kegiatan Majelis Ta'lim Khoirunnisa di Masjid Darussalam"
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

export default AboutKhoirunnisa;