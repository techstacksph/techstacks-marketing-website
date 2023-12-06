import { ImageResponse } from 'next/og';
// import {
//   getPostBySlug,
//   processSinglePost,
// } from '@/lib/blog/content/api/get-post-by-slug';
import { z } from 'zod';
import { NavRoutes } from '@/constants/nav-routes';
import { env } from '@/env.mjs';
import { type BlogItemPageProps } from './page-props';

export const runtime = 'edge';
export const alt = 'Techstacks blog';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

export default async function OpenGraphImage({ params }: BlogItemPageProps) {
  const imageLocation = `${protocol}://${env.VERCEL_URL}/${NavRoutes.Company.Blog}/${params.slug}/og`;
  const post: unknown = await (await fetch(imageLocation)).json();

  const og = z
    .object({
      src: z.string(),
      title: z.string(),
    })
    .safeParse(post);

  if (!og.success) {
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

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: '#000',
          color: '#22ce9d',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
        }}
      >
        <img
          src={og.data.src}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.5,
          }}
        />
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
        <h1
          style={{
            margin: 0,
            padding: '0px 16px',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'block',
            fontSize: '2.5rem',
          }}
        >
          {og.data.title}
        </h1>
      </div>
    ),
    {
      ...size,
    },
  );
}
