import { ReleaseLogo } from '@/components/icons/release-logo';
import { DediabetesLogo } from '@/components/icons/dediabetes-logo';
import { NextpayLogo } from '@/components/icons/nextpay-logo';

export const TESTIMONIAL_SERVICES = [
  [
    // '/images/social-proof/release.png',
    ReleaseLogo,
    'CTO | Release Media Inc.',
    'Peter',
    "One of the best agencies we've ever worked with. Solid work that is very responsive to our needs. Techstacks, thank you so much for everything you've done.",
  ],
  [
    // '/images/social-proof/dediabetes.png',
    DediabetesLogo,
    'CTO | DeDiabetes.com',
    'Adolfo Jimenez',
    'Great service and knowledge with GatsbyJs',
  ],
  [
    // '/images/social-proof/nextpay.png',
    NextpayLogo,
    'CTO | NextPay Ph.',
    'Don',
    'Techstacks completed the task in great detail. They were very proactive and took the initiative in many different areas, including informing us of a potential security vulnerability in our existing software.',
  ],
] as const;
