const mainURL = "https://nhadatmoi.net";
const upgradePlanURL = "https://nhadatmoi.net";

const upgradeIconURL = "https://react-material-dashboard.devias.io/images/undraw_resume_folder_2_arse.svg";
const logoURL = "https://static.nhadatmoi.net/default/nhadatmoi.svg";

const apiBaseURL = "https://graph.nhadatmoi.net";
const googleLogin = `${apiBaseURL}/auth/google`;
const facebookLogin = `${apiBaseURL}/auth/facebook`;
const zaloLogin = `${apiBaseURL}/auth/zalo`;
const apiGraphQLURL = `${apiBaseURL}/graphql`;

const urlImageAdSellLease = "https://static.nhadatmoi.net/data/ad_sell_lease_image/";
const urlImageProject = "https://static.nhadatmoi.net/data/project_image/";
const urlImageBroker = "https://static.nhadatmoi.net/data/broker_image/";

const imageDefaultProject = "https://static.nhadatmoi.net/default/home_default.jpg";
const imageDefaultSlider = "https://static.nhadatmoi.net/default/nhadatmoi-default.svg";
const imageDefaultBroker = "https://static.nhadatmoi.net/default/user.png";
const googleAnalyticsCode = 'UA-60767998-8';
const googleSearchConsole = 'cyMkTndHdE95cFgv7H5_otuDy-X6N7qdXEuNOPiJ0GQ';
const localStorageCompareKey = 'ndm_compare';
const localStorageViewed = 'ndm_asl_viewed';
const localStorageProjectViewed = 'ndm_project_viewed';

const adSellLeaseCategory = [
  {
    id: '5e11af04411e1ea72a1fcbde',
    slug: '/nha-dat-ban',
    name: 'Nhà đất bán',
    parent_slug: ''
  },
  {
    id: '5e11af04411e1ea72a1fcbdf',
    slug: '/nha-dat-thue',
    name: 'Nhà đất thuê',
    parent_slug: ''
  },
  {
    id: '5e11af04411e1ea72a1fcbe0',
    slug: '/nha-dat-can-mua',
    name: 'Nhà đất cần mua',
    parent_slug: ''
  },
  {
    id: '5e11af04411e1ea72a1fcbe1',
    slug: '/nha-dat-can-thue',
    name: 'Nhà đất cần thuê',
    parent_slug: ''
  }
];
const adSellLeaseType = [
  {
    id: '5e7d5f543f663879c6750927,5e11b046521813a78cde85ac,5e11b046521813a78cde85aa,5e7d61323f663879c6750997,5e11b046521813a78cde85ab',
    slug: '/mua-ban-nha',
    name: 'Bán nhà',
    parent_slug: '',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e11b046521813a78cde85ac',
    slug: '/mua-ban-nha-mat-pho',
    name: 'Bán nhà mặt phố',
    parent_slug: '/mua-ban-nha',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e11b046521813a78cde85aa',
    slug: '/mua-ban-nha-rieng',
    name: 'Bán nhà riêng',
    parent_slug: '/mua-ban-nha',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d61323f663879c6750997',
    slug: '/mua-ban-nha-pho-shophouse',
    name: 'Bán nhà phố thương mại (shophouse)',
    parent_slug: '/mua-ban-nha',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e11b046521813a78cde85ab',
    slug: '/mua-ban-nha-lien-ke',
    name: 'Bán nhà liền kề',
    parent_slug: '/mua-ban-nha',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e11b046521813a78cde85a9,5e7d620f3f663879c67509f8,5e7d622d3f663879c6750a07,5e7d624b3f663879c6750a15,5e7d626b3f663879c6750a23,5e7d628b3f663879c6750a34,5e7d62a53f663879c6750a42,5e7d62cc3f663879c6750a51,5e7d62fc3f663879c6750a6a,5e7d63193f663879c6750a7b,5e7d632f3f663879c6750a8d,5e9924f6716ee964b5fdcc23',
    slug: '/mua-ban-can-ho-chung-cu',
    name: "Bán căn hộ, chung cư",
    parent_slug: '',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d620f3f663879c67509f8',
    slug: '/mua-ban-can-ho-gia-re',
    name: "Căn hộ chung cư giá rẻ",
    parent_slug: '/mua-ban-can-ho-chung-cu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d622d3f663879c6750a07',
    slug: '/mua-ban-can-ho-mini',
    name: "Căn hộ chung cư mini",
    parent_slug: '/mua-ban-can-ho-chung-cu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d624b3f663879c6750a15',
    slug: '/mua-ban-can-ho-trung-cap',
    name: "Căn hộ chung cư trung cấp",
    parent_slug: '/mua-ban-can-ho-chung-cu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d626b3f663879c6750a23',
    slug: '/mua-ban-can-ho-cao-cap',
    name: "Căn hộ chung cư cao cấp",
    parent_slug: '/mua-ban-can-ho-chung-cu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d628b3f663879c6750a34',
    slug: '/mua-ban-can-ho-penthouse',
    name: "Căn hộ penthouse",
    parent_slug: '/mua-ban-can-ho-chung-cu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d62a53f663879c6750a42',
    slug: '/mua-ban-can-ho-skyvilla',
    name: "Căn hộ Skyvilla",
    parent_slug: '/mua-ban-can-ho-chung-cu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d62cc3f663879c6750a51',
    slug: '/mua-ban-can-ho-loft-house',
    name: "Căn hộ Loft - house",
    parent_slug: '/mua-ban-can-ho-chung-cu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d62fc3f663879c6750a6a',
    slug: '/mua-ban-can-ho-studio',
    name: "Căn hộ Studio",
    parent_slug: '/mua-ban-can-ho-chung-cu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d63193f663879c6750a7b',
    slug: '/mua-ban-can-ho-condotel',
    name: "Căn hộ Condotel",
    parent_slug: '/mua-ban-can-ho-chung-cu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d632f3f663879c6750a8d',
    slug: '/mua-ban-can-ho-officetel',
    name: "Căn hộ Officetel",
    parent_slug: '/mua-ban-can-ho-chung-cu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e9924f6716ee964b5fdcc23',
    slug: '/mua-ban-can-ho-duplex',
    name: "Căn hộ Duplex",
    parent_slug: '/mua-ban-can-ho-chung-cu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d63683f663879c6750ab6,5e9122948c71d25a879d30e6,5e7d64ae3f663879c6750aef,5e7d64c53f663879c6750afe,5e7d64e23f663879c6750b0b,5e7d658a3f663879c6750b70,5e7d65103f663879c6750b27,5e7d655e3f663879c6750b51,5e7d65b83f663879c6750b8a',
    slug: '/mua-ban-biet-thu',
    name: 'Bán biệt thự',
    parent_slug: '',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e9122948c71d25a879d30e6',
    slug: '/mua-ban-biet-thu-lien-ke',
    name: 'Biệt thự liền kề',
    parent_slug: '/mua-ban-biet-thu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d64ae3f663879c6750aef',
    slug: '/mua-ban-biet-thu-san-vuon',
    name: 'Biệt thự sân vườn',
    parent_slug: '/mua-ban-biet-thu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d64c53f663879c6750afe',
    slug: '/mua-ban-biet-thu-song-lap',
    name: 'Biệt thự song lập',
    parent_slug: '/mua-ban-biet-thu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d64e23f663879c6750b0b',
    slug: '/mua-ban-biet-thu-don-lap',
    name: 'Biệt thự đơn lập',
    parent_slug: '/mua-ban-biet-thu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d658a3f663879c6750b70',
    slug: '/mua-ban-biet-thu-nghi-duong',
    name: 'Biệt thự nghỉ dưỡng',
    parent_slug: '/mua-ban-biet-thu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d65103f663879c6750b27',
    slug: '/mua-ban-biet-thu-pho',
    name: 'Biệt thự phố',
    parent_slug: '/mua-ban-biet-thu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d655e3f663879c6750b51',
    slug: '/mua-ban-biet-thu-tu-lap',
    name: 'Biệt thự tứ lập',
    parent_slug: '/mua-ban-biet-thu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e7d65b83f663879c6750b8a',
    slug: '/mua-ban-biet-thu-mini',
    name: 'Biệt thự Mini',
    parent_slug: '/mua-ban-biet-thu',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e11b046521813a78cde85ae,5e67077e1fea273a985d1d36,5e67070f1fea273a985d1d35,5e11b046521813a78cde85ad,5e6707981fea273a985d1d37',
    slug: '/mua-ban-dat',
    name: 'Bán đất',
    parent_slug: '',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: "5e67077e1fea273a985d1d36",
    slug: '/mua-ban-dat-nen',
    name: 'Đất nền',
    parent_slug: '/mua-ban-dat',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e67070f1fea273a985d1d35',
    slug: '/mua-ban-dat-tho-cu',
    name: 'Bán đất thổ cư',
    parent_slug: '/mua-ban-dat',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e11b046521813a78cde85ad',
    slug: '/mua-ban-dat-nen-du-an',
    name: 'Bán đất nền, dự án',
    parent_slug: '/mua-ban-dat',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e6707981fea273a985d1d37',
    slug: '/mua-ban-dat-nong-lam-nghiep',
    name: 'Mua bán đất nông lâm nghiệp',
    parent_slug: '/mua-ban-dat',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e6707c21fea273a985d1d38,5e6707e01fea273a985d1d39,5e6707f81fea273a985d1d3a,5e11b046521813a78cde85b0,5e11b046521813a78cde85af',
    slug: '/mua-ban-bat-dong-san-khac',
    name: 'Bán các loại bất động sản khác',
    parent_slug: '',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e6707e01fea273a985d1d39',
    slug: '/mua-ban-nha-hang-khach-san',
    name: 'Bán nhà hàng, khách sạn',
    parent_slug: '/mua-ban-bat-dong-san-khac',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e6707f81fea273a985d1d3a',
    slug: '/mua-ban-sang-nhuong-quan',
    name: 'Bán/sang nhượng shop, kiot, quán',
    parent_slug: '/mua-ban-bat-dong-san-khac',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e11b046521813a78cde85b0',
    slug: '/mua-ban-kho-nha-xuong',
    name: 'Bán nhà kho, nhà xưởng',
    parent_slug: '/mua-ban-bat-dong-san-khac',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e11b046521813a78cde85af',
    slug: '/mua-ban-trang-trai-nghi-duong',
    name: 'Bán trang trại, nghỉ dưỡng',
    parent_slug: '/mua-ban-bat-dong-san-khac',
    type1_slug: '/nha-dat-ban'
  },
  {
    id: '5e11b046521813a78cde85c3',
    slug: '/can-thue-can-ho-chung-cu',
    name: 'Cần thuê căn hộ chung cư',
    parent_slug: '',
    type1_slug: '/nha-dat-can-thue'
  },
  {
    id: '5e11b046521813a78cde85c4',
    slug: '/can-thue-nha-rieng',
    name: 'Cần thuê nhà riêng',
    parent_slug: '',
    type1_slug: '/nha-dat-can-thue'
  },
  {
    id: '5e11b046521813a78cde85c5',
    slug: '/can-thue-nha-mat-pho',
    name: 'Cần thuê nhà mặt phố',
    parent_slug: '',
    type1_slug: '/nha-dat-can-thue'
  },
  {
    id: '5e11b046521813a78cde85c6',
    slug: '/can-thue-nha-tro-phong-tro',
    name: 'Cần thuê nhà trọ, phòng trọ',
    parent_slug: '',
    type1_slug: '/nha-dat-can-thue'
  },
  {
    id: '5e11b046521813a78cde85c7',
    slug: '/can-thue-van-phong',
    name: 'Cần thuê văn phòng',
    parent_slug: '',
    type1_slug: '/nha-dat-can-thue'
  },
  {
    id: '5e11b046521813a78cde85c8',
    slug: '/can-thue-cua-hang-kiot',
    name: 'Cần thuê cửa hàng, ki ốt',
    parent_slug: '',
    type1_slug: '/nha-dat-can-thue'
  },
  {
    id: '5e11b046521813a78cde85c9',
    slug: '/can-thue-kho-nha-xuong-dat',
    name: 'Cho thuê kho, nhà xưởng, đất',
    parent_slug: '',
    type1_slug: '/nha-dat-can-thue'
  },
  {
    id: '5e11b046521813a78cde85ca',
    slug: '/can-thue-cac-loai-bat-dong-san-khac',
    name: 'Cần thuê loại bất động sản khác',
    parent_slug: '',
    type1_slug: '/nha-dat-can-thue'
  },
  {
    id: '5e11b046521813a78cde85ba',
    slug: '/mua-can-ho-chung-cu',
    name: 'Mua căn hộ chung cư',
    parent_slug: '',
    type1_slug: '/nha-dat-can-mua'
  },
  {
    id: '5e11b046521813a78cde85bb',
    slug: '/mua-nha-rieng',
    name: 'Mua nhà riêng',
    parent_slug: '',
    type1_slug: '/nha-dat-can-mua'
  },
  {
    id: '5e11b046521813a78cde85bc',
    slug: '/mua-nha-biet-thu-lien-ke',
    name: 'Mua nhà biệt thư, liền kề',
    parent_slug: '',
    type1_slug: '/nha-dat-can-mua'
  },
  {
    id: '5e11b046521813a78cde85bd',
    slug: '/mua-nha-mat-pho',
    name: 'Mua nhà mặt phố',
    parent_slug: '',
    type1_slug: '/nha-dat-can-mua'
  },
  {
    id: '5e11b046521813a78cde85be',
    slug: '/mua-dat-nen-du-an',
    name: 'Mua đất nền dự án',
    parent_slug: '',
    type1_slug: '/nha-dat-can-mua'
  },
  {
    id: '5e11b046521813a78cde85bf',
    slug: '/mua-dat',
    name: 'Mua đất',
    parent_slug: '',
    type1_slug: '/nha-dat-can-mua'
  },
  {
    id: '5e11b046521813a78cde85c0',
    slug: '/mua-trang-trai-khu-nghi-duong',
    name: 'Mua trang trại, khu nghỉ dưỡng',
    parent_slug: '',
    type1_slug: '/nha-dat-can-mua'
  },
  {
    id: '5e11b046521813a78cde85c1',
    slug: '/mua-kho-nha-xuong',
    name: 'Mua kho, nhà xưởng',
    parent_slug: '',
    type1_slug: '/nha-dat-can-mua'
  },
  {
    id: '5e11b046521813a78cde85c2',
    slug: '/mua-cac-loai-bat-dong-san-khac',
    name: 'Mua các loại bất động sản khác',
    parent_slug: '',
    type1_slug: '/nha-dat-can-mua'
  },
  {
    id: '5e11b046521813a78cde85b2',
    slug: '/cho-thue-can-ho-chung-cu',
    name: 'Cho thuê căn hộ chung cư',
    parent_slug: '',
    type1_slug: '/nha-dat-thue'
  },
  {
    id: '5e11b046521813a78cde85b3',
    slug: '/cho-thue-nha-rieng',
    name: 'Cho thuê nhà riêng',
    parent_slug: '',
    type1_slug: '/nha-dat-thue'
  },
  {
    id: '5e11b046521813a78cde85b4',
    slug: '/cho-thue-nha-mat-pho',
    name: 'Cho thuê nhà mặt phố',
    parent_slug: '',
    type1_slug: '/nha-dat-thue'
  },
  {
    id: '5e11b046521813a78cde85b5',
    slug: '/cho-thue-nha-tro-phong-tro',
    name: 'Cho thuê nhà trọ, phòng trọ',
    parent_slug: '',
    type1_slug: '/nha-dat-thue'
  },
  {
    id: '5e11b046521813a78cde85b6',
    slug: '/cho-thue-van-phong',
    name: 'Cho thuê văn phòng',
    parent_slug: '',
    type1_slug: '/nha-dat-thue'
  },
  {
    id: '5e11b046521813a78cde85b7',
    slug: '/cho-thue-cua-hang-kiot',
    name: 'Cho thuê cửa hàng, ki ốt',
    parent_slug: '',
    type1_slug: '/nha-dat-thue'
  },
  {
    id: '5e11b046521813a78cde85b8',
    slug: '/cho-thue-kho-nha-xuong-dat',
    name: 'Cho thuê kho, nhà xưởng, đất',
    parent_slug: '',
    type1_slug: '/nha-dat-thue'
  },
  {
    id: '5e11b046521813a78cde85b9',
    slug: '/cho-thue-cac-loai-bat-dong-san-khac',
    name: 'Cho thuê các loại bất động sản khác',
    parent_slug: '',
    type1_slug: '/nha-dat-thue'
  }
];

const titles = [
  {
    title: 'Giường ngủ',
    elements: [
      { element: 'Giường ngủ tự nhiên', image: 'https://mundecor.vn/uploads/sanpham/giuongngugotunhien/giuong-ngu-go-tu-nhien-dep-GN034.jpeg' },
      { element: 'Giường ngủ công nghiệp', image: 'https://mundecor.vn/uploads/sanpham/giuongngugotunhien/giuong-ngu-go-tu-nhien-dep-GN034.jpeg' },
      { element: 'Giường ngủ hiện đại', image: 'https://mundecor.vn/uploads/sanpham/giuongngugotunhien/giuong-ngu-go-tu-nhien-dep-GN034.jpeg' },
      { element: 'Giường ngủ cổ điển', image: 'https://mundecor.vn/uploads/sanpham/giuongngugotunhien/giuong-ngu-go-tu-nhien-dep-GN034.jpeg' },
    ]
  },
  {
    title: 'Bàn ăn',
    elements: [
      { element: 'Bàn ăn tự nhiên', image: 'https://dogonoithatviet.com/upload/sanpham/large/bo-ban-an-go-tu-nhien-cam-xe-mat-go-co-dien-1m8-8-ghe.jpg' },
      { element: 'Bàn ăn ép cao cấp', image: 'https://dogonoithatviet.com/upload/sanpham/large/bo-ban-an-go-tu-nhien-cam-xe-mat-go-co-dien-1m8-8-ghe.jpg' },
      { element: 'Bàn ăn nhà hàng', image: 'https://dogonoithatviet.com/upload/sanpham/large/bo-ban-an-go-tu-nhien-cam-xe-mat-go-co-dien-1m8-8-ghe.jpg' },
      { element: 'Bàn ăn 4 ghế', image: 'https://dogonoithatviet.com/upload/sanpham/large/bo-ban-an-go-tu-nhien-cam-xe-mat-go-co-dien-1m8-8-ghe.jpg' },
      { element: 'Bàn ăn 6 ghế', image: 'https://dogonoithatviet.com/upload/sanpham/large/bo-ban-an-go-tu-nhien-cam-xe-mat-go-co-dien-1m8-8-ghe.jpg' },
    ]
  },
  {
    title: 'Bàn phòng khách',
    elements: [
      { element: 'Bàn ăn tự nhiên', image: 'https://noithatduongdai.vn/wp-content/uploads/2018/10/ban-ghe-phong-khach-go-oc-cho.jpg' },
      { element: 'Bàn ăn ép cao cấp', image: 'https://noithatduongdai.vn/wp-content/uploads/2018/10/ban-ghe-phong-khach-go-oc-cho.jpg' },
      { element: 'Bàn ăn nhà hàng', image: 'https://noithatduongdai.vn/wp-content/uploads/2018/10/ban-ghe-phong-khach-go-oc-cho.jpg' },
      { element: 'Bàn ăn 4 ghế', image: 'https://noithatduongdai.vn/wp-content/uploads/2018/10/ban-ghe-phong-khach-go-oc-cho.jpg' },
      { element: 'Bàn ăn 6 ghế', image: 'https://noithatduongdai.vn/wp-content/uploads/2018/10/ban-ghe-phong-khach-go-oc-cho.jpg' },
    ]
  },
  {
    title: 'Kệ tivi',
    elements: [
      { element: 'Bàn ăn tự nhiên', image: 'https://gochuan.com/wp-content/uploads/2018/09/326841f37c759d2bc464.jpg' },
      { element: 'Bàn ăn ép cao cấp', image: 'https://gochuan.com/wp-content/uploads/2018/09/326841f37c759d2bc464.jpg' },
      { element: 'Bàn ăn nhà hàng', image: 'https://gochuan.com/wp-content/uploads/2018/09/326841f37c759d2bc464.jpg' },
      { element: 'Bàn ăn 4 ghế', image: 'https://gochuan.com/wp-content/uploads/2018/09/326841f37c759d2bc464.jpg' },
      { element: 'Bàn ăn 6 ghế', image: 'https://gochuan.com/wp-content/uploads/2018/09/326841f37c759d2bc464.jpg' },
    ]
  },
  {
    title: 'Tủ quần áo',
    elements: [
      { element: 'Bàn ăn tự nhiên', image: 'https://dogolegia.com/wp-content/uploads/2018/03/Mau-tu-quan-ao-dep-LG-TQA030.jpg' },
      { element: 'Bàn ăn ép cao cấp', image: 'https://dogolegia.com/wp-content/uploads/2018/03/Mau-tu-quan-ao-dep-LG-TQA030.jpg' },
      { element: 'Bàn ăn nhà hàng', image: 'https://dogolegia.com/wp-content/uploads/2018/03/Mau-tu-quan-ao-dep-LG-TQA030.jpg' },
      { element: 'Bàn ăn 4 ghế', image: 'https://dogolegia.com/wp-content/uploads/2018/03/Mau-tu-quan-ao-dep-LG-TQA030.jpg' },
      { element: 'Bàn ăn 6 ghế', image: 'https://dogolegia.com/wp-content/uploads/2018/03/Mau-tu-quan-ao-dep-LG-TQA030.jpg' },
    ]
  },
  {
    title: 'Bàn trang điểm',
    elements: [
      { element: 'Bàn ăn tự nhiên', image: 'https://noithatluongson.vn/wp-content/uploads/2019/08/ban-trang-diem-60-1.jpg' },
      { element: 'Bàn ăn ép cao cấp', image: 'https://noithatluongson.vn/wp-content/uploads/2019/08/ban-trang-diem-60-1.jpg' },
      { element: 'Bàn ăn nhà hàng', image: 'https://noithatluongson.vn/wp-content/uploads/2019/08/ban-trang-diem-60-1.jpg' },
      { element: 'Bàn ăn 4 ghế', image: 'https://noithatluongson.vn/wp-content/uploads/2019/08/ban-trang-diem-60-1.jpg' },
      { element: 'Bàn ăn 6 ghế', image: 'https://noithatluongson.vn/wp-content/uploads/2019/08/ban-trang-diem-60-1.jpg' },
    ]
  },
  {
    title: 'Tủ giày',
    elements: [
      { element: 'Tủ giày tự nhiên', image: 'https://file.hstatic.net/1000294146/file/3_grande.jpg' },
      { element: 'Tủ giày ép cao cấp', image: 'https://file.hstatic.net/1000294146/file/3_grande.jpg' },
      { element: 'Tủ giày nhà hàng', image: 'https://file.hstatic.net/1000294146/file/3_grande.jpg' },
      { element: 'Bàn ăn 4 ghế', image: 'https://file.hstatic.net/1000294146/file/3_grande.jpg' },
      { element: 'Bàn ăn 6 ghế', image: 'https://file.hstatic.net/1000294146/file/3_grande.jpg' },
    ]
  },
];

const listMenu = [
  {
    title: 'Nội Thất Phòng Ngủ',
    rooms: [
      { room: 'Giường ngủ' },
      { room: 'Tủ quần áo' },
      { room: 'Bàn trang điểm' },
      { room: 'Bàn ghế phòng ngủ' },
      { room: 'Tủ đầu giường' },
      { room: 'Giường tầng' },
      { room: 'Bộ phòng ngủ' },
    ]
  },
  {
    title: 'Nội Thất Phòng Khách',
    rooms: [
      { room: 'Bàn ghế gỗ' },
      { room: 'Tủ Giày Dép' },
      { room: 'Kệ Tivi' },
      { room: 'Kệ để giày' },
      { room: 'Tủ rượu' },
    ]
  },
  {
    title: 'Nội Thất Nhà Bếp',
    rooms: [
      { room: 'Tủ bếp' },
      { room: 'Bộ bàn ăn' },
      { room: 'Ghế phòng ăn' },
      { room: 'Bàn ghế phòng ngủ' },
      { room: 'Tủ đầu giường' },
      { room: 'Giường tầng' },
      { room: 'Bộ phòng ngủ' },
    ]
  },
  {
    title: 'Nội Thất Phòng Thờ',
    rooms: [
      { room: 'Bàn Thờ' },
      { room: 'Tủ Thờ' },
      { room: 'Bàn Thờ Thần Tài' },
      { room: 'Bàn Thờ Treo Tường' },
      { room: 'Sập Thờ' },
    ]
  },
  {
    title: 'Nội Thất Văn Phòng',
    rooms: [
      { room: 'Giường ngủ' },
      { room: 'Tủ quần áo' },
      { room: 'Bàn trang điểm' },
      { room: 'Bàn ghế phòng ngủ' },
      { room: 'Tủ đầu giường' },
      { room: 'Giường tầng' },
      { room: 'Bộ phòng ngủ' },
    ]
  },
  {
    title: 'Đồ Gỗ Mỹ Nghệ',
    rooms: [
      { room: 'Giường ngủ' },
      { room: 'Tủ quần áo' },
      { room: 'Bàn trang điểm' },
      { room: 'Bàn ghế phòng ngủ' },
      { room: 'Tủ đầu giường' },
      { room: 'Giường tầng' },
      { room: 'Bộ phòng ngủ' },
    ]
  },
  {
    title: 'Sản Phẩm Khuyến Mại',
    rooms: [
      { room: 'Giường ngủ' },
      { room: 'Tủ quần áo' },
      { room: 'Bàn trang điểm' },
      { room: 'Bàn ghế phòng ngủ' },
      { room: 'Tủ đầu giường' },
      { room: 'Giường tầng' },
      { room: 'Bộ phòng ngủ' },
    ]
  },
  {
    title: 'Sản Phẩm Đã Xem',
    rooms: [
      { room: 'Giường ngủ' },
      { room: 'Tủ quần áo' },
      { room: 'Bàn trang điểm' },
      { room: 'Bàn ghế phòng ngủ' },
      { room: 'Tủ đầu giường' },
      { room: 'Giường tầng' },
      { room: 'Bộ phòng ngủ' },
    ]
  },
  {
    title: 'Đơn hàng đã đặt',
    rooms: [
      { room: 'Giường ngủ' },
      { room: 'Tủ quần áo' },
      { room: 'Bàn trang điểm' },
      { room: 'Bàn ghế phòng ngủ' },
      { room: 'Tủ đầu giường' },
      { room: 'Giường tầng' },
      { room: 'Bộ phòng ngủ' },
    ]
  },
  {
    title: 'Sản phẩm bán chạy',
    rooms: [
      { room: 'Giường ngủ' },
      { room: 'Tủ quần áo' },
      { room: 'Bàn trang điểm' },
      { room: 'Bàn ghế phòng ngủ' },
      { room: 'Tủ đầu giường' },
      { room: 'Giường tầng' },
      { room: 'Bộ phòng ngủ' },
    ]
  },
  {
    title: 'Sản phẩm mới',
    rooms: [
      { room: 'Giường ngủ' },
      { room: 'Tủ quần áo' },
      { room: 'Bàn trang điểm' },
      { room: 'Bàn ghế phòng ngủ' },
      { room: 'Tủ đầu giường' },
      { room: 'Giường tầng' },
      { room: 'Bộ phòng ngủ' },
    ]
  },
];

const products = [
  {
    image: 'https://www.nhadepkientruc.net/wp-content/uploads/2014/06/tu-quan-ao-go-dep-01.jpg',
    title: 'Tủ quần áo đẹp- TQA099',
    moneyOld: 5000000,
    moneyNew: 4500000,
  },
  {
    image: 'https://dienmaycholon.vn/public/userupload/images/ke%20tivi%20go%20cao%20cap.png',
    title: 'Kệ Tivi phòng khách',
    moneyOld: 6000000,
    moneyNew: 5000000,
  },
  {
    image: 'https://dienmaycholon.vn/public/userupload/images/ke%20tivi%20go%20cao%20cap.png',
    title: 'Giường ngủ gỗ tự nhiên - GNCD01',
    moneyOld: 3000000,
    moneyNew: 2000000,
  },
  {
    image: 'https://noithatthaibinh.com/wp-content/uploads/2018/10/giuong-ngu-go-go-do-9656.jpg',
    title: 'Giường ngủ thời trang - G003',
    moneyOld: 4500000,
    moneyNew: 3500000,
  },
  {
    image: 'https://phogovip.vn/uploads/news/2017_12/giuong-ngu-go-tu-nhien-4-copy.jpg',
    title: 'Giường ngủ hiện đại - GN003',
    moneyOld: 4000000,
    moneyNew: 3500000,
  },
  {
    image: 'https://noithatihouse.com/wp-content/uploads/2019/11/O1CN01Ziuj8F1ySlsFWXvny_27360165.jpg',
    title: 'Kệ Tivi phòng khách',
    moneyOld: 6000000,
    moneyNew: 5000000,
  },
  {
    image: 'https://noithatihouse.com/wp-content/uploads/2019/11/O1CN01Ziuj8F1ySlsFWXvny_27360165.jpg',
    title: 'Bàn ăn 6 ghế - BA001',
    moneyOld: 4000000,
    moneyNew: 3000000,
  },
  {
    image: 'https://www.nhadepkientruc.net/wp-content/uploads/2014/06/tu-quan-ao-go-dep-01.jpg',
    title: 'Bàn ăn gỗ nhập khẩu - BA002',
    moneyOld: 3500000,
    moneyNew: 3000000,
  },
  {
    image: 'https://www.nhadepkientruc.net/wp-content/uploads/2014/06/tu-quan-ao-go-dep-01.jpg',
    title: 'Tủ quần áo đẹp- TQA099',
    moneyOld: 4000000,
    moneyNew: 3500000,
  },
  {
    image: 'https://dienmaycholon.vn/public/userupload/images/ke%20tivi%20go%20cao%20cap.png',
    title: 'Kệ Tivi phòng khách',
    moneyOld: 6000000,
    moneyNew: 5000000,
  },
  {
    image: 'https://noithatthaibinh.com/wp-content/uploads/2018/10/giuong-ngu-go-go-do-9656.jpg',
    title: 'Giường ngủ cổ điển - GNCD01',
    moneyOld: 6000000,
    moneyNew: 5500000,
  },
  {
    image: 'https://noithatthaibinh.com/wp-content/uploads/2018/10/giuong-ngu-go-go-do-9656.jpg',
    title: 'Giường ngủ thời trang - G003',
    moneyOld: 4500000,
    moneyNew: 3500000,
  },
  {
    image: 'https://noithatthaibinh.com/wp-content/uploads/2018/10/giuong-ngu-go-go-do-9656.jpg',
    title: 'Giường ngủ cổ điển - GNCD01',
    moneyOld: 6000000,
    moneyNew: 5500000,
  },
  {
    image: 'https://noithatthaibinh.com/wp-content/uploads/2018/10/giuong-ngu-go-go-do-9656.jpg',
    title: 'Giường ngủ thời trang - G003',
    moneyOld: 4500000,
    moneyNew: 3500000,
  },
  {
    image: 'https://www.nhadepkientruc.net/wp-content/uploads/2014/06/tu-quan-ao-go-dep-01.jpg',
    title: 'Tủ quần áo đẹp- TQA099',
    moneyOld: 4000000,
    moneyNew: 3500000,
  },
  {
    image: 'https://dienmaycholon.vn/public/userupload/images/ke%20tivi%20go%20cao%20cap.png',
    title: 'Kệ Tivi phòng khách',
    moneyOld: 6000000,
    moneyNew: 5000000,
  },
];


export {
  mainURL,
  upgradePlanURL,
  upgradeIconURL,
  logoURL,
  apiBaseURL,
  apiGraphQLURL,
  googleLogin,
  zaloLogin,
  facebookLogin,
  urlImageAdSellLease,
  urlImageBroker,
  urlImageProject,
  imageDefaultBroker,
  imageDefaultProject,
  imageDefaultSlider,
  googleAnalyticsCode,
  googleSearchConsole,
  localStorageCompareKey,
  adSellLeaseType,
  localStorageViewed,
  localStorageProjectViewed,
  adSellLeaseCategory,
  titles,
  listMenu,
  products,
};
