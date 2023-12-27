import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { OJT_DREAM_WEB } from '@/constants/ojt-dream-web';
import { Button } from './ui/button';
import { H3 } from './ui/typography';

export default function OjtDreamWeb() {
  const imagePerRow = 4;
  const [next, setNext] = useState<number>(imagePerRow);

  const handleLoadData = () => {
    setNext((value) => value + 2);
  };
  return (
    <>
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        {OJT_DREAM_WEB.slice(0, next).map(
          ({ id, name, dreamSrc, dreamLink }, index) => (
            <div data-aos="fade-up" data-aos-delay={index + 100} key={id}>
              <div className="flex flex-col items-center justify-center gap-4 transition duration-300 ease-in-out hover:scale-110">
                <Image alt={`${name} image`} src={dreamSrc} />
                <H3>{name}</H3>
                <Link
                  className="text-muted hover:text-primary-static"
                  href={dreamLink}
                  target="_blank"
                >
                  {dreamLink}
                </Link>
              </div>
            </div>
          ),
        )}
      </div>
      {next < OJT_DREAM_WEB.length && (
        <Button
          className="relative inline-flex items-center justify-start w-full p-3 overflow-hidden font-medium transition-all bg-transparent border rounded md:w-52 h-14 border-primary-static group"
          onClick={handleLoadData}
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
          <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out dark:text-white group-hover:text-black">
            Load more
          </span>
        </Button>
      )}
    </>
  );
}
