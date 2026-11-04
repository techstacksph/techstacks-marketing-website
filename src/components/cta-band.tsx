'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { NavRoutes } from '@/constants/nav-routes';
import { Band, SectionHeader } from './marketing';
import { Button } from './ui/button';

/** Closes every page with one clear next step, except where the visitor is already inquiring. */
export function CtaBand() {
  const pathname = usePathname();

  if (pathname === NavRoutes.Contact || pathname.endsWith('/inquire')) {
    return null;
  }

  return (
    <Band tone="ink">
      <div className="flex flex-col items-center gap-8">
        <SectionHeader
          description="Tell us where you want your business to be. We'll come back with a practical plan, a clear scope, and a transparent proposal."
          inverse
          title="Let's talk about what your business needs next"
        />
        <div className="flex w-full flex-col justify-center gap-3 md:w-auto md:flex-row">
          <Button asChild size="lg" variant="mint">
            <Link href={NavRoutes.Contact}>
              Talk to our team
              <ArrowRight aria-hidden className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline-inverse">
            <Link href={NavRoutes.Services}>Explore our services</Link>
          </Button>
        </div>
      </div>
    </Band>
  );
}
