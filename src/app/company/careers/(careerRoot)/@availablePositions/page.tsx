'use client';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import { AiOutlineExclamation } from 'react-icons/ai';
import { nanoid } from 'nanoid';
import { useMemo, useState } from 'react';
import { Section } from '@/components/default-elements';
import { cn } from '@/utils/cn';
import { SAMPLE_JOBS } from '@/lib/faker';
import type { Job } from '@/constants/jobs';
import { POSITIONS } from '@/constants/jobs';
import { JobCard } from '@/components/job-card';
import { dmSans } from '@/lib/fonts';

const TABS = ['All', ...POSITIONS] as const;

const AVAILABLE_JOBS: Job[] = [
  /**
   * Add open jobs here!
   */
];

export default function AvailablePositionsSection() {
  const [tab, setTab] = useState<(typeof TABS)[number]>('All');
  const [ref] = useAutoAnimate();

  const jobs =
    process.env.NODE_ENV === 'development' ? SAMPLE_JOBS : AVAILABLE_JOBS;

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => job.type === tab || tab === 'All');
  }, [jobs, tab]);

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
          {TABS.map((jobTab, i) => {
            return (
              <li className="py-4" key={jobTab}>
                <button
                  className={cn(
                    'text-lg md:text-xl font-medium tracking-wide text-foreground/50',
                    tab === jobTab && 'text-foreground',
                    !jobs.length && 'text-foreground/50',
                  )}
                  data-aos="fade-left"
                  data-aos-delay={i * 100}
                  disabled={!jobs.length}
                  onClick={() => {
                    setTab(jobTab);
                  }}
                  type="button"
                >
                  {jobTab}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-4 md:mt-9">
        <div className="grid gap-10 md:grid-cols-2" ref={ref}>
          {filteredJobs.map((job, i) => (
            <JobCard
              {...job}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              key={nanoid()}
            />
          ))}

          {!filteredJobs.length && (
            <div className="md:col-span-2">
              <div className="flex flex-col items-center gap-10">
                <div
                  className="grid border rounded-full place-items-center text-9xl border-border"
                  data-aos="fade-up"
                >
                  <AiOutlineExclamation className="-rotate-12" />
                </div>
                <p
                  className="italic text-center text-muted"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  Unfortunately, there are currently no job postings.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
