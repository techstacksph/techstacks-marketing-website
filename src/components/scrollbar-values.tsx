import React from 'react';
import { values } from '@/constants/values';
import { Section } from './default-elements';

export default function ScrollbarValues() {
  return (
    <div className="w-full flex justify-center py-16">
      <Section>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-5 w-1/2 ">
            {values.map((value) => (
              <div key={value.title}>
                <p>{value.title}</p>
                <h3>
                  {value.heading} <span>{value.highlight}</span>
                </h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
          <div className="w-1/2">asd</div>
        </div>
      </Section>
    </div>
  );
}
