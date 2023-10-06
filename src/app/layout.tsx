import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Providers } from '@/components/providers';

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
