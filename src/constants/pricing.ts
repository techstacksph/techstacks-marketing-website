export interface Pricing {
  name: string;
  description: string;
  pricePerMonth: number;
  features: string[];
  focus?: boolean;
}

export const PRICING: Pricing[] = [
  {
    name: 'Basic',
    description: 'Ideal for companies with smaller websites.',
    pricePerMonth: 2800,
    features: [
      'Scrum team',
      'Scrum events (bi-weekly)',
      'Part-time UI/UX designer',
      'Part-time Front-end developer',
      'Technical Project manager',
    ],
  },
  {
    name: 'Essential',
    description: 'Ideal for companies with smaller websites.',
    focus: true,
    pricePerMonth: 4500,
    features: [
      'Scrum team',
      'Scrum events (bi-weekly)',
      'Part-time UI/UX designer',
      'Part-time Front-end developer',
      'Part-time Back-end developer (integration)',
      'Part-time SEO Analyst',
      'Technical Project manager',
    ],
  },
  {
    name: 'Enterprise',
    description:
      'Ideal for companies that want to build leads generation tools.',
    pricePerMonth: 6250,
    features: [
      'Scrum team',
      'Scrum events (bi-weekly)',
      'Part-time UI/UX designer',
      'Full-time Front-end developer',
      'Part-time Back-end developer (integration)',
      'Part-time SEO Analyst',
      'Technical Project manager',
    ],
  },
];
