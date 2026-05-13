import { Service } from '@/types';
import ScrollReveal from '@/components/ScrollReveal';

interface Props {
  service: Service;
}

export default function ServiceStepsSection({ service }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="space-y-20">
          {service.process.map((step, i) => (
            <ScrollReveal key={step.number} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="bg-gradient-to-br from-yellow-50 to-sage-50 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                    <span className="font-heading text-8xl text-green-800/10">
                      {String(step.number).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className={i % 2 !== 0 ? 'lg:order-1 lg:text-right' : ''}>
                  <span className="font-heading text-6xl text-yellow-500/50">{step.number}</span>
                  <h3 className="font-heading text-2xl text-green-950 -mt-2 mb-4">{step.title}</h3>
                  <p className="font-body text-green-800 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
