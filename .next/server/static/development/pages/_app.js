module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/ThemeContext/index.jsx":
/*!*******************************************!*\
  !*** ./components/ThemeContext/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (ThemeContext);

/***/ }),

/***/ "./constants/index.jsx":
/*!*****************************!*\
  !*** ./constants/index.jsx ***!
  \*****************************/
/*! exports provided: mainURL, upgradePlanURL, upgradeIconURL, logoURL, apiBaseURL, apiGraphQLURL, googleLogin, zaloLogin, facebookLogin, urlImageAdSellLease, urlImageBroker, urlImageProject, imageDefaultBroker, imageDefaultProject, imageDefaultSlider, googleAnalyticsCode, googleSearchConsole, localStorageCompareKey, localStorageViewed, localStorageProjectViewed, adSellLeaseCategory, color, titles, listMenu, products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainURL", function() { return mainURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upgradePlanURL", function() { return upgradePlanURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upgradeIconURL", function() { return upgradeIconURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoURL", function() { return logoURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiBaseURL", function() { return apiBaseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGraphQLURL", function() { return apiGraphQLURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleLogin", function() { return googleLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zaloLogin", function() { return zaloLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookLogin", function() { return facebookLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlImageAdSellLease", function() { return urlImageAdSellLease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlImageBroker", function() { return urlImageBroker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlImageProject", function() { return urlImageProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageDefaultBroker", function() { return imageDefaultBroker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageDefaultProject", function() { return imageDefaultProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageDefaultSlider", function() { return imageDefaultSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleAnalyticsCode", function() { return googleAnalyticsCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleSearchConsole", function() { return googleSearchConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageCompareKey", function() { return localStorageCompareKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageViewed", function() { return localStorageViewed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageProjectViewed", function() { return localStorageProjectViewed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adSellLeaseCategory", function() { return adSellLeaseCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titles", function() { return titles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listMenu", function() { return listMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
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
const adSellLeaseCategory = [{
  id: '5e11b046521813a78cde85b9',
  slug: '/cho-thue-cac-loai-bat-dong-san-khac',
  name: 'Cho thuê các loại bất động sản khác',
  parent_slug: '',
  type1_slug: '/nha-dat-thue'
}];
const color = {
  baseColor: '#1976d2',
  baseBackgroundColor: '#D9EDFE',
  baseLightColor: '#a3d2fa',
  baseLightBackgroundColor: '#f5fcff',
  baseBoldColor: '#045EA8',
  baseTitleColor: '#444',
  baseTitleLightColor: '#aaa'
};
const titles = [{
  title: 'Giường ngủ',
  elements: [{
    element: 'Giường ngủ tự nhiên',
    image: 'https://mundecor.vn/uploads/sanpham/giuongngugotunhien/giuong-ngu-go-tu-nhien-dep-GN034.jpeg'
  }, {
    element: 'Giường ngủ công nghiệp',
    image: 'https://mundecor.vn/uploads/sanpham/giuongngugotunhien/giuong-ngu-go-tu-nhien-dep-GN034.jpeg'
  }, {
    element: 'Giường ngủ hiện đại',
    image: 'https://mundecor.vn/uploads/sanpham/giuongngugotunhien/giuong-ngu-go-tu-nhien-dep-GN034.jpeg'
  }, {
    element: 'Giường ngủ cổ điển',
    image: 'https://mundecor.vn/uploads/sanpham/giuongngugotunhien/giuong-ngu-go-tu-nhien-dep-GN034.jpeg'
  }]
}, {
  title: 'Bàn ăn',
  elements: [{
    element: 'Bàn ăn tự nhiên',
    image: 'https://dogonoithatviet.com/upload/sanpham/large/bo-ban-an-go-tu-nhien-cam-xe-mat-go-co-dien-1m8-8-ghe.jpg'
  }, {
    element: 'Bàn ăn ép cao cấp',
    image: 'https://dogonoithatviet.com/upload/sanpham/large/bo-ban-an-go-tu-nhien-cam-xe-mat-go-co-dien-1m8-8-ghe.jpg'
  }, {
    element: 'Bàn ăn nhà hàng',
    image: 'https://dogonoithatviet.com/upload/sanpham/large/bo-ban-an-go-tu-nhien-cam-xe-mat-go-co-dien-1m8-8-ghe.jpg'
  }, {
    element: 'Bàn ăn 4 ghế',
    image: 'https://dogonoithatviet.com/upload/sanpham/large/bo-ban-an-go-tu-nhien-cam-xe-mat-go-co-dien-1m8-8-ghe.jpg'
  }, {
    element: 'Bàn ăn 6 ghế',
    image: 'https://dogonoithatviet.com/upload/sanpham/large/bo-ban-an-go-tu-nhien-cam-xe-mat-go-co-dien-1m8-8-ghe.jpg'
  }]
}, {
  title: 'Bàn phòng khách',
  elements: [{
    element: 'Bàn ăn tự nhiên',
    image: 'https://noithatduongdai.vn/wp-content/uploads/2018/10/ban-ghe-phong-khach-go-oc-cho.jpg'
  }, {
    element: 'Bàn ăn ép cao cấp',
    image: 'https://noithatduongdai.vn/wp-content/uploads/2018/10/ban-ghe-phong-khach-go-oc-cho.jpg'
  }, {
    element: 'Bàn ăn nhà hàng',
    image: 'https://noithatduongdai.vn/wp-content/uploads/2018/10/ban-ghe-phong-khach-go-oc-cho.jpg'
  }, {
    element: 'Bàn ăn 4 ghế',
    image: 'https://noithatduongdai.vn/wp-content/uploads/2018/10/ban-ghe-phong-khach-go-oc-cho.jpg'
  }, {
    element: 'Bàn ăn 6 ghế',
    image: 'https://noithatduongdai.vn/wp-content/uploads/2018/10/ban-ghe-phong-khach-go-oc-cho.jpg'
  }]
}, {
  title: 'Kệ tivi',
  elements: [{
    element: 'Bàn ăn tự nhiên',
    image: 'https://gochuan.com/wp-content/uploads/2018/09/326841f37c759d2bc464.jpg'
  }, {
    element: 'Bàn ăn ép cao cấp',
    image: 'https://gochuan.com/wp-content/uploads/2018/09/326841f37c759d2bc464.jpg'
  }, {
    element: 'Bàn ăn nhà hàng',
    image: 'https://gochuan.com/wp-content/uploads/2018/09/326841f37c759d2bc464.jpg'
  }, {
    element: 'Bàn ăn 4 ghế',
    image: 'https://gochuan.com/wp-content/uploads/2018/09/326841f37c759d2bc464.jpg'
  }, {
    element: 'Bàn ăn 6 ghế',
    image: 'https://gochuan.com/wp-content/uploads/2018/09/326841f37c759d2bc464.jpg'
  }]
}, {
  title: 'Tủ quần áo',
  elements: [{
    element: 'Bàn ăn tự nhiên',
    image: 'https://dogolegia.com/wp-content/uploads/2018/03/Mau-tu-quan-ao-dep-LG-TQA030.jpg'
  }, {
    element: 'Bàn ăn ép cao cấp',
    image: 'https://dogolegia.com/wp-content/uploads/2018/03/Mau-tu-quan-ao-dep-LG-TQA030.jpg'
  }, {
    element: 'Bàn ăn nhà hàng',
    image: 'https://dogolegia.com/wp-content/uploads/2018/03/Mau-tu-quan-ao-dep-LG-TQA030.jpg'
  }, {
    element: 'Bàn ăn 4 ghế',
    image: 'https://dogolegia.com/wp-content/uploads/2018/03/Mau-tu-quan-ao-dep-LG-TQA030.jpg'
  }, {
    element: 'Bàn ăn 6 ghế',
    image: 'https://dogolegia.com/wp-content/uploads/2018/03/Mau-tu-quan-ao-dep-LG-TQA030.jpg'
  }]
}, {
  title: 'Bàn trang điểm',
  elements: [{
    element: 'Bàn ăn tự nhiên',
    image: 'https://noithatluongson.vn/wp-content/uploads/2019/08/ban-trang-diem-60-1.jpg'
  }, {
    element: 'Bàn ăn ép cao cấp',
    image: 'https://noithatluongson.vn/wp-content/uploads/2019/08/ban-trang-diem-60-1.jpg'
  }, {
    element: 'Bàn ăn nhà hàng',
    image: 'https://noithatluongson.vn/wp-content/uploads/2019/08/ban-trang-diem-60-1.jpg'
  }, {
    element: 'Bàn ăn 4 ghế',
    image: 'https://noithatluongson.vn/wp-content/uploads/2019/08/ban-trang-diem-60-1.jpg'
  }, {
    element: 'Bàn ăn 6 ghế',
    image: 'https://noithatluongson.vn/wp-content/uploads/2019/08/ban-trang-diem-60-1.jpg'
  }]
}, {
  title: 'Tủ giày',
  elements: [{
    element: 'Tủ giày tự nhiên',
    image: 'https://file.hstatic.net/1000294146/file/3_grande.jpg'
  }, {
    element: 'Tủ giày ép cao cấp',
    image: 'https://file.hstatic.net/1000294146/file/3_grande.jpg'
  }, {
    element: 'Tủ giày nhà hàng',
    image: 'https://file.hstatic.net/1000294146/file/3_grande.jpg'
  }, {
    element: 'Bàn ăn 4 ghế',
    image: 'https://file.hstatic.net/1000294146/file/3_grande.jpg'
  }, {
    element: 'Bàn ăn 6 ghế',
    image: 'https://file.hstatic.net/1000294146/file/3_grande.jpg'
  }]
}];
const listMenu = [{
  title: 'Nội Thất Phòng Ngủ',
  rooms: [{
    room: 'Giường ngủ'
  }, {
    room: 'Tủ quần áo'
  }, {
    room: 'Bàn trang điểm'
  }, {
    room: 'Bàn ghế phòng ngủ'
  }, {
    room: 'Tủ đầu giường'
  }, {
    room: 'Giường tầng'
  }, {
    room: 'Bộ phòng ngủ'
  }]
}, {
  title: 'Nội Thất Phòng Khách',
  rooms: [{
    room: 'Bàn ghế gỗ'
  }, {
    room: 'Tủ Giày Dép'
  }, {
    room: 'Kệ Tivi'
  }, {
    room: 'Kệ để giày'
  }, {
    room: 'Tủ rượu'
  }]
}, {
  title: 'Nội Thất Nhà Bếp',
  rooms: [{
    room: 'Tủ bếp'
  }, {
    room: 'Bộ bàn ăn'
  }, {
    room: 'Ghế phòng ăn'
  }, {
    room: 'Bàn ghế phòng ngủ'
  }, {
    room: 'Tủ đầu giường'
  }, {
    room: 'Giường tầng'
  }, {
    room: 'Bộ phòng ngủ'
  }]
}, {
  title: 'Nội Thất Phòng Thờ',
  rooms: [{
    room: 'Bàn Thờ'
  }, {
    room: 'Tủ Thờ'
  }, {
    room: 'Bàn Thờ Thần Tài'
  }, {
    room: 'Bàn Thờ Treo Tường'
  }, {
    room: 'Sập Thờ'
  }]
}, {
  title: 'Nội Thất Văn Phòng',
  rooms: [{
    room: 'Giường ngủ'
  }, {
    room: 'Tủ quần áo'
  }, {
    room: 'Bàn trang điểm'
  }, {
    room: 'Bàn ghế phòng ngủ'
  }, {
    room: 'Tủ đầu giường'
  }, {
    room: 'Giường tầng'
  }, {
    room: 'Bộ phòng ngủ'
  }]
}, {
  title: 'Đồ Gỗ Mỹ Nghệ',
  rooms: [{
    room: 'Giường ngủ'
  }, {
    room: 'Tủ quần áo'
  }, {
    room: 'Bàn trang điểm'
  }, {
    room: 'Bàn ghế phòng ngủ'
  }, {
    room: 'Tủ đầu giường'
  }, {
    room: 'Giường tầng'
  }, {
    room: 'Bộ phòng ngủ'
  }]
}, {
  title: 'Sản Phẩm Khuyến Mại',
  rooms: [{
    room: 'Giường ngủ'
  }, {
    room: 'Tủ quần áo'
  }, {
    room: 'Bàn trang điểm'
  }, {
    room: 'Bàn ghế phòng ngủ'
  }, {
    room: 'Tủ đầu giường'
  }, {
    room: 'Giường tầng'
  }, {
    room: 'Bộ phòng ngủ'
  }]
}, {
  title: 'Sản Phẩm Đã Xem',
  rooms: [{
    room: 'Giường ngủ'
  }, {
    room: 'Tủ quần áo'
  }, {
    room: 'Bàn trang điểm'
  }, {
    room: 'Bàn ghế phòng ngủ'
  }, {
    room: 'Tủ đầu giường'
  }, {
    room: 'Giường tầng'
  }, {
    room: 'Bộ phòng ngủ'
  }]
}, {
  title: 'Đơn hàng đã đặt',
  rooms: [{
    room: 'Giường ngủ'
  }, {
    room: 'Tủ quần áo'
  }, {
    room: 'Bàn trang điểm'
  }, {
    room: 'Bàn ghế phòng ngủ'
  }, {
    room: 'Tủ đầu giường'
  }, {
    room: 'Giường tầng'
  }, {
    room: 'Bộ phòng ngủ'
  }]
}, {
  title: 'Sản phẩm bán chạy',
  rooms: [{
    room: 'Giường ngủ'
  }, {
    room: 'Tủ quần áo'
  }, {
    room: 'Bàn trang điểm'
  }, {
    room: 'Bàn ghế phòng ngủ'
  }, {
    room: 'Tủ đầu giường'
  }, {
    room: 'Giường tầng'
  }, {
    room: 'Bộ phòng ngủ'
  }]
}, {
  title: 'Sản phẩm mới',
  rooms: [{
    room: 'Giường ngủ'
  }, {
    room: 'Tủ quần áo'
  }, {
    room: 'Bàn trang điểm'
  }, {
    room: 'Bàn ghế phòng ngủ'
  }, {
    room: 'Tủ đầu giường'
  }, {
    room: 'Giường tầng'
  }, {
    room: 'Bộ phòng ngủ'
  }]
}];
const products = [{
  image: 'https://www.nhadepkientruc.net/wp-content/uploads/2014/06/tu-quan-ao-go-dep-01.jpg',
  title: 'Tủ quần áo đẹp- TQA099',
  moneyOld: 5000000,
  moneyNew: 4500000
}, {
  image: 'https://dienmaycholon.vn/public/userupload/images/ke%20tivi%20go%20cao%20cap.png',
  title: 'Kệ Tivi phòng khách',
  moneyOld: 6000000,
  moneyNew: 5000000
}, {
  image: 'https://dienmaycholon.vn/public/userupload/images/ke%20tivi%20go%20cao%20cap.png',
  title: 'Giường ngủ gỗ tự nhiên - GNCD01',
  moneyOld: 3000000,
  moneyNew: 2000000
}, {
  image: 'https://noithatthaibinh.com/wp-content/uploads/2018/10/giuong-ngu-go-go-do-9656.jpg',
  title: 'Giường ngủ thời trang - G003',
  moneyOld: 4500000,
  moneyNew: 3500000
}, {
  image: 'https://phogovip.vn/uploads/news/2017_12/giuong-ngu-go-tu-nhien-4-copy.jpg',
  title: 'Giường ngủ hiện đại - GN003',
  moneyOld: 4000000,
  moneyNew: 3500000
}, {
  image: 'https://noithatihouse.com/wp-content/uploads/2019/11/O1CN01Ziuj8F1ySlsFWXvny_27360165.jpg',
  title: 'Kệ Tivi phòng khách',
  moneyOld: 6000000,
  moneyNew: 5000000
}, {
  image: 'https://noithatihouse.com/wp-content/uploads/2019/11/O1CN01Ziuj8F1ySlsFWXvny_27360165.jpg',
  title: 'Bàn ăn 6 ghế - BA001',
  moneyOld: 4000000,
  moneyNew: 3000000
}, {
  image: 'https://www.nhadepkientruc.net/wp-content/uploads/2014/06/tu-quan-ao-go-dep-01.jpg',
  title: 'Bàn ăn gỗ nhập khẩu - BA002',
  moneyOld: 3500000,
  moneyNew: 3000000
}, {
  image: 'https://www.nhadepkientruc.net/wp-content/uploads/2014/06/tu-quan-ao-go-dep-01.jpg',
  title: 'Tủ quần áo đẹp- TQA099',
  moneyOld: 4000000,
  moneyNew: 3500000
}, {
  image: 'https://dienmaycholon.vn/public/userupload/images/ke%20tivi%20go%20cao%20cap.png',
  title: 'Kệ Tivi phòng khách',
  moneyOld: 6000000,
  moneyNew: 5000000
}, {
  image: 'https://noithatthaibinh.com/wp-content/uploads/2018/10/giuong-ngu-go-go-do-9656.jpg',
  title: 'Giường ngủ cổ điển - GNCD01',
  moneyOld: 6000000,
  moneyNew: 5500000
}, {
  image: 'https://noithatthaibinh.com/wp-content/uploads/2018/10/giuong-ngu-go-go-do-9656.jpg',
  title: 'Giường ngủ thời trang - G003',
  moneyOld: 4500000,
  moneyNew: 3500000
}, {
  image: 'https://noithatthaibinh.com/wp-content/uploads/2018/10/giuong-ngu-go-go-do-9656.jpg',
  title: 'Giường ngủ cổ điển - GNCD01',
  moneyOld: 6000000,
  moneyNew: 5500000
}, {
  image: 'https://noithatthaibinh.com/wp-content/uploads/2018/10/giuong-ngu-go-go-do-9656.jpg',
  title: 'Giường ngủ thời trang - G003',
  moneyOld: 4500000,
  moneyNew: 3500000
}, {
  image: 'https://www.nhadepkientruc.net/wp-content/uploads/2014/06/tu-quan-ao-go-dep-01.jpg',
  title: 'Tủ quần áo đẹp- TQA099',
  moneyOld: 4000000,
  moneyNew: 3500000
}, {
  image: 'https://dienmaycholon.vn/public/userupload/images/ke%20tivi%20go%20cao%20cap.png',
  title: 'Kệ Tivi phòng khách',
  moneyOld: 6000000,
  moneyNew: 5000000
}];


/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-ga */ "next-ga");
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_ga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./constants/index.jsx");
/* harmony import */ var _components_ThemeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ThemeContext */ "./components/ThemeContext/index.jsx");
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





 // @ts-ignore





const projectDetailPathname = '/chi-tiet-du-an.aspx';
const newLandDetailPathname = '/newland/project_detail.aspx';
const newLandAdSellLeasePathname = '/newland/properties_detail.aspx';
const adSellLeaseDetailPathname = '/chi-tiet-tin-rao.aspx';
const projectDetailNew = '/du-an/';
const adSellLeaseDetailNew = '/tin-rao/';
const projectCategory = '/du-an.aspx';
const adSellLeaseCategory = '/tin-rao.aspx';

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  static async getInitialProps({
    Component,
    ctx,
    res
  }) {
    if (ctx.asPath) {
      let urlObject = url__WEBPACK_IMPORTED_MODULE_1___default.a.parse(ctx.asPath);
      let pathName = urlObject.pathname;
      let queryString = urlObject.query;

      if (pathName === '/nha-dat-ban/') {
        let urlRedirect = '/nha-dat-ban';
        ctx.res.writeHead(301, {
          Location: `${urlRedirect}`
        });
        ctx.res.end();
      }

      if (pathName === '/tin-rao/') {
        let urlRedirect = '/tim-tin-rao';
        ctx.res.writeHead(301, {
          Location: `${urlRedirect}`
        });
        ctx.res.end();
      }

      if (pathName === '/du-an' || pathName === '/du-an/' || pathName === '/du-an-bat-dong-san/') {
        let urlRedirect = '/du-an-bat-dong-san';
        ctx.res.writeHead(301, {
          Location: `${urlRedirect}`
        });
        ctx.res.end();
      }

      if (queryString && (pathName === projectDetailPathname || pathName === newLandDetailPathname)) {
        let urlRedirect = '/';

        if (queryString.indexOf('project_id=') === -1) {
          queryString = queryString.replace('.html', '');
          urlRedirect = projectDetailNew + queryString;
        }

        ctx.res.writeHead(301, {
          Location: `${urlRedirect}`
        });
        ctx.res.end();
      }

      if (queryString && (pathName === adSellLeaseDetailPathname || pathName === newLandAdSellLeasePathname)) {
        let urlRedirect = '/';

        if (queryString.indexOf('ad_sell_lease_id=') === -1) {
          queryString = queryString.replace('.html', '');
          urlRedirect = adSellLeaseDetailNew + queryString;
        }

        ctx.res.writeHead(301, {
          Location: `${urlRedirect}`
        });
        ctx.res.end();
      }

      if (pathName === projectCategory) {
        let urlRedirect = '/du-an';
        ctx.res.writeHead(301, {
          Location: `${urlRedirect}`
        });
        ctx.res.end();
      }

      if (pathName === adSellLeaseCategory) {
        let urlRedirect = '/tim-tin-rao';
        ctx.res.writeHead(301, {
          Location: `${urlRedirect}`
        });
        ctx.res.end();
      }
    }

    let pageProps = {
      statusCode: 200
    };

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    let {
      user
    } = next_cookies__WEBPACK_IMPORTED_MODULE_3___default()(ctx);
    pageProps = Object.assign(pageProps, {
      user: user
    });
    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(_components_ThemeContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
      value: {
        color: _constants__WEBPACK_IMPORTED_MODULE_6__["color"]
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_ga__WEBPACK_IMPORTED_MODULE_5___default()(_constants__WEBPACK_IMPORTED_MODULE_6__["googleAnalyticsCode"], next_router__WEBPACK_IMPORTED_MODULE_4___default.a)(MyApp));

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next-ga":
/*!**************************!*\
  !*** external "next-ga" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-ga");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGhlbWVDb250ZXh0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiVGhlbWVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwibWFpblVSTCIsInVwZ3JhZGVQbGFuVVJMIiwidXBncmFkZUljb25VUkwiLCJsb2dvVVJMIiwiYXBpQmFzZVVSTCIsImdvb2dsZUxvZ2luIiwiZmFjZWJvb2tMb2dpbiIsInphbG9Mb2dpbiIsImFwaUdyYXBoUUxVUkwiLCJ1cmxJbWFnZUFkU2VsbExlYXNlIiwidXJsSW1hZ2VQcm9qZWN0IiwidXJsSW1hZ2VCcm9rZXIiLCJpbWFnZURlZmF1bHRQcm9qZWN0IiwiaW1hZ2VEZWZhdWx0U2xpZGVyIiwiaW1hZ2VEZWZhdWx0QnJva2VyIiwiZ29vZ2xlQW5hbHl0aWNzQ29kZSIsImdvb2dsZVNlYXJjaENvbnNvbGUiLCJsb2NhbFN0b3JhZ2VDb21wYXJlS2V5IiwibG9jYWxTdG9yYWdlVmlld2VkIiwibG9jYWxTdG9yYWdlUHJvamVjdFZpZXdlZCIsImFkU2VsbExlYXNlQ2F0ZWdvcnkiLCJpZCIsInNsdWciLCJuYW1lIiwicGFyZW50X3NsdWciLCJ0eXBlMV9zbHVnIiwiY29sb3IiLCJiYXNlQ29sb3IiLCJiYXNlQmFja2dyb3VuZENvbG9yIiwiYmFzZUxpZ2h0Q29sb3IiLCJiYXNlTGlnaHRCYWNrZ3JvdW5kQ29sb3IiLCJiYXNlQm9sZENvbG9yIiwiYmFzZVRpdGxlQ29sb3IiLCJiYXNlVGl0bGVMaWdodENvbG9yIiwidGl0bGVzIiwidGl0bGUiLCJlbGVtZW50cyIsImVsZW1lbnQiLCJpbWFnZSIsImxpc3RNZW51Iiwicm9vbXMiLCJyb29tIiwicHJvZHVjdHMiLCJtb25leU9sZCIsIm1vbmV5TmV3IiwicGFnZVByb3BzIiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwicHJvamVjdERldGFpbFBhdGhuYW1lIiwibmV3TGFuZERldGFpbFBhdGhuYW1lIiwibmV3TGFuZEFkU2VsbExlYXNlUGF0aG5hbWUiLCJhZFNlbGxMZWFzZURldGFpbFBhdGhuYW1lIiwicHJvamVjdERldGFpbE5ldyIsImFkU2VsbExlYXNlRGV0YWlsTmV3IiwicHJvamVjdENhdGVnb3J5IiwiTXlBcHAiLCJjdHgiLCJyZXMiLCJhc1BhdGgiLCJ1cmxPYmplY3QiLCJVcmwiLCJwYXJzZSIsInBhdGhOYW1lIiwicGF0aG5hbWUiLCJxdWVyeVN0cmluZyIsInF1ZXJ5IiwidXJsUmVkaXJlY3QiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsImluZGV4T2YiLCJzdGF0dXNDb2RlIiwidXNlciIsIm5leHRDb29raWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9wcyIsIndpdGhHQSIsIlJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLCtEOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MsNENBQUssQ0FBQ0MsYUFBTixFQUFyQjtBQUVlRiwyRUFBZixFOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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VixXQUFHLENBQUNDLEdBQUosQ0FBUVksR0FBUjtBQUNEO0FBQ0Y7O0FBRUQsUUFBSS9DLFNBQVMsR0FBRztBQUNkaUQsZ0JBQVUsRUFBRTtBQURFLEtBQWhCOztBQUdBLFFBQUloRCxTQUFTLENBQUNTLGVBQWQsRUFBK0I7QUFDN0JWLGVBQVMsR0FBRyxNQUFNQyxTQUFTLENBQUNTLGVBQVYsQ0FBMEJ3QixHQUExQixDQUFsQjtBQUNEOztBQUNELFFBQUk7QUFBRWdCO0FBQUYsUUFBV0MsbURBQVUsQ0FBQ2pCLEdBQUQsQ0FBekI7QUFDQWxDLGFBQVMsR0FBR29ELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjckQsU0FBZCxFQUF5QjtBQUFFa0QsVUFBSSxFQUFFQTtBQUFSLEtBQXpCLENBQVo7QUFDQSxXQUFPO0FBQUVsRDtBQUFGLEtBQVA7QUFDRDs7QUFFREcsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFRixlQUFGO0FBQWFEO0FBQWIsUUFBMkIsS0FBS3NELEtBQXRDO0FBQ0EsV0FDRSxNQUFDLGdFQUFELENBQWMsUUFBZDtBQUF1QixXQUFLLEVBQUU7QUFBRXpFLGFBQUssRUFBRUEsZ0RBQUtBO0FBQWQsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsU0FBRCxlQUFlbUIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREYsQ0FERjtBQUtEOztBQTNGcUI7O0FBOEZUdUQsNkdBQU0sQ0FBQ3JGLDhEQUFELEVBQXNCc0Ysa0RBQXRCLENBQU4sQ0FBb0N2QixLQUFwQyxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhBLHlDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGhlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWVDb250ZXh0OyIsImNvbnN0IG1haW5VUkwgPSBcImh0dHBzOi8vbmhhZGF0bW9pLm5ldFwiO1xyXG5jb25zdCB1cGdyYWRlUGxhblVSTCA9IFwiaHR0cHM6Ly9uaGFkYXRtb2kubmV0XCI7XHJcblxyXG5jb25zdCB1cGdyYWRlSWNvblVSTCA9IFwiaHR0cHM6Ly9yZWFjdC1tYXRlcmlhbC1kYXNoYm9hcmQuZGV2aWFzLmlvL2ltYWdlcy91bmRyYXdfcmVzdW1lX2ZvbGRlcl8yX2Fyc2Uuc3ZnXCI7XHJcbmNvbnN0IGxvZ29VUkwgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9uaGFkYXRtb2kuc3ZnXCI7XHJcblxyXG5jb25zdCBhcGlCYXNlVVJMID0gXCJodHRwczovL2dyYXBoLm5oYWRhdG1vaS5uZXRcIjtcclxuY29uc3QgZ29vZ2xlTG9naW4gPSBgJHthcGlCYXNlVVJMfS9hdXRoL2dvb2dsZWA7XHJcbmNvbnN0IGZhY2Vib29rTG9naW4gPSBgJHthcGlCYXNlVVJMfS9hdXRoL2ZhY2Vib29rYDtcclxuY29uc3QgemFsb0xvZ2luID0gYCR7YXBpQmFzZVVSTH0vYXV0aC96YWxvYDtcclxuY29uc3QgYXBpR3JhcGhRTFVSTCA9IGAke2FwaUJhc2VVUkx9L2dyYXBocWxgO1xyXG5cclxuY29uc3QgdXJsSW1hZ2VBZFNlbGxMZWFzZSA9IFwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kYXRhL2FkX3NlbGxfbGVhc2VfaW1hZ2UvXCI7XHJcbmNvbnN0IHVybEltYWdlUHJvamVjdCA9IFwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kYXRhL3Byb2plY3RfaW1hZ2UvXCI7XHJcbmNvbnN0IHVybEltYWdlQnJva2VyID0gXCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RhdGEvYnJva2VyX2ltYWdlL1wiO1xyXG5cclxuY29uc3QgaW1hZ2VEZWZhdWx0UHJvamVjdCA9IFwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L2hvbWVfZGVmYXVsdC5qcGdcIjtcclxuY29uc3QgaW1hZ2VEZWZhdWx0U2xpZGVyID0gXCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvbmhhZGF0bW9pLWRlZmF1bHQuc3ZnXCI7XHJcbmNvbnN0IGltYWdlRGVmYXVsdEJyb2tlciA9IFwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L3VzZXIucG5nXCI7XHJcbmNvbnN0IGdvb2dsZUFuYWx5dGljc0NvZGUgPSAnVUEtNjA3Njc5OTgtOCc7XHJcbmNvbnN0IGdvb2dsZVNlYXJjaENvbnNvbGUgPSAnY3lNa1RuZEhkRTk1Y0ZndjdINV9vdHVEeS1YNk43cWRYRXVOT1BpSjBHUSc7XHJcbmNvbnN0IGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkgPSAnbmRtX2NvbXBhcmUnO1xyXG5jb25zdCBsb2NhbFN0b3JhZ2VWaWV3ZWQgPSAnbmRtX2FzbF92aWV3ZWQnO1xyXG5jb25zdCBsb2NhbFN0b3JhZ2VQcm9qZWN0Vmlld2VkID0gJ25kbV9wcm9qZWN0X3ZpZXdlZCc7XHJcblxyXG5jb25zdCBhZFNlbGxMZWFzZUNhdGVnb3J5ID0gW1xyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWI5JyxcclxuICAgIHNsdWc6ICcvY2hvLXRodWUtY2FjLWxvYWktYmF0LWRvbmctc2FuLWtoYWMnLFxyXG4gICAgbmFtZTogJ0NobyB0aHXDqiBjw6FjIGxv4bqhaSBi4bqldCDEkeG7mW5nIHPhuqNuIGtow6FjJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC10aHVlJ1xyXG4gIH1cclxuXTtcclxuXHJcbmNvbnN0IGNvbG9yID0ge1xyXG4gIGJhc2VDb2xvcjogJyMxOTc2ZDInLFxyXG4gIGJhc2VCYWNrZ3JvdW5kQ29sb3I6ICcjRDlFREZFJyxcclxuICBiYXNlTGlnaHRDb2xvcjogJyNhM2QyZmEnLFxyXG4gIGJhc2VMaWdodEJhY2tncm91bmRDb2xvcjogJyNmNWZjZmYnLFxyXG4gIGJhc2VCb2xkQ29sb3I6ICcjMDQ1RUE4JyxcclxuICBiYXNlVGl0bGVDb2xvcjogJyM0NDQnLFxyXG4gIGJhc2VUaXRsZUxpZ2h0Q29sb3I6ICcjYWFhJyxcclxufTtcclxuXHJcbmNvbnN0IHRpdGxlcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pycsXHJcbiAgICBlbGVtZW50czogW1xyXG4gICAgICB7IGVsZW1lbnQ6ICdHacaw4budbmcgbmfhu6cgdOG7sSBuaGnDqm4nLCBpbWFnZTogJ2h0dHBzOi8vbXVuZGVjb3Iudm4vdXBsb2Fkcy9zYW5waGFtL2dpdW9uZ25ndWdvdHVuaGllbi9naXVvbmctbmd1LWdvLXR1LW5oaWVuLWRlcC1HTjAzNC5qcGVnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdHacaw4budbmcgbmfhu6cgY8O0bmcgbmdoaeG7h3AnLCBpbWFnZTogJ2h0dHBzOi8vbXVuZGVjb3Iudm4vdXBsb2Fkcy9zYW5waGFtL2dpdW9uZ25ndWdvdHVuaGllbi9naXVvbmctbmd1LWdvLXR1LW5oaWVuLWRlcC1HTjAzNC5qcGVnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdHacaw4budbmcgbmfhu6cgaGnhu4duIMSR4bqhaScsIGltYWdlOiAnaHR0cHM6Ly9tdW5kZWNvci52bi91cGxvYWRzL3NhbnBoYW0vZ2l1b25nbmd1Z290dW5oaWVuL2dpdW9uZy1uZ3UtZ28tdHUtbmhpZW4tZGVwLUdOMDM0LmpwZWcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0dpxrDhu51uZyBuZ+G7pyBj4buVIMSRaeG7g24nLCBpbWFnZTogJ2h0dHBzOi8vbXVuZGVjb3Iudm4vdXBsb2Fkcy9zYW5waGFtL2dpdW9uZ25ndWdvdHVuaGllbi9naXVvbmctbmd1LWdvLXR1LW5oaWVuLWRlcC1HTjAzNC5qcGVnJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdCw6BuIMSDbicsXHJcbiAgICBlbGVtZW50czogW1xyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiB04buxIG5oacOqbicsIGltYWdlOiAnaHR0cHM6Ly9kb2dvbm9pdGhhdHZpZXQuY29tL3VwbG9hZC9zYW5waGFtL2xhcmdlL2JvLWJhbi1hbi1nby10dS1uaGllbi1jYW0teGUtbWF0LWdvLWNvLWRpZW4tMW04LTgtZ2hlLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gw6lwIGNhbyBj4bqlcCcsIGltYWdlOiAnaHR0cHM6Ly9kb2dvbm9pdGhhdHZpZXQuY29tL3VwbG9hZC9zYW5waGFtL2xhcmdlL2JvLWJhbi1hbi1nby10dS1uaGllbi1jYW0teGUtbWF0LWdvLWNvLWRpZW4tMW04LTgtZ2hlLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gbmjDoCBow6BuZycsIGltYWdlOiAnaHR0cHM6Ly9kb2dvbm9pdGhhdHZpZXQuY29tL3VwbG9hZC9zYW5waGFtL2xhcmdlL2JvLWJhbi1hbi1nby10dS1uaGllbi1jYW0teGUtbWF0LWdvLWNvLWRpZW4tMW04LTgtZ2hlLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNCBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9kb2dvbm9pdGhhdHZpZXQuY29tL3VwbG9hZC9zYW5waGFtL2xhcmdlL2JvLWJhbi1hbi1nby10dS1uaGllbi1jYW0teGUtbWF0LWdvLWNvLWRpZW4tMW04LTgtZ2hlLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNiBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9kb2dvbm9pdGhhdHZpZXQuY29tL3VwbG9hZC9zYW5waGFtL2xhcmdlL2JvLWJhbi1hbi1nby10dS1uaGllbi1jYW0teGUtbWF0LWdvLWNvLWRpZW4tMW04LTgtZ2hlLmpwZycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQsOgbiBwaMOybmcga2jDoWNoJyxcclxuICAgIGVsZW1lbnRzOiBbXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIHThu7Egbmhpw6puJywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRkdW9uZ2RhaS52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9iYW4tZ2hlLXBob25nLWtoYWNoLWdvLW9jLWNoby5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIMOpcCBjYW8gY+G6pXAnLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGR1b25nZGFpLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2Jhbi1naGUtcGhvbmcta2hhY2gtZ28tb2MtY2hvLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gbmjDoCBow6BuZycsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0ZHVvbmdkYWkudm4vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvYmFuLWdoZS1waG9uZy1raGFjaC1nby1vYy1jaG8uanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA0IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRkdW9uZ2RhaS52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9iYW4tZ2hlLXBob25nLWtoYWNoLWdvLW9jLWNoby5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDYgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGR1b25nZGFpLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2Jhbi1naGUtcGhvbmcta2hhY2gtZ28tb2MtY2hvLmpwZycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnS+G7hyB0aXZpJyxcclxuICAgIGVsZW1lbnRzOiBbXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIHThu7Egbmhpw6puJywgaW1hZ2U6ICdodHRwczovL2dvY2h1YW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA5LzMyNjg0MWYzN2M3NTlkMmJjNDY0LmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gw6lwIGNhbyBj4bqlcCcsIGltYWdlOiAnaHR0cHM6Ly9nb2NodWFuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8zMjY4NDFmMzdjNzU5ZDJiYzQ2NC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIG5ow6AgaMOgbmcnLCBpbWFnZTogJ2h0dHBzOi8vZ29jaHVhbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDkvMzI2ODQxZjM3Yzc1OWQyYmM0NjQuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA0IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL2dvY2h1YW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA5LzMyNjg0MWYzN2M3NTlkMmJjNDY0LmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNiBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9nb2NodWFuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8zMjY4NDFmMzdjNzU5ZDJiYzQ2NC5qcGcnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1Thu6cgcXXhuqduIMOhbycsXHJcbiAgICBlbGVtZW50czogW1xyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiB04buxIG5oacOqbicsIGltYWdlOiAnaHR0cHM6Ly9kb2dvbGVnaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAzL01hdS10dS1xdWFuLWFvLWRlcC1MRy1UUUEwMzAuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiDDqXAgY2FvIGPhuqVwJywgaW1hZ2U6ICdodHRwczovL2RvZ29sZWdpYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDMvTWF1LXR1LXF1YW4tYW8tZGVwLUxHLVRRQTAzMC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIG5ow6AgaMOgbmcnLCBpbWFnZTogJ2h0dHBzOi8vZG9nb2xlZ2lhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMy9NYXUtdHUtcXVhbi1hby1kZXAtTEctVFFBMDMwLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNCBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9kb2dvbGVnaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAzL01hdS10dS1xdWFuLWFvLWRlcC1MRy1UUUEwMzAuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA2IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL2RvZ29sZWdpYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDMvTWF1LXR1LXF1YW4tYW8tZGVwLUxHLVRRQTAzMC5qcGcnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0LDoG4gdHJhbmcgxJFp4buDbScsXHJcbiAgICBlbGVtZW50czogW1xyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiB04buxIG5oacOqbicsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0bHVvbmdzb24udm4vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYmFuLXRyYW5nLWRpZW0tNjAtMS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIMOpcCBjYW8gY+G6pXAnLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGx1b25nc29uLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jhbi10cmFuZy1kaWVtLTYwLTEuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiBuaMOgIGjDoG5nJywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRsdW9uZ3Nvbi52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9iYW4tdHJhbmctZGllbS02MC0xLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNCBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0bHVvbmdzb24udm4vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYmFuLXRyYW5nLWRpZW0tNjAtMS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDYgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGx1b25nc29uLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jhbi10cmFuZy1kaWVtLTYwLTEuanBnJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdU4bunIGdpw6B5JyxcclxuICAgIGVsZW1lbnRzOiBbXHJcbiAgICAgIHsgZWxlbWVudDogJ1Thu6cgZ2nDoHkgdOG7sSBuaGnDqm4nLCBpbWFnZTogJ2h0dHBzOi8vZmlsZS5oc3RhdGljLm5ldC8xMDAwMjk0MTQ2L2ZpbGUvM19ncmFuZGUuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdU4bunIGdpw6B5IMOpcCBjYW8gY+G6pXAnLCBpbWFnZTogJ2h0dHBzOi8vZmlsZS5oc3RhdGljLm5ldC8xMDAwMjk0MTQ2L2ZpbGUvM19ncmFuZGUuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdU4bunIGdpw6B5IG5ow6AgaMOgbmcnLCBpbWFnZTogJ2h0dHBzOi8vZmlsZS5oc3RhdGljLm5ldC8xMDAwMjk0MTQ2L2ZpbGUvM19ncmFuZGUuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA0IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL2ZpbGUuaHN0YXRpYy5uZXQvMTAwMDI5NDE0Ni9maWxlLzNfZ3JhbmRlLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNiBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9maWxlLmhzdGF0aWMubmV0LzEwMDAyOTQxNDYvZmlsZS8zX2dyYW5kZS5qcGcnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGxpc3RNZW51ID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnTuG7mWkgVGjhuqV0IFBow7JuZyBOZ+G7pycsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcXXhuqduIMOhbycgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnTuG7mWkgVGjhuqV0IFBow7JuZyBLaMOhY2gnLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBn4buXJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIEdpw6B5IETDqXAnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0vhu4cgVGl2aScgfSxcclxuICAgICAgeyByb29tOiAnS+G7hyDEkeG7gyBnacOgeScgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyByxrDhu6N1JyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdO4buZaSBUaOG6pXQgTmjDoCBC4bq/cCcsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdU4bunIGLhur9wJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIGLDoG4gxINuJyB9LFxyXG4gICAgICB7IHJvb206ICdHaOG6vyBwaMOybmcgxINuJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnTuG7mWkgVGjhuqV0IFBow7JuZyBUaOG7nScsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdCw6BuIFRo4budJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIFRo4budJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIFRo4budIFRo4bqnbiBUw6BpJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIFRo4budIFRyZW8gVMaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Phuq1wIFRo4budJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdO4buZaSBUaOG6pXQgVsSDbiBQaMOybmcnLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ8SQ4buTIEfhu5cgTeG7uSBOZ2jhu4cnLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1PhuqNuIFBo4bqpbSBLaHV54bq/biBN4bqhaScsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcXXhuqduIMOhbycgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnU+G6o24gUGjhuqltIMSQw6MgWGVtJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICfEkMahbiBow6BuZyDEkcOjIMSR4bq3dCcsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcXXhuqduIMOhbycgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnU+G6o24gcGjhuqltIGLDoW4gY2jhuqF5JyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdT4bqjbiBwaOG6qW0gbeG7m2knLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHByb2R1Y3RzID0gW1xyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly93d3cubmhhZGVwa2llbnRydWMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA2L3R1LXF1YW4tYW8tZ28tZGVwLTAxLmpwZycsXHJcbiAgICB0aXRsZTogJ1Thu6cgcXXhuqduIMOhbyDEkeG6uXAtIFRRQTA5OScsXHJcbiAgICBtb25leU9sZDogNTAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiA0NTAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL2RpZW5tYXljaG9sb24udm4vcHVibGljL3VzZXJ1cGxvYWQvaW1hZ2VzL2tlJTIwdGl2aSUyMGdvJTIwY2FvJTIwY2FwLnBuZycsXHJcbiAgICB0aXRsZTogJ0vhu4cgVGl2aSBwaMOybmcga2jDoWNoJyxcclxuICAgIG1vbmV5T2xkOiA2MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDUwMDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vZGllbm1heWNob2xvbi52bi9wdWJsaWMvdXNlcnVwbG9hZC9pbWFnZXMva2UlMjB0aXZpJTIwZ28lMjBjYW8lMjBjYXAucG5nJyxcclxuICAgIHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIGfhu5cgdOG7sSBuaGnDqm4gLSBHTkNEMDEnLFxyXG4gICAgbW9uZXlPbGQ6IDMwMDAwMDAsXHJcbiAgICBtb25leU5ldzogMjAwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0dGhhaWJpbmguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2dpdW9uZy1uZ3UtZ28tZ28tZG8tOTY1Ni5qcGcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgdGjhu51pIHRyYW5nIC0gRzAwMycsXHJcbiAgICBtb25leU9sZDogNDUwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAzNTAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL3Bob2dvdmlwLnZuL3VwbG9hZHMvbmV3cy8yMDE3XzEyL2dpdW9uZy1uZ3UtZ28tdHUtbmhpZW4tNC1jb3B5LmpwZycsXHJcbiAgICB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyBoaeG7h24gxJHhuqFpIC0gR04wMDMnLFxyXG4gICAgbW9uZXlPbGQ6IDQwMDAwMDAsXHJcbiAgICBtb25leU5ldzogMzUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0aWhvdXNlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMS9PMUNOMDFaaXVqOEYxeVNsc0ZXWHZueV8yNzM2MDE2NS5qcGcnLFxyXG4gICAgdGl0bGU6ICdL4buHIFRpdmkgcGjDsm5nIGtow6FjaCcsXHJcbiAgICBtb25leU9sZDogNjAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiA1MDAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL25vaXRoYXRpaG91c2UuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzExL08xQ04wMVppdWo4RjF5U2xzRldYdm55XzI3MzYwMTY1LmpwZycsXHJcbiAgICB0aXRsZTogJ0LDoG4gxINuIDYgZ2jhur8gLSBCQTAwMScsXHJcbiAgICBtb25leU9sZDogNDAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAzMDAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL3d3dy5uaGFkZXBraWVudHJ1Yy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDYvdHUtcXVhbi1hby1nby1kZXAtMDEuanBnJyxcclxuICAgIHRpdGxlOiAnQsOgbiDEg24gZ+G7lyBuaOG6rXAga2jhuql1IC0gQkEwMDInLFxyXG4gICAgbW9uZXlPbGQ6IDM1MDAwMDAsXHJcbiAgICBtb25leU5ldzogMzAwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly93d3cubmhhZGVwa2llbnRydWMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA2L3R1LXF1YW4tYW8tZ28tZGVwLTAxLmpwZycsXHJcbiAgICB0aXRsZTogJ1Thu6cgcXXhuqduIMOhbyDEkeG6uXAtIFRRQTA5OScsXHJcbiAgICBtb25leU9sZDogNDAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAzNTAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL2RpZW5tYXljaG9sb24udm4vcHVibGljL3VzZXJ1cGxvYWQvaW1hZ2VzL2tlJTIwdGl2aSUyMGdvJTIwY2FvJTIwY2FwLnBuZycsXHJcbiAgICB0aXRsZTogJ0vhu4cgVGl2aSBwaMOybmcga2jDoWNoJyxcclxuICAgIG1vbmV5T2xkOiA2MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDUwMDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdHRoYWliaW5oLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9naXVvbmctbmd1LWdvLWdvLWRvLTk2NTYuanBnJyxcclxuICAgIHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIGPhu5UgxJFp4buDbiAtIEdOQ0QwMScsXHJcbiAgICBtb25leU9sZDogNjAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiA1NTAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL25vaXRoYXR0aGFpYmluaC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvZ2l1b25nLW5ndS1nby1nby1kby05NjU2LmpwZycsXHJcbiAgICB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyB0aOG7nWkgdHJhbmcgLSBHMDAzJyxcclxuICAgIG1vbmV5T2xkOiA0NTAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDM1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdHRoYWliaW5oLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9naXVvbmctbmd1LWdvLWdvLWRvLTk2NTYuanBnJyxcclxuICAgIHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIGPhu5UgxJFp4buDbiAtIEdOQ0QwMScsXHJcbiAgICBtb25leU9sZDogNjAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiA1NTAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL25vaXRoYXR0aGFpYmluaC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvZ2l1b25nLW5ndS1nby1nby1kby05NjU2LmpwZycsXHJcbiAgICB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyB0aOG7nWkgdHJhbmcgLSBHMDAzJyxcclxuICAgIG1vbmV5T2xkOiA0NTAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDM1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vd3d3Lm5oYWRlcGtpZW50cnVjLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi90dS1xdWFuLWFvLWdvLWRlcC0wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICdU4bunIHF14bqnbiDDoW8gxJHhurlwLSBUUUEwOTknLFxyXG4gICAgbW9uZXlPbGQ6IDQwMDAwMDAsXHJcbiAgICBtb25leU5ldzogMzUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9kaWVubWF5Y2hvbG9uLnZuL3B1YmxpYy91c2VydXBsb2FkL2ltYWdlcy9rZSUyMHRpdmklMjBnbyUyMGNhbyUyMGNhcC5wbmcnLFxyXG4gICAgdGl0bGU6ICdL4buHIFRpdmkgcGjDsm5nIGtow6FjaCcsXHJcbiAgICBtb25leU9sZDogNjAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiA1MDAwMDAwLFxyXG4gIH0sXHJcbl07XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICBtYWluVVJMLFxyXG4gIHVwZ3JhZGVQbGFuVVJMLFxyXG4gIHVwZ3JhZGVJY29uVVJMLFxyXG4gIGxvZ29VUkwsXHJcbiAgYXBpQmFzZVVSTCxcclxuICBhcGlHcmFwaFFMVVJMLFxyXG4gIGdvb2dsZUxvZ2luLFxyXG4gIHphbG9Mb2dpbixcclxuICBmYWNlYm9va0xvZ2luLFxyXG4gIHVybEltYWdlQWRTZWxsTGVhc2UsXHJcbiAgdXJsSW1hZ2VCcm9rZXIsXHJcbiAgdXJsSW1hZ2VQcm9qZWN0LFxyXG4gIGltYWdlRGVmYXVsdEJyb2tlcixcclxuICBpbWFnZURlZmF1bHRQcm9qZWN0LFxyXG4gIGltYWdlRGVmYXVsdFNsaWRlcixcclxuICBnb29nbGVBbmFseXRpY3NDb2RlLFxyXG4gIGdvb2dsZVNlYXJjaENvbnNvbGUsXHJcbiAgbG9jYWxTdG9yYWdlQ29tcGFyZUtleSxcclxuICBsb2NhbFN0b3JhZ2VWaWV3ZWQsXHJcbiAgbG9jYWxTdG9yYWdlUHJvamVjdFZpZXdlZCxcclxuICBhZFNlbGxMZWFzZUNhdGVnb3J5LFxyXG4gIGNvbG9yLFxyXG4gIHRpdGxlcyxcclxuICBsaXN0TWVudSxcclxuICBwcm9kdWN0cyxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBuZXh0Q29va2llIGZyb20gXCJuZXh0LWNvb2tpZXNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgd2l0aEdBIGZyb20gXCJuZXh0LWdhXCI7XHJcbmltcG9ydCB7IGdvb2dsZUFuYWx5dGljc0NvZGUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5jb25zdCBwcm9qZWN0RGV0YWlsUGF0aG5hbWUgPSAnL2NoaS10aWV0LWR1LWFuLmFzcHgnO1xyXG5jb25zdCBuZXdMYW5kRGV0YWlsUGF0aG5hbWUgPSAnL25ld2xhbmQvcHJvamVjdF9kZXRhaWwuYXNweCc7XHJcbmNvbnN0IG5ld0xhbmRBZFNlbGxMZWFzZVBhdGhuYW1lID0gJy9uZXdsYW5kL3Byb3BlcnRpZXNfZGV0YWlsLmFzcHgnO1xyXG5jb25zdCBhZFNlbGxMZWFzZURldGFpbFBhdGhuYW1lID0gJy9jaGktdGlldC10aW4tcmFvLmFzcHgnO1xyXG5jb25zdCBwcm9qZWN0RGV0YWlsTmV3ID0gJy9kdS1hbi8nO1xyXG5jb25zdCBhZFNlbGxMZWFzZURldGFpbE5ldyA9ICcvdGluLXJhby8nO1xyXG5jb25zdCBwcm9qZWN0Q2F0ZWdvcnkgPSAnL2R1LWFuLmFzcHgnO1xyXG5jb25zdCBhZFNlbGxMZWFzZUNhdGVnb3J5ID0gJy90aW4tcmFvLmFzcHgnO1xyXG5cclxuXHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHgsIHJlcyB9OiBhbnkpIHtcclxuICAgIGlmIChjdHguYXNQYXRoKSB7XHJcbiAgICAgIGxldCB1cmxPYmplY3QgPSBVcmwucGFyc2UoY3R4LmFzUGF0aCk7XHJcblxyXG4gICAgICBsZXQgcGF0aE5hbWUgPSB1cmxPYmplY3QucGF0aG5hbWU7XHJcbiAgICAgIGxldCBxdWVyeVN0cmluZyA9IHVybE9iamVjdC5xdWVyeTtcclxuICAgICAgaWYgKHBhdGhOYW1lID09PSAnL25oYS1kYXQtYmFuLycpIHtcclxuICAgICAgICBsZXQgdXJsUmVkaXJlY3QgPSAnL25oYS1kYXQtYmFuJztcclxuICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDEsIHtcclxuICAgICAgICAgIExvY2F0aW9uOiBgJHt1cmxSZWRpcmVjdH1gXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3R4LnJlcy5lbmQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBhdGhOYW1lID09PSAnL3Rpbi1yYW8vJykge1xyXG4gICAgICAgIGxldCB1cmxSZWRpcmVjdCA9ICcvdGltLXRpbi1yYW8nO1xyXG4gICAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMSwge1xyXG4gICAgICAgICAgTG9jYXRpb246IGAke3VybFJlZGlyZWN0fWBcclxuICAgICAgICB9KTtcclxuICAgICAgICBjdHgucmVzLmVuZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGF0aE5hbWUgPT09ICcvZHUtYW4nIHx8IHBhdGhOYW1lID09PSAnL2R1LWFuLycgfHwgcGF0aE5hbWUgPT09ICcvZHUtYW4tYmF0LWRvbmctc2FuLycpIHtcclxuICAgICAgICBsZXQgdXJsUmVkaXJlY3QgPSAnL2R1LWFuLWJhdC1kb25nLXNhbic7XHJcbiAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAxLCB7XHJcbiAgICAgICAgICBMb2NhdGlvbjogYCR7dXJsUmVkaXJlY3R9YFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGN0eC5yZXMuZW5kKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChxdWVyeVN0cmluZyAmJiAocGF0aE5hbWUgPT09IHByb2plY3REZXRhaWxQYXRobmFtZSB8fCBwYXRoTmFtZSA9PT0gbmV3TGFuZERldGFpbFBhdGhuYW1lKSkge1xyXG4gICAgICAgIGxldCB1cmxSZWRpcmVjdCA9ICcvJztcclxuICAgICAgICBpZiAocXVlcnlTdHJpbmcuaW5kZXhPZigncHJvamVjdF9pZD0nKSA9PT0gLTEpIHtcclxuICAgICAgICAgIHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcucmVwbGFjZSgnLmh0bWwnLCAnJyk7XHJcbiAgICAgICAgICB1cmxSZWRpcmVjdCA9IHByb2plY3REZXRhaWxOZXcgKyBxdWVyeVN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMSwge1xyXG4gICAgICAgICAgTG9jYXRpb246IGAke3VybFJlZGlyZWN0fWBcclxuICAgICAgICB9KTtcclxuICAgICAgICBjdHgucmVzLmVuZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChxdWVyeVN0cmluZyAmJiAocGF0aE5hbWUgPT09IGFkU2VsbExlYXNlRGV0YWlsUGF0aG5hbWUgfHwgcGF0aE5hbWUgPT09IG5ld0xhbmRBZFNlbGxMZWFzZVBhdGhuYW1lKSkge1xyXG4gICAgICAgIGxldCB1cmxSZWRpcmVjdCA9ICcvJztcclxuXHJcbiAgICAgICAgaWYgKHF1ZXJ5U3RyaW5nLmluZGV4T2YoJ2FkX3NlbGxfbGVhc2VfaWQ9JykgPT09IC0xKSB7XHJcbiAgICAgICAgICBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nLnJlcGxhY2UoJy5odG1sJywgJycpO1xyXG4gICAgICAgICAgdXJsUmVkaXJlY3QgPSBhZFNlbGxMZWFzZURldGFpbE5ldyArIHF1ZXJ5U3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAxLCB7XHJcbiAgICAgICAgICBMb2NhdGlvbjogYCR7dXJsUmVkaXJlY3R9YFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGN0eC5yZXMuZW5kKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhdGhOYW1lID09PSBwcm9qZWN0Q2F0ZWdvcnkpIHtcclxuICAgICAgICBsZXQgdXJsUmVkaXJlY3QgPSAnL2R1LWFuJztcclxuICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDEsIHtcclxuICAgICAgICAgIExvY2F0aW9uOiBgJHt1cmxSZWRpcmVjdH1gXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3R4LnJlcy5lbmQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBhdGhOYW1lID09PSBhZFNlbGxMZWFzZUNhdGVnb3J5KSB7XHJcbiAgICAgICAgbGV0IHVybFJlZGlyZWN0ID0gJy90aW0tdGluLXJhbyc7XHJcbiAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAxLCB7XHJcbiAgICAgICAgICBMb2NhdGlvbjogYCR7dXJsUmVkaXJlY3R9YFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGN0eC5yZXMuZW5kKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGFnZVByb3BzID0ge1xyXG4gICAgICBzdGF0dXNDb2RlOiAyMDBcclxuICAgIH07XHJcbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgICB9XHJcbiAgICBsZXQgeyB1c2VyIH0gPSBuZXh0Q29va2llKGN0eCk7XHJcbiAgICBwYWdlUHJvcHMgPSBPYmplY3QuYXNzaWduKHBhZ2VQcm9wcywgeyB1c2VyOiB1c2VyIH0pO1xyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbG9yOiBjb2xvciB9fT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEdBKGdvb2dsZUFuYWx5dGljc0NvZGUsIFJvdXRlcikoTXlBcHApO1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=