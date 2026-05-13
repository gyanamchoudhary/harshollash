import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      {/* Tooltip label */}
      <div
        className={`bg-green-950 text-white text-xs font-body font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
        }`}
      >
        Chat with us
        <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-green-950 rotate-45" />
      </div>

      {/* Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-14 h-14 rounded-full bg-green-950 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl group"
        aria-label="Chat on WhatsApp"
      >
        {/* Breathing glow ring */}
        <span className="absolute inset-0 rounded-full bg-green-800/30 animate-ping-slow" />
        <span className="absolute inset-[-4px] rounded-full border border-[#C5B358]/40 animate-pulse-gentle" />

        <MessageCircle className="w-6 h-6 relative z-10" strokeWidth={1.5} />
      </a>
    </div>
  );
}
