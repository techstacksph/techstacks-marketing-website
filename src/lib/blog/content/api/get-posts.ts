import React from 'react';
import { graphql } from '@/__generated__/gql';
import { client } from './client';

interface GetPosts {
  offset?: number;
  size?: number;
  search?: string;
}
export const getPosts = React.cache(
  async ({ offset, size, search = '' }: GetPosts = {}) => {
    const response = await client.query({
      query: graphql(`
        query GetBlogs($offset: IntType, $search: String!, $size: IntType) {
          allBlogs(
            skip: $offset
            orderBy: _createdAt_DESC
            filter: { title: { matches: { pattern: $search } } }
            first: $size
          ) {
            id
            slug
            title
            featuredImage {
              width
              url
              height
            }
            content
            createdAt: _createdAt
            updatedAt: _updatedAt
          }
          meta: _allBlogsMeta(
            filter: { title: { matches: { pattern: $search } } }
          ) {
            totalBlogs: count
          }
        }
      `),
      variables: {
        offset,
        size,
        search,
      },
    });

    return response.data;
  },
);
