import Link from 'next/link';
import { Children, Fragment, forwardRef, type HTMLAttributes } from 'react';
import { GoHome } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import { nanoid } from 'nanoid';
import { Slot } from '@radix-ui/react-slot';
import { NavRoutes } from '@/constants/nav-routes';
import { cn } from '@/utils/cn';

type BreadCrumbsProps = HTMLAttributes<HTMLDivElement>;

export const BreadCrumbs = forwardRef<HTMLDivElement, BreadCrumbsProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={cn('flex flex-row items-center gap-2 text-lg', className)}
        ref={ref}
        {...props}
      >
        <Link href={NavRoutes.Home}>
          <GoHome />
        </Link>
        <IoIosArrowForward />

        {Children.map(children, (child, idx) => {
          const id = nanoid();

          if (idx === Children.count(children) - 1)
            return <Fragment key={id}>{child}</Fragment>;

          return (
            <Fragment key={id}>
              {child}
              <IoIosArrowForward />
            </Fragment>
          );
        })}
      </div>
    );
  },
);
BreadCrumbs.displayName = 'bread-crumbs';

type BreadCrumbItemProps = HTMLAttributes<HTMLParagraphElement> & {
  asChild?: boolean;
};
export const BreadCrumbItem = forwardRef<
  HTMLParagraphElement,
  BreadCrumbItemProps
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'p';
  return (
    <Comp
      className={cn('text-muted max-w-xs truncate', className)}
      {...props}
      ref={ref}
    />
  );
});
BreadCrumbItem.displayName = 'bread-crumb-item';
