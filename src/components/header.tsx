'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useWindowScroll } from '@uidotdev/usehooks';
import { NavRoutes } from '@/constants/nav-routes';
import { cn } from '@/utils/cn';
import { companyLink, pagesLink } from '@/constants/nav-links';
import { ListItem } from './list-item';
import { Button } from './ui/button';
import NavDrawer from './nav-drawer';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { ModeToggle } from './mode-toggle';
import BrandLogo from './brand-logo';

export default function Header() {
  const [{ y }] = useWindowScroll();

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-16 transition-all backdrop-blur-sm border-b border-transparent bg-gradient-to-r from-primary/0 to-transparent',
        Boolean(y) && 'from-primary/100 border-border',
      )}
    >
      <div className="h-full px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-full">
          <NavDrawer className="block lg:hidden">
            <Button className="flex self-center" size="icon" variant="ghost">
              <Menu />
            </Button>
          </NavDrawer>
          <Link href={NavRoutes.Home}>
            <BrandLogo
              className={cn(
                'text-primary-static dark:text-primary-foreground',
                Boolean(y) && 'text-white',
              )}
            />
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-row gap-4">
              {companyLink.map((company) => (
                <NavigationMenuItem
                  className="hidden lg:block"
                  key={company.title}
                >
                  <NavigationMenuTrigger
                    className="bg-transparent border-transparent font-poppins"
                    variant="link"
                  >
                    {company.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-full px-2 py-2">
                      {company.link.map((link) => (
                        <ListItem
                          className="cursor-pointer w-80"
                          href={link.href}
                          key={link.label}
                          title={link.label}
                        >
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              {pagesLink.map((page) => (
                <NavigationMenuItem
                  className="hidden lg:block"
                  key={page.title}
                >
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle({
                      className:
                        'font-poppins border-transparent bg-transparent',
                      variant: 'link',
                    })}
                  >
                    <Link href={page.href}>{page.title}</Link>
                  </NavigationMenuLink>
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
