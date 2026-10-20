import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

async function loadVisibleImages(page: Page) {
  await page.evaluate(async () => {
    const images = [...document.images].filter(img => img.getClientRects().length > 0);
    for (const img of images) img.loading = 'eager';
    await Promise.all(images.map(img => img.decode().catch(() => {})));
    await document.fonts.ready;
  });
}

async function noOverflow(page: Page) {
  const overflow = await page.evaluate(() => ({ viewport: innerWidth, content: document.documentElement.scrollWidth, elements: [...document.querySelectorAll('body *')].filter(el => el.getBoundingClientRect().right > innerWidth + 1).map(el => ({ tag: el.tagName, class: el.className, text: el.textContent?.slice(0, 60) })) }));
  if (overflow.content > overflow.viewport + 1) console.log(overflow);
  expect(overflow.content).toBeLessThanOrEqual(overflow.viewport + 1);
}

const viewports = [
  [320, 740], [360, 800], [390, 844], [430, 932], [768, 1024], [1440, 960], [1920, 1080], [844, 390], [1024, 600],
];
for (const [width, height] of viewports) {
  test(`inicio ${width} × ${height}: contenido, imágenes y ancho`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height });
    const errors: string[] = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('response', r => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
    await page.goto('/');
    await loadVisibleImages(page);
    await expect(page.locator('h1')).toHaveText('NAVALUENGA');
    await expect(page.locator('h1')).toHaveCount(1);
    await noOverflow(page);
    const bounds = await page.locator('h1').boundingBox();
    expect(bounds!.x).toBeGreaterThanOrEqual(0);
    expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width);
    expect(await page.locator('img:visible').evaluateAll(images => images.every(img => (img as HTMLImageElement).naturalWidth > 0))).toBe(true);
    expect(errors).toEqual([]);
    await mkdir('.impeccable/review', { recursive: true });
    const screenshot = await page.screenshot({ path: `.impeccable/review/${testInfo.project.name}-${width}.png`, fullPage: true });
    if (testInfo.project.name === 'chromium' && [390, 1440].includes(width)) {
      for (const [name, selector] of [['hero', '.hero'], ['river', '.river-section'], ['experiences', '.experience-section'], ['heritage', '.heritage-section'], ['visit', '.visit-section']] as const) {
        const rect = await page.locator(selector).boundingBox();
        await sharp(screenshot).extract({ left: Math.max(0, Math.round(rect!.x)), top: Math.round(rect!.y), width: Math.round(rect!.width), height: Math.floor(rect!.height) }).toFile(`.impeccable/review/${width}-${name}.png`);
      }
    }
  });
}

test('menú móvil: teclado, Escape, foco y anclas', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Menú' });
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#main-navigation a').first()).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await toggle.click();
  await page.locator('#main-navigation').getByRole('link', { name: 'Vivir aquí' }).click();
  await expect(page).toHaveURL(/#vivir$/);
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#vivir')).toBeFocused();
  await noOverflow(page);
});

test('experiencias cambian imagen, enlaces y estado con teclado', async ({ page }) => {
  await page.goto('/');
  const caminar = page.getByRole('tab', { name: 'Caminar' });
  await caminar.focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('tab', { name: 'Saborear' })).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('#panel-saborear')).toBeVisible();
  await expect(page.locator('#panel-caminar')).toBeHidden();
  await expect(page.locator('#panel-saborear img')).toHaveAttribute('alt', /Tejados/);
  await expect(page.locator('#panel-saborear .button')).toHaveAttribute('href', '/empresas/comer/');
  await page.keyboard.press('End');
  await expect(page.locator('#panel-descansar')).toBeVisible();
  await page.keyboard.press('Home');
  await expect(caminar).toBeFocused();
  for (let i = 0; i < 6; i++) await page.getByRole('tab', { name: i % 2 ? 'Caminar' : 'Descansar' }).click();
  await expect(page.locator('[role="tabpanel"]:visible')).toHaveCount(1);
  await page.goto('/#panel-saborear');
  await expect(page.locator('#panel-saborear')).toBeVisible();
});

test('directorio: filtros, búsqueda sin acentos, vacío, reinicio y atrás', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/empresas/');
  await page.getByRole('link', { name: 'Dónde comer', exact: true }).click();
  await expect(page).toHaveURL(/\/empresas\/comer\/$/);
  await expect(page.locator('[data-business]:visible')).toHaveCount(5);
  const search = page.getByRole('searchbox');
  await search.fill('galeria');
  await expect(page.locator('[data-business]:visible')).toHaveCount(1);
  await expect(page.locator('[data-business]:visible')).toContainText('La Galería');
  await search.fill('zzznada');
  await expect(page.locator('.directory-empty')).toBeVisible();
  await page.getByRole('button', { name: 'Ver todos los establecimientos' }).click();
  await expect(page.locator('[data-business]:visible')).toHaveCount(14);
  await expect(search).toBeFocused();
  await page.getByRole('link', { name: 'Dónde dormir', exact: true }).click();
  await expect(page.locator('[data-business]:visible')).toHaveCount(4);
  await page.goBack();
  await expect(page.locator('[data-business]:visible')).toHaveCount(14);
  await noOverflow(page);
});

test('sin JavaScript: navegación, experiencias y categorías completas', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 360, height: 800 } });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4322/');
  await expect(page.locator('#main-navigation')).toBeVisible();
  await expect(page.locator('.experience-panel:visible')).toHaveCount(3);
  await noOverflow(page);
  await page.goto('http://127.0.0.1:4322/empresas/dormir/');
  await expect(page.locator('[data-business]:visible')).toHaveCount(4);
  await expect(page.getByRole('searchbox')).toBeHidden();
  await page.getByRole('link', { name: 'Dónde comer', exact: true }).click();
  await expect(page.locator('[data-business]:visible')).toHaveCount(5);
  await context.close();
});

test('zoom de texto, movimiento reducido y salto al contenido', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Saltar al contenido' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  expect(await page.locator('.hero-message').evaluate(el => getComputedStyle(el).animationName)).toBe('none');
  await page.evaluate(() => document.documentElement.style.fontSize = '200%');
  await noOverflow(page);
});

test('rutas, semántica, metadatos y enlaces internos', async ({ page, request }) => {
  const paths = ['/', '/rio/', '/historia/', '/experiencias/', '/visita/', '/servicios/', '/participa/', '/empresas/', '/empresas/comer/', '/empresas/dormir/', '/empresas/actividades/', '/empresas/comercio/', '/accesibilidad/', '/privacidad/', '/creditos/'];
  const localLinks = new Set<string>();
  for (const path of paths) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
    const links = await page.locator('a[href]').evaluateAll(els => els.map(el => el.getAttribute('href')!).filter(href => href.startsWith('/') || href.startsWith('#')));
    for (const link of links) {
      expect(link).not.toBe('#');
      const url = new URL(link, `http://127.0.0.1:4322${path}`);
      localLinks.add(url.pathname + url.hash);
    }
  }
  for (const link of localLinks) {
    const [path, id] = link.split('#');
    const response = await request.get(path);
    expect(response.status(), link).toBe(200);
    if (id) expect(await response.text(), link).toContain(`id="${id}"`);
  }
  expect(await (await request.get('/robots.txt')).text()).toContain('Disallow: /');
  expect((await request.get('/sitemap-index.xml')).status()).toBe(200);
});

test('auditoría automática WCAG de las páginas principales', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const path of ['/', '/empresas/', '/participa/', '/servicios/', '/rio/']) {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
    expect(results.violations, `${path}: ${JSON.stringify(results.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })))}`).toEqual([]);
  }
});
