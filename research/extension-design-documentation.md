# Comprobación documental de la ampliación municipal

20 de octubre de 2026. Pase de documenter: ampliación ordinaria dentro de la identidad existente, no rediseño.

## Resultado y alcance

Se preservan `DESIGN.md` y `.impeccable/design.json` sin modificaciones. La ampliación hereda bosque, marfil y solar; Fraunces editorial, DM Sans funcional y Anton reservado al nombre de la portada. No hay una decisión de sustituir el sistema que justifique regenerar sus documentos. Se añade únicamente una nota de capacidades y límites a `PRODUCT.md`.

Evidencia leída: contrato e inventario de `EXTENSION.md`; `PRODUCT.md`; `DESIGN.md`; esquema, metadatos y ejemplos de `.impeccable/design.json`; `src/styles/global.css` y `src/styles/municipal.css`; `Header.astro`, `Footer.astro`, `MunicipalShell.astro`; portada y muestras de trámites, sede, incidencias, agenda y participación. Procedimiento consultado: `reference/document.md` y `agents/impeccable_documenter.toml` de Impeccable.

Capturas inspeccionadas directamente en `.impeccable/review/extension/`: `390-tramites.png`, `390-incidencias.png`, `1440-sede.png`, `1440-agenda.png` y `1440-participa.png`. Constituyen una muestra visual, no una revisión de todos los estados.

## Continuidad comprobada

- Paleta base: bosque `#123728`, marfil `#f6f1e5`, solar `#f1cd35`; contraste por superficies y separadores, sin proliferación de tarjetas elevadas.
- Tipografía: familias heredadas y archivos locales; titulares municipales Fraunces 600, lectura y controles DM Sans. La portada conserva Anton y los componentes Hero, River, Experiences, Heritage y Visit, en ese orden.
- Composición: trámites usa búsqueda y filas; sede emplea bosque y accesos horizontales; incidencias presenta pasos y formulario; agenda combina fotografía contextual y listado; participación utiliza una superficie solar. No se impone una plantilla única.
- Forma: controles rectos, campos con etiqueta, separadores finos y acciones solares; se conserva el lenguaje de las reglas «Paleta Aprobada», «Hero Inmediato» y «Superficies Abiertas».
- Comportamiento documentado en código: estados de navegación, Escape y devolución de foco; variantes móviles; movimiento adicional condicionado a `prefers-reduced-motion: no-preference`. Las demostraciones declaran su carácter local.

## Diferencias registradas, no canonizadas

Los documentos heredados describen la versión anterior: navegación móvil a 899 px, pie compacto y búsqueda como único campo propio. Esta ampliación añade navegación a 1199 px, pie con cuatro grupos, accesos móviles persistentes y formularios. Son diferencias de implementación de esta entrega, registradas aquí sin convertirlas en una nueva identidad ni reescribir retrospectivamente el sistema.

Los tamaños específicos de titulares, el contenedor municipal de 1600 px, el papel local `#fffdf7` y el error `#8c291e` son decisiones de estas superficies. La detección de valores nuevos es orientativa; no exige promover cada valor a token global. Los pesos intermedios de Fraunces ya estaban documentados como solicitudes CSS resueltas por fuentes estáticas 400/600: no se modifican ni se presentan como nuevas fuentes.

El glifo de flecha del enlace oficial en el nuevo pie se registra como excepción local, no como sustituto normativo de los iconos SVG. Cualquier divergencia anterior no demostrable sin una versión histórica queda sin atribuir; no se ha reparado deriva ajena al encargo.

## Límites de esta comprobación

No se ha editado código de aplicación ni ejecutado otra batería de pruebas. El coordinador comunica compilación de 41 páginas, `astro check` sin errores y 42 pruebas aprobadas; la revisión acotada posterior de las correcciones y las comprobaciones municipales posteriores al CSS deben consultarse en su informe final. En código se observan las correcciones que impiden partir numerales y dimensionan el checkbox; las capturas de este pase no certifican todos los pasos del formulario.

Sin backend, los recorridos son demostrativos. No se convierte la ausencia de errores automáticos en una certificación completa de accesibilidad ni de exactitud administrativa.

SHA-256 de los documentos preservados durante este pase:

- `DESIGN.md`: `7CBBD73FB358FA7983ADC913817C664E2B244ABCF1809C5FED53082877AF09DD`
- `.impeccable/design.json`: `0CF4F45F4564E1A2EBB3E42E12A936F98CF96EBD4F430D962484809D4FE2D394`
