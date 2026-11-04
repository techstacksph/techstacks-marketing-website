import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Band, SectionHeader } from '@/components/marketing';
import { coreValues } from '@/constants/core-values';

export default function CoreValues() {
  return (
    <Band tone="surface">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionHeader
          align="left"
          className="lg:sticky lg:top-24 lg:self-start"
          description="Our values spell out our name, and they shape how we treat every client, project, and teammate."
          eyebrow="Our values"
          title="The principles you can hold us to"
        />
        <Accordion collapsible type="single">
          {coreValues.map(({ description, key, title }) => (
            <AccordionItem key={title} value={title}>
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="flex items-center gap-4 font-display text-lg font-semibold">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    {key}
                  </span>
                  {title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Band>
  );
}
