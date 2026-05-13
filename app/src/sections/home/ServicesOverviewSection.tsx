import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain, Flower2, Heart, Scan, Rainbow, Wind, Compass,
  ChevronLeft, ChevronRight, ArrowRight
} from 'lucide-react';
import { services } from '@/data/services';
import ScrollReveal from '@/components/ScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  Brain, Flower2, Heart, Scan, Rainbow, Wind, Compass,
};

export default function ServicesOverviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % services.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-50/40 rounded-full blur-3xl" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 gap-4">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-green-950">
              Our Wellness Services
            </h2>
            <Link
              to="/services/meditation"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-green-800 hover:text-green-700 transition-colors group"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Orbit Carousel - Desktop */}
        <ScrollReveal>
          <div className="hidden lg:block relative h-[520px]">
            {/* Center decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-100 to-sage-50 flex items-center justify-center shadow-md z-10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-green-800 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Orbit trail */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border-2 border-green-800/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-green-800/5" />

            {/* Service cards */}
            {services.map((service, index) => {
              const angle = (index * (360 / services.length) - 90 + activeIndex * (360 / services.length)) * (Math.PI / 180);
              const radius = 220;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = index === 0;
              const IconComponent = iconMap[service.icon] || Heart;

              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="absolute top-1/2 left-1/2 transition-all duration-700 ease-out z-20"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div
                    className={`w-48 bg-white rounded-xl border border-green-600/20 p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      isActive ? 'border-green-800 shadow-lg scale-105' : ''
                    }`}
                  >
                    <IconComponent className="w-10 h-10 text-green-800 mb-3" strokeWidth={1.5} />
                    <h3 className="font-heading text-base text-green-950 mb-1">{service.name}</h3>
                    <p className="font-body text-xs text-green-700 leading-relaxed line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </div>
                </Link>
              );
            })}

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-green-600/30 flex items-center justify-center hover:bg-green-950 hover:text-white transition-all z-30"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-green-600/30 flex items-center justify-center hover:bg-green-950 hover:text-white transition-all z-30"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Heart;
            return (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                <ScrollReveal>
                  <div className="bg-white rounded-xl border border-green-600/20 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                    <IconComponent className="w-10 h-10 text-green-800 mb-4" strokeWidth={1.5} />
                    <h3 className="font-heading text-lg text-green-950 mb-2">{service.name}</h3>
                    <p className="font-body text-sm text-green-700 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </ScrollReveal>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
