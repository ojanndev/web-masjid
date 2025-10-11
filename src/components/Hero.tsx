import { useEffect, useState } from "react";

const Hero = () => {
  const images = ["bg-img1.jpg", "bg-img2.jpg", "bg-img3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay hitam ala aa*/}
      <div className="absolute inset-0 z-10 bg-[#0a0a0a]/60" />

      {/* Konten */}
      <div className="container mx-auto px-4 py-20 relative z-30">
        <div className="flex flex-col items-start text-left max-w-3xl">
          <p className="text-gray-300 text-sm md:text-base mb-4">
            Assalamualaikum warahmatullahi wabarakatuh
          </p>

          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-snug text-white"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
          >
            Masjid Darussalam, Taman Persada Raya<br /> Bekasi
          </h1>

          <p className="text-gray-300 text-sm md:text-lg max-w-2xl leading-relaxed">
            Yayasan Masjid Ibnusina Jatibening berdiri sebagai pusat ibadah,
            dakwah, dan kegiatan sosial kemasyarakatan. Masjid ini diresmikan
            pada tahun 2023 dengan tujuan membina ukhuwah Islamiyah, memberikan
            pendidikan agama, serta menjadi wadah berbagai kegiatan sosial
            masyarakat sekitar.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#tentang"
              className="flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
            >
              Tentang Yayasan
            </a>
            <a
              href="#program"
              className="flex items-center justify-center px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition"
            >
              Program Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;