export const POSITIONS = ['Frontend', 'Backend', 'Other'] as const;
export const EMPLOYMENT = ['Part-time'] as const;

export interface Job {
  description: string;
  employment: (typeof EMPLOYMENT)[number];
  location: string;
  name: string;
  type: (typeof POSITIONS)[number];
}
