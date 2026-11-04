import { Inter, Plus_Jakarta_Sans as PlusJakartaSans } from 'next/font/google';

export const display = PlusJakartaSans({
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-display',
});

export const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
});
