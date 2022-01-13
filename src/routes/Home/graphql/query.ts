import gql from 'graphql-tag';

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
    allMainGrids(sortBy: meta_firstPublicationDate_DESC) {
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
        }
      }
    }
  }
`;
