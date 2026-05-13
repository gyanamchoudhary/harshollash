import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-yellow-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-sage-50/40 rounded-full blur-3xl" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <SectionHeader label="Testimonials" heading="What Our Clients Say" />

        <ScrollReveal className="mt-16">
          {/* Desktop: Horizontal scroll cards */}
          <div className="hidden lg:flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-[360px] snap-start bg-white rounded-2xl p-8 shadow-sm border border-green-600/10 transition-all duration-500 ${
                  i === activeIndex ? 'ring-2 ring-yellow-500/50 shadow-md' : ''
                }`}
              >
                <Quote className="w-8 h-8 text-yellow-500 mb-4" />
                <p className="font-script text-lg text-green-950 italic leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-body font-semibold text-green-950 text-sm">{testimonial.author}</p>
                    <p className="font-body text-xs text-green-700">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Single card with dots */}
          <div className="lg:hidden">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-green-600/10">
              <Quote className="w-8 h-8 text-yellow-500 mb-4" />
              <p className="font-script text-lg text-green-950 italic leading-relaxed mb-6">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-body font-semibold text-green-950 text-sm">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="font-body text-xs text-green-700">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-8 bg-green-800' : 'w-2.5 bg-green-600/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
