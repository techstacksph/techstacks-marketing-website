import Image from 'next/image';
import { Band } from '@/components/marketing';
import { OUR_TEAM } from '@/constants/our-team';

export default function CoreTeam() {
  return (
    <Band>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
        {OUR_TEAM.map(({ id, img, name, position }) => (
          <li data-aos="fade-up" key={id}>
            <Image
              alt={name}
              className="aspect-square w-full rounded-xl border object-cover object-top"
              sizes="(min-width: 992px) 25vw, (min-width: 768px) 33vw, 50vw"
              src={img}
            />
            <p className="mt-3 font-display font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{position}</p>
          </li>
        ))}
      </ul>
    </Band>
  );
}
