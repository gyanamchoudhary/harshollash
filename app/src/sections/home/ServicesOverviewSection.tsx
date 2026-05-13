import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain, Flower2, Heart, Scan, Rainbow, Wind, Compass,
  ArrowRight
} from 'lucide-react';
import { services } from '@/data/services';
import ScrollReveal from '@/components/ScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  Brain, Flower2, Heart, Scan, Rainbow, Wind, Compass,
};

export default function ServicesOverviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const serviceCount = services.length;

  // Auto-rotate clockwise
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % serviceCount);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, serviceCount]);

  // Which card is currently at the top position
  const topIndex = (serviceCount - activeIndex) % serviceCount;

  // Generate spoke lines for SVG — static positions based on service count
  const spokeRadius = 420;
  const center = 500;
  const spokes = Array.from({ length: serviceCount }, (_, i) => {
    const angleDeg = i * (360 / serviceCount) - 90;
    const angleRad = (angleDeg * Math.PI) / 180;
    const x2 = center + Math.cos(angleRad) * spokeRadius;
    const y2 = center + Math.sin(angleRad) * spokeRadius;
    return { x2, y2, delay: i * 0.6 };
  });

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
          <div
            className="hidden lg:block relative h-[600px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* SVG Chakra Spokes */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Outer subtle ring */}
              <circle
                cx={center}
                cy={center}
                r={spokeRadius}
                fill="none"
                stroke="rgba(56, 63, 0, 0.06)"
                strokeWidth="1"
                className="animate-spoke-shimmer"
              />
              {/* Inner ring */}
              <circle
                cx={center}
                cy={center}
                r={spokeRadius * 0.65}
                fill="none"
                stroke="rgba(56, 63, 0, 0.04)"
                strokeWidth="1"
                className="animate-spoke-shimmer"
                style={{ animationDelay: '1s' }}
              />
              {/* Spokes */}
              {spokes.map((spoke, i) => (
                <line
                  key={i}
                  x1={center}
                  y1={center}
                  x2={spoke.x2}
                  y2={spoke.y2}
                  stroke="rgba(56, 63, 0, 0.1)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="animate-spoke-shimmer"
                  style={{ animationDelay: `${spoke.delay}s` }}
                />
              ))}
              {/* Small chakra dots at the end of each spoke */}
              {spokes.map((spoke, i) => (
                <circle
                  key={`dot-${i}`}
                  cx={spoke.x2}
                  cy={spoke.y2}
                  r="4"
                  fill="rgba(229, 204, 0, 0.2)"
                  className="animate-spoke-shimmer"
                  style={{ animationDelay: `${spoke.delay + 0.3}s` }}
                />
              ))}
            </svg>

            {/* Center — Breathing Heart */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              {/* Outer glow ring */}
              <div className="absolute w-28 h-28 rounded-full bg-yellow-400/10 animate-glow-pulse" />
              {/* Pulsing aura ring */}
              <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-yellow-200/30 to-green-200/20 animate-breathe" />
              {/* Main center circle */}
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-green-800 flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white animate-breathe" fill="white" />
              </div>
              {/* Label */}
              <p className="mt-3 font-body text-xs font-medium text-green-800 tracking-wider uppercase">
                Healing Core
              </p>
            </div>

            {/* Service cards orbiting */}
            {services.map((service, index) => {
              const angle = (index * (360 / serviceCount) - 90 + activeIndex * (360 / serviceCount)) * (Math.PI / 180);
              const radius = 220;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = index === topIndex;
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
