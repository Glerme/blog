import gql from 'graphql-tag';

export const ALL_POSTS_QUERY = gql`
  query AllPosts($id: String!) {
    allPostss(id: $id) {
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
          content
          authorName
          authorBg
          aboutAuthor
          authorImage
          _meta {
            id
          }
        }
      }
    }
  }
`;
