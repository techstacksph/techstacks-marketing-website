import React from 'react';
import { BiSolidCircle } from 'react-icons/bi';

export default function WhoWeAre() {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-full">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <div className="text-lg text-yellow-500">
              <BiSolidCircle />
            </div>
            <h3 className="text-lg text-muted">Who we are</h3>
          </div>

          <p className="text-xl font-normal text-center lg:text-2xl">
            We&apos;re a team of developers and designers committed to help ou
            clients stand out and take advantage of the web by creating
            beautiful, user-friendly, fast, secure, high conveting, engaging
            websites
          </p>
        </div>
      </div>
    </div>
  );
}
