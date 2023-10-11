import React from 'react';
import { Section } from '@/components/default-elements';
import { Button } from '@/components/ui/button';

export default function Services() {
  return (
    <Section className="py-10">
      <div className="w-full">
        <div>
          <div>
            <h3>Your trusted I.T web development services partner!</h3>
            <p>
              We specialize in delivering top-notch IT services tailored to meet
              your unique business needs.
            </p>
            <Button>Let&apos;s work together</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
