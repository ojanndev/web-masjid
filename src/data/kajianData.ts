export interface Kajian {
  id: string;
  judul: string;
  pembicara: string;
  tanggal: string; // Format: YYYY-MM-DD
  waktu: string; // Format: HH:MM
  tempat: string;
  deskripsi: string;
  imageUrl?: string;
}

export const kajianData: Kajian[] = [
  {
    id: '1',
    judul: 'Kajian Pagi Ahad',
    pembicara: 'Ust. Ahmad Fauzi, Lc.',
    tanggal: '2025-10-12',
    waktu: '08:00',
    tempat: 'Aula Masjid Darussalam',
    deskripsi: 'Kajian rutin setiap Ahad pagi membahas berbagai topik agama Islam yang aktual dan relevan dengan kehidupan sehari-hari.',
    imageUrl: '/api/placeholder/400/200'
  },
  {
    id: '2',
    judul: 'Study Group Tafsir',
    pembicara: 'Ust. Muhammad Ridwan',
    tanggal: '2025-10-15',
    waktu: '19:30',
    tempat: 'Ruang Belajar Masjid',
    deskripsi: 'Diskusi mendalam mengenai tafsir Al-Quran surat Al-Baqarah ayat 1-50 bersama para ulama dan santri.',
    imageUrl: '/api/placeholder/400/200'
  },
  {
    id: '3',
    judul: 'Kajian Bulanan - Akhlak Mulia',
    pembicara: 'Ust. Abdullah Sani',
    tanggal: '2025-10-20',
    waktu: '20:00',
    tempat: 'Pelataran Masjid',
    deskripsi: 'Kajian bulanan tentang akhlak mulia dalam Islam, bagaimana menerapkannya dalam kehidupan sehari-hari.',
    imageUrl: '/api/placeholder/400/200'
  }
];