import Link from 'next/link';
import { PageHero } from '@/components/marketing';
import { Button } from '@/components/ui/button';
import { NavRoutes } from '@/constants/nav-routes';

export default function ServicesHero() {
  return (
    <PageHero
      actions={
        <Button asChild size="lg">
          <Link href={NavRoutes.Contact}>Talk to our team</Link>
        </Button>
      }
      breadcrumb="Services"
      description="Whether you need more customers, a new product, extra engineering capacity, less manual work, or stronger security, we start from the result your business needs and build from there."
      eyebrow="Services"
      title="Technology services built around business results"
    />
  );
}
