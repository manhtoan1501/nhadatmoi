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
var _jsxFileName = "C:\\Users\\toan\\Documents\\nhadatmoi\\components\\Display\\LoadingPage.tsx";
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
var _jsxFileName = "C:\\Users\\toan\\Documents\\nhadatmoi\\components\\GridList\\GridAdSellLeases.tsx";
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
var _jsxFileName = "C:\\Users\\toan\\Documents\\nhadatmoi\\components\\GridList\\GridItemASL.tsx";
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
var _jsxFileName = "C:\\Users\\toan\\Documents\\nhadatmoi\\components\\Index\\TitleBlock.tsx";
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

/***/ "./components/Layout/ErrorMainPage.tsx":
/*!*********************************************!*\
  !*** ./components/Layout/ErrorMainPage.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/scss/style.scss */ "./assets/scss/style.scss");
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout/Layout */ "./components/Layout/Layout.tsx");
/* harmony import */ var _components_Layout_ErrorPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout/ErrorPage */ "./components/Layout/ErrorPage.tsx");
/* harmony import */ var _components_Index_TitleBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Index/TitleBlock */ "./components/Index/TitleBlock.tsx");
/* harmony import */ var _components_Display_LoadingPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Display/LoadingPage */ "./components/Display/LoadingPage.tsx");
/* harmony import */ var _components_GridList_GridAdSellLeases__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/GridList/GridAdSellLeases */ "./components/GridList/GridAdSellLeases.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils */ "./utils/index.ts");
/* harmony import */ var _graphql_ad_sell_leases_queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../graphql/ad_sell_leases/queries */ "./graphql/ad_sell_leases/queries/index.ts");
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modules/validator */ "./modules/validator.tsx");
var _jsxFileName = "C:\\Users\\toan\\Documents\\nhadatmoi\\components\\Layout\\ErrorMainPage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















const ErrorMainPage = props => {
  console.log("PAGE ERROR");
  let pageTitle = 'Đã xảy ra lỗi, vui lòng thử lại';
  let pageDescription = 'Hiện đã xảy ra lỗi, vui lòng thử lại sau';
  const [dataAdSellLeases, setDataAdSellLease] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const [statusLoadingAdSellLease, setStatusLoadingAdSellLease] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _utils__WEBPACK_IMPORTED_MODULE_10__["apolloClient"].query({
      query: _graphql_ad_sell_leases_queries__WEBPACK_IMPORTED_MODULE_11__["HOME_GET_AD_SELL_LEASES"],
      variables: {
        "page": 1,
        "limit": 8,
        "filter": "'{}'"
      }
    }).then(response => {
      setStatusLoadingAdSellLease(false);

      if (!_modules_validator__WEBPACK_IMPORTED_MODULE_12__["default"].isBlank(response.data) && !_modules_validator__WEBPACK_IMPORTED_MODULE_12__["default"].isBlank(response.data.adSellLeases.edges)) {
        setDataAdSellLease(response.data.adSellLeases.edges);
      }
    });
  }, []);
  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    title: pageTitle,
    description: pageDescription
  }, props, {
    canonical: _constants__WEBPACK_IMPORTED_MODULE_2__["mainURL"],
    path: '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }), __jsx(_components_Layout_ErrorPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(_components_Index_TitleBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Tin rao ph\xF9 h\u1EE3p v\u1EDBi b\u1EA1n",
    description: "Xem th\xEAm m\u1ED9t s\u1ED1 tin rao ph\xF9 h\u1EE3p v\u1EDBi b\u1EA1n",
    path: "/tim-tin-rao",
    type: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), statusLoadingAdSellLease && __jsx(_components_Display_LoadingPage__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 53,
      columnNumber: 9
    }
  }), !statusLoadingAdSellLease && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_GridList_GridAdSellLeases__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "content_index_button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/[slug]",
    as: '/tim-tin-rao',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 54
    }
  }, "Xem th\xEAm")))));
}; // @ts-ignore


ErrorMainPage.getInitialProps = ({
  res,
  err
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorMainPage);

/***/ }),

/***/ "./components/Layout/ErrorPage.tsx":
/*!*****************************************!*\
  !*** ./components/Layout/ErrorPage.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Eco */ "@material-ui/icons/Eco");
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ViewList */ "@material-ui/icons/ViewList");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\toan\\Documents\\nhadatmoi\\components\\Layout\\ErrorPage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const ErrorPageProps = props => {
  const dropdownSearch = [{
    type: 'du-an-bat-dong-san',
    name: 'Dự án'
  }, {
    type: 'tim-tin-rao',
    name: 'Tin rao'
  }];
  let searchHomeBodyTitle = 'Nội thất Dodo - Giao dịch kiểu mới';
  let searchHomeBodyDescription = 'Tìm: Nhà riêng, Chung cư, Biệt thự, Đất nền, Đất thổ cư';
  let searchHomeBodyExample = 'Ví dụ: Hà Nội, Đà Nẵng, Thành Phố Hồ Chí Minh';
  let placeholderSearch = 'Nhập thông tin tìm kiếm...';
  const [typeSearch, setType] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(dropdownSearch[0]);

  const handleChangeType = inputType => {
    setType(inputType);
    handleCloseSearchType();
  };

  const [keywordSearch, setKeywordSearch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');

  const onClickSearch = () => {
    if (typeSearch.type === 'tim-tin-rao') {
      let urlProcess = {
        pathname: '/[slug]',
        query: {
          title: keywordSearch
        }
      };
      let slugAs = '/tim-tin-rao?title=' + keywordSearch;
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(urlProcess, slugAs, {
        shallow: false
      });
    } else {
      let urlProcess = {
        pathname: '/du-an-bat-dong-san',
        query: {
          name: keywordSearch
        }
      };
      let slugAs = '/du-an-bat-dong-san?name=' + keywordSearch;
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(urlProcess, slugAs, {
        shallow: false
      });
    }
  };

  const onChangeWards = event => {
    setKeywordSearch(event.target.value);

    if (event.key == "Enter" || event.keyCode == 13) {
      onClickSearch();
    }
  };

  const [anchorElSearchType, setAnchorElSearchType] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const handleClickSearchType = event => {
    setAnchorElSearchType(event.currentTarget);
  };

  const handleCloseSearchType = () => {
    setAnchorElSearchType(null);
  };

  const openSearchType = Boolean(anchorElSearchType);
  const id = openSearchType ? 'simple-popover' : undefined;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: 'container-big error_page',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: 'error_page__image',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: 'https://static.nhadatmoi.net/default/error-image.svg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: 'error_page__title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "\u0110\xC3 X\u1EA2Y RA L\u1ED6I, VUI L\xD2NG TH\u1EEC L\u1EA0I"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 0,
    item: true,
    xs: 12,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: true,
    className: "error_page__search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "search_homepage__body__box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xsDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "search_homepage__body__box__select",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleClickSearchType,
    "aria-describedby": id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }, typeSearch.name, __jsx("svg", {
    viewBox: "0 0 320 512",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 38
    }
  }, __jsx("path", {
    d: "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Popover"], {
    id: id,
    open: openSearchType,
    anchorEl: anchorElSearchType,
    onClose: handleCloseSearchType,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    className: "search_homepage__body__box__select__popup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: 'span',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    button: true,
    onClick: event => handleChangeType(dropdownSearch[0]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 23
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 27
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: dropdownSearch[0].name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    button: true,
    onClick: event => handleChangeType(dropdownSearch[1]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 23
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 27
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: dropdownSearch[1].name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  })))))), __jsx("div", {
    className: "search_homepage__body_box_input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: "search_homepage__body_box_input_base",
    placeholder: placeholderSearch,
    inputProps: {
      'aria-label': placeholderSearch
    },
    onKeyUp: e => onChangeWards(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "search_homepage__body_box_button",
    variant: "outlined",
    onClick: onClickSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorPageProps);

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
var _jsxFileName = "C:\\Users\\toan\\Documents\\nhadatmoi\\components\\Layout\\Footer.tsx";
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
var _jsxFileName = "C:\\Users\\toan\\Documents\\nhadatmoi\\components\\Layout\\Header.jsx";
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
var _jsxFileName = "C:\\Users\\toan\\Documents\\nhadatmoi\\components\\Layout\\Layout.tsx";
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
var _jsxFileName = "C:\\Users\\toan\\Documents\\nhadatmoi\\components\\Login\\Modal.jsx";
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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


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
        } = __webpack_require__(/*! react-is */ "react-is");

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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./constants/index.ts");
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/validator */ "./modules/validator.tsx");
/* harmony import */ var _components_Layout_ErrorMainPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/ErrorMainPage */ "./components/Layout/ErrorMainPage.tsx");
var _jsxFileName = "C:\\Users\\toan\\Documents\\nhadatmoi\\pages\\_app.tsx";
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

    if (!_modules_validator__WEBPACK_IMPORTED_MODULE_7__["default"].isBlank(pageProps.statusCode) && pageProps.statusCode !== 200) {
      return __jsx(_components_Layout_ErrorMainPage__WEBPACK_IMPORTED_MODULE_8__["default"], {
        statusCode: pageProps.statusCode,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 14
        }
      });
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_ga__WEBPACK_IMPORTED_MODULE_5___default()(_constants__WEBPACK_IMPORTED_MODULE_6__["googleAnalyticsCode"], next_router__WEBPACK_IMPORTED_MODULE_4___default.a)(MyApp));

/***/ }),

/***/ "./public/Image/login.png":
/*!********************************!*\
  !*** ./public/Image/login.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/login-8b41c36e2f4a2044746754727e4e25f4.png";

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

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


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

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/InputBase":
/*!**********************************************!*\
  !*** external "@material-ui/core/InputBase" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

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

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/withStyles":
/*!******************************************************!*\
  !*** external "@material-ui/core/styles/withStyles" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/withStyles");

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

/***/ "@material-ui/icons/StarBorder":
/*!************************************************!*\
  !*** external "@material-ui/icons/StarBorder" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarBorder");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-moment");

/***/ }),

/***/ "react-redux-i18n":
/*!***********************************!*\
  !*** external "react-redux-i18n" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux-i18n");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rpc3BsYXkvTG9hZGluZ1BhZ2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZExpc3QvR3JpZEFkU2VsbExlYXNlcy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmlkTGlzdC9HcmlkSXRlbUFTTC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbmRleC9UaXRsZUJsb2NrLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9FcnJvck1haW5QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9FcnJvclBhZ2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L2xvZ28ucG5nIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4vTW9kYWwuanN4Iiwid2VicGFjazovLy8uL2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ncmFwaHFsL2FkX3NlbGxfbGVhc2VzL211dGF0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2dyYXBocWwvYWRfc2VsbF9sZWFzZXMvcXVlcmllcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ncmFwaHFsL3Byb2plY3QvbXV0YXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9BZFNlbGxMZWFzZS9UcmFja2luZy50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wcmljZVByb2Nlc3MudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvc3RyaW5nUHJvY2Vzcy50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91cmxQcm9jZXNzLnRzeCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3ZhbGlkYXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL0ltYWdlL2xvZ2luLnBuZyIsIndlYnBhY2s6Ly8vLi91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZUJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FsZW5kYXJUb2RheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FY29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRW1haWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVCb3JkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2FtZXBhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9JbmZvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lSXBob25lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZpZXdMaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1ib29zdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3Jvc3MtZmV0Y2gvcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4LWkxOG5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJMb2FkaW5nUGFnZSIsInByb3BzIiwiZG9tTG9hZGluZyIsImdyaWQiLCJ4bCIsImxnIiwibWQiLCJzbSIsInhzIiwibmV3RG9tUmVhY3QiLCJpIiwibnVtYmVyTGltaXQiLCJHcmlkTGlzdCIsImNsYXNzTmFtZSIsImdyaWREYXRhIiwibWFwIiwiZGF0YUl0ZW0iLCJpbmRleCIsInByaWNlVmFsdWUiLCJQcmljZVByb2Nlc3MiLCJwcmljZVByb2Nlc3MiLCJub2RlIiwicHJpY2UiLCJ2YWx1ZSIsInVuaXQiLCJkYXRhR3JpZCIsImltYWdlIiwidXJsUHJvY2VzcyIsInByb2Nlc3NJbWFnZVVybCIsImF2YXRhciIsInNyYyIsInRpdGxlIiwiYWRkcmVzcyIsInRleHQiLCJhcmVhIiwiU3RyaW5nUHJvY2VzcyIsImFkZENvbW1hcyIsInNsdWciLCJ1cGRhdGVkX2F0IiwiY3JlYXRlZF9hdCIsInZpZXdfY291bnQiLCJpZCIsImxpa2Vfc3RhdHVzIiwicGF0aCIsIm1heExlbmd0aCIsIkdyaWRJdGVtQVNMIiwiZGF0YUNvbXBhcmVMb2NhbCIsInNldERhdGFDb21wYXJlTG9jYWwiLCJSZWFjdCIsInVzZVN0YXRlIiwibGlrZVN0YXR1cyIsInNldExpa2VTdGF0dXMiLCJkYXRhR2lyZCIsInN0YXR1c0NvbXBhcmUiLCJzZXRTdGF0dXNDb21wYXJlIiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsU3RvcmFnZUNvbXBhcmVLZXkiLCJWYWxpZGF0b3IiLCJpc0JsYW5rIiwiZGF0YVN0YXR1c0NvbXBhcmUiLCJKU09OIiwicGFyc2UiLCJlbnRpdHlJZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInR5cGVHcmlkIiwiZGF0YVByZXBhcmUiLCJ0eXBlIiwiaGFuZGxlVHJhY2tpbmciLCJhZGRTZWxsTGVhc2VJZCIsInZhbGlkYXRvciIsIlRyYWNraW5nIiwiYWRkVHJhY2tpbmciLCJTdHJpbmciLCJjbGlja0FkZFRvQ29tcGFyZSIsInN0YXR1c1VwZGF0ZSIsInVwZGF0ZUNvbXBhcmVEYXRhIiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVDbGlja1JlbW92ZUNvbXBhcmUiLCJkYXRhQ29tcGFyZSIsImRhdGFUb0NvbXBhcmUiLCJkYXRhTmV3Q29tcGFyZSIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGF0YSIsImlzQWRkVG9Mb2NhbCIsInJlbW92ZUl0ZW0iLCJzY3JlZW5XaWR0aCIsInNjcmVlbiIsIndpZHRoIiwibGVuZ3RoIiwiYWxlcnQiLCJsaW5rSHJlZiIsImxpbmtBcyIsImhhbmRsZUNsaWNrTGlrZSIsImFwb2xsb0NsaWVudCIsIm11dGF0ZSIsIm11dGF0aW9uIiwiQUREX0FEX1NFTExfTEVBU0VfV0lTSF9MSVNUIiwidmFyaWFibGVzIiwidGhlbiIsInJlc3BvbnNlIiwiQUREX1BST0pFQ1RfV0lTSF9MSVNUIiwiY29tcG9uZW50c0l0ZW0iLCJOdW1iZXIiLCJUaXRsZUJsb2NrIiwiZG9tVGl0bGUiLCJkb21CbG9ja1RpdGxlIiwiaW5kZXhPZiIsImhyZWYiLCJkZXNjcmlwdGlvbiIsIkVycm9yTWFpblBhZ2UiLCJwYWdlVGl0bGUiLCJwYWdlRGVzY3JpcHRpb24iLCJkYXRhQWRTZWxsTGVhc2VzIiwic2V0RGF0YUFkU2VsbExlYXNlIiwic3RhdHVzTG9hZGluZ0FkU2VsbExlYXNlIiwic2V0U3RhdHVzTG9hZGluZ0FkU2VsbExlYXNlIiwicXVlcnkiLCJIT01FX0dFVF9BRF9TRUxMX0xFQVNFUyIsImFkU2VsbExlYXNlcyIsImVkZ2VzIiwibWFpblVSTCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciIsInN0YXR1c0NvZGUiLCJFcnJvclBhZ2VQcm9wcyIsImRyb3Bkb3duU2VhcmNoIiwibmFtZSIsInNlYXJjaEhvbWVCb2R5VGl0bGUiLCJzZWFyY2hIb21lQm9keURlc2NyaXB0aW9uIiwic2VhcmNoSG9tZUJvZHlFeGFtcGxlIiwicGxhY2Vob2xkZXJTZWFyY2giLCJ0eXBlU2VhcmNoIiwic2V0VHlwZSIsImhhbmRsZUNoYW5nZVR5cGUiLCJpbnB1dFR5cGUiLCJoYW5kbGVDbG9zZVNlYXJjaFR5cGUiLCJrZXl3b3JkU2VhcmNoIiwic2V0S2V5d29yZFNlYXJjaCIsIm9uQ2xpY2tTZWFyY2giLCJwYXRobmFtZSIsInNsdWdBcyIsIlJvdXRlciIsInNoYWxsb3ciLCJvbkNoYW5nZVdhcmRzIiwiZXZlbnQiLCJ0YXJnZXQiLCJrZXkiLCJrZXlDb2RlIiwiYW5jaG9yRWxTZWFyY2hUeXBlIiwic2V0QW5jaG9yRWxTZWFyY2hUeXBlIiwiaGFuZGxlQ2xpY2tTZWFyY2hUeXBlIiwiY3VycmVudFRhcmdldCIsIm9wZW5TZWFyY2hUeXBlIiwiQm9vbGVhbiIsInVuZGVmaW5lZCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImUiLCJGb290ZXJQYWdlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdFBvcG92ZXIiLCJwb2ludGVyRXZlbnRzIiwicG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJvdmVyZmxvdyIsImxpc3RJdGVtIiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwicGFkZGluZyIsIm92ZXJmbG93WCIsImN1cnNvciIsImNvbG9yIiwiZm9udFdlaWdodCIsImhlYWRlciIsImhlaWdodCIsImRpdmlkZXIiLCJtYXJnaW4iLCJ0ZXh0SXRlbSIsInBhZGRpbmdSaWdodCIsInJvb3QiLCJ6SW5kZXgiLCJwYXBlciIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsIkFjdGlvbnMiLCJjbGFzc2VzIiwiY291bnRNZW51Iiwic2V0Q291bnRNZW51Iiwib3Blbk1lbnUiLCJzZXRPcGVuTWVudSIsImFuY2hvclJlZiIsInVzZVJlZiIsImhhbmRsZVRvZ2dsZSIsInByZXZPcGVuIiwiaGFuZGxlQ2xvc2UiLCJjdXJyZW50IiwiY29udGFpbnMiLCJoYW5kbGVMaXN0S2V5RG93biIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJhbGlnbkl0ZW1zIiwiVHJhbnNpdGlvblByb3BzIiwicGxhY2VtZW50IiwidHJhbnNmb3JtT3JpZ2luIiwiTG9nbyIsInJlcXVpcmUiLCJMYXlvdXRQYWdlIiwic3RhdHVzTW9kYWwiLCJzZXRNb2RhbCIsInVwZGF0ZU1vZGFsIiwic2NoZW1hT2JqZWN0IiwiY2Fub25pY2FsIiwiZ29vZ2xlU2VhcmNoQ29uc29sZSIsIl9faHRtbCIsImNoaWxkcmVuIiwibG9uZ0luIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJsb2dJbkNsb3NlIiwidG9wIiwicmlnaHQiLCJidXR0b24iLCJtb2RhbCIsImZsb2F0IiwibGluZUhlaWdodCIsInRhYnMiLCJsYWJlbCIsIkxvZ2luTW9kYWwiLCJvcGVuIiwic2V0T3BlbiIsInZhbHVlVGFiIiwic2V0VmFsdWVUYWIiLCJyZW5kZXJHb29nbGUiLCJnb29nbGVMb2dpbiIsInJlbmRlclphbG8iLCJ6YWxvTG9naW4iLCJyZW5kZXJGYWNlIiwiZmFjZWJvb2tMb2dpbiIsImhhbmRsZVRhYnNDaGFuZ2UiLCJyZW5kZXJUYWJzIiwidGFiIiwicmVuZGVyTG9naW4iLCJyZW5kZXJDcmVhdGVBY2NvdW50IiwiYm9yZGVyUmlnaHQiLCJJbWFnZUxvZ2luIiwidXBncmFkZVBsYW5VUkwiLCJ1cGdyYWRlSWNvblVSTCIsImxvZ29VUkwiLCJhcGlCYXNlVVJMIiwiYXBpR3JhcGhRTFVSTCIsInVybEltYWdlQWRTZWxsTGVhc2UiLCJ1cmxJbWFnZVByb2plY3QiLCJ1cmxJbWFnZUJyb2tlciIsImltYWdlRGVmYXVsdFByb2plY3QiLCJpbWFnZURlZmF1bHRTbGlkZXIiLCJpbWFnZURlZmF1bHRCcm9rZXIiLCJnb29nbGVBbmFseXRpY3NDb2RlIiwibG9jYWxTdG9yYWdlVmlld2VkIiwibG9jYWxTdG9yYWdlUHJvamVjdFZpZXdlZCIsImFkU2VsbExlYXNlQ2F0ZWdvcnkiLCJwYXJlbnRfc2x1ZyIsImFkU2VsbExlYXNlVHlwZSIsInR5cGUxX3NsdWciLCJ0aXRsZXMiLCJlbGVtZW50cyIsImVsZW1lbnQiLCJsaXN0TWVudSIsInJvb21zIiwicm9vbSIsInByb2R1Y3RzIiwibW9uZXlPbGQiLCJtb25leU5ldyIsIkNPVU5UX1ZJRVdfQURfU0VMTF9MRUFTRSIsImdxbCIsIkFERF9BRF9TRUxMX0xFQVNFX0NPTU1FTlQiLCJHRVRfQURfU0VMTF9MRUFTRVMiLCJHRVRfQURfU0VMTF9MRUFTRVNfQllfU0xVRyIsIkdFVF9BRF9TRUxMX0xFQVNFU19CWV9JRCIsIkdFVF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVCIsIkNPVU5UX1ZJRVdfUFJPSkVDVCIsImFkU2VsbExlYXNlSWQiLCJheGlvcyIsImdldCIsInBhcmFtcyIsImFkX3NlbGxfbGVhc2VfaWQiLCJ0eXBlX3RyYWNraW5nIiwicHJpY2VVbml0IiwiZm9ybWF0UHJpY2VWYWx1ZSIsImdldFByaWNlVW5pdCIsIm1pbGxpb25Vbml0IiwiYmlsbGlvblVuaXQiLCJwcmljZVZhbHVlTnVtYmVyIiwiTWF0aCIsInJvdW5kIiwiaW5wdXRTdHJpbmciLCJyeCIsInJlcGxhY2UiLCJ3IiwidGVzdCIsImdldE1vbnRocyIsImdldEdlbmRlciIsImdldERheXMiLCJ0cnVuY2F0ZVN0cmluZyIsInN0cmluZyIsImVuZGluZyIsInN1YnN0cmluZyIsInN0cmlwVGFncyIsImlucHV0IiwiYWxsb3dlZCIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJqb2luIiwidGFncyIsIiQwIiwiJDEiLCJzdHJpcFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiaW1hZ2VVcmwiLCJzdGF0dXNVcmwiLCJ2YWxpZFVSTCIsImdldEltYWdlRGVmYXVsdEJ5VHlwZSIsImJhc2VVcmwiLCJnZXRCYXNlVXJsQnlUeXBlIiwiaW1hZ2VEZWZhdWx0Iiwic3RyIiwidHJpbSIsImlzRW1wdHkiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImlzTnVtYmVyIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwiaXNGaW5pdGUiLCJpc0VtYWlsIiwiZW1haWwiLCJpc1NsdWciLCJpc1VybCIsInJlZ2V4cCIsInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsIm5vZGVOYW1lIiwiaXNMb2NhbCIsInNjcm9sbCIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJyZW5kZXIiLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJwcm9jZXNzIiwid2FybiIsIlByb3BUeXBlcyIsImV4YWN0IiwiTGluayIsInBhc3NIcmVmIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJnZXRSZXNwb25zZSIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsImJhY2siLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJjb21wb25lbnREaWRDYXRjaCIsImNyZWF0ZVVybCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsInB1c2hVcmwiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwicHJvamVjdERldGFpbFBhdGhuYW1lIiwibmV3TGFuZERldGFpbFBhdGhuYW1lIiwibmV3TGFuZEFkU2VsbExlYXNlUGF0aG5hbWUiLCJhZFNlbGxMZWFzZURldGFpbFBhdGhuYW1lIiwicHJvamVjdERldGFpbE5ldyIsImFkU2VsbExlYXNlRGV0YWlsTmV3IiwicHJvamVjdENhdGVnb3J5IiwiTXlBcHAiLCJ1cmxPYmplY3QiLCJVcmwiLCJwYXRoTmFtZSIsInF1ZXJ5U3RyaW5nIiwidXJsUmVkaXJlY3QiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsInVzZXIiLCJuZXh0Q29va2llIiwiYXNzaWduIiwid2l0aEdBIiwiY2xpZW50IiwiY3JlYXRlIiwiYmFzZVVSTCIsInRpbWVvdXQiLCJhcGkiLCJyZXF1ZXN0IiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsIkFwb2xsb0NsaWVudCIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImFkZFR5cGVuYW1lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFjQSxNQUFNQSxXQUErQyxHQUFJQyxLQUFELElBQTRCO0FBQ2xGLE1BQUlDLFVBQVUsR0FDWixNQUFDLDZEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFRCxLQUFLLENBQUNFLElBQU4sQ0FBV0MsRUFBMUI7QUFDTSxNQUFFLEVBQUVILEtBQUssQ0FBQ0UsSUFBTixDQUFXRSxFQURyQjtBQUVNLE1B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RCxDQVdoREMsUUFBRCxJQUFtQkEsUUFBUSxDQUFDakIsSUFYcUIsQ0FBekQ7O0FBYUEsTUFBTVcsWUFBWSxHQUFHLElBQUl1ZCxtREFBSixDQUFpQjtBQUNwQ0MsS0FBRyxFQUFFdlQsd0RBRCtCO0FBRXBDK0ssYUFBVyxFQUFFLFNBRnVCO0FBR3BDeUksT0FBSyxFQUFFLElBQUlDLDBEQUFKLENBQWtCO0FBQ3ZCQyxlQUFXLEVBQUU7QUFEVSxHQUFsQjtBQUg2QixDQUFqQixDQUFyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCwge0Z1bmN0aW9uQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvU2tlbGV0b25cIjtcclxuXHJcbmludGVyZmFjZSBUaXRsZUJsb2NrUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBncmlkOiB7XHJcbiAgICBsZzogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xyXG4gICAgbWQ6IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcclxuICAgIHNtOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XHJcbiAgICB4czogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xyXG4gICAgeGw6IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcclxuICB9O1xyXG4gIG51bWJlckxpbWl0OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IExvYWRpbmdQYWdlOiBGdW5jdGlvbkNvbXBvbmVudDxUaXRsZUJsb2NrUHJvcHM+ID0gKHByb3BzOiBUaXRsZUJsb2NrUHJvcHMpID0+IHtcclxuICBsZXQgZG9tTG9hZGluZyA9IChcclxuICAgIDxHcmlkIGl0ZW0geGw9e3Byb3BzLmdyaWQueGx9XHJcbiAgICAgICAgICBsZz17cHJvcHMuZ3JpZC5sZ31cclxuICAgICAgICAgIG1kPXtwcm9wcy5ncmlkLm1kfVxyXG4gICAgICAgICAgc209e3Byb3BzLmdyaWQuc219XHJcbiAgICAgICAgICB4cz17cHJvcHMuZ3JpZC54c30gY2xhc3NOYW1lPVwiZ3JpZF9fbGlzdF9faXRlbSB1LW1hcmdpbi1ib3R0b20tc21hbGxcIj5cclxuICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJyZWN0XCIgY2xhc3NOYW1lPVwiZ3JpZF9fbGlzdF9faXRlbV9faW1nXCIvPlxyXG4gICAgICA8Qm94IHB0PXsyfT5cclxuICAgICAgICA8U2tlbGV0b24gLz5cclxuICAgICAgICA8U2tlbGV0b24gd2lkdGg9XCI2MCVcIiAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG4gIGxldCBuZXdEb21SZWFjdCA9ICg8PjwvPik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5udW1iZXJMaW1pdDsgaSsrKSB7XHJcbiAgICBuZXdEb21SZWFjdCA9IChcclxuICAgICAgPD57bmV3RG9tUmVhY3R9XHJcbiAgICAgIHtkb21Mb2FkaW5nfTwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiYmFzZWxpbmVcIiBjbGFzc05hbWU9XCJncmlkX19saXN0XCI+XHJcbiAgICAgIHtuZXdEb21SZWFjdH1cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1BhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwge0Z1bmN0aW9uQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkSXRlbUFTTCBmcm9tIFwiLi9HcmlkSXRlbUFTTFwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgU3RyaW5nUHJvY2VzcyBmcm9tIFwiLi8uLi8uLi9tb2R1bGVzL3N0cmluZ1Byb2Nlc3NcIjtcclxuaW1wb3J0IHVybFByb2Nlc3MgZnJvbSBcIi4uLy4uL21vZHVsZXMvdXJsUHJvY2Vzc1wiO1xyXG5pbXBvcnQgUHJpY2VQcm9jZXNzIGZyb20gXCIuLi8uLi9tb2R1bGVzL3ByaWNlUHJvY2Vzc1wiO1xyXG5cclxuXHJcbmludGVyZmFjZSBHcmlkUHJvcHMge1xyXG4gIG5vZGU6IHtcclxuICAgIGlkOiBzdHJpbmdcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBzbHVnOiBzdHJpbmcsXHJcbiAgICBjcmVhdGVkX2F0OiBzdHJpbmcsXHJcbiAgICB1cGRhdGVkX2F0OiBzdHJpbmcsXHJcbiAgICB2aWV3X2NvdW50OiBudW1iZXIsXHJcbiAgICBsaWtlX3N0YXR1czogYm9vbGVhbixcclxuICAgIHByaWNlOiB7XHJcbiAgICAgIHVuaXQ6IHN0cmluZ1xyXG4gICAgICB2YWx1ZTogc3RyaW5nXHJcbiAgICB9LFxyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgIGFsdF90ZXh0OiBzdHJpbmdcclxuICAgICAgc3JjOiBzdHJpbmdcclxuICAgICAgZGVzY3JpcHRpb246IHN0cmluZ1xyXG4gICAgfSxcclxuICAgIGFkZHJlc3M6IHtcclxuICAgICAgdGV4dDogc3RyaW5nLFxyXG4gICAgICB3YXJkOiBzdHJpbmcsXHJcbiAgICAgIGRpc3RyaWN0OiBzdHJpbmcsXHJcbiAgICAgIGNpdHk6IHN0cmluZ1xyXG4gICAgfSxcclxuICAgIGFyZWE6IHtcclxuICAgICAgdW5pdDogc3RyaW5nXHJcbiAgICAgIHZhbHVlOiBzdHJpbmdcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBHcmlkTGlzdFByb3BzIHtcclxuICBncmlkRGF0YTogR3JpZFByb3BzW107XHJcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgbWF4TGVuZ3RoPzogbnVtYmVyO1xyXG4gIGdyaWQ6IHtcclxuICAgIGxnOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XHJcbiAgICBtZDogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xyXG4gICAgc206IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcclxuICAgIHhzOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XHJcbiAgICB4bDogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IEdyaWRMaXN0OiBGdW5jdGlvbkNvbXBvbmVudDxHcmlkTGlzdFByb3BzPiA9IChwcm9wczogR3JpZExpc3RQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gaXRlbSB4cz17MTJ9IGRpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgIGFsaWduSXRlbXM9XCJiYXNlbGluZVwiIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT5cclxuICAgICAge3Byb3BzLmdyaWREYXRhLm1hcCgoZGF0YUl0ZW0sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBsZXQgcHJpY2VWYWx1ZSA9IFByaWNlUHJvY2Vzcy5wcmljZVByb2Nlc3MoZGF0YUl0ZW0ubm9kZS5wcmljZS52YWx1ZSwgZGF0YUl0ZW0ubm9kZS5wcmljZS51bml0KTtcclxuICAgICAgICBsZXQgZGF0YUdyaWQgPSB7XHJcbiAgICAgICAgICBpbWFnZTogdXJsUHJvY2Vzcy5wcm9jZXNzSW1hZ2VVcmwoZGF0YUl0ZW0ubm9kZS5hdmF0YXIuc3JjLCAnYWRfc2VsbF9sZWFzZScpLFxyXG4gICAgICAgICAgdGl0bGU6IGRhdGFJdGVtLm5vZGUudGl0bGUsXHJcbiAgICAgICAgICBhZGRyZXNzOiBkYXRhSXRlbS5ub2RlLmFkZHJlc3MudGV4dCxcclxuICAgICAgICAgIGFyZWE6IFN0cmluZ1Byb2Nlc3MuYWRkQ29tbWFzKGRhdGFJdGVtLm5vZGUuYXJlYS52YWx1ZSksXHJcbiAgICAgICAgICBwcmljZTogcHJpY2VWYWx1ZSxcclxuICAgICAgICAgIHNsdWc6IGRhdGFJdGVtLm5vZGUuc2x1ZyxcclxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IGRhdGFJdGVtLm5vZGUudXBkYXRlZF9hdCxcclxuICAgICAgICAgIGNyZWF0ZWRfYXQ6IGRhdGFJdGVtLm5vZGUuY3JlYXRlZF9hdCxcclxuICAgICAgICAgIHZpZXdfY291bnQ6IGRhdGFJdGVtLm5vZGUudmlld19jb3VudCxcclxuICAgICAgICAgIGlkOiBkYXRhSXRlbS5ub2RlLmlkLFxyXG4gICAgICAgICAgbGlrZV9zdGF0dXM6IGRhdGFJdGVtLm5vZGUubGlrZV9zdGF0dXMsXHJcbiAgICAgICAgICBwYXRoOiAnL3Rpbi1yYW8vJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHByb3BzLm1heExlbmd0aCAmJiBpbmRleCA+PSBwcm9wcy5tYXhMZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiAoPD48Lz4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8R3JpZEl0ZW1BU0wgZ3JpZD17cHJvcHMuZ3JpZH0gZGF0YUdpcmQ9e2RhdGFHcmlkfSBrZXk9e1wiZ3JpZF9pdGVtX2FkX3NlbGxfXCIgKyBpbmRleH0vPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pfVxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEdyaWRMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtGdW5jdGlvbkNvbXBvbmVudCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbi8vIE1hdGVyaWFsLSBVSVxyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG4vLyBJY29uXHJcbmltcG9ydCBGYXZvcml0ZUJvcmRlckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZUJvcmRlclwiO1xyXG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIjtcclxuaW1wb3J0IENhbGVuZGFyVG9kYXkgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DYWxlbmRhclRvZGF5XCI7XHJcbmltcG9ydCBTdHJpbmdQcm9jZXNzIGZyb20gXCIuLi8uLi9tb2R1bGVzL3N0cmluZ1Byb2Nlc3NcIjtcclxuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7bG9jYWxTdG9yYWdlQ29tcGFyZUtleX0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gXCIuLi8uLi9tb2R1bGVzL3ZhbGlkYXRvclwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgVHJhY2tpbmcgZnJvbSBcIi4uLy4uL21vZHVsZXMvQWRTZWxsTGVhc2UvVHJhY2tpbmdcIjtcclxuaW1wb3J0IHZhbGlkYXRvciBmcm9tIFwiLi4vLi4vbW9kdWxlcy92YWxpZGF0b3JcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQge2Fwb2xsb0NsaWVudH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQge0FERF9QUk9KRUNUX1dJU0hfTElTVH0gZnJvbSAnLi4vLi4vZ3JhcGhxbC9wcm9qZWN0L211dGF0aW9uJztcclxuaW1wb3J0IHtBRERfQURfU0VMTF9MRUFTRV9XSVNIX0xJU1R9IGZyb20gJy4uLy4uL2dyYXBocWwvYWRfc2VsbF9sZWFzZXMvbXV0YXRpb24nO1xyXG5cclxuaW50ZXJmYWNlIGRhdGFHcmlkUHJvcHMge1xyXG4gIGltYWdlOiBhbnksXHJcbiAgdGl0bGU6IHN0cmluZyxcclxuICBhcmVhOiBzdHJpbmcsXHJcbiAgYWRkcmVzczogc3RyaW5nLFxyXG4gIHByaWNlOiBzdHJpbmcsXHJcbiAgc2x1Zzogc3RyaW5nLFxyXG4gIGNyZWF0ZWRfYXQ6IHN0cmluZyxcclxuICB1cGRhdGVkX2F0OiBzdHJpbmcsXHJcbiAgcGF0aDogc3RyaW5nXHJcbiAgdmlld19jb3VudDogbnVtYmVyLFxyXG4gIGxpa2Vfc3RhdHVzOiBib29sZWFuLFxyXG4gIGlkOiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIENvbXBhcmVEYXRhUHJvcHMge1xyXG4gIGF2YXRhcjogc3RyaW5nLFxyXG4gIHRpdGxlOiBzdHJpbmcsXHJcbiAgaWQ6IHN0cmluZyxcclxuICB0eXBlOiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIEdyaWRJdGVtUHJvcHMge1xyXG4gIGdyaWQ6IHtcclxuICAgIGxnOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XHJcbiAgICBtZDogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xyXG4gICAgc206IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcclxuICAgIHhzOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XHJcbiAgICB4bDogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xyXG4gIH07XHJcbiAgZGF0YUdpcmQ6IGRhdGFHcmlkUHJvcHM7XHJcbn1cclxuXHJcbmNvbnN0IEdyaWRJdGVtQVNMOiBGdW5jdGlvbkNvbXBvbmVudDxHcmlkSXRlbVByb3BzPiA9IChwcm9wczogR3JpZEl0ZW1Qcm9wcykgPT5cclxue1xyXG4gIGNvbnN0IFtkYXRhQ29tcGFyZUxvY2FsLCBzZXREYXRhQ29tcGFyZUxvY2FsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsaWtlU3RhdHVzLCBzZXRMaWtlU3RhdHVzXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLmRhdGFHaXJkLmxpa2Vfc3RhdHVzKTtcclxuICBjb25zdCBbc3RhdHVzQ29tcGFyZSwgc2V0U3RhdHVzQ29tcGFyZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5KSAmJiAhVmFsaWRhdG9yLmlzQmxhbmsobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSkpKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGRhdGFTdGF0dXNDb21wYXJlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5KSBhcyBzdHJpbmcpO1xyXG4gICAgICAgIHNldERhdGFDb21wYXJlTG9jYWwoZGF0YVN0YXR1c0NvbXBhcmUpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4IGluIGRhdGFTdGF0dXNDb21wYXJlKSB7XHJcbiAgICAgICAgICBsZXQgZW50aXR5SWQgPSBkYXRhU3RhdHVzQ29tcGFyZVtpbmRleF0uaWQ7XHJcbiAgICAgICAgICBpZiAoZW50aXR5SWQgPT09IHByb3BzLmRhdGFHaXJkLmlkKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXR1c0NvbXBhcmUodHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgbGV0IHR5cGVHcmlkID0gJ2FkX3NlbGxfbGVhc2UnO1xyXG4gIGlmIChwcm9wcy5kYXRhR2lyZC5wYXRoID09PSAnL2R1LWFuLycpIHtcclxuICAgIHR5cGVHcmlkID0gJ3Byb2plY3QnO1xyXG4gIH1cclxuICBjb25zdCBkYXRhUHJlcGFyZSA9IHtcclxuICAgIGF2YXRhcjogcHJvcHMuZGF0YUdpcmQuaW1hZ2UsXHJcbiAgICB0aXRsZTogcHJvcHMuZGF0YUdpcmQudGl0bGUsXHJcbiAgICBpZDogcHJvcHMuZGF0YUdpcmQuaWQsXHJcbiAgICB0eXBlOiB0eXBlR3JpZFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRyYWNraW5nID0gKHR5cGU6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IGFkZFNlbGxMZWFzZUlkID0gcHJvcHMuZGF0YUdpcmQuaWQ7XHJcbiAgICBpZiAoYWRkU2VsbExlYXNlSWQgJiYgIXZhbGlkYXRvci5pc0JsYW5rKGFkZFNlbGxMZWFzZUlkKSAmJiB0eXBlR3JpZCA9PT0gJ2FkX3NlbGxfbGVhc2UnKSB7XHJcbiAgICAgIFRyYWNraW5nLmFkZFRyYWNraW5nKFN0cmluZyhhZGRTZWxsTGVhc2VJZCksIHR5cGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxldCBjbGlja0FkZFRvQ29tcGFyZSA9ICgpID0+IHtcclxuICAgIGhhbmRsZVRyYWNraW5nKCdjb21wYXJlX2NsaWNrJyk7XHJcbiAgICBsZXQgc3RhdHVzVXBkYXRlID0gdXBkYXRlQ29tcGFyZURhdGEoZGF0YVByZXBhcmUpO1xyXG4gICAgaWYgKCFzdGF0dXNVcGRhdGUpIHJldHVybiBzdGF0dXNVcGRhdGU7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrUmVtb3ZlQ29tcGFyZSA9IChkYXRhQ29tcGFyZTogQ29tcGFyZURhdGFQcm9wcykgPT4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkpICYmICFWYWxpZGF0b3IuaXNCbGFuayhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5KSkpIHtcclxuICAgICAgbGV0IGRhdGFUb0NvbXBhcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkpIGFzIHN0cmluZyk7XHJcbiAgICAgIGxldCBkYXRhTmV3Q29tcGFyZSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpbmRleCBpbiBkYXRhVG9Db21wYXJlKSB7XHJcbiAgICAgICAgaWYgKGRhdGFUb0NvbXBhcmVbaW5kZXhdLmlkICE9PSBkYXRhQ29tcGFyZS5pZCkge1xyXG4gICAgICAgICAgZGF0YU5ld0NvbXBhcmUucHVzaChkYXRhVG9Db21wYXJlW2luZGV4XSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YU5ld0NvbXBhcmUpKTtcclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IHVwZGF0ZUNvbXBhcmVEYXRhID0gKGRhdGE6IENvbXBhcmVEYXRhUHJvcHMpID0+IHtcclxuICAgIGxldCBkYXRhVG9Db21wYXJlID0gW107XHJcbiAgICBsZXQgaXNBZGRUb0xvY2FsID0gdHJ1ZTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5KSAmJiAhVmFsaWRhdG9yLmlzQmxhbmsobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSkpKSB7XHJcbiAgICAgIGRhdGFUb0NvbXBhcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkpIGFzIHN0cmluZyk7XHJcbiAgICAgIGZvciAobGV0IGluZGV4IGluIGRhdGFUb0NvbXBhcmUpIHtcclxuICAgICAgICBpZiAoZGF0YVRvQ29tcGFyZVtpbmRleF0uaWQgPT09IGRhdGEuaWQpIHtcclxuICAgICAgICAgIGlzQWRkVG9Mb2NhbCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YVRvQ29tcGFyZVtpbmRleF0udHlwZSAhPT0gZGF0YS50eXBlKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5KTtcclxuICAgICAgICAgIGRhdGFUb0NvbXBhcmUgPSBbXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHNjcmVlbldpZHRoID0gc2NyZWVuLndpZHRoO1xyXG4gICAgaWYgKGRhdGFUb0NvbXBhcmUgJiYgZGF0YVRvQ29tcGFyZS5sZW5ndGggJiYgZGF0YVRvQ29tcGFyZS5sZW5ndGggPj0gNCAmJiBzY3JlZW5XaWR0aCA+IDU5OSkge1xyXG4gICAgICBhbGVydChcIktow7RuZyB0aOG7gyBzbyBzw6FuaCBxdcOhIDQgc+G6o24gcGjhuqltIVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGFUb0NvbXBhcmUgJiYgZGF0YVRvQ29tcGFyZS5sZW5ndGggJiYgZGF0YVRvQ29tcGFyZS5sZW5ndGggPj0gMiAmJiBzY3JlZW5XaWR0aCA8PSA1OTkpIHtcclxuICAgICAgYWxlcnQoXCJLaMO0bmcgdGjhu4Mgc28gc8OhbmggcXXDoSAyIHPhuqNuIHBo4bqpbSFcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChpc0FkZFRvTG9jYWwpIHtcclxuICAgICAgZGF0YVRvQ29tcGFyZS5wdXNoKGRhdGEpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5LCBKU09OLnN0cmluZ2lmeShkYXRhVG9Db21wYXJlKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBsZXQgbGlua0hyZWYgPSAnJztcclxuICBsZXQgbGlua0FzID0gJyc7XHJcbiAgaWYgKHByb3BzLmRhdGFHaXJkLnBhdGggPT09ICcvZHUtYW4vJykge1xyXG4gICAgbGlua0hyZWYgPSAnL2R1LWFuL1tzbHVnXSc7XHJcbiAgICBsaW5rQXMgPSAnL2R1LWFuLycgKyBwcm9wcy5kYXRhR2lyZC5zbHVnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsaW5rSHJlZiA9ICcvdGluLXJhby9bc2x1Z10nO1xyXG4gICAgbGlua0FzID0gJy90aW4tcmFvLycgKyBwcm9wcy5kYXRhR2lyZC5zbHVnO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tMaWtlID0gKCkgPT4ge1xyXG4gICAgaWYgKGxpa2VTdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TGlrZVN0YXR1cyh0cnVlKTtcclxuICAgIH1cclxuICAgIGlmIChwcm9wcy5kYXRhR2lyZC5wYXRoICE9PSAnL2R1LWFuLycpIHtcclxuICAgICAgaGFuZGxlVHJhY2tpbmcoJ2xpa2UnKTtcclxuICAgICAgYXBvbGxvQ2xpZW50Lm11dGF0ZSh7bXV0YXRpb246IEFERF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVCwgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBcImlucHV0XCIgOiB7XHJcbiAgICAgICAgICAgIFwiYWRfc2VsbF9sZWFzZV9pZFwiOiBwcm9wcy5kYXRhR2lyZC5pZCxcclxuICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJsaWtlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fSkudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwb2xsb0NsaWVudC5tdXRhdGUoe211dGF0aW9uOiBBRERfUFJPSkVDVF9XSVNIX0xJU1QsIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgXCJpbnB1dFwiOiB7XHJcbiAgICAgICAgICAgIFwicHJvamVjdF9pZFwiOiBwcm9wcy5kYXRhR2lyZC5pZCxcclxuICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJsaWtlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fSkudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgY29tcG9uZW50c0l0ZW0gPSAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPXtwcm9wcy5ncmlkID8gXCJjb2x1bW5cIiA6IFwicm93XCJ9IHNwYWNpbmc9ezB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJncmlkX19saXN0X19pdGVtIHUtbWFyZ2luLWJvdHRvbS1zbWFsbFwiPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgPExpbmsgaHJlZj17bGlua0hyZWZ9IGFzPXtsaW5rQXN9PjxhPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19saXN0X19pdGVtX19pbWcgYmFja2dyb3VuZCBibG9ja19mbG9hdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2dyaWRfX2xpc3RfX2l0ZW1fX2ltZ19fZGF0ZSd9PjxDYWxlbmRhclRvZGF5Lz48TW9tZW50IHVuaXggZm9ybWF0PVwiREQvTU0vWVlZWVwiPlxyXG4gICAgICAgICAgICAgIHtOdW1iZXIocHJvcHMuZGF0YUdpcmQuY3JlYXRlZF9hdCkvMTAwMH08L01vbWVudD48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZ3JpZF9fbGlzdF9faXRlbV9faW1nX19mYXZvcml0ZSd9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrTGlrZX0+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlrZVN0YXR1cyAmJlxyXG4gICAgICAgICAgICAgICAgPEZhdm9yaXRlSWNvbi8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFsaWtlU3RhdHVzICYmXHJcbiAgICAgICAgICAgICAgICA8RmF2b3JpdGVCb3JkZXJJY29uLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuZGF0YUdpcmQuaW1hZ2UgJiYgcHJvcHMuZGF0YUdpcmQuaW1hZ2UgIT09ICdudWxsJyAmJiBwcm9wcy5kYXRhR2lyZC5pbWFnZSAhPT0gJycgJiZcclxuICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuZGF0YUdpcmQuaW1hZ2V9IGFsdD17cHJvcHMuZGF0YUdpcmQudGl0bGV9Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgKCFwcm9wcy5kYXRhR2lyZC5pbWFnZSB8fCBwcm9wcy5kYXRhR2lyZC5pbWFnZSA9PT0gJ251bGwnIHx8IHByb3BzLmRhdGFHaXJkLmltYWdlID09PSAnJykgJiZcclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9ob21lX2RlZmF1bHQuanBnXCIgYWx0PXtwcm9wcy5kYXRhR2lyZC50aXRsZX0vPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICA8R3JpZCBjbGFzc05hbWU9XCJncmlkX19saXN0X19pdGVtX19jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2xpc3RfX2l0ZW1fX2NvbnRlbnRfX3RpdGxlIHUtZmxleFNwYWNlQmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtsaW5rSHJlZn0gYXM9e2xpbmtBc30+PGE+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19saXN0X19pdGVtX19jb250ZW50X190aXRsZV9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+e3Byb3BzLmRhdGFHaXJkLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19saXN0X19pdGVtX19jb250ZW50X19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICB7cHJvcHMuZGF0YUdpcmQuYWRkcmVzc31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9wcy5kYXRhR2lyZC5hcmVhICYmIHByb3BzLmRhdGFHaXJkLmFyZWEgIT0gXCIwXCIgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19saXN0X19pdGVtX19jb250ZW50X19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIERp4buHbiB0w61jaDoge3Byb3BzLmRhdGFHaXJkLmFyZWF9IG08c3VwPjI8L3N1cD4gLSAgTMaw4bujdCB4ZW06IHtwcm9wcy5kYXRhR2lyZC52aWV3X2NvdW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgKCFwcm9wcy5kYXRhR2lyZC5hcmVhIHx8IHByb3BzLmRhdGFHaXJkLmFyZWEgPT0gXCIwXCIpICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fbGlzdF9faXRlbV9fY29udGVudF9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICBEaeG7h24gdMOtY2g6IMSQYW5nIGPhuq1wIG5o4bqtdCAtICBMxrDhu6N0IHhlbToge3Byb3BzLmRhdGFHaXJkLnZpZXdfY291bnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19saXN0X19pdGVtX19jb250ZW50X19wcmljZVwiPnsocHJvcHMuZGF0YUdpcmQucHJpY2UgJiYgcHJvcHMuZGF0YUdpcmQucHJpY2UgIT09ICcwJyAmJiBwcm9wcy5kYXRhR2lyZC5wcmljZSAhPT0gJzAgJyAmJiBwcm9wcy5kYXRhR2lyZC5wcmljZSAhPT0gJzAgxJHhu5NuZycpP3Byb3BzLmRhdGFHaXJkLnByaWNlOidHacOhOiBMacOqbiBo4buHJ308L2Rpdj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgIXN0YXR1c0NvbXBhcmUgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19saXN0X19pdGVtX19jb250ZW50X19jb21wYXJlXCIgb25DbGljaz17KCkgPT4gY2xpY2tBZGRUb0NvbXBhcmUoKX0+XHJcbiAgICAgICAgICAgICAgU08gU8OBTkhcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0YXR1c0NvbXBhcmUgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19saXN0X19pdGVtX19jb250ZW50X19jb21wYXJlXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tSZW1vdmVDb21wYXJlKGRhdGFQcmVwYXJlKX0+XHJcbiAgICAgICAgICAgICAgSFXhu7ZcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgaXRlbVxyXG4gICAgICB4bD17cHJvcHMuZ3JpZC54bH1cclxuICAgICAgbGc9e3Byb3BzLmdyaWQubGd9XHJcbiAgICAgIG1kPXtwcm9wcy5ncmlkLm1kfVxyXG4gICAgICBzbT17cHJvcHMuZ3JpZC5zbX1cclxuICAgICAgeHM9e3Byb3BzLmdyaWQueHN9XHJcbiAgICA+XHJcbiAgICAgIHtjb21wb25lbnRzSXRlbX1cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JpZEl0ZW1BU0w7XHJcbiIsImltcG9ydCBSZWFjdCwge0Z1bmN0aW9uQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbnRlcmZhY2UgVGl0bGVCbG9ja1Byb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHR5cGU6IFwiaDFcIiB8IFwiaDJcIiB8IFwiaDNcIjtcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgaHJlZj86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBUaXRsZUJsb2NrOiBGdW5jdGlvbkNvbXBvbmVudDxUaXRsZUJsb2NrUHJvcHM+ID0gKHByb3BzOiBUaXRsZUJsb2NrUHJvcHMpID0+IHtcclxuICBsZXQgZG9tVGl0bGUgPSAoPD48Lz4pO1xyXG4gIGlmIChwcm9wcy50eXBlID09PSBcImgxXCIpIHtcclxuICAgIGRvbVRpdGxlID0gKDxoMSBjbGFzc05hbWU9XCJ0aXRsZV9ibG9ja19fYmlnX3RpdGxlXCI+e3Byb3BzLnRpdGxlfTwvaDE+KTtcclxuICB9XHJcbiAgaWYgKHByb3BzLnR5cGUgPT09IFwiaDJcIikge1xyXG4gICAgZG9tVGl0bGUgPSAoPGgyIGNsYXNzTmFtZT1cInRpdGxlX2Jsb2NrX19iaWdfdGl0bGVcIj57cHJvcHMudGl0bGV9PC9oMj4pO1xyXG4gIH1cclxuICBpZiAocHJvcHMudHlwZSA9PT0gXCJoM1wiKSB7XHJcbiAgICBkb21UaXRsZSA9ICg8aDIgY2xhc3NOYW1lPVwidGl0bGVfYmxvY2tfX2JpZ190aXRsZVwiPntwcm9wcy50aXRsZX08L2gyPik7XHJcbiAgfVxyXG4gIGxldCBkb21CbG9ja1RpdGxlID0gKDw+PC8+KTtcclxuICBpZiAocHJvcHMucGF0aC5pbmRleE9mKCdodHRwczovLycpICE9PSAtMSkge1xyXG4gICAgZG9tQmxvY2tUaXRsZSA9IChcclxuICAgICAgPGEgaHJlZj17cHJvcHMucGF0aH0+XHJcbiAgICAgICAge2RvbVRpdGxlfVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAocHJvcHMucGF0aCA9PT0gJycpIHtcclxuICAgIGRvbUJsb2NrVGl0bGUgPSBkb21UaXRsZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9tQmxvY2tUaXRsZSA9IChcclxuICAgICAgPExpbmsgaHJlZj17cHJvcHMuaHJlZj9wcm9wcy5ocmVmOnByb3BzLnBhdGh9IGFzPXtTdHJpbmcocHJvcHMucGF0aCl9PlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAge2RvbVRpdGxlfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfSBpdGVtIHhzPXsxMn0gZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBjbGFzc05hbWU9XCJ0aXRsZV9ibG9ja1wiPlxyXG4gICAgICB7ZG9tQmxvY2tUaXRsZX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZV9ibG9ja19fYmlnX2Rlc2NyaXB0aW9uXCI+e3Byb3BzLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZUJsb2NrO1xyXG4iLCJpbXBvcnQge05leHRQYWdlfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7bWFpblVSTH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IEVycm9yUGFnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvRXJyb3JQYWdlXCI7XHJcbmltcG9ydCBUaXRsZUJsb2NrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0luZGV4L1RpdGxlQmxvY2tcIjtcclxuaW1wb3J0IExvYWRpbmdQYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Rpc3BsYXkvTG9hZGluZ1BhZ2VcIjtcclxuaW1wb3J0IEdyaWRBZFNlbGxMZWFzZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JpZExpc3QvR3JpZEFkU2VsbExlYXNlc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQge2Fwb2xsb0NsaWVudH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCB7SE9NRV9HRVRfQURfU0VMTF9MRUFTRVN9IGZyb20gXCIuLi8uLi9ncmFwaHFsL2FkX3NlbGxfbGVhc2VzL3F1ZXJpZXNcIjtcclxuaW1wb3J0IFZhbGlkYXRvciBmcm9tIFwiLi4vLi4vbW9kdWxlcy92YWxpZGF0b3JcIjtcclxuaW1wb3J0IHtBZFNlbGxMZWFzZXNMaXN0UHJvcHN9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW50ZXJmYWNlJztcclxuXHJcbmludGVyZmFjZSBFcnJvclBhZ2VQcm9wcyB7XHJcbiAgc3RhdHVzQ29kZTogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IEVycm9yTWFpblBhZ2U6IE5leHRQYWdlPEVycm9yUGFnZVByb3BzPiA9IChwcm9wczogRXJyb3JQYWdlUHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhcIlBBR0UgRVJST1JcIik7XHJcbiAgbGV0IHBhZ2VUaXRsZSA9ICfEkMOjIHjhuqN5IHJhIGzhu5dpLCB2dWkgbMOybmcgdGjhu60gbOG6oWknO1xyXG4gIGxldCBwYWdlRGVzY3JpcHRpb24gPSAnSGnhu4duIMSRw6MgeOG6o3kgcmEgbOG7l2ksIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUnO1xyXG4gIGNvbnN0IFtkYXRhQWRTZWxsTGVhc2VzLCBzZXREYXRhQWRTZWxsTGVhc2VdID0gUmVhY3QudXNlU3RhdGU8QWRTZWxsTGVhc2VzTGlzdFByb3BzW10+KFtdKTtcclxuICBjb25zdCBbc3RhdHVzTG9hZGluZ0FkU2VsbExlYXNlLCBzZXRTdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2VdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICAgIHF1ZXJ5OiBIT01FX0dFVF9BRF9TRUxMX0xFQVNFUywgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgXCJwYWdlXCI6IDEsXHJcbiAgICAgICAgXCJsaW1pdFwiOiA4LFxyXG4gICAgICAgIFwiZmlsdGVyXCI6IFwiJ3t9J1wiXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBzZXRTdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2UoZmFsc2UpO1xyXG4gICAgICBpZiAoIVZhbGlkYXRvci5pc0JsYW5rKHJlc3BvbnNlLmRhdGEpICYmICFWYWxpZGF0b3IuaXNCbGFuayhyZXNwb25zZS5kYXRhLmFkU2VsbExlYXNlcy5lZGdlcykpIHtcclxuICAgICAgICBzZXREYXRhQWRTZWxsTGVhc2UocmVzcG9uc2UuZGF0YS5hZFNlbGxMZWFzZXMuZWRnZXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRcclxuICAgICAgdGl0bGU9e3BhZ2VUaXRsZX1cclxuICAgICAgZGVzY3JpcHRpb249e3BhZ2VEZXNjcmlwdGlvbn1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBjYW5vbmljYWw9eyBtYWluVVJMIH1cclxuICAgICAgcGF0aD17Jyd9XHJcbiAgICA+XHJcbiAgICAgIDxFcnJvclBhZ2UvPlxyXG4gICAgICA8VGl0bGVCbG9jayB0aXRsZT1cIlRpbiByYW8gcGjDuSBo4bujcCB24bubaSBi4bqhblwiIGRlc2NyaXB0aW9uPVwiWGVtIHRow6ptIG3hu5l0IHPhu5EgdGluIHJhbyBwaMO5IGjhu6NwIHbhu5tpIGLhuqFuXCIgcGF0aD17XCIvdGltLXRpbi1yYW9cIn0gdHlwZT17XCJoMlwifS8+XHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2UgJiZcclxuICAgICAgICA8TG9hZGluZ1BhZ2UgY2xhc3NOYW1lPVwibG9hZGluZ19wYWdlXCIgZ3JpZD17e3hsOiAzLCBsZzogMywgbWQ6IDQsIHNtOiA2LCB4czoxMn19IG51bWJlckxpbWl0PXs4fS8+XHJcbiAgICAgIH1cclxuICAgICAge1xyXG4gICAgICAgICFzdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2UgJiZcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEdyaWRBZFNlbGxMZWFzZXMgZ3JpZD17e3hsOiAzLCBsZzogMywgbWQ6IDQsIHNtOiA2LCB4czoxMn19IGdyaWREYXRhPXtkYXRhQWRTZWxsTGVhc2VzfSBjbGFzc05hbWU9XCJncmlkX19saXN0XCIvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2luZGV4X2J1dHRvblwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1tzbHVnXVwiIGFzPXsnL3RpbS10aW4tcmFvJ30+PEJ1dHRvbj5YZW0gdGjDqm08L0J1dHRvbj48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIH1cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbkVycm9yTWFpblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVzLCBlcnIgfSkgPT4ge1xyXG4gIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0XHJcbiAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvck1haW5QYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtGdW5jdGlvbkNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCB7TGlzdEl0ZW0sIExpc3RJdGVtSWNvbiwgTGlzdEl0ZW1UZXh0LCBQb3BvdmVyLCBUeXBvZ3JhcGh5fSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEVjb0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FY29cIjtcclxuaW1wb3J0IFZpZXdMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld0xpc3RcIjtcclxuaW1wb3J0IElucHV0QmFzZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlXCI7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmludGVyZmFjZSBFcnJvclBhZ2VQcm9wcyB7XHJcbn1cclxuXHJcbmNvbnN0IEVycm9yUGFnZVByb3BzOiBGdW5jdGlvbkNvbXBvbmVudDxFcnJvclBhZ2VQcm9wcz4gPSAocHJvcHM6IEVycm9yUGFnZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgZHJvcGRvd25TZWFyY2ggPSBbXHJcbiAgICB7dHlwZTogJ2R1LWFuLWJhdC1kb25nLXNhbicsIG5hbWU6ICdE4buxIMOhbid9LFxyXG4gICAge3R5cGU6ICd0aW0tdGluLXJhbycsIG5hbWU6ICdUaW4gcmFvJ30sXHJcbiAgXTtcclxuXHJcbiAgbGV0IHNlYXJjaEhvbWVCb2R5VGl0bGUgPSAnTuG7mWkgdGjhuqV0IERvZG8gLSBHaWFvIGThu4tjaCBraeG7g3UgbeG7m2knO1xyXG4gIGxldCBzZWFyY2hIb21lQm9keURlc2NyaXB0aW9uID0gJ1TDrG06IE5ow6AgcmnDqm5nLCBDaHVuZyBjxrAsIEJp4buHdCB0aOG7sSwgxJDhuqV0IG7hu4FuLCDEkOG6pXQgdGjhu5UgY8awJztcclxuICBsZXQgc2VhcmNoSG9tZUJvZHlFeGFtcGxlID0gJ1bDrSBk4bulOiBIw6AgTuG7mWksIMSQw6AgTuG6tW5nLCBUaMOgbmggUGjhu5EgSOG7kyBDaMOtIE1pbmgnO1xyXG4gIGxldCBwbGFjZWhvbGRlclNlYXJjaCA9ICdOaOG6rXAgdGjDtG5nIHRpbiB0w6xtIGtp4bq/bS4uLic7XHJcblxyXG4gIGNvbnN0IFt0eXBlU2VhcmNoLCBzZXRUeXBlXSA9IFJlYWN0LnVzZVN0YXRlKGRyb3Bkb3duU2VhcmNoWzBdKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUeXBlID0gKGlucHV0VHlwZToge3R5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nfSkgPT4ge1xyXG4gICAgc2V0VHlwZShpbnB1dFR5cGUpO1xyXG4gICAgaGFuZGxlQ2xvc2VTZWFyY2hUeXBlKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2tleXdvcmRTZWFyY2gsIHNldEtleXdvcmRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVTZWFyY2gudHlwZSA9PT0gJ3RpbS10aW4tcmFvJykge1xyXG4gICAgICBsZXQgdXJsUHJvY2VzcyA9IHsgcGF0aG5hbWU6ICcvW3NsdWddJywgcXVlcnk6IHsgdGl0bGU6IGtleXdvcmRTZWFyY2ggfSB9XHJcbiAgICAgIGxldCBzbHVnQXMgPSAnL3RpbS10aW4tcmFvP3RpdGxlPScgKyBrZXl3b3JkU2VhcmNoO1xyXG4gICAgICBSb3V0ZXIucHVzaCh1cmxQcm9jZXNzLCBzbHVnQXMsIHsgc2hhbGxvdzogZmFsc2UgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgdXJsUHJvY2VzcyA9IHsgcGF0aG5hbWU6ICcvZHUtYW4tYmF0LWRvbmctc2FuJywgcXVlcnk6IHsgbmFtZToga2V5d29yZFNlYXJjaCB9IH1cclxuICAgICAgbGV0IHNsdWdBcyA9ICcvZHUtYW4tYmF0LWRvbmctc2FuP25hbWU9JyArIGtleXdvcmRTZWFyY2g7XHJcbiAgICAgIFJvdXRlci5wdXNoKHVybFByb2Nlc3MsIHNsdWdBcywgeyBzaGFsbG93OiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVdhcmRzID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIHNldEtleXdvcmRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChldmVudC5rZXkgPT0gXCJFbnRlclwiIHx8IGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgb25DbGlja1NlYXJjaCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFthbmNob3JFbFNlYXJjaFR5cGUsIHNldEFuY2hvckVsU2VhcmNoVHlwZV0gPSBSZWFjdC51c2VTdGF0ZTxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrU2VhcmNoVHlwZSA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIHNldEFuY2hvckVsU2VhcmNoVHlwZShldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZVNlYXJjaFR5cGUgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbFNlYXJjaFR5cGUobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3BlblNlYXJjaFR5cGUgPSBCb29sZWFuKGFuY2hvckVsU2VhcmNoVHlwZSk7XHJcbiAgY29uc3QgaWQgPSBvcGVuU2VhcmNoVHlwZSA/ICdzaW1wbGUtcG9wb3ZlcicgOiB1bmRlZmluZWQ7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29udGFpbmVyLWJpZyBlcnJvcl9wYWdlJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydlcnJvcl9wYWdlX19pbWFnZSd9PlxyXG4gICAgICAgICAgPGltZyBzcmM9eydodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvZXJyb3ItaW1hZ2Uuc3ZnJ30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Vycm9yX3BhZ2VfX3RpdGxlJ30+XHJcbiAgICAgICAgICDEkMODIFjhuqJZIFJBIEzhu5ZJLCBWVUkgTMOSTkcgVEjhu6wgTOG6oElcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGl0ZW0geHM9ezEyfSBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHMgY2xhc3NOYW1lPVwiZXJyb3JfcGFnZV9fc2VhcmNoXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX2hvbWVwYWdlX19ib2R5X19ib3hcIj5cclxuICAgICAgICAgICAgICA8SGlkZGVuIHhzRG93bj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX2hvbWVwYWdlX19ib2R5X19ib3hfX3NlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrU2VhcmNoVHlwZX0gYXJpYS1kZXNjcmliZWRieT17aWR9ID5cclxuICAgICAgICAgICAgICAgICAgICB7dHlwZVNlYXJjaC5uYW1lfTxzdmcgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNDMgMzUyLjNMNyAyMTYuM2MtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsMjIuNi0yMi42YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDk2LjQgOTYuNCA5Ni40LTk2LjRjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMjIuNiAyMi42YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45bC0xMzYgMTM2Yy05LjIgOS40LTI0LjQgOS40LTMzLjggMHpcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17b3BlblNlYXJjaFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsU2VhcmNoVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVNlYXJjaFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hfaG9tZXBhZ2VfX2JvZHlfX2JveF9fc2VsZWN0X19wb3B1cFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9eydzcGFuJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IGhhbmRsZUNoYW5nZVR5cGUoZHJvcGRvd25TZWFyY2hbMF0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RWNvSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2Ryb3Bkb3duU2VhcmNoWzBdLm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IGhhbmRsZUNoYW5nZVR5cGUoZHJvcGRvd25TZWFyY2hbMV0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld0xpc3QvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkcm9wZG93blNlYXJjaFsxXS5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hfaG9tZXBhZ2VfX2JvZHlfYm94X2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaF9ob21lcGFnZV9fYm9keV9ib3hfaW5wdXRfYmFzZVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlclNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eydhcmlhLWxhYmVsJzogcGxhY2Vob2xkZXJTZWFyY2h9fVxyXG4gICAgICAgICAgICAgICAgICBvbktleVVwPXtlID0+IG9uQ2hhbmdlV2FyZHMoZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwic2VhcmNoX2hvbWVwYWdlX19ib2R5X2JveF9idXR0b25cIiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtvbkNsaWNrU2VhcmNofT5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uLz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlUHJvcHM7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgUGhvbmVJcGhvbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG9uZUlwaG9uZVwiO1xyXG5pbXBvcnQgRW1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRW1haWxcIjtcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0Z1bmN0aW9uQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgSUZvb3RlclByb3BzIHtcclxuXHJcbn1cclxuY29uc3QgRm9vdGVyUGFnZTogRnVuY3Rpb25Db21wb25lbnQ8SUZvb3RlclByb3BzPiA9IChwcm9wczogSUZvb3RlclByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJmb290ZXJcIiBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5XCJcclxuICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSBzbT17MTJ9IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtIGJvcmRlcl9ib3R0b21fbW9iaWxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fdGl0bGVcIj5cclxuICAgICAgICAgICAgICBDw5RORyBUWSBD4buUIFBI4bqmTiBO4buYSSBUSOG6pFQgRE9ET1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTE3Mi4yNjggNTAxLjY3QzI2Ljk3IDI5MS4wMzEgMCAyNjkuNDEzIDAgMTkyIDAgODUuOTYxIDg1Ljk2MSAwIDE5MiAwczE5MiA4NS45NjEgMTkyIDE5MmMwIDc3LjQxMy0yNi45NyA5OS4wMzEtMTcyLjI2OCAzMDkuNjctOS41MzUgMTMuNzc0LTI5LjkzIDEzLjc3My0zOS40NjQgMHpNMTkyIDI3MmM0NC4xODMgMCA4MC0zNS44MTcgODAtODBzLTM1LjgxNy04MC04MC04MC04MCAzNS44MTctODAgODAgMzUuODE3IDgwIDgwIDgwelwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dF90aXRsZVwiPsSQ4buLYSBjaOG7iTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICBT4buRIDEyIEtodeG6pXQgRHV5IFRp4bq/biwgVGhhbmggWHXDom4sIEjDoCBO4buZaVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPFBob25lSXBob25lLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRfdGl0bGVcIj7EkGnhu4duIHRob+G6oWk8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl90ZXh0X2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgMDM3NyA1MzUgNzE3XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl9pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8RW1haWxJY29uLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRfdGl0bGVcIj5FLW1haWw8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl90ZXh0X2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgbm9pdGhhdGRvZG9AZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2JyYW5jaFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ292XCIgc3JjPVwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L2JvY29uZ3RodW9uZy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgYWx0PVwixJDDoyB0aMO0bmcgYsOhbyB24bubaSBC4buZIEPDtG5nIFRoxrDGoW5nXCIvPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL3d3dy5kbWNhLmNvbS9Qcm90ZWN0aW9uL1N0YXR1cy5hc3B4P0lEPTc4MTY2MDVkLWZiZDItNDVmOC1hMzk3LWVlYWM0MjY0MmI3NSZyZWZ1cmw9aHR0cHM6Ly9uaGFkYXRtb2kubmV0Lyd9IHRhcmdldD17J19ibGFuayd9IHJlbD17J25vZm9sbG93J30gPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvZG1jYS5wbmdcIiBhbHQ9XCJETUNBXCIgY2xhc3NOYW1lPVwiZG1jYVwiLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBtZD17OH0gc209ezEyfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9IHhzPXs2fSBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICBDw7RuZyB0eVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvYWJvdXQtdXMnfSBhcz17Jy9hYm91dC11cyd9PjxhPlbhu4EgQuG6pXQgxJDhu5luZyBT4bqjbiBN4bubaTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vaGVscC5uaGFkYXRtb2kubmV0L3R1eWVuLWR1bmcnfSByZWw9eydub2ZvbGxvdyd9PlR1eeG7g24gZOG7pW5nPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL2hlbHAubmhhZGF0bW9pLm5ldC9saWVuLWhlL3Rob25nLXRpbi1saWVuLWhlJ30gcmVsPXsnbm9mb2xsb3cnfT5UaMO0bmcgdGluIGxpw6puIGjhu4c8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9zaXRlbWFwJ30gYXM9eycvc2l0ZW1hcCd9PjxhPlNpdGVtYXA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9IHhzPXs2fSBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICDEkGnhu4F1IGtob+G6o25cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly9oZWxwLm5oYWRhdG1vaS5uZXQvZGlldS1raG9hbi9xdXktY2hlLWhvYXQtZG9uZyd9IHJlbD17J25vZm9sbG93J30+UXV5IGNo4bq/IGhv4bqhdCDEkeG7mW5nPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL2hlbHAubmhhZGF0bW9pLm5ldC9kaWV1LWtob2FuL2NoaW5oLXNhY2gtYmFvLW1hdCd9IHJlbD17J25vZm9sbG93J30+Q2jDrW5oIHPDoWNoIGLhuqNvIG3huq10PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL2hlbHAubmhhZGF0bW9pLm5ldC9kaWV1LWtob2FuL2NoaW5oLXNhY2gtY29va2llJ30gcmVsPXsnbm9mb2xsb3cnfT5DaMOtbmggc8OhY2ggQ29va2llPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL2hlbHAubmhhZGF0bW9pLm5ldC9kaWV1LWtob2FuL2RpZXUta2hvYW4tc3UtZHVuZyd9IHJlbD17J25vZm9sbG93J30+xJBp4buBdSBraG/huqNuIHPhu60gZOG7pW5nPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9IHhzPXs2fSBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICBUaMO0bmcgdGluXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vbmhhZGF0bW9pLm5ldC90aW4tdHVjL3Rpbi10dWMnfT5UaW4gdOG7qWMgdGjhu4sgdHLGsOG7nW5nPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL25oYWRhdG1vaS5uZXQvdGluLXR1Yy9ibG9nJ30+QsOhbyBjw6FvICYgUGjDom4gdMOtY2g8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vbmhhZGF0bW9pLm5ldC90aW4tdHVjL2tpZW4tdGh1Yy1tb2ktZ2lvaSd9Pktp4bq/biB0aOG7qWMgY2hvIG3DtGkgZ2nhu5tpPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL2hlbHAubmhhZGF0bW9pLm5ldC9odW9uZy1kYW4nfSByZWw9eydub2ZvbGxvdyd9PkjGsOG7m25nIGThuqtuIHPhu60gZOG7pW5nPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9IHhzPXs2fSBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICBN4bqhbmcgeMOjIGjhu5lpXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9uaGFkYXRtb2kubmV0Lyd9IHJlbD17J25vZm9sbG93J30gdGFyZ2V0PXsnX2JsYW5rJ30+RmFjZWJvb2s8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNDdmxPRDd2VFBKZVlSWThJcklOZ3VRJ30gcmVsPXsnbm9mb2xsb3cnfSB0YXJnZXQ9eydfYmxhbmsnfT5Zb3V0dWJlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL3R3aXR0ZXIuY29tL25oYWRhdG1vaSd9IHJlbD17J25vZm9sbG93J30gdGFyZ2V0PXsnX2JsYW5rJ30+VHdpdHRlcjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL25oYWRhdG1vaS8nfSByZWw9eydub2ZvbGxvdyd9IHRhcmdldD17J19ibGFuayd9PkxpbmtlZEluPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0gY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2FwcHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2FwcHNfdGl0bGVcIj5QaMawxqFuZyB0aOG7qWMgdGhhbmggdG/DoW48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2FwcHNfcGF5bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC92aXNhLnBuZ1wiIGFsdD1cIlZpc2FcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L21hc3RlcmNhcmQucG5nXCIgYWx0PVwiTWFzdGVyY2FyZFwiLz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvYXRtLnBuZ1wiIGFsdD1cIkFUTVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19hcHBzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19hcHBzX3RpdGxlXCI+4buobmcgZOG7pW5nIGRpIMSR4buZbmc8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2FwcHNfcGF5bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5vX2JvcmRlclwiIHNyYz1cImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9hcHBsZS1zdG9yZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkFwcGxlIFN0b3JlXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5vX2JvcmRlclwiIHNyYz1cImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9nb29nbGUtcGxheS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkdvb2dsZSBQbGF5XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlclBhZ2VcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdCc7XHJcbmltcG9ydCBHcmlkTGlzdFRpbGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlJztcclxuaW1wb3J0IEdyaWRMaXN0VGlsZUJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGVCYXInO1xyXG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyJztcclxuaW1wb3J0IEluZm9JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbmZvJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXMnO1xyXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAncmVhY3QtcmVkdXgtaTE4bic7XHJcbmltcG9ydCB7XHJcbiAgSWNvbkJ1dHRvbixcclxuICBJY29uLFxyXG4gIFRvb2x0aXAsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgR3JpZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIEFwcEJhcixcclxuICBUb29sYmFyLFxyXG4gIEhpZGRlbixcclxuICBQb3BvdmVyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuaW1wb3J0IFN0YXJCb3JkZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCB7IHRpdGxlcyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9pbmRleCc7XHJcbmltcG9ydCBHYW1lcGFkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR2FtZXBhZCc7XHJcbmltcG9ydCBNb2RhbExvZ2luIGZyb20gJy4uL0xvZ2luL01vZGFsJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiO1xyXG5pbXBvcnQgR3JvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3Jvd1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBQb3BwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcHBlclwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XHJcbmltcG9ydCBNZW51TGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3RcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3RQb3BvdmVyOiB7XHJcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTNmMmZkJyxcclxuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzkwY2FmOScsXHJcbiAgICB9XHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZGlzcGxheTogJ2lubGluZScsXHJcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgcGFkZGluZzogJzAgMTJweCcsXHJcbiAgICAvLyBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkIHdoaXRlJyxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgaGVpZ2h0OiA0MCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTk3NmQyJ1xyXG4gIH0sXHJcbiAgZGl2aWRlcjoge1xyXG4gICAgaGVpZ2h0OiAyOCxcclxuICAgIG1hcmdpbjogNCxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgZGlzcGxheTogJ2lubGluZScsXHJcbiAgfSxcclxuICB0ZXh0SXRlbToge1xyXG4gICAgY29sb3I6ICcjMTk3NmQyJyxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICAgIHBhZGRpbmdSaWdodDogMjAsXHJcbiAgfSxcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHpJbmRleDogOTk5OTk5ODg4ODg4ODg4ODgsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMilcclxuICB9XHJcbn0pKTtcclxuXHJcblxyXG5jb25zdCBBY3Rpb25zID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtjb3VudE1lbnUsIHNldENvdW50TWVudV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb3Blbk1lbnUsIHNldE9wZW5NZW51XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBhbmNob3JSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0T3Blbk1lbnUocHJldk9wZW4gPT4gIXByZXZPcGVuKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IGV2ZW50ID0+IHtcclxuICAgIGlmIChhbmNob3JSZWYuY3VycmVudCAmJiBhbmNob3JSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldE9wZW5NZW51KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVMaXN0S2V5RG93bihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIikge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZXRPcGVuTWVudShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm4gZm9jdXMgdG8gdGhlIGJ1dHRvbiB3aGVuIHdlIHRyYW5zaXRpb25lZCBmcm9tICFvcGVuIC0+IG9wZW5cclxuICBjb25zdCBwcmV2T3BlbiA9IFJlYWN0LnVzZVJlZihvcGVuTWVudSk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcmV2T3Blbi5jdXJyZW50ID09PSB0cnVlICYmIG9wZW5NZW51ID09PSBmYWxzZSkge1xyXG4gICAgICBhbmNob3JSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgcHJldk9wZW4uY3VycmVudCA9IG9wZW5NZW51O1xyXG4gIH0sIFtvcGVuTWVudV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9IGFsaWduSXRlbXM9J2NlbnRlcicganVzdGlmeT0nY2VudGVyJyBkaXJlY3Rpb249J3JvdycgPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj0naW5oZXJpdCdcclxuICAgICAgICAgIGFyaWEtb3ducz17b3Blbk1lbnUgPyAnbW91c2Utb3Zlci1wb3BvdmVyJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250V2VpZ2h0OiA1MDAsIHBhZGRpbmc6ICcwIDIwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdhbWVwYWRJY29uIHN0eWxlPXt7IHBhZGRpbmc6ICcwIDRweCcgfX0gLz4gTuG7mWkgVGjhuqV0IERvZG9cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHJlZj17YW5jaG9yUmVmfVxyXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtvcGVuTWVudSA/IFwibWVudS1saXN0LWdyb3dcIiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZVRvZ2dsZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgLy8gc3R5bGU9e3sgdGV4dERlY29yYXRpb246IGluZGV4T3BlbiA9PT0gaW5kZXggPyAndW5kZXJsaW5lICcgOiAnbm9uZScgfX1cclxuICAgICAgICAgIC8vIG9uTW91c2VMZWF2ZT17cG9wb3ZlckNsb3NlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8UG9wcGVyXHJcbiAgICAgICAgICAgIG9wZW49e29wZW5NZW51fVxyXG4gICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yUmVmLmN1cnJlbnR9XHJcbiAgICAgICAgICAgIHJvbGU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgdHJhbnNpdGlvblxyXG4gICAgICAgICAgICBkaXNhYmxlUG9ydGFsXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogOTk5OSB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7KHsgVHJhbnNpdGlvblByb3BzLCBwbGFjZW1lbnQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxHcm93XHJcbiAgICAgICAgICAgICAgICB7Li4uVHJhbnNpdGlvblByb3BzfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiBwbGFjZW1lbnQgPT09IFwiYm90dG9tXCIgPyBcImNlbnRlciB0b3BcIiA6IFwiY2VudGVyIGJvdHRvbVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyPlxyXG4gICAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c0l0ZW09e29wZW5NZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtZW51LWxpc3QtZ3Jvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUxpc3RLZXlEb3dufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+UHJvZmlsZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9Pk15IGFjY291bnQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Mb2dvdXQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvUG9wcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgIDxNb2RhbExvZ2luIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gXCIuLi8uLi9tb2R1bGVzL3ZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBnb29nbGVTZWFyY2hDb25zb2xlLCBsb2NhbFN0b3JhZ2VDb21wYXJlS2V5IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IExvZ28gPSByZXF1aXJlKFwiLi9sb2dvLnBuZ1wiKTtcclxuXHJcbmludGVyZmFjZSBMYXlvdXRQYWdlUHJvcHMge1xyXG4gIHRpdGxlPzogc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nLFxyXG4gIGltYWdlPzogc3RyaW5nLFxyXG4gIGNhbm9uaWNhbDogc3RyaW5nLFxyXG4gIHBhdGg6IHN0cmluZyxcclxuICBjaGlsZHJlbj86IGFueSxcclxuICB1c2VyPzoge1xyXG4gICAgZW1haWw6IHN0cmluZyxcclxuICAgIF9pZDogc3RyaW5nLFxyXG4gICAgZmlyc3RfbmFtZTogc3RyaW5nLFxyXG4gICAgbGFzdF9uYW1lOiBzdHJpbmcsXHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgYXZhdGFyOiBzdHJpbmdcclxuICB9LFxyXG4gIHVwZGF0ZU1vZGFsPzogKGRhdGE6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgc3RhdHVzTW9kYWw/OiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IExheW91dFBhZ2U6IEZ1bmN0aW9uQ29tcG9uZW50PExheW91dFBhZ2VQcm9wcz4gPSAocHJvcHM6IExheW91dFBhZ2VQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzdGF0dXNNb2RhbCwgc2V0TW9kYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHVwZGF0ZU1vZGFsID0gKGRhdGE6IGJvb2xlYW4pID0+IHtcclxuICAgIGlmICh0eXBlb2YgcHJvcHMudXBkYXRlTW9kYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgcHJvcHMudXBkYXRlTW9kYWwoZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRNb2RhbChkYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IFtkYXRhQ29tcGFyZUxvY2FsLCBzZXREYXRhQ29tcGFyZUxvY2FsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSkgJiYgIVZhbGlkYXRvci5pc0JsYW5rKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkpKSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldERhdGFDb21wYXJlTG9jYWwoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5KSBhcyBzdHJpbmcpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgbGV0IHNjaGVtYU9iamVjdCA9ICd7XCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLCBcIkB0eXBlXCI6IFwiTG9jYWxCdXNpbmVzc1wiLCBcIm5hbWVcIjogXCJC4bqldCDEkOG7mW5nIFPhuqNuIE7hu5lpIHRo4bqldCBEb2RvXCIsIFwiaW1hZ2VcIjogXCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvMTIzMDEyMDExMzg4NzUzMTAwOC9CUEg3NWJXMF80MDB4NDAwLmpwZ1wiLCBcImFkZGl0aW9uYWxUeXBlXCI6W1wiaHR0cHM6Ly92aS53aWtpcGVkaWEub3JnL3dpa2kvQiVFMSVCQSVBNXRfJUM0JTkxJUUxJUJCJTk5bmdfcyVFMSVCQSVBM25cIixcImh0dHBzOi8vdmkud2lraXBlZGlhLm9yZy93aWtpL00lQzMlQjRpX2dpJUUxJUJCJTlCaV9iJUUxJUJBJUE1dF8lQzQlOTElRTElQkIlOTluZ19zJUUxJUJBJUEzblwiLFwiaHR0cHM6Ly92aS53aWtpcGVkaWEub3JnL3dpa2kvTmclQzYlQjAlRTElQkIlOURpX20lQzMlQjRpX2dpJUUxJUJCJTlCaVwiXSwgXCJwYXltZW50QWNjZXB0ZWRcIjpcIkNhc2gsIFZpc2EsIE1hc3RlcmNhcmQsIEFtZXJpY2FuIEV4cHJlc3MsIERlYml0LCBQYXlQYWwsIEFwcGxlIFBheVwiLCBcIm1haW5FbnRpdHlPZlBhZ2VcIjpcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcz9jaWQ9NjI1NTA1NDkzODk2OTYyMDQ3NVwiLCBcImhhc21hcFwiOlwiaHR0cHM6Ly9zZWFyY2guZ29vZ2xlLmNvbS9sb2NhbC93cml0ZXJldmlldz9wbGFjZWlkPUNoSUotVUk2TWg1VE5ERVItel9XaDFOcnpsWVwiLCBcImRlc2NyaXB0aW9uXCI6XCJO4buZaSB0aOG6pXQgRG9kbyDEkcOzbiDEkeG6p3UgeHUgaMaw4bubbmcgYuG6pXQgxJHhu5luZyBz4bqjbiA0LjAgdOG6oWkgVmnhu4d0IE5hbSwgdMOtY2ggaOG7o3AgdHLDrSB0deG7hyBuaMOibiB04bqhbyDEkeG7gyB44butIGzDvSBjw6FjIGThu68gbGnhu4d1LCBwaMOibiB0w61jaCBuaHUgY+G6p3UgY+G7p2EgY+G6oyBuZ8aw4budaSBtdWEgbOG6q24gbmfGsOG7nWkgYsOhblwiLCBcIkBpZFwiOiBcImh0dHBzOi8vbmhhZGF0bW9pLm5ldC9cIiwgXCJ1cmxcIjogXCJodHRwczovL25oYWRhdG1vaS5uZXQvXCIsIFwidGVsZXBob25lXCI6IFwiMDM3NyA1MzUgNzE3XCIsIFwicHJpY2VSYW5nZVwiOiBcIjEwMDAgJFwiLCBcImFkZHJlc3NcIjogeyBcIkB0eXBlXCI6IFwiUG9zdGFsQWRkcmVzc1wiLCBcInN0cmVldEFkZHJlc3NcIjogXCJT4buRIDM0OCBU4buRIEjhu691LCBwaMaw4budbmcgTGEgS2jDqiwgcXXhuq1uIEjDoCDEkMO0bmdcIiwgXCJhZGRyZXNzTG9jYWxpdHlcIjogXCJIw6AgTuG7mWlcIiwgXCJwb3N0YWxDb2RlXCI6IFwiMTAwMDAwXCIsIFwiYWRkcmVzc0NvdW50cnlcIjogXCJWTlwifSwgXCJnZW9cIjogeyBcIkB0eXBlXCI6IFwiR2VvQ29vcmRpbmF0ZXNcIiwgXCJsYXRpdHVkZVwiOiAyMC45NzA5NDk2LCBcImxvbmdpdHVkZVwiOiAxMDUuNzUzMTYxNyB9LCBcIm9wZW5pbmdIb3Vyc1NwZWNpZmljYXRpb25cIjogeyBcIkB0eXBlXCI6IFwiT3BlbmluZ0hvdXJzU3BlY2lmaWNhdGlvblwiLFwiZGF5T2ZXZWVrXCI6IFsgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiLCBcIlN1bmRheVwiXSwgXCJvcGVuc1wiOiBcIjAwOjAwXCIsIFwiY2xvc2VzXCI6IFwiMjM6NTlcIiB9LCBcInNhbWVBc1wiOiBbXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDQ3ZsT0Q3dlRQSmVZUlk4SXJJTmd1UVwiLFwiaHR0cHM6Ly9iZHNuaGFkYXRtb2kuYmxvZ3Nwb3QuY29tXCIsIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL25oYWRhdG1vaS5uZXRcIiwgXCJodHRwczovL2Jkc25oYWRhdG1vaS5ibG9nc3BvdC5jb21cIiwgXCJodHRwczovL3ZpLmdyYXZhdGFyLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL2Jkc25oYWRhdG1vaS50dW1ibHIuY29tXCIsIFwiaHR0cHM6Ly9iZHNuaGFkYXRtb2kud2VlYmx5LmNvbVwiLCBcImh0dHBzOi8vdHdpdHRlci5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cucmVkZGl0LmNvbS91c2VyL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LmRpaWdvLmNvbS9wcm9maWxlL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LmFydGZpcmUuY29tL2V4dC9wZW9wbGUvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuc21hc2h3b3Jkcy5jb20vcHJvZmlsZS92aWV3L2Jkc25oYWRhdG1vaVwiLCBcImh0dHA6Ly9wbGF5LmZtL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3Lmxhc3QuZm0vdXNlci9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5zdHJhdmEuY29tL2F0aGxldGVzL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy50cmlwYWR2aXNvci5jb20udm4vUHJvZmlsZS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwOi8vYml0Lmx5LzJ1YVpQTG1cIiwgXCJodHRwczovL2dldHBvY2tldC5jb20vQGJkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LnBpbnRlcmVzdC5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LmZsaWNrci5jb20vcGVvcGxlL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vYWJvdXQubWUvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuaW5zdGFwYXBlci5jb20vcC9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5iZWhhbmNlLm5ldC9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL215c3BhY2UuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3Lmdvb2RyZWFkcy5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9kcmliYmJsZS5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuZGV2aWFudGFydC5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cucGx1cmsuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHA6Ly93d3cuZm9sa2QuY29tL3VzZXIvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cudGVkLmNvbS9wcm9maWxlcy8xOTAyNTk3N1wiLCBcImh0dHBzOi8va2luamEuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vZWxsby5jby9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL2NvdWIuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vbWl4LmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwOi8vd3d3LmF1dGhvcnN0cmVhbS5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL21lZGl1bS5jb20vQGJkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vY29kZXBlbi5pby9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5ldmVybm90ZS5jb20vcHViL25kbWgyNjkvdGludHVjXCIsIFwiaHR0cHM6Ly9kaXNxdXMuY29tL2J5L2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LnNjb29wLml0L3UvYi10LW5nLXMtbi1uaGEtdC1tLWlcIiwgXCJodHRwczovL3d3dy52aW5nbGUubmV0L2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LnF1b3JhLmNvbS9wcm9maWxlL0JhdC1Eb25nLVNhbi1OaGEtRGF0LU1vaVwiLCBcImh0dHBzOi8vYmRzbmhhZGF0bW9pLmxpdmVqb3VybmFsLmNvbVwiLCBcImh0dHBzOi8vYW5nZWwuY28vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cucHJvZHVjdGh1bnQuY29tL0BiZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3NwZWFrZXJkZWNrLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy53aWtpaG93LmNvbS9Vc2VyOkJkc25oYWRhdG1vaVwiLCBcImh0dHA6Ly9iZHNuaGFkYXRtb2kuYnJhbmR5b3Vyc2VsZi5jb21cIl19JztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwcm9wcy50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e3Byb3BzLmNhbm9uaWNhbH0gLz5cclxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj17TG9nb30gLz5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDQwMGksNTAwLDcwMCw5MDAmZGlzcGxheT1zd2FwJnN1YnNldD12aWV0bmFtZXNlXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PXtnb29nbGVTZWFyY2hDb25zb2xlfSAvPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICFWYWxpZGF0b3IuaXNCbGFuayhwcm9wcy5kZXNjcmlwdGlvbikgJiZcclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3Byb3BzLnRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBwcm9wZXJ0eT1cImZiOmFwcF9pZFwiIGNvbnRlbnQ9XCI5MzcyMzQzNjYzMzU1MDRcIiAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIHByb3BlcnR5PVwiZmI6YWRtaW5zXCIgY29udGVudD1cIjEwMDAwNDI0NDQ3NDAxM1wiIC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiTuG7mWkgdGjhuqV0IERvZG9cIiAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17cHJvcHMuY2Fub25pY2FsfSAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtwcm9wcy5pbWFnZX0gLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBuaGFkYXRtb2lcIiAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQG5oYWRhdG1vaVwiIC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtwcm9wcy50aXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17cHJvcHMuaW1hZ2V9IC8+XHJcbiAgICAgICAgPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2NoZW1hT2JqZWN0IH19ID5cclxuICAgICAgICA8L3NjcmlwdD5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUIwQUFBQWRDQVlBQUFCV2syY1BBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRHNNQUFBN0RBY2R2cUdRQUFBRFJTVVJCVkVoTDdaTXhDc0pBRUVXOWhxZlV5bFBrQkhvQjlRS0NscFoyNGdtMFVZU0FwZFhLRDFreTdueGpQaGhNc1E5ZXRWa2VtNTBkaFQrUW83MGlSWXZ0TlJTN20xTkZpbzVuUjZwS2psSllFS29NUDdvOGxDNDRXVjNxMWU2NEtIc1dpLzI5WG4wUDIrRG05SEQ3SU1ORjdTbXMwM1VUUU5nRzJSK0lNanBIb1ExSDJvS1FJVVVoSXBGeithVGZXQmxTbEExTnJ5ZE43ekM5WTdZSE1seTBtdDdFK1lmcHRlRnFlc2xlaG91MndVN0VodXNiVWpRTlJsVnlsTUtDVUdYNFVmWWtvSW9VL1JVNTJpTWh2QUNZZlFrZ1dyNWRyQUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIERpYWxvZyxcclxuICBJY29uQnV0dG9uLFxyXG4gIEdyaWQsXHJcbiAgUGFwZXIsXHJcbiAgVGFicyxcclxuICBUYWIsXHJcbiAgQ2FyZCxcclxuICBDYXJkQ29udGVudCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgeyBnb29nbGVMb2dpbiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZmFjZWJvb2tMb2dpbiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgemFsb0xvZ2luIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgSW1hZ2VMb2dpbiBmcm9tICcuLi8uLi9wdWJsaWMvSW1hZ2UvbG9naW4ucG5nJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBsb25nSW46IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6IDYwMCxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvbG9naW4tYmFja2dyb3VuZC5zdmdcIiknLFxyXG4gICAgLy8gYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHBhZGRpbmc6ICcwIDIwcHgnLFxyXG4gIH0sXHJcbiAgbG9nSW5DbG9zZToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnMHB4JyxcclxuICAgIHJpZ2h0OiAnMHB4JyxcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgd2lkdGg6ICc0MHB4IWltcG9ydGFudCcsXHJcbiAgICBoZWlnaHQ6ICc0MHB4IWltcG9ydGFudCcsXHJcbiAgfSxcclxuICBtb2RhbDoge1xyXG4gICAgLy8gbWF4V2lkdGg6ICcnLFxyXG4gICAgaGVpZ2h0OiA2MDAsXHJcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsb2F0OiAnbGVmdCcsXHJcbiAgICBtYXJnaW46ICc3MHB4IDAgOHB4IDAnLFxyXG4gICAgLy8gZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xyXG4gICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgIGNvbG9yOiAnIzE5NzZkMicsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBmbG9hdDogJ2xlZnQnLFxyXG4gICAgLy8gZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xyXG4gICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgIGNvbG9yOiAnIzAwMDAwMDhhJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcblxyXG5jb25zdCB0YWJzID0gW1xyXG4gIHsgdmFsdWU6IDEsIGxhYmVsOiAnxJDEg25nIE5o4bqtcCcgfSxcclxuICB7IHZhbHVlOiAyLCBsYWJlbDogJ1ThuqFvIFTDoGkgS2hv4bqjbicgfSxcclxuXTtcclxuXHJcblxyXG5jb25zdCBMb2dpbk1vZGFsID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW3ZhbHVlVGFiLCBzZXRWYWx1ZVRhYl0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyR29vZ2xlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbl9fbW9kYWxfX2Jsb2NrX19nb29nbGVcIiBocmVmPXtnb29nbGVMb2dpbn0+XHJcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUzMy41IDU0NC4zXCI+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk01MzMuNSwyNzguNGMwLTE4LjUtMS41LTM3LjEtNC43LTU1LjNIMjcyLjF2MTA0LjhoMTQ3Yy02LjEsMzMuOC0yNS43LDYzLjctNTQuNCw4Mi43djY4aDg3LjcgQzUwMy45LDQzMS4yLDUzMy41LDM2MS4yLDUzMy41LDI3OC40elwiIC8+XHJcbiAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MVwiIGQ9XCJNMjcyLjEsNTQ0LjNjNzMuNCwwLDEzNS4zLTI0LjEsMTgwLjQtNjUuN2wtODcuNy02OGMtMjQuNCwxNi42LTU1LjksMjYtOTIuNiwyNmMtNzEsMC0xMzEuMi00Ny45LTE1Mi44LTExMi4zIEgyOC45djcwLjFDNzUuMSw0ODYuMywxNjkuMiw1NDQuMywyNzIuMSw1NDQuM3pcIiAvPlxyXG4gICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDJcIiBkPVwiTTExOS4zLDMyNC4zYy0xMS40LTMzLjgtMTEuNC03MC40LDAtMTA0LjJWMTUwSDI4LjljLTM4LjYsNzYuOS0zOC42LDE2Ny41LDAsMjQ0LjRMMTE5LjMsMzI0LjN6XCIgLz5cclxuICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QzXCIgZD1cIk0yNzIuMSwxMDcuN2MzOC44LTAuNiw3Ni4zLDE0LDEwNC40LDQwLjhsMCwwbDc3LjctNzcuN0M0MDUsMjQuNiwzMzkuNy0wLjgsMjcyLjEsMEMxNjkuMiwwLDc1LjEsNTgsMjguOSwxNTBcdGw5MC40LDcwLjFDMTQwLjgsMTU1LjYsMjAxLjEsMTA3LjcsMjcyLjEsMTA3Ljd6XCIgLz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJnb29nbGVcIj7EkMSCTkcgTkjhuqxQIELhurBORyBHT09HTEU8L3A+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclphbG8gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luX19tb2RhbF9fYmxvY2tfX3phbG9cIiBocmVmPXt6YWxvTG9naW59PlxyXG4gICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA0NjAuMSA0MzYuNlwiPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk04Mi42IDM4MC45Yy0xLjgtLjgtMy4xLTEuNy0xLTMuNSAxLjMtMSAyLjctMS45IDQuMS0yLjggMTMuMS04LjUgMjUuNC0xNy44IDMzLjUtMzEuNSA2LjgtMTEuNCA1LjctMTguMS0yLjgtMjYuNUM2OSAyNjkuMiA0OC4yIDIxMi41IDU4LjYgMTQ1LjUgNjQuNSAxMDcuNyA4MS44IDc1IDEwNyA0Ni42YzE1LjItMTcuMiAzMy4zLTMxLjEgNTMuMS00Mi43IDEuMi0uNyAyLjktLjkgMy4xLTIuNy0uNC0xLTEuMS0uNy0xLjctLjctMzMuNyAwLTY3LjQtLjctMTAxIC4yQzI4LjMgMS43LjUgMjYuNi42IDYyLjNjLjIgMTA0LjMgMCAyMDguNiAwIDMxMyAwIDMyLjQgMjQuNyA1OS41IDU3IDYwLjcgMjcuMyAxLjEgNTQuNi4yIDgyIC4xIDIgLjEgNCAuMiA2IC4ySDI5MGMzNiAwIDcyIC4yIDEwOCAwIDMzLjQgMCA2MC41LTI3IDYwLjUtNjAuM3YtLjYtNTguNWMwLTEuNC41LTIuOS0uNC00LjQtMS44LjEtMi41IDEuNi0zLjUgMi42LTE5LjQgMTkuNS00Mi4zIDM1LjItNjcuNCA0Ni4zLTYxLjUgMjcuMS0xMjQuMSAyOS0xODcuNiA3LjItNS41LTItMTEuNS0yLjItMTcuMi0uOC04LjQgMi4xLTE2LjcgNC42LTI1IDcuMS0yNC40IDcuNi00OS4zIDExLTc0LjggNnptNzIuNS0xNjguNWMxLjctMi4yIDIuNi0zLjUgMy42LTQuOCAxMy4xLTE2LjYgMjYuMi0zMy4yIDM5LjMtNDkuOSAzLjgtNC44IDcuNi05LjcgMTAtMTUuNSAyLjgtNi42LS4yLTEyLjgtNy0xNS4yLTMtLjktNi4yLTEuMy05LjQtMS4xLTE3LjgtLjEtMzUuNy0uMS01My41IDAtMi41IDAtNSAuMy03LjQuOS01LjYgMS40LTkgNy4xLTcuNiAxMi44IDEgMy44IDQgNi44IDcuOCA3LjcgMi40LjYgNC45LjkgNy40LjggMTAuOC4xIDIxLjcgMCAzMi41LjEgMS4yIDAgMi43LS44IDMuNiAxLS45IDEuMi0xLjggMi40LTIuNyAzLjUtMTUuNSAxOS42LTMwLjkgMzkuMy00Ni40IDU4LjktMy44IDQuOS01LjggMTAuMy0zIDE2LjNzOC41IDcuMSAxNC4zIDcuNWM0LjYuMyA5LjMuMSAxNCAuMSAxNi4yIDAgMzIuMy4xIDQ4LjUtLjEgOC42LS4xIDEzLjItNS4zIDEyLjMtMTMuMy0uNy02LjMtNS05LjYtMTMtOS43LTE0LjEtLjEtMjguMiAwLTQzLjMgMHptMTE2LTUyLjZjLTEyLjUtMTAuOS0yNi4zLTExLjYtMzkuOC0zLjYtMTYuNCA5LjYtMjIuNCAyNS4zLTIwLjQgNDMuNSAxLjkgMTcgOS4zIDMwLjkgMjcuMSAzNi42IDExLjEgMy42IDIxLjQgMi4zIDMwLjUtNS4xIDIuNC0xLjkgMy4xLTEuNSA0LjguNiAzLjMgNC4yIDkgNS44IDE0IDMuOSA1LTEuNSA4LjMtNi4xIDguMy0xMS4zLjEtMjAgLjItNDAgMC02MC0uMS04LTcuNi0xMy4xLTE1LjQtMTEuNS00LjMuOS02LjcgMy44LTkuMSA2Ljl6bTY5LjMgMzcuMWMtLjQgMjUgMjAuMyA0My45IDQ2LjMgNDEuMyAyMy45LTIuNCAzOS40LTIwLjMgMzguNi00NS42LS44LTI1LTE5LjQtNDIuMS00NC45LTQxLjMtMjMuOS43LTQwLjggMTkuOS00MCA0NS42em0tOC44LTE5LjljMC0xNS43LjEtMzEuMyAwLTQ3IDAtOC01LjEtMTMtMTIuNy0xMi45LTcuNC4xLTEyLjMgNS4xLTEyLjQgMTIuOC0uMSA0LjcgMCA5LjMgMCAxNHY3OS41YzAgNi4yIDMuOCAxMS42IDguOCAxMi45IDYuOSAxLjkgMTQtMi4yIDE1LjgtOS4xLjMtMS4yLjUtMi40LjQtMy43LjItMTUuNS4xLTMxIC4xLTQ2LjV6XCIgLz5cclxuICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MVwiIGQ9XCJNMTM5LjUgNDM2LjJjLTI3LjMgMC01NC43LjktODItLjEtMzIuMy0xLjMtNTctMjguNC01Ny02MC43IDAtMTA0LjMuMi0yMDguNiAwLTMxM0MuNSAyNi43IDI4LjQgMS44IDYwLjUuOWMzMy42LS45IDY3LjMtLjIgMTAxLS4yLjYgMCAxLjQtLjMgMS43LjctLjIgMS44LTIgMi0zLjEgMi43LTE5LjggMTEuNi0zNy45IDI1LjUtNTMuMSA0Mi43LTI1LjEgMjguNC00Mi41IDYxLTQ4LjQgOTguOS0xMC40IDY2LjkgMTAuNSAxMjMuNyA1Ny44IDE3MS4xIDguNCA4LjUgOS41IDE1LjEgMi44IDI2LjUtOC4xIDEzLjctMjAuNCAyMy0zMy41IDMxLjUtMS40LjgtMi44IDEuOC00LjIgMi43LTIuMSAxLjgtLjggMi43IDEgMy41LjQuOS45IDEuNyAxLjUgMi41IDExLjUgMTAuMiAyMi40IDIxLjEgMzMuNyAzMS41IDUuMyA0LjkgMTAuNiAxMCAxNS43IDE1LjEgMi4xIDEuOSA1LjYgMi41IDYuMSA2LjF6XCIgLz5cclxuICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MlwiIGQ9XCJNMTM5LjUgNDM2LjJjLS41LTMuNS00LTQuMS02LjEtNi4yLTUuMS01LjItMTAuNC0xMC4yLTE1LjctMTUuMS0xMS4zLTEwLjQtMjIuMi0yMS4zLTMzLjctMzEuNS0uNi0uOC0xLjEtMS42LTEuNS0yLjUgMjUuNSA1IDUwLjQgMS42IDc0LjktNS45IDguMy0yLjUgMTYuNi01IDI1LTcuMSA1LjctMS41IDExLjctMS4yIDE3LjIuOCA2My40IDIxLjggMTI2IDE5LjggMTg3LjYtNy4yIDI1LjEtMTEuMSA0OC0yNi43IDY3LjQtNDYuMiAxLTEgMS43LTIuNSAzLjUtMi42LjkgMS40LjQgMi45LjQgNC40djU4LjVjLjIgMzMuNC0yNi42IDYwLjYtNjAgNjAuOWgtLjVjLTM2IC4yLTcyIDAtMTA4IDBIMTQ1LjVjLTItLjItNC0uMy02LS4zelwiIC8+XHJcbiAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDFcIiBkPVwiTTE1NS4xIDIxMi40YzE1LjEgMCAyOS4zLS4xIDQzLjQgMCA3LjkuMSAxMi4yIDMuNCAxMyA5LjcuOSA3LjktMy43IDEzLjItMTIuMyAxMy4zLTE2LjIuMi0zMi4zLjEtNDguNS4xLTQuNyAwLTkuMy4yLTE0LS4xLTUuOC0uMy0xMS41LTEuNS0xNC4zLTcuNXMtLjgtMTEuNCAzLTE2LjNjMTUuNC0xOS42IDMwLjktMzkuMyA0Ni40LTU4LjkuOS0xLjIgMS44LTIuNCAyLjctMy41LTEtMS43LTIuNC0uOS0zLjYtMS0xMC44LS4xLTIxLjcgMC0zMi41LS4xLTIuNSAwLTUtLjMtNy40LS44LTUuNy0xLjMtOS4yLTctNy45LTEyLjYuOS0zLjggMy45LTYuOSA3LjctNy44IDIuNC0uNiA0LjktLjkgNy40LS45IDE3LjgtLjEgMzUuNy0uMSA1My41IDAgMy4yLS4xIDYuMy4zIDkuNCAxLjEgNi44IDIuMyA5LjcgOC42IDcgMTUuMi0yLjQgNS43LTYuMiAxMC42LTEwIDE1LjUtMTMuMSAxNi43LTI2LjIgMzMuMy0zOS4zIDQ5LjgtMS4xIDEuMy0yLjEgMi42LTMuNyA0Ljh6XCIgLz5cclxuICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MVwiIGQ9XCJNMjcxLjEgMTU5LjhjMi40LTMuMSA0LjktNiA5LTYuOCA3LjktMS42IDE1LjMgMy41IDE1LjQgMTEuNS4zIDIwIC4yIDQwIDAgNjAgMCA1LjItMy40IDkuOC04LjMgMTEuMy01IDEuOS0xMC43LjQtMTQtMy45LTEuNy0yLjEtMi40LTIuNS00LjgtLjYtOS4xIDcuNC0xOS40IDguNy0zMC41IDUuMS0xNy44LTUuOC0yNS4xLTE5LjctMjcuMS0zNi42LTIuMS0xOC4zIDQtMzMuOSAyMC40LTQzLjUgMTMuNi04LjEgMjcuNC03LjQgMzkuOSAzLjV6bS0zNS40IDM2LjVjLjIgNC40IDEuNiA4LjYgNC4yIDEyLjEgNS40IDcuMiAxNS43IDguNyAyMyAzLjMgMS4yLS45IDIuMy0yIDMuMy0zLjMgNS42LTcuNiA1LjYtMjAuMSAwLTI3LjctMi44LTMuOS03LjItNi4yLTExLjktNi4zLTExLS43LTE4LjcgNy44LTE4LjYgMjEuOXpNMzQwLjQgMTk2LjljLS44LTI1LjcgMTYuMS00NC45IDQwLjEtNDUuNiAyNS41LS44IDQ0LjEgMTYuMyA0NC45IDQxLjMuOCAyNS4zLTE0LjcgNDMuMi0zOC42IDQ1LjYtMjYuMSAyLjYtNDYuOC0xNi4zLTQ2LjQtNDEuM3ptMjUuMS0yLjRjLS4yIDUgMS4zIDkuOSA0LjMgMTQgNS41IDcuMiAxNS44IDguNiAyMyAzIDEuMS0uOCAyLTEuOCAyLjktMi44IDUuOC03LjYgNS44LTIwLjQuMS0yOC0yLjgtMy44LTcuMi02LjItMTEuOS02LjMtMTAuOC0uNi0xOC40IDcuNi0xOC40IDIwLjF6TTMzMS42IDE3N2MwIDE1LjUuMSAzMSAwIDQ2LjUuMSA3LjEtNS41IDEzLTEyLjYgMTMuMi0xLjIgMC0yLjUtLjEtMy43LS40LTUtMS4zLTguOC02LjYtOC44LTEyLjl2LTc5LjVjMC00LjctLjEtOS4zIDAtMTQgLjEtNy43IDUtMTIuNyAxMi40LTEyLjcgNy42LS4xIDEyLjcgNC45IDEyLjcgMTIuOS4xIDE1LjYgMCAzMS4zIDAgNDYuOXpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0yMzUuNyAxOTYuM2MtLjEtMTQuMSA3LjYtMjIuNiAxOC41LTIyIDQuNy4yIDkuMSAyLjUgMTEuOSA2LjQgNS42IDcuNSA1LjYgMjAuMSAwIDI3LjctNS40IDcuMi0xNS43IDguNy0yMyAzLjMtMS4yLS45LTIuMy0yLTMuMy0zLjMtMi41LTMuNS0zLjktNy43LTQuMS0xMi4xek0zNjUuNSAxOTQuNWMwLTEyLjQgNy42LTIwLjcgMTguNC0yMC4xIDQuNy4xIDkuMSAyLjUgMTEuOSA2LjMgNS43IDcuNiA1LjcgMjAuNS0uMSAyOC01LjYgNy4xLTE2IDguMy0yMy4xIDIuNy0xLjEtLjgtMi0xLjgtMi44LTIuOS0zLTQuMS00LjQtOS00LjMtMTR6XCIgLz5cclxuICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0M1wiIGQ9XCJNNjYgMWgzMjguMWMzNS45IDAgNjUgMjkuMSA2NSA2NXYzMDNjMCAzNS45LTI5LjEgNjUtNjUgNjVINjZjLTM1LjkgMC02NS0yOS4xLTY1LTY1VjY2QzEgMzAuMSAzMC4xIDEgNjYgMXpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInphbG9cIj7EkMSCTkcgTkjhuqxQIELhurBORyBaQUxPPC9wPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJGYWNlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbl9fbW9kYWxfX2Jsb2NrX19mYWNlYm9va1wiIGhyZWY9e2ZhY2Vib29rTG9naW59PlxyXG4gICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTUwNCAyNTZDNTA0IDExOSAzOTMgOCAyNTYgOFM4IDExOSA4IDI1NmMwIDEyMy43OCA5MC42OSAyMjYuMzggMjA5LjI1IDI0NVYzMjcuNjloLTYzVjI1Nmg2M3YtNTQuNjRjMC02Mi4xNSAzNy05Ni40OCA5My42Ny05Ni40OCAyNy4xNCAwIDU1LjUyIDQuODQgNTUuNTIgNC44NHY2MWgtMzEuMjhjLTMwLjggMC00MC40MSAxOS4xMi00MC40MSAzOC43M1YyNTZoNjguNzhsLTExIDcxLjY5aC01Ny43OFY1MDFDNDEzLjMxIDQ4Mi4zOCA1MDQgMzc5Ljc4IDUwNCAyNTZ6XCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmYWNlYm9va1wiPsSQxIJORyBOSOG6rFAgQuG6sE5HIEZBQ0VCT09LPC9wPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFic0NoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlVGFiKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJUYWJzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8UGFwZXIgc3F1YXJlPlxyXG4gICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRhYnNDaGFuZ2V9XHJcbiAgICAgICAgICAgIHNjcm9sbEJ1dHRvbnM9XCJhdXRvXCJcclxuICAgICAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZVRhYn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RhYnMubWFwKCh0YWIpID0+IDxUYWIga2V5PXt0YWIudmFsdWV9IGxhYmVsPXt0YWIubGFiZWx9IHZhbHVlPXt0YWIudmFsdWV9IC8+KX1cclxuICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHt2YWx1ZVRhYiA9PT0gMSAmJiByZW5kZXJMb2dpbigpfVxyXG4gICAgICAgICAgICB7dmFsdWVUYWIgPT09IDIgJiYgcmVuZGVyQ3JlYXRlQWNjb3VudCgpfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckxvZ2luID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbl9fbW9kYWxfX2Jsb2NrXCIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHggNDBweCcgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJFbWFpbCAvIFPEkFRcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAwJyB9fT5cclxuICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHNpemU9XCJzbWFsbFwiIGxhYmVsPVwiTeG6rXQga2jhuql1XCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogMzAsIHBhZGRpbmc6ICc4cHggMCcsIGZsb2F0OiAnbGVmdCcsIHdpZHRoOiAzMDAgfX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBjb2xvcjogJyMxOTc2ZDInLCBjdXJzb3I6ICdkZWZhdWx0JyB9fSA+UXXDqm4gbeG6rXQga2jhuql1PzwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIHN0eWxlPXt7IGNvbG9yOiAnIzE5NzZkMicgfX0+xJDEg25nIG5o4bqtcDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzYwcHggMCcgfX0+XHJcbiAgICAgICAgICB7cmVuZGVyR29vZ2xlKCl9XHJcbiAgICAgICAgICB7cmVuZGVyWmFsbygpfVxyXG4gICAgICAgICAge3JlbmRlckZhY2UoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBjb25zdCByZW5kZXJDcmVhdGVBY2NvdW50ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbl9fbW9kYWxfX2Jsb2NrXCIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHggNDBweCcgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJI4buNIHTDqm5cIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAwJyB9fT5cclxuICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHNpemU9XCJzbWFsbFwiIGxhYmVsPVwiU8SQVFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJFbWFpbFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJNw6MgeMOhYyB0aOG7sWNcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAwJyB9fT5cclxuICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHNpemU9XCJzbWFsbFwiIGxhYmVsPVwiTeG6rXQga2jhuql1XCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMCcgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBzaXplPVwic21hbGxcIiBsYWJlbD1cIkdp4bubaSB0w61uaFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBjb2xvcjogJyMxOTc2ZDInIH19PlThuqFvIHTDoGkga2hv4bqjbjwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgIGNvbG9yPSdpbmhlcml0J1xyXG4gICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250V2VpZ2h0OiA1MDAsIHBhZGRpbmc6ICcwIDIwcHgnLCBmbG9hdDogJ3JpZ2h0JywgY3Vyc29yOiAnZGVmYXVsdCcgfX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfT7EkMSDbmcgbmjhuq1wXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPERpYWxvZ1xyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibWF4LXdpZHRoLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgbWF4V2lkdGg9eydtZCd9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb25nSW59PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nSW5DbG9zZX0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfT5cclxuICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XHJcbiAgICAgICAgICAgICAge3ZhbHVlVGFiID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBzdHlsZT17eyBib3JkZXJSaWdodDogJzRweCBzb2xpZCAjZTBlMGUwJywgaGVpZ2h0OiA2MDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT4gxJDEg25nIG5o4bqtcCA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIMSQxINuZyBuaOG6rXAgxJHhu4MgdGhlbyBkw7VpIMSRxqFuIGjDoG5nLCBsxrB1IGRhbmggc8OhY2ggc+G6o24gcGjhuqltIHnDqnUgdGjDrWNoLCBuaOG6rW4gbmhp4buBdSDGsHUgxJHDo2kgaOG6pXAgZOG6q24uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtJbWFnZUxvZ2lufSBzdHlsZT17eyBoZWlnaHQ6IDM1MCwgd2lkdGg6ICcxMDAlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB7dmFsdWVUYWIgPT09IDIgJiZcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IHN0eWxlPXt7IGJvcmRlclJpZ2h0OiAnNHB4IHNvbGlkICNlMGUwZTAnLCBoZWlnaHQ6IDYwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PiBU4bqhbyB0w6BpIGtob+G6o24gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICBU4bqhbyB0w6BpIGtob+G6o24gxJHhu4MgdGhlbyBkw7VpIMSRxqFuIGjDoG5nLCBsxrB1IGRhbmggc8OhY2ggc+G6o24gcGjhuqltIHnDqnUgdGjDrWNoLCBuaOG6rW4gbmhp4buBdSDGsHUgxJHDo2kgaOG6pXAgZOG6q25cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0ltYWdlTG9naW59IHN0eWxlPXt7IGhlaWdodDogMzUwLCB3aWR0aDogJzEwMCUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgcGFkZGluZzogJzhweCAwIDAgMCcsIGNvbG9yOiAnIzE5NzZkMicsIGZvbnRTaXplOiAyMCwgZm9udFdlaWdodDogNTAwIH19Pk7hu5lpIHRo4bqldCBEb2RvPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAge3JlbmRlclRhYnMoKX1cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0RpYWxvZyA+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50ID5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpbk1vZGFsO1xyXG4iLCJjb25zdCBtYWluVVJMID0gXCJodHRwczovL25oYWRhdG1vaS5uZXRcIjtcclxuY29uc3QgdXBncmFkZVBsYW5VUkwgPSBcImh0dHBzOi8vbmhhZGF0bW9pLm5ldFwiO1xyXG5cclxuY29uc3QgdXBncmFkZUljb25VUkwgPSBcImh0dHBzOi8vcmVhY3QtbWF0ZXJpYWwtZGFzaGJvYXJkLmRldmlhcy5pby9pbWFnZXMvdW5kcmF3X3Jlc3VtZV9mb2xkZXJfMl9hcnNlLnN2Z1wiO1xyXG5jb25zdCBsb2dvVVJMID0gXCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvbmhhZGF0bW9pLnN2Z1wiO1xyXG5cclxuY29uc3QgYXBpQmFzZVVSTCA9IFwiaHR0cHM6Ly9ncmFwaC5uaGFkYXRtb2kubmV0XCI7XHJcbmNvbnN0IGdvb2dsZUxvZ2luID0gYCR7YXBpQmFzZVVSTH0vYXV0aC9nb29nbGVgO1xyXG5jb25zdCBmYWNlYm9va0xvZ2luID0gYCR7YXBpQmFzZVVSTH0vYXV0aC9mYWNlYm9va2A7XHJcbmNvbnN0IHphbG9Mb2dpbiA9IGAke2FwaUJhc2VVUkx9L2F1dGgvemFsb2A7XHJcbmNvbnN0IGFwaUdyYXBoUUxVUkwgPSBgJHthcGlCYXNlVVJMfS9ncmFwaHFsYDtcclxuXHJcbmNvbnN0IHVybEltYWdlQWRTZWxsTGVhc2UgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGF0YS9hZF9zZWxsX2xlYXNlX2ltYWdlL1wiO1xyXG5jb25zdCB1cmxJbWFnZVByb2plY3QgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGF0YS9wcm9qZWN0X2ltYWdlL1wiO1xyXG5jb25zdCB1cmxJbWFnZUJyb2tlciA9IFwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kYXRhL2Jyb2tlcl9pbWFnZS9cIjtcclxuXHJcbmNvbnN0IGltYWdlRGVmYXVsdFByb2plY3QgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9ob21lX2RlZmF1bHQuanBnXCI7XHJcbmNvbnN0IGltYWdlRGVmYXVsdFNsaWRlciA9IFwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L25oYWRhdG1vaS1kZWZhdWx0LnN2Z1wiO1xyXG5jb25zdCBpbWFnZURlZmF1bHRCcm9rZXIgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC91c2VyLnBuZ1wiO1xyXG5jb25zdCBnb29nbGVBbmFseXRpY3NDb2RlID0gJ1VBLTYwNzY3OTk4LTgnO1xyXG5jb25zdCBnb29nbGVTZWFyY2hDb25zb2xlID0gJ2N5TWtUbmRIZEU5NWNGZ3Y3SDVfb3R1RHktWDZON3FkWEV1Tk9QaUowR1EnO1xyXG5jb25zdCBsb2NhbFN0b3JhZ2VDb21wYXJlS2V5ID0gJ25kbV9jb21wYXJlJztcclxuY29uc3QgbG9jYWxTdG9yYWdlVmlld2VkID0gJ25kbV9hc2xfdmlld2VkJztcclxuY29uc3QgbG9jYWxTdG9yYWdlUHJvamVjdFZpZXdlZCA9ICduZG1fcHJvamVjdF92aWV3ZWQnO1xyXG5cclxuY29uc3QgYWRTZWxsTGVhc2VDYXRlZ29yeSA9IFtcclxuICB7XHJcbiAgICBpZDogJzVlMTFhZjA0NDExZTFlYTcyYTFmY2JkZScsXHJcbiAgICBzbHVnOiAnL25oYS1kYXQtYmFuJyxcclxuICAgIG5hbWU6ICdOaMOgIMSR4bqldCBiw6FuJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYWYwNDQxMWUxZWE3MmExZmNiZGYnLFxyXG4gICAgc2x1ZzogJy9uaGEtZGF0LXRodWUnLFxyXG4gICAgbmFtZTogJ05ow6AgxJHhuqV0IHRodcOqJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYWYwNDQxMWUxZWE3MmExZmNiZTAnLFxyXG4gICAgc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnLFxyXG4gICAgbmFtZTogJ05ow6AgxJHhuqV0IGPhuqduIG11YScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWFmMDQ0MTFlMWVhNzJhMWZjYmUxJyxcclxuICAgIHNsdWc6ICcvbmhhLWRhdC1jYW4tdGh1ZScsXHJcbiAgICBuYW1lOiAnTmjDoCDEkeG6pXQgY+G6p24gdGh1w6onLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnXHJcbiAgfVxyXG5dO1xyXG5jb25zdCBhZFNlbGxMZWFzZVR5cGUgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNWY1NDNmNjYzODc5YzY3NTA5MjcsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFjLDVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYSw1ZTdkNjEzMjNmNjYzODc5YzY3NTA5OTcsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFiJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1uaGEnLFxyXG4gICAgbmFtZTogJ0LDoW4gbmjDoCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWMnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLW5oYS1tYXQtcGhvJyxcclxuICAgIG5hbWU6ICdCw6FuIG5ow6AgbeG6t3QgcGjhu5EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1uaGEnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFhJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1uaGEtcmllbmcnLFxyXG4gICAgbmFtZTogJ0LDoW4gbmjDoCByacOqbmcnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1uaGEnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYxMzIzZjY2Mzg3OWM2NzUwOTk3JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1uaGEtcGhvLXNob3Bob3VzZScsXHJcbiAgICBuYW1lOiAnQsOhbiBuaMOgIHBo4buRIHRoxrDGoW5nIG3huqFpIChzaG9waG91c2UpJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tbmhhJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tbmhhLWxpZW4ta2UnLFxyXG4gICAgbmFtZTogJ0LDoW4gbmjDoCBsaeG7gW4ga+G7gScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLW5oYScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YTksNWU3ZDYyMGYzZjY2Mzg3OWM2NzUwOWY4LDVlN2Q2MjJkM2Y2NjM4NzljNjc1MGEwNyw1ZTdkNjI0YjNmNjYzODc5YzY3NTBhMTUsNWU3ZDYyNmIzZjY2Mzg3OWM2NzUwYTIzLDVlN2Q2MjhiM2Y2NjM4NzljNjc1MGEzNCw1ZTdkNjJhNTNmNjYzODc5YzY3NTBhNDIsNWU3ZDYyY2MzZjY2Mzg3OWM2NzUwYTUxLDVlN2Q2MmZjM2Y2NjM4NzljNjc1MGE2YSw1ZTdkNjMxOTNmNjYzODc5YzY3NTBhN2IsNWU3ZDYzMmYzZjY2Mzg3OWM2NzUwYThkLDVlOTkyNGY2NzE2ZWU5NjRiNWZkY2MyMycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIG5hbWU6IFwiQsOhbiBjxINuIGjhu5ksIGNodW5nIGPGsFwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYyMGYzZjY2Mzg3OWM2NzUwOWY4JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tZ2lhLXJlJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIGNodW5nIGPGsCBnacOhIHLhurtcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MjJkM2Y2NjM4NzljNjc1MGEwNycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLW1pbmknLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgY2h1bmcgY8awIG1pbmlcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MjRiM2Y2NjM4NzljNjc1MGExNScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLXRydW5nLWNhcCcsXHJcbiAgICBuYW1lOiBcIkPEg24gaOG7mSBjaHVuZyBjxrAgdHJ1bmcgY+G6pXBcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MjZiM2Y2NjM4NzljNjc1MGEyMycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLWNhby1jYXAnLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgY2h1bmcgY8awIGNhbyBj4bqlcFwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYyOGIzZjY2Mzg3OWM2NzUwYTM0JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tcGVudGhvdXNlJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIHBlbnRob3VzZVwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYyYTUzZjY2Mzg3OWM2NzUwYTQyJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tc2t5dmlsbGEnLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgU2t5dmlsbGFcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MmNjM2Y2NjM4NzljNjc1MGE1MScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLWxvZnQtaG91c2UnLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgTG9mdCAtIGhvdXNlXCIsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjJmYzNmNjYzODc5YzY3NTBhNmEnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1zdHVkaW8nLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgU3R1ZGlvXCIsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjMxOTNmNjYzODc5YzY3NTBhN2InLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jb25kb3RlbCcsXHJcbiAgICBuYW1lOiBcIkPEg24gaOG7mSBDb25kb3RlbFwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYzMmYzZjY2Mzg3OWM2NzUwYThkJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tb2ZmaWNldGVsJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIE9mZmljZXRlbFwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU5OTI0ZjY3MTZlZTk2NGI1ZmRjYzIzJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tZHVwbGV4JyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIER1cGxleFwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYzNjgzZjY2Mzg3OWM2NzUwYWI2LDVlOTEyMjk0OGM3MWQyNWE4NzlkMzBlNiw1ZTdkNjRhZTNmNjYzODc5YzY3NTBhZWYsNWU3ZDY0YzUzZjY2Mzg3OWM2NzUwYWZlLDVlN2Q2NGUyM2Y2NjM4NzljNjc1MGIwYiw1ZTdkNjU4YTNmNjYzODc5YzY3NTBiNzAsNWU3ZDY1MTAzZjY2Mzg3OWM2NzUwYjI3LDVlN2Q2NTVlM2Y2NjM4NzljNjc1MGI1MSw1ZTdkNjViODNmNjYzODc5YzY3NTBiOGEnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIG5hbWU6ICdCw6FuIGJp4buHdCB0aOG7sScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTkxMjI5NDhjNzFkMjVhODc5ZDMwZTYnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1LWxpZW4ta2UnLFxyXG4gICAgbmFtZTogJ0Jp4buHdCB0aOG7sSBsaeG7gW4ga+G7gScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NGFlM2Y2NjM4NzljNjc1MGFlZicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtc2FuLXZ1b24nLFxyXG4gICAgbmFtZTogJ0Jp4buHdCB0aOG7sSBzw6JuIHbGsOG7nW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjRjNTNmNjYzODc5YzY3NTBhZmUnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1LXNvbmctbGFwJyxcclxuICAgIG5hbWU6ICdCaeG7h3QgdGjhu7Egc29uZyBs4bqtcCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NGUyM2Y2NjM4NzljNjc1MGIwYicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtZG9uLWxhcCcsXHJcbiAgICBuYW1lOiAnQmnhu4d0IHRo4buxIMSRxqFuIGzhuq1wJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tYmlldC10aHUnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDY1OGEzZjY2Mzg3OWM2NzUwYjcwJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1iaWV0LXRodS1uZ2hpLWR1b25nJyxcclxuICAgIG5hbWU6ICdCaeG7h3QgdGjhu7Egbmdo4buJIGTGsOG7oW5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tYmlldC10aHUnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDY1MTAzZjY2Mzg3OWM2NzUwYjI3JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1iaWV0LXRodS1waG8nLFxyXG4gICAgbmFtZTogJ0Jp4buHdCB0aOG7sSBwaOG7kScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NTVlM2Y2NjM4NzljNjc1MGI1MScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtdHUtbGFwJyxcclxuICAgIG5hbWU6ICdCaeG7h3QgdGjhu7EgdOG7qSBs4bqtcCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NWI4M2Y2NjM4NzljNjc1MGI4YScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtbWluaScsXHJcbiAgICBuYW1lOiAnQmnhu4d0IHRo4buxIE1pbmknLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWUsNWU2NzA3N2UxZmVhMjczYTk4NWQxZDM2LDVlNjcwNzBmMWZlYTI3M2E5ODVkMWQzNSw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWQsNWU2NzA3OTgxZmVhMjczYTk4NWQxZDM3JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1kYXQnLFxyXG4gICAgbmFtZTogJ0LDoW4gxJHhuqV0JyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCI1ZTY3MDc3ZTFmZWEyNzNhOTg1ZDFkMzZcIixcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1kYXQtbmVuJyxcclxuICAgIG5hbWU6ICfEkOG6pXQgbuG7gW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1kYXQnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU2NzA3MGYxZmVhMjczYTk4NWQxZDM1JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1kYXQtdGhvLWN1JyxcclxuICAgIG5hbWU6ICdCw6FuIMSR4bqldCB0aOG7lSBjxrAnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1kYXQnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFkJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1kYXQtbmVuLWR1LWFuJyxcclxuICAgIG5hbWU6ICdCw6FuIMSR4bqldCBu4buBbiwgZOG7sSDDoW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1kYXQnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU2NzA3OTgxZmVhMjczYTk4NWQxZDM3JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1kYXQtbm9uZy1sYW0tbmdoaWVwJyxcclxuICAgIG5hbWU6ICdNdWEgYsOhbiDEkeG6pXQgbsO0bmcgbMOibSBuZ2hp4buHcCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWRhdCcsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTY3MDdjMjFmZWEyNzNhOTg1ZDFkMzgsNWU2NzA3ZTAxZmVhMjczYTk4NWQxZDM5LDVlNjcwN2Y4MWZlYTI3M2E5ODVkMWQzYSw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjAsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFmJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICBuYW1lOiAnQsOhbiBjw6FjIGxv4bqhaSBi4bqldCDEkeG7mW5nIHPhuqNuIGtow6FjJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlNjcwN2UwMWZlYTI3M2E5ODVkMWQzOScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tbmhhLWhhbmcta2hhY2gtc2FuJyxcclxuICAgIG5hbWU6ICdCw6FuIG5ow6AgaMOgbmcsIGtow6FjaCBz4bqhbicsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlNjcwN2Y4MWZlYTI3M2E5ODVkMWQzYScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tc2FuZy1uaHVvbmctcXVhbicsXHJcbiAgICBuYW1lOiAnQsOhbi9zYW5nIG5oxrDhu6NuZyBzaG9wLCBraW90LCBxdcOhbicsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViMCcsXHJcbiAgICBzbHVnOiAnL211YS1iYW4ta2hvLW5oYS14dW9uZycsXHJcbiAgICBuYW1lOiAnQsOhbiBuaMOgIGtobywgbmjDoCB4xrDhu59uZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhZicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tdHJhbmctdHJhaS1uZ2hpLWR1b25nJyxcclxuICAgIG5hbWU6ICdCw6FuIHRyYW5nIHRy4bqhaSwgbmdo4buJIGTGsOG7oW5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tYmF0LWRvbmctc2FuLWtoYWMnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWMzJyxcclxuICAgIHNsdWc6ICcvY2FuLXRodWUtY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIG5hbWU6ICdD4bqnbiB0aHXDqiBjxINuIGjhu5kgY2h1bmcgY8awJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWM0JyxcclxuICAgIHNsdWc6ICcvY2FuLXRodWUtbmhhLXJpZW5nJyxcclxuICAgIG5hbWU6ICdD4bqnbiB0aHXDqiBuaMOgIHJpw6puZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjNScsXHJcbiAgICBzbHVnOiAnL2Nhbi10aHVlLW5oYS1tYXQtcGhvJyxcclxuICAgIG5hbWU6ICdD4bqnbiB0aHXDqiBuaMOgIG3hurd0IHBo4buRJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWM2JyxcclxuICAgIHNsdWc6ICcvY2FuLXRodWUtbmhhLXRyby1waG9uZy10cm8nLFxyXG4gICAgbmFtZTogJ0PhuqduIHRodcOqIG5ow6AgdHLhu40sIHBow7JuZyB0cuG7jScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjNycsXHJcbiAgICBzbHVnOiAnL2Nhbi10aHVlLXZhbi1waG9uZycsXHJcbiAgICBuYW1lOiAnQ+G6p24gdGh1w6ogdsSDbiBwaMOybmcnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YzgnLFxyXG4gICAgc2x1ZzogJy9jYW4tdGh1ZS1jdWEtaGFuZy1raW90JyxcclxuICAgIG5hbWU6ICdD4bqnbiB0aHXDqiBj4butYSBow6BuZywga2kg4buRdCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjOScsXHJcbiAgICBzbHVnOiAnL2Nhbi10aHVlLWtoby1uaGEteHVvbmctZGF0JyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6oga2hvLCBuaMOgIHjGsOG7n25nLCDEkeG6pXQnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1Y2EnLFxyXG4gICAgc2x1ZzogJy9jYW4tdGh1ZS1jYWMtbG9haS1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICBuYW1lOiAnQ+G6p24gdGh1w6ogbG/huqFpIGLhuqV0IMSR4buZbmcgc+G6o24ga2jDoWMnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YmEnLFxyXG4gICAgc2x1ZzogJy9tdWEtY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIG5hbWU6ICdNdWEgY8SDbiBo4buZIGNodW5nIGPGsCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWJiJyxcclxuICAgIHNsdWc6ICcvbXVhLW5oYS1yaWVuZycsXHJcbiAgICBuYW1lOiAnTXVhIG5ow6AgcmnDqm5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tbXVhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YmMnLFxyXG4gICAgc2x1ZzogJy9tdWEtbmhhLWJpZXQtdGh1LWxpZW4ta2UnLFxyXG4gICAgbmFtZTogJ011YSBuaMOgIGJp4buHdCB0aMawLCBsaeG7gW4ga+G7gScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWJkJyxcclxuICAgIHNsdWc6ICcvbXVhLW5oYS1tYXQtcGhvJyxcclxuICAgIG5hbWU6ICdNdWEgbmjDoCBt4bq3dCBwaOG7kScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWJlJyxcclxuICAgIHNsdWc6ICcvbXVhLWRhdC1uZW4tZHUtYW4nLFxyXG4gICAgbmFtZTogJ011YSDEkeG6pXQgbuG7gW4gZOG7sSDDoW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViZicsXHJcbiAgICBzbHVnOiAnL211YS1kYXQnLFxyXG4gICAgbmFtZTogJ011YSDEkeG6pXQnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjMCcsXHJcbiAgICBzbHVnOiAnL211YS10cmFuZy10cmFpLWtodS1uZ2hpLWR1b25nJyxcclxuICAgIG5hbWU6ICdNdWEgdHJhbmcgdHLhuqFpLCBraHUgbmdo4buJIGTGsOG7oW5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tbXVhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YzEnLFxyXG4gICAgc2x1ZzogJy9tdWEta2hvLW5oYS14dW9uZycsXHJcbiAgICBuYW1lOiAnTXVhIGtobywgbmjDoCB4xrDhu59uZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWMyJyxcclxuICAgIHNsdWc6ICcvbXVhLWNhYy1sb2FpLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIG5hbWU6ICdNdWEgY8OhYyBsb+G6oWkgYuG6pXQgxJHhu5luZyBz4bqjbiBraMOhYycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWIyJyxcclxuICAgIHNsdWc6ICcvY2hvLXRodWUtY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogY8SDbiBo4buZIGNodW5nIGPGsCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWIzJyxcclxuICAgIHNsdWc6ICcvY2hvLXRodWUtbmhhLXJpZW5nJyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogbmjDoCByacOqbmcnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViNCcsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLW5oYS1tYXQtcGhvJyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogbmjDoCBt4bq3dCBwaOG7kScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWI1JyxcclxuICAgIHNsdWc6ICcvY2hvLXRodWUtbmhhLXRyby1waG9uZy10cm8nLFxyXG4gICAgbmFtZTogJ0NobyB0aHXDqiBuaMOgIHRy4buNLCBwaMOybmcgdHLhu40nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViNicsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLXZhbi1waG9uZycsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIHbEg24gcGjDsm5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjcnLFxyXG4gICAgc2x1ZzogJy9jaG8tdGh1ZS1jdWEtaGFuZy1raW90JyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogY+G7rWEgaMOgbmcsIGtpIOG7kXQnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViOCcsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLWtoby1uaGEteHVvbmctZGF0JyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6oga2hvLCBuaMOgIHjGsOG7n25nLCDEkeG6pXQnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViOScsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLWNhYy1sb2FpLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogY8OhYyBsb+G6oWkgYuG6pXQgxJHhu5luZyBz4bqjbiBraMOhYycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtdGh1ZSdcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCB0aXRsZXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cnLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnR2nGsOG7nW5nIG5n4bunIHThu7Egbmhpw6puJywgaW1hZ2U6ICdodHRwczovL211bmRlY29yLnZuL3VwbG9hZHMvc2FucGhhbS9naXVvbmduZ3Vnb3R1bmhpZW4vZ2l1b25nLW5ndS1nby10dS1uaGllbi1kZXAtR04wMzQuanBlZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnR2nGsOG7nW5nIG5n4bunIGPDtG5nIG5naGnhu4dwJywgaW1hZ2U6ICdodHRwczovL211bmRlY29yLnZuL3VwbG9hZHMvc2FucGhhbS9naXVvbmduZ3Vnb3R1bmhpZW4vZ2l1b25nLW5ndS1nby10dS1uaGllbi1kZXAtR04wMzQuanBlZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnR2nGsOG7nW5nIG5n4bunIGhp4buHbiDEkeG6oWknLCBpbWFnZTogJ2h0dHBzOi8vbXVuZGVjb3Iudm4vdXBsb2Fkcy9zYW5waGFtL2dpdW9uZ25ndWdvdHVuaGllbi9naXVvbmctbmd1LWdvLXR1LW5oaWVuLWRlcC1HTjAzNC5qcGVnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdHacaw4budbmcgbmfhu6cgY+G7lSDEkWnhu4NuJywgaW1hZ2U6ICdodHRwczovL211bmRlY29yLnZuL3VwbG9hZHMvc2FucGhhbS9naXVvbmduZ3Vnb3R1bmhpZW4vZ2l1b25nLW5ndS1nby10dS1uaGllbi1kZXAtR04wMzQuanBlZycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQsOgbiDEg24nLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gdOG7sSBuaGnDqm4nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb25vaXRoYXR2aWV0LmNvbS91cGxvYWQvc2FucGhhbS9sYXJnZS9iby1iYW4tYW4tZ28tdHUtbmhpZW4tY2FtLXhlLW1hdC1nby1jby1kaWVuLTFtOC04LWdoZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIMOpcCBjYW8gY+G6pXAnLCBpbWFnZTogJ2h0dHBzOi8vZG9nb25vaXRoYXR2aWV0LmNvbS91cGxvYWQvc2FucGhhbS9sYXJnZS9iby1iYW4tYW4tZ28tdHUtbmhpZW4tY2FtLXhlLW1hdC1nby1jby1kaWVuLTFtOC04LWdoZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIG5ow6AgaMOgbmcnLCBpbWFnZTogJ2h0dHBzOi8vZG9nb25vaXRoYXR2aWV0LmNvbS91cGxvYWQvc2FucGhhbS9sYXJnZS9iby1iYW4tYW4tZ28tdHUtbmhpZW4tY2FtLXhlLW1hdC1nby1jby1kaWVuLTFtOC04LWdoZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDQgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb25vaXRoYXR2aWV0LmNvbS91cGxvYWQvc2FucGhhbS9sYXJnZS9iby1iYW4tYW4tZ28tdHUtbmhpZW4tY2FtLXhlLW1hdC1nby1jby1kaWVuLTFtOC04LWdoZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDYgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb25vaXRoYXR2aWV0LmNvbS91cGxvYWQvc2FucGhhbS9sYXJnZS9iby1iYW4tYW4tZ28tdHUtbmhpZW4tY2FtLXhlLW1hdC1nby1jby1kaWVuLTFtOC04LWdoZS5qcGcnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0LDoG4gcGjDsm5nIGtow6FjaCcsXHJcbiAgICBlbGVtZW50czogW1xyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiB04buxIG5oacOqbicsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0ZHVvbmdkYWkudm4vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvYmFuLWdoZS1waG9uZy1raGFjaC1nby1vYy1jaG8uanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiDDqXAgY2FvIGPhuqVwJywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRkdW9uZ2RhaS52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9iYW4tZ2hlLXBob25nLWtoYWNoLWdvLW9jLWNoby5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIG5ow6AgaMOgbmcnLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGR1b25nZGFpLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2Jhbi1naGUtcGhvbmcta2hhY2gtZ28tb2MtY2hvLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNCBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0ZHVvbmdkYWkudm4vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvYmFuLWdoZS1waG9uZy1raGFjaC1nby1vYy1jaG8uanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA2IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRkdW9uZ2RhaS52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9iYW4tZ2hlLXBob25nLWtoYWNoLWdvLW9jLWNoby5qcGcnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0vhu4cgdGl2aScsXHJcbiAgICBlbGVtZW50czogW1xyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiB04buxIG5oacOqbicsIGltYWdlOiAnaHR0cHM6Ly9nb2NodWFuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8zMjY4NDFmMzdjNzU5ZDJiYzQ2NC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIMOpcCBjYW8gY+G6pXAnLCBpbWFnZTogJ2h0dHBzOi8vZ29jaHVhbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDkvMzI2ODQxZjM3Yzc1OWQyYmM0NjQuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiBuaMOgIGjDoG5nJywgaW1hZ2U6ICdodHRwczovL2dvY2h1YW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA5LzMyNjg0MWYzN2M3NTlkMmJjNDY0LmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNCBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9nb2NodWFuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8zMjY4NDFmMzdjNzU5ZDJiYzQ2NC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDYgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZ29jaHVhbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDkvMzI2ODQxZjM3Yzc1OWQyYmM0NjQuanBnJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdU4bunIHF14bqnbiDDoW8nLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gdOG7sSBuaGnDqm4nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb2xlZ2lhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMy9NYXUtdHUtcXVhbi1hby1kZXAtTEctVFFBMDMwLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gw6lwIGNhbyBj4bqlcCcsIGltYWdlOiAnaHR0cHM6Ly9kb2dvbGVnaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAzL01hdS10dS1xdWFuLWFvLWRlcC1MRy1UUUEwMzAuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiBuaMOgIGjDoG5nJywgaW1hZ2U6ICdodHRwczovL2RvZ29sZWdpYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDMvTWF1LXR1LXF1YW4tYW8tZGVwLUxHLVRRQTAzMC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDQgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb2xlZ2lhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMy9NYXUtdHUtcXVhbi1hby1kZXAtTEctVFFBMDMwLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNiBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9kb2dvbGVnaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAzL01hdS10dS1xdWFuLWFvLWRlcC1MRy1UUUEwMzAuanBnJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdCw6BuIHRyYW5nIMSRaeG7g20nLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gdOG7sSBuaGnDqm4nLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGx1b25nc29uLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jhbi10cmFuZy1kaWVtLTYwLTEuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiDDqXAgY2FvIGPhuqVwJywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRsdW9uZ3Nvbi52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9iYW4tdHJhbmctZGllbS02MC0xLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gbmjDoCBow6BuZycsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0bHVvbmdzb24udm4vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYmFuLXRyYW5nLWRpZW0tNjAtMS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDQgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGx1b25nc29uLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jhbi10cmFuZy1kaWVtLTYwLTEuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA2IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRsdW9uZ3Nvbi52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9iYW4tdHJhbmctZGllbS02MC0xLmpwZycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnVOG7pyBnacOgeScsXHJcbiAgICBlbGVtZW50czogW1xyXG4gICAgICB7IGVsZW1lbnQ6ICdU4bunIGdpw6B5IHThu7Egbmhpw6puJywgaW1hZ2U6ICdodHRwczovL2ZpbGUuaHN0YXRpYy5uZXQvMTAwMDI5NDE0Ni9maWxlLzNfZ3JhbmRlLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnVOG7pyBnacOgeSDDqXAgY2FvIGPhuqVwJywgaW1hZ2U6ICdodHRwczovL2ZpbGUuaHN0YXRpYy5uZXQvMTAwMDI5NDE0Ni9maWxlLzNfZ3JhbmRlLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnVOG7pyBnacOgeSBuaMOgIGjDoG5nJywgaW1hZ2U6ICdodHRwczovL2ZpbGUuaHN0YXRpYy5uZXQvMTAwMDI5NDE0Ni9maWxlLzNfZ3JhbmRlLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNCBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9maWxlLmhzdGF0aWMubmV0LzEwMDAyOTQxNDYvZmlsZS8zX2dyYW5kZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDYgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZmlsZS5oc3RhdGljLm5ldC8xMDAwMjk0MTQ2L2ZpbGUvM19ncmFuZGUuanBnJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBsaXN0TWVudSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ07hu5lpIFRo4bqldCBQaMOybmcgTmfhu6cnLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ07hu5lpIFRo4bqldCBQaMOybmcgS2jDoWNoJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gZ+G7lycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBHacOgeSBEw6lwJyB9LFxyXG4gICAgICB7IHJvb206ICdL4buHIFRpdmknIH0sXHJcbiAgICAgIHsgcm9vbTogJ0vhu4cgxJHhu4MgZ2nDoHknIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcsaw4bujdScgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnTuG7mWkgVGjhuqV0IE5ow6AgQuG6v3AnLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnVOG7pyBi4bq/cCcgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBiw6BuIMSDbicgfSxcclxuICAgICAgeyByb29tOiAnR2jhur8gcGjDsm5nIMSDbicgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ07hu5lpIFRo4bqldCBQaMOybmcgVGjhu50nLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnQsOgbiBUaOG7nScgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBUaOG7nScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBUaOG7nSBUaOG6p24gVMOgaScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBUaOG7nSBUcmVvIFTGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdT4bqtcCBUaOG7nScgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnTuG7mWkgVGjhuqV0IFbEg24gUGjDsm5nJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICfEkOG7kyBH4buXIE3hu7kgTmdo4buHJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdT4bqjbiBQaOG6qW0gS2h1eeG6v24gTeG6oWknLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1PhuqNuIFBo4bqpbSDEkMOjIFhlbScsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcXXhuqduIMOhbycgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnxJDGoW4gaMOgbmcgxJHDoyDEkeG6t3QnLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1PhuqNuIHBo4bqpbSBiw6FuIGNo4bqheScsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcXXhuqduIMOhbycgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnU+G6o24gcGjhuqltIG3hu5tpJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBwcm9kdWN0cyA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vd3d3Lm5oYWRlcGtpZW50cnVjLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi90dS1xdWFuLWFvLWdvLWRlcC0wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICdU4bunIHF14bqnbiDDoW8gxJHhurlwLSBUUUEwOTknLFxyXG4gICAgbW9uZXlPbGQ6IDUwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNDUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9kaWVubWF5Y2hvbG9uLnZuL3B1YmxpYy91c2VydXBsb2FkL2ltYWdlcy9rZSUyMHRpdmklMjBnbyUyMGNhbyUyMGNhcC5wbmcnLFxyXG4gICAgdGl0bGU6ICdL4buHIFRpdmkgcGjDsm5nIGtow6FjaCcsXHJcbiAgICBtb25leU9sZDogNjAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiA1MDAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL2RpZW5tYXljaG9sb24udm4vcHVibGljL3VzZXJ1cGxvYWQvaW1hZ2VzL2tlJTIwdGl2aSUyMGdvJTIwY2FvJTIwY2FwLnBuZycsXHJcbiAgICB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyBn4buXIHThu7Egbmhpw6puIC0gR05DRDAxJyxcclxuICAgIG1vbmV5T2xkOiAzMDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDIwMDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdHRoYWliaW5oLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9naXVvbmctbmd1LWdvLWdvLWRvLTk2NTYuanBnJyxcclxuICAgIHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIHRo4budaSB0cmFuZyAtIEcwMDMnLFxyXG4gICAgbW9uZXlPbGQ6IDQ1MDAwMDAsXHJcbiAgICBtb25leU5ldzogMzUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9waG9nb3ZpcC52bi91cGxvYWRzL25ld3MvMjAxN18xMi9naXVvbmctbmd1LWdvLXR1LW5oaWVuLTQtY29weS5qcGcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgaGnhu4duIMSR4bqhaSAtIEdOMDAzJyxcclxuICAgIG1vbmV5T2xkOiA0MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDM1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGlob3VzZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvTzFDTjAxWml1ajhGMXlTbHNGV1h2bnlfMjczNjAxNjUuanBnJyxcclxuICAgIHRpdGxlOiAnS+G7hyBUaXZpIHBow7JuZyBraMOhY2gnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTAwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0aWhvdXNlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMS9PMUNOMDFaaXVqOEYxeVNsc0ZXWHZueV8yNzM2MDE2NS5qcGcnLFxyXG4gICAgdGl0bGU6ICdCw6BuIMSDbiA2IGdo4bq/IC0gQkEwMDEnLFxyXG4gICAgbW9uZXlPbGQ6IDQwMDAwMDAsXHJcbiAgICBtb25leU5ldzogMzAwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly93d3cubmhhZGVwa2llbnRydWMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA2L3R1LXF1YW4tYW8tZ28tZGVwLTAxLmpwZycsXHJcbiAgICB0aXRsZTogJ0LDoG4gxINuIGfhu5cgbmjhuq1wIGto4bqpdSAtIEJBMDAyJyxcclxuICAgIG1vbmV5T2xkOiAzNTAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDMwMDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vd3d3Lm5oYWRlcGtpZW50cnVjLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi90dS1xdWFuLWFvLWdvLWRlcC0wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICdU4bunIHF14bqnbiDDoW8gxJHhurlwLSBUUUEwOTknLFxyXG4gICAgbW9uZXlPbGQ6IDQwMDAwMDAsXHJcbiAgICBtb25leU5ldzogMzUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9kaWVubWF5Y2hvbG9uLnZuL3B1YmxpYy91c2VydXBsb2FkL2ltYWdlcy9rZSUyMHRpdmklMjBnbyUyMGNhbyUyMGNhcC5wbmcnLFxyXG4gICAgdGl0bGU6ICdL4buHIFRpdmkgcGjDsm5nIGtow6FjaCcsXHJcbiAgICBtb25leU9sZDogNjAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiA1MDAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL25vaXRoYXR0aGFpYmluaC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvZ2l1b25nLW5ndS1nby1nby1kby05NjU2LmpwZycsXHJcbiAgICB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyBj4buVIMSRaeG7g24gLSBHTkNEMDEnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0dGhhaWJpbmguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2dpdW9uZy1uZ3UtZ28tZ28tZG8tOTY1Ni5qcGcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgdGjhu51pIHRyYW5nIC0gRzAwMycsXHJcbiAgICBtb25leU9sZDogNDUwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAzNTAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL25vaXRoYXR0aGFpYmluaC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvZ2l1b25nLW5ndS1nby1nby1kby05NjU2LmpwZycsXHJcbiAgICB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyBj4buVIMSRaeG7g24gLSBHTkNEMDEnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0dGhhaWJpbmguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2dpdW9uZy1uZ3UtZ28tZ28tZG8tOTY1Ni5qcGcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgdGjhu51pIHRyYW5nIC0gRzAwMycsXHJcbiAgICBtb25leU9sZDogNDUwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAzNTAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL3d3dy5uaGFkZXBraWVudHJ1Yy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDYvdHUtcXVhbi1hby1nby1kZXAtMDEuanBnJyxcclxuICAgIHRpdGxlOiAnVOG7pyBxdeG6p24gw6FvIMSR4bq5cC0gVFFBMDk5JyxcclxuICAgIG1vbmV5T2xkOiA0MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDM1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vZGllbm1heWNob2xvbi52bi9wdWJsaWMvdXNlcnVwbG9hZC9pbWFnZXMva2UlMjB0aXZpJTIwZ28lMjBjYW8lMjBjYXAucG5nJyxcclxuICAgIHRpdGxlOiAnS+G7hyBUaXZpIHBow7JuZyBraMOhY2gnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTAwMDAwMCxcclxuICB9LFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgbWFpblVSTCxcclxuICB1cGdyYWRlUGxhblVSTCxcclxuICB1cGdyYWRlSWNvblVSTCxcclxuICBsb2dvVVJMLFxyXG4gIGFwaUJhc2VVUkwsXHJcbiAgYXBpR3JhcGhRTFVSTCxcclxuICBnb29nbGVMb2dpbixcclxuICB6YWxvTG9naW4sXHJcbiAgZmFjZWJvb2tMb2dpbixcclxuICB1cmxJbWFnZUFkU2VsbExlYXNlLFxyXG4gIHVybEltYWdlQnJva2VyLFxyXG4gIHVybEltYWdlUHJvamVjdCxcclxuICBpbWFnZURlZmF1bHRCcm9rZXIsXHJcbiAgaW1hZ2VEZWZhdWx0UHJvamVjdCxcclxuICBpbWFnZURlZmF1bHRTbGlkZXIsXHJcbiAgZ29vZ2xlQW5hbHl0aWNzQ29kZSxcclxuICBnb29nbGVTZWFyY2hDb25zb2xlLFxyXG4gIGxvY2FsU3RvcmFnZUNvbXBhcmVLZXksXHJcbiAgYWRTZWxsTGVhc2VUeXBlLFxyXG4gIGxvY2FsU3RvcmFnZVZpZXdlZCxcclxuICBsb2NhbFN0b3JhZ2VQcm9qZWN0Vmlld2VkLFxyXG4gIGFkU2VsbExlYXNlQ2F0ZWdvcnksXHJcbiAgdGl0bGVzLFxyXG4gIGxpc3RNZW51LFxyXG4gIHByb2R1Y3RzLFxyXG59O1xyXG4iLCJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5jb25zdCBDT1VOVF9WSUVXX0FEX1NFTExfTEVBU0UgPSBncWxgXHJcbiAgbXV0YXRpb24gYWRTZWxsTGVhc2VWaWV3VXBkYXRlICgkaW5wdXQ6IFVwZGF0ZUFkU2VsbExlYXNlVmlld0lucHV0ISkge1xyXG4gICAgYWRTZWxsTGVhc2VWaWV3VXBkYXRlIChpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQUREX0FEX1NFTExfTEVBU0VfV0lTSF9MSVNUID0gZ3FsIGBcclxuICBtdXRhdGlvbiBhZFNlbGxMZWFzZVdpc2hsaXN0ICgkaW5wdXQ6IEFkU2VsbExlYXNlV2lzaGxpc3RJbnB1dCEpIHtcclxuICAgIGFkU2VsbExlYXNlV2lzaGxpc3QgKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBRERfQURfU0VMTF9MRUFTRV9DT01NRU5UID0gZ3FsIGBcclxuICBtdXRhdGlvbiBhZFNlbGxMZWFzZUNvbW1lbnRDcmVhdGUgKCRpbnB1dDogQWRTZWxsTGVhc2VDb21tZW50SW5wdXQhKSB7XHJcbiAgICBhZFNlbGxMZWFzZUNvbW1lbnRDcmVhdGUgKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCB7XHJcbiAgQ09VTlRfVklFV19BRF9TRUxMX0xFQVNFLFxyXG4gIEFERF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVCxcclxuICBBRERfQURfU0VMTF9MRUFTRV9DT01NRU5UXHJcbn1cclxuIiwiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuY29uc3QgR0VUX0FEX1NFTExfTEVBU0VTID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFkU2VsbExlYXNlcyAoJHBhZ2U6IEludCEsICRsaW1pdDogSW50ISwgJGZpbHRlcjogU3RyaW5nISkge1xyXG4gICAgYWRTZWxsTGVhc2VzIChwYWdlOiAkcGFnZSwgZmlsdGVyOiAkZmlsdGVyLCBsaW1pdDogJGxpbWl0KSB7XHJcbiAgICAgIHBhZ2VJbmZvIHtcclxuICAgICAgICBoYXNOZXh0UGFnZVxyXG4gICAgICAgIGhhc1ByZXZpb3VzUGFnZVxyXG4gICAgICB9XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgc2VvX3RpdGxlXHJcbiAgICAgICAgICBjcmVhdGVkX2F0XHJcbiAgICAgICAgICB1cGRhdGVkX2F0XHJcbiAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICBwcm9qZWN0XHJcbiAgICAgICAgICBsZW5ndGhcclxuICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICBmbG9vcl9udW1iZXJcclxuICAgICAgICAgIGxpdmluZ19yb29tX251bWJlclxyXG4gICAgICAgICAgdmlld19jb3VudFxyXG4gICAgICAgICAgbGlrZV9zdGF0dXNcclxuICAgICAgICAgIHByaWNlIHtcclxuICAgICAgICAgICAgdW5pdFxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXZhdGFyIHtcclxuICAgICAgICAgICAgYWx0X3RleHRcclxuICAgICAgICAgICAgc3JjXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhZGRyZXNzIHtcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICB3YXJkXHJcbiAgICAgICAgICAgIGRpc3RyaWN0XHJcbiAgICAgICAgICAgIGNpdHlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnRhY3Qge1xyXG4gICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGFkZHJlc3NcclxuICAgICAgICAgICAgbW9iaWxlXHJcbiAgICAgICAgICAgIHBob25lXHJcbiAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhcmVhIHtcclxuICAgICAgICAgICAgdW5pdFxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhPTUVfR0VUX0FEX1NFTExfTEVBU0VTID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFkU2VsbExlYXNlcyAoJHBhZ2U6IEludCEsICRsaW1pdDogSW50ISwgJGZpbHRlcjogU3RyaW5nISkge1xyXG4gICAgYWRTZWxsTGVhc2VzIChwYWdlOiAkcGFnZSwgZmlsdGVyOiAkZmlsdGVyLCBsaW1pdDogJGxpbWl0KSB7XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgc2VvX3RpdGxlXHJcbiAgICAgICAgICBjcmVhdGVkX2F0XHJcbiAgICAgICAgICB1cGRhdGVkX2F0XHJcbiAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICBwcm9qZWN0XHJcbiAgICAgICAgICBsZW5ndGhcclxuICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICBmbG9vcl9udW1iZXJcclxuICAgICAgICAgIGxpdmluZ19yb29tX251bWJlclxyXG4gICAgICAgICAgdmlld19jb3VudFxyXG4gICAgICAgICAgbGlrZV9zdGF0dXNcclxuICAgICAgICAgIHByaWNlIHtcclxuICAgICAgICAgICAgdW5pdFxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXZhdGFyIHtcclxuICAgICAgICAgICAgYWx0X3RleHRcclxuICAgICAgICAgICAgc3JjXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhZGRyZXNzIHtcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICB3YXJkXHJcbiAgICAgICAgICAgIGRpc3RyaWN0XHJcbiAgICAgICAgICAgIGNpdHlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnRhY3Qge1xyXG4gICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGFkZHJlc3NcclxuICAgICAgICAgICAgbW9iaWxlXHJcbiAgICAgICAgICAgIHBob25lXHJcbiAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhcmVhIHtcclxuICAgICAgICAgICAgdW5pdFxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdFVF9BRF9TRUxMX0xFQVNFU19CWV9TTFVHID0gZ3FsYFxyXG4gIHF1ZXJ5IGFkU2VsbExlYXNlICgkc2x1ZzogU3RyaW5nKSB7XHJcbiAgICBhZFNlbGxMZWFzZSAoc2x1ZzogJHNsdWcpIHtcclxuICAgICAgaWRcclxuICAgICAgdGl0bGVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgc2VvX3RpdGxlXHJcbiAgICAgIHNlb19kZXNjcmlwdGlvblxyXG4gICAgICBzbHVnXHJcbiAgICAgIHByb2plY3RcclxuICAgICAgbGVuZ3RoXHJcbiAgICAgIHdpZHRoXHJcbiAgICAgIGZsb29yX251bWJlclxyXG4gICAgICBsaXZpbmdfcm9vbV9udW1iZXJcclxuICAgICAgdmlld19jb3VudFxyXG4gICAgICB1c2VyXHJcbiAgICAgIGZyb250X3dpZHRoXHJcbiAgICAgIHJvYWRfd2lkdGhcclxuICAgICAgcHJpY2Uge1xyXG4gICAgICAgIHVuaXRcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICAgIGhvbWVfZGlyZWN0aW9uIHtcclxuICAgICAgICB0ZXh0XHJcbiAgICAgIH1cclxuICAgICAgYmFsY29ueV9kaXJlY3Rpb24ge1xyXG4gICAgICAgIHRleHRcclxuICAgICAgfVxyXG4gICAgICBhdmF0YXIge1xyXG4gICAgICAgIGFsdF90ZXh0XHJcbiAgICAgICAgc3JjXHJcbiAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgfVxyXG4gICAgICBhZGRyZXNzIHtcclxuICAgICAgICB0ZXh0XHJcbiAgICAgICAgd2FyZFxyXG4gICAgICAgIGRpc3RyaWN0XHJcbiAgICAgICAgY2l0eVxyXG4gICAgICB9XHJcbiAgICAgIGFyZWEge1xyXG4gICAgICAgIHVuaXRcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICAgIGltYWdlIHtcclxuICAgICAgICBhbHRfdGV4dFxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBzcmNcclxuICAgICAgfVxyXG4gICAgICB0eXBlIHtcclxuICAgICAgICB0eXBlMVxyXG4gICAgICAgIHR5cGUyXHJcbiAgICAgICAgdGV4dFxyXG4gICAgICB9XHJcbiAgICAgIHN0YXR1c1xyXG4gICAgICBqdXJpZGljYWxfdHlwZSB7XHJcbiAgICAgICAgdGV4dFxyXG4gICAgICB9XHJcbiAgICAgIHN0cmVldF90eXBlIHtcclxuICAgICAgICB0ZXh0XHJcbiAgICAgIH1cclxuICAgICAgcHJvamVjdFxyXG4gICAgICBzZW9fdGl0bGVcclxuICAgICAgZmxvb3JfbnVtYmVyXHJcbiAgICAgIGxpdmluZ19yb29tX251bWJlclxyXG4gICAgICBiZWRfcm9vbV9udW1iZXJcclxuICAgICAgdG9pbGV0X3Jvb21fbnVtYmVyXHJcbiAgICAgIGdhcmFfbnVtYmVyXHJcbiAgICAgIG1hdGVyaWFsIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHRleHRcclxuICAgICAgfVxyXG4gICAgICBpc19iYXNlbWVudFxyXG4gICAgICBpc19jYXJfaW50b19ob21lXHJcbiAgICAgIGlzX2Nvcm5lclxyXG4gICAgICBpc19lbGV2YXRvclxyXG4gICAgICBmdXJuaXR1cmVcclxuICAgICAgd2lkdGhcclxuICAgICAgbGVuZ3RoXHJcbiAgICAgIHllYXJfYnVpbHRcclxuICAgICAgdmlkZW9cclxuICAgICAgbGlrZV9zdGF0dXNcclxuICAgICAgbWFwIHtcclxuICAgICAgICBsYXRcclxuICAgICAgICBsbmdcclxuICAgICAgfVxyXG4gICAgICBjcmVhdGVkX2F0XHJcbiAgICAgIHVwZGF0ZWRfYXRcclxuICAgICAgY29udGFjdCB7XHJcbiAgICAgICAgaW1hZ2VcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgYWRkcmVzc1xyXG4gICAgICAgIG1vYmlsZVxyXG4gICAgICAgIHBob25lXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgR0VUX0FEX1NFTExfTEVBU0VTX0JZX0lEID0gZ3FsYFxyXG4gIHF1ZXJ5IGFkU2VsbExlYXNlICgkaWQ6IFN0cmluZykge1xyXG4gICAgYWRTZWxsTGVhc2UgKGlkOiAkaWQpIHtcclxuICAgICAgc2x1Z1xyXG4gICAgICB0aXRsZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBzZW9fdGl0bGVcclxuICAgICAgc2VvX2Rlc2NyaXB0aW9uXHJcbiAgICAgIHNsdWdcclxuICAgICAgcHJvamVjdFxyXG4gICAgICBsZW5ndGhcclxuICAgICAgd2lkdGhcclxuICAgICAgZmxvb3JfbnVtYmVyXHJcbiAgICAgIGxpdmluZ19yb29tX251bWJlclxyXG4gICAgICB2aWV3X2NvdW50XHJcbiAgICAgIHByaWNlIHtcclxuICAgICAgICB1bml0XHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgfVxyXG4gICAgICBhdmF0YXIge1xyXG4gICAgICAgIGFsdF90ZXh0XHJcbiAgICAgICAgc3JjXHJcbiAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgfVxyXG4gICAgICBhZGRyZXNzIHtcclxuICAgICAgICB0ZXh0XHJcbiAgICAgICAgd2FyZFxyXG4gICAgICAgIGRpc3RyaWN0XHJcbiAgICAgICAgY2l0eVxyXG4gICAgICB9XHJcbiAgICAgIGFyZWEge1xyXG4gICAgICAgIHVuaXRcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICAgIGltYWdlIHtcclxuICAgICAgICBhbHRfdGV4dFxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBzcmNcclxuICAgICAgfVxyXG4gICAgICB0eXBlIHtcclxuICAgICAgICB0eXBlMVxyXG4gICAgICAgIHR5cGUyXHJcbiAgICAgICAgdGV4dFxyXG4gICAgICB9XHJcbiAgICAgIHN0YXR1c1xyXG4gICAgICBqdXJpZGljYWxfdHlwZSB7XHJcbiAgICAgICAgdGV4dFxyXG4gICAgICB9XHJcbiAgICAgIHN0cmVldF90eXBlIHtcclxuICAgICAgICB0ZXh0XHJcbiAgICAgIH1cclxuICAgICAgcHJvamVjdFxyXG4gICAgICBzZW9fdGl0bGVcclxuICAgICAgZmxvb3JfbnVtYmVyXHJcbiAgICAgIGxpdmluZ19yb29tX251bWJlclxyXG4gICAgICBiZWRfcm9vbV9udW1iZXJcclxuICAgICAgdG9pbGV0X3Jvb21fbnVtYmVyXHJcbiAgICAgIGdhcmFfbnVtYmVyXHJcbiAgICAgIG1hdGVyaWFsIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHRleHRcclxuICAgICAgfVxyXG4gICAgICBpc19iYXNlbWVudFxyXG4gICAgICBpc19jYXJfaW50b19ob21lXHJcbiAgICAgIGlzX2Nvcm5lclxyXG4gICAgICBpc19lbGV2YXRvclxyXG4gICAgICBmdXJuaXR1cmVcclxuICAgICAgd2lkdGhcclxuICAgICAgbGVuZ3RoXHJcbiAgICAgIHllYXJfYnVpbHRcclxuICAgICAgdmlkZW9cclxuICAgICAgbGlrZV9zdGF0dXNcclxuICAgICAgbWFwIHtcclxuICAgICAgICBsYXRcclxuICAgICAgICBsbmdcclxuICAgICAgfVxyXG4gICAgICBjcmVhdGVkX2F0XHJcbiAgICAgIHVwZGF0ZWRfYXRcclxuICAgICAgY29udGFjdCB7XHJcbiAgICAgICAgaW1hZ2VcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgYWRkcmVzc1xyXG4gICAgICAgIG1vYmlsZVxyXG4gICAgICAgIHBob25lXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdFVF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVCA9IGdxbCBgXHJcbiAgcXVlcnkgYWRTZWxsTGVhc2VXaXNobGlzdHMgKCRmaWx0ZXI6U3RyaW5nISwgJGxpbWl0OkludCEsICRwYWdlOkludCEpIHtcclxuICAgIGFkU2VsbExlYXNlV2lzaGxpc3RzKGZpbHRlcjokZmlsdGVyLCBsaW1pdDokbGltaXQsIHBhZ2U6JHBhZ2UpIHtcclxuICAgICAgcGFnZUluZm8ge1xyXG4gICAgICAgIGhhc05leHRQYWdlXHJcbiAgICAgICAgaGFzUHJldmlvdXNQYWdlXHJcbiAgICAgIH1cclxuICAgICAgZWRnZXMge1xyXG4gICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgYWRfc2VsbF9sZWFzZSB7XHJcbiAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIHNlb190aXRsZVxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0XHJcbiAgICAgICAgICAgIHVwZGF0ZWRfYXRcclxuICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICBwcm9qZWN0XHJcbiAgICAgICAgICAgIGxlbmd0aFxyXG4gICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICBmbG9vcl9udW1iZXJcclxuICAgICAgICAgICAgdmlld19jb3VudFxyXG4gICAgICAgICAgICBsaXZpbmdfcm9vbV9udW1iZXJcclxuICAgICAgICAgICAgbGlrZV9zdGF0dXNcclxuICAgICAgICAgICAgcHJpY2Uge1xyXG4gICAgICAgICAgICAgIHVuaXRcclxuICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF2YXRhciB7XHJcbiAgICAgICAgICAgICAgYWx0X3RleHRcclxuICAgICAgICAgICAgICBzcmNcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZHJlc3Mge1xyXG4gICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICB3YXJkXHJcbiAgICAgICAgICAgICAgZGlzdHJpY3RcclxuICAgICAgICAgICAgICBjaXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGFjdCB7XHJcbiAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgYWRkcmVzc1xyXG4gICAgICAgICAgICAgIG1vYmlsZVxyXG4gICAgICAgICAgICAgIHBob25lXHJcbiAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcmVhIHtcclxuICAgICAgICAgICAgICB1bml0XHJcbiAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuZXhwb3J0IHtcclxuICBHRVRfQURfU0VMTF9MRUFTRVMsXHJcbiAgR0VUX0FEX1NFTExfTEVBU0VTX0JZX1NMVUcsXHJcbiAgSE9NRV9HRVRfQURfU0VMTF9MRUFTRVMsXHJcbiAgR0VUX0FEX1NFTExfTEVBU0VTX0JZX0lELFxyXG4gIEdFVF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVFxyXG59XHJcbiIsImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmNvbnN0IENPVU5UX1ZJRVdfUFJPSkVDVCA9IGdxbGBcclxuICBtdXRhdGlvbiBwcm9qZWN0Vmlld1VwZGF0ZSAoJGlucHV0OiBVcGRhdGVQcm9qZWN0Vmlld0lucHV0ISkge1xyXG4gICAgcHJvamVjdFZpZXdVcGRhdGUgKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgaWRcclxuICAgICAgdmlld19jb3VudFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFERF9QUk9KRUNUX1dJU0hfTElTVCA9IGdxbGBcclxuICBtdXRhdGlvbiBwcm9qZWN0V2lzaExpc3QoJGlucHV0OiAgUHJvamVjdFdpc2hsaXN0SW5wdXQhKSB7XHJcbiAgICBwcm9qZWN0V2lzaGxpc3QgKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCB7XHJcbiAgQ09VTlRfVklFV19QUk9KRUNULFxyXG4gIEFERF9QUk9KRUNUX1dJU0hfTElTVFxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IGFkZFRyYWNraW5nID0gKGFkU2VsbExlYXNlSWQ6IHN0cmluZywgdHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgYXhpb3MuZ2V0KCdodHRwczovL2dyYXBoLm5oYWRhdG1vaS5uZXQvdXNlci10cmFja2luZycsIHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBhZF9zZWxsX2xlYXNlX2lkOiBhZFNlbGxMZWFzZUlkLFxyXG4gICAgICB0eXBlX3RyYWNraW5nOiB0eXBlXHJcbiAgICB9XHJcbiAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhZGRUcmFja2luZ1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IFN0cmluZ1Byb2Nlc3MgZnJvbSBcIi4vc3RyaW5nUHJvY2Vzc1wiO1xyXG5cclxuY29uc3QgcHJpY2VQcm9jZXNzID0gKHByaWNlVmFsdWU6IHN0cmluZ3xudWxsLCBwcmljZVVuaXQ6IHN0cmluZ3xudWxsKSA9PiB7XHJcbiAgaWYgKCFwcmljZVZhbHVlIHx8IE51bWJlcihwcmljZVZhbHVlKSA9PT0gMCkge1xyXG4gICAgcmV0dXJuICdHacOhIGxpw6puIGjhu4cnXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmb3JtYXRQcmljZVZhbHVlKHByaWNlVmFsdWUsIHByaWNlVW5pdCkgKyAnICcgKyBnZXRQcmljZVVuaXQocHJpY2VWYWx1ZSwgcHJpY2VVbml0KTtcclxuICB9XHJcbn07XHJcblxyXG5sZXQgbWlsbGlvblVuaXQgPSAndHJp4buHdSc7XHJcbmxldCBiaWxsaW9uVW5pdCA9ICd04buJJztcclxuXHJcbmNvbnN0IGZvcm1hdFByaWNlVmFsdWUgPSAocHJpY2VWYWx1ZTogc3RyaW5nfG51bGwsIHByaWNlVW5pdDogc3RyaW5nfG51bGwpID0+IHtcclxuICBpZiAocHJpY2VWYWx1ZSAmJiBwcmljZVVuaXQgJiYgKHByaWNlVW5pdCA9PT0gJ21pbGxpb24nIHx8IHByaWNlVW5pdCA9PT0gJ3RyaeG7h3UnKSkge1xyXG4gICAgbGV0IHByaWNlVmFsdWVOdW1iZXIgPSBOdW1iZXIocHJpY2VWYWx1ZSk7XHJcbiAgICBpZiAocHJpY2VWYWx1ZU51bWJlciA8IDEwMDApIHtcclxuICAgICAgcHJpY2VWYWx1ZU51bWJlciA9IE1hdGgucm91bmQocHJpY2VWYWx1ZU51bWJlciAqIDEwMCkvMTAwO1xyXG4gICAgICByZXR1cm4gU3RyaW5nUHJvY2Vzcy5hZGRDb21tYXMoU3RyaW5nKE51bWJlcihwcmljZVZhbHVlTnVtYmVyKSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJpY2VWYWx1ZU51bWJlciA9IHByaWNlVmFsdWVOdW1iZXIvMTAwMDtcclxuICAgICAgcHJpY2VWYWx1ZU51bWJlciA9IE1hdGgucm91bmQocHJpY2VWYWx1ZU51bWJlciAqIDEwMCkvMTAwO1xyXG4gICAgICByZXR1cm4gU3RyaW5nUHJvY2Vzcy5hZGRDb21tYXMoU3RyaW5nKE51bWJlcihwcmljZVZhbHVlTnVtYmVyKSkpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gU3RyaW5nUHJvY2Vzcy5hZGRDb21tYXMoU3RyaW5nKE51bWJlcihwcmljZVZhbHVlKSkpO1xyXG4gIH1cclxufTtcclxuY29uc3QgZ2V0UHJpY2VVbml0ID0gKHByaWNlVmFsdWU6IHN0cmluZ3xudWxsLCBwcmljZVVuaXQ6IHN0cmluZ3xudWxsKSA9PiB7XHJcbiAgaWYgKHByaWNlVmFsdWUgJiYgcHJpY2VVbml0ICYmIChwcmljZVVuaXQgPT09ICdtaWxsaW9uJyB8fCBwcmljZVVuaXQgPT09ICd0cmnhu4d1JykpIHtcclxuICAgIGxldCBwcmljZVZhbHVlTnVtYmVyID0gTnVtYmVyKHByaWNlVmFsdWUpO1xyXG4gICAgaWYgKHByaWNlVmFsdWVOdW1iZXIgPCAxMDAwKSB7XHJcbiAgICAgIHJldHVybiBtaWxsaW9uVW5pdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBiaWxsaW9uVW5pdDtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuICgocHJpY2VVbml0KT9wcmljZVVuaXQ6J8SR4buTbmcnKVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcmljZVByb2Nlc3NcclxufTtcclxuXHJcbiIsImNvbnN0IGFkZENvbW1hcyA9IChpbnB1dFN0cmluZzogc3RyaW5nKSA9PiB7XHJcbiAgbGV0IHJ4PSAgLyhcXGQrKShcXGR7M30pLztcclxuICByZXR1cm4gU3RyaW5nKGlucHV0U3RyaW5nKS5yZXBsYWNlKC9eXFxkKy8sIGZ1bmN0aW9uKHcpe1xyXG4gICAgd2hpbGUocngudGVzdCh3KSl7XHJcbiAgICAgIHc9IHcucmVwbGFjZShyeCwgJyQxLiQyJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdztcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldE1vbnRocyA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgJzEnIDogJzAxJyxcclxuICAgICcyJyA6ICcwMicsXHJcbiAgICAnMycgOiAnMDMnLFxyXG4gICAgJzQnIDogJzA0JyxcclxuICAgICc1JyA6ICcwNScsXHJcbiAgICAnNicgOiAnMDYnLFxyXG4gICAgJzcnIDogJzA3JyxcclxuICAgICc4JyA6ICcwOCcsXHJcbiAgICAnOScgOiAnMDknLFxyXG4gICAgJzEwJyA6ICcxMCcsXHJcbiAgICAnMTEnIDogJzExJyxcclxuICAgICcxMicgOiAnMTInLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRHZW5kZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgICdmZW1hbGUnIDogJ07hu68nLFxyXG4gICAgJ21hbGUnIDogJ05hbScsXHJcbiAgICAnbm9uZScgOiAnS2jDtG5nIHjDoWMgxJHhu4tuaCdcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXREYXlzID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAnMScgOiAnMDEnLFxyXG4gICAgJzInIDogJzAyJyxcclxuICAgICczJyA6ICcwMycsXHJcbiAgICAnNCcgOiAnMDQnLFxyXG4gICAgJzUnIDogJzA1JyxcclxuICAgICc2JyA6ICcwNicsXHJcbiAgICAnNycgOiAnMDcnLFxyXG4gICAgJzgnIDogJzA4JyxcclxuICAgICc5JyA6ICcwOScsXHJcbiAgICAnMTAnIDogJzEwJyxcclxuICAgICcxMScgOiAnMTEnLFxyXG4gICAgJzEyJyA6ICcxMicsXHJcbiAgICAnMTMnIDogJzEzJyxcclxuICAgICcxNCcgOiAnMTQnLFxyXG4gICAgJzE1JyA6ICcxNScsXHJcbiAgICAnMTYnIDogJzE2JyxcclxuICAgICcxNycgOiAnMTcnLFxyXG4gICAgJzE4JyA6ICcxOCcsXHJcbiAgICAnMTknIDogJzE5JyxcclxuICAgICcyMCcgOiAnMjAnLFxyXG4gICAgJzIxJyA6ICcyMScsXHJcbiAgICAnMjInIDogJzIyJyxcclxuICAgICcyMycgOiAnMjMnLFxyXG4gICAgJzI0JyA6ICcyNCcsXHJcbiAgICAnMjUnIDogJzI1JyxcclxuICAgICcyNicgOiAnMjYnLFxyXG4gICAgJzI3JyA6ICcyNycsXHJcbiAgICAnMjgnIDogJzI4JyxcclxuICAgICcyOScgOiAnMjknLFxyXG4gICAgJzMwJyA6ICczMCcsXHJcbiAgICAnMzEnIDogJzMxJ1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCB0cnVuY2F0ZVN0cmluZyA9IChzdHJpbmc6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGVuZGluZzogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKGxlbmd0aCA9PT0gbnVsbCkge1xyXG4gICAgbGVuZ3RoID0gMTAwO1xyXG4gIH1cclxuICBpZiAoZW5kaW5nID09PSBudWxsKSB7XHJcbiAgICBlbmRpbmcgPSAnLi4uJztcclxuICB9XHJcbiAgaWYgKHN0cmluZy5sZW5ndGggPiBsZW5ndGgpIHtcclxuICAgIHJldHVybiBzdHJpbmcuc3Vic3RyaW5nKDAsIGxlbmd0aCAtIGVuZGluZy5sZW5ndGgpICsgZW5kaW5nO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gc3RyaW5nO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHN0cmlwVGFncyA9IChpbnB1dDogc3RyaW5nLCBhbGxvd2VkOiBzdHJpbmcpID0+IHtcclxuICBhbGxvd2VkID0gKCgoYWxsb3dlZCB8fCAnJykgKyAnJykudG9Mb3dlckNhc2UoKS5tYXRjaCgvPFthLXpdW2EtejAtOV0qPi9nKSB8fCBbXSkuam9pbignJyk7XHJcbiAgY29uc3QgdGFncyA9IC88XFwvPyhbYS16XVthLXowLTldKilcXGJbXj5dKj4vZ2k7XHJcbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UodGFncywgKCQwLCAkMSkgPT4gKGFsbG93ZWQuaW5kZXhPZignPCcgKyAkMS50b0xvd2VyQ2FzZSgpICsgJz4nKSA+IC0xID8gJDAgOiAnJykpO1xyXG59O1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCBzdHJpcFByb3BlcnRpZXMgPSAoaW5wdXQsIGFsbG93ZWQpID0+IHtcclxuICBhbGxvd2VkID0gKCgoYWxsb3dlZCB8fCAnJykgKyAnJykudG9Mb3dlckNhc2UoKS5tYXRjaCgvW2Etel1bYS16MC05XSovZykgfHwgW10pLmpvaW4oJycpO1xyXG4gIGNvbnN0IHByb3BlcnRpZXMgPSAvXFxzKFthLXpdW2EtejAtOV0qKT1cIlteXCJdKlwiL2dpO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICByZXR1cm4gaW5wdXQucmVwbGFjZShwcm9wZXJ0aWVzLCAoJDAsICQxKSA9PiAoYWxsb3dlZC5pbmRleE9mKCQxLnRvTG93ZXJDYXNlKCkpID4gLTEgPyAkMCA6ICcnKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgdHJ1bmNhdGVTdHJpbmcsXHJcbiAgZ2V0RGF5cyxcclxuICBnZXRHZW5kZXIsXHJcbiAgZ2V0TW9udGhzLFxyXG4gIGFkZENvbW1hcyxcclxuICBzdHJpcFRhZ3MsXHJcbiAgc3RyaXBQcm9wZXJ0aWVzXHJcbn07XHJcblxyXG4iLCJpbXBvcnQge1xyXG4gIHVybEltYWdlQWRTZWxsTGVhc2UsXHJcbiAgdXJsSW1hZ2VQcm9qZWN0LFxyXG4gIHVybEltYWdlQnJva2VyLFxyXG4gIGltYWdlRGVmYXVsdFByb2plY3QsXHJcbiAgaW1hZ2VEZWZhdWx0QnJva2VyXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgcHJvY2Vzc0ltYWdlVXJsID0gKGltYWdlVXJsOiBzdHJpbmd8dW5kZWZpbmVkLCB0eXBlOiBzdHJpbmcpID0+IHtcclxuICBsZXQgc3RhdHVzVXJsID0gdmFsaWRVUkwoaW1hZ2VVcmwpO1xyXG4gIGlmIChzdGF0dXNVcmwgJiYgaW1hZ2VVcmwpIHtcclxuICAgIGltYWdlVXJsID0gaW1hZ2VVcmwucmVwbGFjZSgvbmhhZGF0bW9pLnMzLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb20vZywgXCJzdGF0aWMubmhhZGF0bW9pLm5ldFwiKTtcclxuICAgIGltYWdlVXJsID0gaW1hZ2VVcmwucmVwbGFjZSgvbmhhZGF0bW9pLnMzLWFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb20vZywgXCJzdGF0aWMubmhhZGF0bW9pLm5ldFwiKTtcclxuICAgIGltYWdlVXJsID0gaW1hZ2VVcmwucmVwbGFjZSgvbmhhZGF0bW9pLnMzLmFtYXpvbmF3cy5jb20vZywgXCJzdGF0aWMubmhhZGF0bW9pLm5ldFwiKTtcclxuICAgIGltYWdlVXJsID0gaW1hZ2VVcmwucmVwbGFjZSgvaHR0cDpcXC9cXC8vZywgXCJodHRwczovL1wiKTtcclxuICAgIGlmIChpbWFnZVVybCA9PT0gJ2h0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGF0YS9hZF9zZWxsX2xlYXNlX2ltYWdlLycgfHwgaW1hZ2VVcmwgPT09ICdodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RhdGEvcHJvamVjdF9pbWFnZS8nKSB7XHJcbiAgICAgIHJldHVybiBnZXRJbWFnZURlZmF1bHRCeVR5cGUodHlwZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW1hZ2VVcmw7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICghaW1hZ2VVcmwgfHwgaW1hZ2VVcmwgPT09ICcnIHx8IGltYWdlVXJsID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBnZXRJbWFnZURlZmF1bHRCeVR5cGUodHlwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgYmFzZVVybCA9IGdldEJhc2VVcmxCeVR5cGUodHlwZSk7XHJcbiAgICAgIHJldHVybiBiYXNlVXJsICsgaW1hZ2VVcmw7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0QmFzZVVybEJ5VHlwZSA9ICh0eXBlOiBzdHJpbmcpID0+IHtcclxuICBsZXQgYmFzZVVybCA9ICcnO1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnYWRfc2VsbF9sZWFzZSc6XHJcbiAgICAgIGJhc2VVcmwgPSB1cmxJbWFnZUFkU2VsbExlYXNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ3Byb2plY3QnOlxyXG4gICAgICBiYXNlVXJsID0gdXJsSW1hZ2VQcm9qZWN0O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2Jyb2tlcic6XHJcbiAgICAgIGJhc2VVcmwgPSB1cmxJbWFnZUJyb2tlcjtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiBiYXNlVXJsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW1hZ2VEZWZhdWx0QnlUeXBlID0gKHR5cGU6IHN0cmluZykgPT4ge1xyXG4gIGxldCBpbWFnZURlZmF1bHQgPSAnJztcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgJ2FkX3NlbGxfbGVhc2UnOlxyXG4gICAgICBpbWFnZURlZmF1bHQgPSBpbWFnZURlZmF1bHRQcm9qZWN0O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ3Byb2plY3QnOlxyXG4gICAgICBpbWFnZURlZmF1bHQgPSBpbWFnZURlZmF1bHRQcm9qZWN0O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2Jyb2tlcic6XHJcbiAgICAgIGltYWdlRGVmYXVsdCA9IGltYWdlRGVmYXVsdEJyb2tlcjtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiBpbWFnZURlZmF1bHQ7XHJcbn07XHJcblxyXG5jb25zdCB2YWxpZFVSTCA9IChzdHI6IHN0cmluZ3x1bmRlZmluZWQpID0+IHtcclxuICBpZiAoIXN0ciB8fCBzdHIgPT09ICcnIHx8IHN0ciA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoc3RyLmluZGV4T2YoJ2h0dHAnKSAhPT0gLTEpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb2Nlc3NJbWFnZVVybFxyXG59O1xyXG5cclxuIiwiY29uc3QgaXNCbGFuayA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAwIHx8IHZhbHVlID09PSAnJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgKHZhbHVlLmxlbmd0aCA8PSAwIHx8IHZhbHVlLnRyaW0oKS5sZW5ndGggPD0gMCkpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICByZXR1cm4gaXNFbXB0eSh2YWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBpc0VtcHR5ID0gKG9iajogYW55KSA9PiB7XHJcbiAgZm9yKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmNvbnN0IGlzTnVtYmVyID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICBpZiAoaXNCbGFuayh2YWx1ZSkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpO1xyXG59O1xyXG5cclxuY29uc3QgaXNFbWFpbCA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKGlzQmxhbmsodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGxldCBlbWFpbCA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gIHJldHVybiBlbWFpbC50ZXN0KHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGlzU2x1ZyA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKGlzQmxhbmsodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGxldCBzbHVnID0gL15bQS1aYS16MC05XSsoPzotW0EtWmEtejAtOV0rKSokL1xyXG4gIHJldHVybiBzbHVnLnRlc3QodmFsdWUpO1xyXG59O1xyXG5cclxuY29uc3QgaXNVcmwgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmIChpc0JsYW5rKHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBsZXQgcmVnZXhwID0gL14oPzooPzpodHRwcz98ZnRwKTpcXC9cXC8pPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSg/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykqKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9cXFMqKT8kLztcclxuICByZXR1cm4gcmVnZXhwLnRlc3QodmFsdWUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGlzQmxhbmssXHJcbiAgaXNFbWFpbCxcclxuICBpc0VtcHR5LFxyXG4gIGlzTnVtYmVyLFxyXG4gIGlzVXJsLFxyXG4gIGlzU2x1Z1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgbmV4dENvb2tpZSBmcm9tIFwibmV4dC1jb29raWVzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHdpdGhHQSBmcm9tIFwibmV4dC1nYVwiO1xyXG5pbXBvcnQgeyBnb29nbGVBbmFseXRpY3NDb2RlIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IEVycm9yUGFnZSBmcm9tIFwibmV4dC9lcnJvclwiO1xyXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gXCIuLi9tb2R1bGVzL3ZhbGlkYXRvclwiO1xyXG5pbXBvcnQgRXJyb3JNYWluUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9FcnJvck1haW5QYWdlJztcclxuXHJcbmNvbnN0IHByb2plY3REZXRhaWxQYXRobmFtZSA9ICcvY2hpLXRpZXQtZHUtYW4uYXNweCc7XHJcbmNvbnN0IG5ld0xhbmREZXRhaWxQYXRobmFtZSA9ICcvbmV3bGFuZC9wcm9qZWN0X2RldGFpbC5hc3B4JztcclxuY29uc3QgbmV3TGFuZEFkU2VsbExlYXNlUGF0aG5hbWUgPSAnL25ld2xhbmQvcHJvcGVydGllc19kZXRhaWwuYXNweCc7XHJcbmNvbnN0IGFkU2VsbExlYXNlRGV0YWlsUGF0aG5hbWUgPSAnL2NoaS10aWV0LXRpbi1yYW8uYXNweCc7XHJcbmNvbnN0IHByb2plY3REZXRhaWxOZXcgPSAnL2R1LWFuLyc7XHJcbmNvbnN0IGFkU2VsbExlYXNlRGV0YWlsTmV3ID0gJy90aW4tcmFvLyc7XHJcbmNvbnN0IHByb2plY3RDYXRlZ29yeSA9ICcvZHUtYW4uYXNweCc7XHJcbmNvbnN0IGFkU2VsbExlYXNlQ2F0ZWdvcnkgPSAnL3Rpbi1yYW8uYXNweCc7XHJcblxyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCwgcmVzIH06IGFueSkge1xyXG4gICAgaWYgKGN0eC5hc1BhdGgpIHtcclxuICAgICAgbGV0IHVybE9iamVjdCA9IFVybC5wYXJzZShjdHguYXNQYXRoKTtcclxuXHJcbiAgICAgIGxldCBwYXRoTmFtZSA9IHVybE9iamVjdC5wYXRobmFtZTtcclxuICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gdXJsT2JqZWN0LnF1ZXJ5O1xyXG4gICAgICBpZiAocGF0aE5hbWUgPT09ICcvbmhhLWRhdC1iYW4vJykge1xyXG4gICAgICAgIGxldCB1cmxSZWRpcmVjdCA9ICcvbmhhLWRhdC1iYW4nO1xyXG4gICAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMSwge1xyXG4gICAgICAgICAgTG9jYXRpb246IGAke3VybFJlZGlyZWN0fWBcclxuICAgICAgICB9KTtcclxuICAgICAgICBjdHgucmVzLmVuZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGF0aE5hbWUgPT09ICcvdGluLXJhby8nKSB7XHJcbiAgICAgICAgbGV0IHVybFJlZGlyZWN0ID0gJy90aW0tdGluLXJhbyc7XHJcbiAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAxLCB7XHJcbiAgICAgICAgICBMb2NhdGlvbjogYCR7dXJsUmVkaXJlY3R9YFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGN0eC5yZXMuZW5kKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwYXRoTmFtZSA9PT0gJy9kdS1hbicgfHwgcGF0aE5hbWUgPT09ICcvZHUtYW4vJyB8fCBwYXRoTmFtZSA9PT0gJy9kdS1hbi1iYXQtZG9uZy1zYW4vJykge1xyXG4gICAgICAgIGxldCB1cmxSZWRpcmVjdCA9ICcvZHUtYW4tYmF0LWRvbmctc2FuJztcclxuICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDEsIHtcclxuICAgICAgICAgIExvY2F0aW9uOiBgJHt1cmxSZWRpcmVjdH1gXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3R4LnJlcy5lbmQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHF1ZXJ5U3RyaW5nICYmIChwYXRoTmFtZSA9PT0gcHJvamVjdERldGFpbFBhdGhuYW1lIHx8IHBhdGhOYW1lID09PSBuZXdMYW5kRGV0YWlsUGF0aG5hbWUpKSB7XHJcbiAgICAgICAgbGV0IHVybFJlZGlyZWN0ID0gJy8nO1xyXG4gICAgICAgIGlmIChxdWVyeVN0cmluZy5pbmRleE9mKCdwcm9qZWN0X2lkPScpID09PSAtMSkge1xyXG4gICAgICAgICAgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZy5yZXBsYWNlKCcuaHRtbCcsICcnKTtcclxuICAgICAgICAgIHVybFJlZGlyZWN0ID0gcHJvamVjdERldGFpbE5ldyArIHF1ZXJ5U3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAxLCB7XHJcbiAgICAgICAgICBMb2NhdGlvbjogYCR7dXJsUmVkaXJlY3R9YFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGN0eC5yZXMuZW5kKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHF1ZXJ5U3RyaW5nICYmIChwYXRoTmFtZSA9PT0gYWRTZWxsTGVhc2VEZXRhaWxQYXRobmFtZSB8fCBwYXRoTmFtZSA9PT0gbmV3TGFuZEFkU2VsbExlYXNlUGF0aG5hbWUpKSB7XHJcbiAgICAgICAgbGV0IHVybFJlZGlyZWN0ID0gJy8nO1xyXG5cclxuICAgICAgICBpZiAocXVlcnlTdHJpbmcuaW5kZXhPZignYWRfc2VsbF9sZWFzZV9pZD0nKSA9PT0gLTEpIHtcclxuICAgICAgICAgIHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcucmVwbGFjZSgnLmh0bWwnLCAnJyk7XHJcbiAgICAgICAgICB1cmxSZWRpcmVjdCA9IGFkU2VsbExlYXNlRGV0YWlsTmV3ICsgcXVlcnlTdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDEsIHtcclxuICAgICAgICAgIExvY2F0aW9uOiBgJHt1cmxSZWRpcmVjdH1gXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3R4LnJlcy5lbmQoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocGF0aE5hbWUgPT09IHByb2plY3RDYXRlZ29yeSkge1xyXG4gICAgICAgIGxldCB1cmxSZWRpcmVjdCA9ICcvZHUtYW4nO1xyXG4gICAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMSwge1xyXG4gICAgICAgICAgTG9jYXRpb246IGAke3VybFJlZGlyZWN0fWBcclxuICAgICAgICB9KTtcclxuICAgICAgICBjdHgucmVzLmVuZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGF0aE5hbWUgPT09IGFkU2VsbExlYXNlQ2F0ZWdvcnkpIHtcclxuICAgICAgICBsZXQgdXJsUmVkaXJlY3QgPSAnL3RpbS10aW4tcmFvJztcclxuICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDEsIHtcclxuICAgICAgICAgIExvY2F0aW9uOiBgJHt1cmxSZWRpcmVjdH1gXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3R4LnJlcy5lbmQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwYWdlUHJvcHMgPSB7XHJcbiAgICAgIHN0YXR1c0NvZGU6IDIwMFxyXG4gICAgfTtcclxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgIH1cclxuICAgIGxldCB7IHVzZXIgfSA9IG5leHRDb29raWUoY3R4KTtcclxuICAgIHBhZ2VQcm9wcyA9IE9iamVjdC5hc3NpZ24ocGFnZVByb3BzLCB7IHVzZXI6IHVzZXIgfSk7XHJcbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmICghVmFsaWRhdG9yLmlzQmxhbmsocGFnZVByb3BzLnN0YXR1c0NvZGUpICYmIHBhZ2VQcm9wcy5zdGF0dXNDb2RlICE9PSAyMDApIHtcclxuICAgICAgcmV0dXJuIDxFcnJvck1haW5QYWdlIHN0YXR1c0NvZGU9e3BhZ2VQcm9wcy5zdGF0dXNDb2RlfSAvPjtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhHQShnb29nbGVBbmFseXRpY3NDb2RlLCBSb3V0ZXIpKE15QXBwKTtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9sb2dpbi04YjQxYzM2ZTJmNGEyMDQ0NzQ2NzU0NzI3ZTRlMjVmNC5wbmdcIjsiLCJpbXBvcnQgYXhpb3MsIHtNZXRob2R9IGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge2FwaUJhc2VVUkwsIGFwaUdyYXBoUUxVUkx9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IFwiY3Jvc3MtZmV0Y2gvcG9seWZpbGxcIjtcclxuaW1wb3J0IEFwb2xsb0NsaWVudCwge0luTWVtb3J5Q2FjaGV9IGZyb20gXCJhcG9sbG8tYm9vc3RcIjtcclxuXHJcbmNvbnN0IGNsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogYXBpQmFzZVVSTCxcclxuICB0aW1lb3V0OiAzMDAwMCxcclxufSk7XHJcblxyXG5jb25zdCBhcGkgPSAobWV0aG9kOiBNZXRob2QsIHVybDogc3RyaW5nLCBkYXRhPzogYW55KSA9PiBjbGllbnRcclxuICAucmVxdWVzdCh7XHJcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIG1ldGhvZCxcclxuICAgIHVybCxcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KVxyXG4gIC50aGVuKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5kYXRhKTtcclxuXHJcbmNvbnN0IGFwb2xsb0NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gIHVyaTogYXBpR3JhcGhRTFVSTCxcclxuICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XHJcbiAgICBhZGRUeXBlbmFtZTogZmFsc2VcclxuICB9KX0pO1xyXG5cclxuZXhwb3J0IHthcGksIGFwb2xsb0NsaWVudH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZUJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Hcm93XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FsZW5kYXJUb2RheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Vjb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRW1haWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZUJvcmRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2FtZXBhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvbmVJcGhvbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tYm9vc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3Jvc3MtZmV0Y2gvcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1nYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eC1pMThuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9