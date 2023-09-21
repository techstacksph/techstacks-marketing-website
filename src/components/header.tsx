'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useWindowScroll } from '@uidotdev/usehooks';
import { NavRoutes } from '@/constants/nav-routes';
import { cn } from '@/utils/cn';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';
import NavDrawer from './nav-drawer';
import { Separator } from './ui/separator';
import { HoverableChild, HoverableParent } from './hoverable';

export default function Header() {
  const [{ y }] = useWindowScroll();

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-16 transition backdrop-blur-sm border-b border-transparent',
        Boolean(y) && 'bg-primary/15 border-primary',
      )}
    >
      <div className="h-full px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-full">
          <NavDrawer className="block lg:hidden">
            <Button size="icon" variant="ghost">
              <Menu />
            </Button>
          </NavDrawer>
          <Link href={NavRoutes.Home}>
            <Image
              alt="Techstacks Logo"
              className="w-auto h-7"
              height={27}
              src="/images/techstacks-logo.svg"
              width={117}
            />
          </Link>

          <nav className="h-10">
            <ul className="flex h-full gap-4">
              {['About us', 'Products', 'Services', 'Careers', 'Trainings'].map(
                (route) => (
                  <HoverableParent
                    asChild
                    className="before:border-primary after:border-primary"
                    key={route}
                    variant="x"
                  >
                    <li className="hidden lg:block">
                      <HoverableChild
                        asChild
                        className="before:bg-primary hover:text-primary-foreground hover:font-medium"
                      >
                        <Link
                          className="flex h-full px-4 rounded place-items-center"
                          href="#"
                        >
                          {route}
                        </Link>
                      </HoverableChild>
                    </li>
                  </HoverableParent>
                ),
              )}
              <li className="hidden lg:block">
                <Separator orientation="vertical" />
              </li>
              <li className="hidden lg:block">
                <Button variant="outline">Get in touch &rarr;</Button>
              </li>

              <li>
                <ModeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
