import { client } from 'services/graphql';

import { AllPostsQueryProps, ALL_POSTS_QUERY } from './graphql/query';

export const AllPosts = async () =>
  await client.query<AllPostsQueryProps>({
    query: ALL_POSTS_QUERY,
  });
