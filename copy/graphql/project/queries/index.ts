import gql from "graphql-tag";

const GET_PROJECT_LIST = gql`
  query getProject ($page: Int!, $limit: Int!, $filter: String!) {
    projects (page: $page, filter: $filter, limit: $limit) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          slug
          name
          price
          created_at
          updated_at
          land_area
          view_count
          address {
            text
            ward
            district
            city
          }
          cover_image
          intro_content
        }
      }
    }
  }
`;

const HOME_GET_PROJECT_LIST = gql`
  query getProject ($page: Int!, $limit: Int!, $filter: String!) {
    projects (page: $page, filter: $filter, limit: $limit) {
      edges {
        node {
          id
          slug
          name
          price
          created_at
          updated_at
          land_area
          view_count
          address {
            text
            ward
            district
            city
          }
          cover_image
          intro_content
        }
      }
    }
  }
`;

const GET_PROJECT_BY_SLUG = gql`
  query project ($slug: String) {
    project (slug: $slug) {
      id
      name
      price
      land_area
      intro_content
      position_content
      infrastructure_content
      seo_title
      seo_description
      view_count
      slug
      image {
        alt_text
        description
        title
        src
      }
      address {
        text
        ward
        district
        city
      }
      video
      cover_image
      intro_content
      created_at
      updated_at
      google_map_latitude
      google_map_longitude
    }
  }
`;
const GET_PROJECT_BY_ID = gql`
  query project ($id: String) {
    project (id: $id) {
      id
      name
      investor
      scale
      slug
      seo_description
      address {
        text
        ward
        district
        city
      }
      cover_image
      intro_content
      created_at
      updated_at
    }
  }
`;
export {
  GET_PROJECT_BY_ID,
  GET_PROJECT_LIST,
  GET_PROJECT_BY_SLUG,
  HOME_GET_PROJECT_LIST
}
