import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Award } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function CourseFeatureSection() {
  return (
    <section className="py-20 lg:py-28 bg-yellow-50 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-sage-50/50 rounded-full blur-3xl" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl shadow-xl">
              <div className="img-zoom-container rounded-2xl">
                <img loading="lazy"
                  src="/images/course-feature-image.jpg"
                  alt="Pranashakti Healing Course"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
              {/* Floating certification badge */}
              <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-4 lg:-right-8 bg-white rounded-full w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 shadow-lg border-4 border-green-800 flex flex-col items-center justify-center text-center p-2 sm:p-3 animate-float">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 mb-1" />
                <span className="font-body text-[10px] sm:text-[11px] lg:text-xs font-semibold text-green-800 leading-tight">
                  Certified by
                </span>
                <span className="font-body text-[9px] sm:text-[10px] lg:text-xs text-green-800">
                  Pranashakti USA
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <div>
            <ScrollReveal>
              <span className="inline-block font-body text-xs font-semibold tracking-[0.1em] uppercase text-green-800 mb-4">
                Featured Course
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-green-950 leading-tight">
                Pranashakti, Healing &amp; Scanning Classes
              </h2>
              <p className="font-body text-green-800 mt-5 leading-relaxed">
                A comprehensive 27-hour certification course that teaches you the ancient art of
                Pranashakti healing, energy scanning, and aura diagnosis. Certified by Pranashakti
                USA, Inc., this course combines traditional wisdom with modern techniques.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8">
                {[
                  { icon: Clock, value: '27', label: 'Hours' },
                  { icon: Users, value: '100+', label: 'Graduates' },
                  { icon: Award, value: 'USA', label: 'Certified' },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="text-center lg:text-left">
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mb-1 sm:mb-2">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-800 sm:mr-2 mb-1 sm:mb-0" />
                      <span className="font-heading text-xl sm:text-2xl lg:text-3xl text-green-950">{value}</span>
                    </div>
                    <p className="font-body text-[10px] sm:text-xs text-green-800">{label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link
                to="/course"
                className="inline-flex items-center gap-2 mt-8 bg-green-950 text-white px-7 py-3.5 rounded-md font-body font-medium text-sm hover:bg-green-900 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Course Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
