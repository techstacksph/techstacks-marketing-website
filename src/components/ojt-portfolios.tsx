import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { OJT_TEAM } from '@/constants/ojt-team';
import { H3, Subheading } from './ui/typography';
import { Button } from './ui/button';

export default function OjtPortfolios() {
  const imagePerRow = 4;
  const [next, setNext] = useState<number>(imagePerRow);

  const handleLoadData = () => {
    setNext((value) => value + 2);
  };

  return (
    <>
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        {OJT_TEAM.slice(0, next).map(
          ({ id, author, web, position, portfolioLink }, index) => (
            <div data-aos="fade-up" data-aos-delay={index * 100} key={id}>
              <div className="flex flex-col items-center justify-center gap-4 transition duration-300 ease-in-out hover:scale-110 ">
                <Image alt={`${author} image`} src={web} />
                <H3>{author}</H3>
                <Subheading className="lg:text-base">{position}</Subheading>

                <Link
                  className="text-center text-muted hover:text-primary-static"
                  href={portfolioLink}
                  target="_blank"
                >
                  {portfolioLink}
                </Link>
              </div>
            </div>
          ),
        )}
      </div>
      {next < OJT_TEAM.length && (
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
