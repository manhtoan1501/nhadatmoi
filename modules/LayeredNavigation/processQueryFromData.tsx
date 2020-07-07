import Validator from "../validator";
import QueryString from "query-string";
import {DataLayeredNavigationProps} from '../../interfaces/interface';

const processQueryString = (data: DataLayeredNavigationProps) => {
  let dataQueryNew = {};
  if (!Validator.isBlank(data.title)) {
    dataQueryNew = {...dataQueryNew, ...{title: data.title}};
  }
  if (!Validator.isBlank(data.name)) {
    dataQueryNew = {...dataQueryNew, ...{name: data.name}};
  }
  if (!Validator.isBlank(data.city)) {
    dataQueryNew = {...dataQueryNew, ...{city: data.city}};
  }
  if (!Validator.isBlank(data.district)) {
    dataQueryNew = {...dataQueryNew, ...{district: data.district}};
  }
  if (!Validator.isBlank(data.type2)) {
    dataQueryNew = {...dataQueryNew, ...{type2: data.type2}};
  }
  if (!Validator.isBlank(data.type1)) {
    dataQueryNew = {...dataQueryNew, ...{type1: data.type1}};
  }
  if (!Validator.isBlank(data.ward)) {
    dataQueryNew = {...dataQueryNew, ...{ward: data.ward}};
  }
  if (!Validator.isBlank(data.home_direction)) {
    dataQueryNew = {...dataQueryNew, ...{home_direction: data.home_direction}};
  }
  if (!Validator.isBlank(data.area_range) && (!Validator.isBlank(data.area_range.max) || !Validator.isBlank(data.area_range.min))) {
    dataQueryNew = {...dataQueryNew, ...{area_range: data.area_range}};
  }
  if (!Validator.isBlank(data.price_range) && (!Validator.isBlank(data.price_range.max) || !Validator.isBlank(data.price_range.min))) {
    dataQueryNew = {...dataQueryNew, ...{price_range: data.price_range}};
  }
  if (!Validator.isBlank(data.bed_room_number) && (!Validator.isBlank(data.bed_room_number.max) || !Validator.isBlank(data.bed_room_number.min))) {
    dataQueryNew = {...dataQueryNew, ...{bed_room_number: data.bed_room_number}};
  }
  if (!Validator.isBlank(data.sort_by)) {
    if (!Validator.isBlank(data.sort_by.time) && data.sort_by.time === "newest") {
    } else {
      dataQueryNew = {...dataQueryNew, ...{sort_by: data.sort_by}};
    }
  }
  return dataQueryNew;
};

const processQueryFromData =  (data: DataLayeredNavigationProps, typePage: string) => {
  let dataQueryNew = {};
  if (!Validator.isBlank(data.title)) {
    dataQueryNew = {...dataQueryNew, ...{title: data.title}};
  }
  if (!Validator.isBlank(data.name)) {
    dataQueryNew = {...dataQueryNew, ...{name: data.name}};
  }
  if (!Validator.isBlank(data.page) && data.page !== 1) {
    dataQueryNew = {...dataQueryNew, ...{page: data.page}};
  }
  if (!Validator.isBlank(data.limit) && data.limit !== 48) {
    dataQueryNew = {...dataQueryNew, ...{limit: data.limit}};
  }
  if (!Validator.isBlank(data.home_direction)) {
    dataQueryNew = {...dataQueryNew, ...{home_direction: data.home_direction}};
  }
  if (!Validator.isBlank(data.area_range) && (!Validator.isBlank(data.area_range.max) || !Validator.isBlank(data.area_range.min))) {
    let areaRangeString = JSON.stringify(data.area_range);
    dataQueryNew = {...dataQueryNew, ...{area_range: areaRangeString}};
  }
  if (!Validator.isBlank(data.price_range) && (!Validator.isBlank(data.price_range.max) || !Validator.isBlank(data.price_range.min))) {
    let areaRangeString = JSON.stringify(data.price_range);
    dataQueryNew = {...dataQueryNew, ...{price_range: areaRangeString}};
  }
  if (!Validator.isBlank(data.bed_room_number) && (!Validator.isBlank(data.bed_room_number.max) || !Validator.isBlank(data.bed_room_number.min))) {
    let areaRangeString = JSON.stringify(data.bed_room_number);
    dataQueryNew = {...dataQueryNew, ...{bed_room_number: areaRangeString}};
  }
  if (!Validator.isBlank(data.sort_by)) {
    if (!Validator.isBlank(data.sort_by.time) && data.sort_by.time === "newest") {
    } else {
      let sortByString = JSON.stringify(data.sort_by);
      dataQueryNew = {...dataQueryNew, ...{sort_by: sortByString}};
    }
  }
  return  QueryString.stringify(dataQueryNew, {arrayFormat: 'bracket'});
};
export default {
  processQueryUrl: processQueryFromData,
  processQueryString
}
