'use client';

import { AccordionHeader, AccordionTrigger } from '@radix-ui/react-accordion';
import { Subheading } from '@/components/default-elements';
import { CompanyFaqs } from '@/constants/faqs-pricing';
import { H3 } from '@/components/ui/typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import { Button } from './ui/button';

export function PricingAccordion() {
  return (
    <Accordion className="flex flex-col gap-5" collapsible type="single">
      {CompanyFaqs.map((faq, index) => (
        <AccordionItem
          data-aos="fade-right"
          data-aos-delay={100 * index}
          key={faq.topic}
          value={faq.topic}
        >
          {faq.questions.map((question) => (
            <div
              className="flex flex-col items-start justify-start gap-5 pb-5 border-b"
              key={question.q}
            >
              <AccordionHeader asChild className="flex items-center gap-4">
                <H3>
                  <AccordionTrigger asChild>
                    <Button
                      className="data-[state=open]:after:content-['-'] after:content-['+'] after:block rounded-lg p-3 aspect-square md:rounded-none lg:rounded-lg shadow-lg md:shadow-none lg:shadow-lg [&&]:shadow-primary-static/30"
                      variant="ghost"
                    />
                  </AccordionTrigger>
                  <span>{question.q}</span>
                </H3>
              </AccordionHeader>
              <AccordionContent className="pl-4 md:pl-16">
                <Subheading>{question.a}</Subheading>
              </AccordionContent>
            </div>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
