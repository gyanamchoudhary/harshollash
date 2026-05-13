import { Service } from '@/types';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

interface Props {
  service: Service;
}

export default function ServiceProcessSection({ service }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-yellow-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeader label="How It Works" heading={`The ${service.name} Process`} />

        <div className="mt-16 relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-0.5 bg-green-800/20" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className="text-center relative">
                  <div className="w-14 h-14 rounded-full bg-green-950 text-white flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="font-heading text-xl">{step.number}</span>
                  </div>
                  <h4 className="font-heading text-lg text-green-950 mb-2">{step.title}</h4>
                  <p className="font-body text-sm text-green-800">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
