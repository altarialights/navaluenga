# Inventario de imágenes y tipografías

Consulta de procedencias: 30-09-2026. Metadatos originales de Commons: `research/commons-assets.json`. Los permisos proceden de las licencias de los autores, no de la publicación por una institución.

| Archivo | Función | Autor y procedencia | Licencia / condición |
| --- | --- | --- | --- |
| `src/assets/hero-conceptual.png` | Hero inmersivo | Generada con image_gen para este proyecto | Paisaje conceptual provisional. No documental. Aviso visible en el hero y explicación en `/creditos/#hero`. No se genera patrimonio. |
| `src/assets/hero-foliage.webp` | Dos capas de vegetación en primer plano | Generada con Imagegen el 20-10-2026; prompt en `research/hero-foliage-prompt.txt` | Recorte conceptual de roble con alfa real. No documental; identificado junto al paisaje y en créditos. |
| `src/assets/valle.jpg` | Paisaje y caminos | David Perez (DPC), [Navaluenga 01 by-dpc](https://commons.wikimedia.org/wiki/File:Navaluenga_01_by-dpc.jpg), 2012 | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| `src/assets/pueblo.jpg` | Vida local y planificación | David Perez (DPC), [Navaluenga 02 by-dpc](https://commons.wikimedia.org/wiki/File:Navaluenga_02_by-dpc.jpg), 2012 | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| `src/assets/alberche.jpg` | Agua y descanso | chispita 666, [Alberche Navaluenga](https://commons.wikimedia.org/wiki/File:Alberche_Navaluenga.jpg), 2007 | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |
| `src/assets/puente.jpg` | Patrimonio y metadatos sociales | Miguel Angel Masegosa Martínez, [P1080386-24x15](https://commons.wikimedia.org/wiki/File:P1080386-24x15_(27241774117).jpg) | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |

Adaptaciones documentales: encuadre CSS, conversión a AVIF/WebP/JPEG y compresión mediante Astro/Sharp. Blanco y negro del puente en la portada mediante CSS, identificado como tratamiento contemporáneo. No retoque generativo de fotografías documentales. Atribuciones accesibles desde el pie de todas las páginas en `/creditos/`.

Hero: recorte vertical específico mediante Astro para móvil, fuentes AVIF/WebP y JPEG de respaldo. Título, mensaje y controles en HTML. No se han usado las capturas del encargo como fondo.

## Fuentes
Anton 400 (display), DM Sans 400/500 (interfaz), Fraunces estática 400/600 (editorial). Se usan instancias estáticas tras detectar una diferencia importante de peso en el motor WebKit disponible con la fuente variable. Subconjunto latino con caracteres españoles, archivos locales WOFF2. Paquetes Fontsource fijados en pnpm-lock.yaml, licencias OFL-1.1 en `public/licenses/`. No llamadas a Google Fonts en tiempo de navegación.

## Pendiente de publicación
Encargar/licenciar una fotografía real para sustituir el hero conceptual manteniendo composición y luz. Las fotografías documentales disponibles son válidas para la previsualización; una sesión local reciente puede mejorar la continuidad de luz y mostrar gastronomía y actividad.

## Ampliación del 20-10-2026

No se generaron imágenes ni se descargaron originales nuevos: se reutilizan `pueblo.jpg` en Vivir, Agenda y Directorio y `alberche.jpg` como contexto de Instalaciones. Los pies explican que son fotografías del entorno, no de eventos, negocios o instalaciones de ejemplo. Se conserva `Photo.astro`, con AVIF/WebP/JPEG, `srcset`, dimensiones, carga diferida y prioridad alta en las imágenes principales de Agenda y Vivir.

La compilación produce/reutiliza 71 variantes optimizadas para el conjunto de la web. No hay imágenes remotas de stock ni duplicados añadidos. Faltan fotografías propias autorizadas de instalaciones, eventos y establecimientos; no se atribuye una imagen genérica a una entidad concreta.

El mapa es un iframe de OpenStreetMap cargado por acción del visitante, con atribución y enlace de licencia. Sus marcadores tienen coordenadas ficticias expresamente identificadas; no son datos geográficos verificados.

## Refinamiento posterior de la home · 20-10-2026

Se añade únicamente el follaje generado del hero. Original PNG 1536 × 1024 con alfa, conservado en la salida local de Imagegen; derivado WebP 1280 × 853 de 222.862 bytes en el proyecto, con prompt y procedencia incorporados en EXIF. Astro produce tres variantes WebP (480/800/1280 px; 43.576/95.742/211.472 bytes); la compilación total pasa a 74 variantes. Dos capas decorativas reutilizan el mismo recurso con distintos encuadres, `alt=""`, `aria-hidden`, sin eventos de puntero y prioridad baja. El fondo principal mantiene prioridad alta.

Los nuevos bloques de vida local y comercio reutilizan fotografías documentales con sus créditos originales, sin atribuirlas a un negocio o evento concreto. No se añade ninguna dependencia de imágenes remotas.
