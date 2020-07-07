import gql from "graphql-tag";
const GET_DIRECTIONS = gql`
  query directions ($page: Int!, $limit: Int!, $filter: String!) {
    directions (page: $page, filter: $filter, limit: $limit) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

export {
  GET_DIRECTIONS
}
