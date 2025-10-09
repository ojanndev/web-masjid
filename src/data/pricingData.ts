// pricingPlansData.ts

export const pricingPlans = [
  {
    name: "Warga",
    price: { monthly: "Gratis", annual: "Gratis" },
    description: "Untuk warga sekitar yang ingin mengikuti kegiatan dasar di masjid.",
    features: [
      "Akses kegiatan sholat berjamaah",
      "Akses pengajian dasar",
      "Akses perpustakaan digital",
      "Dukungan komunitas",
      "Akses kegiatan sosial"
    ],
    buttonText: "Daftar Sekarang"
  },
  {
    name: "Murid",
    price: { monthly: "Rp 50rb", annual: "Rp 500rb" },
    description: "Program pendidikan untuk anak-anak dan remaja.",
    features: [
      "TPQ dan TPA",
      "Pengajaran Al-Qur'an dan Hadits",
      "Kegiatan ekstrakurikuler",
      "Dukungan pendidikan utama",
      "Biaya terjangkau",
      "Kegiatan outing edukasi",
      "Pembinaan akhlak"
    ],
    highlighted: true,
    buttonText: "Mulai Program"
  },
  {
    name: "Donatur",
    price: { monthly: "Sesuai", annual: "Sesuai" },
    description: "Untuk individu dan organisasi yang ingin berkontribusi.",
    features: [
      "Akses semua program",
      "Partisipasi dalam pengambilan keputusan",
      "Laporan penggunaan dana",
      "Dukungan langsung 24/7",
      "Pengurangan pajak",
      "Akses API donasi",
      "Keamanan tingkat institusi",
      "Laporan kustom",
      "Manajemen tim"
    ],
    buttonText: "Hubungi Kami"
  }
];
