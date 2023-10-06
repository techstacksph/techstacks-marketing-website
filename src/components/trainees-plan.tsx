import React from 'react';
import Image from 'next/image';
import { TRAINING_PLANS } from '@/constants/training-plans';

export default function TraineesPlan() {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-full">
        <div className="flex flex-col items-center gap-8 xl:gap-14">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-2xl font-semibold text-center lg:text-3xl">
              Trainess can enjoy numerous benefits and perks that help support
              their learning and development
            </h2>
            <p className="text-base text-muted text-center lg:text-xl">
              From customized learning plans and project-based learning to
              access to industry experts and career growth opportunities, we
              give our trainees the tools and resources they need to succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
            {TRAINING_PLANS.map(([title, description, img]) => (
              <div
                className="grid grid-cols-1 items-start gap-4 p-6 border h-full rounded-2xl bg-white xl:grid-cols-[8rem_1fr] xl:p-8"
                key={title}
              >
                <div className="w-full">
                  <Image alt={`${title}`} height={100} src={img} width={100} />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl text-black lg:text-3xl">{title}</h3>
                  <p className="text-base text-muted lg:text-xl">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
