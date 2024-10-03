import { blackAcademyContents } from '@/constants/blackbear-acads-content';
import { Section } from '../default-elements';
import { H3 } from '../ui/typography';

export function BlackBearAcademyContent() {
  return (
    <Section>
      <div className="w-full flex justify-center px-10">
        <div className="grid grid-cols-3 gap-4  ">
          {blackAcademyContents.map(({ title, list }) => (
            <div className="p-4  flex flex-col gap-8 h-full " key={title}>
              <H3 className="self-center text-lg ">{title}</H3>
              <ul>
                {list.map(({ id, content }) => (
                  <li key={id}>{content}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
