import { type SetRequired } from 'type-fest';
import { Band, SectionHeader } from '@/components/marketing';
import { TeamGalleryCard } from '@/components/team-gallery-card';
import { type MemberData, TEAM } from '@/constants/team';

export default function OurTeamGallery() {
  const withGallery = TEAM.filter(
    (member): member is SetRequired<MemberData, 'teamGallery'> =>
      Boolean(member.teamGallery),
  );

  return (
    <Band tone="surface">
      <SectionHeader
        className="mb-10 lg:mb-14"
        eyebrow="In their words"
        title="What drives the team"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {withGallery.map(({ id, name, profile, position, teamGallery }) => (
          <div data-aos="fade-up" key={id}>
            <TeamGalleryCard
              body={teamGallery.body}
              name={name}
              position={position}
              src={profile}
              title={teamGallery.title}
            />
          </div>
        ))}
      </div>
    </Band>
  );
}
