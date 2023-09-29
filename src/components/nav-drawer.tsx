import type { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { IoPaperPlaneSharp } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { companyLink, pagesLink } from '@/constants/nav-links';
import { NavRoutes } from '@/constants/nav-routes';
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Separator } from './ui/separator';

interface NavDrawerProps {
  children: ReactNode;
  className?: string;
}

const BrandLogo = dynamic(() => import('./brand-logo'));

export default function NavDrawer(props: NavDrawerProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Slot {...props} />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-start gap-6" side="left">
        <SheetHeader>
          <SheetTitle>
            <Link href={NavRoutes.Home}>
              <BrandLogo className="text-primary-static" />
            </Link>
          </SheetTitle>
          <SheetDescription className="font-medium">
            Design. Innovate. Create.
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <div className="w-full">
          <Accordion className="w-full" collapsible type="single">
            {companyLink.map((company) => (
              <AccordionItem
                className="border-b-0"
                key={company.title}
                value={company.title}
              >
                <AccordionTrigger className=" hover:no-underline">
                  {company.title}
                </AccordionTrigger>
                {company.link.map((link) => (
                  <AccordionContent className="px-3 w-full" key={link.label}>
                    <Link className="text-muted w-full" href={link.href}>
                      {link.label}
                    </Link>
                  </AccordionContent>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
          <div className="flex flex-col gap-4">
            {pagesLink.map((page) => (
              <div className="w-full" key={page.title}>
                <Link className="w-full font-semibold" href={page.href}>
                  {page.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <SheetFooter>
          <SheetClose asChild>
            <div className="flex flex-col gap-4">
              <h3 className="text-primary-static">Get in touch with us</h3>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-4 items-center">
                  <div className="text-sm text-primary-static">
                    <IoPaperPlaneSharp />
                  </div>
                  <p className="text-muted text-sm">
                    Cabanatuan city, Nueva Ecija, Ph 3100
                  </p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <div className="text-sm text-primary-static">
                    <MdEmail />
                  </div>
                  <p className="text-muted text-sm">
                    techstacks.2022@gmail.com
                  </p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <div className="text-sm text-primary-static">
                    <BsFillTelephoneFill />
                  </div>
                  <p className="text-muted text-sm">(44) 331-4514</p>
                </div>
              </div>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
