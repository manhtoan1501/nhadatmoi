import gql from "graphql-tag";
const GET_COMMENT_BY_AD_SELL_LEASE_ID = gql`
query adSellLeaseComments ($page: Int!, $limit: Int!, $filter: String!) {
  adSellLeaseComments (page:$page, limit:$limit, filter:$filter) {
    edges {
      node {
        id
        content
        user_id
        created_at
        ad_sell_lease_id
        media
        user {
          first_name
          last_name
          avatar
        }
      }
    }
  }
}
`;

export {
  GET_COMMENT_BY_AD_SELL_LEASE_ID
}
