import React from 'react';
import { generateRandomPicsum } from '@/utils/picsum';
import { htmlStrToReact } from '@/lib/parser';
import type { EdgeNode, Posts } from '../types';
import { api } from './client';

const RANDOM_IMAGE_DIMENSIONS = {
  width: 300,
  height: 200,
} as const;

interface GetPosts {
  after?: string;
  first?: number;
}
export const getPosts = React.cache(async ({ after, first }: GetPosts = {}) => {
  const response = await api<Posts>({
    data: {
      query: `
        query postsQuery($after: String, $first: Int) {
          posts(
            where: {orderby: {field: DATE, order: DESC}}
            after: $after
            first: $first
          ) {
            edges {
              node {
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
              }
              cursor
            }
          }
        }
      `,
      variables: {
        after,
        first,
      },
    },
  });

  return response.data.data.posts.edges;
});

export async function processPostNode(node: EdgeNode) {
  const randomImage = generateRandomPicsum({
    seed: node.slug,
    dimensions: RANDOM_IMAGE_DIMENSIONS,
  });
  const bannerImage = node.featuredImage
    ? {
        src: node.featuredImage.node.sourceUrl,
        ...node.featuredImage.node.mediaDetails,
      }
    : { src: randomImage, ...RANDOM_IMAGE_DIMENSIONS };

  return {
    bannerImage,
    partialContent: await htmlStrToReact(node.excerpt),
    author: {
      avatar: {
        src: node.author.node.avatar.url,
        width: node.author.node.avatar.size,
        height: node.author.node.avatar.size,
      },
      name: node.author.node.name,
    },
  };
}
