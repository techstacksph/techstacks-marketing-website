'use client';

import { FaPaintBrush, FaHeadphones } from 'react-icons/fa';
import {
  BsFillChatFill,
  BsWrenchAdjustable,
  BsFillRocketTakeoffFill,
} from 'react-icons/bs';
import { HiCodeBracket } from 'react-icons/hi2';
import { TiGroup } from 'react-icons/ti';
import { AiFillClockCircle } from 'react-icons/ai';
import { Player } from '@lottiefiles/react-lottie-player';
import { useRef } from 'react';

export function Animation({
  src,
  title,
  content,
}: {
  src: string;
  title: string;
  content: string;
}) {
  const playerRef = useRef<Player>(null);

  return (
    <div
      className="rounded border-animate border-animate-rounded border-animate-from-primary border-animate-via-transparent border-animate-to-primary"
      onMouseEnter={() => playerRef.current?.play()}
      onMouseLeave={() => playerRef.current?.pause()}
    >
      <div className="h-full space-y-8 border rounded p-14 bg-primary-foreground">
        <div className="flex items-center gap-8">
          <div className="w-24 aspect-square shrink-0">
            <Player autoplay={false} loop ref={playerRef} src={src} />
          </div>
          <h3 className="text-3xl font-semibold">{title}</h3>
        </div>
        <p className="text-lg">{content}</p>
      </div>
      {/* <div className="flex gap-8">
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-semibold hover:text-primary"
          >
            <FaFacebookF />
            <span>Facebook</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-lg font-semibold hover:text-primary"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>
        </div> */}
    </div>
  );
}
export const METHOD_CONTENT = [
  [
    BsFillChatFill,
    'Planning & Ideation',
    'Discussion about scope of work, deliverables and project cost',
  ],
  [
    FaPaintBrush,
    'Design Process',
    'Design system, blueprints, wireframes, prototypes, and hi-fidelity designs',
  ],
  [
    HiCodeBracket,
    'Development',
    'Incremental builds, integrations, code reviews, and quality assurance',
  ],
  [
    BsWrenchAdjustable,
    'Optimize & Scale',
    'Evaluate post-deploy performance and SEO score, optimize, and scale.',
  ],
  [
    FaHeadphones,
    'Support',
    'Experience unparalleled assistance with our extensive technical / dev support.',
  ],
] as const;
export const WHY_CONTENT = [
  [
    BsFillRocketTakeoffFill,
    'Iterative web development',
    'We are agile. We deliver fast. You never have to wait for too long to start seeing the awesomeness of your website.',
  ],
  [
    TiGroup,
    'Dedicated team',
    'An agile web dev team equipped with knowledge of modern web technologies, best practices, experience and skills to build a website that delivers results.',
  ],
  [
    AiFillClockCircle,
    'Support',
    'We commit to help your business stand out and gain the digital-competitive advantage through user-friendly, fast, secure, high converting, engaging websites.',
  ],
];
