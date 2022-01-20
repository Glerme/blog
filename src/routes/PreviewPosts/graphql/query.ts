import gql from 'graphql-tag';

export const GET_ALL_TAG_QUERY = gql`
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
            firstPublicationDate
          }
        }
      }
    }
  }
`;
