'use client';

// import { useRouter } from 'next/router';
import { type ReactNode, useEffect, useRef } from 'react';
import Script from 'next/script';
import { Main } from '@/components/default-elements';

export default function BlackBearPage(props: Record<string, ReactNode>) {
  const formRef = useRef<HTMLDivElement>(null); // Create a ref for the form

  useEffect(() => {
    if (window.location.hash === '#form') {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <Main>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text, jsx-a11y/alt-text -- fallback for js disabled*/}
        <img
          height="1"
          src="https://www.facebook.com/tr?id=1493382818032894&ev=PageView
&noscript=1"
          width="1"
        />
      </noscript>
      <div className="[&&&]:mt-0">{props.blackbearHeader}</div>
      <div className="[&&&]:mt-0">{props.blackbearAcademy}</div>
      <div className="[&&&]:mt-0">{props.growYourCareer}</div>
      <div className="[&&&]:mt-0" id="form" ref={formRef}>
        {props.blackbearForm}
      </div>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq) return;
                n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq) f._fbq=n;
                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];
                t=b.createElement(e);
                t.async=!0;
                t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s);
              }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1493382818032894');
              fbq('track', 'PageView');
            `,
        }}
        id="meta-pixel"
      />
    </Main>
  );
}
