import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { courseModules } from '@/data/course';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

export default function CourseModulesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-green-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeader
          label="Course Curriculum"
          heading="27 Hours of Transformative Learning"
          dark
        />

        <div className="mt-12 space-y-3">
          {courseModules.map((module, i) => (
            <ScrollReveal key={module.number} delay={i * 0.05}>
              <div className="bg-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-heading text-2xl text-yellow-500 w-8">
                      {module.number}
                    </span>
                    <div>
                      <h4 className="font-body font-medium text-white">{module.title}</h4>
                      <span className="font-body text-xs text-yellow-500">{module.duration}</span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-yellow-500 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 pb-5 pl-16">
                    <p className="font-body text-sm text-white/80 leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
