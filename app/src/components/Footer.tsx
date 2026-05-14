import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Send, CheckCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

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
    <footer className="bg-yellow-50 text-green-950">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        {/* Newsletter Section */}
        <div className="mb-16 pb-12 border-b border-green-950/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-light text-green-950 mb-3">
              Subscribe to Our Newsletter
            </h3>
            <p className="font-body text-sm text-green-800/70 mb-6 leading-relaxed">
              Receive weekly wisdom on meditation, healing, and spiritual wellness — 
              delivered with love to your inbox.
            </p>
            {subscribed ? (
              <div className="flex items-center justify-center gap-2 text-green-800 animate-in fade-in duration-500">
                <CheckCircle className="w-5 h-5 text-green-800" />
                <span className="font-body text-sm font-medium">Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-800/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    aria-label="Email address for newsletter subscription"
                    required
                    className="w-full h-12 pl-10 pr-4 rounded-md border border-green-950/10 bg-white font-body text-sm text-green-950 placeholder:text-green-800/40 focus:outline-none focus:border-green-800/30 focus:ring-1 focus:ring-green-800/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="h-12 px-6 bg-green-950 text-white rounded-md font-body text-sm font-medium hover:bg-green-900 transition-all hover:shadow-lg flex items-center justify-center gap-2 flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img loading="lazy"
                src="/images/logo_transparent (1).svg"
                alt="Harshollasha"
                className="h-28 lg:h-32 w-auto object-contain drop-shadow-[0_0_8px_rgba(253,224,71,0.4)]"
              />
            </Link>
            <p className="text-green-800 font-body text-sm leading-relaxed mb-6">
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
                  className="w-10 h-10 rounded-full bg-green-950/10 flex items-center justify-center text-green-950 hover:bg-green-950 hover:text-white transition-all duration-300"
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
                    className="text-green-800 hover:text-green-950 font-body text-sm transition-colors hover:underline underline-offset-4"
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
                    className="text-green-800 hover:text-green-950 font-body text-sm transition-colors hover:underline underline-offset-4"
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
                <Mail className="w-5 h-5 text-green-800 mt-0.5 flex-shrink-0" />
                <span className="text-green-800 font-body text-sm">info@harshollasha.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-800 mt-0.5 flex-shrink-0" />
                <span className="text-green-800 font-body text-sm">+91 99999 99999</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-800 mt-0.5 flex-shrink-0" />
                <span className="text-green-800 font-body text-sm">
                  HARSHOLLASHA Wellness Center,
                  <br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-950/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-green-800 font-body text-xs">
            &copy; {new Date().getFullYear()} HARSHOLLASHA. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-green-800 hover:text-green-950 font-body text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-green-800 hover:text-green-950 font-body text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
