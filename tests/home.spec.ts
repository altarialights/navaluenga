import { test, expect } from '@playwright/test';

test('home: portada centrada, profundidad, servicios y enlaces de secciones', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 960 });
  await page.goto('/');
  const hero = await page.locator('.hero').boundingBox();
  const title = await page.locator('h1').boundingBox();
  const center = (title!.y + title!.height / 2 - hero!.y) / hero!.height;
  expect(center).toBeGreaterThan(.35);
  expect(center).toBeLessThan(.62);
  await expect(page.locator('.hero-foliage img')).toHaveCount(2);
  expect(await page.locator('.hero-foliage img').evaluateAll(images => images.every(img => (img as HTMLImageElement).naturalWidth > 0))).toBe(true);
  await expect(page.locator('.citizen-actions a')).toHaveCount(6);
  for (const section of ['.home-living', '.home-agenda', '.home-business', '.home-participation', '.home-closing']) await expect(page.locator(section)).toBeVisible();
  await expect(page.locator('.home-agenda')).toContainText('Agenda de demostración');
  const secondaryAction = page.locator('.hero-actions .button-outline');
  await secondaryAction.hover();
  await expect(secondaryAction).toHaveCSS('background-color', 'rgb(246, 241, 229)');
  await expect(secondaryAction).toHaveCSS('color', 'rgb(18, 55, 40)');
  await page.locator('.home-services').scrollIntoViewIfNeeded();
  await expect(page.locator('.site-header')).toHaveClass(/is-scrolled/);
  await page.getByRole('button', { name: 'Mostrar opciones de Trámites y servicios' }).click();
  await expect(page.locator('#main-navigation').getByRole('link', { name: 'Todos los trámites', exact: true })).toBeVisible();
  await page.keyboard.press('Escape');
});

test('móvil: dock, foco del menú y título conservado', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const dock = page.getByRole('navigation', { name: 'Accesos rápidos municipales' });
  await expect(dock.getByRole('link')).toHaveCount(4);
  await expect(dock.locator('svg')).toHaveCount(4);
  const title = await page.locator('h1').boundingBox();
  expect(title!.y + title!.height / 2).toBeGreaterThan(844 * .3);
  expect(title!.y + title!.height / 2).toBeLessThan(844 * .65);
  const menu = page.getByRole('button', { name: 'Menú', exact: true });
  await menu.click();
  await expect(page.locator('#main-navigation a').first()).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  await dock.getByRole('link', { name: 'Agenda', exact: true }).click();
  await expect(page).toHaveURL(/\/agenda\/$/);
  await expect(dock.getByRole('link', { name: 'Agenda', exact: true })).toHaveAttribute('aria-current', 'page');
});
