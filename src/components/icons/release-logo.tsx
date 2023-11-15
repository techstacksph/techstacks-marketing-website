import React, { forwardRef } from 'react';
import { type SvgComponentProps } from './techstacks-logo';

export const ReleaseLogo = forwardRef<SVGSVGElement, SvgComponentProps>(
  (props, ref) => (
    <svg
      fill="none"
      height="45"
      viewBox="0 0 126 45"
      width="126"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <g id="release">
        <path
          className="fill-black dark:fill-white"
          d="M13.5024 33.3237H17.5282L19.5946 36.856H22.4447L19.2739 30.3684H23.4601L29 40.1085H17.0295L13.5024 33.3237Z"
          id="Rectangle 98"
        />
        <path
          className="fill-black dark:fill-white"
          d="M0 20.3833H14.8919V16.6412V15.6269H13.9478H0V11.7449H14.8919H15.9072L17.9023 13.7034L18.8821 14.7176V21.5375L17.8133 22.5167L15.8716 24.5102L3.91892 24.4814V36.1975H5.93235V33.1137H10V40.1084H0V20.3833Z"
          id="Rectangle 99"
        />
        <path
          className="fill-black dark:fill-white"
          d="M0 5.86963H17.8489L20.8059 8.96479L24.8673 12.7769V23.4438L20 28L17.2158 30.3686H5.94963V26.3641H15.7826L20.8059 21.5203V14.7879L15.7826 9.78667H0V5.86963Z"
          id="Rectangle 100"
        />
        <text
          className="fill-black dark:fill-white"
          fontFamily="Inika"
          fontSize="25"
          fontWeight="bold"
          id="Release."
          letterSpacing="0em"
          style={{ whiteSpace: 'pre' }}
          xmlSpace="preserve"
        >
          <tspan x="33" y="25.3625">
            Release.
          </tspan>
        </text>
        <text
          className="fill-black dark:fill-white"
          fontFamily="Inika"
          fontSize="16"
          id="media"
          letterSpacing="0em"
          style={{ whiteSpace: 'pre' }}
          xmlSpace="preserve"
        >
          <tspan x="33" y="40.172">
            media
          </tspan>
        </text>
      </g>
    </svg>
  ),
);
ReleaseLogo.displayName = 'release-logo';
