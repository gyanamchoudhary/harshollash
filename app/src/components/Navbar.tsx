import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems } from '@/data/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section highlighting on home page
  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
      return;
    }

    const sections = ['services', 'testimonials', 'about', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const isSectionActive = (href: string) => {
    if (!isHome) return false;
    if (href === '/#services') return activeSection === 'services';
    if (href === '/#testimonials') return activeSection === 'testimonials';
    if (href === '/#about') return activeSection === 'about';
    if (href === '/#contact') return activeSection === 'contact';
    return false;
  };

  return (
    <nav
      className={`fixed top-3 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-18 sm:h-22 lg:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10">
            <img loading="lazy"
              src="/images/logo_transparent (1).svg"
              alt="Harshollasha"
              className="h-14 sm:h-18 lg:h-24 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className={`flex items-center gap-1 font-body text-sm font-medium transition-colors py-2 ${
                        isActive('/services')
                          ? scrolled
                            ? 'text-green-800'
                            : 'text-white'
                          : scrolled
                          ? 'text-green-950 hover:text-green-800'
                          : 'text-white/90 hover:text-white'
                      }`}
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-sage-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm font-body text-green-950 hover:bg-yellow-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-body text-sm font-medium transition-colors py-2 relative uppercase tracking-[0.12em] ${
                      isActive(item.href)
                        ? scrolled
                          ? 'text-green-800'
                          : 'text-white'
                        : scrolled
                        ? 'text-green-950 hover:text-green-800'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {/* Active indicator dot for pages */}
                    {isActive(item.href) && (
                      <span className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${scrolled ? 'bg-green-800' : 'bg-white'}`} />
                    )}
                    {/* Section active indicator for home page */}
                    {isSectionActive(item.href) && (
                      <span className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${scrolled ? 'bg-green-800' : 'bg-white'}`} />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919999999999"
              className={`flex items-center gap-2 text-sm font-body font-medium transition-colors ${
                scrolled ? 'text-green-800 hover:text-green-950' : 'text-white/90 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
            <Link
              to="/contact"
              className="bg-green-950 text-white px-5 py-2.5 rounded-md font-body text-sm font-medium hover:bg-green-900 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+919999999999"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                scrolled
                  ? 'bg-green-950 text-white hover:bg-green-900'
                  : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm'
              }`}
              aria-label="Call Us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className={`p-2 ${scrolled ? 'text-green-950' : 'text-white'}`}
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white">
              <div className="flex flex-col gap-1 mt-8">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left font-body text-green-950 font-medium"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {servicesOpen && (
                          <div className="pl-4 pb-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                className="block px-4 py-2.5 font-body text-sm text-green-800 hover:bg-yellow-50 rounded-lg transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-4 py-3 font-body font-medium rounded-lg transition-colors ${
                          isActive(item.href)
                            ? 'text-green-800 bg-yellow-50'
                            : 'text-green-950 hover:bg-yellow-50/50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="mt-4 px-4">
                  <Link
                    to="/contact#contact-form"
                    className="block w-full text-center bg-green-950 text-white py-3 rounded-md font-body font-medium hover:bg-green-900 transition-colors"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
