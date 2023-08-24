import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Set the port to 3000
    open: 'chrome', // Use Google Chrome as the default browser
  },
});
