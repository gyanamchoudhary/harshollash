import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Course', href: '/course' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms', href: '#' },
  ];

  const services = [
    { label: 'Meditation', href: '/services/meditation' },
    { label: 'Yoga', href: '/services/yoga' },
    { label: 'Healing', href: '/services/healing' },
    { label: 'Energy Scanning', href: '/services/energy-scanning' },
    { label: 'Aura Reading', href: '/services/aura-reading' },
    { label: 'Breathwork', href: '/services/breathwork' },
    { label: 'Spiritual Coaching', href: '/services/spiritual-coaching' },
  ];

  return (
    <footer className="bg-green-950 text-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-500 to-green-800 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  <circle cx="12" cy="12" r="3" opacity="0.3" />
                </svg>
              </div>
              <span className="font-heading text-lg font-medium">HARSHOLLASHA</span>
            </Link>
            <p className="text-white/70 font-body text-sm leading-relaxed mb-6">
              Inner Joy On Every Face. Discover the transformative power of Pranashakti healing,
              meditation, and spiritual wellness.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-green-950 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white font-body text-sm transition-colors hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white font-body text-sm transition-colors hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 font-body text-sm">info@harshollasha.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 font-body text-sm">+91 99999 99999</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 font-body text-sm">
                  HARSHOLLASHA Wellness Center,
                  <br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 font-body text-xs">
            &copy; {new Date().getFullYear()} HARSHOLLASHA. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-white font-body text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white font-body text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
