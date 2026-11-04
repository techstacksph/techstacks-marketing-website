import Link from 'next/link';
import { Section } from '@/components/default-elements';
import { SvgNotFound } from '@/components/icons/svg-not-found';
import { Button } from '@/components/ui/button';
import { H3, Subheading } from '@/components/ui/typography';
import { NavRoutes } from '@/constants/nav-routes';

export default function PageNotFound() {
  return (
    <Section className="md:py-40 py-10">
      <div className="flex flex-col justify-center items-center md:gap-10 gap-5">
        <SvgNotFound className="w-full" />
        <H3 className="text-center text-base md:text-4xl">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </H3>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Subheading>Please try to</Subheading>

          <Button asChild size="lg">
            <Link href={NavRoutes.Home}>Return to homepage</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
