import { Check } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const features = [
  'Chakra System Analysis',
  'Energy Flow Mapping',
  'Blockage Identification',
  'Vibrational Frequency Reading',
];

export default function ScanReportSection() {
  return (
    <section className="py-20 lg:py-28 bg-sage-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <img loading="lazy"
              src="/images/scan-report-sample.jpg"
              alt="Energy Scan Report"
              className="w-full rounded-2xl shadow-xl object-cover"
            />
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="inline-block font-body text-xs font-semibold tracking-[0.1em] uppercase text-green-800 mb-4">
                Energy Diagnostics
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-green-950 leading-tight">
                Learn to Read Energy Scan Reports
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="font-body text-green-800 leading-relaxed mt-5">
                As part of the course, you will learn to perform comprehensive energy scans and
                interpret detailed reports. These reports reveal the state of your chakras, energy
                flow patterns, blockages, and overall vibrational health. Understanding these readings
                is essential for providing targeted, effective healing treatments.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-3 mt-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-800" />
                    <span className="font-body text-green-800">{feature}</span>
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
