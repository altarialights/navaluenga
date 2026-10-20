import { official } from './site';

export const municipalPages = [
  { href: '/tramites/', title: 'Trámites y servicios', description: 'Padrón, registro, licencias, agua e impuestos.' },
  { href: '/sede/', title: 'Sede electrónica', description: 'Tus gestiones en el canal oficial.' },
  { href: '/incidencias/', title: 'Incidencias ciudadanas', description: 'Tu aviso mejora Navaluenga.' },
  { href: '/agenda/', title: 'Agenda municipal', description: 'Cultura, deporte y vida en común.' },
  { href: '/instalaciones/', title: 'Instalaciones y reservas', description: 'Encuentra tu espacio y prueba una reserva.' },
  { href: '/vivir/', title: 'Vivir aquí', description: 'Educación, salud, transporte y servicios cotidianos.' },
  { href: '/avisos/', title: 'Avisos municipales', description: 'Información de servicios y comunicaciones.' },
  { href: '/mapa/', title: 'Mapa de Navaluenga', description: 'Explora lugares, servicios y patrimonio.' },
  { href: '/empresas/', title: 'Empresas y comercios', description: 'La actividad económica del pueblo.' },
  { href: '/participa/', title: 'Navaluenga te escucha', description: 'Sugerencias y participación ciudadana.' },
  { href: '/contacto/', title: 'Contacto y atención', description: 'Habla con el Ayuntamiento.' },
  { href: '/ayudas/', title: 'Ayudas y empleo', description: 'Convocatorias, formación y oportunidades.' },
  { href: '/rio/', title: 'El río Alberche', description: 'Naturaleza y piscinas naturales.' },
  { href: '/historia/', title: 'Historia y patrimonio', description: 'El puente y la memoria de Navaluenga.' },
  { href: '/experiencias/', title: 'Turismo y experiencias', description: 'Caminar, saborear y descansar.' },
];

export const procedures = [
  { id: 'padron', title: 'Empadronamiento', category: 'Vivir aquí', description: 'Alta o cambio de domicilio en el padrón municipal.', documents: ['Identificación de las personas interesadas.', 'Documentación que acredite el uso de la vivienda.', 'Documentación adicional según la unidad familiar.'], steps: ['Consulta la ficha oficial y el supuesto que te corresponde.', 'Prepara los documentos que indique el Ayuntamiento.', 'Presenta la solicitud por el canal habilitado.'] },
  { id: 'registro', title: 'Registro general', category: 'Documentos', description: 'Presenta una solicitud dirigida al Ayuntamiento.', documents: ['Solicitud con el asunto y el órgano destinatario.', 'Identificación y, si procede, acreditación de representación.', 'Documentos que acompañen a la solicitud.'], steps: ['Comprueba si existe un procedimiento específico.', 'Identifícate en la sede y completa la solicitud.', 'Conserva el justificante de presentación.'] },
  { id: 'licencias', title: 'Licencias de obras', category: 'Urbanismo', description: 'Consulta qué autorización corresponde a tu actuación.', documents: ['Descripción y emplazamiento de la actuación.', 'Documentación técnica cuando resulte exigible.', 'Acreditaciones indicadas en la ficha oficial.'], steps: ['Consulta el tipo de actuación antes de iniciar las obras.', 'Reúne la documentación indicada por el servicio municipal.', 'Presenta la solicitud y consulta su seguimiento en la sede.'] },
  { id: 'impuestos', title: 'Impuestos y recibos', category: 'Economía', description: 'Información sobre tributos y vías de pago.', documents: ['Referencia del recibo o del tributo.', 'Identificación de la persona interesada.'], steps: ['Identifica el tributo y la administración que lo gestiona.', 'Consulta el calendario y las condiciones oficiales.', 'Utiliza únicamente el canal de pago indicado por el organismo.'] },
  { id: 'agua', title: 'Abastecimiento de agua', category: 'Vivir aquí', description: 'Orientación sobre altas y gestiones del suministro.', documents: ['Datos del inmueble.', 'Identificación del solicitante.', 'Documentación exigida por el servicio gestor.'], steps: ['Confirma el procedimiento con el Ayuntamiento.', 'Prepara la documentación del inmueble.', 'Presenta la solicitud por el canal indicado.'] },
  { id: 'certificados', title: 'Certificados y volantes', category: 'Documentos', description: 'Consulta cómo acreditar información municipal.', documents: ['Identificación.', 'Tipo de certificado y finalidad.', 'Autorización de representación, cuando proceda.'], steps: ['Elige el certificado que necesitas.', 'Comprueba su disponibilidad en el catálogo oficial.', 'Solicítalo y revisa las notificaciones del canal utilizado.'] },
  { id: 'ayudas', title: 'Ayudas y subvenciones', category: 'Economía', description: 'Localiza una convocatoria y consulta sus bases.', documents: ['Los documentos previstos en las bases de cada convocatoria.'], steps: ['Localiza las bases y comprueba el plazo oficial.', 'Verifica los requisitos de la convocatoria.', 'Presenta la solicitud y guarda el resguardo.'] },
  { id: 'solicitudes', title: 'Solicitudes y autorizaciones', category: 'Urbanismo', description: 'Uso de espacios, actividades y otras peticiones.', documents: ['Descripción de la solicitud.', 'Documentación específica del procedimiento.'], steps: ['Consulta si hay una ficha específica.', 'Confirma los requisitos con el Ayuntamiento.', 'Presenta la solicitud por registro cuando corresponda.'] },
];

export const eventCategories = ['Cultura', 'Deporte', 'Fiestas', 'Formación', 'Infancia', 'Municipal'];
export const events = [
  { id: 'musica', title: 'Una tarde de música en la plaza', category: 'Cultura', date: '2026-10-24', time: '19:00', end: '20:30', place: 'Plaza de España · ubicación de ejemplo', description: 'Un encuentro al aire libre para disfrutar de la música y de la vida del pueblo.', practical: 'Ejemplo sin venta de entradas ni programación confirmada.', registration: false },
  { id: 'senderismo', title: 'Caminar junto al Alberche', category: 'Deporte', date: '2026-10-31', time: '10:00', end: '12:00', place: 'Punto de encuentro por confirmar · ejemplo', description: 'Una propuesta de paseo compartido para descubrir el entorno con otra mirada.', practical: 'Lleva agua y calzado apropiado. Recorrido y accesibilidad pendientes de confirmar.', registration: true },
  { id: 'lectura', title: 'Historias para los más pequeños', category: 'Infancia', date: '2026-11-07', time: '17:00', end: '18:00', place: 'Espacio municipal · ejemplo', description: 'Lecturas y creatividad en una tarde para compartir en familia.', practical: 'Actividad de ejemplo. Edad, aforo y acompañamiento por confirmar.', registration: true },
  { id: 'digital', title: 'Tu primera gestión digital', category: 'Formación', date: '2026-11-12', time: '11:00', end: '12:30', place: 'Aula municipal · ejemplo', description: 'Una introducción a los servicios digitales y a la búsqueda de información oficial.', practical: 'Taller de ejemplo sin inscripciones abiertas.', registration: true },
  { id: 'encuentro', title: 'Ideas para un pueblo mejor', category: 'Municipal', date: '2026-11-21', time: '18:00', end: '19:00', place: 'Espacio municipal · ejemplo', description: 'Un encuentro para imaginar mejoras en los espacios compartidos.', practical: 'Propuesta ilustrativa, sin convocatoria oficial.', registration: false },
  { id: 'fiesta', title: 'Celebrar lo que nos une', category: 'Fiestas', date: '2026-12-05', time: '18:30', end: '20:00', place: 'Plaza de España · ejemplo', description: 'Una propuesta de encuentro entre generaciones.', practical: 'Fecha y actividad ficticias para mostrar la agenda.', registration: false },
];

export const facilities = [
  { id: 'pista', name: 'Pista deportiva', category: 'Deporte', description: 'Un espacio para jugar en equipo.', services: 'Zona de juego · reserva por franjas', rules: 'Respeta el turno y deja el espacio limpio. Equipamiento y accesibilidad por confirmar.' },
  { id: 'piscina', name: 'Piscina municipal', category: 'Piscinas', description: 'El verano también se vive en el agua.', services: 'Baño · uso recreativo', rules: 'Consulta la normativa, la temporada y las condiciones de acceso oficiales.' },
  { id: 'sala', name: 'Sala de encuentros', category: 'Espacios', description: 'Un lugar para reunirse y compartir ideas.', services: 'Reuniones · actividades comunitarias', rules: 'Aforo, equipamiento y condiciones de cesión por confirmar.' },
  { id: 'taller', name: 'Taller de actividades', category: 'Actividades', description: 'Aprender algo nuevo, cerca de casa.', services: 'Formación · talleres', rules: 'Consulta la edad recomendada y los materiales en la convocatoria oficial.' },
];

export const notices = [
  { title: 'Trabajos en la red de abastecimiento', category: 'Agua', date: '2026-10-22', priority: 'Prioridad alta', text: 'Ejemplo de comunicación de un corte programado. No anuncia un corte real ni afecta a ninguna calle.' },
  { title: 'Mantenimiento de un espacio público', category: 'Obras', date: '2026-10-20', priority: 'Información', text: 'Ejemplo de aviso de obras. La zona, duración y alternativas se incorporarían tras su validación municipal.' },
  { title: 'Atención en fechas especiales', category: 'Horarios', date: '2026-10-18', priority: 'Recordatorio', text: 'Ejemplo de cambio de horario. Confirma siempre la atención con el Ayuntamiento.' },
  { title: 'Recogida de residuos voluminosos', category: 'Servicios', date: '2026-10-15', priority: 'Información', text: 'Ejemplo de comunicación del servicio. No establece fechas ni puntos de recogida reales.' },
  { title: 'Revisión de alumbrado', category: 'Incidencias', date: '2026-10-12', priority: 'Información', text: 'Ejemplo de seguimiento de una incidencia, sin datos personales ni localizaciones.' },
];
export const opportunities = [
  { title: 'Apoyo a iniciativas de comercio local', category: 'Subvenciones', deadline: '2026-11-30', audience: 'Empresas', text: 'Ficha ilustrativa de una subvención. No es una convocatoria vigente.' },
  { title: 'Formación en competencias digitales', category: 'Formación', deadline: '2026-11-15', audience: 'Ciudadanía', text: 'Ejemplo de oportunidad formativa, sin inscripción abierta.' },
  { title: 'Bolsa de empleo municipal', category: 'Empleo público', deadline: '2026-12-10', audience: 'Ciudadanía', text: 'Ejemplo de estructura para bases, requisitos y seguimiento de un proceso selectivo.' },
  { title: 'Ayuda para actividades comunitarias', category: 'Ayudas', deadline: '2026-10-31', audience: 'Asociaciones', text: 'Ejemplo de ficha de ayuda. Importes, condiciones y bases no publicados.' },
];
export const mapCategories = ['Patrimonio', 'Piscinas naturales', 'Restaurantes', 'Alojamientos', 'Comercios', 'Rutas', 'Aparcamientos', 'Instalaciones', 'Servicios municipales'];
// Synthetic demonstration coordinates, never presented as verified locations.
export const mapPoints = mapCategories.map((category, i) => ({
  id: `punto-${i}`, category, name: `${category} · punto de ejemplo`,
  lat: 40.409 + (i % 3) * .002, lon: -4.708 + Math.floor(i / 3) * .002,
  description: 'Ubicación ficticia para probar la selección del mapa. No utilices este punto para orientarte.',
  source: category === 'Patrimonio' ? official.bridge : official.services,
}));
export const formatDate = (value: string) => new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Madrid' }).format(new Date(`${value}T12:00:00+01:00`));
