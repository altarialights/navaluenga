# Home · reconciliación del sistema

Fecha: 20-10-2026. Alcance: documentación de los cambios autorizados de portada, cabecera compartida y dock móvil. No se modifica código de aplicación.

Se actualizan `DESIGN.md` y `.impeccable/design.json` conservando paleta principal, familias tipográficas, identidad editorial y componentes interiores ajenos al encargo. Los titulares de los nuevos bloques y los botones del hero quedan registrados como variantes locales; no sustituyen la escala de artículos ni del directorio.

Cambios reconciliados: interlineado del título y escala del mensaje, botones DM Sans, mínimos responsive del hero, follaje conceptual en dos capas, navegación superpuesta/sólida, paneles y sombras funcionales, dock de cuatro accesos, papel local de Vivir/Agenda, participación solar y composiciones nuevas. El sidecar conserva los ejemplos interiores, actualiza hero/navegación y añade un ejemplo del dock.

Evidencia leída: encargo adjunto, `HOME-REFRESH.md`, `PRODUCT.md`, `ASSETS.md`, instrucciones del documentador y referencia completa; `src/styles/global.css`, `home.css`, `navigation.css`; `Header.astro`, `Hero.astro`, `QuickDock.astro`, `Participation.astro`, `Footer.astro`, `Icon.astro`, todos los componentes de `components/home/`, `layouts/Layout.astro` e `index.astro`. Comprobación visual propia: `390-viewport.png`, `768-viewport.png` y `1440-storyboard.png` de `.impeccable/review/home-refresh/`. La revisión visual exhaustiva corresponde al revisor independiente, no a este pase documental.

Validación documental: JSON parseable, diez ejemplos de componentes, referencias del sidecar presentes en el frontmatter, propiedades de componentes dentro del esquema y narrativa sincronizada con el documento. No se repiten compilación, pruebas de aplicación ni detector para este cambio exclusivamente documental.

No canonizado ni reparado: nuevas cejas ornamentales; las cinco etiquetas fijadas por las referencias siguen siendo excepciones locales. El paisaje y follaje generados siguen identificados como conceptuales. Se deja intacta la deriva histórica del pie compacto descrito frente al pie ampliado ya existente, y otros componentes fuera de alcance. Los cambios inmediatos de transformación que permanecen en algunos estados con movimiento reducido se describen sin convertirlos en pauta del sistema.

Recomprobación tras la corrección final: el hover de la acción secundaria del hero queda resuelto mediante un selector local dentro de `@media (hover: hover)`. `research/home-hover.json` confirma fondo marfil y texto bosque a 1440 y 390 px con puntero, y fondo bosque translúcido con texto marfil en móvil táctil. El token `home-hero-secondary-hover` y el ejemplo del sidecar ya describen estos estados y no requieren cambios. El responsable de implementación confirma cuatro pruebas de home superadas y capturas `1440-hover`, `390-hover` y `390-touch-default`; no queda pendiente la colisión de especificidad comunicada.
