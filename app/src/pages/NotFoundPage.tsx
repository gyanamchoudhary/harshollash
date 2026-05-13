import { Link } from 'react-router-dom';
import { Home, Search, ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-green-950/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-800/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center px-4 max-w-xl mx-auto">
        {/* 404 Number */}
        <div className="relative mb-8">
          <span className="font-heading text-[140px] md:text-[180px] font-light text-green-950/10 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-16 h-16 text-green-800/30" strokeWidth={1} />
          </div>
        </div>

        {/* Message */}
        <h1 className="font-heading text-3xl md:text-4xl font-light text-green-950 mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-green-800/80 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto">
          The page you're looking for seems to have wandered off on its own spiritual journey. 
          Let's guide you back to wellness.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 bg-green-950 text-white px-8 py-3.5 rounded-md font-body text-sm font-medium hover:bg-green-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/services/meditation"
            className="group inline-flex items-center gap-2 text-green-950 font-body text-sm font-medium hover:text-green-800 transition-colors"
          >
            Explore Services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-green-950/10">
          <p className="font-body text-xs text-green-800/60 uppercase tracking-widest mb-4">
            Popular Destinations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: 'Meditation', href: '/services/meditation' },
              { label: 'Yoga', href: '/services/yoga' },
              { label: 'Healing', href: '/services/healing' },
              { label: 'Courses', href: '/course' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-2 rounded-full bg-green-950/5 text-green-800 font-body text-xs hover:bg-green-950/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
