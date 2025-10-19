import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/web-masjid",
  server: {
    host: "::",
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  define: {
    __DEV__: mode === 'development',
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: mode === 'development', // Only generate sourcemaps in development
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'react-query': ['@tanstack/react-query'],
          'ui-vendor': ['@radix-ui/react-slot', 'lucide-react'],
          'animation-vendor': ['framer-motion'],
          'forms-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'date-vendor': ['react-day-picker', 'input-otp'],
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/[name]-[hash].css';
          }
          if (assetInfo.name && assetInfo.name.match(/\.(png|jpe?g|gif|svg|webp)$/)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (assetInfo.name && assetInfo.name.match(/\.(woff2?|eot|ttf|otf)$/)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
}));
