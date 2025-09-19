'use client';

// eslint-disable-next-line import/named -- no
import { useWindowScroll } from '@uidotdev/usehooks';
import { ArrowRight, Menu } from 'lucide-react';
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
          <Link className="hover:animate-mask-logo" href={NavRoutes.Home}>
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
                    <ul className="w-[450px] px-2 py-2">
                      {company.link.map(
                        ({ Icon, description, href, label }) => (
                          <ListItem
                            className="flex flex-row w-full gap-2 cursor-pointer"
                            href={href}
                            icon={<Icon className="w-8 h-6" />}
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
                    <Link href={page.href as string}>{page.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem className="hidden lg:block">
                <Button asChild className="items-center" variant="outline">
                  <Link href={NavRoutes.Contact}>
                    Get in touch
                    <ArrowRight className="inline w-4 h-4 ml-2" />
                  </Link>
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
