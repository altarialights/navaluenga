## verdict

1. resolved — Los espacios se conservan en Visita y Empresas al ocultar los saltos: 390-visit.png y 390-empresas.png muestran «paisajes, personas», «oportunidades. Navaluenga», «entre dos» y «quedarte, sentarte» correctamente; las capturas de 768 px confirman el reflow intermedio.
2. resolved — Buscar permanece en una línea en 390-empresas.png y 1440-empresas.png. El código permite que el input ceda ancho y los contactos se envuelvan; research/secondary-pages.json registra 20 comprobaciones de diez páginas a 390/1440 px, sin overflow normal ni al 200 %, incluido el directorio que fallaba antes.
3. resolved — Las recapturas Chromium/WebKit de 390, 768, 1440 y 1920 px conservan una jerarquía serif comparable: desaparece el peso excesivo de WebKit en el mensaje, titulares, entradillas y XVI. Se mantienen familia y carácter; src/styles/global.css sirve Fraunces estática local 400/600. No quedan contactos de trazos que impidan leer los titulares revisados.
4. resolved — La ceja «Gente y negocios de aquí» desaparece de las capturas del directorio en 390 y 1440 px, y del componente. El H1 y las categorías conservan su jerarquía.

## remaining

clear — Sin regresiones materiales atribuibles al lote en las recapturas revisadas. Los 18 PNG full-page siguen íntegros y tienen dimensiones coherentes; las copias JPEG permiten inspeccionar desktop. research/test-results.json confirma 32 pruebas esperadas, cero fallos, omisiones o reintentos. Este ship cubre los cuatro arreglos puntuados, no una nueva revisión integral de la superficie.

disposition: ship
