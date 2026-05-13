import CourseHeroSection from '@/sections/course/CourseHeroSection';
import CourseOverviewSection from '@/sections/course/CourseOverviewSection';
import CourseOutcomesSection from '@/sections/course/CourseOutcomesSection';
import PranashaktiSection from '@/sections/course/PranashaktiSection';
import ScanReportSection from '@/sections/course/ScanReportSection';
import CertificationSection from '@/sections/course/CertificationSection';
import CourseModulesSection from '@/sections/course/CourseModulesSection';
import CourseCTASection from '@/sections/course/CourseCTASection';

export default function CoursePage() {
  return (
    <>
      <CourseHeroSection />
      <CourseOverviewSection />
      <CourseOutcomesSection />
      <PranashaktiSection />
      <ScanReportSection />
      <CertificationSection />
      <CourseModulesSection />
      <CourseCTASection />
    </>
  );
}
