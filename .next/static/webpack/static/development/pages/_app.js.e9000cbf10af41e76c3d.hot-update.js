webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Layout/Header.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./components/Layout/Footer.tsx");
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/validator */ "./modules/validator.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");



var _this = undefined,
    _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Layout\\Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];




 //Import Constants




var LayoutPage = function LayoutPage(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      statusModal = _React$useState2[0],
      setModal = _React$useState2[1];

  var updateModal = function updateModal(data) {
    if (typeof props.updateModal !== "undefined") {
      props.updateModal(data);
    } else {
      setModal(data);
    }
  };

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](null),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      dataCompareLocal = _React$useState4[0],
      setDataCompareLocal = _React$useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageCompareKey"]) && !_modules_validator__WEBPACK_IMPORTED_MODULE_6__["default"].isBlank(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageCompareKey"]))) {
      try {
        setDataCompareLocal(JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageCompareKey"])));
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  var schemaObject = '{"@context": "https://schema.org", "@type": "LocalBusiness", "name": "Bất Động Sản Nội thất Dodo", "image": "https://pbs.twimg.com/profile_images/1230120113887531008/BPH75bW0_400x400.jpg", "additionalType":["https://vi.wikipedia.org/wiki/B%E1%BA%A5t_%C4%91%E1%BB%99ng_s%E1%BA%A3n","https://vi.wikipedia.org/wiki/M%C3%B4i_gi%E1%BB%9Bi_b%E1%BA%A5t_%C4%91%E1%BB%99ng_s%E1%BA%A3n","https://vi.wikipedia.org/wiki/Ng%C6%B0%E1%BB%9Di_m%C3%B4i_gi%E1%BB%9Bi"], "paymentAccepted":"Cash, Visa, Mastercard, American Express, Debit, PayPal, Apple Pay", "mainEntityOfPage":"https://www.google.com/maps?cid=6255054938969620475", "hasmap":"https://search.google.com/local/writereview?placeid=ChIJ-UI6Mh5TNDER-z_Wh1NrzlY", "description":"Nội thất Dodo đón đầu xu hướng bất động sản 4.0 tại Việt Nam, tích hợp trí tuệ nhân tạo để xử lý các dữ liệu, phân tích nhu cầu của cả người mua lẫn người bán", "@id": "https://nhadatmoi.net/", "url": "https://nhadatmoi.net/", "telephone": "0936.33.81.39", "priceRange": "1000 $", "address": { "@type": "PostalAddress", "streetAddress": "Số 348 Tố Hữu, phường La Khê, quận Hà Đông", "addressLocality": "Hà Nội", "postalCode": "100000", "addressCountry": "VN"}, "geo": { "@type": "GeoCoordinates", "latitude": 20.9709496, "longitude": 105.7531617 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification","dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" }, "sameAs": ["https://www.youtube.com/channel/UCCvlOD7vTPJeYRY8IrINguQ","https://bdsnhadatmoi.blogspot.com", "https://www.facebook.com/nhadatmoi.net", "https://bdsnhadatmoi.blogspot.com", "https://vi.gravatar.com/bdsnhadatmoi", "https://bdsnhadatmoi.tumblr.com", "https://bdsnhadatmoi.weebly.com", "https://twitter.com/bdsnhadatmoi", "https://www.reddit.com/user/bdsnhadatmoi", "https://www.diigo.com/profile/bdsnhadatmoi", "https://www.artfire.com/ext/people/bdsnhadatmoi", "https://www.smashwords.com/profile/view/bdsnhadatmoi", "http://play.fm/bdsnhadatmoi", "https://www.last.fm/user/bdsnhadatmoi", "https://www.strava.com/athletes/bdsnhadatmoi", "https://github.com/bdsnhadatmoi", "https://www.tripadvisor.com.vn/Profile/bdsnhadatmoi", "http://bit.ly/2uaZPLm", "https://getpocket.com/@bdsnhadatmoi", "https://www.pinterest.com/bdsnhadatmoi", "https://www.linkedin.com/in/bdsnhadatmoi", "https://www.flickr.com/people/bdsnhadatmoi", "https://about.me/bdsnhadatmoi", "https://www.instapaper.com/p/bdsnhadatmoi", "https://www.behance.net/bdsnhadatmoi", "https://myspace.com/bdsnhadatmoi", "https://www.goodreads.com/bdsnhadatmoi", "https://dribbble.com/bdsnhadatmoi", "https://www.deviantart.com/bdsnhadatmoi", "https://www.plurk.com/bdsnhadatmoi", "http://www.folkd.com/user/bdsnhadatmoi", "https://www.ted.com/profiles/19025977", "https://kinja.com/bdsnhadatmoi", "https://ello.co/bdsnhadatmoi", "https://coub.com/bdsnhadatmoi", "https://mix.com/bdsnhadatmoi", "http://www.authorstream.com/bdsnhadatmoi", "https://soundcloud.com/bdsnhadatmoi", "https://medium.com/@bdsnhadatmoi", "https://codepen.io/bdsnhadatmoi", "https://www.evernote.com/pub/ndmh269/tintuc", "https://disqus.com/by/bdsnhadatmoi", "https://www.scoop.it/u/b-t-ng-s-n-nha-t-m-i", "https://www.vingle.net/bdsnhadatmoi", "https://www.quora.com/profile/Bat-Dong-San-Nha-Dat-Moi", "https://bdsnhadatmoi.livejournal.com", "https://angel.co/bdsnhadatmoi", "https://www.producthunt.com/@bdsnhadatmoi", "https://speakerdeck.com/bdsnhadatmoi", "https://www.wikihow.com/User:Bdsnhadatmoi", "http://bdsnhadatmoi.brandyourself.com"]}';
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, props.title), __jsx("meta", {
    charSet: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "canonical",
    href: props.canonical,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "https://static.nhadatmoi.net/default/icon.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900&display=swap&subset=vietnamese",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "google-site-verification",
    content: _constants__WEBPACK_IMPORTED_MODULE_7__["googleSearchConsole"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), !_modules_validator__WEBPACK_IMPORTED_MODULE_6__["default"].isBlank(props.description) && __jsx("meta", {
    name: "description",
    content: props.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:title",
    content: props.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:type",
    content: "website",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "fb:app_id",
    content: "937234366335504",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "fb:admins",
    content: "100004244474013",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:site_name",
    content: "N\u1ED9i th\u1EA5t Dodo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:url",
    content: props.canonical,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:image",
    content: props.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:description",
    content: props.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:card",
    content: "summary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:site",
    content: "@nhadatmoi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:creator",
    content: "@nhadatmoi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:title",
    content: props.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:description",
    content: props.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:image",
    content: props.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: schemaObject
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    statusModal: typeof props.statusModal !== "undefined" ? props.statusModal : statusModal,
    updateModal: updateModal,
    dataCompare: dataCompareLocal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  })), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutPage);

/***/ })

})
//# sourceMappingURL=_app.js.e9000cbf10af41e76c3d.hot-update.js.map