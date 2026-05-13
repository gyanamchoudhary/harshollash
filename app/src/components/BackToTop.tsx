import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollTop > 500);
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-6 z-50 w-14 h-14 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center justify-center transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:-translate-y-1 group border border-green-950/5 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      {/* Progress ring */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 56 56"
      >
        <circle
          cx="28"
          cy="28"
          r="26"
          fill="none"
          stroke="#F5F0E0"
          strokeWidth="2"
        />
        <circle
          cx="28"
          cy="28"
          r="26"
          fill="none"
          stroke="#383F00"
          strokeWidth="2"
          strokeDasharray={`${2 * Math.PI * 26}`}
          strokeDashoffset={`${2 * Math.PI * 26 * (1 - progress / 100)}`}
          strokeLinecap="round"
          className="transition-all duration-150"
        />
      </svg>
      <ArrowUp className="w-5 h-5 text-green-950 transition-transform duration-300 group-hover:-translate-y-0.5 relative z-10" />
    </button>
  );
}
