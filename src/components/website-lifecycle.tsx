'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import { Fragment } from 'react';
import { cn } from '@/utils/cn';
import { isOdd as utilIsOdd } from '@/utils/is-odd';
import { Separator } from './ui/separator';
import { Section } from './default-elements';
import { H2, H3, Subheading } from './ui/typography';

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

export default function WebsiteLifecycle() {
  return (
    <div className="flex justify-center w-full py-16">
      <Section>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-8">
            <Subheading className="text-center" data-aos="fade-up">
              Our Methodology
            </Subheading>
            <H2 className="text-center" data-aos="fade-up" data-aos-delay={100}>
              Systematic flow in the website lifecycle
            </H2>
          </div>
          <div className="flex flex-col items-center md:block">
            {METHOD_CONTENT.map(([title, content, lottieFile], i) => {
              const isOdd = utilIsOdd(i);

              return (
                <Fragment key={title}>
                  <div className="transition-all border rounded-md border-border/25 md:border-0 md:px-8">
                    <div
                      className="grid md:grid-cols-[1fr_1px_1fr] gap-x-8 items-center"
                      data-aos="fade-up"
                    >
                      <div className={cn('md:py-4', isOdd && 'md:order-last')}>
                        <div className="p-4 rounded-lg md:border md:bg-primary/50">
                          <div className="flex items-center justify-between gap-4">
                            <div className="space-y-2">
                              <H3>{title}</H3>
                              <Subheading className="text-muted">
                                {content}
                              </Subheading>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator orientation="vertical" />

                      <div className={cn('py-4', isOdd && 'md:order-first')}>
                        <div className="md:h-96 h-36 [&>*]:h-full flex justify-center">
                          <Player
                            autoplay
                            className="h-full"
                            loop
                            src={lottieFile}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {i < METHOD_CONTENT.length - 1 ? (
                    <Separator
                      className="h-24 md:hidden bg-border/25"
                      orientation="vertical"
                    />
                  ) : null}
                </Fragment>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
