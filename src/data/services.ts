export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  shortDescription: string;
  whatItIs: string;
  whyItMatters: string;
  whoShouldGet: string[];
  whatToExpect: string;
  includedIn: string[];
}

export const services: Service[] = [
  {
    slug: 'carotid-artery',
    title: 'Carotid Artery Screening',
    shortTitle: 'Carotid Artery',
    icon: 'artery',
    shortDescription: 'Ultrasound of the carotid arteries in the neck to evaluate for plaque buildup and blockages — the #1 screening for stroke prevention.',
    whatItIs: 'A non-invasive ultrasound of the carotid arteries in your neck — the brain\'s main blood supply.',
    whyItMatters: 'Carotid artery disease is a leading cause of stroke, and most people have no symptoms until it\'s too late. This screening detects plaque buildup and blockages before they become life-threatening. 80% of strokes are preventable with early detection.',
    whoShouldGet: [
      'Adults over 55',
      'Those with high blood pressure or high cholesterol',
      'Smokers or former smokers',
      'Family history of stroke or heart disease',
      'Diabetics',
    ],
    whatToExpect: 'A painless, non-invasive scan that takes approximately 15–20 minutes. A small probe is gently placed on your neck while our sonographer captures detailed images of blood flow through your carotid arteries.',
    includedIn: ['Essential Wellness', 'Executive Heart', 'The Gold Standard'],
  },
  {
    slug: 'aorta-aneurysm',
    title: 'Aorta Aneurysm Screening',
    shortTitle: 'Aorta Aneurysm',
    icon: 'aorta',
    shortDescription: 'Ultrasound of the abdominal aorta to detect aneurysms — often called the "silent killer" because there are no symptoms until rupture.',
    whatItIs: 'A non-invasive ultrasound of your abdominal aorta — the largest artery in your body.',
    whyItMatters: 'An abdominal aortic aneurysm is often called the "silent killer" because it produces no symptoms until it ruptures — at which point it is 90% fatal. When caught early, it is treatable and manageable. This simple screening can save your life.',
    whoShouldGet: [
      'Men over 65 (especially if they\'ve ever smoked)',
      'Women over 70 with cardiovascular risk factors',
      'Anyone with a family history of aortic aneurysm',
      'Those with high blood pressure',
      'Current or former smokers',
    ],
    whatToExpect: 'A quick, painless scan of your abdomen that takes approximately 10–15 minutes. You\'ll lie comfortably while our sonographer uses gentle pressure with the ultrasound probe to measure your aorta.',
    includedIn: ['Essential Wellness', 'Executive Heart', 'The Gold Standard'],
  },
  {
    slug: 'echocardiogram',
    title: 'Echocardiogram',
    shortTitle: 'Echocardiogram',
    icon: 'heart',
    shortDescription: 'Ultrasound of the heart to evaluate heart health, muscle contraction strength, and valve function.',
    whatItIs: 'A comprehensive ultrasound of your heart that evaluates how well your heart muscles are contracting and the integrity of your heart valves.',
    whyItMatters: 'Heart disease remains the #1 killer in America. An echocardiogram can detect weakened heart muscles, valve problems, and other cardiac conditions that often go undiagnosed. Early detection means earlier treatment and better outcomes.',
    whoShouldGet: [
      'Anyone with shortness of breath or chest discomfort',
      'Those with a family history of heart disease',
      'People with high blood pressure or diabetes',
      'Athletes wanting baseline heart health data',
      'Adults over 50 who\'ve never had a heart screening',
    ],
    whatToExpect: 'A painless, non-invasive scan where a probe is placed on your chest to capture detailed images of your heart in motion. Takes approximately 20–30 minutes.',
    includedIn: ['Executive Heart', 'The Gold Standard'],
  },
  {
    slug: 'peripheral-artery-disease',
    title: 'Peripheral Artery Disease Screening',
    shortTitle: 'Peripheral Artery',
    icon: 'leg',
    shortDescription: 'Ultrasound of the arteries in the legs to detect blockages, plaque, and blood flow restrictions.',
    whatItIs: 'A non-invasive ultrasound of the arteries in your legs to evaluate blood flow and check for blockages.',
    whyItMatters: 'Peripheral artery disease (PAD) affects over 8 million Americans and is a major warning sign for heart attack and stroke. Symptoms like leg pain, numbness, or swelling during walking are often dismissed as "just getting older" — but they can signal serious arterial blockages.',
    whoShouldGet: [
      'Those experiencing leg pain, cramping, or heaviness when walking',
      'People with numbness or tingling in their legs',
      'Smokers or former smokers',
      'Diabetics',
      'Anyone with known heart or vascular disease',
    ],
    whatToExpect: 'A painless scan of both legs that takes approximately 20–30 minutes. Our sonographer will trace the arterial blood flow from your upper thighs to your ankles.',
    includedIn: ['Essential Wellness', 'Executive Heart', 'The Gold Standard'],
  },
];
