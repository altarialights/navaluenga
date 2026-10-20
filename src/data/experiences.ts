import valle from '../assets/valle.jpg';
import pueblo from '../assets/pueblo.jpg';
import alberche from '../assets/alberche.jpg';
import { official } from './site';

export const experiences = [
  {
    id: 'caminar', label: 'Caminar', image: valle,
    alt: 'Navaluenga y su valle vistos desde el camino hacia la sierra.',
    caption: 'El valle, a tus pies',
    intro: 'Del paseo junto al agua a los caminos de la sierra. Encuentra tu manera de salir al encuentro del paisaje.',
    items: [
      { title: 'La ribera del Alberche', detail: 'Un paseo junto al río y al puente.', href: '/rio/' },
      { title: 'Entre robles y gargantas', detail: 'Conoce el recorrido PRC-AV 9.', href: '/experiencias/#caminar' },
      { title: 'El camino de La Lobera', detail: 'Descubre el itinerario PRC-AV 10.', href: official.routes },
    ],
    cta: 'Explorar los caminos', href: '/experiencias/#caminar',
  },
  {
    id: 'saborear', label: 'Saborear', image: pueblo,
    alt: 'Tejados de Navaluenga entre la vegetación del valle.',
    caption: 'Sabores que se quedan contigo',
    intro: 'Cocina castellana, productos de la tierra y tiempo para la sobremesa. El pueblo también se conoce a la mesa.',
    items: [
      { title: 'Cocina de aquí', detail: 'Restaurantes y sabores castellanos.', href: '/empresas/comer/' },
      { title: 'Pan y algo dulce', detail: 'Panaderías y comercio del pueblo.', href: '/empresas/comercio/' },
      { title: 'Garnacha del Alberche', detail: 'Contacta con la bodega local.', href: '/empresas/actividades/' },
    ],
    cta: 'Encontrar dónde comer', href: '/empresas/comer/',
  },
  {
    id: 'descansar', label: 'Descansar', image: alberche,
    alt: 'Agua del Alberche junto a los árboles de la ribera en Navaluenga.',
    caption: 'El placer de ir más despacio',
    intro: 'Escuchar el agua, buscar la sombra y quedarse un poco más. A veces, el mejor plan necesita muy poco.',
    items: [
      { title: 'Un rato junto al río', detail: 'Conoce las piscinas naturales.', href: '/rio/#piscinas' },
      { title: 'Despertar en el valle', detail: 'Casas y alojamientos rurales.', href: '/empresas/dormir/' },
      { title: 'Una estancia a tu medida', detail: 'Resuelve lo práctico antes de venir.', href: '/visita/' },
    ],
    cta: 'Preparar una escapada', href: '/visita/',
  },
];
