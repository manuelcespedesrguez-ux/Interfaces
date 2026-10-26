// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';



import mdx from '@astrojs/mdx';



export default defineConfig({
  server: {
    host: true,
    allowedHosts: true
  },

  vite: {
    plugins: [tailwindcss()]
  }, 

  integrations: [react(), mdx()]
});