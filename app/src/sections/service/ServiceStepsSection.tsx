import { Service } from '@/types';
import {
  Zap, Heart, Shield, Brain, Smile, Moon, Eye, Sun,
  Dumbbell, TrendingUp, Crosshair, Circle, Search, User, Compass,
  CircleDot, Gem, Wind, Activity, Flame, BarChart3, Users, Rainbow,
  Clock, Award, Globe, AudioLines, Sparkles, Target, AlignVerticalJustifyCenter
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

interface Props {
  service: Service;
}

const benefitIconMap: Record<string, React.ElementType> = {
  Zap, Heart, Shield, Brain, Smile, Moon, Eye, Sun,
  Dumbbell, TrendingUp, Crosshair, Circle, Search, User, Compass,
  CircleDot, Gem, Wind, Activity, Flame, BarChart3, Users, Rainbow,
  Clock, Award, Globe, AudioLines, Sparkles, Target, AlignVerticalJustifyCenter,
};

export default function ServiceStepsSection({ service }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-yellow-50/50 relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-950/10 to-transparent" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-green-800 mb-3 block">
              Benefits
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl text-green-950 font-light">
              Why Choose <em className="italic">{service.name}</em>
            </h2>
            <p className="font-body text-sm text-green-800 mt-4 max-w-lg mx-auto leading-relaxed">
              Experience transformative results through our carefully crafted {service.name.toLowerCase()} programs
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.benefits.map((benefit, i) => {
            const IconComponent = benefitIconMap[benefit.icon] || Heart;
            return (
              <ScrollReveal key={benefit.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl border border-green-950/5 p-6 lg:p-8 hover:shadow-lg hover:border-green-950/10 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-50 to-sage-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-green-800" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg text-green-950 mb-2 font-light">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-sm text-green-800 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
