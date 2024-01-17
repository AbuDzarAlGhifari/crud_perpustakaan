import React from 'react';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

export default {
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['favicon.ico', 'robots.txt', 'manifest.webmanifest'],
      manifest: {
        name: 'Your App Name',
        short_name: 'App',
        description: 'Your app description',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
      },
    }),
  ],
};
