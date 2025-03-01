import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwind()],
  server: {
    allowedHosts: [
      'ngrok-free.app',
      'ngrok.io',
      '.ngrok-free.app',
      '.ngrok.io',
      'localhost',
      '127.0.0.1'
    ]
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
