import React from 'react';
import Image from 'next/image';
import { BiSolidCircle } from 'react-icons/bi';
import { projectItems } from '@/constants/project-items';

export default function CreativeWorks() {
  return (
    <div className="w-full py-16 flex justify-center bg-background/25">
      <div className="w-full">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-row gap-2 items-center justify-center">
              <div className="text-lg text-yellow-500">
                <BiSolidCircle />
              </div>
              <p className="text-lg text-muted text-center lg:text-left">
                Completed Projects
              </p>
            </div>

            <h3 className="text-3xl font-semibold text-center lg:text-left lg:text-4xl xl:text-6xl">
              Our Creative Works
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 w-full max-w-screen-2xl">
            {projectItems.map(({ img, title, subtitle }) => (
              <div
                className="w-full h-56 xl:h-96 rounded-3xl p-6 bg-white relative flex items-center transition ease-out shadow-lg hover:translate-y-5 hover:before:opacity-100 [&>div]:hover:opacity-100 [&>div]:hover:translate-y-0 before:absolute before:top-0 before:left-0 before:block before:w-full before:h-full before:rounded-2xl before:bg-black/60 before:z-20 before:duration-500 before:opacity-0"
                key={title}
              >
                <Image
                  alt={`${title} image`}
                  className="w-full h-full absolute top-0 left-0 rounded-2xl"
                  src={img}
                />
                <div className="flex flex-col bg-black/50 [&&]:shadow-primary-static/40 border border-primary-static p-4 w-full max-w-sm rounded-2xl gap-4 relative z-50 text-white opacity-0 translate-y-8 duration-500 [&>h3]:m-0 [&>p]:hover:text-yellow-400 [&>h3]:hover:text-primary-static">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                  <p className="text-lg font-medium">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
