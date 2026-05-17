import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { SITE_CONFIG } from '@/config/site';

export default function AboutCTASection() {
  return (
    <section className="py-20 lg:py-28 bg-green-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
        <ScrollReveal>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white">
            Begin Your Transformation
          </h2>
          <p className="font-body text-white/80 mt-5 max-w-xl mx-auto">
            Join our community of seekers and discover the path to inner joy, wellness, and
            spiritual awakening.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-yellow-500 text-green-950 px-8 py-3.5 rounded-md font-body font-medium text-sm hover:bg-yellow-400 transition-all hover:shadow-lg"
            >
              Book a Consultation
            </Link>
            <Link
              to="/course"
              className="inline-flex items-center gap-2 border-2 border-white/80 text-white px-8 py-3.5 rounded-md font-body font-medium text-sm hover:bg-white/10 transition-all"
            >
              Explore Course
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-yellow-500">
              <Phone className="w-4 h-4" />
              <span className="font-body text-sm text-white">{SITE_CONFIG.phone.display}</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-500">
              <Mail className="w-4 h-4" />
              <span className="font-body text-sm text-white">{SITE_CONFIG.email}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
