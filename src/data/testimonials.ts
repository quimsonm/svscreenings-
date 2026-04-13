export interface Testimonial {
  quote: string;
  name: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Outstanding! Highly recommended for everyone to get your health in check. Greatly appreciated their work.',
    name: 'Alaktrician O.',
    rating: 5,
  },
  {
    quote: 'Excellent service.',
    name: 'Del Q.',
    rating: 5,
  },
  {
    quote: 'Mike and his ultrasound technicians were professional and made my experience very comfortable.',
    name: 'Joseph',
    rating: 5,
  },
  {
    quote: 'Quick service, very efficient, staff was welcoming, professional, and kind, office organized and pleasant. Made our medical visit painless and reassuring.',
    name: 'Caleb T.',
    rating: 5,
  },
  {
    quote: 'Mike and his team of ultrasound techs were knowledgeable, efficient and courteous. I highly recommend their services.',
    name: 'Kathy B.',
    rating: 5,
  },
];
