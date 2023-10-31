import React, { forwardRef } from 'react';
import type { SvgComponentProps } from './computer-icon';

export const DotsIcon = forwardRef<SVGSVGElement, SvgComponentProps>(
  (props, ref) => (
    <svg
      // className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
      fill="currentColor"
      ref={ref}
      viewBox="0 0 52 24"
      {...props}
    >
      <defs>
        <pattern
          height=".30"
          id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
          width=".135"
          x="0"
          y="0"
        >
          <circle cx="1" cy="1" r=".7" />
        </pattern>
      </defs>
      <rect
        fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
        height="24"
        width="52"
      />
    </svg>
  ),
);
DotsIcon.displayName = 'dots-icon';
