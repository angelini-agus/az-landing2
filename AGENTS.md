# AGENTS.md — AZ Servicios de Limpieza (az-landing2)

Copy oficial de la landing page. Fuente de verdad del contenido; no inventar
métricas, testimonios ni datos no confirmados por el cliente.

## Encuadre del negocio (qué NO es esta landing)

- Cliente objetivo: **administradores de consorcios, oficinas y clínicas**. Nada de hogares/particulares.
- AZ no ofrece bolsa de trabajo ni tercerización de personal — es un servicio de limpieza integral con equipo propio.
- No hay teléfono público. El primer contacto es por **mail**; recién cuando el prospecto está calificado, AZ continúa la conversación por **WhatsApp**.
- Hay un botón institucional (navbar + footer) separado del CTA comercial, que lleva al login del ERP interno: `azserviciosdelimpieza.com/login`.

---

## Reglas de diseño del sistema (obligatorias para todas las secciones)

- **Fondo único de toda la página (`--bg-claro: #EFEAF9`)**: sin alternancias de fondo claro en secciones normales (Hero, SocialProof, etc.).
- **Gama violeta / lila (usado en TODO excepto el CTA principal)**:
  - `--violeta-osc: #5B4E8A`: contraste fuerte (secciones "bloque fuerte"), botón de contacto/secundario sólido, cards sólidas sin borde — texto blanco encima.
  - `--lila-medio: #8B7BC7`: íconos, acentos secundarios, números de stats.
  - `--lila-suave: #C4B8E8`: bordes, hover suave (en bloques violeta-osc usar variante clara #E9E2F7).
  - `--lila-pastel: #E9E2F7`: fondos de badges, tags, pills informativas, cards claras con borde sutil.
- **Texto**: `--indigo-texto: #2B2640` (principal sobre fondo claro), `--texto-secundario: #6B6580` (secundario sobre fondo claro). Sobre fondo violeta-osc: texto blanco (#FFFFFF) y secundario #CECBF6.
- **CTA principal (ÚNICA excepción turquesa de todo el sitio)**: `--turq-cta: #3FA88F` y hover `--turq-cta-hover: #8FD4C2`. El turquesa no aparece en ningún otro lugar.
- **Burbujas decorativas** (`Bubble.astro`): siempre blancas/grises neutras transparentes (`--burbuja-blanca` / `--burbuja-gris`), nunca tintadas.
- **Gutter lateral único**: toda sección usa `.container-page` (`mx-auto max-w-[1440px] px-4 lg:px-10`, márgenes chicos estilo Freshify), definido en `global.css`.
- **Ritmo vertical entre secciones**: `py-14 lg:py-24` uniforme.
- **Reveal compartido**: elementos con `data-reveal` + clase `is-visible` vía IntersectionObserver.

---

## 1. Hero Section

**Fórmula aplicada:** Resultado final deseado + sin la fricción principal.

> ## Espacios impecables
> ### Equipo propio, asistencia controlada por QR y GPS, y un solo mail para resolverlo.

**CTA:** `Pedí tu diagnóstico por mail →` *(abre el form de contacto, no un teléfono)*

**Layout (referencia Freshify, aprox. 200vh):** H1 gigante 2 líneas a la izquierda + 2 stat-pills (turq-pastel, ícono + valor bold violeta-osc + label chico) + columna copy/CTA a la derecha; debajo, foto ancho completo (acento central del hero, ~120vh) con esquinas redondeadas, SIN card de vidrio. Sin blancos: todo sobre bg-lila. La sección "01 // Who We Are" de la referencia (cards 500+/Equipo asegurado) pertenece al Social Proof, no al hero.

**Elementos de apoyo debajo del hero:**
- Métrica destacada: **"Asistencia controlada con QR y GPS en cada turno"** — no dependés de que "alguien avise" si faltó personal.
- Segunda métrica: **"Sistema propio de gestión (ServiceTrack)"** — la misma tecnología que usamos para operar, no un Excel improvisado.
- Visual: foto real del equipo trabajando en un edificio/oficina real (nada de stock).

---

## 2. Social Proof (solo métricas, sin testimonios)

**Título de sección:** `Cómo trabajamos, en números`

| Métrica | Descripción |
|---|---|
| **50+** | Edificios, oficinas y clínicas atendidos actualmente. |
| **98%** | Tasa de renovación y continuidad de clientes que eligen seguir con AZ. |
| **95%** | Reducción de errores administrativos internos desde que automatizamos la gestión de personal y liquidaciones. |
| **QR + GPS** | Cada turno de limpieza queda registrado — sabés quién estuvo, cuándo entró y cuándo salió. |

*(Si más adelante consiguen 2-3 comentarios reales de administradores de consorcio o de alguna clínica, se puede sumar una franja chica de cita textual debajo — sin armar una sección de reseñas completa.)*

---

## 3. Problem Statement

**Fórmula aplicada:** Mostrar el problema + hacer sentir su costo real.

> ## Contratás una empresa de limpieza y terminás gestionándola vos.
>
> El personal falta y te enterás por un vecino que se quejó. No sabés si limpiaron los baños del segundo piso o solo pasaron por el hall. Cambiás de proveedor cada seis meses porque el anterior "dejó de responder". Y en una clínica, eso no es solo una queja — es un problema de bioseguridad.

**Sub-bloque (filtro de nicho — "¿es para mí?"):**
- Sos administrador de consorcio y no tenés forma de comprobar si el turno se cumplió.
- Gestionás una oficina y la limpieza depende de que "alguien se acuerde" de avisar si faltó personal.
- Dirigís una clínica y necesitás protocolos de higiene documentados, no una promesa verbal.

---

## 4. Solution / Value

**Título de sección:** `Un servicio con el mismo nivel de control que exigís vos`

Formato: **[Característica] + [Beneficio concreto] + [visual de soporte]**, 6 features:

1. **Control de asistencia por QR y GPS**
   Cada ingreso y salida del personal queda registrado con ubicación y horario. Vos podés pedir el reporte cuando quieras.
   *(Visual: captura del sistema ServiceTrack mostrando un registro de turno)*

2. **Personal propio, no tercerizado**
   El equipo que limpia tu edificio es parte de AZ, no una subcontratación de último momento.
   *(Visual: foto real del equipo)*

3. **Protocolos adaptados por tipo de espacio**
   Consorcio, oficina y clínica no se limpian igual — ajustamos frecuencia y protocolo según el tipo de espacio y sus normas.
   *(Visual: checklist visual por rubro)*

4. **Un solo canal de contacto, sin vueltas**
   Todo arranca por mail. Sin colas de espera telefónica ni "te paso con otro sector".
   *(Visual: ícono de mail / captura del formulario)*

5. **Reportes de gestión, no promesas verbales**
   Podés pedir en cualquier momento el detalle de turnos cumplidos, con horarios reales.
   *(Visual: mockup de reporte)*

6. **Seguimiento post-contratación**
   Una vez que empezamos, seguimos ajustando frecuencia y protocolo según cómo evoluciona el espacio — no es "firmamos y desaparecemos".
   *(Visual: ícono de seguimiento/calendario)*

---

## 5. How It Works

**Título de sección:** `Así arrancamos, en 3 pasos`

1. **Nos escribís por mail** — Contanos qué tipo de espacio es (consorcio, oficina o clínica) y qué necesitás.
2. **Evaluamos tu caso** — Si encaja con lo que hacemos, te contactamos por WhatsApp para coordinar una visita.
3. **Empezamos con seguimiento desde el primer turno** — Con control de asistencia desde el día uno.

**CTA debajo:** `Escribinos a [email de contacto] →`

*(Nota: reemplazar `[email de contacto]` por la casilla real, ej. contacto@azserviciosdelimpieza.com — el dominio azserviciosdelimpieza.com es el sitio, no necesariamente la dirección de mail completa.)*

---

## 6. FAQ's

**¿Atienden hogares particulares?**
No. Trabajamos exclusivamente con consorcios, oficinas y clínicas.

**¿Cómo sé si el personal cumplió el turno?**
Cada turno se registra con QR y GPS. Podés pedir el reporte de asistencia cuando quieras.

**¿Puedo llamarlos por teléfono?**
El contacto inicial es por mail. Una vez que evaluamos tu caso, seguimos la conversación por WhatsApp para coordinar todo más rápido.

**¿El personal es de ustedes o tercerizado?**
Es equipo propio de AZ.

**¿Trabajan con protocolos específicos para clínicas?**
Sí, ajustamos frecuencia y protocolo de limpieza según el tipo de espacio y sus requisitos de higiene.

**¿Qué pasa si no estoy conforme con el servicio?**
Hacemos seguimiento activo después de empezar — ajustamos frecuencia y protocolo según cómo va funcionando, no es un contrato cerrado sin revisión.

---

## 7. Final CTA & Footer

**Fórmula aplicada:** Titular orientado a beneficio + CTA + footer completo.

> ## Dejá de gestionar vos la limpieza de tu edificio, oficina o clínica.
> ### Escribinos y evaluamos tu caso — si encaja, seguimos por WhatsApp.

**CTA:** `Pedí tu diagnóstico por mail →`

**Footer — enlaces sugeridos:**
- Servicios (Consorcios / Oficinas / Clínicas)
- Cómo trabajamos
- Contacto (mail)
- **Acceso institucional** → botón separado, lleva a `azserviciosdelimpieza.com/login` (login del ERP interno, no es parte del funnel comercial)
- Ubicación / zona de cobertura

**Formulario de contacto (fricción cero):** Nombre, Institución/Edificio, Tipo de espacio (consorcio / oficina / clínica), Email. Sin campo de teléfono en el primer contacto — eso se pide recién si el prospecto califica y pasa a WhatsApp.

**Nota sobre el botón institucional en el navbar:** debería estar visualmente separado del CTA comercial ("Pedí tu diagnóstico") — un link más discreto, tipo texto o botón ghost, con label "Acceso clientes" o "Portal AZ", para que no compita con la conversión principal ni genere confusión sobre qué es cada cosa.

---

## Pendientes para cerrar el copy al 100%

- [ ] Confirmar la casilla de mail real para reemplazar `[email de contacto]`.
- [x] Sumar el número real de edificios/oficinas/clínicas atendidas (confirmado: 50+ edificios, 98% renovación).
- [ ] Definir el label exacto del botón institucional (Acceso clientes / Portal AZ / Ingresar) y su estilo visual respecto al CTA comercial.
- [ ] Confirmar si "clínicas" requiere mención de alguna norma o protocolo específico que ya cumplan (sumaría mucho como diferenciador concreto).

---

## Notas de implementación (ajenas al copy — contexto del proyecto)

- Stack: Astro 7 + Tailwind v4 (CSS-first `@theme` en `src/styles/global.css`) + TypeScript strict + Content Collections (`src/content.config.ts`, colección `site` en `src/content/site/site.json`).
- Tokens de color en `src/styles/global.css`: `--bg-claro` (#EFEAF9), `--violeta-osc` (#5B4E8A), `--lila-medio` (#8B7BC7), `--lila-suave` (#C4B8E8), `--lila-pastel` (#E9E2F7), `--indigo-texto` (#2B2640), `--texto-secundario` (#6B6580), `--burbuja-blanca`, `--burbuja-gris`, y exclusivo para CTA: `--turq-cta` (#3FA88F) / `--turq-cta-hover` (#8FD4C2).
- Componentes UI: `src/components/ui/Bubble.astro`, `src/components/ui/Button.astro` y `src/components/ui/CtaRampButton.astro`.
- Navbar en `src/components/Navbar.astro` (estilo Freshify: logo izq, cápsula central sólida con links + íconos, contacto mail a la derecha; CTA comercial vive en el hero, no en el navbar).
- Regla de oro: NO inventar métricas, testimonios, datos de clientes ni contenido factual. Todo lo no confirmado se flaggea (usar los `[completar]` / pendientes de arriba).
- AZ no usa teléfono como contacto inicial — siempre mail; WhatsApp solo post-calificación.
- `referencias/` está en `.gitignore` (capturas locales de referencia visual, no van al repo).
