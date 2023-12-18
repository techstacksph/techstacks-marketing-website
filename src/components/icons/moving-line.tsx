import React, { type SVGProps } from 'react';
import { type MotionValue, motion } from 'framer-motion';

type MovingLineProps = SVGProps<SVGSVGElement> & {
  progress: MotionValue;
};

export function MovingLine({ progress, ...props }: MovingLineProps) {
  return (
    <svg
      // className="flex-shrink-0"
      fill="none"
      height="1567"
      viewBox="0 0 1 1567"
      width="1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0.5 0.980671L0.5 1566.02" stroke="url(#paint0_linear_207_38)" />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_207_38"
          x1="1"
          x2="1"
          y1="1566.02"
          y2="1566.02"
        >
          <stop stopColor="#71717A" stopOpacity="0" />
          <stop offset="1" stopColor="#71717A" />
        </linearGradient>
      </defs>
      <motion.path
        // animatng pathLength value, goes from 1 to 0
        className="stroke-primary-static"
        d="M0.5 0.980671L0.5 1566.02"
        strokeLinecap="round"
        strokeOpacity="1"
        strokeWidth="3"
        style={{ pathLength: progress }}
        transition={{ duration: 14, ease: 'easeInOut' }}
      />
    </svg>
  );
}
