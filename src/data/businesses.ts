import { official } from './site';

export const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'comer', label: 'Dónde comer' },
  { id: 'dormir', label: 'Dónde dormir' },
  { id: 'actividades', label: 'Actividades' },
  { id: 'comercio', label: 'Comercio y servicios' },
] as const;
export type Category = Exclude<(typeof categories)[number]['id'], 'todos'>;
export interface Business {
  name: string;
  category: Category;
  detail: string;
  phone: string;
  address?: string;
  source: string;
}
// Selección informativa, orden alfabético, sin clasificación comercial.
// Los datos proceden de las páginas municipales; confirmar condiciones directamente.
export const businesses: Business[] = [
  { name: 'Ballsoccer Navaluenga', category: 'actividades', detail: 'Actividades lúdicas', phone: '634 244 838', source: official.services },
  { name: 'Blas Unide', category: 'comercio', detail: 'Alimentación', phone: '920 286 024', source: official.services },
  { name: 'Casa de Cucu', category: 'dormir', detail: 'Alojamiento rural', phone: '609 218 121', source: official.services },
  { name: 'Casa Rural Agua Clara', category: 'dormir', detail: 'Alojamiento rural', phone: '689 796 725', source: official.services },
  { name: 'Corralejo Pedrero', category: 'comercio', detail: 'Panadería y pastelería', phone: '920 287 081', source: official.services },
  { name: 'De Zamorano', category: 'comer', detail: 'Restaurante', phone: '618 552 218', address: 'Paseo de las Acacias, 12', source: official.food },
  { name: 'El Cortijo de Gredos', category: 'dormir', detail: 'Alojamiento rural', phone: '609 218 121', source: official.services },
  { name: 'Finca El Barranco', category: 'dormir', detail: 'Alojamiento rural', phone: '608 621 059', source: official.services },
  { name: 'Garnacha Alto Alberche', category: 'actividades', detail: 'Bodega · consulta las visitas', phone: '616 416 542', source: official.services },
  { name: 'La Galería', category: 'comer', detail: 'Restaurante', phone: '920 298 431', address: 'Calle Ermita, 16', source: official.food },
  { name: 'L’Albero', category: 'comer', detail: 'Pizzería', phone: '636 202 693', address: 'Carretera de Madrid, 104', source: official.food },
  { name: 'PaintBall Navaluenga', category: 'actividades', detail: 'Actividades lúdicas', phone: '655 931 649', source: official.services },
  { name: 'Restaurante Gema', category: 'comer', detail: 'Cocina castellana', phone: '920 298 478', address: 'Carretera de Madrid, s/n', source: official.food },
  { name: 'Restaurante Nuria', category: 'comer', detail: 'Cocina castellana', phone: '920 286 015', address: 'Calle Iglesia, 28', source: official.food },
];
