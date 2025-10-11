import { Building2, Calendar, Users, MapPin } from 'lucide-react';

const RentalSection = () => {
  return (
    <section 
      id="sewa-gedung" 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-emerald-800 font-medium text-sm md:text-base uppercase tracking-wide mb-2 block">
            FASILITAS UMUM
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-yellow-600">
            Penyewaan Gedung Masjid Darussalam
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Gedung serbaguna Masjid Darussalam tersedia untuk disewa oleh masyarakat umum 
            guna mendukung kegiatan keagamaan, sosial, pendidikan, dan keluarga.
          </p>
        </div>

        {/* Konten Utama */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Informasi Fasilitas */}
          <div className="space-y-8 bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fasilitas Gedung</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Building2 className="h-5 w-5 text-emerald-700 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Aula utama berkapasitas hingga 300 orang</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-emerald-700 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Area parkir luas untuk kendaraan roda dua dan empat</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-emerald-700 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Lokasi strategis di Taman Persada Raya, Bekasi</span>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-5 w-5 text-emerald-700 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Tersedia setiap hari (kecuali Jumat siang)</span>
                </li>
                <li className="flex items-start">
                  <Building2 className="h-5 w-5 text-emerald-700 mt-0.5 mr-3 flex-shrink-0" />
                  <span>AC, sound system, dan proyektor tersedia</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Jenis Acara yang Didukung</h3>
              <p className="text-gray-700 mb-2">✅ Pengajian & Kajian Islam</p>
              <p className="text-gray-700 mb-2">✅ Seminar & Pelatihan</p>
              <p className="text-gray-700 mb-2">✅ Akad Nikah & Walimah Sederhana</p>
              <p className="text-gray-700 mb-2">✅ Rapat RT/RW & Kegiatan Komunitas</p>
              <p className="text-gray-700">✅ Bazaar & Bazar Amal</p>
            </div>

            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Ketentuan Sewa</h4>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>• Wajib izin pengurus masjid</li>
                <li>• Dilarang bawa makanan/minuman beralkohol</li>
                <li>• Jaga kebersihan & fasilitas</li>
                <li>• Donasi sukarela sangat diharapkan</li>
              </ul>
            </div>
          </div>

          {/* Gambar Gedung */}
          <div className="space-y-4">
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
              <img
                src="/bg-img1.jpg"
                alt="Gedung Masjid Darussalam - Aula"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src="/bg-img2.jpg"
                  alt="Gedung - Area Depan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src="/bg-img3.jpg"
                  alt="Gedung - Fasilitas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalSection;