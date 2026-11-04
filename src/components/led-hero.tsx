import Image from 'next/image';
import Link from 'next/link';
import ledWall from '@/assets/images/led/led-wall.png';
import { PageHero } from '@/components/marketing';
import { Button } from '@/components/ui/button';
import { NavRoutes } from '@/constants/nav-routes';

export function LedHero() {
  return (
    <PageHero
      actions={
        <Button asChild size="lg">
          <Link href={NavRoutes.LEDInquire}>Get pricing and specs</Link>
        </Button>
      }
      aside={
        <Image
          alt="LED wall"
          className="w-full rounded-2xl"
          priority
          sizes="(min-width: 992px) 50vw, 100vw"
          src={ledWall}
        />
      }
      breadcrumb="LED Display"
      description="Premium, event-grade LED signage backed by a 20-year LED manufacturer, with strong pricing, proven quality, and ready stock in the Philippines."
      eyebrow="LED displays"
      title="Own your event LED screens. Stop paying for rentals."
    />
  );
}
