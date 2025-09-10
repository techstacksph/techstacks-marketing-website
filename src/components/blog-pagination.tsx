'use client';

import { Suspense } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from './ui/button';

interface PaginationButtonsProps {
  next: number | boolean;
  prev: number | boolean;
  current: number;
  total: number;
}

function PaginationContent({ next, prev }: PaginationButtonsProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function getLink(page: number | boolean) {
    if (typeof page === 'boolean') return pathname;

    const sp = new URLSearchParams(Object.fromEntries(searchParams.entries()));
    sp.set('page', page.toString());

    return `${pathname}?${sp.toString()}`;
  }

  return (
    <div className="flex justify-center gap-4">
      <Button asChild disabled={!prev} size="icon" variant="outline">
        <Link href={getLink(prev) || '#'} scroll={false}>
          <ChevronLeft />
        </Link>
      </Button>

      <Button asChild disabled={!next} size="icon" variant="outline">
        <Link href={getLink(next) || '#'} scroll={false}>
          <ChevronRight />
        </Link>
      </Button>
    </div>
  );
}

export function PaginationButtons(props: PaginationButtonsProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaginationContent {...props} />
    </Suspense>
  );
}
