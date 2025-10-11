import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-400 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Grid utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Branding */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Logo Masjid Darussalam"
                className="h-12 w-auto mr-3"
              />
              <h2 className="text-2xl font-bold text-white">
                Masjid Darussalam
              </h2>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Pusat ibadah, pendidikan Al-Qur’an, dakwah, dan pemberdayaan umat di Taman Persada Raya, Bekasi.
            </p>
            {/* Sosial Media */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/darussalam.tpr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-emerald-400 transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/masjid_darussalam_bekasi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-emerald-400 transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/@masjiddarussalambekasi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-emerald-400 transition-colors" 
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Tentang Kami */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tentang Kami</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-emerald-400 transition-colors">Beranda</a></li>
              <li><a href="/profile-masjid" className="text-gray-400 hover:text-emerald-400 transition-colors">Profil Yayasan</a></li>
              <li><a href="/profile-masjid" className="text-gray-400 hover:text-emerald-400 transition-colors">Visi & Misi</a></li>
              <li><a href="/profile-masjid" className="text-gray-400 hover:text-emerald-400 transition-colors">Struktur Pengurus</a></li>
              <li><a href="/gallery-masjid" className="text-gray-400 hover:text-emerald-400 transition-colors">Laporan Kegiatan</a></li>
            </ul>
          </div>

          {/* Program Unggulan */}
          <div>
            <h3 className="text-white font-semibold mb-4">Program Unggulan</h3>
            <ul className="space-y-2">
              <li><a href="/profile-masjid" className="text-gray-400 hover:text-emerald-400 transition-colors">Program LBQ</a></li>
              <li><a href="/profile-masjid" className="text-gray-400 hover:text-emerald-400 transition-colors">Kajian Rutin</a></li>
              <li><a href="/profile-masjid" className="text-gray-400 hover:text-emerald-400 transition-colors">Pendidikan Al-Qur’an</a></li>
              <li><a href="/profile-masjid" className="text-gray-400 hover:text-emerald-400 transition-colors">Kegiatan Sosial</a></li>
              <li><a href="/gallery-masjid" className="text-gray-400 hover:text-emerald-400 transition-colors">Galeri Kegiatan</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Jl. Taman Persada Raya No. 45, Bekasi, Jawa Barat</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>(021) 8899-1234</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>info@masjiddarussalam-bekasi.or.id</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">⏰</span>
                <span>Senin - Jumat: 08.00 - 16.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} Masjid Darussalam Taman Persada Raya, Bekasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;