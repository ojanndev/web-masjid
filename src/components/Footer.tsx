import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141C] pt-16 pb-8 text-gray-400">
      <div className="container mx-auto px-4">
        {/* Grid utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Branding */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Yayasan Masjid Ibnusina Jatibening Logo"
                className="h-12 w-auto mr-3"
              />
              <h2 className="text-2xl font-bold text-white">
                Yayasan Masjid Ibnusina Jatibening
              </h2>
            </div>
            <p className="text-gray-400 mb-6">
              Lembaga dakwah yang mengelola Masjid Ibnusina sebagai pusat ibadah, 
              pendidikan Al-Qur’an, pemberdayaan umat, dan kegiatan sosial berbasis Islam.
            </p>
            {/* Sosial Media */}
            <div className="flex space-x-4">
              <a href="https://facebook.com/ibnusinajatibening" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/ibnusinajatibening" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@ibnusinajatibening" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              {/* LinkedIn tetap ada, tapi opsional — bisa dihapus jika tidak dipakai */}
              <a href="#!" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profil & Program */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tentang Kami</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="/profile-yayasan" className="hover:text-white transition-colors">Profil Yayasan</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">Visi & Misi</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">Struktur Pengurus</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">Laporan Kegiatan</a></li>
            </ul>
          </div>

          {/* Program & Kegiatan */}
          <div>
            <h3 className="text-white font-semibold mb-4">Program Unggulan</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="hover:text-white transition-colors">Program LBQ</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">Kajian Rutin</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">Pendidikan Al-Qur’an</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">Kegiatan Sosial</a></li>
              <li><a href="/gallery-masjid" className="hover:text-white transition-colors">Galeri Kegiatan</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li>
                📍 Jl. Jatibening Raya No. 123, Pondok Gede, Bekasi, Jawa Barat
              </li>
              <li>
                📞 (021) 8888-7777
              </li>
              <li>
                ✉️ info@masjidibnusina.or.id
              </li>
              <li>
                ⏰ Senin - Jumat: 08.00 - 16.00 WIB
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-sm">
          <p>
            &copy; {currentYear} Yayasan Masjid Ibnusina Jatibening. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;