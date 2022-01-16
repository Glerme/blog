import { client } from 'services/graphql';

import { PostImg } from 'types/Post/PostImg';
import { PostContent } from 'types/Post/PostContent';

import { SEARCH_POSTS_QUERY } from './graphql/query';
import { PageInfoType } from 'types/graphql/PageInfo';

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

export const getSearchedPost = async (variables: { title_fulltext: string }) =>
  await client.query<AllPostsQueryProps>({
    query: SEARCH_POSTS_QUERY,
    variables,
  });
