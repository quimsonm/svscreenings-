export interface Package {
  slug: string;
  name: string;
  price: number;
  badge?: string;
  highlighted: boolean;
  description: string;
  bestFor: string;
  duration: string;
  location: string;
  features: string[];
  extras?: string[];
  squareUrl: string;
}

export const packages: Package[] = [
  {
    slug: 'essential-wellness',
    name: 'Essential Wellness',
    price: 199,
    highlighted: false,
    description: 'Three critical vascular screenings to evaluate your stroke risk, aneurysm risk, and leg circulation.',
    bestFor: 'General cardiovascular health check',
    duration: '~45 minutes',
    location: 'At our clinic',
    features: [
      'Carotid Artery Ultrasound',
      'Aorta Aneurysm Screening',
      'Leg Arterial Ultrasound',
    ],
    squareUrl: 'https://book.squareup.com/appointments/65hfsxzse0og5r/location/L0YY91RC4GBKX/services/NFKPOQ3TZNUTK3EXQMH7YDQ3',
  },
  {
    slug: 'executive-heart',
    name: 'Executive Heart',
    price: 349,
    badge: 'Most Popular',
    highlighted: true,
    description: 'Our most comprehensive in-clinic package — everything in Essential Wellness plus a full cardiac ultrasound.',
    bestFor: 'Comprehensive heart and vascular health',
    duration: '~60 minutes',
    location: 'At our clinic',
    features: [
      'Carotid Artery Ultrasound',
      'Aorta Aneurysm Screening',
      'Leg Arterial Ultrasound',
      'Echocardiogram (Heart Ultrasound)',
    ],
    squareUrl: 'https://book.squareup.com/appointments/65hfsxzse0og5r/location/L0YY91RC4GBKX/services/HCX6T2SKQJIWQJ5GI64CLPFC',
  },
  {
    slug: 'gold-standard',
    name: 'The Gold Standard',
    price: 597,
    badge: 'White-Glove',
    highlighted: false,
    description: 'The ultimate concierge screening experience — we come to you, on your schedule, with all screenings and physician-signed reports included.',
    bestFor: 'Complete peace of mind with maximum convenience',
    duration: '~90 minutes',
    location: 'We come to you — anywhere in Greater Las Vegas',
    features: [
      'Carotid Artery Ultrasound',
      'Aorta Aneurysm Screening',
      'Leg Arterial Ultrasound',
      'Echocardiogram (Heart Ultrasound)',
    ],
    extras: [
      'Mobile service — we come to your home or office',
      'Flexible scheduling at your convenience',
      'Screening reports signed by a board-certified physician',
    ],
    squareUrl: 'https://book.squareup.com/appointments/65hfsxzse0og5r/location/L0YY91RC4GBKX/services/PA57N7OOXL7Z3Y6QCFZBKTD6',
  },
];
