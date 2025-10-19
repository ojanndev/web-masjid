const AboutIrma = () => {
  const irmaImageUrl = "/bg-img2.jpg"; // Ganti dengan foto kegiatan IRMA jika tersedia

  return (
    <section
      id="irma"
      className="py-10 md:py-16 relative overflow-hidden bg-white"
    >
      {/* Background Image (halus, opacity-10) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: `url(${irmaImageUrl})` }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-emerald-800 font-medium text-sm md:text-base uppercase tracking-wide">
            ORGANISASI PEMUDA
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-yellow-600">
            Ikatan Remaja Masjid<br />Darussalam (IRMA)
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto items-center">
          {/* Left Content - Text */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                <strong>Ikatan Remaja Masjid Darussalam (IRMA)</strong> adalah
                wadah organisasi bagi pemuda dan pemudi usia 15–30 tahun di
                lingkungan Masjid Darussalam, Taman Persada Raya, Bekasi.
                IRMA hadir untuk membina karakter, mempererat ukhuwah, dan
                mengembangkan potensi remaja berbasis nilai-nilai Islam.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                Melalui berbagai kegiatan positif, IRMA menjadi garda terdepan
                dalam dakwah, sosial, dan pengembangan kepemimpinan generasi muda.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Kajian rutin & mentoring akhlak</li>
                <li>Pelatihan kepemimpinan dan public speaking</li>
                <li>Ekspedisi dakwah & bakti sosial</li>
                <li>Turnamen olahraga dan lomba keagamaan</li>
                <li>Tim teknis masjid (sound system, dokumentasi, IT)</li>
              </ul>
            </div>

            {/* Informasi Bergabung */}
            <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Terbuka untuk Semua Remaja!</h4>
              <p className="text-gray-700 text-sm md:text-base mb-3">
                Tidak ada biaya pendaftaran. Kegiatan diadakan setiap pekan.
                <br />
                <strong>Minat bergabung atau ingin info lebih lanjut?</strong>
              </p>
              <a
                href="https://wa.me/62895339454561"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-300 shadow-sm"
              >
                Hubungi Admin IRMA
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group overflow-hidden rounded-xl w-full max-w-lg shadow-sm">
              <img
                src={irmaImageUrl}
                alt="Kegiatan Ikatan Remaja Masjid Darussalam (IRMA)"
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

export default AboutIrma;