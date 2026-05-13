import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Award, Globe } from 'lucide-react';
import gsap from 'gsap';

export default function CourseHeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = contentRef.current?.children;
    if (!els) return;
    gsap.fromTo(
      els,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.3 }
    );
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#1a1a0e] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 w-full pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
              Pranashakti, Healing &amp; Scanning Classes
            </h1>
            <p className="font-body text-base text-white/80 mt-5 max-w-lg leading-relaxed">
              Master the ancient art of energy healing with our comprehensive certification program.
              Transform your life and help others heal.
            </p>
            <div className="flex flex-wrap gap-6 mt-6">
              {[
                { icon: Clock, label: '27 Hours' },
                { icon: Award, label: 'Pranashakti USA, Inc. Certification' },
                { icon: Globe, label: 'Online & Offline' },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-2 text-yellow-500 font-body text-sm">
                  <Icon className="w-4 h-4" />
                  {label}
                </span>
              ))}
            </div>
            <p className="font-heading text-2xl text-yellow-500 mt-6">Starting at INR 21,000</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-yellow-500 text-green-950 px-8 py-3.5 rounded-md font-body font-medium text-sm hover:bg-yellow-400 transition-all hover:shadow-lg mt-6"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl card-lift">
              <div className="img-zoom-container">
                <img loading="lazy"
                  src="/images/course-hero-preview.jpg"
                  alt="Pranashakti Healing Course"
                  className="w-full h-48 lg:h-64 object-cover"
                />
              </div>
              <div className="p-3 lg:p-4 flex items-center gap-3 lg:gap-4 text-xs font-body text-green-800 bg-yellow-50">
                <span>27 Hours</span>
                <span className="hidden lg:inline">|</span>
                <span className="hidden lg:inline">Certification Included</span>
                <span className="hidden lg:inline">|</span>
                <span>Lifetime Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
