import { ArrowDown } from 'lucide-react';
import type { Solution } from '@/constants/solutions';
import { cn } from '@/utils/cn';
import { CheckList, Eyebrow, SiteShot, TestimonialCard } from './marketing';
import { H3 } from './ui/typography';

const EXAMPLE_WORKFLOW = [
  'A new customer inquiry comes in',
  'Details are captured and checked automatically',
  'The request is routed to the right person',
  'Your team replies with the context it needs',
];

function WorkflowVisual() {
  return (
    <figure className="rounded-xl border bg-surface p-6 lg:p-8">
      <figcaption className="mb-6 text-sm font-semibold text-muted-foreground">
        Example workflow
      </figcaption>
      <ol className="flex flex-col items-center gap-2">
        {EXAMPLE_WORKFLOW.map((step, index) => (
          <li className="flex w-full flex-col items-center gap-2" key={step}>
            {index > 0 ? (
              <ArrowDown aria-hidden className="h-4 w-4 text-primary-static" />
            ) : null}
            <span className="w-full rounded-lg border bg-card px-4 py-3 text-center text-sm font-medium">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function SolutionVisual({ solution }: { solution: Solution }) {
  if (solution.project) {
    return (
      <figure>
        <SiteShot
          alt={`${solution.project.name} website built by Techstacks`}
          sizes="(min-width: 992px) 50vw, 100vw"
          src={solution.project.img}
        />
        <figcaption className="mt-3 text-sm text-muted-foreground">
          Related work: {solution.project.name}
        </figcaption>
      </figure>
    );
  }

  if (solution.testimonial) {
    return <TestimonialCard testimonial={solution.testimonial} />;
  }

  return <WorkflowVisual />;
}

interface SolutionDetailProps {
  reverse?: boolean;
  solution: Solution;
}

/** One service, framed as challenge, what we deliver, and the business result. */
export function SolutionDetail({ reverse, solution }: SolutionDetailProps) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <div className={cn('flex flex-col gap-5', reverse && 'lg:order-last')}>
        <Eyebrow>{solution.service}</Eyebrow>
        <H3 className="text-2xl font-bold lg:text-3xl">{solution.title}</H3>
        <p className="leading-relaxed text-muted-foreground">
          {solution.challenge}
        </p>
        <CheckList items={solution.deliverables} />
        <p className="rounded-lg bg-accent p-4 text-accent-foreground">
          <span className="font-semibold">The result: </span>
          {solution.result}
        </p>
      </div>
      <SolutionVisual solution={solution} />
    </div>
  );
}
