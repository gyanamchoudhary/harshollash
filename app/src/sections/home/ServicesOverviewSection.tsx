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

interface OrbitConfig {
  orbitRadius: number;
  containerHeight: number;
  cardWidth: string;
  cardPadding: string;
  iconSize: string;
  titleSize: string;
  descLines: string;
  heartSize: string;
  heartIconSize: string;
  glowSize: string;
  auraSize: string;
  svgPadding: number;
  bgCircleExtra: number;
}

const mobileConfig: OrbitConfig = {
  orbitRadius: 135,
  containerHeight: 400,
  cardWidth: 'w-24',
  cardPadding: 'p-2.5',
  iconSize: 'w-7 h-7',
  titleSize: 'text-xs',
  descLines: 'line-clamp-1',
  heartSize: 'w-10 h-10',
  heartIconSize: 'w-5 h-5',
  glowSize: 'w-20 h-20',
  auraSize: 'w-14 h-14',
  svgPadding: 50,
  bgCircleExtra: 80,
};

const tabletConfig: OrbitConfig = {
  orbitRadius: 190,
  containerHeight: 540,
  cardWidth: 'w-36',
  cardPadding: 'p-4',
  iconSize: 'w-9 h-9',
  titleSize: 'text-sm',
  descLines: 'line-clamp-2',
  heartSize: 'w-16 h-16',
  heartIconSize: 'w-7 h-7',
  glowSize: 'w-28 h-28',
  auraSize: 'w-20 h-20',
  svgPadding: 60,
  bgCircleExtra: 120,
};

const desktopConfig: OrbitConfig = {
  orbitRadius: 260,
  containerHeight: 720,
  cardWidth: 'w-44',
  cardPadding: 'p-5',
  iconSize: 'w-10 h-10',
  titleSize: 'text-base',
  descLines: 'line-clamp-2',
  heartSize: 'w-[72px] h-[72px]',
  heartIconSize: 'w-8 h-8',
  glowSize: 'w-36 h-36',
  auraSize: 'w-24 h-24',
  svgPadding: 80,
  bgCircleExtra: 160,
};

function OrbitCarousel({
  config,
  visibleClass,
}: {
  config: OrbitConfig;
  visibleClass: string;
}) {
  const [isPaused, setIsPaused] = useState(false);
  const serviceCount = services.length;
  const { orbitRadius } = config;
  const orbitDiameter = orbitRadius * 2;

  return (
    <div
      className={`${visibleClass} relative mx-auto ${isPaused ? 'orbit-paused' : ''}`}
      style={{ height: config.containerHeight, maxWidth: 900 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background tint for orbit area */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-50/60"
        style={{ width: orbitDiameter + config.bgCircleExtra, height: orbitDiameter + config.bgCircleExtra }}
      />

      {/* Center Heart — stays fixed, doesn't rotate */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center">
        {/* Outer glow ring */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 animate-glow-pulse ${config.glowSize}`} />
        {/* Pulsing aura ring */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-200/40 to-green-200/20 animate-breathe ${config.auraSize}`} />
        {/* Main center circle */}
        <div className={`relative rounded-full bg-gradient-to-br from-yellow-500 to-green-800 flex items-center justify-center shadow-lg ${config.heartSize}`}>
          <Heart className={`text-white animate-breathe ${config.heartIconSize}`} fill="white" />
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
          width={orbitDiameter + config.svgPadding}
          height={orbitDiameter + config.svgPadding}
          style={{
            position: 'absolute',
            top: -(orbitRadius + config.svgPadding / 2),
            left: -(orbitRadius + config.svgPadding / 2),
            pointerEvents: 'none',
            overflow: 'visible',
          }}
        >
          {/* Outer orbit ring */}
          <circle
            cx={orbitRadius + config.svgPadding / 2}
            cy={orbitRadius + config.svgPadding / 2}
            r={orbitRadius}
            fill="none"
            stroke="#C5B358"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
          {/* Inner orbit ring */}
          <circle
            cx={orbitRadius + config.svgPadding / 2}
            cy={orbitRadius + config.svgPadding / 2}
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
            const cx = orbitRadius + config.svgPadding / 2;
            const cy = orbitRadius + config.svgPadding / 2;
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
                  <div className={`${config.cardWidth} bg-white rounded-xl border border-green-600/20 shadow-md hover:shadow-xl transition-all cursor-pointer duration-300 hover:-translate-y-1 hover:scale-105 ${config.cardPadding}`}>
                    <IconComponent className={`text-green-800 mb-2 ${config.iconSize}`} strokeWidth={1.5} />
                    <h3 className={`font-heading text-green-950 mb-0.5 ${config.titleSize}`}>{service.name}</h3>
                    <p className={`font-body text-green-800 leading-relaxed ${config.descLines} ${config.titleSize === 'text-xs' ? 'text-[10px]' : 'text-xs'}`}>
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
  );
}

export default function ServicesOverviewSection() {
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
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-green-800 hover:text-green-950 transition-colors group"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Orbit Carousel — Mobile */}
        <ScrollReveal>
          <OrbitCarousel config={mobileConfig} visibleClass="block sm:hidden" />
        </ScrollReveal>

        {/* Orbit Carousel — Tablet */}
        <ScrollReveal>
          <OrbitCarousel config={tabletConfig} visibleClass="hidden sm:block lg:hidden" />
        </ScrollReveal>

        {/* Orbit Carousel — Desktop */}
        <ScrollReveal>
          <OrbitCarousel config={desktopConfig} visibleClass="hidden lg:block" />
        </ScrollReveal>
      </div>
    </section>
  );
}
