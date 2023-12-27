'use client';

import React from 'react';
import { Section } from '@/components/default-elements';
import { TabsList, Tabs, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import OjtPortfolios from '@/components/ojt-portfolios';
import OjtDreamWeb from '@/components/ojt-dream-web';

export default function OjtWebsite() {
  return (
    <div className="w-full flex justify-center py-16 ">
      <Section>
        <Tabs className="w-full flex flex-col gap-8" defaultValue="portfolio">
          <TabsList className="flex flex-row gap-2 md:gap-4 bg-transparent">
            <TabsTrigger
              className="text-base md:text-xl p-2 md:p-4 border border-primary-static data-[state=active]:bg-primary-static data-[state=active]:text-white data-[state=active]:shadow-sm "
              data-aos="fade-up"
              data-aos-delay={100}
              value="portfolio"
            >
              Portfolio Website
            </TabsTrigger>
            <TabsTrigger
              className="text-base md:text-xl p-2 md:p-4 border border-primary-static data-[state=active]:bg-primary-static data-[state=active]:text-white data-[state=active]:shadow-sm "
              data-aos="fade-up"
              data-aos-delay={100}
              value="dream-website"
            >
              Dream Website
            </TabsTrigger>
          </TabsList>
          <TabsContent
            className="flex flex-col gap-8 items-center"
            value="portfolio"
          >
            <OjtPortfolios />
          </TabsContent>

          <TabsContent
            className="flex flex-col gap-8 items-center"
            value="dream-website"
          >
            <OjtDreamWeb />
          </TabsContent>
        </Tabs>
      </Section>
    </div>
  );
}
