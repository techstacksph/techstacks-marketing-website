/* eslint-disable react/no-unknown-property -- no */
import { type ReactNode } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <script dangerouslySetInnerHTML={{ __html: `window.fbAsyncInit = function() {
          FB.init({
            appId            : '1337528334395112',
            xfbml            : true,
            version          : 'v23.0'
          });
        };` }} />
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment -- no */}
      {/* @ts-expect-error */}
      <div className="fb-messengermessageus" color="blue" messenger_app_id="1337528334395112" page_id="2385228971773232" size="standard" />
      <Footer />
    </>
  );
}
