// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { defaultLang, languages } from './src/i18n/ui';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.entries(languages).map(([key, _]) => key),
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    },
  },

  integrations: [react()]
});