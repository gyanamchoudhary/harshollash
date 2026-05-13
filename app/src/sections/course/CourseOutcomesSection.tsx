import { Award, Zap, Heart, Briefcase, Users, Sparkles } from 'lucide-react';
import { courseOutcomes } from '@/data/course';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  Award, Zap, Heart, Briefcase, Users, Sparkles,
};

export default function CourseOutcomesSection() {
  return (
    <section className="py-20 lg:py-28 bg-yellow-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeader label="Course Outcomes" heading="Transform Your Life & Career" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {courseOutcomes.map((outcome, i) => {
            const IconComponent = iconMap[outcome.icon] || Sparkles;
            return (
              <ScrollReveal key={outcome.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group h-full">
                  <IconComponent className="w-10 h-10 text-green-800 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h4 className="font-heading text-lg text-green-950 mb-2">{outcome.title}</h4>
                  <p className="font-body text-sm text-green-700 leading-relaxed">{outcome.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
