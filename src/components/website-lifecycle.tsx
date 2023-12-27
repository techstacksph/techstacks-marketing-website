'use client';

import { cn } from '@/utils/cn';
import { isOdd } from '@/utils/is-odd';
import { Section } from './default-elements';
import { H2, H3, Subheading } from './ui/typography';
import { SvgDesignProcess } from './icons/svg-design-process-icon';
import { SvgPlanning } from './icons/svg-planning-icon';
import { SvgDevelopment } from './icons/svg-development-icon';
import { SvgOptimize } from './icons/svg-optimize-icon';
import { SvgSupport } from './icons/svg-support-icon';

export const METHOD_CONTENT = [
  [
    'Planning & Ideation',
    'Discussion about scope of work, deliverables and project cost',
    SvgPlanning,
  ],
  [
    'Design Process',
    'Design system, blueprints, wireframes, prototypes, and hi-fidelity designs',
    SvgDesignProcess,
  ],
  [
    'Development',
    'Incremental builds, integrations, code reviews, and quality assurance',
    SvgDevelopment,
  ],
  [
    'Optimize & Scale',
    'Evaluate post-deploy performance and SEO score, optimize, and scale.',
    SvgOptimize,
  ],
  [
    'Support',
    'Experience unparalleled assistance with our extensive technical / dev support.',
    SvgSupport,
  ],
] as const;

export default function WebsiteLifecycle() {
  return (
    <div className="w-full flex justify-center py-16">
      <Section>
        <div className="flex flex-col gap-10 lg:gap-32">
          <div
            className="flex flex-col gap-2"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <Subheading className="text-center">Our Methodology</Subheading>
            <H2 className="text-center">
              Systematic flow in the{' '}
              <span className="text-primary-static">website lifecycle</span>
            </H2>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-0">
            {METHOD_CONTENT.map(([title, content, Icon], index) => {
              const odd = isOdd(index);

              return (
                <div
                  className={cn(
                    'flex flex-row items-center gap-2 sm:gap-4 md:gap-8 m-0 lg:mr-[500px] lg:ml-0 lg:-mt-[65px]',
                    odd && 'flex-row-reverse m-0 lg:mr-0 lg:ml-[500px]',
                  )}
                  data-aos="fade-up"
                  data-aos-delay={index + 100}
                  key={title}
                >
                  <div className="w-full max-w-sm flex flex-col gap-4 p-4 border border-primary-static bg-primary-static/10">
                    <H3 className={cn('text-left', odd && 'text-right')}>
                      {title}
                    </H3>
                    <Subheading
                      className={cn(
                        'text-left leading-none md:leading-loose',
                        odd && 'text-right',
                      )}
                    >
                      {content}
                    </Subheading>
                  </div>
                  <Icon
                    className={cn(
                      'w-40 h-40',
                      odd && 'w-40 h-40 xl:w-80 xl:h-80',
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
