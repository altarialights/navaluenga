# Home · actualización editorial

## Dirección aprobada por el encargo

Refinar el header compartido y el dock móvil, reconstruir la composición del hero sin reemplazar su paisaje, e incorporar nuevos bloques dentro de la index. Se conservan bosque, marfil, solar, Anton/Fraunces/DM Sans, rutas y contenido editorial. El título se sitúa cerca del centro del viewport; ramas fotográficas conceptuales transparentes introducen profundidad en los bordes, sin convertir la escena en una fotografía documental.

Modo Experience/Persuade en hero y turismo; Operate en accesos ciudadanos; Read en información práctica y cierre. Header superpuesto en la home y sólido al desplazarse. Dock móvil claro y flotante, con iconos, etiquetas y estado activo. Sin parallax continuo: entrada breve del título y ramas, texto siempre visible, movimiento desactivado con prefers-reduced-motion.

## Ritmo de portada

Hero inmersivo → servicios ciudadanos en marfil → río editorial → experiencias en bosque → vivir aquí con fotografía y listado → patrimonio → agenda tipográfica → visita → comercio en bosque → participación solar → cierre institucional marfil.

Las composiciones turísticas existentes se mantienen. El ancla `#vivir` pasa al nuevo bloque de información práctica. Los eventos siguen siendo ejemplos explícitos; no se inventan citas ni servicios activos.

## Assets

Generación mediante la herramienta integrada Imagegen de un recorte fotográfico de roble con transparencia real. Recurso integrado: `src/assets/hero-foliage.webp` (1280 × 853 px, 222.862 bytes). El mismo recurso se reutiliza con dos encuadres asimétricos, delante del título y detrás de los controles. Astro genera variantes de 480, 800 y 1280 px, de aproximadamente 42, 93 y 206 KiB. Prioridad baja frente al paisaje principal y dimensiones declaradas.

Prompt exacto en `research/hero-foliage-prompt.txt`, también incorporado en los metadatos del recurso. Original de Imagegen: `C:/Users/marti/.codex/generated_images/01a15882-77eb-7bf1-b257-fb4d55778e76/exec-b7c4e99b-5709-4358-b4e4-a8883c462757.png`. La transparencia se preserva al optimizar. Son hojas decorativas conceptuales, no fotografía documental de la localidad. Aviso visible en el hero y explicación en `/creditos/#hero`.

## Validación · 20-10-2026

- Astro check: 0 errores, advertencias o hints. Build: 41 páginas, 74 variantes de imagen.
- Suite completa: 46/46 pruebas en Chromium y WebKit. Después de ajustar dos espacios y los chevrons, se recompiló y se repitieron las cuatro pruebas de home: 4/4.
- Dos pases visuales en 390 × 844, 768 × 960 y 1440 × 960, con imágenes y fuentes cargadas; capturas completas, viewport, secciones y menús en `.impeccable/review/home-refresh/`. Sin desbordamiento normal ni con texto al 200 %, según `research/home-responsive.json`.
- Teclado, Escape, recuperación de foco, menú, enlaces, estado activo del dock, navegación sin JavaScript, movimiento reducido y axe incluidos en las comprobaciones. No equivale a certificación de accesibilidad ni pruebas en dispositivos físicos.
- Laboratorio local Chromium, 390 × 844 DPR 2: LCP 148 ms sin limitar y 2.008 ms a 1,6 Mbps/150 ms/CPU 4×; CLS 0,0000055. Una ejecución, sin datos de campo. Evidencia: `research/home-performance.json`.
- Detector ejecutado una vez: 60 avisos orientativos sobre tokens de color, escala y radios del nuevo diseño; sin hallazgos mecánicos. Evidencia: `research/home-design-audit.json`.

Revisión independiente y documentación del sistema: `research/home-finish-review.md` y `research/home-design-documentation.md`. No se ha desplegado el proyecto.

El cierre independiente señaló la documentación antigua y un conflicto de especificidad en el hover del CTA secundario. Se actualizó el sistema documentado y se añadió una regla local que conserva fondo marfil/texto bosque al pasar el puntero. Build y cuatro pruebas de home repetidos correctamente; se añadió una aserción de ambos colores. Capturas de 390/1440 px con puntero y estado táctil sin hover, con estilos computados en `research/home-hover.json`; la matriz completa se recapturó después de la corrección.
