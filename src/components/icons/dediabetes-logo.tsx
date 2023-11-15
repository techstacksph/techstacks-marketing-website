import React, { forwardRef } from 'react';
import { type SvgComponentProps } from './techstacks-logo';

export const DediabetesLogo = forwardRef<SVGSVGElement, SvgComponentProps>(
  (props, ref) => (
    <svg
      fill="none"
      height="35"
      viewBox="0 0 105 35"
      width="105"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <g id="original color">
        <path
          className="fill-black dark:fill-white "
          d="M22.1171 2.50586L20.8374 5.77953L20.2401 7.55782L19.9842 9.5786L21.7332 13.2968L23.7807 16.8938L28.729 23.4816L34.1892 29.3823L39.7347 35.0001L41 26.8332L37.2606 23.4816L31.2032 17.5405L25.7003 10.8719L23.3968 6.992L22.501 4.84997L22.1171 2.50586Z"
          id="Rectangle 96"
        />
        <path
          className="fill-black dark:fill-white "
          d="M34.1435 2.26318L35.4232 5.53685L36.0204 7.31514L36.2764 9.33593L34.5274 13.0542L32.4799 16.6512L27.5316 23.2389L22.0714 29.1396L21.6954 29.7499L19.1216 23.3332L19 23.2389L25.0574 17.2978L30.5603 10.6292L32.8638 6.74932L33.7596 4.60729L34.1435 2.26318Z"
          id="Rectangle 95"
        />
        <path
          className="fill-black dark:fill-white "
          d="M22.3601 2.28956L23.5142 1.44604L24.8393 0.602516L26.4636 0.160671L28.1306 0L29.7121 0.160671L31.2082 0.602516L32.576 1.32553L33.8156 2.28956V3.41426L33.6446 4.49879L33.3454 5.50298L32.8752 6.54734L31.2082 5.78415L28.1306 5.2218L24.8393 5.78415L23.4287 6.54734L22.9585 5.50298L22.6593 4.49879L22.3601 3.41426V2.28956Z"
          id="Rectangle 97"
        />
        <text
          className="fill-black dark:fill-white "
          fontFamily="Inter"
          fontSize="16"
          fontWeight="600"
          id="De"
          letterSpacing="0em"
          style={{ whiteSpace: 'pre' }}
          xmlSpace="preserve"
        >
          <tspan x="0" y="22.3182">
            De
          </tspan>
        </text>
        <text
          className="fill-black dark:fill-white "
          fontFamily="Inter"
          fontSize="16"
          fontWeight="600"
          id="Diabetes"
          letterSpacing="0em"
          style={{ whiteSpace: 'pre' }}
          xmlSpace="preserve"
        >
          <tspan x="36" y="22.3182">
            Diabetes
          </tspan>
        </text>
      </g>
    </svg>
  ),
);
DediabetesLogo.displayName = 'dediabetes-logo';
