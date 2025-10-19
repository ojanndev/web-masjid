import { useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Globe
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Kontak = () => {
  useEffect(() => {
    document.title = "Kontak - Masjid Darussalam";
  }, []);

  const kontakInfo = [
    {
      icon: Phone,
      title: "Telepon",
      info: "(021) 8899-1234"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@masjiddarussalam-bekasi.or.id"
    },
    {
      icon: MapPin,
      title: "Alamat",
      info: "Jl. Taman Persada Raya No. 45, Bekasi"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      info: "Senin–Jumat: 08.00–16.00 WIB"
    }
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: Facebook,
      link: "https://facebook.com/darussalam.tpr",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://instagram.com/masjid_darussalam_bekasi",
      color: "text-pink-600 hover:text-pink-700"
    },
    {
      name: "Website",
      icon: Globe,
      link: "#",
      color: "text-emerald-600 hover:text-emerald-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center pt-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("bg-img2.jpg")' }}
        >
          {/* 🔥 Shadow hitam pekat */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-4">
            Hubungi Kami
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Informasi kontak dan lokasi Masjid Darussalam Taman Persada Raya, Bekasi
          </p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-20">

          {/* Informasi Kontak */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Informasi Kontak
            </h2>
            <p className="text-gray-600 text-lg">
              Kami siap melayani pertanyaan dan kebutuhan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {kontakInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center text-sm">{item.info}</p>
              </div>
            ))}
          </div>

          {/* Lokasi */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Lokasi Kami
              </h2>
              <p className="text-gray-600 text-lg">
                Temukan lokasi Masjid Darussalam di Google Maps berikut.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0550230747135!2d106.93412817413157!3d-6.256482161253585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d2023fdd8a3%3A0x5020fd1b8b3687af!2sMasjid%20Darussalam!5e0!3m2!1sid!2sid!4v1760792511276!5m2!1sid!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Masjid Darussalam Map"
              ></iframe>
            </div>
          </div>

          {/* Media Sosial */}
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ikuti Kami di Media Sosial
            </h3>
            <div className="flex justify-center gap-8">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} transform hover:scale-110 transition-transform duration-200`}
                >
                  <div className="w-14 h-14 bg-white shadow-md rounded-full flex items-center justify-center">
                    <social.icon className="h-7 w-7" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontak;
