import React, { forwardRef } from 'react';
import { type SvgComponentProps } from './techstacks-logo';

export const BottomShape = forwardRef<SVGSVGElement, SvgComponentProps>(
  (props, ref) => (
    <svg
      fill="currentColor"
      preserveAspectRatio="none"
      ref={ref}
      viewBox="0 0 224 12"
      {...props}
    >
      <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
    </svg>
  ),
);
BottomShape.displayName = 'bottom-shape';
