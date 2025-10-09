import { CreditCard, Banknote, Smartphone } from 'lucide-react';
import { AnimatedBackground } from '@/components/ui/animated-background';

const DonasiSection = () => {
  // Ganti dengan URL gambar QRIS asli milik yayasan
  const qrisImageUrl = "/images/qris-ibnusina.png"; // Simpan di public/images/

  const rekening = [
    { bank: "Bank Syariah Indonesia (BSI)", nomor: "7123 4567 89", atasNama: "Yayasan Masjid Ibnusina" },
    { bank: "Bank Muamalat", nomor: "9876 5432 10", atasNama: "Yayasan Masjid Ibnusina" },
    { bank: "BNI Syariah", nomor: "1234 5678 90", atasNama: "Yayasan Masjid Ibnusina" }
  ];

  return (
    <section id="donasi" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-emerald-600 font-medium text-sm md:text-base uppercase tracking-wide mb-2 block">
            DONASI MUDAH
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Salurkan Donasi Anda
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Setiap donasi Anda akan disalurkan secara amanah untuk dakwah, pendidikan Al-Qur’an, 
            dan pemberdayaan umat di Masjid Ibnusina Jatibening.
          </p>
        </div>

        {/* Konten Donasi */}
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-emerald-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* QRIS */}
            <div className="flex flex-col items-center">
              <div className="bg-emerald-50 p-4 rounded-xl mb-4">
                <Smartphone className="w-10 h-10 text-emerald-600 mx-auto" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                Donasi Cepat via QRIS
              </h3>
              <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
                <img
                  src={qrisImageUrl}
                  alt="Scan QRIS untuk Donasi"
                  className="w-48 h-48 md:w-56 md:h-56 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/png;base64,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";
                  }}
                />
              </div>
              <p className="mt-4 text-center text-gray-700 text-sm md:text-base">
                Buka aplikasi dompet digital atau mobile banking, pilih <strong>Scan QR</strong>, lalu scan barcode di atas.
              </p>
            </div>

            {/* Rekening */}
            <div>
              <div className="bg-emerald-50 p-4 rounded-xl mb-4">
                <Banknote className="w-10 h-10 text-emerald-600 mx-auto" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">
                Transfer Manual
              </h3>
              <div className="space-y-4">
                {rekening.map((rek, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-emerald-100">
                    <p className="font-semibold text-emerald-700">{rek.bank}</p>
                    <p className="text-lg font-mono text-gray-900 mt-1">{rek.nomor}</p>
                    <p className="text-sm text-gray-600 mt-1">a.n. {rek.atasNama}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center md:text-left text-gray-700 text-sm">
                <span className="font-medium">Catatan:</span> Mohon konfirmasi donasi via WhatsApp atau email agar kami dapat mengirimkan bukti amanah.
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-600 italic">
            "Sebaik-baik manusia adalah yang paling bermanfaat bagi orang lain." (HR. Ahmad)
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonasiSection;