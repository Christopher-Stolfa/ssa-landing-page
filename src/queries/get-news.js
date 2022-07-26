import { gql } from '@apollo/client';

const GET_NEWS = gql`
  query getLatestNews {
    posts(where: { categoryName: "News", orderby: { field: DATE, order: DESC } }, first: 3) {
      edges {
        node {
          date
          title
          link
          excerpt
        }
      }
    }
  }
`;

export default GET_NEWS;
