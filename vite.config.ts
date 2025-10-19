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
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching and performance
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'react-query': ['@tanstack/react-query'],
          'ui-vendor': ['@radix-ui/react-slot', 'lucide-react'],
          'animation-vendor': ['framer-motion'],
          'forms-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'date-vendor': ['react-day-picker', 'input-otp'],
          'charts-vendor': ['recharts'],
        },
        entryFileNames: (chunkInfo) => {
          // Keep main bundle smaller by using descriptive names
          if (chunkInfo.name === 'index') {
            return 'assets/index-[hash].js';
          }
          return 'assets/[name]-[hash].js';
        },
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
    minify: 'terser', // Use terser for better minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
        pure_funcs: ['console.log'], // Remove console calls
      },
      mangle: true,
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
}));