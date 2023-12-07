import Link from 'next/link';
import { Section } from '@/components/default-elements';
import { TechstacksLogo } from '@/components/icons/techstacks-logo';
import { Button } from '@/components/ui/button';
import { H2, Subheading } from '@/components/ui/typography';
import { NavRoutes } from '@/constants/nav-routes';

export default function LearnMoreSection() {
  return (
    <Section>
      <div className="grid md:grid-cols-2">
        <div className="md:aspect-square">
          <div className="flex flex-col items-start justify-center h-full gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-primary-static">
              <span className="text-3xl">
                <TechstacksLogo />
              </span>{' '}
              <span className="font-medium font-poppins">Techstacks</span>
            </div>
            <div>
              <H2>Creating Exceptional User Experiences.</H2>
              <Subheading>
                The amazing team that makes all this possible
              </Subheading>
            </div>
            <Button asChild variant="secondary">
              <Link href={NavRoutes.Contact}>Learn more</Link>
            </Button>
          </div>
        </div>
        <div className="aspect-square">
          <div className="h-full">
            <div className="h-full p-20">TODO: Image</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
