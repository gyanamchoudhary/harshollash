import { Award, Clock, Users, BookOpen, Check } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const credentials = [
  'Certified Pranashakti Healing Master - Pranashakti USA, Inc.',
  '25+ Years of Spiritual Practice & Teaching',
  'Trained 1000+ Students Worldwide',
  'Expert in Meditation, Yoga & Energy Healing',
];

export default function FounderSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Portrait */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="img-zoom-container rounded-2xl shadow-xl">
              <img loading="lazy"
                src="/images/Guruji_aboutUs.png"
                alt="Harshollasha Guruji - Founder & Spiritual Master"
                className="w-full rounded-2xl object-cover aspect-[3/4]"
              />
            </div>
          </ScrollReveal>

          {/* Bio */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <span className="inline-block font-body text-xs font-semibold tracking-[0.1em] uppercase text-green-800 mb-4">
                Founder &amp; Spiritual Master
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-green-950">
                Harshollasha Guruji
              </h2>
              <p className="font-body text-green-800 mt-2">
                Pranashakti Healing Master | Meditation Guide | Spiritual Mentor
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="font-body text-green-800 leading-relaxed mt-6">
                Guruji embarked on his spiritual journey over two decades ago, seeking answers to
                life&apos;s deepest questions. Through years of intensive study and practice under
                renowned spiritual masters, he mastered the ancient art of Pranashakti healing - a
                powerful energy healing modality that channels life force to restore balance and vitality.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-body text-green-800 leading-relaxed mt-4">
                His teachings blend ancient Vedic wisdom with practical modern applications, making
                spiritual wellness accessible to seekers from all walks of life. Under his guidance,
                thousands have experienced profound healing, discovered their inner peace, and
                transformed their lives.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-6 mt-8 mb-8">
                {[
                  { icon: Award, label: 'Certified Master' },
                  { icon: Clock, label: '25+ Years' },
                  { icon: Users, label: '1000+ Students' },
                  { icon: BookOpen, label: 'Vedic Wisdom' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-green-800">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                    <span className="font-body text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="space-y-3">
                {credentials.map((cred) => (
                  <div key={cred} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-800 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-green-800">{cred}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
