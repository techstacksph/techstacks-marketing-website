import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Providers } from '@/components/providers';
import Loader from '@/components/route-progress-bar';
import { dmSans, inter, poppins } from '@/lib/fonts';
import { cn } from '@/utils/cn';
import { SkipToMain } from '@/components/skip-main-btn';
import { CookieBanner } from '@/components/cookie-banner';

export const metadata: Metadata = {
  title: 'Techstacks IT Web Development Services',
  description:
    'Techstacks - team of developers and designers committed to help our clients stand out and take advantage of the web by creating beautiful, user-friendly, fast, secure, high converting, engaging websites. Building websites with a purpose. Hire us today and accelerate your business growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={cn(dmSans.variable, poppins.variable, inter.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <body className="font-inter">
        <SkipToMain />
        <Providers>
          <Loader />
          <Header />
          {children}
          <Footer />
        </Providers>
        <CookieBanner />
      </body>
    </html>
  );
}
