import { useState } from 'react';
import { Play, X } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

export default function VideoIntroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeader
          label="Watch Introduction"
          heading="Experience the Journey Within"
        />
        <ScrollReveal delay={0.2} className="mt-12">
          <div
            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl cursor-pointer group img-zoom-container"
            onClick={() => setIsOpen(true)}
          >
            <img loading="lazy"
              src="/images/video-thumbnail.jpg"
              alt="HARSHOLLASHA Introduction Video"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-green-950/20 group-hover:bg-green-950/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-green-950 ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Video Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl aspect-video bg-green-950 rounded-xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-white/80 font-body text-center">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-40" />
              Video content coming soon
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
