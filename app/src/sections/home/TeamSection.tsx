import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { founder, teamMembers } from '@/data/team';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeader label="Our Team" heading="Meet Our Wellness Experts" />

        {/* Founder Card */}
        <ScrollReveal className="mt-16">
          <div className="bg-yellow-50 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg max-w-4xl mx-auto card-lift">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-80 flex-shrink-0 rounded-2xl shadow-md">
                <img loading="lazy"
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block font-body text-xs font-semibold tracking-[0.1em] uppercase text-green-800 mb-3">
                  Founder &amp; Guruji
                </span>
                <h3 className="font-heading text-2xl lg:text-3xl text-green-950 mb-2">
                  {founder.name}
                </h3>
                <p className="font-body text-green-800 text-sm mb-4">{founder.role}</p>
                <p className="font-body text-green-800 leading-relaxed text-sm lg:text-base mb-6">
                  With over 20 years of experience in Pranashakti healing, meditation, and
                  spiritual wellness, Guruji has transformed thousands of lives through his
                  teachings and healing sessions. His wisdom and compassion guide every aspect
                  of the HARSHOLLASHA journey.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border-2 border-green-950 text-green-950 px-6 py-2.5 rounded-md font-body font-medium text-sm hover:bg-green-950 hover:text-white transition-all"
                >
                  Learn More About Guruji
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-green-600/20 p-6 text-center hover:shadow-lg transition-all cursor-pointer duration-300 hover:-translate-y-1 group">
                <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-yellow-50 group-hover:ring-yellow-200 transition-all img-zoom-container">
                  <img loading="lazy"
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-heading text-lg text-green-950 mb-1">{member.name}</h4>
                <p className="font-body text-xs text-green-800">{member.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
