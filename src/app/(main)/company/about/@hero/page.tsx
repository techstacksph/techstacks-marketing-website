import Image from 'next/image';
import { teamImage } from '@/assets/images';
import { PageHero } from '@/components/marketing';

export default function AboutHero() {
  return (
    <PageHero
      aside={
        <Image
          alt="The Techstacks team"
          className="w-full rounded-2xl border"
          priority
          sizes="(min-width: 992px) 50vw, 100vw"
          src={teamImage}
        />
      }
      breadcrumb="About us"
      description="We help local and global businesses grow with dependable web development, SaaS support, and intelligent automation, delivered by a skilled team that works as a close partner to our clients."
      eyebrow="About Techstacks"
      title="The technology backbone behind growing businesses"
    />
  );
}
