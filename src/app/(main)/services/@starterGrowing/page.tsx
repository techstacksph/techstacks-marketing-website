import { Band, CheckList, SectionHeader } from '@/components/marketing';
import { H3 } from '@/components/ui/typography';

const ENGAGEMENTS = [
  {
    title: 'Project delivery',
    bestFor: 'A defined website, product, or system to build.',
    points: [
      'Agreed scope, timeline, and proposal',
      'One team from discovery to launch',
      'Post-launch support included in the plan',
    ],
  },
  {
    title: 'Dedicated team',
    bestFor: 'A roadmap that needs ongoing delivery capacity.',
    points: [
      'A Scrum team working with your priorities',
      'Regular sprint events to keep you in control',
      'Technical project management built in',
    ],
  },
  {
    title: 'Ongoing care',
    bestFor: 'Systems already live that must stay healthy.',
    points: [
      'Updates, maintenance, and optimization',
      'Security reviews and vulnerability fixes',
      'Technical support when your team needs it',
    ],
  },
];

export default function Engagements() {
  return (
    <Band tone="ink">
      <SectionHeader
        className="mb-10 lg:mb-14"
        description="Choose the arrangement that fits where your business is today. It can change as you grow."
        eyebrow="Ways to work with us"
        inverse
        title="An engagement model that fits your business"
      />
      <ul className="grid gap-6 lg:grid-cols-3">
        {ENGAGEMENTS.map(({ bestFor, points, title }) => (
          <li
            className="flex flex-col gap-4 rounded-xl border bg-card p-6 text-card-foreground lg:p-8"
            data-aos="fade-up"
            key={title}
          >
            <H3>{title}</H3>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Best for: </span>
              {bestFor}
            </p>
            <CheckList className="border-t pt-4" items={points} />
          </li>
        ))}
      </ul>
    </Band>
  );
}
