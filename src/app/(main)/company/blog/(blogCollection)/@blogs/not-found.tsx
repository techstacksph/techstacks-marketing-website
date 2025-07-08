'use client';

import { useSearchParams } from 'next/navigation';

export default function BlogSearchNotFound() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div className="py-8">
      <p className="text-2xl italic text-center text-muted-foreground font-poppins">
        Cannot find posts related to{' '}
        <strong className="not-italic text-foreground">
          &quot;{query}&quot;
        </strong>
      </p>
    </div>
  );
}
