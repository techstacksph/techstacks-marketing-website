'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { cn } from '@/utils/cn';

export const METHOD_CONTENT = [
  [
    'Planning & Ideation',
    'Discussion about scope of work, deliverables and project cost',
    '/lottie/planning.json',
  ],
  [
    'Design Process',
    'Design system, blueprints, wireframes, prototypes, and hi-fidelity designs',
    '/lottie/design.json',
  ],
  [
    'Development',
    'Incremental builds, integrations, code reviews, and quality assurance',
    '/lottie/code.json',
  ],
  [
    'Optimize & Scale',
    'Evaluate post-deploy performance and SEO score, optimize, and scale.',
    '/lottie/optimize.json',
  ],
  [
    'Support',
    'Experience unparalleled assistance with our extensive technical / dev support.',
    '/lottie/support.json',
  ],
] as const;

type MethodTabValue = (typeof METHOD_CONTENT)[number][number];

export default function WebsiteLifecycle() {
  const [tab, setTab] = useState<MethodTabValue>(METHOD_CONTENT[0][0]);
  const [container] = useAutoAnimate();

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      <div className="grid grid-cols-3 gap-2 md:grid-cols-1">
        {METHOD_CONTENT.map(([title], i) => (
          <div
            className={cn(
              'border rounded border-muted-foreground-static p-2 transition',
              title === tab && 'bg-primary-static',
            )}
            key={title}
            onMouseEnter={() => {
              setTab(title);
            }}
          >
            <div className="flex h-full gap-2">
              <div
                className={cn(
                  'grow text-sm text-muted truncate md:flex md:items-center md:text-lg md:font-medium',
                  title === tab && 'text-primary-foreground-static',
                )}
              >
                {title}
              </div>
              <div
                className={cn(
                  'self-end -mb-2 -mr-1 font-medium text-muted',
                  title === tab && 'text-primary-foreground-static',
                )}
              >
                0{i + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="border rounded border-muted-foreground-static md:col-span-2"
        ref={container}
      >
        {METHOD_CONTENT.map(
          ([title, description, lottieFile]) =>
            title === tab && (
              <div className="px-4 py-8" key={title}>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-center">
                    <h3 className="text-xl">{title}</h3>
                  </div>
                  <div className="flex items-center content-center w-full aspect-square shrink-0 md:row-span-2 [&>*]:w-full">
                    <Player autoplay loop src={lottieFile} />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <p className="text-lg text-muted">{description}</p>
                  </div>
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
}
