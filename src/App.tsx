import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import Index from "./pages/Index";
import ProfileMasjid from "./pages/ProfileMasjid";
import GallerySekolah from "./pages/GalleryMasjid";
import Kontak from "./pages/Kontak";
import PendaftaranSiswaBaru from "./pages/PendaftaranSiswaBaru";
import NotFound from "./pages/NotFound";
import GalleryMasjid from "./pages/GalleryMasjid";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile-Masjid" element={<ProfileMasjid />} />
            <Route path="/gallery-masjid" element={<GalleryMasjid />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/pendaftaran-siswa-baru" element={<PendaftaranSiswaBaru />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;