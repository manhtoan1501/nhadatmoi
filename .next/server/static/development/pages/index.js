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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rpc3BsYXkvTG9hZGluZ1BhZ2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZExpc3QvR3JpZEFkU2VsbExlYXNlcy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmlkTGlzdC9HcmlkSXRlbUFTTC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0J1dHRvblZpZXdzLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2UvYTEuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS9hMi5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL2EzLmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2UvYTQuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS9hNS5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL2E2LmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2UvYTcuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS9hOC5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL2E5LmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2Uvd2hhdDIuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS93aGF0My5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL3doYXQ0LmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvTGlzdE1lbnUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9MaXN0UHJvZHVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL05ld0hvdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL1BhcnRuZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9XaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZGV4L0FkU2VsbExlYXNlSW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5kZXgvSG90TG9jYXRpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5kZXgvU2VhcmNoSG9tZXBhZ2UuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5kZXgvVGl0bGVCbG9jay50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi9Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2gvS2V5d29yZFNsaWRlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZ3JhcGhxbC9hZF9zZWxsX2xlYXNlcy9tdXRhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ncmFwaHFsL2FkX3NlbGxfbGVhc2VzL3F1ZXJpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZ3JhcGhxbC9wcm9qZWN0L211dGF0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2dyYXBocWwvcHJvamVjdC9xdWVyaWVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvQWRTZWxsTGVhc2UvVHJhY2tpbmcudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvcHJpY2VQcm9jZXNzLnRzeCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3N0cmluZ1Byb2Nlc3MudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvdXJsUHJvY2Vzcy50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy92YWxpZGF0b3IudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL0ltYWdlL2JhZC5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL0ltYWdlL2xvZ2luLnBuZyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9JbmRleFBhZ2UuanN4Iiwid2VicGFjazovLy8uL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZUJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvd2l0aFdpZHRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcERvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEcm9wVXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FsZW5kYXJUb2RheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9EcmFmdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWNvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZUJvcmRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9HYW1lcGFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luZm9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVCZWZvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lSXBob25lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TZW5kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclJhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld0xpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWJvb3N0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcm9zcy1mZXRjaC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1vd2wtY2Fyb3VzZWwyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXgtaTE4blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiTG9hZGluZ1BhZ2UiLCJwcm9wcyIsImRvbUxvYWRpbmciLCJncmlkIiwieGwiLCJsZyIsIm1kIiwic20iLCJ4cyIsIm5ld0RvbVJlYWN0IiwiaSIsIm51bWJlckxpbWl0IiwiR3JpZExpc3QiLCJjbGFzc05hbWUiLCJncmlkRGF0YSIsIm1hcCIsImRhdGFJdGVtIiwiaW5kZXgiLCJwcmljZVZhbHVlIiwiUHJpY2VQcm9jZXNzIiwicHJpY2VQcm9jZXNzIiwibm9kZSIsInByaWNlIiwidmFsdWUiLCJ1bml0IiwiZGF0YUdyaWQiLCJpbWFnZSIsInVybFByb2Nlc3MiLCJwcm9jZXNzSW1hZ2VVcmwiLCJhdmF0YXIiLCJzcmMiLCJ0aXRsZSIsImFkZHJlc3MiLCJ0ZXh0IiwiYXJlYSIsIlN0cmluZ1Byb2Nlc3MiLCJhZGRDb21tYXMiLCJzbHVnIiwidXBkYXRlZF9hdCIsImNyZWF0ZWRfYXQiLCJ2aWV3X2NvdW50IiwiaWQiLCJsaWtlX3N0YXR1cyIsInBhdGgiLCJtYXhMZW5ndGgiLCJHcmlkSXRlbUFTTCIsImRhdGFDb21wYXJlTG9jYWwiLCJzZXREYXRhQ29tcGFyZUxvY2FsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxpa2VTdGF0dXMiLCJzZXRMaWtlU3RhdHVzIiwiZGF0YUdpcmQiLCJzdGF0dXNDb21wYXJlIiwic2V0U3RhdHVzQ29tcGFyZSIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2NhbFN0b3JhZ2VDb21wYXJlS2V5IiwiVmFsaWRhdG9yIiwiaXNCbGFuayIsImRhdGFTdGF0dXNDb21wYXJlIiwiSlNPTiIsInBhcnNlIiwiZW50aXR5SWQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlR3JpZCIsImRhdGFQcmVwYXJlIiwidHlwZSIsImhhbmRsZVRyYWNraW5nIiwiYWRkU2VsbExlYXNlSWQiLCJ2YWxpZGF0b3IiLCJUcmFja2luZyIsImFkZFRyYWNraW5nIiwiU3RyaW5nIiwiY2xpY2tBZGRUb0NvbXBhcmUiLCJzdGF0dXNVcGRhdGUiLCJ1cGRhdGVDb21wYXJlRGF0YSIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlQ2xpY2tSZW1vdmVDb21wYXJlIiwiZGF0YUNvbXBhcmUiLCJkYXRhVG9Db21wYXJlIiwiZGF0YU5ld0NvbXBhcmUiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRhdGEiLCJpc0FkZFRvTG9jYWwiLCJyZW1vdmVJdGVtIiwic2NyZWVuV2lkdGgiLCJzY3JlZW4iLCJ3aWR0aCIsImxlbmd0aCIsImFsZXJ0IiwibGlua0hyZWYiLCJsaW5rQXMiLCJoYW5kbGVDbGlja0xpa2UiLCJhcG9sbG9DbGllbnQiLCJtdXRhdGUiLCJtdXRhdGlvbiIsIkFERF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVCIsInZhcmlhYmxlcyIsInRoZW4iLCJyZXNwb25zZSIsIkFERF9QUk9KRUNUX1dJU0hfTElTVCIsImNvbXBvbmVudHNJdGVtIiwiTnVtYmVyIiwic3R5bGVzIiwidGhlbWUiLCJidXR0b24iLCJtYXJnaW5SaWdodCIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJtaW5XaWR0aCIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiekluZGV4Iiwib3BhY2l0eSIsImJvcmRlciIsImZvY3VzVmlzaWJsZSIsImltYWdlQnV0dG9uIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJpbWFnZVNyYyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiaW1hZ2VCYWNrZHJvcCIsImJhY2tncm91bmRDb2xvciIsImJsYWNrIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiaW1hZ2VUaXRsZSIsInBhZGRpbmciLCJpbWFnZU1hcmtlZCIsIkJ1dHRvblZpZXdzIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJyZW5kZXIiLCJpbWFnZXMiLCJ1cmwiLCJjbGFzc2VzIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJsaXN0SXRlbSIsInRleHRJdGVtIiwicGFkZGluZ1JpZ2h0IiwicG9wb3ZlciIsInBvaW50ZXJFdmVudHMiLCJOZXN0ZWRMaXN0Iiwib3BlbiIsInNldE9wZW4iLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiaW5kZXhNZW51Iiwic2V0SW5kZXhNZW51IiwiY291bnRNZW51Iiwic2V0Q291bnRNZW51IiwiaGFuZGxlUG9wb3Zlck9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVQb3BvdmVyQ2xvc2UiLCJzZXRIb3Zlck1lbnUiLCJjb3VudCIsInVuZGVmaW5lZCIsImxpc3RNZW51IiwiaXRlbSIsInJvb21zIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiY29yc29yIiwiZWxlbWVudCIsInJvb20iLCJvdmVyZmxvdyIsImJhY2tncm91bmQiLCJwYXBlciIsImdyaWRMaXN0IiwidHJhbnNmb3JtIiwicHJpbWFyeSIsImxpZ2h0IiwidGl0bGVCYXIiLCJBY3Rpb25zIiwic3RhdGUiLCJ0aWxlRGF0YSIsImltZyIsImF1dGhvciIsInRpbGUiLCJjYXJkIiwibWF4V2lkdGgiLCJpbWdab29tIiwiYm94U2hhZG93IiwiY29udGVudCIsIkluZGV4IiwidGV4dEFsaWduIiwiaWNvbiIsImZpbHRlciIsIktleXdvcmRTbGlkZSIsIk5leHRBcnJvdyIsIm9uQ2xpY2siLCJQcmV2QXJyb3ciLCJkYXRhU2VhcmNoIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW5pdGlhbFNsaWRlIiwibmV4dEFycm93IiwicHJldkFycm93IiwidmFyaWFibGVXaWR0aCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiYTEiLCJhMiIsImEzIiwiYTQiLCJhNSIsImE2IiwiYTciLCJhOCIsImE5IiwiZm9udFdlaWdodCIsInZpZXdQaG9uZSIsImNzc0ljb24iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJhcnJJbWciLCJ3aGF0NCIsIndoYXQyIiwid2hhdDMiLCJhcnJheSIsImJhY2tncm91bmRSZXBlYXQiLCJBZFNlbGxMZWFzZUluZGV4IiwiZGF0YUFkU2VsbExlYXNlcyIsInNldERhdGFBZFNlbGxMZWFzZSIsInN0YXR1c0xvYWRpbmdBZFNlbGxMZWFzZSIsInNldFN0YXR1c0xvYWRpbmdBZFNlbGxMZWFzZSIsInF1ZXJ5IiwiSE9NRV9HRVRfQURfU0VMTF9MRUFTRVMiLCJhZFNlbGxMZWFzZXMiLCJlZGdlcyIsImRlc2NyaXB0aW9uIiwiaHJlZiIsIlNsaWRlciIsImR5bmFtaWMiLCJzc3IiLCJIb3RMb2NhdGlvbiIsImRhdGFMb2NhdGlvbiIsImltYWdlT2JqZWN0IiwiaW5wdXRiYXNlIiwiZmxvYXQiLCJtYXJnaW5MZWZ0Iiwic2VhcmNoSG9tZSIsIm1pbkhlaWdodCIsInNlYXJjaEhvbWVCb2R5Iiwidmlld1NlYXJjaCIsImljb25TZWFyY2giLCJtYXJnaW5Ub3AiLCJpY29uQnV0dG9uIiwiU2VhcmNoSG9tZXBhZ2UiLCJvbkNoYW5nZVdhcmRzIiwia2V5Iiwia2V5Q29kZSIsImltYWdlQmFja2dyb3VuZCIsInN1Z2dlc3Rpb25zIiwibGluayIsImhpc3RvcnkiLCJyZW5kZXJTdWdnZXN0aW9uIiwiY3Vyc29yIiwicmVuZGVySGlzdG9yeSIsImUiLCJib3JkZXJSYWRpdXMiLCJUaXRsZUJsb2NrIiwiZG9tVGl0bGUiLCJkb21CbG9ja1RpdGxlIiwiaW5kZXhPZiIsIkZvb3RlclBhZ2UiLCJyb290UG9wb3ZlciIsIm92ZXJmbG93WCIsImhlYWRlciIsImRpdmlkZXIiLCJtYXJnaW4iLCJzcGFjaW5nIiwib3Blbk1lbnUiLCJzZXRPcGVuTWVudSIsImFuY2hvclJlZiIsInVzZVJlZiIsImhhbmRsZVRvZ2dsZSIsInByZXZPcGVuIiwiaGFuZGxlQ2xvc2UiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJoYW5kbGVMaXN0S2V5RG93biIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJUcmFuc2l0aW9uUHJvcHMiLCJwbGFjZW1lbnQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJMb2dvIiwicmVxdWlyZSIsIkxheW91dFBhZ2UiLCJzdGF0dXNNb2RhbCIsInNldE1vZGFsIiwidXBkYXRlTW9kYWwiLCJzY2hlbWFPYmplY3QiLCJjYW5vbmljYWwiLCJnb29nbGVTZWFyY2hDb25zb2xlIiwiX19odG1sIiwiY2hpbGRyZW4iLCJsb25nSW4iLCJsb2dJbkNsb3NlIiwibW9kYWwiLCJsaW5lSGVpZ2h0IiwidGFicyIsImxhYmVsIiwiTG9naW5Nb2RhbCIsInZhbHVlVGFiIiwic2V0VmFsdWVUYWIiLCJyZW5kZXJHb29nbGUiLCJnb29nbGVMb2dpbiIsInJlbmRlclphbG8iLCJ6YWxvTG9naW4iLCJyZW5kZXJGYWNlIiwiZmFjZWJvb2tMb2dpbiIsImhhbmRsZVRhYnNDaGFuZ2UiLCJyZW5kZXJUYWJzIiwidGFiIiwicmVuZGVyTG9naW4iLCJyZW5kZXJDcmVhdGVBY2NvdW50IiwiYm9yZGVyUmlnaHQiLCJJbWFnZUxvZ2luIiwic2VhcmNoT2JqZWN0IiwibWFpblVSTCIsInVwZ3JhZGVQbGFuVVJMIiwidXBncmFkZUljb25VUkwiLCJsb2dvVVJMIiwiYXBpQmFzZVVSTCIsImFwaUdyYXBoUUxVUkwiLCJ1cmxJbWFnZUFkU2VsbExlYXNlIiwidXJsSW1hZ2VQcm9qZWN0IiwidXJsSW1hZ2VCcm9rZXIiLCJpbWFnZURlZmF1bHRQcm9qZWN0IiwiaW1hZ2VEZWZhdWx0U2xpZGVyIiwiaW1hZ2VEZWZhdWx0QnJva2VyIiwiZ29vZ2xlQW5hbHl0aWNzQ29kZSIsImxvY2FsU3RvcmFnZVZpZXdlZCIsImxvY2FsU3RvcmFnZVByb2plY3RWaWV3ZWQiLCJhZFNlbGxMZWFzZUNhdGVnb3J5IiwibmFtZSIsInBhcmVudF9zbHVnIiwiYWRTZWxsTGVhc2VUeXBlIiwidHlwZTFfc2x1ZyIsInRpdGxlcyIsImVsZW1lbnRzIiwicHJvZHVjdHMiLCJtb25leU9sZCIsIm1vbmV5TmV3IiwiQ09VTlRfVklFV19BRF9TRUxMX0xFQVNFIiwiZ3FsIiwiQUREX0FEX1NFTExfTEVBU0VfQ09NTUVOVCIsIkdFVF9BRF9TRUxMX0xFQVNFUyIsIkdFVF9BRF9TRUxMX0xFQVNFU19CWV9TTFVHIiwiR0VUX0FEX1NFTExfTEVBU0VTX0JZX0lEIiwiR0VUX0FEX1NFTExfTEVBU0VfV0lTSF9MSVNUIiwiQ09VTlRfVklFV19QUk9KRUNUIiwiR0VUX1BST0pFQ1RfTElTVCIsIkhPTUVfR0VUX1BST0pFQ1RfTElTVCIsIkdFVF9QUk9KRUNUX0JZX1NMVUciLCJHRVRfUFJPSkVDVF9CWV9JRCIsImFkU2VsbExlYXNlSWQiLCJheGlvcyIsImdldCIsInBhcmFtcyIsImFkX3NlbGxfbGVhc2VfaWQiLCJ0eXBlX3RyYWNraW5nIiwicHJpY2VVbml0IiwiZm9ybWF0UHJpY2VWYWx1ZSIsImdldFByaWNlVW5pdCIsIm1pbGxpb25Vbml0IiwiYmlsbGlvblVuaXQiLCJwcmljZVZhbHVlTnVtYmVyIiwiTWF0aCIsInJvdW5kIiwiaW5wdXRTdHJpbmciLCJyeCIsInJlcGxhY2UiLCJ3IiwidGVzdCIsImdldE1vbnRocyIsImdldEdlbmRlciIsImdldERheXMiLCJ0cnVuY2F0ZVN0cmluZyIsInN0cmluZyIsImVuZGluZyIsInN1YnN0cmluZyIsInN0cmlwVGFncyIsImlucHV0IiwiYWxsb3dlZCIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJqb2luIiwidGFncyIsIiQwIiwiJDEiLCJzdHJpcFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiaW1hZ2VVcmwiLCJzdGF0dXNVcmwiLCJ2YWxpZFVSTCIsImdldEltYWdlRGVmYXVsdEJ5VHlwZSIsImJhc2VVcmwiLCJnZXRCYXNlVXJsQnlUeXBlIiwiaW1hZ2VEZWZhdWx0Iiwic3RyIiwidHJpbSIsImlzRW1wdHkiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImlzTnVtYmVyIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwiaXNGaW5pdGUiLCJpc0VtYWlsIiwiZW1haWwiLCJpc1NsdWciLCJpc1VybCIsInJlZ2V4cCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJub2RlTmFtZSIsImlzTG9jYWwiLCJzY3JvbGwiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsImVyciIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwicHJvY2VzcyIsIndhcm4iLCJleGFjdCIsIkxpbmsiLCJwYXNzSHJlZiIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJnZXRSZXNwb25zZSIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsImJhY2siLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJJbmRleFBhZ2UiLCJkYXRhQWRTZWxsTGVhc2VzVmlld2VkIiwic2V0RGF0YUFkU2VsbExlYXNlVmlld2VkIiwiZGF0YVByb2plY3RWaWV3ZWQiLCJzZXREYXRhUHJvamVjdFZpZXdlZCIsImRhdGFBZFNlbGxMZWFzZVdpc2hsaXN0Iiwic2V0RGF0YUFkU2VsbExlYXNlV2lzaGxpc3QiLCJkYXRhUHJvamVjdCIsInNldERhdGFQcm9qZWN0IiwiZGF0YU5ld3MiLCJzZXREYXRhTmV3cyIsInN0YXR1c0xvYWRpbmdQcm9qZWN0Iiwic2V0U3RhdHVzTG9hZGluZ1Byb2plY3QiLCJzdGF0dXNMb2FkaW5nTmV3cyIsInNldFN0YXR1c0xvYWRpbmdOZXdzIiwibmV3c1VybEFwaSIsImluZGV4UGFnZVN0eWxlIiwidmlld2VkSXRlbSIsInZpZXdlZEl0ZW1PYmplY3QiLCJ2aWV3ZWRQcm9qZWN0SXRlbSIsImFkU2VsbExlYXNlV2lzaGxpc3RzIiwiZGF0YVdpc2hsaXN0VG9BZGQiLCJ3aXNobGlzdEluZGV4IiwiZGF0YVRvQWRkIiwiYWRfc2VsbF9sZWFzZSIsInByb2plY3RzIiwiZmV0Y2giLCJyIiwianNvbiIsIkxpc3QiLCJ0cmFuc2FjdGlvbkhvdCIsInJlbmRlckljb24iLCJwYWdlVGl0bGUiLCJwYWdlRGVzY3JpcHRpb24iLCJjcmVhdGVNdWlUaGVtZSIsImZvbnRGYW1pbHkiLCJjbGllbnQiLCJiYXNlVVJMIiwidGltZW91dCIsImFwaSIsInJlcXVlc3QiLCJoZWFkZXJzIiwid2l0aENyZWRlbnRpYWxzIiwiQXBvbGxvQ2xpZW50IiwidXJpIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiYWRkVHlwZW5hbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7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Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHtGdW5jdGlvbkNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIjtcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uXCI7XHJcblxyXG5pbnRlcmZhY2UgVGl0bGVCbG9ja1Byb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgZ3JpZDoge1xyXG4gICAgbGc6IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcclxuICAgIG1kOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XHJcbiAgICBzbTogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xyXG4gICAgeHM6IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcclxuICAgIHhsOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XHJcbiAgfTtcclxuICBudW1iZXJMaW1pdDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBMb2FkaW5nUGFnZTogRnVuY3Rpb25Db21wb25lbnQ8VGl0bGVCbG9ja1Byb3BzPiA9IChwcm9wczogVGl0bGVCbG9ja1Byb3BzKSA9PiB7XHJcbiAgbGV0IGRvbUxvYWRpbmcgPSAoXHJcbiAgICA8R3JpZCBpdGVtIHhsPXtwcm9wcy5ncmlkLnhsfVxyXG4gICAgICAgICAgbGc9e3Byb3BzLmdyaWQubGd9XHJcbiAgICAgICAgICBtZD17cHJvcHMuZ3JpZC5tZH1cclxuICAgICAgICAgIHNtPXtwcm9wcy5ncmlkLnNtfVxyXG4gICAgICAgICAgeHM9e3Byb3BzLmdyaWQueHN9IGNsYXNzTmFtZT1cImdyaWRfX2xpc3RfX2l0ZW0gdS1tYXJnaW4tYm90dG9tLXNtYWxsXCI+XHJcbiAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwicmVjdFwiIGNsYXNzTmFtZT1cImdyaWRfX2xpc3RfX2l0ZW1fX2ltZ1wiLz5cclxuICAgICAgPEJveCBwdD17Mn0+XHJcbiAgICAgICAgPFNrZWxldG9uIC8+XHJcbiAgICAgICAgPFNrZWxldG9uIHdpZHRoPVwiNjAlXCIgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxuICBsZXQgbmV3RG9tUmVhY3QgPSAoPD48Lz4pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubnVtYmVyTGltaXQ7IGkrKykge1xyXG4gICAgbmV3RG9tUmVhY3QgPSAoXHJcbiAgICAgIDw+e25ld0RvbVJlYWN0fVxyXG4gICAgICB7ZG9tTG9hZGluZ308Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImJhc2VsaW5lXCIgY2xhc3NOYW1lPVwiZ3JpZF9fbGlzdFwiPlxyXG4gICAgICB7bmV3RG9tUmVhY3R9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtGdW5jdGlvbkNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZEl0ZW1BU0wgZnJvbSBcIi4vR3JpZEl0ZW1BU0xcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IFN0cmluZ1Byb2Nlc3MgZnJvbSBcIi4vLi4vLi4vbW9kdWxlcy9zdHJpbmdQcm9jZXNzXCI7XHJcbmltcG9ydCB1cmxQcm9jZXNzIGZyb20gXCIuLi8uLi9tb2R1bGVzL3VybFByb2Nlc3NcIjtcclxuaW1wb3J0IFByaWNlUHJvY2VzcyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9wcmljZVByb2Nlc3NcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgR3JpZFByb3BzIHtcclxuICBub2RlOiB7XHJcbiAgICBpZDogc3RyaW5nXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgc2x1Zzogc3RyaW5nLFxyXG4gICAgY3JlYXRlZF9hdDogc3RyaW5nLFxyXG4gICAgdXBkYXRlZF9hdDogc3RyaW5nLFxyXG4gICAgdmlld19jb3VudDogbnVtYmVyLFxyXG4gICAgbGlrZV9zdGF0dXM6IGJvb2xlYW4sXHJcbiAgICBwcmljZToge1xyXG4gICAgICB1bml0OiBzdHJpbmdcclxuICAgICAgdmFsdWU6IHN0cmluZ1xyXG4gICAgfSxcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICBhbHRfdGV4dDogc3RyaW5nXHJcbiAgICAgIHNyYzogc3RyaW5nXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcclxuICAgIH0sXHJcbiAgICBhZGRyZXNzOiB7XHJcbiAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgd2FyZDogc3RyaW5nLFxyXG4gICAgICBkaXN0cmljdDogc3RyaW5nLFxyXG4gICAgICBjaXR5OiBzdHJpbmdcclxuICAgIH0sXHJcbiAgICBhcmVhOiB7XHJcbiAgICAgIHVuaXQ6IHN0cmluZ1xyXG4gICAgICB2YWx1ZTogc3RyaW5nXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgR3JpZExpc3RQcm9wcyB7XHJcbiAgZ3JpZERhdGE6IEdyaWRQcm9wc1tdO1xyXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIG1heExlbmd0aD86IG51bWJlcjtcclxuICBncmlkOiB7XHJcbiAgICBsZzogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xyXG4gICAgbWQ6IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcclxuICAgIHNtOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XHJcbiAgICB4czogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xyXG4gICAgeGw6IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBHcmlkTGlzdDogRnVuY3Rpb25Db21wb25lbnQ8R3JpZExpc3RQcm9wcz4gPSAocHJvcHM6IEdyaWRMaXN0UHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGl0ZW0geHM9ezEyfSBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICBhbGlnbkl0ZW1zPVwiYmFzZWxpbmVcIiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+XHJcbiAgICAgIHtwcm9wcy5ncmlkRGF0YS5tYXAoKGRhdGFJdGVtLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHByaWNlVmFsdWUgPSBQcmljZVByb2Nlc3MucHJpY2VQcm9jZXNzKGRhdGFJdGVtLm5vZGUucHJpY2UudmFsdWUsIGRhdGFJdGVtLm5vZGUucHJpY2UudW5pdCk7XHJcbiAgICAgICAgbGV0IGRhdGFHcmlkID0ge1xyXG4gICAgICAgICAgaW1hZ2U6IHVybFByb2Nlc3MucHJvY2Vzc0ltYWdlVXJsKGRhdGFJdGVtLm5vZGUuYXZhdGFyLnNyYywgJ2FkX3NlbGxfbGVhc2UnKSxcclxuICAgICAgICAgIHRpdGxlOiBkYXRhSXRlbS5ub2RlLnRpdGxlLFxyXG4gICAgICAgICAgYWRkcmVzczogZGF0YUl0ZW0ubm9kZS5hZGRyZXNzLnRleHQsXHJcbiAgICAgICAgICBhcmVhOiBTdHJpbmdQcm9jZXNzLmFkZENvbW1hcyhkYXRhSXRlbS5ub2RlLmFyZWEudmFsdWUpLFxyXG4gICAgICAgICAgcHJpY2U6IHByaWNlVmFsdWUsXHJcbiAgICAgICAgICBzbHVnOiBkYXRhSXRlbS5ub2RlLnNsdWcsXHJcbiAgICAgICAgICB1cGRhdGVkX2F0OiBkYXRhSXRlbS5ub2RlLnVwZGF0ZWRfYXQsXHJcbiAgICAgICAgICBjcmVhdGVkX2F0OiBkYXRhSXRlbS5ub2RlLmNyZWF0ZWRfYXQsXHJcbiAgICAgICAgICB2aWV3X2NvdW50OiBkYXRhSXRlbS5ub2RlLnZpZXdfY291bnQsXHJcbiAgICAgICAgICBpZDogZGF0YUl0ZW0ubm9kZS5pZCxcclxuICAgICAgICAgIGxpa2Vfc3RhdHVzOiBkYXRhSXRlbS5ub2RlLmxpa2Vfc3RhdHVzLFxyXG4gICAgICAgICAgcGF0aDogJy90aW4tcmFvLydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChwcm9wcy5tYXhMZW5ndGggJiYgaW5kZXggPj0gcHJvcHMubWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgICByZXR1cm4gKDw+PC8+KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEdyaWRJdGVtQVNMIGdyaWQ9e3Byb3BzLmdyaWR9IGRhdGFHaXJkPXtkYXRhR3JpZH0ga2V5PXtcImdyaWRfaXRlbV9hZF9zZWxsX1wiICsgaW5kZXh9Lz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KX1cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBHcmlkTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7RnVuY3Rpb25Db21wb25lbnQsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG4vLyBNYXRlcmlhbC0gVUlcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuLy8gSWNvblxyXG5pbXBvcnQgRmF2b3JpdGVCb3JkZXJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVCb3JkZXJcIjtcclxuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlXCI7XHJcbmltcG9ydCBDYWxlbmRhclRvZGF5IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FsZW5kYXJUb2RheVwiO1xyXG5pbXBvcnQgU3RyaW5nUHJvY2VzcyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9zdHJpbmdQcm9jZXNzXCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge2xvY2FsU3RvcmFnZUNvbXBhcmVLZXl9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IFZhbGlkYXRvciBmcm9tIFwiLi4vLi4vbW9kdWxlcy92YWxpZGF0b3JcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFRyYWNraW5nIGZyb20gXCIuLi8uLi9tb2R1bGVzL0FkU2VsbExlYXNlL1RyYWNraW5nXCI7XHJcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSBcIi4uLy4uL21vZHVsZXMvdmFsaWRhdG9yXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHthcG9sbG9DbGllbnR9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHtBRERfUFJPSkVDVF9XSVNIX0xJU1R9IGZyb20gJy4uLy4uL2dyYXBocWwvcHJvamVjdC9tdXRhdGlvbic7XHJcbmltcG9ydCB7QUREX0FEX1NFTExfTEVBU0VfV0lTSF9MSVNUfSBmcm9tICcuLi8uLi9ncmFwaHFsL2FkX3NlbGxfbGVhc2VzL211dGF0aW9uJztcclxuXHJcbmludGVyZmFjZSBkYXRhR3JpZFByb3BzIHtcclxuICBpbWFnZTogYW55LFxyXG4gIHRpdGxlOiBzdHJpbmcsXHJcbiAgYXJlYTogc3RyaW5nLFxyXG4gIGFkZHJlc3M6IHN0cmluZyxcclxuICBwcmljZTogc3RyaW5nLFxyXG4gIHNsdWc6IHN0cmluZyxcclxuICBjcmVhdGVkX2F0OiBzdHJpbmcsXHJcbiAgdXBkYXRlZF9hdDogc3RyaW5nLFxyXG4gIHBhdGg6IHN0cmluZ1xyXG4gIHZpZXdfY291bnQ6IG51bWJlcixcclxuICBsaWtlX3N0YXR1czogYm9vbGVhbixcclxuICBpZDogc3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBDb21wYXJlRGF0YVByb3BzIHtcclxuICBhdmF0YXI6IHN0cmluZyxcclxuICB0aXRsZTogc3RyaW5nLFxyXG4gIGlkOiBzdHJpbmcsXHJcbiAgdHlwZTogc3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBHcmlkSXRlbVByb3BzIHtcclxuICBncmlkOiB7XHJcbiAgICBsZzogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xyXG4gICAgbWQ6IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcclxuICAgIHNtOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XHJcbiAgICB4czogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xyXG4gICAgeGw6IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcclxuICB9O1xyXG4gIGRhdGFHaXJkOiBkYXRhR3JpZFByb3BzO1xyXG59XHJcblxyXG5jb25zdCBHcmlkSXRlbUFTTDogRnVuY3Rpb25Db21wb25lbnQ8R3JpZEl0ZW1Qcm9wcz4gPSAocHJvcHM6IEdyaWRJdGVtUHJvcHMpID0+XHJcbntcclxuICBjb25zdCBbZGF0YUNvbXBhcmVMb2NhbCwgc2V0RGF0YUNvbXBhcmVMb2NhbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbGlrZVN0YXR1cywgc2V0TGlrZVN0YXR1c10gPSBSZWFjdC51c2VTdGF0ZShwcm9wcy5kYXRhR2lyZC5saWtlX3N0YXR1cyk7XHJcbiAgY29uc3QgW3N0YXR1c0NvbXBhcmUsIHNldFN0YXR1c0NvbXBhcmVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSkgJiYgIVZhbGlkYXRvci5pc0JsYW5rKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkpKSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBkYXRhU3RhdHVzQ29tcGFyZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSkgYXMgc3RyaW5nKTtcclxuICAgICAgICBzZXREYXRhQ29tcGFyZUxvY2FsKGRhdGFTdGF0dXNDb21wYXJlKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCBpbiBkYXRhU3RhdHVzQ29tcGFyZSkge1xyXG4gICAgICAgICAgbGV0IGVudGl0eUlkID0gZGF0YVN0YXR1c0NvbXBhcmVbaW5kZXhdLmlkO1xyXG4gICAgICAgICAgaWYgKGVudGl0eUlkID09PSBwcm9wcy5kYXRhR2lyZC5pZCkge1xyXG4gICAgICAgICAgICBzZXRTdGF0dXNDb21wYXJlKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGxldCB0eXBlR3JpZCA9ICdhZF9zZWxsX2xlYXNlJztcclxuICBpZiAocHJvcHMuZGF0YUdpcmQucGF0aCA9PT0gJy9kdS1hbi8nKSB7XHJcbiAgICB0eXBlR3JpZCA9ICdwcm9qZWN0JztcclxuICB9XHJcbiAgY29uc3QgZGF0YVByZXBhcmUgPSB7XHJcbiAgICBhdmF0YXI6IHByb3BzLmRhdGFHaXJkLmltYWdlLFxyXG4gICAgdGl0bGU6IHByb3BzLmRhdGFHaXJkLnRpdGxlLFxyXG4gICAgaWQ6IHByb3BzLmRhdGFHaXJkLmlkLFxyXG4gICAgdHlwZTogdHlwZUdyaWRcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUcmFja2luZyA9ICh0eXBlOiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBhZGRTZWxsTGVhc2VJZCA9IHByb3BzLmRhdGFHaXJkLmlkO1xyXG4gICAgaWYgKGFkZFNlbGxMZWFzZUlkICYmICF2YWxpZGF0b3IuaXNCbGFuayhhZGRTZWxsTGVhc2VJZCkgJiYgdHlwZUdyaWQgPT09ICdhZF9zZWxsX2xlYXNlJykge1xyXG4gICAgICBUcmFja2luZy5hZGRUcmFja2luZyhTdHJpbmcoYWRkU2VsbExlYXNlSWQpLCB0eXBlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgY2xpY2tBZGRUb0NvbXBhcmUgPSAoKSA9PiB7XHJcbiAgICBoYW5kbGVUcmFja2luZygnY29tcGFyZV9jbGljaycpO1xyXG4gICAgbGV0IHN0YXR1c1VwZGF0ZSA9IHVwZGF0ZUNvbXBhcmVEYXRhKGRhdGFQcmVwYXJlKTtcclxuICAgIGlmICghc3RhdHVzVXBkYXRlKSByZXR1cm4gc3RhdHVzVXBkYXRlO1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja1JlbW92ZUNvbXBhcmUgPSAoZGF0YUNvbXBhcmU6IENvbXBhcmVEYXRhUHJvcHMpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5KSAmJiAhVmFsaWRhdG9yLmlzQmxhbmsobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSkpKSB7XHJcbiAgICAgIGxldCBkYXRhVG9Db21wYXJlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5KSBhcyBzdHJpbmcpO1xyXG4gICAgICBsZXQgZGF0YU5ld0NvbXBhcmUgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaW5kZXggaW4gZGF0YVRvQ29tcGFyZSkge1xyXG4gICAgICAgIGlmIChkYXRhVG9Db21wYXJlW2luZGV4XS5pZCAhPT0gZGF0YUNvbXBhcmUuaWQpIHtcclxuICAgICAgICAgIGRhdGFOZXdDb21wYXJlLnB1c2goZGF0YVRvQ29tcGFyZVtpbmRleF0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXksIEpTT04uc3RyaW5naWZ5KGRhdGFOZXdDb21wYXJlKSk7XHJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxldCB1cGRhdGVDb21wYXJlRGF0YSA9IChkYXRhOiBDb21wYXJlRGF0YVByb3BzKSA9PiB7XHJcbiAgICBsZXQgZGF0YVRvQ29tcGFyZSA9IFtdO1xyXG4gICAgbGV0IGlzQWRkVG9Mb2NhbCA9IHRydWU7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSkgJiYgIVZhbGlkYXRvci5pc0JsYW5rKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkpKSkge1xyXG4gICAgICBkYXRhVG9Db21wYXJlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5KSBhcyBzdHJpbmcpO1xyXG4gICAgICBmb3IgKGxldCBpbmRleCBpbiBkYXRhVG9Db21wYXJlKSB7XHJcbiAgICAgICAgaWYgKGRhdGFUb0NvbXBhcmVbaW5kZXhdLmlkID09PSBkYXRhLmlkKSB7XHJcbiAgICAgICAgICBpc0FkZFRvTG9jYWwgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGFUb0NvbXBhcmVbaW5kZXhdLnR5cGUgIT09IGRhdGEudHlwZSkge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSk7XHJcbiAgICAgICAgICBkYXRhVG9Db21wYXJlID0gW107XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBzY3JlZW5XaWR0aCA9IHNjcmVlbi53aWR0aDtcclxuICAgIGlmIChkYXRhVG9Db21wYXJlICYmIGRhdGFUb0NvbXBhcmUubGVuZ3RoICYmIGRhdGFUb0NvbXBhcmUubGVuZ3RoID49IDQgJiYgc2NyZWVuV2lkdGggPiA1OTkpIHtcclxuICAgICAgYWxlcnQoXCJLaMO0bmcgdGjhu4Mgc28gc8OhbmggcXXDoSA0IHPhuqNuIHBo4bqpbSFcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhVG9Db21wYXJlICYmIGRhdGFUb0NvbXBhcmUubGVuZ3RoICYmIGRhdGFUb0NvbXBhcmUubGVuZ3RoID49IDIgJiYgc2NyZWVuV2lkdGggPD0gNTk5KSB7XHJcbiAgICAgIGFsZXJ0KFwiS2jDtG5nIHRo4buDIHNvIHPDoW5oIHF1w6EgMiBz4bqjbiBwaOG6qW0hXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNBZGRUb0xvY2FsKSB7XHJcbiAgICAgIGRhdGFUb0NvbXBhcmUucHVzaChkYXRhKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YVRvQ29tcGFyZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGxpbmtIcmVmID0gJyc7XHJcbiAgbGV0IGxpbmtBcyA9ICcnO1xyXG4gIGlmIChwcm9wcy5kYXRhR2lyZC5wYXRoID09PSAnL2R1LWFuLycpIHtcclxuICAgIGxpbmtIcmVmID0gJy9kdS1hbi9bc2x1Z10nO1xyXG4gICAgbGlua0FzID0gJy9kdS1hbi8nICsgcHJvcHMuZGF0YUdpcmQuc2x1ZztcclxuICB9IGVsc2Uge1xyXG4gICAgbGlua0hyZWYgPSAnL3Rpbi1yYW8vW3NsdWddJztcclxuICAgIGxpbmtBcyA9ICcvdGluLXJhby8nICsgcHJvcHMuZGF0YUdpcmQuc2x1ZztcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrTGlrZSA9ICgpID0+IHtcclxuICAgIGlmIChsaWtlU3RhdHVzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExpa2VTdGF0dXModHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocHJvcHMuZGF0YUdpcmQucGF0aCAhPT0gJy9kdS1hbi8nKSB7XHJcbiAgICAgIGhhbmRsZVRyYWNraW5nKCdsaWtlJyk7XHJcbiAgICAgIGFwb2xsb0NsaWVudC5tdXRhdGUoe211dGF0aW9uOiBBRERfQURfU0VMTF9MRUFTRV9XSVNIX0xJU1QsIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgXCJpbnB1dFwiIDoge1xyXG4gICAgICAgICAgICBcImFkX3NlbGxfbGVhc2VfaWRcIjogcHJvcHMuZGF0YUdpcmQuaWQsXHJcbiAgICAgICAgICAgIFwic3RhdHVzXCI6IFwibGlrZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX0pLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcG9sbG9DbGllbnQubXV0YXRlKHttdXRhdGlvbjogQUREX1BST0pFQ1RfV0lTSF9MSVNULCB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIFwiaW5wdXRcIjoge1xyXG4gICAgICAgICAgICBcInByb2plY3RfaWRcIjogcHJvcHMuZGF0YUdpcmQuaWQsXHJcbiAgICAgICAgICAgIFwic3RhdHVzXCI6IFwibGlrZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX0pLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IGNvbXBvbmVudHNJdGVtID0gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj17cHJvcHMuZ3JpZCA/IFwiY29sdW1uXCIgOiBcInJvd1wifSBzcGFjaW5nPXswfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZF9fbGlzdF9faXRlbSB1LW1hcmdpbi1ib3R0b20tc21hbGxcIj5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmtIcmVmfSBhcz17bGlua0FzfT48YT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fbGlzdF9faXRlbV9faW1nIGJhY2tncm91bmQgYmxvY2tfZmxvYXRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydncmlkX19saXN0X19pdGVtX19pbWdfX2RhdGUnfT48Q2FsZW5kYXJUb2RheS8+PE1vbWVudCB1bml4IGZvcm1hdD1cIkREL01NL1lZWVlcIj5cclxuICAgICAgICAgICAgICB7TnVtYmVyKHByb3BzLmRhdGFHaXJkLmNyZWF0ZWRfYXQpLzEwMDB9PC9Nb21lbnQ+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2dyaWRfX2xpc3RfX2l0ZW1fX2ltZ19fZmF2b3JpdGUnfSBvbkNsaWNrPXtoYW5kbGVDbGlja0xpa2V9PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpa2VTdGF0dXMgJiZcclxuICAgICAgICAgICAgICAgIDxGYXZvcml0ZUljb24vPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhbGlrZVN0YXR1cyAmJlxyXG4gICAgICAgICAgICAgICAgPEZhdm9yaXRlQm9yZGVySWNvbi8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHByb3BzLmRhdGFHaXJkLmltYWdlICYmIHByb3BzLmRhdGFHaXJkLmltYWdlICE9PSAnbnVsbCcgJiYgcHJvcHMuZGF0YUdpcmQuaW1hZ2UgIT09ICcnICYmXHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmRhdGFHaXJkLmltYWdlfSBhbHQ9e3Byb3BzLmRhdGFHaXJkLnRpdGxlfS8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICghcHJvcHMuZGF0YUdpcmQuaW1hZ2UgfHwgcHJvcHMuZGF0YUdpcmQuaW1hZ2UgPT09ICdudWxsJyB8fCBwcm9wcy5kYXRhR2lyZC5pbWFnZSA9PT0gJycpICYmXHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvaG9tZV9kZWZhdWx0LmpwZ1wiIGFsdD17cHJvcHMuZGF0YUdpcmQudGl0bGV9Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgPEdyaWQgY2xhc3NOYW1lPVwiZ3JpZF9fbGlzdF9faXRlbV9fY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19saXN0X19pdGVtX19jb250ZW50X190aXRsZSB1LWZsZXhTcGFjZUJldHdlZW5cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17bGlua0hyZWZ9IGFzPXtsaW5rQXN9PjxhPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fbGlzdF9faXRlbV9fY29udGVudF9fdGl0bGVfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwPntwcm9wcy5kYXRhR2lyZC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fbGlzdF9faXRlbV9fY29udGVudF9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAge3Byb3BzLmRhdGFHaXJkLmFkZHJlc3N9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcHJvcHMuZGF0YUdpcmQuYXJlYSAmJiBwcm9wcy5kYXRhR2lyZC5hcmVhICE9IFwiMFwiICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fbGlzdF9faXRlbV9fY29udGVudF9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICBEaeG7h24gdMOtY2g6IHtwcm9wcy5kYXRhR2lyZC5hcmVhfSBtPHN1cD4yPC9zdXA+IC0gIEzGsOG7o3QgeGVtOiB7cHJvcHMuZGF0YUdpcmQudmlld19jb3VudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICghcHJvcHMuZGF0YUdpcmQuYXJlYSB8fCBwcm9wcy5kYXRhR2lyZC5hcmVhID09IFwiMFwiKSAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2xpc3RfX2l0ZW1fX2NvbnRlbnRfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgRGnhu4duIHTDrWNoOiDEkGFuZyBj4bqtcCBuaOG6rXQgLSAgTMaw4bujdCB4ZW06IHtwcm9wcy5kYXRhR2lyZC52aWV3X2NvdW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fbGlzdF9faXRlbV9fY29udGVudF9fcHJpY2VcIj57KHByb3BzLmRhdGFHaXJkLnByaWNlICYmIHByb3BzLmRhdGFHaXJkLnByaWNlICE9PSAnMCcgJiYgcHJvcHMuZGF0YUdpcmQucHJpY2UgIT09ICcwICcgJiYgcHJvcHMuZGF0YUdpcmQucHJpY2UgIT09ICcwIMSR4buTbmcnKT9wcm9wcy5kYXRhR2lyZC5wcmljZTonR2nDoTogTGnDqm4gaOG7hyd9PC9kaXY+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICFzdGF0dXNDb21wYXJlICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fbGlzdF9faXRlbV9fY29udGVudF9fY29tcGFyZVwiIG9uQ2xpY2s9eygpID0+IGNsaWNrQWRkVG9Db21wYXJlKCl9PlxyXG4gICAgICAgICAgICAgIFNPIFPDgU5IXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzdGF0dXNDb21wYXJlICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fbGlzdF9faXRlbV9fY29udGVudF9fY29tcGFyZVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrUmVtb3ZlQ29tcGFyZShkYXRhUHJlcGFyZSl9PlxyXG4gICAgICAgICAgICAgIEhV4bu2XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGl0ZW1cclxuICAgICAgeGw9e3Byb3BzLmdyaWQueGx9XHJcbiAgICAgIGxnPXtwcm9wcy5ncmlkLmxnfVxyXG4gICAgICBtZD17cHJvcHMuZ3JpZC5tZH1cclxuICAgICAgc209e3Byb3BzLmdyaWQuc219XHJcbiAgICAgIHhzPXtwcm9wcy5ncmlkLnhzfVxyXG4gICAgPlxyXG4gICAgICB7Y29tcG9uZW50c0l0ZW19XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyaWRJdGVtQVNMO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXMnXHJcbmltcG9ydCB7IEljb25CdXR0b24sIEljb24sIFRvb2x0aXAsIEJ1dHRvbiwgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBIaWRkZW4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IGJhZCBmcm9tICcuLi8uLi9wdWJsaWMvSW1hZ2UvYmFkLmpwZyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XHJcbiAgICBidXR0b246IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogJzVweCdcclxuICAgIH0sXHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAgbWluV2lkdGg6IDMwMCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyY6aG92ZXIsICYkZm9jdXNWaXNpYmxlJzoge1xyXG4gICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgICAgICcmICRpbWFnZUJhY2tkcm9wJzoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4xNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYgJGltYWdlTWFya2VkJzoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYgJGltYWdlVGl0bGUnOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICc0cHggc29saWQgY3VycmVudENvbG9yJyxcclxuICAgICAgICAgICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCBjdXJyZW50Q29sb3InLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvY3VzVmlzaWJsZToge30sXHJcbiAgICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVNyYzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgNDAlJyxcclxuICAgIH0sXHJcbiAgICBpbWFnZUJhY2tkcm9wOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxyXG4gICAgfSxcclxuICAgIGltYWdlVGl0bGU6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBwYWRkaW5nOiBgM3B4IDRweCA1cHggNXB4YCxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgICAgcGFkZGluZzogYDFweCAxcHggMXB4IDFweGAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBpbWFnZU1hcmtlZDoge1xyXG4gICAgICAgIGhlaWdodDogMyxcclxuICAgICAgICB3aWR0aDogMTgsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBib3R0b206IC0yLFxyXG4gICAgICAgIGxlZnQ6ICdjYWxjKDUwJSAtIDlweCknLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxyXG4gICAgfSxcclxufSlcclxuXHJcblxyXG5jbGFzcyBCdXR0b25WaWV3cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBpbWFnZXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9ub2l0aGF0Z2lhZGluaGJpbmhkdW9uZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDkvZ2klQzYlQjAlRTElQkIlOURuZy1nJUMzJUI1LSVDNCU5MSVFMSVCQiU4Ri5qcGcnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdHaeG6o20gMTAlIFThu6sgxJDGoW4gSMOgbmcgVGjhu6kgMicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzMwJScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vaTIud3AuY29tL2RvZ29xdW9jY3VvbmcuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA4L0RTQzA5NTQ1LmpwZz9maXQ9MzAwOCUyQzIwMDAmc3NsPTEnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUaGnhur90IEvhur8gVGhlbyBZw6p1IEPhuqd1JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnNDAlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3RoaWNvbmdkb2dvaGFub2kuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAzL25odS15LXRheS1ob3AtNm1vbi5qcGcnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfEkOG6t3QgSMOgbmcgS2jDtG5nIEdp4bubaSBI4bqhbicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzMwJScsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8SGlkZGVuIHhzRG93bj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcy5tYXAoaW1hZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uQmFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c1JpcHBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ltYWdlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZT17Y2xhc3Nlcy5mb2N1c1Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBpbWFnZS53aWR0aCwgZm9udFNpemU6IDMwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2UudXJsfSlgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJhY2tkcm9wfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VNYXJrZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkJ1dHRvblZpZXdzLnByb3BUeXBlcyA9IHtcclxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEJ1dHRvblZpZXdzKVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYTEtYzcwYTk5ODg3OWU2NTY3NTFjZmJmN2VlZWE5MTA2NTUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2EyLWQyN2M1OGFiNDRlZTJlMGUzYzc2MmNlYzEwOWMwMzUwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hMy04OTE2Zjc1MWRkYzZkYjE5NjJmNDdhNDZiZTJlN2Q3NC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYTQtODRjNmI2ZDU5ZDc1N2ZlYTIxZjZjNmY5MGUyYzUwNWEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2E1LTQ4ODQwNTI3YjUzM2I3MjgwOTQwMjg3YTNmNTgyMTI5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hNi01MzU1NzVlMTFiYzZmYTYyMzAzYmEwNzZhMTA2OTM3Ny5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYTctNTgxODA3N2JmYTA1ZmYwMjY1OTY4NmE3ZTM1MTNiYjMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2E4LTFiYzBkODc0ZjkyNjE1MjUyYTkzOTI1MjljOTRkNjgwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hOS1lMDFiNTQwMjBiMjQxYjcxNzZiNWUwMzBiOTExM2M4My5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvd2hhdDItZmJkOTM0NWFlY2RlNWMwYTA1MjVmMTIwNTNlMTgwNmIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3doYXQzLTM2NDVlMzcxMTVmNzc4NjY1NTI4NDM0Y2EzZWYzMTkwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy93aGF0NC03NzdhMmY4NjU0YjI4ZDMwN2Q4ODljZWNhOGMxMzk5NS5qcGdcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgICBMaXN0LFxyXG4gICAgRGl2aWRlcixcclxuICAgIExpc3RJdGVtSWNvbixcclxuICAgIExpc3RJdGVtLFxyXG4gICAgTGlzdEl0ZW1UZXh0LFxyXG4gICAgQ29sbGFwc2UsXHJcbiAgICBCdXR0b24sXHJcbiAgICBMaXN0U3ViaGVhZGVyLFxyXG4gICAgUG9wb3ZlcixcclxuICAgIFR5cG9ncmFwaHksXHJcbiAgICBNZW51SXRlbSxcclxuXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveCc7XHJcbmltcG9ydCBEcmFmdHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EcmFmdHMnO1xyXG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlbmQnO1xyXG5pbXBvcnQgRXhwYW5kTGVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzcyc7XHJcbmltcG9ydCBFeHBhbmRNb3JlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcclxuaW1wb3J0IFN0YXJCb3JkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXInO1xyXG5pbXBvcnQgR2FtZXBhZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dhbWVwYWQnO1xyXG5pbXBvcnQgeyBsaXN0TWVudSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9pbmRleCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGxpc3RJdGVtOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2UzZjJmZCcsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAnIzkwY2FmOScsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRleHRJdGVtOiB7XHJcbiAgICAgICAgY29sb3I6ICcjMTk3NmQyJyxcclxuICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAyMCxcclxuICAgIH0sXHJcbiAgICBwb3BvdmVyOiB7XHJcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLCAvLyBub25lXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBOZXN0ZWRMaXN0KCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtpbmRleE1lbnUsIHNldEluZGV4TWVudV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtjb3VudE1lbnUsIHNldENvdW50TWVudV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGhhbmRsZVBvcG92ZXJPcGVuID0gKGV2ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIHNldE9wZW4oZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgc2V0Q291bnRNZW51KDApO1xyXG4gICAgICAgIHNldEluZGV4TWVudShpbmRleCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBvcG92ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICBzZXRJbmRleE1lbnUobnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldEhvdmVyTWVudSA9IChjb3VudCkgPT4ge1xyXG4gICAgICAgIHNldENvdW50TWVudShjb3VudClcclxuICAgIH1cclxuICAgIGNvbnN0IGlkID0gb3BlbiA/IGluZGV4TWVudSA6IHVuZGVmaW5lZDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgY29tcG9uZW50PVwibmF2XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmVzdGVkLWxpc3Qtc3ViaGVhZGVyXCJcclxuICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsaXN0TWVudS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJvb21zIH0gPSBpdGVtXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBidXR0b24gaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25Nb3VzZUVudGVyPXsoZXZlbnQpID0+IGhhbmRsZVBvcG92ZXJPcGVuKGV2ZW50LCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvdW50TWVudSA9PT0gaW5kZXggPyAnIzkwY2FmOScgOiAnI2UzZjJmZCcsIGhlaWdodDogMzUsIHBhZGRpbmc6ICcwIDRweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdhbWVwYWRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAyNSwgY29sb3I6ICcjMTk3NmQyJywgcGFkZGluZzogNCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4TWVudSA9PT0gaW5kZXggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3BvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ3JpZ2h0JywgaG9yaXpvbnRhbDogJ3JpZ2h0JyB9fSAvLyBHaGltXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ2xlZnQnIH19IC8vIFZpIHRyaSBoaWVuIHRoaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlUG9wb3ZlckNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25Nb3VzZU91dD17aGFuZGxlUG9wb3ZlckNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cIm5hdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5lc3RlZC1saXN0LXN1YmhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDAsIHBvaW50ZXJFdmVudHM6ICdhdXRvJywgY29yc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb21zLm1hcCgoZWxlbWVudCwgY291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoY291bnQpID0+IHNldEhvdmVyTWVudShjb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvdW50TWVudSA9PT0gY291bnQgPyAnIzkwY2FmOScgOiAnI2UzZjJmZCcsIGhlaWdodDogMzUsIHBhZGRpbmc6ICcwIDRweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJNZW51KGNvdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdhbWVwYWRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAyNSwgY29sb3I6ICcjMTk3NmQyJywgcGFkZGluZzogNCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5yb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvTGlzdCA+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXN0ZWRMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBHcmlkTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdCdcclxuaW1wb3J0IEdyaWRMaXN0VGlsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGUnXHJcbmltcG9ydCBHcmlkTGlzdFRpbGVCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlQmFyJ1xyXG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyJ1xyXG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luZm8nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXMnXHJcbmltcG9ydCB7IEkxOG4gfSBmcm9tICdyZWFjdC1yZWR1eC1pMThuJ1xyXG5pbXBvcnQge1xyXG4gICBJY29uQnV0dG9uLFxyXG4gICBJY29uLFxyXG4gICBUb29sdGlwLFxyXG4gICBCdXR0b24sXHJcbiAgIENhcmQsXHJcbiAgIEdyaWQsXHJcbiAgIENhcmRDb250ZW50LFxyXG4gICBDYXJkQWN0aW9ucyxcclxuICAgVHlwb2dyYXBoeSxcclxuICAgQXBwQmFyLFxyXG4gICBUb29sYmFyLFxyXG4gICBIaWRkZW4sXHJcblxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgU3RhckJvcmRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXInXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xyXG4gICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICB9LFxyXG4gICBncmlkTGlzdDoge1xyXG4gICAgICBmbGV4V3JhcDogJ25vd3JhcCcsXHJcbiAgICAgIC8vIGhlaWdodDogJzUwMHB4JyxcclxuICAgICAgLy8gUHJvbW90ZSB0aGUgbGlzdCBpbnRvIGhpcyBvd24gbGF5ZXIgb24gQ2hyb21lLiBUaGlzIGNvc3QgbWVtb3J5IGJ1dCBoZWxwcyBrZWVwaW5nIGhpZ2ggRlBTLlxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVaKDApJyxcclxuICAgfSxcclxuICAgdGl0bGU6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCxcclxuICAgfSxcclxuICAgdGl0bGVCYXI6IHtcclxuICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAgJ2xpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwwLDAsMC43KSAwJSwgcmdiYSgwLDAsMCwwLjMpIDcwJSwgcmdiYSgwLDAsMCwwKSAxMDAlKScsXHJcbiAgIH0sXHJcbn0pXHJcblxyXG5cclxuY2xhc3MgQWN0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHJlbmRlcigpIHtcclxuICAgICAgbGV0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICBsZXQgdGlsZURhdGEgPSBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cDovL2JpendlYi5ka3RjZG4ubmV0LzEwMC8wNjAvOTY2L3Byb2R1Y3RzL2dpdW9uZy1uZ3UtZ28tY2FvLWNhcC10YWktaGEtbm9pLTEwLmpwZz92PTE0NjI5ODIxNTAzNzAnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0dpxrDhu51uZyBn4buXIHThu7Egbmhpw6puJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9jZG4ubXVhYmFubmhhbmguY29tL2Fzc2V0L2Zyb250ZW5kL2ltZy9nYWxsZXJ5LzIwMTgvMDkvMDQvNWI4ZTU1OTU0Njk5MF8xNTM2MDU0Njc3LmpwZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQsOgbiBwaMOybmcga2jDoWNoJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly93d3cubm9pdGhhdGhvYW5teS5jb20udm4vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9ub2ktdGhhdC1nby1waG9uZy1raGFjaC1kZXAuanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0JyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cDovL2JpendlYi5ka3RjZG4ubmV0LzEwMC8wNjAvOTY2L3Byb2R1Y3RzL2dpdW9uZy1uZ3UtZ28tY2FvLWNhcC10YWktaGEtbm9pLTEwLmpwZz92PTE0NjI5ODIxNTAzNzAnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0dpxrDhu51uZyBn4buXIHThu7Egbmhpw6puJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9jZG4ubXVhYmFubmhhbmguY29tL2Fzc2V0L2Zyb250ZW5kL2ltZy9nYWxsZXJ5LzIwMTgvMDkvMDQvNWI4ZTU1OTU0Njk5MF8xNTM2MDU0Njc3LmpwZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQsOgbiBwaMOybmcga2jDoWNoJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly93d3cubm9pdGhhdGhvYW5teS5jb20udm4vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9ub2ktdGhhdC1nby1waG9uZy1raGFjaC1kZXAuanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0JyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cDovL2JpendlYi5ka3RjZG4ubmV0LzEwMC8wNjAvOTY2L3Byb2R1Y3RzL2dpdW9uZy1uZ3UtZ28tY2FvLWNhcC10YWktaGEtbm9pLTEwLmpwZz92PTE0NjI5ODIxNTAzNzAnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0dpxrDhu51uZyBn4buXIHThu7Egbmhpw6puJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9jZG4ubXVhYmFubmhhbmguY29tL2Fzc2V0L2Zyb250ZW5kL2ltZy9nYWxsZXJ5LzIwMTgvMDkvMDQvNWI4ZTU1OTU0Njk5MF8xNTM2MDU0Njc3LmpwZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQsOgbiBwaMOybmcga2jDoWNoJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly93d3cubm9pdGhhdGhvYW5teS5jb20udm4vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9ub2ktdGhhdC1nby1waG9uZy1raGFjaC1kZXAuanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0JyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cDovL2JpendlYi5ka3RjZG4ubmV0LzEwMC8wNjAvOTY2L3Byb2R1Y3RzL2dpdW9uZy1uZ3UtZ28tY2FvLWNhcC10YWktaGEtbm9pLTEwLmpwZz92PTE0NjI5ODIxNTAzNzAnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0dpxrDhu51uZyBn4buXIHThu7Egbmhpw6puJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9jZG4ubXVhYmFubmhhbmguY29tL2Fzc2V0L2Zyb250ZW5kL2ltZy9nYWxsZXJ5LzIwMTgvMDkvMDQvNWI4ZTU1OTU0Njk5MF8xNTM2MDU0Njc3LmpwZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQsOgbiBwaMOybmcga2jDoWNoJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly93d3cubm9pdGhhdGhvYW5teS5jb20udm4vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9ub2ktdGhhdC1nby1waG9uZy1raGFjaC1kZXAuanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0JyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcblxyXG4gICAgICBdXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8SGlkZGVuIHNtVXA+XHJcbiAgICAgICAgICAgICAgIDxHcmlkTGlzdCBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZExpc3R9IGNvbHM9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRpbGVEYXRhLm1hcCgodGlsZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMaXN0VGlsZSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RpbGUuaW1nfSBhbHQ9e3RpbGUudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGlzdFRpbGVCYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy50aXRsZUJhciwgdGl0bGU6IGNsYXNzZXMudGl0bGUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uSWNvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9e2BzdGFyICR7dGlsZS50aXRsZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJCb3JkZXJJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExpc3RUaWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIDwvR3JpZExpc3Q+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8SGlkZGVuIHhzRG93biA+XHJcbiAgICAgICAgICAgICAgIDxIaWRkZW4gbWRVcD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkTGlzdH0gY29scz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHt0aWxlRGF0YS5tYXAoKHRpbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGlzdFRpbGUga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aWxlLmltZ30gYWx0PXt0aWxlLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExpc3RUaWxlQmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aWxlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMudGl0bGVCYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBjbGFzc2VzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25JY29uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD17YHN0YXIgJHt0aWxlLnRpdGxlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhckJvcmRlckljb24gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGlzdFRpbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRMaXN0PlxyXG4gICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgPEhpZGRlbiBzbURvd24+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkTGlzdCBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZExpc3R9IGNvbHM9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICB7dGlsZURhdGEubWFwKCh0aWxlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExpc3RUaWxlIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGlsZS5pbWd9IGFsdD17dGlsZS50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMaXN0VGlsZUJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGlsZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLnRpdGxlQmFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogY2xhc3Nlcy50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uSWNvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9e2BzdGFyICR7dGlsZS50aXRsZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJCb3JkZXJJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExpc3RUaWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkTGlzdD5cclxuICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICB9XHJcbn1cclxuXHJcbkFjdGlvbnMucHJvcFR5cGVzID0ge1xyXG4gICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShBY3Rpb25zKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlcydcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgd2l0aFdpZHRoLCB7IGlzV2lkdGhVcCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3dpdGhXaWR0aCdcclxuaW1wb3J0IHtcclxuICBJY29uQnV0dG9uLFxyXG4gIEljb24sXHJcbiAgVG9vbHRpcCxcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBHcmlkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgQXBwQmFyLFxyXG4gIFRvb2xiYXIsXHJcbiAgQ2FyZEFjdGlvbkFyZWEsXHJcbiAgQ2FyZE1lZGlhLFxyXG4gIEF2YXRhcixcclxuXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0J1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvbidcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XHJcbiAgY2FyZDoge1xyXG4gICAgbWF4V2lkdGg6IDMwMCxcclxuICB9LFxyXG4gIGltZ1pvb206IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMjBweCcsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OiAnMnB4IDJweCA4cHggMnB4ICNhYWEnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG5cclxuY29uc3QgaW1nID0gW1xyXG4gIHtcclxuICAgIGltZzogJ2h0dHBzOi8vd3d3Lm5vaXRoYXRob2FubXkuY29tLnZuL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvbm9pLXRoYXQtZ28tcGhvbmcta2hhY2gtZGVwLmpwZycsXHJcbiAgICB0aXRsZTogJ0hp4buHbiDEkeG6oWkgdnXDtG5nIHbhuq9uIGzhu4tjaCBsw6NtIHF1w70gcGjDoWknLFxyXG4gICAgY29udGVudDogJydcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJ2h0dHBzOi8vc2RrLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL3MlQzYlQTFuLWclRTElQkIlOTctcGglRTElQkIlQTctbSVFMSVCQiU5RC5qcGcnLFxyXG4gICAgdGl0bGU6ICdQaG9uZyBjw6FjaCBob8OgbmcgZ2lhLCDEkeG6rW0gY2jhuqV0IGPhu5UgxJFp4buDbicsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJ2h0dHBzOi8vbmhhZGVwbmhheGluaC52bi9pbWFnZXMvcC5raCVDMyVBMWNoX3QlRTElQkElQTduZ18xXy4yXzEuanBnJyxcclxuICAgIHRpdGxlOiAnVGhp4bq/dCBr4bq/IHRp4buHbiBuZ2hpIHNhbmcgdHLhu41uZycsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJ2h0dHBzOi8vY2RuLm11YWJhbm5oYW5oLmNvbS9hc3NldC9mcm9udGVuZC9pbWcvZ2FsbGVyeS8yMDE3LzEwLzA0LzU5ZDQ1NjQzNzNhNGZfMTUwNzA4NzkzOS5qcGcnLFxyXG4gICAgdGl0bGU6ICdTYW5nIHRy4buNbmcgduG7m2kgZ2nGsOG7nW5nIG5n4bunIGPhu5UgxJFp4buDbicsXHJcbiAgICBjb250ZW50OiAnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnaHR0cHM6Ly92YXRsaWV1eGF5ZHVuZy5vcmcudm4vVXBsb2FkLzQ4L05hbV8yMDE4L1RoYW5nXzEyL05nYXlfMTkvdmx4ZC5vcmdfbmd1eWVudGFjMi5qcGcnLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY29udGVudDogJydcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJ2h0dHBzOi8vdmVjdG8uY29tLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA0L3R1X2JlcF9zb2lfbmdhLTUwMHg0OTUuanBnJyxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICdodHRwOi8vbm9pdGhhdGRlcGhhbm9pLmNvbS52bi91cGxvYWRzL2ltYWdlcy90dS1iZXAtZ28tc29uLW1hdS1jaHUtbC1jby1kaWVuL245LmpwZycsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnaHR0cHM6Ly9jZG4ubXVhYmFubmhhbmguY29tL2Fzc2V0L2Zyb250ZW5kL2ltZy9nYWxsZXJ5LzIwMTgvMDkvMDQvNWI4ZTU1OTU0Njk5MF8xNTM2MDU0Njc3LmpwZycsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJ1xyXG4gIH1cclxuXVxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBjb2xvcj0ncHJpbWFyeScgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgIEtodXnhur9uIG3Do2lcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWcubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGtleT17aW5kZXh9IHN0eWxlPXt7IHBhZGRpbmc6IDQgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nWm9vbX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuSW5kZXgucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEluZGV4KTsiLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IE5hdmlnYXRlTmV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0JztcclxuaW1wb3J0IE5hdmlnYXRlQmVmb3JlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZUJlZm9yZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGtleXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBHcmlkTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdCdcclxuaW1wb3J0IEdyaWRMaXN0VGlsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGUnXHJcbmltcG9ydCBHcmlkTGlzdFRpbGVCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlQmFyJ1xyXG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyJ1xyXG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luZm8nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXMnXHJcbmltcG9ydCB7XHJcbiAgSWNvbkJ1dHRvbixcclxuICBJY29uLFxyXG4gIFRvb2x0aXAsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgR3JpZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBUeXBvZ3JhcGh5XHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBPd2xDYXJvdXNlbCBmcm9tICdyZWFjdC1vd2wtY2Fyb3VzZWwyJ1xyXG5pbXBvcnQgYTEgZnJvbSAnLi9JbWFnZS9hMS5qcGcnXHJcbmltcG9ydCBhMiBmcm9tICcuL0ltYWdlL2EyLmpwZydcclxuaW1wb3J0IGEzIGZyb20gJy4vSW1hZ2UvYTMuanBnJ1xyXG5pbXBvcnQgYTQgZnJvbSAnLi9JbWFnZS9hNC5qcGcnXHJcbmltcG9ydCBhNSBmcm9tICcuL0ltYWdlL2E1LmpwZydcclxuaW1wb3J0IGE2IGZyb20gJy4vSW1hZ2UvYTYuanBnJ1xyXG5pbXBvcnQgYTcgZnJvbSAnLi9JbWFnZS9hNy5qcGcnXHJcbmltcG9ydCBhOCBmcm9tICcuL0ltYWdlL2E4LmpwZydcclxuaW1wb3J0IGE5IGZyb20gJy4vSW1hZ2UvYTkuanBnJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIGdyaWRMaXN0OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41NCknLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIHBhZGRpbmc6ICc1cHgnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAzOWJlNScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICB9LFxyXG4gIGltZ1pvb206IHtcclxuICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIC41cywgZmlsdGVyIDNzIGVhc2UtaW4tb3V0XCIsXHJcbiAgICBmaWx0ZXI6IFwiZ3JheXNjYWxlKDEwMCUpXCIsXHJcbiAgfSxcclxuICAvLyBpbWdab29tOiB7XHJcbiAgLy8gICBcIiY6aG92ZXJcIjoge1xyXG4gIC8vICAgICBmaWx0ZXI6IFwiZ3JheXNjYWxlKDApXCIsXHJcbiAgLy8gICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjEpXCIsXHJcbiAgLy8gICAgIHRyYW5zaXRpb25EdXJhdGlvbjogXCIxc1wiLFxyXG4gIC8vICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IFwibGluZWFyXCIsXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG59KSk7XHJcblxyXG5jb25zdCBLZXl3b3JkU2xpZGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IE5leHRBcnJvdyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9eydwYXJ0bmVyX19uZXh0X19hcnJvdyd9XHJcbiAgICAgICAgb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgPE5hdmlnYXRlTmV4dCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBQcmV2QXJyb3cgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXsncGFydG5lcl9fcHJldl9fYXJyb3cnfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgIDxOYXZpZ2F0ZUJlZm9yZSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRhU2VhcmNoID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJHacaw4budbmcgbmfhu6cgaGnhu4duIMSR4bqhaVwiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi92aW5ob21lcy1jZW50cmFsLXBhcmstcGlkLTM1ODcyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlThu6cgcXXhuqduIMOhbyB0aOG7nWkgdHJhbmdcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdmluaG9tZXMtZ3JhbmQtcGFyay1xdWFuLTktcGlkLTM3NTg0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkLDoG4gdHLDoCBwaMOybmcga2jDoWNoIGhp4buHbiDEkeG6oWlcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdmluaG9tZXMtc21hcnQtY2l0eS1waWQtMzcxOTFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQsOgbiB0csOgIHBow7JuZyBraMOhY2ggY+G7lSDEkWnhu4NuXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3ZpbmhvbWVzLW9jZWFuLXBhcmstZ2lhLWxhbS1waWQtMzc1OTdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVOG7pyBi4bq/cCB0aeG7h24gbmdoaVwiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi92dW5nLXRhdS1wZWFybC1waWQtNDg2NzRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTuG7mWkgdGjhuqV0IHNhbmcgdHLhu41uZ1wiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi9ncmFuZGV1ci1wYWxhY2UtcGlkLTUwMjM0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkdpxrDhu51uZyBuZ+G7pyBj4buVIMSRaeG7g25cIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vZGlhbW9uZC1pc2xhbmQtcGlkLTMzNVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJO4buZaSB0aOG6pXQgc2FuZyB0cuG7jW5nXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3RoZS1zdW4tYXZlbnVlLXBpZC0xNVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCw6BuIMSDbiBj4buVIMSRaeG7g25cIixcclxuICAgICAgcGF0aDogXCIvbmhhLWRhdC1iYW4vbmhhLWRhdC1iYW4tdGFpLWhhaS1waG9uZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCw6BuIMSDbiBoaeG7h24gxJHhuqFpXCIsXHJcbiAgICAgIHBhdGg6IFwiL25oYS1kYXQtYmFuL25oYS1kYXQtYmFuLXRhaS1oYS1ub2lcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyBvbkNsaWNrPXtbXX0gLz4sXHJcbiAgICBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgb25DbGljaz17W119IC8+LFxyXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDE0NDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICBkb3RzOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGluaXRpYWxTbGlkZTogMlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG5cclxuICBsZXQgdGlsZURhdGEgPSBbXHJcbiAgICB7IGltZzogYTEgfSxcclxuICAgIHsgaW1nOiBhMiB9LFxyXG4gICAgeyBpbWc6IGEzIH0sXHJcbiAgICB7IGltZzogYTQgfSxcclxuICAgIHsgaW1nOiBhNSB9LFxyXG4gICAgeyBpbWc6IGE2IH0sXHJcbiAgICB7IGltZzogYTcgfSxcclxuICAgIHsgaW1nOiBhOCB9LFxyXG4gICAgeyBpbWc6IGE5IH0sXHJcbiAgICB7IGltZzogYTEgfSxcclxuICAgIHsgaW1nOiBhMiB9LFxyXG4gICAgeyBpbWc6IGEzIH0sXHJcbiAgICB7IGltZzogYTQgfSxcclxuICAgIHsgaW1nOiBhNSB9LFxyXG4gICAgeyBpbWc6IGE2IH0sXHJcbiAgICB7IGltZzogYTcgfSxcclxuICAgIHsgaW1nOiBhOCB9LFxyXG4gICAgeyBpbWc6IGE5IH1cclxuICBdXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyXCIgc3R5bGU9e3sgaGVpZ2h0OiAyMDAgfX0gPlxyXG4gICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250U2l6ZTogMjAsIHBhZGRpbmc6IDEwLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiAnIzE5NzZkMicgfX0+XHJcbiAgICAgICAgS2jDoWNoIGjDoG5nIC0gxJHhu5FpIHTDoWNcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGlsZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXJ0bmVyX19pdGVtXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAwIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nfSBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG4gICAgPC9kaXYgPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtleXdvcmRTbGlkZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzJ1xyXG5pbXBvcnQge1xyXG4gICBDYXJkQ29udGVudCxcclxuICAgVHlwb2dyYXBoeSxcclxuICAgQ2FyZEFjdGlvbkFyZWEsXHJcbiAgIENhcmRNZWRpYSxcclxuICAgQ2FyZCxcclxuICAgQXZhdGFyLFxyXG4gICBIaWRkZW4sXHJcbiAgIEdyaWQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0J1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvbidcclxuaW1wb3J0IFN0YXJSYXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclJhdGUnXHJcbmltcG9ydCB3aGF0MiBmcm9tICcuL0ltYWdlL3doYXQyLmpwZydcclxuaW1wb3J0IHdoYXQzIGZyb20gJy4vSW1hZ2Uvd2hhdDMuanBnJ1xyXG5pbXBvcnQgd2hhdDQgZnJvbSAnLi9JbWFnZS93aGF0NC5qcGcnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xyXG4gICB2aWV3UGhvbmU6IHtcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgIHBhZGRpbmc6ICc4cHgnXHJcbiAgICAgIH0sXHJcbiAgIH0sXHJcbiAgIGNhcmQ6IHtcclxuICAgICAgbWF4V2lkdGg6IDIwMCxcclxuICAgICAgYm9yZGVyOiAnM3B4IHNvbGlkIHdoaXRlJyxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgICAgIC8vIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICBtYXhXaWR0aDogMTcwLFxyXG4gICAgICB9XHJcbiAgIH0sXHJcbiAgIHRpdGxlOiB7XHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBwYWRkaW5nOiAyMCxcclxuICAgfSxcclxuICAgY3NzSWNvbjoge1xyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgZm9udFNpemU6ICczMHB4J1xyXG4gICB9LFxyXG4gICBpbWdab29tOiB7XHJcbiAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIC41cywgZmlsdGVyIDNzIGVhc2UtaW4tb3V0XCIsXHJcbiAgICAgIGZpbHRlcjogXCJncmF5c2NhbGUoMTAwJSlcIixcclxuICAgfSxcclxuICAgaW1nWm9vbToge1xyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICBmaWx0ZXI6IFwiZ3JheXNjYWxlKDApXCIsXHJcbiAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjEpXCIsXHJcbiAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogXCIxc1wiLFxyXG4gICAgICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IFwibGluZWFyXCIsXHJcbiAgICAgIH1cclxuICAgfVxyXG59KVxyXG5cclxuY29uc3QgYXJySW1nID0gW1xyXG4gICB7XHJcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vdGhlYmFuay52bi9zdGF0aWMvNi8xMTM1LzcxNC85MC8yMDE4LzEwLzE2L3RoZWJhbmtfc3V0aGF0dmVwaGlxdWV0dGhldGluZHVuZ2toaXRoYW5odG9hbjFtaW5fMTUzOTY1NDIzMS5qcGdcIixcclxuICAgICAgdGl0bGU6ICdNdWEgSMOgbmcgVGnhu4duIEzhu6NpJyxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBpbWFnZTogd2hhdDQsIC8vXCJodHRwczovL3d3dy50aGlldGtla2llbnRydWNncm91cC5jb20vcHVibGljL3VwbG9hZC9pbWFnZXMvbm9pLXRoYXQtZ28tcGhvbmcta2hhY2glMjAoNzYpLmpwZ1wiLFxyXG4gICAgICB0aXRsZTogJ0LhuqNvIEjDoG5oIEjhuq11IE3Do2knLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIGltYWdlOiB3aGF0MiwgLy9cImh0dHBzOi8vd3d3Lm5vaXRoYXRob2FubXkuY29tLnZuL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvbm9pLXRoYXQtZ28tcGhvbmcta2hhY2gtZGVwLmpwZ1wiLFxyXG4gICAgICB0aXRsZTogJ0dpw6EgQ+G6oyBI4bujcCBMw70nLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIGltYWdlOiB3aGF0MywgLy9cImh0dHBzOi8vaTIud3AuY29tL2RvZ29xdW9jY3VvbmcuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA4L0RTQzA5NTQ1LmpwZz9maXQ9MzAwOCUyQzIwMDAmc3NsPTFcIixcclxuICAgICAgdGl0bGU6ICdVeSBUw61uIENo4bqldCBMxrDhu6NuZycsXHJcbiAgIH0sXHJcbl1cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgIH1cclxuXHJcbiAgIHJlbmRlcigpIHtcclxuICAgICAgbGV0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAvLyBsZXQgaW1nID0gXCJ1cmwoJ2h0dHA6Ly9ub2l0aGF0ZGFuZ2NhcC52bi9hcHAvd2Vicm9vdC91cGxvYWRzL2ZpbGVzLzEtcGhvbmcta2hhY2gtbm9pLXRoYXQtY28tZGllbi1jaGF1LWF1LWRpbmgtdGh1LXRhaS1OYW0tRGluaC5qcGcnKVwiXHJcbiAgICAgIGxldCBpbWcgPSBcInVybCgnaHR0cHM6Ly90YW1jaHVwaGluaHNhbnBoYW0uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA1LzQwNzc5MDU1XzcxOTg5NjQ0NTAxMjkxM180MzY0NDQ5NDk4Nzk4MjI3NDU2X24uanBnJylcIlxyXG4gICAgICAvLyBsZXQgaW1nID0gXCJ1cmwoJ2h0dHBzOi8vcG5nLnBuZ3RyZWUuY29tLzU4cGljLzMyLzQ5LzY3LzIwVTU4UElDSTlkV2NkN1g3eVg4ZV9QSUMyMDE4LmpwZycpXCJcclxuICAgICAgY29uc3QgYXJyYXkgPSBbeyBpdGVtOiAxIH0sIHsgaXRlbTogMSB9LCB7IGl0ZW06IDEgfSwgeyBpdGVtOiAxIH0sIHsgaXRlbTogMSB9LCB7IGl0ZW06IDEgfV07XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogaW1nLCBoZWlnaHQ6IDI4MCwgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZFJlcGVhdDogJ3JlcGVhdCcgfX0gPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzIxOTZmMycsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gPlxyXG4gICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9J2g0JyBjb21wb25lbnQ9J2g0Jz5cclxuICAgICAgICAgICAgICAgICAgSMODWSDEkOG6vk4gVuG7mkkgQ0jDmk5HIFTDlElcclxuICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICB7YXJyYXkubWFwKChpdGVtLCBpbmRleCkgPT4gPFN0YXJSYXRlSWNvbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2NsYXNzZXMuY3NzSWNvbn0gLz4pfVxyXG4gICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGFsaWduSXRlbXM9J2NlbnRlcicganVzdGlmeT0nY2VudGVyJyBkaXJlY3Rpb249J3JvdycgPlxyXG4gICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyckltZy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXszfSBtZD17M30ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtjbGFzc2VzLnZpZXdQaG9uZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdab29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDb250ZW1wbGF0aXZlIFJlcHRpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17ZWxlbWVudC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2VsZW1lbnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzIxOTZmMycsIHBhZGRpbmc6IDQgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDE2LCBmb250V2VpZ2h0OiA1MDAgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgfVxyXG59XHJcblxyXG5JbmRleC5wcm9wVHlwZXMgPSB7XHJcbiAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEluZGV4KSIsImltcG9ydCBSZWFjdCwge0Z1bmN0aW9uQ29tcG9uZW50LCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtsb2NhbFN0b3JhZ2VQcm9qZWN0Vmlld2VkLCBsb2NhbFN0b3JhZ2VWaWV3ZWR9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi4vLi4vbW9kdWxlcy92YWxpZGF0b3InO1xyXG5pbXBvcnQge2Fwb2xsb0NsaWVudH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQge1xyXG4gIEdFVF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVCxcclxuICBIT01FX0dFVF9BRF9TRUxMX0xFQVNFUyxcclxufSBmcm9tICcuLi8uLi9ncmFwaHFsL2FkX3NlbGxfbGVhc2VzL3F1ZXJpZXMnO1xyXG5pbXBvcnQge0hPTUVfR0VUX1BST0pFQ1RfTElTVH0gZnJvbSAnLi4vLi4vZ3JhcGhxbC9wcm9qZWN0L3F1ZXJpZXMnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHtBZFNlbGxMZWFzZXNMaXN0UHJvcHN9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW50ZXJmYWNlJztcclxuaW1wb3J0IFRpdGxlQmxvY2sgZnJvbSAnLi9UaXRsZUJsb2NrJztcclxuaW1wb3J0IExvYWRpbmdQYWdlIGZyb20gJy4uL0Rpc3BsYXkvTG9hZGluZ1BhZ2UnO1xyXG5pbXBvcnQgR3JpZEFkU2VsbExlYXNlcyBmcm9tICcuLi9HcmlkTGlzdC9HcmlkQWRTZWxsTGVhc2VzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5cclxuaW50ZXJmYWNlIEFkU2VsbExlYXNlSW5kZXhQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZyxcclxuICBwYXRoOiBzdHJpbmcsXHJcbiAgaHJlZjogc3RyaW5nLFxyXG4gIHR5cGU6IFwiaDFcInxcImgyXCJ8XCJoM1wiLFxyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nLFxyXG4gIGZpbHRlcjogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEFkU2VsbExlYXNlSW5kZXg6IEZ1bmN0aW9uQ29tcG9uZW50PEFkU2VsbExlYXNlSW5kZXhQcm9wcz4gPSAocHJvcHM6IEFkU2VsbExlYXNlSW5kZXhQcm9wcykgPT5cclxue1xyXG4gIGNvbnN0IFtkYXRhQWRTZWxsTGVhc2VzLCBzZXREYXRhQWRTZWxsTGVhc2VdID0gUmVhY3QudXNlU3RhdGU8QWRTZWxsTGVhc2VzTGlzdFByb3BzW10+KFtdKTtcclxuICBjb25zdCBbc3RhdHVzTG9hZGluZ0FkU2VsbExlYXNlLCBzZXRTdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2VdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICAgIHF1ZXJ5OiBIT01FX0dFVF9BRF9TRUxMX0xFQVNFUywgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgXCJwYWdlXCI6IDEsXHJcbiAgICAgICAgXCJsaW1pdFwiOiAxMixcclxuICAgICAgICBcImZpbHRlclwiOiBwcm9wcy5maWx0ZXJcclxuICAgICAgfVxyXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHNldFN0YXR1c0xvYWRpbmdBZFNlbGxMZWFzZShmYWxzZSk7XHJcbiAgICAgIGlmICghVmFsaWRhdG9yLmlzQmxhbmsocmVzcG9uc2UuZGF0YSkgJiYgIVZhbGlkYXRvci5pc0JsYW5rKHJlc3BvbnNlLmRhdGEuYWRTZWxsTGVhc2VzLmVkZ2VzKSkge1xyXG4gICAgICAgIHNldERhdGFBZFNlbGxMZWFzZShyZXNwb25zZS5kYXRhLmFkU2VsbExlYXNlcy5lZGdlcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIChzdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2UgfHwgKGRhdGFBZFNlbGxMZWFzZXMgJiYgZGF0YUFkU2VsbExlYXNlcy5sZW5ndGggPiAwKSkgJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImJhbm5lcl9ibG9ja1wifT5cclxuICAgICAgICAgICAgPFRpdGxlQmxvY2sgdGl0bGU9e3Byb3BzLnRpdGxlfSBkZXNjcmlwdGlvbj17cHJvcHMuZGVzY3JpcHRpb24/cHJvcHMuZGVzY3JpcHRpb246Jyd9IHBhdGg9e3Byb3BzLnBhdGh9IGhyZWY9e3Byb3BzLmhyZWZ9IHR5cGU9e3Byb3BzLnR5cGV9Lz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHN0YXR1c0xvYWRpbmdBZFNlbGxMZWFzZSAmJlxyXG4gICAgICAgICAgICAgIDxMb2FkaW5nUGFnZSBjbGFzc05hbWU9XCJsb2FkaW5nX3BhZ2VcIiBncmlkPXt7eGw6IDMsIGxnOiAzLCBtZDogNCwgc206IDYsIHhzOjEyfX0gbnVtYmVyTGltaXQ9ezEyfS8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICFzdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2UgJiZcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEdyaWRBZFNlbGxMZWFzZXMgZ3JpZD17e3hsOiAzLCBsZzogMywgbWQ6IDQsIHNtOiA2LCB4czoxMn19IGdyaWREYXRhPXtkYXRhQWRTZWxsTGVhc2VzfSBjbGFzc05hbWU9XCJncmlkX19saXN0XCIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2luZGV4X2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9wcy5ocmVmfSBhcz17cHJvcHMucGF0aH0+PEJ1dHRvbj5YZW0gdGjDqm08L0J1dHRvbj48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkU2VsbExlYXNlSW5kZXg7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IE5hdmlnYXRlTmV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0JztcclxuaW1wb3J0IE5hdmlnYXRlQmVmb3JlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZUJlZm9yZSc7XHJcblxyXG5pbnRlcmZhY2UgSG90TG9jYXRpb25Qcm9wcyB7IH07XHJcbmludGVyZmFjZSBMb2NhdGlvblByb3BzIHtcclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgcGF0aDogc3RyaW5nXHJcbn1cclxuXHJcbi8vSW1wb3J0IER5bmFtaWNcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuLy9JbXBvcnQgd2l0aG91dCBTU1IgU2xpZGVyXHJcbmNvbnN0IFNsaWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1zbGljaycpLCB7XHJcbiAgc3NyOiBmYWxzZVxyXG59KTtcclxuXHJcbmNvbnN0IEhvdExvY2F0aW9uOiBGdW5jdGlvbkNvbXBvbmVudDxIb3RMb2NhdGlvblByb3BzPiA9IChwcm9wczogSG90TG9jYXRpb25Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IE5leHRBcnJvdyA9IChwcm9wczogeyBjbGFzc05hbWU6IGFueTsgb25DbGljazogYW55OyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXsnaG90LWxvY2F0aW9uc19fbmV4dF9fYXJyb3cnfVxyXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIDxOYXZpZ2F0ZU5leHQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgUHJldkFycm93ID0gKHByb3BzOiB7IGNsYXNzTmFtZTogYW55OyBvbkNsaWNrOiBhbnk7IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9eydob3QtbG9jYXRpb25zX19wcmV2X19hcnJvdyd9XHJcbiAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgPE5hdmlnYXRlQmVmb3JlIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBsZXQgc2V0dGluZ3MgPSB7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgaW5pdGlhbFNsaWRlOiAwLFxyXG4gICAgbmV4dEFycm93OiA8TmV4dEFycm93IGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e1tdfSAvPixcclxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXtbXX0gLz4sXHJcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTI5MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA4NzUsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDU5OSxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG4gIGxldCBkYXRhTG9jYXRpb24gPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkjDoCBO4buZaVwiLFxyXG4gICAgICBpbWFnZTogXCJodHRwczovL2luaG9tZS52bi9obV9jb250ZW50L3VwbG9hZHMvdGluLXR1Yy80L3RoaWV0LWtlLW5vaS10aGF0LXBob25nLWtoYWNoLWJhbmctZ28taGllbi1kYWktZGVwL3RoaWV0LWtlLW5vaS10aGF0LXBob25nLWtoYWNoLWRvbi1naWFuLW1hLWRlcC00LmpwZ1wiLFxyXG4gICAgICBwYXRoOiBcIi9uaGEtZGF0LWJhbi9uaGEtZGF0LWJhbi10YWktaGEtbm9pXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkjhu5MgQ2jDrSBNaW5oXCIsXHJcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vbm9pdGhhdG1hbmhoZS52bi9tZWRpYS8xNzUzMS9zYW5nLXRyb25nLWJvaS1waG9uZy1raGFjaC1ub2ktdGhhdC1nby10dS1uaGllbi1ub2ktdGhhdC1tYW5oLWhlLmpwZz93aWR0aD03MDAmaGVpZ2h0PTQyMi40NDE4NjA0NjUxMTYzXCIsXHJcbiAgICAgIHBhdGg6IFwiL25oYS1kYXQtYmFuL25oYS1kYXQtYmFuLXRhaS1oby1jaGktbWluaFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCLEkMOgIE7hurVuZ1wiLFxyXG4gICAgICBpbWFnZTogXCJodHRwczovL2tpZW50cnVjcm9tYW4uY29tLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy9waG9uZy1raGFjaC1iYW5nLWdvLWNhby1jYXAtMi5qcGdcIixcclxuICAgICAgcGF0aDogXCIvbmhhLWRhdC1iYW4vbmhhLWRhdC1iYW4tdGFpLWRhLW5hbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTMOibSDEkOG7k25nXCIsXHJcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vbmhhYmVwaG9hbmdnaWEudm4vY29udGVudHMvcG9zdHMvMjM5MC5qcGdcIixcclxuICAgICAgcGF0aDogXCIvbmhhLWRhdC1iYW4vbmhhLWRhdC1iYW4tdGFpLWxhbS1kb25nXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob3QtbG9jYXRpb25zXCI+XHJcbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBkYXRhTG9jYXRpb24ubWFwKChpbWFnZU9iamVjdDogTG9jYXRpb25Qcm9wcywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17XCJsb2NhdGlvbl9cIiArIFN0cmluZyhpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL25oYS1kYXQtYmFuL1tzbHVnXScgYXM9e2ltYWdlT2JqZWN0LnBhdGh9PjxhPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdC1sb2NhdGlvbnNfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJob3QtbG9jYXRpb25zX19pdGVtX190aXRsZVwiPntpbWFnZU9iamVjdC50aXRsZX08L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3QtbG9jYXRpb25zX19pdGVtX19pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3QtbG9jYXRpb25zX19pdGVtX19pbWFnZV9fYmFja2dyb3VuZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17U3RyaW5nKGltYWdlT2JqZWN0LmltYWdlKX0gYWx0PXtcIlTDrG0ga2nhur9tIG5ow6AgxJDhuqV0IHThuqFpIFwiICsgaW1hZ2VPYmplY3QudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvdExvY2F0aW9uO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICAgIElucHV0QmFzZSxcclxuICAgIEljb25CdXR0b24sXHJcbiAgICBCdXR0b24sXHJcbiAgICBHcmlkLFxyXG4gICAgTGlzdCxcclxuICAgIExpc3RJdGVtLFxyXG4gICAgTGlzdEl0ZW1JY29uLFxyXG4gICAgTGlzdEl0ZW1UZXh0LFxyXG4gICAgRGl2aWRlcixcclxuICAgIFBvcG92ZXIsXHJcbiAgICBUeXBvZ3JhcGh5LFxyXG4gICAgSGlkZGVuLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5pbXBvcnQgQXJyb3dEcm9wVXAgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcFVwJztcclxuaW1wb3J0IEFycm93RHJvcERvd24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcERvd24nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEVjb0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FY29cIjtcclxuaW1wb3J0IFZpZXdMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld0xpc3RcIjtcclxuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xyXG5pbXBvcnQgR2FtZXBhZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dhbWVwYWQnO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGlucHV0YmFzZToge1xyXG4gICAgICAgIHdpZHRoOiAnNTAwcHgnLFxyXG4gICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcclxuICAgIH0sXHJcbiAgICBzZWFyY2hIb21lOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICc0MDBweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICAgICAgb3BhY2l0eTogJzEnLFxyXG4gICAgICAgIC8vIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vaTIud3AuY29tL2RvZ29xdW9jY3VvbmcuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA4L0RTQzA5NTQ1LmpwZz9maXQ9MzAwOCUyQzIwMDAmc3NsPTFcIiknXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoSG9tZUJvZHk6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB0b3A6IDEwMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgICB2aWV3U2VhcmNoOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzE5NzZkMicsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIHdpZHRoOiA2MCxcclxuICAgIH0sXHJcbiAgICBpY29uU2VhcmNoOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDI1LFxyXG4gICAgICAgIG1hcmdpblRvcDogOCxcclxuICAgIH0sXHJcbiAgICBpY29uQnV0dG9uOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzRweCAxNnB4JyxcclxuICAgICAgICBtYXJnaW5Ub3A6IDQsXHJcbiAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2UzZjJmZCcsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAnIzkwY2FmOScsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRleHRJdGVtOiB7XHJcbiAgICAgICAgY29sb3I6ICcjMTk3NmQyJyxcclxuICAgIH0sXHJcbiAgICBwb3BvdmVyOiB7XHJcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ2F1dG8nLCAvLyBub25lXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTZWFyY2hIb21lcGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBvbkNoYW5nZVdhcmRzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT0gXCJFbnRlclwiIHx8IGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgLy8gb25DbGlja1NlYXJjaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW1hZ2VCYWNrZ3JvdW5kID0gW1xyXG4gICAgICAgICdodHRwczovL2kyLndwLmNvbS9kb2dvcXVvY2N1b25nLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wOC9EU0MwOTU0NS5qcGc/Zml0PTMwMDglMkMyMDAwJnNzbD0xJyxcclxuICAgICAgICAnaHR0cHM6Ly93d3cubm9pdGhhdGhvYW5teS5jb20udm4vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9ub2ktdGhhdC1nby1waG9uZy1raGFjaC1kZXAuanBnJyxcclxuICAgICAgICAnaHR0cHM6Ly92YXRsaWV1eGF5ZHVuZy5vcmcudm4vVXBsb2FkLzQ4L05hbV8yMDE4L1RoYW5nXzEyL05nYXlfMTkvdmx4ZC5vcmdfbmd1eWVudGFjMi5qcGcnLFxyXG4gICAgICAgICdodHRwczovL3d3dy5ub2l0aGF0aG9hbm15LmNvbS52bi9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL25vaS10aGF0LWdvLXBob25nLWtoYWNoLWRlcC5qcGcnLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IFtcclxuICAgICAgICB7IHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIGhp4buHbiDEkeG6oWknLCBsaW5rOiAnL2JhZCcgfSxcclxuICAgICAgICB7IHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIGPhu5UgxJFp4buDbicsIGxpbms6ICcvYmFkJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdCw6BuIMSDbiA0IGdo4bq/JywgbGluazogJy9iYWQnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ0LDoG4gxINuIDYgZ2jhur8nLCBsaW5rOiAnL2JhZCcgfSxcclxuICAgICAgICB7IHRpdGxlOiAnQsOgbiDEg24gaGnhu4duIMSR4bqhaScsIGxpbms6ICcvYmFkJyB9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGhpc3RvcnkgPSBbXHJcbiAgICAgICAgeyB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pycsIGxpbms6ICcvaGlzdG9yeScgfSxcclxuICAgICAgICB7IHRpdGxlOiAnYsOgbiDEg24nLCBsaW5rOiAnL2hpc3RvcnknIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ3Thu6cgcXXhuqduIMOhbycsIGxpbms6ICcvaGlzdG9yeScgfSxcclxuICAgICAgICB7IHRpdGxlOiAndOG7pyBnacOgeScsIGxpbms6ICcvaGlzdG9yeScgfSxcclxuICAgICAgICB7IHRpdGxlOiAndOG7pyBnaOG6vyBuaMOgIGjDoG5nJywgbGluazogJy9oaXN0b3J5JyB9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IHJlbmRlclN1Z2dlc3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzU3MHB4JywgcG9pbnRlckV2ZW50czogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj0nbGVmdCcgdmFyaWFudD0nc3VidGl0bGUyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICc0cHggOHB4JywgY3Vyc29yOiAnZGVmYXVsdCcsIGRpc3BsYXk6ICdpbmxpbmUnLCBjb2xvcjogJyMxOTc2ZDInLCBmb250U2l6ZTogMTQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgVOG7qiBLSMOTQSBIT1RcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7IHBhZGRpbmc6IDQsIGN1cnNvcjogJ2RlZmF1bHQnLCBkaXNwbGF5OiAnaW5saW5lJywgZmxvYXQ6ICdyaWdodCcsIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnMubWFwKChpdGVtLCBjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e2NvdW50fSBzdHlsZT17eyBmb250U2l6ZTogMTQsIHBhZGRpbmc6ICc0cHggMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckhpc3RvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzU3MHB4JywgcG9pbnRlckV2ZW50czogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj0nbGVmdCcgdmFyaWFudD0nc3VidGl0bGUyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICc0cHggOHB4JywgY3Vyc29yOiAnZGVmYXVsdCcsIGRpc3BsYXk6ICdpbmxpbmUnLCBjb2xvcjogJyMxOTc2ZDInLCBmb250U2l6ZTogMTQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgTOG7ikNIIFPhu6wgVMOMTSBLSeG7gk1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249J3JpZ2h0JyB2YXJpYW50PSdzdWJ0aXRsZTInXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogNCwgY29sb3I6ICdyZWQnLCBjdXJzb3I6ICdkZWZhdWx0JywgZGlzcGxheTogJ2lubGluZScsIGZsb2F0OiAncmlnaHQnLCB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFjDs2FcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIHtoaXN0b3J5Lmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5Lm1hcCgoaXRlbSwgY291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtjb3VudH0gc3R5bGU9e3sgZm9udFNpemU6IDE0LCBwYWRkaW5nOiAnNHB4IDEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtjb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBLaMO0bmcgY8OzIGzhu4tjaCBz4butIHTDrG0ga2nhur9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUG9wb3Zlck9wZW4gPSAoZXZlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9J2NlbnRlcicgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEhvbWV9ID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSG9tZUJvZHl9IG9uQ2xpY2s9e2hhbmRsZVBvcG92ZXJPcGVufT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGJhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnVMOsbSBz4bqjbiBwaOG6qW0gbW9uZyBtdeG7kW4gLi4uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdUw6xtIHPhuqNuIHBo4bqpbSBtb25nIG114buRbiAuLi4nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e2UgPT4gb25DaGFuZ2VXYXJkcyhlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnZpZXdTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvblNlYXJjaH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvSWNvbkJ1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ2JvdHRvbScsIGhvcml6b250YWw6ICdsZWZ0JyB9fSAvLyBHaGltXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdsZWZ0JyB9fSAvLyBWaSB0cmkgaGllbiB0aGlcclxuICAgICAgICAgICAgICAgICAgICAvLyBvbk1vdXNlTGVhdmU9e2hhbmRsZVBvcG92ZXJDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJTdWdnZXN0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJIaXN0b3J5KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEhvbWVwYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtGdW5jdGlvbkNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW50ZXJmYWNlIFRpdGxlQmxvY2tQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0eXBlOiBcImgxXCIgfCBcImgyXCIgfCBcImgzXCI7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgcGF0aDogc3RyaW5nO1xyXG4gIGhyZWY/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgVGl0bGVCbG9jazogRnVuY3Rpb25Db21wb25lbnQ8VGl0bGVCbG9ja1Byb3BzPiA9IChwcm9wczogVGl0bGVCbG9ja1Byb3BzKSA9PiB7XHJcbiAgbGV0IGRvbVRpdGxlID0gKDw+PC8+KTtcclxuICBpZiAocHJvcHMudHlwZSA9PT0gXCJoMVwiKSB7XHJcbiAgICBkb21UaXRsZSA9ICg8aDEgY2xhc3NOYW1lPVwidGl0bGVfYmxvY2tfX2JpZ190aXRsZVwiPntwcm9wcy50aXRsZX08L2gxPik7XHJcbiAgfVxyXG4gIGlmIChwcm9wcy50eXBlID09PSBcImgyXCIpIHtcclxuICAgIGRvbVRpdGxlID0gKDxoMiBjbGFzc05hbWU9XCJ0aXRsZV9ibG9ja19fYmlnX3RpdGxlXCI+e3Byb3BzLnRpdGxlfTwvaDI+KTtcclxuICB9XHJcbiAgaWYgKHByb3BzLnR5cGUgPT09IFwiaDNcIikge1xyXG4gICAgZG9tVGl0bGUgPSAoPGgyIGNsYXNzTmFtZT1cInRpdGxlX2Jsb2NrX19iaWdfdGl0bGVcIj57cHJvcHMudGl0bGV9PC9oMj4pO1xyXG4gIH1cclxuICBsZXQgZG9tQmxvY2tUaXRsZSA9ICg8PjwvPik7XHJcbiAgaWYgKHByb3BzLnBhdGguaW5kZXhPZignaHR0cHM6Ly8nKSAhPT0gLTEpIHtcclxuICAgIGRvbUJsb2NrVGl0bGUgPSAoXHJcbiAgICAgIDxhIGhyZWY9e3Byb3BzLnBhdGh9PlxyXG4gICAgICAgIHtkb21UaXRsZX1cclxuICAgICAgPC9hPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKHByb3BzLnBhdGggPT09ICcnKSB7XHJcbiAgICBkb21CbG9ja1RpdGxlID0gZG9tVGl0bGU7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvbUJsb2NrVGl0bGUgPSAoXHJcbiAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLmhyZWY/cHJvcHMuaHJlZjpwcm9wcy5wYXRofSBhcz17U3RyaW5nKHByb3BzLnBhdGgpfT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIHtkb21UaXRsZX1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gaXRlbSB4cz17MTJ9IGRpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY2xhc3NOYW1lPVwidGl0bGVfYmxvY2tcIj5cclxuICAgICAge2RvbUJsb2NrVGl0bGV9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVfYmxvY2tfX2JpZ19kZXNjcmlwdGlvblwiPntwcm9wcy5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGVCbG9jaztcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBQaG9uZUlwaG9uZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lSXBob25lXCI7XHJcbmltcG9ydCBFbWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FbWFpbFwiO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7RnVuY3Rpb25Db21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBJRm9vdGVyUHJvcHMge1xyXG5cclxufVxyXG5jb25zdCBGb290ZXJQYWdlOiBGdW5jdGlvbkNvbXBvbmVudDxJRm9vdGVyUHJvcHM+ID0gKHByb3BzOiBJRm9vdGVyUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImZvb3RlclwiIGRpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlcIlxyXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezR9IHNtPXsxMn0gY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW0gYm9yZGVyX2JvdHRvbV9tb2JpbGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV90aXRsZVwiPlxyXG4gICAgICAgICAgICAgIEPDlE5HIFRZIEPhu5QgUEjhuqZOIE7hu5hJIFRI4bqkVCBET0RPXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl9pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzg0IDUxMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTcyLjI2OCA1MDEuNjdDMjYuOTcgMjkxLjAzMSAwIDI2OS40MTMgMCAxOTIgMCA4NS45NjEgODUuOTYxIDAgMTkyIDBzMTkyIDg1Ljk2MSAxOTIgMTkyYzAgNzcuNDEzLTI2Ljk3IDk5LjAzMS0xNzIuMjY4IDMwOS42Ny05LjUzNSAxMy43NzQtMjkuOTMgMTMuNzczLTM5LjQ2NCAwek0xOTIgMjcyYzQ0LjE4MyAwIDgwLTM1LjgxNyA4MC04MHMtMzUuODE3LTgwLTgwLTgwLTgwIDM1LjgxNy04MCA4MCAzNS44MTcgODAgODAgODB6XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl90ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl90ZXh0X3RpdGxlXCI+xJDhu4thIGNo4buJPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIFPhu5EgMTIgS2h14bqldCBEdXkgVGnhur9uLCBUaGFuaCBYdcOibiwgSMOgIE7hu5lpXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl9pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8UGhvbmVJcGhvbmUvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dF90aXRsZVwiPsSQaeG7h24gdGhv4bqhaTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAwMzc3IDUzNSA3MTdcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX2ljb25cIj5cclxuICAgICAgICAgICAgICAgIDxFbWFpbEljb24vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dF90aXRsZVwiPkUtbWFpbDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICBub2l0aGF0ZG9kb0BnbWFpbC5jb21cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fYnJhbmNoXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJnb3ZcIiBzcmM9XCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvYm9jb25ndGh1b25nLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICBhbHQ9XCLEkMOjIHRow7RuZyBiw6FvIHbhu5tpIELhu5kgQ8O0bmcgVGjGsMahbmdcIi8+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vd3d3LmRtY2EuY29tL1Byb3RlY3Rpb24vU3RhdHVzLmFzcHg/SUQ9NzgxNjYwNWQtZmJkMi00NWY4LWEzOTctZWVhYzQyNjQyYjc1JnJlZnVybD1odHRwczovL25oYWRhdG1vaS5uZXQvJ30gdGFyZ2V0PXsnX2JsYW5rJ30gcmVsPXsnbm9mb2xsb3cnfSA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9kbWNhLnBuZ1wiIGFsdD1cIkRNQ0FcIiBjbGFzc05hbWU9XCJkbWNhXCIvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs4fSBzbT17MTJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30geHM9ezZ9IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIEPDtG5nIHR5XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9hYm91dC11cyd9IGFzPXsnL2Fib3V0LXVzJ30+PGE+VuG7gSBC4bqldCDEkOG7mW5nIFPhuqNuIE3hu5tpPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly9oZWxwLm5oYWRhdG1vaS5uZXQvdHV5ZW4tZHVuZyd9IHJlbD17J25vZm9sbG93J30+VHV54buDbiBk4bulbmc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vaGVscC5uaGFkYXRtb2kubmV0L2xpZW4taGUvdGhvbmctdGluLWxpZW4taGUnfSByZWw9eydub2ZvbGxvdyd9PlRow7RuZyB0aW4gbGnDqm4gaOG7hzwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3NpdGVtYXAnfSBhcz17Jy9zaXRlbWFwJ30+PGE+U2l0ZW1hcDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30geHM9ezZ9IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIMSQaeG7gXUga2hv4bqjblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL2hlbHAubmhhZGF0bW9pLm5ldC9kaWV1LWtob2FuL3F1eS1jaGUtaG9hdC1kb25nJ30gcmVsPXsnbm9mb2xsb3cnfT5RdXkgY2jhur8gaG/huqF0IMSR4buZbmc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vaGVscC5uaGFkYXRtb2kubmV0L2RpZXUta2hvYW4vY2hpbmgtc2FjaC1iYW8tbWF0J30gcmVsPXsnbm9mb2xsb3cnfT5DaMOtbmggc8OhY2ggYuG6o28gbeG6rXQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vaGVscC5uaGFkYXRtb2kubmV0L2RpZXUta2hvYW4vY2hpbmgtc2FjaC1jb29raWUnfSByZWw9eydub2ZvbGxvdyd9PkNow61uaCBzw6FjaCBDb29raWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vaGVscC5uaGFkYXRtb2kubmV0L2RpZXUta2hvYW4vZGlldS1raG9hbi1zdS1kdW5nJ30gcmVsPXsnbm9mb2xsb3cnfT7EkGnhu4F1IGtob+G6o24gc+G7rSBk4bulbmc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30geHM9ezZ9IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIFRow7RuZyB0aW5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly9uaGFkYXRtb2kubmV0L3Rpbi10dWMvdGluLXR1Yyd9PlRpbiB04bupYyB0aOG7iyB0csaw4budbmc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vbmhhZGF0bW9pLm5ldC90aW4tdHVjL2Jsb2cnfT5Cw6FvIGPDoW8gJiBQaMOibiB0w61jaDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly9uaGFkYXRtb2kubmV0L3Rpbi10dWMva2llbi10aHVjLW1vaS1naW9pJ30+S2nhur9uIHRo4bupYyBjaG8gbcO0aSBnaeG7m2k8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vaGVscC5uaGFkYXRtb2kubmV0L2h1b25nLWRhbid9IHJlbD17J25vZm9sbG93J30+SMaw4bubbmcgZOG6q24gc+G7rSBk4bulbmc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30geHM9ezZ9IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIE3huqFuZyB4w6MgaOG7mWlcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL25oYWRhdG1vaS5uZXQvJ30gcmVsPXsnbm9mb2xsb3cnfSB0YXJnZXQ9eydfYmxhbmsnfT5GYWNlYm9vazwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ0N2bE9EN3ZUUEplWVJZOElySU5ndVEnfSByZWw9eydub2ZvbGxvdyd9IHRhcmdldD17J19ibGFuayd9PllvdXR1YmU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vdHdpdHRlci5jb20vbmhhZGF0bW9pJ30gcmVsPXsnbm9mb2xsb3cnfSB0YXJnZXQ9eydfYmxhbmsnfT5Ud2l0dGVyPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbmhhZGF0bW9pLyd9IHJlbD17J25vZm9sbG93J30gdGFyZ2V0PXsnX2JsYW5rJ30+TGlua2VkSW48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfSBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9fYXBwc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9fYXBwc190aXRsZVwiPlBoxrDGoW5nIHRo4bupYyB0aGFuaCB0b8OhbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9fYXBwc19wYXltZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L3Zpc2EucG5nXCIgYWx0PVwiVmlzYVwiLz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvbWFzdGVyY2FyZC5wbmdcIiBhbHQ9XCJNYXN0ZXJjYXJkXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9hdG0ucG5nXCIgYWx0PVwiQVRNXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0gY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2FwcHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2FwcHNfdGl0bGVcIj7hu6huZyBk4bulbmcgZGkgxJHhu5luZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9fYXBwc19wYXltZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibm9fYm9yZGVyXCIgc3JjPVwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L2FwcGxlLXN0b3JlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXBwbGUgU3RvcmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibm9fYm9yZGVyXCIgc3JjPVwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L2dvb2dsZS1wbGF5LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiR29vZ2xlIFBsYXlcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyUGFnZVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWRMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0JztcclxuaW1wb3J0IEdyaWRMaXN0VGlsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGUnO1xyXG5pbXBvcnQgR3JpZExpc3RUaWxlQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZUJhcic7XHJcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXInO1xyXG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luZm8nO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlcyc7XHJcbmltcG9ydCB7IEkxOG4gfSBmcm9tICdyZWFjdC1yZWR1eC1pMThuJztcclxuaW1wb3J0IHtcclxuICBJY29uQnV0dG9uLFxyXG4gIEljb24sXHJcbiAgVG9vbHRpcCxcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBHcmlkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgQXBwQmFyLFxyXG4gIFRvb2xiYXIsXHJcbiAgSGlkZGVuLFxyXG4gIFBvcG92ZXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgU3RhckJvcmRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IHsgdGl0bGVzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2luZGV4JztcclxuaW1wb3J0IEdhbWVwYWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HYW1lcGFkJztcclxuaW1wb3J0IE1vZGFsTG9naW4gZnJvbSAnLi4vTG9naW4vTW9kYWwnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgQ2xpY2tBd2F5TGlzdGVuZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCI7XHJcbmltcG9ydCBHcm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Hcm93XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IFBvcHBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IE1lbnVMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdFBvcG92ZXI6IHtcclxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbWFyZ2luVG9wOiAxMCxcclxuICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlM2YyZmQnLFxyXG4gICAgcG9pbnRlckV2ZW50czogJ2F1dG8nLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTBjYWY5JyxcclxuICAgIH1cclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lJyxcclxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgICBwYWRkaW5nOiAnMCAxMnB4JyxcclxuICAgIC8vIGJvcmRlckxlZnQ6ICcycHggc29saWQgd2hpdGUnLFxyXG4gIH0sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICBoZWlnaHQ6IDQwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMxOTc2ZDInXHJcbiAgfSxcclxuICBkaXZpZGVyOiB7XHJcbiAgICBoZWlnaHQ6IDI4LFxyXG4gICAgbWFyZ2luOiA0LFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lJyxcclxuICB9LFxyXG4gIHRleHRJdGVtOiB7XHJcbiAgICBjb2xvcjogJyMxOTc2ZDInLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAyMCxcclxuICB9LFxyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgekluZGV4OiA5OTk5OTk4ODg4ODg4ODg4OCxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKVxyXG4gIH1cclxufSkpO1xyXG5cclxuXHJcbmNvbnN0IEFjdGlvbnMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2NvdW50TWVudSwgc2V0Q291bnRNZW51XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGFuY2hvclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRPcGVuTWVudShwcmV2T3BlbiA9PiAhcHJldk9wZW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gZXZlbnQgPT4ge1xyXG4gICAgaWYgKGFuY2hvclJlZi5jdXJyZW50ICYmIGFuY2hvclJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0T3Blbk1lbnUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUxpc3RLZXlEb3duKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIlRhYlwiKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNldE9wZW5NZW51KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHJldHVybiBmb2N1cyB0byB0aGUgYnV0dG9uIHdoZW4gd2UgdHJhbnNpdGlvbmVkIGZyb20gIW9wZW4gLT4gb3BlblxyXG4gIGNvbnN0IHByZXZPcGVuID0gUmVhY3QudXNlUmVmKG9wZW5NZW51KTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByZXZPcGVuLmN1cnJlbnQgPT09IHRydWUgJiYgb3Blbk1lbnUgPT09IGZhbHNlKSB7XHJcbiAgICAgIGFuY2hvclJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBwcmV2T3Blbi5jdXJyZW50ID0gb3Blbk1lbnU7XHJcbiAgfSwgW29wZW5NZW51XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0gYWxpZ25JdGVtcz0nY2VudGVyJyBqdXN0aWZ5PSdjZW50ZXInIGRpcmVjdGlvbj0ncm93JyA+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPSdpbmhlcml0J1xyXG4gICAgICAgICAgYXJpYS1vd25zPXtvcGVuTWVudSA/ICdtb3VzZS1vdmVyLXBvcG92ZXInIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRXZWlnaHQ6IDUwMCwgcGFkZGluZzogJzAgMjBweCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R2FtZXBhZEljb24gc3R5bGU9e3sgcGFkZGluZzogJzAgNHB4JyB9fSAvPiBO4buZaSBUaOG6pXQgRG9kb1xyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezh9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgcmVmPXthbmNob3JSZWZ9XHJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e29wZW5NZW51ID8gXCJtZW51LWxpc3QtZ3Jvd1wiIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlVG9nZ2xlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAvLyBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogaW5kZXhPcGVuID09PSBpbmRleCA/ICd1bmRlcmxpbmUgJyA6ICdub25lJyB9fVxyXG4gICAgICAgICAgLy8gb25Nb3VzZUxlYXZlPXtwb3BvdmVyQ2xvc2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxQb3BwZXJcclxuICAgICAgICAgICAgb3Blbj17b3Blbk1lbnV9XHJcbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JSZWYuY3VycmVudH1cclxuICAgICAgICAgICAgcm9sZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uXHJcbiAgICAgICAgICAgIGRpc2FibGVQb3J0YWxcclxuICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiA5OTk5IH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEdyb3dcclxuICAgICAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46IHBsYWNlbWVudCA9PT0gXCJib3R0b21cIiA/IFwiY2VudGVyIHRvcFwiIDogXCJjZW50ZXIgYm90dG9tXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzSXRlbT17b3Blbk1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1lbnUtbGlzdC1ncm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlTGlzdEtleURvd259XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Qcm9maWxlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TXkgYWNjb3VudDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PkxvZ291dDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cclxuICAgICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Qb3BwZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgPE1vZGFsTG9naW4gLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbnM7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSBcIi4uLy4uL21vZHVsZXMvdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IGdvb2dsZVNlYXJjaENvbnNvbGUsIGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgTG9nbyA9IHJlcXVpcmUoXCIuL2xvZ28ucG5nXCIpO1xyXG5cclxuaW50ZXJmYWNlIExheW91dFBhZ2VQcm9wcyB7XHJcbiAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcsXHJcbiAgaW1hZ2U/OiBzdHJpbmcsXHJcbiAgY2Fub25pY2FsOiBzdHJpbmcsXHJcbiAgcGF0aDogc3RyaW5nLFxyXG4gIGNoaWxkcmVuPzogYW55LFxyXG4gIHVzZXI/OiB7XHJcbiAgICBlbWFpbDogc3RyaW5nLFxyXG4gICAgX2lkOiBzdHJpbmcsXHJcbiAgICBmaXJzdF9uYW1lOiBzdHJpbmcsXHJcbiAgICBsYXN0X25hbWU6IHN0cmluZyxcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBhdmF0YXI6IHN0cmluZ1xyXG4gIH0sXHJcbiAgdXBkYXRlTW9kYWw/OiAoZGF0YTogYm9vbGVhbikgPT4gdm9pZDtcclxuICBzdGF0dXNNb2RhbD86IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgTGF5b3V0UGFnZTogRnVuY3Rpb25Db21wb25lbnQ8TGF5b3V0UGFnZVByb3BzPiA9IChwcm9wczogTGF5b3V0UGFnZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3N0YXR1c01vZGFsLCBzZXRNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdXBkYXRlTW9kYWwgPSAoZGF0YTogYm9vbGVhbikgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBwcm9wcy51cGRhdGVNb2RhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBwcm9wcy51cGRhdGVNb2RhbChkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE1vZGFsKGRhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgW2RhdGFDb21wYXJlTG9jYWwsIHNldERhdGFDb21wYXJlTG9jYWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5KSAmJiAhVmFsaWRhdG9yLmlzQmxhbmsobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSkpKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0RGF0YUNvbXBhcmVMb2NhbChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkpIGFzIHN0cmluZykpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICBsZXQgc2NoZW1hT2JqZWN0ID0gJ3tcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsIFwiQHR5cGVcIjogXCJMb2NhbEJ1c2luZXNzXCIsIFwibmFtZVwiOiBcIkLhuqV0IMSQ4buZbmcgU+G6o24gTuG7mWkgdGjhuqV0IERvZG9cIiwgXCJpbWFnZVwiOiBcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8xMjMwMTIwMTEzODg3NTMxMDA4L0JQSDc1YlcwXzQwMHg0MDAuanBnXCIsIFwiYWRkaXRpb25hbFR5cGVcIjpbXCJodHRwczovL3ZpLndpa2lwZWRpYS5vcmcvd2lraS9CJUUxJUJBJUE1dF8lQzQlOTElRTElQkIlOTluZ19zJUUxJUJBJUEzblwiLFwiaHR0cHM6Ly92aS53aWtpcGVkaWEub3JnL3dpa2kvTSVDMyVCNGlfZ2klRTElQkIlOUJpX2IlRTElQkElQTV0XyVDNCU5MSVFMSVCQiU5OW5nX3MlRTElQkElQTNuXCIsXCJodHRwczovL3ZpLndpa2lwZWRpYS5vcmcvd2lraS9OZyVDNiVCMCVFMSVCQiU5RGlfbSVDMyVCNGlfZ2klRTElQkIlOUJpXCJdLCBcInBheW1lbnRBY2NlcHRlZFwiOlwiQ2FzaCwgVmlzYSwgTWFzdGVyY2FyZCwgQW1lcmljYW4gRXhwcmVzcywgRGViaXQsIFBheVBhbCwgQXBwbGUgUGF5XCIsIFwibWFpbkVudGl0eU9mUGFnZVwiOlwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzP2NpZD02MjU1MDU0OTM4OTY5NjIwNDc1XCIsIFwiaGFzbWFwXCI6XCJodHRwczovL3NlYXJjaC5nb29nbGUuY29tL2xvY2FsL3dyaXRlcmV2aWV3P3BsYWNlaWQ9Q2hJSi1VSTZNaDVUTkRFUi16X1doMU5yemxZXCIsIFwiZGVzY3JpcHRpb25cIjpcIk7hu5lpIHRo4bqldCBEb2RvIMSRw7NuIMSR4bqndSB4dSBoxrDhu5tuZyBi4bqldCDEkeG7mW5nIHPhuqNuIDQuMCB04bqhaSBWaeG7h3QgTmFtLCB0w61jaCBo4bujcCB0csOtIHR14buHIG5ow6JuIHThuqFvIMSR4buDIHjhu60gbMO9IGPDoWMgZOG7ryBsaeG7h3UsIHBow6JuIHTDrWNoIG5odSBj4bqndSBj4bunYSBj4bqjIG5nxrDhu51pIG11YSBs4bqrbiBuZ8aw4budaSBiw6FuXCIsIFwiQGlkXCI6IFwiaHR0cHM6Ly9uaGFkYXRtb2kubmV0L1wiLCBcInVybFwiOiBcImh0dHBzOi8vbmhhZGF0bW9pLm5ldC9cIiwgXCJ0ZWxlcGhvbmVcIjogXCIwMzc3IDUzNSA3MTdcIiwgXCJwcmljZVJhbmdlXCI6IFwiMTAwMCAkXCIsIFwiYWRkcmVzc1wiOiB7IFwiQHR5cGVcIjogXCJQb3N0YWxBZGRyZXNzXCIsIFwic3RyZWV0QWRkcmVzc1wiOiBcIlPhu5EgMzQ4IFThu5EgSOG7r3UsIHBoxrDhu51uZyBMYSBLaMOqLCBxdeG6rW4gSMOgIMSQw7RuZ1wiLCBcImFkZHJlc3NMb2NhbGl0eVwiOiBcIkjDoCBO4buZaVwiLCBcInBvc3RhbENvZGVcIjogXCIxMDAwMDBcIiwgXCJhZGRyZXNzQ291bnRyeVwiOiBcIlZOXCJ9LCBcImdlb1wiOiB7IFwiQHR5cGVcIjogXCJHZW9Db29yZGluYXRlc1wiLCBcImxhdGl0dWRlXCI6IDIwLjk3MDk0OTYsIFwibG9uZ2l0dWRlXCI6IDEwNS43NTMxNjE3IH0sIFwib3BlbmluZ0hvdXJzU3BlY2lmaWNhdGlvblwiOiB7IFwiQHR5cGVcIjogXCJPcGVuaW5nSG91cnNTcGVjaWZpY2F0aW9uXCIsXCJkYXlPZldlZWtcIjogWyBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCIsIFwiU3VuZGF5XCJdLCBcIm9wZW5zXCI6IFwiMDA6MDBcIiwgXCJjbG9zZXNcIjogXCIyMzo1OVwiIH0sIFwic2FtZUFzXCI6IFtcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNDdmxPRDd2VFBKZVlSWThJcklOZ3VRXCIsXCJodHRwczovL2Jkc25oYWRhdG1vaS5ibG9nc3BvdC5jb21cIiwgXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbmhhZGF0bW9pLm5ldFwiLCBcImh0dHBzOi8vYmRzbmhhZGF0bW9pLmJsb2dzcG90LmNvbVwiLCBcImh0dHBzOi8vdmkuZ3JhdmF0YXIuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vYmRzbmhhZGF0bW9pLnR1bWJsci5jb21cIiwgXCJodHRwczovL2Jkc25oYWRhdG1vaS53ZWVibHkuY29tXCIsIFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5yZWRkaXQuY29tL3VzZXIvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuZGlpZ28uY29tL3Byb2ZpbGUvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuYXJ0ZmlyZS5jb20vZXh0L3Blb3BsZS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5zbWFzaHdvcmRzLmNvbS9wcm9maWxlL3ZpZXcvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cDovL3BsYXkuZm0vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cubGFzdC5mbS91c2VyL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LnN0cmF2YS5jb20vYXRobGV0ZXMvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LnRyaXBhZHZpc29yLmNvbS52bi9Qcm9maWxlL2Jkc25oYWRhdG1vaVwiLCBcImh0dHA6Ly9iaXQubHkvMnVhWlBMbVwiLCBcImh0dHBzOi8vZ2V0cG9ja2V0LmNvbS9AYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cucGludGVyZXN0LmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuZmxpY2tyLmNvbS9wZW9wbGUvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9hYm91dC5tZS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5pbnN0YXBhcGVyLmNvbS9wL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LmJlaGFuY2UubmV0L2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vbXlzcGFjZS5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuZ29vZHJlYWRzLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL2RyaWJiYmxlLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5kZXZpYW50YXJ0LmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5wbHVyay5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cDovL3d3dy5mb2xrZC5jb20vdXNlci9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy50ZWQuY29tL3Byb2ZpbGVzLzE5MDI1OTc3XCIsIFwiaHR0cHM6Ly9raW5qYS5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9lbGxvLmNvL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vY291Yi5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9taXguY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHA6Ly93d3cuYXV0aG9yc3RyZWFtLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3NvdW5kY2xvdWQuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vbWVkaXVtLmNvbS9AYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9jb2RlcGVuLmlvL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LmV2ZXJub3RlLmNvbS9wdWIvbmRtaDI2OS90aW50dWNcIiwgXCJodHRwczovL2Rpc3F1cy5jb20vYnkvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuc2Nvb3AuaXQvdS9iLXQtbmctcy1uLW5oYS10LW0taVwiLCBcImh0dHBzOi8vd3d3LnZpbmdsZS5uZXQvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cucXVvcmEuY29tL3Byb2ZpbGUvQmF0LURvbmctU2FuLU5oYS1EYXQtTW9pXCIsIFwiaHR0cHM6Ly9iZHNuaGFkYXRtb2kubGl2ZWpvdXJuYWwuY29tXCIsIFwiaHR0cHM6Ly9hbmdlbC5jby9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5wcm9kdWN0aHVudC5jb20vQGJkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vc3BlYWtlcmRlY2suY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3Lndpa2lob3cuY29tL1VzZXI6QmRzbmhhZGF0bW9pXCIsIFwiaHR0cDovL2Jkc25oYWRhdG1vaS5icmFuZHlvdXJzZWxmLmNvbVwiXX0nO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3Byb3BzLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17cHJvcHMuY2Fub25pY2FsfSAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXtMb2dvfSAvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNDAwaSw1MDAsNzAwLDkwMCZkaXNwbGF5PXN3YXAmc3Vic2V0PXZpZXRuYW1lc2VcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiIGNvbnRlbnQ9e2dvb2dsZVNlYXJjaENvbnNvbGV9IC8+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIVZhbGlkYXRvci5pc0JsYW5rKHByb3BzLmRlc2NyaXB0aW9uKSAmJlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cHJvcHMudGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIHByb3BlcnR5PVwiZmI6YXBwX2lkXCIgY29udGVudD1cIjkzNzIzNDM2NjMzNTUwNFwiIC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJmYjphZG1pbnNcIiBjb250ZW50PVwiMTAwMDA0MjQ0NDc0MDEzXCIgLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJO4buZaSB0aOG6pXQgRG9kb1wiIC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtwcm9wcy5jYW5vbmljYWx9IC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLmltYWdlfSAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQG5oYWRhdG1vaVwiIC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAbmhhZGF0bW9pXCIgLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3Byb3BzLnRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtwcm9wcy5pbWFnZX0gLz5cclxuICAgICAgICA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzY2hlbWFPYmplY3QgfX0gPlxyXG4gICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0UGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjBBQUFBZENBWUFBQUJXazJjUEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFEUlNVUkJWRWhMN1pNeENzSkFFRVc5aHFmVXlsUGtCSG9COVFLQ2xwWjI0Z20wVVlTQXBkWEtEMWt5N254alBoaE1zUTlldFZrZW01MGRoVCtRbzcwaVJZdnROUlM3bTFORmlvNW5SNnBLamxKWUVLb01QN284bEM0NFdWM3ExZTY0S0hzV2kvMjlYbjBQMitEbTlIRDdJTU5GN1NtczAzVVRRTmdHMlIrSU1qcEhvUTFIMm9LUUlVVWhJcEZ6K2FUZldCbFNsQTFOcnlkTjd6QzlZN1lITWx5MG10N0UrWWZwdGVGcWVzbGVob3Uyd1U3RWh1c2JValFOUmxWeWxNS0NVR1g0VWZZa29Jb1UvUlU1MmlNaHZBQ1lmUWtnV3I1ZHJBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgRGlhbG9nLFxyXG4gIEljb25CdXR0b24sXHJcbiAgR3JpZCxcclxuICBQYXBlcixcclxuICBUYWJzLFxyXG4gIFRhYixcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCB7IGdvb2dsZUxvZ2luIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBmYWNlYm9va0xvZ2luIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyB6YWxvTG9naW4gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBJbWFnZUxvZ2luIGZyb20gJy4uLy4uL3B1YmxpYy9JbWFnZS9sb2dpbi5wbmcnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGxvbmdJbjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogNjAwLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIC8vIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9sb2dpbi1iYWNrZ3JvdW5kLnN2Z1wiKScsXHJcbiAgICAvLyBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSBjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZzogJzAgMjBweCcsXHJcbiAgfSxcclxuICBsb2dJbkNsb3NlOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcwcHgnLFxyXG4gICAgcmlnaHQ6ICcwcHgnLFxyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICB3aWR0aDogJzQwcHghaW1wb3J0YW50JyxcclxuICAgIGhlaWdodDogJzQwcHghaW1wb3J0YW50JyxcclxuICB9LFxyXG4gIG1vZGFsOiB7XHJcbiAgICAvLyBtYXhXaWR0aDogJycsXHJcbiAgICBoZWlnaHQ6IDYwMCxcclxuICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZmxvYXQ6ICdsZWZ0JyxcclxuICAgIG1hcmdpbjogJzcwcHggMCA4cHggMCcsXHJcbiAgICAvLyBmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XHJcbiAgICBmb250U2l6ZTogJzMwcHgnLFxyXG4gICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgY29sb3I6ICcjMTk3NmQyJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIGZsb2F0OiAnbGVmdCcsXHJcbiAgICAvLyBmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XHJcbiAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgY29sb3I6ICcjMDAwMDAwOGEnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuXHJcbmNvbnN0IHRhYnMgPSBbXHJcbiAgeyB2YWx1ZTogMSwgbGFiZWw6ICfEkMSDbmcgTmjhuq1wJyB9LFxyXG4gIHsgdmFsdWU6IDIsIGxhYmVsOiAnVOG6oW8gVMOgaSBLaG/huqNuJyB9LFxyXG5dO1xyXG5cclxuXHJcbmNvbnN0IExvZ2luTW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbdmFsdWVUYWIsIHNldFZhbHVlVGFiXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG5cclxuICBjb25zdCByZW5kZXJHb29nbGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luX19tb2RhbF9fYmxvY2tfX2dvb2dsZVwiIGhyZWY9e2dvb2dsZUxvZ2lufT5cclxuICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTMzLjUgNTQ0LjNcIj5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTUzMy41LDI3OC40YzAtMTguNS0xLjUtMzcuMS00LjctNTUuM0gyNzIuMXYxMDQuOGgxNDdjLTYuMSwzMy44LTI1LjcsNjMuNy01NC40LDgyLjd2NjhoODcuNyBDNTAzLjksNDMxLjIsNTMzLjUsMzYxLjIsNTMzLjUsMjc4LjR6XCIgLz5cclxuICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QxXCIgZD1cIk0yNzIuMSw1NDQuM2M3My40LDAsMTM1LjMtMjQuMSwxODAuNC02NS43bC04Ny43LTY4Yy0yNC40LDE2LjYtNTUuOSwyNi05Mi42LDI2Yy03MSwwLTEzMS4yLTQ3LjktMTUyLjgtMTEyLjMgSDI4Ljl2NzAuMUM3NS4xLDQ4Ni4zLDE2OS4yLDU0NC4zLDI3Mi4xLDU0NC4zelwiIC8+XHJcbiAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MlwiIGQ9XCJNMTE5LjMsMzI0LjNjLTExLjQtMzMuOC0xMS40LTcwLjQsMC0xMDQuMlYxNTBIMjguOWMtMzguNiw3Ni45LTM4LjYsMTY3LjUsMCwyNDQuNEwxMTkuMywzMjQuM3pcIiAvPlxyXG4gICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDNcIiBkPVwiTTI3Mi4xLDEwNy43YzM4LjgtMC42LDc2LjMsMTQsMTA0LjQsNDAuOGwwLDBsNzcuNy03Ny43QzQwNSwyNC42LDMzOS43LTAuOCwyNzIuMSwwQzE2OS4yLDAsNzUuMSw1OCwyOC45LDE1MFx0bDkwLjQsNzAuMUMxNDAuOCwxNTUuNiwyMDEuMSwxMDcuNywyNzIuMSwxMDcuN3pcIiAvPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImdvb2dsZVwiPsSQxIJORyBOSOG6rFAgQuG6sE5HIEdPT0dMRTwvcD5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyWmFsbyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibG9naW5fX21vZGFsX19ibG9ja19femFsb1wiIGhyZWY9e3phbG9Mb2dpbn0+XHJcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDQ2MC4xIDQzNi42XCI+XHJcbiAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTgyLjYgMzgwLjljLTEuOC0uOC0zLjEtMS43LTEtMy41IDEuMy0xIDIuNy0xLjkgNC4xLTIuOCAxMy4xLTguNSAyNS40LTE3LjggMzMuNS0zMS41IDYuOC0xMS40IDUuNy0xOC4xLTIuOC0yNi41QzY5IDI2OS4yIDQ4LjIgMjEyLjUgNTguNiAxNDUuNSA2NC41IDEwNy43IDgxLjggNzUgMTA3IDQ2LjZjMTUuMi0xNy4yIDMzLjMtMzEuMSA1My4xLTQyLjcgMS4yLS43IDIuOS0uOSAzLjEtMi43LS40LTEtMS4xLS43LTEuNy0uNy0zMy43IDAtNjcuNC0uNy0xMDEgLjJDMjguMyAxLjcuNSAyNi42LjYgNjIuM2MuMiAxMDQuMyAwIDIwOC42IDAgMzEzIDAgMzIuNCAyNC43IDU5LjUgNTcgNjAuNyAyNy4zIDEuMSA1NC42LjIgODIgLjEgMiAuMSA0IC4yIDYgLjJIMjkwYzM2IDAgNzIgLjIgMTA4IDAgMzMuNCAwIDYwLjUtMjcgNjAuNS02MC4zdi0uNi01OC41YzAtMS40LjUtMi45LS40LTQuNC0xLjguMS0yLjUgMS42LTMuNSAyLjYtMTkuNCAxOS41LTQyLjMgMzUuMi02Ny40IDQ2LjMtNjEuNSAyNy4xLTEyNC4xIDI5LTE4Ny42IDcuMi01LjUtMi0xMS41LTIuMi0xNy4yLS44LTguNCAyLjEtMTYuNyA0LjYtMjUgNy4xLTI0LjQgNy42LTQ5LjMgMTEtNzQuOCA2em03Mi41LTE2OC41YzEuNy0yLjIgMi42LTMuNSAzLjYtNC44IDEzLjEtMTYuNiAyNi4yLTMzLjIgMzkuMy00OS45IDMuOC00LjggNy42LTkuNyAxMC0xNS41IDIuOC02LjYtLjItMTIuOC03LTE1LjItMy0uOS02LjItMS4zLTkuNC0xLjEtMTcuOC0uMS0zNS43LS4xLTUzLjUgMC0yLjUgMC01IC4zLTcuNC45LTUuNiAxLjQtOSA3LjEtNy42IDEyLjggMSAzLjggNCA2LjggNy44IDcuNyAyLjQuNiA0LjkuOSA3LjQuOCAxMC44LjEgMjEuNyAwIDMyLjUuMSAxLjIgMCAyLjctLjggMy42IDEtLjkgMS4yLTEuOCAyLjQtMi43IDMuNS0xNS41IDE5LjYtMzAuOSAzOS4zLTQ2LjQgNTguOS0zLjggNC45LTUuOCAxMC4zLTMgMTYuM3M4LjUgNy4xIDE0LjMgNy41YzQuNi4zIDkuMy4xIDE0IC4xIDE2LjIgMCAzMi4zLjEgNDguNS0uMSA4LjYtLjEgMTMuMi01LjMgMTIuMy0xMy4zLS43LTYuMy01LTkuNi0xMy05LjctMTQuMS0uMS0yOC4yIDAtNDMuMyAwem0xMTYtNTIuNmMtMTIuNS0xMC45LTI2LjMtMTEuNi0zOS44LTMuNi0xNi40IDkuNi0yMi40IDI1LjMtMjAuNCA0My41IDEuOSAxNyA5LjMgMzAuOSAyNy4xIDM2LjYgMTEuMSAzLjYgMjEuNCAyLjMgMzAuNS01LjEgMi40LTEuOSAzLjEtMS41IDQuOC42IDMuMyA0LjIgOSA1LjggMTQgMy45IDUtMS41IDguMy02LjEgOC4zLTExLjMuMS0yMCAuMi00MCAwLTYwLS4xLTgtNy42LTEzLjEtMTUuNC0xMS41LTQuMy45LTYuNyAzLjgtOS4xIDYuOXptNjkuMyAzNy4xYy0uNCAyNSAyMC4zIDQzLjkgNDYuMyA0MS4zIDIzLjktMi40IDM5LjQtMjAuMyAzOC42LTQ1LjYtLjgtMjUtMTkuNC00Mi4xLTQ0LjktNDEuMy0yMy45LjctNDAuOCAxOS45LTQwIDQ1LjZ6bS04LjgtMTkuOWMwLTE1LjcuMS0zMS4zIDAtNDcgMC04LTUuMS0xMy0xMi43LTEyLjktNy40LjEtMTIuMyA1LjEtMTIuNCAxMi44LS4xIDQuNyAwIDkuMyAwIDE0djc5LjVjMCA2LjIgMy44IDExLjYgOC44IDEyLjkgNi45IDEuOSAxNC0yLjIgMTUuOC05LjEuMy0xLjIuNS0yLjQuNC0zLjcuMi0xNS41LjEtMzEgLjEtNDYuNXpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QxXCIgZD1cIk0xMzkuNSA0MzYuMmMtMjcuMyAwLTU0LjcuOS04Mi0uMS0zMi4zLTEuMy01Ny0yOC40LTU3LTYwLjcgMC0xMDQuMy4yLTIwOC42IDAtMzEzQy41IDI2LjcgMjguNCAxLjggNjAuNS45YzMzLjYtLjkgNjcuMy0uMiAxMDEtLjIuNiAwIDEuNC0uMyAxLjcuNy0uMiAxLjgtMiAyLTMuMSAyLjctMTkuOCAxMS42LTM3LjkgMjUuNS01My4xIDQyLjctMjUuMSAyOC40LTQyLjUgNjEtNDguNCA5OC45LTEwLjQgNjYuOSAxMC41IDEyMy43IDU3LjggMTcxLjEgOC40IDguNSA5LjUgMTUuMSAyLjggMjYuNS04LjEgMTMuNy0yMC40IDIzLTMzLjUgMzEuNS0xLjQuOC0yLjggMS44LTQuMiAyLjctMi4xIDEuOC0uOCAyLjcgMSAzLjUuNC45LjkgMS43IDEuNSAyLjUgMTEuNSAxMC4yIDIyLjQgMjEuMSAzMy43IDMxLjUgNS4zIDQuOSAxMC42IDEwIDE1LjcgMTUuMSAyLjEgMS45IDUuNiAyLjUgNi4xIDYuMXpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QyXCIgZD1cIk0xMzkuNSA0MzYuMmMtLjUtMy41LTQtNC4xLTYuMS02LjItNS4xLTUuMi0xMC40LTEwLjItMTUuNy0xNS4xLTExLjMtMTAuNC0yMi4yLTIxLjMtMzMuNy0zMS41LS42LS44LTEuMS0xLjYtMS41LTIuNSAyNS41IDUgNTAuNCAxLjYgNzQuOS01LjkgOC4zLTIuNSAxNi42LTUgMjUtNy4xIDUuNy0xLjUgMTEuNy0xLjIgMTcuMi44IDYzLjQgMjEuOCAxMjYgMTkuOCAxODcuNi03LjIgMjUuMS0xMS4xIDQ4LTI2LjcgNjcuNC00Ni4yIDEtMSAxLjctMi41IDMuNS0yLjYuOSAxLjQuNCAyLjkuNCA0LjR2NTguNWMuMiAzMy40LTI2LjYgNjAuNi02MCA2MC45aC0uNWMtMzYgLjItNzIgMC0xMDggMEgxNDUuNWMtMi0uMi00LS4zLTYtLjN6XCIgLz5cclxuICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MVwiIGQ9XCJNMTU1LjEgMjEyLjRjMTUuMSAwIDI5LjMtLjEgNDMuNCAwIDcuOS4xIDEyLjIgMy40IDEzIDkuNy45IDcuOS0zLjcgMTMuMi0xMi4zIDEzLjMtMTYuMi4yLTMyLjMuMS00OC41LjEtNC43IDAtOS4zLjItMTQtLjEtNS44LS4zLTExLjUtMS41LTE0LjMtNy41cy0uOC0xMS40IDMtMTYuM2MxNS40LTE5LjYgMzAuOS0zOS4zIDQ2LjQtNTguOS45LTEuMiAxLjgtMi40IDIuNy0zLjUtMS0xLjctMi40LS45LTMuNi0xLTEwLjgtLjEtMjEuNyAwLTMyLjUtLjEtMi41IDAtNS0uMy03LjQtLjgtNS43LTEuMy05LjItNy03LjktMTIuNi45LTMuOCAzLjktNi45IDcuNy03LjggMi40LS42IDQuOS0uOSA3LjQtLjkgMTcuOC0uMSAzNS43LS4xIDUzLjUgMCAzLjItLjEgNi4zLjMgOS40IDEuMSA2LjggMi4zIDkuNyA4LjYgNyAxNS4yLTIuNCA1LjctNi4yIDEwLjYtMTAgMTUuNS0xMy4xIDE2LjctMjYuMiAzMy4zLTM5LjMgNDkuOC0xLjEgMS4zLTIuMSAyLjYtMy43IDQuOHpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QxXCIgZD1cIk0yNzEuMSAxNTkuOGMyLjQtMy4xIDQuOS02IDktNi44IDcuOS0xLjYgMTUuMyAzLjUgMTUuNCAxMS41LjMgMjAgLjIgNDAgMCA2MCAwIDUuMi0zLjQgOS44LTguMyAxMS4zLTUgMS45LTEwLjcuNC0xNC0zLjktMS43LTIuMS0yLjQtMi41LTQuOC0uNi05LjEgNy40LTE5LjQgOC43LTMwLjUgNS4xLTE3LjgtNS44LTI1LjEtMTkuNy0yNy4xLTM2LjYtMi4xLTE4LjMgNC0zMy45IDIwLjQtNDMuNSAxMy42LTguMSAyNy40LTcuNCAzOS45IDMuNXptLTM1LjQgMzYuNWMuMiA0LjQgMS42IDguNiA0LjIgMTIuMSA1LjQgNy4yIDE1LjcgOC43IDIzIDMuMyAxLjItLjkgMi4zLTIgMy4zLTMuMyA1LjYtNy42IDUuNi0yMC4xIDAtMjcuNy0yLjgtMy45LTcuMi02LjItMTEuOS02LjMtMTEtLjctMTguNyA3LjgtMTguNiAyMS45ek0zNDAuNCAxOTYuOWMtLjgtMjUuNyAxNi4xLTQ0LjkgNDAuMS00NS42IDI1LjUtLjggNDQuMSAxNi4zIDQ0LjkgNDEuMy44IDI1LjMtMTQuNyA0My4yLTM4LjYgNDUuNi0yNi4xIDIuNi00Ni44LTE2LjMtNDYuNC00MS4zem0yNS4xLTIuNGMtLjIgNSAxLjMgOS45IDQuMyAxNCA1LjUgNy4yIDE1LjggOC42IDIzIDMgMS4xLS44IDItMS44IDIuOS0yLjggNS44LTcuNiA1LjgtMjAuNC4xLTI4LTIuOC0zLjgtNy4yLTYuMi0xMS45LTYuMy0xMC44LS42LTE4LjQgNy42LTE4LjQgMjAuMXpNMzMxLjYgMTc3YzAgMTUuNS4xIDMxIDAgNDYuNS4xIDcuMS01LjUgMTMtMTIuNiAxMy4yLTEuMiAwLTIuNS0uMS0zLjctLjQtNS0xLjMtOC44LTYuNi04LjgtMTIuOXYtNzkuNWMwLTQuNy0uMS05LjMgMC0xNCAuMS03LjcgNS0xMi43IDEyLjQtMTIuNyA3LjYtLjEgMTIuNyA0LjkgMTIuNyAxMi45LjEgMTUuNiAwIDMxLjMgMCA0Ni45elwiIC8+XHJcbiAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTIzNS43IDE5Ni4zYy0uMS0xNC4xIDcuNi0yMi42IDE4LjUtMjIgNC43LjIgOS4xIDIuNSAxMS45IDYuNCA1LjYgNy41IDUuNiAyMC4xIDAgMjcuNy01LjQgNy4yLTE1LjcgOC43LTIzIDMuMy0xLjItLjktMi4zLTItMy4zLTMuMy0yLjUtMy41LTMuOS03LjctNC4xLTEyLjF6TTM2NS41IDE5NC41YzAtMTIuNCA3LjYtMjAuNyAxOC40LTIwLjEgNC43LjEgOS4xIDIuNSAxMS45IDYuMyA1LjcgNy42IDUuNyAyMC41LS4xIDI4LTUuNiA3LjEtMTYgOC4zLTIzLjEgMi43LTEuMS0uOC0yLTEuOC0yLjgtMi45LTMtNC4xLTQuNC05LTQuMy0xNHpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QzXCIgZD1cIk02NiAxaDMyOC4xYzM1LjkgMCA2NSAyOS4xIDY1IDY1djMwM2MwIDM1LjktMjkuMSA2NS02NSA2NUg2NmMtMzUuOSAwLTY1LTI5LjEtNjUtNjVWNjZDMSAzMC4xIDMwLjEgMSA2NiAxelwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiemFsb1wiPsSQxIJORyBOSOG6rFAgQuG6sE5HIFpBTE88L3A+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlckZhY2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luX19tb2RhbF9fYmxvY2tfX2ZhY2Vib29rXCIgaHJlZj17ZmFjZWJvb2tMb2dpbn0+XHJcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNNTA0IDI1NkM1MDQgMTE5IDM5MyA4IDI1NiA4UzggMTE5IDggMjU2YzAgMTIzLjc4IDkwLjY5IDIyNi4zOCAyMDkuMjUgMjQ1VjMyNy42OWgtNjNWMjU2aDYzdi01NC42NGMwLTYyLjE1IDM3LTk2LjQ4IDkzLjY3LTk2LjQ4IDI3LjE0IDAgNTUuNTIgNC44NCA1NS41MiA0Ljg0djYxaC0zMS4yOGMtMzAuOCAwLTQwLjQxIDE5LjEyLTQwLjQxIDM4LjczVjI1Nmg2OC43OGwtMTEgNzEuNjloLTU3Ljc4VjUwMUM0MTMuMzEgNDgyLjM4IDUwNCAzNzkuNzggNTA0IDI1NnpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZhY2Vib29rXCI+xJDEgk5HIE5I4bqsUCBC4bqwTkcgRkFDRUJPT0s8L3A+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUYWJzQ2hhbmdlID0gKGV2ZW50LCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWVUYWIodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclRhYnMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxQYXBlciBzcXVhcmU+XHJcbiAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFic0NoYW5nZX1cclxuICAgICAgICAgICAgc2Nyb2xsQnV0dG9ucz1cImF1dG9cIlxyXG4gICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlVGFifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGFicy5tYXAoKHRhYikgPT4gPFRhYiBrZXk9e3RhYi52YWx1ZX0gbGFiZWw9e3RhYi5sYWJlbH0gdmFsdWU9e3RhYi52YWx1ZX0gLz4pfVxyXG4gICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge3ZhbHVlVGFiID09PSAxICYmIHJlbmRlckxvZ2luKCl9XHJcbiAgICAgICAgICAgIHt2YWx1ZVRhYiA9PT0gMiAmJiByZW5kZXJDcmVhdGVBY2NvdW50KCl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTG9naW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX19tb2RhbF9fYmxvY2tcIiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCA0MHB4JyB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMCcgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBzaXplPVwic21hbGxcIiBsYWJlbD1cIkVtYWlsIC8gU8SQVFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJN4bqtdCBraOG6qXVcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAzMCwgcGFkZGluZzogJzhweCAwJywgZmxvYXQ6ICdsZWZ0Jywgd2lkdGg6IDMwMCB9fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGNvbG9yOiAnIzE5NzZkMicsIGN1cnNvcjogJ2RlZmF1bHQnIH19ID5RdcOqbiBt4bqtdCBraOG6qXU/PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgc3R5bGU9e3sgY29sb3I6ICcjMTk3NmQyJyB9fT7EkMSDbmcgbmjhuq1wPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnNjBweCAwJyB9fT5cclxuICAgICAgICAgIHtyZW5kZXJHb29nbGUoKX1cclxuICAgICAgICAgIHtyZW5kZXJaYWxvKCl9XHJcbiAgICAgICAgICB7cmVuZGVyRmFjZSgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGNvbnN0IHJlbmRlckNyZWF0ZUFjY291bnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX19tb2RhbF9fYmxvY2tcIiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCA0MHB4JyB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMCcgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBzaXplPVwic21hbGxcIiBsYWJlbD1cIkjhu40gdMOqblwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJTxJBUXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMCcgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBzaXplPVwic21hbGxcIiBsYWJlbD1cIkVtYWlsXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMCcgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBzaXplPVwic21hbGxcIiBsYWJlbD1cIk3DoyB4w6FjIHRo4buxY1wiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJN4bqtdCBraOG6qXVcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAwJyB9fT5cclxuICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHNpemU9XCJzbWFsbFwiIGxhYmVsPVwiR2nhu5tpIHTDrW5oXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGNvbG9yOiAnIzE5NzZkMicgfX0+VOG6oW8gdMOgaSBraG/huqNuPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgY29sb3I9J2luaGVyaXQnXHJcbiAgICAgICAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRXZWlnaHQ6IDUwMCwgcGFkZGluZzogJzAgMjBweCcsIGZsb2F0OiAncmlnaHQnLCBjdXJzb3I6ICdkZWZhdWx0JyB9fVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9PsSQxINuZyBuaOG6rXBcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8RGlhbG9nXHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtYXgtd2lkdGgtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICBtYXhXaWR0aD17J21kJ31cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvbmdJbn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dJbkNsb3NlfT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgICAgICAgICAgICB7dmFsdWVUYWIgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IHN0eWxlPXt7IGJvcmRlclJpZ2h0OiAnNHB4IHNvbGlkICNlMGUwZTAnLCBoZWlnaHQ6IDYwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PiDEkMSDbmcgbmjhuq1wIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgxJDEg25nIG5o4bqtcCDEkeG7gyB0aGVvIGTDtWkgxJHGoW4gaMOgbmcsIGzGsHUgZGFuaCBzw6FjaCBz4bqjbiBwaOG6qW0gecOqdSB0aMOtY2gsIG5o4bqtbiBuaGnhu4F1IMawdSDEkcOjaSBo4bqlcCBk4bqrbi5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0ltYWdlTG9naW59IHN0eWxlPXt7IGhlaWdodDogMzUwLCB3aWR0aDogJzEwMCUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHt2YWx1ZVRhYiA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gc3R5bGU9e3sgYm9yZGVyUmlnaHQ6ICc0cHggc29saWQgI2UwZTBlMCcsIGhlaWdodDogNjAwIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+IFThuqFvIHTDoGkga2hv4bqjbiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIFThuqFvIHTDoGkga2hv4bqjbiDEkeG7gyB0aGVvIGTDtWkgxJHGoW4gaMOgbmcsIGzGsHUgZGFuaCBzw6FjaCBz4bqjbiBwaOG6qW0gecOqdSB0aMOtY2gsIG5o4bqtbiBuaGnhu4F1IMawdSDEkcOjaSBo4bqlcCBk4bqrblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17SW1hZ2VMb2dpbn0gc3R5bGU9e3sgaGVpZ2h0OiAzNTAsIHdpZHRoOiAnMTAwJScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OH0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAgMCAwJywgY29sb3I6ICcjMTk3NmQyJywgZm9udFNpemU6IDIwLCBmb250V2VpZ2h0OiA1MDAgfX0+TuG7mWkgdGjhuqV0IERvZG88L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyVGFicygpfVxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRGlhbG9nID5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQgPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luTW9kYWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuaW1wb3J0IE5hdmlnYXRlTmV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0JztcclxuaW1wb3J0IE5hdmlnYXRlQmVmb3JlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZUJlZm9yZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGtleXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxufSkpO1xyXG5cclxuY29uc3QgS2V5d29yZFNsaWRlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IE5leHRBcnJvdyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9eydrZXl3b3JkLXNlYXJjaF9fbmV4dF9fYXJyb3cnfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgIDxOYXZpZ2F0ZU5leHQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IFByZXZBcnJvdyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9eydrZXl3b3JkLXNlYXJjaF9fcHJldl9fYXJyb3cnfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgIDxOYXZpZ2F0ZUJlZm9yZSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRhU2VhcmNoID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJHacaw4budbmcgbmfhu6cgaGnhu4duIMSR4bqhaVwiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi92aW5ob21lcy1jZW50cmFsLXBhcmstcGlkLTM1ODcyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlThu6cgcXXhuqduIMOhbyB0aOG7nWkgdHJhbmdcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdmluaG9tZXMtZ3JhbmQtcGFyay1xdWFuLTktcGlkLTM3NTg0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkLDoG4gdHLDoCBwaMOybmcga2jDoWNoIGhp4buHbiDEkeG6oWlcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdmluaG9tZXMtc21hcnQtY2l0eS1waWQtMzcxOTFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQsOgbiB0csOgIHBow7JuZyBraMOhY2ggY+G7lSDEkWnhu4NuXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3ZpbmhvbWVzLW9jZWFuLXBhcmstZ2lhLWxhbS1waWQtMzc1OTdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVOG7pyBi4bq/cCB0aeG7h24gbmdoaVwiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi92dW5nLXRhdS1wZWFybC1waWQtNDg2NzRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTuG7mWkgdGjhuqV0IHNhbmcgdHLhu41uZ1wiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi9ncmFuZGV1ci1wYWxhY2UtcGlkLTUwMjM0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkdpxrDhu51uZyBuZ+G7pyBj4buVIMSRaeG7g25cIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vZGlhbW9uZC1pc2xhbmQtcGlkLTMzNVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJO4buZaSB0aOG6pXQgc2FuZyB0cuG7jW5nXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3RoZS1zdW4tYXZlbnVlLXBpZC0xNVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCw6BuIMSDbiBj4buVIMSRaeG7g25cIixcclxuICAgICAgcGF0aDogXCIvbmhhLWRhdC1iYW4vbmhhLWRhdC1iYW4tdGFpLWhhaS1waG9uZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCw6BuIMSDbiBoaeG7h24gxJHhuqFpXCIsXHJcbiAgICAgIHBhdGg6IFwiL25oYS1kYXQtYmFuL25oYS1kYXQtYmFuLXRhaS1oYS1ub2lcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyBvbkNsaWNrPXtbXX0gLz4sXHJcbiAgICBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgb25DbGljaz17W119IC8+LFxyXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDE0NDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICBkb3RzOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGluaXRpYWxTbGlkZTogMlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJrZXl3b3JkLXNlYXJjaFwiPlxyXG4gICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250U2l6ZTogMjAsIHBhZGRpbmc6IDEwLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiAnIzE5NzZkMicgfX0+VOG7qyBraMOzYSB0w6xtIGtp4bq/bSBIT1Q8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBkYXRhU2VhcmNoLm1hcCgoc2VhcmNoT2JqZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtzZWFyY2hPYmplY3QucGF0aH0gYXM9e3NlYXJjaE9iamVjdC5wYXRofT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMxOTc2ZDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtleXdvcmQtc2VhcmNoX19pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICA+e3NlYXJjaE9iamVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtleXdvcmRTbGlkZVxyXG4iLCJjb25zdCBtYWluVVJMID0gXCJodHRwczovL25oYWRhdG1vaS5uZXRcIjtcclxuY29uc3QgdXBncmFkZVBsYW5VUkwgPSBcImh0dHBzOi8vbmhhZGF0bW9pLm5ldFwiO1xyXG5cclxuY29uc3QgdXBncmFkZUljb25VUkwgPSBcImh0dHBzOi8vcmVhY3QtbWF0ZXJpYWwtZGFzaGJvYXJkLmRldmlhcy5pby9pbWFnZXMvdW5kcmF3X3Jlc3VtZV9mb2xkZXJfMl9hcnNlLnN2Z1wiO1xyXG5jb25zdCBsb2dvVVJMID0gXCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvbmhhZGF0bW9pLnN2Z1wiO1xyXG5cclxuY29uc3QgYXBpQmFzZVVSTCA9IFwiaHR0cHM6Ly9ncmFwaC5uaGFkYXRtb2kubmV0XCI7XHJcbmNvbnN0IGdvb2dsZUxvZ2luID0gYCR7YXBpQmFzZVVSTH0vYXV0aC9nb29nbGVgO1xyXG5jb25zdCBmYWNlYm9va0xvZ2luID0gYCR7YXBpQmFzZVVSTH0vYXV0aC9mYWNlYm9va2A7XHJcbmNvbnN0IHphbG9Mb2dpbiA9IGAke2FwaUJhc2VVUkx9L2F1dGgvemFsb2A7XHJcbmNvbnN0IGFwaUdyYXBoUUxVUkwgPSBgJHthcGlCYXNlVVJMfS9ncmFwaHFsYDtcclxuXHJcbmNvbnN0IHVybEltYWdlQWRTZWxsTGVhc2UgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGF0YS9hZF9zZWxsX2xlYXNlX2ltYWdlL1wiO1xyXG5jb25zdCB1cmxJbWFnZVByb2plY3QgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGF0YS9wcm9qZWN0X2ltYWdlL1wiO1xyXG5jb25zdCB1cmxJbWFnZUJyb2tlciA9IFwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kYXRhL2Jyb2tlcl9pbWFnZS9cIjtcclxuXHJcbmNvbnN0IGltYWdlRGVmYXVsdFByb2plY3QgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9ob21lX2RlZmF1bHQuanBnXCI7XHJcbmNvbnN0IGltYWdlRGVmYXVsdFNsaWRlciA9IFwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L25oYWRhdG1vaS1kZWZhdWx0LnN2Z1wiO1xyXG5jb25zdCBpbWFnZURlZmF1bHRCcm9rZXIgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC91c2VyLnBuZ1wiO1xyXG5jb25zdCBnb29nbGVBbmFseXRpY3NDb2RlID0gJ1VBLTYwNzY3OTk4LTgnO1xyXG5jb25zdCBnb29nbGVTZWFyY2hDb25zb2xlID0gJ2N5TWtUbmRIZEU5NWNGZ3Y3SDVfb3R1RHktWDZON3FkWEV1Tk9QaUowR1EnO1xyXG5jb25zdCBsb2NhbFN0b3JhZ2VDb21wYXJlS2V5ID0gJ25kbV9jb21wYXJlJztcclxuY29uc3QgbG9jYWxTdG9yYWdlVmlld2VkID0gJ25kbV9hc2xfdmlld2VkJztcclxuY29uc3QgbG9jYWxTdG9yYWdlUHJvamVjdFZpZXdlZCA9ICduZG1fcHJvamVjdF92aWV3ZWQnO1xyXG5cclxuY29uc3QgYWRTZWxsTGVhc2VDYXRlZ29yeSA9IFtcclxuICB7XHJcbiAgICBpZDogJzVlMTFhZjA0NDExZTFlYTcyYTFmY2JkZScsXHJcbiAgICBzbHVnOiAnL25oYS1kYXQtYmFuJyxcclxuICAgIG5hbWU6ICdOaMOgIMSR4bqldCBiw6FuJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYWYwNDQxMWUxZWE3MmExZmNiZGYnLFxyXG4gICAgc2x1ZzogJy9uaGEtZGF0LXRodWUnLFxyXG4gICAgbmFtZTogJ05ow6AgxJHhuqV0IHRodcOqJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYWYwNDQxMWUxZWE3MmExZmNiZTAnLFxyXG4gICAgc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnLFxyXG4gICAgbmFtZTogJ05ow6AgxJHhuqV0IGPhuqduIG11YScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWFmMDQ0MTFlMWVhNzJhMWZjYmUxJyxcclxuICAgIHNsdWc6ICcvbmhhLWRhdC1jYW4tdGh1ZScsXHJcbiAgICBuYW1lOiAnTmjDoCDEkeG6pXQgY+G6p24gdGh1w6onLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnXHJcbiAgfVxyXG5dO1xyXG5jb25zdCBhZFNlbGxMZWFzZVR5cGUgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNWY1NDNmNjYzODc5YzY3NTA5MjcsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFjLDVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYSw1ZTdkNjEzMjNmNjYzODc5YzY3NTA5OTcsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFiJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1uaGEnLFxyXG4gICAgbmFtZTogJ0LDoW4gbmjDoCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWMnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLW5oYS1tYXQtcGhvJyxcclxuICAgIG5hbWU6ICdCw6FuIG5ow6AgbeG6t3QgcGjhu5EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1uaGEnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFhJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1uaGEtcmllbmcnLFxyXG4gICAgbmFtZTogJ0LDoW4gbmjDoCByacOqbmcnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1uaGEnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYxMzIzZjY2Mzg3OWM2NzUwOTk3JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1uaGEtcGhvLXNob3Bob3VzZScsXHJcbiAgICBuYW1lOiAnQsOhbiBuaMOgIHBo4buRIHRoxrDGoW5nIG3huqFpIChzaG9waG91c2UpJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tbmhhJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tbmhhLWxpZW4ta2UnLFxyXG4gICAgbmFtZTogJ0LDoW4gbmjDoCBsaeG7gW4ga+G7gScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLW5oYScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YTksNWU3ZDYyMGYzZjY2Mzg3OWM2NzUwOWY4LDVlN2Q2MjJkM2Y2NjM4NzljNjc1MGEwNyw1ZTdkNjI0YjNmNjYzODc5YzY3NTBhMTUsNWU3ZDYyNmIzZjY2Mzg3OWM2NzUwYTIzLDVlN2Q2MjhiM2Y2NjM4NzljNjc1MGEzNCw1ZTdkNjJhNTNmNjYzODc5YzY3NTBhNDIsNWU3ZDYyY2MzZjY2Mzg3OWM2NzUwYTUxLDVlN2Q2MmZjM2Y2NjM4NzljNjc1MGE2YSw1ZTdkNjMxOTNmNjYzODc5YzY3NTBhN2IsNWU3ZDYzMmYzZjY2Mzg3OWM2NzUwYThkLDVlOTkyNGY2NzE2ZWU5NjRiNWZkY2MyMycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIG5hbWU6IFwiQsOhbiBjxINuIGjhu5ksIGNodW5nIGPGsFwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYyMGYzZjY2Mzg3OWM2NzUwOWY4JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tZ2lhLXJlJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIGNodW5nIGPGsCBnacOhIHLhurtcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MjJkM2Y2NjM4NzljNjc1MGEwNycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLW1pbmknLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgY2h1bmcgY8awIG1pbmlcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MjRiM2Y2NjM4NzljNjc1MGExNScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLXRydW5nLWNhcCcsXHJcbiAgICBuYW1lOiBcIkPEg24gaOG7mSBjaHVuZyBjxrAgdHJ1bmcgY+G6pXBcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MjZiM2Y2NjM4NzljNjc1MGEyMycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLWNhby1jYXAnLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgY2h1bmcgY8awIGNhbyBj4bqlcFwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYyOGIzZjY2Mzg3OWM2NzUwYTM0JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tcGVudGhvdXNlJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIHBlbnRob3VzZVwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYyYTUzZjY2Mzg3OWM2NzUwYTQyJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tc2t5dmlsbGEnLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgU2t5dmlsbGFcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MmNjM2Y2NjM4NzljNjc1MGE1MScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLWxvZnQtaG91c2UnLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgTG9mdCAtIGhvdXNlXCIsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjJmYzNmNjYzODc5YzY3NTBhNmEnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1zdHVkaW8nLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgU3R1ZGlvXCIsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjMxOTNmNjYzODc5YzY3NTBhN2InLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jb25kb3RlbCcsXHJcbiAgICBuYW1lOiBcIkPEg24gaOG7mSBDb25kb3RlbFwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYzMmYzZjY2Mzg3OWM2NzUwYThkJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tb2ZmaWNldGVsJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIE9mZmljZXRlbFwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU5OTI0ZjY3MTZlZTk2NGI1ZmRjYzIzJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tZHVwbGV4JyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIER1cGxleFwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYzNjgzZjY2Mzg3OWM2NzUwYWI2LDVlOTEyMjk0OGM3MWQyNWE4NzlkMzBlNiw1ZTdkNjRhZTNmNjYzODc5YzY3NTBhZWYsNWU3ZDY0YzUzZjY2Mzg3OWM2NzUwYWZlLDVlN2Q2NGUyM2Y2NjM4NzljNjc1MGIwYiw1ZTdkNjU4YTNmNjYzODc5YzY3NTBiNzAsNWU3ZDY1MTAzZjY2Mzg3OWM2NzUwYjI3LDVlN2Q2NTVlM2Y2NjM4NzljNjc1MGI1MSw1ZTdkNjViODNmNjYzODc5YzY3NTBiOGEnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIG5hbWU6ICdCw6FuIGJp4buHdCB0aOG7sScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTkxMjI5NDhjNzFkMjVhODc5ZDMwZTYnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1LWxpZW4ta2UnLFxyXG4gICAgbmFtZTogJ0Jp4buHdCB0aOG7sSBsaeG7gW4ga+G7gScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NGFlM2Y2NjM4NzljNjc1MGFlZicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtc2FuLXZ1b24nLFxyXG4gICAgbmFtZTogJ0Jp4buHdCB0aOG7sSBzw6JuIHbGsOG7nW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjRjNTNmNjYzODc5YzY3NTBhZmUnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1LXNvbmctbGFwJyxcclxuICAgIG5hbWU6ICdCaeG7h3QgdGjhu7Egc29uZyBs4bqtcCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NGUyM2Y2NjM4NzljNjc1MGIwYicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtZG9uLWxhcCcsXHJcbiAgICBuYW1lOiAnQmnhu4d0IHRo4buxIMSRxqFuIGzhuq1wJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tYmlldC10aHUnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDY1OGEzZjY2Mzg3OWM2NzUwYjcwJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1iaWV0LXRodS1uZ2hpLWR1b25nJyxcclxuICAgIG5hbWU6ICdCaeG7h3QgdGjhu7Egbmdo4buJIGTGsOG7oW5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tYmlldC10aHUnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDY1MTAzZjY2Mzg3OWM2NzUwYjI3JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1iaWV0LXRodS1waG8nLFxyXG4gICAgbmFtZTogJ0Jp4buHdCB0aOG7sSBwaOG7kScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NTVlM2Y2NjM4NzljNjc1MGI1MScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtdHUtbGFwJyxcclxuICAgIG5hbWU6ICdCaeG7h3QgdGjhu7EgdOG7qSBs4bqtcCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NWI4M2Y2NjM4NzljNjc1MGI4YScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtbWluaScsXHJcbiAgICBuYW1lOiAnQmnhu4d0IHRo4buxIE1pbmknLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWUsNWU2NzA3N2UxZmVhMjczYTk4NWQxZDM2LDVlNjcwNzBmMWZlYTI3M2E5ODVkMWQzNSw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWQsNWU2NzA3OTgxZmVhMjczYTk4NWQxZDM3JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1kYXQnLFxyXG4gICAgbmFtZTogJ0LDoW4gxJHhuqV0JyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCI1ZTY3MDc3ZTFmZWEyNzNhOTg1ZDFkMzZcIixcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1kYXQtbmVuJyxcclxuICAgIG5hbWU6ICfEkOG6pXQgbuG7gW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1kYXQnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU2NzA3MGYxZmVhMjczYTk4NWQxZDM1JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1kYXQtdGhvLWN1JyxcclxuICAgIG5hbWU6ICdCw6FuIMSR4bqldCB0aOG7lSBjxrAnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1kYXQnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFkJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1kYXQtbmVuLWR1LWFuJyxcclxuICAgIG5hbWU6ICdCw6FuIMSR4bqldCBu4buBbiwgZOG7sSDDoW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1kYXQnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU2NzA3OTgxZmVhMjczYTk4NWQxZDM3JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1kYXQtbm9uZy1sYW0tbmdoaWVwJyxcclxuICAgIG5hbWU6ICdNdWEgYsOhbiDEkeG6pXQgbsO0bmcgbMOibSBuZ2hp4buHcCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWRhdCcsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTY3MDdjMjFmZWEyNzNhOTg1ZDFkMzgsNWU2NzA3ZTAxZmVhMjczYTk4NWQxZDM5LDVlNjcwN2Y4MWZlYTI3M2E5ODVkMWQzYSw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjAsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFmJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICBuYW1lOiAnQsOhbiBjw6FjIGxv4bqhaSBi4bqldCDEkeG7mW5nIHPhuqNuIGtow6FjJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlNjcwN2UwMWZlYTI3M2E5ODVkMWQzOScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tbmhhLWhhbmcta2hhY2gtc2FuJyxcclxuICAgIG5hbWU6ICdCw6FuIG5ow6AgaMOgbmcsIGtow6FjaCBz4bqhbicsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlNjcwN2Y4MWZlYTI3M2E5ODVkMWQzYScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tc2FuZy1uaHVvbmctcXVhbicsXHJcbiAgICBuYW1lOiAnQsOhbi9zYW5nIG5oxrDhu6NuZyBzaG9wLCBraW90LCBxdcOhbicsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViMCcsXHJcbiAgICBzbHVnOiAnL211YS1iYW4ta2hvLW5oYS14dW9uZycsXHJcbiAgICBuYW1lOiAnQsOhbiBuaMOgIGtobywgbmjDoCB4xrDhu59uZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhZicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tdHJhbmctdHJhaS1uZ2hpLWR1b25nJyxcclxuICAgIG5hbWU6ICdCw6FuIHRyYW5nIHRy4bqhaSwgbmdo4buJIGTGsOG7oW5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tYmF0LWRvbmctc2FuLWtoYWMnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWMzJyxcclxuICAgIHNsdWc6ICcvY2FuLXRodWUtY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIG5hbWU6ICdD4bqnbiB0aHXDqiBjxINuIGjhu5kgY2h1bmcgY8awJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWM0JyxcclxuICAgIHNsdWc6ICcvY2FuLXRodWUtbmhhLXJpZW5nJyxcclxuICAgIG5hbWU6ICdD4bqnbiB0aHXDqiBuaMOgIHJpw6puZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjNScsXHJcbiAgICBzbHVnOiAnL2Nhbi10aHVlLW5oYS1tYXQtcGhvJyxcclxuICAgIG5hbWU6ICdD4bqnbiB0aHXDqiBuaMOgIG3hurd0IHBo4buRJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWM2JyxcclxuICAgIHNsdWc6ICcvY2FuLXRodWUtbmhhLXRyby1waG9uZy10cm8nLFxyXG4gICAgbmFtZTogJ0PhuqduIHRodcOqIG5ow6AgdHLhu40sIHBow7JuZyB0cuG7jScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjNycsXHJcbiAgICBzbHVnOiAnL2Nhbi10aHVlLXZhbi1waG9uZycsXHJcbiAgICBuYW1lOiAnQ+G6p24gdGh1w6ogdsSDbiBwaMOybmcnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YzgnLFxyXG4gICAgc2x1ZzogJy9jYW4tdGh1ZS1jdWEtaGFuZy1raW90JyxcclxuICAgIG5hbWU6ICdD4bqnbiB0aHXDqiBj4butYSBow6BuZywga2kg4buRdCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjOScsXHJcbiAgICBzbHVnOiAnL2Nhbi10aHVlLWtoby1uaGEteHVvbmctZGF0JyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6oga2hvLCBuaMOgIHjGsOG7n25nLCDEkeG6pXQnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1Y2EnLFxyXG4gICAgc2x1ZzogJy9jYW4tdGh1ZS1jYWMtbG9haS1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICBuYW1lOiAnQ+G6p24gdGh1w6ogbG/huqFpIGLhuqV0IMSR4buZbmcgc+G6o24ga2jDoWMnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YmEnLFxyXG4gICAgc2x1ZzogJy9tdWEtY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIG5hbWU6ICdNdWEgY8SDbiBo4buZIGNodW5nIGPGsCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWJiJyxcclxuICAgIHNsdWc6ICcvbXVhLW5oYS1yaWVuZycsXHJcbiAgICBuYW1lOiAnTXVhIG5ow6AgcmnDqm5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tbXVhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YmMnLFxyXG4gICAgc2x1ZzogJy9tdWEtbmhhLWJpZXQtdGh1LWxpZW4ta2UnLFxyXG4gICAgbmFtZTogJ011YSBuaMOgIGJp4buHdCB0aMawLCBsaeG7gW4ga+G7gScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWJkJyxcclxuICAgIHNsdWc6ICcvbXVhLW5oYS1tYXQtcGhvJyxcclxuICAgIG5hbWU6ICdNdWEgbmjDoCBt4bq3dCBwaOG7kScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWJlJyxcclxuICAgIHNsdWc6ICcvbXVhLWRhdC1uZW4tZHUtYW4nLFxyXG4gICAgbmFtZTogJ011YSDEkeG6pXQgbuG7gW4gZOG7sSDDoW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViZicsXHJcbiAgICBzbHVnOiAnL211YS1kYXQnLFxyXG4gICAgbmFtZTogJ011YSDEkeG6pXQnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjMCcsXHJcbiAgICBzbHVnOiAnL211YS10cmFuZy10cmFpLWtodS1uZ2hpLWR1b25nJyxcclxuICAgIG5hbWU6ICdNdWEgdHJhbmcgdHLhuqFpLCBraHUgbmdo4buJIGTGsOG7oW5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tbXVhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YzEnLFxyXG4gICAgc2x1ZzogJy9tdWEta2hvLW5oYS14dW9uZycsXHJcbiAgICBuYW1lOiAnTXVhIGtobywgbmjDoCB4xrDhu59uZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWMyJyxcclxuICAgIHNsdWc6ICcvbXVhLWNhYy1sb2FpLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIG5hbWU6ICdNdWEgY8OhYyBsb+G6oWkgYuG6pXQgxJHhu5luZyBz4bqjbiBraMOhYycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWIyJyxcclxuICAgIHNsdWc6ICcvY2hvLXRodWUtY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogY8SDbiBo4buZIGNodW5nIGPGsCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWIzJyxcclxuICAgIHNsdWc6ICcvY2hvLXRodWUtbmhhLXJpZW5nJyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogbmjDoCByacOqbmcnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViNCcsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLW5oYS1tYXQtcGhvJyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogbmjDoCBt4bq3dCBwaOG7kScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWI1JyxcclxuICAgIHNsdWc6ICcvY2hvLXRodWUtbmhhLXRyby1waG9uZy10cm8nLFxyXG4gICAgbmFtZTogJ0NobyB0aHXDqiBuaMOgIHRy4buNLCBwaMOybmcgdHLhu40nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViNicsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLXZhbi1waG9uZycsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIHbEg24gcGjDsm5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjcnLFxyXG4gICAgc2x1ZzogJy9jaG8tdGh1ZS1jdWEtaGFuZy1raW90JyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogY+G7rWEgaMOgbmcsIGtpIOG7kXQnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViOCcsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLWtoby1uaGEteHVvbmctZGF0JyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6oga2hvLCBuaMOgIHjGsOG7n25nLCDEkeG6pXQnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViOScsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLWNhYy1sb2FpLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogY8OhYyBsb+G6oWkgYuG6pXQgxJHhu5luZyBz4bqjbiBraMOhYycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtdGh1ZSdcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCB0aXRsZXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cnLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnR2nGsOG7nW5nIG5n4bunIHThu7Egbmhpw6puJywgaW1hZ2U6ICdodHRwczovL211bmRlY29yLnZuL3VwbG9hZHMvc2FucGhhbS9naXVvbmduZ3Vnb3R1bmhpZW4vZ2l1b25nLW5ndS1nby10dS1uaGllbi1kZXAtR04wMzQuanBlZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnR2nGsOG7nW5nIG5n4bunIGPDtG5nIG5naGnhu4dwJywgaW1hZ2U6ICdodHRwczovL211bmRlY29yLnZuL3VwbG9hZHMvc2FucGhhbS9naXVvbmduZ3Vnb3R1bmhpZW4vZ2l1b25nLW5ndS1nby10dS1uaGllbi1kZXAtR04wMzQuanBlZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnR2nGsOG7nW5nIG5n4bunIGhp4buHbiDEkeG6oWknLCBpbWFnZTogJ2h0dHBzOi8vbXVuZGVjb3Iudm4vdXBsb2Fkcy9zYW5waGFtL2dpdW9uZ25ndWdvdHVuaGllbi9naXVvbmctbmd1LWdvLXR1LW5oaWVuLWRlcC1HTjAzNC5qcGVnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdHacaw4budbmcgbmfhu6cgY+G7lSDEkWnhu4NuJywgaW1hZ2U6ICdodHRwczovL211bmRlY29yLnZuL3VwbG9hZHMvc2FucGhhbS9naXVvbmduZ3Vnb3R1bmhpZW4vZ2l1b25nLW5ndS1nby10dS1uaGllbi1kZXAtR04wMzQuanBlZycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQsOgbiDEg24nLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gdOG7sSBuaGnDqm4nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb25vaXRoYXR2aWV0LmNvbS91cGxvYWQvc2FucGhhbS9sYXJnZS9iby1iYW4tYW4tZ28tdHUtbmhpZW4tY2FtLXhlLW1hdC1nby1jby1kaWVuLTFtOC04LWdoZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIMOpcCBjYW8gY+G6pXAnLCBpbWFnZTogJ2h0dHBzOi8vZG9nb25vaXRoYXR2aWV0LmNvbS91cGxvYWQvc2FucGhhbS9sYXJnZS9iby1iYW4tYW4tZ28tdHUtbmhpZW4tY2FtLXhlLW1hdC1nby1jby1kaWVuLTFtOC04LWdoZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIG5ow6AgaMOgbmcnLCBpbWFnZTogJ2h0dHBzOi8vZG9nb25vaXRoYXR2aWV0LmNvbS91cGxvYWQvc2FucGhhbS9sYXJnZS9iby1iYW4tYW4tZ28tdHUtbmhpZW4tY2FtLXhlLW1hdC1nby1jby1kaWVuLTFtOC04LWdoZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDQgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb25vaXRoYXR2aWV0LmNvbS91cGxvYWQvc2FucGhhbS9sYXJnZS9iby1iYW4tYW4tZ28tdHUtbmhpZW4tY2FtLXhlLW1hdC1nby1jby1kaWVuLTFtOC04LWdoZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDYgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb25vaXRoYXR2aWV0LmNvbS91cGxvYWQvc2FucGhhbS9sYXJnZS9iby1iYW4tYW4tZ28tdHUtbmhpZW4tY2FtLXhlLW1hdC1nby1jby1kaWVuLTFtOC04LWdoZS5qcGcnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0LDoG4gcGjDsm5nIGtow6FjaCcsXHJcbiAgICBlbGVtZW50czogW1xyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiB04buxIG5oacOqbicsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0ZHVvbmdkYWkudm4vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvYmFuLWdoZS1waG9uZy1raGFjaC1nby1vYy1jaG8uanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiDDqXAgY2FvIGPhuqVwJywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRkdW9uZ2RhaS52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9iYW4tZ2hlLXBob25nLWtoYWNoLWdvLW9jLWNoby5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIG5ow6AgaMOgbmcnLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGR1b25nZGFpLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2Jhbi1naGUtcGhvbmcta2hhY2gtZ28tb2MtY2hvLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNCBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0ZHVvbmdkYWkudm4vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvYmFuLWdoZS1waG9uZy1raGFjaC1nby1vYy1jaG8uanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA2IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRkdW9uZ2RhaS52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9iYW4tZ2hlLXBob25nLWtoYWNoLWdvLW9jLWNoby5qcGcnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0vhu4cgdGl2aScsXHJcbiAgICBlbGVtZW50czogW1xyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiB04buxIG5oacOqbicsIGltYWdlOiAnaHR0cHM6Ly9nb2NodWFuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8zMjY4NDFmMzdjNzU5ZDJiYzQ2NC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIMOpcCBjYW8gY+G6pXAnLCBpbWFnZTogJ2h0dHBzOi8vZ29jaHVhbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDkvMzI2ODQxZjM3Yzc1OWQyYmM0NjQuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiBuaMOgIGjDoG5nJywgaW1hZ2U6ICdodHRwczovL2dvY2h1YW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA5LzMyNjg0MWYzN2M3NTlkMmJjNDY0LmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNCBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9nb2NodWFuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8zMjY4NDFmMzdjNzU5ZDJiYzQ2NC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDYgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZ29jaHVhbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDkvMzI2ODQxZjM3Yzc1OWQyYmM0NjQuanBnJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdU4bunIHF14bqnbiDDoW8nLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gdOG7sSBuaGnDqm4nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb2xlZ2lhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMy9NYXUtdHUtcXVhbi1hby1kZXAtTEctVFFBMDMwLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gw6lwIGNhbyBj4bqlcCcsIGltYWdlOiAnaHR0cHM6Ly9kb2dvbGVnaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAzL01hdS10dS1xdWFuLWFvLWRlcC1MRy1UUUEwMzAuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiBuaMOgIGjDoG5nJywgaW1hZ2U6ICdodHRwczovL2RvZ29sZWdpYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDMvTWF1LXR1LXF1YW4tYW8tZGVwLUxHLVRRQTAzMC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDQgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb2xlZ2lhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMy9NYXUtdHUtcXVhbi1hby1kZXAtTEctVFFBMDMwLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNiBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9kb2dvbGVnaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAzL01hdS10dS1xdWFuLWFvLWRlcC1MRy1UUUEwMzAuanBnJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdCw6BuIHRyYW5nIMSRaeG7g20nLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gdOG7sSBuaGnDqm4nLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGx1b25nc29uLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jhbi10cmFuZy1kaWVtLTYwLTEuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiDDqXAgY2FvIGPhuqVwJywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRsdW9uZ3Nvbi52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9iYW4tdHJhbmctZGllbS02MC0xLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gbmjDoCBow6BuZycsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0bHVvbmdzb24udm4vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYmFuLXRyYW5nLWRpZW0tNjAtMS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDQgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGx1b25nc29uLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jhbi10cmFuZy1kaWVtLTYwLTEuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA2IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRsdW9uZ3Nvbi52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9iYW4tdHJhbmctZGllbS02MC0xLmpwZycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnVOG7pyBnacOgeScsXHJcbiAgICBlbGVtZW50czogW1xyXG4gICAgICB7IGVsZW1lbnQ6ICdU4bunIGdpw6B5IHThu7Egbmhpw6puJywgaW1hZ2U6ICdodHRwczovL2ZpbGUuaHN0YXRpYy5uZXQvMTAwMDI5NDE0Ni9maWxlLzNfZ3JhbmRlLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnVOG7pyBnacOgeSDDqXAgY2FvIGPhuqVwJywgaW1hZ2U6ICdodHRwczovL2ZpbGUuaHN0YXRpYy5uZXQvMTAwMDI5NDE0Ni9maWxlLzNfZ3JhbmRlLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnVOG7pyBnacOgeSBuaMOgIGjDoG5nJywgaW1hZ2U6ICdodHRwczovL2ZpbGUuaHN0YXRpYy5uZXQvMTAwMDI5NDE0Ni9maWxlLzNfZ3JhbmRlLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNCBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9maWxlLmhzdGF0aWMubmV0LzEwMDAyOTQxNDYvZmlsZS8zX2dyYW5kZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDYgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZmlsZS5oc3RhdGljLm5ldC8xMDAwMjk0MTQ2L2ZpbGUvM19ncmFuZGUuanBnJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBsaXN0TWVudSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ07hu5lpIFRo4bqldCBQaMOybmcgTmfhu6cnLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ07hu5lpIFRo4bqldCBQaMOybmcgS2jDoWNoJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gZ+G7lycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBHacOgeSBEw6lwJyB9LFxyXG4gICAgICB7IHJvb206ICdL4buHIFRpdmknIH0sXHJcbiAgICAgIHsgcm9vbTogJ0vhu4cgxJHhu4MgZ2nDoHknIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcsaw4bujdScgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnTuG7mWkgVGjhuqV0IE5ow6AgQuG6v3AnLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnVOG7pyBi4bq/cCcgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBiw6BuIMSDbicgfSxcclxuICAgICAgeyByb29tOiAnR2jhur8gcGjDsm5nIMSDbicgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ07hu5lpIFRo4bqldCBQaMOybmcgVGjhu50nLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnQsOgbiBUaOG7nScgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBUaOG7nScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBUaOG7nSBUaOG6p24gVMOgaScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBUaOG7nSBUcmVvIFTGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdT4bqtcCBUaOG7nScgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnTuG7mWkgVGjhuqV0IFbEg24gUGjDsm5nJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICfEkOG7kyBH4buXIE3hu7kgTmdo4buHJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdT4bqjbiBQaOG6qW0gS2h1eeG6v24gTeG6oWknLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1PhuqNuIFBo4bqpbSDEkMOjIFhlbScsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcXXhuqduIMOhbycgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnxJDGoW4gaMOgbmcgxJHDoyDEkeG6t3QnLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1PhuqNuIHBo4bqpbSBiw6FuIGNo4bqheScsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcXXhuqduIMOhbycgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnU+G6o24gcGjhuqltIG3hu5tpJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBwcm9kdWN0cyA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vd3d3Lm5oYWRlcGtpZW50cnVjLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi90dS1xdWFuLWFvLWdvLWRlcC0wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICdU4bunIHF14bqnbiDDoW8gxJHhurlwLSBUUUEwOTknLFxyXG4gICAgbW9uZXlPbGQ6IDUwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNDUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9kaWVubWF5Y2hvbG9uLnZuL3B1YmxpYy91c2VydXBsb2FkL2ltYWdlcy9rZSUyMHRpdmklMjBnbyUyMGNhbyUyMGNhcC5wbmcnLFxyXG4gICAgdGl0bGU6ICdL4buHIFRpdmkgcGjDsm5nIGtow6FjaCcsXHJcbiAgICBtb25leU9sZDogNjAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiA1MDAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL2RpZW5tYXljaG9sb24udm4vcHVibGljL3VzZXJ1cGxvYWQvaW1hZ2VzL2tlJTIwdGl2aSUyMGdvJTIwY2FvJTIwY2FwLnBuZycsXHJcbiAgICB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyBn4buXIHThu7Egbmhpw6puIC0gR05DRDAxJyxcclxuICAgIG1vbmV5T2xkOiAzMDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDIwMDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdHRoYWliaW5oLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9naXVvbmctbmd1LWdvLWdvLWRvLTk2NTYuanBnJyxcclxuICAgIHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIHRo4budaSB0cmFuZyAtIEcwMDMnLFxyXG4gICAgbW9uZXlPbGQ6IDQ1MDAwMDAsXHJcbiAgICBtb25leU5ldzogMzUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9waG9nb3ZpcC52bi91cGxvYWRzL25ld3MvMjAxN18xMi9naXVvbmctbmd1LWdvLXR1LW5oaWVuLTQtY29weS5qcGcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgaGnhu4duIMSR4bqhaSAtIEdOMDAzJyxcclxuICAgIG1vbmV5T2xkOiA0MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDM1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGlob3VzZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvTzFDTjAxWml1ajhGMXlTbHNGV1h2bnlfMjczNjAxNjUuanBnJyxcclxuICAgIHRpdGxlOiAnS+G7hyBUaXZpIHBow7JuZyBraMOhY2gnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTAwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0aWhvdXNlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMS9PMUNOMDFaaXVqOEYxeVNsc0ZXWHZueV8yNzM2MDE2NS5qcGcnLFxyXG4gICAgdGl0bGU6ICdCw6BuIMSDbiA2IGdo4bq/IC0gQkEwMDEnLFxyXG4gICAgbW9uZXlPbGQ6IDQwMDAwMDAsXHJcbiAgICBtb25leU5ldzogMzAwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly93d3cubmhhZGVwa2llbnRydWMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA2L3R1LXF1YW4tYW8tZ28tZGVwLTAxLmpwZycsXHJcbiAgICB0aXRsZTogJ0LDoG4gxINuIGfhu5cgbmjhuq1wIGto4bqpdSAtIEJBMDAyJyxcclxuICAgIG1vbmV5T2xkOiAzNTAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDMwMDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vd3d3Lm5oYWRlcGtpZW50cnVjLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi90dS1xdWFuLWFvLWdvLWRlcC0wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICdU4bunIHF14bqnbiDDoW8gxJHhurlwLSBUUUEwOTknLFxyXG4gICAgbW9uZXlPbGQ6IDQwMDAwMDAsXHJcbiAgICBtb25leU5ldzogMzUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9kaWVubWF5Y2hvbG9uLnZuL3B1YmxpYy91c2VydXBsb2FkL2ltYWdlcy9rZSUyMHRpdmklMjBnbyUyMGNhbyUyMGNhcC5wbmcnLFxyXG4gICAgdGl0bGU6ICdL4buHIFRpdmkgcGjDsm5nIGtow6FjaCcsXHJcbiAgICBtb25leU9sZDogNjAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiA1MDAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL25vaXRoYXR0aGFpYmluaC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvZ2l1b25nLW5ndS1nby1nby1kby05NjU2LmpwZycsXHJcbiAgICB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyBj4buVIMSRaeG7g24gLSBHTkNEMDEnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0dGhhaWJpbmguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2dpdW9uZy1uZ3UtZ28tZ28tZG8tOTY1Ni5qcGcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgdGjhu51pIHRyYW5nIC0gRzAwMycsXHJcbiAgICBtb25leU9sZDogNDUwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAzNTAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL25vaXRoYXR0aGFpYmluaC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvZ2l1b25nLW5ndS1nby1nby1kby05NjU2LmpwZycsXHJcbiAgICB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyBj4buVIMSRaeG7g24gLSBHTkNEMDEnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0dGhhaWJpbmguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2dpdW9uZy1uZ3UtZ28tZ28tZG8tOTY1Ni5qcGcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgdGjhu51pIHRyYW5nIC0gRzAwMycsXHJcbiAgICBtb25leU9sZDogNDUwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAzNTAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL3d3dy5uaGFkZXBraWVudHJ1Yy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDYvdHUtcXVhbi1hby1nby1kZXAtMDEuanBnJyxcclxuICAgIHRpdGxlOiAnVOG7pyBxdeG6p24gw6FvIMSR4bq5cC0gVFFBMDk5JyxcclxuICAgIG1vbmV5T2xkOiA0MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDM1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vZGllbm1heWNob2xvbi52bi9wdWJsaWMvdXNlcnVwbG9hZC9pbWFnZXMva2UlMjB0aXZpJTIwZ28lMjBjYW8lMjBjYXAucG5nJyxcclxuICAgIHRpdGxlOiAnS+G7hyBUaXZpIHBow7JuZyBraMOhY2gnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTAwMDAwMCxcclxuICB9LFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgbWFpblVSTCxcclxuICB1cGdyYWRlUGxhblVSTCxcclxuICB1cGdyYWRlSWNvblVSTCxcclxuICBsb2dvVVJMLFxyXG4gIGFwaUJhc2VVUkwsXHJcbiAgYXBpR3JhcGhRTFVSTCxcclxuICBnb29nbGVMb2dpbixcclxuICB6YWxvTG9naW4sXHJcbiAgZmFjZWJvb2tMb2dpbixcclxuICB1cmxJbWFnZUFkU2VsbExlYXNlLFxyXG4gIHVybEltYWdlQnJva2VyLFxyXG4gIHVybEltYWdlUHJvamVjdCxcclxuICBpbWFnZURlZmF1bHRCcm9rZXIsXHJcbiAgaW1hZ2VEZWZhdWx0UHJvamVjdCxcclxuICBpbWFnZURlZmF1bHRTbGlkZXIsXHJcbiAgZ29vZ2xlQW5hbHl0aWNzQ29kZSxcclxuICBnb29nbGVTZWFyY2hDb25zb2xlLFxyXG4gIGxvY2FsU3RvcmFnZUNvbXBhcmVLZXksXHJcbiAgYWRTZWxsTGVhc2VUeXBlLFxyXG4gIGxvY2FsU3RvcmFnZVZpZXdlZCxcclxuICBsb2NhbFN0b3JhZ2VQcm9qZWN0Vmlld2VkLFxyXG4gIGFkU2VsbExlYXNlQ2F0ZWdvcnksXHJcbiAgdGl0bGVzLFxyXG4gIGxpc3RNZW51LFxyXG4gIHByb2R1Y3RzLFxyXG59O1xyXG4iLCJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5jb25zdCBDT1VOVF9WSUVXX0FEX1NFTExfTEVBU0UgPSBncWxgXHJcbiAgbXV0YXRpb24gYWRTZWxsTGVhc2VWaWV3VXBkYXRlICgkaW5wdXQ6IFVwZGF0ZUFkU2VsbExlYXNlVmlld0lucHV0ISkge1xyXG4gICAgYWRTZWxsTGVhc2VWaWV3VXBkYXRlIChpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQUREX0FEX1NFTExfTEVBU0VfV0lTSF9MSVNUID0gZ3FsIGBcclxuICBtdXRhdGlvbiBhZFNlbGxMZWFzZVdpc2hsaXN0ICgkaW5wdXQ6IEFkU2VsbExlYXNlV2lzaGxpc3RJbnB1dCEpIHtcclxuICAgIGFkU2VsbExlYXNlV2lzaGxpc3QgKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBRERfQURfU0VMTF9MRUFTRV9DT01NRU5UID0gZ3FsIGBcclxuICBtdXRhdGlvbiBhZFNlbGxMZWFzZUNvbW1lbnRDcmVhdGUgKCRpbnB1dDogQWRTZWxsTGVhc2VDb21tZW50SW5wdXQhKSB7XHJcbiAgICBhZFNlbGxMZWFzZUNvbW1lbnRDcmVhdGUgKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCB7XHJcbiAgQ09VTlRfVklFV19BRF9TRUxMX0xFQVNFLFxyXG4gIEFERF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVCxcclxuICBBRERfQURfU0VMTF9MRUFTRV9DT01NRU5UXHJcbn1cclxuIiwiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuY29uc3QgR0VUX0FEX1NFTExfTEVBU0VTID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFkU2VsbExlYXNlcyAoJHBhZ2U6IEludCEsICRsaW1pdDogSW50ISwgJGZpbHRlcjogU3RyaW5nISkge1xyXG4gICAgYWRTZWxsTGVhc2VzIChwYWdlOiAkcGFnZSwgZmlsdGVyOiAkZmlsdGVyLCBsaW1pdDogJGxpbWl0KSB7XHJcbiAgICAgIHBhZ2VJbmZvIHtcclxuICAgICAgICBoYXNOZXh0UGFnZVxyXG4gICAgICAgIGhhc1ByZXZpb3VzUGFnZVxyXG4gICAgICB9XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgc2VvX3RpdGxlXHJcbiAgICAgICAgICBjcmVhdGVkX2F0XHJcbiAgICAgICAgICB1cGRhdGVkX2F0XHJcbiAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICBwcm9qZWN0XHJcbiAgICAgICAgICBsZW5ndGhcclxuICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICBmbG9vcl9udW1iZXJcclxuICAgICAgICAgIGxpdmluZ19yb29tX251bWJlclxyXG4gICAgICAgICAgdmlld19jb3VudFxyXG4gICAgICAgICAgbGlrZV9zdGF0dXNcclxuICAgICAgICAgIHByaWNlIHtcclxuICAgICAgICAgICAgdW5pdFxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXZhdGFyIHtcclxuICAgICAgICAgICAgYWx0X3RleHRcclxuICAgICAgICAgICAgc3JjXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhZGRyZXNzIHtcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICB3YXJkXHJcbiAgICAgICAgICAgIGRpc3RyaWN0XHJcbiAgICAgICAgICAgIGNpdHlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnRhY3Qge1xyXG4gICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGFkZHJlc3NcclxuICAgICAgICAgICAgbW9iaWxlXHJcbiAgICAgICAgICAgIHBob25lXHJcbiAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhcmVhIHtcclxuICAgICAgICAgICAgdW5pdFxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhPTUVfR0VUX0FEX1NFTExfTEVBU0VTID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFkU2VsbExlYXNlcyAoJHBhZ2U6IEludCEsICRsaW1pdDogSW50ISwgJGZpbHRlcjogU3RyaW5nISkge1xyXG4gICAgYWRTZWxsTGVhc2VzIChwYWdlOiAkcGFnZSwgZmlsdGVyOiAkZmlsdGVyLCBsaW1pdDogJGxpbWl0KSB7XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgc2VvX3RpdGxlXHJcbiAgICAgICAgICBjcmVhdGVkX2F0XHJcbiAgICAgICAgICB1cGRhdGVkX2F0XHJcbiAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICBwcm9qZWN0XHJcbiAgICAgICAgICBsZW5ndGhcclxuICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICBmbG9vcl9udW1iZXJcclxuICAgICAgICAgIGxpdmluZ19yb29tX251bWJlclxyXG4gICAgICAgICAgdmlld19jb3VudFxyXG4gICAgICAgICAgbGlrZV9zdGF0dXNcclxuICAgICAgICAgIHByaWNlIHtcclxuICAgICAgICAgICAgdW5pdFxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXZhdGFyIHtcclxuICAgICAgICAgICAgYWx0X3RleHRcclxuICAgICAgICAgICAgc3JjXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhZGRyZXNzIHtcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICB3YXJkXHJcbiAgICAgICAgICAgIGRpc3RyaWN0XHJcbiAgICAgICAgICAgIGNpdHlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnRhY3Qge1xyXG4gICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGFkZHJlc3NcclxuICAgICAgICAgICAgbW9iaWxlXHJcbiAgICAgICAgICAgIHBob25lXHJcbiAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhcmVhIHtcclxuICAgICAgICAgICAgdW5pdFxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdFVF9BRF9TRUxMX0xFQVNFU19CWV9TTFVHID0gZ3FsYFxyXG4gIHF1ZXJ5IGFkU2VsbExlYXNlICgkc2x1ZzogU3RyaW5nKSB7XHJcbiAgICBhZFNlbGxMZWFzZSAoc2x1ZzogJHNsdWcpIHtcclxuICAgICAgaWRcclxuICAgICAgdGl0bGVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgc2VvX3RpdGxlXHJcbiAgICAgIHNlb19kZXNjcmlwdGlvblxyXG4gICAgICBzbHVnXHJcbiAgICAgIHByb2plY3RcclxuICAgICAgbGVuZ3RoXHJcbiAgICAgIHdpZHRoXHJcbiAgICAgIGZsb29yX251bWJlclxyXG4gICAgICBsaXZpbmdfcm9vbV9udW1iZXJcclxuICAgICAgdmlld19jb3VudFxyXG4gICAgICB1c2VyXHJcbiAgICAgIGZyb250X3dpZHRoXHJcbiAgICAgIHJvYWRfd2lkdGhcclxuICAgICAgcHJpY2Uge1xyXG4gICAgICAgIHVuaXRcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICAgIGhvbWVfZGlyZWN0aW9uIHtcclxuICAgICAgICB0ZXh0XHJcbiAgICAgIH1cclxuICAgICAgYmFsY29ueV9kaXJlY3Rpb24ge1xyXG4gICAgICAgIHRleHRcclxuICAgICAgfVxyXG4gICAgICBhdmF0YXIge1xyXG4gICAgICAgIGFsdF90ZXh0XHJcbiAgICAgICAgc3JjXHJcbiAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgfVxyXG4gICAgICBhZGRyZXNzIHtcclxuICAgICAgICB0ZXh0XHJcbiAgICAgICAgd2FyZFxyXG4gICAgICAgIGRpc3RyaWN0XHJcbiAgICAgICAgY2l0eVxyXG4gICAgICB9XHJcbiAgICAgIGFyZWEge1xyXG4gICAgICAgIHVuaXRcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICAgIGltYWdlIHtcclxuICAgICAgICBhbHRfdGV4dFxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBzcmNcclxuICAgICAgfVxyXG4gICAgICB0eXBlIHtcclxuICAgICAgICB0eXBlMVxyXG4gICAgICAgIHR5cGUyXHJcbiAgICAgICAgdGV4dFxyXG4gICAgICB9XHJcbiAgICAgIHN0YXR1c1xyXG4gICAgICBqdXJpZGljYWxfdHlwZSB7XHJcbiAgICAgICAgdGV4dFxyXG4gICAgICB9XHJcbiAgICAgIHN0cmVldF90eXBlIHtcclxuICAgICAgICB0ZXh0XHJcbiAgICAgIH1cclxuICAgICAgcHJvamVjdFxyXG4gICAgICBzZW9fdGl0bGVcclxuICAgICAgZmxvb3JfbnVtYmVyXHJcbiAgICAgIGxpdmluZ19yb29tX251bWJlclxyXG4gICAgICBiZWRfcm9vbV9udW1iZXJcclxuICAgICAgdG9pbGV0X3Jvb21fbnVtYmVyXHJcbiAgICAgIGdhcmFfbnVtYmVyXHJcbiAgICAgIG1hdGVyaWFsIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHRleHRcclxuICAgICAgfVxyXG4gICAgICBpc19iYXNlbWVudFxyXG4gICAgICBpc19jYXJfaW50b19ob21lXHJcbiAgICAgIGlzX2Nvcm5lclxyXG4gICAgICBpc19lbGV2YXRvclxyXG4gICAgICBmdXJuaXR1cmVcclxuICAgICAgd2lkdGhcclxuICAgICAgbGVuZ3RoXHJcbiAgICAgIHllYXJfYnVpbHRcclxuICAgICAgdmlkZW9cclxuICAgICAgbGlrZV9zdGF0dXNcclxuICAgICAgbWFwIHtcclxuICAgICAgICBsYXRcclxuICAgICAgICBsbmdcclxuICAgICAgfVxyXG4gICAgICBjcmVhdGVkX2F0XHJcbiAgICAgIHVwZGF0ZWRfYXRcclxuICAgICAgY29udGFjdCB7XHJcbiAgICAgICAgaW1hZ2VcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgYWRkcmVzc1xyXG4gICAgICAgIG1vYmlsZVxyXG4gICAgICAgIHBob25lXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgR0VUX0FEX1NFTExfTEVBU0VTX0JZX0lEID0gZ3FsYFxyXG4gIHF1ZXJ5IGFkU2VsbExlYXNlICgkaWQ6IFN0cmluZykge1xyXG4gICAgYWRTZWxsTGVhc2UgKGlkOiAkaWQpIHtcclxuICAgICAgc2x1Z1xyXG4gICAgICB0aXRsZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBzZW9fdGl0bGVcclxuICAgICAgc2VvX2Rlc2NyaXB0aW9uXHJcbiAgICAgIHNsdWdcclxuICAgICAgcHJvamVjdFxyXG4gICAgICBsZW5ndGhcclxuICAgICAgd2lkdGhcclxuICAgICAgZmxvb3JfbnVtYmVyXHJcbiAgICAgIGxpdmluZ19yb29tX251bWJlclxyXG4gICAgICB2aWV3X2NvdW50XHJcbiAgICAgIHByaWNlIHtcclxuICAgICAgICB1bml0XHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgfVxyXG4gICAgICBhdmF0YXIge1xyXG4gICAgICAgIGFsdF90ZXh0XHJcbiAgICAgICAgc3JjXHJcbiAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgfVxyXG4gICAgICBhZGRyZXNzIHtcclxuICAgICAgICB0ZXh0XHJcbiAgICAgICAgd2FyZFxyXG4gICAgICAgIGRpc3RyaWN0XHJcbiAgICAgICAgY2l0eVxyXG4gICAgICB9XHJcbiAgICAgIGFyZWEge1xyXG4gICAgICAgIHVuaXRcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICAgIGltYWdlIHtcclxuICAgICAgICBhbHRfdGV4dFxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBzcmNcclxuICAgICAgfVxyXG4gICAgICB0eXBlIHtcclxuICAgICAgICB0eXBlMVxyXG4gICAgICAgIHR5cGUyXHJcbiAgICAgICAgdGV4dFxyXG4gICAgICB9XHJcbiAgICAgIHN0YXR1c1xyXG4gICAgICBqdXJpZGljYWxfdHlwZSB7XHJcbiAgICAgICAgdGV4dFxyXG4gICAgICB9XHJcbiAgICAgIHN0cmVldF90eXBlIHtcclxuICAgICAgICB0ZXh0XHJcbiAgICAgIH1cclxuICAgICAgcHJvamVjdFxyXG4gICAgICBzZW9fdGl0bGVcclxuICAgICAgZmxvb3JfbnVtYmVyXHJcbiAgICAgIGxpdmluZ19yb29tX251bWJlclxyXG4gICAgICBiZWRfcm9vbV9udW1iZXJcclxuICAgICAgdG9pbGV0X3Jvb21fbnVtYmVyXHJcbiAgICAgIGdhcmFfbnVtYmVyXHJcbiAgICAgIG1hdGVyaWFsIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHRleHRcclxuICAgICAgfVxyXG4gICAgICBpc19iYXNlbWVudFxyXG4gICAgICBpc19jYXJfaW50b19ob21lXHJcbiAgICAgIGlzX2Nvcm5lclxyXG4gICAgICBpc19lbGV2YXRvclxyXG4gICAgICBmdXJuaXR1cmVcclxuICAgICAgd2lkdGhcclxuICAgICAgbGVuZ3RoXHJcbiAgICAgIHllYXJfYnVpbHRcclxuICAgICAgdmlkZW9cclxuICAgICAgbGlrZV9zdGF0dXNcclxuICAgICAgbWFwIHtcclxuICAgICAgICBsYXRcclxuICAgICAgICBsbmdcclxuICAgICAgfVxyXG4gICAgICBjcmVhdGVkX2F0XHJcbiAgICAgIHVwZGF0ZWRfYXRcclxuICAgICAgY29udGFjdCB7XHJcbiAgICAgICAgaW1hZ2VcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgYWRkcmVzc1xyXG4gICAgICAgIG1vYmlsZVxyXG4gICAgICAgIHBob25lXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdFVF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVCA9IGdxbCBgXHJcbiAgcXVlcnkgYWRTZWxsTGVhc2VXaXNobGlzdHMgKCRmaWx0ZXI6U3RyaW5nISwgJGxpbWl0OkludCEsICRwYWdlOkludCEpIHtcclxuICAgIGFkU2VsbExlYXNlV2lzaGxpc3RzKGZpbHRlcjokZmlsdGVyLCBsaW1pdDokbGltaXQsIHBhZ2U6JHBhZ2UpIHtcclxuICAgICAgcGFnZUluZm8ge1xyXG4gICAgICAgIGhhc05leHRQYWdlXHJcbiAgICAgICAgaGFzUHJldmlvdXNQYWdlXHJcbiAgICAgIH1cclxuICAgICAgZWRnZXMge1xyXG4gICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgYWRfc2VsbF9sZWFzZSB7XHJcbiAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIHNlb190aXRsZVxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0XHJcbiAgICAgICAgICAgIHVwZGF0ZWRfYXRcclxuICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICBwcm9qZWN0XHJcbiAgICAgICAgICAgIGxlbmd0aFxyXG4gICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICBmbG9vcl9udW1iZXJcclxuICAgICAgICAgICAgdmlld19jb3VudFxyXG4gICAgICAgICAgICBsaXZpbmdfcm9vbV9udW1iZXJcclxuICAgICAgICAgICAgbGlrZV9zdGF0dXNcclxuICAgICAgICAgICAgcHJpY2Uge1xyXG4gICAgICAgICAgICAgIHVuaXRcclxuICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF2YXRhciB7XHJcbiAgICAgICAgICAgICAgYWx0X3RleHRcclxuICAgICAgICAgICAgICBzcmNcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZHJlc3Mge1xyXG4gICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICB3YXJkXHJcbiAgICAgICAgICAgICAgZGlzdHJpY3RcclxuICAgICAgICAgICAgICBjaXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGFjdCB7XHJcbiAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgYWRkcmVzc1xyXG4gICAgICAgICAgICAgIG1vYmlsZVxyXG4gICAgICAgICAgICAgIHBob25lXHJcbiAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcmVhIHtcclxuICAgICAgICAgICAgICB1bml0XHJcbiAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuZXhwb3J0IHtcclxuICBHRVRfQURfU0VMTF9MRUFTRVMsXHJcbiAgR0VUX0FEX1NFTExfTEVBU0VTX0JZX1NMVUcsXHJcbiAgSE9NRV9HRVRfQURfU0VMTF9MRUFTRVMsXHJcbiAgR0VUX0FEX1NFTExfTEVBU0VTX0JZX0lELFxyXG4gIEdFVF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVFxyXG59XHJcbiIsImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmNvbnN0IENPVU5UX1ZJRVdfUFJPSkVDVCA9IGdxbGBcclxuICBtdXRhdGlvbiBwcm9qZWN0Vmlld1VwZGF0ZSAoJGlucHV0OiBVcGRhdGVQcm9qZWN0Vmlld0lucHV0ISkge1xyXG4gICAgcHJvamVjdFZpZXdVcGRhdGUgKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgaWRcclxuICAgICAgdmlld19jb3VudFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFERF9QUk9KRUNUX1dJU0hfTElTVCA9IGdxbGBcclxuICBtdXRhdGlvbiBwcm9qZWN0V2lzaExpc3QoJGlucHV0OiAgUHJvamVjdFdpc2hsaXN0SW5wdXQhKSB7XHJcbiAgICBwcm9qZWN0V2lzaGxpc3QgKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCB7XHJcbiAgQ09VTlRfVklFV19QUk9KRUNULFxyXG4gIEFERF9QUk9KRUNUX1dJU0hfTElTVFxyXG59XHJcbiIsImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcblxyXG5jb25zdCBHRVRfUFJPSkVDVF9MSVNUID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFByb2plY3QgKCRwYWdlOiBJbnQhLCAkbGltaXQ6IEludCEsICRmaWx0ZXI6IFN0cmluZyEpIHtcclxuICAgIHByb2plY3RzIChwYWdlOiAkcGFnZSwgZmlsdGVyOiAkZmlsdGVyLCBsaW1pdDogJGxpbWl0KSB7XHJcbiAgICAgIHBhZ2VJbmZvIHtcclxuICAgICAgICBoYXNOZXh0UGFnZVxyXG4gICAgICAgIGhhc1ByZXZpb3VzUGFnZVxyXG4gICAgICB9XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgY3JlYXRlZF9hdFxyXG4gICAgICAgICAgdXBkYXRlZF9hdFxyXG4gICAgICAgICAgbGFuZF9hcmVhXHJcbiAgICAgICAgICB2aWV3X2NvdW50XHJcbiAgICAgICAgICBhZGRyZXNzIHtcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICB3YXJkXHJcbiAgICAgICAgICAgIGRpc3RyaWN0XHJcbiAgICAgICAgICAgIGNpdHlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvdmVyX2ltYWdlXHJcbiAgICAgICAgICBpbnRyb19jb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSE9NRV9HRVRfUFJPSkVDVF9MSVNUID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFByb2plY3QgKCRwYWdlOiBJbnQhLCAkbGltaXQ6IEludCEsICRmaWx0ZXI6IFN0cmluZyEpIHtcclxuICAgIHByb2plY3RzIChwYWdlOiAkcGFnZSwgZmlsdGVyOiAkZmlsdGVyLCBsaW1pdDogJGxpbWl0KSB7XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgY3JlYXRlZF9hdFxyXG4gICAgICAgICAgdXBkYXRlZF9hdFxyXG4gICAgICAgICAgbGFuZF9hcmVhXHJcbiAgICAgICAgICB2aWV3X2NvdW50XHJcbiAgICAgICAgICBhZGRyZXNzIHtcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICB3YXJkXHJcbiAgICAgICAgICAgIGRpc3RyaWN0XHJcbiAgICAgICAgICAgIGNpdHlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvdmVyX2ltYWdlXHJcbiAgICAgICAgICBpbnRyb19jb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgR0VUX1BST0pFQ1RfQllfU0xVRyA9IGdxbGBcclxuICBxdWVyeSBwcm9qZWN0ICgkc2x1ZzogU3RyaW5nKSB7XHJcbiAgICBwcm9qZWN0IChzbHVnOiAkc2x1Zykge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGxhbmRfYXJlYVxyXG4gICAgICBpbnRyb19jb250ZW50XHJcbiAgICAgIHBvc2l0aW9uX2NvbnRlbnRcclxuICAgICAgaW5mcmFzdHJ1Y3R1cmVfY29udGVudFxyXG4gICAgICBzZW9fdGl0bGVcclxuICAgICAgc2VvX2Rlc2NyaXB0aW9uXHJcbiAgICAgIHZpZXdfY291bnRcclxuICAgICAgc2x1Z1xyXG4gICAgICBpbWFnZSB7XHJcbiAgICAgICAgYWx0X3RleHRcclxuICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgc3JjXHJcbiAgICAgIH1cclxuICAgICAgYWRkcmVzcyB7XHJcbiAgICAgICAgdGV4dFxyXG4gICAgICAgIHdhcmRcclxuICAgICAgICBkaXN0cmljdFxyXG4gICAgICAgIGNpdHlcclxuICAgICAgfVxyXG4gICAgICB2aWRlb1xyXG4gICAgICBjb3Zlcl9pbWFnZVxyXG4gICAgICBpbnRyb19jb250ZW50XHJcbiAgICAgIGNyZWF0ZWRfYXRcclxuICAgICAgdXBkYXRlZF9hdFxyXG4gICAgICBnb29nbGVfbWFwX2xhdGl0dWRlXHJcbiAgICAgIGdvb2dsZV9tYXBfbG9uZ2l0dWRlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBHRVRfUFJPSkVDVF9CWV9JRCA9IGdxbGBcclxuICBxdWVyeSBwcm9qZWN0ICgkaWQ6IFN0cmluZykge1xyXG4gICAgcHJvamVjdCAoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGludmVzdG9yXHJcbiAgICAgIHNjYWxlXHJcbiAgICAgIHNsdWdcclxuICAgICAgc2VvX2Rlc2NyaXB0aW9uXHJcbiAgICAgIGFkZHJlc3Mge1xyXG4gICAgICAgIHRleHRcclxuICAgICAgICB3YXJkXHJcbiAgICAgICAgZGlzdHJpY3RcclxuICAgICAgICBjaXR5XHJcbiAgICAgIH1cclxuICAgICAgY292ZXJfaW1hZ2VcclxuICAgICAgaW50cm9fY29udGVudFxyXG4gICAgICBjcmVhdGVkX2F0XHJcbiAgICAgIHVwZGF0ZWRfYXRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCB7XHJcbiAgR0VUX1BST0pFQ1RfQllfSUQsXHJcbiAgR0VUX1BST0pFQ1RfTElTVCxcclxuICBHRVRfUFJPSkVDVF9CWV9TTFVHLFxyXG4gIEhPTUVfR0VUX1BST0pFQ1RfTElTVFxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IGFkZFRyYWNraW5nID0gKGFkU2VsbExlYXNlSWQ6IHN0cmluZywgdHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgYXhpb3MuZ2V0KCdodHRwczovL2dyYXBoLm5oYWRhdG1vaS5uZXQvdXNlci10cmFja2luZycsIHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBhZF9zZWxsX2xlYXNlX2lkOiBhZFNlbGxMZWFzZUlkLFxyXG4gICAgICB0eXBlX3RyYWNraW5nOiB0eXBlXHJcbiAgICB9XHJcbiAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhZGRUcmFja2luZ1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IFN0cmluZ1Byb2Nlc3MgZnJvbSBcIi4vc3RyaW5nUHJvY2Vzc1wiO1xyXG5cclxuY29uc3QgcHJpY2VQcm9jZXNzID0gKHByaWNlVmFsdWU6IHN0cmluZ3xudWxsLCBwcmljZVVuaXQ6IHN0cmluZ3xudWxsKSA9PiB7XHJcbiAgaWYgKCFwcmljZVZhbHVlIHx8IE51bWJlcihwcmljZVZhbHVlKSA9PT0gMCkge1xyXG4gICAgcmV0dXJuICdHacOhIGxpw6puIGjhu4cnXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmb3JtYXRQcmljZVZhbHVlKHByaWNlVmFsdWUsIHByaWNlVW5pdCkgKyAnICcgKyBnZXRQcmljZVVuaXQocHJpY2VWYWx1ZSwgcHJpY2VVbml0KTtcclxuICB9XHJcbn07XHJcblxyXG5sZXQgbWlsbGlvblVuaXQgPSAndHJp4buHdSc7XHJcbmxldCBiaWxsaW9uVW5pdCA9ICd04buJJztcclxuXHJcbmNvbnN0IGZvcm1hdFByaWNlVmFsdWUgPSAocHJpY2VWYWx1ZTogc3RyaW5nfG51bGwsIHByaWNlVW5pdDogc3RyaW5nfG51bGwpID0+IHtcclxuICBpZiAocHJpY2VWYWx1ZSAmJiBwcmljZVVuaXQgJiYgKHByaWNlVW5pdCA9PT0gJ21pbGxpb24nIHx8IHByaWNlVW5pdCA9PT0gJ3RyaeG7h3UnKSkge1xyXG4gICAgbGV0IHByaWNlVmFsdWVOdW1iZXIgPSBOdW1iZXIocHJpY2VWYWx1ZSk7XHJcbiAgICBpZiAocHJpY2VWYWx1ZU51bWJlciA8IDEwMDApIHtcclxuICAgICAgcHJpY2VWYWx1ZU51bWJlciA9IE1hdGgucm91bmQocHJpY2VWYWx1ZU51bWJlciAqIDEwMCkvMTAwO1xyXG4gICAgICByZXR1cm4gU3RyaW5nUHJvY2Vzcy5hZGRDb21tYXMoU3RyaW5nKE51bWJlcihwcmljZVZhbHVlTnVtYmVyKSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJpY2VWYWx1ZU51bWJlciA9IHByaWNlVmFsdWVOdW1iZXIvMTAwMDtcclxuICAgICAgcHJpY2VWYWx1ZU51bWJlciA9IE1hdGgucm91bmQocHJpY2VWYWx1ZU51bWJlciAqIDEwMCkvMTAwO1xyXG4gICAgICByZXR1cm4gU3RyaW5nUHJvY2Vzcy5hZGRDb21tYXMoU3RyaW5nKE51bWJlcihwcmljZVZhbHVlTnVtYmVyKSkpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gU3RyaW5nUHJvY2Vzcy5hZGRDb21tYXMoU3RyaW5nKE51bWJlcihwcmljZVZhbHVlKSkpO1xyXG4gIH1cclxufTtcclxuY29uc3QgZ2V0UHJpY2VVbml0ID0gKHByaWNlVmFsdWU6IHN0cmluZ3xudWxsLCBwcmljZVVuaXQ6IHN0cmluZ3xudWxsKSA9PiB7XHJcbiAgaWYgKHByaWNlVmFsdWUgJiYgcHJpY2VVbml0ICYmIChwcmljZVVuaXQgPT09ICdtaWxsaW9uJyB8fCBwcmljZVVuaXQgPT09ICd0cmnhu4d1JykpIHtcclxuICAgIGxldCBwcmljZVZhbHVlTnVtYmVyID0gTnVtYmVyKHByaWNlVmFsdWUpO1xyXG4gICAgaWYgKHByaWNlVmFsdWVOdW1iZXIgPCAxMDAwKSB7XHJcbiAgICAgIHJldHVybiBtaWxsaW9uVW5pdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBiaWxsaW9uVW5pdDtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuICgocHJpY2VVbml0KT9wcmljZVVuaXQ6J8SR4buTbmcnKVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcmljZVByb2Nlc3NcclxufTtcclxuXHJcbiIsImNvbnN0IGFkZENvbW1hcyA9IChpbnB1dFN0cmluZzogc3RyaW5nKSA9PiB7XHJcbiAgbGV0IHJ4PSAgLyhcXGQrKShcXGR7M30pLztcclxuICByZXR1cm4gU3RyaW5nKGlucHV0U3RyaW5nKS5yZXBsYWNlKC9eXFxkKy8sIGZ1bmN0aW9uKHcpe1xyXG4gICAgd2hpbGUocngudGVzdCh3KSl7XHJcbiAgICAgIHc9IHcucmVwbGFjZShyeCwgJyQxLiQyJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdztcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldE1vbnRocyA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgJzEnIDogJzAxJyxcclxuICAgICcyJyA6ICcwMicsXHJcbiAgICAnMycgOiAnMDMnLFxyXG4gICAgJzQnIDogJzA0JyxcclxuICAgICc1JyA6ICcwNScsXHJcbiAgICAnNicgOiAnMDYnLFxyXG4gICAgJzcnIDogJzA3JyxcclxuICAgICc4JyA6ICcwOCcsXHJcbiAgICAnOScgOiAnMDknLFxyXG4gICAgJzEwJyA6ICcxMCcsXHJcbiAgICAnMTEnIDogJzExJyxcclxuICAgICcxMicgOiAnMTInLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRHZW5kZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgICdmZW1hbGUnIDogJ07hu68nLFxyXG4gICAgJ21hbGUnIDogJ05hbScsXHJcbiAgICAnbm9uZScgOiAnS2jDtG5nIHjDoWMgxJHhu4tuaCdcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXREYXlzID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAnMScgOiAnMDEnLFxyXG4gICAgJzInIDogJzAyJyxcclxuICAgICczJyA6ICcwMycsXHJcbiAgICAnNCcgOiAnMDQnLFxyXG4gICAgJzUnIDogJzA1JyxcclxuICAgICc2JyA6ICcwNicsXHJcbiAgICAnNycgOiAnMDcnLFxyXG4gICAgJzgnIDogJzA4JyxcclxuICAgICc5JyA6ICcwOScsXHJcbiAgICAnMTAnIDogJzEwJyxcclxuICAgICcxMScgOiAnMTEnLFxyXG4gICAgJzEyJyA6ICcxMicsXHJcbiAgICAnMTMnIDogJzEzJyxcclxuICAgICcxNCcgOiAnMTQnLFxyXG4gICAgJzE1JyA6ICcxNScsXHJcbiAgICAnMTYnIDogJzE2JyxcclxuICAgICcxNycgOiAnMTcnLFxyXG4gICAgJzE4JyA6ICcxOCcsXHJcbiAgICAnMTknIDogJzE5JyxcclxuICAgICcyMCcgOiAnMjAnLFxyXG4gICAgJzIxJyA6ICcyMScsXHJcbiAgICAnMjInIDogJzIyJyxcclxuICAgICcyMycgOiAnMjMnLFxyXG4gICAgJzI0JyA6ICcyNCcsXHJcbiAgICAnMjUnIDogJzI1JyxcclxuICAgICcyNicgOiAnMjYnLFxyXG4gICAgJzI3JyA6ICcyNycsXHJcbiAgICAnMjgnIDogJzI4JyxcclxuICAgICcyOScgOiAnMjknLFxyXG4gICAgJzMwJyA6ICczMCcsXHJcbiAgICAnMzEnIDogJzMxJ1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCB0cnVuY2F0ZVN0cmluZyA9IChzdHJpbmc6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGVuZGluZzogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKGxlbmd0aCA9PT0gbnVsbCkge1xyXG4gICAgbGVuZ3RoID0gMTAwO1xyXG4gIH1cclxuICBpZiAoZW5kaW5nID09PSBudWxsKSB7XHJcbiAgICBlbmRpbmcgPSAnLi4uJztcclxuICB9XHJcbiAgaWYgKHN0cmluZy5sZW5ndGggPiBsZW5ndGgpIHtcclxuICAgIHJldHVybiBzdHJpbmcuc3Vic3RyaW5nKDAsIGxlbmd0aCAtIGVuZGluZy5sZW5ndGgpICsgZW5kaW5nO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gc3RyaW5nO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHN0cmlwVGFncyA9IChpbnB1dDogc3RyaW5nLCBhbGxvd2VkOiBzdHJpbmcpID0+IHtcclxuICBhbGxvd2VkID0gKCgoYWxsb3dlZCB8fCAnJykgKyAnJykudG9Mb3dlckNhc2UoKS5tYXRjaCgvPFthLXpdW2EtejAtOV0qPi9nKSB8fCBbXSkuam9pbignJyk7XHJcbiAgY29uc3QgdGFncyA9IC88XFwvPyhbYS16XVthLXowLTldKilcXGJbXj5dKj4vZ2k7XHJcbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UodGFncywgKCQwLCAkMSkgPT4gKGFsbG93ZWQuaW5kZXhPZignPCcgKyAkMS50b0xvd2VyQ2FzZSgpICsgJz4nKSA+IC0xID8gJDAgOiAnJykpO1xyXG59O1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCBzdHJpcFByb3BlcnRpZXMgPSAoaW5wdXQsIGFsbG93ZWQpID0+IHtcclxuICBhbGxvd2VkID0gKCgoYWxsb3dlZCB8fCAnJykgKyAnJykudG9Mb3dlckNhc2UoKS5tYXRjaCgvW2Etel1bYS16MC05XSovZykgfHwgW10pLmpvaW4oJycpO1xyXG4gIGNvbnN0IHByb3BlcnRpZXMgPSAvXFxzKFthLXpdW2EtejAtOV0qKT1cIlteXCJdKlwiL2dpO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICByZXR1cm4gaW5wdXQucmVwbGFjZShwcm9wZXJ0aWVzLCAoJDAsICQxKSA9PiAoYWxsb3dlZC5pbmRleE9mKCQxLnRvTG93ZXJDYXNlKCkpID4gLTEgPyAkMCA6ICcnKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgdHJ1bmNhdGVTdHJpbmcsXHJcbiAgZ2V0RGF5cyxcclxuICBnZXRHZW5kZXIsXHJcbiAgZ2V0TW9udGhzLFxyXG4gIGFkZENvbW1hcyxcclxuICBzdHJpcFRhZ3MsXHJcbiAgc3RyaXBQcm9wZXJ0aWVzXHJcbn07XHJcblxyXG4iLCJpbXBvcnQge1xyXG4gIHVybEltYWdlQWRTZWxsTGVhc2UsXHJcbiAgdXJsSW1hZ2VQcm9qZWN0LFxyXG4gIHVybEltYWdlQnJva2VyLFxyXG4gIGltYWdlRGVmYXVsdFByb2plY3QsXHJcbiAgaW1hZ2VEZWZhdWx0QnJva2VyXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgcHJvY2Vzc0ltYWdlVXJsID0gKGltYWdlVXJsOiBzdHJpbmd8dW5kZWZpbmVkLCB0eXBlOiBzdHJpbmcpID0+IHtcclxuICBsZXQgc3RhdHVzVXJsID0gdmFsaWRVUkwoaW1hZ2VVcmwpO1xyXG4gIGlmIChzdGF0dXNVcmwgJiYgaW1hZ2VVcmwpIHtcclxuICAgIGltYWdlVXJsID0gaW1hZ2VVcmwucmVwbGFjZSgvbmhhZGF0bW9pLnMzLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb20vZywgXCJzdGF0aWMubmhhZGF0bW9pLm5ldFwiKTtcclxuICAgIGltYWdlVXJsID0gaW1hZ2VVcmwucmVwbGFjZSgvbmhhZGF0bW9pLnMzLWFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb20vZywgXCJzdGF0aWMubmhhZGF0bW9pLm5ldFwiKTtcclxuICAgIGltYWdlVXJsID0gaW1hZ2VVcmwucmVwbGFjZSgvbmhhZGF0bW9pLnMzLmFtYXpvbmF3cy5jb20vZywgXCJzdGF0aWMubmhhZGF0bW9pLm5ldFwiKTtcclxuICAgIGltYWdlVXJsID0gaW1hZ2VVcmwucmVwbGFjZSgvaHR0cDpcXC9cXC8vZywgXCJodHRwczovL1wiKTtcclxuICAgIGlmIChpbWFnZVVybCA9PT0gJ2h0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGF0YS9hZF9zZWxsX2xlYXNlX2ltYWdlLycgfHwgaW1hZ2VVcmwgPT09ICdodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RhdGEvcHJvamVjdF9pbWFnZS8nKSB7XHJcbiAgICAgIHJldHVybiBnZXRJbWFnZURlZmF1bHRCeVR5cGUodHlwZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW1hZ2VVcmw7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICghaW1hZ2VVcmwgfHwgaW1hZ2VVcmwgPT09ICcnIHx8IGltYWdlVXJsID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBnZXRJbWFnZURlZmF1bHRCeVR5cGUodHlwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgYmFzZVVybCA9IGdldEJhc2VVcmxCeVR5cGUodHlwZSk7XHJcbiAgICAgIHJldHVybiBiYXNlVXJsICsgaW1hZ2VVcmw7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0QmFzZVVybEJ5VHlwZSA9ICh0eXBlOiBzdHJpbmcpID0+IHtcclxuICBsZXQgYmFzZVVybCA9ICcnO1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnYWRfc2VsbF9sZWFzZSc6XHJcbiAgICAgIGJhc2VVcmwgPSB1cmxJbWFnZUFkU2VsbExlYXNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ3Byb2plY3QnOlxyXG4gICAgICBiYXNlVXJsID0gdXJsSW1hZ2VQcm9qZWN0O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2Jyb2tlcic6XHJcbiAgICAgIGJhc2VVcmwgPSB1cmxJbWFnZUJyb2tlcjtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiBiYXNlVXJsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW1hZ2VEZWZhdWx0QnlUeXBlID0gKHR5cGU6IHN0cmluZykgPT4ge1xyXG4gIGxldCBpbWFnZURlZmF1bHQgPSAnJztcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgJ2FkX3NlbGxfbGVhc2UnOlxyXG4gICAgICBpbWFnZURlZmF1bHQgPSBpbWFnZURlZmF1bHRQcm9qZWN0O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ3Byb2plY3QnOlxyXG4gICAgICBpbWFnZURlZmF1bHQgPSBpbWFnZURlZmF1bHRQcm9qZWN0O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2Jyb2tlcic6XHJcbiAgICAgIGltYWdlRGVmYXVsdCA9IGltYWdlRGVmYXVsdEJyb2tlcjtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiBpbWFnZURlZmF1bHQ7XHJcbn07XHJcblxyXG5jb25zdCB2YWxpZFVSTCA9IChzdHI6IHN0cmluZ3x1bmRlZmluZWQpID0+IHtcclxuICBpZiAoIXN0ciB8fCBzdHIgPT09ICcnIHx8IHN0ciA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoc3RyLmluZGV4T2YoJ2h0dHAnKSAhPT0gLTEpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb2Nlc3NJbWFnZVVybFxyXG59O1xyXG5cclxuIiwiY29uc3QgaXNCbGFuayA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAwIHx8IHZhbHVlID09PSAnJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgKHZhbHVlLmxlbmd0aCA8PSAwIHx8IHZhbHVlLnRyaW0oKS5sZW5ndGggPD0gMCkpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICByZXR1cm4gaXNFbXB0eSh2YWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBpc0VtcHR5ID0gKG9iajogYW55KSA9PiB7XHJcbiAgZm9yKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmNvbnN0IGlzTnVtYmVyID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICBpZiAoaXNCbGFuayh2YWx1ZSkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpO1xyXG59O1xyXG5cclxuY29uc3QgaXNFbWFpbCA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKGlzQmxhbmsodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGxldCBlbWFpbCA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gIHJldHVybiBlbWFpbC50ZXN0KHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGlzU2x1ZyA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKGlzQmxhbmsodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGxldCBzbHVnID0gL15bQS1aYS16MC05XSsoPzotW0EtWmEtejAtOV0rKSokL1xyXG4gIHJldHVybiBzbHVnLnRlc3QodmFsdWUpO1xyXG59O1xyXG5cclxuY29uc3QgaXNVcmwgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmIChpc0JsYW5rKHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBsZXQgcmVnZXhwID0gL14oPzooPzpodHRwcz98ZnRwKTpcXC9cXC8pPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSg/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykqKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9cXFMqKT8kLztcclxuICByZXR1cm4gcmVnZXhwLnRlc3QodmFsdWUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGlzQmxhbmssXHJcbiAgaXNFbWFpbCxcclxuICBpc0VtcHR5LFxyXG4gIGlzTnVtYmVyLFxyXG4gIGlzVXJsLFxyXG4gIGlzU2x1Z1xyXG59O1xyXG4iLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy9JbXBvcnQgQ29tcG9uZW50c1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCBTZWFyY2hIb21lcGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmRleC9TZWFyY2hIb21lcGFnZVwiO1xyXG5pbXBvcnQgQ29udGVudE1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Db250ZW5NZW51XCI7XHJcbmltcG9ydCBUaXRsZUJsb2NrIGZyb20gXCIuLi9jb21wb25lbnRzL0luZGV4L1RpdGxlQmxvY2tcIjtcclxuaW1wb3J0IEdyaWRBZFNlbGxMZWFzZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvR3JpZExpc3QvR3JpZEFkU2VsbExlYXNlc1wiO1xyXG5pbXBvcnQgR3JpZFByb2plY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvR3JpZExpc3QvR3JpZFByb2plY3RcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IFNlYXJjaEtleXdvcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoL0tleXdvcmRTbGlkZVwiO1xyXG5pbXBvcnQgSG90TG9jYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5kZXgvSG90TG9jYXRpb25cIjtcclxuaW1wb3J0IExvYWRpbmdQYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL0Rpc3BsYXkvTG9hZGluZ1BhZ2VcIjtcclxuaW1wb3J0IE5ld3NJbmRleCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmRleC9OZXdzSW5kZXhcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBHcmlkLCBUeXBvZ3JhcGh5LCBJY29uLCBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQWRTZWxsTGVhc2VJbmRleCBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L0FkU2VsbExlYXNlSW5kZXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VWaWV3ZWQsIG1haW5VUkwsIGxvY2FsU3RvcmFnZVByb2plY3RWaWV3ZWQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGluZGV4UGFnZVN0eWxlIH0gZnJvbSAnLi4vc3R5bGUvSW5kZXhQYWdlJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IFdoYXQgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL1doYXQnO1xyXG5pbXBvcnQgQnV0dG9uVmlld3MgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0J1dHRvblZpZXdzJztcclxuaW1wb3J0IE5ld0hvdCBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvTmV3SG90JztcclxuaW1wb3J0IExpc3RQcm9kdWN0IGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9MaXN0UHJvZHVjdCc7XHJcbmltcG9ydCBQYXJ0bmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUGFydG5lclwiO1xyXG5pbXBvcnQgUG9wb3ZlckZpbHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3BvdmVyL0luZGV4XCI7XHJcbmltcG9ydCBMaXN0TWVudSBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvTGlzdE1lbnUnO1xyXG5pbXBvcnQgR2FtZXBhZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dhbWVwYWQnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdHMnO1xyXG4vL0ltcG9ydCBTQ1NTXHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3NcIjtcclxuLy9JbXBvcnQgQ29uc3RcclxuaW1wb3J0IHsgYXBvbGxvQ2xpZW50IH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IEdFVF9BRF9TRUxMX0xFQVNFUywgSE9NRV9HRVRfQURfU0VMTF9MRUFTRVMsIEdFVF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVCB9IGZyb20gXCIuLi9ncmFwaHFsL2FkX3NlbGxfbGVhc2VzL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgR0VUX1BST0pFQ1RfTElTVCwgSE9NRV9HRVRfUFJPSkVDVF9MSVNUIH0gZnJvbSBcIi4uL2dyYXBocWwvcHJvamVjdC9xdWVyaWVzXCI7XHJcbi8vSW1wb3J0IE1vZHVsZVxyXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gXCIuLi9tb2R1bGVzL3ZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBBZFNlbGxMZWFzZXNMaXN0UHJvcHMsIFByb2plY3RMaXN0UHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VcIlxyXG5cclxuLy8gaW50ZXJmYWNlIERhdGFOZXdzUHJvcHMge1xyXG4vLyAgIHNsdWc6IHN0cmluZyxcclxuLy8gICBsaW5rOiBzdHJpbmcsXHJcbi8vICAgdGl0bGU6IHtcclxuLy8gICAgIHJlbmRlcmVkOiBzdHJpbmdcclxuLy8gICB9LFxyXG4vLyAgIGV4Y2VycHQ6IHtcclxuLy8gICAgIHJlbmRlcmVkOiBzdHJpbmdcclxuLy8gICB9LFxyXG4vLyAgIGZlYXR1cmVkX2ltYWdlX3VybDogc3RyaW5nLFxyXG4vLyAgIGRhdGU6IHN0cmluZ1xyXG4vLyB9XHJcblxyXG5jb25zdCBJbmRleFBhZ2UgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbZGF0YUFkU2VsbExlYXNlc1ZpZXdlZCwgc2V0RGF0YUFkU2VsbExlYXNlVmlld2VkXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGF0YVByb2plY3RWaWV3ZWQsIHNldERhdGFQcm9qZWN0Vmlld2VkXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGF0YUFkU2VsbExlYXNlV2lzaGxpc3QsIHNldERhdGFBZFNlbGxMZWFzZVdpc2hsaXN0XSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGF0YVByb2plY3QsIHNldERhdGFQcm9qZWN0XSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3RhdHVzTG9hZGluZ0FkU2VsbExlYXNlLCBzZXRTdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2VdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2RhdGFOZXdzLCBzZXREYXRhTmV3c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3N0YXR1c0xvYWRpbmdQcm9qZWN0LCBzZXRTdGF0dXNMb2FkaW5nUHJvamVjdF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc3RhdHVzTG9hZGluZ05ld3MsIHNldFN0YXR1c0xvYWRpbmdOZXdzXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGxldCBuZXdzVXJsQXBpID0gJ2h0dHBzOi8vbmhhZGF0bW9pLm5ldC90aW4tdHVjL3dwLWpzb24vd3AvdjIvcG9zdHM/cGVyX3BhZ2U9OCc7XHJcbiAgY29uc3QgY2xhc3NlcyA9IGluZGV4UGFnZVN0eWxlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHZpZXdlZEl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VWaWV3ZWQpO1xyXG4gICAgaWYgKHZpZXdlZEl0ZW0gJiYgIVZhbGlkYXRvci5pc0JsYW5rKHZpZXdlZEl0ZW0pKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHZpZXdlZEl0ZW1PYmplY3QgPSBKU09OLnBhcnNlKHZpZXdlZEl0ZW0pO1xyXG4gICAgICAgIHNldERhdGFBZFNlbGxMZWFzZVZpZXdlZCh2aWV3ZWRJdGVtT2JqZWN0KTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgdmlld2VkUHJvamVjdEl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VQcm9qZWN0Vmlld2VkKTtcclxuICAgIGlmICh2aWV3ZWRQcm9qZWN0SXRlbSAmJiAhVmFsaWRhdG9yLmlzQmxhbmsodmlld2VkUHJvamVjdEl0ZW0pKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHZpZXdlZEl0ZW1PYmplY3QgPSBKU09OLnBhcnNlKHZpZXdlZFByb2plY3RJdGVtKTtcclxuICAgICAgICBzZXREYXRhUHJvamVjdFZpZXdlZCh2aWV3ZWRJdGVtT2JqZWN0KTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgICAgcXVlcnk6IEdFVF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVCwgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgXCJwYWdlXCI6IDEsXHJcbiAgICAgICAgXCJsaW1pdFwiOiAxMixcclxuICAgICAgICBcImZpbHRlclwiOiBcIid7fSdcIlxyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgc2V0U3RhdHVzTG9hZGluZ0FkU2VsbExlYXNlKGZhbHNlKTtcclxuICAgICAgaWYgKCFWYWxpZGF0b3IuaXNCbGFuayhyZXNwb25zZS5kYXRhKSAmJiAhVmFsaWRhdG9yLmlzQmxhbmsocmVzcG9uc2UuZGF0YS5hZFNlbGxMZWFzZVdpc2hsaXN0cy5lZGdlcykpIHtcclxuICAgICAgICBsZXQgZGF0YVdpc2hsaXN0VG9BZGQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB3aXNobGlzdEluZGV4IGluIHJlc3BvbnNlLmRhdGEuYWRTZWxsTGVhc2VXaXNobGlzdHMuZWRnZXMpIHtcclxuICAgICAgICAgIGxldCBkYXRhVG9BZGQgPSB7XHJcbiAgICAgICAgICAgIG5vZGU6IHJlc3BvbnNlLmRhdGEuYWRTZWxsTGVhc2VXaXNobGlzdHMuZWRnZXNbd2lzaGxpc3RJbmRleF0ubm9kZS5hZF9zZWxsX2xlYXNlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgZGF0YVdpc2hsaXN0VG9BZGQucHVzaChkYXRhVG9BZGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXREYXRhQWRTZWxsTGVhc2VXaXNobGlzdChkYXRhV2lzaGxpc3RUb0FkZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICAgIHF1ZXJ5OiBIT01FX0dFVF9QUk9KRUNUX0xJU1QsIHZhcmlhYmxlczoge1xyXG4gICAgICAgIFwicGFnZVwiOiAxLFxyXG4gICAgICAgIFwibGltaXRcIjogMTIsXHJcbiAgICAgICAgXCJmaWx0ZXJcIjogXCIne30nXCJcclxuICAgICAgfVxyXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHNldFN0YXR1c0xvYWRpbmdQcm9qZWN0KGZhbHNlKTtcclxuICAgICAgaWYgKCFWYWxpZGF0b3IuaXNCbGFuayhyZXNwb25zZS5kYXRhKSAmJiAhVmFsaWRhdG9yLmlzQmxhbmsocmVzcG9uc2UuZGF0YS5wcm9qZWN0cy5lZGdlcykpIHtcclxuICAgICAgICBzZXREYXRhUHJvamVjdChyZXNwb25zZS5kYXRhLnByb2plY3RzLmVkZ2VzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL0dldCBEYXRhIE5ld3NcclxuICAgIGZldGNoKG5ld3NVcmxBcGkpXHJcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIHNldERhdGFOZXdzKGRhdGEpO1xyXG4gICAgICAgIHNldFN0YXR1c0xvYWRpbmdOZXdzKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbc3RhdHVzTW9kYWwsIHNldE1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB1cGRhdGVNb2RhbCA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgIHNldE1vZGFsKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IExpc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxBZFNlbGxMZWFzZUluZGV4IGZpbHRlcj17XCJ7J3R5cGUyJzonNWU3ZDVmNTQzZjY2Mzg3OWM2NzUwOTI3LDVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYyw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWEsNWU3ZDYxMzIzZjY2Mzg3OWM2NzUwOTk3LDVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYid9XCJ9IHRpdGxlPXsnQsOhbiBuaMOgJ30gdHlwZT17J2gyJ30gaHJlZj17Jy9bc2x1Z10nfSBwYXRoPXsnL211YS1iYW4tbmhhJ30gLz5cclxuICAgICAgICB7LyogPEFkU2VsbExlYXNlSW5kZXggZmlsdGVyPXtcInsndHlwZTInOic1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWUsNWU2NzA3N2UxZmVhMjczYTk4NWQxZDM2LDVlNjcwNzBmMWZlYTI3M2E5ODVkMWQzNSw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWQsNWU2NzA3OTgxZmVhMjczYTk4NWQxZDM3J31cIn0gdGl0bGU9eydCw6FuIMSR4bqldCd9IHR5cGU9eydoMid9IGhyZWY9eycvW3NsdWddJ30gcGF0aD17Jy9tdWEtYmFuLWRhdCd9Lz4gKi99XHJcbiAgICAgICAgey8qIDxBZFNlbGxMZWFzZUluZGV4IGZpbHRlcj17XCJ7J3R5cGUyJzonNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWE5LDVlN2Q2MjBmM2Y2NjM4NzljNjc1MDlmOCw1ZTdkNjIyZDNmNjYzODc5YzY3NTBhMDcsNWU3ZDYyNGIzZjY2Mzg3OWM2NzUwYTE1LDVlN2Q2MjZiM2Y2NjM4NzljNjc1MGEyMyw1ZTdkNjI4YjNmNjYzODc5YzY3NTBhMzQsNWU3ZDYyYTUzZjY2Mzg3OWM2NzUwYTQyLDVlN2Q2MmNjM2Y2NjM4NzljNjc1MGE1MSw1ZTdkNjJmYzNmNjYzODc5YzY3NTBhNmEsNWU3ZDYzMTkzZjY2Mzg3OWM2NzUwYTdiLDVlN2Q2MzJmM2Y2NjM4NzljNjc1MGE4ZCw1ZTk5MjRmNjcxNmVlOTY0YjVmZGNjMjMnfVwifSB0aXRsZT17J0LDoW4gY8SDbiBo4buZIGNodW5nIGPGsCd9IHR5cGU9eydoMid9IGhyZWY9eycvW3NsdWddJ30gcGF0aD17Jy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdSd9Lz4gKi99XHJcbiAgICAgICAgey8qIDxBZFNlbGxMZWFzZUluZGV4IGZpbHRlcj17XCJ7J3R5cGUyJzonNWU3ZDYzNjgzZjY2Mzg3OWM2NzUwYWI2LDVlOTEyMjk0OGM3MWQyNWE4NzlkMzBlNiw1ZTdkNjRhZTNmNjYzODc5YzY3NTBhZWYsNWU3ZDY0YzUzZjY2Mzg3OWM2NzUwYWZlLDVlN2Q2NGUyM2Y2NjM4NzljNjc1MGIwYiw1ZTdkNjU4YTNmNjYzODc5YzY3NTBiNzAsNWU3ZDY1MTAzZjY2Mzg3OWM2NzUwYjI3LDVlN2Q2NTVlM2Y2NjM4NzljNjc1MGI1MSw1ZTdkNjViODNmNjYzODc5YzY3NTBiOGEnfVwifSB0aXRsZT17J0LDoW4gYmnhu4d0IHRo4buxJ30gdHlwZT17J2gyJ30gaHJlZj17Jy9bc2x1Z10nfSBwYXRoPXsnL211YS1iYW4tYmlldC10aHUnfS8+ICovfVxyXG4gICAgICAgIHsvKiA8QWRTZWxsTGVhc2VJbmRleCBmaWx0ZXI9e1wieyd0eXBlMic6JzVlNjcwN2MyMWZlYTI3M2E5ODVkMWQzOCw1ZTY3MDdlMDFmZWEyNzNhOTg1ZDFkMzksNWU2NzA3ZjgxZmVhMjczYTk4NWQxZDNhLDVlMTFiMDQ2NTIxODEzYTc4Y2RlODViMCw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWYnfVwifSB0aXRsZT17J0LDoW4gY8OhYyBsb+G6oWkgYuG6pXQgxJHhu5luZyBz4bqjbiBraMOhYyd9IHR5cGU9eydoMid9IGhyZWY9eycvW3NsdWddJ30gcGF0aD17Jy9tdWEtYmFuLWJhdC1kb25nLXNhbi1raGFjJ30vPiAqL31cclxuICAgICAgICB7LyogPEFkU2VsbExlYXNlSW5kZXggZmlsdGVyPXtcInsndHlwZTEnOic1ZTExYWYwNDQxMWUxZWE3MmExZmNiZGYnfVwifSB0aXRsZT17J05ow6AgxJHhuqV0IGNobyB0aHXDqid9IHR5cGU9eydoMid9IGhyZWY9eycvW3NsdWddJ30gcGF0aD17Jy9uaGEtZGF0LXRodWUnfS8+ICovfVxyXG4gICAgICAgIHsvKiA8QWRTZWxsTGVhc2VJbmRleCBmaWx0ZXI9e1wieyd0eXBlMic6JzVlMTFhZjA0NDExZTFlYTcyYTFmY2JlMCd9XCJ9IHRpdGxlPXsnTmjDoCDEkeG6pXQgY+G6p24gbXVhJ30gdHlwZT17J2gyJ30gaHJlZj17Jy9bc2x1Z10nfSBwYXRoPXsnL25oYS1kYXQtY2FuLW11YSd9Lz4gKi99XHJcbiAgICAgICAgey8qIDxBZFNlbGxMZWFzZUluZGV4IGZpbHRlcj17XCJ7J3R5cGUyJzonNWUxMWFmMDQ0MTFlMWVhNzJhMWZjYmUxJ31cIn0gdGl0bGU9eydOaMOgIMSR4bqldCBj4bqnbiB0aHXDqid9IHR5cGU9eydoMid9IGhyZWY9eycvW3NsdWddJ30gcGF0aD17Jy9uaGEtZGF0LWNhbi10aHVlJ30vPiAqL31cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCB0cmFuc2FjdGlvbkhvdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFRpdGxlQmxvY2tcclxuICAgICAgICAgIHRpdGxlPVwiU+G6o24gcGjhuqltIHRoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQgaGnhu4duIMSR4bqhaVwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlThu5VuZyBo4bujcCBuaOG7r25nIG3huqt1IHRoaeG6v3Qga+G6vyBoaeG7h24gxJHhuqFpXCJcclxuICAgICAgICAgIHR5cGU9e1wiaDJcIn0gcGF0aD17XCIvZHUtYW4tYmF0LWRvbmctc2FuXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SG90TG9jYXRpb24gLz5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBMb2FkaW5nUGFnZSA9ICgpID0+IHtcclxuICAgIGlmIChzdGF0dXNMb2FkaW5nTmV3cykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMb2FkaW5nUGFnZSBjbGFzc05hbWU9XCJsb2FkaW5nX3BhZ2VcIiBncmlkPXt7IHhsOiAzLCBsZzogMywgbWQ6IDQsIHNtOiA2LCB4czogMTIgfX0gbnVtYmVyTGltaXQ9ezh9IC8+XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlckljb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCBib3R0b206IDMwLCByaWdodDogMzAgfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxhIHRpdGxlPVwiVHLDsiBjaHV54buHbiBGYWNlYm9va1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCIgaHJlZj1cImh0dHA6Ly9tLm1lLzkyNTc5MDIyNDE2NDg1Mj9yZWY9em96b3ZuXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly96b3pvLnZuL3B1YmxpYy90aGVtZS9jaXJjbGUvaW1hZ2VzL3dpZGdldHMvZmJtZXNzZW5nZXIuc3ZnXCIgYWx0PVwiYnRuLWZhY2Vib29rXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGEgdGl0bGU9XCJDaGF0IHbhu5tpIGNow7puZyB0w7RpIHF1YSBaYWxvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIiBocmVmPVwiaHR0cHM6Ly96YWxvLm1lLzAzNzc1MzU3MTdcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3pvem8udm4vcHVibGljL3RoZW1lL2NpcmNsZS9pbWFnZXMvd2lkZ2V0cy96YWxvLnN2Z1wiIGFsdD1cImJ0bi16YWxvXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGEgdGl0bGU9XCJH4buNaSBuZ2F5XCIgaHJlZj1cInRlbDowOTM2MDYyMTY2XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly96b3pvLnZuL3B1YmxpYy90aGVtZS9jaXJjbGUvaW1hZ2VzL3dpZGdldHMvY2FsbC5zdmdcIiBhbHQ9XCJidG4tY2FsbG5vd1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGxldCBwYWdlVGl0bGUgPSAnTuG7mWkgdGjhuqV0IERvZG8nO1xyXG4gIGxldCBwYWdlRGVzY3JpcHRpb24gPSAnTuG7mWkgdGjhuqV0IERvZG8gxJHDs24gxJHhuqd1IHh1IGjGsOG7m25nJztcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dFxyXG4gICAgICB0aXRsZT17cGFnZVRpdGxlfVxyXG4gICAgICBkZXNjcmlwdGlvbj17cGFnZURlc2NyaXB0aW9ufVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIHN0YXR1c01vZGFsPXtzdGF0dXNNb2RhbH1cclxuICAgICAgdXBkYXRlTW9kYWw9e3VwZGF0ZU1vZGFsfVxyXG4gICAgICBjYW5vbmljYWw9e21haW5VUkx9XHJcbiAgICAgIHBhdGg9eycnfVxyXG4gICAgPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0ganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PjwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgPExpc3RNZW51IC8+XHJcbiAgICAgICAgICA8TmV3SG90IC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9PlxyXG4gICAgICAgICAgPFNlYXJjaEhvbWVwYWdlIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4IDAnIH19PlxyXG4gICAgICAgICAgICA8V2hhdCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QnV0dG9uVmlld3MgLz5cclxuICAgICAgICAgIHsvKiA8UHJvZHVjdCAvPiAqL31cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keV9jb250YWluZXJcIj5cclxuICAgICAgICB7LyogPExpc3QgLz4gKi99XHJcbiAgICAgICAgey8qIFPhuqNuIHBo4bqpbSDEkcOjIHhlbSAqL31cclxuICAgICAgICB7LyogU+G6o24gcGjhuqltIGLhuqFuIHRow61jaCAqL31cclxuICAgICAgICB7LyogU+G6o24gcGjhuqltIEhPVCAqL31cclxuICAgICAgICB7Lyoge3Byb2plY3RXYWh0Y2hlZCgpfSAqL31cclxuICAgICAgICB7dHJhbnNhY3Rpb25Ib3QoKX1cclxuICAgICAgICB7LyogVGluIHThu6ljICB04buVbmcgaOG7o3AgKi99XHJcbiAgICAgICAgey8qIHtMb2FkaW5nUGFnZSgpfSAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxQYXJ0bmVyIC8+XHJcbiAgICAgIDxTZWFyY2hLZXl3b3JkIC8+XHJcbiAgICAgIDxMaXN0UHJvZHVjdCAvPlxyXG4gICAgICB7cmVuZGVySWNvbigpfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFkLWRkNjM1YzNmMzllNDAyNzc1NzM1MTM4NDYzMTU5YjA1LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9sb2dpbi04YjQxYzM2ZTJmNGEyMDQ0NzQ2NzU0NzI3ZTRlMjVmNC5wbmdcIjsiLCJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSwgbWFrZVN0eWxlcywgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IGluZGV4UGFnZVN0eWxlID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgd2lkdGg6ICczMDBweCcsXHJcbiAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwIDMwcHgnLFxyXG4gICAgICAgIC8vIEBpbmNsdWRlIGJyZWFrcG9pbnQobWREb3duKSB7XHJcbiAgICAgICAgLy8gICBwYWRkaW5nOiAnMCAyMHB4JyxcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICckZm9udEZhbWlseScsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICc5MDAnLFxyXG4gICAgICAgICAgICBtYXJnaW46ICctMTVweCAwIDMwcHggMCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2FhYScsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDE1cHghaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICNlNmU2ZTYnLFxyXG4gICAgICAgICAgICAvLyAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogJyNmMGYwZjAnLFxyXG4gICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGluZGV4UGFnZVN0eWxlLFxyXG59IiwiaW1wb3J0IGF4aW9zLCB7TWV0aG9kfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHthcGlCYXNlVVJMLCBhcGlHcmFwaFFMVVJMfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBcImNyb3NzLWZldGNoL3BvbHlmaWxsXCI7XHJcbmltcG9ydCBBcG9sbG9DbGllbnQsIHtJbk1lbW9yeUNhY2hlfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XHJcblxyXG5jb25zdCBjbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGFwaUJhc2VVUkwsXHJcbiAgdGltZW91dDogMzAwMDAsXHJcbn0pO1xyXG5cclxuY29uc3QgYXBpID0gKG1ldGhvZDogTWV0aG9kLCB1cmw6IHN0cmluZywgZGF0YT86IGFueSkgPT4gY2xpZW50XHJcbiAgLnJlcXVlc3Qoe1xyXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBtZXRob2QsXHJcbiAgICB1cmwsXHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSlcclxuICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuZGF0YSk7XHJcblxyXG5jb25zdCBhcG9sbG9DbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICB1cmk6IGFwaUdyYXBoUUxVUkwsXHJcbiAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xyXG4gICAgYWRkVHlwZW5hbWU6IGZhbHNlXHJcbiAgfSl9KTtcclxuXHJcbmV4cG9ydCB7YXBpLCBhcG9sbG9DbGllbnR9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZUJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Hcm93XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlQnJlYWtwb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvd2l0aFdpZHRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Ryb3BEb3duXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Ryb3BVcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FsZW5kYXJUb2RheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0RyYWZ0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWNvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FbWFpbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlQm9yZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9HYW1lcGFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbmZvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlQmVmb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZU5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lSXBob25lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlbmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJSYXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9WaWV3TGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcm9zcy1mZXRjaC9wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtb3dsLWNhcm91c2VsMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eC1pMThuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9