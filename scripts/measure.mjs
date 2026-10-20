import { chromium } from '@playwright/test';
import { readFile, writeFile } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
const browser = await chromium.launch();
const results = [];
for (const throttled of [false, true]) {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, reducedMotion: 'reduce' });
  const page = await context.newPage();
  const cdp = await context.newCDPSession(page);
  if (throttled) {
    await cdp.send('Network.enable');
    await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 200000, uploadThroughput: 93750 });
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  }
  await page.addInitScript(() => {
    window.__metrics = { lcp: 0, cls: 0, interactions: [] };
    new PerformanceObserver(list => { for (const e of list.getEntries()) window.__metrics.lcp = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver(list => { for (const e of list.getEntries()) if (!e.hadRecentInput) window.__metrics.cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
    new PerformanceObserver(list => { for (const e of list.getEntries()) if (e.interactionId) window.__metrics.interactions.push(e.duration); }).observe({ type: 'event', buffered: true, durationThreshold: 16 });
  });
  await page.goto('http://127.0.0.1:4322/', { waitUntil: 'networkidle' });
  await page.locator('.hero img').evaluateAll(images => Promise.all(images.map(img => img.decode())));
  await page.getByRole('button', { name: 'Menú' }).click();
  await page.keyboard.press('Escape');
  await page.getByRole('tab', { name: 'Saborear' }).click();
  await page.getByRole('tab', { name: 'Descansar' }).click();
  await page.waitForTimeout(250);
  results.push(await page.evaluate(throttled => ({ environment: throttled ? 'Chromium local; 390x844 DPR2; 1.6Mbps/150ms; CPU4x' : 'Chromium local; 390x844 DPR2; sin limitar', ...window.__metrics, resources: performance.getEntriesByType('resource').map(e => ({ name: e.name.split('/').pop(), transferSize: e.transferSize, duration: Math.round(e.duration) })) }), throttled));
  await context.close();
}
const html = await readFile('dist/index.html', 'utf8');
const scripts = [...html.matchAll(/<script type="module">([\s\S]*?)<\/script>/g)].map(match => match[1]).join('\n');
await writeFile(process.argv[2] || 'research/performance.json', JSON.stringify({ measuredAt: new Date().toISOString(), labOnly: true, inlineJSBytes: Buffer.byteLength(scripts), inlineJSGzipBytes: gzipSync(scripts).length, runs: results }, null, 2));
console.log(JSON.stringify({ jsBytes: Buffer.byteLength(scripts), jsGzip: gzipSync(scripts).length, results: results.map(({resources,...r})=>r) }, null, 2));
await browser.close();
