import { NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Course', href: '/course' },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Meditation', href: '/services/meditation' },
      { label: 'Yoga', href: '/services/yoga' },
      { label: 'Healing', href: '/services/healing' },
      { label: 'Energy Scanning', href: '/services/energy-scanning' },
      { label: 'Aura Reading', href: '/services/aura-reading' },
      { label: 'Breathwork', href: '/services/breathwork' },
      { label: 'Spiritual Coaching', href: '/services/spiritual-coaching' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];
