export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'Menu' | 'Healthy Options' | 'Fresh Veggies';
  image?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'chin-chin',
    name: 'Chin Chin',
    description: 'Crispy, tasty snack made with quality ingredients.',
    category: 'Menu',
    image: 'https://picsum.photos/seed/chinchin/400/300'
  },
  {
    id: 'doughnuts',
    name: 'Doughnuts',
    description: 'Soft and delicious snack for homes and events.',
    category: 'Menu',
    image: 'https://picsum.photos/seed/doughnut/400/300'
  },
  {
    id: 'peanuts',
    name: 'Peanuts',
    description: 'Affordable event snack loved by everyone.',
    category: 'Menu',
    image: 'https://picsum.photos/seed/peanuts/400/300'
  },
  {
    id: 'banana-pancakes',
    name: 'Banana Pancakes',
    description: 'Naturally sweetened with banana.',
    category: 'Healthy Options',
    image: 'https://picsum.photos/seed/pancakes/400/300'
  },
  {
    id: 'baked-samosas',
    name: 'Baked Samosas',
    description: 'Light and tasty with veggie filling.',
    category: 'Healthy Options',
    image: 'https://picsum.photos/seed/samosa/400/300'
  },
  {
    id: 'fresh-veggies',
    name: 'Fresh Veggies',
    description: 'Clean, washed and diced veggies ready for cooking.',
    category: 'Fresh Veggies',
    image: 'https://picsum.photos/seed/veggies/400/300'
  }
];

export const WHATSAPP_NUMBER = '+2348154247467';
