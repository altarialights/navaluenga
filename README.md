# Navaluenga

## Portada refinada · octubre de 2026

Header superpuesto con cambio de fondo al desplazarse, menú desplegable marfil, hero centrado con follaje generado en primer plano y dock móvil de cuatro accesos con iconos. La index añade servicios ciudadanos, Vivir aquí, agenda destacada, comercio local y cierre institucional, además de renovar participación y conservar las composiciones turísticas. Decisiones, recursos y validación en [`HOME-REFRESH.md`](HOME-REFRESH.md).

Con la previsualización abierta, `node scripts/review-home.mjs` reproduce las capturas de móvil, tablet y escritorio. `node scripts/measure.mjs research/home-performance.json` registra el rendimiento de laboratorio sin sustituir la medición histórica.

## Ampliación municipal · octubre de 2026

La demo incorpora trámites y guías, sede electrónica, incidencias guiadas, agenda con calendario, instalaciones y reserva de ejemplo, información para vecinos, avisos, mapa, ayudas y búsqueda general. Se amplían participación, contacto y directorio manteniendo las cinco composiciones originales de portada.

Inventario completo de rutas, funcionalidades, límites y validación en [`EXTENSION.md`](EXTENSION.md). Datos editables separados de las páginas en `src/data/municipal.ts`; no hay CMS, backend, autenticación ni envíos reales. Los contenidos ficticios están identificados como demostración.

En el entorno Windows de esta sesión, el ejecutable global de pnpm falla por permisos al resolver el perfil del usuario. Se verificaron los mismos binarios instalados con:

```sh
node node_modules/astro/bin/astro.mjs check
node node_modules/astro/bin/astro.mjs build
node node_modules/astro/bin/astro.mjs preview --host 127.0.0.1 --port 4322
node node_modules/@playwright/test/cli.js test
node scripts/review-extension.mjs
```

No se instalaron dependencias nuevas. La configuración de Playwright invoca el binario local de Astro directamente. No se ha desplegado ni publicado el proyecto.

Web editorial y práctica construida con Astro, Tailwind CSS y TypeScript estricto. Renderizado estático; fuentes e imágenes locales. No necesita servidor de aplicación, CMS ni base de datos.

## Ejecutar

Requisitos: Node.js ≥22.12 y pnpm 10.22.0. Desde esta carpeta:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Desarrollo: http://127.0.0.1:4321/. Para comprobar y generar producción:

```sh
pnpm check
pnpm build
pnpm preview --port 4322
```

La carpeta publicable es `dist/`. Previsualización: http://127.0.0.1:4322/.

## Pruebas reproducibles

```sh
pnpm exec playwright install chromium webkit
pnpm test:e2e
```

Ejecutar `pnpm build` antes de las pruebas. Playwright arranca la previsualización automáticamente si el puerto 4322 está libre. Si hay una previsualización abierta, utiliza ese proceso. Comprueba que sirva la última compilación.

Con la previsualización abierta:

```sh
node scripts/measure.mjs
node scripts/review-pages.mjs
```

Resultados en `research/`; capturas de revisión en `.impeccable/review/`. Consulta `QA.md` para alcance y límites de las mediciones.

## Estructura

- `src/components/`: cabecera, hero y secciones independientes; fotografía e iconos compartidos.
- `src/layouts/`: metadatos, estructura común y plantilla editorial.
- `src/pages/`: inicio, río, experiencias, historia, visita, servicios, participación, directorio y páginas informativas.
- `src/data/`: negocios, experiencias, teléfonos y destinos oficiales tipados.
- `src/styles/global.css`: tokens, composición, estados, responsive y movimiento.
- `src/assets/`: originales con procedencia incorporada. Astro genera AVIF, WebP y JPEG responsive.
- `public/licenses/`: licencias de las fuentes locales.
- `tests/`: pruebas de navegación, accesibilidad automática, responsive y mejora progresiva.

El directorio contiene 14 negocios publicados en fuentes municipales, ordenados alfabéticamente, sin valoraciones ni rankings. Sus categorías tienen URL propia y funcionan sin JavaScript. La búsqueda se ejecuta en el navegador y conserva su estado en la URL.

Las experiencias cambian realmente foto, propuestas y destinos. Sin JavaScript se muestran todos los bloques. El menú conserva acceso al contenido y foco visible. Las sugerencias abren el canal oficial; no hay envío simulado.

## Contenido y diseño

`PRODUCT.md` conserva objetivos y recorridos. `DESIGN.md` y `.impeccable/design.json` documentan el sistema implementado. `CONTENT.md` registra las fuentes y las decisiones editoriales. `ASSETS.md` detalla autores, licencias y limitaciones de las fotografías.

El hero mantiene el concepto aprobado: NAVALUENGA como texto HTML, paisaje soleado, serif editorial y dos acciones centradas. Su imagen generada está identificada como conceptual. El patrimonio utiliza fotografía documental y la datación municipal del siglo XVI.

## Skills utilizadas

Impeccable y Web Design Guidelines están en `.agents/skills/`. Se leyeron y aplicaron durante esta sesión: `adapt` a responsive y navegación; `animate` a estados y transiciones; `audit` a detección y revisión independiente; `polish` a tipografía, encuadres, foco y espaciado. Las guías de Vercel complementaron la revisión semántica y de interacción. Imagegen produjo el paisaje conceptual del hero y, en el refinamiento posterior, el follaje de primer plano.

Impeccable v4.3.1 se instaló con su CLI original y se comprobó su acceso. El instalador eligió una raíz superior (`Desktop/.agents/skills`); se copió también al proyecto sin sobrescribir skills previas. Web Design Guidelines se instaló de forma selectiva para Codex. No se instaló el catálogo completo de Vercel ni la alternativa frontend-design.

Los archivos instalados se leyeron directamente: instalar no equivale a que la sesión los descubra automáticamente. Para descubrimiento automático en otra sesión, recarga Codex y abre este proyecto. No se aceptaron ni activaron hooks de confianza. Las skills son herramientas de desarrollo y no se incluyen en el JavaScript del visitante.

## Preparar una publicación

La configuración inicial es una previsualización `noindex, nofollow`, con `robots.txt` bloqueado. No se ha inventado un dominio canónico. El sitemap de desarrollo usa localhost.

Cuando exista un dominio confirmado, copia `.env.example` a `.env`, configura `SITE_URL` como URL HTTPS y cambia `PUBLIC_INDEXABLE=true` solo al publicar. Reconstruye con `pnpm build`; canonical, metadatos, sitemap y robots se generan en esa compilación. Las variables de entorno del alojamiento también sirven.

Pendientes reales: sustituir o aprobar el hero conceptual; confirmar dominio y titularidad editorial; completar información legal con el responsable del alojamiento; volver a validar directorio y teléfonos antes de publicar. El buzón municipal ya permite participar. Un formulario propio requeriría definir un destino autorizado y su tratamiento de datos.
