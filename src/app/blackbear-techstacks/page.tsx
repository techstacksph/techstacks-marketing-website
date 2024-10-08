'use client';

// import { useRouter } from 'next/router';
import { type ReactNode, useEffect, useRef } from 'react';
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
      <div className="[&&&]:mt-0">{props.blackbearHeader}</div>
      <div className="[&&&]:mt-0">{props.blackbearAcademy}</div>
      <div className="[&&&]:mt-0">{props.growYourCareer}</div>
      <div className="[&&&]:mt-0" id="form" ref={formRef}>
        {props.blackbearForm}
      </div>
    </Main>
  );
}
