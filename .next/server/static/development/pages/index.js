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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Display/LoadingPage.tsx":
/*!********************************************!*\
  !*** ./components/Display/LoadingPage.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "@material-ui/lab/Skeleton");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Display\\LoadingPage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const LoadingPage = props => {
  let domLoading = __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xl: props.grid.xl,
    lg: props.grid.lg,
    md: props.grid.md,
    sm: props.grid.sm,
    xs: props.grid.xs,
    className: "grid__list__item u-margin-bottom-small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "rect",
    className: "grid__list__item__img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default.a, {
    pt: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    width: "60%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })));

  let newDomReact = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);

  for (let i = 0; i < props.numberLimit; i++) {
    newDomReact = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, newDomReact, domLoading);
  }

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "baseline",
    className: "grid__list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, newDomReact);
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingPage);

/***/ }),

/***/ "./components/GridList/GridAdSellLeases.tsx":
/*!**************************************************!*\
  !*** ./components/GridList/GridAdSellLeases.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GridItemASL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridItemASL */ "./components/GridList/GridItemASL.tsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_stringProcess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../modules/stringProcess */ "./modules/stringProcess.tsx");
/* harmony import */ var _modules_urlProcess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/urlProcess */ "./modules/urlProcess.tsx");
/* harmony import */ var _modules_priceProcess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/priceProcess */ "./modules/priceProcess.tsx");
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\GridList\\GridAdSellLeases.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const GridList = props => {
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 0,
    item: true,
    xs: 12,
    direction: "row",
    alignItems: "baseline",
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, props.gridData.map((dataItem, index) => {
    let priceValue = _modules_priceProcess__WEBPACK_IMPORTED_MODULE_5__["default"].priceProcess(dataItem.node.price.value, dataItem.node.price.unit);
    let dataGrid = {
      image: _modules_urlProcess__WEBPACK_IMPORTED_MODULE_4__["default"].processImageUrl(dataItem.node.avatar.src, 'ad_sell_lease'),
      title: dataItem.node.title,
      address: dataItem.node.address.text,
      area: _modules_stringProcess__WEBPACK_IMPORTED_MODULE_3__["default"].addCommas(dataItem.node.area.value),
      price: priceValue,
      slug: dataItem.node.slug,
      updated_at: dataItem.node.updated_at,
      created_at: dataItem.node.created_at,
      view_count: dataItem.node.view_count,
      id: dataItem.node.id,
      like_status: dataItem.node.like_status,
      path: '/tin-rao/'
    };

    if (props.maxLength && index >= props.maxLength) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    } else {
      return __jsx(_GridItemASL__WEBPACK_IMPORTED_MODULE_1__["default"], {
        grid: props.grid,
        dataGird: dataGrid,
        key: "grid_item_ad_sell_" + index,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GridList);

/***/ }),

/***/ "./components/GridList/GridItemASL.tsx":
/*!*********************************************!*\
  !*** ./components/GridList/GridItemASL.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "@material-ui/icons/FavoriteBorder");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/CalendarToday */ "@material-ui/icons/CalendarToday");
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/validator */ "./modules/validator.tsx");
/* harmony import */ var _modules_AdSellLease_Tracking__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/AdSellLease/Tracking */ "./modules/AdSellLease/Tracking.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils */ "./utils/index.ts");
/* harmony import */ var _graphql_project_mutation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../graphql/project/mutation */ "./graphql/project/mutation/index.ts");
/* harmony import */ var _graphql_ad_sell_leases_mutation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../graphql/ad_sell_leases/mutation */ "./graphql/ad_sell_leases/mutation/index.ts");
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\GridList\\GridItemASL.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Material- UI

 // Icon














const GridItemASL = props => {
  const [dataCompareLocal, setDataCompareLocal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [likeStatus, setLikeStatus] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.dataGird.like_status);
  const [statusCompare, setStatusCompare] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageCompareKey"]) && !_modules_validator__WEBPACK_IMPORTED_MODULE_8__["default"].isBlank(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageCompareKey"]))) {
      try {
        let dataStatusCompare = JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageCompareKey"]));
        setDataCompareLocal(dataStatusCompare);

        for (let index in dataStatusCompare) {
          let entityId = dataStatusCompare[index].id;

          if (entityId === props.dataGird.id) {
            setStatusCompare(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  let typeGrid = 'ad_sell_lease';

  if (props.dataGird.path === '/du-an/') {
    typeGrid = 'project';
  }

  const dataPrepare = {
    avatar: props.dataGird.image,
    title: props.dataGird.title,
    id: props.dataGird.id,
    type: typeGrid
  };

  const handleTracking = type => {
    let addSellLeaseId = props.dataGird.id;

    if (addSellLeaseId && !_modules_validator__WEBPACK_IMPORTED_MODULE_8__["default"].isBlank(addSellLeaseId) && typeGrid === 'ad_sell_lease') {
      _modules_AdSellLease_Tracking__WEBPACK_IMPORTED_MODULE_9__["default"].addTracking(String(addSellLeaseId), type);
    }
  };

  let clickAddToCompare = () => {
    handleTracking('compare_click');
    let statusUpdate = updateCompareData(dataPrepare);
    if (!statusUpdate) return statusUpdate;
    location.reload();
    return true;
  };

  const handleClickRemoveCompare = dataCompare => {
    if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageCompareKey"]) && !_modules_validator__WEBPACK_IMPORTED_MODULE_8__["default"].isBlank(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageCompareKey"]))) {
      let dataToCompare = JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageCompareKey"]));
      let dataNewCompare = [];

      for (let index in dataToCompare) {
        if (dataToCompare[index].id !== dataCompare.id) {
          dataNewCompare.push(dataToCompare[index]);
        }
      }

      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageCompareKey"], JSON.stringify(dataNewCompare));
      location.reload();
    }
  };

  let updateCompareData = data => {
    let dataToCompare = [];
    let isAddToLocal = true;

    if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageCompareKey"]) && !_modules_validator__WEBPACK_IMPORTED_MODULE_8__["default"].isBlank(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageCompareKey"]))) {
      dataToCompare = JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageCompareKey"]));

      for (let index in dataToCompare) {
        if (dataToCompare[index].id === data.id) {
          isAddToLocal = false;
        }

        if (dataToCompare[index].type !== data.type) {
          localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageCompareKey"]);
          dataToCompare = [];
          break;
        }
      }
    }

    let screenWidth = screen.width;

    if (dataToCompare && dataToCompare.length && dataToCompare.length >= 4 && screenWidth > 599) {
      alert("Không thể so sánh quá 4 sản phẩm!");
      return false;
    }

    if (dataToCompare && dataToCompare.length && dataToCompare.length >= 2 && screenWidth <= 599) {
      alert("Không thể so sánh quá 2 sản phẩm!");
      return false;
    }

    if (isAddToLocal) {
      dataToCompare.push(data);
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageCompareKey"], JSON.stringify(dataToCompare));
    }

    return true;
  };

  let linkHref = '';
  let linkAs = '';

  if (props.dataGird.path === '/du-an/') {
    linkHref = '/du-an/[slug]';
    linkAs = '/du-an/' + props.dataGird.slug;
  } else {
    linkHref = '/tin-rao/[slug]';
    linkAs = '/tin-rao/' + props.dataGird.slug;
  }

  const handleClickLike = () => {
    if (likeStatus) {
      return false;
    } else {
      setLikeStatus(true);
    }

    if (props.dataGird.path !== '/du-an/') {
      handleTracking('like');
      _utils__WEBPACK_IMPORTED_MODULE_10__["apolloClient"].mutate({
        mutation: _graphql_ad_sell_leases_mutation__WEBPACK_IMPORTED_MODULE_12__["ADD_AD_SELL_LEASE_WISH_LIST"],
        variables: {
          "input": {
            "ad_sell_lease_id": props.dataGird.id,
            "status": "like"
          }
        }
      }).then(response => {});
    } else {
      _utils__WEBPACK_IMPORTED_MODULE_10__["apolloClient"].mutate({
        mutation: _graphql_project_mutation__WEBPACK_IMPORTED_MODULE_11__["ADD_PROJECT_WISH_LIST"],
        variables: {
          "input": {
            "project_id": props.dataGird.id,
            "status": "like"
          }
        }
      }).then(response => {});
    }
  };

  let componentsItem = __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    direction: props.grid ? "column" : "row",
    spacing: 0,
    className: "grid__list__item u-margin-bottom-small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: linkHref,
    as: linkAs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 43
    }
  }, __jsx("div", {
    className: "grid__list__item__img background block_float",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: 'grid__list__item__img__date',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 60
    }
  }), __jsx(react_moment__WEBPACK_IMPORTED_MODULE_5___default.a, {
    unix: true,
    format: "DD/MM/YYYY",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 76
    }
  }, Number(props.dataGird.created_at) / 1000)), __jsx("div", {
    className: 'grid__list__item__img__favorite',
    onClick: handleClickLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }, likeStatus && __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }), !likeStatus && __jsx(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  })), props.dataGird.image && props.dataGird.image !== 'null' && props.dataGird.image !== '' && __jsx("img", {
    src: props.dataGird.image,
    alt: props.dataGird.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 15
    }
  }), (!props.dataGird.image || props.dataGird.image === 'null' || props.dataGird.image === '') && __jsx("img", {
    src: "https://static.nhadatmoi.net/default/home_default.jpg",
    alt: props.dataGird.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 15
    }
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "grid__list__item__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "grid__list__item__content__title u-flexSpaceBetween",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: linkHref,
    as: linkAs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 47
    }
  }, __jsx("div", {
    className: "grid__list__item__content__title__text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 17
    }
  }, props.dataGird.title))))), __jsx("div", {
    className: "grid__list__item__content__description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 11
    }
  }, props.dataGird.address), props.dataGird.area && props.dataGird.area != "0" && __jsx("div", {
    className: "grid__list__item__content__description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }, "Di\u1EC7n t\xEDch: ", props.dataGird.area, " m", __jsx("sup", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 49
    }
  }, "2"), " -  L\u01B0\u1EE3t xem: ", props.dataGird.view_count), (!props.dataGird.area || props.dataGird.area == "0") && __jsx("div", {
    className: "grid__list__item__content__description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }, "Di\u1EC7n t\xEDch: \u0110ang c\u1EADp nh\u1EADt -  L\u01B0\u1EE3t xem: ", props.dataGird.view_count), __jsx("div", {
    className: "grid__list__item__content__price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 11
    }
  }, props.dataGird.price && props.dataGird.price !== '0' && props.dataGird.price !== '0 ' && props.dataGird.price !== '0 đồng' ? props.dataGird.price : 'Giá: Liên hệ'), !statusCompare && __jsx("div", {
    className: "grid__list__item__content__compare",
    onClick: () => clickAddToCompare(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }
  }, "SO S\xC1NH"), statusCompare && __jsx("div", {
    className: "grid__list__item__content__compare",
    onClick: () => handleClickRemoveCompare(dataPrepare),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }
  }, "HU\u1EF6"))));

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xl: props.grid.xl,
    lg: props.grid.lg,
    md: props.grid.md,
    sm: props.grid.sm,
    xs: props.grid.xs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 5
    }
  }, componentsItem);
};

/* harmony default export */ __webpack_exports__["default"] = (GridItemASL);

/***/ }),

/***/ "./components/Home/ButtonViews.jsx":
/*!*****************************************!*\
  !*** ./components/Home/ButtonViews.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_Image_bad_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/Image/bad.jpg */ "./public/Image/bad.jpg");
/* harmony import */ var _public_Image_bad_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_Image_bad_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Home\\ButtonViews.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const styles = theme => ({
  button: {
    marginRight: '5px'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%'
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      height: 100
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      },
      '& $imageMarked': {
        opacity: 0
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
        [theme.breakpoints.down('xs')]: {
          border: '2px solid currentColor'
        }
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `3px 4px 5px 5px`,
    [theme.breakpoints.down('xs')]: {
      padding: `1px 1px 1px 1px`
    }
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
});

class ButtonViews extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const images = [{
      url: 'http://noithatgiadinhbinhduong.com/wp-content/uploads/2017/09/gi%C6%B0%E1%BB%9Dng-g%C3%B5-%C4%91%E1%BB%8F.jpg',
      title: 'Giảm 10% Từ Đơn Hàng Thứ 2',
      width: '30%'
    }, {
      url: 'https://i2.wp.com/dogoquoccuong.com/wp-content/uploads/2014/08/DSC09545.jpg?fit=3008%2C2000&ssl=1',
      title: 'Thiết Kế Theo Yêu Cầu',
      width: '40%'
    }, {
      url: 'http://thicongdogohanoi.com/wp-content/uploads/2016/03/nhu-y-tay-hop-6mon.jpg',
      title: 'Đặt Hàng Không Giới Hạn',
      width: '30%'
    }];
    const {
      classes
    } = this.props;
    return __jsx("div", {
      className: classes.root,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Hidden"], {
      xsDown: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, images.map(image => {
      return __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2___default.a, {
        focusRipple: true,
        key: image.title,
        className: classes.image,
        focusVisibleClassName: classes.focusVisible,
        style: {
          width: image.width,
          fontSize: 30
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 33
        }
      }, __jsx("span", {
        className: classes.imageSrc,
        style: {
          backgroundImage: `url(${image.url})`
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 37
        }
      }), __jsx("span", {
        className: classes.imageBackdrop,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 37
        }
      }), __jsx("span", {
        className: classes.imageButton,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 37
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        color: "inherit",
        className: classes.imageTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 41
        }
      }, image.title, __jsx("span", {
        className: classes.imageMarked,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 45
        }
      }))));
    })));
  }

}

ButtonViews.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(styles)(ButtonViews));

/***/ }),

/***/ "./components/Home/Image/a1.jpg":
/*!**************************************!*\
  !*** ./components/Home/Image/a1.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/a1-c70a998879e656751cfbf7eeea910655.jpg";

/***/ }),

/***/ "./components/Home/Image/a2.jpg":
/*!**************************************!*\
  !*** ./components/Home/Image/a2.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/a2-d27c58ab44ee2e0e3c762cec109c0350.jpg";

/***/ }),

/***/ "./components/Home/Image/a3.jpg":
/*!**************************************!*\
  !*** ./components/Home/Image/a3.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/a3-8916f751ddc6db1962f47a46be2e7d74.jpg";

/***/ }),

/***/ "./components/Home/Image/a4.jpg":
/*!**************************************!*\
  !*** ./components/Home/Image/a4.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/a4-84c6b6d59d757fea21f6c6f90e2c505a.jpg";

/***/ }),

/***/ "./components/Home/Image/a5.jpg":
/*!**************************************!*\
  !*** ./components/Home/Image/a5.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/a5-48840527b533b7280940287a3f582129.jpg";

/***/ }),

/***/ "./components/Home/Image/a6.jpg":
/*!**************************************!*\
  !*** ./components/Home/Image/a6.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/a6-535575e11bc6fa62303ba076a1069377.jpg";

/***/ }),

/***/ "./components/Home/Image/a7.jpg":
/*!**************************************!*\
  !*** ./components/Home/Image/a7.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/a7-5818077bfa05ff02659686a7e3513bb3.jpg";

/***/ }),

/***/ "./components/Home/Image/a8.jpg":
/*!**************************************!*\
  !*** ./components/Home/Image/a8.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/a8-1bc0d874f92615252a9392529c94d680.jpg";

/***/ }),

/***/ "./components/Home/Image/a9.jpg":
/*!**************************************!*\
  !*** ./components/Home/Image/a9.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/a9-e01b54020b241b7176b5e030b9113c83.jpg";

/***/ }),

/***/ "./components/Home/Image/what2.jpg":
/*!*****************************************!*\
  !*** ./components/Home/Image/what2.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/what2-fbd9345aecde5c0a0525f12053e1806b.jpg";

/***/ }),

/***/ "./components/Home/Image/what3.jpg":
/*!*****************************************!*\
  !*** ./components/Home/Image/what3.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/what3-3645e37115f778665528434ca3ef3190.jpg";

/***/ }),

/***/ "./components/Home/Image/what4.jpg":
/*!*****************************************!*\
  !*** ./components/Home/Image/what4.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/what4-777a2f8654b28d307d889ceca8c13995.jpg";

/***/ }),

/***/ "./components/Home/ListMenu.jsx":
/*!**************************************!*\
  !*** ./components/Home/ListMenu.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Drafts */ "@material-ui/icons/Drafts");
/* harmony import */ var _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Send */ "@material-ui/icons/Send");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "@material-ui/icons/ExpandLess");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "@material-ui/icons/StarBorder");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Gamepad */ "@material-ui/icons/Gamepad");
/* harmony import */ var _material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/index */ "./constants/index.ts");
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Home\\ListMenu.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  listItem: {
    backgroundColor: '#e3f2fd',
    "&:hover": {// backgroundColor: '#90caf9',
    }
  },
  textItem: {
    color: '#1976d2',
    fontSize: 14,
    paddingRight: 20
  },
  popover: {
    pointerEvents: 'none' // none

  }
}));

function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [indexMenu, setIndexMenu] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [countMenu, setCountMenu] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const handlePopoverOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setOpen(event.currentTarget);
    setCountMenu(0);
    setIndexMenu(index);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setOpen(false);
    setIndexMenu(null);
  };

  const setHoverMenu = count => {
    setCountMenu(count);
  };

  const id = open ? indexMenu : undefined;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    component: "nav",
    "aria-labelledby": "nested-list-subheader" // className={classes.root}
    ,
    style: {
      padding: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, _constants_index__WEBPACK_IMPORTED_MODULE_10__["listMenu"].map((item, index) => {
    const {
      rooms
    } = item;
    return __jsx("div", {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      className: classes.listItem,
      button: true,
      id: id // onMouseEnter={(event) => handlePopoverOpen(event, index)}
      ,
      style: {
        backgroundColor: countMenu === index ? '#90caf9' : '#e3f2fd',
        height: 35,
        padding: '0 4px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_9___default.a, {
      style: {
        fontSize: 25,
        color: '#1976d2',
        padding: 4
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 29
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      className: classes.textItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    }, item.title)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }), indexMenu === index && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      id: id,
      className: classes.popover,
      open: open,
      anchorEl: anchorEl,
      anchorOrigin: {
        vertical: 'right',
        horizontal: 'right'
      } // Ghim
      ,
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left'
      } // Vi tri hien thi
      ,
      onMouseLeave: handlePopoverClose // onMouseOut={handlePopoverClose}
      ,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
      component: "nav",
      "aria-labelledby": "nested-list-subheader",
      style: {
        padding: 0,
        pointerEvents: 'auto',
        corsor: 'pointer'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 33
      }
    }, rooms.map((element, count) => {
      return __jsx("div", {
        key: count,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 52
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
        autoFocus: true,
        button: true,
        onClick: count => setHoverMenu(count),
        style: {
          backgroundColor: countMenu === count ? '#90caf9' : '#e3f2fd',
          height: 35,
          padding: '0 4px'
        },
        onMouseEnter: () => setHoverMenu(count),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 49
        }
      }, __jsx(_material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_9___default.a, {
        style: {
          fontSize: 25,
          color: '#1976d2',
          padding: 4
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 53
        }
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        className: classes.textItem,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 53
        }
      }, element.room)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 49
        }
      }));
    }))));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (NestedList);

/***/ }),

/***/ "./components/Home/ListProduct.jsx":
/*!*****************************************!*\
  !*** ./components/Home/ListProduct.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/GridList */ "@material-ui/core/GridList");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "@material-ui/core/GridListTile");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/GridListTileBar */ "@material-ui/core/GridListTileBar");
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "@material-ui/core/ListSubheader");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Info */ "@material-ui/icons/Info");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux-i18n */ "react-redux-i18n");
/* harmony import */ var react_redux_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "@material-ui/icons/StarBorder");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Home\\ListProduct.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    // height: '500px',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
});

class Actions extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {
      classes
    } = this.props;
    let tileData = [{
      img: 'http://bizweb.dktcdn.net/100/060/966/products/giuong-ngu-go-cao-cap-tai-ha-noi-10.jpg?v=1462982150370',
      title: 'Giường gỗ tự nhiên',
      author: 'Mạnh Nhẫn'
    }, {
      img: 'https://cdn.muabannhanh.com/asset/frontend/img/gallery/2018/09/04/5b8e559546990_1536054677.jpg',
      title: 'Bàn phòng khách',
      author: 'Mạnh Nhẫn'
    }, {
      img: 'https://www.noithathoanmy.com.vn/blog/wp-content/uploads/2018/11/noi-that-go-phong-khach-dep.jpg',
      title: 'Thiết kế nội thất',
      author: 'Mạnh Nhẫn'
    }, {
      img: 'http://bizweb.dktcdn.net/100/060/966/products/giuong-ngu-go-cao-cap-tai-ha-noi-10.jpg?v=1462982150370',
      title: 'Giường gỗ tự nhiên',
      author: 'Mạnh Nhẫn'
    }, {
      img: 'https://cdn.muabannhanh.com/asset/frontend/img/gallery/2018/09/04/5b8e559546990_1536054677.jpg',
      title: 'Bàn phòng khách',
      author: 'Mạnh Nhẫn'
    }, {
      img: 'https://www.noithathoanmy.com.vn/blog/wp-content/uploads/2018/11/noi-that-go-phong-khach-dep.jpg',
      title: 'Thiết kế nội thất',
      author: 'Mạnh Nhẫn'
    }, {
      img: 'http://bizweb.dktcdn.net/100/060/966/products/giuong-ngu-go-cao-cap-tai-ha-noi-10.jpg?v=1462982150370',
      title: 'Giường gỗ tự nhiên',
      author: 'Mạnh Nhẫn'
    }, {
      img: 'https://cdn.muabannhanh.com/asset/frontend/img/gallery/2018/09/04/5b8e559546990_1536054677.jpg',
      title: 'Bàn phòng khách',
      author: 'Mạnh Nhẫn'
    }, {
      img: 'https://www.noithathoanmy.com.vn/blog/wp-content/uploads/2018/11/noi-that-go-phong-khach-dep.jpg',
      title: 'Thiết kế nội thất',
      author: 'Mạnh Nhẫn'
    }, {
      img: 'http://bizweb.dktcdn.net/100/060/966/products/giuong-ngu-go-cao-cap-tai-ha-noi-10.jpg?v=1462982150370',
      title: 'Giường gỗ tự nhiên',
      author: 'Mạnh Nhẫn'
    }, {
      img: 'https://cdn.muabannhanh.com/asset/frontend/img/gallery/2018/09/04/5b8e559546990_1536054677.jpg',
      title: 'Bàn phòng khách',
      author: 'Mạnh Nhẫn'
    }, {
      img: 'https://www.noithathoanmy.com.vn/blog/wp-content/uploads/2018/11/noi-that-go-phong-khach-dep.jpg',
      title: 'Thiết kế nội thất',
      author: 'Mạnh Nhẫn'
    }];
    return __jsx("div", {
      className: classes.root,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 10
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Hidden"], {
      smUp: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.gridList,
      cols: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 16
      }
    }, tileData.map((tile, index) => __jsx(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: tile.img,
      alt: tile.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 28
      }
    }), __jsx(_material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
      title: tile.title,
      classes: {
        root: classes.titleBar,
        title: classes.title
      },
      actionIcon: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
        "aria-label": `star ${tile.title}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 34
        }
      }, __jsx(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 37
        }
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 28
      }
    }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Hidden"], {
      xsDown: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Hidden"], {
      mdUp: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 16
      }
    }, __jsx(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.gridList,
      cols: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 19
      }
    }, tileData.map((tile, index) => __jsx(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: tile.img,
      alt: tile.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 28
      }
    }), __jsx(_material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
      title: tile.title,
      classes: {
        root: classes.titleBar,
        title: classes.title
      },
      actionIcon: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
        "aria-label": `star ${tile.title}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 34
        }
      }, __jsx(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 37
        }
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 28
      }
    }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Hidden"], {
      smDown: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 16
      }
    }, __jsx(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.gridList,
      cols: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 19
      }
    }, tileData.map((tile, index) => __jsx(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: tile.img,
      alt: tile.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 28
      }
    }), __jsx(_material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
      title: tile.title,
      classes: {
        root: classes.titleBar,
        title: classes.title
      },
      actionIcon: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
        "aria-label": `star ${tile.title}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 34
        }
      }, __jsx(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 37
        }
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 28
      }
    })))))));
  }

}

Actions.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8___default()(styles)(Actions));

/***/ }),

/***/ "./components/Home/NewHot.jsx":
/*!************************************!*\
  !*** ./components/Home/NewHot.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/withWidth */ "@material-ui/core/withWidth");
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "@material-ui/lab/Skeleton");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Home\\NewHot.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const styles = theme => ({
  card: {
    maxWidth: 300
  },
  imgZoom: {
    width: '100%',
    height: '120px',
    '&:hover': {
      boxShadow: '2px 2px 8px 2px #aaa'
    }
  }
});

const img = [{
  img: 'https://www.noithathoanmy.com.vn/blog/wp-content/uploads/2018/11/noi-that-go-phong-khach-dep.jpg',
  title: 'Hiện đại vuông vắn lịch lãm quý phái',
  content: ''
}, {
  img: 'https://sdk.vn/wp-content/uploads/2018/11/s%C6%A1n-g%E1%BB%97-ph%E1%BB%A7-m%E1%BB%9D.jpg',
  title: 'Phong cách hoàng gia, đậm chất cổ điển',
  content: ''
}, {
  img: 'https://nhadepnhaxinh.vn/images/p.kh%C3%A1ch_t%E1%BA%A7ng_1_.2_1.jpg',
  title: 'Thiết kế tiện nghi sang trọng',
  content: ''
}, {
  img: 'https://cdn.muabannhanh.com/asset/frontend/img/gallery/2017/10/04/59d4564373a4f_1507087939.jpg',
  title: 'Sang trọng với giường ngủ cổ điển',
  content: ''
}, {
  img: 'https://vatlieuxaydung.org.vn/Upload/48/Nam_2018/Thang_12/Ngay_19/vlxd.org_nguyentac2.jpg',
  title: '',
  content: ''
}, {
  img: 'https://vecto.com.vn/wp-content/uploads/2017/04/tu_bep_soi_nga-500x495.jpg',
  title: '',
  content: ''
}, {
  img: 'http://noithatdephanoi.com.vn/uploads/images/tu-bep-go-son-mau-chu-l-co-dien/n9.jpg',
  title: '',
  content: ''
}, {
  img: 'https://cdn.muabannhanh.com/asset/frontend/img/gallery/2018/09/04/5b8e559546990_1536054677.jpg',
  title: '',
  content: ''
}];

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {
      classes
    } = this.props;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "h6",
      color: "primary",
      style: {
        textAlign: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }, "Khuy\u1EBFn m\xE3i"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      container: true,
      spacing: 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }, img.map((item, index) => {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        key: index,
        style: {
          padding: 4
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 17
        }
      }, __jsx("img", {
        className: classes.imgZoom,
        src: item.img,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 19
        }
      }));
    })));
  }

}

Index.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(styles)(Index));

/***/ }),

/***/ "./components/Home/Partner.jsx":
/*!*************************************!*\
  !*** ./components/Home/Partner.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ "@material-ui/icons/NavigateNext");
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/NavigateBefore */ "@material-ui/icons/NavigateBefore");
/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles/createBreakpoints */ "@material-ui/core/styles/createBreakpoints");
/* harmony import */ var _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/GridList */ "@material-ui/core/GridList");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "@material-ui/core/GridListTile");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/GridListTileBar */ "@material-ui/core/GridListTileBar");
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "@material-ui/core/ListSubheader");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Info */ "@material-ui/icons/Info");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-owl-carousel2 */ "react-owl-carousel2");
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Image_a1_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Image/a1.jpg */ "./components/Home/Image/a1.jpg");
/* harmony import */ var _Image_a1_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Image_a1_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Image_a2_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Image/a2.jpg */ "./components/Home/Image/a2.jpg");
/* harmony import */ var _Image_a2_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_Image_a2_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Image_a3_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Image/a3.jpg */ "./components/Home/Image/a3.jpg");
/* harmony import */ var _Image_a3_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_Image_a3_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Image_a4_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Image/a4.jpg */ "./components/Home/Image/a4.jpg");
/* harmony import */ var _Image_a4_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_Image_a4_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Image_a5_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Image/a5.jpg */ "./components/Home/Image/a5.jpg");
/* harmony import */ var _Image_a5_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_Image_a5_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _Image_a6_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Image/a6.jpg */ "./components/Home/Image/a6.jpg");
/* harmony import */ var _Image_a6_jpg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_Image_a6_jpg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _Image_a7_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Image/a7.jpg */ "./components/Home/Image/a7.jpg");
/* harmony import */ var _Image_a7_jpg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_Image_a7_jpg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _Image_a8_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Image/a8.jpg */ "./components/Home/Image/a8.jpg");
/* harmony import */ var _Image_a8_jpg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_Image_a8_jpg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _Image_a9_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Image/a9.jpg */ "./components/Home/Image/a9.jpg");
/* harmony import */ var _Image_a9_jpg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_Image_a9_jpg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_25__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Home\\Partner.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



























const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden' // backgroundColor: theme.palette.background.paper,

  },
  gridList: {
    width: '100%',
    height: '100%'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  title: {
    padding: '5px',
    backgroundColor: '#039be5',
    color: 'white'
  },
  imgZoom: {
    transition: "transform .5s, filter 3s ease-in-out",
    filter: "grayscale(100%)"
  } // imgZoom: {
  //   "&:hover": {
  //     filter: "grayscale(0)",
  //     transform: "scale(1.1)",
  //     transitionDuration: "1s",
  //     transitionTimingFunction: "linear",
  //   }
  // }

}));

const KeywordSlide = props => {
  const classes = useStyles();

  const NextArrow = props => {
    const {
      onClick
    } = props;
    return __jsx("div", {
      className: 'partner__next__arrow',
      onClick: onClick,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }
    }, __jsx(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }));
  };

  const PrevArrow = props => {
    const {
      onClick
    } = props;
    return __jsx("div", {
      className: 'partner__prev__arrow',
      onClick: onClick,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 7
      }
    }, __jsx(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }));
  };

  const dataSearch = [{
    title: "Giường ngủ hiện đại",
    path: "/du-an/vinhomes-central-park-pid-35872"
  }, {
    title: "Tủ quần áo thời trang",
    path: "/du-an/vinhomes-grand-park-quan-9-pid-37584"
  }, {
    title: "Bàn trà phòng khách hiện đại",
    path: "/du-an/vinhomes-smart-city-pid-37191"
  }, {
    title: "Bàn trà phòng khách cổ điển",
    path: "/du-an/vinhomes-ocean-park-gia-lam-pid-37597"
  }, {
    title: "Tủ bếp tiện nghi",
    path: "/du-an/vung-tau-pearl-pid-48674"
  }, {
    title: "Nội thất sang trọng",
    path: "/du-an/grandeur-palace-pid-50234"
  }, {
    title: "Giường ngủ cổ điển",
    path: "/du-an/diamond-island-pid-335"
  }, {
    title: "Nội thất sang trọng",
    path: "/du-an/the-sun-avenue-pid-15"
  }, {
    title: "Bàn ăn cổ điển",
    path: "/nha-dat-ban/nha-dat-ban-tai-hai-phong"
  }, {
    title: "Bàn ăn hiện đại",
    path: "/nha-dat-ban/nha-dat-ban-tai-ha-noi"
  }];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: __jsx(NextArrow, {
      onClick: [],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 16
      }
    }),
    prevArrow: __jsx(PrevArrow, {
      onClick: [],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 16
      }
    }),
    variableWidth: true,
    responsive: [{
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  let tileData = [{
    img: _Image_a1_jpg__WEBPACK_IMPORTED_MODULE_16___default.a
  }, {
    img: _Image_a2_jpg__WEBPACK_IMPORTED_MODULE_17___default.a
  }, {
    img: _Image_a3_jpg__WEBPACK_IMPORTED_MODULE_18___default.a
  }, {
    img: _Image_a4_jpg__WEBPACK_IMPORTED_MODULE_19___default.a
  }, {
    img: _Image_a5_jpg__WEBPACK_IMPORTED_MODULE_20___default.a
  }, {
    img: _Image_a6_jpg__WEBPACK_IMPORTED_MODULE_21___default.a
  }, {
    img: _Image_a7_jpg__WEBPACK_IMPORTED_MODULE_22___default.a
  }, {
    img: _Image_a8_jpg__WEBPACK_IMPORTED_MODULE_23___default.a
  }, {
    img: _Image_a9_jpg__WEBPACK_IMPORTED_MODULE_24___default.a
  }, {
    img: _Image_a1_jpg__WEBPACK_IMPORTED_MODULE_16___default.a
  }, {
    img: _Image_a2_jpg__WEBPACK_IMPORTED_MODULE_17___default.a
  }, {
    img: _Image_a3_jpg__WEBPACK_IMPORTED_MODULE_18___default.a
  }, {
    img: _Image_a4_jpg__WEBPACK_IMPORTED_MODULE_19___default.a
  }, {
    img: _Image_a5_jpg__WEBPACK_IMPORTED_MODULE_20___default.a
  }, {
    img: _Image_a6_jpg__WEBPACK_IMPORTED_MODULE_21___default.a
  }, {
    img: _Image_a7_jpg__WEBPACK_IMPORTED_MODULE_22___default.a
  }, {
    img: _Image_a8_jpg__WEBPACK_IMPORTED_MODULE_23___default.a
  }, {
    img: _Image_a9_jpg__WEBPACK_IMPORTED_MODULE_24___default.a
  }];
  return __jsx("div", {
    className: "partner",
    style: {
      height: 200
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], {
    style: {
      fontSize: 20,
      padding: 10,
      fontWeight: 700,
      color: '#1976d2'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }
  }, "Kh\xE1ch h\xE0ng - \u0111\u1ED1i t\xE1c"), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, settings, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }), tileData.map((item, index) => {
    return __jsx("div", {
      key: index,
      className: "partner__item",
      style: {
        height: 200
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: item.img,
      style: {
        height: '100%',
        width: '100%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (KeywordSlide);

/***/ }),

/***/ "./components/Home/What.jsx":
/*!**********************************!*\
  !*** ./components/Home/What.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "@material-ui/lab/Skeleton");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/StarRate */ "@material-ui/icons/StarRate");
/* harmony import */ var _material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Image_what2_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Image/what2.jpg */ "./components/Home/Image/what2.jpg");
/* harmony import */ var _Image_what2_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Image_what2_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Image_what3_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Image/what3.jpg */ "./components/Home/Image/what3.jpg");
/* harmony import */ var _Image_what3_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Image_what3_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Image_what4_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Image/what4.jpg */ "./components/Home/Image/what4.jpg");
/* harmony import */ var _Image_what4_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Image_what4_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Home\\What.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const styles = theme => ({
  viewPhone: {
    [theme.breakpoints.down('xs')]: {
      padding: '8px'
    }
  },
  card: {
    maxWidth: 200,
    border: '3px solid white',
    [theme.breakpoints.down('sm')]: {
      // position: 'fixed',
      maxWidth: 170
    }
  },
  title: {
    color: 'white',
    padding: 20
  },
  cssIcon: {
    color: 'white',
    fontSize: '30px'
  },
  imgZoom: {
    transition: "transform .5s, filter 3s ease-in-out",
    filter: "grayscale(100%)"
  },
  imgZoom: {
    "&:hover": {
      filter: "grayscale(0)",
      transform: "scale(1.1)",
      transitionDuration: "1s",
      transitionTimingFunction: "linear"
    }
  }
});

const arrImg = [{
  image: "https://thebank.vn/static/6/1135/714/90/2018/10/16/thebank_suthatvephiquetthetindungkhithanhtoan1min_1539654231.jpg",
  title: 'Mua Hàng Tiện Lợi'
}, {
  image: _Image_what4_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
  //"https://www.thietkekientrucgroup.com/public/upload/images/noi-that-go-phong-khach%20(76).jpg",
  title: 'Bảo Hành Hậu Mãi'
}, {
  image: _Image_what2_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
  //"https://www.noithathoanmy.com.vn/blog/wp-content/uploads/2018/11/noi-that-go-phong-khach-dep.jpg",
  title: 'Giá Cả Hợp Lý'
}, {
  image: _Image_what3_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
  //"https://i2.wp.com/dogoquoccuong.com/wp-content/uploads/2014/08/DSC09545.jpg?fit=3008%2C2000&ssl=1",
  title: 'Uy Tín Chất Lượng'
}];

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      classes
    } = this.props; // let img = "url('http://noithatdangcap.vn/app/webroot/uploads/files/1-phong-khach-noi-that-co-dien-chau-au-dinh-thu-tai-Nam-Dinh.jpg')"

    let img = "url('https://tamchuphinhsanpham.com/wp-content/uploads/2019/05/40779055_719896445012913_4364449498798227456_n.jpg')"; // let img = "url('https://png.pngtree.com/58pic/32/49/67/20U58PICI9dWcd7X7yX8e_PIC2018.jpg')"

    const array = [{
      item: 1
    }, {
      item: 1
    }, {
      item: 1
    }, {
      item: 1
    }, {
      item: 1
    }, {
      item: 1
    }];
    return __jsx("div", {
      style: {
        backgroundImage: img,
        height: 280,
        width: '100%',
        backgroundRepeat: 'repeat'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 10
      }
    }, __jsx("div", {
      style: {
        color: '#2196f3',
        textAlign: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      className: classes.title,
      variant: "h4",
      component: "h4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 16
      }
    }, "H\xC3Y \u0110\u1EBEN V\u1EDAI CH\xDANG T\xD4I"), array.map((item, index) => __jsx(_material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_7___default.a, {
      key: index,
      className: classes.cssIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 44
      }
    })), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 16
      }
    }), __jsx("center", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 16
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      container: true,
      spacing: 0,
      alignItems: "center",
      justify: "center",
      direction: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 19
      }
    }, arrImg.map((element, index) => {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 6,
        sm: 3,
        md: 3,
        key: index,
        className: classes.viewPhone,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 31
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
        className: classes.card,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 34
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardActionArea"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 37
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardMedia"], {
        className: classes.imgZoom,
        component: "img",
        alt: "Contemplative Reptile",
        height: "100",
        image: element.image,
        title: element.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 40
        }
      }), __jsx("div", {
        style: {
          backgroundColor: '#2196f3',
          padding: 4
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 40
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
        variant: "body2",
        style: {
          color: 'white',
          fontSize: 16,
          fontWeight: 500
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 43
        }
      }, element.title)))));
    })))));
  }

}

Index.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(styles)(Index));

/***/ }),

/***/ "./components/Index/AdSellLeaseIndex.tsx":
/*!***********************************************!*\
  !*** ./components/Index/AdSellLeaseIndex.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/validator */ "./modules/validator.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./utils/index.ts");
/* harmony import */ var _graphql_ad_sell_leases_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphql/ad_sell_leases/queries */ "./graphql/ad_sell_leases/queries/index.ts");
/* harmony import */ var _TitleBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TitleBlock */ "./components/Index/TitleBlock.tsx");
/* harmony import */ var _Display_LoadingPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Display/LoadingPage */ "./components/Display/LoadingPage.tsx");
/* harmony import */ var _GridList_GridAdSellLeases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../GridList/GridAdSellLeases */ "./components/GridList/GridAdSellLeases.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Index\\AdSellLeaseIndex.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const AdSellLeaseIndex = props => {
  const [dataAdSellLeases, setDataAdSellLease] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const [statusLoadingAdSellLease, setStatusLoadingAdSellLease] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _utils__WEBPACK_IMPORTED_MODULE_2__["apolloClient"].query({
      query: _graphql_ad_sell_leases_queries__WEBPACK_IMPORTED_MODULE_3__["HOME_GET_AD_SELL_LEASES"],
      variables: {
        "page": 1,
        "limit": 12,
        "filter": props.filter
      }
    }).then(response => {
      setStatusLoadingAdSellLease(false);

      if (!_modules_validator__WEBPACK_IMPORTED_MODULE_1__["default"].isBlank(response.data) && !_modules_validator__WEBPACK_IMPORTED_MODULE_1__["default"].isBlank(response.data.adSellLeases.edges)) {
        setDataAdSellLease(response.data.adSellLeases.edges);
      }
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, (statusLoadingAdSellLease || dataAdSellLeases && dataAdSellLeases.length > 0) && __jsx("div", {
    className: "banner_block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx(_TitleBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: props.title,
    description: props.description ? props.description : '',
    path: props.path,
    href: props.href,
    type: props.type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), statusLoadingAdSellLease && __jsx(_Display_LoadingPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "loading_page",
    grid: {
      xl: 3,
      lg: 3,
      md: 4,
      sm: 6,
      xs: 12
    },
    numberLimit: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }), !statusLoadingAdSellLease && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_GridList_GridAdSellLeases__WEBPACK_IMPORTED_MODULE_6__["default"], {
    grid: {
      xl: 3,
      lg: 3,
      md: 4,
      sm: 6,
      xs: 12
    },
    gridData: dataAdSellLeases,
    className: "grid__list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "content_index_button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: props.href,
    as: props.path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 59
    }
  }, "Xem th\xEAm"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AdSellLeaseIndex);

/***/ }),

/***/ "./components/Index/HotLocation.tsx":
/*!******************************************!*\
  !*** ./components/Index/HotLocation.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ "@material-ui/icons/NavigateNext");
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/NavigateBefore */ "@material-ui/icons/NavigateBefore");
/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Index\\HotLocation.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




;
//Import Dynamic

 //Import without SSR Slider

const Slider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-slick */ "react-slick", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-slick */ "react-slick")],
    modules: ['react-slick']
  }
});

const HotLocation = props => {
  const NextArrow = props => {
    return __jsx("div", {
      className: 'hot-locations__next__arrow',
      onClick: props.onClick,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }));
  };

  const PrevArrow = props => {
    return __jsx("div", {
      className: 'hot-locations__prev__arrow',
      onClick: props.onClick,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, __jsx(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }));
  };

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: __jsx(NextArrow, {
      className: "",
      onClick: [],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 16
      }
    }),
    prevArrow: __jsx(PrevArrow, {
      className: "",
      onClick: [],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 16
      }
    }),
    variableWidth: true,
    responsive: [{
      breakpoint: 1290,
      settings: {
        slidesToScroll: 2
      }
    }, {
      breakpoint: 875,
      settings: {
        slidesToScroll: 1
      }
    }, {
      breakpoint: 599,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }]
  };
  let dataLocation = [{
    title: "Hà Nội",
    image: "https://inhome.vn/hm_content/uploads/tin-tuc/4/thiet-ke-noi-that-phong-khach-bang-go-hien-dai-dep/thiet-ke-noi-that-phong-khach-don-gian-ma-dep-4.jpg",
    path: "/nha-dat-ban/nha-dat-ban-tai-ha-noi"
  }, {
    title: "Hồ Chí Minh",
    image: "https://noithatmanhhe.vn/media/17531/sang-trong-boi-phong-khach-noi-that-go-tu-nhien-noi-that-manh-he.jpg?width=700&height=422.4418604651163",
    path: "/nha-dat-ban/nha-dat-ban-tai-ho-chi-minh"
  }, {
    title: "Đà Nẵng",
    image: "https://kientrucroman.com.vn/wp-content/uploads/phong-khach-bang-go-cao-cap-2.jpg",
    path: "/nha-dat-ban/nha-dat-ban-tai-da-nang"
  }, {
    title: "Lâm Đồng",
    image: "https://nhabephoanggia.vn/contents/posts/2390.jpg",
    path: "/nha-dat-ban/nha-dat-ban-tai-lam-dong"
  }];
  return __jsx("div", {
    className: "hot-locations",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx(Slider, _extends({}, settings, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }), dataLocation.map((imageObject, index) => {
    return __jsx("div", {
      key: "location_" + String(index),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/nha-dat-ban/[slug]",
      as: imageObject.path,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 72
      }
    }, __jsx("div", {
      className: "hot-locations__item",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "hot-locations__item__image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "hot-locations__item__image__background",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 23
      }
    }), __jsx("img", {
      src: String(imageObject.image),
      alt: "Tìm kiếm nhà Đất tại " + imageObject.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 23
      }
    }))))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HotLocation);

/***/ }),

/***/ "./components/Index/SearchHomepage.jsx":
/*!*********************************************!*\
  !*** ./components/Index/SearchHomepage.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowDropUp */ "@material-ui/icons/ArrowDropUp");
/* harmony import */ var _material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowDropDown */ "@material-ui/icons/ArrowDropDown");
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Eco */ "@material-ui/icons/Eco");
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ViewList */ "@material-ui/icons/ViewList");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Gamepad */ "@material-ui/icons/Gamepad");
/* harmony import */ var _material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Index\\SearchHomepage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  inputbase: {
    width: '500px',
    height: 40,
    float: 'left',
    marginLeft: 10
  },
  searchHome: {
    width: '100%',
    minHeight: '400px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    opacity: '1',
    // position: 'relative',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://i2.wp.com/dogoquoccuong.com/wp-content/uploads/2014/08/DSC09545.jpg?fit=3008%2C2000&ssl=1")'
  },
  searchHomeBody: {
    position: 'absolute',
    top: 100,
    backgroundColor: 'white',
    maxWidth: '100%'
  },
  viewSearch: {
    display: 'inline-block',
    backgroundColor: '#1976d2',
    textAlign: 'center',
    height: 40,
    color: 'white',
    width: 60
  },
  iconSearch: {
    fontSize: 25,
    marginTop: 8
  },
  iconButton: {
    padding: '4px 16px',
    marginTop: 4,
    fontSize: 20
  },
  listItem: {
    backgroundColor: '#e3f2fd',
    "&:hover": {// backgroundColor: '#90caf9',
    }
  },
  textItem: {
    color: '#1976d2'
  },
  popover: {
    pointerEvents: 'auto' // none

  }
}));

const SearchHomepage = () => {
  const classes = useStyles();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);

  const onChangeWards = () => {
    if (event.key == "Enter" || event.keyCode == 13) {// onClickSearch();
    }
  };

  const imageBackground = ['https://i2.wp.com/dogoquoccuong.com/wp-content/uploads/2014/08/DSC09545.jpg?fit=3008%2C2000&ssl=1', 'https://www.noithathoanmy.com.vn/blog/wp-content/uploads/2018/11/noi-that-go-phong-khach-dep.jpg', 'https://vatlieuxaydung.org.vn/Upload/48/Nam_2018/Thang_12/Ngay_19/vlxd.org_nguyentac2.jpg', 'https://www.noithathoanmy.com.vn/blog/wp-content/uploads/2018/11/noi-that-go-phong-khach-dep.jpg'];
  const suggestions = [{
    title: 'Giường ngủ hiện đại',
    link: '/bad'
  }, {
    title: 'Giường ngủ cổ điển',
    link: '/bad'
  }, {
    title: 'Bàn ăn 4 ghế',
    link: '/bad'
  }, {
    title: 'Bàn ăn 6 ghế',
    link: '/bad'
  }, {
    title: 'Bàn ăn hiện đại',
    link: '/bad'
  }];
  const history = [{
    title: 'Giường ngủ',
    link: '/history'
  }, {
    title: 'bàn ăn',
    link: '/history'
  }, {
    title: 'tủ quần áo',
    link: '/history'
  }, {
    title: 'tủ giày',
    link: '/history'
  }, {
    title: 'tủ ghế nhà hàng',
    link: '/history'
  }];

  const renderSuggestion = () => {
    return __jsx("div", {
      style: {
        width: '570px',
        pointerEvents: 'auto'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      align: "left",
      variant: "subtitle2",
      style: {
        padding: '4px 8px',
        cursor: 'default',
        display: 'inline',
        color: '#1976d2',
        fontSize: 14
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, "T\u1EEA KH\xD3A HOT"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
      style: {
        padding: 4,
        cursor: 'default',
        display: 'inline',
        float: 'right'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }
    }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default.a, {
      onClick: () => setOpen(false),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }
    })), suggestions.map((item, count) => {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
        button: true,
        key: count,
        style: {
          fontSize: 14,
          padding: '4px 10px'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 29
        }
      }, item.title);
    }));
  };

  const renderHistory = () => {
    return __jsx("div", {
      style: {
        width: '570px',
        pointerEvents: 'auto'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      align: "left",
      variant: "subtitle2",
      style: {
        padding: '4px 8px',
        cursor: 'default',
        display: 'inline',
        color: '#1976d2',
        fontSize: 14
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }
    }, "L\u1ECACH S\u1EEC T\xCCM KI\u1EC2M"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      align: "right",
      variant: "subtitle2",
      style: {
        padding: 4,
        color: 'red',
        cursor: 'default',
        display: 'inline',
        float: 'right'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }, "X\xF3a"), history.length ? history.map((item, count) => {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
        button: true,
        key: count,
        style: {
          fontSize: 14,
          padding: '4px 10px'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 29
        }
      }, item.title);
    }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      button: true,
      key: count,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 25
      }
    }, "Kh\xF4ng c\xF3 l\u1ECBch s\u1EED t\xECm ki\u1EBFm"));
  };

  const handlePopoverOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 0,
    alignItems: "center",
    justify: "center",
    className: classes.searchHome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    className: classes.searchHomeBody,
    onClick: handlePopoverOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputBase"], {
    className: classes.inputbase,
    placeholder: 'Tìm sản phẩm mong muốn ...',
    inputProps: {
      'aria-label': 'Tìm sản phẩm mong muốn ...'
    },
    onKeyUp: e => onChangeWards(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: classes.viewSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.iconSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 25
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 0,
    alignItems: "center",
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    style: {
      borderRadius: 0
    },
    open: open,
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    } // Ghim
    ,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    } // Vi tri hien thi
    // onMouseLeave={handlePopoverClose}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 21
    }
  }, renderSuggestion(), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 25
    }
  }), renderHistory()))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchHomepage);

/***/ }),

/***/ "./components/Index/TitleBlock.tsx":
/*!*****************************************!*\
  !*** ./components/Index/TitleBlock.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Index\\TitleBlock.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TitleBlock = props => {
  let domTitle = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);

  if (props.type === "h1") {
    domTitle = __jsx("h1", {
      className: "title_block__big_title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, props.title);
  }

  if (props.type === "h2") {
    domTitle = __jsx("h2", {
      className: "title_block__big_title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, props.title);
  }

  if (props.type === "h3") {
    domTitle = __jsx("h2", {
      className: "title_block__big_title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, props.title);
  }

  let domBlockTitle = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);

  if (props.path.indexOf('https://') !== -1) {
    domBlockTitle = __jsx("a", {
      href: props.path,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, domTitle);
  } else if (props.path === '') {
    domBlockTitle = domTitle;
  } else {
    domBlockTitle = __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: props.href ? props.href : props.path,
      as: String(props.path),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, domTitle));
  }

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 0,
    item: true,
    xs: 12,
    direction: "row",
    alignItems: "center",
    className: "title_block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, domBlockTitle, __jsx("div", {
    className: "title_block__big_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, props.description));
};

/* harmony default export */ __webpack_exports__["default"] = (TitleBlock);

/***/ }),

/***/ "./components/Layout/Footer.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Footer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_PhoneIphone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/PhoneIphone */ "@material-ui/icons/PhoneIphone");
/* harmony import */ var _material_ui_icons_PhoneIphone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhoneIphone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Layout\\Footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






const FooterPage = props => {
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 0,
    item: true,
    xs: 12,
    className: "footer",
    direction: "row",
    justify: "center",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 0,
    className: "footer_body",
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 4,
    sm: 12,
    className: "footer_body__item border_bottom_mobile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "footer_body__item_title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "C\xD4NG TY C\u1ED4 PH\u1EA6N N\u1ED8I TH\u1EA4T DODO"), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "footer_body__item_description_icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx("svg", {
    viewBox: "0 0 384 512",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "footer_body__item_description_text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "footer_body__item_description_text_title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "\u0110\u1ECBa ch\u1EC9"), __jsx("p", {
    className: "footer_body__item_description_text_content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "S\u1ED1 12 Khu\u1EA5t Duy Ti\u1EBFn, Thanh Xu\xE2n, H\xE0 N\u1ED9i"))), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "footer_body__item_description_icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_PhoneIphone__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "footer_body__item_description_text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "footer_body__item_description_text_title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "\u0110i\u1EC7n tho\u1EA1i"), __jsx("p", {
    className: "footer_body__item_description_text_content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "0377 535 717"))), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "footer_body__item_description_icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "footer_body__item_description_text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "footer_body__item_description_text_title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "E-mail"), __jsx("p", {
    className: "footer_body__item_description_text_content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "noithatdodo@gmail.com"))), __jsx("div", {
    className: "footer_body__item_branch",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "gov",
    src: "https://static.nhadatmoi.net/default/bocongthuong.png",
    alt: "\u0110\xE3 th\xF4ng b\xE1o v\u1EDBi B\u1ED9 C\xF4ng Th\u01B0\u01A1ng",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }), __jsx("a", {
    href: 'https://www.dmca.com/Protection/Status.aspx?ID=7816605d-fbd2-45f8-a397-eeac42642b75&refurl=https://nhadatmoi.net/',
    target: '_blank',
    rel: 'nofollow',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "https://static.nhadatmoi.net/default/dmca.png",
    alt: "DMCA",
    className: "dmca",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 8,
    sm: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 3,
    xs: 6,
    className: "footer_body__item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "footer_body__item_title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "C\xF4ng ty"), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: '/about-us',
    as: '/about-us',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 61
    }
  }, "V\u1EC1 B\u1EA5t \u0110\u1ED9ng S\u1EA3n M\u1EDBi"))), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: 'https://help.nhadatmoi.net/tuyen-dung',
    rel: 'nofollow',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, "Tuy\u1EC3n d\u1EE5ng")), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: 'https://help.nhadatmoi.net/lien-he/thong-tin-lien-he',
    rel: 'nofollow',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }, "Th\xF4ng tin li\xEAn h\u1EC7")), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: '/sitemap',
    as: '/sitemap',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 59
    }
  }, "Sitemap")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 3,
    xs: 6,
    className: "footer_body__item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "footer_body__item_title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, "\u0110i\u1EC1u kho\u1EA3n"), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: 'https://help.nhadatmoi.net/dieu-khoan/quy-che-hoat-dong',
    rel: 'nofollow',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }, "Quy ch\u1EBF ho\u1EA1t \u0111\u1ED9ng")), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: 'https://help.nhadatmoi.net/dieu-khoan/chinh-sach-bao-mat',
    rel: 'nofollow',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt")), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: 'https://help.nhadatmoi.net/dieu-khoan/chinh-sach-cookie',
    rel: 'nofollow',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, "Ch\xEDnh s\xE1ch Cookie")), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: 'https://help.nhadatmoi.net/dieu-khoan/dieu-khoan-su-dung',
    rel: 'nofollow',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 3,
    xs: 6,
    className: "footer_body__item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "footer_body__item_title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, "Th\xF4ng tin"), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: 'https://nhadatmoi.net/tin-tuc/tin-tuc',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, "Tin t\u1EE9c th\u1ECB tr\u01B0\u1EDDng")), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: 'https://nhadatmoi.net/tin-tuc/blog',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }, "B\xE1o c\xE1o & Ph\xE2n t\xEDch")), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: 'https://nhadatmoi.net/tin-tuc/kien-thuc-moi-gioi',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 19
    }
  }, "Ki\u1EBFn th\u1EE9c cho m\xF4i gi\u1EDBi")), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: 'https://help.nhadatmoi.net/huong-dan',
    rel: 'nofollow',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }, "H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 3,
    xs: 6,
    className: "footer_body__item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "footer_body__item_title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, "M\u1EA1ng x\xE3 h\u1ED9i"), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: 'https://www.facebook.com/nhadatmoi.net/',
    rel: 'nofollow',
    target: '_blank',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }, "Facebook")), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: 'https://www.youtube.com/channel/UCCvlOD7vTPJeYRY8IrINguQ',
    rel: 'nofollow',
    target: '_blank',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  }, "Youtube")), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: 'https://twitter.com/nhadatmoi',
    rel: 'nofollow',
    target: '_blank',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 19
    }
  }, "Twitter")), __jsx("div", {
    className: "footer_body__item_description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: 'https://www.linkedin.com/in/nhadatmoi/',
    rel: 'nofollow',
    target: '_blank',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  }, "LinkedIn"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 6,
    xs: 12,
    className: "footer_body__apps",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "footer_body__apps_title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, "Ph\u01B0\u01A1ng th\u1EE9c thanh to\xE1n"), __jsx("div", {
    className: "footer_body__apps_payment",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://static.nhadatmoi.net/default/visa.png",
    alt: "Visa",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }), __jsx("img", {
    src: "https://static.nhadatmoi.net/default/mastercard.png",
    alt: "Mastercard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  }), __jsx("img", {
    src: "https://static.nhadatmoi.net/default/atm.png",
    alt: "ATM",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 6,
    xs: 12,
    className: "footer_body__apps",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "footer_body__apps_title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, "\u1EE8ng d\u1EE5ng di \u0111\u1ED9ng"), __jsx("div", {
    className: "footer_body__apps_payment",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "no_border",
    src: "https://static.nhadatmoi.net/default/apple-store.svg",
    alt: "Apple Store",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }), __jsx("img", {
    className: "no_border",
    src: "https://static.nhadatmoi.net/default/google-play.svg",
    alt: "Google Play",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 19
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterPage);

/***/ }),

/***/ "./components/Layout/Header.jsx":
/*!**************************************!*\
  !*** ./components/Layout/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/GridList */ "@material-ui/core/GridList");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "@material-ui/core/GridListTile");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/GridListTileBar */ "@material-ui/core/GridListTileBar");
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "@material-ui/core/ListSubheader");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Info */ "@material-ui/icons/Info");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux-i18n */ "react-redux-i18n");
/* harmony import */ var react_redux_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "@material-ui/icons/StarBorder");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../constants/index */ "./constants/index.ts");
/* harmony import */ var _material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Gamepad */ "@material-ui/icons/Gamepad");
/* harmony import */ var _material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Login_Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Login/Modal */ "./components/Login/Modal.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Grow */ "@material-ui/core/Grow");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Popper */ "@material-ui/core/Popper");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_27__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Layout\\Header.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





























const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  rootPopover: {
    pointerEvents: 'none',
    position: 'absolute',
    marginTop: 10,
    overflow: 'auto'
  },
  listItem: {
    display: 'block',
    backgroundColor: '#e3f2fd',
    pointerEvents: 'auto',
    fontSize: 14,
    padding: 0,
    overflowX: 'hidden',
    "&:hover": {
      backgroundColor: '#90caf9'
    }
  },
  title: {
    display: 'inline',
    cursor: 'default',
    color: 'white',
    fontWeight: 400,
    fontSize: 14,
    padding: '0 12px' // borderLeft: '2px solid white',

  },
  header: {
    height: 40,
    width: '100%',
    backgroundColor: '#1976d2'
  },
  divider: {
    height: 28,
    margin: 4,
    color: 'white',
    backgroundColor: 'white',
    display: 'inline'
  },
  textItem: {
    color: '#1976d2',
    fontSize: 14,
    paddingRight: 20
  },
  root: {
    display: 'inline-block',
    zIndex: 99999988888888888
  },
  paper: {
    marginRight: theme.spacing(2)
  }
}));

const Actions = props => {
  const classes = useStyles();
  const [countMenu, setCountMenu] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [openMenu, setOpenMenu] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const anchorRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  const handleToggle = index => {
    setOpenMenu(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(false);
    }
  } // return focus to the button when we transitioned from !open -> open


  const prevOpen = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(openMenu);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (prevOpen.current === true && openMenu === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openMenu;
  }, [openMenu]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    container: true,
    spacing: 0,
    className: classes.header,
    alignItems: "center",
    justify: "center",
    direction: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
    color: "inherit",
    "aria-owns": openMenu ? 'mouse-over-popover' : undefined,
    "aria-haspopup": "true",
    style: {
      color: 'white',
      fontWeight: 500,
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_18___default.a, {
    style: {
      padding: '0 4px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }), " N\u1ED9i Th\u1EA5t Dodo")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    item: true,
    xs: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
    ref: anchorRef,
    "aria-controls": openMenu ? "menu-list-grow" : undefined,
    "aria-haspopup": "true",
    onMouseEnter: handleToggle,
    className: classes.title // style={{ textDecoration: indexOpen === index ? 'underline ' : 'none' }}
    // onMouseLeave={popoverClose}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, "Button"), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_25___default.a, {
    open: openMenu,
    anchorEl: anchorRef.current,
    role: undefined,
    transition: true,
    disablePortal: true,
    style: {
      zIndex: 9999
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, ({
    TransitionProps,
    placement
  }) => __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_23___default.a, _extends({}, TransitionProps, {
    style: {
      transformOrigin: placement === "bottom" ? "center top" : "center bottom"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_22___default.a, {
    onClickAway: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_27___default.a, {
    autoFocusItem: openMenu,
    id: "menu-list-grow",
    onKeyDown: handleListKeyDown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_26___default.a, {
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 23
    }
  }, "Profile"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_26___default.a, {
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 23
    }
  }, "My account"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_26___default.a, {
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 23
    }
  }, "Logout")))))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, __jsx(_Login_Modal__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ }),

/***/ "./components/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Layout/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Layout/Footer.tsx");
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/validator */ "./modules/validator.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Layout\\Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];








const Logo = __webpack_require__(/*! ./logo.png */ "./components/Layout/logo.png");

const LayoutPage = props => {
  const [statusModal, setModal] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);

  const updateModal = data => {
    if (typeof props.updateModal !== "undefined") {
      props.updateModal(data);
    } else {
      setModal(data);
    }
  };

  const [dataCompareLocal, setDataCompareLocal] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_5__["localStorageCompareKey"]) && !_modules_validator__WEBPACK_IMPORTED_MODULE_4__["default"].isBlank(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_5__["localStorageCompareKey"]))) {
      try {
        setDataCompareLocal(JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_5__["localStorageCompareKey"])));
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  let schemaObject = '{"@context": "https://schema.org", "@type": "LocalBusiness", "name": "Bất Động Sản Nội thất Dodo", "image": "https://pbs.twimg.com/profile_images/1230120113887531008/BPH75bW0_400x400.jpg", "additionalType":["https://vi.wikipedia.org/wiki/B%E1%BA%A5t_%C4%91%E1%BB%99ng_s%E1%BA%A3n","https://vi.wikipedia.org/wiki/M%C3%B4i_gi%E1%BB%9Bi_b%E1%BA%A5t_%C4%91%E1%BB%99ng_s%E1%BA%A3n","https://vi.wikipedia.org/wiki/Ng%C6%B0%E1%BB%9Di_m%C3%B4i_gi%E1%BB%9Bi"], "paymentAccepted":"Cash, Visa, Mastercard, American Express, Debit, PayPal, Apple Pay", "mainEntityOfPage":"https://www.google.com/maps?cid=6255054938969620475", "hasmap":"https://search.google.com/local/writereview?placeid=ChIJ-UI6Mh5TNDER-z_Wh1NrzlY", "description":"Nội thất Dodo đón đầu xu hướng bất động sản 4.0 tại Việt Nam, tích hợp trí tuệ nhân tạo để xử lý các dữ liệu, phân tích nhu cầu của cả người mua lẫn người bán", "@id": "https://nhadatmoi.net/", "url": "https://nhadatmoi.net/", "telephone": "0377 535 717", "priceRange": "1000 $", "address": { "@type": "PostalAddress", "streetAddress": "Số 348 Tố Hữu, phường La Khê, quận Hà Đông", "addressLocality": "Hà Nội", "postalCode": "100000", "addressCountry": "VN"}, "geo": { "@type": "GeoCoordinates", "latitude": 20.9709496, "longitude": 105.7531617 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification","dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" }, "sameAs": ["https://www.youtube.com/channel/UCCvlOD7vTPJeYRY8IrINguQ","https://bdsnhadatmoi.blogspot.com", "https://www.facebook.com/nhadatmoi.net", "https://bdsnhadatmoi.blogspot.com", "https://vi.gravatar.com/bdsnhadatmoi", "https://bdsnhadatmoi.tumblr.com", "https://bdsnhadatmoi.weebly.com", "https://twitter.com/bdsnhadatmoi", "https://www.reddit.com/user/bdsnhadatmoi", "https://www.diigo.com/profile/bdsnhadatmoi", "https://www.artfire.com/ext/people/bdsnhadatmoi", "https://www.smashwords.com/profile/view/bdsnhadatmoi", "http://play.fm/bdsnhadatmoi", "https://www.last.fm/user/bdsnhadatmoi", "https://www.strava.com/athletes/bdsnhadatmoi", "https://github.com/bdsnhadatmoi", "https://www.tripadvisor.com.vn/Profile/bdsnhadatmoi", "http://bit.ly/2uaZPLm", "https://getpocket.com/@bdsnhadatmoi", "https://www.pinterest.com/bdsnhadatmoi", "https://www.linkedin.com/in/bdsnhadatmoi", "https://www.flickr.com/people/bdsnhadatmoi", "https://about.me/bdsnhadatmoi", "https://www.instapaper.com/p/bdsnhadatmoi", "https://www.behance.net/bdsnhadatmoi", "https://myspace.com/bdsnhadatmoi", "https://www.goodreads.com/bdsnhadatmoi", "https://dribbble.com/bdsnhadatmoi", "https://www.deviantart.com/bdsnhadatmoi", "https://www.plurk.com/bdsnhadatmoi", "http://www.folkd.com/user/bdsnhadatmoi", "https://www.ted.com/profiles/19025977", "https://kinja.com/bdsnhadatmoi", "https://ello.co/bdsnhadatmoi", "https://coub.com/bdsnhadatmoi", "https://mix.com/bdsnhadatmoi", "http://www.authorstream.com/bdsnhadatmoi", "https://soundcloud.com/bdsnhadatmoi", "https://medium.com/@bdsnhadatmoi", "https://codepen.io/bdsnhadatmoi", "https://www.evernote.com/pub/ndmh269/tintuc", "https://disqus.com/by/bdsnhadatmoi", "https://www.scoop.it/u/b-t-ng-s-n-nha-t-m-i", "https://www.vingle.net/bdsnhadatmoi", "https://www.quora.com/profile/Bat-Dong-San-Nha-Dat-Moi", "https://bdsnhadatmoi.livejournal.com", "https://angel.co/bdsnhadatmoi", "https://www.producthunt.com/@bdsnhadatmoi", "https://speakerdeck.com/bdsnhadatmoi", "https://www.wikihow.com/User:Bdsnhadatmoi", "http://bdsnhadatmoi.brandyourself.com"]}';
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, props.title), __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "canonical",
    href: props.canonical,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: Logo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900&display=swap&subset=vietnamese",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "google-site-verification",
    content: _constants__WEBPACK_IMPORTED_MODULE_5__["googleSearchConsole"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), !_modules_validator__WEBPACK_IMPORTED_MODULE_4__["default"].isBlank(props.description) && __jsx("meta", {
    name: "description",
    content: props.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:title",
    content: props.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:type",
    content: "website",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "fb:app_id",
    content: "937234366335504",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "fb:admins",
    content: "100004244474013",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:site_name",
    content: "N\u1ED9i th\u1EA5t Dodo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:url",
    content: props.canonical,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:image",
    content: props.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:description",
    content: props.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:card",
    content: "summary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:site",
    content: "@nhadatmoi",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:creator",
    content: "@nhadatmoi",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:title",
    content: props.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:description",
    content: props.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:image",
    content: props.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: schemaObject
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }), props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutPage);

/***/ }),

/***/ "./components/Layout/logo.png":
/*!************************************!*\
  !*** ./components/Layout/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADRSURBVEhL7ZMxCsJAEEW9hqfUylPkBHoB9QKClpZ24gm0UYSApdXKD1ky7nxjPhhMsQ9etVkem50dhT+Qo70iRYvtNRS7m1NFio5nR6pKjlJYEKoMP7o8lC44WV3q1e64KHsWi/29Xn0P2+Dm9HD7IMNF7Sms03UTQNgG2R+IMjpHoQ1H2oKQIUUhIpFz+aTfWBlSlA1NrydN7zC9Y7YHMly0mt7E+YfpteFqeslehou2wU7EhusbUjQNRlVylMKCUGX4UfYkoIoU/RU52iMhvACYfQkgWr5drAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./components/Login/Modal.jsx":
/*!************************************!*\
  !*** ./components/Login/Modal.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
/* harmony import */ var _public_Image_login_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/Image/login.png */ "./public/Image/login.png");
/* harmony import */ var _public_Image_login_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_Image_login_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Login\\Modal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  longIn: {
    width: '100%',
    height: 600,
    textAlign: 'center',
    overflow: 'hidden',
    // backgroundImage: 'url("https://static.nhadatmoi.net/default/login-background.svg")',
    // backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center',
    backgroundSize: '100%',
    position: 'relative',
    padding: '0 20px'
  },
  logInClose: {
    width: '100%',
    position: 'absolute',
    top: '0px',
    right: '0px',
    textAlign: 'right'
  },
  button: {
    width: '40px!important',
    height: '40px!important'
  },
  modal: {
    // maxWidth: '',
    height: 600,
    margin: '0 auto'
  },
  title: {
    float: 'left',
    margin: '70px 0 8px 0',
    // font-family: $fontFamily;
    fontSize: '30px',
    fontWeight: 900,
    color: '#1976d2',
    width: '100%',
    textAlign: 'center'
  },
  description: {
    float: 'left',
    // font-family: $fontFamily;
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#0000008a',
    width: '100%',
    textAlign: 'center'
  }
}));
const tabs = [{
  value: 1,
  label: 'Đăng Nhập'
}, {
  value: 2,
  label: 'Tạo Tài Khoản'
}];

const LoginModal = () => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const classes = useStyles();
  const [valueTab, setValueTab] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(1);

  const renderGoogle = () => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "login__modal__block__google",
      href: _constants__WEBPACK_IMPORTED_MODULE_5__["googleLogin"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 7
      }
    }, __jsx("svg", {
      viewBox: "0 0 533.5 544.3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }
    }, __jsx("g", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }, __jsx("path", {
      className: "st0",
      d: "M533.5,278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1,33.8-25.7,63.7-54.4,82.7v68h87.7 C503.9,431.2,533.5,361.2,533.5,278.4z",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "st1",
      d: "M272.1,544.3c73.4,0,135.3-24.1,180.4-65.7l-87.7-68c-24.4,16.6-55.9,26-92.6,26c-71,0-131.2-47.9-152.8-112.3 H28.9v70.1C75.1,486.3,169.2,544.3,272.1,544.3z",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "st2",
      d: "M119.3,324.3c-11.4-33.8-11.4-70.4,0-104.2V150H28.9c-38.6,76.9-38.6,167.5,0,244.4L119.3,324.3z",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "st3",
      d: "M272.1,107.7c38.8-0.6,76.3,14,104.4,40.8l0,0l77.7-77.7C405,24.6,339.7-0.8,272.1,0C169.2,0,75.1,58,28.9,150\tl90.4,70.1C140.8,155.6,201.1,107.7,272.1,107.7z",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    }))), __jsx("p", {
      className: "google",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }
    }, "\u0110\u0102NG NH\u1EACP B\u1EB0NG GOOGLE"));
  };

  const renderZalo = () => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "login__modal__block__zalo",
      href: _constants__WEBPACK_IMPORTED_MODULE_5__["zaloLogin"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 7
      }
    }, __jsx("svg", {
      viewBox: "0 0 460.1 436.6",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    }, __jsx("path", {
      className: "st0",
      d: "M82.6 380.9c-1.8-.8-3.1-1.7-1-3.5 1.3-1 2.7-1.9 4.1-2.8 13.1-8.5 25.4-17.8 33.5-31.5 6.8-11.4 5.7-18.1-2.8-26.5C69 269.2 48.2 212.5 58.6 145.5 64.5 107.7 81.8 75 107 46.6c15.2-17.2 33.3-31.1 53.1-42.7 1.2-.7 2.9-.9 3.1-2.7-.4-1-1.1-.7-1.7-.7-33.7 0-67.4-.7-101 .2C28.3 1.7.5 26.6.6 62.3c.2 104.3 0 208.6 0 313 0 32.4 24.7 59.5 57 60.7 27.3 1.1 54.6.2 82 .1 2 .1 4 .2 6 .2H290c36 0 72 .2 108 0 33.4 0 60.5-27 60.5-60.3v-.6-58.5c0-1.4.5-2.9-.4-4.4-1.8.1-2.5 1.6-3.5 2.6-19.4 19.5-42.3 35.2-67.4 46.3-61.5 27.1-124.1 29-187.6 7.2-5.5-2-11.5-2.2-17.2-.8-8.4 2.1-16.7 4.6-25 7.1-24.4 7.6-49.3 11-74.8 6zm72.5-168.5c1.7-2.2 2.6-3.5 3.6-4.8 13.1-16.6 26.2-33.2 39.3-49.9 3.8-4.8 7.6-9.7 10-15.5 2.8-6.6-.2-12.8-7-15.2-3-.9-6.2-1.3-9.4-1.1-17.8-.1-35.7-.1-53.5 0-2.5 0-5 .3-7.4.9-5.6 1.4-9 7.1-7.6 12.8 1 3.8 4 6.8 7.8 7.7 2.4.6 4.9.9 7.4.8 10.8.1 21.7 0 32.5.1 1.2 0 2.7-.8 3.6 1-.9 1.2-1.8 2.4-2.7 3.5-15.5 19.6-30.9 39.3-46.4 58.9-3.8 4.9-5.8 10.3-3 16.3s8.5 7.1 14.3 7.5c4.6.3 9.3.1 14 .1 16.2 0 32.3.1 48.5-.1 8.6-.1 13.2-5.3 12.3-13.3-.7-6.3-5-9.6-13-9.7-14.1-.1-28.2 0-43.3 0zm116-52.6c-12.5-10.9-26.3-11.6-39.8-3.6-16.4 9.6-22.4 25.3-20.4 43.5 1.9 17 9.3 30.9 27.1 36.6 11.1 3.6 21.4 2.3 30.5-5.1 2.4-1.9 3.1-1.5 4.8.6 3.3 4.2 9 5.8 14 3.9 5-1.5 8.3-6.1 8.3-11.3.1-20 .2-40 0-60-.1-8-7.6-13.1-15.4-11.5-4.3.9-6.7 3.8-9.1 6.9zm69.3 37.1c-.4 25 20.3 43.9 46.3 41.3 23.9-2.4 39.4-20.3 38.6-45.6-.8-25-19.4-42.1-44.9-41.3-23.9.7-40.8 19.9-40 45.6zm-8.8-19.9c0-15.7.1-31.3 0-47 0-8-5.1-13-12.7-12.9-7.4.1-12.3 5.1-12.4 12.8-.1 4.7 0 9.3 0 14v79.5c0 6.2 3.8 11.6 8.8 12.9 6.9 1.9 14-2.2 15.8-9.1.3-1.2.5-2.4.4-3.7.2-15.5.1-31 .1-46.5z",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }), __jsx("path", {
      className: "st1",
      d: "M139.5 436.2c-27.3 0-54.7.9-82-.1-32.3-1.3-57-28.4-57-60.7 0-104.3.2-208.6 0-313C.5 26.7 28.4 1.8 60.5.9c33.6-.9 67.3-.2 101-.2.6 0 1.4-.3 1.7.7-.2 1.8-2 2-3.1 2.7-19.8 11.6-37.9 25.5-53.1 42.7-25.1 28.4-42.5 61-48.4 98.9-10.4 66.9 10.5 123.7 57.8 171.1 8.4 8.5 9.5 15.1 2.8 26.5-8.1 13.7-20.4 23-33.5 31.5-1.4.8-2.8 1.8-4.2 2.7-2.1 1.8-.8 2.7 1 3.5.4.9.9 1.7 1.5 2.5 11.5 10.2 22.4 21.1 33.7 31.5 5.3 4.9 10.6 10 15.7 15.1 2.1 1.9 5.6 2.5 6.1 6.1z",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }
    }), __jsx("path", {
      className: "st2",
      d: "M139.5 436.2c-.5-3.5-4-4.1-6.1-6.2-5.1-5.2-10.4-10.2-15.7-15.1-11.3-10.4-22.2-21.3-33.7-31.5-.6-.8-1.1-1.6-1.5-2.5 25.5 5 50.4 1.6 74.9-5.9 8.3-2.5 16.6-5 25-7.1 5.7-1.5 11.7-1.2 17.2.8 63.4 21.8 126 19.8 187.6-7.2 25.1-11.1 48-26.7 67.4-46.2 1-1 1.7-2.5 3.5-2.6.9 1.4.4 2.9.4 4.4v58.5c.2 33.4-26.6 60.6-60 60.9h-.5c-36 .2-72 0-108 0H145.5c-2-.2-4-.3-6-.3z",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }
    }), __jsx("path", {
      className: "st1",
      d: "M155.1 212.4c15.1 0 29.3-.1 43.4 0 7.9.1 12.2 3.4 13 9.7.9 7.9-3.7 13.2-12.3 13.3-16.2.2-32.3.1-48.5.1-4.7 0-9.3.2-14-.1-5.8-.3-11.5-1.5-14.3-7.5s-.8-11.4 3-16.3c15.4-19.6 30.9-39.3 46.4-58.9.9-1.2 1.8-2.4 2.7-3.5-1-1.7-2.4-.9-3.6-1-10.8-.1-21.7 0-32.5-.1-2.5 0-5-.3-7.4-.8-5.7-1.3-9.2-7-7.9-12.6.9-3.8 3.9-6.9 7.7-7.8 2.4-.6 4.9-.9 7.4-.9 17.8-.1 35.7-.1 53.5 0 3.2-.1 6.3.3 9.4 1.1 6.8 2.3 9.7 8.6 7 15.2-2.4 5.7-6.2 10.6-10 15.5-13.1 16.7-26.2 33.3-39.3 49.8-1.1 1.3-2.1 2.6-3.7 4.8z",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    }), __jsx("path", {
      className: "st1",
      d: "M271.1 159.8c2.4-3.1 4.9-6 9-6.8 7.9-1.6 15.3 3.5 15.4 11.5.3 20 .2 40 0 60 0 5.2-3.4 9.8-8.3 11.3-5 1.9-10.7.4-14-3.9-1.7-2.1-2.4-2.5-4.8-.6-9.1 7.4-19.4 8.7-30.5 5.1-17.8-5.8-25.1-19.7-27.1-36.6-2.1-18.3 4-33.9 20.4-43.5 13.6-8.1 27.4-7.4 39.9 3.5zm-35.4 36.5c.2 4.4 1.6 8.6 4.2 12.1 5.4 7.2 15.7 8.7 23 3.3 1.2-.9 2.3-2 3.3-3.3 5.6-7.6 5.6-20.1 0-27.7-2.8-3.9-7.2-6.2-11.9-6.3-11-.7-18.7 7.8-18.6 21.9zM340.4 196.9c-.8-25.7 16.1-44.9 40.1-45.6 25.5-.8 44.1 16.3 44.9 41.3.8 25.3-14.7 43.2-38.6 45.6-26.1 2.6-46.8-16.3-46.4-41.3zm25.1-2.4c-.2 5 1.3 9.9 4.3 14 5.5 7.2 15.8 8.6 23 3 1.1-.8 2-1.8 2.9-2.8 5.8-7.6 5.8-20.4.1-28-2.8-3.8-7.2-6.2-11.9-6.3-10.8-.6-18.4 7.6-18.4 20.1zM331.6 177c0 15.5.1 31 0 46.5.1 7.1-5.5 13-12.6 13.2-1.2 0-2.5-.1-3.7-.4-5-1.3-8.8-6.6-8.8-12.9v-79.5c0-4.7-.1-9.3 0-14 .1-7.7 5-12.7 12.4-12.7 7.6-.1 12.7 4.9 12.7 12.9.1 15.6 0 31.3 0 46.9z",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }
    }), __jsx("path", {
      className: "st0",
      d: "M235.7 196.3c-.1-14.1 7.6-22.6 18.5-22 4.7.2 9.1 2.5 11.9 6.4 5.6 7.5 5.6 20.1 0 27.7-5.4 7.2-15.7 8.7-23 3.3-1.2-.9-2.3-2-3.3-3.3-2.5-3.5-3.9-7.7-4.1-12.1zM365.5 194.5c0-12.4 7.6-20.7 18.4-20.1 4.7.1 9.1 2.5 11.9 6.3 5.7 7.6 5.7 20.5-.1 28-5.6 7.1-16 8.3-23.1 2.7-1.1-.8-2-1.8-2.8-2.9-3-4.1-4.4-9-4.3-14z",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }
    }), __jsx("path", {
      className: "st3",
      d: "M66 1h328.1c35.9 0 65 29.1 65 65v303c0 35.9-29.1 65-65 65H66c-35.9 0-65-29.1-65-65V66C1 30.1 30.1 1 66 1z",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    })), __jsx("p", {
      className: "zalo",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }
    }, "\u0110\u0102NG NH\u1EACP B\u1EB0NG ZALO"));
  };

  const renderFace = () => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "login__modal__block__facebook",
      href: _constants__WEBPACK_IMPORTED_MODULE_5__["facebookLogin"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 7
      }
    }, __jsx("svg", {
      viewBox: "0 0 512 512",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }
    }, __jsx("path", {
      d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }
    })), __jsx("p", {
      className: "facebook",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }
    }, "\u0110\u0102NG NH\u1EACP B\u1EB0NG FACEBOOK"));
  };

  const handleTabsChange = (event, value) => {
    setValueTab(value);
  };

  const renderTabs = () => {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      square: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
      onChange: handleTabsChange,
      scrollButtons: "auto",
      indicatorColor: "primary",
      textColor: "primary",
      variant: "standard",
      centered: true,
      value: valueTab,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    }, tabs.map(tab => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: tab.value,
      label: tab.label,
      value: tab.value,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 32
      }
    }))), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, valueTab === 1 && renderLogin(), valueTab === 2 && renderCreateAccount())));
  };

  const renderLogin = () => {
    return __jsx("div", {
      className: "login__modal__block",
      style: {
        padding: '10px 40px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 7
      }
    }, __jsx("div", {
      style: {
        padding: '8px 0'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
      fullWidth: true,
      size: "small",
      label: "Email / S\u0110T",
      variant: "outlined",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 11
      }
    })), __jsx("div", {
      style: {
        padding: '8px 0'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
      fullWidth: true,
      size: "small",
      label: "M\u1EADt kh\u1EA9u",
      variant: "outlined",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 11
      }
    })), __jsx("div", {
      style: {
        height: 30,
        padding: '8px 0',
        float: 'left',
        width: 300
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      style: {
        color: '#1976d2',
        cursor: 'default'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }
    }, "Qu\xEAn m\u1EADt kh\u1EA9u?")), __jsx("div", {
      style: {
        float: 'right'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "contained",
      style: {
        color: '#1976d2'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }
    }, "\u0110\u0103ng nh\u1EADp")), __jsx("div", {
      style: {
        padding: '60px 0'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }
    }, renderGoogle(), renderZalo(), renderFace()));
  };

  const renderCreateAccount = () => {
    return __jsx("div", {
      className: "login__modal__block",
      style: {
        padding: '10px 40px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 7
      }
    }, __jsx("div", {
      style: {
        padding: '8px 0'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
      fullWidth: true,
      size: "small",
      label: "H\u1ECD t\xEAn",
      variant: "outlined",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 11
      }
    })), __jsx("div", {
      style: {
        padding: '8px 0'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
      fullWidth: true,
      size: "small",
      label: "S\u0110T",
      variant: "outlined",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    })), __jsx("div", {
      style: {
        padding: '8px 0'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
      fullWidth: true,
      size: "small",
      label: "Email",
      variant: "outlined",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 11
      }
    })), __jsx("div", {
      style: {
        padding: '8px 0'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
      fullWidth: true,
      size: "small",
      label: "M\xE3 x\xE1c th\u1EF1c",
      variant: "outlined",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 11
      }
    })), __jsx("div", {
      style: {
        padding: '8px 0'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
      fullWidth: true,
      size: "small",
      label: "M\u1EADt kh\u1EA9u",
      variant: "outlined",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 11
      }
    })), __jsx("div", {
      style: {
        padding: '8px 0'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
      fullWidth: true,
      size: "small",
      label: "Gi\u1EDBi t\xEDnh",
      variant: "outlined",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 11
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "contained",
      style: {
        float: 'right',
        color: '#1976d2'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }
    }, "T\u1EA1o t\xE0i kho\u1EA3n"));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    color: "inherit",
    style: {
      color: 'white',
      fontWeight: 500,
      padding: '0 20px',
      float: 'right',
      cursor: 'default'
    },
    onClick: () => setOpen(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, "\u0110\u0103ng nh\u1EADp"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    fullWidth: true,
    open: open,
    onClose: () => setOpen(false),
    "aria-labelledby": "max-width-dialog-title",
    maxWidth: 'md',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.longIn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.logInClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    variant: "outlined",
    className: classes.button,
    onClick: () => setOpen(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: classes.modal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }, valueTab === 1 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 4,
    style: {
      borderRight: '4px solid #e0e0e0',
      height: 600
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 19
    }
  }, " \u0110\u0103ng nh\u1EADp "), __jsx("div", {
    className: classes.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 19
    }
  }, "\u0110\u0103ng nh\u1EADp \u0111\u1EC3 theo d\xF5i \u0111\u01A1n h\xE0ng, l\u01B0u danh s\xE1ch s\u1EA3n ph\u1EA9m y\xEAu th\xEDch, nh\u1EADn nhi\u1EC1u \u01B0u \u0111\xE3i h\u1EA5p d\u1EABn."), __jsx("img", {
    src: _public_Image_login_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    style: {
      height: 350,
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 19
    }
  })), valueTab === 2 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 4,
    style: {
      borderRight: '4px solid #e0e0e0',
      height: 600
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 19
    }
  }, " T\u1EA1o t\xE0i kho\u1EA3n "), __jsx("div", {
    className: classes.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 19
    }
  }, "T\u1EA1o t\xE0i kho\u1EA3n \u0111\u1EC3 theo d\xF5i \u0111\u01A1n h\xE0ng, l\u01B0u danh s\xE1ch s\u1EA3n ph\u1EA9m y\xEAu th\xEDch, nh\u1EADn nhi\u1EC1u \u01B0u \u0111\xE3i h\u1EA5p d\u1EABn"), __jsx("img", {
    src: _public_Image_login_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    style: {
      height: 350,
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    style: {
      padding: '8px 0 0 0',
      color: '#1976d2',
      fontSize: 20,
      fontWeight: 500
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }, "N\u1ED9i th\u1EA5t Dodo"), renderTabs()))))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ }),

/***/ "./components/Search/KeywordSlide.jsx":
/*!********************************************!*\
  !*** ./components/Search/KeywordSlide.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ "@material-ui/icons/NavigateNext");
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/NavigateBefore */ "@material-ui/icons/NavigateBefore");
/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles/createBreakpoints */ "@material-ui/core/styles/createBreakpoints");
/* harmony import */ var _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Search\\KeywordSlide.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({}));

const KeywordSlide = props => {
  const classes = useStyles();

  const NextArrow = props => {
    const {
      onClick
    } = props;
    return __jsx("div", {
      className: 'keyword-search__next__arrow',
      onClick: onClick,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, __jsx(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }));
  };

  const PrevArrow = props => {
    const {
      onClick
    } = props;
    return __jsx("div", {
      className: 'keyword-search__prev__arrow',
      onClick: onClick,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, __jsx(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }));
  };

  const dataSearch = [{
    title: "Giường ngủ hiện đại",
    path: "/du-an/vinhomes-central-park-pid-35872"
  }, {
    title: "Tủ quần áo thời trang",
    path: "/du-an/vinhomes-grand-park-quan-9-pid-37584"
  }, {
    title: "Bàn trà phòng khách hiện đại",
    path: "/du-an/vinhomes-smart-city-pid-37191"
  }, {
    title: "Bàn trà phòng khách cổ điển",
    path: "/du-an/vinhomes-ocean-park-gia-lam-pid-37597"
  }, {
    title: "Tủ bếp tiện nghi",
    path: "/du-an/vung-tau-pearl-pid-48674"
  }, {
    title: "Nội thất sang trọng",
    path: "/du-an/grandeur-palace-pid-50234"
  }, {
    title: "Giường ngủ cổ điển",
    path: "/du-an/diamond-island-pid-335"
  }, {
    title: "Nội thất sang trọng",
    path: "/du-an/the-sun-avenue-pid-15"
  }, {
    title: "Bàn ăn cổ điển",
    path: "/nha-dat-ban/nha-dat-ban-tai-hai-phong"
  }, {
    title: "Bàn ăn hiện đại",
    path: "/nha-dat-ban/nha-dat-ban-tai-ha-noi"
  }];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: __jsx(NextArrow, {
      onClick: [],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 16
      }
    }),
    prevArrow: __jsx(PrevArrow, {
      onClick: [],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 16
      }
    }),
    variableWidth: true,
    responsive: [{
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return __jsx("div", {
    className: "keyword-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    style: {
      fontSize: 20,
      padding: 10,
      fontWeight: 700,
      color: '#1976d2'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, "T\u1EEB kh\xF3a t\xECm ki\u1EBFm HOT"), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, settings, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }), dataSearch.map((searchObject, index) => {
    return __jsx("div", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: searchObject.path,
      as: searchObject.path,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 19
      }
    }, __jsx("div", {
      style: {
        backgroundColor: "#1976d2",
        color: 'white',
        alignItems: 'center',
        display: 'flex',
        fontSize: 16,
        fontWeight: 400
      },
      className: "keyword-search__item",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 21
      }
    }, searchObject.title))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (KeywordSlide);

/***/ }),

/***/ "./constants/index.ts":
/*!****************************!*\
  !*** ./constants/index.ts ***!
  \****************************/
/*! exports provided: mainURL, upgradePlanURL, upgradeIconURL, logoURL, apiBaseURL, apiGraphQLURL, googleLogin, zaloLogin, facebookLogin, urlImageAdSellLease, urlImageBroker, urlImageProject, imageDefaultBroker, imageDefaultProject, imageDefaultSlider, googleAnalyticsCode, googleSearchConsole, localStorageCompareKey, adSellLeaseType, localStorageViewed, localStorageProjectViewed, adSellLeaseCategory, titles, listMenu, products */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adSellLeaseType", function() { return adSellLeaseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageViewed", function() { return localStorageViewed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageProjectViewed", function() { return localStorageProjectViewed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adSellLeaseCategory", function() { return adSellLeaseCategory; });
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
  id: '5e11af04411e1ea72a1fcbde',
  slug: '/nha-dat-ban',
  name: 'Nhà đất bán',
  parent_slug: ''
}, {
  id: '5e11af04411e1ea72a1fcbdf',
  slug: '/nha-dat-thue',
  name: 'Nhà đất thuê',
  parent_slug: ''
}, {
  id: '5e11af04411e1ea72a1fcbe0',
  slug: '/nha-dat-can-mua',
  name: 'Nhà đất cần mua',
  parent_slug: ''
}, {
  id: '5e11af04411e1ea72a1fcbe1',
  slug: '/nha-dat-can-thue',
  name: 'Nhà đất cần thuê',
  parent_slug: ''
}];
const adSellLeaseType = [{
  id: '5e7d5f543f663879c6750927,5e11b046521813a78cde85ac,5e11b046521813a78cde85aa,5e7d61323f663879c6750997,5e11b046521813a78cde85ab',
  slug: '/mua-ban-nha',
  name: 'Bán nhà',
  parent_slug: '',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e11b046521813a78cde85ac',
  slug: '/mua-ban-nha-mat-pho',
  name: 'Bán nhà mặt phố',
  parent_slug: '/mua-ban-nha',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e11b046521813a78cde85aa',
  slug: '/mua-ban-nha-rieng',
  name: 'Bán nhà riêng',
  parent_slug: '/mua-ban-nha',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d61323f663879c6750997',
  slug: '/mua-ban-nha-pho-shophouse',
  name: 'Bán nhà phố thương mại (shophouse)',
  parent_slug: '/mua-ban-nha',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e11b046521813a78cde85ab',
  slug: '/mua-ban-nha-lien-ke',
  name: 'Bán nhà liền kề',
  parent_slug: '/mua-ban-nha',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e11b046521813a78cde85a9,5e7d620f3f663879c67509f8,5e7d622d3f663879c6750a07,5e7d624b3f663879c6750a15,5e7d626b3f663879c6750a23,5e7d628b3f663879c6750a34,5e7d62a53f663879c6750a42,5e7d62cc3f663879c6750a51,5e7d62fc3f663879c6750a6a,5e7d63193f663879c6750a7b,5e7d632f3f663879c6750a8d,5e9924f6716ee964b5fdcc23',
  slug: '/mua-ban-can-ho-chung-cu',
  name: "Bán căn hộ, chung cư",
  parent_slug: '',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d620f3f663879c67509f8',
  slug: '/mua-ban-can-ho-gia-re',
  name: "Căn hộ chung cư giá rẻ",
  parent_slug: '/mua-ban-can-ho-chung-cu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d622d3f663879c6750a07',
  slug: '/mua-ban-can-ho-mini',
  name: "Căn hộ chung cư mini",
  parent_slug: '/mua-ban-can-ho-chung-cu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d624b3f663879c6750a15',
  slug: '/mua-ban-can-ho-trung-cap',
  name: "Căn hộ chung cư trung cấp",
  parent_slug: '/mua-ban-can-ho-chung-cu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d626b3f663879c6750a23',
  slug: '/mua-ban-can-ho-cao-cap',
  name: "Căn hộ chung cư cao cấp",
  parent_slug: '/mua-ban-can-ho-chung-cu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d628b3f663879c6750a34',
  slug: '/mua-ban-can-ho-penthouse',
  name: "Căn hộ penthouse",
  parent_slug: '/mua-ban-can-ho-chung-cu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d62a53f663879c6750a42',
  slug: '/mua-ban-can-ho-skyvilla',
  name: "Căn hộ Skyvilla",
  parent_slug: '/mua-ban-can-ho-chung-cu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d62cc3f663879c6750a51',
  slug: '/mua-ban-can-ho-loft-house',
  name: "Căn hộ Loft - house",
  parent_slug: '/mua-ban-can-ho-chung-cu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d62fc3f663879c6750a6a',
  slug: '/mua-ban-can-ho-studio',
  name: "Căn hộ Studio",
  parent_slug: '/mua-ban-can-ho-chung-cu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d63193f663879c6750a7b',
  slug: '/mua-ban-can-ho-condotel',
  name: "Căn hộ Condotel",
  parent_slug: '/mua-ban-can-ho-chung-cu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d632f3f663879c6750a8d',
  slug: '/mua-ban-can-ho-officetel',
  name: "Căn hộ Officetel",
  parent_slug: '/mua-ban-can-ho-chung-cu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e9924f6716ee964b5fdcc23',
  slug: '/mua-ban-can-ho-duplex',
  name: "Căn hộ Duplex",
  parent_slug: '/mua-ban-can-ho-chung-cu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d63683f663879c6750ab6,5e9122948c71d25a879d30e6,5e7d64ae3f663879c6750aef,5e7d64c53f663879c6750afe,5e7d64e23f663879c6750b0b,5e7d658a3f663879c6750b70,5e7d65103f663879c6750b27,5e7d655e3f663879c6750b51,5e7d65b83f663879c6750b8a',
  slug: '/mua-ban-biet-thu',
  name: 'Bán biệt thự',
  parent_slug: '',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e9122948c71d25a879d30e6',
  slug: '/mua-ban-biet-thu-lien-ke',
  name: 'Biệt thự liền kề',
  parent_slug: '/mua-ban-biet-thu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d64ae3f663879c6750aef',
  slug: '/mua-ban-biet-thu-san-vuon',
  name: 'Biệt thự sân vườn',
  parent_slug: '/mua-ban-biet-thu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d64c53f663879c6750afe',
  slug: '/mua-ban-biet-thu-song-lap',
  name: 'Biệt thự song lập',
  parent_slug: '/mua-ban-biet-thu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d64e23f663879c6750b0b',
  slug: '/mua-ban-biet-thu-don-lap',
  name: 'Biệt thự đơn lập',
  parent_slug: '/mua-ban-biet-thu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d658a3f663879c6750b70',
  slug: '/mua-ban-biet-thu-nghi-duong',
  name: 'Biệt thự nghỉ dưỡng',
  parent_slug: '/mua-ban-biet-thu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d65103f663879c6750b27',
  slug: '/mua-ban-biet-thu-pho',
  name: 'Biệt thự phố',
  parent_slug: '/mua-ban-biet-thu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d655e3f663879c6750b51',
  slug: '/mua-ban-biet-thu-tu-lap',
  name: 'Biệt thự tứ lập',
  parent_slug: '/mua-ban-biet-thu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e7d65b83f663879c6750b8a',
  slug: '/mua-ban-biet-thu-mini',
  name: 'Biệt thự Mini',
  parent_slug: '/mua-ban-biet-thu',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e11b046521813a78cde85ae,5e67077e1fea273a985d1d36,5e67070f1fea273a985d1d35,5e11b046521813a78cde85ad,5e6707981fea273a985d1d37',
  slug: '/mua-ban-dat',
  name: 'Bán đất',
  parent_slug: '',
  type1_slug: '/nha-dat-ban'
}, {
  id: "5e67077e1fea273a985d1d36",
  slug: '/mua-ban-dat-nen',
  name: 'Đất nền',
  parent_slug: '/mua-ban-dat',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e67070f1fea273a985d1d35',
  slug: '/mua-ban-dat-tho-cu',
  name: 'Bán đất thổ cư',
  parent_slug: '/mua-ban-dat',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e11b046521813a78cde85ad',
  slug: '/mua-ban-dat-nen-du-an',
  name: 'Bán đất nền, dự án',
  parent_slug: '/mua-ban-dat',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e6707981fea273a985d1d37',
  slug: '/mua-ban-dat-nong-lam-nghiep',
  name: 'Mua bán đất nông lâm nghiệp',
  parent_slug: '/mua-ban-dat',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e6707c21fea273a985d1d38,5e6707e01fea273a985d1d39,5e6707f81fea273a985d1d3a,5e11b046521813a78cde85b0,5e11b046521813a78cde85af',
  slug: '/mua-ban-bat-dong-san-khac',
  name: 'Bán các loại bất động sản khác',
  parent_slug: '',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e6707e01fea273a985d1d39',
  slug: '/mua-ban-nha-hang-khach-san',
  name: 'Bán nhà hàng, khách sạn',
  parent_slug: '/mua-ban-bat-dong-san-khac',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e6707f81fea273a985d1d3a',
  slug: '/mua-ban-sang-nhuong-quan',
  name: 'Bán/sang nhượng shop, kiot, quán',
  parent_slug: '/mua-ban-bat-dong-san-khac',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e11b046521813a78cde85b0',
  slug: '/mua-ban-kho-nha-xuong',
  name: 'Bán nhà kho, nhà xưởng',
  parent_slug: '/mua-ban-bat-dong-san-khac',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e11b046521813a78cde85af',
  slug: '/mua-ban-trang-trai-nghi-duong',
  name: 'Bán trang trại, nghỉ dưỡng',
  parent_slug: '/mua-ban-bat-dong-san-khac',
  type1_slug: '/nha-dat-ban'
}, {
  id: '5e11b046521813a78cde85c3',
  slug: '/can-thue-can-ho-chung-cu',
  name: 'Cần thuê căn hộ chung cư',
  parent_slug: '',
  type1_slug: '/nha-dat-can-thue'
}, {
  id: '5e11b046521813a78cde85c4',
  slug: '/can-thue-nha-rieng',
  name: 'Cần thuê nhà riêng',
  parent_slug: '',
  type1_slug: '/nha-dat-can-thue'
}, {
  id: '5e11b046521813a78cde85c5',
  slug: '/can-thue-nha-mat-pho',
  name: 'Cần thuê nhà mặt phố',
  parent_slug: '',
  type1_slug: '/nha-dat-can-thue'
}, {
  id: '5e11b046521813a78cde85c6',
  slug: '/can-thue-nha-tro-phong-tro',
  name: 'Cần thuê nhà trọ, phòng trọ',
  parent_slug: '',
  type1_slug: '/nha-dat-can-thue'
}, {
  id: '5e11b046521813a78cde85c7',
  slug: '/can-thue-van-phong',
  name: 'Cần thuê văn phòng',
  parent_slug: '',
  type1_slug: '/nha-dat-can-thue'
}, {
  id: '5e11b046521813a78cde85c8',
  slug: '/can-thue-cua-hang-kiot',
  name: 'Cần thuê cửa hàng, ki ốt',
  parent_slug: '',
  type1_slug: '/nha-dat-can-thue'
}, {
  id: '5e11b046521813a78cde85c9',
  slug: '/can-thue-kho-nha-xuong-dat',
  name: 'Cho thuê kho, nhà xưởng, đất',
  parent_slug: '',
  type1_slug: '/nha-dat-can-thue'
}, {
  id: '5e11b046521813a78cde85ca',
  slug: '/can-thue-cac-loai-bat-dong-san-khac',
  name: 'Cần thuê loại bất động sản khác',
  parent_slug: '',
  type1_slug: '/nha-dat-can-thue'
}, {
  id: '5e11b046521813a78cde85ba',
  slug: '/mua-can-ho-chung-cu',
  name: 'Mua căn hộ chung cư',
  parent_slug: '',
  type1_slug: '/nha-dat-can-mua'
}, {
  id: '5e11b046521813a78cde85bb',
  slug: '/mua-nha-rieng',
  name: 'Mua nhà riêng',
  parent_slug: '',
  type1_slug: '/nha-dat-can-mua'
}, {
  id: '5e11b046521813a78cde85bc',
  slug: '/mua-nha-biet-thu-lien-ke',
  name: 'Mua nhà biệt thư, liền kề',
  parent_slug: '',
  type1_slug: '/nha-dat-can-mua'
}, {
  id: '5e11b046521813a78cde85bd',
  slug: '/mua-nha-mat-pho',
  name: 'Mua nhà mặt phố',
  parent_slug: '',
  type1_slug: '/nha-dat-can-mua'
}, {
  id: '5e11b046521813a78cde85be',
  slug: '/mua-dat-nen-du-an',
  name: 'Mua đất nền dự án',
  parent_slug: '',
  type1_slug: '/nha-dat-can-mua'
}, {
  id: '5e11b046521813a78cde85bf',
  slug: '/mua-dat',
  name: 'Mua đất',
  parent_slug: '',
  type1_slug: '/nha-dat-can-mua'
}, {
  id: '5e11b046521813a78cde85c0',
  slug: '/mua-trang-trai-khu-nghi-duong',
  name: 'Mua trang trại, khu nghỉ dưỡng',
  parent_slug: '',
  type1_slug: '/nha-dat-can-mua'
}, {
  id: '5e11b046521813a78cde85c1',
  slug: '/mua-kho-nha-xuong',
  name: 'Mua kho, nhà xưởng',
  parent_slug: '',
  type1_slug: '/nha-dat-can-mua'
}, {
  id: '5e11b046521813a78cde85c2',
  slug: '/mua-cac-loai-bat-dong-san-khac',
  name: 'Mua các loại bất động sản khác',
  parent_slug: '',
  type1_slug: '/nha-dat-can-mua'
}, {
  id: '5e11b046521813a78cde85b2',
  slug: '/cho-thue-can-ho-chung-cu',
  name: 'Cho thuê căn hộ chung cư',
  parent_slug: '',
  type1_slug: '/nha-dat-thue'
}, {
  id: '5e11b046521813a78cde85b3',
  slug: '/cho-thue-nha-rieng',
  name: 'Cho thuê nhà riêng',
  parent_slug: '',
  type1_slug: '/nha-dat-thue'
}, {
  id: '5e11b046521813a78cde85b4',
  slug: '/cho-thue-nha-mat-pho',
  name: 'Cho thuê nhà mặt phố',
  parent_slug: '',
  type1_slug: '/nha-dat-thue'
}, {
  id: '5e11b046521813a78cde85b5',
  slug: '/cho-thue-nha-tro-phong-tro',
  name: 'Cho thuê nhà trọ, phòng trọ',
  parent_slug: '',
  type1_slug: '/nha-dat-thue'
}, {
  id: '5e11b046521813a78cde85b6',
  slug: '/cho-thue-van-phong',
  name: 'Cho thuê văn phòng',
  parent_slug: '',
  type1_slug: '/nha-dat-thue'
}, {
  id: '5e11b046521813a78cde85b7',
  slug: '/cho-thue-cua-hang-kiot',
  name: 'Cho thuê cửa hàng, ki ốt',
  parent_slug: '',
  type1_slug: '/nha-dat-thue'
}, {
  id: '5e11b046521813a78cde85b8',
  slug: '/cho-thue-kho-nha-xuong-dat',
  name: 'Cho thuê kho, nhà xưởng, đất',
  parent_slug: '',
  type1_slug: '/nha-dat-thue'
}, {
  id: '5e11b046521813a78cde85b9',
  slug: '/cho-thue-cac-loai-bat-dong-san-khac',
  name: 'Cho thuê các loại bất động sản khác',
  parent_slug: '',
  type1_slug: '/nha-dat-thue'
}];
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

/***/ "./graphql/ad_sell_leases/mutation/index.ts":
/*!**************************************************!*\
  !*** ./graphql/ad_sell_leases/mutation/index.ts ***!
  \**************************************************/
/*! exports provided: COUNT_VIEW_AD_SELL_LEASE, ADD_AD_SELL_LEASE_WISH_LIST, ADD_AD_SELL_LEASE_COMMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_VIEW_AD_SELL_LEASE", function() { return COUNT_VIEW_AD_SELL_LEASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_AD_SELL_LEASE_WISH_LIST", function() { return ADD_AD_SELL_LEASE_WISH_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_AD_SELL_LEASE_COMMENT", function() { return ADD_AD_SELL_LEASE_COMMENT; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const COUNT_VIEW_AD_SELL_LEASE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation adSellLeaseViewUpdate ($input: UpdateAdSellLeaseViewInput!) {
    adSellLeaseViewUpdate (input: $input) {
      id
    }
  }
`;
const ADD_AD_SELL_LEASE_WISH_LIST = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation adSellLeaseWishlist ($input: AdSellLeaseWishlistInput!) {
    adSellLeaseWishlist (input: $input) {
      id
    }
  }
`;
const ADD_AD_SELL_LEASE_COMMENT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation adSellLeaseCommentCreate ($input: AdSellLeaseCommentInput!) {
    adSellLeaseCommentCreate (input: $input) {
      id
    }
  }
`;


/***/ }),

/***/ "./graphql/ad_sell_leases/queries/index.ts":
/*!*************************************************!*\
  !*** ./graphql/ad_sell_leases/queries/index.ts ***!
  \*************************************************/
/*! exports provided: GET_AD_SELL_LEASES, GET_AD_SELL_LEASES_BY_SLUG, HOME_GET_AD_SELL_LEASES, GET_AD_SELL_LEASES_BY_ID, GET_AD_SELL_LEASE_WISH_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AD_SELL_LEASES", function() { return GET_AD_SELL_LEASES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AD_SELL_LEASES_BY_SLUG", function() { return GET_AD_SELL_LEASES_BY_SLUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_GET_AD_SELL_LEASES", function() { return HOME_GET_AD_SELL_LEASES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AD_SELL_LEASES_BY_ID", function() { return GET_AD_SELL_LEASES_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AD_SELL_LEASE_WISH_LIST", function() { return GET_AD_SELL_LEASE_WISH_LIST; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_AD_SELL_LEASES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAdSellLeases ($page: Int!, $limit: Int!, $filter: String!) {
    adSellLeases (page: $page, filter: $filter, limit: $limit) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          title
          seo_title
          created_at
          updated_at
          slug
          project
          length
          width
          floor_number
          living_room_number
          view_count
          like_status
          price {
            unit
            value
          }
          avatar {
            alt_text
            src
            description
          }
          address {
            text
            ward
            district
            city
          }
          contact {
            image
            name
            address
            mobile
            phone
            email
          }
          area {
            unit
            value
          }
        }
      }
    }
  }
`;
const HOME_GET_AD_SELL_LEASES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAdSellLeases ($page: Int!, $limit: Int!, $filter: String!) {
    adSellLeases (page: $page, filter: $filter, limit: $limit) {
      edges {
        node {
          id
          title
          seo_title
          created_at
          updated_at
          slug
          project
          length
          width
          floor_number
          living_room_number
          view_count
          like_status
          price {
            unit
            value
          }
          avatar {
            alt_text
            src
            description
          }
          address {
            text
            ward
            district
            city
          }
          contact {
            image
            name
            address
            mobile
            phone
            email
          }
          area {
            unit
            value
          }
        }
      }
    }
  }
`;
const GET_AD_SELL_LEASES_BY_SLUG = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query adSellLease ($slug: String) {
    adSellLease (slug: $slug) {
      id
      title
      description
      seo_title
      seo_description
      slug
      project
      length
      width
      floor_number
      living_room_number
      view_count
      user
      front_width
      road_width
      price {
        unit
        value
      }
      home_direction {
        text
      }
      balcony_direction {
        text
      }
      avatar {
        alt_text
        src
        description
      }
      address {
        text
        ward
        district
        city
      }
      area {
        unit
        value
      }
      image {
        alt_text
        description
        title
        src
      }
      type {
        type1
        type2
        text
      }
      status
      juridical_type {
        text
      }
      street_type {
        text
      }
      project
      seo_title
      floor_number
      living_room_number
      bed_room_number
      toilet_room_number
      gara_number
      material {
        id
        text
      }
      is_basement
      is_car_into_home
      is_corner
      is_elevator
      furniture
      width
      length
      year_built
      video
      like_status
      map {
        lat
        lng
      }
      created_at
      updated_at
      contact {
        image
        name
        address
        mobile
        phone
        email
      }
    }
  }
`;
const GET_AD_SELL_LEASES_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query adSellLease ($id: String) {
    adSellLease (id: $id) {
      slug
      title
      description
      seo_title
      seo_description
      slug
      project
      length
      width
      floor_number
      living_room_number
      view_count
      price {
        unit
        value
      }
      avatar {
        alt_text
        src
        description
      }
      address {
        text
        ward
        district
        city
      }
      area {
        unit
        value
      }
      image {
        alt_text
        description
        title
        src
      }
      type {
        type1
        type2
        text
      }
      status
      juridical_type {
        text
      }
      street_type {
        text
      }
      project
      seo_title
      floor_number
      living_room_number
      bed_room_number
      toilet_room_number
      gara_number
      material {
        id
        text
      }
      is_basement
      is_car_into_home
      is_corner
      is_elevator
      furniture
      width
      length
      year_built
      video
      like_status
      map {
        lat
        lng
      }
      created_at
      updated_at
      contact {
        image
        name
        address
        mobile
        phone
        email
      }
    }
  }
`;
const GET_AD_SELL_LEASE_WISH_LIST = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query adSellLeaseWishlists ($filter:String!, $limit:Int!, $page:Int!) {
    adSellLeaseWishlists(filter:$filter, limit:$limit, page:$page) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          ad_sell_lease {
            title
            seo_title
            created_at
            updated_at
            slug
            project
            length
            width
            floor_number
            view_count
            living_room_number
            like_status
            price {
              unit
              value
            }
            avatar {
              alt_text
              src
              description
            }
            address {
              text
              ward
              district
              city
            }
            contact {
              image
              name
              address
              mobile
              phone
              email
            }
            area {
              unit
              value
            }
          }
        }
      }
    }
  }
`;


/***/ }),

/***/ "./graphql/project/mutation/index.ts":
/*!*******************************************!*\
  !*** ./graphql/project/mutation/index.ts ***!
  \*******************************************/
/*! exports provided: COUNT_VIEW_PROJECT, ADD_PROJECT_WISH_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_VIEW_PROJECT", function() { return COUNT_VIEW_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PROJECT_WISH_LIST", function() { return ADD_PROJECT_WISH_LIST; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const COUNT_VIEW_PROJECT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation projectViewUpdate ($input: UpdateProjectViewInput!) {
    projectViewUpdate (input: $input) {
      id
      view_count
    }
  }
`;
const ADD_PROJECT_WISH_LIST = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation projectWishList($input:  ProjectWishlistInput!) {
    projectWishlist (input: $input) {
      id
    }
  }
`;


/***/ }),

/***/ "./graphql/project/queries/index.ts":
/*!******************************************!*\
  !*** ./graphql/project/queries/index.ts ***!
  \******************************************/
/*! exports provided: GET_PROJECT_BY_ID, GET_PROJECT_LIST, GET_PROJECT_BY_SLUG, HOME_GET_PROJECT_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROJECT_BY_ID", function() { return GET_PROJECT_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROJECT_LIST", function() { return GET_PROJECT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROJECT_BY_SLUG", function() { return GET_PROJECT_BY_SLUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_GET_PROJECT_LIST", function() { return HOME_GET_PROJECT_LIST; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_PROJECT_LIST = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getProject ($page: Int!, $limit: Int!, $filter: String!) {
    projects (page: $page, filter: $filter, limit: $limit) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          slug
          name
          price
          created_at
          updated_at
          land_area
          view_count
          address {
            text
            ward
            district
            city
          }
          cover_image
          intro_content
        }
      }
    }
  }
`;
const HOME_GET_PROJECT_LIST = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getProject ($page: Int!, $limit: Int!, $filter: String!) {
    projects (page: $page, filter: $filter, limit: $limit) {
      edges {
        node {
          id
          slug
          name
          price
          created_at
          updated_at
          land_area
          view_count
          address {
            text
            ward
            district
            city
          }
          cover_image
          intro_content
        }
      }
    }
  }
`;
const GET_PROJECT_BY_SLUG = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query project ($slug: String) {
    project (slug: $slug) {
      id
      name
      price
      land_area
      intro_content
      position_content
      infrastructure_content
      seo_title
      seo_description
      view_count
      slug
      image {
        alt_text
        description
        title
        src
      }
      address {
        text
        ward
        district
        city
      }
      video
      cover_image
      intro_content
      created_at
      updated_at
      google_map_latitude
      google_map_longitude
    }
  }
`;
const GET_PROJECT_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query project ($id: String) {
    project (id: $id) {
      id
      name
      investor
      scale
      slug
      seo_description
      address {
        text
        ward
        district
        city
      }
      cover_image
      intro_content
      created_at
      updated_at
    }
  }
`;


/***/ }),

/***/ "./modules/AdSellLease/Tracking.tsx":
/*!******************************************!*\
  !*** ./modules/AdSellLease/Tracking.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const addTracking = (adSellLeaseId, type) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://graph.nhadatmoi.net/user-tracking', {
    params: {
      ad_sell_lease_id: adSellLeaseId,
      type_tracking: type
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  addTracking
});

/***/ }),

/***/ "./modules/priceProcess.tsx":
/*!**********************************!*\
  !*** ./modules/priceProcess.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stringProcess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringProcess */ "./modules/stringProcess.tsx");


const priceProcess = (priceValue, priceUnit) => {
  if (!priceValue || Number(priceValue) === 0) {
    return 'Giá liên hệ';
  } else {
    return formatPriceValue(priceValue, priceUnit) + ' ' + getPriceUnit(priceValue, priceUnit);
  }
};

let millionUnit = 'triệu';
let billionUnit = 'tỉ';

const formatPriceValue = (priceValue, priceUnit) => {
  if (priceValue && priceUnit && (priceUnit === 'million' || priceUnit === 'triệu')) {
    let priceValueNumber = Number(priceValue);

    if (priceValueNumber < 1000) {
      priceValueNumber = Math.round(priceValueNumber * 100) / 100;
      return _stringProcess__WEBPACK_IMPORTED_MODULE_0__["default"].addCommas(String(Number(priceValueNumber)));
    } else {
      priceValueNumber = priceValueNumber / 1000;
      priceValueNumber = Math.round(priceValueNumber * 100) / 100;
      return _stringProcess__WEBPACK_IMPORTED_MODULE_0__["default"].addCommas(String(Number(priceValueNumber)));
    }
  } else {
    return _stringProcess__WEBPACK_IMPORTED_MODULE_0__["default"].addCommas(String(Number(priceValue)));
  }
};

const getPriceUnit = (priceValue, priceUnit) => {
  if (priceValue && priceUnit && (priceUnit === 'million' || priceUnit === 'triệu')) {
    let priceValueNumber = Number(priceValue);

    if (priceValueNumber < 1000) {
      return millionUnit;
    } else {
      return billionUnit;
    }
  } else {
    return priceUnit ? priceUnit : 'đồng';
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  priceProcess
});

/***/ }),

/***/ "./modules/stringProcess.tsx":
/*!***********************************!*\
  !*** ./modules/stringProcess.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const addCommas = inputString => {
  let rx = /(\d+)(\d{3})/;
  return String(inputString).replace(/^\d+/, function (w) {
    while (rx.test(w)) {
      w = w.replace(rx, '$1.$2');
    }

    return w;
  });
};

const getMonths = () => {
  return {
    '1': '01',
    '2': '02',
    '3': '03',
    '4': '04',
    '5': '05',
    '6': '06',
    '7': '07',
    '8': '08',
    '9': '09',
    '10': '10',
    '11': '11',
    '12': '12'
  };
};

const getGender = () => {
  return {
    'female': 'Nữ',
    'male': 'Nam',
    'none': 'Không xác định'
  };
};

const getDays = () => {
  return {
    '1': '01',
    '2': '02',
    '3': '03',
    '4': '04',
    '5': '05',
    '6': '06',
    '7': '07',
    '8': '08',
    '9': '09',
    '10': '10',
    '11': '11',
    '12': '12',
    '13': '13',
    '14': '14',
    '15': '15',
    '16': '16',
    '17': '17',
    '18': '18',
    '19': '19',
    '20': '20',
    '21': '21',
    '22': '22',
    '23': '23',
    '24': '24',
    '25': '25',
    '26': '26',
    '27': '27',
    '28': '28',
    '29': '29',
    '30': '30',
    '31': '31'
  };
};

const truncateString = (string, length, ending) => {
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

const stripTags = (input, allowed) => {
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
  const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  return input.replace(tags, ($0, $1) => allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '');
}; // @ts-ignore


const stripProperties = (input, allowed) => {
  allowed = (((allowed || '') + '').toLowerCase().match(/[a-z][a-z0-9]*/g) || []).join('');
  const properties = /\s([a-z][a-z0-9]*)="[^"]*"/gi; // @ts-ignore

  return input.replace(properties, ($0, $1) => allowed.indexOf($1.toLowerCase()) > -1 ? $0 : '');
};

/* harmony default export */ __webpack_exports__["default"] = ({
  truncateString,
  getDays,
  getGender,
  getMonths,
  addCommas,
  stripTags,
  stripProperties
});

/***/ }),

/***/ "./modules/urlProcess.tsx":
/*!********************************!*\
  !*** ./modules/urlProcess.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./constants/index.ts");


const processImageUrl = (imageUrl, type) => {
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

const getBaseUrlByType = type => {
  let baseUrl = '';

  switch (type) {
    case 'ad_sell_lease':
      baseUrl = _constants__WEBPACK_IMPORTED_MODULE_0__["urlImageAdSellLease"];
      break;

    case 'project':
      baseUrl = _constants__WEBPACK_IMPORTED_MODULE_0__["urlImageProject"];
      break;

    case 'broker':
      baseUrl = _constants__WEBPACK_IMPORTED_MODULE_0__["urlImageBroker"];
      break;
  }

  return baseUrl;
};

const getImageDefaultByType = type => {
  let imageDefault = '';

  switch (type) {
    case 'ad_sell_lease':
      imageDefault = _constants__WEBPACK_IMPORTED_MODULE_0__["imageDefaultProject"];
      break;

    case 'project':
      imageDefault = _constants__WEBPACK_IMPORTED_MODULE_0__["imageDefaultProject"];
      break;

    case 'broker':
      imageDefault = _constants__WEBPACK_IMPORTED_MODULE_0__["imageDefaultBroker"];
      break;
  }

  return imageDefault;
};

const validURL = str => {
  if (!str || str === '' || str === null) {
    return false;
  }

  if (str.indexOf('http') !== -1) {
    return true;
  } else {
    return false;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  processImageUrl
});

/***/ }),

/***/ "./modules/validator.tsx":
/*!*******************************!*\
  !*** ./modules/validator.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isBlank = value => {
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

const isEmpty = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }

  return true;
};

const isNumber = value => {
  if (isBlank(value)) {
    return false;
  }

  return !isNaN(parseFloat(value)) && isFinite(value);
};

const isEmail = value => {
  if (isBlank(value)) {
    return false;
  }

  let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.test(value);
};

const isSlug = value => {
  if (isBlank(value)) {
    return false;
  }

  let slug = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/;
  return slug.test(value);
};

const isUrl = value => {
  if (isBlank(value)) {
    return false;
  }

  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  return regexp.test(value);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  isBlank,
  isEmail,
  isEmpty,
  isNumber,
  isUrl,
  isSlug
});

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.tsx");
/* harmony import */ var _components_Index_SearchHomepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Index/SearchHomepage */ "./components/Index/SearchHomepage.jsx");
/* harmony import */ var _components_Index_TitleBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Index/TitleBlock */ "./components/Index/TitleBlock.tsx");
/* harmony import */ var _components_Search_KeywordSlide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Search/KeywordSlide */ "./components/Search/KeywordSlide.jsx");
/* harmony import */ var _components_Index_HotLocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Index/HotLocation */ "./components/Index/HotLocation.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Index_AdSellLeaseIndex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Index/AdSellLeaseIndex */ "./components/Index/AdSellLeaseIndex.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./constants/index.ts");
/* harmony import */ var _style_IndexPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/IndexPage */ "./style/IndexPage.jsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Home_What__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Home/What */ "./components/Home/What.jsx");
/* harmony import */ var _components_Home_ButtonViews__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Home/ButtonViews */ "./components/Home/ButtonViews.jsx");
/* harmony import */ var _components_Home_NewHot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Home/NewHot */ "./components/Home/NewHot.jsx");
/* harmony import */ var _components_Home_ListProduct__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Home/ListProduct */ "./components/Home/ListProduct.jsx");
/* harmony import */ var _components_Home_Partner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Home/Partner */ "./components/Home/Partner.jsx");
/* harmony import */ var _components_Home_ListMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Home/ListMenu */ "./components/Home/ListMenu.jsx");
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/scss/style.scss */ "./assets/scss/style.scss");
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");
/* harmony import */ var _graphql_ad_sell_leases_queries__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../graphql/ad_sell_leases/queries */ "./graphql/ad_sell_leases/queries/index.ts");
/* harmony import */ var _graphql_project_queries__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../graphql/project/queries */ "./graphql/project/queries/index.ts");
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../modules/validator */ "./modules/validator.tsx");
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


 //Import Components

















//Import SCSS
 //Import Const



 //Import Module



// interface DataNewsProps {
//   slug: string,
//   link: string,
//   title: {
//     rendered: string
//   },
//   excerpt: {
//     rendered: string
//   },
//   featured_image_url: string,
//   date: string
// }
const IndexPage = props => {
  const [dataAdSellLeasesViewed, setDataAdSellLeaseViewed] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
  const [dataProjectViewed, setDataProjectViewed] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
  const [dataAdSellLeaseWishlist, setDataAdSellLeaseWishlist] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
  const [dataProject, setDataProject] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
  const [statusLoadingAdSellLease, setStatusLoadingAdSellLease] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
  const [dataNews, setDataNews] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
  const [statusLoadingProject, setStatusLoadingProject] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
  const [statusLoadingNews, setStatusLoadingNews] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
  let newsUrlApi = 'https://nhadatmoi.net/tin-tuc/wp-json/wp/v2/posts?per_page=8';
  const classes = _style_IndexPage__WEBPACK_IMPORTED_MODULE_9__["indexPageStyle"];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let viewedItem = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__["localStorageViewed"]);

    if (viewedItem && !_modules_validator__WEBPACK_IMPORTED_MODULE_21__["default"].isBlank(viewedItem)) {
      try {
        let viewedItemObject = JSON.parse(viewedItem);
        setDataAdSellLeaseViewed(viewedItemObject);
      } catch (e) {
        console.log(e);
      }
    }

    let viewedProjectItem = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__["localStorageProjectViewed"]);

    if (viewedProjectItem && !_modules_validator__WEBPACK_IMPORTED_MODULE_21__["default"].isBlank(viewedProjectItem)) {
      try {
        let viewedItemObject = JSON.parse(viewedProjectItem);
        setDataProjectViewed(viewedItemObject);
      } catch (e) {
        console.log(e);
      }
    }

    _utils__WEBPACK_IMPORTED_MODULE_18__["apolloClient"].query({
      query: _graphql_ad_sell_leases_queries__WEBPACK_IMPORTED_MODULE_19__["GET_AD_SELL_LEASE_WISH_LIST"],
      variables: {
        "page": 1,
        "limit": 12,
        "filter": "'{}'"
      }
    }).then(response => {
      setStatusLoadingAdSellLease(false);

      if (!_modules_validator__WEBPACK_IMPORTED_MODULE_21__["default"].isBlank(response.data) && !_modules_validator__WEBPACK_IMPORTED_MODULE_21__["default"].isBlank(response.data.adSellLeaseWishlists.edges)) {
        let dataWishlistToAdd = [];

        for (let wishlistIndex in response.data.adSellLeaseWishlists.edges) {
          let dataToAdd = {
            node: response.data.adSellLeaseWishlists.edges[wishlistIndex].node.ad_sell_lease
          };
          dataWishlistToAdd.push(dataToAdd);
        }

        setDataAdSellLeaseWishlist(dataWishlistToAdd);
      }
    });
    _utils__WEBPACK_IMPORTED_MODULE_18__["apolloClient"].query({
      query: _graphql_project_queries__WEBPACK_IMPORTED_MODULE_20__["HOME_GET_PROJECT_LIST"],
      variables: {
        "page": 1,
        "limit": 12,
        "filter": "'{}'"
      }
    }).then(response => {
      setStatusLoadingProject(false);

      if (!_modules_validator__WEBPACK_IMPORTED_MODULE_21__["default"].isBlank(response.data) && !_modules_validator__WEBPACK_IMPORTED_MODULE_21__["default"].isBlank(response.data.projects.edges)) {
        setDataProject(response.data.projects.edges);
      }
    }); //Get Data News

    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()(newsUrlApi).then(r => r.json()).then(data => {
      setDataNews(data);
      setStatusLoadingNews(false);
    });
  }, []);
  const [statusModal, setModal] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);

  const updateModal = data => {
    setModal(data);
  };

  const List = () => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_Index_AdSellLeaseIndex__WEBPACK_IMPORTED_MODULE_7__["default"], {
      filter: "{'type2':'5e7d5f543f663879c6750927,5e11b046521813a78cde85ac,5e11b046521813a78cde85aa,5e7d61323f663879c6750997,5e11b046521813a78cde85ab'}",
      title: 'Bán nhà',
      type: 'h2',
      href: '/[slug]',
      path: '/mua-ban-nha',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }
    }));
  };

  const transactionHot = () => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_Index_TitleBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "S\u1EA3n ph\u1EA9m thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t hi\u1EC7n \u0111\u1EA1i",
      description: "T\u1ED5ng h\u1EE3p nh\u1EEFng m\u1EABu thi\u1EBFt k\u1EBF hi\u1EC7n \u0111\u1EA1i",
      type: "h2",
      path: "/du-an-bat-dong-san",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }
    }), __jsx(_components_Index_HotLocation__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }
    }));
  };

  const LoadingPage = () => {
    if (statusLoadingNews) {
      return __jsx(LoadingPage, {
        className: "loading_page",
        grid: {
          xl: 3,
          lg: 3,
          md: 4,
          sm: 6,
          xs: 12
        },
        numberLimit: 8,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 9
        }
      });
    }
  };

  const renderIcon = () => {
    return __jsx("div", {
      style: {
        position: 'fixed',
        bottom: 30,
        right: 30
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }
    }, __jsx("a", {
      title: "Tr\xF2 chuy\u1EC7n Facebook",
      target: "_blank",
      rel: "noopener",
      href: "http://m.me/925790224164852?ref=zozovn",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "https://zozo.vn/public/theme/circle/images/widgets/fbmessenger.svg",
      alt: "btn-facebook",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 13
      }
    }))), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }
    }, __jsx("a", {
      title: "Chat v\u1EDBi ch\xFAng t\xF4i qua Zalo",
      target: "_blank",
      rel: "noopener",
      href: "https://zalo.me/0377535717",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "https://zozo.vn/public/theme/circle/images/widgets/zalo.svg",
      alt: "btn-zalo",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 13
      }
    }))), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }
    }, __jsx("a", {
      title: "G\u1ECDi ngay",
      href: "tel:0936062166",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "https://zozo.vn/public/theme/circle/images/widgets/call.svg",
      alt: "btn-callnow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }
    }))));
  };

  let pageTitle = 'Nội thất Dodo';
  let pageDescription = 'Nội thất Dodo đón đầu xu hướng';
  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    title: pageTitle,
    description: pageDescription
  }, props, {
    statusModal: statusModal,
    updateModal: updateModal,
    canonical: _constants__WEBPACK_IMPORTED_MODULE_8__["mainURL"],
    path: '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 0,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 1,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 2,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }
  }, __jsx(_components_Home_ListMenu__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 11
    }
  }), __jsx(_components_Home_NewHot__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, __jsx(_components_Index_SearchHomepage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      padding: '20px 0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, __jsx(_components_Home_What__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }
  })), __jsx(_components_Home_ButtonViews__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 1,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "body_container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }
  }, transactionHot()), __jsx(_components_Home_Partner__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 7
    }
  }), __jsx(_components_Search_KeywordSlide__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }
  }), __jsx(_components_Home_ListProduct__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }
  }), renderIcon());
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./public/Image/bad.jpg":
/*!******************************!*\
  !*** ./public/Image/bad.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bad-dd635c3f39e402775735138463159b05.jpg";

/***/ }),

/***/ "./public/Image/login.png":
/*!********************************!*\
  !*** ./public/Image/login.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/login-8b41c36e2f4a2044746754727e4e25f4.png";

/***/ }),

/***/ "./style/IndexPage.jsx":
/*!*****************************!*\
  !*** ./style/IndexPage.jsx ***!
  \*****************************/
/*! exports provided: indexPageStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexPageStyle", function() { return indexPageStyle; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);



const indexPageStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  button: {
    width: '300px',
    float: 'left',
    textAlign: 'center',
    padding: '0 30px',
    // @include breakpoint(mdDown) {
    //   padding: '0 20px',
    // }
    button: {
      fontFamily: '$fontFamily',
      fontSize: '14px',
      fontWeight: '900',
      margin: '-15px 0 30px 0',
      color: '#aaa',
      padding: '10px 15px!important',
      cursor: 'pointer',
      background: '#fff',
      width: '100%',
      borderRadius: '4px',
      border: '2px solid #e6e6e6' //   &:hover {
      //     background: '#f0f0f0',
      //   }

    }
  }
});


/***/ }),

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/*! exports provided: api, apolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apolloClient", function() { return apolloClient; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./constants/index.ts");
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cross-fetch/polyfill */ "cross-fetch/polyfill");
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_3__);




const client = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _constants__WEBPACK_IMPORTED_MODULE_1__["apiBaseURL"],
  timeout: 30000
});

const api = (method, url, data) => client.request({
  data: JSON.stringify(data),
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  method,
  url,
  withCredentials: true
}).then(response => response.data);

const apolloClient = new apollo_boost__WEBPACK_IMPORTED_MODULE_3___default.a({
  uri: _constants__WEBPACK_IMPORTED_MODULE_1__["apiGraphQLURL"],
  credentials: 'include',
  cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]({
    addTypename: false
  })
});


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\toan\Desktop\nhadatmoi\pages\index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/ButtonBase":
/*!***********************************************!*\
  !*** external "@material-ui/core/ButtonBase" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonBase");

/***/ }),

/***/ "@material-ui/core/ClickAwayListener":
/*!******************************************************!*\
  !*** external "@material-ui/core/ClickAwayListener" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/GridList":
/*!*********************************************!*\
  !*** external "@material-ui/core/GridList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridList");

/***/ }),

/***/ "@material-ui/core/GridListTile":
/*!*************************************************!*\
  !*** external "@material-ui/core/GridListTile" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTile");

/***/ }),

/***/ "@material-ui/core/GridListTileBar":
/*!****************************************************!*\
  !*** external "@material-ui/core/GridListTileBar" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTileBar");

/***/ }),

/***/ "@material-ui/core/Grow":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grow" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/ListSubheader":
/*!**************************************************!*\
  !*** external "@material-ui/core/ListSubheader" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/MenuList":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popper":
/*!*******************************************!*\
  !*** external "@material-ui/core/Popper" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/createBreakpoints":
/*!*************************************************************!*\
  !*** external "@material-ui/core/styles/createBreakpoints" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/createBreakpoints");

/***/ }),

/***/ "@material-ui/core/styles/withStyles":
/*!******************************************************!*\
  !*** external "@material-ui/core/styles/withStyles" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/withStyles");

/***/ }),

/***/ "@material-ui/core/withWidth":
/*!**********************************************!*\
  !*** external "@material-ui/core/withWidth" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/withWidth");

/***/ }),

/***/ "@material-ui/icons/ArrowDropDown":
/*!***************************************************!*\
  !*** external "@material-ui/icons/ArrowDropDown" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDropDown");

/***/ }),

/***/ "@material-ui/icons/ArrowDropUp":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ArrowDropUp" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDropUp");

/***/ }),

/***/ "@material-ui/icons/CalendarToday":
/*!***************************************************!*\
  !*** external "@material-ui/icons/CalendarToday" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CalendarToday");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Drafts":
/*!********************************************!*\
  !*** external "@material-ui/icons/Drafts" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Drafts");

/***/ }),

/***/ "@material-ui/icons/Eco":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Eco" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Eco");

/***/ }),

/***/ "@material-ui/icons/Email":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Email" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ "@material-ui/icons/ExpandLess":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandLess" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandLess");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/FavoriteBorder":
/*!****************************************************!*\
  !*** external "@material-ui/icons/FavoriteBorder" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FavoriteBorder");

/***/ }),

/***/ "@material-ui/icons/Gamepad":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Gamepad" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Gamepad");

/***/ }),

/***/ "@material-ui/icons/Info":
/*!******************************************!*\
  !*** external "@material-ui/icons/Info" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Info");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "@material-ui/icons/MoveToInbox":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MoveToInbox" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoveToInbox");

/***/ }),

/***/ "@material-ui/icons/NavigateBefore":
/*!****************************************************!*\
  !*** external "@material-ui/icons/NavigateBefore" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NavigateBefore");

/***/ }),

/***/ "@material-ui/icons/NavigateNext":
/*!**************************************************!*\
  !*** external "@material-ui/icons/NavigateNext" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NavigateNext");

/***/ }),

/***/ "@material-ui/icons/PhoneIphone":
/*!*************************************************!*\
  !*** external "@material-ui/icons/PhoneIphone" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PhoneIphone");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/icons/Send":
/*!******************************************!*\
  !*** external "@material-ui/icons/Send" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Send");

/***/ }),

/***/ "@material-ui/icons/StarBorder":
/*!************************************************!*\
  !*** external "@material-ui/icons/StarBorder" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarBorder");

/***/ }),

/***/ "@material-ui/icons/StarRate":
/*!**********************************************!*\
  !*** external "@material-ui/icons/StarRate" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarRate");

/***/ }),

/***/ "@material-ui/icons/ViewList":
/*!**********************************************!*\
  !*** external "@material-ui/icons/ViewList" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewList");

/***/ }),

/***/ "@material-ui/lab/Skeleton":
/*!********************************************!*\
  !*** external "@material-ui/lab/Skeleton" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Skeleton");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cross-fetch/polyfill":
/*!***************************************!*\
  !*** external "cross-fetch/polyfill" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cross-fetch/polyfill");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-moment");

/***/ }),

/***/ "react-owl-carousel2":
/*!**************************************!*\
  !*** external "react-owl-carousel2" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel2");

/***/ }),

/***/ "react-redux-i18n":
/*!***********************************!*\
  !*** external "react-redux-i18n" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux-i18n");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rpc3BsYXkvTG9hZGluZ1BhZ2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZExpc3QvR3JpZEFkU2VsbExlYXNlcy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmlkTGlzdC9HcmlkSXRlbUFTTC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0J1dHRvblZpZXdzLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2UvYTEuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS9hMi5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL2EzLmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2UvYTQuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS9hNS5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL2E2LmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2UvYTcuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS9hOC5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL2E5LmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2Uvd2hhdDIuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS93aGF0My5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL3doYXQ0LmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvTGlzdE1lbnUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9MaXN0UHJvZHVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL05ld0hvdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL1BhcnRuZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9XaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZGV4L0FkU2VsbExlYXNlSW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5kZXgvSG90TG9jYXRpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5kZXgvU2VhcmNoSG9tZXBhZ2UuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5kZXgvVGl0bGVCbG9jay50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi9Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2gvS2V5d29yZFNsaWRlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZ3JhcGhxbC9hZF9zZWxsX2xlYXNlcy9tdXRhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ncmFwaHFsL2FkX3NlbGxfbGVhc2VzL3F1ZXJpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZ3JhcGhxbC9wcm9qZWN0L211dGF0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2dyYXBocWwvcHJvamVjdC9xdWVyaWVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvQWRTZWxsTGVhc2UvVHJhY2tpbmcudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvcHJpY2VQcm9jZXNzLnRzeCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3N0cmluZ1Byb2Nlc3MudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvdXJsUHJvY2Vzcy50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy92YWxpZGF0b3IudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL0ltYWdlL2JhZC5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL0ltYWdlL2xvZ2luLnBuZyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9JbmRleFBhZ2UuanN4Iiwid2VicGFjazovLy8uL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZUJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvd2l0aFdpZHRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcERvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEcm9wVXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FsZW5kYXJUb2RheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9EcmFmdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWNvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZUJvcmRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9HYW1lcGFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luZm9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVCZWZvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lSXBob25lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TZW5kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclJhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld0xpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWJvb3N0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcm9zcy1mZXRjaC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtb3dsLWNhcm91c2VsMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4LWkxOG5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIkxvYWRpbmdQYWdlIiwicHJvcHMiLCJkb21Mb2FkaW5nIiwiZ3JpZCIsInhsIiwibGciLCJtZCIsInNtIiwieHMiLCJuZXdEb21SZWFjdCIsImkiLCJudW1iZXJMaW1pdCIsIkdyaWRMaXN0IiwiY2xhc3NOYW1lIiwiZ3JpZERhdGEiLCJtYXAiLCJkYXRhSXRlbSIsImluZGV4IiwicHJpY2VWYWx1ZSIsIlByaWNlUHJvY2VzcyIsInByaWNlUHJvY2VzcyIsIm5vZGUiLCJwcmljZSIsInZhbHVlIiwidW5pdCIsImRhdGFHcmlkIiwiaW1hZ2UiLCJ1cmxQcm9jZXNzIiwicHJvY2Vzc0ltYWdlVXJsIiwiYXZhdGFyIiwic3JjIiwidGl0bGUiLCJhZGRyZXNzIiwidGV4dCIsImFyZWEiLCJTdHJpbmdQcm9jZXNzIiwiYWRkQ29tbWFzIiwic2x1ZyIsInVwZGF0ZWRfYXQiLCJjcmVhdGVkX2F0Iiwidmlld19jb3VudCIsImlkIiwibGlrZV9zdGF0dXMiLCJwYXRoIiwibWF4TGVuZ3RoIiwiR3JpZEl0ZW1BU0wiLCJkYXRhQ29tcGFyZUxvY2FsIiwic2V0RGF0YUNvbXBhcmVMb2NhbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJsaWtlU3RhdHVzIiwic2V0TGlrZVN0YXR1cyIsImRhdGFHaXJkIiwic3RhdHVzQ29tcGFyZSIsInNldFN0YXR1c0NvbXBhcmUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYWxTdG9yYWdlQ29tcGFyZUtleSIsIlZhbGlkYXRvciIsImlzQmxhbmsiLCJkYXRhU3RhdHVzQ29tcGFyZSIsIkpTT04iLCJwYXJzZSIsImVudGl0eUlkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidHlwZUdyaWQiLCJkYXRhUHJlcGFyZSIsInR5cGUiLCJoYW5kbGVUcmFja2luZyIsImFkZFNlbGxMZWFzZUlkIiwidmFsaWRhdG9yIiwiVHJhY2tpbmciLCJhZGRUcmFja2luZyIsIlN0cmluZyIsImNsaWNrQWRkVG9Db21wYXJlIiwic3RhdHVzVXBkYXRlIiwidXBkYXRlQ29tcGFyZURhdGEiLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZUNsaWNrUmVtb3ZlQ29tcGFyZSIsImRhdGFDb21wYXJlIiwiZGF0YVRvQ29tcGFyZSIsImRhdGFOZXdDb21wYXJlIiwicHVzaCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkYXRhIiwiaXNBZGRUb0xvY2FsIiwicmVtb3ZlSXRlbSIsInNjcmVlbldpZHRoIiwic2NyZWVuIiwid2lkdGgiLCJsZW5ndGgiLCJhbGVydCIsImxpbmtIcmVmIiwibGlua0FzIiwiaGFuZGxlQ2xpY2tMaWtlIiwiYXBvbGxvQ2xpZW50IiwibXV0YXRlIiwibXV0YXRpb24iLCJBRERfQURfU0VMTF9MRUFTRV9XSVNIX0xJU1QiLCJ2YXJpYWJsZXMiLCJ0aGVuIiwicmVzcG9uc2UiLCJBRERfUFJPSkVDVF9XSVNIX0xJU1QiLCJjb21wb25lbnRzSXRlbSIsIk51bWJlciIsInN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWluV2lkdGgiLCJwb3NpdGlvbiIsImhlaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsInpJbmRleCIsIm9wYWNpdHkiLCJib3JkZXIiLCJmb2N1c1Zpc2libGUiLCJpbWFnZUJ1dHRvbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwiaW1hZ2VTcmMiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImltYWdlQmFja2Ryb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJibGFjayIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImltYWdlVGl0bGUiLCJwYWRkaW5nIiwiaW1hZ2VNYXJrZWQiLCJCdXR0b25WaWV3cyIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicmVuZGVyIiwiaW1hZ2VzIiwidXJsIiwiY2xhc3NlcyIsImZvbnRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpdGhTdHlsZXMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwibGlzdEl0ZW0iLCJ0ZXh0SXRlbSIsInBhZGRpbmdSaWdodCIsInBvcG92ZXIiLCJwb2ludGVyRXZlbnRzIiwiTmVzdGVkTGlzdCIsIm9wZW4iLCJzZXRPcGVuIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImluZGV4TWVudSIsInNldEluZGV4TWVudSIsImNvdW50TWVudSIsInNldENvdW50TWVudSIsImhhbmRsZVBvcG92ZXJPcGVuIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlUG9wb3ZlckNsb3NlIiwic2V0SG92ZXJNZW51IiwiY291bnQiLCJ1bmRlZmluZWQiLCJsaXN0TWVudSIsIml0ZW0iLCJyb29tcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImNvcnNvciIsImVsZW1lbnQiLCJyb29tIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJncmlkTGlzdCIsInRyYW5zZm9ybSIsInByaW1hcnkiLCJsaWdodCIsInRpdGxlQmFyIiwiQWN0aW9ucyIsInN0YXRlIiwidGlsZURhdGEiLCJpbWciLCJhdXRob3IiLCJ0aWxlIiwiY2FyZCIsIm1heFdpZHRoIiwiaW1nWm9vbSIsImJveFNoYWRvdyIsImNvbnRlbnQiLCJJbmRleCIsInRleHRBbGlnbiIsImljb24iLCJmaWx0ZXIiLCJLZXl3b3JkU2xpZGUiLCJOZXh0QXJyb3ciLCJvbkNsaWNrIiwiUHJldkFycm93IiwiZGF0YVNlYXJjaCIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImluaXRpYWxTbGlkZSIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInZhcmlhYmxlV2lkdGgiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImExIiwiYTIiLCJhMyIsImE0IiwiYTUiLCJhNiIsImE3IiwiYTgiLCJhOSIsImZvbnRXZWlnaHQiLCJ2aWV3UGhvbmUiLCJjc3NJY29uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uIiwiYXJySW1nIiwid2hhdDQiLCJ3aGF0MiIsIndoYXQzIiwiYXJyYXkiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiQWRTZWxsTGVhc2VJbmRleCIsImRhdGFBZFNlbGxMZWFzZXMiLCJzZXREYXRhQWRTZWxsTGVhc2UiLCJzdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2UiLCJzZXRTdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2UiLCJxdWVyeSIsIkhPTUVfR0VUX0FEX1NFTExfTEVBU0VTIiwiYWRTZWxsTGVhc2VzIiwiZWRnZXMiLCJkZXNjcmlwdGlvbiIsImhyZWYiLCJTbGlkZXIiLCJkeW5hbWljIiwic3NyIiwiSG90TG9jYXRpb24iLCJkYXRhTG9jYXRpb24iLCJpbWFnZU9iamVjdCIsImlucHV0YmFzZSIsImZsb2F0IiwibWFyZ2luTGVmdCIsInNlYXJjaEhvbWUiLCJtaW5IZWlnaHQiLCJzZWFyY2hIb21lQm9keSIsInZpZXdTZWFyY2giLCJpY29uU2VhcmNoIiwibWFyZ2luVG9wIiwiaWNvbkJ1dHRvbiIsIlNlYXJjaEhvbWVwYWdlIiwib25DaGFuZ2VXYXJkcyIsImtleSIsImtleUNvZGUiLCJpbWFnZUJhY2tncm91bmQiLCJzdWdnZXN0aW9ucyIsImxpbmsiLCJoaXN0b3J5IiwicmVuZGVyU3VnZ2VzdGlvbiIsImN1cnNvciIsInJlbmRlckhpc3RvcnkiLCJlIiwiYm9yZGVyUmFkaXVzIiwiVGl0bGVCbG9jayIsImRvbVRpdGxlIiwiZG9tQmxvY2tUaXRsZSIsImluZGV4T2YiLCJGb290ZXJQYWdlIiwicm9vdFBvcG92ZXIiLCJvdmVyZmxvd1giLCJoZWFkZXIiLCJkaXZpZGVyIiwibWFyZ2luIiwic3BhY2luZyIsIm9wZW5NZW51Iiwic2V0T3Blbk1lbnUiLCJhbmNob3JSZWYiLCJ1c2VSZWYiLCJoYW5kbGVUb2dnbGUiLCJwcmV2T3BlbiIsImhhbmRsZUNsb3NlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiaGFuZGxlTGlzdEtleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImZvY3VzIiwiVHJhbnNpdGlvblByb3BzIiwicGxhY2VtZW50IiwidHJhbnNmb3JtT3JpZ2luIiwiTG9nbyIsInJlcXVpcmUiLCJMYXlvdXRQYWdlIiwic3RhdHVzTW9kYWwiLCJzZXRNb2RhbCIsInVwZGF0ZU1vZGFsIiwic2NoZW1hT2JqZWN0IiwiY2Fub25pY2FsIiwiZ29vZ2xlU2VhcmNoQ29uc29sZSIsIl9faHRtbCIsImNoaWxkcmVuIiwibG9uZ0luIiwibG9nSW5DbG9zZSIsIm1vZGFsIiwibGluZUhlaWdodCIsInRhYnMiLCJsYWJlbCIsIkxvZ2luTW9kYWwiLCJ2YWx1ZVRhYiIsInNldFZhbHVlVGFiIiwicmVuZGVyR29vZ2xlIiwiZ29vZ2xlTG9naW4iLCJyZW5kZXJaYWxvIiwiemFsb0xvZ2luIiwicmVuZGVyRmFjZSIsImZhY2Vib29rTG9naW4iLCJoYW5kbGVUYWJzQ2hhbmdlIiwicmVuZGVyVGFicyIsInRhYiIsInJlbmRlckxvZ2luIiwicmVuZGVyQ3JlYXRlQWNjb3VudCIsImJvcmRlclJpZ2h0IiwiSW1hZ2VMb2dpbiIsInNlYXJjaE9iamVjdCIsIm1haW5VUkwiLCJ1cGdyYWRlUGxhblVSTCIsInVwZ3JhZGVJY29uVVJMIiwibG9nb1VSTCIsImFwaUJhc2VVUkwiLCJhcGlHcmFwaFFMVVJMIiwidXJsSW1hZ2VBZFNlbGxMZWFzZSIsInVybEltYWdlUHJvamVjdCIsInVybEltYWdlQnJva2VyIiwiaW1hZ2VEZWZhdWx0UHJvamVjdCIsImltYWdlRGVmYXVsdFNsaWRlciIsImltYWdlRGVmYXVsdEJyb2tlciIsImdvb2dsZUFuYWx5dGljc0NvZGUiLCJsb2NhbFN0b3JhZ2VWaWV3ZWQiLCJsb2NhbFN0b3JhZ2VQcm9qZWN0Vmlld2VkIiwiYWRTZWxsTGVhc2VDYXRlZ29yeSIsIm5hbWUiLCJwYXJlbnRfc2x1ZyIsImFkU2VsbExlYXNlVHlwZSIsInR5cGUxX3NsdWciLCJ0aXRsZXMiLCJlbGVtZW50cyIsInByb2R1Y3RzIiwibW9uZXlPbGQiLCJtb25leU5ldyIsIkNPVU5UX1ZJRVdfQURfU0VMTF9MRUFTRSIsImdxbCIsIkFERF9BRF9TRUxMX0xFQVNFX0NPTU1FTlQiLCJHRVRfQURfU0VMTF9MRUFTRVMiLCJHRVRfQURfU0VMTF9MRUFTRVNfQllfU0xVRyIsIkdFVF9BRF9TRUxMX0xFQVNFU19CWV9JRCIsIkdFVF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVCIsIkNPVU5UX1ZJRVdfUFJPSkVDVCIsIkdFVF9QUk9KRUNUX0xJU1QiLCJIT01FX0dFVF9QUk9KRUNUX0xJU1QiLCJHRVRfUFJPSkVDVF9CWV9TTFVHIiwiR0VUX1BST0pFQ1RfQllfSUQiLCJhZFNlbGxMZWFzZUlkIiwiYXhpb3MiLCJnZXQiLCJwYXJhbXMiLCJhZF9zZWxsX2xlYXNlX2lkIiwidHlwZV90cmFja2luZyIsInByaWNlVW5pdCIsImZvcm1hdFByaWNlVmFsdWUiLCJnZXRQcmljZVVuaXQiLCJtaWxsaW9uVW5pdCIsImJpbGxpb25Vbml0IiwicHJpY2VWYWx1ZU51bWJlciIsIk1hdGgiLCJyb3VuZCIsImlucHV0U3RyaW5nIiwicngiLCJyZXBsYWNlIiwidyIsInRlc3QiLCJnZXRNb250aHMiLCJnZXRHZW5kZXIiLCJnZXREYXlzIiwidHJ1bmNhdGVTdHJpbmciLCJzdHJpbmciLCJlbmRpbmciLCJzdWJzdHJpbmciLCJzdHJpcFRhZ3MiLCJpbnB1dCIsImFsbG93ZWQiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwiam9pbiIsInRhZ3MiLCIkMCIsIiQxIiwic3RyaXBQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImltYWdlVXJsIiwic3RhdHVzVXJsIiwidmFsaWRVUkwiLCJnZXRJbWFnZURlZmF1bHRCeVR5cGUiLCJiYXNlVXJsIiwiZ2V0QmFzZVVybEJ5VHlwZSIsImltYWdlRGVmYXVsdCIsInN0ciIsInRyaW0iLCJpc0VtcHR5Iiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJpc051bWJlciIsImlzTmFOIiwicGFyc2VGbG9hdCIsImlzRmluaXRlIiwiaXNFbWFpbCIsImVtYWlsIiwiaXNTbHVnIiwiaXNVcmwiLCJyZWdleHAiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwibm9kZU5hbWUiLCJpc0xvY2FsIiwic2Nyb2xsIiwiUm91dGVyIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJlcnIiLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsInByb2Nlc3MiLCJ3YXJuIiwiZXhhY3QiLCJMaW5rIiwicGFzc0hyZWYiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlcGFyZVJvdXRlIiwidG9Sb3V0ZSIsImF0dGVtcHRzIiwiaXNTZXJ2ZXJSZW5kZXIiLCJwYXRobmFtZSIsImFkZEJhc2VQYXRoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJkZWxCYXNlUGF0aCIsImNyZWRlbnRpYWxzIiwicmVzIiwiZ2V0UmVzcG9uc2UiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJiYWNrIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSW5kZXhQYWdlIiwiZGF0YUFkU2VsbExlYXNlc1ZpZXdlZCIsInNldERhdGFBZFNlbGxMZWFzZVZpZXdlZCIsImRhdGFQcm9qZWN0Vmlld2VkIiwic2V0RGF0YVByb2plY3RWaWV3ZWQiLCJkYXRhQWRTZWxsTGVhc2VXaXNobGlzdCIsInNldERhdGFBZFNlbGxMZWFzZVdpc2hsaXN0IiwiZGF0YVByb2plY3QiLCJzZXREYXRhUHJvamVjdCIsImRhdGFOZXdzIiwic2V0RGF0YU5ld3MiLCJzdGF0dXNMb2FkaW5nUHJvamVjdCIsInNldFN0YXR1c0xvYWRpbmdQcm9qZWN0Iiwic3RhdHVzTG9hZGluZ05ld3MiLCJzZXRTdGF0dXNMb2FkaW5nTmV3cyIsIm5ld3NVcmxBcGkiLCJpbmRleFBhZ2VTdHlsZSIsInZpZXdlZEl0ZW0iLCJ2aWV3ZWRJdGVtT2JqZWN0Iiwidmlld2VkUHJvamVjdEl0ZW0iLCJhZFNlbGxMZWFzZVdpc2hsaXN0cyIsImRhdGFXaXNobGlzdFRvQWRkIiwid2lzaGxpc3RJbmRleCIsImRhdGFUb0FkZCIsImFkX3NlbGxfbGVhc2UiLCJwcm9qZWN0cyIsImZldGNoIiwiciIsImpzb24iLCJMaXN0IiwidHJhbnNhY3Rpb25Ib3QiLCJyZW5kZXJJY29uIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwiY3JlYXRlTXVpVGhlbWUiLCJmb250RmFtaWx5IiwiY2xpZW50IiwiYmFzZVVSTCIsInRpbWVvdXQiLCJhcGkiLCJyZXF1ZXN0IiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsIkFwb2xsb0NsaWVudCIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImFkZFR5cGVuYW1lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7RnVuY3Rpb25Db21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCI7XHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvblwiO1xyXG5cclxuaW50ZXJmYWNlIFRpdGxlQmxvY2tQcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGdyaWQ6IHtcclxuICAgIGxnOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XHJcbiAgICBtZDogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xyXG4gICAgc206IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcclxuICAgIHhzOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XHJcbiAgICB4bDogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xyXG4gIH07XHJcbiAgbnVtYmVyTGltaXQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTG9hZGluZ1BhZ2U6IEZ1bmN0aW9uQ29tcG9uZW50PFRpdGxlQmxvY2tQcm9wcz4gPSAocHJvcHM6IFRpdGxlQmxvY2tQcm9wcykgPT4ge1xyXG4gIGxldCBkb21Mb2FkaW5nID0gKFxyXG4gICAgPEdyaWQgaXRlbSB4bD17cHJvcHMuZ3JpZC54bH1cclxuICAgICAgICAgIGxnPXtwcm9wcy5ncmlkLmxnfVxyXG4gICAgICAgICAgbWQ9e3Byb3BzLmdyaWQubWR9XHJcbiAgICAgICAgICBzbT17cHJvcHMuZ3JpZC5zbX1cclxuICAgICAgICAgIHhzPXtwcm9wcy5ncmlkLnhzfSBjbGFzc05hbWU9XCJncmlkX19saXN0X19pdGVtIHUtbWFyZ2luLWJvdHRvbS1zbWFsbFwiPlxyXG4gICAgICA8U2tlbGV0b24gdmFyaWFudD1cInJlY3RcIiBjbGFzc05hbWU9XCJncmlkX19saXN0X19pdGVtX19pbWdcIi8+XHJcbiAgICAgIDxCb3ggcHQ9ezJ9PlxyXG4gICAgICAgIDxTa2VsZXRvbiAvPlxyXG4gICAgICAgIDxTa2VsZXRvbiB3aWR0aD1cIjYwJVwiIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbiAgbGV0IG5ld0RvbVJlYWN0ID0gKDw+PC8+KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLm51bWJlckxpbWl0OyBpKyspIHtcclxuICAgIG5ld0RvbVJlYWN0ID0gKFxyXG4gICAgICA8PntuZXdEb21SZWFjdH1cclxuICAgICAge2RvbUxvYWRpbmd9PC8+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJiYXNlbGluZVwiIGNsYXNzTmFtZT1cImdyaWRfX2xpc3RcIj5cclxuICAgICAge25ld0RvbVJlYWN0fVxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nUGFnZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7RnVuY3Rpb25Db21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWRJdGVtQVNMIGZyb20gXCIuL0dyaWRJdGVtQVNMXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBTdHJpbmdQcm9jZXNzIGZyb20gXCIuLy4uLy4uL21vZHVsZXMvc3RyaW5nUHJvY2Vzc1wiO1xyXG5pbXBvcnQgdXJsUHJvY2VzcyBmcm9tIFwiLi4vLi4vbW9kdWxlcy91cmxQcm9jZXNzXCI7XHJcbmltcG9ydCBQcmljZVByb2Nlc3MgZnJvbSBcIi4uLy4uL21vZHVsZXMvcHJpY2VQcm9jZXNzXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIEdyaWRQcm9wcyB7XHJcbiAgbm9kZToge1xyXG4gICAgaWQ6IHN0cmluZ1xyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIHNsdWc6IHN0cmluZyxcclxuICAgIGNyZWF0ZWRfYXQ6IHN0cmluZyxcclxuICAgIHVwZGF0ZWRfYXQ6IHN0cmluZyxcclxuICAgIHZpZXdfY291bnQ6IG51bWJlcixcclxuICAgIGxpa2Vfc3RhdHVzOiBib29sZWFuLFxyXG4gICAgcHJpY2U6IHtcclxuICAgICAgdW5pdDogc3RyaW5nXHJcbiAgICAgIHZhbHVlOiBzdHJpbmdcclxuICAgIH0sXHJcbiAgICBhdmF0YXI6IHtcclxuICAgICAgYWx0X3RleHQ6IHN0cmluZ1xyXG4gICAgICBzcmM6IHN0cmluZ1xyXG4gICAgICBkZXNjcmlwdGlvbjogc3RyaW5nXHJcbiAgICB9LFxyXG4gICAgYWRkcmVzczoge1xyXG4gICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgIHdhcmQ6IHN0cmluZyxcclxuICAgICAgZGlzdHJpY3Q6IHN0cmluZyxcclxuICAgICAgY2l0eTogc3RyaW5nXHJcbiAgICB9LFxyXG4gICAgYXJlYToge1xyXG4gICAgICB1bml0OiBzdHJpbmdcclxuICAgICAgdmFsdWU6IHN0cmluZ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEdyaWRMaXN0UHJvcHMge1xyXG4gIGdyaWREYXRhOiBHcmlkUHJvcHNbXTtcclxuICBjbGFzc05hbWU6IHN0cmluZztcclxuICBtYXhMZW5ndGg/OiBudW1iZXI7XHJcbiAgZ3JpZDoge1xyXG4gICAgbGc6IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcclxuICAgIG1kOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XHJcbiAgICBzbTogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xyXG4gICAgeHM6IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcclxuICAgIHhsOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgR3JpZExpc3Q6IEZ1bmN0aW9uQ29tcG9uZW50PEdyaWRMaXN0UHJvcHM+ID0gKHByb3BzOiBHcmlkTGlzdFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfSBpdGVtIHhzPXsxMn0gZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgYWxpZ25JdGVtcz1cImJhc2VsaW5lXCIgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxyXG4gICAgICB7cHJvcHMuZ3JpZERhdGEubWFwKChkYXRhSXRlbSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGxldCBwcmljZVZhbHVlID0gUHJpY2VQcm9jZXNzLnByaWNlUHJvY2VzcyhkYXRhSXRlbS5ub2RlLnByaWNlLnZhbHVlLCBkYXRhSXRlbS5ub2RlLnByaWNlLnVuaXQpO1xyXG4gICAgICAgIGxldCBkYXRhR3JpZCA9IHtcclxuICAgICAgICAgIGltYWdlOiB1cmxQcm9jZXNzLnByb2Nlc3NJbWFnZVVybChkYXRhSXRlbS5ub2RlLmF2YXRhci5zcmMsICdhZF9zZWxsX2xlYXNlJyksXHJcbiAgICAgICAgICB0aXRsZTogZGF0YUl0ZW0ubm9kZS50aXRsZSxcclxuICAgICAgICAgIGFkZHJlc3M6IGRhdGFJdGVtLm5vZGUuYWRkcmVzcy50ZXh0LFxyXG4gICAgICAgICAgYXJlYTogU3RyaW5nUHJvY2Vzcy5hZGRDb21tYXMoZGF0YUl0ZW0ubm9kZS5hcmVhLnZhbHVlKSxcclxuICAgICAgICAgIHByaWNlOiBwcmljZVZhbHVlLFxyXG4gICAgICAgICAgc2x1ZzogZGF0YUl0ZW0ubm9kZS5zbHVnLFxyXG4gICAgICAgICAgdXBkYXRlZF9hdDogZGF0YUl0ZW0ubm9kZS51cGRhdGVkX2F0LFxyXG4gICAgICAgICAgY3JlYXRlZF9hdDogZGF0YUl0ZW0ubm9kZS5jcmVhdGVkX2F0LFxyXG4gICAgICAgICAgdmlld19jb3VudDogZGF0YUl0ZW0ubm9kZS52aWV3X2NvdW50LFxyXG4gICAgICAgICAgaWQ6IGRhdGFJdGVtLm5vZGUuaWQsXHJcbiAgICAgICAgICBsaWtlX3N0YXR1czogZGF0YUl0ZW0ubm9kZS5saWtlX3N0YXR1cyxcclxuICAgICAgICAgIHBhdGg6ICcvdGluLXJhby8nXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocHJvcHMubWF4TGVuZ3RoICYmIGluZGV4ID49IHByb3BzLm1heExlbmd0aCkge1xyXG4gICAgICAgICAgcmV0dXJuICg8PjwvPik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxHcmlkSXRlbUFTTCBncmlkPXtwcm9wcy5ncmlkfSBkYXRhR2lyZD17ZGF0YUdyaWR9IGtleT17XCJncmlkX2l0ZW1fYWRfc2VsbF9cIiArIGluZGV4fS8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgR3JpZExpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCwge0Z1bmN0aW9uQ29tcG9uZW50LCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuLy8gTWF0ZXJpYWwtIFVJXHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbi8vIEljb25cclxuaW1wb3J0IEZhdm9yaXRlQm9yZGVySWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlQm9yZGVyXCI7XHJcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZVwiO1xyXG5pbXBvcnQgQ2FsZW5kYXJUb2RheSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NhbGVuZGFyVG9kYXlcIjtcclxuaW1wb3J0IFN0cmluZ1Byb2Nlc3MgZnJvbSBcIi4uLy4uL21vZHVsZXMvc3RyaW5nUHJvY2Vzc1wiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtsb2NhbFN0b3JhZ2VDb21wYXJlS2V5fSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSBcIi4uLy4uL21vZHVsZXMvdmFsaWRhdG9yXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBUcmFja2luZyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9BZFNlbGxMZWFzZS9UcmFja2luZ1wiO1xyXG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gXCIuLi8uLi9tb2R1bGVzL3ZhbGlkYXRvclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7YXBvbGxvQ2xpZW50fSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7QUREX1BST0pFQ1RfV0lTSF9MSVNUfSBmcm9tICcuLi8uLi9ncmFwaHFsL3Byb2plY3QvbXV0YXRpb24nO1xyXG5pbXBvcnQge0FERF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVH0gZnJvbSAnLi4vLi4vZ3JhcGhxbC9hZF9zZWxsX2xlYXNlcy9tdXRhdGlvbic7XHJcblxyXG5pbnRlcmZhY2UgZGF0YUdyaWRQcm9wcyB7XHJcbiAgaW1hZ2U6IGFueSxcclxuICB0aXRsZTogc3RyaW5nLFxyXG4gIGFyZWE6IHN0cmluZyxcclxuICBhZGRyZXNzOiBzdHJpbmcsXHJcbiAgcHJpY2U6IHN0cmluZyxcclxuICBzbHVnOiBzdHJpbmcsXHJcbiAgY3JlYXRlZF9hdDogc3RyaW5nLFxyXG4gIHVwZGF0ZWRfYXQ6IHN0cmluZyxcclxuICBwYXRoOiBzdHJpbmdcclxuICB2aWV3X2NvdW50OiBudW1iZXIsXHJcbiAgbGlrZV9zdGF0dXM6IGJvb2xlYW4sXHJcbiAgaWQ6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29tcGFyZURhdGFQcm9wcyB7XHJcbiAgYXZhdGFyOiBzdHJpbmcsXHJcbiAgdGl0bGU6IHN0cmluZyxcclxuICBpZDogc3RyaW5nLFxyXG4gIHR5cGU6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgR3JpZEl0ZW1Qcm9wcyB7XHJcbiAgZ3JpZDoge1xyXG4gICAgbGc6IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcclxuICAgIG1kOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XHJcbiAgICBzbTogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xyXG4gICAgeHM6IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcclxuICAgIHhsOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XHJcbiAgfTtcclxuICBkYXRhR2lyZDogZGF0YUdyaWRQcm9wcztcclxufVxyXG5cclxuY29uc3QgR3JpZEl0ZW1BU0w6IEZ1bmN0aW9uQ29tcG9uZW50PEdyaWRJdGVtUHJvcHM+ID0gKHByb3BzOiBHcmlkSXRlbVByb3BzKSA9PlxyXG57XHJcbiAgY29uc3QgW2RhdGFDb21wYXJlTG9jYWwsIHNldERhdGFDb21wYXJlTG9jYWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xpa2VTdGF0dXMsIHNldExpa2VTdGF0dXNdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuZGF0YUdpcmQubGlrZV9zdGF0dXMpO1xyXG4gIGNvbnN0IFtzdGF0dXNDb21wYXJlLCBzZXRTdGF0dXNDb21wYXJlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkpICYmICFWYWxpZGF0b3IuaXNCbGFuayhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5KSkpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgZGF0YVN0YXR1c0NvbXBhcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkpIGFzIHN0cmluZyk7XHJcbiAgICAgICAgc2V0RGF0YUNvbXBhcmVMb2NhbChkYXRhU3RhdHVzQ29tcGFyZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gZGF0YVN0YXR1c0NvbXBhcmUpIHtcclxuICAgICAgICAgIGxldCBlbnRpdHlJZCA9IGRhdGFTdGF0dXNDb21wYXJlW2luZGV4XS5pZDtcclxuICAgICAgICAgIGlmIChlbnRpdHlJZCA9PT0gcHJvcHMuZGF0YUdpcmQuaWQpIHtcclxuICAgICAgICAgICAgc2V0U3RhdHVzQ29tcGFyZSh0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBsZXQgdHlwZUdyaWQgPSAnYWRfc2VsbF9sZWFzZSc7XHJcbiAgaWYgKHByb3BzLmRhdGFHaXJkLnBhdGggPT09ICcvZHUtYW4vJykge1xyXG4gICAgdHlwZUdyaWQgPSAncHJvamVjdCc7XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGFQcmVwYXJlID0ge1xyXG4gICAgYXZhdGFyOiBwcm9wcy5kYXRhR2lyZC5pbWFnZSxcclxuICAgIHRpdGxlOiBwcm9wcy5kYXRhR2lyZC50aXRsZSxcclxuICAgIGlkOiBwcm9wcy5kYXRhR2lyZC5pZCxcclxuICAgIHR5cGU6IHR5cGVHcmlkXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVHJhY2tpbmcgPSAodHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgYWRkU2VsbExlYXNlSWQgPSBwcm9wcy5kYXRhR2lyZC5pZDtcclxuICAgIGlmIChhZGRTZWxsTGVhc2VJZCAmJiAhdmFsaWRhdG9yLmlzQmxhbmsoYWRkU2VsbExlYXNlSWQpICYmIHR5cGVHcmlkID09PSAnYWRfc2VsbF9sZWFzZScpIHtcclxuICAgICAgVHJhY2tpbmcuYWRkVHJhY2tpbmcoU3RyaW5nKGFkZFNlbGxMZWFzZUlkKSwgdHlwZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IGNsaWNrQWRkVG9Db21wYXJlID0gKCkgPT4ge1xyXG4gICAgaGFuZGxlVHJhY2tpbmcoJ2NvbXBhcmVfY2xpY2snKTtcclxuICAgIGxldCBzdGF0dXNVcGRhdGUgPSB1cGRhdGVDb21wYXJlRGF0YShkYXRhUHJlcGFyZSk7XHJcbiAgICBpZiAoIXN0YXR1c1VwZGF0ZSkgcmV0dXJuIHN0YXR1c1VwZGF0ZTtcclxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tSZW1vdmVDb21wYXJlID0gKGRhdGFDb21wYXJlOiBDb21wYXJlRGF0YVByb3BzKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSkgJiYgIVZhbGlkYXRvci5pc0JsYW5rKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkpKSkge1xyXG4gICAgICBsZXQgZGF0YVRvQ29tcGFyZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSkgYXMgc3RyaW5nKTtcclxuICAgICAgbGV0IGRhdGFOZXdDb21wYXJlID0gW107XHJcbiAgICAgIGZvciAobGV0IGluZGV4IGluIGRhdGFUb0NvbXBhcmUpIHtcclxuICAgICAgICBpZiAoZGF0YVRvQ29tcGFyZVtpbmRleF0uaWQgIT09IGRhdGFDb21wYXJlLmlkKSB7XHJcbiAgICAgICAgICBkYXRhTmV3Q29tcGFyZS5wdXNoKGRhdGFUb0NvbXBhcmVbaW5kZXhdKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5LCBKU09OLnN0cmluZ2lmeShkYXRhTmV3Q29tcGFyZSkpO1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgdXBkYXRlQ29tcGFyZURhdGEgPSAoZGF0YTogQ29tcGFyZURhdGFQcm9wcykgPT4ge1xyXG4gICAgbGV0IGRhdGFUb0NvbXBhcmUgPSBbXTtcclxuICAgIGxldCBpc0FkZFRvTG9jYWwgPSB0cnVlO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkpICYmICFWYWxpZGF0b3IuaXNCbGFuayhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5KSkpIHtcclxuICAgICAgZGF0YVRvQ29tcGFyZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSkgYXMgc3RyaW5nKTtcclxuICAgICAgZm9yIChsZXQgaW5kZXggaW4gZGF0YVRvQ29tcGFyZSkge1xyXG4gICAgICAgIGlmIChkYXRhVG9Db21wYXJlW2luZGV4XS5pZCA9PT0gZGF0YS5pZCkge1xyXG4gICAgICAgICAgaXNBZGRUb0xvY2FsID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhVG9Db21wYXJlW2luZGV4XS50eXBlICE9PSBkYXRhLnR5cGUpIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkpO1xyXG4gICAgICAgICAgZGF0YVRvQ29tcGFyZSA9IFtdO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgc2NyZWVuV2lkdGggPSBzY3JlZW4ud2lkdGg7XHJcbiAgICBpZiAoZGF0YVRvQ29tcGFyZSAmJiBkYXRhVG9Db21wYXJlLmxlbmd0aCAmJiBkYXRhVG9Db21wYXJlLmxlbmd0aCA+PSA0ICYmIHNjcmVlbldpZHRoID4gNTk5KSB7XHJcbiAgICAgIGFsZXJ0KFwiS2jDtG5nIHRo4buDIHNvIHPDoW5oIHF1w6EgNCBz4bqjbiBwaOG6qW0hXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YVRvQ29tcGFyZSAmJiBkYXRhVG9Db21wYXJlLmxlbmd0aCAmJiBkYXRhVG9Db21wYXJlLmxlbmd0aCA+PSAyICYmIHNjcmVlbldpZHRoIDw9IDU5OSkge1xyXG4gICAgICBhbGVydChcIktow7RuZyB0aOG7gyBzbyBzw6FuaCBxdcOhIDIgc+G6o24gcGjhuqltIVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzQWRkVG9Mb2NhbCkge1xyXG4gICAgICBkYXRhVG9Db21wYXJlLnB1c2goZGF0YSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXksIEpTT04uc3RyaW5naWZ5KGRhdGFUb0NvbXBhcmUpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGxldCBsaW5rSHJlZiA9ICcnO1xyXG4gIGxldCBsaW5rQXMgPSAnJztcclxuICBpZiAocHJvcHMuZGF0YUdpcmQucGF0aCA9PT0gJy9kdS1hbi8nKSB7XHJcbiAgICBsaW5rSHJlZiA9ICcvZHUtYW4vW3NsdWddJztcclxuICAgIGxpbmtBcyA9ICcvZHUtYW4vJyArIHByb3BzLmRhdGFHaXJkLnNsdWc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxpbmtIcmVmID0gJy90aW4tcmFvL1tzbHVnXSc7XHJcbiAgICBsaW5rQXMgPSAnL3Rpbi1yYW8vJyArIHByb3BzLmRhdGFHaXJkLnNsdWc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja0xpa2UgPSAoKSA9PiB7XHJcbiAgICBpZiAobGlrZVN0YXR1cykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRMaWtlU3RhdHVzKHRydWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHByb3BzLmRhdGFHaXJkLnBhdGggIT09ICcvZHUtYW4vJykge1xyXG4gICAgICBoYW5kbGVUcmFja2luZygnbGlrZScpO1xyXG4gICAgICBhcG9sbG9DbGllbnQubXV0YXRlKHttdXRhdGlvbjogQUREX0FEX1NFTExfTEVBU0VfV0lTSF9MSVNULCB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIFwiaW5wdXRcIiA6IHtcclxuICAgICAgICAgICAgXCJhZF9zZWxsX2xlYXNlX2lkXCI6IHByb3BzLmRhdGFHaXJkLmlkLFxyXG4gICAgICAgICAgICBcInN0YXR1c1wiOiBcImxpa2VcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19KS50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXBvbGxvQ2xpZW50Lm11dGF0ZSh7bXV0YXRpb246IEFERF9QUk9KRUNUX1dJU0hfTElTVCwgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBcImlucHV0XCI6IHtcclxuICAgICAgICAgICAgXCJwcm9qZWN0X2lkXCI6IHByb3BzLmRhdGFHaXJkLmlkLFxyXG4gICAgICAgICAgICBcInN0YXR1c1wiOiBcImxpa2VcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19KS50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxldCBjb21wb25lbnRzSXRlbSA9IChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249e3Byb3BzLmdyaWQgPyBcImNvbHVtblwiIDogXCJyb3dcIn0gc3BhY2luZz17MH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWRfX2xpc3RfX2l0ZW0gdS1tYXJnaW4tYm90dG9tLXNtYWxsXCI+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICA8TGluayBocmVmPXtsaW5rSHJlZn0gYXM9e2xpbmtBc30+PGE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2xpc3RfX2l0ZW1fX2ltZyBiYWNrZ3JvdW5kIGJsb2NrX2Zsb2F0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZ3JpZF9fbGlzdF9faXRlbV9faW1nX19kYXRlJ30+PENhbGVuZGFyVG9kYXkvPjxNb21lbnQgdW5peCBmb3JtYXQ9XCJERC9NTS9ZWVlZXCI+XHJcbiAgICAgICAgICAgICAge051bWJlcihwcm9wcy5kYXRhR2lyZC5jcmVhdGVkX2F0KS8xMDAwfTwvTW9tZW50PjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydncmlkX19saXN0X19pdGVtX19pbWdfX2Zhdm9yaXRlJ30gb25DbGljaz17aGFuZGxlQ2xpY2tMaWtlfT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaWtlU3RhdHVzICYmXHJcbiAgICAgICAgICAgICAgICA8RmF2b3JpdGVJY29uLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIWxpa2VTdGF0dXMgJiZcclxuICAgICAgICAgICAgICAgIDxGYXZvcml0ZUJvcmRlckljb24vPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwcm9wcy5kYXRhR2lyZC5pbWFnZSAmJiBwcm9wcy5kYXRhR2lyZC5pbWFnZSAhPT0gJ251bGwnICYmIHByb3BzLmRhdGFHaXJkLmltYWdlICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5kYXRhR2lyZC5pbWFnZX0gYWx0PXtwcm9wcy5kYXRhR2lyZC50aXRsZX0vPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAoIXByb3BzLmRhdGFHaXJkLmltYWdlIHx8IHByb3BzLmRhdGFHaXJkLmltYWdlID09PSAnbnVsbCcgfHwgcHJvcHMuZGF0YUdpcmQuaW1hZ2UgPT09ICcnKSAmJlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L2hvbWVfZGVmYXVsdC5qcGdcIiBhbHQ9e3Byb3BzLmRhdGFHaXJkLnRpdGxlfS8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgIDxHcmlkIGNsYXNzTmFtZT1cImdyaWRfX2xpc3RfX2l0ZW1fX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fbGlzdF9faXRlbV9fY29udGVudF9fdGl0bGUgdS1mbGV4U3BhY2VCZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmtIcmVmfSBhcz17bGlua0FzfT48YT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2xpc3RfX2l0ZW1fX2NvbnRlbnRfX3RpdGxlX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cD57cHJvcHMuZGF0YUdpcmQudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2xpc3RfX2l0ZW1fX2NvbnRlbnRfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kYXRhR2lyZC5hZGRyZXNzfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3BzLmRhdGFHaXJkLmFyZWEgJiYgcHJvcHMuZGF0YUdpcmQuYXJlYSAhPSBcIjBcIiAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2xpc3RfX2l0ZW1fX2NvbnRlbnRfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgRGnhu4duIHTDrWNoOiB7cHJvcHMuZGF0YUdpcmQuYXJlYX0gbTxzdXA+Mjwvc3VwPiAtICBMxrDhu6N0IHhlbToge3Byb3BzLmRhdGFHaXJkLnZpZXdfY291bnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAoIXByb3BzLmRhdGFHaXJkLmFyZWEgfHwgcHJvcHMuZGF0YUdpcmQuYXJlYSA9PSBcIjBcIikgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19saXN0X19pdGVtX19jb250ZW50X19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIERp4buHbiB0w61jaDogxJBhbmcgY+G6rXAgbmjhuq10IC0gIEzGsOG7o3QgeGVtOiB7cHJvcHMuZGF0YUdpcmQudmlld19jb3VudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2xpc3RfX2l0ZW1fX2NvbnRlbnRfX3ByaWNlXCI+eyhwcm9wcy5kYXRhR2lyZC5wcmljZSAmJiBwcm9wcy5kYXRhR2lyZC5wcmljZSAhPT0gJzAnICYmIHByb3BzLmRhdGFHaXJkLnByaWNlICE9PSAnMCAnICYmIHByb3BzLmRhdGFHaXJkLnByaWNlICE9PSAnMCDEkeG7k25nJyk/cHJvcHMuZGF0YUdpcmQucHJpY2U6J0dpw6E6IExpw6puIGjhu4cnfTwvZGl2PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAhc3RhdHVzQ29tcGFyZSAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2xpc3RfX2l0ZW1fX2NvbnRlbnRfX2NvbXBhcmVcIiBvbkNsaWNrPXsoKSA9PiBjbGlja0FkZFRvQ29tcGFyZSgpfT5cclxuICAgICAgICAgICAgICBTTyBTw4FOSFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdHVzQ29tcGFyZSAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2xpc3RfX2l0ZW1fX2NvbnRlbnRfX2NvbXBhcmVcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGlja1JlbW92ZUNvbXBhcmUoZGF0YVByZXBhcmUpfT5cclxuICAgICAgICAgICAgICBIVeG7tlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBpdGVtXHJcbiAgICAgIHhsPXtwcm9wcy5ncmlkLnhsfVxyXG4gICAgICBsZz17cHJvcHMuZ3JpZC5sZ31cclxuICAgICAgbWQ9e3Byb3BzLmdyaWQubWR9XHJcbiAgICAgIHNtPXtwcm9wcy5ncmlkLnNtfVxyXG4gICAgICB4cz17cHJvcHMuZ3JpZC54c31cclxuICAgID5cclxuICAgICAge2NvbXBvbmVudHNJdGVtfVxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmlkSXRlbUFTTDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzJ1xyXG5pbXBvcnQgeyBJY29uQnV0dG9uLCBJY29uLCBUb29sdGlwLCBCdXR0b24sIENhcmQsIENhcmRBY3Rpb25zLCBDYXJkQ29udGVudCwgSGlkZGVuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBiYWQgZnJvbSAnLi4vLi4vcHVibGljL0ltYWdlL2JhZC5qcGcnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICc1cHgnXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIG1pbldpZHRoOiAzMDAsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmOmhvdmVyLCAmJGZvY3VzVmlzaWJsZSc6IHtcclxuICAgICAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgICAgICAnJiAkaW1hZ2VCYWNrZHJvcCc6IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMTUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICcmICRpbWFnZU1hcmtlZCc6IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICcmICRpbWFnZVRpdGxlJzoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnNHB4IHNvbGlkIGN1cnJlbnRDb2xvcicsXHJcbiAgICAgICAgICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgY3VycmVudENvbG9yJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBmb2N1c1Zpc2libGU6IHt9LFxyXG4gICAgaW1hZ2VCdXR0b246IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VTcmM6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIDQwJScsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VCYWNrZHJvcDoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxyXG4gICAgICAgIG9wYWNpdHk6IDAuNCxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknKSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVRpdGxlOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgcGFkZGluZzogYDNweCA0cHggNXB4IDVweGAsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IGAxcHggMXB4IDFweCAxcHhgLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VNYXJrZWQ6IHtcclxuICAgICAgICBoZWlnaHQ6IDMsXHJcbiAgICAgICAgd2lkdGg6IDE4LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgYm90dG9tOiAtMixcclxuICAgICAgICBsZWZ0OiAnY2FsYyg1MCUgLSA5cHgpJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknKSxcclxuICAgIH0sXHJcbn0pXHJcblxyXG5cclxuY2xhc3MgQnV0dG9uVmlld3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vbm9pdGhhdGdpYWRpbmhiaW5oZHVvbmcuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA5L2dpJUM2JUIwJUUxJUJCJTlEbmctZyVDMyVCNS0lQzQlOTElRTElQkIlOEYuanBnJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnR2nhuqNtIDEwJSBU4burIMSQxqFuIEjDoG5nIFRo4bupIDInLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICczMCUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2kyLndwLmNvbS9kb2dvcXVvY2N1b25nLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wOC9EU0MwOTU0NS5qcGc/Zml0PTMwMDglMkMyMDAwJnNzbD0xJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGhp4bq/dCBL4bq/IFRoZW8gWcOqdSBD4bqndScsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzQwJScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly90aGljb25nZG9nb2hhbm9pLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wMy9uaHUteS10YXktaG9wLTZtb24uanBnJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnxJDhurd0IEjDoG5nIEtow7RuZyBHaeG7m2kgSOG6oW4nLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICczMCUnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiB4c0Rvd24+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMubWFwKGltYWdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNSaXBwbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbWFnZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c1Zpc2libGVDbGFzc05hbWU9e2NsYXNzZXMuZm9jdXNWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogaW1hZ2Uud2lkdGgsIGZvbnRTaXplOiAzMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlLnVybH0pYCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCYWNrZHJvcH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2UudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlTWFya2VkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25CYXNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5CdXR0b25WaWV3cy5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShCdXR0b25WaWV3cylcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ExLWM3MGE5OTg4NzllNjU2NzUxY2ZiZjdlZWVhOTEwNjU1LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hMi1kMjdjNThhYjQ0ZWUyZTBlM2M3NjJjZWMxMDljMDM1MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYTMtODkxNmY3NTFkZGM2ZGIxOTYyZjQ3YTQ2YmUyZTdkNzQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2E0LTg0YzZiNmQ1OWQ3NTdmZWEyMWY2YzZmOTBlMmM1MDVhLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hNS00ODg0MDUyN2I1MzNiNzI4MDk0MDI4N2EzZjU4MjEyOS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYTYtNTM1NTc1ZTExYmM2ZmE2MjMwM2JhMDc2YTEwNjkzNzcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2E3LTU4MTgwNzdiZmEwNWZmMDI2NTk2ODZhN2UzNTEzYmIzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hOC0xYmMwZDg3NGY5MjYxNTI1MmE5MzkyNTI5Yzk0ZDY4MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYTktZTAxYjU0MDIwYjI0MWI3MTc2YjVlMDMwYjkxMTNjODMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3doYXQyLWZiZDkzNDVhZWNkZTVjMGEwNTI1ZjEyMDUzZTE4MDZiLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy93aGF0My0zNjQ1ZTM3MTE1Zjc3ODY2NTUyODQzNGNhM2VmMzE5MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvd2hhdDQtNzc3YTJmODY1NGIyOGQzMDdkODg5Y2VjYThjMTM5OTUuanBnXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWVQcm92aWRlciwgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1xyXG4gICAgTGlzdCxcclxuICAgIERpdmlkZXIsXHJcbiAgICBMaXN0SXRlbUljb24sXHJcbiAgICBMaXN0SXRlbSxcclxuICAgIExpc3RJdGVtVGV4dCxcclxuICAgIENvbGxhcHNlLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgTGlzdFN1YmhlYWRlcixcclxuICAgIFBvcG92ZXIsXHJcbiAgICBUeXBvZ3JhcGh5LFxyXG4gICAgTWVudUl0ZW0sXHJcblxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3gnO1xyXG5pbXBvcnQgRHJhZnRzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRHJhZnRzJztcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcclxuaW1wb3J0IEV4cGFuZExlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3MnO1xyXG5pbXBvcnQgRXhwYW5kTW9yZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSc7XHJcbmltcG9ydCBTdGFyQm9yZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyJztcclxuaW1wb3J0IEdhbWVwYWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HYW1lcGFkJztcclxuaW1wb3J0IHsgbGlzdE1lbnUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvaW5kZXgnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBsaXN0SXRlbToge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlM2YyZmQnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJyM5MGNhZjknLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0ZXh0SXRlbToge1xyXG4gICAgICAgIGNvbG9yOiAnIzE5NzZkMicsXHJcbiAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogMjAsXHJcbiAgICB9LFxyXG4gICAgcG9wb3Zlcjoge1xyXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJywgLy8gbm9uZVxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gTmVzdGVkTGlzdCgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaW5kZXhNZW51LCBzZXRJbmRleE1lbnVdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbY291bnRNZW51LCBzZXRDb3VudE1lbnVdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBoYW5kbGVQb3BvdmVyT3BlbiA9IChldmVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBzZXRPcGVuKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIHNldENvdW50TWVudSgwKTtcclxuICAgICAgICBzZXRJbmRleE1lbnUoaW5kZXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQb3BvdmVyQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgc2V0SW5kZXhNZW51KG51bGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRIb3Zlck1lbnUgPSAoY291bnQpID0+IHtcclxuICAgICAgICBzZXRDb3VudE1lbnUoY291bnQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBpZCA9IG9wZW4gPyBpbmRleE1lbnUgOiB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cIm5hdlwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5lc3RlZC1saXN0LXN1YmhlYWRlclwiXHJcbiAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxyXG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGlzdE1lbnUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByb29tcyB9ID0gaXRlbVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gYnV0dG9uIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uTW91c2VFbnRlcj17KGV2ZW50KSA9PiBoYW5kbGVQb3BvdmVyT3BlbihldmVudCwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb3VudE1lbnUgPT09IGluZGV4ID8gJyM5MGNhZjknIDogJyNlM2YyZmQnLCBoZWlnaHQ6IDM1LCBwYWRkaW5nOiAnMCA0cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHYW1lcGFkSWNvbiBzdHlsZT17eyBmb250U2l6ZTogMjUsIGNvbG9yOiAnIzE5NzZkMicsIHBhZGRpbmc6IDQgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleE1lbnUgPT09IGluZGV4ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucG9wb3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6ICdyaWdodCcsIGhvcml6b250YWw6ICdyaWdodCcgfX0gLy8gR2hpbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdsZWZ0JyB9fSAvLyBWaSB0cmkgaGllbiB0aGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZVBvcG92ZXJDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uTW91c2VPdXQ9e2hhbmRsZVBvcG92ZXJDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuZXN0ZWQtbGlzdC1zdWJoZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAwLCBwb2ludGVyRXZlbnRzOiAnYXV0bycsIGNvcnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb29tcy5tYXAoKGVsZW1lbnQsIGNvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtjb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGNvdW50KSA9PiBzZXRIb3Zlck1lbnUoY291bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb3VudE1lbnUgPT09IGNvdW50ID8gJyM5MGNhZjknIDogJyNlM2YyZmQnLCBoZWlnaHQ6IDM1LCBwYWRkaW5nOiAnMCA0cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyTWVudShjb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHYW1lcGFkSWNvbiBzdHlsZT17eyBmb250U2l6ZTogMjUsIGNvbG9yOiAnIzE5NzZkMicsIHBhZGRpbmc6IDQgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucm9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3QgPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmVzdGVkTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgR3JpZExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3QnXHJcbmltcG9ydCBHcmlkTGlzdFRpbGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlJ1xyXG5pbXBvcnQgR3JpZExpc3RUaWxlQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZUJhcidcclxuaW1wb3J0IExpc3RTdWJoZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlcidcclxuaW1wb3J0IEluZm9JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbmZvJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzJ1xyXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAncmVhY3QtcmVkdXgtaTE4bidcclxuaW1wb3J0IHtcclxuICAgSWNvbkJ1dHRvbixcclxuICAgSWNvbixcclxuICAgVG9vbHRpcCxcclxuICAgQnV0dG9uLFxyXG4gICBDYXJkLFxyXG4gICBHcmlkLFxyXG4gICBDYXJkQ29udGVudCxcclxuICAgQ2FyZEFjdGlvbnMsXHJcbiAgIFR5cG9ncmFwaHksXHJcbiAgIEFwcEJhcixcclxuICAgVG9vbGJhcixcclxuICAgSGlkZGVuLFxyXG5cclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFN0YXJCb3JkZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcclxuICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgfSxcclxuICAgZ3JpZExpc3Q6IHtcclxuICAgICAgZmxleFdyYXA6ICdub3dyYXAnLFxyXG4gICAgICAvLyBoZWlnaHQ6ICc1MDBweCcsXHJcbiAgICAgIC8vIFByb21vdGUgdGhlIGxpc3QgaW50byBoaXMgb3duIGxheWVyIG9uIENocm9tZS4gVGhpcyBjb3N0IG1lbW9yeSBidXQgaGVscHMga2VlcGluZyBoaWdoIEZQUy5cclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWigwKScsXHJcbiAgIH0sXHJcbiAgIHRpdGxlOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsXHJcbiAgIH0sXHJcbiAgIHRpdGxlQmFyOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgICdsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsMCwwLDAuNykgMCUsIHJnYmEoMCwwLDAsMC4zKSA3MCUsIHJnYmEoMCwwLDAsMCkgMTAwJSknLFxyXG4gICB9LFxyXG59KVxyXG5cclxuXHJcbmNsYXNzIEFjdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcylcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICByZW5kZXIoKSB7XHJcbiAgICAgIGxldCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgbGV0IHRpbGVEYXRhID0gW1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ2h0dHA6Ly9iaXp3ZWIuZGt0Y2RuLm5ldC8xMDAvMDYwLzk2Ni9wcm9kdWN0cy9naXVvbmctbmd1LWdvLWNhby1jYXAtdGFpLWhhLW5vaS0xMC5qcGc/dj0xNDYyOTgyMTUwMzcwJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdHacaw4budbmcgZ+G7lyB04buxIG5oacOqbicsXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ03huqFuaCBOaOG6q24nLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vY2RuLm11YWJhbm5oYW5oLmNvbS9hc3NldC9mcm9udGVuZC9pbWcvZ2FsbGVyeS8yMDE4LzA5LzA0LzViOGU1NTk1NDY5OTBfMTUzNjA1NDY3Ny5qcGcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0LDoG4gcGjDsm5nIGtow6FjaCcsXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ03huqFuaCBOaOG6q24nLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vd3d3Lm5vaXRoYXRob2FubXkuY29tLnZuL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvbm9pLXRoYXQtZ28tcGhvbmcta2hhY2gtZGVwLmpwZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCcsXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ03huqFuaCBOaOG6q24nLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ2h0dHA6Ly9iaXp3ZWIuZGt0Y2RuLm5ldC8xMDAvMDYwLzk2Ni9wcm9kdWN0cy9naXVvbmctbmd1LWdvLWNhby1jYXAtdGFpLWhhLW5vaS0xMC5qcGc/dj0xNDYyOTgyMTUwMzcwJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdHacaw4budbmcgZ+G7lyB04buxIG5oacOqbicsXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ03huqFuaCBOaOG6q24nLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vY2RuLm11YWJhbm5oYW5oLmNvbS9hc3NldC9mcm9udGVuZC9pbWcvZ2FsbGVyeS8yMDE4LzA5LzA0LzViOGU1NTk1NDY5OTBfMTUzNjA1NDY3Ny5qcGcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0LDoG4gcGjDsm5nIGtow6FjaCcsXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ03huqFuaCBOaOG6q24nLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vd3d3Lm5vaXRoYXRob2FubXkuY29tLnZuL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvbm9pLXRoYXQtZ28tcGhvbmcta2hhY2gtZGVwLmpwZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCcsXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ03huqFuaCBOaOG6q24nLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ2h0dHA6Ly9iaXp3ZWIuZGt0Y2RuLm5ldC8xMDAvMDYwLzk2Ni9wcm9kdWN0cy9naXVvbmctbmd1LWdvLWNhby1jYXAtdGFpLWhhLW5vaS0xMC5qcGc/dj0xNDYyOTgyMTUwMzcwJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdHacaw4budbmcgZ+G7lyB04buxIG5oacOqbicsXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ03huqFuaCBOaOG6q24nLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vY2RuLm11YWJhbm5oYW5oLmNvbS9hc3NldC9mcm9udGVuZC9pbWcvZ2FsbGVyeS8yMDE4LzA5LzA0LzViOGU1NTk1NDY5OTBfMTUzNjA1NDY3Ny5qcGcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0LDoG4gcGjDsm5nIGtow6FjaCcsXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ03huqFuaCBOaOG6q24nLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vd3d3Lm5vaXRoYXRob2FubXkuY29tLnZuL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvbm9pLXRoYXQtZ28tcGhvbmcta2hhY2gtZGVwLmpwZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCcsXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ03huqFuaCBOaOG6q24nLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ2h0dHA6Ly9iaXp3ZWIuZGt0Y2RuLm5ldC8xMDAvMDYwLzk2Ni9wcm9kdWN0cy9naXVvbmctbmd1LWdvLWNhby1jYXAtdGFpLWhhLW5vaS0xMC5qcGc/dj0xNDYyOTgyMTUwMzcwJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdHacaw4budbmcgZ+G7lyB04buxIG5oacOqbicsXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ03huqFuaCBOaOG6q24nLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vY2RuLm11YWJhbm5oYW5oLmNvbS9hc3NldC9mcm9udGVuZC9pbWcvZ2FsbGVyeS8yMDE4LzA5LzA0LzViOGU1NTk1NDY5OTBfMTUzNjA1NDY3Ny5qcGcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0LDoG4gcGjDsm5nIGtow6FjaCcsXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ03huqFuaCBOaOG6q24nLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vd3d3Lm5vaXRoYXRob2FubXkuY29tLnZuL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvbm9pLXRoYXQtZ28tcGhvbmcta2hhY2gtZGVwLmpwZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCcsXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ03huqFuaCBOaOG6q24nLFxyXG4gICAgICAgICB9LFxyXG5cclxuICAgICAgXVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPEhpZGRlbiBzbVVwPlxyXG4gICAgICAgICAgICAgICA8R3JpZExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRMaXN0fSBjb2xzPXsyfT5cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICB0aWxlRGF0YS5tYXAoKHRpbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGlzdFRpbGUga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aWxlLmltZ30gYWx0PXt0aWxlLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExpc3RUaWxlQmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aWxlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMudGl0bGVCYXIsIHRpdGxlOiBjbGFzc2VzLnRpdGxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkljb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPXtgc3RhciAke3RpbGUudGl0bGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFyQm9yZGVySWNvbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMaXN0VGlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICA8L0dyaWRMaXN0PlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPEhpZGRlbiB4c0Rvd24gPlxyXG4gICAgICAgICAgICAgICA8SGlkZGVuIG1kVXA+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkTGlzdCBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZExpc3R9IGNvbHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICB7dGlsZURhdGEubWFwKCh0aWxlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExpc3RUaWxlIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGlsZS5pbWd9IGFsdD17dGlsZS50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMaXN0VGlsZUJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGlsZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLnRpdGxlQmFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogY2xhc3Nlcy50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uSWNvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9e2BzdGFyICR7dGlsZS50aXRsZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJCb3JkZXJJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExpc3RUaWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkTGlzdD5cclxuICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRMaXN0fSBjb2xzPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAge3RpbGVEYXRhLm1hcCgodGlsZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMaXN0VGlsZSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RpbGUuaW1nfSBhbHQ9e3RpbGUudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGlzdFRpbGVCYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy50aXRsZUJhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGNsYXNzZXMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkljb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPXtgc3RhciAke3RpbGUudGl0bGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFyQm9yZGVySWNvbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMaXN0VGlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZExpc3Q+XHJcbiAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgfVxyXG59XHJcblxyXG5BY3Rpb25zLnByb3BUeXBlcyA9IHtcclxuICAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQWN0aW9ucyk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXMnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHdpdGhXaWR0aCwgeyBpc1dpZHRoVXAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS93aXRoV2lkdGgnXHJcbmltcG9ydCB7XHJcbiAgSWNvbkJ1dHRvbixcclxuICBJY29uLFxyXG4gIFRvb2x0aXAsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgR3JpZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIEFwcEJhcixcclxuICBUb29sYmFyLFxyXG4gIENhcmRBY3Rpb25BcmVhLFxyXG4gIENhcmRNZWRpYSxcclxuICBBdmF0YXIsXHJcblxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydCdcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvU2tlbGV0b24nXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xyXG4gIGNhcmQ6IHtcclxuICAgIG1heFdpZHRoOiAzMDAsXHJcbiAgfSxcclxuICBpbWdab29tOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTIwcHgnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJveFNoYWRvdzogJzJweCAycHggOHB4IDJweCAjYWFhJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmNvbnN0IGltZyA9IFtcclxuICB7XHJcbiAgICBpbWc6ICdodHRwczovL3d3dy5ub2l0aGF0aG9hbm15LmNvbS52bi9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL25vaS10aGF0LWdvLXBob25nLWtoYWNoLWRlcC5qcGcnLFxyXG4gICAgdGl0bGU6ICdIaeG7h24gxJHhuqFpIHZ1w7RuZyB24bqvbiBs4buLY2ggbMOjbSBxdcO9IHBow6FpJyxcclxuICAgIGNvbnRlbnQ6ICcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICdodHRwczovL3Nkay52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9zJUM2JUExbi1nJUUxJUJCJTk3LXBoJUUxJUJCJUE3LW0lRTElQkIlOUQuanBnJyxcclxuICAgIHRpdGxlOiAnUGhvbmcgY8OhY2ggaG/DoG5nIGdpYSwgxJHhuq1tIGNo4bqldCBj4buVIMSRaeG7g24nLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICdodHRwczovL25oYWRlcG5oYXhpbmgudm4vaW1hZ2VzL3Aua2glQzMlQTFjaF90JUUxJUJBJUE3bmdfMV8uMl8xLmpwZycsXHJcbiAgICB0aXRsZTogJ1RoaeG6v3Qga+G6vyB0aeG7h24gbmdoaSBzYW5nIHRy4buNbmcnLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICdodHRwczovL2Nkbi5tdWFiYW5uaGFuaC5jb20vYXNzZXQvZnJvbnRlbmQvaW1nL2dhbGxlcnkvMjAxNy8xMC8wNC81OWQ0NTY0MzczYTRmXzE1MDcwODc5MzkuanBnJyxcclxuICAgIHRpdGxlOiAnU2FuZyB0cuG7jW5nIHbhu5tpIGdpxrDhu51uZyBuZ+G7pyBj4buVIMSRaeG7g24nLFxyXG4gICAgY29udGVudDogJydcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJ2h0dHBzOi8vdmF0bGlldXhheWR1bmcub3JnLnZuL1VwbG9hZC80OC9OYW1fMjAxOC9UaGFuZ18xMi9OZ2F5XzE5L3ZseGQub3JnX25ndXllbnRhYzIuanBnJyxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICdodHRwczovL3ZlY3RvLmNvbS52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNC90dV9iZXBfc29pX25nYS01MDB4NDk1LmpwZycsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnaHR0cDovL25vaXRoYXRkZXBoYW5vaS5jb20udm4vdXBsb2Fkcy9pbWFnZXMvdHUtYmVwLWdvLXNvbi1tYXUtY2h1LWwtY28tZGllbi9uOS5qcGcnLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY29udGVudDogJydcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJ2h0dHBzOi8vY2RuLm11YWJhbm5oYW5oLmNvbS9hc3NldC9mcm9udGVuZC9pbWcvZ2FsbGVyeS8yMDE4LzA5LzA0LzViOGU1NTk1NDY5OTBfMTUzNjA1NDY3Ny5qcGcnLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY29udGVudDogJydcclxuICB9XHJcbl1cclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgY29sb3I9J3ByaW1hcnknIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICBLaHV54bq/biBtw6NpXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e2luZGV4fSBzdHlsZT17eyBwYWRkaW5nOiA0IH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ1pvb219XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbkluZGV4LnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShJbmRleCk7IiwiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCBOYXZpZ2F0ZU5leHQgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlTmV4dCc7XHJcbmltcG9ydCBOYXZpZ2F0ZUJlZm9yZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVCZWZvcmUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBrZXlzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50c1wiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgR3JpZExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3QnXHJcbmltcG9ydCBHcmlkTGlzdFRpbGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlJ1xyXG5pbXBvcnQgR3JpZExpc3RUaWxlQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZUJhcidcclxuaW1wb3J0IExpc3RTdWJoZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlcidcclxuaW1wb3J0IEluZm9JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbmZvJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzJ1xyXG5pbXBvcnQge1xyXG4gIEljb25CdXR0b24sXHJcbiAgSWNvbixcclxuICBUb29sdGlwLFxyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIEdyaWQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgVHlwb2dyYXBoeVxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgT3dsQ2Fyb3VzZWwgZnJvbSAncmVhY3Qtb3dsLWNhcm91c2VsMidcclxuaW1wb3J0IGExIGZyb20gJy4vSW1hZ2UvYTEuanBnJ1xyXG5pbXBvcnQgYTIgZnJvbSAnLi9JbWFnZS9hMi5qcGcnXHJcbmltcG9ydCBhMyBmcm9tICcuL0ltYWdlL2EzLmpwZydcclxuaW1wb3J0IGE0IGZyb20gJy4vSW1hZ2UvYTQuanBnJ1xyXG5pbXBvcnQgYTUgZnJvbSAnLi9JbWFnZS9hNS5qcGcnXHJcbmltcG9ydCBhNiBmcm9tICcuL0ltYWdlL2E2LmpwZydcclxuaW1wb3J0IGE3IGZyb20gJy4vSW1hZ2UvYTcuanBnJ1xyXG5pbXBvcnQgYTggZnJvbSAnLi9JbWFnZS9hOC5qcGcnXHJcbmltcG9ydCBhOSBmcm9tICcuL0ltYWdlL2E5LmpwZydcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBncmlkTGlzdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpJyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBwYWRkaW5nOiAnNXB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMzliZTUnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgfSxcclxuICBpbWdab29tOiB7XHJcbiAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAuNXMsIGZpbHRlciAzcyBlYXNlLWluLW91dFwiLFxyXG4gICAgZmlsdGVyOiBcImdyYXlzY2FsZSgxMDAlKVwiLFxyXG4gIH0sXHJcbiAgLy8gaW1nWm9vbToge1xyXG4gIC8vICAgXCImOmhvdmVyXCI6IHtcclxuICAvLyAgICAgZmlsdGVyOiBcImdyYXlzY2FsZSgwKVwiLFxyXG4gIC8vICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS4xKVwiLFxyXG4gIC8vICAgICB0cmFuc2l0aW9uRHVyYXRpb246IFwiMXNcIixcclxuICAvLyAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBcImxpbmVhclwiLFxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxufSkpO1xyXG5cclxuY29uc3QgS2V5d29yZFNsaWRlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBOZXh0QXJyb3cgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXsncGFydG5lcl9fbmV4dF9fYXJyb3cnfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgIDxOYXZpZ2F0ZU5leHQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgUHJldkFycm93ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17J3BhcnRuZXJfX3ByZXZfX2Fycm93J31cclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICA8TmF2aWdhdGVCZWZvcmUgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0YVNlYXJjaCA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiR2nGsOG7nW5nIG5n4bunIGhp4buHbiDEkeG6oWlcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdmluaG9tZXMtY2VudHJhbC1wYXJrLXBpZC0zNTg3MlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJU4bunIHF14bqnbiDDoW8gdGjhu51pIHRyYW5nXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3ZpbmhvbWVzLWdyYW5kLXBhcmstcXVhbi05LXBpZC0zNzU4NFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCw6BuIHRyw6AgcGjDsm5nIGtow6FjaCBoaeG7h24gxJHhuqFpXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3ZpbmhvbWVzLXNtYXJ0LWNpdHktcGlkLTM3MTkxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkLDoG4gdHLDoCBwaMOybmcga2jDoWNoIGPhu5UgxJFp4buDblwiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi92aW5ob21lcy1vY2Vhbi1wYXJrLWdpYS1sYW0tcGlkLTM3NTk3XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlThu6cgYuG6v3AgdGnhu4duIG5naGlcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdnVuZy10YXUtcGVhcmwtcGlkLTQ4Njc0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk7hu5lpIHRo4bqldCBzYW5nIHRy4buNbmdcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vZ3JhbmRldXItcGFsYWNlLXBpZC01MDIzNFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJHacaw4budbmcgbmfhu6cgY+G7lSDEkWnhu4NuXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL2RpYW1vbmQtaXNsYW5kLXBpZC0zMzVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTuG7mWkgdGjhuqV0IHNhbmcgdHLhu41uZ1wiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi90aGUtc3VuLWF2ZW51ZS1waWQtMTVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQsOgbiDEg24gY+G7lSDEkWnhu4NuXCIsXHJcbiAgICAgIHBhdGg6IFwiL25oYS1kYXQtYmFuL25oYS1kYXQtYmFuLXRhaS1oYWktcGhvbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQsOgbiDEg24gaGnhu4duIMSR4bqhaVwiLFxyXG4gICAgICBwYXRoOiBcIi9uaGEtZGF0LWJhbi9uaGEtZGF0LWJhbi10YWktaGEtbm9pXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgb25DbGljaz17W119IC8+LFxyXG4gICAgcHJldkFycm93OiA8UHJldkFycm93IG9uQ2xpY2s9e1tdfSAvPixcclxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxNDQwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgZG90czogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgbGV0IHRpbGVEYXRhID0gW1xyXG4gICAgeyBpbWc6IGExIH0sXHJcbiAgICB7IGltZzogYTIgfSxcclxuICAgIHsgaW1nOiBhMyB9LFxyXG4gICAgeyBpbWc6IGE0IH0sXHJcbiAgICB7IGltZzogYTUgfSxcclxuICAgIHsgaW1nOiBhNiB9LFxyXG4gICAgeyBpbWc6IGE3IH0sXHJcbiAgICB7IGltZzogYTggfSxcclxuICAgIHsgaW1nOiBhOSB9LFxyXG4gICAgeyBpbWc6IGExIH0sXHJcbiAgICB7IGltZzogYTIgfSxcclxuICAgIHsgaW1nOiBhMyB9LFxyXG4gICAgeyBpbWc6IGE0IH0sXHJcbiAgICB7IGltZzogYTUgfSxcclxuICAgIHsgaW1nOiBhNiB9LFxyXG4gICAgeyBpbWc6IGE3IH0sXHJcbiAgICB7IGltZzogYTggfSxcclxuICAgIHsgaW1nOiBhOSB9XHJcbiAgXVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lclwiIHN0eWxlPXt7IGhlaWdodDogMjAwIH19ID5cclxuICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udFNpemU6IDIwLCBwYWRkaW5nOiAxMCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogJyMxOTc2ZDInIH19PlxyXG4gICAgICAgIEtow6FjaCBow6BuZyAtIMSR4buRaSB0w6FjXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpbGVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFydG5lcl9faXRlbVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDIwMCB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ30gc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJScgfX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L1NsaWRlcj5cclxuICAgIDwvZGl2ID5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZXl3b3JkU2xpZGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlcydcclxuaW1wb3J0IHtcclxuICAgQ2FyZENvbnRlbnQsXHJcbiAgIFR5cG9ncmFwaHksXHJcbiAgIENhcmRBY3Rpb25BcmVhLFxyXG4gICBDYXJkTWVkaWEsXHJcbiAgIENhcmQsXHJcbiAgIEF2YXRhcixcclxuICAgSGlkZGVuLFxyXG4gICBHcmlkLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydCdcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvU2tlbGV0b24nXHJcbmltcG9ydCBTdGFyUmF0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJSYXRlJ1xyXG5pbXBvcnQgd2hhdDIgZnJvbSAnLi9JbWFnZS93aGF0Mi5qcGcnXHJcbmltcG9ydCB3aGF0MyBmcm9tICcuL0ltYWdlL3doYXQzLmpwZydcclxuaW1wb3J0IHdoYXQ0IGZyb20gJy4vSW1hZ2Uvd2hhdDQuanBnJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcclxuICAgdmlld1Bob25lOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICBwYWRkaW5nOiAnOHB4J1xyXG4gICAgICB9LFxyXG4gICB9LFxyXG4gICBjYXJkOiB7XHJcbiAgICAgIG1heFdpZHRoOiAyMDAsXHJcbiAgICAgIGJvcmRlcjogJzNweCBzb2xpZCB3aGl0ZScsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICAgICAvLyBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgbWF4V2lkdGg6IDE3MCxcclxuICAgICAgfVxyXG4gICB9LFxyXG4gICB0aXRsZToge1xyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgcGFkZGluZzogMjAsXHJcbiAgIH0sXHJcbiAgIGNzc0ljb246IHtcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGZvbnRTaXplOiAnMzBweCdcclxuICAgfSxcclxuICAgaW1nWm9vbToge1xyXG4gICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAuNXMsIGZpbHRlciAzcyBlYXNlLWluLW91dFwiLFxyXG4gICAgICBmaWx0ZXI6IFwiZ3JheXNjYWxlKDEwMCUpXCIsXHJcbiAgIH0sXHJcbiAgIGltZ1pvb206IHtcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgZmlsdGVyOiBcImdyYXlzY2FsZSgwKVwiLFxyXG4gICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS4xKVwiLFxyXG4gICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IFwiMXNcIixcclxuICAgICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBcImxpbmVhclwiLFxyXG4gICAgICB9XHJcbiAgIH1cclxufSlcclxuXHJcbmNvbnN0IGFyckltZyA9IFtcclxuICAge1xyXG4gICAgICBpbWFnZTogXCJodHRwczovL3RoZWJhbmsudm4vc3RhdGljLzYvMTEzNS83MTQvOTAvMjAxOC8xMC8xNi90aGViYW5rX3N1dGhhdHZlcGhpcXVldHRoZXRpbmR1bmdraGl0aGFuaHRvYW4xbWluXzE1Mzk2NTQyMzEuanBnXCIsXHJcbiAgICAgIHRpdGxlOiAnTXVhIEjDoG5nIFRp4buHbiBM4bujaScsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgaW1hZ2U6IHdoYXQ0LCAvL1wiaHR0cHM6Ly93d3cudGhpZXRrZWtpZW50cnVjZ3JvdXAuY29tL3B1YmxpYy91cGxvYWQvaW1hZ2VzL25vaS10aGF0LWdvLXBob25nLWtoYWNoJTIwKDc2KS5qcGdcIixcclxuICAgICAgdGl0bGU6ICdC4bqjbyBIw6BuaCBI4bqtdSBNw6NpJyxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBpbWFnZTogd2hhdDIsIC8vXCJodHRwczovL3d3dy5ub2l0aGF0aG9hbm15LmNvbS52bi9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL25vaS10aGF0LWdvLXBob25nLWtoYWNoLWRlcC5qcGdcIixcclxuICAgICAgdGl0bGU6ICdHacOhIEPhuqMgSOG7o3AgTMO9JyxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBpbWFnZTogd2hhdDMsIC8vXCJodHRwczovL2kyLndwLmNvbS9kb2dvcXVvY2N1b25nLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wOC9EU0MwOTU0NS5qcGc/Zml0PTMwMDglMkMyMDAwJnNzbD0xXCIsXHJcbiAgICAgIHRpdGxlOiAnVXkgVMOtbiBDaOG6pXQgTMaw4bujbmcnLFxyXG4gICB9LFxyXG5dXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICB9XHJcblxyXG4gICByZW5kZXIoKSB7XHJcbiAgICAgIGxldCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgLy8gbGV0IGltZyA9IFwidXJsKCdodHRwOi8vbm9pdGhhdGRhbmdjYXAudm4vYXBwL3dlYnJvb3QvdXBsb2Fkcy9maWxlcy8xLXBob25nLWtoYWNoLW5vaS10aGF0LWNvLWRpZW4tY2hhdS1hdS1kaW5oLXRodS10YWktTmFtLURpbmguanBnJylcIlxyXG4gICAgICBsZXQgaW1nID0gXCJ1cmwoJ2h0dHBzOi8vdGFtY2h1cGhpbmhzYW5waGFtLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS80MDc3OTA1NV83MTk4OTY0NDUwMTI5MTNfNDM2NDQ0OTQ5ODc5ODIyNzQ1Nl9uLmpwZycpXCJcclxuICAgICAgLy8gbGV0IGltZyA9IFwidXJsKCdodHRwczovL3BuZy5wbmd0cmVlLmNvbS81OHBpYy8zMi80OS82Ny8yMFU1OFBJQ0k5ZFdjZDdYN3lYOGVfUElDMjAxOC5qcGcnKVwiXHJcbiAgICAgIGNvbnN0IGFycmF5ID0gW3sgaXRlbTogMSB9LCB7IGl0ZW06IDEgfSwgeyBpdGVtOiAxIH0sIHsgaXRlbTogMSB9LCB7IGl0ZW06IDEgfSwgeyBpdGVtOiAxIH1dO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGltZywgaGVpZ2h0OiAyODAsIHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRSZXBlYXQ6ICdyZXBlYXQnIH19ID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJyMyMTk2ZjMnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19ID5cclxuICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PSdoNCcgY29tcG9uZW50PSdoNCc+XHJcbiAgICAgICAgICAgICAgICAgIEjDg1kgxJDhur5OIFbhu5pJIENIw5pORyBUw5RJXHJcbiAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAge2FycmF5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IDxTdGFyUmF0ZUljb24ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtjbGFzc2VzLmNzc0ljb259IC8+KX1cclxuICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfSBhbGlnbkl0ZW1zPSdjZW50ZXInIGp1c3RpZnk9J2NlbnRlcicgZGlyZWN0aW9uPSdyb3cnID5cclxuICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJJbWcubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17M30gbWQ9ezN9IGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y2xhc3Nlcy52aWV3UGhvbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nWm9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ29udGVtcGxhdGl2ZSBSZXB0aWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2VsZW1lbnQuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtlbGVtZW50LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMyMTk2ZjMnLCBwYWRkaW5nOiA0IH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxNiwgZm9udFdlaWdodDogNTAwIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgIH1cclxufVxyXG5cclxuSW5kZXgucHJvcFR5cGVzID0ge1xyXG4gICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShJbmRleCkiLCJpbXBvcnQgUmVhY3QsIHtGdW5jdGlvbkNvbXBvbmVudCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7bG9jYWxTdG9yYWdlUHJvamVjdFZpZXdlZCwgbG9jYWxTdG9yYWdlVmlld2VkfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4uLy4uL21vZHVsZXMvdmFsaWRhdG9yJztcclxuaW1wb3J0IHthcG9sbG9DbGllbnR9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHtcclxuICBHRVRfQURfU0VMTF9MRUFTRV9XSVNIX0xJU1QsXHJcbiAgSE9NRV9HRVRfQURfU0VMTF9MRUFTRVMsXHJcbn0gZnJvbSAnLi4vLi4vZ3JhcGhxbC9hZF9zZWxsX2xlYXNlcy9xdWVyaWVzJztcclxuaW1wb3J0IHtIT01FX0dFVF9QUk9KRUNUX0xJU1R9IGZyb20gJy4uLy4uL2dyYXBocWwvcHJvamVjdC9xdWVyaWVzJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB7QWRTZWxsTGVhc2VzTGlzdFByb3BzfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2ludGVyZmFjZSc7XHJcbmltcG9ydCBUaXRsZUJsb2NrIGZyb20gJy4vVGl0bGVCbG9jayc7XHJcbmltcG9ydCBMb2FkaW5nUGFnZSBmcm9tICcuLi9EaXNwbGF5L0xvYWRpbmdQYWdlJztcclxuaW1wb3J0IEdyaWRBZFNlbGxMZWFzZXMgZnJvbSAnLi4vR3JpZExpc3QvR3JpZEFkU2VsbExlYXNlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuXHJcbmludGVyZmFjZSBBZFNlbGxMZWFzZUluZGV4UHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmcsXHJcbiAgcGF0aDogc3RyaW5nLFxyXG4gIGhyZWY6IHN0cmluZyxcclxuICB0eXBlOiBcImgxXCJ8XCJoMlwifFwiaDNcIixcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZyxcclxuICBmaWx0ZXI6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBBZFNlbGxMZWFzZUluZGV4OiBGdW5jdGlvbkNvbXBvbmVudDxBZFNlbGxMZWFzZUluZGV4UHJvcHM+ID0gKHByb3BzOiBBZFNlbGxMZWFzZUluZGV4UHJvcHMpID0+XHJcbntcclxuICBjb25zdCBbZGF0YUFkU2VsbExlYXNlcywgc2V0RGF0YUFkU2VsbExlYXNlXSA9IFJlYWN0LnVzZVN0YXRlPEFkU2VsbExlYXNlc0xpc3RQcm9wc1tdPihbXSk7XHJcbiAgY29uc3QgW3N0YXR1c0xvYWRpbmdBZFNlbGxMZWFzZSwgc2V0U3RhdHVzTG9hZGluZ0FkU2VsbExlYXNlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgICBxdWVyeTogSE9NRV9HRVRfQURfU0VMTF9MRUFTRVMsIHZhcmlhYmxlczoge1xyXG4gICAgICAgIFwicGFnZVwiOiAxLFxyXG4gICAgICAgIFwibGltaXRcIjogMTIsXHJcbiAgICAgICAgXCJmaWx0ZXJcIjogcHJvcHMuZmlsdGVyXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBzZXRTdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2UoZmFsc2UpO1xyXG4gICAgICBpZiAoIVZhbGlkYXRvci5pc0JsYW5rKHJlc3BvbnNlLmRhdGEpICYmICFWYWxpZGF0b3IuaXNCbGFuayhyZXNwb25zZS5kYXRhLmFkU2VsbExlYXNlcy5lZGdlcykpIHtcclxuICAgICAgICBzZXREYXRhQWRTZWxsTGVhc2UocmVzcG9uc2UuZGF0YS5hZFNlbGxMZWFzZXMuZWRnZXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAoc3RhdHVzTG9hZGluZ0FkU2VsbExlYXNlIHx8IChkYXRhQWRTZWxsTGVhc2VzICYmIGRhdGFBZFNlbGxMZWFzZXMubGVuZ3RoID4gMCkpICYmXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJiYW5uZXJfYmxvY2tcIn0+XHJcbiAgICAgICAgICAgIDxUaXRsZUJsb2NrIHRpdGxlPXtwcm9wcy50aXRsZX0gZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9uP3Byb3BzLmRlc2NyaXB0aW9uOicnfSBwYXRoPXtwcm9wcy5wYXRofSBocmVmPXtwcm9wcy5ocmVmfSB0eXBlPXtwcm9wcy50eXBlfS8+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2UgJiZcclxuICAgICAgICAgICAgICA8TG9hZGluZ1BhZ2UgY2xhc3NOYW1lPVwibG9hZGluZ19wYWdlXCIgZ3JpZD17e3hsOiAzLCBsZzogMywgbWQ6IDQsIHNtOiA2LCB4czoxMn19IG51bWJlckxpbWl0PXsxMn0vPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAhc3RhdHVzTG9hZGluZ0FkU2VsbExlYXNlICYmXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxHcmlkQWRTZWxsTGVhc2VzIGdyaWQ9e3t4bDogMywgbGc6IDMsIG1kOiA0LCBzbTogNiwgeHM6MTJ9fSBncmlkRGF0YT17ZGF0YUFkU2VsbExlYXNlc30gY2xhc3NOYW1lPVwiZ3JpZF9fbGlzdFwiLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9pbmRleF9idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvcHMuaHJlZn0gYXM9e3Byb3BzLnBhdGh9PjxCdXR0b24+WGVtIHRow6ptPC9CdXR0b24+PC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZFNlbGxMZWFzZUluZGV4O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBOYXZpZ2F0ZU5leHQgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlTmV4dCc7XHJcbmltcG9ydCBOYXZpZ2F0ZUJlZm9yZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVCZWZvcmUnO1xyXG5cclxuaW50ZXJmYWNlIEhvdExvY2F0aW9uUHJvcHMgeyB9O1xyXG5pbnRlcmZhY2UgTG9jYXRpb25Qcm9wcyB7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHBhdGg6IHN0cmluZ1xyXG59XHJcblxyXG4vL0ltcG9ydCBEeW5hbWljXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbi8vSW1wb3J0IHdpdGhvdXQgU1NSIFNsaWRlclxyXG5jb25zdCBTbGlkZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3Qtc2xpY2snKSwge1xyXG4gIHNzcjogZmFsc2VcclxufSk7XHJcblxyXG5jb25zdCBIb3RMb2NhdGlvbjogRnVuY3Rpb25Db21wb25lbnQ8SG90TG9jYXRpb25Qcm9wcz4gPSAocHJvcHM6IEhvdExvY2F0aW9uUHJvcHMpID0+IHtcclxuICBjb25zdCBOZXh0QXJyb3cgPSAocHJvcHM6IHsgY2xhc3NOYW1lOiBhbnk7IG9uQ2xpY2s6IGFueTsgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17J2hvdC1sb2NhdGlvbnNfX25leHRfX2Fycm93J31cclxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICA8TmF2aWdhdGVOZXh0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IFByZXZBcnJvdyA9IChwcm9wczogeyBjbGFzc05hbWU6IGFueTsgb25DbGljazogYW55OyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXsnaG90LWxvY2F0aW9uc19fcHJldl9fYXJyb3cnfVxyXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIDxOYXZpZ2F0ZUJlZm9yZSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXtbXX0gLz4sXHJcbiAgICBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgY2xhc3NOYW1lPVwiXCIgb25DbGljaz17W119IC8+LFxyXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyOTAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogODc1LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA1OTksXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuICBsZXQgZGF0YUxvY2F0aW9uID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJIw6AgTuG7mWlcIixcclxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pbmhvbWUudm4vaG1fY29udGVudC91cGxvYWRzL3Rpbi10dWMvNC90aGlldC1rZS1ub2ktdGhhdC1waG9uZy1raGFjaC1iYW5nLWdvLWhpZW4tZGFpLWRlcC90aGlldC1rZS1ub2ktdGhhdC1waG9uZy1raGFjaC1kb24tZ2lhbi1tYS1kZXAtNC5qcGdcIixcclxuICAgICAgcGF0aDogXCIvbmhhLWRhdC1iYW4vbmhhLWRhdC1iYW4tdGFpLWhhLW5vaVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJI4buTIENow60gTWluaFwiLFxyXG4gICAgICBpbWFnZTogXCJodHRwczovL25vaXRoYXRtYW5oaGUudm4vbWVkaWEvMTc1MzEvc2FuZy10cm9uZy1ib2ktcGhvbmcta2hhY2gtbm9pLXRoYXQtZ28tdHUtbmhpZW4tbm9pLXRoYXQtbWFuaC1oZS5qcGc/d2lkdGg9NzAwJmhlaWdodD00MjIuNDQxODYwNDY1MTE2M1wiLFxyXG4gICAgICBwYXRoOiBcIi9uaGEtZGF0LWJhbi9uaGEtZGF0LWJhbi10YWktaG8tY2hpLW1pbmhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwixJDDoCBO4bq1bmdcIixcclxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9raWVudHJ1Y3JvbWFuLmNvbS52bi93cC1jb250ZW50L3VwbG9hZHMvcGhvbmcta2hhY2gtYmFuZy1nby1jYW8tY2FwLTIuanBnXCIsXHJcbiAgICAgIHBhdGg6IFwiL25oYS1kYXQtYmFuL25oYS1kYXQtYmFuLXRhaS1kYS1uYW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkzDom0gxJDhu5NuZ1wiLFxyXG4gICAgICBpbWFnZTogXCJodHRwczovL25oYWJlcGhvYW5nZ2lhLnZuL2NvbnRlbnRzL3Bvc3RzLzIzOTAuanBnXCIsXHJcbiAgICAgIHBhdGg6IFwiL25oYS1kYXQtYmFuL25oYS1kYXQtYmFuLXRhaS1sYW0tZG9uZ1wiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG90LWxvY2F0aW9uc1wiPlxyXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGF0YUxvY2F0aW9uLm1hcCgoaW1hZ2VPYmplY3Q6IExvY2F0aW9uUHJvcHMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e1wibG9jYXRpb25fXCIgKyBTdHJpbmcoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9uaGEtZGF0LWJhbi9bc2x1Z10nIGFzPXtpbWFnZU9iamVjdC5wYXRofT48YT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3QtbG9jYXRpb25zX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaG90LWxvY2F0aW9uc19faXRlbV9fdGl0bGVcIj57aW1hZ2VPYmplY3QudGl0bGV9PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG90LWxvY2F0aW9uc19faXRlbV9faW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG90LWxvY2F0aW9uc19faXRlbV9faW1hZ2VfX2JhY2tncm91bmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1N0cmluZyhpbWFnZU9iamVjdC5pbWFnZSl9IGFsdD17XCJUw6xtIGtp4bq/bSBuaMOgIMSQ4bqldCB04bqhaSBcIiArIGltYWdlT2JqZWN0LnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L1NsaWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3RMb2NhdGlvbjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgICBJbnB1dEJhc2UsXHJcbiAgICBJY29uQnV0dG9uLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgR3JpZCxcclxuICAgIExpc3QsXHJcbiAgICBMaXN0SXRlbSxcclxuICAgIExpc3RJdGVtSWNvbixcclxuICAgIExpc3RJdGVtVGV4dCxcclxuICAgIERpdmlkZXIsXHJcbiAgICBQb3BvdmVyLFxyXG4gICAgVHlwb2dyYXBoeSxcclxuICAgIEhpZGRlbixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcclxuaW1wb3J0IEFycm93RHJvcFVwIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Ryb3BVcCc7XHJcbmltcG9ydCBBcnJvd0Ryb3BEb3duIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Ryb3BEb3duJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBFY29JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWNvXCI7XHJcbmltcG9ydCBWaWV3TGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZpZXdMaXN0XCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50JztcclxuaW1wb3J0IEdhbWVwYWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HYW1lcGFkJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBpbnB1dGJhc2U6IHtcclxuICAgICAgICB3aWR0aDogJzUwMHB4JyxcclxuICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgIGZsb2F0OiAnbGVmdCcsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogMTAsXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoSG9tZToge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgbWluSGVpZ2h0OiAnNDAwcHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgICAgIG9wYWNpdHk6ICcxJyxcclxuICAgICAgICAvLyBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJodHRwczovL2kyLndwLmNvbS9kb2dvcXVvY2N1b25nLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wOC9EU0MwOTU0NS5qcGc/Zml0PTMwMDglMkMyMDAwJnNzbD0xXCIpJ1xyXG4gICAgfSxcclxuICAgIHNlYXJjaEhvbWVCb2R5OiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgdG9wOiAxMDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgdmlld1NlYXJjaDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxOTc2ZDInLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICB3aWR0aDogNjAsXHJcbiAgICB9LFxyXG4gICAgaWNvblNlYXJjaDoge1xyXG4gICAgICAgIGZvbnRTaXplOiAyNSxcclxuICAgICAgICBtYXJnaW5Ub3A6IDgsXHJcbiAgICB9LFxyXG4gICAgaWNvbkJ1dHRvbjoge1xyXG4gICAgICAgIHBhZGRpbmc6ICc0cHggMTZweCcsXHJcbiAgICAgICAgbWFyZ2luVG9wOiA0LFxyXG4gICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH0sXHJcbiAgICBsaXN0SXRlbToge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlM2YyZmQnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJyM5MGNhZjknLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0ZXh0SXRlbToge1xyXG4gICAgICAgIGNvbG9yOiAnIzE5NzZkMicsXHJcbiAgICB9LFxyXG4gICAgcG9wb3Zlcjoge1xyXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJywgLy8gbm9uZVxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU2VhcmNoSG9tZXBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VXYXJkcyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIiB8fCBldmVudC5rZXlDb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgIC8vIG9uQ2xpY2tTZWFyY2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGltYWdlQmFja2dyb3VuZCA9IFtcclxuICAgICAgICAnaHR0cHM6Ly9pMi53cC5jb20vZG9nb3F1b2NjdW9uZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDgvRFNDMDk1NDUuanBnP2ZpdD0zMDA4JTJDMjAwMCZzc2w9MScsXHJcbiAgICAgICAgJ2h0dHBzOi8vd3d3Lm5vaXRoYXRob2FubXkuY29tLnZuL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvbm9pLXRoYXQtZ28tcGhvbmcta2hhY2gtZGVwLmpwZycsXHJcbiAgICAgICAgJ2h0dHBzOi8vdmF0bGlldXhheWR1bmcub3JnLnZuL1VwbG9hZC80OC9OYW1fMjAxOC9UaGFuZ18xMi9OZ2F5XzE5L3ZseGQub3JnX25ndXllbnRhYzIuanBnJyxcclxuICAgICAgICAnaHR0cHM6Ly93d3cubm9pdGhhdGhvYW5teS5jb20udm4vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9ub2ktdGhhdC1nby1waG9uZy1raGFjaC1kZXAuanBnJyxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBbXHJcbiAgICAgICAgeyB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyBoaeG7h24gxJHhuqFpJywgbGluazogJy9iYWQnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyBj4buVIMSRaeG7g24nLCBsaW5rOiAnL2JhZCcgfSxcclxuICAgICAgICB7IHRpdGxlOiAnQsOgbiDEg24gNCBnaOG6vycsIGxpbms6ICcvYmFkJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdCw6BuIMSDbiA2IGdo4bq/JywgbGluazogJy9iYWQnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ0LDoG4gxINuIGhp4buHbiDEkeG6oWknLCBsaW5rOiAnL2JhZCcgfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBoaXN0b3J5ID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICdHacaw4budbmcgbmfhu6cnLCBsaW5rOiAnL2hpc3RvcnknIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ2LDoG4gxINuJywgbGluazogJy9oaXN0b3J5JyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICd04bunIHF14bqnbiDDoW8nLCBsaW5rOiAnL2hpc3RvcnknIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ3Thu6cgZ2nDoHknLCBsaW5rOiAnL2hpc3RvcnknIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ3Thu6cgZ2jhur8gbmjDoCBow6BuZycsIGxpbms6ICcvaGlzdG9yeScgfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCByZW5kZXJTdWdnZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc1NzBweCcsIHBvaW50ZXJFdmVudHM6ICdhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249J2xlZnQnIHZhcmlhbnQ9J3N1YnRpdGxlMidcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnNHB4IDhweCcsIGN1cnNvcjogJ2RlZmF1bHQnLCBkaXNwbGF5OiAnaW5saW5lJywgY29sb3I6ICcjMTk3NmQyJywgZm9udFNpemU6IDE0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIFThu6ogS0jDk0EgSE9UXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17eyBwYWRkaW5nOiA0LCBjdXJzb3I6ICdkZWZhdWx0JywgZGlzcGxheTogJ2lubGluZScsIGZsb2F0OiAncmlnaHQnLCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zLm1hcCgoaXRlbSwgY291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtjb3VudH0gc3R5bGU9e3sgZm9udFNpemU6IDE0LCBwYWRkaW5nOiAnNHB4IDEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJIaXN0b3J5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc1NzBweCcsIHBvaW50ZXJFdmVudHM6ICdhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249J2xlZnQnIHZhcmlhbnQ9J3N1YnRpdGxlMidcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnNHB4IDhweCcsIGN1cnNvcjogJ2RlZmF1bHQnLCBkaXNwbGF5OiAnaW5saW5lJywgY29sb3I6ICcjMTk3NmQyJywgZm9udFNpemU6IDE0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEzhu4pDSCBT4busIFTDjE0gS0nhu4JNXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPSdyaWdodCcgdmFyaWFudD0nc3VidGl0bGUyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDQsIGNvbG9yOiAncmVkJywgY3Vyc29yOiAnZGVmYXVsdCcsIGRpc3BsYXk6ICdpbmxpbmUnLCBmbG9hdDogJ3JpZ2h0JywgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBYw7NhXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICB7aGlzdG9yeS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5tYXAoKGl0ZW0sIGNvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT17Y291bnR9IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgcGFkZGluZzogJzRweCAxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT17Y291bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgS2jDtG5nIGPDsyBs4buLY2ggc+G7rSB0w6xtIGtp4bq/bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtID5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBvcG92ZXJPcGVuID0gKGV2ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5PSdjZW50ZXInIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hIb21lfSA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEhvbWVCb2R5fSBvbkNsaWNrPXtoYW5kbGVQb3BvdmVyT3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0QmFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRiYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J1TDrG0gc+G6o24gcGjhuqltIG1vbmcgbXXhu5FuIC4uLid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnVMOsbSBz4bqjbiBwaOG6qW0gbW9uZyBtdeG7kW4gLi4uJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXtlID0+IG9uQ2hhbmdlV2FyZHMoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy52aWV3U2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb25TZWFyY2h9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0ljb25CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6ICdib3R0b20nLCBob3Jpem9udGFsOiAnbGVmdCcgfX0gLy8gR2hpbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgdmVydGljYWw6ICd0b3AnLCBob3Jpem9udGFsOiAnbGVmdCcgfX0gLy8gVmkgdHJpIGhpZW4gdGhpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25Nb3VzZUxlYXZlPXtoYW5kbGVQb3BvdmVyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyU3VnZ2VzdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVySGlzdG9yeSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hIb21lcGFnZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7RnVuY3Rpb25Db21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmludGVyZmFjZSBUaXRsZUJsb2NrUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdHlwZTogXCJoMVwiIHwgXCJoMlwiIHwgXCJoM1wiO1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIHBhdGg6IHN0cmluZztcclxuICBocmVmPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFRpdGxlQmxvY2s6IEZ1bmN0aW9uQ29tcG9uZW50PFRpdGxlQmxvY2tQcm9wcz4gPSAocHJvcHM6IFRpdGxlQmxvY2tQcm9wcykgPT4ge1xyXG4gIGxldCBkb21UaXRsZSA9ICg8PjwvPik7XHJcbiAgaWYgKHByb3BzLnR5cGUgPT09IFwiaDFcIikge1xyXG4gICAgZG9tVGl0bGUgPSAoPGgxIGNsYXNzTmFtZT1cInRpdGxlX2Jsb2NrX19iaWdfdGl0bGVcIj57cHJvcHMudGl0bGV9PC9oMT4pO1xyXG4gIH1cclxuICBpZiAocHJvcHMudHlwZSA9PT0gXCJoMlwiKSB7XHJcbiAgICBkb21UaXRsZSA9ICg8aDIgY2xhc3NOYW1lPVwidGl0bGVfYmxvY2tfX2JpZ190aXRsZVwiPntwcm9wcy50aXRsZX08L2gyPik7XHJcbiAgfVxyXG4gIGlmIChwcm9wcy50eXBlID09PSBcImgzXCIpIHtcclxuICAgIGRvbVRpdGxlID0gKDxoMiBjbGFzc05hbWU9XCJ0aXRsZV9ibG9ja19fYmlnX3RpdGxlXCI+e3Byb3BzLnRpdGxlfTwvaDI+KTtcclxuICB9XHJcbiAgbGV0IGRvbUJsb2NrVGl0bGUgPSAoPD48Lz4pO1xyXG4gIGlmIChwcm9wcy5wYXRoLmluZGV4T2YoJ2h0dHBzOi8vJykgIT09IC0xKSB7XHJcbiAgICBkb21CbG9ja1RpdGxlID0gKFxyXG4gICAgICA8YSBocmVmPXtwcm9wcy5wYXRofT5cclxuICAgICAgICB7ZG9tVGl0bGV9XHJcbiAgICAgIDwvYT5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChwcm9wcy5wYXRoID09PSAnJykge1xyXG4gICAgZG9tQmxvY2tUaXRsZSA9IGRvbVRpdGxlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb21CbG9ja1RpdGxlID0gKFxyXG4gICAgICA8TGluayBocmVmPXtwcm9wcy5ocmVmP3Byb3BzLmhyZWY6cHJvcHMucGF0aH0gYXM9e1N0cmluZyhwcm9wcy5wYXRoKX0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICB7ZG9tVGl0bGV9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGl0ZW0geHM9ezEyfSBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIGNsYXNzTmFtZT1cInRpdGxlX2Jsb2NrXCI+XHJcbiAgICAgIHtkb21CbG9ja1RpdGxlfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlX2Jsb2NrX19iaWdfZGVzY3JpcHRpb25cIj57cHJvcHMuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlQmxvY2s7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgUGhvbmVJcGhvbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG9uZUlwaG9uZVwiO1xyXG5pbXBvcnQgRW1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRW1haWxcIjtcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0Z1bmN0aW9uQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgSUZvb3RlclByb3BzIHtcclxuXHJcbn1cclxuY29uc3QgRm9vdGVyUGFnZTogRnVuY3Rpb25Db21wb25lbnQ8SUZvb3RlclByb3BzPiA9IChwcm9wczogSUZvb3RlclByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJmb290ZXJcIiBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5XCJcclxuICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSBzbT17MTJ9IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtIGJvcmRlcl9ib3R0b21fbW9iaWxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fdGl0bGVcIj5cclxuICAgICAgICAgICAgICBDw5RORyBUWSBD4buUIFBI4bqmTiBO4buYSSBUSOG6pFQgRE9ET1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTE3Mi4yNjggNTAxLjY3QzI2Ljk3IDI5MS4wMzEgMCAyNjkuNDEzIDAgMTkyIDAgODUuOTYxIDg1Ljk2MSAwIDE5MiAwczE5MiA4NS45NjEgMTkyIDE5MmMwIDc3LjQxMy0yNi45NyA5OS4wMzEtMTcyLjI2OCAzMDkuNjctOS41MzUgMTMuNzc0LTI5LjkzIDEzLjc3My0zOS40NjQgMHpNMTkyIDI3MmM0NC4xODMgMCA4MC0zNS44MTcgODAtODBzLTM1LjgxNy04MC04MC04MC04MCAzNS44MTctODAgODAgMzUuODE3IDgwIDgwIDgwelwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dF90aXRsZVwiPsSQ4buLYSBjaOG7iTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICBT4buRIDEyIEtodeG6pXQgRHV5IFRp4bq/biwgVGhhbmggWHXDom4sIEjDoCBO4buZaVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPFBob25lSXBob25lLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRfdGl0bGVcIj7EkGnhu4duIHRob+G6oWk8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl90ZXh0X2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgMDM3NyA1MzUgNzE3XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl9pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8RW1haWxJY29uLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRfdGl0bGVcIj5FLW1haWw8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl90ZXh0X2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgbm9pdGhhdGRvZG9AZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2JyYW5jaFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ292XCIgc3JjPVwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L2JvY29uZ3RodW9uZy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgYWx0PVwixJDDoyB0aMO0bmcgYsOhbyB24bubaSBC4buZIEPDtG5nIFRoxrDGoW5nXCIvPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL3d3dy5kbWNhLmNvbS9Qcm90ZWN0aW9uL1N0YXR1cy5hc3B4P0lEPTc4MTY2MDVkLWZiZDItNDVmOC1hMzk3LWVlYWM0MjY0MmI3NSZyZWZ1cmw9aHR0cHM6Ly9uaGFkYXRtb2kubmV0Lyd9IHRhcmdldD17J19ibGFuayd9IHJlbD17J25vZm9sbG93J30gPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvZG1jYS5wbmdcIiBhbHQ9XCJETUNBXCIgY2xhc3NOYW1lPVwiZG1jYVwiLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBtZD17OH0gc209ezEyfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9IHhzPXs2fSBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICBDw7RuZyB0eVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvYWJvdXQtdXMnfSBhcz17Jy9hYm91dC11cyd9PjxhPlbhu4EgQuG6pXQgxJDhu5luZyBT4bqjbiBN4bubaTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vaGVscC5uaGFkYXRtb2kubmV0L3R1eWVuLWR1bmcnfSByZWw9eydub2ZvbGxvdyd9PlR1eeG7g24gZOG7pW5nPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL2hlbHAubmhhZGF0bW9pLm5ldC9saWVuLWhlL3Rob25nLXRpbi1saWVuLWhlJ30gcmVsPXsnbm9mb2xsb3cnfT5UaMO0bmcgdGluIGxpw6puIGjhu4c8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9zaXRlbWFwJ30gYXM9eycvc2l0ZW1hcCd9PjxhPlNpdGVtYXA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9IHhzPXs2fSBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICDEkGnhu4F1IGtob+G6o25cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly9oZWxwLm5oYWRhdG1vaS5uZXQvZGlldS1raG9hbi9xdXktY2hlLWhvYXQtZG9uZyd9IHJlbD17J25vZm9sbG93J30+UXV5IGNo4bq/IGhv4bqhdCDEkeG7mW5nPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL2hlbHAubmhhZGF0bW9pLm5ldC9kaWV1LWtob2FuL2NoaW5oLXNhY2gtYmFvLW1hdCd9IHJlbD17J25vZm9sbG93J30+Q2jDrW5oIHPDoWNoIGLhuqNvIG3huq10PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL2hlbHAubmhhZGF0bW9pLm5ldC9kaWV1LWtob2FuL2NoaW5oLXNhY2gtY29va2llJ30gcmVsPXsnbm9mb2xsb3cnfT5DaMOtbmggc8OhY2ggQ29va2llPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL2hlbHAubmhhZGF0bW9pLm5ldC9kaWV1LWtob2FuL2RpZXUta2hvYW4tc3UtZHVuZyd9IHJlbD17J25vZm9sbG93J30+xJBp4buBdSBraG/huqNuIHPhu60gZOG7pW5nPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9IHhzPXs2fSBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICBUaMO0bmcgdGluXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vbmhhZGF0bW9pLm5ldC90aW4tdHVjL3Rpbi10dWMnfT5UaW4gdOG7qWMgdGjhu4sgdHLGsOG7nW5nPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL25oYWRhdG1vaS5uZXQvdGluLXR1Yy9ibG9nJ30+QsOhbyBjw6FvICYgUGjDom4gdMOtY2g8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vbmhhZGF0bW9pLm5ldC90aW4tdHVjL2tpZW4tdGh1Yy1tb2ktZ2lvaSd9Pktp4bq/biB0aOG7qWMgY2hvIG3DtGkgZ2nhu5tpPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL2hlbHAubmhhZGF0bW9pLm5ldC9odW9uZy1kYW4nfSByZWw9eydub2ZvbGxvdyd9PkjGsOG7m25nIGThuqtuIHPhu60gZOG7pW5nPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9IHhzPXs2fSBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICBN4bqhbmcgeMOjIGjhu5lpXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9uaGFkYXRtb2kubmV0Lyd9IHJlbD17J25vZm9sbG93J30gdGFyZ2V0PXsnX2JsYW5rJ30+RmFjZWJvb2s8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNDdmxPRDd2VFBKZVlSWThJcklOZ3VRJ30gcmVsPXsnbm9mb2xsb3cnfSB0YXJnZXQ9eydfYmxhbmsnfT5Zb3V0dWJlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL3R3aXR0ZXIuY29tL25oYWRhdG1vaSd9IHJlbD17J25vZm9sbG93J30gdGFyZ2V0PXsnX2JsYW5rJ30+VHdpdHRlcjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL25oYWRhdG1vaS8nfSByZWw9eydub2ZvbGxvdyd9IHRhcmdldD17J19ibGFuayd9PkxpbmtlZEluPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0gY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2FwcHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2FwcHNfdGl0bGVcIj5QaMawxqFuZyB0aOG7qWMgdGhhbmggdG/DoW48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2FwcHNfcGF5bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC92aXNhLnBuZ1wiIGFsdD1cIlZpc2FcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L21hc3RlcmNhcmQucG5nXCIgYWx0PVwiTWFzdGVyY2FyZFwiLz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvYXRtLnBuZ1wiIGFsdD1cIkFUTVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19hcHBzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19hcHBzX3RpdGxlXCI+4buobmcgZOG7pW5nIGRpIMSR4buZbmc8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2FwcHNfcGF5bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5vX2JvcmRlclwiIHNyYz1cImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9hcHBsZS1zdG9yZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkFwcGxlIFN0b3JlXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5vX2JvcmRlclwiIHNyYz1cImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9nb29nbGUtcGxheS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkdvb2dsZSBQbGF5XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlclBhZ2VcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdCc7XHJcbmltcG9ydCBHcmlkTGlzdFRpbGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlJztcclxuaW1wb3J0IEdyaWRMaXN0VGlsZUJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGVCYXInO1xyXG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyJztcclxuaW1wb3J0IEluZm9JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbmZvJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXMnO1xyXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAncmVhY3QtcmVkdXgtaTE4bic7XHJcbmltcG9ydCB7XHJcbiAgSWNvbkJ1dHRvbixcclxuICBJY29uLFxyXG4gIFRvb2x0aXAsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgR3JpZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIEFwcEJhcixcclxuICBUb29sYmFyLFxyXG4gIEhpZGRlbixcclxuICBQb3BvdmVyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuaW1wb3J0IFN0YXJCb3JkZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCB7IHRpdGxlcyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9pbmRleCc7XHJcbmltcG9ydCBHYW1lcGFkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR2FtZXBhZCc7XHJcbmltcG9ydCBNb2RhbExvZ2luIGZyb20gJy4uL0xvZ2luL01vZGFsJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiO1xyXG5pbXBvcnQgR3JvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3Jvd1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBQb3BwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcHBlclwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XHJcbmltcG9ydCBNZW51TGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3RcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3RQb3BvdmVyOiB7XHJcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTNmMmZkJyxcclxuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzkwY2FmOScsXHJcbiAgICB9XHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZGlzcGxheTogJ2lubGluZScsXHJcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgcGFkZGluZzogJzAgMTJweCcsXHJcbiAgICAvLyBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkIHdoaXRlJyxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgaGVpZ2h0OiA0MCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTk3NmQyJ1xyXG4gIH0sXHJcbiAgZGl2aWRlcjoge1xyXG4gICAgaGVpZ2h0OiAyOCxcclxuICAgIG1hcmdpbjogNCxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgZGlzcGxheTogJ2lubGluZScsXHJcbiAgfSxcclxuICB0ZXh0SXRlbToge1xyXG4gICAgY29sb3I6ICcjMTk3NmQyJyxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICAgIHBhZGRpbmdSaWdodDogMjAsXHJcbiAgfSxcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHpJbmRleDogOTk5OTk5ODg4ODg4ODg4ODgsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMilcclxuICB9XHJcbn0pKTtcclxuXHJcblxyXG5jb25zdCBBY3Rpb25zID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtjb3VudE1lbnUsIHNldENvdW50TWVudV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb3Blbk1lbnUsIHNldE9wZW5NZW51XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBhbmNob3JSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0T3Blbk1lbnUocHJldk9wZW4gPT4gIXByZXZPcGVuKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IGV2ZW50ID0+IHtcclxuICAgIGlmIChhbmNob3JSZWYuY3VycmVudCAmJiBhbmNob3JSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldE9wZW5NZW51KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVMaXN0S2V5RG93bihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIikge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZXRPcGVuTWVudShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm4gZm9jdXMgdG8gdGhlIGJ1dHRvbiB3aGVuIHdlIHRyYW5zaXRpb25lZCBmcm9tICFvcGVuIC0+IG9wZW5cclxuICBjb25zdCBwcmV2T3BlbiA9IFJlYWN0LnVzZVJlZihvcGVuTWVudSk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcmV2T3Blbi5jdXJyZW50ID09PSB0cnVlICYmIG9wZW5NZW51ID09PSBmYWxzZSkge1xyXG4gICAgICBhbmNob3JSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgcHJldk9wZW4uY3VycmVudCA9IG9wZW5NZW51O1xyXG4gIH0sIFtvcGVuTWVudV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9IGFsaWduSXRlbXM9J2NlbnRlcicganVzdGlmeT0nY2VudGVyJyBkaXJlY3Rpb249J3JvdycgPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj0naW5oZXJpdCdcclxuICAgICAgICAgIGFyaWEtb3ducz17b3Blbk1lbnUgPyAnbW91c2Utb3Zlci1wb3BvdmVyJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250V2VpZ2h0OiA1MDAsIHBhZGRpbmc6ICcwIDIwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdhbWVwYWRJY29uIHN0eWxlPXt7IHBhZGRpbmc6ICcwIDRweCcgfX0gLz4gTuG7mWkgVGjhuqV0IERvZG9cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHJlZj17YW5jaG9yUmVmfVxyXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtvcGVuTWVudSA/IFwibWVudS1saXN0LWdyb3dcIiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZVRvZ2dsZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgLy8gc3R5bGU9e3sgdGV4dERlY29yYXRpb246IGluZGV4T3BlbiA9PT0gaW5kZXggPyAndW5kZXJsaW5lICcgOiAnbm9uZScgfX1cclxuICAgICAgICAgIC8vIG9uTW91c2VMZWF2ZT17cG9wb3ZlckNsb3NlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8UG9wcGVyXHJcbiAgICAgICAgICAgIG9wZW49e29wZW5NZW51fVxyXG4gICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yUmVmLmN1cnJlbnR9XHJcbiAgICAgICAgICAgIHJvbGU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgdHJhbnNpdGlvblxyXG4gICAgICAgICAgICBkaXNhYmxlUG9ydGFsXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogOTk5OSB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7KHsgVHJhbnNpdGlvblByb3BzLCBwbGFjZW1lbnQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxHcm93XHJcbiAgICAgICAgICAgICAgICB7Li4uVHJhbnNpdGlvblByb3BzfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiBwbGFjZW1lbnQgPT09IFwiYm90dG9tXCIgPyBcImNlbnRlciB0b3BcIiA6IFwiY2VudGVyIGJvdHRvbVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyPlxyXG4gICAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c0l0ZW09e29wZW5NZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtZW51LWxpc3QtZ3Jvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUxpc3RLZXlEb3dufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+UHJvZmlsZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9Pk15IGFjY291bnQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Mb2dvdXQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvUG9wcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgIDxNb2RhbExvZ2luIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gXCIuLi8uLi9tb2R1bGVzL3ZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBnb29nbGVTZWFyY2hDb25zb2xlLCBsb2NhbFN0b3JhZ2VDb21wYXJlS2V5IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IExvZ28gPSByZXF1aXJlKFwiLi9sb2dvLnBuZ1wiKTtcclxuXHJcbmludGVyZmFjZSBMYXlvdXRQYWdlUHJvcHMge1xyXG4gIHRpdGxlPzogc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nLFxyXG4gIGltYWdlPzogc3RyaW5nLFxyXG4gIGNhbm9uaWNhbDogc3RyaW5nLFxyXG4gIHBhdGg6IHN0cmluZyxcclxuICBjaGlsZHJlbj86IGFueSxcclxuICB1c2VyPzoge1xyXG4gICAgZW1haWw6IHN0cmluZyxcclxuICAgIF9pZDogc3RyaW5nLFxyXG4gICAgZmlyc3RfbmFtZTogc3RyaW5nLFxyXG4gICAgbGFzdF9uYW1lOiBzdHJpbmcsXHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgYXZhdGFyOiBzdHJpbmdcclxuICB9LFxyXG4gIHVwZGF0ZU1vZGFsPzogKGRhdGE6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgc3RhdHVzTW9kYWw/OiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IExheW91dFBhZ2U6IEZ1bmN0aW9uQ29tcG9uZW50PExheW91dFBhZ2VQcm9wcz4gPSAocHJvcHM6IExheW91dFBhZ2VQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzdGF0dXNNb2RhbCwgc2V0TW9kYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHVwZGF0ZU1vZGFsID0gKGRhdGE6IGJvb2xlYW4pID0+IHtcclxuICAgIGlmICh0eXBlb2YgcHJvcHMudXBkYXRlTW9kYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgcHJvcHMudXBkYXRlTW9kYWwoZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRNb2RhbChkYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IFtkYXRhQ29tcGFyZUxvY2FsLCBzZXREYXRhQ29tcGFyZUxvY2FsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSkgJiYgIVZhbGlkYXRvci5pc0JsYW5rKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkpKSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldERhdGFDb21wYXJlTG9jYWwoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5KSBhcyBzdHJpbmcpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgbGV0IHNjaGVtYU9iamVjdCA9ICd7XCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLCBcIkB0eXBlXCI6IFwiTG9jYWxCdXNpbmVzc1wiLCBcIm5hbWVcIjogXCJC4bqldCDEkOG7mW5nIFPhuqNuIE7hu5lpIHRo4bqldCBEb2RvXCIsIFwiaW1hZ2VcIjogXCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvMTIzMDEyMDExMzg4NzUzMTAwOC9CUEg3NWJXMF80MDB4NDAwLmpwZ1wiLCBcImFkZGl0aW9uYWxUeXBlXCI6W1wiaHR0cHM6Ly92aS53aWtpcGVkaWEub3JnL3dpa2kvQiVFMSVCQSVBNXRfJUM0JTkxJUUxJUJCJTk5bmdfcyVFMSVCQSVBM25cIixcImh0dHBzOi8vdmkud2lraXBlZGlhLm9yZy93aWtpL00lQzMlQjRpX2dpJUUxJUJCJTlCaV9iJUUxJUJBJUE1dF8lQzQlOTElRTElQkIlOTluZ19zJUUxJUJBJUEzblwiLFwiaHR0cHM6Ly92aS53aWtpcGVkaWEub3JnL3dpa2kvTmclQzYlQjAlRTElQkIlOURpX20lQzMlQjRpX2dpJUUxJUJCJTlCaVwiXSwgXCJwYXltZW50QWNjZXB0ZWRcIjpcIkNhc2gsIFZpc2EsIE1hc3RlcmNhcmQsIEFtZXJpY2FuIEV4cHJlc3MsIERlYml0LCBQYXlQYWwsIEFwcGxlIFBheVwiLCBcIm1haW5FbnRpdHlPZlBhZ2VcIjpcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcz9jaWQ9NjI1NTA1NDkzODk2OTYyMDQ3NVwiLCBcImhhc21hcFwiOlwiaHR0cHM6Ly9zZWFyY2guZ29vZ2xlLmNvbS9sb2NhbC93cml0ZXJldmlldz9wbGFjZWlkPUNoSUotVUk2TWg1VE5ERVItel9XaDFOcnpsWVwiLCBcImRlc2NyaXB0aW9uXCI6XCJO4buZaSB0aOG6pXQgRG9kbyDEkcOzbiDEkeG6p3UgeHUgaMaw4bubbmcgYuG6pXQgxJHhu5luZyBz4bqjbiA0LjAgdOG6oWkgVmnhu4d0IE5hbSwgdMOtY2ggaOG7o3AgdHLDrSB0deG7hyBuaMOibiB04bqhbyDEkeG7gyB44butIGzDvSBjw6FjIGThu68gbGnhu4d1LCBwaMOibiB0w61jaCBuaHUgY+G6p3UgY+G7p2EgY+G6oyBuZ8aw4budaSBtdWEgbOG6q24gbmfGsOG7nWkgYsOhblwiLCBcIkBpZFwiOiBcImh0dHBzOi8vbmhhZGF0bW9pLm5ldC9cIiwgXCJ1cmxcIjogXCJodHRwczovL25oYWRhdG1vaS5uZXQvXCIsIFwidGVsZXBob25lXCI6IFwiMDM3NyA1MzUgNzE3XCIsIFwicHJpY2VSYW5nZVwiOiBcIjEwMDAgJFwiLCBcImFkZHJlc3NcIjogeyBcIkB0eXBlXCI6IFwiUG9zdGFsQWRkcmVzc1wiLCBcInN0cmVldEFkZHJlc3NcIjogXCJT4buRIDM0OCBU4buRIEjhu691LCBwaMaw4budbmcgTGEgS2jDqiwgcXXhuq1uIEjDoCDEkMO0bmdcIiwgXCJhZGRyZXNzTG9jYWxpdHlcIjogXCJIw6AgTuG7mWlcIiwgXCJwb3N0YWxDb2RlXCI6IFwiMTAwMDAwXCIsIFwiYWRkcmVzc0NvdW50cnlcIjogXCJWTlwifSwgXCJnZW9cIjogeyBcIkB0eXBlXCI6IFwiR2VvQ29vcmRpbmF0ZXNcIiwgXCJsYXRpdHVkZVwiOiAyMC45NzA5NDk2LCBcImxvbmdpdHVkZVwiOiAxMDUuNzUzMTYxNyB9LCBcIm9wZW5pbmdIb3Vyc1NwZWNpZmljYXRpb25cIjogeyBcIkB0eXBlXCI6IFwiT3BlbmluZ0hvdXJzU3BlY2lmaWNhdGlvblwiLFwiZGF5T2ZXZWVrXCI6IFsgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiLCBcIlN1bmRheVwiXSwgXCJvcGVuc1wiOiBcIjAwOjAwXCIsIFwiY2xvc2VzXCI6IFwiMjM6NTlcIiB9LCBcInNhbWVBc1wiOiBbXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDQ3ZsT0Q3dlRQSmVZUlk4SXJJTmd1UVwiLFwiaHR0cHM6Ly9iZHNuaGFkYXRtb2kuYmxvZ3Nwb3QuY29tXCIsIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL25oYWRhdG1vaS5uZXRcIiwgXCJodHRwczovL2Jkc25oYWRhdG1vaS5ibG9nc3BvdC5jb21cIiwgXCJodHRwczovL3ZpLmdyYXZhdGFyLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL2Jkc25oYWRhdG1vaS50dW1ibHIuY29tXCIsIFwiaHR0cHM6Ly9iZHNuaGFkYXRtb2kud2VlYmx5LmNvbVwiLCBcImh0dHBzOi8vdHdpdHRlci5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cucmVkZGl0LmNvbS91c2VyL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LmRpaWdvLmNvbS9wcm9maWxlL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LmFydGZpcmUuY29tL2V4dC9wZW9wbGUvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuc21hc2h3b3Jkcy5jb20vcHJvZmlsZS92aWV3L2Jkc25oYWRhdG1vaVwiLCBcImh0dHA6Ly9wbGF5LmZtL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3Lmxhc3QuZm0vdXNlci9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5zdHJhdmEuY29tL2F0aGxldGVzL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy50cmlwYWR2aXNvci5jb20udm4vUHJvZmlsZS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwOi8vYml0Lmx5LzJ1YVpQTG1cIiwgXCJodHRwczovL2dldHBvY2tldC5jb20vQGJkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LnBpbnRlcmVzdC5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LmZsaWNrci5jb20vcGVvcGxlL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vYWJvdXQubWUvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuaW5zdGFwYXBlci5jb20vcC9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5iZWhhbmNlLm5ldC9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL215c3BhY2UuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3Lmdvb2RyZWFkcy5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9kcmliYmJsZS5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuZGV2aWFudGFydC5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cucGx1cmsuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHA6Ly93d3cuZm9sa2QuY29tL3VzZXIvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cudGVkLmNvbS9wcm9maWxlcy8xOTAyNTk3N1wiLCBcImh0dHBzOi8va2luamEuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vZWxsby5jby9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL2NvdWIuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vbWl4LmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwOi8vd3d3LmF1dGhvcnN0cmVhbS5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL21lZGl1bS5jb20vQGJkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vY29kZXBlbi5pby9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5ldmVybm90ZS5jb20vcHViL25kbWgyNjkvdGludHVjXCIsIFwiaHR0cHM6Ly9kaXNxdXMuY29tL2J5L2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LnNjb29wLml0L3UvYi10LW5nLXMtbi1uaGEtdC1tLWlcIiwgXCJodHRwczovL3d3dy52aW5nbGUubmV0L2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LnF1b3JhLmNvbS9wcm9maWxlL0JhdC1Eb25nLVNhbi1OaGEtRGF0LU1vaVwiLCBcImh0dHBzOi8vYmRzbmhhZGF0bW9pLmxpdmVqb3VybmFsLmNvbVwiLCBcImh0dHBzOi8vYW5nZWwuY28vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cucHJvZHVjdGh1bnQuY29tL0BiZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3NwZWFrZXJkZWNrLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy53aWtpaG93LmNvbS9Vc2VyOkJkc25oYWRhdG1vaVwiLCBcImh0dHA6Ly9iZHNuaGFkYXRtb2kuYnJhbmR5b3Vyc2VsZi5jb21cIl19JztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwcm9wcy50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e3Byb3BzLmNhbm9uaWNhbH0gLz5cclxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj17TG9nb30gLz5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDQwMGksNTAwLDcwMCw5MDAmZGlzcGxheT1zd2FwJnN1YnNldD12aWV0bmFtZXNlXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PXtnb29nbGVTZWFyY2hDb25zb2xlfSAvPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICFWYWxpZGF0b3IuaXNCbGFuayhwcm9wcy5kZXNjcmlwdGlvbikgJiZcclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3Byb3BzLnRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBwcm9wZXJ0eT1cImZiOmFwcF9pZFwiIGNvbnRlbnQ9XCI5MzcyMzQzNjYzMzU1MDRcIiAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIHByb3BlcnR5PVwiZmI6YWRtaW5zXCIgY29udGVudD1cIjEwMDAwNDI0NDQ3NDAxM1wiIC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiTuG7mWkgdGjhuqV0IERvZG9cIiAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17cHJvcHMuY2Fub25pY2FsfSAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtwcm9wcy5pbWFnZX0gLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBuaGFkYXRtb2lcIiAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQG5oYWRhdG1vaVwiIC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtwcm9wcy50aXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17cHJvcHMuaW1hZ2V9IC8+XHJcbiAgICAgICAgPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2NoZW1hT2JqZWN0IH19ID5cclxuICAgICAgICA8L3NjcmlwdD5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUIwQUFBQWRDQVlBQUFCV2syY1BBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRHNNQUFBN0RBY2R2cUdRQUFBRFJTVVJCVkVoTDdaTXhDc0pBRUVXOWhxZlV5bFBrQkhvQjlRS0NscFoyNGdtMFVZU0FwZFhLRDFreTdueGpQaGhNc1E5ZXRWa2VtNTBkaFQrUW83MGlSWXZ0TlJTN20xTkZpbzVuUjZwS2psSllFS29NUDdvOGxDNDRXVjNxMWU2NEtIc1dpLzI5WG4wUDIrRG05SEQ3SU1ORjdTbXMwM1VUUU5nRzJSK0lNanBIb1ExSDJvS1FJVVVoSXBGeithVGZXQmxTbEExTnJ5ZE43ekM5WTdZSE1seTBtdDdFK1lmcHRlRnFlc2xlaG91MndVN0VodXNiVWpRTlJsVnlsTUtDVUdYNFVmWWtvSW9VL1JVNTJpTWh2QUNZZlFrZ1dyNWRyQUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIERpYWxvZyxcclxuICBJY29uQnV0dG9uLFxyXG4gIEdyaWQsXHJcbiAgUGFwZXIsXHJcbiAgVGFicyxcclxuICBUYWIsXHJcbiAgQ2FyZCxcclxuICBDYXJkQ29udGVudCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgeyBnb29nbGVMb2dpbiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZmFjZWJvb2tMb2dpbiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgemFsb0xvZ2luIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgSW1hZ2VMb2dpbiBmcm9tICcuLi8uLi9wdWJsaWMvSW1hZ2UvbG9naW4ucG5nJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBsb25nSW46IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6IDYwMCxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvbG9naW4tYmFja2dyb3VuZC5zdmdcIiknLFxyXG4gICAgLy8gYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHBhZGRpbmc6ICcwIDIwcHgnLFxyXG4gIH0sXHJcbiAgbG9nSW5DbG9zZToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnMHB4JyxcclxuICAgIHJpZ2h0OiAnMHB4JyxcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgd2lkdGg6ICc0MHB4IWltcG9ydGFudCcsXHJcbiAgICBoZWlnaHQ6ICc0MHB4IWltcG9ydGFudCcsXHJcbiAgfSxcclxuICBtb2RhbDoge1xyXG4gICAgLy8gbWF4V2lkdGg6ICcnLFxyXG4gICAgaGVpZ2h0OiA2MDAsXHJcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsb2F0OiAnbGVmdCcsXHJcbiAgICBtYXJnaW46ICc3MHB4IDAgOHB4IDAnLFxyXG4gICAgLy8gZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xyXG4gICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgIGNvbG9yOiAnIzE5NzZkMicsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBmbG9hdDogJ2xlZnQnLFxyXG4gICAgLy8gZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xyXG4gICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgIGNvbG9yOiAnIzAwMDAwMDhhJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcblxyXG5jb25zdCB0YWJzID0gW1xyXG4gIHsgdmFsdWU6IDEsIGxhYmVsOiAnxJDEg25nIE5o4bqtcCcgfSxcclxuICB7IHZhbHVlOiAyLCBsYWJlbDogJ1ThuqFvIFTDoGkgS2hv4bqjbicgfSxcclxuXTtcclxuXHJcblxyXG5jb25zdCBMb2dpbk1vZGFsID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW3ZhbHVlVGFiLCBzZXRWYWx1ZVRhYl0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyR29vZ2xlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbl9fbW9kYWxfX2Jsb2NrX19nb29nbGVcIiBocmVmPXtnb29nbGVMb2dpbn0+XHJcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUzMy41IDU0NC4zXCI+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk01MzMuNSwyNzguNGMwLTE4LjUtMS41LTM3LjEtNC43LTU1LjNIMjcyLjF2MTA0LjhoMTQ3Yy02LjEsMzMuOC0yNS43LDYzLjctNTQuNCw4Mi43djY4aDg3LjcgQzUwMy45LDQzMS4yLDUzMy41LDM2MS4yLDUzMy41LDI3OC40elwiIC8+XHJcbiAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MVwiIGQ9XCJNMjcyLjEsNTQ0LjNjNzMuNCwwLDEzNS4zLTI0LjEsMTgwLjQtNjUuN2wtODcuNy02OGMtMjQuNCwxNi42LTU1LjksMjYtOTIuNiwyNmMtNzEsMC0xMzEuMi00Ny45LTE1Mi44LTExMi4zIEgyOC45djcwLjFDNzUuMSw0ODYuMywxNjkuMiw1NDQuMywyNzIuMSw1NDQuM3pcIiAvPlxyXG4gICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDJcIiBkPVwiTTExOS4zLDMyNC4zYy0xMS40LTMzLjgtMTEuNC03MC40LDAtMTA0LjJWMTUwSDI4LjljLTM4LjYsNzYuOS0zOC42LDE2Ny41LDAsMjQ0LjRMMTE5LjMsMzI0LjN6XCIgLz5cclxuICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QzXCIgZD1cIk0yNzIuMSwxMDcuN2MzOC44LTAuNiw3Ni4zLDE0LDEwNC40LDQwLjhsMCwwbDc3LjctNzcuN0M0MDUsMjQuNiwzMzkuNy0wLjgsMjcyLjEsMEMxNjkuMiwwLDc1LjEsNTgsMjguOSwxNTBcdGw5MC40LDcwLjFDMTQwLjgsMTU1LjYsMjAxLjEsMTA3LjcsMjcyLjEsMTA3Ljd6XCIgLz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJnb29nbGVcIj7EkMSCTkcgTkjhuqxQIELhurBORyBHT09HTEU8L3A+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclphbG8gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luX19tb2RhbF9fYmxvY2tfX3phbG9cIiBocmVmPXt6YWxvTG9naW59PlxyXG4gICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA0NjAuMSA0MzYuNlwiPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk04Mi42IDM4MC45Yy0xLjgtLjgtMy4xLTEuNy0xLTMuNSAxLjMtMSAyLjctMS45IDQuMS0yLjggMTMuMS04LjUgMjUuNC0xNy44IDMzLjUtMzEuNSA2LjgtMTEuNCA1LjctMTguMS0yLjgtMjYuNUM2OSAyNjkuMiA0OC4yIDIxMi41IDU4LjYgMTQ1LjUgNjQuNSAxMDcuNyA4MS44IDc1IDEwNyA0Ni42YzE1LjItMTcuMiAzMy4zLTMxLjEgNTMuMS00Mi43IDEuMi0uNyAyLjktLjkgMy4xLTIuNy0uNC0xLTEuMS0uNy0xLjctLjctMzMuNyAwLTY3LjQtLjctMTAxIC4yQzI4LjMgMS43LjUgMjYuNi42IDYyLjNjLjIgMTA0LjMgMCAyMDguNiAwIDMxMyAwIDMyLjQgMjQuNyA1OS41IDU3IDYwLjcgMjcuMyAxLjEgNTQuNi4yIDgyIC4xIDIgLjEgNCAuMiA2IC4ySDI5MGMzNiAwIDcyIC4yIDEwOCAwIDMzLjQgMCA2MC41LTI3IDYwLjUtNjAuM3YtLjYtNTguNWMwLTEuNC41LTIuOS0uNC00LjQtMS44LjEtMi41IDEuNi0zLjUgMi42LTE5LjQgMTkuNS00Mi4zIDM1LjItNjcuNCA0Ni4zLTYxLjUgMjcuMS0xMjQuMSAyOS0xODcuNiA3LjItNS41LTItMTEuNS0yLjItMTcuMi0uOC04LjQgMi4xLTE2LjcgNC42LTI1IDcuMS0yNC40IDcuNi00OS4zIDExLTc0LjggNnptNzIuNS0xNjguNWMxLjctMi4yIDIuNi0zLjUgMy42LTQuOCAxMy4xLTE2LjYgMjYuMi0zMy4yIDM5LjMtNDkuOSAzLjgtNC44IDcuNi05LjcgMTAtMTUuNSAyLjgtNi42LS4yLTEyLjgtNy0xNS4yLTMtLjktNi4yLTEuMy05LjQtMS4xLTE3LjgtLjEtMzUuNy0uMS01My41IDAtMi41IDAtNSAuMy03LjQuOS01LjYgMS40LTkgNy4xLTcuNiAxMi44IDEgMy44IDQgNi44IDcuOCA3LjcgMi40LjYgNC45LjkgNy40LjggMTAuOC4xIDIxLjcgMCAzMi41LjEgMS4yIDAgMi43LS44IDMuNiAxLS45IDEuMi0xLjggMi40LTIuNyAzLjUtMTUuNSAxOS42LTMwLjkgMzkuMy00Ni40IDU4LjktMy44IDQuOS01LjggMTAuMy0zIDE2LjNzOC41IDcuMSAxNC4zIDcuNWM0LjYuMyA5LjMuMSAxNCAuMSAxNi4yIDAgMzIuMy4xIDQ4LjUtLjEgOC42LS4xIDEzLjItNS4zIDEyLjMtMTMuMy0uNy02LjMtNS05LjYtMTMtOS43LTE0LjEtLjEtMjguMiAwLTQzLjMgMHptMTE2LTUyLjZjLTEyLjUtMTAuOS0yNi4zLTExLjYtMzkuOC0zLjYtMTYuNCA5LjYtMjIuNCAyNS4zLTIwLjQgNDMuNSAxLjkgMTcgOS4zIDMwLjkgMjcuMSAzNi42IDExLjEgMy42IDIxLjQgMi4zIDMwLjUtNS4xIDIuNC0xLjkgMy4xLTEuNSA0LjguNiAzLjMgNC4yIDkgNS44IDE0IDMuOSA1LTEuNSA4LjMtNi4xIDguMy0xMS4zLjEtMjAgLjItNDAgMC02MC0uMS04LTcuNi0xMy4xLTE1LjQtMTEuNS00LjMuOS02LjcgMy44LTkuMSA2Ljl6bTY5LjMgMzcuMWMtLjQgMjUgMjAuMyA0My45IDQ2LjMgNDEuMyAyMy45LTIuNCAzOS40LTIwLjMgMzguNi00NS42LS44LTI1LTE5LjQtNDIuMS00NC45LTQxLjMtMjMuOS43LTQwLjggMTkuOS00MCA0NS42em0tOC44LTE5LjljMC0xNS43LjEtMzEuMyAwLTQ3IDAtOC01LjEtMTMtMTIuNy0xMi45LTcuNC4xLTEyLjMgNS4xLTEyLjQgMTIuOC0uMSA0LjcgMCA5LjMgMCAxNHY3OS41YzAgNi4yIDMuOCAxMS42IDguOCAxMi45IDYuOSAxLjkgMTQtMi4yIDE1LjgtOS4xLjMtMS4yLjUtMi40LjQtMy43LjItMTUuNS4xLTMxIC4xLTQ2LjV6XCIgLz5cclxuICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MVwiIGQ9XCJNMTM5LjUgNDM2LjJjLTI3LjMgMC01NC43LjktODItLjEtMzIuMy0xLjMtNTctMjguNC01Ny02MC43IDAtMTA0LjMuMi0yMDguNiAwLTMxM0MuNSAyNi43IDI4LjQgMS44IDYwLjUuOWMzMy42LS45IDY3LjMtLjIgMTAxLS4yLjYgMCAxLjQtLjMgMS43LjctLjIgMS44LTIgMi0zLjEgMi43LTE5LjggMTEuNi0zNy45IDI1LjUtNTMuMSA0Mi43LTI1LjEgMjguNC00Mi41IDYxLTQ4LjQgOTguOS0xMC40IDY2LjkgMTAuNSAxMjMuNyA1Ny44IDE3MS4xIDguNCA4LjUgOS41IDE1LjEgMi44IDI2LjUtOC4xIDEzLjctMjAuNCAyMy0zMy41IDMxLjUtMS40LjgtMi44IDEuOC00LjIgMi43LTIuMSAxLjgtLjggMi43IDEgMy41LjQuOS45IDEuNyAxLjUgMi41IDExLjUgMTAuMiAyMi40IDIxLjEgMzMuNyAzMS41IDUuMyA0LjkgMTAuNiAxMCAxNS43IDE1LjEgMi4xIDEuOSA1LjYgMi41IDYuMSA2LjF6XCIgLz5cclxuICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MlwiIGQ9XCJNMTM5LjUgNDM2LjJjLS41LTMuNS00LTQuMS02LjEtNi4yLTUuMS01LjItMTAuNC0xMC4yLTE1LjctMTUuMS0xMS4zLTEwLjQtMjIuMi0yMS4zLTMzLjctMzEuNS0uNi0uOC0xLjEtMS42LTEuNS0yLjUgMjUuNSA1IDUwLjQgMS42IDc0LjktNS45IDguMy0yLjUgMTYuNi01IDI1LTcuMSA1LjctMS41IDExLjctMS4yIDE3LjIuOCA2My40IDIxLjggMTI2IDE5LjggMTg3LjYtNy4yIDI1LjEtMTEuMSA0OC0yNi43IDY3LjQtNDYuMiAxLTEgMS43LTIuNSAzLjUtMi42LjkgMS40LjQgMi45LjQgNC40djU4LjVjLjIgMzMuNC0yNi42IDYwLjYtNjAgNjAuOWgtLjVjLTM2IC4yLTcyIDAtMTA4IDBIMTQ1LjVjLTItLjItNC0uMy02LS4zelwiIC8+XHJcbiAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDFcIiBkPVwiTTE1NS4xIDIxMi40YzE1LjEgMCAyOS4zLS4xIDQzLjQgMCA3LjkuMSAxMi4yIDMuNCAxMyA5LjcuOSA3LjktMy43IDEzLjItMTIuMyAxMy4zLTE2LjIuMi0zMi4zLjEtNDguNS4xLTQuNyAwLTkuMy4yLTE0LS4xLTUuOC0uMy0xMS41LTEuNS0xNC4zLTcuNXMtLjgtMTEuNCAzLTE2LjNjMTUuNC0xOS42IDMwLjktMzkuMyA0Ni40LTU4LjkuOS0xLjIgMS44LTIuNCAyLjctMy41LTEtMS43LTIuNC0uOS0zLjYtMS0xMC44LS4xLTIxLjcgMC0zMi41LS4xLTIuNSAwLTUtLjMtNy40LS44LTUuNy0xLjMtOS4yLTctNy45LTEyLjYuOS0zLjggMy45LTYuOSA3LjctNy44IDIuNC0uNiA0LjktLjkgNy40LS45IDE3LjgtLjEgMzUuNy0uMSA1My41IDAgMy4yLS4xIDYuMy4zIDkuNCAxLjEgNi44IDIuMyA5LjcgOC42IDcgMTUuMi0yLjQgNS43LTYuMiAxMC42LTEwIDE1LjUtMTMuMSAxNi43LTI2LjIgMzMuMy0zOS4zIDQ5LjgtMS4xIDEuMy0yLjEgMi42LTMuNyA0Ljh6XCIgLz5cclxuICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MVwiIGQ9XCJNMjcxLjEgMTU5LjhjMi40LTMuMSA0LjktNiA5LTYuOCA3LjktMS42IDE1LjMgMy41IDE1LjQgMTEuNS4zIDIwIC4yIDQwIDAgNjAgMCA1LjItMy40IDkuOC04LjMgMTEuMy01IDEuOS0xMC43LjQtMTQtMy45LTEuNy0yLjEtMi40LTIuNS00LjgtLjYtOS4xIDcuNC0xOS40IDguNy0zMC41IDUuMS0xNy44LTUuOC0yNS4xLTE5LjctMjcuMS0zNi42LTIuMS0xOC4zIDQtMzMuOSAyMC40LTQzLjUgMTMuNi04LjEgMjcuNC03LjQgMzkuOSAzLjV6bS0zNS40IDM2LjVjLjIgNC40IDEuNiA4LjYgNC4yIDEyLjEgNS40IDcuMiAxNS43IDguNyAyMyAzLjMgMS4yLS45IDIuMy0yIDMuMy0zLjMgNS42LTcuNiA1LjYtMjAuMSAwLTI3LjctMi44LTMuOS03LjItNi4yLTExLjktNi4zLTExLS43LTE4LjcgNy44LTE4LjYgMjEuOXpNMzQwLjQgMTk2LjljLS44LTI1LjcgMTYuMS00NC45IDQwLjEtNDUuNiAyNS41LS44IDQ0LjEgMTYuMyA0NC45IDQxLjMuOCAyNS4zLTE0LjcgNDMuMi0zOC42IDQ1LjYtMjYuMSAyLjYtNDYuOC0xNi4zLTQ2LjQtNDEuM3ptMjUuMS0yLjRjLS4yIDUgMS4zIDkuOSA0LjMgMTQgNS41IDcuMiAxNS44IDguNiAyMyAzIDEuMS0uOCAyLTEuOCAyLjktMi44IDUuOC03LjYgNS44LTIwLjQuMS0yOC0yLjgtMy44LTcuMi02LjItMTEuOS02LjMtMTAuOC0uNi0xOC40IDcuNi0xOC40IDIwLjF6TTMzMS42IDE3N2MwIDE1LjUuMSAzMSAwIDQ2LjUuMSA3LjEtNS41IDEzLTEyLjYgMTMuMi0xLjIgMC0yLjUtLjEtMy43LS40LTUtMS4zLTguOC02LjYtOC44LTEyLjl2LTc5LjVjMC00LjctLjEtOS4zIDAtMTQgLjEtNy43IDUtMTIuNyAxMi40LTEyLjcgNy42LS4xIDEyLjcgNC45IDEyLjcgMTIuOS4xIDE1LjYgMCAzMS4zIDAgNDYuOXpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0yMzUuNyAxOTYuM2MtLjEtMTQuMSA3LjYtMjIuNiAxOC41LTIyIDQuNy4yIDkuMSAyLjUgMTEuOSA2LjQgNS42IDcuNSA1LjYgMjAuMSAwIDI3LjctNS40IDcuMi0xNS43IDguNy0yMyAzLjMtMS4yLS45LTIuMy0yLTMuMy0zLjMtMi41LTMuNS0zLjktNy43LTQuMS0xMi4xek0zNjUuNSAxOTQuNWMwLTEyLjQgNy42LTIwLjcgMTguNC0yMC4xIDQuNy4xIDkuMSAyLjUgMTEuOSA2LjMgNS43IDcuNiA1LjcgMjAuNS0uMSAyOC01LjYgNy4xLTE2IDguMy0yMy4xIDIuNy0xLjEtLjgtMi0xLjgtMi44LTIuOS0zLTQuMS00LjQtOS00LjMtMTR6XCIgLz5cclxuICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0M1wiIGQ9XCJNNjYgMWgzMjguMWMzNS45IDAgNjUgMjkuMSA2NSA2NXYzMDNjMCAzNS45LTI5LjEgNjUtNjUgNjVINjZjLTM1LjkgMC02NS0yOS4xLTY1LTY1VjY2QzEgMzAuMSAzMC4xIDEgNjYgMXpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInphbG9cIj7EkMSCTkcgTkjhuqxQIELhurBORyBaQUxPPC9wPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJGYWNlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbl9fbW9kYWxfX2Jsb2NrX19mYWNlYm9va1wiIGhyZWY9e2ZhY2Vib29rTG9naW59PlxyXG4gICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTUwNCAyNTZDNTA0IDExOSAzOTMgOCAyNTYgOFM4IDExOSA4IDI1NmMwIDEyMy43OCA5MC42OSAyMjYuMzggMjA5LjI1IDI0NVYzMjcuNjloLTYzVjI1Nmg2M3YtNTQuNjRjMC02Mi4xNSAzNy05Ni40OCA5My42Ny05Ni40OCAyNy4xNCAwIDU1LjUyIDQuODQgNTUuNTIgNC44NHY2MWgtMzEuMjhjLTMwLjggMC00MC40MSAxOS4xMi00MC40MSAzOC43M1YyNTZoNjguNzhsLTExIDcxLjY5aC01Ny43OFY1MDFDNDEzLjMxIDQ4Mi4zOCA1MDQgMzc5Ljc4IDUwNCAyNTZ6XCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmYWNlYm9va1wiPsSQxIJORyBOSOG6rFAgQuG6sE5HIEZBQ0VCT09LPC9wPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFic0NoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlVGFiKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJUYWJzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8UGFwZXIgc3F1YXJlPlxyXG4gICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRhYnNDaGFuZ2V9XHJcbiAgICAgICAgICAgIHNjcm9sbEJ1dHRvbnM9XCJhdXRvXCJcclxuICAgICAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZVRhYn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RhYnMubWFwKCh0YWIpID0+IDxUYWIga2V5PXt0YWIudmFsdWV9IGxhYmVsPXt0YWIubGFiZWx9IHZhbHVlPXt0YWIudmFsdWV9IC8+KX1cclxuICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHt2YWx1ZVRhYiA9PT0gMSAmJiByZW5kZXJMb2dpbigpfVxyXG4gICAgICAgICAgICB7dmFsdWVUYWIgPT09IDIgJiYgcmVuZGVyQ3JlYXRlQWNjb3VudCgpfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckxvZ2luID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbl9fbW9kYWxfX2Jsb2NrXCIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHggNDBweCcgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJFbWFpbCAvIFPEkFRcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAwJyB9fT5cclxuICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHNpemU9XCJzbWFsbFwiIGxhYmVsPVwiTeG6rXQga2jhuql1XCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogMzAsIHBhZGRpbmc6ICc4cHggMCcsIGZsb2F0OiAnbGVmdCcsIHdpZHRoOiAzMDAgfX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBjb2xvcjogJyMxOTc2ZDInLCBjdXJzb3I6ICdkZWZhdWx0JyB9fSA+UXXDqm4gbeG6rXQga2jhuql1PzwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIHN0eWxlPXt7IGNvbG9yOiAnIzE5NzZkMicgfX0+xJDEg25nIG5o4bqtcDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzYwcHggMCcgfX0+XHJcbiAgICAgICAgICB7cmVuZGVyR29vZ2xlKCl9XHJcbiAgICAgICAgICB7cmVuZGVyWmFsbygpfVxyXG4gICAgICAgICAge3JlbmRlckZhY2UoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBjb25zdCByZW5kZXJDcmVhdGVBY2NvdW50ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbl9fbW9kYWxfX2Jsb2NrXCIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHggNDBweCcgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJI4buNIHTDqm5cIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAwJyB9fT5cclxuICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHNpemU9XCJzbWFsbFwiIGxhYmVsPVwiU8SQVFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJFbWFpbFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJNw6MgeMOhYyB0aOG7sWNcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAwJyB9fT5cclxuICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHNpemU9XCJzbWFsbFwiIGxhYmVsPVwiTeG6rXQga2jhuql1XCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMCcgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBzaXplPVwic21hbGxcIiBsYWJlbD1cIkdp4bubaSB0w61uaFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBjb2xvcjogJyMxOTc2ZDInIH19PlThuqFvIHTDoGkga2hv4bqjbjwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgIGNvbG9yPSdpbmhlcml0J1xyXG4gICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250V2VpZ2h0OiA1MDAsIHBhZGRpbmc6ICcwIDIwcHgnLCBmbG9hdDogJ3JpZ2h0JywgY3Vyc29yOiAnZGVmYXVsdCcgfX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfT7EkMSDbmcgbmjhuq1wXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPERpYWxvZ1xyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibWF4LXdpZHRoLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgbWF4V2lkdGg9eydtZCd9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb25nSW59PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nSW5DbG9zZX0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfT5cclxuICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XHJcbiAgICAgICAgICAgICAge3ZhbHVlVGFiID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBzdHlsZT17eyBib3JkZXJSaWdodDogJzRweCBzb2xpZCAjZTBlMGUwJywgaGVpZ2h0OiA2MDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT4gxJDEg25nIG5o4bqtcCA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIMSQxINuZyBuaOG6rXAgxJHhu4MgdGhlbyBkw7VpIMSRxqFuIGjDoG5nLCBsxrB1IGRhbmggc8OhY2ggc+G6o24gcGjhuqltIHnDqnUgdGjDrWNoLCBuaOG6rW4gbmhp4buBdSDGsHUgxJHDo2kgaOG6pXAgZOG6q24uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtJbWFnZUxvZ2lufSBzdHlsZT17eyBoZWlnaHQ6IDM1MCwgd2lkdGg6ICcxMDAlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB7dmFsdWVUYWIgPT09IDIgJiZcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IHN0eWxlPXt7IGJvcmRlclJpZ2h0OiAnNHB4IHNvbGlkICNlMGUwZTAnLCBoZWlnaHQ6IDYwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PiBU4bqhbyB0w6BpIGtob+G6o24gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICBU4bqhbyB0w6BpIGtob+G6o24gxJHhu4MgdGhlbyBkw7VpIMSRxqFuIGjDoG5nLCBsxrB1IGRhbmggc8OhY2ggc+G6o24gcGjhuqltIHnDqnUgdGjDrWNoLCBuaOG6rW4gbmhp4buBdSDGsHUgxJHDo2kgaOG6pXAgZOG6q25cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0ltYWdlTG9naW59IHN0eWxlPXt7IGhlaWdodDogMzUwLCB3aWR0aDogJzEwMCUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgcGFkZGluZzogJzhweCAwIDAgMCcsIGNvbG9yOiAnIzE5NzZkMicsIGZvbnRTaXplOiAyMCwgZm9udFdlaWdodDogNTAwIH19Pk7hu5lpIHRo4bqldCBEb2RvPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAge3JlbmRlclRhYnMoKX1cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0RpYWxvZyA+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50ID5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpbk1vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcbmltcG9ydCBOYXZpZ2F0ZU5leHQgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlTmV4dCc7XHJcbmltcG9ydCBOYXZpZ2F0ZUJlZm9yZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVCZWZvcmUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBrZXlzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50c1wiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbn0pKTtcclxuXHJcbmNvbnN0IEtleXdvcmRTbGlkZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBOZXh0QXJyb3cgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXsna2V5d29yZC1zZWFyY2hfX25leHRfX2Fycm93J31cclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICA8TmF2aWdhdGVOZXh0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBQcmV2QXJyb3cgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXsna2V5d29yZC1zZWFyY2hfX3ByZXZfX2Fycm93J31cclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICA8TmF2aWdhdGVCZWZvcmUgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0YVNlYXJjaCA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiR2nGsOG7nW5nIG5n4bunIGhp4buHbiDEkeG6oWlcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdmluaG9tZXMtY2VudHJhbC1wYXJrLXBpZC0zNTg3MlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJU4bunIHF14bqnbiDDoW8gdGjhu51pIHRyYW5nXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3ZpbmhvbWVzLWdyYW5kLXBhcmstcXVhbi05LXBpZC0zNzU4NFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCw6BuIHRyw6AgcGjDsm5nIGtow6FjaCBoaeG7h24gxJHhuqFpXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3ZpbmhvbWVzLXNtYXJ0LWNpdHktcGlkLTM3MTkxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkLDoG4gdHLDoCBwaMOybmcga2jDoWNoIGPhu5UgxJFp4buDblwiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi92aW5ob21lcy1vY2Vhbi1wYXJrLWdpYS1sYW0tcGlkLTM3NTk3XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlThu6cgYuG6v3AgdGnhu4duIG5naGlcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdnVuZy10YXUtcGVhcmwtcGlkLTQ4Njc0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk7hu5lpIHRo4bqldCBzYW5nIHRy4buNbmdcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vZ3JhbmRldXItcGFsYWNlLXBpZC01MDIzNFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJHacaw4budbmcgbmfhu6cgY+G7lSDEkWnhu4NuXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL2RpYW1vbmQtaXNsYW5kLXBpZC0zMzVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTuG7mWkgdGjhuqV0IHNhbmcgdHLhu41uZ1wiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi90aGUtc3VuLWF2ZW51ZS1waWQtMTVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQsOgbiDEg24gY+G7lSDEkWnhu4NuXCIsXHJcbiAgICAgIHBhdGg6IFwiL25oYS1kYXQtYmFuL25oYS1kYXQtYmFuLXRhaS1oYWktcGhvbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQsOgbiDEg24gaGnhu4duIMSR4bqhaVwiLFxyXG4gICAgICBwYXRoOiBcIi9uaGEtZGF0LWJhbi9uaGEtZGF0LWJhbi10YWktaGEtbm9pXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgb25DbGljaz17W119IC8+LFxyXG4gICAgcHJldkFycm93OiA8UHJldkFycm93IG9uQ2xpY2s9e1tdfSAvPixcclxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxNDQwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgZG90czogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5d29yZC1zZWFyY2hcIj5cclxuICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udFNpemU6IDIwLCBwYWRkaW5nOiAxMCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogJyMxOTc2ZDInIH19PlThu6sga2jDs2EgdMOsbSBraeG6v20gSE9UPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGF0YVNlYXJjaC5tYXAoKHNlYXJjaE9iamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17c2VhcmNoT2JqZWN0LnBhdGh9IGFzPXtzZWFyY2hPYmplY3QucGF0aH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMTk3NmQyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrZXl3b3JkLXNlYXJjaF9faXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPntzZWFyY2hPYmplY3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L1NsaWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZXl3b3JkU2xpZGVcclxuIiwiY29uc3QgbWFpblVSTCA9IFwiaHR0cHM6Ly9uaGFkYXRtb2kubmV0XCI7XHJcbmNvbnN0IHVwZ3JhZGVQbGFuVVJMID0gXCJodHRwczovL25oYWRhdG1vaS5uZXRcIjtcclxuXHJcbmNvbnN0IHVwZ3JhZGVJY29uVVJMID0gXCJodHRwczovL3JlYWN0LW1hdGVyaWFsLWRhc2hib2FyZC5kZXZpYXMuaW8vaW1hZ2VzL3VuZHJhd19yZXN1bWVfZm9sZGVyXzJfYXJzZS5zdmdcIjtcclxuY29uc3QgbG9nb1VSTCA9IFwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L25oYWRhdG1vaS5zdmdcIjtcclxuXHJcbmNvbnN0IGFwaUJhc2VVUkwgPSBcImh0dHBzOi8vZ3JhcGgubmhhZGF0bW9pLm5ldFwiO1xyXG5jb25zdCBnb29nbGVMb2dpbiA9IGAke2FwaUJhc2VVUkx9L2F1dGgvZ29vZ2xlYDtcclxuY29uc3QgZmFjZWJvb2tMb2dpbiA9IGAke2FwaUJhc2VVUkx9L2F1dGgvZmFjZWJvb2tgO1xyXG5jb25zdCB6YWxvTG9naW4gPSBgJHthcGlCYXNlVVJMfS9hdXRoL3phbG9gO1xyXG5jb25zdCBhcGlHcmFwaFFMVVJMID0gYCR7YXBpQmFzZVVSTH0vZ3JhcGhxbGA7XHJcblxyXG5jb25zdCB1cmxJbWFnZUFkU2VsbExlYXNlID0gXCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RhdGEvYWRfc2VsbF9sZWFzZV9pbWFnZS9cIjtcclxuY29uc3QgdXJsSW1hZ2VQcm9qZWN0ID0gXCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RhdGEvcHJvamVjdF9pbWFnZS9cIjtcclxuY29uc3QgdXJsSW1hZ2VCcm9rZXIgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGF0YS9icm9rZXJfaW1hZ2UvXCI7XHJcblxyXG5jb25zdCBpbWFnZURlZmF1bHRQcm9qZWN0ID0gXCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvaG9tZV9kZWZhdWx0LmpwZ1wiO1xyXG5jb25zdCBpbWFnZURlZmF1bHRTbGlkZXIgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9uaGFkYXRtb2ktZGVmYXVsdC5zdmdcIjtcclxuY29uc3QgaW1hZ2VEZWZhdWx0QnJva2VyID0gXCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvdXNlci5wbmdcIjtcclxuY29uc3QgZ29vZ2xlQW5hbHl0aWNzQ29kZSA9ICdVQS02MDc2Nzk5OC04JztcclxuY29uc3QgZ29vZ2xlU2VhcmNoQ29uc29sZSA9ICdjeU1rVG5kSGRFOTVjRmd2N0g1X290dUR5LVg2TjdxZFhFdU5PUGlKMEdRJztcclxuY29uc3QgbG9jYWxTdG9yYWdlQ29tcGFyZUtleSA9ICduZG1fY29tcGFyZSc7XHJcbmNvbnN0IGxvY2FsU3RvcmFnZVZpZXdlZCA9ICduZG1fYXNsX3ZpZXdlZCc7XHJcbmNvbnN0IGxvY2FsU3RvcmFnZVByb2plY3RWaWV3ZWQgPSAnbmRtX3Byb2plY3Rfdmlld2VkJztcclxuXHJcbmNvbnN0IGFkU2VsbExlYXNlQ2F0ZWdvcnkgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYWYwNDQxMWUxZWE3MmExZmNiZGUnLFxyXG4gICAgc2x1ZzogJy9uaGEtZGF0LWJhbicsXHJcbiAgICBuYW1lOiAnTmjDoCDEkeG6pXQgYsOhbicsXHJcbiAgICBwYXJlbnRfc2x1ZzogJydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWFmMDQ0MTFlMWVhNzJhMWZjYmRmJyxcclxuICAgIHNsdWc6ICcvbmhhLWRhdC10aHVlJyxcclxuICAgIG5hbWU6ICdOaMOgIMSR4bqldCB0aHXDqicsXHJcbiAgICBwYXJlbnRfc2x1ZzogJydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWFmMDQ0MTFlMWVhNzJhMWZjYmUwJyxcclxuICAgIHNsdWc6ICcvbmhhLWRhdC1jYW4tbXVhJyxcclxuICAgIG5hbWU6ICdOaMOgIMSR4bqldCBj4bqnbiBtdWEnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFhZjA0NDExZTFlYTcyYTFmY2JlMScsXHJcbiAgICBzbHVnOiAnL25oYS1kYXQtY2FuLXRodWUnLFxyXG4gICAgbmFtZTogJ05ow6AgxJHhuqV0IGPhuqduIHRodcOqJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJ1xyXG4gIH1cclxuXTtcclxuY29uc3QgYWRTZWxsTGVhc2VUeXBlID0gW1xyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDVmNTQzZjY2Mzg3OWM2NzUwOTI3LDVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYyw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWEsNWU3ZDYxMzIzZjY2Mzg3OWM2NzUwOTk3LDVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tbmhhJyxcclxuICAgIG5hbWU6ICdCw6FuIG5ow6AnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFjJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1uaGEtbWF0LXBobycsXHJcbiAgICBuYW1lOiAnQsOhbiBuaMOgIG3hurd0IHBo4buRJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tbmhhJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tbmhhLXJpZW5nJyxcclxuICAgIG5hbWU6ICdCw6FuIG5ow6AgcmnDqm5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tbmhhJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MTMyM2Y2NjM4NzljNjc1MDk5NycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tbmhhLXBoby1zaG9waG91c2UnLFxyXG4gICAgbmFtZTogJ0LDoW4gbmjDoCBwaOG7kSB0aMawxqFuZyBt4bqhaSAoc2hvcGhvdXNlKScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLW5oYScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWInLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLW5oYS1saWVuLWtlJyxcclxuICAgIG5hbWU6ICdCw6FuIG5ow6AgbGnhu4FuIGvhu4EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1uaGEnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWE5LDVlN2Q2MjBmM2Y2NjM4NzljNjc1MDlmOCw1ZTdkNjIyZDNmNjYzODc5YzY3NTBhMDcsNWU3ZDYyNGIzZjY2Mzg3OWM2NzUwYTE1LDVlN2Q2MjZiM2Y2NjM4NzljNjc1MGEyMyw1ZTdkNjI4YjNmNjYzODc5YzY3NTBhMzQsNWU3ZDYyYTUzZjY2Mzg3OWM2NzUwYTQyLDVlN2Q2MmNjM2Y2NjM4NzljNjc1MGE1MSw1ZTdkNjJmYzNmNjYzODc5YzY3NTBhNmEsNWU3ZDYzMTkzZjY2Mzg3OWM2NzUwYTdiLDVlN2Q2MzJmM2Y2NjM4NzljNjc1MGE4ZCw1ZTk5MjRmNjcxNmVlOTY0YjVmZGNjMjMnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICBuYW1lOiBcIkLDoW4gY8SDbiBo4buZLCBjaHVuZyBjxrBcIixcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MjBmM2Y2NjM4NzljNjc1MDlmOCcsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLWdpYS1yZScsXHJcbiAgICBuYW1lOiBcIkPEg24gaOG7mSBjaHVuZyBjxrAgZ2nDoSBy4bq7XCIsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjIyZDNmNjYzODc5YzY3NTBhMDcnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1taW5pJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIGNodW5nIGPGsCBtaW5pXCIsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjI0YjNmNjYzODc5YzY3NTBhMTUnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby10cnVuZy1jYXAnLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgY2h1bmcgY8awIHRydW5nIGPhuqVwXCIsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjI2YjNmNjYzODc5YzY3NTBhMjMnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jYW8tY2FwJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIGNodW5nIGPGsCBjYW8gY+G6pXBcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MjhiM2Y2NjM4NzljNjc1MGEzNCcsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLXBlbnRob3VzZScsXHJcbiAgICBuYW1lOiBcIkPEg24gaOG7mSBwZW50aG91c2VcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MmE1M2Y2NjM4NzljNjc1MGE0MicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLXNreXZpbGxhJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIFNreXZpbGxhXCIsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjJjYzNmNjYzODc5YzY3NTBhNTEnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1sb2Z0LWhvdXNlJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIExvZnQgLSBob3VzZVwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYyZmMzZjY2Mzg3OWM2NzUwYTZhJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tc3R1ZGlvJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIFN0dWRpb1wiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYzMTkzZjY2Mzg3OWM2NzUwYTdiJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tY29uZG90ZWwnLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgQ29uZG90ZWxcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MzJmM2Y2NjM4NzljNjc1MGE4ZCcsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLW9mZmljZXRlbCcsXHJcbiAgICBuYW1lOiBcIkPEg24gaOG7mSBPZmZpY2V0ZWxcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlOTkyNGY2NzE2ZWU5NjRiNWZkY2MyMycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLWR1cGxleCcsXHJcbiAgICBuYW1lOiBcIkPEg24gaOG7mSBEdXBsZXhcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MzY4M2Y2NjM4NzljNjc1MGFiNiw1ZTkxMjI5NDhjNzFkMjVhODc5ZDMwZTYsNWU3ZDY0YWUzZjY2Mzg3OWM2NzUwYWVmLDVlN2Q2NGM1M2Y2NjM4NzljNjc1MGFmZSw1ZTdkNjRlMjNmNjYzODc5YzY3NTBiMGIsNWU3ZDY1OGEzZjY2Mzg3OWM2NzUwYjcwLDVlN2Q2NTEwM2Y2NjM4NzljNjc1MGIyNyw1ZTdkNjU1ZTNmNjYzODc5YzY3NTBiNTEsNWU3ZDY1YjgzZjY2Mzg3OWM2NzUwYjhhJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICBuYW1lOiAnQsOhbiBiaeG7h3QgdGjhu7EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU5MTIyOTQ4YzcxZDI1YTg3OWQzMGU2JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1iaWV0LXRodS1saWVuLWtlJyxcclxuICAgIG5hbWU6ICdCaeG7h3QgdGjhu7EgbGnhu4FuIGvhu4EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjRhZTNmNjYzODc5YzY3NTBhZWYnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1LXNhbi12dW9uJyxcclxuICAgIG5hbWU6ICdCaeG7h3QgdGjhu7Egc8OibiB2xrDhu51uJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tYmlldC10aHUnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDY0YzUzZjY2Mzg3OWM2NzUwYWZlJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1iaWV0LXRodS1zb25nLWxhcCcsXHJcbiAgICBuYW1lOiAnQmnhu4d0IHRo4buxIHNvbmcgbOG6rXAnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjRlMjNmNjYzODc5YzY3NTBiMGInLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1LWRvbi1sYXAnLFxyXG4gICAgbmFtZTogJ0Jp4buHdCB0aOG7sSDEkcahbiBs4bqtcCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NThhM2Y2NjM4NzljNjc1MGI3MCcsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtbmdoaS1kdW9uZycsXHJcbiAgICBuYW1lOiAnQmnhu4d0IHRo4buxIG5naOG7iSBkxrDhu6FuZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NTEwM2Y2NjM4NzljNjc1MGIyNycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtcGhvJyxcclxuICAgIG5hbWU6ICdCaeG7h3QgdGjhu7EgcGjhu5EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjU1ZTNmNjYzODc5YzY3NTBiNTEnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1LXR1LWxhcCcsXHJcbiAgICBuYW1lOiAnQmnhu4d0IHRo4buxIHThu6kgbOG6rXAnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjViODNmNjYzODc5YzY3NTBiOGEnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1LW1pbmknLFxyXG4gICAgbmFtZTogJ0Jp4buHdCB0aOG7sSBNaW5pJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tYmlldC10aHUnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFlLDVlNjcwNzdlMWZlYTI3M2E5ODVkMWQzNiw1ZTY3MDcwZjFmZWEyNzNhOTg1ZDFkMzUsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFkLDVlNjcwNzk4MWZlYTI3M2E5ODVkMWQzNycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tZGF0JyxcclxuICAgIG5hbWU6ICdCw6FuIMSR4bqldCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiNWU2NzA3N2UxZmVhMjczYTk4NWQxZDM2XCIsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tZGF0LW5lbicsXHJcbiAgICBuYW1lOiAnxJDhuqV0IG7hu4FuJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tZGF0JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlNjcwNzBmMWZlYTI3M2E5ODVkMWQzNScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tZGF0LXRoby1jdScsXHJcbiAgICBuYW1lOiAnQsOhbiDEkeG6pXQgdGjhu5UgY8awJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tZGF0JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhZCcsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tZGF0LW5lbi1kdS1hbicsXHJcbiAgICBuYW1lOiAnQsOhbiDEkeG6pXQgbuG7gW4sIGThu7Egw6FuJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tZGF0JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlNjcwNzk4MWZlYTI3M2E5ODVkMWQzNycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tZGF0LW5vbmctbGFtLW5naGllcCcsXHJcbiAgICBuYW1lOiAnTXVhIGLDoW4gxJHhuqV0IG7DtG5nIGzDom0gbmdoaeG7h3AnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1kYXQnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU2NzA3YzIxZmVhMjczYTk4NWQxZDM4LDVlNjcwN2UwMWZlYTI3M2E5ODVkMWQzOSw1ZTY3MDdmODFmZWEyNzNhOTg1ZDFkM2EsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWIwLDVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhZicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmF0LWRvbmctc2FuLWtoYWMnLFxyXG4gICAgbmFtZTogJ0LDoW4gY8OhYyBsb+G6oWkgYuG6pXQgxJHhu5luZyBz4bqjbiBraMOhYycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTY3MDdlMDFmZWEyNzNhOTg1ZDFkMzknLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLW5oYS1oYW5nLWtoYWNoLXNhbicsXHJcbiAgICBuYW1lOiAnQsOhbiBuaMOgIGjDoG5nLCBraMOhY2ggc+G6oW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTY3MDdmODFmZWEyNzNhOTg1ZDFkM2EnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLXNhbmctbmh1b25nLXF1YW4nLFxyXG4gICAgbmFtZTogJ0LDoW4vc2FuZyBuaMaw4bujbmcgc2hvcCwga2lvdCwgcXXDoW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjAnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWtoby1uaGEteHVvbmcnLFxyXG4gICAgbmFtZTogJ0LDoW4gbmjDoCBraG8sIG5ow6AgeMaw4bufbmcnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWYnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLXRyYW5nLXRyYWktbmdoaS1kdW9uZycsXHJcbiAgICBuYW1lOiAnQsOhbiB0cmFuZyB0cuG6oWksIG5naOG7iSBkxrDhu6FuZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjMycsXHJcbiAgICBzbHVnOiAnL2Nhbi10aHVlLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICBuYW1lOiAnQ+G6p24gdGh1w6ogY8SDbiBo4buZIGNodW5nIGPGsCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjNCcsXHJcbiAgICBzbHVnOiAnL2Nhbi10aHVlLW5oYS1yaWVuZycsXHJcbiAgICBuYW1lOiAnQ+G6p24gdGh1w6ogbmjDoCByacOqbmcnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YzUnLFxyXG4gICAgc2x1ZzogJy9jYW4tdGh1ZS1uaGEtbWF0LXBobycsXHJcbiAgICBuYW1lOiAnQ+G6p24gdGh1w6ogbmjDoCBt4bq3dCBwaOG7kScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjNicsXHJcbiAgICBzbHVnOiAnL2Nhbi10aHVlLW5oYS10cm8tcGhvbmctdHJvJyxcclxuICAgIG5hbWU6ICdD4bqnbiB0aHXDqiBuaMOgIHRy4buNLCBwaMOybmcgdHLhu40nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YzcnLFxyXG4gICAgc2x1ZzogJy9jYW4tdGh1ZS12YW4tcGhvbmcnLFxyXG4gICAgbmFtZTogJ0PhuqduIHRodcOqIHbEg24gcGjDsm5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWM4JyxcclxuICAgIHNsdWc6ICcvY2FuLXRodWUtY3VhLWhhbmcta2lvdCcsXHJcbiAgICBuYW1lOiAnQ+G6p24gdGh1w6ogY+G7rWEgaMOgbmcsIGtpIOG7kXQnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YzknLFxyXG4gICAgc2x1ZzogJy9jYW4tdGh1ZS1raG8tbmhhLXh1b25nLWRhdCcsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIGtobywgbmjDoCB4xrDhu59uZywgxJHhuqV0JyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWNhJyxcclxuICAgIHNsdWc6ICcvY2FuLXRodWUtY2FjLWxvYWktYmF0LWRvbmctc2FuLWtoYWMnLFxyXG4gICAgbmFtZTogJ0PhuqduIHRodcOqIGxv4bqhaSBi4bqldCDEkeG7mW5nIHPhuqNuIGtow6FjJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWJhJyxcclxuICAgIHNsdWc6ICcvbXVhLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICBuYW1lOiAnTXVhIGPEg24gaOG7mSBjaHVuZyBjxrAnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViYicsXHJcbiAgICBzbHVnOiAnL211YS1uaGEtcmllbmcnLFxyXG4gICAgbmFtZTogJ011YSBuaMOgIHJpw6puZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWJjJyxcclxuICAgIHNsdWc6ICcvbXVhLW5oYS1iaWV0LXRodS1saWVuLWtlJyxcclxuICAgIG5hbWU6ICdNdWEgbmjDoCBiaeG7h3QgdGjGsCwgbGnhu4FuIGvhu4EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViZCcsXHJcbiAgICBzbHVnOiAnL211YS1uaGEtbWF0LXBobycsXHJcbiAgICBuYW1lOiAnTXVhIG5ow6AgbeG6t3QgcGjhu5EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViZScsXHJcbiAgICBzbHVnOiAnL211YS1kYXQtbmVuLWR1LWFuJyxcclxuICAgIG5hbWU6ICdNdWEgxJHhuqV0IG7hu4FuIGThu7Egw6FuJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tbXVhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YmYnLFxyXG4gICAgc2x1ZzogJy9tdWEtZGF0JyxcclxuICAgIG5hbWU6ICdNdWEgxJHhuqV0JyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tbXVhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YzAnLFxyXG4gICAgc2x1ZzogJy9tdWEtdHJhbmctdHJhaS1raHUtbmdoaS1kdW9uZycsXHJcbiAgICBuYW1lOiAnTXVhIHRyYW5nIHRy4bqhaSwga2h1IG5naOG7iSBkxrDhu6FuZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWMxJyxcclxuICAgIHNsdWc6ICcvbXVhLWtoby1uaGEteHVvbmcnLFxyXG4gICAgbmFtZTogJ011YSBraG8sIG5ow6AgeMaw4bufbmcnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjMicsXHJcbiAgICBzbHVnOiAnL211YS1jYWMtbG9haS1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICBuYW1lOiAnTXVhIGPDoWMgbG/huqFpIGLhuqV0IMSR4buZbmcgc+G6o24ga2jDoWMnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViMicsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIGPEg24gaOG7mSBjaHVuZyBjxrAnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViMycsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLW5oYS1yaWVuZycsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIG5ow6AgcmnDqm5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjQnLFxyXG4gICAgc2x1ZzogJy9jaG8tdGh1ZS1uaGEtbWF0LXBobycsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIG5ow6AgbeG6t3QgcGjhu5EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViNScsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLW5oYS10cm8tcGhvbmctdHJvJyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogbmjDoCB0cuG7jSwgcGjDsm5nIHRy4buNJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjYnLFxyXG4gICAgc2x1ZzogJy9jaG8tdGh1ZS12YW4tcGhvbmcnLFxyXG4gICAgbmFtZTogJ0NobyB0aHXDqiB2xINuIHBow7JuZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWI3JyxcclxuICAgIHNsdWc6ICcvY2hvLXRodWUtY3VhLWhhbmcta2lvdCcsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIGPhu61hIGjDoG5nLCBraSDhu5F0JyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjgnLFxyXG4gICAgc2x1ZzogJy9jaG8tdGh1ZS1raG8tbmhhLXh1b25nLWRhdCcsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIGtobywgbmjDoCB4xrDhu59uZywgxJHhuqV0JyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjknLFxyXG4gICAgc2x1ZzogJy9jaG8tdGh1ZS1jYWMtbG9haS1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIGPDoWMgbG/huqFpIGLhuqV0IMSR4buZbmcgc+G6o24ga2jDoWMnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgdGl0bGVzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunJyxcclxuICAgIGVsZW1lbnRzOiBbXHJcbiAgICAgIHsgZWxlbWVudDogJ0dpxrDhu51uZyBuZ+G7pyB04buxIG5oacOqbicsIGltYWdlOiAnaHR0cHM6Ly9tdW5kZWNvci52bi91cGxvYWRzL3NhbnBoYW0vZ2l1b25nbmd1Z290dW5oaWVuL2dpdW9uZy1uZ3UtZ28tdHUtbmhpZW4tZGVwLUdOMDM0LmpwZWcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0dpxrDhu51uZyBuZ+G7pyBjw7RuZyBuZ2hp4buHcCcsIGltYWdlOiAnaHR0cHM6Ly9tdW5kZWNvci52bi91cGxvYWRzL3NhbnBoYW0vZ2l1b25nbmd1Z290dW5oaWVuL2dpdW9uZy1uZ3UtZ28tdHUtbmhpZW4tZGVwLUdOMDM0LmpwZWcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0dpxrDhu51uZyBuZ+G7pyBoaeG7h24gxJHhuqFpJywgaW1hZ2U6ICdodHRwczovL211bmRlY29yLnZuL3VwbG9hZHMvc2FucGhhbS9naXVvbmduZ3Vnb3R1bmhpZW4vZ2l1b25nLW5ndS1nby10dS1uaGllbi1kZXAtR04wMzQuanBlZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnR2nGsOG7nW5nIG5n4bunIGPhu5UgxJFp4buDbicsIGltYWdlOiAnaHR0cHM6Ly9tdW5kZWNvci52bi91cGxvYWRzL3NhbnBoYW0vZ2l1b25nbmd1Z290dW5oaWVuL2dpdW9uZy1uZ3UtZ28tdHUtbmhpZW4tZGVwLUdOMDM0LmpwZWcnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0LDoG4gxINuJyxcclxuICAgIGVsZW1lbnRzOiBbXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIHThu7Egbmhpw6puJywgaW1hZ2U6ICdodHRwczovL2RvZ29ub2l0aGF0dmlldC5jb20vdXBsb2FkL3NhbnBoYW0vbGFyZ2UvYm8tYmFuLWFuLWdvLXR1LW5oaWVuLWNhbS14ZS1tYXQtZ28tY28tZGllbi0xbTgtOC1naGUuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiDDqXAgY2FvIGPhuqVwJywgaW1hZ2U6ICdodHRwczovL2RvZ29ub2l0aGF0dmlldC5jb20vdXBsb2FkL3NhbnBoYW0vbGFyZ2UvYm8tYmFuLWFuLWdvLXR1LW5oaWVuLWNhbS14ZS1tYXQtZ28tY28tZGllbi0xbTgtOC1naGUuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiBuaMOgIGjDoG5nJywgaW1hZ2U6ICdodHRwczovL2RvZ29ub2l0aGF0dmlldC5jb20vdXBsb2FkL3NhbnBoYW0vbGFyZ2UvYm8tYmFuLWFuLWdvLXR1LW5oaWVuLWNhbS14ZS1tYXQtZ28tY28tZGllbi0xbTgtOC1naGUuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA0IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL2RvZ29ub2l0aGF0dmlldC5jb20vdXBsb2FkL3NhbnBoYW0vbGFyZ2UvYm8tYmFuLWFuLWdvLXR1LW5oaWVuLWNhbS14ZS1tYXQtZ28tY28tZGllbi0xbTgtOC1naGUuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA2IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL2RvZ29ub2l0aGF0dmlldC5jb20vdXBsb2FkL3NhbnBoYW0vbGFyZ2UvYm8tYmFuLWFuLWdvLXR1LW5oaWVuLWNhbS14ZS1tYXQtZ28tY28tZGllbi0xbTgtOC1naGUuanBnJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdCw6BuIHBow7JuZyBraMOhY2gnLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gdOG7sSBuaGnDqm4nLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGR1b25nZGFpLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2Jhbi1naGUtcGhvbmcta2hhY2gtZ28tb2MtY2hvLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gw6lwIGNhbyBj4bqlcCcsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0ZHVvbmdkYWkudm4vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvYmFuLWdoZS1waG9uZy1raGFjaC1nby1vYy1jaG8uanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiBuaMOgIGjDoG5nJywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRkdW9uZ2RhaS52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9iYW4tZ2hlLXBob25nLWtoYWNoLWdvLW9jLWNoby5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDQgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGR1b25nZGFpLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2Jhbi1naGUtcGhvbmcta2hhY2gtZ28tb2MtY2hvLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNiBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0ZHVvbmdkYWkudm4vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvYmFuLWdoZS1waG9uZy1raGFjaC1nby1vYy1jaG8uanBnJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdL4buHIHRpdmknLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gdOG7sSBuaGnDqm4nLCBpbWFnZTogJ2h0dHBzOi8vZ29jaHVhbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDkvMzI2ODQxZjM3Yzc1OWQyYmM0NjQuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiDDqXAgY2FvIGPhuqVwJywgaW1hZ2U6ICdodHRwczovL2dvY2h1YW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA5LzMyNjg0MWYzN2M3NTlkMmJjNDY0LmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gbmjDoCBow6BuZycsIGltYWdlOiAnaHR0cHM6Ly9nb2NodWFuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8zMjY4NDFmMzdjNzU5ZDJiYzQ2NC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDQgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZ29jaHVhbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDkvMzI2ODQxZjM3Yzc1OWQyYmM0NjQuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA2IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL2dvY2h1YW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA5LzMyNjg0MWYzN2M3NTlkMmJjNDY0LmpwZycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnVOG7pyBxdeG6p24gw6FvJyxcclxuICAgIGVsZW1lbnRzOiBbXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIHThu7Egbmhpw6puJywgaW1hZ2U6ICdodHRwczovL2RvZ29sZWdpYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDMvTWF1LXR1LXF1YW4tYW8tZGVwLUxHLVRRQTAzMC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIMOpcCBjYW8gY+G6pXAnLCBpbWFnZTogJ2h0dHBzOi8vZG9nb2xlZ2lhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMy9NYXUtdHUtcXVhbi1hby1kZXAtTEctVFFBMDMwLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gbmjDoCBow6BuZycsIGltYWdlOiAnaHR0cHM6Ly9kb2dvbGVnaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAzL01hdS10dS1xdWFuLWFvLWRlcC1MRy1UUUEwMzAuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA0IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL2RvZ29sZWdpYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDMvTWF1LXR1LXF1YW4tYW8tZGVwLUxHLVRRQTAzMC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDYgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb2xlZ2lhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMy9NYXUtdHUtcXVhbi1hby1kZXAtTEctVFFBMDMwLmpwZycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyxcclxuICAgIGVsZW1lbnRzOiBbXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIHThu7Egbmhpw6puJywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRsdW9uZ3Nvbi52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9iYW4tdHJhbmctZGllbS02MC0xLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gw6lwIGNhbyBj4bqlcCcsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0bHVvbmdzb24udm4vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYmFuLXRyYW5nLWRpZW0tNjAtMS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIG5ow6AgaMOgbmcnLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGx1b25nc29uLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jhbi10cmFuZy1kaWVtLTYwLTEuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA0IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRsdW9uZ3Nvbi52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9iYW4tdHJhbmctZGllbS02MC0xLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNiBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0bHVvbmdzb24udm4vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYmFuLXRyYW5nLWRpZW0tNjAtMS5qcGcnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1Thu6cgZ2nDoHknLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnVOG7pyBnacOgeSB04buxIG5oacOqbicsIGltYWdlOiAnaHR0cHM6Ly9maWxlLmhzdGF0aWMubmV0LzEwMDAyOTQxNDYvZmlsZS8zX2dyYW5kZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ1Thu6cgZ2nDoHkgw6lwIGNhbyBj4bqlcCcsIGltYWdlOiAnaHR0cHM6Ly9maWxlLmhzdGF0aWMubmV0LzEwMDAyOTQxNDYvZmlsZS8zX2dyYW5kZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ1Thu6cgZ2nDoHkgbmjDoCBow6BuZycsIGltYWdlOiAnaHR0cHM6Ly9maWxlLmhzdGF0aWMubmV0LzEwMDAyOTQxNDYvZmlsZS8zX2dyYW5kZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDQgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZmlsZS5oc3RhdGljLm5ldC8xMDAwMjk0MTQ2L2ZpbGUvM19ncmFuZGUuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA2IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL2ZpbGUuaHN0YXRpYy5uZXQvMTAwMDI5NDE0Ni9maWxlLzNfZ3JhbmRlLmpwZycgfSxcclxuICAgIF1cclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgbGlzdE1lbnUgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdO4buZaSBUaOG6pXQgUGjDsm5nIE5n4bunJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdO4buZaSBUaOG6pXQgUGjDsm5nIEtow6FjaCcsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IGfhu5cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgR2nDoHkgRMOpcCcgfSxcclxuICAgICAgeyByb29tOiAnS+G7hyBUaXZpJyB9LFxyXG4gICAgICB7IHJvb206ICdL4buHIMSR4buDIGdpw6B5JyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHLGsOG7o3UnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ07hu5lpIFRo4bqldCBOaMOgIELhur9wJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgYuG6v3AnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgYsOgbiDEg24nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0do4bq/IHBow7JuZyDEg24nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdO4buZaSBUaOG6pXQgUGjDsm5nIFRo4budJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gVGjhu50nIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgVGjhu50nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gVGjhu50gVGjhuqduIFTDoGknIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gVGjhu50gVHJlbyBUxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnU+G6rXAgVGjhu50nIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ07hu5lpIFRo4bqldCBWxINuIFBow7JuZycsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcXXhuqduIMOhbycgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnxJDhu5MgR+G7lyBN4bu5IE5naOG7hycsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcXXhuqduIMOhbycgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnU+G6o24gUGjhuqltIEtodXnhur9uIE3huqFpJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdT4bqjbiBQaOG6qW0gxJDDoyBYZW0nLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ8SQxqFuIGjDoG5nIMSRw6MgxJHhurd0JyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdT4bqjbiBwaOG6qW0gYsOhbiBjaOG6oXknLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1PhuqNuIHBo4bqpbSBt4bubaScsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcXXhuqduIMOhbycgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgcHJvZHVjdHMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL3d3dy5uaGFkZXBraWVudHJ1Yy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDYvdHUtcXVhbi1hby1nby1kZXAtMDEuanBnJyxcclxuICAgIHRpdGxlOiAnVOG7pyBxdeG6p24gw6FvIMSR4bq5cC0gVFFBMDk5JyxcclxuICAgIG1vbmV5T2xkOiA1MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDQ1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vZGllbm1heWNob2xvbi52bi9wdWJsaWMvdXNlcnVwbG9hZC9pbWFnZXMva2UlMjB0aXZpJTIwZ28lMjBjYW8lMjBjYXAucG5nJyxcclxuICAgIHRpdGxlOiAnS+G7hyBUaXZpIHBow7JuZyBraMOhY2gnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTAwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9kaWVubWF5Y2hvbG9uLnZuL3B1YmxpYy91c2VydXBsb2FkL2ltYWdlcy9rZSUyMHRpdmklMjBnbyUyMGNhbyUyMGNhcC5wbmcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgZ+G7lyB04buxIG5oacOqbiAtIEdOQ0QwMScsXHJcbiAgICBtb25leU9sZDogMzAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAyMDAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL25vaXRoYXR0aGFpYmluaC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvZ2l1b25nLW5ndS1nby1nby1kby05NjU2LmpwZycsXHJcbiAgICB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyB0aOG7nWkgdHJhbmcgLSBHMDAzJyxcclxuICAgIG1vbmV5T2xkOiA0NTAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDM1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vcGhvZ292aXAudm4vdXBsb2Fkcy9uZXdzLzIwMTdfMTIvZ2l1b25nLW5ndS1nby10dS1uaGllbi00LWNvcHkuanBnJyxcclxuICAgIHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIGhp4buHbiDEkeG6oWkgLSBHTjAwMycsXHJcbiAgICBtb25leU9sZDogNDAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAzNTAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL25vaXRoYXRpaG91c2UuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzExL08xQ04wMVppdWo4RjF5U2xzRldYdm55XzI3MzYwMTY1LmpwZycsXHJcbiAgICB0aXRsZTogJ0vhu4cgVGl2aSBwaMOybmcga2jDoWNoJyxcclxuICAgIG1vbmV5T2xkOiA2MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDUwMDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGlob3VzZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvTzFDTjAxWml1ajhGMXlTbHNGV1h2bnlfMjczNjAxNjUuanBnJyxcclxuICAgIHRpdGxlOiAnQsOgbiDEg24gNiBnaOG6vyAtIEJBMDAxJyxcclxuICAgIG1vbmV5T2xkOiA0MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDMwMDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vd3d3Lm5oYWRlcGtpZW50cnVjLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi90dS1xdWFuLWFvLWdvLWRlcC0wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICdCw6BuIMSDbiBn4buXIG5o4bqtcCBraOG6qXUgLSBCQTAwMicsXHJcbiAgICBtb25leU9sZDogMzUwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAzMDAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL3d3dy5uaGFkZXBraWVudHJ1Yy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDYvdHUtcXVhbi1hby1nby1kZXAtMDEuanBnJyxcclxuICAgIHRpdGxlOiAnVOG7pyBxdeG6p24gw6FvIMSR4bq5cC0gVFFBMDk5JyxcclxuICAgIG1vbmV5T2xkOiA0MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDM1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vZGllbm1heWNob2xvbi52bi9wdWJsaWMvdXNlcnVwbG9hZC9pbWFnZXMva2UlMjB0aXZpJTIwZ28lMjBjYW8lMjBjYXAucG5nJyxcclxuICAgIHRpdGxlOiAnS+G7hyBUaXZpIHBow7JuZyBraMOhY2gnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTAwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0dGhhaWJpbmguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2dpdW9uZy1uZ3UtZ28tZ28tZG8tOTY1Ni5qcGcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgY+G7lSDEkWnhu4NuIC0gR05DRDAxJyxcclxuICAgIG1vbmV5T2xkOiA2MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDU1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdHRoYWliaW5oLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9naXVvbmctbmd1LWdvLWdvLWRvLTk2NTYuanBnJyxcclxuICAgIHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIHRo4budaSB0cmFuZyAtIEcwMDMnLFxyXG4gICAgbW9uZXlPbGQ6IDQ1MDAwMDAsXHJcbiAgICBtb25leU5ldzogMzUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0dGhhaWJpbmguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2dpdW9uZy1uZ3UtZ28tZ28tZG8tOTY1Ni5qcGcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgY+G7lSDEkWnhu4NuIC0gR05DRDAxJyxcclxuICAgIG1vbmV5T2xkOiA2MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDU1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdHRoYWliaW5oLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9naXVvbmctbmd1LWdvLWdvLWRvLTk2NTYuanBnJyxcclxuICAgIHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIHRo4budaSB0cmFuZyAtIEcwMDMnLFxyXG4gICAgbW9uZXlPbGQ6IDQ1MDAwMDAsXHJcbiAgICBtb25leU5ldzogMzUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly93d3cubmhhZGVwa2llbnRydWMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA2L3R1LXF1YW4tYW8tZ28tZGVwLTAxLmpwZycsXHJcbiAgICB0aXRsZTogJ1Thu6cgcXXhuqduIMOhbyDEkeG6uXAtIFRRQTA5OScsXHJcbiAgICBtb25leU9sZDogNDAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAzNTAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL2RpZW5tYXljaG9sb24udm4vcHVibGljL3VzZXJ1cGxvYWQvaW1hZ2VzL2tlJTIwdGl2aSUyMGdvJTIwY2FvJTIwY2FwLnBuZycsXHJcbiAgICB0aXRsZTogJ0vhu4cgVGl2aSBwaMOybmcga2jDoWNoJyxcclxuICAgIG1vbmV5T2xkOiA2MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDUwMDAwMDAsXHJcbiAgfSxcclxuXTtcclxuXHJcblxyXG5leHBvcnQge1xyXG4gIG1haW5VUkwsXHJcbiAgdXBncmFkZVBsYW5VUkwsXHJcbiAgdXBncmFkZUljb25VUkwsXHJcbiAgbG9nb1VSTCxcclxuICBhcGlCYXNlVVJMLFxyXG4gIGFwaUdyYXBoUUxVUkwsXHJcbiAgZ29vZ2xlTG9naW4sXHJcbiAgemFsb0xvZ2luLFxyXG4gIGZhY2Vib29rTG9naW4sXHJcbiAgdXJsSW1hZ2VBZFNlbGxMZWFzZSxcclxuICB1cmxJbWFnZUJyb2tlcixcclxuICB1cmxJbWFnZVByb2plY3QsXHJcbiAgaW1hZ2VEZWZhdWx0QnJva2VyLFxyXG4gIGltYWdlRGVmYXVsdFByb2plY3QsXHJcbiAgaW1hZ2VEZWZhdWx0U2xpZGVyLFxyXG4gIGdvb2dsZUFuYWx5dGljc0NvZGUsXHJcbiAgZ29vZ2xlU2VhcmNoQ29uc29sZSxcclxuICBsb2NhbFN0b3JhZ2VDb21wYXJlS2V5LFxyXG4gIGFkU2VsbExlYXNlVHlwZSxcclxuICBsb2NhbFN0b3JhZ2VWaWV3ZWQsXHJcbiAgbG9jYWxTdG9yYWdlUHJvamVjdFZpZXdlZCxcclxuICBhZFNlbGxMZWFzZUNhdGVnb3J5LFxyXG4gIHRpdGxlcyxcclxuICBsaXN0TWVudSxcclxuICBwcm9kdWN0cyxcclxufTtcclxuIiwiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuY29uc3QgQ09VTlRfVklFV19BRF9TRUxMX0xFQVNFID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFkU2VsbExlYXNlVmlld1VwZGF0ZSAoJGlucHV0OiBVcGRhdGVBZFNlbGxMZWFzZVZpZXdJbnB1dCEpIHtcclxuICAgIGFkU2VsbExlYXNlVmlld1VwZGF0ZSAoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFERF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVCA9IGdxbCBgXHJcbiAgbXV0YXRpb24gYWRTZWxsTGVhc2VXaXNobGlzdCAoJGlucHV0OiBBZFNlbGxMZWFzZVdpc2hsaXN0SW5wdXQhKSB7XHJcbiAgICBhZFNlbGxMZWFzZVdpc2hsaXN0IChpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQUREX0FEX1NFTExfTEVBU0VfQ09NTUVOVCA9IGdxbCBgXHJcbiAgbXV0YXRpb24gYWRTZWxsTGVhc2VDb21tZW50Q3JlYXRlICgkaW5wdXQ6IEFkU2VsbExlYXNlQ29tbWVudElucHV0ISkge1xyXG4gICAgYWRTZWxsTGVhc2VDb21tZW50Q3JlYXRlIChpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQge1xyXG4gIENPVU5UX1ZJRVdfQURfU0VMTF9MRUFTRSxcclxuICBBRERfQURfU0VMTF9MRUFTRV9XSVNIX0xJU1QsXHJcbiAgQUREX0FEX1NFTExfTEVBU0VfQ09NTUVOVFxyXG59XHJcbiIsImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmNvbnN0IEdFVF9BRF9TRUxMX0xFQVNFUyA9IGdxbGBcclxuICBxdWVyeSBnZXRBZFNlbGxMZWFzZXMgKCRwYWdlOiBJbnQhLCAkbGltaXQ6IEludCEsICRmaWx0ZXI6IFN0cmluZyEpIHtcclxuICAgIGFkU2VsbExlYXNlcyAocGFnZTogJHBhZ2UsIGZpbHRlcjogJGZpbHRlciwgbGltaXQ6ICRsaW1pdCkge1xyXG4gICAgICBwYWdlSW5mbyB7XHJcbiAgICAgICAgaGFzTmV4dFBhZ2VcclxuICAgICAgICBoYXNQcmV2aW91c1BhZ2VcclxuICAgICAgfVxyXG4gICAgICBlZGdlcyB7XHJcbiAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIHNlb190aXRsZVxyXG4gICAgICAgICAgY3JlYXRlZF9hdFxyXG4gICAgICAgICAgdXBkYXRlZF9hdFxyXG4gICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgcHJvamVjdFxyXG4gICAgICAgICAgbGVuZ3RoXHJcbiAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgZmxvb3JfbnVtYmVyXHJcbiAgICAgICAgICBsaXZpbmdfcm9vbV9udW1iZXJcclxuICAgICAgICAgIHZpZXdfY291bnRcclxuICAgICAgICAgIGxpa2Vfc3RhdHVzXHJcbiAgICAgICAgICBwcmljZSB7XHJcbiAgICAgICAgICAgIHVuaXRcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGF2YXRhciB7XHJcbiAgICAgICAgICAgIGFsdF90ZXh0XHJcbiAgICAgICAgICAgIHNyY1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYWRkcmVzcyB7XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgd2FyZFxyXG4gICAgICAgICAgICBkaXN0cmljdFxyXG4gICAgICAgICAgICBjaXR5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb250YWN0IHtcclxuICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICAgIG1vYmlsZVxyXG4gICAgICAgICAgICBwaG9uZVxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXJlYSB7XHJcbiAgICAgICAgICAgIHVuaXRcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIT01FX0dFVF9BRF9TRUxMX0xFQVNFUyA9IGdxbGBcclxuICBxdWVyeSBnZXRBZFNlbGxMZWFzZXMgKCRwYWdlOiBJbnQhLCAkbGltaXQ6IEludCEsICRmaWx0ZXI6IFN0cmluZyEpIHtcclxuICAgIGFkU2VsbExlYXNlcyAocGFnZTogJHBhZ2UsIGZpbHRlcjogJGZpbHRlciwgbGltaXQ6ICRsaW1pdCkge1xyXG4gICAgICBlZGdlcyB7XHJcbiAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIHNlb190aXRsZVxyXG4gICAgICAgICAgY3JlYXRlZF9hdFxyXG4gICAgICAgICAgdXBkYXRlZF9hdFxyXG4gICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgcHJvamVjdFxyXG4gICAgICAgICAgbGVuZ3RoXHJcbiAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgZmxvb3JfbnVtYmVyXHJcbiAgICAgICAgICBsaXZpbmdfcm9vbV9udW1iZXJcclxuICAgICAgICAgIHZpZXdfY291bnRcclxuICAgICAgICAgIGxpa2Vfc3RhdHVzXHJcbiAgICAgICAgICBwcmljZSB7XHJcbiAgICAgICAgICAgIHVuaXRcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGF2YXRhciB7XHJcbiAgICAgICAgICAgIGFsdF90ZXh0XHJcbiAgICAgICAgICAgIHNyY1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYWRkcmVzcyB7XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgd2FyZFxyXG4gICAgICAgICAgICBkaXN0cmljdFxyXG4gICAgICAgICAgICBjaXR5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb250YWN0IHtcclxuICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICAgIG1vYmlsZVxyXG4gICAgICAgICAgICBwaG9uZVxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXJlYSB7XHJcbiAgICAgICAgICAgIHVuaXRcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHRVRfQURfU0VMTF9MRUFTRVNfQllfU0xVRyA9IGdxbGBcclxuICBxdWVyeSBhZFNlbGxMZWFzZSAoJHNsdWc6IFN0cmluZykge1xyXG4gICAgYWRTZWxsTGVhc2UgKHNsdWc6ICRzbHVnKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHNlb190aXRsZVxyXG4gICAgICBzZW9fZGVzY3JpcHRpb25cclxuICAgICAgc2x1Z1xyXG4gICAgICBwcm9qZWN0XHJcbiAgICAgIGxlbmd0aFxyXG4gICAgICB3aWR0aFxyXG4gICAgICBmbG9vcl9udW1iZXJcclxuICAgICAgbGl2aW5nX3Jvb21fbnVtYmVyXHJcbiAgICAgIHZpZXdfY291bnRcclxuICAgICAgdXNlclxyXG4gICAgICBmcm9udF93aWR0aFxyXG4gICAgICByb2FkX3dpZHRoXHJcbiAgICAgIHByaWNlIHtcclxuICAgICAgICB1bml0XHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgfVxyXG4gICAgICBob21lX2RpcmVjdGlvbiB7XHJcbiAgICAgICAgdGV4dFxyXG4gICAgICB9XHJcbiAgICAgIGJhbGNvbnlfZGlyZWN0aW9uIHtcclxuICAgICAgICB0ZXh0XHJcbiAgICAgIH1cclxuICAgICAgYXZhdGFyIHtcclxuICAgICAgICBhbHRfdGV4dFxyXG4gICAgICAgIHNyY1xyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIH1cclxuICAgICAgYWRkcmVzcyB7XHJcbiAgICAgICAgdGV4dFxyXG4gICAgICAgIHdhcmRcclxuICAgICAgICBkaXN0cmljdFxyXG4gICAgICAgIGNpdHlcclxuICAgICAgfVxyXG4gICAgICBhcmVhIHtcclxuICAgICAgICB1bml0XHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgfVxyXG4gICAgICBpbWFnZSB7XHJcbiAgICAgICAgYWx0X3RleHRcclxuICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgc3JjXHJcbiAgICAgIH1cclxuICAgICAgdHlwZSB7XHJcbiAgICAgICAgdHlwZTFcclxuICAgICAgICB0eXBlMlxyXG4gICAgICAgIHRleHRcclxuICAgICAgfVxyXG4gICAgICBzdGF0dXNcclxuICAgICAganVyaWRpY2FsX3R5cGUge1xyXG4gICAgICAgIHRleHRcclxuICAgICAgfVxyXG4gICAgICBzdHJlZXRfdHlwZSB7XHJcbiAgICAgICAgdGV4dFxyXG4gICAgICB9XHJcbiAgICAgIHByb2plY3RcclxuICAgICAgc2VvX3RpdGxlXHJcbiAgICAgIGZsb29yX251bWJlclxyXG4gICAgICBsaXZpbmdfcm9vbV9udW1iZXJcclxuICAgICAgYmVkX3Jvb21fbnVtYmVyXHJcbiAgICAgIHRvaWxldF9yb29tX251bWJlclxyXG4gICAgICBnYXJhX251bWJlclxyXG4gICAgICBtYXRlcmlhbCB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICB0ZXh0XHJcbiAgICAgIH1cclxuICAgICAgaXNfYmFzZW1lbnRcclxuICAgICAgaXNfY2FyX2ludG9faG9tZVxyXG4gICAgICBpc19jb3JuZXJcclxuICAgICAgaXNfZWxldmF0b3JcclxuICAgICAgZnVybml0dXJlXHJcbiAgICAgIHdpZHRoXHJcbiAgICAgIGxlbmd0aFxyXG4gICAgICB5ZWFyX2J1aWx0XHJcbiAgICAgIHZpZGVvXHJcbiAgICAgIGxpa2Vfc3RhdHVzXHJcbiAgICAgIG1hcCB7XHJcbiAgICAgICAgbGF0XHJcbiAgICAgICAgbG5nXHJcbiAgICAgIH1cclxuICAgICAgY3JlYXRlZF9hdFxyXG4gICAgICB1cGRhdGVkX2F0XHJcbiAgICAgIGNvbnRhY3Qge1xyXG4gICAgICAgIGltYWdlXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGFkZHJlc3NcclxuICAgICAgICBtb2JpbGVcclxuICAgICAgICBwaG9uZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IEdFVF9BRF9TRUxMX0xFQVNFU19CWV9JRCA9IGdxbGBcclxuICBxdWVyeSBhZFNlbGxMZWFzZSAoJGlkOiBTdHJpbmcpIHtcclxuICAgIGFkU2VsbExlYXNlIChpZDogJGlkKSB7XHJcbiAgICAgIHNsdWdcclxuICAgICAgdGl0bGVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgc2VvX3RpdGxlXHJcbiAgICAgIHNlb19kZXNjcmlwdGlvblxyXG4gICAgICBzbHVnXHJcbiAgICAgIHByb2plY3RcclxuICAgICAgbGVuZ3RoXHJcbiAgICAgIHdpZHRoXHJcbiAgICAgIGZsb29yX251bWJlclxyXG4gICAgICBsaXZpbmdfcm9vbV9udW1iZXJcclxuICAgICAgdmlld19jb3VudFxyXG4gICAgICBwcmljZSB7XHJcbiAgICAgICAgdW5pdFxyXG4gICAgICAgIHZhbHVlXHJcbiAgICAgIH1cclxuICAgICAgYXZhdGFyIHtcclxuICAgICAgICBhbHRfdGV4dFxyXG4gICAgICAgIHNyY1xyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIH1cclxuICAgICAgYWRkcmVzcyB7XHJcbiAgICAgICAgdGV4dFxyXG4gICAgICAgIHdhcmRcclxuICAgICAgICBkaXN0cmljdFxyXG4gICAgICAgIGNpdHlcclxuICAgICAgfVxyXG4gICAgICBhcmVhIHtcclxuICAgICAgICB1bml0XHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgfVxyXG4gICAgICBpbWFnZSB7XHJcbiAgICAgICAgYWx0X3RleHRcclxuICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgc3JjXHJcbiAgICAgIH1cclxuICAgICAgdHlwZSB7XHJcbiAgICAgICAgdHlwZTFcclxuICAgICAgICB0eXBlMlxyXG4gICAgICAgIHRleHRcclxuICAgICAgfVxyXG4gICAgICBzdGF0dXNcclxuICAgICAganVyaWRpY2FsX3R5cGUge1xyXG4gICAgICAgIHRleHRcclxuICAgICAgfVxyXG4gICAgICBzdHJlZXRfdHlwZSB7XHJcbiAgICAgICAgdGV4dFxyXG4gICAgICB9XHJcbiAgICAgIHByb2plY3RcclxuICAgICAgc2VvX3RpdGxlXHJcbiAgICAgIGZsb29yX251bWJlclxyXG4gICAgICBsaXZpbmdfcm9vbV9udW1iZXJcclxuICAgICAgYmVkX3Jvb21fbnVtYmVyXHJcbiAgICAgIHRvaWxldF9yb29tX251bWJlclxyXG4gICAgICBnYXJhX251bWJlclxyXG4gICAgICBtYXRlcmlhbCB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICB0ZXh0XHJcbiAgICAgIH1cclxuICAgICAgaXNfYmFzZW1lbnRcclxuICAgICAgaXNfY2FyX2ludG9faG9tZVxyXG4gICAgICBpc19jb3JuZXJcclxuICAgICAgaXNfZWxldmF0b3JcclxuICAgICAgZnVybml0dXJlXHJcbiAgICAgIHdpZHRoXHJcbiAgICAgIGxlbmd0aFxyXG4gICAgICB5ZWFyX2J1aWx0XHJcbiAgICAgIHZpZGVvXHJcbiAgICAgIGxpa2Vfc3RhdHVzXHJcbiAgICAgIG1hcCB7XHJcbiAgICAgICAgbGF0XHJcbiAgICAgICAgbG5nXHJcbiAgICAgIH1cclxuICAgICAgY3JlYXRlZF9hdFxyXG4gICAgICB1cGRhdGVkX2F0XHJcbiAgICAgIGNvbnRhY3Qge1xyXG4gICAgICAgIGltYWdlXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGFkZHJlc3NcclxuICAgICAgICBtb2JpbGVcclxuICAgICAgICBwaG9uZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHRVRfQURfU0VMTF9MRUFTRV9XSVNIX0xJU1QgPSBncWwgYFxyXG4gIHF1ZXJ5IGFkU2VsbExlYXNlV2lzaGxpc3RzICgkZmlsdGVyOlN0cmluZyEsICRsaW1pdDpJbnQhLCAkcGFnZTpJbnQhKSB7XHJcbiAgICBhZFNlbGxMZWFzZVdpc2hsaXN0cyhmaWx0ZXI6JGZpbHRlciwgbGltaXQ6JGxpbWl0LCBwYWdlOiRwYWdlKSB7XHJcbiAgICAgIHBhZ2VJbmZvIHtcclxuICAgICAgICBoYXNOZXh0UGFnZVxyXG4gICAgICAgIGhhc1ByZXZpb3VzUGFnZVxyXG4gICAgICB9XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIGFkX3NlbGxfbGVhc2Uge1xyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICBzZW9fdGl0bGVcclxuICAgICAgICAgICAgY3JlYXRlZF9hdFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0XHJcbiAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgcHJvamVjdFxyXG4gICAgICAgICAgICBsZW5ndGhcclxuICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgZmxvb3JfbnVtYmVyXHJcbiAgICAgICAgICAgIHZpZXdfY291bnRcclxuICAgICAgICAgICAgbGl2aW5nX3Jvb21fbnVtYmVyXHJcbiAgICAgICAgICAgIGxpa2Vfc3RhdHVzXHJcbiAgICAgICAgICAgIHByaWNlIHtcclxuICAgICAgICAgICAgICB1bml0XHJcbiAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdmF0YXIge1xyXG4gICAgICAgICAgICAgIGFsdF90ZXh0XHJcbiAgICAgICAgICAgICAgc3JjXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhZGRyZXNzIHtcclxuICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgd2FyZFxyXG4gICAgICAgICAgICAgIGRpc3RyaWN0XHJcbiAgICAgICAgICAgICAgY2l0eVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRhY3Qge1xyXG4gICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIGFkZHJlc3NcclxuICAgICAgICAgICAgICBtb2JpbGVcclxuICAgICAgICAgICAgICBwaG9uZVxyXG4gICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJlYSB7XHJcbiAgICAgICAgICAgICAgdW5pdFxyXG4gICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCB7XHJcbiAgR0VUX0FEX1NFTExfTEVBU0VTLFxyXG4gIEdFVF9BRF9TRUxMX0xFQVNFU19CWV9TTFVHLFxyXG4gIEhPTUVfR0VUX0FEX1NFTExfTEVBU0VTLFxyXG4gIEdFVF9BRF9TRUxMX0xFQVNFU19CWV9JRCxcclxuICBHRVRfQURfU0VMTF9MRUFTRV9XSVNIX0xJU1RcclxufVxyXG4iLCJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5jb25zdCBDT1VOVF9WSUVXX1BST0pFQ1QgPSBncWxgXHJcbiAgbXV0YXRpb24gcHJvamVjdFZpZXdVcGRhdGUgKCRpbnB1dDogVXBkYXRlUHJvamVjdFZpZXdJbnB1dCEpIHtcclxuICAgIHByb2plY3RWaWV3VXBkYXRlIChpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHZpZXdfY291bnRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBRERfUFJPSkVDVF9XSVNIX0xJU1QgPSBncWxgXHJcbiAgbXV0YXRpb24gcHJvamVjdFdpc2hMaXN0KCRpbnB1dDogIFByb2plY3RXaXNobGlzdElucHV0ISkge1xyXG4gICAgcHJvamVjdFdpc2hsaXN0IChpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQge1xyXG4gIENPVU5UX1ZJRVdfUFJPSkVDVCxcclxuICBBRERfUFJPSkVDVF9XSVNIX0xJU1RcclxufVxyXG4iLCJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5cclxuY29uc3QgR0VUX1BST0pFQ1RfTElTVCA9IGdxbGBcclxuICBxdWVyeSBnZXRQcm9qZWN0ICgkcGFnZTogSW50ISwgJGxpbWl0OiBJbnQhLCAkZmlsdGVyOiBTdHJpbmchKSB7XHJcbiAgICBwcm9qZWN0cyAocGFnZTogJHBhZ2UsIGZpbHRlcjogJGZpbHRlciwgbGltaXQ6ICRsaW1pdCkge1xyXG4gICAgICBwYWdlSW5mbyB7XHJcbiAgICAgICAgaGFzTmV4dFBhZ2VcclxuICAgICAgICBoYXNQcmV2aW91c1BhZ2VcclxuICAgICAgfVxyXG4gICAgICBlZGdlcyB7XHJcbiAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgcHJpY2VcclxuICAgICAgICAgIGNyZWF0ZWRfYXRcclxuICAgICAgICAgIHVwZGF0ZWRfYXRcclxuICAgICAgICAgIGxhbmRfYXJlYVxyXG4gICAgICAgICAgdmlld19jb3VudFxyXG4gICAgICAgICAgYWRkcmVzcyB7XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgd2FyZFxyXG4gICAgICAgICAgICBkaXN0cmljdFxyXG4gICAgICAgICAgICBjaXR5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb3Zlcl9pbWFnZVxyXG4gICAgICAgICAgaW50cm9fY29udGVudFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhPTUVfR0VUX1BST0pFQ1RfTElTVCA9IGdxbGBcclxuICBxdWVyeSBnZXRQcm9qZWN0ICgkcGFnZTogSW50ISwgJGxpbWl0OiBJbnQhLCAkZmlsdGVyOiBTdHJpbmchKSB7XHJcbiAgICBwcm9qZWN0cyAocGFnZTogJHBhZ2UsIGZpbHRlcjogJGZpbHRlciwgbGltaXQ6ICRsaW1pdCkge1xyXG4gICAgICBlZGdlcyB7XHJcbiAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgcHJpY2VcclxuICAgICAgICAgIGNyZWF0ZWRfYXRcclxuICAgICAgICAgIHVwZGF0ZWRfYXRcclxuICAgICAgICAgIGxhbmRfYXJlYVxyXG4gICAgICAgICAgdmlld19jb3VudFxyXG4gICAgICAgICAgYWRkcmVzcyB7XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgd2FyZFxyXG4gICAgICAgICAgICBkaXN0cmljdFxyXG4gICAgICAgICAgICBjaXR5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb3Zlcl9pbWFnZVxyXG4gICAgICAgICAgaW50cm9fY29udGVudFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdFVF9QUk9KRUNUX0JZX1NMVUcgPSBncWxgXHJcbiAgcXVlcnkgcHJvamVjdCAoJHNsdWc6IFN0cmluZykge1xyXG4gICAgcHJvamVjdCAoc2x1ZzogJHNsdWcpIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBwcmljZVxyXG4gICAgICBsYW5kX2FyZWFcclxuICAgICAgaW50cm9fY29udGVudFxyXG4gICAgICBwb3NpdGlvbl9jb250ZW50XHJcbiAgICAgIGluZnJhc3RydWN0dXJlX2NvbnRlbnRcclxuICAgICAgc2VvX3RpdGxlXHJcbiAgICAgIHNlb19kZXNjcmlwdGlvblxyXG4gICAgICB2aWV3X2NvdW50XHJcbiAgICAgIHNsdWdcclxuICAgICAgaW1hZ2Uge1xyXG4gICAgICAgIGFsdF90ZXh0XHJcbiAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIHNyY1xyXG4gICAgICB9XHJcbiAgICAgIGFkZHJlc3Mge1xyXG4gICAgICAgIHRleHRcclxuICAgICAgICB3YXJkXHJcbiAgICAgICAgZGlzdHJpY3RcclxuICAgICAgICBjaXR5XHJcbiAgICAgIH1cclxuICAgICAgdmlkZW9cclxuICAgICAgY292ZXJfaW1hZ2VcclxuICAgICAgaW50cm9fY29udGVudFxyXG4gICAgICBjcmVhdGVkX2F0XHJcbiAgICAgIHVwZGF0ZWRfYXRcclxuICAgICAgZ29vZ2xlX21hcF9sYXRpdHVkZVxyXG4gICAgICBnb29nbGVfbWFwX2xvbmdpdHVkZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgR0VUX1BST0pFQ1RfQllfSUQgPSBncWxgXHJcbiAgcXVlcnkgcHJvamVjdCAoJGlkOiBTdHJpbmcpIHtcclxuICAgIHByb2plY3QgKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBpbnZlc3RvclxyXG4gICAgICBzY2FsZVxyXG4gICAgICBzbHVnXHJcbiAgICAgIHNlb19kZXNjcmlwdGlvblxyXG4gICAgICBhZGRyZXNzIHtcclxuICAgICAgICB0ZXh0XHJcbiAgICAgICAgd2FyZFxyXG4gICAgICAgIGRpc3RyaWN0XHJcbiAgICAgICAgY2l0eVxyXG4gICAgICB9XHJcbiAgICAgIGNvdmVyX2ltYWdlXHJcbiAgICAgIGludHJvX2NvbnRlbnRcclxuICAgICAgY3JlYXRlZF9hdFxyXG4gICAgICB1cGRhdGVkX2F0XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQge1xyXG4gIEdFVF9QUk9KRUNUX0JZX0lELFxyXG4gIEdFVF9QUk9KRUNUX0xJU1QsXHJcbiAgR0VUX1BST0pFQ1RfQllfU0xVRyxcclxuICBIT01FX0dFVF9QUk9KRUNUX0xJU1RcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBhZGRUcmFja2luZyA9IChhZFNlbGxMZWFzZUlkOiBzdHJpbmcsIHR5cGU6IHN0cmluZykgPT4ge1xyXG4gIGF4aW9zLmdldCgnaHR0cHM6Ly9ncmFwaC5uaGFkYXRtb2kubmV0L3VzZXItdHJhY2tpbmcnLCB7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgYWRfc2VsbF9sZWFzZV9pZDogYWRTZWxsTGVhc2VJZCxcclxuICAgICAgdHlwZV90cmFja2luZzogdHlwZVxyXG4gICAgfVxyXG4gIH0pXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYWRkVHJhY2tpbmdcclxufTtcclxuXHJcbiIsImltcG9ydCBTdHJpbmdQcm9jZXNzIGZyb20gXCIuL3N0cmluZ1Byb2Nlc3NcIjtcclxuXHJcbmNvbnN0IHByaWNlUHJvY2VzcyA9IChwcmljZVZhbHVlOiBzdHJpbmd8bnVsbCwgcHJpY2VVbml0OiBzdHJpbmd8bnVsbCkgPT4ge1xyXG4gIGlmICghcHJpY2VWYWx1ZSB8fCBOdW1iZXIocHJpY2VWYWx1ZSkgPT09IDApIHtcclxuICAgIHJldHVybiAnR2nDoSBsacOqbiBo4buHJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZm9ybWF0UHJpY2VWYWx1ZShwcmljZVZhbHVlLCBwcmljZVVuaXQpICsgJyAnICsgZ2V0UHJpY2VVbml0KHByaWNlVmFsdWUsIHByaWNlVW5pdCk7XHJcbiAgfVxyXG59O1xyXG5cclxubGV0IG1pbGxpb25Vbml0ID0gJ3RyaeG7h3UnO1xyXG5sZXQgYmlsbGlvblVuaXQgPSAndOG7iSc7XHJcblxyXG5jb25zdCBmb3JtYXRQcmljZVZhbHVlID0gKHByaWNlVmFsdWU6IHN0cmluZ3xudWxsLCBwcmljZVVuaXQ6IHN0cmluZ3xudWxsKSA9PiB7XHJcbiAgaWYgKHByaWNlVmFsdWUgJiYgcHJpY2VVbml0ICYmIChwcmljZVVuaXQgPT09ICdtaWxsaW9uJyB8fCBwcmljZVVuaXQgPT09ICd0cmnhu4d1JykpIHtcclxuICAgIGxldCBwcmljZVZhbHVlTnVtYmVyID0gTnVtYmVyKHByaWNlVmFsdWUpO1xyXG4gICAgaWYgKHByaWNlVmFsdWVOdW1iZXIgPCAxMDAwKSB7XHJcbiAgICAgIHByaWNlVmFsdWVOdW1iZXIgPSBNYXRoLnJvdW5kKHByaWNlVmFsdWVOdW1iZXIgKiAxMDApLzEwMDtcclxuICAgICAgcmV0dXJuIFN0cmluZ1Byb2Nlc3MuYWRkQ29tbWFzKFN0cmluZyhOdW1iZXIocHJpY2VWYWx1ZU51bWJlcikpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByaWNlVmFsdWVOdW1iZXIgPSBwcmljZVZhbHVlTnVtYmVyLzEwMDA7XHJcbiAgICAgIHByaWNlVmFsdWVOdW1iZXIgPSBNYXRoLnJvdW5kKHByaWNlVmFsdWVOdW1iZXIgKiAxMDApLzEwMDtcclxuICAgICAgcmV0dXJuIFN0cmluZ1Byb2Nlc3MuYWRkQ29tbWFzKFN0cmluZyhOdW1iZXIocHJpY2VWYWx1ZU51bWJlcikpKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFN0cmluZ1Byb2Nlc3MuYWRkQ29tbWFzKFN0cmluZyhOdW1iZXIocHJpY2VWYWx1ZSkpKTtcclxuICB9XHJcbn07XHJcbmNvbnN0IGdldFByaWNlVW5pdCA9IChwcmljZVZhbHVlOiBzdHJpbmd8bnVsbCwgcHJpY2VVbml0OiBzdHJpbmd8bnVsbCkgPT4ge1xyXG4gIGlmIChwcmljZVZhbHVlICYmIHByaWNlVW5pdCAmJiAocHJpY2VVbml0ID09PSAnbWlsbGlvbicgfHwgcHJpY2VVbml0ID09PSAndHJp4buHdScpKSB7XHJcbiAgICBsZXQgcHJpY2VWYWx1ZU51bWJlciA9IE51bWJlcihwcmljZVZhbHVlKTtcclxuICAgIGlmIChwcmljZVZhbHVlTnVtYmVyIDwgMTAwMCkge1xyXG4gICAgICByZXR1cm4gbWlsbGlvblVuaXQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYmlsbGlvblVuaXQ7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoKHByaWNlVW5pdCk/cHJpY2VVbml0OifEkeG7k25nJylcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJpY2VQcm9jZXNzXHJcbn07XHJcblxyXG4iLCJjb25zdCBhZGRDb21tYXMgPSAoaW5wdXRTdHJpbmc6IHN0cmluZykgPT4ge1xyXG4gIGxldCByeD0gIC8oXFxkKykoXFxkezN9KS87XHJcbiAgcmV0dXJuIFN0cmluZyhpbnB1dFN0cmluZykucmVwbGFjZSgvXlxcZCsvLCBmdW5jdGlvbih3KXtcclxuICAgIHdoaWxlKHJ4LnRlc3Qodykpe1xyXG4gICAgICB3PSB3LnJlcGxhY2UocngsICckMS4kMicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHc7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRNb250aHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgICcxJyA6ICcwMScsXHJcbiAgICAnMicgOiAnMDInLFxyXG4gICAgJzMnIDogJzAzJyxcclxuICAgICc0JyA6ICcwNCcsXHJcbiAgICAnNScgOiAnMDUnLFxyXG4gICAgJzYnIDogJzA2JyxcclxuICAgICc3JyA6ICcwNycsXHJcbiAgICAnOCcgOiAnMDgnLFxyXG4gICAgJzknIDogJzA5JyxcclxuICAgICcxMCcgOiAnMTAnLFxyXG4gICAgJzExJyA6ICcxMScsXHJcbiAgICAnMTInIDogJzEyJyxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0R2VuZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAnZmVtYWxlJyA6ICdO4buvJyxcclxuICAgICdtYWxlJyA6ICdOYW0nLFxyXG4gICAgJ25vbmUnIDogJ0tow7RuZyB4w6FjIMSR4buLbmgnXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0RGF5cyA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgJzEnIDogJzAxJyxcclxuICAgICcyJyA6ICcwMicsXHJcbiAgICAnMycgOiAnMDMnLFxyXG4gICAgJzQnIDogJzA0JyxcclxuICAgICc1JyA6ICcwNScsXHJcbiAgICAnNicgOiAnMDYnLFxyXG4gICAgJzcnIDogJzA3JyxcclxuICAgICc4JyA6ICcwOCcsXHJcbiAgICAnOScgOiAnMDknLFxyXG4gICAgJzEwJyA6ICcxMCcsXHJcbiAgICAnMTEnIDogJzExJyxcclxuICAgICcxMicgOiAnMTInLFxyXG4gICAgJzEzJyA6ICcxMycsXHJcbiAgICAnMTQnIDogJzE0JyxcclxuICAgICcxNScgOiAnMTUnLFxyXG4gICAgJzE2JyA6ICcxNicsXHJcbiAgICAnMTcnIDogJzE3JyxcclxuICAgICcxOCcgOiAnMTgnLFxyXG4gICAgJzE5JyA6ICcxOScsXHJcbiAgICAnMjAnIDogJzIwJyxcclxuICAgICcyMScgOiAnMjEnLFxyXG4gICAgJzIyJyA6ICcyMicsXHJcbiAgICAnMjMnIDogJzIzJyxcclxuICAgICcyNCcgOiAnMjQnLFxyXG4gICAgJzI1JyA6ICcyNScsXHJcbiAgICAnMjYnIDogJzI2JyxcclxuICAgICcyNycgOiAnMjcnLFxyXG4gICAgJzI4JyA6ICcyOCcsXHJcbiAgICAnMjknIDogJzI5JyxcclxuICAgICczMCcgOiAnMzAnLFxyXG4gICAgJzMxJyA6ICczMSdcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgdHJ1bmNhdGVTdHJpbmcgPSAoc3RyaW5nOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBlbmRpbmc6IHN0cmluZykgPT4ge1xyXG4gIGlmIChsZW5ndGggPT09IG51bGwpIHtcclxuICAgIGxlbmd0aCA9IDEwMDtcclxuICB9XHJcbiAgaWYgKGVuZGluZyA9PT0gbnVsbCkge1xyXG4gICAgZW5kaW5nID0gJy4uLic7XHJcbiAgfVxyXG4gIGlmIChzdHJpbmcubGVuZ3RoID4gbGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZygwLCBsZW5ndGggLSBlbmRpbmcubGVuZ3RoKSArIGVuZGluZztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHN0cmluZztcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzdHJpcFRhZ3MgPSAoaW5wdXQ6IHN0cmluZywgYWxsb3dlZDogc3RyaW5nKSA9PiB7XHJcbiAgYWxsb3dlZCA9ICgoKGFsbG93ZWQgfHwgJycpICsgJycpLnRvTG93ZXJDYXNlKCkubWF0Y2goLzxbYS16XVthLXowLTldKj4vZykgfHwgW10pLmpvaW4oJycpO1xyXG4gIGNvbnN0IHRhZ3MgPSAvPFxcLz8oW2Etel1bYS16MC05XSopXFxiW14+XSo+L2dpO1xyXG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKHRhZ3MsICgkMCwgJDEpID0+IChhbGxvd2VkLmluZGV4T2YoJzwnICsgJDEudG9Mb3dlckNhc2UoKSArICc+JykgPiAtMSA/ICQwIDogJycpKTtcclxufTtcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuY29uc3Qgc3RyaXBQcm9wZXJ0aWVzID0gKGlucHV0LCBhbGxvd2VkKSA9PiB7XHJcbiAgYWxsb3dlZCA9ICgoKGFsbG93ZWQgfHwgJycpICsgJycpLnRvTG93ZXJDYXNlKCkubWF0Y2goL1thLXpdW2EtejAtOV0qL2cpIHx8IFtdKS5qb2luKCcnKTtcclxuICBjb25zdCBwcm9wZXJ0aWVzID0gL1xccyhbYS16XVthLXowLTldKik9XCJbXlwiXSpcIi9naTtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UocHJvcGVydGllcywgKCQwLCAkMSkgPT4gKGFsbG93ZWQuaW5kZXhPZigkMS50b0xvd2VyQ2FzZSgpKSA+IC0xID8gJDAgOiAnJykpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHRydW5jYXRlU3RyaW5nLFxyXG4gIGdldERheXMsXHJcbiAgZ2V0R2VuZGVyLFxyXG4gIGdldE1vbnRocyxcclxuICBhZGRDb21tYXMsXHJcbiAgc3RyaXBUYWdzLFxyXG4gIHN0cmlwUHJvcGVydGllc1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IHtcclxuICB1cmxJbWFnZUFkU2VsbExlYXNlLFxyXG4gIHVybEltYWdlUHJvamVjdCxcclxuICB1cmxJbWFnZUJyb2tlcixcclxuICBpbWFnZURlZmF1bHRQcm9qZWN0LFxyXG4gIGltYWdlRGVmYXVsdEJyb2tlclxyXG59IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHByb2Nlc3NJbWFnZVVybCA9IChpbWFnZVVybDogc3RyaW5nfHVuZGVmaW5lZCwgdHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgbGV0IHN0YXR1c1VybCA9IHZhbGlkVVJMKGltYWdlVXJsKTtcclxuICBpZiAoc3RhdHVzVXJsICYmIGltYWdlVXJsKSB7XHJcbiAgICBpbWFnZVVybCA9IGltYWdlVXJsLnJlcGxhY2UoL25oYWRhdG1vaS5zMy5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL2csIFwic3RhdGljLm5oYWRhdG1vaS5uZXRcIik7XHJcbiAgICBpbWFnZVVybCA9IGltYWdlVXJsLnJlcGxhY2UoL25oYWRhdG1vaS5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL2csIFwic3RhdGljLm5oYWRhdG1vaS5uZXRcIik7XHJcbiAgICBpbWFnZVVybCA9IGltYWdlVXJsLnJlcGxhY2UoL25oYWRhdG1vaS5zMy5hbWF6b25hd3MuY29tL2csIFwic3RhdGljLm5oYWRhdG1vaS5uZXRcIik7XHJcbiAgICBpbWFnZVVybCA9IGltYWdlVXJsLnJlcGxhY2UoL2h0dHA6XFwvXFwvL2csIFwiaHR0cHM6Ly9cIik7XHJcbiAgICBpZiAoaW1hZ2VVcmwgPT09ICdodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RhdGEvYWRfc2VsbF9sZWFzZV9pbWFnZS8nIHx8IGltYWdlVXJsID09PSAnaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kYXRhL3Byb2plY3RfaW1hZ2UvJykge1xyXG4gICAgICByZXR1cm4gZ2V0SW1hZ2VEZWZhdWx0QnlUeXBlKHR5cGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGltYWdlVXJsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoIWltYWdlVXJsIHx8IGltYWdlVXJsID09PSAnJyB8fCBpbWFnZVVybCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gZ2V0SW1hZ2VEZWZhdWx0QnlUeXBlKHR5cGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGJhc2VVcmwgPSBnZXRCYXNlVXJsQnlUeXBlKHR5cGUpO1xyXG4gICAgICByZXR1cm4gYmFzZVVybCArIGltYWdlVXJsO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldEJhc2VVcmxCeVR5cGUgPSAodHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgbGV0IGJhc2VVcmwgPSAnJztcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgJ2FkX3NlbGxfbGVhc2UnOlxyXG4gICAgICBiYXNlVXJsID0gdXJsSW1hZ2VBZFNlbGxMZWFzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdwcm9qZWN0JzpcclxuICAgICAgYmFzZVVybCA9IHVybEltYWdlUHJvamVjdDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdicm9rZXInOlxyXG4gICAgICBiYXNlVXJsID0gdXJsSW1hZ2VCcm9rZXI7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gYmFzZVVybDtcclxufTtcclxuXHJcbmNvbnN0IGdldEltYWdlRGVmYXVsdEJ5VHlwZSA9ICh0eXBlOiBzdHJpbmcpID0+IHtcclxuICBsZXQgaW1hZ2VEZWZhdWx0ID0gJyc7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlICdhZF9zZWxsX2xlYXNlJzpcclxuICAgICAgaW1hZ2VEZWZhdWx0ID0gaW1hZ2VEZWZhdWx0UHJvamVjdDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdwcm9qZWN0JzpcclxuICAgICAgaW1hZ2VEZWZhdWx0ID0gaW1hZ2VEZWZhdWx0UHJvamVjdDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdicm9rZXInOlxyXG4gICAgICBpbWFnZURlZmF1bHQgPSBpbWFnZURlZmF1bHRCcm9rZXI7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gaW1hZ2VEZWZhdWx0O1xyXG59O1xyXG5cclxuY29uc3QgdmFsaWRVUkwgPSAoc3RyOiBzdHJpbmd8dW5kZWZpbmVkKSA9PiB7XHJcbiAgaWYgKCFzdHIgfHwgc3RyID09PSAnJyB8fCBzdHIgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKHN0ci5pbmRleE9mKCdodHRwJykgIT09IC0xKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9jZXNzSW1hZ2VVcmxcclxufTtcclxuXHJcbiIsImNvbnN0IGlzQmxhbmsgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgfHwgdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gMCB8fCB2YWx1ZSA9PT0gJycpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICh2YWx1ZS5sZW5ndGggPD0gMCB8fCB2YWx1ZS50cmltKCkubGVuZ3RoIDw9IDApKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgcmV0dXJuIGlzRW1wdHkodmFsdWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaXNFbXB0eSA9IChvYmo6IGFueSkgPT4ge1xyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmNvbnN0IGlzTnVtYmVyID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICBpZiAoaXNCbGFuayh2YWx1ZSkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpO1xyXG59O1xyXG5cclxuY29uc3QgaXNFbWFpbCA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKGlzQmxhbmsodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGxldCBlbWFpbCA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gIHJldHVybiBlbWFpbC50ZXN0KHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGlzU2x1ZyA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKGlzQmxhbmsodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGxldCBzbHVnID0gL15bQS1aYS16MC05XSsoPzotW0EtWmEtejAtOV0rKSokL1xyXG4gIHJldHVybiBzbHVnLnRlc3QodmFsdWUpO1xyXG59O1xyXG5cclxuY29uc3QgaXNVcmwgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmIChpc0JsYW5rKHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBsZXQgcmVnZXhwID0gL14oPzooPzpodHRwcz98ZnRwKTpcXC9cXC8pPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSg/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykqKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9cXFMqKT8kLztcclxuICByZXR1cm4gcmVnZXhwLnRlc3QodmFsdWUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGlzQmxhbmssXHJcbiAgaXNFbWFpbCxcclxuICBpc0VtcHR5LFxyXG4gIGlzTnVtYmVyLFxyXG4gIGlzVXJsLFxyXG4gIGlzU2x1Z1xyXG59O1xyXG4iLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vSW1wb3J0IENvbXBvbmVudHNcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgU2VhcmNoSG9tZXBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5kZXgvU2VhcmNoSG9tZXBhZ2VcIjtcclxuaW1wb3J0IENvbnRlbnRNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvQ29udGVuTWVudVwiO1xyXG5pbXBvcnQgVGl0bGVCbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmRleC9UaXRsZUJsb2NrXCI7XHJcbmltcG9ydCBHcmlkQWRTZWxsTGVhc2VzIGZyb20gXCIuLi9jb21wb25lbnRzL0dyaWRMaXN0L0dyaWRBZFNlbGxMZWFzZXNcIjtcclxuaW1wb3J0IEdyaWRQcm9qZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0dyaWRMaXN0L0dyaWRQcm9qZWN0XCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBTZWFyY2hLZXl3b3JkIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaC9LZXl3b3JkU2xpZGVcIjtcclxuaW1wb3J0IEhvdExvY2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0luZGV4L0hvdExvY2F0aW9uXCI7XHJcbmltcG9ydCBMb2FkaW5nUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9EaXNwbGF5L0xvYWRpbmdQYWdlXCI7XHJcbmltcG9ydCBOZXdzSW5kZXggZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5kZXgvTmV3c0luZGV4XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgR3JpZCwgVHlwb2dyYXBoeSwgSWNvbiwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEFkU2VsbExlYXNlSW5kZXggZnJvbSAnLi4vY29tcG9uZW50cy9JbmRleC9BZFNlbGxMZWFzZUluZGV4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbG9jYWxTdG9yYWdlVmlld2VkLCBtYWluVVJMLCBsb2NhbFN0b3JhZ2VQcm9qZWN0Vmlld2VkIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBpbmRleFBhZ2VTdHlsZSB9IGZyb20gJy4uL3N0eWxlL0luZGV4UGFnZSdcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBXaGF0IGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9XaGF0JztcclxuaW1wb3J0IEJ1dHRvblZpZXdzIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9CdXR0b25WaWV3cyc7XHJcbmltcG9ydCBOZXdIb3QgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL05ld0hvdCc7XHJcbmltcG9ydCBMaXN0UHJvZHVjdCBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvTGlzdFByb2R1Y3QnO1xyXG5pbXBvcnQgUGFydG5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1BhcnRuZXJcIjtcclxuaW1wb3J0IFBvcG92ZXJGaWx0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wb3Zlci9JbmRleFwiO1xyXG5pbXBvcnQgTGlzdE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0xpc3RNZW51JztcclxuaW1wb3J0IEdhbWVwYWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HYW1lcGFkJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3RzJztcclxuLy9JbXBvcnQgU0NTU1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzXCI7XHJcbi8vSW1wb3J0IENvbnN0XHJcbmltcG9ydCB7IGFwb2xsb0NsaWVudCB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBHRVRfQURfU0VMTF9MRUFTRVMsIEhPTUVfR0VUX0FEX1NFTExfTEVBU0VTLCBHRVRfQURfU0VMTF9MRUFTRV9XSVNIX0xJU1QgfSBmcm9tIFwiLi4vZ3JhcGhxbC9hZF9zZWxsX2xlYXNlcy9xdWVyaWVzXCI7XHJcbmltcG9ydCB7IEdFVF9QUk9KRUNUX0xJU1QsIEhPTUVfR0VUX1BST0pFQ1RfTElTVCB9IGZyb20gXCIuLi9ncmFwaHFsL3Byb2plY3QvcXVlcmllc1wiO1xyXG4vL0ltcG9ydCBNb2R1bGVcclxuaW1wb3J0IFZhbGlkYXRvciBmcm9tIFwiLi4vbW9kdWxlcy92YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgQWRTZWxsTGVhc2VzTGlzdFByb3BzLCBQcm9qZWN0TGlzdFByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaW50ZXJmYWNlXCJcclxuXHJcbi8vIGludGVyZmFjZSBEYXRhTmV3c1Byb3BzIHtcclxuLy8gICBzbHVnOiBzdHJpbmcsXHJcbi8vICAgbGluazogc3RyaW5nLFxyXG4vLyAgIHRpdGxlOiB7XHJcbi8vICAgICByZW5kZXJlZDogc3RyaW5nXHJcbi8vICAgfSxcclxuLy8gICBleGNlcnB0OiB7XHJcbi8vICAgICByZW5kZXJlZDogc3RyaW5nXHJcbi8vICAgfSxcclxuLy8gICBmZWF0dXJlZF9pbWFnZV91cmw6IHN0cmluZyxcclxuLy8gICBkYXRlOiBzdHJpbmdcclxuLy8gfVxyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2RhdGFBZFNlbGxMZWFzZXNWaWV3ZWQsIHNldERhdGFBZFNlbGxMZWFzZVZpZXdlZF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2RhdGFQcm9qZWN0Vmlld2VkLCBzZXREYXRhUHJvamVjdFZpZXdlZF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2RhdGFBZFNlbGxMZWFzZVdpc2hsaXN0LCBzZXREYXRhQWRTZWxsTGVhc2VXaXNobGlzdF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2RhdGFQcm9qZWN0LCBzZXREYXRhUHJvamVjdF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3N0YXR1c0xvYWRpbmdBZFNlbGxMZWFzZSwgc2V0U3RhdHVzTG9hZGluZ0FkU2VsbExlYXNlXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtkYXRhTmV3cywgc2V0RGF0YU5ld3NdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzdGF0dXNMb2FkaW5nUHJvamVjdCwgc2V0U3RhdHVzTG9hZGluZ1Byb2plY3RdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3N0YXR1c0xvYWRpbmdOZXdzLCBzZXRTdGF0dXNMb2FkaW5nTmV3c10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBsZXQgbmV3c1VybEFwaSA9ICdodHRwczovL25oYWRhdG1vaS5uZXQvdGluLXR1Yy93cC1qc29uL3dwL3YyL3Bvc3RzP3Blcl9wYWdlPTgnO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSBpbmRleFBhZ2VTdHlsZTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB2aWV3ZWRJdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlVmlld2VkKTtcclxuICAgIGlmICh2aWV3ZWRJdGVtICYmICFWYWxpZGF0b3IuaXNCbGFuayh2aWV3ZWRJdGVtKSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCB2aWV3ZWRJdGVtT2JqZWN0ID0gSlNPTi5wYXJzZSh2aWV3ZWRJdGVtKTtcclxuICAgICAgICBzZXREYXRhQWRTZWxsTGVhc2VWaWV3ZWQodmlld2VkSXRlbU9iamVjdCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHZpZXdlZFByb2plY3RJdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlUHJvamVjdFZpZXdlZCk7XHJcbiAgICBpZiAodmlld2VkUHJvamVjdEl0ZW0gJiYgIVZhbGlkYXRvci5pc0JsYW5rKHZpZXdlZFByb2plY3RJdGVtKSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCB2aWV3ZWRJdGVtT2JqZWN0ID0gSlNPTi5wYXJzZSh2aWV3ZWRQcm9qZWN0SXRlbSk7XHJcbiAgICAgICAgc2V0RGF0YVByb2plY3RWaWV3ZWQodmlld2VkSXRlbU9iamVjdCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICAgIHF1ZXJ5OiBHRVRfQURfU0VMTF9MRUFTRV9XSVNIX0xJU1QsIHZhcmlhYmxlczoge1xyXG4gICAgICAgIFwicGFnZVwiOiAxLFxyXG4gICAgICAgIFwibGltaXRcIjogMTIsXHJcbiAgICAgICAgXCJmaWx0ZXJcIjogXCIne30nXCJcclxuICAgICAgfVxyXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHNldFN0YXR1c0xvYWRpbmdBZFNlbGxMZWFzZShmYWxzZSk7XHJcbiAgICAgIGlmICghVmFsaWRhdG9yLmlzQmxhbmsocmVzcG9uc2UuZGF0YSkgJiYgIVZhbGlkYXRvci5pc0JsYW5rKHJlc3BvbnNlLmRhdGEuYWRTZWxsTGVhc2VXaXNobGlzdHMuZWRnZXMpKSB7XHJcbiAgICAgICAgbGV0IGRhdGFXaXNobGlzdFRvQWRkID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgd2lzaGxpc3RJbmRleCBpbiByZXNwb25zZS5kYXRhLmFkU2VsbExlYXNlV2lzaGxpc3RzLmVkZ2VzKSB7XHJcbiAgICAgICAgICBsZXQgZGF0YVRvQWRkID0ge1xyXG4gICAgICAgICAgICBub2RlOiByZXNwb25zZS5kYXRhLmFkU2VsbExlYXNlV2lzaGxpc3RzLmVkZ2VzW3dpc2hsaXN0SW5kZXhdLm5vZGUuYWRfc2VsbF9sZWFzZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGRhdGFXaXNobGlzdFRvQWRkLnB1c2goZGF0YVRvQWRkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RGF0YUFkU2VsbExlYXNlV2lzaGxpc3QoZGF0YVdpc2hsaXN0VG9BZGQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgICBxdWVyeTogSE9NRV9HRVRfUFJPSkVDVF9MSVNULCB2YXJpYWJsZXM6IHtcclxuICAgICAgICBcInBhZ2VcIjogMSxcclxuICAgICAgICBcImxpbWl0XCI6IDEyLFxyXG4gICAgICAgIFwiZmlsdGVyXCI6IFwiJ3t9J1wiXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBzZXRTdGF0dXNMb2FkaW5nUHJvamVjdChmYWxzZSk7XHJcbiAgICAgIGlmICghVmFsaWRhdG9yLmlzQmxhbmsocmVzcG9uc2UuZGF0YSkgJiYgIVZhbGlkYXRvci5pc0JsYW5rKHJlc3BvbnNlLmRhdGEucHJvamVjdHMuZWRnZXMpKSB7XHJcbiAgICAgICAgc2V0RGF0YVByb2plY3QocmVzcG9uc2UuZGF0YS5wcm9qZWN0cy5lZGdlcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9HZXQgRGF0YSBOZXdzXHJcbiAgICBmZXRjaChuZXdzVXJsQXBpKVxyXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBzZXREYXRhTmV3cyhkYXRhKTtcclxuICAgICAgICBzZXRTdGF0dXNMb2FkaW5nTmV3cyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW3N0YXR1c01vZGFsLCBzZXRNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdXBkYXRlTW9kYWwgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICBzZXRNb2RhbChkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBMaXN0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8QWRTZWxsTGVhc2VJbmRleCBmaWx0ZXI9e1wieyd0eXBlMic6JzVlN2Q1ZjU0M2Y2NjM4NzljNjc1MDkyNyw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWMsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFhLDVlN2Q2MTMyM2Y2NjM4NzljNjc1MDk5Nyw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWInfVwifSB0aXRsZT17J0LDoW4gbmjDoCd9IHR5cGU9eydoMid9IGhyZWY9eycvW3NsdWddJ30gcGF0aD17Jy9tdWEtYmFuLW5oYSd9IC8+XHJcbiAgICAgICAgey8qIDxBZFNlbGxMZWFzZUluZGV4IGZpbHRlcj17XCJ7J3R5cGUyJzonNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFlLDVlNjcwNzdlMWZlYTI3M2E5ODVkMWQzNiw1ZTY3MDcwZjFmZWEyNzNhOTg1ZDFkMzUsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFkLDVlNjcwNzk4MWZlYTI3M2E5ODVkMWQzNyd9XCJ9IHRpdGxlPXsnQsOhbiDEkeG6pXQnfSB0eXBlPXsnaDInfSBocmVmPXsnL1tzbHVnXSd9IHBhdGg9eycvbXVhLWJhbi1kYXQnfS8+ICovfVxyXG4gICAgICAgIHsvKiA8QWRTZWxsTGVhc2VJbmRleCBmaWx0ZXI9e1wieyd0eXBlMic6JzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhOSw1ZTdkNjIwZjNmNjYzODc5YzY3NTA5ZjgsNWU3ZDYyMmQzZjY2Mzg3OWM2NzUwYTA3LDVlN2Q2MjRiM2Y2NjM4NzljNjc1MGExNSw1ZTdkNjI2YjNmNjYzODc5YzY3NTBhMjMsNWU3ZDYyOGIzZjY2Mzg3OWM2NzUwYTM0LDVlN2Q2MmE1M2Y2NjM4NzljNjc1MGE0Miw1ZTdkNjJjYzNmNjYzODc5YzY3NTBhNTEsNWU3ZDYyZmMzZjY2Mzg3OWM2NzUwYTZhLDVlN2Q2MzE5M2Y2NjM4NzljNjc1MGE3Yiw1ZTdkNjMyZjNmNjYzODc5YzY3NTBhOGQsNWU5OTI0ZjY3MTZlZTk2NGI1ZmRjYzIzJ31cIn0gdGl0bGU9eydCw6FuIGPEg24gaOG7mSBjaHVuZyBjxrAnfSB0eXBlPXsnaDInfSBocmVmPXsnL1tzbHVnXSd9IHBhdGg9eycvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnfS8+ICovfVxyXG4gICAgICAgIHsvKiA8QWRTZWxsTGVhc2VJbmRleCBmaWx0ZXI9e1wieyd0eXBlMic6JzVlN2Q2MzY4M2Y2NjM4NzljNjc1MGFiNiw1ZTkxMjI5NDhjNzFkMjVhODc5ZDMwZTYsNWU3ZDY0YWUzZjY2Mzg3OWM2NzUwYWVmLDVlN2Q2NGM1M2Y2NjM4NzljNjc1MGFmZSw1ZTdkNjRlMjNmNjYzODc5YzY3NTBiMGIsNWU3ZDY1OGEzZjY2Mzg3OWM2NzUwYjcwLDVlN2Q2NTEwM2Y2NjM4NzljNjc1MGIyNyw1ZTdkNjU1ZTNmNjYzODc5YzY3NTBiNTEsNWU3ZDY1YjgzZjY2Mzg3OWM2NzUwYjhhJ31cIn0gdGl0bGU9eydCw6FuIGJp4buHdCB0aOG7sSd9IHR5cGU9eydoMid9IGhyZWY9eycvW3NsdWddJ30gcGF0aD17Jy9tdWEtYmFuLWJpZXQtdGh1J30vPiAqL31cclxuICAgICAgICB7LyogPEFkU2VsbExlYXNlSW5kZXggZmlsdGVyPXtcInsndHlwZTInOic1ZTY3MDdjMjFmZWEyNzNhOTg1ZDFkMzgsNWU2NzA3ZTAxZmVhMjczYTk4NWQxZDM5LDVlNjcwN2Y4MWZlYTI3M2E5ODVkMWQzYSw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjAsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFmJ31cIn0gdGl0bGU9eydCw6FuIGPDoWMgbG/huqFpIGLhuqV0IMSR4buZbmcgc+G6o24ga2jDoWMnfSB0eXBlPXsnaDInfSBocmVmPXsnL1tzbHVnXSd9IHBhdGg9eycvbXVhLWJhbi1iYXQtZG9uZy1zYW4ta2hhYyd9Lz4gKi99XHJcbiAgICAgICAgey8qIDxBZFNlbGxMZWFzZUluZGV4IGZpbHRlcj17XCJ7J3R5cGUxJzonNWUxMWFmMDQ0MTFlMWVhNzJhMWZjYmRmJ31cIn0gdGl0bGU9eydOaMOgIMSR4bqldCBjaG8gdGh1w6onfSB0eXBlPXsnaDInfSBocmVmPXsnL1tzbHVnXSd9IHBhdGg9eycvbmhhLWRhdC10aHVlJ30vPiAqL31cclxuICAgICAgICB7LyogPEFkU2VsbExlYXNlSW5kZXggZmlsdGVyPXtcInsndHlwZTInOic1ZTExYWYwNDQxMWUxZWE3MmExZmNiZTAnfVwifSB0aXRsZT17J05ow6AgxJHhuqV0IGPhuqduIG11YSd9IHR5cGU9eydoMid9IGhyZWY9eycvW3NsdWddJ30gcGF0aD17Jy9uaGEtZGF0LWNhbi1tdWEnfS8+ICovfVxyXG4gICAgICAgIHsvKiA8QWRTZWxsTGVhc2VJbmRleCBmaWx0ZXI9e1wieyd0eXBlMic6JzVlMTFhZjA0NDExZTFlYTcyYTFmY2JlMSd9XCJ9IHRpdGxlPXsnTmjDoCDEkeG6pXQgY+G6p24gdGh1w6onfSB0eXBlPXsnaDInfSBocmVmPXsnL1tzbHVnXSd9IHBhdGg9eycvbmhhLWRhdC1jYW4tdGh1ZSd9Lz4gKi99XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdHJhbnNhY3Rpb25Ib3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxUaXRsZUJsb2NrXHJcbiAgICAgICAgICB0aXRsZT1cIlPhuqNuIHBo4bqpbSB0aGnhur90IGvhur8gbuG7mWkgdGjhuqV0IGhp4buHbiDEkeG6oWlcIlxyXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJU4buVbmcgaOG7o3Agbmjhu69uZyBt4bqrdSB0aGnhur90IGvhur8gaGnhu4duIMSR4bqhaVwiXHJcbiAgICAgICAgICB0eXBlPXtcImgyXCJ9IHBhdGg9e1wiL2R1LWFuLWJhdC1kb25nLXNhblwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEhvdExvY2F0aW9uIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgTG9hZGluZ1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAoc3RhdHVzTG9hZGluZ05ld3MpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TG9hZGluZ1BhZ2UgY2xhc3NOYW1lPVwibG9hZGluZ19wYWdlXCIgZ3JpZD17eyB4bDogMywgbGc6IDMsIG1kOiA0LCBzbTogNiwgeHM6IDEyIH19IG51bWJlckxpbWl0PXs4fSAvPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJJY29uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2ZpeGVkJywgYm90dG9tOiAzMCwgcmlnaHQ6IDMwIH19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YSB0aXRsZT1cIlRyw7IgY2h1eeG7h24gRmFjZWJvb2tcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIGhyZWY9XCJodHRwOi8vbS5tZS85MjU3OTAyMjQxNjQ4NTI/cmVmPXpvem92blwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vem96by52bi9wdWJsaWMvdGhlbWUvY2lyY2xlL2ltYWdlcy93aWRnZXRzL2ZibWVzc2VuZ2VyLnN2Z1wiIGFsdD1cImJ0bi1mYWNlYm9va1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxhIHRpdGxlPVwiQ2hhdCB24bubaSBjaMO6bmcgdMO0aSBxdWEgWmFsb1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCIgaHJlZj1cImh0dHBzOi8vemFsby5tZS8wMzc3NTM1NzE3XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly96b3pvLnZuL3B1YmxpYy90aGVtZS9jaXJjbGUvaW1hZ2VzL3dpZGdldHMvemFsby5zdmdcIiBhbHQ9XCJidG4temFsb1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxhIHRpdGxlPVwiR+G7jWkgbmdheVwiIGhyZWY9XCJ0ZWw6MDkzNjA2MjE2NlwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vem96by52bi9wdWJsaWMvdGhlbWUvY2lyY2xlL2ltYWdlcy93aWRnZXRzL2NhbGwuc3ZnXCIgYWx0PVwiYnRuLWNhbGxub3dcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsZXQgcGFnZVRpdGxlID0gJ07hu5lpIHRo4bqldCBEb2RvJztcclxuICBsZXQgcGFnZURlc2NyaXB0aW9uID0gJ07hu5lpIHRo4bqldCBEb2RvIMSRw7NuIMSR4bqndSB4dSBoxrDhu5tuZyc7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRcclxuICAgICAgdGl0bGU9e3BhZ2VUaXRsZX1cclxuICAgICAgZGVzY3JpcHRpb249e3BhZ2VEZXNjcmlwdGlvbn1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBzdGF0dXNNb2RhbD17c3RhdHVzTW9kYWx9XHJcbiAgICAgIHVwZGF0ZU1vZGFsPXt1cGRhdGVNb2RhbH1cclxuICAgICAgY2Fub25pY2FsPXttYWluVVJMfVxyXG4gICAgICBwYXRoPXsnJ31cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgIDxMaXN0TWVudSAvPlxyXG4gICAgICAgICAgPE5ld0hvdCAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICAgIDxTZWFyY2hIb21lcGFnZSAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCAwJyB9fT5cclxuICAgICAgICAgICAgPFdoYXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvblZpZXdzIC8+XHJcbiAgICAgICAgICB7LyogPFByb2R1Y3QgLz4gKi99XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+PC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlfY29udGFpbmVyXCI+XHJcbiAgICAgICAgey8qIDxMaXN0IC8+ICovfVxyXG4gICAgICAgIHsvKiBT4bqjbiBwaOG6qW0gxJHDoyB4ZW0gKi99XHJcbiAgICAgICAgey8qIFPhuqNuIHBo4bqpbSBi4bqhbiB0aMOtY2ggKi99XHJcbiAgICAgICAgey8qIFPhuqNuIHBo4bqpbSBIT1QgKi99XHJcbiAgICAgICAgey8qIHtwcm9qZWN0V2FodGNoZWQoKX0gKi99XHJcbiAgICAgICAge3RyYW5zYWN0aW9uSG90KCl9XHJcbiAgICAgICAgey8qIFRpbiB04bupYyAgdOG7lW5nIGjhu6NwICovfVxyXG4gICAgICAgIHsvKiB7TG9hZGluZ1BhZ2UoKX0gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UGFydG5lciAvPlxyXG4gICAgICA8U2VhcmNoS2V5d29yZCAvPlxyXG4gICAgICA8TGlzdFByb2R1Y3QgLz5cclxuICAgICAge3JlbmRlckljb24oKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2JhZC1kZDYzNWMzZjM5ZTQwMjc3NTczNTEzODQ2MzE1OWIwNS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbG9naW4tOGI0MWMzNmUyZjRhMjA0NDc0Njc1NDcyN2U0ZTI1ZjQucG5nXCI7IiwiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUsIG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBpbmRleFBhZ2VTdHlsZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIHdpZHRoOiAnMzAwcHgnLFxyXG4gICAgICAgIGZsb2F0OiAnbGVmdCcsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBwYWRkaW5nOiAnMCAzMHB4JyxcclxuICAgICAgICAvLyBAaW5jbHVkZSBicmVha3BvaW50KG1kRG93bikge1xyXG4gICAgICAgIC8vICAgcGFkZGluZzogJzAgMjBweCcsXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnJGZvbnRGYW1pbHknLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnOTAwJyxcclxuICAgICAgICAgICAgbWFyZ2luOiAnLTE1cHggMCAzMHB4IDAnLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNhYWEnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTBweCAxNXB4IWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjZTZlNmU2JyxcclxuICAgICAgICAgICAgLy8gICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6ICcjZjBmMGYwJyxcclxuICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBpbmRleFBhZ2VTdHlsZSxcclxufSIsImltcG9ydCBheGlvcywge01ldGhvZH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7YXBpQmFzZVVSTCwgYXBpR3JhcGhRTFVSTH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgXCJjcm9zcy1mZXRjaC9wb2x5ZmlsbFwiO1xyXG5pbXBvcnQgQXBvbGxvQ2xpZW50LCB7SW5NZW1vcnlDYWNoZX0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xyXG5cclxuY29uc3QgY2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBhcGlCYXNlVVJMLFxyXG4gIHRpbWVvdXQ6IDMwMDAwLFxyXG59KTtcclxuXHJcbmNvbnN0IGFwaSA9IChtZXRob2Q6IE1ldGhvZCwgdXJsOiBzdHJpbmcsIGRhdGE/OiBhbnkpID0+IGNsaWVudFxyXG4gIC5yZXF1ZXN0KHtcclxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kLFxyXG4gICAgdXJsLFxyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pXHJcbiAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuY29uc3QgYXBvbGxvQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgdXJpOiBhcGlHcmFwaFFMVVJMLFxyXG4gIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtcclxuICAgIGFkZFR5cGVuYW1lOiBmYWxzZVxyXG4gIH0pfSk7XHJcblxyXG5leHBvcnQge2FwaSwgYXBvbGxvQ2xpZW50fVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGVCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3Jvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3dpdGhXaWR0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEcm9wRG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEcm9wVXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NhbGVuZGFyVG9kYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9EcmFmdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Vjb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRW1haWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZUJvcmRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2FtZXBhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZUJlZm9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QaG9uZUlwaG9uZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZW5kXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TdGFyUmF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tYm9vc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3Jvc3MtZmV0Y2gvcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW93bC1jYXJvdXNlbDJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXgtaTE4blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==