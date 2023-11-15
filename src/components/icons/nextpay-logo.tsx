import React, { forwardRef } from 'react';
import { type SvgComponentProps } from './techstacks-logo';

export const NextpayLogo = forwardRef<SVGSVGElement, SvgComponentProps>(
  (props, ref) => (
    <svg
      fill="none"
      height="28"
      viewBox="0 0 151 28"
      width="151"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <g id="next pay">
        <path
          className="fill-black dark:fill-white"
          d="M22.1185 7.43805L24.3182 6.89526L24.7582 7.12941L25.0001 7.43805V14.9306V18.7407V21.5185L24.3732 22.2741L23.5263 22.6999L8.78809 26.3184L11.8127 19.6986L15.5523 22.0719L22.1185 7.43805Z"
          id="Rectangle 88"
        />
        <path
          className="fill-black dark:fill-white"
          d="M0.274967 10.7799L0.846898 10.3542L9.89331 6.83674L19.7866 3L20.2816 3.149L20.6665 3.68114V4.38357L1.08887 11.3865L1.07787 11.4291L1.06687 11.4823L1.05587 11.5781L1.08887 11.6739L1.14386 11.7697L1.19336 11.8335L1.24285 11.8974L1.29784 11.9506L1.36384 11.9932L6.31324 10.9715L18.5988 8.2682L14.7272 16.8676L10.5917 13.9621L10.2618 14.6007L9.93181 15.218L4.52046 27.3401L1.33084 28L0.91289 27.8723L0.384954 27.4466L0 26.9357V11.3865L0.274967 10.7799Z"
          id="Rectangle 89"
        />
        <path
          className="fill-black dark:fill-white"
          d="M1.47409 11.429L22.2836 4.74526L22.5476 4.84104L22.7785 4.9794L22.9875 5.18162L23.1525 5.4264L23.1855 5.75633L23.1525 6.0969L23.0315 6.30975L22.8555 6.51197L1.60609 11.7482L1.47409 11.429Z"
          id="Rectangle 90"
        />
        <text
          className="fill-black dark:fill-white"
          fontFamily="Inter"
          fontSize="22"
          fontWeight="500"
          id="nextpay"
          letterSpacing="0em"
          style={{ whiteSpace: 'pre' }}
          xmlSpace="preserve"
        >
          <tspan x="30" y="21.5">
            nextpay
          </tspan>
        </text>
      </g>
    </svg>
  ),
);
NextpayLogo.displayName = 'nextpay-logo';
