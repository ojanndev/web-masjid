const AboutApm = () => {
  const apmImageUrl = "/bg-img2.jpg"; // Ganti dengan foto aula jika tersedia, misal: "/aula-darussalam.jpg"

  return (
    <section
      id="apm"
      className="py-10 md:py-16 relative overflow-hidden bg-white"
    >
      {/* Background Image (halus) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: `url(${apmImageUrl})` }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-emerald-800 font-medium text-sm md:text-base uppercase tracking-wide">
            FASILITAS MASJID
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-yellow-600">
            Aula Perkumpulan Masjid<br />Darussalam
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto items-center">
          {/* Left Content - Text */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                <strong>Aula Perkumpulan Masjid (APM) Darussalam</strong> adalah
                fasilitas serbaguna yang dikelola oleh Yayasan Masjid Darussalam
                untuk mendukung kegiatan umat, keluarga, dan masyarakat sekitar.
                Aula ini dapat digunakan untuk berbagai acara seperti:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                <li>Pernikahan (akad & resepsi sederhana)</li>
                <li>Pengajian rutin dan kajian umum</li>
                <li>Rapat RT/RW, arisan, dan pertemuan komunitas</li>
                <li>Acara khitanan, aqiqah, dan tahlilan</li>
                <li>Pelatihan, seminar, dan bakti sosial</li>
              </ul>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Aula ini berkapasitas hingga <strong>200–250 jamaah</strong>,
                dilengkapi AC, sound system, meja kursi, dapur kecil, dan area parkir
                yang memadai. Lokasinya strategis di komplek Masjid Darussalam,
                Taman Persada Raya, Bekasi.
              </p>
            </div>

            {/* Informasi Pemesanan */}
            <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Pemesanan Aula</h4>
              <p className="text-gray-700 text-sm md:text-base mb-3">
                Biaya sewa sangat terjangkau dan sebagian hasil digunakan untuk
                pemeliharaan masjid.
                <br />
                <strong>Hubungi admin via WhatsApp untuk info & booking:</strong>
              </p>
              <a
                href="https://wa.me/62895339454561"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-300 shadow-sm"
              >
                Hubungi Sekarang
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group overflow-hidden rounded-xl w-full max-w-lg shadow-sm">
              <img
                src={apmImageUrl}
                alt="Aula Perkumpulan Masjid Darussalam di Bekasi"
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

export default AboutApm;