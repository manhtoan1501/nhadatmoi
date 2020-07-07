import gql from "graphql-tag";
const GET_CITY_LIST = gql`
  query citys ($page: Int!, $limit: Int!, $filter: String!) {
    citys (page: $page, filter: $filter, limit: $limit) {
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
          default_slug
        }
      }
    }
  }
`;

export {
  GET_CITY_LIST
}
