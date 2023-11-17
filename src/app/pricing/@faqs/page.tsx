"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import { H1, Section, Subheading } from '@/components/default-elements';
import { SvgFaq } from '@/components/icons/faq-svg';
import { CompanyFaqs } from '@/constants/faqs-pricing';
import { H3 } from '@/components/ui/typography';
import { useState } from 'react';

export default function FaqsSection() {

  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);
  const handleAccordionToggle = (index: number) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Section className="flex flex-col items-center gap-20">
      <div className="flex flex-col items-start justify-between gap-4 lg:flex-row">
        <div className='flex flex-col items-start justify-start gap-8 lg:gap-11'>
          <div className='flex flex-col items-start justify-start'>
            <span className='text-teal-500 text-2xl text-medium'>(FAQ)</span>
            <H1>Frequently Asked Questions</H1>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-evenly'>
              <Accordion className='flex flex-col gap-5' collapsible type="single">
                {CompanyFaqs.map((faq, index) => (
                  <AccordionItem
                    className=""
                    data-aos="fade-right"
                    data-aos-delay={100 * index}
                    key={faq.topic}
                    value={faq.topic}
                  >
                    {faq.questions.map((question, keys) => (
                      <div key={`${faq.topic}-${keys}`} className='flex flex-col items-start justify-start gap-5 border-b lg:max-w-[590px] pb-5'>
                        <div className="flex items-start justify-start gap-5 md:items-center">
                          <AccordionTrigger onClick={() => handleAccordionToggle(index)}>
                            <div className="flex items-center justify-center p-3 w-[37.99px] rounded-lg md:rounded-none lg:rounded-lg shadow-lg md:shadow-none lg:shadow-lg bg-background [&&]:shadow-primary-static/30">
                              <Subheading className='font-extrabold !leading-none' dangerouslySetInnerHTML={{ __html: openAccordionIndex === index ? "-" : "+" }} />
                            </div>
                          </AccordionTrigger>
                          <H3 className='text-[1rem] md:text-xl'>{question.q}</H3>
                        </div>
                        <AccordionContent data-state={openAccordionIndex === index ? 'open' : 'close'} className="text-base font-normal xl:text-lg pl-4 md:pl-[4.4rem]">
                          <Subheading className='max-w-[660px] text-muted !text-[1rem] '>{question.a}</Subheading>
                        </AccordionContent>
                      </div>
                    ))}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center lg:justify-end lg:pt-[4rem]  lg:sticky lg:top-0 lg:max-w-[600px]'>
          <SvgFaq className='w-full max-w-[350px] h-[358px] lg:h-[428px] lg:max-w-[800px] ' />
        </div>
      </div>
    </Section>
  );
}
