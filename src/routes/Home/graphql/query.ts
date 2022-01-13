import gql from 'graphql-tag';

import type { PostImg } from 'types/Post/PostImg';
import type { PostContent } from 'types/Post/PostContent';
import type { QueryGraphql } from 'types/graphql/QueryGraphqlType';

export type AllPostsQueryProps = {
  allMaisLidass: QueryGraphql<{
    title: PostContent;
    subtitle: PostContent;
    tag: string;
    slug: PostContent;
    mainImg: PostImg;
  }>;

  allUltimasNoticiass: QueryGraphql<{
    title: PostContent;
    subtitle: PostContent;
    tag: string;
    mainImg: PostImg;
  }>;

  allPosts: QueryGraphql<{
    title: PostContent;
    subtitle: PostContent;
    tag: string;
    slug: PostContent;
    mainImg: PostImg;
  }>;
};

export const ALL_POSTS_QUERY = gql`
  {
    allMaisLidass {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
      edges {
        node {
          title
          subtitle
          tag
          slug
          mainImg
        }
      }
    }
    allUltimasNoticiass(sortBy: meta_firstPublicationDate_DESC) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
      edges {
        node {
          title
          subtitle
          tag
          mainImg
        }
      }
    }
    allPosts(sortBy: meta_firstPublicationDate_DESC) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
      edges {
        node {
          title
          subtitle
          mainImg
          tag
          slug
        }
      }
    }
  }
`;
