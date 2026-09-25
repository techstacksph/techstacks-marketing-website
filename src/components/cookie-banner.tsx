'use client';

import ReactCookieConsent from 'react-cookie-consent';
import Image from 'next/image';
import Link from 'next/link';
import techstacksDpoSeal from '@/assets/images/logo/techstacks-dpo-seal.png';
import { NavRoutes } from '@/constants/nav-routes';
import { Button } from './ui/button';
import { Subheading } from './ui/typography';

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
        <Image
          alt="Techstacks data protection officer seal"
          className="h-12 w-12 shrink-0 object-contain"
          height={48}
          src={techstacksDpoSeal}
          width={48}
        />
        <Subheading className="!m-0">
          By using our website, you agree to our{' '}
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
