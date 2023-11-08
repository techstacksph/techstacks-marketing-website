import { DM_Sans as DMSans, Inter, Poppins } from 'next/font/google';

export const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

export const dmSans = DMSans({
  weight: ['500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
});
