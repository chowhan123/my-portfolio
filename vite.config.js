import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: Number(process.env.PORT) || 5173,
    allowedHosts: ['my-portfolio-v2i1.onrender.com', 'localhost'], // add your Render domain and localhost for dev
  }
});
