import { CreditCard, Banknote, Smartphone } from 'lucide-react';

const DonasiSection = () => {
  const qrisImageUrl = "/barcode.png";

  const rekening = [
    { bank: "Bank Syariah Indonesia (BSI)", nomor: "7123 4567 89", atasNama: "Yayasan Masjid Darussalam" },
    { bank: "Bank Muamalat", nomor: "9876 5432 10", atasNama: "Yayasan Masjid Darussalam" },
    { bank: "BNI Syariah", nomor: "1234 5678 90", atasNama: "Yayasan Masjid Darussalam" }
  ];

  return (
    <section 
      id="donasi" 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/bg-img2.jpg")', // ← Ganti dengan gambar latarmu
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay gelap transparan */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-emerald-400 font-medium text-sm md:text-base uppercase tracking-wide mb-2 block">
            DONASI MUDAH
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-yellow-600 drop-shadow-lg">
            Salurkan Donasi Anda
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto text-base md:text-lg leading-relaxed drop-shadow-sm">
            Setiap donasi Anda akan disalurkan secara amanah untuk dakwah, pendidikan Al-Qur’an, 
            dan pemberdayaan umat di Masjid Darussalam Taman Persada Raya, Bekasi.
          </p>
        </div>

        {/* Konten Donasi */}
        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur rounded-2xl border border-white/20 p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* QRIS */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-xl mb-4 shadow-sm">
                <Smartphone className="w-10 h-10 text-emerald-700 mx-auto" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                Donasi Cepat via QRIS
              </h3>
              <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                <img
                  src={qrisImageUrl}
                  alt="Scan QRIS untuk Donasi"
                  className="w-48 h-48 md:w-56 md:h-56 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='224' height='224' viewBox='0 0 224 224'%3E%3Crect width='224' height='224' fill='%23ffffff'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-size='14' text-anchor='middle' dy='.3em'%3EQR Tidak Tersedia%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <p className="mt-4 text-center text-gray-700 text-sm md:text-base">
                Buka aplikasi dompet digital atau mobile banking, pilih <strong>Scan QR</strong>, lalu scan barcode di atas.
              </p>
            </div>

            {/* Rekening */}
            <div>
              <div className="bg-white p-4 rounded-xl mb-4 shadow-sm">
                <Banknote className="w-10 h-10 text-emerald-700 mx-auto" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">
                Transfer Manual
              </h3>
              <div className="space-y-4">
                {rekening.map((rek, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <p className="font-semibold text-emerald-800">{rek.bank}</p>
                    <p className="text-lg font-mono text-gray-900 mt-1">{rek.nomor}</p>
                    <p className="text-sm text-gray-600 mt-1">a.n. {rek.atasNama}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center md:text-left text-gray-600 text-sm">
                <span className="font-medium">Catatan:</span> Mohon konfirmasi donasi via WhatsApp atau email agar kami dapat mengirimkan bukti amanah.
              </p>
            </div>
          </div>
          
          {/* Footer CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 italic drop-shadow-sm">
              &ldquo;Sebaik-baik manusia adalah yang paling bermanfaat bagi orang lain.&rdquo; (HR. Ahmad)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonasiSection;