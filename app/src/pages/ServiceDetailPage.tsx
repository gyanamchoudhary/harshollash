import { useParams } from 'react-router-dom';
import { services } from '@/data/services';
import ServiceHeroSection from '@/sections/service/ServiceHeroSection';
import ServiceTypesSection from '@/sections/service/ServiceTypesSection';
import ServiceProcessSection from '@/sections/service/ServiceProcessSection';
import ServiceBenefitsSection from '@/sections/service/ServiceBenefitsSection';
import ServiceCTASection from '@/sections/service/ServiceCTASection';
import NotFoundPage from '@/pages/NotFoundPage';

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <>
      <ServiceHeroSection service={service} />
      <ServiceTypesSection service={service} />
      <ServiceProcessSection service={service} />
      <ServiceBenefitsSection service={service} />
      <ServiceCTASection service={service} />
    </>
  );
}
