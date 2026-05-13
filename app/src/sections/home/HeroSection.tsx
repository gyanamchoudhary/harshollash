import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Play } from 'lucide-react';
import gsap from 'gsap';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(kickerRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
      .fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.3')
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6')
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4');
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img loading="lazy"
          src="/images/hero-background.jpg"
          alt="Serene mountain landscape at golden hour"
          className="w-full h-full object-cover scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a0e]/55 via-[#1a1a0e]/35 to-[#1a1a0e]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a0e]/65 via-transparent to-transparent" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-10 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Social Proof Kicker */}
          <div
            ref={kickerRef}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 opacity-0"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="font-body text-xs text-white/90 uppercase tracking-[0.12em]">
              Trusted by 2,500+ Seekers Across India
            </span>
          </div>

          {/* Main Headline */}
          <h1
            ref={headingRef}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] tracking-[0.04em] opacity-0 font-light"
            style={{ textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}
          >
            Awaken the Healer
            <br />
            <span className="text-yellow-400">Within You</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="font-body text-base sm:text-lg text-white/85 mt-6 max-w-xl leading-relaxed opacity-0"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.3)' }}
          >
            Release stress, restore balance, and reconnect with your true self through
            <span className="text-white font-medium"> Pranashakti healing</span>, meditation, and energy scanning —
            guided by a certified master with 25+ years of practice.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 mt-10 opacity-0">
            <Link
              to="/contact#contact-form"
              className="inline-flex items-center gap-2 bg-yellow-500 text-green-950 px-8 py-4 rounded-md font-body font-semibold text-xs uppercase tracking-[0.15em] hover:bg-yellow-400 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/course"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/40 text-white px-8 py-4 rounded-md font-body font-medium text-xs uppercase tracking-[0.15em] hover:bg-white/20 transition-all"
            >
              <Play className="w-4 h-4" />
              Explore Programs
            </Link>
          </div>

          {/* Micro-trust row */}
          <div className="flex flex-wrap items-center gap-6 mt-10 text-white/70 font-body text-xs">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Certified by Pranashakti USA
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              27-Hour Certification Course
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Online & In-Person
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center animate-bounce-soft">
          <span className="text-white/70 font-body text-xs mb-2 uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 text-white/70" />
        </div>
      </div>
    </section>
  );
}
