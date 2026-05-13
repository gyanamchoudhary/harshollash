import { CourseModule, PricingPlan, CourseOutcome } from '@/types';

export const courseModules: CourseModule[] = [
  {
    number: 1,
    title: 'Introduction to Pranashakti',
    duration: '3 Hours',
    description: 'History, philosophy, and fundamental concepts of life force energy. Understanding the origins of Pranashakti healing and its place in the broader system of Vedic sciences.',
  },
  {
    number: 2,
    title: 'Energy Anatomy',
    duration: '4 Hours',
    description: 'Understanding chakras, meridians, nadis, and the subtle body. Learn the intricate network of energy pathways that form the foundation of all healing work.',
  },
  {
    number: 3,
    title: 'Energy Sensing & Scanning',
    duration: '4 Hours',
    description: 'Techniques to sense and scan energy fields. Develop your natural ability to perceive subtle energies and identify imbalances in the body\'s energy system.',
  },
  {
    number: 4,
    title: 'Healing Techniques I',
    duration: '4 Hours',
    description: 'Basic hands-on healing methods and protocols. Learn the foundational techniques for channeling healing energy through your hands to restore balance.',
  },
  {
    number: 5,
    title: 'Healing Techniques II',
    duration: '4 Hours',
    description: 'Advanced healing including distant healing and group healing. Expand your capabilities to work across distances and with multiple recipients simultaneously.',
  },
  {
    number: 6,
    title: 'Aura Reading & Diagnosis',
    duration: '3 Hours',
    description: 'Interpreting auric fields and energy patterns. Learn to read the colors, layers, and patterns of the aura to gain deep insights into a person\'s well-being.',
  },
  {
    number: 7,
    title: 'Self-Healing & Practice',
    duration: '3 Hours',
    description: 'Personal healing routines and daily practice protocols. Establish your own self-healing practice and learn how to maintain optimal energy health.',
  },
  {
    number: 8,
    title: 'Certification & Professional Practice',
    duration: '2 Hours',
    description: 'Setting up your healing practice, ethics, and professional standards. Learn how to build a successful healing practice and serve your community with integrity.',
  },
];

export const courseOutcomes: CourseOutcome[] = [
  {
    title: 'Certified Healer',
    description: 'Earn your Pranashakti USA, Inc. certification and start your professional healing practice.',
    icon: 'Award',
  },
  {
    title: 'Energy Mastery',
    description: 'Develop the ability to sense, channel, and direct healing energy with precision and confidence.',
    icon: 'Zap',
  },
  {
    title: 'Holistic Wellness',
    description: 'Achieve profound personal transformation and maintain optimal physical, mental, and spiritual health.',
    icon: 'Heart',
  },
  {
    title: 'Career Opportunity',
    description: 'Open doors to a rewarding career in the rapidly growing wellness industry.',
    icon: 'Briefcase',
  },
  {
    title: 'Help Others',
    description: 'Gain the skills to facilitate healing and transformation in your family, friends, and clients.',
    icon: 'Users',
  },
  {
    title: 'Spiritual Growth',
    description: 'Deepen your spiritual practice and accelerate your journey toward self-realization.',
    icon: 'Sparkles',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Online Class',
    price: 'INR 21,000',
    period: 'One-time payment',
    features: [
      '27-Hour Live Training',
      'Digital Course Materials',
      'Online Certification',
      '6-Month Access to Recordings',
      'Email Support',
      'Community Access',
    ],
  },
  {
    name: 'Offline Class',
    price: 'INR 27,000',
    period: 'One-time payment',
    featured: true,
    badge: 'MOST POPULAR',
    features: [
      'Everything in Online',
      'In-Person Hands-on Training',
      'Physical Course Materials',
      'Physical Certificate',
      'Lifetime Access to Materials',
      '1-on-1 Energy Scanning Session',
      'Priority Support',
      'Networking Events',
    ],
  },
];
