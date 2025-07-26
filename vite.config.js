import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT || 5173,
    host: true,
    allowedHosts: ['my-portfolio-8huu.onrender.com'],
  },
  server: {
    port: process.env.PORT || 5173,
    host: true,
  }
});

