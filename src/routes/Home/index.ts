import { client } from 'services/graphql';

import { PostImg } from 'types/Post/PostImg';
import { PostContent } from 'types/Post/PostContent';
import { QueryGraphql } from 'types/graphql/QueryGraphqlType';

import { ALL_POSTS_QUERY } from './graphql/query';

export type AllPostsQueryProps = {
  allPostss: QueryGraphql<{
    title: PostContent[];
    subtitle: PostContent[];
    tagPost: string;
    slug: PostContent[];
    mainImg: PostImg;
    _meta: {
      id: string;
      firstPublicationDate: number;
    };
  }>;
};

export const AllPosts = async () =>
  await client.query<AllPostsQueryProps>({
    query: ALL_POSTS_QUERY,
  });
