import gql from "graphql-tag";

const CREATE_MESSAGE = gql`
  mutation conversation($input: ConversationInput!) {
    conversation(input: $input) {
      id
      chat {
        send_user_id
        message {
          text
        }
      }
    }
  }
`;

export {
  CREATE_MESSAGE,
}
