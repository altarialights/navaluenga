import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const directory = '.impeccable/review/home-refresh';
await mkdir(directory, { recursive: true });
const browser = await chromium.launch();
const evidence = [];
const sections = [
  ['hero', '.hero'], ['services', '.home-services'], ['river', '.river-section'],
  ['experiences', '.experience-section'], ['living', '.home-living'], ['heritage', '.heritage-section'],
  ['agenda', '.home-agenda'], ['visit', '.visit-section'], ['business', '.home-business'],
  ['participation', '.home-participation'], ['closing', '.home-closing'],
];
for (const width of [390, 768, 1440]) {
  const page = await browser.newPage({ viewport: { width, height: width === 390 ? 844 : 960 }, reducedMotion: 'reduce' });
  await page.goto('http://127.0.0.1:4322/');
  await page.evaluate(async () => {
    for (const img of document.images) img.loading = 'eager';
    await Promise.all([...document.images].map(img => img.decode().catch(() => {})));
    await document.fonts.ready;
  });
  await page.screenshot({ path: `${directory}/${width}-viewport.png` });
  const full = await page.screenshot({ path: `${directory}/${width}-full.png`, fullPage: true });
  const previews = [];
  for (let index = 0; index < sections.length; index++) {
    const [name, selector] = sections[index];
    const box = await page.locator(selector).boundingBox();
    const capture = await sharp(full).extract({ left: Math.max(0,Math.round(box.x)), top: Math.round(box.y), width: Math.round(box.width), height: Math.floor(box.height) }).png().toBuffer();
    await sharp(capture).toFile(`${directory}/${width}-${name}.png`);
    previews.push({ input: await sharp(capture).resize({ width: 400, height: 560, fit: 'contain', background: '#d9d4c8' }).png().toBuffer(), left: (index % 3) * 420, top: Math.floor(index / 3) * 580 });
  }
  await sharp({ create: { width: 1260, height: Math.ceil(sections.length / 3) * 580, channels: 3, background: '#d9d4c8' } }).composite(previews).png().toFile(`${directory}/${width}-storyboard.png`);
  if (width === 390) {
    await page.getByRole('button', { name: 'Menú', exact: true }).click();
    await page.getByRole('button', { name: 'Mostrar opciones de Vivir aquí' }).click();
    await page.screenshot({ path: `${directory}/${width}-menu.png` });
    await page.keyboard.press('Escape'); await page.keyboard.press('Escape');
  }
  if (width === 1440) {
    await page.getByRole('button', { name: 'Mostrar opciones de Trámites y servicios' }).click();
    await page.screenshot({ path: `${directory}/${width}-menu.png` });
    await page.keyboard.press('Escape');
  }
  const normal = await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1);
  await page.evaluate(() => document.documentElement.style.fontSize = '200%');
  const zoom = await page.evaluate(() => ({ content: document.documentElement.scrollWidth, viewport: innerWidth }));
  evidence.push({ width, normal, zoom });
  await page.close();
}
await writeFile('research/home-responsive.json', JSON.stringify(evidence, null, 2));
console.log(JSON.stringify(evidence, null, 2));
await browser.close();
