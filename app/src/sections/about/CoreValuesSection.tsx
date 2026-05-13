import { Heart, BookOpen, TrendingUp, Users, Shield, Accessibility } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

const values = [
  { icon: Heart, title: 'Holistic Wellness', description: 'We believe in treating the whole person - body, mind, and spirit - as an interconnected system.' },
  { icon: BookOpen, title: 'Ancient Wisdom', description: 'Our practices are rooted in time-tested traditions that have healed generations.' },
  { icon: TrendingUp, title: 'Continuous Growth', description: 'We encourage lifelong learning and spiritual evolution on the path to self-realization.' },
  { icon: Users, title: 'Community', description: 'We foster a supportive community where seekers can learn, grow, and heal together.' },
  { icon: Shield, title: 'Integrity', description: 'We uphold the highest standards of authenticity and ethical practice in all our teachings.' },
  { icon: Accessibility, title: 'Accessibility', description: 'We strive to make spiritual wellness accessible to all, regardless of background or experience.' },
];

export default function CoreValuesSection() {
  return (
    <section className="py-20 lg:py-28 bg-sage-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeader label="What We Stand For" heading="Our Core Values" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group h-full">
                <value.icon className="w-10 h-10 text-green-800 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h4 className="font-heading text-lg text-green-950 mb-2">{value.title}</h4>
                <p className="font-body text-sm text-green-800 leading-relaxed">{value.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
