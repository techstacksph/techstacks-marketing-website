/* eslint-disable react/no-unknown-property -- no */
import { type ReactNode } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import MessengerChat from '@/components/fb-messenger';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <MessengerChat />
      <Footer />
    </>
  );
}
