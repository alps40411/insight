import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: './',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        'genetic-testing': resolve(__dirname, 'genetic-testing.html'),
        products: resolve(__dirname, 'products.html'),
        'gene-bank': resolve(__dirname, 'gene-bank.html'),
        'research-services': resolve(__dirname, 'research-services.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});