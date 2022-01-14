import { client } from 'services/graphql';

import { PostImg } from 'types/Post/PostImg';
import { PostContent } from 'types/Post/PostContent';

import { ALL_POSTS_QUERY } from './graphql/query';

export type AllPostsQueryProps = {
  allPostss: {
    edges: {
      node: {
        title: PostContent[];
        subtitle: PostContent[];
        tagPost: string;
        slug: PostContent[];
        mainImg: PostImg;
        content: PostContent[];
        authorName: PostContent[];
        authorBg: PostContent[];
        aboutAuthor: PostContent[];
        authorImage: PostImg;
        _meta: {
          id: string;
        };
      };
    }[];
  };
};

export const getOnePost = async (variables?: { id: string }) =>
  await client.query<AllPostsQueryProps>({
    query: ALL_POSTS_QUERY,
    variables,
  });
