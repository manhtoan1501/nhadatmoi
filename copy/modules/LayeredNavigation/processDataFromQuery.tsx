import {apolloClient} from "../../utils";
import {GET_LOCATION_FROM_SLUG} from "../../graphql/location/queries";
import Validator from "../validator";

const processDataFromQuery = async (query: any, typePage: string, type1ASL: string, type2ASL: string) => {
  let typeSlug = '';
  if (type2ASL || type1ASL) {
    typeSlug = '/' + query.slug;
  }
  let dataQuery = {
    city: "",
    district: "",
    ward: "",
    home_direction: "",
    price_range: {
      max: 0,
      min: 0
    },
    area_range: {
      max: 0,
      min: 0
    },
    bed_room_number:  {
      max: 0,
      min: 0
    },
    title: "",
    name: "",
    page: 1,
    limit: 48,
    sort_by: {
      time: "newest"
    },
    type2: type2ASL,
    type1: type1ASL,
    type_slug: typeSlug,
    parent_slug: query.slug,
    child_slug: query.location
  };

  let propObject = {
    location: {},
    statusCode: 200,
    dataQuery: dataQuery,
    slug: query.location
  };
  delete query.slug;
  if (typePage === 'ad-sell-lease-location') {
    let locationSlug = query.location;
    let locationObject = await apolloClient.query({query: GET_LOCATION_FROM_SLUG, variables: {
        "slug": locationSlug
      }}).then(response => {
      return response;
    });

    if (!Validator.isBlank(locationObject.data.location) && !Validator.isBlank(locationObject.data.location.city)) {
      propObject.location = locationObject.data.location;
      if (!Validator.isBlank(locationObject.data.location.city.id)) {
        dataQuery.city = locationObject.data.location.city.id;
      }
      if (!Validator.isBlank(locationObject.data.location.district) && !Validator.isBlank(locationObject.data.location.district.id)) {
        dataQuery.district = locationObject.data.location.district.id;
      }
      if (!Validator.isBlank(locationObject.data.location.ward) && !Validator.isBlank(locationObject.data.location.ward.id)) {
        dataQuery.ward = locationObject.data.location.ward.id;
      }
    } else {
      propObject.statusCode = 404;
      return propObject;
    }
  }

  try {
    if (!Validator.isBlank(query.bed_room_number)) {
      query.bed_room_number = JSON.parse(query.bed_room_number);
    }
    if (!Validator.isBlank(query.price_range)) {
      query.price_range = JSON.parse(query.price_range);
    }
    if (!Validator.isBlank(query.area_range)) {
      query.area_range = JSON.parse(query.area_range);
    }
    if (!Validator.isBlank(query.sort_by)) {
      query.sort_by = JSON.parse(query.sort_by);
    }
  } catch (e) {
    propObject.statusCode = 404;
  }

  dataQuery = Object.assign(dataQuery, query);
  dataQuery.page = Number(dataQuery.page);
  dataQuery.limit = Number(dataQuery.limit);
  propObject.dataQuery = dataQuery;
  return propObject;
};
export default {
  processQueryData: processDataFromQuery
}
