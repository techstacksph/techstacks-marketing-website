import { ApolloClient, InMemoryCache } from '@apollo/client';
import { env } from '@/env.mjs';

export const client = new ApolloClient({
  uri: env.WORDPRESS_API_URL,
  cache: new InMemoryCache(),
});
