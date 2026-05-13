import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import WhatsAppButton from '@/components/WhatsAppButton';
import ConsultationModal from '@/components/ConsultationModal';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import CoursePage from '@/pages/CoursePage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import BlogPage from '@/pages/BlogPage';
import ContactPage from '@/pages/ContactPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function AppLayout() {
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <ConsultationModal open={consultOpen} onOpenChange={setConsultOpen} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
