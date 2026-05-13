import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Clock, Award, Globe } from 'lucide-react';
import gsap from 'gsap';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6')
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .fromTo(cardRef.current, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3');
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-background.jpg"
          alt="Person meditating on mountain at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 via-green-950/30 to-green-950/70" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-700/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-10 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <h1
              ref={headingRef}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] tracking-tight opacity-0"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
            >
              Inner Joy On
              <br />
              Every Face
            </h1>
            <p
              ref={subtitleRef}
              className="font-body text-base sm:text-lg text-white/90 mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-0"
            >
              Discover the transformative power of Pranashakti healing. Join thousands who have
              found peace, balance, and vitality through our ancient wellness practices.
            </p>
            <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 mt-8 justify-center lg:justify-start opacity-0">
              <Link
                to="/course"
                className="inline-flex items-center gap-2 bg-yellow-500 text-green-950 px-7 py-3.5 rounded-md font-body font-medium text-sm hover:bg-yellow-400 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Join Course
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center gap-2 border-2 border-white/80 text-white px-7 py-3.5 rounded-md font-body font-medium text-sm hover:bg-white/10 transition-all"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          {/* Right: Featured Course Card */}
          <div ref={cardRef} className="hidden lg:flex justify-end opacity-0">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 max-w-sm w-full hover:-translate-y-1 transition-transform duration-300">
              <div className="relative rounded-xl overflow-hidden mb-4">
                <img
                  src="/images/course-feature-image.jpg"
                  alt="Pranashakti Healing Course"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute top-3 left-3 bg-yellow-500 text-green-950 text-xs font-body font-semibold px-3 py-1 rounded-full">
                  FEATURED
                </div>
              </div>
              <h3 className="font-heading text-lg text-green-950 mb-1">
                Pranashakti Healing Course
              </h3>
              <div className="flex items-center gap-4 text-xs font-body text-green-800 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 27 Hours</span>
                <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5" /> Certified</span>
                <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> Online/Offline</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-heading text-xl text-green-950">INR 21,000</span>
                <Link
                  to="/course"
                  className="inline-flex items-center gap-1 text-sm font-body font-medium text-green-800 hover:text-green-950"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center animate-bounce-soft">
          <span className="text-white/80 font-body text-xs mb-2">Scroll Down</span>
          <ChevronDown className="w-5 h-5 text-white/80" />
        </div>
      </div>
    </section>
  );
}
