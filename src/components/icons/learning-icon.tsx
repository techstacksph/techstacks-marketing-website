import React, { forwardRef } from 'react';
import { type SvgComponentProps } from './techstacks-logo';

export const LearningIcon = forwardRef<SVGSVGElement, SvgComponentProps>(
  (props, ref) => (
    <svg
      fill="none"
      height="667"
      viewBox="0 0 667 667"
      width="667"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        className="fill-primary-static/5"
        d="M472.668 0H193.666C72.333 0 0 72.3333 0 193.667V472.667C0 594 72.333 666.333 193.666 666.333H472.668C594.001 666.333 666.334 594 666.334 472.667V193.667C666.334 72.3333 594.001 0 472.668 0Z"
        opacity="0.4"
      />
      <path
        className="fill-primary-static"
        d="M316.311 203V508.333C316.311 520.333 304.311 528.333 293.311 523.667C252.979 506.333 200.312 490.333 163.645 485.667L157.312 485C136.979 482.333 120.312 463.333 120.312 442.667V186C120.312 160.666 140.979 141.667 166.313 143.667C207.979 147 269.648 167 308.314 189C313.314 191.334 316.311 197 316.311 203Z"
      />
      <path
        className="fill-primary-static"
        d="M545.674 189.994V442.327C545.674 462.993 529.008 481.993 508.674 484.66L501.674 485.327C465.341 490.327 413.008 505.993 372.674 522.993C361.674 527.66 349.674 519.66 349.674 507.66V202.66C349.674 196.66 352.674 190.994 358.008 187.994C396.674 166.328 457.008 146.993 498.008 143.327H499.341C525.008 143.66 545.674 164.328 545.674 189.994Z"
      />
    </svg>
  ),
);
LearningIcon.displayName = 'learning-icon';
