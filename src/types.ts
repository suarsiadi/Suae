export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'souffle' | 'drinks' | 'savory';
  imageUrl: string;
  tags: string[];
  isSpecialty?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  comment: string;
  rating: number;
  avatarUrl: string;
  order: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  tag: string;
  colSpan?: string; // Tailwind grid layout
  rowSpan?: string;
}

export interface ReservationDetails {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'window' | 'nook' | 'terrace' | 'regular';
  isSpecialOccasion: boolean;
  notes?: string;
}
