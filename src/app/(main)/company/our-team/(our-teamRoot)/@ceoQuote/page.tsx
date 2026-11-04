import Link from 'next/link';
import { Band, SectionHeader } from '@/components/marketing';
import { Button } from '@/components/ui/button';
import { NavRoutes } from '@/constants/nav-routes';

export default function JoinTeam() {
  return (
    <Band>
      <div className="flex flex-col items-center gap-8">
        <SectionHeader
          description="We are always glad to hear from people who enjoy solving hard problems for real businesses."
          eyebrow="Careers"
          title="Want to join the team?"
        />
        <Button asChild size="lg" variant="outline">
          <Link href={NavRoutes.Company.Careers}>Explore careers</Link>
        </Button>
      </div>
    </Band>
  );
}
