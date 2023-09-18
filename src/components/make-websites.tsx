'use client';

import { Player } from '@lottiefiles/react-lottie-player';

export const MAKE_WEB_CONTENT = [
  [
    'Iterative web development',
    'We are agile. We deliver fast. You never have to wait for too long to start seeing the awesomeness of your website.',
    '/lottie/rocket.json',
  ],
  [
    'Dedicated team',
    'An agile web dev team equipped with knowledge of modern web technologies, best practices, experience and skills to build a website that delivers results.',
    '/lottie/team.json',
  ],
  [
    'Support',
    'We commit to help your business stand out and gain the digital-competitive advantage through user-friendly, fast, secure, high converting, engaging websites.',
    '/lottie/support-2.json',
  ],
];

export default function MakeWebsites() {
  return (
    <div className="space-y-9">
      {MAKE_WEB_CONTENT.map(([title, description, lottie]) => (
        <div className="space-y-4" key={title}>
          <div className="flex items-center content-center h-12 w-12">
            <Player autoplay loop src={lottie} />
          </div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-muted text-sm">{description}</p>
        </div>
      ))}
    </div>
  );
}
