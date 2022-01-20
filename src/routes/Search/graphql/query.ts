import gql from 'graphql-tag';

export const SEARCH_POSTS_QUERY = gql`
  query AllPosts($first: Int, $after: String, $where: WherePosts!) {
    allPostss(first: $first, after: $after, where: $where) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
      edges {
        cursor
        node {
          title
          subtitle
          tagPost
          slug
          mainImg
          _meta {
            id
          }
        }
      }
    }
  }
`;
