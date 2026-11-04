import Link from 'next/link';
import { Band, SectionHeader } from '@/components/marketing';
import { Button } from '@/components/ui/button';
import { NavRoutes } from '@/constants/nav-routes';

export default function OurTeam() {
  return (
    <Band tone="surface">
      <div className="flex flex-col items-center gap-8">
        <SectionHeader
          description="Meet the leaders, developers, and specialists who will be working on your business."
          eyebrow="Our team"
          title="Know who you are working with"
        />
        <Button asChild size="lg" variant="outline">
          <Link href={NavRoutes.Company.OurTeam}>Meet the team</Link>
        </Button>
      </div>
    </Band>
  );
}
