import { Loader2 } from 'lucide-react';

export default function BlogLoading() {
  return (
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
  );
}
