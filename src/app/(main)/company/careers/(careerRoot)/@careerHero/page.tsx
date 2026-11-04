import Image from 'next/image';
import Link from 'next/link';
import { careerTeam } from '@/assets/images';
import { PageHero } from '@/components/marketing';
import { Button } from '@/components/ui/button';
import { NavRoutes } from '@/constants/nav-routes';

export default function CareerHero() {
  return (
    <PageHero
      actions={
        <Button asChild size="lg">
          <Link href={NavRoutes.Contact}>Apply now</Link>
        </Button>
      }
      aside={
        <Image
          alt="The Techstacks team"
          className="mx-auto w-full max-w-md"
          priority
          sizes="(min-width: 992px) 50vw, 100vw"
          src={careerTeam}
        />
      }
      breadcrumb="Careers"
      description="Work with motivated peers on complex web projects for real businesses, and grow your skills with modern technology along the way."
      eyebrow="Careers"
      title="Do work that matters to real businesses"
    />
  );
}
