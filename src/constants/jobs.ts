export const POSITIONS = ['Frontend', 'Backend', 'Admin', 'UI/UX', 'Marketing / SEO', 'Other'] as const;
export const EMPLOYMENT = ['Part-time', 'Full-time'] as const;

export interface Job {
  description: string;
  employment: (typeof EMPLOYMENT)[number];
  location: string;
  name: string;
  type: (typeof POSITIONS)[number];
}
