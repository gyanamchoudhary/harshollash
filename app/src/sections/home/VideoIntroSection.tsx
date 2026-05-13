import { useState, useRef, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

export default function VideoIntroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play when lightbox opens, pause when closed
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

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
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
            aria-label="Play introduction video"
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
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white transition-colors z-10"
            onClick={() => setIsOpen(false)}
            aria-label="Close video"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="w-full max-w-5xl rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src="/harshollasha_hero_video_v2.mp4"
              controls
              controlsList="nodownload"
              playsInline
              className="w-full h-auto max-h-[85vh]"
              poster="/images/video-thumbnail.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
