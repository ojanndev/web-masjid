import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProfileMasjid from "./pages/ProfileMasjid";
import GalleryMasjid from "./pages/GalleryMasjid";
import Kontak from "./pages/Kontak";
import Berita from './pages/Berita';
import PendaftaranRQD from './pages/PendaftaranRQD';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* ✅ Tambahkan basename sesuai nama repo GitHub Pages */}
      <BrowserRouter basename="/web-masjid">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile-masjid" element={<ProfileMasjid />} />
          <Route path="/gallery-masjid" element={<GalleryMasjid />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/pendaftaran-rqd" element={<PendaftaranRQD />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;