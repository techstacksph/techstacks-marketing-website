'use client';

import Image from 'next/image';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { projectItems } from '@/constants/project-items';
import { cn } from '@/utils/cn';
import { TechstacksLogo } from './icons/techstacks-logo';
import { H3, Subheading } from './ui/typography';

export function WorksParallax() {
  return (
    <MouseParallaxContainer
      className="flex flex-col w-full gap-16 justify-evenly overflow-clip"
      containerStyle={{ overflow: 'clip' }}
      globalFactorX={0.03}
      globalFactorY={0.02}
      inverted
      resetOnLeave
    >
      <>
        {projectItems.map(({ img, title, subtitle, category }, idx) => (
          <MouseParallaxChild
            className={cn(
              idx === 0 && 'pt-32',
              idx === projectItems.length - 1 && 'pb-64',
            )}
            key={title}
          >
            <div
              className={cn(
                'flex items-center justify-center gap-8 opacity-50 hover:opacity-100 transition-opacity flex-col md:flex-row',
                Boolean(idx % 2) && 'md:flex-row-reverse',
              )}
            >
              <Image alt={`${title} screenshot`} src={img} />
              <div className="px-6 py-4 border border-border rounded-xl">
                <H3>{title}</H3>
                <Subheading>{subtitle}</Subheading>
                <Subheading>{category}</Subheading>
              </div>
            </div>
          </MouseParallaxChild>
        ))}

        <div className="absolute w-full h-full pointer-events-none">
          <div className="sticky top-0 flex items-center justify-center h-screen bg-transparent">
            <div className="border pointer-events-auto bg-primary/80 backdrop-blur border-border rounded-2xl">
              <div className="px-6 py-4">
                <h3 className="font-semibold leading-loose text-center whitespace-pre-wrap">
                  <span className="text-lg md:text-3xl text-foreground">
                    Made with 💖 from
                  </span>
                  {'\n'}
                  <span className="text-3xl md:text-5xl font-poppins dark:text-primary-static text-foreground">
                    <TechstacksLogo className="inline" /> Techstacks
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </>
    </MouseParallaxContainer>
  );
}
