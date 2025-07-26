import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    port: process.env.PORT || 5173,
    host: true,
    allowedHosts: ['my-portfolio-v2i1.onrender.com'] 
  }
})
