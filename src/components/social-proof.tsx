'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import AliceCarousel from 'react-alice-carousel';

const BRANDS = [
  '/images/social-proof/jobbrew-black.png',
  '/images/social-proof/dediabetes-black.png',
  '/images/social-proof/pi-black.png',
  '/images/social-proof/unpuzzle-black.png',
  '/images/social-proof/release-black.png',
  '/images/social-proof/np-black.png',
  '/images/social-proof/mnm-black.png',
  '/images/social-proof/agassiz-black.png',
  '/images/social-proof/thunder-black.png',
] as const;

function SocialProof() {
  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={3000}
      controlsStrategy="alternate"
      disableButtonsControls
      disableDotsControls
      infinite
      items={BRANDS.map((brand, i) => (
        <div className="flex place-content-center" key={brand}>
          <Image
            alt={`Brand ${i}`}
            className="dark:invert"
            data-value={i}
            height={36}
            src={brand}
            width={125}
          />
        </div>
      ))}
      mouseTracking
      responsive={{
        0: { items: 2 },
        768: { items: 4 },
      }}
    />
  );
}

export default dynamic(() => Promise.resolve(SocialProof), { ssr: false });
