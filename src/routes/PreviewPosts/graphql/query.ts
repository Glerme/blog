import gql from 'graphql-tag';

export const GET_ALL_MOVIES_QUERY = gql`
  query AllPosts($where: WherePosts!) {
    allPostss(where: $where) {
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
