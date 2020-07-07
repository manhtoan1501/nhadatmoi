const addCommas = (inputString: string) => {
  let rx=  /(\d+)(\d{3})/;
  return String(inputString).replace(/^\d+/, function(w){
    while(rx.test(w)){
      w= w.replace(rx, '$1.$2');
    }
    return w;
  });
};

const getMonths = () => {
  return {
    '1' : '01',
    '2' : '02',
    '3' : '03',
    '4' : '04',
    '5' : '05',
    '6' : '06',
    '7' : '07',
    '8' : '08',
    '9' : '09',
    '10' : '10',
    '11' : '11',
    '12' : '12',
  };
};

const getGender = () => {
  return {
    'female' : 'Nữ',
    'male' : 'Nam',
    'none' : 'Không xác định'
  }
};

const getDays = () => {
  return {
    '1' : '01',
    '2' : '02',
    '3' : '03',
    '4' : '04',
    '5' : '05',
    '6' : '06',
    '7' : '07',
    '8' : '08',
    '9' : '09',
    '10' : '10',
    '11' : '11',
    '12' : '12',
    '13' : '13',
    '14' : '14',
    '15' : '15',
    '16' : '16',
    '17' : '17',
    '18' : '18',
    '19' : '19',
    '20' : '20',
    '21' : '21',
    '22' : '22',
    '23' : '23',
    '24' : '24',
    '25' : '25',
    '26' : '26',
    '27' : '27',
    '28' : '28',
    '29' : '29',
    '30' : '30',
    '31' : '31'
  };
};

const truncateString = (string: string, length: number, ending: string) => {
  if (length === null) {
    length = 100;
  }
  if (ending === null) {
    ending = '...';
  }
  if (string.length > length) {
    return string.substring(0, length - ending.length) + ending;
  } else {
    return string;
  }
};

const stripTags = (input: string, allowed: string) => {
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
  const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  return input.replace(tags, ($0, $1) => (allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''));
};

// @ts-ignore
const stripProperties = (input, allowed) => {
  allowed = (((allowed || '') + '').toLowerCase().match(/[a-z][a-z0-9]*/g) || []).join('');
  const properties = /\s([a-z][a-z0-9]*)="[^"]*"/gi;
  // @ts-ignore
  return input.replace(properties, ($0, $1) => (allowed.indexOf($1.toLowerCase()) > -1 ? $0 : ''));
};

export default {
  truncateString,
  getDays,
  getGender,
  getMonths,
  addCommas,
  stripTags,
  stripProperties
};

