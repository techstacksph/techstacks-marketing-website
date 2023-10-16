import React from 'react';
import Image from 'next/image';
import { coreServices } from '@/constants/core-services';
import { Section } from './default-elements';

export default function CoreServices() {
  return (
    <div className="w-full h h-full md:h-screen flex justify-center items-center py-16 bg-slate-900">
      <Section>
        <div className="flex flex-col items-center gap-20">
          <h3 className="text-2xl text-white font-semibold text-center lg:text-4xl">
            Core Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5 md:gap-4">
            {coreServices.map((core) => (
              <div
                className="group relative h-full overflow-hidden cursor-pointer bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-xl"
                key={core.title}
              >
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-200 transition-all duration-300 group-hover:scale-[10]" />
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-green-200 transition-all duration-300 group-hover:bg-green-900">
                    <Image alt={`${core.title} icon`} src={core.icon} />
                  </span>
                  <div className="space-y-6 pt-5 text-base leading-7 text-muted transition-all duration-300 group-hover:text-black">
                    <p className="text-lg md:text-2xl font-semibold">
                      {core.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
