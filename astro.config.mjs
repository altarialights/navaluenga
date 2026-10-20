import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { existsSync } from 'node:fs';
import { loadEnvFile } from 'node:process';

const envFile = new URL('./.env', import.meta.url);
if (existsSync(envFile)) loadEnvFile(envFile);
const site = process.env.SITE_URL;
if (site && !/^https:\/\//.test(site)) throw new Error('SITE_URL debe ser una URL https absoluta.');

export default defineConfig({
  site: site || 'http://localhost:4321',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
});
