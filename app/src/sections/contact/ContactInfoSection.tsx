import { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight, Facebook, Instagram, Youtube, Loader2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const contactCards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    info: 'HARSHOLLASHA Wellness Center,\nMumbai, Maharashtra, India',
    bg: 'bg-yellow-50',
  },
  {
    icon: Phone,
    title: 'Call Us',
    info: '+91 99999 99999',
    subInfo: 'Mon-Sat, 9:00 AM - 6:00 PM IST',
    bg: 'bg-sage-50',
  },
  {
    icon: Mail,
    title: 'Email Us',
    info: 'info@harshollasha.com',
    subInfo: 'We respond within 24 hours',
    bg: 'bg-blue-50',
  },
];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrejdjla';

export default function ContactInfoSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            {contactCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.15}>
                <div className={`${card.bg} rounded-2xl p-6 flex items-start gap-4`}>
                  <card.icon className="w-8 h-8 text-green-800 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-heading text-lg text-green-950 mb-1">{card.title}</h4>
                    <p className="font-body text-sm text-green-800 whitespace-pre-line">{card.info}</p>
                    {card.subInfo && (
                      <p className="font-body text-xs text-green-800 mt-1">{card.subInfo}</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.5}>
              <div className="mt-4">
                <h4 className="font-heading text-lg text-green-950 mb-4">Follow Us</h4>
                <div className="flex items-center gap-4">
                  {[
                    { Icon: Facebook, href: '#' },
                    { Icon: Instagram, href: '#' },
                    { Icon: Youtube, href: '#' },
                  ].map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      className="w-10 h-10 rounded-full bg-green-800/10 flex items-center justify-center text-green-800 hover:bg-green-800 hover:text-white transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Contact Form */}
          <ScrollReveal direction="right">
            <div id="contact-form" className="bg-white border-2 border-green-600/20 rounded-3xl p-8 shadow-lg">
              <h3 className="font-heading text-xl text-green-950 mb-2">Send Us a Message</h3>
              <p className="font-body text-sm text-green-800 mb-6">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-lg text-green-950">Thank You!</h4>
                  <p className="font-body text-sm text-green-800 mt-2">We will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    aria-label="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-12 px-4 border border-gray-200 rounded-md font-body text-sm focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    aria-label="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 px-4 border border-gray-200 rounded-md font-body text-sm focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-12 px-4 border border-gray-200 rounded-md font-body text-sm focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none"
                  />
                  <select
                    aria-label="Select Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full h-12 px-4 border border-gray-200 rounded-md font-body text-sm focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none bg-white text-gray-500"
                  >
                    <option value="">Select Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="course">Course Enrollment</option>
                    <option value="booking">Service Booking</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    placeholder="Your Message *"
                    aria-label="Your Message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md font-body text-sm focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none resize-none"
                  />
                  {error && (
                    <p className="text-red-600 font-body text-sm text-center">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-12 bg-green-950 text-white rounded-md font-body font-medium text-sm hover:bg-green-900 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
