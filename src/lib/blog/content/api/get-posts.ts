import React from 'react';
import { gql } from '@apollo/client';
import { generateRandomPicsum } from '@/utils/picsum';
import { htmlStrToReact } from '@/lib/parser';
import { RANDOM_IMAGE_DIMENSIONS } from '@/constants/dimensions';
import type { EdgeNode, PostData } from '../types/get-posts';
import { client } from './client';

interface GetPosts {
  offset?: number;
  size?: number;
  search?: string;
}
export const getPosts = React.cache(
  async ({ offset, size, search }: GetPosts = {}) => {
    const response = await client.query<PostData>({
      query: gql`
        query GetPosts($search: String, $offset: Int, $size: Int) {
          posts(
            where: {
              search: $search
              orderby: { field: DATE, order: DESC }
              offsetPagination: { offset: $offset, size: $size }
            }
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
                id
              }
              cursor
            }
            pageInfo {
              offsetPagination {
                total
                hasPrevious
                hasMore
              }
            }
          }
        }
      `,
      variables: {
        offset,
        size,
        search,
      },
    });

    return {
      posts: response.data.posts.edges,
      info: response.data.posts.pageInfo,
    };
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
