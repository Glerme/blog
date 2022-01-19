import gql from 'graphql-tag';

export const ALL_POSTS_QUERY = gql`
  {
    allPostss {
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
