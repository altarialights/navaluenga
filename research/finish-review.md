disposition: fix

Límites del paquete: las cinco referencias originales solo existen como adjuntos inline inaccesibles a este revisor; no hay QUALITY BAR, contrato THESIS/OWN-WORLD/STORY/FIRST VIEWPORT/FORM, comp medida ni diff. Se revisa contra el encargo escrito y DESIGN.md; la dirección ya fijada por el usuario excluye exigir un nuevo concept roll. Código muestreado, sin nueva ejecución de navegador ni detector.

## persistence

pass — PRODUCT.md, DESIGN.md, ASSETS.md y CONTENT.md existen y describen el artefacto. El usuario exige ejecutar su dirección existente, por lo que no se exige una nueva ronda de comp, seed ni estado de reproducción. Las 18 capturas full-page Chromium/WebKit existen, tienen dimensiones coherentes y PNG íntegros; las de 1440/1920 se inspeccionaron mediante las copias JPEG del mismo contenido por un límite de transporte de view_image. Se inspeccionaron los diez recortes principales y las seis capturas de empresas/servicios/participación. No hay regiones vacías, cargas incompletas ni secciones mal identificadas.

La evidencia de pruebas registra 32 casos esperados, sin fallos ni reintentos, en Chromium y WebKit: anchos, menú y foco, pestañas, directorio, contenido sin JavaScript, semántica, enlaces internos, zoom y auditoría automática. La comprobación ampliada de páginas secundarias registra un fallo de reflow del directorio a 200 % y 390 px, pendiente de evidencia posterior al arreglo. Rendimiento declarado correctamente como laboratorio: LCP 2096 ms, CLS 0,0142 y eventos de interacción 16–24 ms bajo 1,6 Mbps/150 ms y CPU 4×; no equivale a datos de usuarios reales ni a una certificación de INP.

## fidelity

Matriz contra las promesas explícitas del encargo, sin afirmar una comparación visual con los adjuntos inaccesibles:

| Elemento / promesa | Estado | Evidencia |
| --- | --- | --- |
| TYPE — NAVALUENGA | match | Anton condensada, mayúsculas, HTML seleccionable, una línea y escala dominante de 320 a 1920 px; no recorte visible. |
| TYPE — serif editorial | contradicted | Chromium presenta la jerarquía editorial prevista; WebKit renderiza el mensaje, títulos, entradillas y XVI con un peso visiblemente mayor, hasta pegar trazos y comprimir las palabras en patrimonio y visita. Se ve de forma consistente en webkit-390.png y webkit-1440/1920.jpg frente a Chromium. |
| MATERIAL | adaptation | Fotografías documentales del río, pueblo y puente sustituyen paisajes sintéticos conforme al apartado 8 del encargo; el hero conceptual está rotulado en la imagen, en créditos y en ASSETS.md. No se imita piedra o naturaleza mediante CSS. |
| GROUND | match | Muestreo de los PNG: marfil RGB 246/241/229, verde 18/55/40 y amarillo 241/205/53, exactamente los tokens pedidos. |
| Primera pantalla | match | Cabecera única, paisaje luminoso, nombre enorme, mensaje y dos acciones centrados. Conserva el recuerdo principal; las hojas recortadas son opcionales por decisión expresa del encargo. |
| Río | match | Marfil, texto y paisaje a izquierda, agua vertical a derecha; apilado móvil legible y enlaces específicos. |
| Experiencias | match | Verde, fotografía izquierda e índice/tablas de contenido a derecha en desktop; selector y fotografía reordenados en móvil. Código y pruebas demuestran cambio real de imágenes, contenido y enlaces, y acceso sin JavaScript. |
| Patrimonio | match | Puente documental en blanco y negro, titular editorial y XVI. El texto distingue el nombre románico de la fecha de construcción y explicita el tratamiento fotográfico actual. |
| Visita y vecinos | contradicted | Destinos y jerarquía presentes; al ocultarse los br bajo 900 px aparecen «paisajes,personas», «oportunidades.Navaluenga» y «entredos». |
| Directorio | contradicted | Listado funcional y fuentes visibles; descripción móvil une palabras, Buscar se parte dentro de una palabra a 390 px y la prueba ampliada registra overflow al aumentar texto. |
| Participación y verdad | adaptation | La ausencia de endpoint autorizado se resuelve mediante el buzón municipal, como permite expresamente el apartado 7.F. Sin formulario que finja enviar; preview noindex y condición no oficial visibles. |
| Etiqueta adicional del directorio | added without approval | «Gente y negocios de aquí» es una ceja redundante sobre el H1 de /empresas/; no está exigida por las referencias descritas y cae bajo la prohibición específica del craft floor. |

## ceiling

No existe tarjeta QUALITY BAR independiente. El encargo se materializa con fotografía dominante, escala tipográfica, separadores finos, asimetría y una alternancia clara de superficies. No se exige añadir ornamentación, capas de hojas ni movimiento adicional. El límite pendiente es la fidelidad de la serif en WebKit y la calidad de lectura de los componentes móviles. El aviso del detector sobre popularidad de Fraunces no justifica sustituir por sí solo una serif que cumple el carácter editorial pedido.

## material_fixes

1. Reflow/copy — En src/components/Visit.astro:8 y src/pages/empresas/[...categoria].astro:16, conservar espacios reales junto a los br que CSS oculta, o eliminar esos saltos opcionales; verificar en 390 y 768 px que todas las palabras y frases permanecen separadas.
2. Accesibilidad móvil — En src/styles/global.css:343, impedir que el botón Buscar se comprima y parta («Busc / ar» en 390-empresas.png), dejando que el input ceda ancho; confirmar además con evidencia nueva el flex-wrap de .business-contact ya cambiado por la raíz, de modo que /empresas/ no desborde a 200 % y 390 px.
3. TYPE / consistencia entre navegadores — Corregir la resolución de pesos de Fraunces en WebKit desde src/styles/global.css:3; servir instancias locales estáticas 400/600 es una solución coherente con la misma familia y carácter. La raíz ha reproducido el fallo incluso con el eje wght explícito, por lo que el tracking no es la solución al peso. Tras corregirlo, comprobar que .editorial-heading y .heritage-century no conservan contactos de trazos que perjudiquen lectura. Recapturar los mismos anchos en ambos motores: mensaje, titulares, entradilla y XVI deben conservar una jerarquía comparable y palabras claramente separadas.
4. Floor — Retirar la ceja «Gente y negocios de aquí» de src/pages/empresas/[...categoria].astro:16, dejando que el H1 y las categorías expresen la función; no extender esta corrección a las etiquetas de home que forman parte de la dirección de referencia fijada por el usuario.

## keep

Conservar NAVALUENGA enorme en una línea, el hero solar rotulado, la paleta exacta, las composiciones río/experiencias/puente, el acceso directo municipal y los recorridos funcionales sin JavaScript.
