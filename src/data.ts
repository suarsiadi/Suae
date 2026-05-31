import { MenuItem, Testimonial, GalleryItem } from './types';

// Use our beautifully generated images from AI Studio
const SOUFFLE_HERO = '/src/assets/images/souffle_hero_1780228697669.png';
const MATCHA_PANCAKE = '/src/assets/images/matcha_pancake_1780228718092.png';
const CREME_BRULEE = '/src/assets/images/creme_brulee_1780228734326.png';
const CAFE_INTERIOR = '/src/assets/images/cafe_interior_1780228751921.png';

export const menuItems: MenuItem[] = [
  {
    id: 's1',
    name: 'Signature Original Cloud',
    description: 'Triple-stacked jiggly soufflé pancakes served with whipped honeycomb butter, pure maple syrup, and fresh organic strawberries.',
    price: 14.50,
    category: 'souffle',
    imageUrl: SOUFFLE_HERO,
    tags: ['Best Seller', 'Egg-forward'],
    isSpecialty: true
  },
  {
    id: 's2',
    name: 'Caramel Torched Crème Brûlée',
    description: 'Double fluffy pancake stack covered in micro-torched custard cream, leaving a glass-like caramelized sugar crust to crack before your first bite.',
    price: 16.50,
    category: 'souffle',
    imageUrl: CREME_BRULEE,
    tags: ['Must Try', 'Chef Favorite'],
    isSpecialty: true
  },
  {
    id: 's3',
    name: 'Uji Matcha Forest Drip',
    description: 'Fluffy soufflé stack enveloped in Uji matcha white chocolate glaze, sweet red bean paste (anko), and raspberries, dusted with premium matcha powder.',
    price: 15.50,
    category: 'souffle',
    imageUrl: MATCHA_PANCAKE,
    tags: ['Authentic', 'Vibrant'],
    isSpecialty: true
  },
  {
    id: 's4',
    name: 'Salted Caramel Lotus Cloud',
    description: 'Stacked soufflé pancakes loaded with cookie butter glaze, Speculoos crumb rain, a scoop of Madagascar vanilla bean gelato, and safe warm salted caramel pour.',
    price: 16.00,
    category: 'souffle',
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=600',
    tags: ['Decadent'],
    isSpecialty: false
  },
  {
    id: 's5',
    name: 'Wild Strawberry Blossom',
    description: 'Creamy sweet cheese whip, tart mixed berry coulis, fresh blackberries, and delicate edible pansies atop light-as-air pancakes.',
    price: 15.00,
    category: 'souffle',
    imageUrl: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=600',
    tags: ['Seasonal', 'Aesthetic'],
    isSpecialty: false
  },
  {
    id: 'v1',
    name: 'Truffle Smashed Avocado Soufflé',
    description: 'Savory herb soufflé pancake base topped with creamy smashed black-truffle avocado, feta cheese blocks, heirloom cherry tomatoes, and aged balsamic glaze.',
    price: 17.00,
    category: 'savory',
    imageUrl: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600',
    tags: ['Savory', 'Brunch Classic']
  },
  {
    id: 'v2',
    name: 'Crispy Bacon & Runny Egg Stack',
    description: 'Earthy pancake stack paired with thick-cut double-smoked maple bacon, a crispy-edge sunny side up farm egg, and warm jalapeño-maple syrup.',
    price: 16.50,
    category: 'savory',
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=600',
    tags: ['Savory', 'Hearty']
  },
  {
    id: 'd1',
    name: 'Strawberry Cloud Matcha',
    description: 'Beautifully layered: fresh sweet strawberry pureée base, organic ceremonial matcha green tea, creamy choice of milk, topped with velvet cold foam cream.',
    price: 7.50,
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600',
    tags: ['Signature Drink', 'No.1 Iced']
  },
  {
    id: 'd2',
    name: 'Rose Gold Latte',
    description: 'A light comforting specialty espresso drink sweetened with organic honey, double shot, steamed oat milk & delicate rosewater with real dried rosebuds.',
    price: 6.75,
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&q=80&w=600',
    tags: ['Hot', 'Floral']
  },
  {
    id: 'd3',
    name: 'Einspänner Espresso Cream',
    description: 'Double shot of house dark roast over crystal iced water, capped with two inches of thick, ultra-luxurious hand-whipped sweet heavy cream and cocoa dust.',
    price: 6.50,
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=600',
    tags: ['Strong', 'Creamy']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Chloe Lin',
    handle: '@chloe_eats',
    comment: 'The crème brûlée pancake changed my life structural chemistry 😭. When you crack that caramelized glaze with your spoon, the custard under it combined with the cloud pancake... Actual heaven and the vibe is so healing!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    order: 'Caramel Torched Crème Brûlée'
  },
  {
    id: 't2',
    name: 'Jake Reynolds',
    handle: '@jake_bakes',
    comment: 'Perfect lighting for TikTok, and the Strawberry Cloud Matcha is absolute art. Honestly, the soft-beige minimalist decor made me stay here for three hours. This is my new default weekend study spot.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    order: 'Strawberry Cloud Matcha & Original'
  },
  {
    id: 't3',
    name: 'Shira Patel',
    handle: '@shira.bite',
    comment: 'Unbelievably jiggly soufflé pancakes that dissolve on your tongue. Not too sweet at all, which is the ultimate Asian dessert compliment! The Truffle Avocado Savory option is also ridiculously delicious.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    order: 'Uji Matcha Forest & Truffle Avocado'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    imageUrl: CAFE_INTERIOR,
    title: 'Minimalist Dining Deck',
    tag: 'Atmosphere',
    colSpan: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'g2',
    imageUrl: MATCHA_PANCAKE,
    title: 'Matcha Pancake Prep',
    tag: 'Craft',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g3',
    imageUrl: CREME_BRULEE,
    title: 'Torched Caramel Crust',
    tag: 'Detail',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g4',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600',
    title: 'Artisanal Beverage Bar',
    tag: 'Brew',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g5',
    imageUrl: SOUFFLE_HERO,
    title: 'Signature Classic Stack',
    tag: 'Plating',
    colSpan: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 'g6',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600',
    title: 'The Cozy Corner',
    tag: 'Vibe',
    colSpan: 'md:col-span-2 md:row-span-1',
  }
];
