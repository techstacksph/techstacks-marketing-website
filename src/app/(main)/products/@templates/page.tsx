'use client';

import { useState } from 'react';
import { Section } from '@/components/default-elements';
import { ProductCard } from '@/components/product-card';
import { ProductsPagination } from '@/components/products-pagination';
import { H2 } from '@/components/ui/typography';
import { WEBTEMPLATES } from '@/constants/products-templates';

const TEMPLATES_PER_PAGE = 9;

export default function WebsiteTemplate() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(WEBTEMPLATES.length / TEMPLATES_PER_PAGE);

  const startIndex = (currentPage - 1) * TEMPLATES_PER_PAGE;
  const endIndex = startIndex + TEMPLATES_PER_PAGE;
  const paginatedTemplates = WEBTEMPLATES.slice(startIndex, endIndex);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="w-full bg-primary-static/10  ">
      <div className="w-full flex  justify-center py-16  bg-background  rounded-tr-[150px] md:rounded-tr-[250px] lg:rounded-tr-[450px]   ">
        <Section className="space-y-8">
          <div className="flex flex-col items-center  w-full">
            <div className="flex flex-col items-center gap-4">
              <H2
                className="text-center [&>span]:text-primary-static"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Choose from expertly crafted templates to launch your vision
              </H2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 ">
            {paginatedTemplates.map((template, index) => (
              <ProductCard
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                features={template.features}
                image={template.image}
                imageMobile={template.imageMobile}
                index={index}
                key={template.title}
                title={template.title}
              />
            ))}
          </div>

          <div className="">
            <ProductsPagination
              current={currentPage}
              next={currentPage < totalPages}
              onNext={handleNext}
              onPrev={handlePrev}
              prev={currentPage > 1}
              total={totalPages}
            />
          </div>
        </Section>
      </div>
    </div>
  );
}
