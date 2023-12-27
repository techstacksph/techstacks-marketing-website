import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react';
import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { NavigationMenuLink } from './ui/navigation-menu';

interface ListItemProps extends ComponentPropsWithoutRef<typeof Link> {
  title: string;
  children: ReactNode;
  icon?: ReactNode; // You can use ReactNode for the icon to allow any valid JSX
}

const ListItem = forwardRef<ElementRef<'a'>, ListItemProps>(
  ({ className, title, children, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            className={cn(
              'group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-primary-static focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            ref={ref}
            {...props}
          >
            {icon ? (
              <div className="mr-2 group-hover:text-primary-static">{icon}</div>
            ) : null}{' '}
            {/* Add icon here */}
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium leading-none font-poppins">
                {title}
              </p>
              <p className="text-sm leading-snug font-dm-sans line-clamp-2 text-muted-foreground group-hover:text-black dark:group-hover:text-white">
                {children}
              </p>
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  },
);

ListItem.displayName = 'ListItem';

export { ListItem };

// const ListItem = forwardRef<
//   ElementRef<'a'>,
//   ComponentPropsWithoutRef<typeof Link>
// >(({ className, title, children, icon ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <Link
//           className={cn(
//             'group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
//             className,
//           )}
//           ref={ref}
//           {...props}
//         >
//           <p className="text-sm font-medium leading-none font-poppins">
//             {title}
//           </p>
//           <p className="text-sm leading-snug font-dm-sans line-clamp-2   text-muted-foreground group-hover:text-accent-foreground">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = 'ListItem';

// export { ListItem };
