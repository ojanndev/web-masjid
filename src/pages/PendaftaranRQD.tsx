import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import useScrollAnimation from '@/utils/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PendaftaranRQD = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    namaLengkap: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    usia: '',
    alamat: '',
    noTelepon: '',
    namaAyah: '',
    namaIbu: '',
    noTeleponOrtu: '',
    alasanBergabung: '',
    bersediaIkutPenuh: false,
  });

  useScrollAnimation();

  useEffect(() => {
    document.title = "Pendaftaran Santri Baru - Rumah Qur'an Darussalam";
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*PENDAFTARAN SANTRI BARU RQD*

Nama Lengkap: ${formData.namaLengkap}
Tempat, Tanggal Lahir: ${formData.tempatLahir}, ${formData.tanggalLahir}
Jenis Kelamin: ${formData.jenisKelamin}
Usia: ${formData.usia} tahun
Alamat: ${formData.alamat}
No. WhatsApp: ${formData.noTelepon}

Orang Tua:
- Ayah: ${formData.namaAyah}
- Ibu: ${formData.namaIbu}
- Kontak Ortu: ${formData.noTeleponOrtu}

Alasan Bergabung:
${formData.alasanBergabung}

Komitmen: ${formData.bersediaIkutPenuh ? '✅ Bersedia ikut penuh' : '❌ Belum komitmen'}

*Silakan konfirmasi dan proses pendaftaran.*
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/62895339454561?text=${encodedMessage}`;

    if (confirm("Data akan dikirim ke admin via WhatsApp. Lanjutkan?")) {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[45vh] flex items-center justify-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/bg-img3.jpg")' }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Pendaftaran Santri Baru
          </motion.h1>
          <p className="text-gray-100 text-lg md:text-xl">
            Rumah Qur’an Darussalam — Gratis 100% + Uang Saku Bulanan
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-white border border-gray-200 shadow-md rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Data Pribadi Santri */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-emerald-700 mb-4 border-b border-emerald-200 pb-2">
                    Data Pribadi Santri
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="namaLengkap" className="text-gray-700 font-medium">Nama Lengkap *</Label>
                      <Input
                        id="namaLengkap"
                        value={formData.namaLengkap}
                        onChange={(e) => handleInputChange('namaLengkap', e.target.value)}
                        placeholder="Contoh: Ahmad Fauzi"
                        required
                        className="mt-1 bg-gray-50 border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="jenisKelamin" className="text-gray-700 font-medium">Jenis Kelamin *</Label>
                      <Select value={formData.jenisKelamin} onValueChange={(value) => handleInputChange('jenisKelamin', value)}>
                        <SelectTrigger className="mt-1 bg-gray-50 border-gray-300 focus:ring-emerald-500 focus:border-emerald-500">
                          <SelectValue placeholder="Pilih..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="laki-laki">Laki-laki</SelectItem>
                          <SelectItem value="perempuan">Perempuan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="tempatLahir" className="text-gray-700 font-medium">Tempat Lahir *</Label>
                      <Input
                        id="tempatLahir"
                        value={formData.tempatLahir}
                        onChange={(e) => handleInputChange('tempatLahir', e.target.value)}
                        placeholder="Jakarta"
                        required
                        className="mt-1 bg-gray-50 border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="tanggalLahir" className="text-gray-700 font-medium">Tanggal Lahir *</Label>
                      <Input
                        id="tanggalLahir"
                        type="date"
                        value={formData.tanggalLahir}
                        onChange={(e) => handleInputChange('tanggalLahir', e.target.value)}
                        required
                        className="mt-1 bg-gray-50 border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="usia" className="text-gray-700 font-medium">Usia Sekarang (Tahun) *</Label>
                    <Input
                      id="usia"
                      type="number"
                      min="7"
                      max="17"
                      value={formData.usia}
                      onChange={(e) => handleInputChange('usia', e.target.value)}
                      placeholder="10"
                      required
                      className="mt-1 bg-gray-50 border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="alamat" className="text-gray-700 font-medium">Alamat Lengkap *</Label>
                    <Textarea
                      id="alamat"
                      value={formData.alamat}
                      onChange={(e) => handleInputChange('alamat', e.target.value)}
                      placeholder="RT/RW, Kelurahan, Kecamatan, Kota"
                      required
                      className="mt-1 bg-gray-50 border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 h-20"
                    />
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="noTelepon" className="text-gray-700 font-medium">No. WhatsApp Santri/Ortu *</Label>
                    <Input
                      id="noTelepon"
                      value={formData.noTelepon}
                      onChange={(e) => handleInputChange('noTelepon', e.target.value)}
                      placeholder="081234567890"
                      required
                      className="mt-1 bg-gray-50 border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Data Orang Tua */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-emerald-700 mb-4 border-b border-emerald-200 pb-2">
                    Data Orang Tua
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="namaAyah" className="text-gray-700 font-medium">Nama Ayah *</Label>
                      <Input
                        id="namaAyah"
                        value={formData.namaAyah}
                        onChange={(e) => handleInputChange('namaAyah', e.target.value)}
                        placeholder="Nama ayah kandung"
                        required
                        className="mt-1 bg-gray-50 border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="namaIbu" className="text-gray-700 font-medium">Nama Ibu *</Label>
                      <Input
                        id="namaIbu"
                        value={formData.namaIbu}
                        onChange={(e) => handleInputChange('namaIbu', e.target.value)}
                        placeholder="Nama ibu kandung"
                        required
                        className="mt-1 bg-gray-50 border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="noTeleponOrtu" className="text-gray-700 font-medium">No. WhatsApp Orang Tua *</Label>
                    <Input
                      id="noTeleponOrtu"
                      value={formData.noTeleponOrtu}
                      onChange={(e) => handleInputChange('noTeleponOrtu', e.target.value)}
                      placeholder="081234567890"
                      required
                      className="mt-1 bg-gray-50 border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Komitmen */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-emerald-700 mb-4 border-b border-emerald-200 pb-2">
                    Komitmen & Alasan
                  </h3>

                  <Label htmlFor="alasanBergabung" className="text-gray-700 font-medium">
                    Mengapa ingin bergabung di Rumah Qur’an Darussalam? *
                  </Label>
                  <Textarea
                    id="alasanBergabung"
                    value={formData.alasanBergabung}
                    onChange={(e) => handleInputChange('alasanBergabung', e.target.value)}
                    placeholder="Ceritakan harapan dan alasan Anda..."
                    required
                    className="mt-1 bg-gray-50 border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 h-24"
                  />

                  <div className="mt-4 flex items-start">
                    <input
                      type="checkbox"
                      id="bersediaIkutPenuh"
                      checked={formData.bersediaIkutPenuh}
                      onChange={(e) => handleInputChange('bersediaIkutPenuh', e.target.checked)}
                      className="mt-1 h-4 w-4 text-emerald-600 rounded focus:ring-emerald-500"
                      required
                    />
                    <Label htmlFor="bersediaIkutPenuh" className="ml-2 text-sm text-gray-700">
                      Saya bersedia mengikuti program RQD secara penuh (minimal 80% kehadiran) dan menaati aturan yang berlaku. *
                    </Label>
                  </div>
                </div>

                {/* Buttons */}
                <div className="pt-6 border-t border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate(-1)}
                    className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black-200 w-full md:w-auto"
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Kembali
                  </Button>

                  <Button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-medium rounded-lg transition-colors w-full md:w-auto"
                  >
                    <CheckCircle className="h-5 w-5 mr-2 inline" />
                    Kirim ke Admin WhatsApp
                  </Button>
                </div>

                <p className="text-xs text-gray-500 text-center mt-3">
                  Setelah klik, Anda akan diarahkan ke WhatsApp admin untuk konfirmasi.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PendaftaranRQD;
