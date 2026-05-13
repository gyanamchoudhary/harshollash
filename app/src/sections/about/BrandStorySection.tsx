import ScrollReveal from '@/components/ScrollReveal';

export default function BrandStorySection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative img-zoom-container rounded-2xl shadow-xl">
              <img loading="lazy"
                src="/images/about-story-image.jpg"
                alt="HARSHOLLASHA Wellness Center"
                className="w-full rounded-2xl object-cover aspect-[3/4]"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-green-800 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="inline-block font-body text-xs font-semibold tracking-[0.1em] uppercase text-green-800 mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-green-950 leading-tight">
                A Journey of Spiritual Discovery
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="font-body text-green-800 leading-relaxed mt-6">
                HARSHOLLASHA was born from a deep calling to share the transformative power of ancient
                healing wisdom with the modern world. Our founder, Guruji, spent decades studying and
                practicing Pranashakti healing, meditation, and spiritual wellness across the sacred
                lands of India.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-body text-green-800 leading-relaxed mt-4">
                What began as a personal spiritual journey evolved into a mission to help others
                discover their inner joy, balance their energy, and live more fulfilling lives. Today,
                HARSHOLLASHA stands as a beacon of holistic wellness, combining time-honored traditions
                with contemporary understanding.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="font-body text-green-800 leading-relaxed mt-4">
                We believe that every individual carries within them the capacity for profound healing
                and transformation. Our mission is to awaken that potential and guide each person on
                their unique path to wellness.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
