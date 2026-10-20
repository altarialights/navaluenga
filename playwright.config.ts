import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 2,
  timeout: 45000,
  reporter: [['list'], ['json', { outputFile: 'research/test-results.json' }]],
  use: { baseURL: 'http://127.0.0.1:4322', reducedMotion: 'reduce', trace: 'retain-on-failure' },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
  webServer: { command: 'node node_modules/astro/bin/astro.mjs preview --host 127.0.0.1 --port 4322', url: 'http://127.0.0.1:4322', reuseExistingServer: true, timeout: 30000 },
});
