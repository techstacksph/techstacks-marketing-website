import React from 'react';
import Image from 'next/image';
import traineesCycleImg from '../../public/images/trainings/cycle-hero.png';

export default function TraineesCycle() {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-full">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center [&>span]:text-primary-static  lg:text-3xl lg:text-left xl:text-5xl">
              Setting you up for <span>success</span>
            </h2>
            <p className="text-base text-muted text-center lg:text-xl lg:text-left">
              With our training cycle, you&apos;ll have access to top-notch
              resources and guidance from experienced professionals to support
              your growth and development.
            </p>
          </div>
          <div className="w-fulll flex justify-center ">
            <Image
              alt="Trainees cycle image"
              height={636}
              src={traineesCycleImg}
              width={636}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
