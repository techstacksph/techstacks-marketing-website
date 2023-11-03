import React from 'react';
import { generateRandomPicsum } from '@/utils/picsum';
import { htmlStrToReact } from '@/lib/parser';
import { RANDOM_IMAGE_DIMENSIONS } from '@/constants/dimensions';
import type { EdgeNode, Posts } from '../types/get-posts';
import { api } from './client';

interface GetPosts {
  after?: string;
  first?: number;
  search?: string;
}
export const getPosts = React.cache(
  async ({ after, first, search }: GetPosts = {}) => {
    const response = await api<Posts>({
      data: {
        query: `
          query GetPosts($after: String, $first: Int, $search: String) {
            posts(
              where: {search: $search, orderby: {field: DATE, order: DESC}}
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
          }`,
        variables: {
          after,
          first,
          search,
        },
      },
    });

    return response.data.data.posts.edges;
  },
);

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
