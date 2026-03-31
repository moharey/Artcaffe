export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Coffee' | 'Bakery' | 'Breakfast' | 'Lunch' | 'Dinner';
  image: string;
  dietary?: ('Vegan' | 'Gluten-Free' | 'Vegetarian')[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Artcaffe Signature Latte',
    description: 'Double shot of our house blend with silky steamed milk.',
    price: 450,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Almond Croissant',
    description: 'Flaky, buttery pastry filled with sweet almond cream.',
    price: 380,
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
    dietary: ['Vegetarian'],
  },
  {
    id: '3',
    name: 'Avocado Toast',
    description: 'Smashed avocado, poached egg, chili flakes on sourdough.',
    price: 850,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
    dietary: ['Vegetarian'],
  },
  {
    id: '4',
    name: 'Quinoa Salad',
    description: 'Fresh greens, roasted vegetables, lemon vinaigrette.',
    price: 1200,
    category: 'Lunch',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    dietary: ['Vegan', 'Gluten-Free'],
  },
  {
    id: '5',
    name: 'Grilled Salmon',
    description: 'Atlantic salmon with seasonal vegetables and herb butter.',
    price: 2400,
    category: 'Dinner',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    dietary: ['Gluten-Free'],
  },
  {
    id: '6',
    name: 'Cappuccino',
    description: 'Classic Italian style with thick foam and cocoa dusting.',
    price: 420,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800',
  }
];

export const LOCATIONS = [
  {
    id: '1',
    name: 'Westgate Mall',
    address: 'Mwanzi Rd, Nairobi',
    phone: '+254 700 000 001',
    hours: '7:00 AM - 10:00 PM',
    coordinates: { lat: -1.257, lng: 36.803 }
  },
  {
    id: '2',
    name: 'The Hub Karen',
    address: 'Dagoretti Rd, Nairobi',
    phone: '+254 700 000 002',
    hours: '7:00 AM - 11:00 PM',
    coordinates: { lat: -1.321, lng: 36.701 }
  },
  {
    id: '3',
    name: 'Village Market',
    address: 'Limuru Rd, Nairobi',
    phone: '+254 700 000 003',
    hours: '8:00 AM - 10:00 PM',
    coordinates: { lat: -1.229, lng: 36.804 }
  }
];
