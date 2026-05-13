import {
  AudioLines, Eye, Sparkles, Activity, Flame, Wind, Zap, CircleDot, Gem,
  Scan, Crosshair, BarChart3, Rainbow, Users, Compass, Brain,
} from 'lucide-react';
import { Service } from '@/types';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  AudioLines, Eye, Sparkles, Activity, Flame, Wind, Zap, CircleDot, Gem,
  Scan, Crosshair, BarChart3, Rainbow, Users, Compass, Brain, Waves: Wind,
};

interface Props {
  service: Service;
}

export default function ServiceTypesSection({ service }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeader label="Approaches" heading={`Types of ${service.name}`} />
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {service.types.map((type, i) => {
            const IconComponent = iconMap[type.icon] || Sparkles;
            return (
              <ScrollReveal key={type.title} delay={i * 0.1}>
                <div className="bg-yellow-50 rounded-2xl p-6 lg:p-8 h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1 group card-lift">
                  <IconComponent className="w-10 h-10 text-green-800 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h4 className="font-heading text-lg text-green-950 mb-2">{type.title}</h4>
                  <p className="font-body text-sm text-green-800 leading-relaxed">{type.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
