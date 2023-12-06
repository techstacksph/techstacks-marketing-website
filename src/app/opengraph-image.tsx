import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Techstacks';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: '#fff',
          color: '#22ce9d',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          fill="currentColor"
          height={795 / 2}
          version="1.2"
          viewBox="0 0 1813 1441"
          width={1000 / 2}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m0 720.5l710.6-710.6v417.8l-292.8 292.8 292.8 292.8v417.8zm1813 0l-719.7 719.8v-417.9l301.9-301.9-301.9-301.9v-417.8z" />
          <path d="m1266.4 674.9h-209.8l-59 451h-191.3l-59-451h-200.7l150.4-150.3h419z" />
        </svg>
      </div>
    ),
    {
      ...size,
    },
  );
}
