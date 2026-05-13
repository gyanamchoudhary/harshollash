import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { pricingPlans } from '@/data/course';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

export default function PricingSection() {
  return (
    <section className="py-20 lg:py-28 bg-sage-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-200/20 rounded-full blur-3xl" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <SectionHeader
          label="Pricing"
          heading="Choose Your Wellness Journey"
          description="Flexible pricing options designed to support your spiritual growth and healing journey."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          {pricingPlans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.15}>
              <div
                className={`relative rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 ${
                  plan.featured
                    ? 'bg-green-950 text-white shadow-xl ring-2 ring-yellow-500/30'
                    : 'bg-white border-2 border-green-600/30 shadow-md'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-green-950 text-xs font-body font-semibold px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </span>
                )}
                <h3
                  className={`font-heading text-xl mb-2 ${
                    plan.featured ? 'text-white' : 'text-green-950'
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className={`font-heading text-3xl lg:text-4xl ${
                      plan.featured ? 'text-yellow-500' : 'text-green-950'
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                <p
                  className={`font-body text-sm mb-6 ${
                    plan.featured ? 'text-white/85' : 'text-green-800'
                  }`}
                >
                  {plan.period}
                </p>

                <div className="border-t border-current border-opacity-20 pt-6 mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            plan.featured ? 'text-yellow-500' : 'text-green-800'
                          }`}
                        />
                        <span
                          className={`font-body text-sm ${
                            plan.featured ? 'text-white/90' : 'text-green-800'
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3.5 rounded-md font-body font-medium text-sm transition-all hover:shadow-lg ${
                    plan.featured
                      ? 'bg-yellow-500 text-green-950 hover:bg-yellow-400'
                      : 'border-2 border-green-950 text-green-950 hover:bg-green-950 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
