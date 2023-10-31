'use client';

import { Loader2 } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

export default function BlogLoader({ children }: PropsWithChildren) {
  const { pending } = ReactDOM.useFormStatus();

  return pending ? (
    <div className="py-8">
      <div className="flex justify-center">
        <div className="text-7xl">
          <Loader2
            className="w-full aspect-square animate-spin"
            height="1em"
            width="1em"
          />
        </div>
      </div>
    </div>
  ) : (
    children
  );
}
