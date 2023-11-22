'use client';

import { FaCheck } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { toUSD } from '@/utils/currency-converter';
import { H3 } from './ui/typography';

const PRICING_HEADING = [
  {
    title: 'Basic',
    price: 2800,
    description: 'Ideal for Smaller Websites and Startups.',
  },
  {
    title: 'Essential',
    price: 4500,
    description: 'Ideal for Growing Businesses and Online Presence.',
  },
  {
    title: 'Enterprise',
    price: 6250,
    description: 'Ideal for Companies Seeking Advanced Lead Generation Tools.',
  },
];

const PRICING_CONTENT = [
  {
    title: 'Scrum team',
    col1: <FaCheck />,
    col2: <FaCheck />,
    col3: <FaCheck />,
  },
  {
    title: 'Scrum events (bi-weekly)',
    col1: <FaCheck />,
    col2: <FaCheck />,
    col3: <FaCheck />,
  },
  {
    title: 'Part-time UI/UX designer',
    col1: <FaCheck />,
    col2: <FaCheck />,
    col3: <FaCheck />,
  },
  {
    title: 'Part-time Front-end developer',
    col1: <FaCheck />,
    col2: <FaCheck />,
    col3: 'Full-time Front-end developer',
  },
  {
    title: 'Part-time Back-end developer (integration) ',
    col1: <AiOutlineClose />,
    col2: <FaCheck />,
    col3: <FaCheck />,
  },
  {
    title: 'Part-time SEO Analyst',
    col1: <AiOutlineClose />,
    col2: <FaCheck />,
    col3: <FaCheck />,
  },
  {
    title: 'Technical Project manager',
    col1: <FaCheck />,
    col2: <FaCheck />,
    col3: <FaCheck />,
  },
];

export function ComparePricing() {
  return (
    <div>
      <Table>
        <TableCaption>Plan comparison</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead />
            {PRICING_HEADING.map((data) => (
              <TableHead className="w-64 border" key={data.title}>
                <div className="py-3 flex flex-col gap-3">
                  <H3 className="hidden md:block">
                    <span className="text-primary-static">{data.title}</span>{' '}
                    {toUSD(data.price)}/month
                  </H3>
                  <p className="text-primary-static md:hidden">{data.title}</p>
                  <p className="hidden md:block">{data.description}</p>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {PRICING_CONTENT.map((data) => (
            <TableRow key={data.title}>
              <TableCell>{data.title}</TableCell>
              <TableCell>
                <div className="flex justify-center">{data.col1}</div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">{data.col2}</div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">{data.col3}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
