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
          'Our team is passionate about assisting clients in making a standout online presence. We specialize in creating visually stunning, user-centric, speedy, and safe websites that drive exceptional engagement and conversions.',
        Icon: AboutIcon,
      },
      {
        label: 'Our team',
        href: NavRoutes.Company.OurTeam,
        description:
          'Get to know the people behind our success—the dynamic individuals that form our web development family.',
        Icon: OurTeamIcon,
      },
      {
        label: 'Blogs',
        href: NavRoutes.Company.Blog,
        description:
          'Explore, learn, and embark on a journey towards digital excellence.',
        Icon: BlogIcon,
      },
      {
        label: 'Careers',
        href: NavRoutes.Company.Careers,
        description:
          'Discover exciting career prospects at our firm, where innovation meets expertise.',
        Icon: CareerNavIcon,
      },
    ],
  },
];

export const pagesLink = [
  {
    title: 'Services',
    href: NavRoutes.Services,
  },
];

export const productsLink = [
  {
    title: 'Products',
    link: [
      {
        label: 'Templates',
        href: '/products/templates',
        description:
          'Choose from expertly crafted website templates to launch your vision.',
        // Optionally add an icon here
      },
      {
        label: 'LED Products',
        href: '/products/led-products',
        description:
          'Explore our selection of LED products for your business needs.',
        // Optionally add an icon here
      },
    ],
  },
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
