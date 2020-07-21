import axios from 'axios'

const addTracking = (adSellLeaseId: string, type: string) => {
  axios.get('https://graph.nhadatmoi.net/user-tracking', {
    params: {
      ad_sell_lease_id: adSellLeaseId,
      type_tracking: type
    }
  })
};

export default {
  addTracking
};

