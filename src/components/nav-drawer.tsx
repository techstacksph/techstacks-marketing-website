import type { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Button } from './ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

interface NavDrawerProps {
  children: ReactNode;
  className?: string;
}

export default function NavDrawer(props: NavDrawerProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Slot {...props} />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
