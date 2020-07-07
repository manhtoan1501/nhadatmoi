import gql from "graphql-tag";
const COUNT_VIEW_AD_SELL_LEASE = gql`
  mutation adSellLeaseViewUpdate ($input: UpdateAdSellLeaseViewInput!) {
    adSellLeaseViewUpdate (input: $input) {
      id
    }
  }
`;

const ADD_AD_SELL_LEASE_WISH_LIST = gql `
  mutation adSellLeaseWishlist ($input: AdSellLeaseWishlistInput!) {
    adSellLeaseWishlist (input: $input) {
      id
    }
  }
`;

const ADD_AD_SELL_LEASE_COMMENT = gql `
  mutation adSellLeaseCommentCreate ($input: AdSellLeaseCommentInput!) {
    adSellLeaseCommentCreate (input: $input) {
      id
    }
  }
`;
export {
  COUNT_VIEW_AD_SELL_LEASE,
  ADD_AD_SELL_LEASE_WISH_LIST,
  ADD_AD_SELL_LEASE_COMMENT
}
