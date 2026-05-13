import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems } from '@/data/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[96px] lg:h-[140px]">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10">
            <img
              src="/images/logo_transparent.png"
              alt="Harshollasha"
              className="h-[72px] lg:h-24 w-auto object-contain"
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
                    className={`font-body text-sm font-medium transition-colors py-2 relative ${
                      isActive(item.href)
                        ? scrolled
                          ? 'text-green-800'
                          : 'text-white'
                        : scrolled
                        ? 'text-green-950 hover:text-green-800'
                        : 'text-white/90 hover:text-white'
                    } ${isActive(item.href) ? (scrolled ? 'border-b-2 border-green-800' : 'border-b-2 border-white') : ''}`}
                  >
                    {item.label}
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

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className={`lg:hidden p-2 ${scrolled ? 'text-green-950' : 'text-white'}`}
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
    </nav>
  );
}
