import { Link } from 'react-router-dom';

const KajianSection = () => {
  const kajianItems = [
    {
      id: 1,
      title: "Mengamalkan Sunnah yang Seragam",
      date: "Kamis, 2 Oktober 2025 | 9 Rabiul Akhir 1447 H",
      excerpt: "*KAJIAN MUSLIMAH RUTIN* — Bersama Ustazah Ammi Nur Baits. Hadirilah...!!! 📌 Kamis, 9 Rabiul Akhir 1447 H *02.00 WIB*",
      image: "https://picsum.photos/600/400?random=1",
      category: "SERAGAM"
    },
    {
      id: 2,
      title: "Mengikuti Tata Cara Shalat Nabi",
      date: "Jumat, 26 September 2025",
      excerpt: "HADIRILAH KAJIAN KHUSUS MUSLIMAH | MT HABIBAH SHALIHAN 📍 Ustazah Maryam Ummu Saffanah — Judul: \"Mengikuti Tata Cara Shalat Nabi shalallahu alaihi wasallam\"",
      image: "https://picsum.photos/600/400?random=2",
      category: "SHALAT"
    },
    {
      id: 3,
      title: "Sibukkan Diri Dengan Dzikir Ringan",
      date: "Kamis Pagi, 26 Rabiul Akhir 1447 H",
      excerpt: "\"Kajian Khusus Muslimah\" — Klaten. Bukan kuatnya badan yang membuat hati tenang, melainkan lisan yang senantiasa basah dengan dzikir kepada Ar-Rahman.",
      image: "https://picsum.photos/600/400?random=3",
      category: "DZIKIR"
    }
  ];

  return (
    <section id="kajian" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-800 font-medium text-sm uppercase tracking-wide block mb-2">
            INFO TERKINI
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Kajian & Informasi Terbaru
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Dapatkan informasi terbaru seputar kajian, pengumuman, dan kegiatan di Masjid Darussalam.
          </p>
        </div>

        {/* Grid Kartu Kajian */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {kajianItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Gambar */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Label Kategori */}
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {item.category}
                </div>
              </div>

              {/* Konten */}
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs mb-3">{item.date}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <Link
                  to={`/kajian/${item.id}`}
                  className="inline-block text-emerald-700 hover:text-emerald-800 font-medium text-sm"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua */}
        <div className="text-center mt-12">
          <Link
            to="/berita"
            className="inline-block bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Lihat Semua Kajian →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KajianSection;
