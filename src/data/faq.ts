export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = [
  'About Our Screenings',
  'Pricing & Payment',
  'Booking & Location',
  'Medical & Results',
] as const;

export const faqs: FAQItem[] = [
  // About Our Screenings
  {
    category: 'About Our Screenings',
    question: 'What is an ultrasound screening?',
    answer: 'An ultrasound screening uses high-frequency sound waves to create detailed images of your blood vessels, heart, and organs. It\'s completely non-invasive, painless, and uses no radiation — making it one of the safest diagnostic tools available.',
  },
  {
    category: 'About Our Screenings',
    question: 'Are the screenings painful?',
    answer: 'Not at all. Ultrasound screenings are completely painless. You\'ll feel gentle pressure from the ultrasound probe and some warm gel on your skin. Many patients find the experience relaxing.',
  },
  {
    category: 'About Our Screenings',
    question: 'How long does a screening take?',
    answer: 'Depending on your package, screenings take between 20–45 minutes. The Essential Wellness package takes approximately 20 minutes, the Executive Heart about 30 minutes, and The Gold Standard approximately 45 minutes.',
  },
  {
    category: 'About Our Screenings',
    question: 'Do I need a doctor\'s referral?',
    answer: 'No. Our preventative screening services do not require a doctor\'s referral. You can book directly with us. We believe everyone deserves easy access to preventative health information.',
  },
  {
    category: 'About Our Screenings',
    question: 'How should I prepare for my screening?',
    answer: 'For most screenings, no special preparation is needed. For abdominal aorta screening, we recommend fasting for 6–8 hours beforehand for the clearest images. Wear comfortable, loose-fitting clothing. We\'ll provide specific instructions when you book.',
  },
  {
    category: 'About Our Screenings',
    question: 'Who performs the screenings?',
    answer: 'All screenings are performed by highly trained and experienced sonographers with 5+ years of hands-on diagnostic experience. Our team has over a decade of experience working with Las Vegas clinics performing full diagnostic ultrasounds.',
  },

  // Pricing & Payment
  {
    category: 'Pricing & Payment',
    question: 'How much do screenings cost?',
    answer: 'We offer three packages: Essential Wellness ($199), Executive Heart ($349), and The Gold Standard ($597). All pricing is transparent with no hidden fees. Visit our pricing page for full details on what\'s included in each package.',
  },
  {
    category: 'Pricing & Payment',
    question: 'Do you accept insurance?',
    answer: 'Our preventative screening services are self-pay. However, many patients use their HSA (Health Savings Account) or FSA (Flexible Spending Account) to cover the cost. We provide detailed receipts that you can submit to your insurance for potential reimbursement.',
  },
  {
    category: 'Pricing & Payment',
    question: 'Can I use my HSA or FSA?',
    answer: 'Yes! Preventative health screenings are typically eligible expenses for HSA and FSA accounts. We accept all major credit and debit cards, including HSA/FSA cards, through our secure Square payment system.',
  },
  {
    category: 'Pricing & Payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and HSA/FSA cards. Payment is processed securely through Square.',
  },
  {
    category: 'Pricing & Payment',
    question: 'Are there any hidden fees?',
    answer: 'Absolutely not. The price you see is the price you pay. All screenings included in your chosen package are covered, with no surprise charges.',
  },

  // Booking & Location
  {
    category: 'Booking & Location',
    question: 'Where is your clinic?',
    answer: 'Our in-clinic screenings are performed at Frontline Medical Group, located at 3150 N Tenaya Wy Suite 400, Las Vegas, NV 89128. For Gold Standard patients, we come to you anywhere in the Greater Las Vegas area.',
  },
  {
    category: 'Booking & Location',
    question: 'What are your hours?',
    answer: 'Our in-clinic screening appointments are available on Saturdays from 9am to 1pm. Gold Standard mobile appointments are available by arrangement during reasonable daytime and evening hours.',
  },
  {
    category: 'Booking & Location',
    question: 'How do I book an appointment?',
    answer: 'You can book directly through our website by selecting your preferred package, or call us at 702.843.6612. We\'ll confirm your appointment within 24 hours.',
  },
  {
    category: 'Booking & Location',
    question: 'Can you come to me?',
    answer: 'Yes! Our Gold Standard package ($597) includes mobile service anywhere in the Greater Las Vegas area — including Henderson, Summerlin, and North Las Vegas. We bring hospital-grade equipment directly to your home or office at a time that works for you.',
  },
  {
    category: 'Booking & Location',
    question: 'What if I need to cancel or reschedule?',
    answer: 'We understand plans change. Please give us at least 24 hours notice for cancellations or reschedules. Contact us at 702.843.6612 or email signalviewultrasound@gmail.com to make changes.',
  },

  // Medical & Results
  {
    category: 'Medical & Results',
    question: 'When will I get my results?',
    answer: 'Essential Wellness and Executive Heart patients receive a same-day screening summary from their sonographer. Gold Standard patients receive a full report signed by a board-certified physician within 48 hours. All results are explained in clear, easy-to-understand language.',
  },
  {
    category: 'Medical & Results',
    question: 'What happens if something is found?',
    answer: 'If our screening detects any areas of concern, we\'ll provide you with a detailed report that you can share with your primary care physician for follow-up evaluation and treatment planning. Early detection is the whole point — and it gives you the best chance for a positive outcome.',
  },
  {
    category: 'Medical & Results',
    question: 'Can I share my results with my doctor?',
    answer: 'Absolutely. We encourage it. Your screening report is designed to be shared with your healthcare provider and includes all the clinical data they need for follow-up care.',
  },
  {
    category: 'Medical & Results',
    question: 'Is this a substitute for a doctor visit?',
    answer: 'Our screenings are preventative and designed to detect potential issues early. They complement — but don\'t replace — regular check-ups with your physician. Think of it as an extra layer of protection for your health.',
  },
];
