import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ConsultationModal({ open, onOpenChange }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white border-2 border-green-600/20 rounded-2xl p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-heading text-2xl text-green-950">
            Book a Free Consultation
          </DialogTitle>
          <p className="font-body text-sm text-green-800 mt-2">
            Fill out the form and our team will contact you within 24 hours.
          </p>
        </DialogHeader>
        {submitted ? (
          <div className="p-6 pt-2 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-green-950 mb-2">Thank You!</h3>
            <p className="font-body text-green-800">We will contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 pt-4 space-y-4">
            <div>
              <Label className="font-body text-sm font-medium text-green-950">Full Name *</Label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="mt-1 h-12 border-gray-200 focus:border-green-700 focus:ring-green-700"
              />
            </div>
            <div>
              <Label className="font-body text-sm font-medium text-green-950">Email *</Label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="mt-1 h-12 border-gray-200 focus:border-green-700 focus:ring-green-700"
              />
            </div>
            <div>
              <Label className="font-body text-sm font-medium text-green-950">Phone</Label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 XXXXX XXXXX"
                className="mt-1 h-12 border-gray-200 focus:border-green-700 focus:ring-green-700"
              />
            </div>
            <div>
              <Label className="font-body text-sm font-medium text-green-950">Service Interest</Label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="mt-1 w-full h-12 px-3 border border-gray-200 rounded-md font-body text-sm focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none bg-white"
              >
                <option value="">Select a service</option>
                <option value="meditation">Meditation</option>
                <option value="yoga">Yoga</option>
                <option value="healing">Healing</option>
                <option value="energy-scanning">Energy Scanning</option>
                <option value="aura-reading">Aura Reading</option>
                <option value="breathwork">Breathwork</option>
                <option value="spiritual-coaching">Spiritual Coaching</option>
                <option value="course">Certification Course</option>
              </select>
            </div>
            <div>
              <Label className="font-body text-sm font-medium text-green-950">Message</Label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your goals..."
                className="mt-1 min-h-[100px] border-gray-200 focus:border-green-700 focus:ring-green-700"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-12 bg-green-950 hover:bg-green-900 text-white font-body font-medium rounded-md transition-all"
            >
              Send Message
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
