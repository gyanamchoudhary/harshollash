import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl animate-bounce-soft"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="white" />
    </a>
  );
}
