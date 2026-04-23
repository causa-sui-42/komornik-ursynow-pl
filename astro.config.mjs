import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://causa-sui-42.github.io',
  base: '/komornik-ursynow-pl/',
  integrations: [
    tailwind(),
    react()
  ],
  output: 'static',
  build: {
    format: 'file'
  }
});
