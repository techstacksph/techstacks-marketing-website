import localFont from 'next/font/local';

// Self-hosted so that builds never depend on a response from Google Fonts.
export const display = localFont({
  src: '../assets/fonts/plus-jakarta-sans-latin-variable.woff2',
  weight: '200 800',
  variable: '--font-display',
});

export const inter = localFont({
  src: '../assets/fonts/inter-latin-variable.woff2',
  weight: '100 900',
  variable: '--font-inter',
});
