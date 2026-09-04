import { test, expect } from '@playwright/test';

test('la página carga y el hero es visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Espacios');
  await expect(page.locator('h1')).toContainText('impecables');
  await expect(page.locator('#site-header')).toBeVisible();
});

test('cada link del navbar scrollea hasta su sección', async ({ page }) => {
  await page.goto('/');

  const cases = [
    { label: 'Nosotros', section: '#quienes-somos' },
    { label: 'Servicios', section: '#servicios' },
    { label: 'Te pasó?', section: '#el-problema' },
    { label: 'Funcionamiento', section: '#como-funciona' },
    { label: 'FAQ', section: '#faq' },
  ];

  for (const { label, section } of cases) {
    const link = page.locator(`[data-dock-nav] a:has-text("${label}")`).first();
    await link.click();
    await page.waitForTimeout(1600);
    const sectionBox = await page.locator(section).boundingBox();
    expect(sectionBox, `${label} → ${section}`).not.toBeNull();
    // La sección queda visible (offset dentro del viewport, no tapada por el navbar)
    const navbarBox = await page.locator('#site-header').boundingBox();
    expect(sectionBox!.y).toBeGreaterThanOrEqual((navbarBox?.y ?? 0) - 10);
    expect(sectionBox!.y).toBeLessThan(600);
  }
});

test('form: con datos válidos no muestra errores', async ({ page }) => {
  await page.goto('/#contacto');
  await page.waitForTimeout(500);

  await page.locator('#nombre').fill('Juan Pérez');
  await page.locator('#email').fill('admin@edificio.com');
  await page.locator('#institucion').fill('Consorcio Av. Libertador 1400');
  await page.locator('#tipo-espacio-trigger').click();
  await page.locator('[role="option"][data-value="consorcio"]').click();

  await page.locator('#contact-form button[type="submit"]').click();

  await expect(page.locator('#form-error-live')).toContainText('Formulario enviado');
  await expect(page.locator('[data-field-error]')).toHaveCount(0);
});

test('form: con email mal formado muestra error y no envía', async ({ page }) => {
  await page.goto('/#contacto');
  await page.waitForTimeout(500);

  await page.locator('#nombre').fill('Juan Pérez');
  await page.locator('#email').fill('no-es-un-mail');
  await page.locator('#institucion').fill('Consorcio Av. Libertador 1400');
  await page.locator('#tipo-espacio-trigger').click();
  await page.locator('[role="option"][data-value="oficina"]').click();

  await page.locator('#contact-form button[type="submit"]').click();

  await expect(page.locator('[data-field-error]')).toHaveCount(1);
  await expect(page.locator('[data-field-error]')).toContainText('formato válido');
  await expect(page.locator('#form-error-live')).toContainText('No se pudo enviar');
});

test('form: con campos vacíos marca todos los errores', async ({ page }) => {
  await page.goto('/#contacto');
  await page.waitForTimeout(500);

  await page.locator('#contact-form button[type="submit"]').click();

  await expect(page.locator('[data-field-error]')).toHaveCount(4);
  await expect(page.locator('#form-error-live')).toContainText('Revisá los campos marcados');
});

test('responsive: no hay overflow horizontal en los breakpoints', async ({ page }) => {
  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await page.waitForTimeout(300);

    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(hasOverflow, `overflow horizontal a ${width}px`).toBe(false);
  }
});