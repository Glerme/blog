import { client } from 'services/graphql';

import { PostImg } from 'types/Post/PostImg';
import { PostContent } from 'types/Post/PostContent';

import type { PageInfoType } from 'types/graphql/PageInfo';
import type { SearchVariablesType } from 'types/graphql/VariablesType';

import { SEARCH_POSTS_QUERY } from './graphql/query';

export type AllPostsQueryProps = {
  allPostss: {
    pageInfo: PageInfoType;
    totalCount: number;
    edges: {
      cursor: string;
      node: {
        title: PostContent[];
        subtitle: PostContent[];
        tagPost: string;
        slug: PostContent[];
        mainImg: PostImg;
        _meta: {
          id: string;
        };
      };
    }[];
  };
};

export const getSearchedPost = async (variables: SearchVariablesType) =>
  await client.query<AllPostsQueryProps>({
    query: SEARCH_POSTS_QUERY,
    variables,
  });
