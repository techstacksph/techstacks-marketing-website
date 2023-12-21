import React from 'react';
import { graphql } from '@/__generated__/gql';
import { client } from './client';

interface GetPostBySlugParams {
  slug: string;
}

export const getPostBySlug = React.cache(
  async ({ slug }: GetPostBySlugParams) => {
    const post = await client.query({
      query: graphql(`
        query GetBlog($slug: String!) {
          blog(filter: { slug: { eq: $slug } }) {
            title
            content
            createdAt: _createdAt
            updatedAt: _updatedAt
            featuredImage {
              width
              url
              height
            }
          }
        }
      `),
      variables: { slug },
    });

    return post.data;
  },
);
