import gql from "graphql-tag";
const GET_WARD_LIST = gql`
  query wards ($page: Int!, $limit: Int!, $filter: String!) {
    wards (page: $page, filter: $filter, limit: $limit) {
      pageInfo {
        length
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;

export {
  GET_WARD_LIST
}
