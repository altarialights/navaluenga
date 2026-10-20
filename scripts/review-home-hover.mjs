import { chromium } from '@playwright/test';
import { writeFile } from 'node:fs/promises';

const browser = await chromium.launch();
const results = [];
for (const [width, touch] of [[1440, false], [390, false], [390, true]]) {
  const page = await browser.newPage({ viewport: { width, height: width === 390 ? 844 : 960 }, hasTouch: touch, reducedMotion: 'reduce' });
  await page.goto('http://127.0.0.1:4322/');
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.querySelectorAll('.hero img')].map(image => image.decode()));
  });
  const action = page.locator('.hero-actions .button-outline');
  if (!touch) await action.hover();
  const state = await action.evaluate(element => {
    const style = getComputedStyle(element);
    return { background: style.backgroundColor, color: style.color, hoverCapable: matchMedia('(hover: hover)').matches };
  });
  results.push({ width, touch, ...state });
  await page.screenshot({ path: `.impeccable/review/home-refresh/${width}-${touch ? 'touch-default' : 'hover'}.png` });
  await page.close();
}
await writeFile('research/home-hover.json', JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
await browser.close();
