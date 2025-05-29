import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensures Vite knows to look here
  publicDir: 'public',
  build: {
    outDir: 'dist'
  },
  server: {
    host: true,
    port: 5173
  }
});