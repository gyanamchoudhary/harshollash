import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { Service } from '@/types';

interface Props {
  service: Service;
}

export default function ServiceHeroSection({ service }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = contentRef.current?.children;
    if (!els) return;
    gsap.fromTo(
      els,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 0.3 }
    );
  }, [service]);

  return (
    <section className="relative min-h-[70vh] flex items-end pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={service.heroImage}
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/60 to-transparent" />
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 w-full relative z-10 pt-32">
        <div ref={contentRef}>
          <p className="font-body text-sm text-white/60 mb-3">
            Home / Services / {service.name}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            {service.name}
          </h1>
          <p className="font-body text-white/90 mt-4 max-w-xl text-base lg:text-lg">
            {service.description}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-yellow-500 text-green-950 px-7 py-3.5 rounded-md font-body font-medium text-sm hover:bg-yellow-400 transition-all mt-6"
          >
            Book a Session
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
