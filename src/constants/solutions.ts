import type { StaticImageData } from 'next/image';
import { portfolioImg, unpuzzleImg, winmartImg } from '@/assets/images';
import { TESTIMONIALS, type Testimonial } from './testimonials';

export interface Solution {
  /** Anchor on the services page. */
  id: string;
  /** The business need, used as the tab label on the home page. */
  need: string;
  /** The Techstacks service that answers the need. */
  service: string;
  title: string;
  challenge: string;
  deliverables: string[];
  result: string;
  project?: { img: StaticImageData; name: string };
  testimonial?: Testimonial;
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'websites',
    need: 'Win more customers',
    service: 'Websites & e-commerce',
    title: 'Turn your website into a source of new business',
    challenge:
      'Customers judge your business by its website. If it is slow, dated, or hard to update, you lose them before you ever get the chance to talk.',
    deliverables: [
      'Custom websites, landing pages, and online stores',
      'Design that reflects your brand and guides visitors to act',
      'Performance and SEO optimization after launch',
    ],
    result:
      'A fast, credible online presence that turns visitors into inquiries and sales.',
    project: { img: winmartImg, name: 'WinMart' },
  },
  {
    id: 'web-apps',
    need: 'Launch a product',
    service: 'Web application development',
    title: 'Bring your product or internal system to life',
    challenge:
      'Custom software is a major investment. Vague scope, surprise costs, and late feedback are what make it risky.',
    deliverables: [
      'Scope, deliverables, and cost agreed before the build',
      'Prototypes you can review before development starts',
      'Incremental builds with code reviews and quality assurance',
    ],
    result:
      'Working software in your hands sooner, with fewer surprises along the way.',
    project: { img: unpuzzleImg, name: 'Unpuzzle' },
  },
  {
    id: 'dedicated-team',
    need: 'Add engineering capacity',
    service: 'Development team as a service',
    title: 'Scale delivery without scaling your payroll',
    challenge:
      'Your roadmap is outgrowing your team, and hiring, onboarding, and managing new developers takes time you do not have.',
    deliverables: [
      'Developers, designers, and a technical project manager',
      'A Scrum team with regular sprint events',
      'Capacity that can adjust as your priorities change',
    ],
    result:
      'More delivery capacity, without the overhead of building an in-house department.',
    project: { img: portfolioImg, name: 'Portfolio Insider' },
  },
  {
    id: 'automation',
    need: 'Automate manual work',
    service: 'AI & intelligent automation',
    title: 'Give your team back the hours lost to repetitive work',
    challenge:
      'Manual data entry, copy-paste between systems, and repeat follow-ups slow your team down and invite costly mistakes.',
    deliverables: [
      'A review of the workflows costing you the most time',
      'Integrations that connect the tools you already use',
      'AI-assisted automation where it genuinely adds value',
    ],
    result:
      'Less time on repetitive tasks, and a team free to focus on customers and growth.',
  },
  {
    id: 'security-maintenance',
    need: 'Protect what you built',
    service: 'Cybersecurity & maintenance',
    title: 'Keep your systems secure, current, and running',
    challenge:
      'Outdated or exposed systems put revenue, customer trust, and your reputation at risk, usually when you can least afford it.',
    deliverables: [
      'Security audits and protection against common vulnerabilities',
      'Ongoing updates and performance maintenance',
      'Post-launch technical support and extended support plans',
    ],
    result:
      'Peace of mind that your systems stay secure, up to date, and performing well.',
    testimonial: TESTIMONIALS[0],
  },
];
