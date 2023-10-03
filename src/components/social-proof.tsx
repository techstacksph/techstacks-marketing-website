'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import AliceCarousel from 'react-alice-carousel';

const BRANDS = [
  '/images/social-proof/dediabetes.png',
  '/images/social-proof/pi.png',
  '/images/social-proof/unpuzzle.png',
  '/images/social-proof/prime-light.png',
  '/images/social-proof/win.png',
  '/images/social-proof/release.png',
  '/images/social-proof/nextpay.png',
  '/images/social-proof/mnm.png',
  '/images/social-proof/agassiz.png',
  '/images/social-proof/thunder.png',
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
            className="grayscale"
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
