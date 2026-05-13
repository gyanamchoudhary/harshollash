import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('harshollasha-cookie-consent');
    if (!consent) {
      // Small delay for better UX - don't show immediately on load
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('harshollasha-cookie-consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('harshollasha-cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_-8px_32px_rgba(0,0,0,0.08)] border border-green-950/5 p-5 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-green-800" />
            </div>
            <div>
              <h3 className="font-heading text-base font-medium text-green-950 mb-1">
                We value your privacy
              </h3>
              <p className="font-body text-sm text-green-800/70 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, 
                and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 md:flex-none px-5 py-2.5 rounded-md font-body text-sm font-medium text-green-800 hover:bg-green-950/5 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 md:flex-none px-5 py-2.5 rounded-md bg-green-950 text-white font-body text-sm font-medium hover:bg-green-900 transition-all hover:shadow-md"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="hidden md:flex w-8 h-8 items-center justify-center rounded-full hover:bg-green-950/5 text-green-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
