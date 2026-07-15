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
  bookingUrl: string;
}

export const packages: Package[] = [
  {
    slug: 'essential-wellness',
    name: 'Essential Wellness',
    price: 199,
    highlighted: false,
    description: 'Three critical vascular screenings to evaluate your stroke risk, aneurysm risk, and leg circulation.',
    bestFor: 'General cardiovascular health check',
    duration: '~15 minutes',
    location: 'At our clinic',
    features: [
      'Carotid Artery Ultrasound',
      'Aorta Aneurysm Screening',
      'Leg Arterial Ultrasound',
      'Physician-interpreted report — delivered within 2 business days',
    ],
    bookingUrl: '/essential',
  },
  {
    slug: 'executive-heart',
    name: 'Executive Heart',
    price: 349,
    badge: 'Most Popular',
    highlighted: true,
    description: 'Our most comprehensive in-clinic package — everything in Essential Wellness plus a full cardiac ultrasound.',
    bestFor: 'Comprehensive heart and vascular health',
    duration: '~45 minutes',
    location: 'At our clinic',
    features: [
      'Carotid Artery Ultrasound',
      'Aorta Aneurysm Screening',
      'Leg Arterial Ultrasound',
      'Echocardiogram (Heart Ultrasound)',
      'Physician-interpreted report — delivered within 2 business days',
    ],
    bookingUrl: '/screenings',
  },
  {
    slug: 'gold-standard',
    name: 'The Gold Standard',
    price: 697,
    badge: 'Most Comprehensive',
    highlighted: false,
    description: 'Six ultrasound studies in one visit — heart, vascular, abdomen, and thyroid. The most complete scan we offer, all in 60 minutes.',
    bestFor: 'Head-to-toe screening in a single appointment',
    duration: '~60 minutes',
    location: 'At our clinic',
    features: [
      'Carotid Artery Ultrasound',
      'Aorta Aneurysm Screening',
      'Leg Arterial Ultrasound',
      'Echocardiogram (Heart Ultrasound)',
      'Abdomen Complete Ultrasound',
      'Thyroid Ultrasound',
      'Physician-interpreted report — delivered within 2 business days',
    ],
    bookingUrl: '/gold-standard',
  },
];
