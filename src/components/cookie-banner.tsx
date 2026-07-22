'use client';

import ReactCookieConsent from 'react-cookie-consent';
import Link from 'next/link';
import { NavRoutes } from '@/constants/nav-routes';
import { Button } from './ui/button';
import { Subheading } from './ui/typography';
import BrandLogo from './brand-logo';

export function CookieBanner() {
  return (
    <ReactCookieConsent
      ButtonComponent={Button}
      buttonText="I understand"
      buttonWrapperClasses="shrink-0"
      containerClasses="bottom-0 sticky flex px-8 py-4 gap-8 justify-between items-center bg-background/75 border-t flex-col md:flex-row backdrop-blur-md z-50"
      cookieName="techstacks-cookie"
      disableStyles
    >
      <div className="flex items-center gap-4">
        <BrandLogo className="shrink-0" />
        <Subheading className="!m-0">
          . By using our website, you agree to our{' '}
          <Link
            className="font-bold text-primary-static"
            href={NavRoutes.PrivacyPolicy}
          >
            Privacy Policy
          </Link>
          .
        </Subheading>
      </div>
    </ReactCookieConsent>
  );
}
