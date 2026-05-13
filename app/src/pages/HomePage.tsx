import HeroSection from '@/sections/home/HeroSection';
import VideoIntroSection from '@/sections/home/VideoIntroSection';
import CourseFeatureSection from '@/sections/home/CourseFeatureSection';
import ServicesOverviewSection from '@/sections/home/ServicesOverviewSection';
import TestimonialsSection from '@/sections/home/TestimonialsSection';
import TeamSection from '@/sections/home/TeamSection';
import PricingSection from '@/sections/home/PricingSection';
import CTASection from '@/sections/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoIntroSection />
      <CourseFeatureSection />
      <ServicesOverviewSection />
      <TestimonialsSection />
      <TeamSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
