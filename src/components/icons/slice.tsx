import React, { forwardRef } from 'react';
import type { SvgComponentProps } from './techstacks-logo';

export const Slice = forwardRef<SVGSVGElement, SvgComponentProps>(
  (props, ref) => (
    <svg
      // className="absolute left-0 hidden h-full text-background transform -translate-x-1/2 lg:block"
      fill="currentColor"
      preserveAspectRatio="none slice"
      viewBox="0 0 100 100"
      {...props}
      ref={ref}
    >
      <path d="M50 0H100L50 100H0L50 0Z" />
    </svg>
  ),
);
Slice.displayName = 'slice';
