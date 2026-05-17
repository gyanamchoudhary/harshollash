import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Service } from '@/types';
import ScrollReveal from '@/components/ScrollReveal';
import { SITE_CONFIG } from '@/config/site';

interface Props {
  service: Service;
}

export default function ServiceCTASection({ service }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-green-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
        <ScrollReveal>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white">
            Experience {service.name} Today
          </h2>
          <p className="font-body text-white/80 mt-5 max-w-xl mx-auto">
            Take the first step toward transformation. Book your {service.name.toLowerCase()} session
            with our expert practitioners.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-yellow-500 text-green-950 px-8 py-3.5 rounded-md font-body font-medium text-sm hover:bg-yellow-400 transition-all"
            >
              Book a Session
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.phone.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-body text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              Or WhatsApp Us
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-body text-yellow-500 mt-6">Starting from INR 2,100/session</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
