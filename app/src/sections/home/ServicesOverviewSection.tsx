import { useState } from 'react';
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
  const [isPaused, setIsPaused] = useState(false);
  const serviceCount = services.length;

  const orbitRadius = 260;
  const orbitDiameter = orbitRadius * 2;

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
            className={`hidden lg:block relative mx-auto ${isPaused ? 'orbit-paused' : ''}`}
            style={{ height: 720, maxWidth: 900 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Subtle background tint for orbit area */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-50/60"
              style={{ width: orbitDiameter + 160, height: orbitDiameter + 160 }}
            />

            {/* Center Heart — stays fixed, doesn't rotate */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
              {/* Outer glow ring */}
              <div className="absolute w-36 h-36 rounded-full bg-yellow-400/10 animate-glow-pulse" />
              {/* Pulsing aura ring */}
              <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200/40 to-green-200/20 animate-breathe" />
              {/* Main center circle */}
              <div className="relative w-[72px] h-[72px] rounded-full bg-gradient-to-br from-yellow-500 to-green-800 flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white animate-breathe" fill="white" />
              </div>
            </div>

            {/* Rotating Orbit Wrapper */}
            <div
              className="animate-orbit"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 0,
                height: 0,
              }}
            >
              {/* SVG Spokes — rotates with the wrapper */}
              <svg
                width={orbitDiameter + 80}
                height={orbitDiameter + 80}
                style={{
                  position: 'absolute',
                  top: -(orbitRadius + 40),
                  left: -(orbitRadius + 40),
                  pointerEvents: 'none',
                  overflow: 'visible',
                }}
              >
                {/* Outer orbit ring */}
                <circle
                  cx={orbitRadius + 40}
                  cy={orbitRadius + 40}
                  r={orbitRadius}
                  fill="none"
                  stroke="#C5B358"
                  strokeWidth="1.5"
                  strokeOpacity="0.35"
                />
                {/* Inner orbit ring */}
                <circle
                  cx={orbitRadius + 40}
                  cy={orbitRadius + 40}
                  r={orbitRadius * 0.55}
                  fill="none"
                  stroke="#383F00"
                  strokeWidth="1"
                  strokeOpacity="0.12"
                />
                {/* Spokes */}
                {Array.from({ length: serviceCount }).map((_, i) => {
                  const angleDeg = i * (360 / serviceCount) - 90;
                  const angleRad = (angleDeg * Math.PI) / 180;
                  const cx = orbitRadius + 40;
                  const cy = orbitRadius + 40;
                  const x2 = cx + Math.cos(angleRad) * orbitRadius;
                  const y2 = cy + Math.sin(angleRad) * orbitRadius;
                  return (
                    <g key={i}>
                      <line
                        x1={cx}
                        y1={cy}
                        x2={x2}
                        y2={y2}
                        stroke="#C5B358"
                        strokeWidth="2"
                        strokeOpacity="0.35"
                        strokeLinecap="round"
                        className="animate-spoke-shimmer"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      />
                      {/* Chakra dot at spoke end */}
                      <circle
                        cx={x2}
                        cy={y2}
                        r="5"
                        fill="#E5CC00"
                        fillOpacity="0.45"
                        className="animate-spoke-shimmer"
                        style={{ animationDelay: `${i * 0.5 + 0.3}s` }}
                      />
                      {/* Small inner dot */}
                      <circle
                        cx={x2}
                        cy={y2}
                        r="2"
                        fill="#fff"
                        fillOpacity="0.6"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Service cards */}
              {services.map((service, index) => {
                const angleDeg = index * (360 / serviceCount) - 90;
                const angleRad = (angleDeg * Math.PI) / 180;
                const x = Math.cos(angleRad) * orbitRadius;
                const y = Math.sin(angleRad) * orbitRadius;
                const IconComponent = iconMap[service.icon] || Heart;

                return (
                  <div
                    key={service.slug}
                    style={{
                      position: 'absolute',
                      left: x,
                      top: y,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Counter-rotate so card stays upright */}
                    <div className="animate-counter-rotate">
                      <Link to={`/services/${service.slug}`}>
                        <div className="w-44 bg-white rounded-xl border border-green-600/20 p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                          <IconComponent className="w-10 h-10 text-green-800 mb-3" strokeWidth={1.5} />
                          <h3 className="font-heading text-base text-green-950 mb-1">{service.name}</h3>
                          <p className="font-body text-xs text-green-700 leading-relaxed line-clamp-2">
                            {service.shortDescription}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
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
