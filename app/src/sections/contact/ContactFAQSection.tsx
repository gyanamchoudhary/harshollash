import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqItems } from '@/data/faq';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeader label="FAQ" heading="Frequently Asked Questions" />
        <div className="mt-12 space-y-3">
          {faqItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="border border-green-600/20 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <h4 className="font-heading text-base text-green-950 pr-4">{item.question}</h4>
                  <Plus
                    className={`w-5 h-5 text-green-800 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 pb-5">
                    <p className="font-body text-sm text-green-800 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
