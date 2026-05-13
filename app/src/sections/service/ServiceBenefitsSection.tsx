import {
  Heart, Target, Smile, Moon, Sun, Dumbbell, AlignVerticalJustifyCenter,
  Shield, TrendingUp, Search, User, Circle, Brain, Compass, Check,
} from 'lucide-react';
import { Service } from '@/types';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  Heart, Target, Smile, Moon, Sun, Dumbbell, AlignVerticalJustifyCenter, Zap: Sun,
  Shield, TrendingUp, Search, User, Circle, Brain, Compass, Check,
};

interface Props {
  service: Service;
}

export default function ServiceBenefitsSection({ service }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-sage-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeader label="Benefits" heading={`Benefits of ${service.name}`} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {service.benefits.map((benefit, i) => {
            const IconComponent = iconMap[benefit.icon] || Heart;
            return (
              <ScrollReveal key={benefit.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group h-full">
                  <IconComponent className="w-10 h-10 text-green-800 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h4 className="font-heading text-lg text-green-950 mb-2">{benefit.title}</h4>
                  <p className="font-body text-sm text-green-800 leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
