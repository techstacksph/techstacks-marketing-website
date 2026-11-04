'use client';

// eslint-disable-next-line import/named -- no
import { useWindowScroll } from '@uidotdev/usehooks';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { companyLink, pagesLink } from '@/constants/nav-links';
import { NavRoutes } from '@/constants/nav-routes';
import { cn } from '@/utils/cn';
import BrandLogo from './brand-logo';
import { ListItem } from './list-item';
import { ModeToggle } from './mode-toggle';
import NavDrawer from './nav-drawer';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

export default function Header() {
  const [{ y }] = useWindowScroll();

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-16 border-b border-transparent bg-background/95 backdrop-blur-sm transition-colors',
        Boolean(y) && 'border-border',
      )}
    >
      <div className="mx-auto h-full max-w-7xl px-4">
        <div className="flex h-full items-center justify-between">
          <NavDrawer className="block lg:hidden">
            <Button
              aria-label="Open menu"
              className="flex self-center"
              size="icon"
              variant="ghost"
            >
              <Menu />
            </Button>
          </NavDrawer>
          <Link aria-label="Techstacks home" href={NavRoutes.Home}>
            <BrandLogo className="text-primary-static" />
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-row gap-1">
              {pagesLink.map((page) => (
                <NavigationMenuItem
                  className="hidden lg:block"
                  key={page.title}
                >
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle({
                      className:
                        'border-transparent bg-transparent font-display',
                      variant: 'link',
                    })}
                  >
                    <Link href={page.href}>{page.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              {companyLink.map((company) => (
                <NavigationMenuItem
                  className="hidden lg:block"
                  key={company.title}
                >
                  <NavigationMenuTrigger
                    className="border-transparent bg-transparent font-display"
                    variant="link"
                  >
                    {company.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[420px] p-2">
                      {company.link.map(
                        ({ Icon, description, href, label }) => (
                          <ListItem
                            className="flex w-full cursor-pointer flex-row gap-2"
                            href={href}
                            icon={<Icon className="h-6 w-8" />}
                            key={label}
                            title={label}
                          >
                            {description}
                          </ListItem>
                        ),
                      )}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem className="ml-3 hidden lg:block">
                <Button asChild>
                  <Link href={NavRoutes.Contact}>Talk to our team</Link>
                </Button>
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
