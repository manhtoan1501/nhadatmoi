const isBlank = (value: any) => {
  if (typeof value === "undefined" || value == null || value === 0 || value === '') {
    return true;
  } else if (typeof value === "string" && (value.length <= 0 || value.trim().length <= 0)) {
    return true;
  } else if (typeof value === "object") {
    return isEmpty(value);
  } else {
    return false;
  }
};

const isEmpty = (obj: any) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
};

const isNumber = (value: any) => {
  if (isBlank(value)) {
    return false;
  }
  return !isNaN(parseFloat(value)) && isFinite(value);
};

const isEmail = (value: any) => {
  if (isBlank(value)) {
    return false;
  }
  let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.test(value);
};

const isSlug = (value: any) => {
  if (isBlank(value)) {
    return false;
  }
  let slug = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/
  return slug.test(value);
};

const isUrl = (value: any) => {
  if (isBlank(value)) {
    return false;
  }
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  return regexp.test(value);
};

export default {
  isBlank,
  isEmail,
  isEmpty,
  isNumber,
  isUrl,
  isSlug
};
