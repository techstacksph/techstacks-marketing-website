import Image from 'next/image';

const CLIENTS = [
  { name: 'NextPay', src: '/images/social-proof/np-black.png' },
  { name: 'Release Media', src: '/images/social-proof/release-black.png' },
  { name: 'Portfolio Insider', src: '/images/social-proof/pi-black.png' },
  { name: 'Unpuzzle', src: '/images/social-proof/unpuzzle-black.png' },
  { name: 'MNM Customs Brokerage', src: '/images/social-proof/mnm-black.png' },
  {
    name: 'Agassiz All Storage',
    src: '/images/social-proof/agassiz-black.png',
  },
  {
    name: 'Thunder Enterprises',
    src: '/images/social-proof/thunder-black.png',
  },
  { name: 'DeDiabetes', src: '/images/social-proof/dediabetes-black.png' },
  { name: 'Jobbrew', src: '/images/social-proof/jobbrew-black.png' },
] as const;

export default function SocialProof() {
  return (
    <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-14">
      {CLIENTS.map(({ name, src }) => (
        <li key={name}>
          <Image
            alt={name}
            className="h-8 w-auto opacity-70 transition-opacity hover:opacity-100 dark:invert lg:h-9"
            height={36}
            src={src}
            width={125}
          />
        </li>
      ))}
    </ul>
  );
}
