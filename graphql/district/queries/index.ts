import gql from "graphql-tag";
const GET_DISTRICT_LIST = gql`
  query districts ($page: Int!, $limit: Int!, $filter: String!) {
    districts (page: $page, filter: $filter, limit: $limit) {
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
  GET_DISTRICT_LIST
}
