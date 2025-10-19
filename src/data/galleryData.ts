export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  date: string;
  category: 'kegiatan' | 'fasilitas' | 'kajian' | 'lainnya';
}

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Kajian Akbar Ramadhan',
    description: 'Kajian akbar yang dilaksanakan pada bulan Ramadhan 1446 H',
    imageUrl: '/images/gallery/kajian-ramadhan.jpg',
    date: '2025-03-15',
    category: 'kajian'
  },
  {
    id: 'g2',
    title: 'Renovasi Mihrab',
    description: 'Perbaikan dan renovasi mihrab masjid',
    imageUrl: '/images/gallery/renovasi-mihrab.jpg',
    date: '2025-02-20',
    category: 'fasilitas'
  },
  {
    id: 'g3',
    title: 'Buka Puasa Bersama',
    description: 'Kegiatan buka puasa bersama jamaah',
    imageUrl: '/images/gallery/buka-puasa.jpg',
    date: '2025-03-20',
    category: 'kegiatan'
  }
];