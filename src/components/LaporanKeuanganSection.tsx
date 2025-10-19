import { Link } from 'react-router-dom';

const LaporanKeuanganSection = () => {
  // Data dummy laporan keuangan
  const monthlySummary = {
    bulan: "Mei 2025",
    pemasukan: 42_500_000,
    pengeluaran: 28_750_000,
    saldo: 13_750_000,
  };

  const pemasukan = [
    { keterangan: "Donasi Jamaah Rutin", jumlah: 15_000_000 },
    { keterangan: "Zakat Fitrah", jumlah: 8_500_000 },
    { keterangan: "Infaq Acara Kajian", jumlah: 12_000_000 },
    { keterangan: "Donasi Penyewaan Gedung", jumlah: 7_000_000 },
  ];

  const pengeluaran = [
    { keterangan: "Operasional Masjid (Listrik, Air, Kebersihan)", jumlah: 9_250_000 },
    { keterangan: "Gaji Ustadz & Pengurus", jumlah: 12_000_000 },
    { keterangan: "Pembelian Perlengkapan LBQ", jumlah: 3_500_000 },
    { keterangan: "Kegiatan Sosial (Santunan Yatim)", jumlah: 4_000_000 },
  ];

  // Format Rupiah
  const formatRupiah = (angka: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <section id="laporan-keuangan" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-emerald-800 font-medium text-sm md:text-base uppercase tracking-wide block mb-2">
              TRANSPARANSI KEUANGAN
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Laporan Keuangan Bulanan
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              Kami berkomitmen untuk transparan dalam pengelolaan dana umat. 
              Berikut laporan keuangan terkini dari Masjid Darussalam.
            </p>
          </div>

          {/* Ringkasan Bulanan */}
          <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 border border-emerald-200 mb-12 text-center">
            <h3 className="text-xl font-bold text-emerald-800 mb-2">{monthlySummary.bulan}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-600">Pemasukan</p>
                <p className="text-lg font-bold text-green-700">{formatRupiah(monthlySummary.pemasukan)}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-600">Pengeluaran</p>
                <p className="text-lg font-bold text-red-600">{formatRupiah(monthlySummary.pengeluaran)}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-600">Saldo Akhir</p>
                <p className="text-lg font-bold text-emerald-700">{formatRupiah(monthlySummary.saldo)}</p>
              </div>
            </div>
          </div>

          {/* Detail Pemasukan & Pengeluaran */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Pemasukan */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Pemasukan
              </h3>
              <ul className="space-y-3">
                {pemasukan.map((item, idx) => (
                  <li key={idx} className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-700">{item.keterangan}</span>
                    <span className="font-medium text-gray-900">{formatRupiah(item.jumlah)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pengeluaran */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                Pengeluaran
              </h3>
              <ul className="space-y-3">
                {pengeluaran.map((item, idx) => (
                  <li key={idx} className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-700">{item.keterangan}</span>
                    <span className="font-medium text-gray-900">{formatRupiah(item.jumlah)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA - Lihat Laporan Lengkap */}
          {/* <div className="text-center">
            <Link
              href="/laporan-keuangan-lengkap.pdf" // Ganti dengan path PDF asli
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Lihat Laporan Lengkap (PDF)
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              Laporan lengkap tersedia dalam format PDF dan diperbarui setiap bulan.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default LaporanKeuanganSection;