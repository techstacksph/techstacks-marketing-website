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
    <div className="space-y-10">
      <div className="grid grid-cols-3 gap-2">
        {METHOD_CONTENT.map(([title], i) => (
          <div
            className={cn(
              'border rounded border-muted p-2 transition',
              title === tab && 'bg-primary',
            )}
            key={title}
            onMouseEnter={() => {
              setTab(title);
            }}
          >
            <div className="flex h-full gap-2">
              <div
                className={cn(
                  'grow text-sm text-muted truncate',
                  title === tab && 'text-white',
                )}
              >
                {title}
              </div>
              <div className="self-end text-accent -mb-2 -mr-1">0{i + 1}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="border rounded border-muted" ref={container}>
        {METHOD_CONTENT.map(
          ([title, description, lottieFile]) =>
            title === tab && (
              <div className="px-4 py-8" key={title}>
                <div className="flex gap-12 items-center justify-between">
                  <div className="space-y-7">
                    <h3 className="text-xl">{title}</h3>
                    <p className="text-sm">{description}</p>
                  </div>
                  <div className="w-28 aspect-square shrink-0 flex items-center content-center">
                    <Player autoplay loop src={lottieFile} />
                  </div>
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
}
