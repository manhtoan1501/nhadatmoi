import gql from "graphql-tag";

const GET_PROFILE = gql`
    query getProfile {
        profile {
            id,
            first_name,
            last_name,
            email,
            avatar,
        }
    }
`;

const LOG_OUT = gql`
  query logoutProfile {
    logout {
      status
    }
  }
`;

export {
  GET_PROFILE,
  LOG_OUT,
}
