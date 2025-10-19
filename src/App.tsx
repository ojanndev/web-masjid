import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { 
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from 'react';

// Lazy load pages for performance
const Index = lazy(() => import('./pages/Index'));
const ProfileMasjid = lazy(() => import('./pages/ProfileMasjid'));
const GalleryMasjid = lazy(() => import('./pages/GalleryMasjid'));
const Kontak = lazy(() => import('./pages/Kontak'));
const Berita = lazy(() => import('./pages/Berita'));
const PendaftaranRQD = lazy(() => import('./pages/PendaftaranRQD')); // ✅ Import halaman baru
const NotFound = lazy(() => import('./pages/NotFound'));
import LoadingSpinner from "./components/LoadingSpinner";

// Simple loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <Index />
                </Suspense>
              } 
            />
            <Route 
              path="/profile-masjid" 
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <ProfileMasjid />
                </Suspense>
              } 
            />
            <Route 
              path="/gallery-masjid" 
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <GalleryMasjid />
                </Suspense>
              } 
            />
            <Route 
              path="/kontak" 
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <Kontak />
                </Suspense>
              } 
            />
            <Route 
              path="/berita" 
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <Berita />
                </Suspense>
              } 
            />
            {/* ✅ Tambahkan route berikut */}
            <Route 
              path="/pendaftaran-rqd" 
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <PendaftaranRQD />
                </Suspense>
              } 
            />
            <Route path="/loading" element={<LoadingSpinner />} />
            <Route 
              path="*" 
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <NotFound />
                </Suspense>
              } 
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;