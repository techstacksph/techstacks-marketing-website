'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export interface ProductsPaginationProps {
  next: number | boolean;
  prev: number | boolean;
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
}

export function ProductsPagination({
  next,
  prev,
  onNext,
  onPrev,
  current,
}: ProductsPaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button disabled={!prev} onClick={onPrev} size="icon" variant="outline">
        <ChevronLeft />
      </Button>
      <span className="text-sm text-center">{current}</span>
      <Button
        className=""
        disabled={!next}
        onClick={onNext}
        size="icon"
        variant="outline"
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
