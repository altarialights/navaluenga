import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const out = '.impeccable/review/extension';
await mkdir(out, { recursive: true });
const browser = await chromium.launch();
const routes = ['tramites', 'sede', 'incidencias', 'agenda', 'instalaciones', 'vivir', 'avisos', 'mapa', 'empresas', 'participa', 'contacto', 'ayudas', 'buscar'];
const evidence = [];
for (const width of [390, 1440]) {
  const page = await browser.newPage({ viewport: { width, height: 960 }, reducedMotion: 'reduce' });
  const thumbnails = [];
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    await page.goto(`http://127.0.0.1:4322/${route}/`);
    await page.evaluate(async () => { for (const image of document.images) image.loading = 'eager'; await Promise.all([...document.images].map(i => i.decode().catch(() => {}))); await document.fonts.ready; });
    const file = `${out}/${width}-${route}.png`;
    await page.screenshot({ path: file, fullPage: true });
    const screenshot = await page.screenshot();
    const thumb = await sharp(screenshot).resize({ width: width === 1440 ? 480 : 260 }).png().toBuffer();
    thumbnails.push({ input: thumb, left: (i % 3) * (width === 1440 ? 500 : 280), top: Math.floor(i / 3) * (width === 1440 ? 340 : 660) });
    const normal = await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1);
    await page.evaluate(() => document.documentElement.style.fontSize = '200%');
    const zoom = await page.evaluate(() => ({ viewport: innerWidth, width: document.documentElement.scrollWidth }));
    evidence.push({ route, width, normal, zoom });
  }
  await sharp({ create: { width: width === 1440 ? 1500 : 840, height: Math.ceil(routes.length / 3) * (width === 1440 ? 340 : 660), channels: 3, background: '#d9d4c8' } }).composite(thumbnails).png().toFile(`${out}/overview-${width}.png`);
  await page.close();
}
await writeFile('research/extension-responsive.json', JSON.stringify(evidence, null, 2));
console.log(JSON.stringify(evidence.filter(e => !e.normal || e.zoom.width > e.zoom.viewport + 1), null, 2));
await browser.close();
