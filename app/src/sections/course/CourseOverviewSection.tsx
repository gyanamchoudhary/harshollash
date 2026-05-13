import { Check } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const highlights = [
  'Fundamentals of Pranashakti Energy',
  'Energy Channeling Techniques',
  'Body Scanning & Diagnosis Methods',
  'Aura Reading & Interpretation',
  'Distant Healing Practices',
  'Self-Healing Protocols',
  'Chakra Balancing Techniques',
  'Practical Hands-on Training',
];

export default function CourseOverviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block font-body text-xs font-semibold tracking-[0.1em] uppercase text-green-800 mb-4">
              Course Overview
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-green-950">
              What You Will Learn
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollReveal direction="left">
            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-4 p-4 bg-sage-50/50 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-green-800/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-800" />
                  </div>
                  <span className="font-body text-green-800">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <p className="font-body text-green-800 leading-relaxed text-base lg:text-lg">
                This comprehensive 27-hour program takes you on a transformative journey from
                beginner to certified Pranashakti healer. You will learn to sense, channel, and
                direct healing energy to restore balance in yourself and others. The course
                combines theoretical knowledge with extensive practical training, ensuring you
                graduate with confidence and competence.
              </p>
              <img loading="lazy"
                src="/images/course-overview-image.jpg"
                alt="Healing hands with energy"
                className="w-full rounded-2xl shadow-lg mt-8 object-cover aspect-video"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
