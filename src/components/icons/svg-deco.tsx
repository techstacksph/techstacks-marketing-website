'use client';

import * as React from 'react';
import { type SVGProps } from 'react';
import { motion } from 'framer-motion';

export function SvgDeco(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={1000}
      viewBox="0 0 1000 1000"
      width={1000}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="deco">
        <motion.g
          animate={{ rotate: 360 }}
          id="deco_2"
          transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
        >
          <circle
            className="fill-primary-static"
            cx={267}
            cy={266}
            id="Ellipse 3"
            r={25}
          />
          <circle
            className="fill-yellow-500"
            cx={733.307}
            cy={733.617}
            id="Ellipse 4"
            r={15}
          />
        </motion.g>
      </g>
    </svg>
  );
}
