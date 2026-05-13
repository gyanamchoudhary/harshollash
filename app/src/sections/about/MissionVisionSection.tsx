import { Target, Eye } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function MissionVisionSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal direction="left">
            <div className="bg-sage-50 rounded-3xl p-8 lg:p-12 h-full">
              <Target className="w-14 h-14 text-green-800 mb-6" strokeWidth={1.5} />
              <span className="inline-block font-body text-xs font-semibold tracking-[0.1em] uppercase text-green-800 mb-4">
                Our Mission
              </span>
              <h3 className="font-heading text-2xl text-green-950 mb-4">Spreading Inner Joy</h3>
              <p className="font-body text-green-800 leading-relaxed">
                To make the ancient science of Pranashakti healing and spiritual wellness accessible
                to every corner of the world, empowering individuals to discover their innate healing
                abilities and live with purpose, peace, and vitality.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-blue-50 rounded-3xl p-8 lg:p-12 h-full">
              <Eye className="w-14 h-14 text-green-800 mb-6" strokeWidth={1.5} />
              <span className="inline-block font-body text-xs font-semibold tracking-[0.1em] uppercase text-green-800 mb-4">
                Our Vision
              </span>
              <h3 className="font-heading text-2xl text-green-950 mb-4">A World of Wellness</h3>
              <p className="font-body text-green-800 leading-relaxed">
                A world where every individual has access to holistic healing practices, where
                spiritual wellness is integrated into daily life, and where communities thrive
                through shared consciousness, compassion, and inner harmony.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
