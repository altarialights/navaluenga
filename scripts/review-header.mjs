import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
const dir = '.impeccable/review/header-crest';
await mkdir(dir, { recursive: true });
const browser = await chromium.launch();
const results = [];
for (const width of [320, 390, 768, 1200, 1440]) {
  const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
  for (const [name, route] of [['home', '/'], ['contact', '/contacto/']]) {
    await page.goto(`http://127.0.0.1:4322${route}`);
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.querySelectorAll('.site-header img')].map(image => image.decode()));
    });
    await page.locator('.site-header').screenshot({ path: `${dir}/${width}-${name}.png` });
    results.push(await page.evaluate(({ width, name }) => ({
      width, name,
      overflow: document.documentElement.scrollWidth > innerWidth,
      crestLoaded: document.querySelector('.brand-crest').naturalWidth > 0,
      brand: document.querySelector('.brand').getBoundingClientRect().toJSON(),
    }), { width, name }));
  }
  await page.close();
}
await browser.close();
await writeFile('research/header-crest-checks.json', JSON.stringify(results, null, 2));
console.log(results.map(({width,name,overflow,crestLoaded}) => ({width,name,overflow,crestLoaded})));
