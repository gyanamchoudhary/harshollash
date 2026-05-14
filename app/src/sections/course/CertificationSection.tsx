import { Globe, Briefcase, TrendingUp } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

const details = [
  { icon: Globe, title: 'Globally Recognized', text: 'Your certification is recognized by healing communities worldwide.' },
  { icon: Briefcase, title: 'Professional Practice', text: 'Start your own healing practice or join established wellness centers.' },
  { icon: TrendingUp, title: 'Continuing Education', text: 'Access advanced courses and ongoing professional development.' },
];

export default function CertificationSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeader label="Certification" heading="Get Certified by Pranashakti USA, Inc." />

        <ScrollReveal className="mt-12">
          <div className="bg-yellow-50 border-[3px] border-yellow-800 rounded-2xl p-8 lg:p-12 shadow-lg max-w-2xl mx-auto text-center">
            <div className="border-b-2 border-dashed border-yellow-800/30 pb-6 mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img
                  src="/images/logo_transparent (1).svg"
                  alt="Harshollasha"
                  className="h-24 w-auto object-contain"
                />
              </div>
              <h3 className="font-heading text-2xl text-green-950">Certificate of Completion</h3>
              <p className="font-body text-green-800 mt-2">Pranashakti Healing &amp; Scanning</p>
            </div>
            <p className="font-body text-green-800 leading-relaxed">
              This certifies that the bearer has successfully completed the 27-hour Pranashakti
              Healing &amp; Scanning certification program, demonstrating competency in energy
              healing, scanning, and spiritual wellness practices.
            </p>
            <div className="mt-6 pt-6 border-t border-yellow-800/20">
              <p className="font-heading text-lg text-green-950">Pranashakti USA, Inc.</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-8 mt-12">
          {details.map((detail, i) => (
            <ScrollReveal key={detail.title} delay={i * 0.15}>
              <div className="text-center">
                <detail.icon className="w-12 h-12 text-green-800 mx-auto mb-4" strokeWidth={1.5} />
                <h4 className="font-heading text-lg text-green-950 mb-2">{detail.title}</h4>
                <p className="font-body text-sm text-green-800">{detail.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
