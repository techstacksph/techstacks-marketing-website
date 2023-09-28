import React from 'react';
import { BiSolidCircle } from 'react-icons/bi';
import AliceCarousel from 'react-alice-carousel';
import { Player } from '@lottiefiles/react-lottie-player';
import { METHOD_CONTENT } from './website-lifecycle';

export default function OurProcess() {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-full">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-row gap-2 items-center">
            <div className="text-lg text-yellow-500">
              <BiSolidCircle />
            </div>
            <h3 className="text-lg text-muted">Our process</h3>
          </div>
          <AliceCarousel
            animationType="fadeout"
            autoPlay
            autoPlayInterval={3000}
            disableButtonsControls
            infinite
            items={METHOD_CONTENT.map(([title, description, lottieFile]) => (
              <div
                className="flex flex-col gap-2 border-2 rounded border-muted-foreground-static p-2 transition"
                key={title}
              >
                <div className="flex items-center self-center w-52 aspect-square shrink-0">
                  <Player autoplay loop src={lottieFile} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-center">{title}</h3>
                  <p className="text-lg text-muted font-normal text-center">
                    {description}
                  </p>
                </div>
              </div>
            ))}
            mouseTracking
          />
        </div>
      </div>
    </div>
  );
}
