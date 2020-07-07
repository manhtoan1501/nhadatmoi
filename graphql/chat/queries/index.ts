import gql from "graphql-tag";

const GET_LIST_MESSAGE = gql`
  query conversations ($page: Int!, $limit: Int!) {
    conversations (page: $page, limit: $limit) {
      pageInfo {
        length
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          target {
            id
            avatar
            first_name
            last_name
            status
            last_activity
          }
        }
      }
    }
  }
`;

const GET_MESSAGE_BY_ID = gql`
  query conversation ($id: String!) {
    conversation (id: $id) {
      id
      target{
        id
        avatar
        first_name
        last_name
        status
        last_activity
      }
      chat{
        id
        send_user_id
        message{
          text
          attachment{
            type
            payload{
              url
            }
          }
        }
        status_check
        send_at
        read_at 
      }
      created_at
      updated_at
    }
  }
`;

export {
  GET_LIST_MESSAGE,
  GET_MESSAGE_BY_ID
}
