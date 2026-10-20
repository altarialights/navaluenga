# Verificación de la entrega

30 de septiembre de 2026. Evidencia de la compilación final local, después de las correcciones.

## Resultado

- `pnpm check`: 0 errores, 0 advertencias y 0 sugerencias.
- `pnpm build`: 16 páginas estáticas, sitemap, robots y 71 variantes de imágenes generadas correctamente.
- `pnpm test:e2e`: 32 pruebas aprobadas, sin fallos, en Chromium y WebKit.
- Inspección ampliada: 10 páginas interiores a 390 y 1440 px, con texto normal y ampliado al 200 %, sin desbordamiento de página.
- Revisión independiente Impeccable: `ship` al alcance de los cuatro arreglos puntuados, todos resueltos. Informes en `research/finish-review.md` y `research/finish-verdict.md`.

## Qué se comprobó

Chromium y WebKit mediante Playwright, con ventanas de 320×740, 360×800, 390×844, 430×932, 768×1024, 1440×960, 1920×1080, 844×390 y 1024×600. Se comprobaron H1, encuadre y límites del título, fotos cargadas, ausencia de desbordamiento horizontal, consola y respuestas sin errores, y capturas completas.

Recorridos: menú móvil con teclado, Escape y retorno de foco; enlace de salto; acceso directo a vecinos; pestañas con flechas, Home/End, clics repetidos y enlaces profundos; filtros y búsqueda sin acentos; estado vacío, reinicio y botón Atrás; categorías con URL; navegación y contenido sin JavaScript; preferencia de movimiento reducido; texto ampliado al 200 %.

Las 15 rutas de contenido, sus enlaces internos y anclas, descripciones, H1 y noindex se verificaron mediante navegador/HTTP. También robots y sitemap. El directorio utiliza destinos y teléfonos publicados por las fuentes municipales documentadas en CONTENT.md; no se hicieron llamadas telefónicas ni envíos de sugerencias.

Se comprobaron los 14 destinos institucionales únicos publicados: 13 respondieron HTTP 200 (Turismo de Ávila redirige a `/web/inicio/`). La sede electrónica no completaba las redirecciones con fetch; en Chromium abrió correctamente con HTTP 200, URL final `/info.0` y título «Sede Electrónica de Navaluenga - Inicio». Se contrastó su dominio con los enlaces de la página municipal. Evidencia en `research/external-links.json` y `research/sede-verification.json`.

Axe no detectó infracciones de sus reglas WCAG A/AA 2.0, 2.1 y 2.2 en inicio, empresas, participación, servicios y río, en ambos motores. Esta comprobación automática cubre una parte de la accesibilidad: no constituye certificación WCAG ni sustituye una evaluación con usuarios y tecnologías de asistencia.

Las referencias visuales se contrastaron en el hilo principal. El revisor independiente examinó las capturas renderizadas, el código, el encargo escrito y DESIGN.md; los adjuntos originales inline no eran accesibles en su contexto. Se preservaron el hero aprobado, la paleta exacta, el río editorial, las experiencias verdes y la composición documental del puente.

## Problemas corregidos

- Desbordamientos de tabs, rejillas, palabras largas y contactos con texto ampliado.
- Foco explícito en el enlace de salto para el WebKit disponible.
- Espacios perdidos al ocultar saltos de línea en móvil y tablet.
- Compresión del botón Buscar, que partía su etiqueta.
- Pesos demasiado gruesos de la fuente variable en WebKit: sustituida por Fraunces estática local 400/600, manteniendo familia e intención editorial.
- Una etiqueta redundante del directorio; las etiquetas de home que pertenecen a las referencias se conservan.
- Peso de imágenes y prioridad de descarga: hero móvil específico, fotografías inferiores diferidas y baja prioridad fuera del hero.
- Lectura coherente de SITE_URL desde `.env` o entorno para la configuración de sitemap y metadatos.

El detector de Impeccable señaló el uso frecuente de Fraunces. Se conserva conscientemente: responde a la serif editorial del encargo. No se sustituyó la dirección aprobada por preferencias genéricas de la skill.

## Rendimiento de laboratorio

Medido con `scripts/measure.mjs` sobre la producción local, contexto nuevo de Chromium, 390×844 y DPR 2. La prueba limitada utiliza 1,6 Mbps de bajada, 150 ms de latencia y CPU 4×. Valores de una ejecución, no percentiles estadísticos.

| Medición | Sin limitar | Red y CPU limitadas |
| --- | ---: | ---: |
| LCP | 68 ms | 2.028 ms |
| CLS observado | 0 | 0,0214 |
| Duraciones de eventos de interacción capturados | 16 ms | 16 ms |

La medición anterior a la optimización daba 4.312 ms de LCP con las mismas limitaciones. El hero móvil AVIF pasó de aproximadamente 285 KB a 109 KB transferidos. JavaScript inline inicial de la home: 2.659 bytes, 1.089 bytes con gzip, sin framework de hidratación.

Los eventos observados corresponden a abrir/cerrar menú y cambiar experiencias. Su duración **no se presenta como INP certificado**. Los eventos inferiores al umbral del observador no aparecen; no hay datos de usuarios reales, CrUX ni monitorización de campo. El objetivo de INP ≤200 ms y los percentiles reales de LCP/CLS deberán comprobarse tras publicar en el alojamiento definitivo. La latencia de servidor, CDN y dispositivos reales puede cambiar el resultado.

## Alcance y pendientes

Se han usado motores de navegador en Windows y emulación de viewport. No se probó en un iPhone, Android ni Safari físico, ni con VoiceOver/TalkBack. El navegador integrado de la interfaz no estaba disponible; la revisión visual se hizo con capturas de los navegadores de Playwright y la previsualización local permanece servida en el puerto 4322.

Quedan las decisiones de publicación documentadas en README.md: dominio, titular e información legal del alojamiento, revisión de datos y sustitución o aprobación del paisaje conceptual del hero. El proyecto está marcado como previsualización y bloqueado para indexación. El canal municipal de participación está enlazado y no requiere una integración ficticia.

## Evidencia reproducible

`research/test-results.json`, `research/secondary-pages.json`, `research/performance.json`, `research/impeccable-audit.json`, las verificaciones de destinos institucionales y los dos informes de revisión. Capturas en `.impeccable/review/` (excluidas de Git por tamaño). Las instrucciones para repetir las comprobaciones están en README.md.
## Validación del refinamiento de portada · 20-10-2026

Astro check sin errores/advertencias/hints, build de 41 páginas y suite completa de 46/46 pruebas en Chromium y WebKit. Después del ajuste final de espacios y chevrons: build y 4/4 pruebas específicas de home. Las comprobaciones existentes cubren también las rutas interiores y la navegación sin JavaScript.

Revisión visual en dos pases, a 390, 768 y 1440 px, con menús abiertos y cada sección capturada por separado. Sin desbordamiento normal ni al duplicar el tamaño del texto (`research/home-responsive.json`). El nuevo recurso de follaje se sirve en WebP responsive con alfa; las animaciones de entrada respetan movimiento reducido.

Medición nueva en `research/home-performance.json`: LCP 148 ms sin limitar y 2.008 ms a 1,6 Mbps/150 ms/CPU 4×; CLS 0,0000055. Duraciones observadas de interacción 16–32 ms, no INP certificado. JavaScript inline inicial: 3.358 bytes, 1.266 con gzip. Valores de una ejecución local; no resultados de campo. Esta medición sustituye los valores de la portada anterior solo para el diseño actual.

Contrato y evidencia completa en `HOME-REFRESH.md`; capturas en `.impeccable/review/home-refresh/`. Detector: 60 avisos orientativos de tokens, sin hallazgos mecánicos. Revisión independiente en `research/home-finish-review.md`.

Corrección posterior de revisión: regla específica para el hover del CTA secundario, evitando texto bosque sobre el fondo bosque. Build y cuatro pruebas de home pasaron de nuevo, con una aserción explícita de contraste de colores. Capturas finales de hover a 390/1440 px y estado táctil, además de la matriz completa repetida; resultados en `research/home-hover.json`. Documentación de diseño reconciliada con los cambios autorizados.

## Validación de la ampliación anterior · 20-10-2026

La ampliación municipal está documentada en `EXTENSION.md`. Compilación estática correcta: 41 páginas; Astro/TypeScript sin errores ni advertencias. Playwright: 42/42 pruebas en Chromium y WebKit, más 10/10 municipales tras los ajustes visuales. Se mantienen las pruebas originales de portada, anclas, experiencias, directorio y navegación sin JavaScript.

Se añadieron comprobaciones de filtros y estados vacíos, formulario de incidencias con validación y descarga, agenda y exportación ICS, reserva con revisión/modificación, encuesta de ejemplo, menú por teclado, enlaces y semántica. Auditoría axe en 15 rutas municipales, en móvil de 320 px y escritorio de 1440 px, sin infracciones en las reglas evaluadas. No es certificación WCAG.

Capturas completas de 13 páginas a 390 y 1440 px, comprobadas también con texto al 200 %. Sin desbordamientos en `research/extension-responsive.json`. La revisión independiente detectó y dio por resueltos dos defectos: números partidos en móvil y casilla de confirmación demasiado grande. Informe: `research/extension-finish-review.md`.

Limitación de entorno: OpenStreetMap devuelve `net::ERR_NETWORK_ACCESS_DENIED` desde el navegador de pruebas. Se comprobó la URL de integración, la selección y los filtros locales, pero no se verificó la cartografía externa operativa. No hay envíos, reservas, pagos o encuestas reales. No hay tarea de lint configurada ni nuevas dependencias.

Los apartados siguientes conservan la evidencia de la versión original y sus fechas; no deben confundirse con resultados de la ampliación.

