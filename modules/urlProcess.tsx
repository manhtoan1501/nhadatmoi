import {
  urlImageAdSellLease,
  urlImageProject,
  urlImageBroker,
  imageDefaultProject,
  imageDefaultBroker
} from "../constants";

const processImageUrl = (imageUrl: string|undefined, type: string) => {
  let statusUrl = validURL(imageUrl);
  if (statusUrl && imageUrl) {
    imageUrl = imageUrl.replace(/nhadatmoi.s3.ap-southeast-1.amazonaws.com/g, "static.nhadatmoi.net");
    imageUrl = imageUrl.replace(/nhadatmoi.s3-ap-southeast-1.amazonaws.com/g, "static.nhadatmoi.net");
    imageUrl = imageUrl.replace(/nhadatmoi.s3.amazonaws.com/g, "static.nhadatmoi.net");
    imageUrl = imageUrl.replace(/http:\/\//g, "https://");
    if (imageUrl === 'https://static.nhadatmoi.net/data/ad_sell_lease_image/' || imageUrl === 'https://static.nhadatmoi.net/data/project_image/') {
      return getImageDefaultByType(type);
    }
    return imageUrl;
  } else {
    if (!imageUrl || imageUrl === '' || imageUrl === null) {
      return getImageDefaultByType(type);
    } else {
      let baseUrl = getBaseUrlByType(type);
      return baseUrl + imageUrl;
    }
  }
};

const getBaseUrlByType = (type: string) => {
  let baseUrl = '';
  switch (type) {
    case 'ad_sell_lease':
      baseUrl = urlImageAdSellLease;
      break;
    case 'project':
      baseUrl = urlImageProject;
      break;
    case 'broker':
      baseUrl = urlImageBroker;
      break;
  }
  return baseUrl;
};

const getImageDefaultByType = (type: string) => {
  let imageDefault = '';
  switch (type) {
    case 'ad_sell_lease':
      imageDefault = imageDefaultProject;
      break;
    case 'project':
      imageDefault = imageDefaultProject;
      break;
    case 'broker':
      imageDefault = imageDefaultBroker;
      break;
  }
  return imageDefault;
};

const validURL = (str: string|undefined) => {
  if (!str || str === '' || str === null) {
    return false;
  }
  if (str.indexOf('http') !== -1) {
    return true;
  } else {
    return false;
  }
};

export default {
  processImageUrl
};

