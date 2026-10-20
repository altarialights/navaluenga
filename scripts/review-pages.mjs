import { chromium } from '@playwright/test';
import { writeFile } from 'node:fs/promises';
const browser = await chromium.launch();
const evidence = [];
for (const width of [390, 1440]) {
  const page = await browser.newPage({ viewport: { width, height: 960 }, reducedMotion: 'reduce' });
  for (const path of ['empresas', 'servicios', 'participa', 'rio', 'historia', 'visita', 'experiencias', 'creditos', 'privacidad', 'accesibilidad']) {
    await page.goto(`http://127.0.0.1:4322/${path}/`);
    await page.evaluate(async () => { for (const img of document.images) img.loading = 'eager'; await Promise.all([...document.images].map(img => img.decode().catch(() => {}))); await document.fonts.ready; });
    const normal = await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1);
    if (['empresas', 'servicios', 'participa'].includes(path)) await page.screenshot({ path: `.impeccable/review/${width}-${path}.png`, fullPage: true });
    await page.evaluate(() => document.documentElement.style.fontSize = '200%');
    const zoom = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: innerWidth, overflow: [...document.querySelectorAll('body *')].filter(el => el.clientWidth && el.scrollWidth > el.clientWidth + 2).map(el => ({tag:el.tagName, class:el.className, text:el.textContent?.slice(0,80)})) }));
    evidence.push({ width, path, normal, zoom });
  }
  await page.close();
}
await writeFile('research/secondary-pages.json', JSON.stringify(evidence, null, 2));
console.log(JSON.stringify(evidence.filter(e => !e.normal || e.zoom.width > e.zoom.viewport + 1), null, 2));
await browser.close();
