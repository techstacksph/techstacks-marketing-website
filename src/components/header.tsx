'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useWindowScroll } from '@uidotdev/usehooks';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { NavRoutes } from '@/constants/nav-routes';
import { cn } from '@/utils/cn';
import { companyLink, pagesLink } from '@/constants/nav-links';
import { ListItem } from './list-item';
import { Button } from './ui/button';
import NavDrawer from './nav-drawer';
import { HoverableChild, HoverableParent } from './hoverable';
import BrandLogo from './brand-logo';
import { Skeleton } from './ui/skeleton';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

const ModeToggle = dynamic(
  () => import('./mode-toggle').then((mod) => mod.ModeToggle),
  {
    loading: () => (
      <Button asChild size="icon">
        <Skeleton />
      </Button>
    ),
  },
);

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
            <BrandLogo />
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-row gap-4">
              <NavigationMenuItem className="hidden lg:block">
                {companyLink.map((company) => (
                  <Fragment key={company.title}>
                    <HoverableParent
                      asChild
                      className="before:border-primary after:border-primary"
                      variant="x"
                    >
                      <div>
                        <HoverableChild
                          asChild
                          className="before:bg-primary hover:text-primary-foreground hover:font-medium"
                        >
                          <NavigationMenuTrigger className="flex h-full px-4 rounded place-items-center bg-transparent ">
                            {company.title}
                          </NavigationMenuTrigger>
                        </HoverableChild>
                      </div>
                    </HoverableParent>
                    <NavigationMenuContent>
                      <ul className="w-full px-2 py-2">
                        {company.link.map((link) => (
                          <ListItem
                            className="w-80 cursor-pointer"
                            href={link.href}
                            key={link.label}
                            title={link.label}
                          >
                            {link.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </Fragment>
                ))}
              </NavigationMenuItem>
              {pagesLink.map((page) => (
                <NavigationMenuItem
                  className="hidden lg:block"
                  key={page.title}
                >
                  <HoverableParent
                    asChild
                    className="before:border-primary after:border-primary"
                    variant="x"
                  >
                    <div>
                      <HoverableChild
                        asChild
                        className="before:bg-primary hover:text-primary-foreground hover:font-medium"
                      >
                        <Link
                          className="flex h-full py-2 px-4  rounded place-items-center"
                          href={page.href}
                        >
                          {page.title}
                        </Link>
                      </HoverableChild>
                    </div>
                  </HoverableParent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem className="hidden lg:block">
                <Button variant="outline">Get in touch &rarr;</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ModeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
