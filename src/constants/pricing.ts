export interface Pricing {
  name: string;
  description: string;
  pricePerMonth: number;
  features: string[];
  focus?: boolean;
}

export const PRICING: Pricing[] = [
  {
    name: 'Pricing name 1',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, optio?',
    pricePerMonth: 1000,
    features: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
    ],
  },
  {
    name: 'Pricing name 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur eaque ab dolores.',
    focus: true,
    pricePerMonth: 1000,
    features: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, numquam.',
    ],
  },
  {
    name: 'Pricing name 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quas! Optio, molestiae.',
    pricePerMonth: 1000,
    features: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, libero doloribus!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut nulla reprehenderit.',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis neque placeat assumenda eaque!',
    ],
  },
];
