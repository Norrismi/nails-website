
import { ServiceCategory, Testimonial, GalleryImage } from './types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: 'Manicures',
    services: [
      {
        name: 'Classic Manicure',
        price: '$30',
        description: 'Nail shaping, cuticle care, massage, and polish application.',
        image: 'https://picsum.photos/seed/manicure1/400/300'
      },
      {
        name: 'Gel Manicure',
        price: '$45',
        description: 'Durable gel polish that lasts up to two weeks, includes nail shaping and cuticle care.',
        image: 'https://picsum.photos/seed/manicure2/400/300'
      },
      {
        name: 'Spa Manicure',
        price: '$55',
        description: 'An indulgent experience with exfoliation, hydrating mask, extended massage, and hot towel treatment.',
        image: 'https://picsum.photos/seed/manicure3/400/300'
      },
    ],
  },
  {
    name: 'Pedicures',
    services: [
      {
        name: 'Classic Pedicure',
        price: '$45',
        description: 'Foot soak, nail shaping, cuticle care, callus treatment, massage, and polish.',
        image: 'https://picsum.photos/seed/pedicure1/400/300'
      },
      {
        name: 'Gel Pedicure',
        price: '$60',
        description: 'Long-lasting gel polish for your toes, includes classic pedicure steps.',
        image: 'https://picsum.photos/seed/pedicure2/400/300'
      },
      {
        name: 'Deluxe Pedicure',
        price: '$75',
        description: 'A luxurious treatment with a foot mask, hot stone massage, paraffin wax, and extended hydration.',
        image: 'https://picsum.photos/seed/pedicure3/400/300'
      },
    ],
  },
  {
    name: 'Nail Art & Enhancements',
    services: [
      {
        name: 'Basic Nail Art',
        price: '$10+',
        description: 'Simple designs, glitter, or accent nails.',
        image: 'https://picsum.photos/seed/nailart1/400/300'
      },
      {
        name: 'Advanced Nail Art',
        price: '$25+',
        description: 'Intricate designs, hand-painted details, or 3D elements.',
        image: 'https://picsum.photos/seed/nailart2/400/300'
      },
      {
        name: 'Acrylic Full Set',
        price: '$65+',
        description: 'Durable nail extensions for added length and strength.',
        image: 'https://picsum.photos/seed/nailart3/400/300'
      },
      {
        name: 'Gel Extensions',
        price: '$75+',
        description: 'Lightweight and flexible nail extensions with a natural look.',
        image: 'https://picsum.photos/seed/nailart4/400/300'
      },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Luxe Nails is simply the best! My nails always look flawless, and the staff is incredibly friendly and professional. I wouldn't go anywhere else!",
    author: "Sarah J.",
    rating: 5,
  },
  {
    quote: "I had a wonderful spa pedicure here. It was so relaxing, and my feet feel amazing. The ambiance is perfect for a pampering session.",
    author: "Emily R.",
    rating: 5,
  },
  {
    quote: "The nail art designs are incredible! They brought my vision to life perfectly. Truly talented artists.",
    author: "Jessica L.",
    rating: 5,
  },
  {
    quote: "Clean, comfortable, and top-notch service. Every visit feels like a mini-vacation. Highly recommend!",
    author: "Maria P.",
    rating: 4,
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g1', src: 'https://picsum.photos/seed/gallery1/500/700', alt: 'Elegant Gel Manicure', category: 'manicure' },
  { id: 'g2', src: 'https://picsum.photos/seed/gallery2/600/400', alt: 'Relaxing Pedicure Spa', category: 'pedicure' },
  { id: 'g3', src: 'https://picsum.photos/seed/gallery3/450/600', alt: 'Intricate Floral Nail Art', category: 'nailart' },
  { id: 'g4', src: 'https://picsum.photos/seed/gallery4/700/500', alt: 'French Tip Manicure', category: 'manicure' },
  { id: 'g5', src: 'https://picsum.photos/seed/gallery5/550/450', alt: 'Deluxe Pedicure with Hot Stones', category: 'pedicure' },
  { id: 'g6', src: 'https://picsum.photos/seed/gallery6/650/800', alt: 'Abstract Geometric Nail Art', category: 'nailart' },
  { id: 'g7', src: 'https://picsum.photos/seed/gallery7/400/500', alt: 'Shiny Chrome Nails', category: 'manicure' },
  { id: 'g8', src: 'https://picsum.photos/seed/gallery8/500/350', alt: 'Spa Environment', category: 'pedicure' },
  { id: 'g9', src: 'https://picsum.photos/seed/gallery9/750/500', alt: 'Glitter Ombre Nail Art', category: 'nailart' },
  { id: 'g10', src: 'https://picsum.photos/seed/gallery10/600/750', alt: 'Matte Pink Acrylics', category: 'manicure' },
  { id: 'g11', src: 'https://picsum.photos/seed/gallery11/480/640', alt: 'Foot Scrub Station', category: 'pedicure' },
  { id: 'g12', src: 'https://picsum.photos/seed/gallery12/720/480', alt: 'Hand-painted Landscape Nails', category: 'nailart' },
  { id: 'g13', src: 'https://picsum.photos/seed/gallery13/500/700', alt: 'Classic Red Gel', category: 'manicure' },
  { id: 'g14', src: 'https://picsum.photos/seed/gallery14/600/400', alt: 'Pedi Chair Comfort', category: 'pedicure' },
  { id: 'g15', src: 'https://picsum.photos/seed/gallery15/450/600', alt: 'Seasonal Nail Art', category: 'nailart' },
  { id: 'g16', src: 'https://picsum.photos/seed/gallery16/700/500', alt: 'Ombre French Manicure', category: 'manicure' },
  { id: 'g17', src: 'https://picsum.photos/seed/gallery17/550/450', alt: 'Relaxing Foot Bath', category: 'pedicure' },
  { id: 'g18', src: 'https://picsum.photos/seed/gallery18/650/800', alt: 'Bridal Nail Art', category: 'nailart' },
  { id: 'g19', src: 'https://picsum.photos/seed/gallery19/400/500', alt: 'Nude Gel Nails', category: 'manicure' },
  { id: 'g20', src: 'https://picsum.photos/seed/gallery20/500/350', alt: 'Pedicure Station', category: 'pedicure' },
  { id: 'g21', src: 'https://picsum.photos/seed/gallery21/750/500', alt: 'Sparkle Nail Art', category: 'nailart' },
  { id: 'g22', src: 'https://picsum.photos/seed/gallery22/600/750', alt: 'Blue Ombre Manicure', category: 'manicure' },
];

export const CONTACT_INFO = {
  address: '123 Beauty Blvd, Spa City, SC 12345',
  phone: '(123) 456-7890',
  email: 'info@luxenailandspa.com',
  hours: {
    mondayFriday: 'Mon - Fri: 9:00 AM - 7:00 PM',
    saturday: 'Sat: 10:00 AM - 6:00 PM',
    sunday: 'Sun: Closed',
  },
};
