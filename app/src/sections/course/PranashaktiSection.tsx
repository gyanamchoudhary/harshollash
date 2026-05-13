import ScrollReveal from '@/components/ScrollReveal';

export default function PranashaktiSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        <ScrollReveal>
          <span className="inline-block font-body text-xs font-semibold tracking-[0.1em] uppercase text-green-800 mb-4">
            Understanding the Science
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-green-950">
            What is Pranashakti?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-body text-green-800 leading-relaxed mt-6 text-base lg:text-lg">
            Pranashakti is the ancient science of life force energy - the vital energy that flows
            through all living beings. Derived from Sanskrit, &apos;Prana&apos; means life force and
            &apos;Shakti&apos; means power or energy. This healing modality works on the principle that
            imbalances in our energy field manifest as physical, emotional, and spiritual ailments.
            By learning to channel and direct Pranashakti, a healer can restore balance, remove
            blockages, and activate the body&apos;s innate healing intelligence.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-sage-50 rounded-2xl p-8 lg:p-10 mt-10">
            <p className="font-heading text-lg lg:text-xl text-green-950 italic leading-relaxed">
              &ldquo;When Prana flows freely through the body, disease cannot exist. The healer&apos;s role
              is to remove the obstacles to this natural flow.&rdquo;
            </p>
            <p className="font-body text-sm text-green-800 mt-4">- Ancient Vedic Text</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <img loading="lazy"
            src="/images/pranashakti-wide.jpg"
            alt="Healer meditating with energy visualization"
            className="w-full rounded-2xl shadow-lg mt-10 object-cover aspect-[21/9]"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
