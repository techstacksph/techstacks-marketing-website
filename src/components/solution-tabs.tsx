'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { SOLUTIONS } from '@/constants/solutions';
import { SolutionDetail } from './solution-detail';

export function SolutionTabs() {
  return (
    <Tabs.Root defaultValue={SOLUTIONS[0]?.id}>
      <Tabs.List
        aria-label="Business needs"
        className="flex flex-wrap justify-center gap-2"
      >
        {SOLUTIONS.map(({ id, need }) => (
          <Tabs.Trigger
            className="rounded-full border bg-card px-4 py-2 text-sm font-semibold transition-colors hover:border-primary-static focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:border-primary-static data-[state=active]:bg-primary-static data-[state=active]:text-primary-foreground-static lg:px-5 lg:text-base"
            key={id}
            value={id}
          >
            {need}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {SOLUTIONS.map((solution) => (
        <Tabs.Content
          className="mt-10 focus-visible:outline-none lg:mt-14"
          key={solution.id}
          value={solution.id}
        >
          <SolutionDetail solution={solution} />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
