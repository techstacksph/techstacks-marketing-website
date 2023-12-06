import { gql } from '@apollo/client';
import React from 'react';
import { generateRandomPicsum } from '@/utils/picsum';
import { RANDOM_IMAGE_DIMENSIONS } from '@/constants/dimensions';
import { htmlStrToReact } from '@/lib/parser';
import { type Post, type PostData } from '../types/get-post-by-slug';
import { client } from './client';

interface GetPostBySlugParams {
  slug: string;
}

export const getPostBySlug = React.cache(
  async ({ slug }: GetPostBySlugParams) => {
    const post = await client.query<PostData>({
      query: gql`
        query GetPostById($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            author {
              node {
                name
                avatar {
                  size
                  url
                }
              }
            }
            slug
            title
            excerpt
            featuredImage {
              node {
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
            date
            content
          }
        }
      `,
      variables: { slug },
    });

    return post.data.post;
  },
);

export async function processSinglePost(post: Post) {
  const randomImage = generateRandomPicsum({
    seed: post.slug,
    dimensions: RANDOM_IMAGE_DIMENSIONS,
  });
  const bannerImage = post.featuredImage
    ? {
        src: post.featuredImage.node.sourceUrl,
        ...post.featuredImage.node.mediaDetails,
      }
    : { src: randomImage, ...RANDOM_IMAGE_DIMENSIONS };

  return {
    bannerImage,
    content: await htmlStrToReact(post.content),
    author: {
      avatar: {
        src: post.author.node.avatar.url,
        width: post.author.node.avatar.size,
        height: post.author.node.avatar.size,
      },
      name: post.author.node.name,
    },
  };
}
