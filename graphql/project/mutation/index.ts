import gql from "graphql-tag";
const COUNT_VIEW_PROJECT = gql`
  mutation projectViewUpdate ($input: UpdateProjectViewInput!) {
    projectViewUpdate (input: $input) {
      id
      view_count
    }
  }
`;

const ADD_PROJECT_WISH_LIST = gql`
  mutation projectWishList($input:  ProjectWishlistInput!) {
    projectWishlist (input: $input) {
      id
    }
  }
`;
export {
  COUNT_VIEW_PROJECT,
  ADD_PROJECT_WISH_LIST
}
