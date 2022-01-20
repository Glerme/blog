import { client } from 'services/graphql';

import type { PostImg } from 'types/Post/PostImg';
import type { PostContent } from 'types/Post/PostContent';
import type { PageInfoType } from 'types/graphql/PageInfo';
import type { SearchVariablesType } from 'types/graphql/VariablesType';

import { GET_ALL_TAG_QUERY } from './graphql/query';

export type AllPreviewQueryProps = {
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
          firstPublicationDate: number;
        };
      };
    }[];
  };
};

export const getPreviewPosts = async (variables: SearchVariablesType) =>
  await client.query<AllPreviewQueryProps>({
    query: GET_ALL_TAG_QUERY,
    variables,
  });
