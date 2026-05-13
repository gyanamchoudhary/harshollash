export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  icon: string;
  types: ServiceType[];
  process: ProcessStep[];
  benefits: Benefit[];
}

export interface ServiceType {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials?: { platform: string; url: string }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CourseModule {
  number: number;
  title: string;
  duration: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
  badge?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface CourseOutcome {
  title: string;
  description: string;
  icon: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}
