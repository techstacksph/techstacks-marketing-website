import { DM_Sans as DMSans, Poppins } from 'next/font/google';

export const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export const dmSans = DMSans({
  weight: ['500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
