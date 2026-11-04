import { PageHero } from '@/components/marketing';

export function PrivacyPolicyHero() {
  return (
    <PageHero
      breadcrumb="Privacy Policy"
      description={
        <>
          How Techstacks IT Services Inc. handles your personal data.
          <span className="mt-2 block text-sm">
            Last updated September 25, 2026
          </span>
        </>
      }
      title="Privacy Notice"
    />
  );
}
