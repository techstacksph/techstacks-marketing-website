import type { ImageProps } from 'next/image';
import Image from 'next/image';

type HexagonProps = ImageProps;

export function Hexagon({ className, ...props }: HexagonProps) {
  return (
    <div className={className}>
      <div className="rotate-[120deg] overflow-hidden w-full h-full">
        <div className="overflow-hidden w-full h-full rotate-[-60deg]">
          <Image
            {...props}
            className="w-full h-full bg-no-repeat bg-[50%] rotate-[-60deg] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
