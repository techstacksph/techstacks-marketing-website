import { ApolloClient, InMemoryCache } from '@apollo/client';
import { env } from '@/env.mjs';

export const client = new ApolloClient({
  uri: 'https://graphql.datocms.com/',
  headers: {
    authorization: `Bearer ${env.DATOCMS_API_KEY}`,
    'X-Exclude-Invalid': 'true',
  },
  cache: new InMemoryCache(),
});
