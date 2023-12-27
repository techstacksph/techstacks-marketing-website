'use client';

import { motion } from 'framer-motion';
import * as React from 'react';
import { type SVGProps } from 'react';

export function SvgSupport(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      // height={317}
      viewBox="0 0 338 317"
      // width={338}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="support">
        <motion.g
          animate={{ scale: [0, 1] }}
          id="chat bubble right 1"
          transition={{
            duration: 1,
            repeat: Infinity,
            type: 'keyframes',
            ease: 'easeInOut',
            repeatDelay: 5,
            repeatType: 'reverse',
          }}
        >
          <g id="body">
            <g id="Rectangle 4">
              <path
                d="M5.01123 280C5.01123 271.163 12.1747 264 21.0112 264H313.011C321.848 264 329.011 271.163 329.011 280V300C329.011 308.837 321.868 316 313.031 316C282.502 316 214.685 316 167.011 316C119.337 316 51.5209 316 20.9914 316C12.1549 316 5.01123 308.837 5.01123 300V280Z"
                fill="#21CD9C"
              />
              <path
                clipRule="evenodd"
                d="M328.784 301.541C328.784 301.541 328.882 302.644 328.882 301.363L328.784 301.541L322.011 312.941C325.404 315.201 330.843 317.349 337.415 316.154C335.605 315.378 328.623 310.724 328.882 301.415C328.851 301.458 328.818 301.5 328.784 301.541Z"
                fill="#21CD9C"
                fillRule="evenodd"
              />
            </g>
          </g>
          <g id="message">
            <line
              id="Line 12"
              stroke="#DEDEDE"
              strokeWidth={5}
              x1={307.011}
              x2={57.0112}
              y1={279.5}
              y2={279.5}
            />
            <line
              id="Line 13"
              stroke="#DEDEDE"
              strokeWidth={5}
              x1={307.011}
              x2={57.0112}
              y1={289.5}
              y2={289.5}
            />
            <line
              id="Line 14"
              stroke="#DEDEDE"
              strokeWidth={5}
              x1={307.011}
              x2={157.011}
              y1={299.5}
              y2={299.5}
            />
          </g>
        </motion.g>
        <motion.g
          animate={{ scale: [0, 1] }}
          id="chat bubble left 1"
          transition={{
            duration: 2,
            repeat: Infinity,
            type: 'keyframes',
            ease: 'easeInOut',
            repeatDelay: 4,
            repeatType: 'reverse',
          }}
        >
          <g id="body_4">
            <g id="Rectangle 4_4">
              <path
                d="M337.408 214C337.408 205.163 330.244 198 321.408 198H29.4077C20.5711 198 13.4077 205.163 13.4077 214V234C13.4077 242.837 20.5514 250 29.388 250C59.9174 250 127.734 250 175.408 250C223.082 250 290.898 250 321.427 250C330.264 250 337.408 242.837 337.408 234V214Z"
                fill="#6356FB"
              />
              <path
                clipRule="evenodd"
                d="M13.6352 235.541C13.6352 235.541 13.537 236.644 13.537 235.363L13.6352 235.541L20.4077 246.941C17.0153 249.201 11.5757 251.349 5.00363 250.154C6.81374 249.378 13.7956 244.724 13.537 235.415C13.5684 235.458 13.6011 235.5 13.6352 235.541Z"
                fill="#6356FB"
                fillRule="evenodd"
              />
            </g>
          </g>
          <g id="message_4">
            <line
              id="Line 12_4"
              stroke="#DEDEDE"
              strokeWidth={5}
              transform="matrix(1 0 0 -1 35.4077 211)"
              x2={250}
              y1={-2.5}
              y2={-2.5}
            />
            <line
              id="Line 13_4"
              stroke="#DEDEDE"
              strokeWidth={5}
              transform="matrix(1 0 0 -1 35.4077 221)"
              x2={250}
              y1={-2.5}
              y2={-2.5}
            />
            <line
              id="Line 14_4"
              stroke="#DEDEDE"
              strokeWidth={5}
              transform="matrix(1 0 0 -1 35.4077 231)"
              x2={150}
              y1={-2.5}
              y2={-2.5}
            />
          </g>
        </motion.g>
        <motion.g
          animate={{ scale: [0, 1] }}
          id="chat bubble right 2"
          transition={{
            duration: 3,
            repeat: Infinity,
            type: 'keyframes',
            ease: 'easeInOut',
            repeatDelay: 3,
            repeatType: 'reverse',
          }}
        >
          <g id="body_2">
            <g id="Rectangle 4_2">
              <path
                d="M5.00391 148C5.00391 139.163 12.1674 132 21.0039 132H313.004C321.84 132 329.004 139.163 329.004 148V168C329.004 176.837 321.86 184 313.024 184C282.494 184 214.678 184 167.004 184C119.33 184 51.5136 184 20.9841 184C12.1476 184 5.00391 176.837 5.00391 168V148Z"
                fill="#21CD9C"
              />
              <path
                clipRule="evenodd"
                d="M328.776 169.541C328.776 169.541 328.875 170.644 328.875 169.363L328.776 169.541L322.004 180.941C325.396 183.201 330.836 185.349 337.408 184.154C335.598 183.378 328.616 178.724 328.875 169.415C328.843 169.458 328.81 169.5 328.776 169.541Z"
                fill="#21CD9C"
                fillRule="evenodd"
              />
            </g>
          </g>
          <g id="message_2">
            <line
              id="Line 12_2"
              stroke="#DEDEDE"
              strokeWidth={5}
              x1={307.004}
              x2={57.0039}
              y1={147.5}
              y2={147.5}
            />
            <line
              id="Line 13_2"
              stroke="#DEDEDE"
              strokeWidth={5}
              x1={307.004}
              x2={57.0039}
              y1={157.5}
              y2={157.5}
            />
            <line
              id="Line 14_2"
              stroke="#DEDEDE"
              strokeWidth={5}
              x1={307.004}
              x2={157.004}
              y1={167.5}
              y2={167.5}
            />
          </g>
        </motion.g>
        <motion.g
          animate={{ scale: [0, 1] }}
          id="chat bubble left 2"
          transition={{
            duration: 4,
            repeat: Infinity,
            type: 'keyframes',
            ease: 'easeInOut',
            repeatDelay: 2,
            repeatType: 'reverse',
          }}
        >
          <g id="body_5">
            <g id="Rectangle 4_5">
              <path
                d="M332.404 82C332.404 73.1634 325.241 66 316.404 66H24.4043C15.5677 66 8.4043 73.1634 8.4043 82V102C8.4043 110.837 15.548 118 24.3845 118C54.914 118 122.73 118 170.404 118C218.078 118 285.895 118 316.424 118C325.261 118 332.404 110.837 332.404 102V82Z"
                fill="#6356FB"
              />
              <path
                clipRule="evenodd"
                d="M8.63174 103.541C8.63174 103.541 8.5336 104.644 8.5336 103.363L8.63174 103.541L15.4043 114.941C12.0119 117.201 6.57224 119.349 0.000213623 118.154C1.81032 117.378 8.79219 112.724 8.5336 103.415C8.56498 103.458 8.5977 103.5 8.63174 103.541Z"
                fill="#6356FB"
                fillRule="evenodd"
              />
            </g>
          </g>
          <g id="message_5">
            <line
              id="Line 12_5"
              stroke="#DEDEDE"
              strokeWidth={5}
              transform="matrix(1 0 0 -1 30.4043 79)"
              x2={250}
              y1={-2.5}
              y2={-2.5}
            />
            <line
              id="Line 13_5"
              stroke="#DEDEDE"
              strokeWidth={5}
              transform="matrix(1 0 0 -1 30.4043 89)"
              x2={250}
              y1={-2.5}
              y2={-2.5}
            />
            <line
              id="Line 14_5"
              stroke="#DEDEDE"
              strokeWidth={5}
              transform="matrix(1 0 0 -1 30.4043 99)"
              x2={150}
              y1={-2.5}
              y2={-2.5}
            />
          </g>
        </motion.g>
        <motion.g
          animate={{ scale: [0, 1] }}
          id="chat bubble right 3"
          transition={{
            duration: 5,
            repeat: Infinity,
            type: 'keyframes',
            ease: 'easeInOut',
            repeatDelay: 1,
            repeatType: 'reverse',
          }}
        >
          <g id="body_3">
            <g id="Rectangle 4_3">
              <path
                d="M5 16C5 7.16344 12.1634 0 21 0H313C321.837 0 329 7.16344 329 16V36C329 44.8366 321.856 52 313.02 52C282.49 52 214.674 52 167 52C119.326 52 51.5096 52 20.9802 52C12.1437 52 5 44.8366 5 36V16Z"
                fill="#21CD9C"
              />
              <path
                clipRule="evenodd"
                d="M328.773 37.5412C328.773 37.5412 328.871 38.6442 328.871 37.3629L328.773 37.5412L322 48.9409C325.392 51.2009 330.832 53.3491 337.404 52.1542C335.594 51.3784 328.612 46.7239 328.871 37.4147C328.839 37.4579 328.807 37.5 328.773 37.5412Z"
                fill="#21CD9C"
                fillRule="evenodd"
              />
            </g>
          </g>
          <g id="message_3">
            <line
              id="Line 12_3"
              stroke="#DEDEDE"
              strokeWidth={5}
              x1={307}
              x2={57}
              y1={15.5}
              y2={15.5}
            />
            <line
              id="Line 13_3"
              stroke="#DEDEDE"
              strokeWidth={5}
              x1={307}
              x2={57}
              y1={25.5}
              y2={25.5}
            />
            <line
              id="Line 14_3"
              stroke="#DEDEDE"
              strokeWidth={5}
              x1={307}
              x2={157}
              y1={35.5}
              y2={35.5}
            />
          </g>
        </motion.g>
      </g>
    </svg>
  );
}
