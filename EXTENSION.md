# Ampliación municipal · 20 de octubre de 2026

## Auditoría y dirección

Astro 7, TypeScript y CSS existente; generación estática, sin backend. Se conservan las cinco composiciones de portada (Hero, River, Experiences, Heritage y Visit), sus rutas editoriales, las fuentes locales Anton/Fraunces/DM Sans, bosque #123728, marfil #f6f1e5 y amarillo #f1cd35. Participation y el directorio ya existen. Photo genera AVIF/WebP con tamaños responsive. No hay repositorio Git inicializado en esta carpeta.

La ampliación hereda el sistema; no lo sustituye. Servicios: buscador e índice de procedimientos. Sede: fondo bosque y accesos horizontales. Incidencias: formulario secuencial. Agenda: cartel editorial, calendario y lista. Instalaciones: selector y reserva demostrativa. Vivir: fotografía panorámica y índice cotidiano. Avisos/ayudas: listados filtrables. Mapa: cartografía externa con alternativa textual. Empresas: directorio existente ampliado. Participación: composición solar y consulta de ejemplo. Contacto: tipografía funcional y canales oficiales.

## Veracidad y datos

Contacto contrastado el 20-10-2026 en https://aytonavaluenga.es/contacto/: Plaza España 1, 920286001, registro@navaluenga.es. No se publica horario ni cita previa no verificados. La sede conserva su dominio oficial y la evidencia previa de `research/sede-verification.json`; no se inventan rutas autenticadas.

Eventos, disponibilidad, avisos, convocatorias, encuestas y puntos de mapa son fixtures explícitos. Ningún formulario envía datos, autentica, cobra, crea expedientes ni reserva recursos. Los borradores permanecen en memoria y se pierden al recargar. Los contenidos tipados en `src/data/municipal.ts` separan la presentación de un futuro CMS.

## Contrato visual y comprobación

Modo Operate: trámites, incidencias, reservas, búsqueda, avisos, ayudas. Modo Read: sede, vivir, contacto. Modo Experience: mapa. Agenda y empresas mezclan exploración editorial con controles funcionales. El primer viewport debe mostrar una acción útil; no repetir cabeceras con fotografía a la derecha. Mantener control táctil, foco, avisos accesibles y reducción de movimiento.

Verificar todas las rutas en escritorio y móvil, errores JS, enlaces locales, formularios, filtros, calendarios y axe. La revisión visual usará capturas en `.impeccable/review/extension/`. La ausencia de backend y el estado de demostración forman parte de la entrega.

## Rutas y funciones

| Ruta | Funcionalidad |
| --- | --- |
| `/tramites/` | Buscador sin distinción de acentos, categorías, accesos habituales, FAQ |
| `/tramites/padron/`, `/tramites/registro/`, `/tramites/licencias/`, `/tramites/impuestos/`, `/tramites/agua/`, `/tramites/certificados/`, `/tramites/ayudas/`, `/tramites/solicitudes/` | Ocho guías con pasos, documentación orientativa y enlace a la sede |
| `/sede/` | Puente a la sede existente; acceso a catálogo, registro, expedientes, notificaciones, tablón y contratación desde el canal oficial |
| `/incidencias/` | Cinco pasos, validación, máximo 3 fotos/5 MB, previsualización local, revisión, confirmación de demo, borrador TXT, reinicio |
| `/agenda/` | Lista, filtros, calendario navegable de lunes a domingo, estados vacíos y eventos de ejemplo |
| `/agenda/musica/`, `/agenda/senderismo/`, `/agenda/lectura/`, `/agenda/digital/`, `/agenda/encuentro/`, `/agenda/fiesta/` | Fichas con horario/localización ficticios, exportación ICS, compartir y alternativa manual |
| `/instalaciones/` | Selector de cuatro espacios ilustrativos, fecha, disponibilidad ficticia, horario, revisión, modificación y confirmación de demo |
| `/vivir/` | Educación, salud, transporte, servicios sociales, vivienda, residuos, instalaciones, asociaciones, teléfonos y FAQ |
| `/avisos/` | Búsqueda, categoría, fecha inicial, prioridades textuales, detalle y acceso a publicaciones oficiales |
| `/mapa/` | Nueve categorías, búsqueda, selección y ficha; cartografía OSM con zoom y desplazamiento tras cargarla |
| `/ayudas/` | Convocatorias ilustrativas filtrables, destinatarios, fechas límite ficticias y orientación hacia bases oficiales |
| `/contacto/` | Teléfono, correo, dirección, búsqueda de ubicación y orientación sobre atención/cita |
| `/buscar/` | Búsqueda local sobre páginas y guías |
| `/empresas/` y categorías existentes | Directorio conservado y ampliado con información desplegable, búsqueda de ubicación y canal de correcciones |
| `/participa/` | Buzón oficial, encuesta local de ejemplo y propuesta de seguimiento público |
| `/servicios/` y anclas originales | Se conservan y conectan con las nuevas experiencias |

11 nuevas rutas principales + 14 fichas = 25 rutas nuevas. La compilación contiene 41 páginas HTML en total, incluida la 404. No se eliminan rutas anteriores.

## Navegación y accesibilidad

Menús de sección con botones que exponen su estado, cierre con Escape y foco recuperado. En móvil: menú desplegable y accesos persistentes a trámites, incidencias y agenda. Breadcrumbs, pie completo, búsqueda global y estados activos. Sin JavaScript siguen disponibles el contenido, los enlaces oficiales y las categorías del directorio; los recorridos de demostración se ocultan para evitar envíos nativos accidentales. Los pasos del formulario anuncian errores y mueven el foco al título correspondiente.

## Integraciones pendientes

La demo no tiene servidor de aplicación, base de datos ni autenticación. No registra solicitudes ni reserva, cobra, envía correos, añade votos o genera citas.

Para una puesta en servicio, mantener los componentes y sustituir los fixtures por un proveedor de contenido con modelos de evento, aviso, instalación, convocatoria, punto y negocio. Cada registro real debería incluir identificador estable, estado de publicación, fuente, fecha de verificación, responsable editorial y clasificación `demo`/`verified`. Las fechas y zonas horarias deben ser explícitas.

Incidencias requeriría API autorizada, validación en servidor, límites de carga, revisión de imágenes/metadatos, política de conservación, control de acceso y panel municipal. Reservas necesita disponibilidad transaccional, prevención de doble reserva, reglas de uso y confirmaciones reales. Participación requiere procesos aprobados y reglas de identidad/duplicación según el caso. Suscripciones necesita consentimiento verificable, bajas y un servicio de entrega. La edición de fichas necesita permisos editoriales y trazabilidad. La sede existente conserva toda identificación y presentación administrativa.

## Límites editoriales y técnicos

- Eventos, slots, convocatorias, avisos, encuesta y coordenadas son demostraciones sin validez administrativa.
- No se verificaron horarios de atención, citas, precios, disponibilidad, facturación electrónica específica ni plazos administrativos. Se remite a consulta oficial.
- El mapa necesita conexión a OpenStreetMap; la información textual y enlaces externos ofrecen alternativa. Los puntos no permiten orientarse de forma fiable, porque son ficticios.
- Faltan fotografías propias y webs verificadas de algunos establecimientos e instalaciones. No se sustituyen por imágenes falsas.
- No hay comando de lint configurado. `astro check` valida Astro y TypeScript; no se presenta como sustituto de una auditoría legal o de accesibilidad manual completa.
- Previsualización `noindex, nofollow`, sin dominio canónico inventado. No hubo despliegue, push ni modificación de producción.

## Validación ejecutada

- `astro check`: 58 archivos, 0 errores, 0 avisos, 0 sugerencias.
- `astro build`: correcto, 41 páginas y 71 variantes de imagen optimizadas reutilizadas.
- Playwright, Chromium y WebKit: **42/42 pruebas aprobadas**. Tras la corrección visual de números y checkbox, repetición selectiva municipal: **10/10 aprobadas**.
- Axe en 15 rutas municipales a 320 y 1440 px, en ambos motores: sin infracciones de las reglas WCAG evaluadas. La suite original también mantiene su comprobación de accesibilidad.
- 26 capturas completas: 13 páginas a 390 y 1440 px. Comprobación de ancho normal y texto al 200 %: sin desbordamiento horizontal. Portada original comprobada en nueve tamaños, 320–1920 px.
- Revisión visual independiente: dos hallazgos corregidos (números partidos y checkbox sobredimensionado); dictamen final `ship` limitado a esos dos ajustes y sus capturas.
- Detector Impeccable: sin hallazgos primarios; avisos informativos sobre escalas de texto específicas de las nuevas superficies.
- Mapa: filtros, selección, ficha y URL del iframe comprobados. La carga de cartografía no pudo verificarse en este entorno: `net::ERR_NETWORK_ACCESS_DENIED` al conectar con OpenStreetMap. Se mantiene alternativa textual y búsqueda externa; no se afirma haber verificado teselas ni interacción externa en esta sesión.
- No existe tarea de lint en el proyecto. No se añadieron dependencias ni servicios de pago.

Evidencias: `research/test-results.json`, `research/extension-responsive.json`, `research/extension-design-audit.json`, `research/extension-map-check.json`, `research/extension-finish-review.md` y `.impeccable/review/extension/`. Las verificaciones automáticas no equivalen a certificación de accesibilidad ni a validación de contenidos oficiales para producción.
