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
      },
      {
        label: 'Our team',
        href: NavRoutes.Company.OurTeam,
        description:
          'Get to know the people behind our success—the dynamic individuals that form our web development family.',
      },
      {
        label: 'Blogs',
        href: NavRoutes.Company.Blogs,
        description:
          'Explore, learn, and embark on a journey towards digital excellence.',
      },
      {
        label: 'Portfolios',
        href: NavRoutes.Company.Portfolios,
        description:
          'Dive into a diverse collection of designs, showcasing our ability to blend creativity with impactful digital solutions.',
      },
      {
        label: 'Careers',
        href: NavRoutes.Company.Careers,
        description:
          'Discover exciting career prospects at our firm, where innovation meets expertise.',
      },
    ],
  },
];

export const pagesLink = [
  {
    title: 'Products',
    href: NavRoutes.Products,
  },
  {
    title: 'Services',
    href: NavRoutes.Services,
  },
  {
    title: 'Pricing',
    href: NavRoutes.Pricings,
  },
  {
    title: 'Trainings',
    href: NavRoutes.Trainings,
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
