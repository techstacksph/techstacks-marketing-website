import { Band, ProjectCard, SectionHeader } from '@/components/marketing';
import { projectItems } from '@/constants/project-items';

export default function SelectedWork() {
  return (
    <Band>
      <SectionHeader
        className="mb-10 lg:mb-14"
        eyebrow="Selected work"
        title="Built for businesses across industries"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {projectItems.map(({ img, subtitle, title }) => (
          <div data-aos="fade-up" key={title}>
            <ProjectCard category={subtitle} img={img} title={title} />
          </div>
        ))}
      </div>
    </Band>
  );
}
