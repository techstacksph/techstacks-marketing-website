import { AboutIcon } from '@/components/icons/about-icon';
import { CareerNavIcon } from '@/components/icons/career-nav-icon';
import { OurTeamIcon } from '@/components/icons/our-team-icon';
import { BlogIcon } from '@/components/icons/blog-icon';
import { NavRoutes } from './nav-routes';

export const companyLink = [
  {
    title: 'Company',
    link: [
      {
        label: 'About us',
        href: NavRoutes.Company.AboutUs,
        description:
          'Who we are, what we stand for, and why businesses trust us as their technology partner.',
        Icon: AboutIcon,
      },
      {
        label: 'Our team',
        href: NavRoutes.Company.OurTeam,
        description:
          'Meet the leaders, developers, and specialists behind your project.',
        Icon: OurTeamIcon,
      },
      {
        label: 'Insights',
        href: NavRoutes.Company.Blog,
        description:
          'Practical insights on technology and running a digital business.',
        Icon: BlogIcon,
      },
      {
        label: 'Careers',
        href: NavRoutes.Company.Careers,
        description: 'Build your career on real projects for real businesses.',
        Icon: CareerNavIcon,
      },
    ],
  },
];

export const pagesLink = [
  // {
  //   title: 'Shop',
  //   href: 'https://shop.techstacksph.com/',
  //   target: '_blank',
  // },
  {
    title: 'Services',
    href: NavRoutes.Services,
  },
  {
    title: 'Products',
    href: NavRoutes.Products,
  },
  {
    title: 'LED Display',
    href: NavRoutes.LED,
  },
  // {
  //   title: 'Pricing',
  //   href: NavRoutes.Pricing,
  // },
  // {
  //   title: 'Trainings',
  //   href: NavRoutes.Trainings,
  // },
];

export const portfolioLink = [
  {
    title: 'Portfolio',
    link: [
      {
        label: 'Web app development',
        href: '#',
      },
      {
        label: 'Wordpress development',
        href: '#',
      },
      {
        label: 'Website development',
        href: '#',
      },
      {
        label: 'Landing pages',
        href: '#',
      },
      {
        label: 'UI/UX projects',
        href: '#',
      },
    ],
  },
];
