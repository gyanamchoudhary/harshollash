import { Award, Calendar, Users, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const stats = [
  {
    icon: Award,
    value: '15+',
    label: 'Certifications',
  },
  {
    icon: Calendar,
    value: '12+',
    label: 'Years Experience',
  },
  {
    icon: Users,
    value: '2,500+',
    label: 'Happy Clients',
  },
  {
    icon: Star,
    value: '4.9',
    label: 'Google Rating',
  },
];

export default function TrustBar() {
  return (
    <section className="bg-yellow-50/80 border-y border-green-950/5">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:py-12">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-green-950/5 flex items-center justify-center mb-3 group-hover:bg-green-950/10 transition-colors">
                  <stat.icon className="w-5 h-5 text-green-800" strokeWidth={1.5} />
                </div>
                <span className="font-heading text-2xl lg:text-3xl text-green-950 font-light">
                  {stat.value}
                </span>
                <span className="font-body text-xs text-green-700 uppercase tracking-[0.12em] mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
