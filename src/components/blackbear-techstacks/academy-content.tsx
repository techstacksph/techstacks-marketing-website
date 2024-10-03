import { Subheading } from '../ui/typography';

export function AcademyContent() {
  return (
    <div className="w-full flex justify-center py-3 text-md md:text-lg py-5">
      <div className=" w-full flex flex-col gap-10">
        <Subheading className="text-center text-foreground">
          With attackers employing more complex obfuscation techniques,
          cyberattacks are becoming more sophisticated than ever. Most
          organization&apos;s people, process and technology cannot keep up with
          evolving cyber threats, odds are that your organization is exposed to
          a much higher risk, especially if it is short of talent who has the
          right set of strategies, experience and skills to mitigate the risk.
        </Subheading>
        <Subheading className="text-center text-foreground">
          Black Bear Academy was established to offer cybersecurity courses that
          help the industry address the talent gap. Our courses are online
          lectures, workshops, learning assessments, virtual laboratories,
          gamified challenges and cyber drills leveraging our Black Bear Academy
          Learning Management platform.
        </Subheading>
      </div>
    </div>
  );
}
