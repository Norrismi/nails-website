
export interface Service {
  name: string;
  price: string;
  description: string;
  image?: string;
}

export interface ServiceCategory {
  name: string;
  services: Service[];
}

export interface Testimonial {
  quote: string;
  author: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'all' | 'manicure' | 'pedicure' | 'nailart';
}
