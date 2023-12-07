import { MapPin } from 'lucide-react';
import type { HTMLAttributes } from 'react';
import Link from 'next/link';
import type { Job } from '@/constants/jobs';
import { NavRoutes } from '@/constants/nav-routes';
import { Button } from './ui/button';

type JobCardProps = Job & HTMLAttributes<HTMLDivElement>;

function JobCard({
  name,
  description,
  location,
  employment,
  ...props
}: JobCardProps) {
  return (
    <div
      className="border rounded-lg bg-background/50 backdrop-blur-md border-border"
      {...props}
    >
      <div className="h-full p-4">
        <div className="flex flex-col justify-between h-full gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full bg-primary-static shrink-0"
                role="none"
              />
              <h3 className="text-xl font-medium tracking-wide">{name}</h3>
            </div>
            <p className="text-foreground/50">{description}</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-2 text-foreground/75">
                <MapPin /> {location}
              </div>
              <div className="text-foreground/75">{employment}</div>
            </div>
            <Button
              asChild
              className="w-full bg-primary-static text-primary-foreground-static hover:bg-primary-static/80 md:w-fit"
            >
              <Link href={NavRoutes.Contact}>Apply now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { JobCard };
