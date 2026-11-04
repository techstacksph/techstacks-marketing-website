import Image from 'next/image';
import { Band, SectionHeader } from '@/components/marketing';
import { serviceToolsLogo } from '@/constants/service-tools';

export default function ServiceTools() {
  return (
    <Band>
      <SectionHeader
        className="mb-10 lg:mb-14"
        description="We choose established technologies for each project, so what we build is fast, maintainable, and easy to grow."
        eyebrow="Technology"
        title="Proven tools, chosen for your goals"
      />
      <ul className="mx-auto grid max-w-4xl grid-cols-3 items-center gap-8 md:grid-cols-6">
        {serviceToolsLogo.map(({ logo, title }) => (
          <li key={title}>
            <Image
              alt={title}
              className="mx-auto h-12 w-auto object-contain"
              src={logo}
            />
          </li>
        ))}
      </ul>
    </Band>
  );
}
