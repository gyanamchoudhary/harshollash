import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

export default function TestimonialsSection() {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const TestimonialCard = ({
    testimonial,
  }: {
    testimonial: (typeof testimonials)[0];
  }) => (
    <div className="flex-shrink-0 w-[85vw] max-w-[340px] sm:w-[380px] bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-green-600/10 transition-shadow duration-300 hover:shadow-md">
      <Quote className="w-8 h-8 text-yellow-500 mb-4" />
      <p className="font-script text-lg text-green-950 italic leading-relaxed mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <img loading="lazy"
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="font-body font-semibold text-green-950 text-sm">
            {testimonial.author}
          </p>
          <p className="font-body text-xs text-green-800">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 lg:py-28 bg-yellow-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-sage-50/40 rounded-full blur-3xl" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <SectionHeader label="Testimonials" heading="What Our Clients Say" />
      </div>

      <ScrollReveal className="mt-16">
        {/* Marquee container */}
        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-yellow-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-yellow-50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex gap-6 animate-marquee w-max py-2 hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
