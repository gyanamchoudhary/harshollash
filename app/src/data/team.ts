import { TeamMember } from '@/types';

export const founder: TeamMember = {
  name: 'Harshollasha Guruji',
  role: 'Founder & Spiritual Master',
  image: '/images/Guruji.png',
  socials: [
    { platform: 'instagram', url: '#' },
    { platform: 'youtube', url: '#' },
    { platform: 'facebook', url: '#' },
  ],
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Acharya Vivek',
    role: 'Senior Yoga Instructor',
    image: '/images/team-member-1.jpg',
  },
  {
    name: 'Dr. Meera Anand',
    role: 'Energy Healing Specialist',
    image: '/images/team-member-2.jpg',
  },
  {
    name: 'Swami Niranjan',
    role: 'Meditation Guide',
    image: '/images/team-member-3.jpg',
  },
  {
    name: 'Anjali Desai',
    role: 'Wellness Coach',
    image: '/images/team-member-4.jpg',
  },
];
