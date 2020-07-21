import gql from "graphql-tag";
const GET_LOCATION_FROM_SLUG = gql`
  query location ($slug: String!) {
    location (slug: $slug) {
      district {
        id
        name
        description
        slug
        seo_title
        seo_description
        focus_keyword
        image
        title
      }
      ward {
        id
        name
        description
        slug
        seo_title
        seo_description
        focus_keyword
        image
        title
      }
      city {
        id
        name
        description
        slug
        seo_title
        seo_description
        focus_keyword
        image
        title
      }
    }
  }
`;

export {
  GET_LOCATION_FROM_SLUG
}
