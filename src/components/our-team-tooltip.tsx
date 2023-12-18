'use client';

import React, { useState, type MouseEventHandler } from 'react';
import Image from 'next/image';
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { OUR_TEAM } from '@/constants/our-team';

export default function OurTeamTooltip() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove: MouseEventHandler<HTMLImageElement> = (event) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-8 w-full">
      {OUR_TEAM.map(({ id, img, name, position }, index) => (
        <div
          className="relative flex justify-center group"
          data-aos="fade-up"
          data-aos-delay={index * 100}
          key={id}
          onMouseEnter={() => {
            setHoveredIndex(id);
          }}
          onMouseLeave={() => {
            setHoveredIndex(null);
          }}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === id && (
              <motion.div
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                  },
                }}
                className="absolute -top-32 md:-top-28 -left-8 md:left-0 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md backdrop-blur-sm bg-primary-static dark:bg-white z-50 shadow-xl p-4 md:p-8"
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX,
                  rotate,
                }}
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-primary-static to-transparent h-px " />
                <div className="relative flex flex-col justify-center items center gap-4">
                  <h3 className="text-lg text-white dark:text-black text-center  font-medium">
                    {name}
                  </h3>
                  <p className="text-base text-center text-yellow-50 dark:text-primary-static">
                    {position}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <Image
            alt={`${name} image`}
            className="object-cover object-top rounded-full w-32 h-32 md:w-60 md:h-60 border-2 group-hover:scale-105 group-hover:z-30 border-primary-static dark:border-white  relative transition duration-500"
            onMouseMove={handleMouseMove}
            src={img}
          />
        </div>
      ))}
    </div>
  );
}
