import { Heart, Leaf, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const pillars = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We approach every individual with deep empathy, understanding that each person\'s healing journey is unique and sacred.',
  },
  {
    icon: Leaf,
    title: 'Authenticity',
    description: 'Our teachings are rooted in genuine ancient wisdom, passed down through generations of spiritual masters and healers.',
  },
  {
    icon: Sparkles,
    title: 'Transformation',
    description: 'We are committed to facilitating profound, lasting change that empowers individuals to live their highest potential.',
  },
];

export default function PhilosophySection() {
  return (
    <section className="py-20 lg:py-28 bg-yellow-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-200/20 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
        <ScrollReveal>
          <span className="font-heading text-8xl text-green-800/20 leading-none">&ldquo;</span>
          <p className="font-heading text-xl sm:text-2xl lg:text-3xl text-green-950 italic leading-relaxed -mt-8">
            We believe that true wellness encompasses the harmony of body, mind, and spirit.
            Every individual carries within them the innate capacity for healing, growth, and
            transformation.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-8 mt-16">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <pillar.icon className="w-12 h-12 text-green-800 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-xl text-green-950 mb-3">{pillar.title}</h3>
                <p className="font-body text-sm text-green-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
