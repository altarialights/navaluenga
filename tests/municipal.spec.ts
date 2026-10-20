import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const paths = ['/tramites/', '/tramites/padron/', '/sede/', '/incidencias/', '/agenda/', '/agenda/musica/', '/instalaciones/', '/vivir/', '/avisos/', '/mapa/', '/empresas/', '/participa/', '/contacto/', '/ayudas/', '/buscar/'];

test('ampliación: rutas, enlaces, móvil pequeño, escritorio y accesibilidad', async ({ page, request }) => {
  test.setTimeout(180000);
  const links = new Set<string>();
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));
  for (const width of [320, 1440]) {
    await page.setViewportSize({ width, height: 960 });
    for (const path of paths) {
      // WebKit can expose the valid cache revalidation response on the second viewport.
      expect([200, 304], path).toContain((await page.goto(path))?.status());
      await expect(page.locator('h1')).toHaveCount(1);
      await page.evaluate(() => document.fonts.ready);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${path} @ ${width}`).toBeTruthy();
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
      expect(results.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), `${path} @ ${width}`).toEqual([]);
      if (width === 1440) {
        for (const href of await page.locator('a[href]').evaluateAll(els => els.map(el => el.getAttribute('href')!).filter(href => href.startsWith('/') || href.startsWith('#')))) {
          const url = new URL(href, `http://127.0.0.1:4322${path}`); links.add(url.pathname + url.hash);
        }
      }
    }
  }
  for (const href of links) {
    const [path, hash] = href.split('#');
    const response = await request.get(path); expect(response.status(), href).toBe(200);
    if (hash) expect(await response.text(), href).toContain(`id="${hash}"`);
  }
  expect(errors).toEqual([]);
});

test('incidencia: validación, cinco pasos, revisión segura y borrador', async ({ page }) => {
  await page.goto('/incidencias/');
  await page.getByRole('button', { name: 'Continuar', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Elige el tipo');
  await page.getByLabel('Alumbrado', { exact: true }).check();
  await page.getByRole('button', { name: 'Continuar', exact: true }).click();
  await page.getByLabel('Descripción de ejemplo').fill('Una farola de ejemplo no se enciende por la noche.');
  await page.getByRole('button', { name: 'Continuar', exact: true }).click();
  await page.getByLabel('Calle o referencia ficticia').fill('Calle de ejemplo, espacio ficticio');
  await page.getByRole('button', { name: 'Continuar', exact: true }).click();
  await page.getByLabel('Fotografías opcionales').setInputFiles({
    name: 'test.png', mimeType: 'image/png',
    buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=', 'base64'),
  });
  await expect(page.locator('[data-previews] img')).toHaveCount(1);
  await page.getByRole('button', { name: 'Continuar', exact: true }).click();
  await expect(page.locator('[data-review]')).toContainText('Calle de ejemplo');
  await page.getByRole('button', { name: 'Finalizar demostración' }).click();
  await expect(page.getByRole('alert')).toContainText('Confirma');
  await page.getByLabel('Entiendo que es una demostración').check();
  await page.getByRole('button', { name: 'Finalizar demostración' }).click();
  await expect(page.locator('[data-complete]')).toContainText('no se ha enviado');
  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Descargar borrador' }).click();
  expect((await download).suggestedFilename()).toBe('borrador-incidencia-DEMO.txt');
  await page.getByRole('button', { name: 'Nuevo ejemplo' }).click();
  await expect(page.getByLabel('Alumbrado', { exact: true })).not.toBeChecked();
});

test('agenda: filtros, calendario navegable, ficha y archivo ICS', async ({ page }) => {
  await page.goto('/agenda/');
  await page.getByLabel('Categoría', { exact: true }).selectOption('Cultura');
  await expect(page.locator('[data-item]:visible')).toHaveCount(1);
  await page.getByRole('button', { name: 'Calendario', exact: true }).click();
  await expect(page.locator('[data-calendar-grid] a')).toHaveCount(1);
  await page.getByRole('button', { name: 'Mes siguiente' }).click();
  await expect(page.locator('[data-month-title]')).toContainText('noviembre');
  await expect(page.locator('[data-calendar-grid] a')).toHaveCount(0);
  await page.getByRole('button', { name: 'Limpiar filtros' }).click();
  await expect(page.locator('[data-calendar-grid] a')).toHaveCount(3);
  await page.goto('/agenda/musica/');
  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Añadir ejemplo al calendario' }).click();
  expect((await download).suggestedFilename()).toBe('DEMO-musica.ics');
});

test('reservas: selección, revisión, modificación y confirmación honesta', async ({ page }) => {
  await page.goto('/instalaciones/');
  await page.getByRole('button', { name: /Sala de encuentros/ }).click();
  await page.getByLabel('Fecha de ejemplo').fill('2027-01-12');
  await page.locator('input[name=slot]:not(:disabled)').first().check();
  await page.getByLabel('Entiendo que no estoy reservando').check();
  await page.getByRole('button', { name: 'Revisar solicitud de ejemplo' }).click();
  await expect(page.locator('[data-booking-summary]')).toContainText('Sala de encuentros');
  await page.getByRole('button', { name: 'Modificar', exact: true }).click();
  await expect(page.getByLabel('Fecha de ejemplo')).toHaveValue('2027-01-12');
  await page.getByRole('button', { name: 'Revisar solicitud de ejemplo' }).click();
  await page.getByRole('button', { name: 'Confirmar demostración' }).click();
  await expect(page.locator('[data-booking-complete]')).toContainText('No se ha realizado una reserva');
});

test('búsqueda, fechas, mapa, encuesta y menú por teclado', async ({ page }) => {
  await page.goto('/tramites/');
  await page.getByLabel('¿Qué necesitas hacer?').fill('padron');
  await expect(page.locator('[data-item]:visible')).toHaveCount(1);
  await page.goto('/avisos/');
  await page.getByLabel('Desde la fecha').fill('2026-10-21');
  await expect(page.locator('[data-item]:visible')).toHaveCount(1);
  await page.getByLabel('Buscar aviso').fill('zzzz');
  await expect(page.locator('[data-empty]')).toBeVisible();
  await page.goto('/mapa/');
  await page.getByLabel('Categoría', { exact: true }).selectOption('Alojamientos');
  await expect(page.locator('[data-point]:visible')).toHaveCount(1);
  await expect(page.locator('[data-point-title]')).toContainText('Alojamientos');
  await expect(page.locator('iframe')).not.toHaveAttribute('src', /openstreetmap/);
  await page.goto('/participa/');
  await page.getByLabel('Talleres entre generaciones', { exact: true }).check();
  await page.getByRole('button', { name: 'Probar mi respuesta' }).click();
  await expect(page.locator('[data-poll-result]')).toContainText('no se ha enviado');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: 'Menú', exact: true }).click();
  const expand = page.getByRole('button', { name: 'Mostrar opciones de Trámites y servicios' });
  await expand.focus(); await page.keyboard.press('Enter');
  await expect(expand).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(expand).toBeFocused();
  await expect(expand).toHaveAttribute('aria-expanded', 'false');
});
