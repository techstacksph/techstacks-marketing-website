import { Band, SectionHeader, TestimonialCard } from '@/components/marketing';
import { TESTIMONIALS } from '@/constants/testimonials';

export default function TestimonialServices() {
  return (
    <Band tone="surface">
      <SectionHeader
        className="mb-10 lg:mb-14"
        eyebrow="Client results"
        title="What working with us looks like"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((testimonial) => (
          <div data-aos="fade-up" key={testimonial.name}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </Band>
  );
}
