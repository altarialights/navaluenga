---
name: "Navaluenga"
description: "Naturaleza cercana, sol, agua, identidad local y calidad editorial."
colors:
  forest: "#123728"
  deep: "#193c2e"
  sun: "#f1cd35"
  ivory: "#f6f1e5"
  muted: "#526052"
  muted-on-forest: "#d2ddce"
  line: "#919784"
  sun-hover: "#ffdd50"
  ivory-hover: "#e9e2cf"
  hero-button: "#123728cc"
  home-paper: "#fffdf7"
  header-overlay: "#123728b8"
typography:
  brand-wordmark:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.7rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-.025em"
  brand-wordmark-mobile:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-.025em"
  brand-caption:
    fontFamily: "DM Sans, sans-serif"
    fontSize: ".57rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: ".18em"
  brand-caption-mobile:
    fontFamily: "DM Sans, sans-serif"
    fontSize: ".48rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: ".13em"
  display:
    fontFamily: "Anton, sans-serif"
    fontSize: "clamp(3.8rem, 19.2vw, 23rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-.025em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.7rem, 6.8vw, 8.2rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-.045em"
  hero-message:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.1rem, 3.3vw, 4rem)"
    fontWeight: 450
    lineHeight: 1.07
    letterSpacing: "-.03em"
  home-headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.7rem, 5.3vw, 6.2rem)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-.035em"
  home-hero-action:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: "normal"
  article-heading:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.8rem, 6.6vw, 6.8rem)"
    fontWeight: 550
    lineHeight: 1.03
    letterSpacing: "-.04em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.9rem, 3.2vw, 2.7rem)"
    fontWeight: 550
    lineHeight: 1.15
    letterSpacing: "-.025em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1.55
  caption:
    fontFamily: "DM Sans, sans-serif"
    fontSize: ".75rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  pill: "999px"
  navigation-panel: "14px"
  mobile-menu: "16px"
  mobile-dock: "20px"
spacing:
  xs: ".5rem"
  sm: ".75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section-sm: "3rem"
  section-md: "4rem"
  hero-copy: "1.8rem"
  gutter: "clamp(1.25rem, 3.55vw, 4.25rem)"
  section: "clamp(3rem, 5.4vw, 6.5rem)"
components:
  button-sun:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.forest}"
    typography: "{typography.label}"
    padding: ".8rem 1.4rem"
  button-sun-hover:
    backgroundColor: "{colors.sun-hover}"
    textColor: "{colors.forest}"
  home-hero-primary:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.forest}"
    rounded: "{rounded.pill}"
    typography: "{typography.home-hero-action}"
    padding: ".8rem 1.5rem"
  home-hero-secondary:
    backgroundColor: "{colors.hero-button}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    typography: "{typography.home-hero-action}"
    padding: ".8rem 1.5rem"
  home-hero-secondary-hover:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.forest}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.sun}"
    typography: "{typography.label}"
    padding: ".8rem 1.4rem"
  button-line-hover:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.forest}"
  directory-input:
    backgroundColor: "transparent"
    textColor: "{colors.forest}"
    typography: "{typography.body}"
    padding: ".5rem 0"
    width: "230px"
  directory-category:
    backgroundColor: "transparent"
    textColor: "{colors.forest}"
    rounded: "{rounded.pill}"
    padding: ".65rem 1rem"
  directory-category-current:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: ".65rem 1rem"
  navigation:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.ivory}"
  navigation-home:
    backgroundColor: "{colors.header-overlay}"
    textColor: "{colors.ivory}"
  quick-dock:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.forest}"
    rounded: "{rounded.mobile-dock}"
    padding: ".4rem"
  home-participation:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.forest}"
    typography: "{typography.home-headline}"
  experience-tab:
    textColor: "{colors.muted-on-forest}"
    padding: ".65rem 0 .8rem"
  experience-tab-selected:
    textColor: "{colors.sun}"
  business-row:
    textColor: "{colors.forest}"
    padding: "1.5rem 0"
---

# Design System: Navaluenga

## Overview

**Creative North Star: "Naturaleza cercana, sol, agua, identidad local y calidad editorial."**

La dirección procede del encargo y sus cinco referencias aprobadas: hero inmersivo; río editorial en marfil; experiencias con fotografía e índice sobre bosque; patrimonio documental en blanco y negro; visita, servicios y participación. Son composiciones de la portada, no plantillas obligatorias para todas las páginas.

La identidad cálida, natural y editorial se apoya en fotografías grandes, serif expresiva, asimetría y separadores finos. Una única cabecera permite llegar directamente a servicios; el pie es compacto. La actualización autorizada de octubre incorpora cabecera y dock compartidos, hero con follaje y nuevas composiciones de portada. Sus variantes locales se contrastan con `src/styles/home.css`, `src/styles/navigation.css` y capturas de `.impeccable/review/home-refresh/`; no sustituyen la tipografía ni las composiciones de páginas interiores. El frontmatter es normativo; el sidecar amplía estados, movimiento y ejemplos.

**Key Characteristics:**

- Bosque, marfil y solar, con fotografías de gran presencia.
- Display condensada para el nombre; serif editorial y sans funcional.
- Composiciones abiertas y asimétricas, listas con separadores y pie compacto.
- Contenido visible desde el inicio e interacciones con mejora progresiva.

## Colors

La paleta alterna marfil cálido y bosque oscuro; solar señala acciones y selección.

### Primary

- **Bosque** (`colors.forest`): texto principal sobre marfil; cabecera sólida, experiencias, comercio de portada y pie.
- **Solar** (`colors.sun`): acciones principales, selección, detalles puntuales y superficie de participación en la portada; `colors.sun-hover` es su respuesta al puntero.
- **Profundo** (`colors.deep`): token secundario aprobado y declarado en el tema. El artefacto actual no lo emplea como fondo adicional; no se deduce de él una nueva superficie.

### Neutral

- **Marfil** (`colors.ivory`): fondo de lectura y texto sobre bosque. `colors.ivory-hover` sirve al hover de listados y a notas prácticas.
- **Texto secundario** (`colors.muted`): introducciones, direcciones y notas sobre marfil. **Texto secundario sobre bosque** (`colors.muted-on-forest`): experiencias y pie.
- **Separador** (`colors.line`): divisiones sobre marfil. Las líneas sobre bosque conservan sus transparencias locales en CSS.
- **Papel de portada** (`colors.home-paper`): variante local casi blanca de Vivir aquí y Agenda; no reemplaza el marfil general. **Cabecera superpuesta** (`colors.header-overlay`): bosque translúcido al inicio de home; bosque sólido al desplazarse.
- **Bosque del botón del hero** (`colors.hero-button`): fondo oscuro translúcido para la acción secundaria sobre la imagen.

**The Paleta Aprobada Rule.** Mantener bosque, marfil y solar; no añadir fondos verde claro, menta o salvia.

## Typography

**Display Font:** Anton, sans-serif. **Editorial Font:** Fraunces, Georgia, serif. **Body Font:** DM Sans, sans-serif.

El contraste entre el nombre condensado y la serif expresiva pertenece a las referencias aprobadas. La sans sostiene navegación, datos, formularios y lectura práctica.

### Hierarchy

- **Marca de cabecera:** `typography.brand-wordmark` para Navaluenga en caja mixta y `typography.brand-caption` para «Ayuntamiento de» en mayúsculas. Hasta 599 px se aplican sus variantes `-mobile`. Son roles exclusivos del bloque institucional, no nuevas etiquetas editoriales.
- **Display:** `typography.display`, solo NAVALUENGA en el hero; mayúsculas, HTML seleccionable y una línea. Usa el mismo clamp en escritorio y tablet; hasta 599 px usa (19.2vw). Su interlineado actualizado solo afecta al hero de portada.
- **Headline:** `typography.headline`, base editorial. Cada sección ajusta su tamaño: río `clamp(3rem, 6.4vw, 7.8rem)`, experiencias `clamp(2.7rem, 5.7vw, 6.8rem)`, patrimonio `clamp(2.7rem, 7.05vw, 8.5rem)` y visita `clamp(2.8rem, 6.4vw, 7.6rem)`.
- **Hero message:** `typography.hero-message`, «Hay lugares que te sientan bien.». Hasta 899 px usa `clamp(2rem, 4.8vw, 3rem)` y hasta 599 px `clamp(1.9rem, 8.4vw, 2.8rem)`.
- **Home headline:** `typography.home-headline`, solo nuevos bloques de portada; énfasis Fraunces 400 sin cursiva. Servicios ajusta a `clamp(2rem, 3.3vw, 3.5rem)`, comercio a `clamp(2.8rem, 4.8vw, 5.8rem)` y cierre a `clamp(2.5rem, 4.2vw, 5rem)`. Hasta 599 px usan `clamp(2.4rem, 10.4vw, 3.7rem)`, salvo servicios (`clamp(2rem, 8.5vw, 2.8rem)`). No trasladar esta escala a artículos o directorio.
- **Home hero action:** `typography.home-hero-action`, las dos acciones del hero; en móvil baja a (.95rem).
- **Article heading / Title:** `typography.article-heading` para páginas de apoyo y `typography.title` para sus secciones. El directorio usa `clamp(2.8rem, 6vw, 6rem)` para su H1 de escritorio.
- **Body / Label / Caption:** lectura base, texto de botones y pies de fotografía. Formularios de (16px); introducciones de artículos hasta (60ch), introducciones de experiencias hasta (42ch).

Los archivos locales reales son Anton 400, DM Sans 400/500 y **Fraunces estática 400/600**, WOFF2 latinos. Fraunces variable se sustituyó por instancias estáticas para corregir diferencias observadas en WebKit. Los pesos del frontmatter reproducen las peticiones CSS: 450 y 500 se resuelven con la instancia 400; 550 y 650 con la 600. No hay archivos adicionales para los pesos intermedios. `ASSETS.md` conserva licencias y procedencias.

**The Hero Inmediato Rule.** La imagen y NAVALUENGA aparecen desde el inicio; ninguna entrada oculta o retrasa el título.

## Layout

El margen lateral es `spacing.gutter` (20–68 px con raíz de 16 px), corrigiendo la estimación anterior de 20–64 px. Se reutilizan los pasos del frontmatter junto con ajustes de composición; no existe una retícula modular única. El espaciado de sección es fluido (48–104 px). Por encima de 1920 px, las secciones principales salvo hero y participación se limitan a (1920px), sustituyendo la previsión anterior de 1800 px. Artículos y directorio se limitan a (1440px), la cabecera de artículo a (1080px) y el cuerpo de lectura a (780px).

En escritorio el río usa (1.08fr / 1fr), experiencias (1.1fr / 1fr), patrimonio (3.05fr / 1fr) y visita (1fr / 1.7fr / 1fr). Hasta 1100 px se compactan navegación y columnas; a 1199 px aparece el menú de la cabecera compartida; a 599 px predominan columnas únicas y los botones del hero se apilan. El dato de patrimonio y su texto conservan dos columnas cortas en móvil.

La cabecera compartida mide como mínimo (88px), (80px) hasta 1199 px y (76px) hasta 599 px. En home se superpone al hero; al superar 40 px de scroll o abrir el menú adquiere fondo bosque sólido. El panel móvil deja 8 px bajo la cabecera y puede desplazarse dentro de `100svh - 190px`. Sin JavaScript los destinos quedan visibles; hasta 1199 px la cabecera pasa a posición estática.

El hero usa tres filas, título en la central y mensaje debajo. Su mínimo es `max(760px, 100svh)`, o `max(700px, 100svh)` hasta 899 px; sin altura máxima. Hasta 599 px reserva (7rem) al pie y apila las acciones; en paisaje de hasta 600 px de altura y al menos 600 px de ancho usa mínimo (680px). No se fija la altura del texto.

Los accesos ciudadanos forman tres columnas, dos hasta 899 px; en móvil icono y texto se apilan dentro de cada acceso. Vivir aquí combina foto y guía (1.2fr / 1fr); comercio usa (1.35fr / 1fr), participación y cierre (1.3fr / 1fr). Estos últimos bloques pasan a dos columnas iguales hasta 899 px y a una hasta 599 px. Agenda es un listado con fecha, contenido y acceso circular; en móvil conserva fecha y contenido, con el título enlazado. Son variantes locales, no una nueva retícula para páginas interiores.

Controles principales de al menos (44px); botones base desde (50px), búsqueda desde (48px), botones del hero desde (54px) o (48px) en móvil. El dock aparece solo hasta 599 px: cuatro destinos, ancho máximo (440px), laterales (12px), separación inferior `max(12px, env(safe-area-inset-bottom))`, enlaces de mínimo (62px) y reserva de página `102px + env(safe-area-inset-bottom)`. El pie respeta el área segura. Las imágenes tienen recortes por contexto; el hero conserva variante vertical móvil. Mantener lectura desde 320 px, anchos intermedios y zoom sin desbordamiento.

## Elevation & Depth

Las superficies editoriales permanecen abiertas, sin sombras de tarjeta. La profundidad del hero procede del paisaje, un degradado oscuro y dos encuadres de un mismo recorte de roble transparente: por delante del título y detrás de sus controles, sin capturar eventos de puntero. Es una excepción de portada solicitada por el usuario, no decoración obligatoria para nuevas páginas. El paisaje y el follaje generados se identifican como conceptuales.

Las sombras tipográficas son `0 3px 28px #061c1430` en el título y `0 2px 20px #071c1440` en el mensaje. La navegación flotante añade profundidad funcional: cabecera al desplazarse (`0 6px 24px #081d171c`), desplegable de escritorio (`0 14px 32px #061c142e`), panel móvil (`0 18px 40px #061c1433`) y dock (`0 5px 25px #061c1438`). Estas sombras no se trasladan a los bloques editoriales.

**The Superficies Abiertas Rule.** Separar contenido con espacio, contraste y líneas finas; no convertir cada bloque en una tarjeta elevada.

## Shapes

Fotografías y listas editoriales tienen esquinas rectas. Las acciones del hero, la acción de comercio local, sede en escritorio y las categorías del directorio usan `rounded.pill`; los botones base siguen rectos. Desplegable, panel móvil y dock usan los radios de navegación del frontmatter; los iconos de búsqueda y accesos de agenda son circulares. Son excepciones funcionales, no una regla para redondear fotografías. Divisiones generalmente de (1px); borde secundario del hero de (1.5px), subrayado solar de enlaces de (2px) y selección de pestañas de (4px). Los iconos son SVG con trazo de (1.4), normalmente de (1.25em), sin glifos tipográficos como sustituto.

## Components

### Buttons

Acciones explícitas con contraste alto y flecha SVG cuando corresponde. Solar es la variante principal; el hero combina solar y contorno marfil con bosque translúcido. La variante de línea solar se conserva como primitiva sobre bosque; la participación de portada ahora usa enlaces abiertos sobre solar. Los botones del hero usan la variante DM Sans de portada; no cambia la serif de sus titulares. Las medidas de Layout son alturas mínimas, no fijas.

Color y pulsación responden en (150ms); al pulsar hay un desplazamiento de (1px). Con hover, la flecha se mueve (2px, −2px). El foco global es un contorno de (3px) en `currentColor`, separado (5px), también en enlaces y campos. Ninguna información depende del hover.

### Chips

Las categorías del directorio son enlaces redondeados con borde fino. La categoría actual invierte a bosque y marfil mediante `aria-current="page"`. Cada enlace conserva su URL prerenderizada; JavaScript mejora el filtrado y sincroniza el historial.

### Lists / Containers

El directorio usa filas abiertas, sin tarjetas. Cada fila separa nombre y dirección de contacto y fuente, y se apila en móvil. Los listados prácticos usan separadores finos y flechas. Las notas prácticas tienen marfil más oscuro, sin elevación.

### Inputs / Fields

La búsqueda del directorio es el campo propio implementado: etiqueta visible, icono SVG, entrada transparente y botón bosque dentro de un borde fino. La entrada pasa de (230px) a (100%) en móvil, con texto de (16px), foco visible y resultados anunciados en una región de estado. Solo aparece con JavaScript. No se documentan formularios ni estados de envío inexistentes: las sugerencias conducen al canal municipal verificado.

### Navigation

Una cabecera compartida combina el escudo municipal, «Ayuntamiento de» y el nombre permanente Navaluenga. El escudo procede del [archivo del Ayuntamiento](https://aytonavaluenga.es/wp-content/uploads/2021/07/escudo.png), conservado en `src/assets/escudo-navaluenga.png` y registrado en `ASSETS.md`; no se redibuja ni se encierra en un círculo. Se presenta con ancho (40px), altura automática y máximo (68px); hasta 599 px, ancho (32px) y máximo (54px). La separación entre escudo y texto es (.9rem), o (.65rem) en móvil; las dos líneas de texto se separan (.2rem). La imagen es decorativa dentro del enlace con nombre accesible «Navaluenga, inicio». Mantiene grupos Descubrir, Vivir aquí, Trámites y servicios, Ayuntamiento, además de Empresas, sede y búsqueda. En escritorio, texto funcional de (.85rem), hover solar y sede en píldora marfil; el estado actual usa solar. Los desplegables son marfil, con hover más oscuro y selección solar. En el panel móvil, los títulos de grupo usan Fraunces (1.35rem) y el estado actual conserva subrayado solar.

El botón de menú combina etiqueta y dos líneas que se convierten en aspa. Declara su estado, enfoca el primer enlace, permite Escape y devuelve el foco al control correspondiente; sus destinos siguen accesibles sin JavaScript. La marca no cambia de texto al salir del hero. El dock móvil compartido ofrece Trámites, Incidencias, Agenda y Mapa con SVG y etiquetas; hover y `aria-current="page"` resaltan la cápsula del icono en solar, y la pulsación reduce su escala a (.93). El pie no se redefine en esta actualización.

### New home sections

Servicios ciudadanos: retícula abierta marfil, iconos y separadores, sin tarjetas elevadas. Vivir aquí: fotografía documental y guía práctica sobre papel de portada. Agenda: filas tipográficas con gran fecha, primer día sobre solar y aviso visible de ejemplos. Comercio: foto y categorías en bosque, acción solar y pies documentales. Participación: superficie solar, titular editorial y tres enlaces con separadores bosque translúcidos; no lleva fotografía de fondo. Cierre: marfil con tres siguientes pasos. El orden y contenido de portada se documentan en `HOME-REFRESH.md`; estas composiciones no obligan a otras superficies.

### Experiences

Fotografía e índice editorial sobre bosque. La selección solar combina texto, peso y subrayado. Sin JavaScript son bloques enlazables completos; con JavaScript se convierten en pestañas con flechas, Inicio/Fin y paneles asociados. Cada selección cambia fotografía, contenido y destinos. En móvil se leen título, selector, imagen e índice en ese orden.

El panel entra con opacidad durante (220ms); la imagen en escritorio mejorado usa (250ms). El estado seleccionado cambia inmediatamente. El código anima la entrada del panel o imagen visible, no un crossfade entre imágenes.

### Editorial motion and approved labels

El título del hero entra en (850ms) desde opacidad (.7) y desplazamiento (16px); el mensaje en (800ms), con retraso (120ms), desde opacidad (.65) y (12px). Las ramas se asientan en (1200ms) y (1400ms), sin parallax continuo. Comparten curva `cubic-bezier(.16,1,.3,1)`. Cabecera: transición de fondo/sombra (240ms); panel y desplegables (180ms); trazos del botón de menú (200ms). Las entradas editoriales existentes conservan (450ms) y (10px). Las entradas editoriales se activan una vez con IntersectionObserver y el contenido parte visible. La reducción de movimiento elimina las entradas y las transiciones de cabecera, panel, iconos del dock y nuevos accesos, además del desplazamiento suave. Los estados de pulsación del dock y hover de la flecha de agenda conservan un cambio inmediato de transformación; no se promueven como una nueva regla de movimiento reducido. No hay librería de animación.

Las etiquetas «01 / A orillas del Alberche», «Experiencias», «02 / Memoria del pueblo», «Tu próxima escapada» y «Tu ayuntamiento, cerca» son excepciones pedidas por las referencias. Se conservan en esas posiciones; no se extienden como cejas ornamentales a páginas nuevas.

## Do's and Don'ts

### Do:

- **Do** conservar el hero aprobado: NAVALUENGA seleccionable, enorme, centrado y en una línea; mensaje y dos acciones centrados.
- **Do** alternar composiciones según su función, conservando paleta, fuentes y separadores.
- **Do** mantener controles de al menos 44 px, foco visible, lectura con zoom y contenido accesible sin JavaScript.
- **Do** usar fotografía documental para lugares y patrimonio con atribución; identificar el hero conceptual provisional de forma visible.
- **Do** conservar las cinco etiquetas aprobadas únicamente en sus composiciones de referencia.
- **Do** mantener el pie compacto y los servicios accesibles directamente desde la cabecera.

### Don't:

- **Don't** introducir fondos verde claro, menta o salvia, ni el texto «Verde en todos los sentidos».
- **Don't** incrustar textos de interfaz en imágenes, recortar NAVALUENGA o retrasar su aparición con animaciones.
- **Don't** añadir tarjetas con sombra a cada contenido, cejas ornamentales nuevas o extender el follaje conceptual del hero a otras superficies sin una intención explícita.
- **Don't** presentar el paisaje conceptual como fotografía documental ni generar patrimonio.
- **Don't** simular envíos o presentar esta previsualización como sede municipal oficial.

No canonizado: el hero conceptual es un recurso provisional identificado, no una regla de fotografía documental. Los pesos CSS intermedios no implican archivos de fuente adicionales. Las etiquetas aprobadas son excepciones heredadas, no una invitación a crear cejas nuevas. No se canoniza ni repara deriva histórica ajena a esta actualización (por ejemplo, la descripción antigua del pie compacto frente al pie ampliado existente); los pendientes de publicación permanecen en `PRODUCT.md`, `CONTENT.md` y `ASSETS.md`. La previsualización se mantiene fuera de indexación.
