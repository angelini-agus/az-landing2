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

test('contacto fondo: tanto móvil como desktop usan SVG estático de nubes sin WebGL', async ({ page }) => {
  // 1. Mobile viewport (390x844)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/#contacto');
  await page.waitForTimeout(600);

  const canvas = page.locator('canvas[data-shader-canvas]');
  const staticCloud = page.locator('#contacto svg[viewBox="0 0 1440 540"]');

  // En móvil: el SVG estático de nubes es visible y no hay canvas WebGL
  await expect(staticCloud).toBeVisible();
  await expect(canvas).toHaveCount(0);

  // 2. Desktop viewport (1440x900)
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/#contacto');
  await page.waitForTimeout(600);

  // En desktop: el SVG estático de nubes sigue siendo el fondo visible sin canvas WebGL
  await expect(staticCloud).toBeVisible();
  await expect(canvas).toHaveCount(0);
});

test('branding: el nuevo favicon está presente y el viejo favicon.svg fue eliminado', async ({ page }) => {
  await page.goto('/');
  const oldSvgFavicon = page.locator('link[rel="icon"][href*="favicon.svg"]');
  await expect(oldSvgFavicon).toHaveCount(0);

  const pngFavicon = page.locator('link[rel="icon"][href="/favicon-32x32.png"]');
  await expect(pngFavicon).toHaveCount(1);

  const appleTouchIcon = page.locator('link[rel="apple-touch-icon"][href="/apple-touch-icon.png"]');
  await expect(appleTouchIcon).toHaveCount(1);
});

test('institucional: botón de acceso a empleados en footer y menú móvil', async ({ page }) => {
  await page.goto('/');

  // Footer: botón 'Acceso empleados'
  const footerLoginBtn = page.locator('footer a[href="/login"]');
  await expect(footerLoginBtn).toBeVisible();
  await expect(footerLoginBtn).toContainText('Acceso empleados');

  // Menú móvil: abrir menú hamburguesa y verificar botón 'Acceso empleados'
  await page.setViewportSize({ width: 390, height: 844 });
  await page.click('#nav-toggle');
  const mobileLoginBtn = page.locator('#mobile-menu a[href="/login"]');
  await expect(mobileLoginBtn).toBeVisible();
  await expect(mobileLoginBtn).toContainText('Acceso empleados');
});