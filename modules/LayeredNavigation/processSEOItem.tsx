const checkIsInQueryItem = (itemName: string) => {
  if (itemName === 'city' || itemName === 'district' || itemName === 'ward' || itemName === 'type2' || itemName === 'slug') {
    return false;
  }
  return itemName === 'home_direction' || itemName === 'price_range' || itemName === 'area_range' || itemName === 'bed_room_number' || itemName === 'title' || itemName === 'name' || itemName === 'page' || itemName === 'limit' || itemName === 'sort_by';
};
export default {
  checkIsInQueryItem
}
