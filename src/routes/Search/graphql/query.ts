import gql from 'graphql-tag';

export const SEARCH_POSTS_QUERY = gql`
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
