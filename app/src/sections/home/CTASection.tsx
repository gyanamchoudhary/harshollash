import { Phone, Mail, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-green-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-800/30 rounded-full blur-3xl" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <ScrollReveal>
              <span className="inline-block font-body text-xs font-semibold tracking-[0.1em] uppercase text-yellow-500 mb-4">
                Get In Touch
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                Begin Your Healing Journey Today
              </h2>
              <p className="font-body text-white/80 mt-5 leading-relaxed max-w-md">
                Take the first step towards inner peace and wellness. Book a free consultation
                with our expert healers and discover the transformative power of Pranashakti.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-yellow-500" />
                </div>
                <span className="font-body text-white">+91 99999 99999</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-yellow-500" />
                </div>
                <span className="font-body text-white">info@harshollasha.com</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <ScrollReveal direction="right">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="font-heading text-xl text-green-950 mb-2">
                Book a Free Consultation
              </h3>
              <p className="font-body text-sm text-green-700 mb-6">
                Fill out the form and we&apos;ll get back to you shortly.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! We will contact you soon.');
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  className="w-full h-12 px-4 border border-gray-200 rounded-md font-body text-sm focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="w-full h-12 px-4 border border-gray-200 rounded-md font-body text-sm focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full h-12 px-4 border border-gray-200 rounded-md font-body text-sm focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none"
                />
                <select className="w-full h-12 px-4 border border-gray-200 rounded-md font-body text-sm focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none bg-white text-gray-500">
                  <option value="">Select Service</option>
                  <option value="meditation">Meditation</option>
                  <option value="yoga">Yoga</option>
                  <option value="healing">Healing</option>
                  <option value="energy-scanning">Energy Scanning</option>
                  <option value="aura-reading">Aura Reading</option>
                  <option value="breathwork">Breathwork</option>
                  <option value="spiritual-coaching">Spiritual Coaching</option>
                  <option value="course">Certification Course</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md font-body text-sm focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none resize-none"
                />
                <button
                  type="submit"
                  className="w-full h-12 bg-green-950 text-white rounded-md font-body font-medium text-sm hover:bg-green-900 transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
