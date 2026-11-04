'use client';

import { useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { ProductsPagination } from '@/components/products-pagination';
import { WEBTEMPLATES } from '@/constants/products-templates';
import { Band, PageHero } from '@/components/marketing';

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
    <div>
      <PageHero
        breadcrumb="Products"
        description="Get a professional website online sooner and at a lower upfront investment. Choose a ready-made template and our team will tailor it to your brand."
        eyebrow="Website templates"
        title="Launch faster, without starting from scratch"
      />

      <Band>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 ">
            {paginatedTemplates.map((template, index) => (
              <ProductCard
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                features={template.features}
                id={template.id}
                image={template.image}
                imageMobile={template.imageMobile}
                index={index}
                key={template.title + template.id}
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
        </div>
      </Band>
    </div>
  );
}
