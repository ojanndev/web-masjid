const AboutRqd = () => {
  const rqdImageUrl = "/bg-img2.jpg";

  return (
    <section
      id="rumah-quran"
      className="py-10 md:py-16 relative overflow-hidden bg-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: `url(${rqdImageUrl})` }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-emerald-800 font-medium text-sm md:text-base uppercase tracking-wide">
            RUMAH QUR’AN DARUSSALAM
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-yellow-600">
            Belajar Al-Qur’an Gratis<br />+ Dapat Uang Saku!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto items-center">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                <strong>Rumah Qur’an Darussalam (RQD)</strong> adalah program
                pembinaan Al-Qur’an intensif yang dipersembahkan oleh
                <strong className="text-gray-900"> Yayasan Masjid Darussalam</strong> untuk anak-anak dan remaja usia 7–17 tahun.
                Program ini <strong>100% gratis</strong> — tanpa biaya pendaftaran,
                SPP, atau uang gedung — dan peserta aktif bahkan menerima{" "}
                <strong>uang saku bulanan</strong> sebagai bentuk dukungan semangat belajar.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                RQD hadir untuk mencetak generasi Qur’ani yang hafal, paham,
                dan mencintai Al-Qur’an, sekaligus berakhlak mulia dan peduli
                terhadap sesama.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Pembelajaran Tahsin & Tahfizh oleh pembimbing bersertifikat</li>
                <li>Materi akidah, akhlak, dan fiqh dasar yang menyenangkan</li>
                <li>Seragam, mushaf, dan perlengkapan belajar disediakan</li>
                <li>Uang saku bulanan bagi peserta yang hadir ≥80%</li>
                <li>Kegiatan outing, mentoring, dan bakti sosial rutin</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Pendaftaran Terbuka!</h4>
              <p className="text-gray-700 text-sm md:text-base mb-3">
                Kuota terbatas. Pendaftaran dibuka sepanjang tahun.
                <br />
                <strong>Syarat:</strong> Usia 7–17 tahun, orang tua menyetujui, dan bersedia mengikuti program penuh.
              </p>
              {/* ✅ Ganti Link dengan <a> */}
              <a
                href="/pendaftaran-rqd"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-300 shadow-sm"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group overflow-hidden rounded-xl w-full max-w-lg shadow-sm">
              <img
                src={rqdImageUrl}
                alt="Kegiatan Rumah Qur'an Darussalam di Masjid Darussalam, Bekasi"
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

export default AboutRqd;