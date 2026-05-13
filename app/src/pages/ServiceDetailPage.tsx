import { useParams } from 'react-router-dom';
import { services } from '@/data/services';
import ServiceHeroSection from '@/sections/service/ServiceHeroSection';
import ServiceTypesSection from '@/sections/service/ServiceTypesSection';
import ServiceProcessSection from '@/sections/service/ServiceProcessSection';
import ServiceStepsSection from '@/sections/service/ServiceStepsSection';
import ServiceBenefitsSection from '@/sections/service/ServiceBenefitsSection';
import ServiceCTASection from '@/sections/service/ServiceCTASection';

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-green-950 mb-4">Service Not Found</h1>
          <p className="font-body text-green-700">The service you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ServiceHeroSection service={service} />
      <ServiceTypesSection service={service} />
      <ServiceProcessSection service={service} />
      <ServiceStepsSection service={service} />
      <ServiceBenefitsSection service={service} />
      <ServiceCTASection service={service} />
    </>
  );
}
