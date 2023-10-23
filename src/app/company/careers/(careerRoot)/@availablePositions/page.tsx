'use client';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import { nanoid } from 'nanoid';
import { useMemo, useState } from 'react';
import { Section } from '@/components/default-elements';
import { cn } from '@/utils/cn';
import { SAMPLE_JOBS } from '@/lib/faker';
import type { Job } from '@/constants/jobs';
import { POSITIONS } from '@/constants/jobs';
import { JobCard } from '@/components/job-card';
import { dmSans } from '@/lib/fonts';

const AVAILABLE_JOBS: Job[] = [
  /**
   * Add open jobs here!
   */
];

export default function AvailablePositionsSection() {
  const [tab, setTab] = useState('All');
  const [ref] = useAutoAnimate();

  const jobs = useMemo(() => {
    const $jobs =
      process.env.NODE_ENV === 'development' ? SAMPLE_JOBS : AVAILABLE_JOBS;
    return $jobs.filter((job) => job.type === tab || tab === 'All');
  }, [tab]);

  return (
    <Section>
      <h2
        className={cn(
          'text-2xl font-bold [&&]:leading-tight whitespace-pre-wrap md:text-5xl',
          dmSans.className,
        )}
        data-aos="fade-up"
      >
        Browse Current Open Positions
      </h2>

      <div className="mt-2 md:mt-5">
        <ul className="flex gap-4 md:gap-12">
          {['All', ...POSITIONS].map((position, i) => (
            <li className="py-4" key={position}>
              <button
                className={cn(
                  'text-lg md:text-xl font-medium tracking-wide text-foreground/50',
                  tab === position && 'text-foreground',
                )}
                data-aos="fade-left"
                data-aos-delay={i * 100}
                onClick={() => {
                  setTab(position);
                }}
                type="button"
              >
                {position}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 md:mt-9">
        <div className="grid gap-10 md:grid-cols-2" ref={ref}>
          {jobs.map((job, i) => (
            <JobCard
              {...job}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              key={nanoid()}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
