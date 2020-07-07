import StringProcess from "./stringProcess";

const priceProcess = (priceValue: string|null, priceUnit: string|null) => {
  if (!priceValue || Number(priceValue) === 0) {
    return 'Giá liên hệ'
  } else {
    return formatPriceValue(priceValue, priceUnit) + ' ' + getPriceUnit(priceValue, priceUnit);
  }
};

let millionUnit = 'triệu';
let billionUnit = 'tỉ';

const formatPriceValue = (priceValue: string|null, priceUnit: string|null) => {
  if (priceValue && priceUnit && (priceUnit === 'million' || priceUnit === 'triệu')) {
    let priceValueNumber = Number(priceValue);
    if (priceValueNumber < 1000) {
      priceValueNumber = Math.round(priceValueNumber * 100)/100;
      return StringProcess.addCommas(String(Number(priceValueNumber)));
    } else {
      priceValueNumber = priceValueNumber/1000;
      priceValueNumber = Math.round(priceValueNumber * 100)/100;
      return StringProcess.addCommas(String(Number(priceValueNumber)));
    }
  } else {
    return StringProcess.addCommas(String(Number(priceValue)));
  }
};
const getPriceUnit = (priceValue: string|null, priceUnit: string|null) => {
  if (priceValue && priceUnit && (priceUnit === 'million' || priceUnit === 'triệu')) {
    let priceValueNumber = Number(priceValue);
    if (priceValueNumber < 1000) {
      return millionUnit;
    } else {
      return billionUnit;
    }
  } else {
    return ((priceUnit)?priceUnit:'đồng')
  }
};

export default {
  priceProcess
};

