import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

export default function CourseCTASection() {
  return (
    <section className="py-20 lg:py-28 bg-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <SectionHeader
          label="Enroll Today"
          heading="Start Your Healing Journey"
          description="Join hundreds of certified healers who have transformed their lives and careers through Pranashakti."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-12">
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-green-600/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="font-heading text-xl text-green-950 mb-2">Online Class</h3>
              <p className="font-heading text-3xl text-green-950 mb-4">INR 21,000</p>
              <p className="font-body text-xs text-green-700 mb-6">
                27-Hour Live Training | Digital Materials | Online Certification | 6-Month Access
              </p>
              <Link
                to="/contact"
                className="block w-full py-3 border-2 border-green-950 text-green-950 rounded-md font-body font-medium text-sm hover:bg-green-950 hover:text-white transition-all"
              >
                Enroll Online
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-green-950 rounded-2xl p-8 shadow-xl relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-green-950 text-xs font-body font-semibold px-4 py-1.5 rounded-full">
                RECOMMENDED
              </span>
              <h3 className="font-heading text-xl text-white mb-2">Offline Class</h3>
              <p className="font-heading text-3xl text-yellow-500 mb-4">INR 27,000</p>
              <p className="font-body text-xs text-white/70 mb-6">
                In-Person Hands-on Training | Physical Materials | Physical Certificate | Lifetime Access
              </p>
              <Link
                to="/contact"
                className="block w-full py-3 bg-yellow-500 text-green-950 rounded-md font-body font-medium text-sm hover:bg-yellow-400 transition-all"
              >
                Enroll Offline
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-2 mt-8">
            <Shield className="w-5 h-5 text-green-800" />
            <p className="font-body text-sm text-green-700">
              100% Satisfaction Guarantee - Full refund if not satisfied after the first module
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
