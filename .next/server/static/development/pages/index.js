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
/* harmony import */ var _TitleBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleBlock */ "./components/Index/TitleBlock.tsx");
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Index\\AdSellLeaseIndex.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AdSellLeaseIndex = props => {
  const [dataAdSellLeases, setDataAdSellLease] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const [statusLoadingAdSellLease, setStatusLoadingAdSellLease] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, (statusLoadingAdSellLease || dataAdSellLeases && dataAdSellLeases.length > 0) && __jsx("div", {
    className: "banner_block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_TitleBlock__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.title,
    description: props.description ? props.description : '',
    path: props.path,
    href: props.href,
    type: props.type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  })));
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
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../modules/validator */ "./modules/validator.tsx");
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

    if (viewedItem && !_modules_validator__WEBPACK_IMPORTED_MODULE_18__["default"].isBlank(viewedItem)) {
      try {
        let viewedItemObject = JSON.parse(viewedItem);
        setDataAdSellLeaseViewed(viewedItemObject);
      } catch (e) {
        console.log(e);
      }
    }

    let viewedProjectItem = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__["localStorageProjectViewed"]);

    if (viewedProjectItem && !_modules_validator__WEBPACK_IMPORTED_MODULE_18__["default"].isBlank(viewedProjectItem)) {
      try {
        let viewedItemObject = JSON.parse(viewedProjectItem);
        setDataProjectViewed(viewedItemObject);
      } catch (e) {
        console.log(e);
      }
    } //Get Data News


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
        lineNumber: 99,
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
        lineNumber: 114,
        columnNumber: 9
      }
    }), __jsx(_components_Index_HotLocation__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }
    }));
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
        lineNumber: 126,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
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
        lineNumber: 128,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "https://zozo.vn/public/theme/circle/images/widgets/fbmessenger.svg",
      alt: "btn-facebook",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }))), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
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
        lineNumber: 133,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "https://zozo.vn/public/theme/circle/images/widgets/zalo.svg",
      alt: "btn-zalo",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    }))), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }
    }, __jsx("a", {
      title: "G\u1ECDi ngay",
      href: "tel:0936062166",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "https://zozo.vn/public/theme/circle/images/widgets/call.svg",
      alt: "btn-callnow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
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
      lineNumber: 149,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 0,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
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
      lineNumber: 159,
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
      lineNumber: 160,
      columnNumber: 9
    }
  }, __jsx(_components_Home_ListMenu__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }), __jsx(_components_Home_NewHot__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx(_components_Index_SearchHomepage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      padding: '20px 0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, __jsx(_components_Home_What__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  })), __jsx(_components_Home_ButtonViews__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
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
      lineNumber: 172,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "body_container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, transactionHot()), __jsx(_components_Home_Partner__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }), __jsx(_components_Search_KeywordSlide__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }), __jsx(_components_Home_ListProduct__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvQnV0dG9uVmlld3MuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS9hMS5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL2EyLmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2UvYTMuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS9hNC5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL2E1LmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2UvYTYuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS9hNy5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL2E4LmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2UvYTkuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS93aGF0Mi5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL3doYXQzLmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2Uvd2hhdDQuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9MaXN0TWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0xpc3RQcm9kdWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvTmV3SG90LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvUGFydG5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL1doYXQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5kZXgvQWRTZWxsTGVhc2VJbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbmRleC9Ib3RMb2NhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbmRleC9TZWFyY2hIb21lcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbmRleC9UaXRsZUJsb2NrLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaC9LZXl3b3JkU2xpZGUuanN4Iiwid2VicGFjazovLy8uL2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3ZhbGlkYXRvci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvSW1hZ2UvYmFkLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvSW1hZ2UvbG9naW4ucG5nIiwid2VicGFjazovLy8uL3N0eWxlL0luZGV4UGFnZS5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlQmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3Jvd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS93aXRoV2lkdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEcm9wRG93blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Ryb3BVcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9EcmFmdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWNvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9HYW1lcGFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luZm9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVCZWZvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lSXBob25lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TZW5kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclJhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld0xpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtb3dsLWNhcm91c2VsMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4LWkxOG5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWluV2lkdGgiLCJ3aWR0aCIsImltYWdlIiwicG9zaXRpb24iLCJoZWlnaHQiLCJicmVha3BvaW50cyIsImRvd24iLCJ6SW5kZXgiLCJvcGFjaXR5IiwiYm9yZGVyIiwiZm9jdXNWaXNpYmxlIiwiaW1hZ2VCdXR0b24iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsImltYWdlU3JjIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJpbWFnZUJhY2tkcm9wIiwiYmFja2dyb3VuZENvbG9yIiwiYmxhY2siLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJpbWFnZVRpdGxlIiwicGFkZGluZyIsImltYWdlTWFya2VkIiwiQnV0dG9uVmlld3MiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJpbWFnZXMiLCJ1cmwiLCJ0aXRsZSIsImNsYXNzZXMiLCJtYXAiLCJmb250U2l6ZSIsImJhY2tncm91bmRJbWFnZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoU3R5bGVzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImxpc3RJdGVtIiwidGV4dEl0ZW0iLCJwYWRkaW5nUmlnaHQiLCJwb3BvdmVyIiwicG9pbnRlckV2ZW50cyIsIk5lc3RlZExpc3QiLCJvcGVuIiwic2V0T3BlbiIsInVzZVN0YXRlIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImluZGV4TWVudSIsInNldEluZGV4TWVudSIsImNvdW50TWVudSIsInNldENvdW50TWVudSIsImhhbmRsZVBvcG92ZXJPcGVuIiwiZXZlbnQiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVQb3BvdmVyQ2xvc2UiLCJzZXRIb3Zlck1lbnUiLCJjb3VudCIsImlkIiwidW5kZWZpbmVkIiwibGlzdE1lbnUiLCJpdGVtIiwicm9vbXMiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJjb3Jzb3IiLCJlbGVtZW50Iiwicm9vbSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInBhcGVyIiwiZ3JpZExpc3QiLCJ0cmFuc2Zvcm0iLCJwcmltYXJ5IiwibGlnaHQiLCJ0aXRsZUJhciIsIkFjdGlvbnMiLCJzdGF0ZSIsInRpbGVEYXRhIiwiaW1nIiwiYXV0aG9yIiwidGlsZSIsImNhcmQiLCJtYXhXaWR0aCIsImltZ1pvb20iLCJib3hTaGFkb3ciLCJjb250ZW50IiwiSW5kZXgiLCJ0ZXh0QWxpZ24iLCJpY29uIiwiZmlsdGVyIiwiS2V5d29yZFNsaWRlIiwiTmV4dEFycm93Iiwib25DbGljayIsIlByZXZBcnJvdyIsImRhdGFTZWFyY2giLCJwYXRoIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW5pdGlhbFNsaWRlIiwibmV4dEFycm93IiwicHJldkFycm93IiwidmFyaWFibGVXaWR0aCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiYTEiLCJhMiIsImEzIiwiYTQiLCJhNSIsImE2IiwiYTciLCJhOCIsImE5IiwiZm9udFdlaWdodCIsInZpZXdQaG9uZSIsImNzc0ljb24iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJhcnJJbWciLCJ3aGF0NCIsIndoYXQyIiwid2hhdDMiLCJhcnJheSIsImJhY2tncm91bmRSZXBlYXQiLCJBZFNlbGxMZWFzZUluZGV4IiwiZGF0YUFkU2VsbExlYXNlcyIsInNldERhdGFBZFNlbGxMZWFzZSIsInN0YXR1c0xvYWRpbmdBZFNlbGxMZWFzZSIsInNldFN0YXR1c0xvYWRpbmdBZFNlbGxMZWFzZSIsImxlbmd0aCIsImRlc2NyaXB0aW9uIiwiaHJlZiIsInR5cGUiLCJTbGlkZXIiLCJkeW5hbWljIiwic3NyIiwiSG90TG9jYXRpb24iLCJkYXRhTG9jYXRpb24iLCJpbWFnZU9iamVjdCIsIlN0cmluZyIsImlucHV0YmFzZSIsImZsb2F0IiwibWFyZ2luTGVmdCIsInNlYXJjaEhvbWUiLCJtaW5IZWlnaHQiLCJzZWFyY2hIb21lQm9keSIsInZpZXdTZWFyY2giLCJpY29uU2VhcmNoIiwibWFyZ2luVG9wIiwiaWNvbkJ1dHRvbiIsIlNlYXJjaEhvbWVwYWdlIiwib25DaGFuZ2VXYXJkcyIsImtleSIsImtleUNvZGUiLCJpbWFnZUJhY2tncm91bmQiLCJzdWdnZXN0aW9ucyIsImxpbmsiLCJoaXN0b3J5IiwicmVuZGVyU3VnZ2VzdGlvbiIsImN1cnNvciIsInJlbmRlckhpc3RvcnkiLCJlIiwiYm9yZGVyUmFkaXVzIiwiVGl0bGVCbG9jayIsImRvbVRpdGxlIiwiZG9tQmxvY2tUaXRsZSIsImluZGV4T2YiLCJGb290ZXJQYWdlIiwicm9vdFBvcG92ZXIiLCJvdmVyZmxvd1giLCJoZWFkZXIiLCJkaXZpZGVyIiwibWFyZ2luIiwic3BhY2luZyIsIm9wZW5NZW51Iiwic2V0T3Blbk1lbnUiLCJhbmNob3JSZWYiLCJ1c2VSZWYiLCJoYW5kbGVUb2dnbGUiLCJwcmV2T3BlbiIsImhhbmRsZUNsb3NlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiaGFuZGxlTGlzdEtleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsImZvY3VzIiwiVHJhbnNpdGlvblByb3BzIiwicGxhY2VtZW50IiwidHJhbnNmb3JtT3JpZ2luIiwiTG9nbyIsInJlcXVpcmUiLCJMYXlvdXRQYWdlIiwic3RhdHVzTW9kYWwiLCJzZXRNb2RhbCIsInVwZGF0ZU1vZGFsIiwiZGF0YSIsImRhdGFDb21wYXJlTG9jYWwiLCJzZXREYXRhQ29tcGFyZUxvY2FsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsU3RvcmFnZUNvbXBhcmVLZXkiLCJWYWxpZGF0b3IiLCJpc0JsYW5rIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2NoZW1hT2JqZWN0IiwiY2Fub25pY2FsIiwiZ29vZ2xlU2VhcmNoQ29uc29sZSIsIl9faHRtbCIsImNoaWxkcmVuIiwibG9uZ0luIiwibG9nSW5DbG9zZSIsIm1vZGFsIiwibGluZUhlaWdodCIsInRhYnMiLCJ2YWx1ZSIsImxhYmVsIiwiTG9naW5Nb2RhbCIsInZhbHVlVGFiIiwic2V0VmFsdWVUYWIiLCJyZW5kZXJHb29nbGUiLCJnb29nbGVMb2dpbiIsInJlbmRlclphbG8iLCJ6YWxvTG9naW4iLCJyZW5kZXJGYWNlIiwiZmFjZWJvb2tMb2dpbiIsImhhbmRsZVRhYnNDaGFuZ2UiLCJyZW5kZXJUYWJzIiwidGFiIiwicmVuZGVyTG9naW4iLCJyZW5kZXJDcmVhdGVBY2NvdW50IiwiYm9yZGVyUmlnaHQiLCJJbWFnZUxvZ2luIiwic2VhcmNoT2JqZWN0IiwibWFpblVSTCIsInVwZ3JhZGVQbGFuVVJMIiwidXBncmFkZUljb25VUkwiLCJsb2dvVVJMIiwiYXBpQmFzZVVSTCIsImFwaUdyYXBoUUxVUkwiLCJ1cmxJbWFnZUFkU2VsbExlYXNlIiwidXJsSW1hZ2VQcm9qZWN0IiwidXJsSW1hZ2VCcm9rZXIiLCJpbWFnZURlZmF1bHRQcm9qZWN0IiwiaW1hZ2VEZWZhdWx0U2xpZGVyIiwiaW1hZ2VEZWZhdWx0QnJva2VyIiwiZ29vZ2xlQW5hbHl0aWNzQ29kZSIsImxvY2FsU3RvcmFnZVZpZXdlZCIsImxvY2FsU3RvcmFnZVByb2plY3RWaWV3ZWQiLCJhZFNlbGxMZWFzZUNhdGVnb3J5Iiwic2x1ZyIsIm5hbWUiLCJwYXJlbnRfc2x1ZyIsImFkU2VsbExlYXNlVHlwZSIsInR5cGUxX3NsdWciLCJ0aXRsZXMiLCJlbGVtZW50cyIsInByb2R1Y3RzIiwibW9uZXlPbGQiLCJtb25leU5ldyIsInRyaW0iLCJpc0VtcHR5Iiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJpc051bWJlciIsImlzTmFOIiwicGFyc2VGbG9hdCIsImlzRmluaXRlIiwiaXNFbWFpbCIsImVtYWlsIiwidGVzdCIsImlzU2x1ZyIsImlzVXJsIiwicmVnZXhwIiwib3JpZ2luIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsIm5vZGVOYW1lIiwiaXNMb2NhbCIsInNjcm9sbCIsIlJvdXRlciIsInNoYWxsb3ciLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiZXJyIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJwcm9jZXNzIiwid2FybiIsImV4YWN0IiwiTGluayIsInJlcGxhY2UiLCJwYXNzSHJlZiIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJnZXRSZXNwb25zZSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkluZGV4UGFnZSIsImRhdGFBZFNlbGxMZWFzZXNWaWV3ZWQiLCJzZXREYXRhQWRTZWxsTGVhc2VWaWV3ZWQiLCJkYXRhUHJvamVjdFZpZXdlZCIsInNldERhdGFQcm9qZWN0Vmlld2VkIiwiZGF0YUFkU2VsbExlYXNlV2lzaGxpc3QiLCJzZXREYXRhQWRTZWxsTGVhc2VXaXNobGlzdCIsImRhdGFQcm9qZWN0Iiwic2V0RGF0YVByb2plY3QiLCJkYXRhTmV3cyIsInNldERhdGFOZXdzIiwic3RhdHVzTG9hZGluZ1Byb2plY3QiLCJzZXRTdGF0dXNMb2FkaW5nUHJvamVjdCIsInN0YXR1c0xvYWRpbmdOZXdzIiwic2V0U3RhdHVzTG9hZGluZ05ld3MiLCJuZXdzVXJsQXBpIiwiaW5kZXhQYWdlU3R5bGUiLCJ2aWV3ZWRJdGVtIiwidmlld2VkSXRlbU9iamVjdCIsInZpZXdlZFByb2plY3RJdGVtIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJMaXN0IiwidHJhbnNhY3Rpb25Ib3QiLCJyZW5kZXJJY29uIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwiY3JlYXRlTXVpVGhlbWUiLCJmb250RmFtaWx5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBR0MsS0FBSyxLQUFLO0FBQ3JCQyxRQUFNLEVBQUU7QUFDSkMsZUFBVyxFQUFFO0FBRFQsR0FEYTtB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QTs7QUFFQSx5Qzs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7OztBQUliLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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TUFSUjtBQVNKdEYsV0FBSyxFQUFFLE1BVEg7QUFVSndMLGtCQUFZLEVBQUUsS0FWVjtBQVdKaEwsWUFBTSxFQUFFLG1CQVhKLENBWUo7QUFDQTtBQUNBOztBQWRJO0FBUko7QUFEMEIsQ0FBRCxDQUFyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsOEM7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZSdcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlcydcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgSWNvbiwgVG9vbHRpcCwgQnV0dG9uLCBDYXJkLCBDYXJkQWN0aW9ucywgQ2FyZENvbnRlbnQsIEhpZGRlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgYmFkIGZyb20gJy4uLy4uL3B1YmxpYy9JbWFnZS9iYWQuanBnJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnNXB4J1xyXG4gICAgfSxcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICBtaW5XaWR0aDogMzAwLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJjpob3ZlciwgJiRmb2N1c1Zpc2libGUnOiB7XHJcbiAgICAgICAgICAgIHpJbmRleDogMSxcclxuICAgICAgICAgICAgJyYgJGltYWdlQmFja2Ryb3AnOiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjE1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnJiAkaW1hZ2VNYXJrZWQnOiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnJiAkaW1hZ2VUaXRsZSc6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzRweCBzb2xpZCBjdXJyZW50Q29sb3InLFxyXG4gICAgICAgICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkIGN1cnJlbnRDb2xvcicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9jdXNWaXNpYmxlOiB7fSxcclxuICAgIGltYWdlQnV0dG9uOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgfSxcclxuICAgIGltYWdlU3JjOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciA0MCUnLFxyXG4gICAgfSxcclxuICAgIGltYWdlQmFja2Ryb3A6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgICAgICBvcGFjaXR5OiAwLjQsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JyksXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VUaXRsZToge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIHBhZGRpbmc6IGAzcHggNHB4IDVweCA1cHhgLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiBgMXB4IDFweCAxcHggMXB4YCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGltYWdlTWFya2VkOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzLFxyXG4gICAgICAgIHdpZHRoOiAxOCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGJvdHRvbTogLTIsXHJcbiAgICAgICAgbGVmdDogJ2NhbGMoNTAlIC0gOXB4KScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JyksXHJcbiAgICB9LFxyXG59KVxyXG5cclxuXHJcbmNsYXNzIEJ1dHRvblZpZXdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL25vaXRoYXRnaWFkaW5oYmluaGR1b25nLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wOS9naSVDNiVCMCVFMSVCQiU5RG5nLWclQzMlQjUtJUM0JTkxJUUxJUJCJThGLmpwZycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0dp4bqjbSAxMCUgVOG7qyDEkMahbiBIw6BuZyBUaOG7qSAyJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMzAlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9pMi53cC5jb20vZG9nb3F1b2NjdW9uZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDgvRFNDMDk1NDUuanBnP2ZpdD0zMDA4JTJDMjAwMCZzc2w9MScsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1RoaeG6v3QgS+G6vyBUaGVvIFnDqnUgQ+G6p3UnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc0MCUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vdGhpY29uZ2RvZ29oYW5vaS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDMvbmh1LXktdGF5LWhvcC02bW9uLmpwZycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ8SQ4bq3dCBIw6BuZyBLaMO0bmcgR2nhu5tpIEjhuqFuJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMzAlJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxIaWRkZW4geHNEb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzLm1hcChpbWFnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25CYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzUmlwcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW1hZ2UudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNWaXNpYmxlQ2xhc3NOYW1lPXtjbGFzc2VzLmZvY3VzVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGltYWdlLndpZHRoLCBmb250U2l6ZTogMzAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VTcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZS51cmx9KWAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZU1hcmtlZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uQmFzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQnV0dG9uVmlld3MucHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQnV0dG9uVmlld3MpXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hMS1jNzBhOTk4ODc5ZTY1Njc1MWNmYmY3ZWVlYTkxMDY1NS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYTItZDI3YzU4YWI0NGVlMmUwZTNjNzYyY2VjMTA5YzAzNTAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2EzLTg5MTZmNzUxZGRjNmRiMTk2MmY0N2E0NmJlMmU3ZDc0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hNC04NGM2YjZkNTlkNzU3ZmVhMjFmNmM2ZjkwZTJjNTA1YS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYTUtNDg4NDA1MjdiNTMzYjcyODA5NDAyODdhM2Y1ODIxMjkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2E2LTUzNTU3NWUxMWJjNmZhNjIzMDNiYTA3NmExMDY5Mzc3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hNy01ODE4MDc3YmZhMDVmZjAyNjU5Njg2YTdlMzUxM2JiMy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYTgtMWJjMGQ4NzRmOTI2MTUyNTJhOTM5MjUyOWM5NGQ2ODAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2E5LWUwMWI1NDAyMGIyNDFiNzE3NmI1ZTAzMGI5MTEzYzgzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy93aGF0Mi1mYmQ5MzQ1YWVjZGU1YzBhMDUyNWYxMjA1M2UxODA2Yi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvd2hhdDMtMzY0NWUzNzExNWY3Nzg2NjU1Mjg0MzRjYTNlZjMxOTAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3doYXQ0LTc3N2EyZjg2NTRiMjhkMzA3ZDg4OWNlY2E4YzEzOTk1LmpwZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuICAgIExpc3QsXHJcbiAgICBEaXZpZGVyLFxyXG4gICAgTGlzdEl0ZW1JY29uLFxyXG4gICAgTGlzdEl0ZW0sXHJcbiAgICBMaXN0SXRlbVRleHQsXHJcbiAgICBDb2xsYXBzZSxcclxuICAgIEJ1dHRvbixcclxuICAgIExpc3RTdWJoZWFkZXIsXHJcbiAgICBQb3BvdmVyLFxyXG4gICAgVHlwb2dyYXBoeSxcclxuICAgIE1lbnVJdGVtLFxyXG5cclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBJbmJveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94JztcclxuaW1wb3J0IERyYWZ0c0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RyYWZ0cyc7XHJcbmltcG9ydCBTZW5kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZCc7XHJcbmltcG9ydCBFeHBhbmRMZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzJztcclxuaW1wb3J0IEV4cGFuZE1vcmUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xyXG5pbXBvcnQgU3RhckJvcmRlciBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlcic7XHJcbmltcG9ydCBHYW1lcGFkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR2FtZXBhZCc7XHJcbmltcG9ydCB7IGxpc3RNZW51IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2luZGV4JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgbGlzdEl0ZW06IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTNmMmZkJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjOTBjYWY5JyxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGV4dEl0ZW06IHtcclxuICAgICAgICBjb2xvcjogJyMxOTc2ZDInLFxyXG4gICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDIwLFxyXG4gICAgfSxcclxuICAgIHBvcG92ZXI6IHtcclxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsIC8vIG5vbmVcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIE5lc3RlZExpc3QoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2luZGV4TWVudSwgc2V0SW5kZXhNZW51XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2NvdW50TWVudSwgc2V0Q291bnRNZW51XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgaGFuZGxlUG9wb3Zlck9wZW4gPSAoZXZlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgc2V0T3BlbihldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBzZXRDb3VudE1lbnUoMCk7XHJcbiAgICAgICAgc2V0SW5kZXhNZW51KGluZGV4KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUG9wb3ZlckNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgIHNldEluZGV4TWVudShudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0SG92ZXJNZW51ID0gKGNvdW50KSA9PiB7XHJcbiAgICAgICAgc2V0Q291bnRNZW51KGNvdW50KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaWQgPSBvcGVuID8gaW5kZXhNZW51IDogdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuZXN0ZWQtbGlzdC1zdWJoZWFkZXJcIlxyXG4gICAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2xpc3RNZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcm9vbXMgfSA9IGl0ZW1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGJ1dHRvbiBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbk1vdXNlRW50ZXI9eyhldmVudCkgPT4gaGFuZGxlUG9wb3Zlck9wZW4oZXZlbnQsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY291bnRNZW51ID09PSBpbmRleCA/ICcjOTBjYWY5JyA6ICcjZTNmMmZkJywgaGVpZ2h0OiAzNSwgcGFkZGluZzogJzAgNHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2FtZXBhZEljb24gc3R5bGU9e3sgZm9udFNpemU6IDI1LCBjb2xvcjogJyMxOTc2ZDInLCBwYWRkaW5nOiA0IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXhNZW51ID09PSBpbmRleCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnBvcG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAncmlnaHQnLCBob3Jpem9udGFsOiAncmlnaHQnIH19IC8vIEdoaW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgdmVydGljYWw6ICd0b3AnLCBob3Jpem9udGFsOiAnbGVmdCcgfX0gLy8gVmkgdHJpIGhpZW4gdGhpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVQb3BvdmVyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbk1vdXNlT3V0PXtoYW5kbGVQb3BvdmVyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibmF2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmVzdGVkLWxpc3Qtc3ViaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMCwgcG9pbnRlckV2ZW50czogJ2F1dG8nLCBjb3Jzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vbXMubWFwKChlbGVtZW50LCBjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17Y291bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhjb3VudCkgPT4gc2V0SG92ZXJNZW51KGNvdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY291bnRNZW51ID09PSBjb3VudCA/ICcjOTBjYWY5JyA6ICcjZTNmMmZkJywgaGVpZ2h0OiAzNSwgcGFkZGluZzogJzAgNHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3Zlck1lbnUoY291bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2FtZXBhZEljb24gc3R5bGU9e3sgZm9udFNpemU6IDI1LCBjb2xvcjogJyMxOTc2ZDInLCBwYWRkaW5nOiA0IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnJvb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0ID5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5lc3RlZExpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IEdyaWRMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0J1xyXG5pbXBvcnQgR3JpZExpc3RUaWxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZSdcclxuaW1wb3J0IEdyaWRMaXN0VGlsZUJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGVCYXInXHJcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXInXHJcbmltcG9ydCBJbmZvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mbydcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlcydcclxuaW1wb3J0IHsgSTE4biB9IGZyb20gJ3JlYWN0LXJlZHV4LWkxOG4nXHJcbmltcG9ydCB7XHJcbiAgIEljb25CdXR0b24sXHJcbiAgIEljb24sXHJcbiAgIFRvb2x0aXAsXHJcbiAgIEJ1dHRvbixcclxuICAgQ2FyZCxcclxuICAgR3JpZCxcclxuICAgQ2FyZENvbnRlbnQsXHJcbiAgIENhcmRBY3Rpb25zLFxyXG4gICBUeXBvZ3JhcGh5LFxyXG4gICBBcHBCYXIsXHJcbiAgIFRvb2xiYXIsXHJcbiAgIEhpZGRlbixcclxuXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBTdGFyQm9yZGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlcidcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XHJcbiAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgIH0sXHJcbiAgIGdyaWRMaXN0OiB7XHJcbiAgICAgIGZsZXhXcmFwOiAnbm93cmFwJyxcclxuICAgICAgLy8gaGVpZ2h0OiAnNTAwcHgnLFxyXG4gICAgICAvLyBQcm9tb3RlIHRoZSBsaXN0IGludG8gaGlzIG93biBsYXllciBvbiBDaHJvbWUuIFRoaXMgY29zdCBtZW1vcnkgYnV0IGhlbHBzIGtlZXBpbmcgaGlnaCBGUFMuXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVooMCknLFxyXG4gICB9LFxyXG4gICB0aXRsZToge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxyXG4gICB9LFxyXG4gICB0aXRsZUJhcjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAgICAnbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLDAsMCwwLjcpIDAlLCByZ2JhKDAsMCwwLDAuMykgNzAlLCByZ2JhKDAsMCwwLDApIDEwMCUpJyxcclxuICAgfSxcclxufSlcclxuXHJcblxyXG5jbGFzcyBBY3Rpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcmVuZGVyKCkge1xyXG4gICAgICBsZXQgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgIGxldCB0aWxlRGF0YSA9IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdodHRwOi8vYml6d2ViLmRrdGNkbi5uZXQvMTAwLzA2MC85NjYvcHJvZHVjdHMvZ2l1b25nLW5ndS1nby1jYW8tY2FwLXRhaS1oYS1ub2ktMTAuanBnP3Y9MTQ2Mjk4MjE1MDM3MCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnR2nGsOG7nW5nIGfhu5cgdOG7sSBuaGnDqm4nLFxyXG4gICAgICAgICAgICBhdXRob3I6ICdN4bqhbmggTmjhuqtuJyxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdodHRwczovL2Nkbi5tdWFiYW5uaGFuaC5jb20vYXNzZXQvZnJvbnRlbmQvaW1nL2dhbGxlcnkvMjAxOC8wOS8wNC81YjhlNTU5NTQ2OTkwXzE1MzYwNTQ2NzcuanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdCw6BuIHBow7JuZyBraMOhY2gnLFxyXG4gICAgICAgICAgICBhdXRob3I6ICdN4bqhbmggTmjhuqtuJyxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdodHRwczovL3d3dy5ub2l0aGF0aG9hbm15LmNvbS52bi9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL25vaS10aGF0LWdvLXBob25nLWtoYWNoLWRlcC5qcGcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQnLFxyXG4gICAgICAgICAgICBhdXRob3I6ICdN4bqhbmggTmjhuqtuJyxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdodHRwOi8vYml6d2ViLmRrdGNkbi5uZXQvMTAwLzA2MC85NjYvcHJvZHVjdHMvZ2l1b25nLW5ndS1nby1jYW8tY2FwLXRhaS1oYS1ub2ktMTAuanBnP3Y9MTQ2Mjk4MjE1MDM3MCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnR2nGsOG7nW5nIGfhu5cgdOG7sSBuaGnDqm4nLFxyXG4gICAgICAgICAgICBhdXRob3I6ICdN4bqhbmggTmjhuqtuJyxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdodHRwczovL2Nkbi5tdWFiYW5uaGFuaC5jb20vYXNzZXQvZnJvbnRlbmQvaW1nL2dhbGxlcnkvMjAxOC8wOS8wNC81YjhlNTU5NTQ2OTkwXzE1MzYwNTQ2NzcuanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdCw6BuIHBow7JuZyBraMOhY2gnLFxyXG4gICAgICAgICAgICBhdXRob3I6ICdN4bqhbmggTmjhuqtuJyxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdodHRwczovL3d3dy5ub2l0aGF0aG9hbm15LmNvbS52bi9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL25vaS10aGF0LWdvLXBob25nLWtoYWNoLWRlcC5qcGcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQnLFxyXG4gICAgICAgICAgICBhdXRob3I6ICdN4bqhbmggTmjhuqtuJyxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdodHRwOi8vYml6d2ViLmRrdGNkbi5uZXQvMTAwLzA2MC85NjYvcHJvZHVjdHMvZ2l1b25nLW5ndS1nby1jYW8tY2FwLXRhaS1oYS1ub2ktMTAuanBnP3Y9MTQ2Mjk4MjE1MDM3MCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnR2nGsOG7nW5nIGfhu5cgdOG7sSBuaGnDqm4nLFxyXG4gICAgICAgICAgICBhdXRob3I6ICdN4bqhbmggTmjhuqtuJyxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdodHRwczovL2Nkbi5tdWFiYW5uaGFuaC5jb20vYXNzZXQvZnJvbnRlbmQvaW1nL2dhbGxlcnkvMjAxOC8wOS8wNC81YjhlNTU5NTQ2OTkwXzE1MzYwNTQ2NzcuanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdCw6BuIHBow7JuZyBraMOhY2gnLFxyXG4gICAgICAgICAgICBhdXRob3I6ICdN4bqhbmggTmjhuqtuJyxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdodHRwczovL3d3dy5ub2l0aGF0aG9hbm15LmNvbS52bi9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL25vaS10aGF0LWdvLXBob25nLWtoYWNoLWRlcC5qcGcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQnLFxyXG4gICAgICAgICAgICBhdXRob3I6ICdN4bqhbmggTmjhuqtuJyxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdodHRwOi8vYml6d2ViLmRrdGNkbi5uZXQvMTAwLzA2MC85NjYvcHJvZHVjdHMvZ2l1b25nLW5ndS1nby1jYW8tY2FwLXRhaS1oYS1ub2ktMTAuanBnP3Y9MTQ2Mjk4MjE1MDM3MCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnR2nGsOG7nW5nIGfhu5cgdOG7sSBuaGnDqm4nLFxyXG4gICAgICAgICAgICBhdXRob3I6ICdN4bqhbmggTmjhuqtuJyxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdodHRwczovL2Nkbi5tdWFiYW5uaGFuaC5jb20vYXNzZXQvZnJvbnRlbmQvaW1nL2dhbGxlcnkvMjAxOC8wOS8wNC81YjhlNTU5NTQ2OTkwXzE1MzYwNTQ2NzcuanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdCw6BuIHBow7JuZyBraMOhY2gnLFxyXG4gICAgICAgICAgICBhdXRob3I6ICdN4bqhbmggTmjhuqtuJyxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdodHRwczovL3d3dy5ub2l0aGF0aG9hbm15LmNvbS52bi9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL25vaS10aGF0LWdvLXBob25nLWtoYWNoLWRlcC5qcGcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQnLFxyXG4gICAgICAgICAgICBhdXRob3I6ICdN4bqhbmggTmjhuqtuJyxcclxuICAgICAgICAgfSxcclxuXHJcbiAgICAgIF1cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxIaWRkZW4gc21VcD5cclxuICAgICAgICAgICAgICAgPEdyaWRMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkTGlzdH0gY29scz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgdGlsZURhdGEubWFwKCh0aWxlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExpc3RUaWxlIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGlsZS5pbWd9IGFsdD17dGlsZS50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMaXN0VGlsZUJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGlsZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLnRpdGxlQmFyLCB0aXRsZTogY2xhc3Nlcy50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25JY29uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD17YHN0YXIgJHt0aWxlLnRpdGxlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhckJvcmRlckljb24gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGlzdFRpbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgPC9HcmlkTGlzdD5cclxuICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIDxIaWRkZW4geHNEb3duID5cclxuICAgICAgICAgICAgICAgPEhpZGRlbiBtZFVwPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRMaXN0fSBjb2xzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAge3RpbGVEYXRhLm1hcCgodGlsZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMaXN0VGlsZSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RpbGUuaW1nfSBhbHQ9e3RpbGUudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGlzdFRpbGVCYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy50aXRsZUJhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGNsYXNzZXMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkljb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPXtgc3RhciAke3RpbGUudGl0bGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFyQm9yZGVySWNvbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMaXN0VGlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZExpc3Q+XHJcbiAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICA8SGlkZGVuIHNtRG93bj5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkTGlzdH0gY29scz17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHt0aWxlRGF0YS5tYXAoKHRpbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGlzdFRpbGUga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aWxlLmltZ30gYWx0PXt0aWxlLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExpc3RUaWxlQmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aWxlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMudGl0bGVCYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBjbGFzc2VzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25JY29uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD17YHN0YXIgJHt0aWxlLnRpdGxlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhckJvcmRlckljb24gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGlzdFRpbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRMaXN0PlxyXG4gICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgIH1cclxufVxyXG5cclxuQWN0aW9ucy5wcm9wVHlwZXMgPSB7XHJcbiAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEFjdGlvbnMpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB3aXRoV2lkdGgsIHsgaXNXaWR0aFVwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvd2l0aFdpZHRoJ1xyXG5pbXBvcnQge1xyXG4gIEljb25CdXR0b24sXHJcbiAgSWNvbixcclxuICBUb29sdGlwLFxyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIEdyaWQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBBcHBCYXIsXHJcbiAgVG9vbGJhcixcclxuICBDYXJkQWN0aW9uQXJlYSxcclxuICBDYXJkTWVkaWEsXHJcbiAgQXZhdGFyLFxyXG5cclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnQnXHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcclxuICBjYXJkOiB7XHJcbiAgICBtYXhXaWR0aDogMzAwLFxyXG4gIH0sXHJcbiAgaW1nWm9vbToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEyMHB4JyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6ICcycHggMnB4IDhweCAycHggI2FhYScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5jb25zdCBpbWcgPSBbXHJcbiAge1xyXG4gICAgaW1nOiAnaHR0cHM6Ly93d3cubm9pdGhhdGhvYW5teS5jb20udm4vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9ub2ktdGhhdC1nby1waG9uZy1raGFjaC1kZXAuanBnJyxcclxuICAgIHRpdGxlOiAnSGnhu4duIMSR4bqhaSB2dcO0bmcgduG6r24gbOG7i2NoIGzDo20gcXXDvSBwaMOhaScsXHJcbiAgICBjb250ZW50OiAnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnaHR0cHM6Ly9zZGsudm4vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvcyVDNiVBMW4tZyVFMSVCQiU5Ny1waCVFMSVCQiVBNy1tJUUxJUJCJTlELmpwZycsXHJcbiAgICB0aXRsZTogJ1Bob25nIGPDoWNoIGhvw6BuZyBnaWEsIMSR4bqtbSBjaOG6pXQgY+G7lSDEkWnhu4NuJyxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnaHR0cHM6Ly9uaGFkZXBuaGF4aW5oLnZuL2ltYWdlcy9wLmtoJUMzJUExY2hfdCVFMSVCQSVBN25nXzFfLjJfMS5qcGcnLFxyXG4gICAgdGl0bGU6ICdUaGnhur90IGvhur8gdGnhu4duIG5naGkgc2FuZyB0cuG7jW5nJyxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnaHR0cHM6Ly9jZG4ubXVhYmFubmhhbmguY29tL2Fzc2V0L2Zyb250ZW5kL2ltZy9nYWxsZXJ5LzIwMTcvMTAvMDQvNTlkNDU2NDM3M2E0Zl8xNTA3MDg3OTM5LmpwZycsXHJcbiAgICB0aXRsZTogJ1NhbmcgdHLhu41uZyB24bubaSBnacaw4budbmcgbmfhu6cgY+G7lSDEkWnhu4NuJyxcclxuICAgIGNvbnRlbnQ6ICcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICdodHRwczovL3ZhdGxpZXV4YXlkdW5nLm9yZy52bi9VcGxvYWQvNDgvTmFtXzIwMTgvVGhhbmdfMTIvTmdheV8xOS92bHhkLm9yZ19uZ3V5ZW50YWMyLmpwZycsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnaHR0cHM6Ly92ZWN0by5jb20udm4vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDQvdHVfYmVwX3NvaV9uZ2EtNTAweDQ5NS5qcGcnLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY29udGVudDogJydcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJ2h0dHA6Ly9ub2l0aGF0ZGVwaGFub2kuY29tLnZuL3VwbG9hZHMvaW1hZ2VzL3R1LWJlcC1nby1zb24tbWF1LWNodS1sLWNvLWRpZW4vbjkuanBnJyxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICdodHRwczovL2Nkbi5tdWFiYW5uaGFuaC5jb20vYXNzZXQvZnJvbnRlbmQvaW1nL2dhbGxlcnkvMjAxOC8wOS8wNC81YjhlNTU5NTQ2OTkwXzE1MzYwNTQ2NzcuanBnJyxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnXHJcbiAgfVxyXG5dXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnIGNvbG9yPSdwcmltYXJ5JyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgS2h1eeG6v24gbcOjaVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtpbmRleH0gc3R5bGU9e3sgcGFkZGluZzogNCB9fT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdab29tfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWd9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5JbmRleC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSW5kZXgpOyIsImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgTmF2aWdhdGVOZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZU5leHQnO1xyXG5pbXBvcnQgTmF2aWdhdGVCZWZvcmUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlQmVmb3JlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsga2V5cyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlQnJlYWtwb2ludHNcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IEdyaWRMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0J1xyXG5pbXBvcnQgR3JpZExpc3RUaWxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZSdcclxuaW1wb3J0IEdyaWRMaXN0VGlsZUJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGVCYXInXHJcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXInXHJcbmltcG9ydCBJbmZvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mbydcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlcydcclxuaW1wb3J0IHtcclxuICBJY29uQnV0dG9uLFxyXG4gIEljb24sXHJcbiAgVG9vbHRpcCxcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBHcmlkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIFR5cG9ncmFwaHlcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IE93bENhcm91c2VsIGZyb20gJ3JlYWN0LW93bC1jYXJvdXNlbDInXHJcbmltcG9ydCBhMSBmcm9tICcuL0ltYWdlL2ExLmpwZydcclxuaW1wb3J0IGEyIGZyb20gJy4vSW1hZ2UvYTIuanBnJ1xyXG5pbXBvcnQgYTMgZnJvbSAnLi9JbWFnZS9hMy5qcGcnXHJcbmltcG9ydCBhNCBmcm9tICcuL0ltYWdlL2E0LmpwZydcclxuaW1wb3J0IGE1IGZyb20gJy4vSW1hZ2UvYTUuanBnJ1xyXG5pbXBvcnQgYTYgZnJvbSAnLi9JbWFnZS9hNi5qcGcnXHJcbmltcG9ydCBhNyBmcm9tICcuL0ltYWdlL2E3LmpwZydcclxuaW1wb3J0IGE4IGZyb20gJy4vSW1hZ2UvYTguanBnJ1xyXG5pbXBvcnQgYTkgZnJvbSAnLi9JbWFnZS9hOS5qcGcnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIC8vIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgZ3JpZExpc3Q6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KScsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgcGFkZGluZzogJzVweCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDM5YmU1JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gIH0sXHJcbiAgaW1nWm9vbToge1xyXG4gICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gLjVzLCBmaWx0ZXIgM3MgZWFzZS1pbi1vdXRcIixcclxuICAgIGZpbHRlcjogXCJncmF5c2NhbGUoMTAwJSlcIixcclxuICB9LFxyXG4gIC8vIGltZ1pvb206IHtcclxuICAvLyAgIFwiJjpob3ZlclwiOiB7XHJcbiAgLy8gICAgIGZpbHRlcjogXCJncmF5c2NhbGUoMClcIixcclxuICAvLyAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMSlcIixcclxuICAvLyAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBcIjFzXCIsXHJcbiAgLy8gICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogXCJsaW5lYXJcIixcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbn0pKTtcclxuXHJcbmNvbnN0IEtleXdvcmRTbGlkZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgTmV4dEFycm93ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17J3BhcnRuZXJfX25leHRfX2Fycm93J31cclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICA8TmF2aWdhdGVOZXh0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFByZXZBcnJvdyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9eydwYXJ0bmVyX19wcmV2X19hcnJvdyd9XHJcbiAgICAgICAgb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgPE5hdmlnYXRlQmVmb3JlIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGFTZWFyY2ggPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkdpxrDhu51uZyBuZ+G7pyBoaeG7h24gxJHhuqFpXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3ZpbmhvbWVzLWNlbnRyYWwtcGFyay1waWQtMzU4NzJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVOG7pyBxdeG6p24gw6FvIHRo4budaSB0cmFuZ1wiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi92aW5ob21lcy1ncmFuZC1wYXJrLXF1YW4tOS1waWQtMzc1ODRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQsOgbiB0csOgIHBow7JuZyBraMOhY2ggaGnhu4duIMSR4bqhaVwiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi92aW5ob21lcy1zbWFydC1jaXR5LXBpZC0zNzE5MVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCw6BuIHRyw6AgcGjDsm5nIGtow6FjaCBj4buVIMSRaeG7g25cIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdmluaG9tZXMtb2NlYW4tcGFyay1naWEtbGFtLXBpZC0zNzU5N1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJU4bunIGLhur9wIHRp4buHbiBuZ2hpXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3Z1bmctdGF1LXBlYXJsLXBpZC00ODY3NFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJO4buZaSB0aOG6pXQgc2FuZyB0cuG7jW5nXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL2dyYW5kZXVyLXBhbGFjZS1waWQtNTAyMzRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiR2nGsOG7nW5nIG5n4bunIGPhu5UgxJFp4buDblwiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi9kaWFtb25kLWlzbGFuZC1waWQtMzM1XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk7hu5lpIHRo4bqldCBzYW5nIHRy4buNbmdcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdGhlLXN1bi1hdmVudWUtcGlkLTE1XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkLDoG4gxINuIGPhu5UgxJFp4buDblwiLFxyXG4gICAgICBwYXRoOiBcIi9uaGEtZGF0LWJhbi9uaGEtZGF0LWJhbi10YWktaGFpLXBob25nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkLDoG4gxINuIGhp4buHbiDEkeG6oWlcIixcclxuICAgICAgcGF0aDogXCIvbmhhLWRhdC1iYW4vbmhhLWRhdC1iYW4tdGFpLWhhLW5vaVwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgaW5pdGlhbFNsaWRlOiAwLFxyXG4gICAgbmV4dEFycm93OiA8TmV4dEFycm93IG9uQ2xpY2s9e1tdfSAvPixcclxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyBvbkNsaWNrPXtbXX0gLz4sXHJcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTQ0MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgaW5pdGlhbFNsaWRlOiAyXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcblxyXG4gIGxldCB0aWxlRGF0YSA9IFtcclxuICAgIHsgaW1nOiBhMSB9LFxyXG4gICAgeyBpbWc6IGEyIH0sXHJcbiAgICB7IGltZzogYTMgfSxcclxuICAgIHsgaW1nOiBhNCB9LFxyXG4gICAgeyBpbWc6IGE1IH0sXHJcbiAgICB7IGltZzogYTYgfSxcclxuICAgIHsgaW1nOiBhNyB9LFxyXG4gICAgeyBpbWc6IGE4IH0sXHJcbiAgICB7IGltZzogYTkgfSxcclxuICAgIHsgaW1nOiBhMSB9LFxyXG4gICAgeyBpbWc6IGEyIH0sXHJcbiAgICB7IGltZzogYTMgfSxcclxuICAgIHsgaW1nOiBhNCB9LFxyXG4gICAgeyBpbWc6IGE1IH0sXHJcbiAgICB7IGltZzogYTYgfSxcclxuICAgIHsgaW1nOiBhNyB9LFxyXG4gICAgeyBpbWc6IGE4IH0sXHJcbiAgICB7IGltZzogYTkgfVxyXG4gIF1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXJcIiBzdHlsZT17eyBoZWlnaHQ6IDIwMCB9fSA+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRTaXplOiAyMCwgcGFkZGluZzogMTAsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6ICcjMTk3NmQyJyB9fT5cclxuICAgICAgICBLaMOhY2ggaMOgbmcgLSDEkeG7kWkgdMOhY1xyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aWxlRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhcnRuZXJfX2l0ZW1cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyMDAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWd9IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9TbGlkZXI+XHJcbiAgICA8L2RpdiA+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2V5d29yZFNsaWRlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXMnXHJcbmltcG9ydCB7XHJcbiAgIENhcmRDb250ZW50LFxyXG4gICBUeXBvZ3JhcGh5LFxyXG4gICBDYXJkQWN0aW9uQXJlYSxcclxuICAgQ2FyZE1lZGlhLFxyXG4gICBDYXJkLFxyXG4gICBBdmF0YXIsXHJcbiAgIEhpZGRlbixcclxuICAgR3JpZCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnQnXHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uJ1xyXG5pbXBvcnQgU3RhclJhdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyUmF0ZSdcclxuaW1wb3J0IHdoYXQyIGZyb20gJy4vSW1hZ2Uvd2hhdDIuanBnJ1xyXG5pbXBvcnQgd2hhdDMgZnJvbSAnLi9JbWFnZS93aGF0My5qcGcnXHJcbmltcG9ydCB3aGF0NCBmcm9tICcuL0ltYWdlL3doYXQ0LmpwZydcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XHJcbiAgIHZpZXdQaG9uZToge1xyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgcGFkZGluZzogJzhweCdcclxuICAgICAgfSxcclxuICAgfSxcclxuICAgY2FyZDoge1xyXG4gICAgICBtYXhXaWR0aDogMjAwLFxyXG4gICAgICBib3JkZXI6ICczcHggc29saWQgd2hpdGUnLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgICAgLy8gcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgIG1heFdpZHRoOiAxNzAsXHJcbiAgICAgIH1cclxuICAgfSxcclxuICAgdGl0bGU6IHtcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIHBhZGRpbmc6IDIwLFxyXG4gICB9LFxyXG4gICBjc3NJY29uOiB7XHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBmb250U2l6ZTogJzMwcHgnXHJcbiAgIH0sXHJcbiAgIGltZ1pvb206IHtcclxuICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gLjVzLCBmaWx0ZXIgM3MgZWFzZS1pbi1vdXRcIixcclxuICAgICAgZmlsdGVyOiBcImdyYXlzY2FsZSgxMDAlKVwiLFxyXG4gICB9LFxyXG4gICBpbWdab29tOiB7XHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgIGZpbHRlcjogXCJncmF5c2NhbGUoMClcIixcclxuICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMSlcIixcclxuICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBcIjFzXCIsXHJcbiAgICAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogXCJsaW5lYXJcIixcclxuICAgICAgfVxyXG4gICB9XHJcbn0pXHJcblxyXG5jb25zdCBhcnJJbWcgPSBbXHJcbiAgIHtcclxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly90aGViYW5rLnZuL3N0YXRpYy82LzExMzUvNzE0LzkwLzIwMTgvMTAvMTYvdGhlYmFua19zdXRoYXR2ZXBoaXF1ZXR0aGV0aW5kdW5na2hpdGhhbmh0b2FuMW1pbl8xNTM5NjU0MjMxLmpwZ1wiLFxyXG4gICAgICB0aXRsZTogJ011YSBIw6BuZyBUaeG7h24gTOG7o2knLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIGltYWdlOiB3aGF0NCwgLy9cImh0dHBzOi8vd3d3LnRoaWV0a2VraWVudHJ1Y2dyb3VwLmNvbS9wdWJsaWMvdXBsb2FkL2ltYWdlcy9ub2ktdGhhdC1nby1waG9uZy1raGFjaCUyMCg3NikuanBnXCIsXHJcbiAgICAgIHRpdGxlOiAnQuG6o28gSMOgbmggSOG6rXUgTcOjaScsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgaW1hZ2U6IHdoYXQyLCAvL1wiaHR0cHM6Ly93d3cubm9pdGhhdGhvYW5teS5jb20udm4vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9ub2ktdGhhdC1nby1waG9uZy1raGFjaC1kZXAuanBnXCIsXHJcbiAgICAgIHRpdGxlOiAnR2nDoSBD4bqjIEjhu6NwIEzDvScsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgaW1hZ2U6IHdoYXQzLCAvL1wiaHR0cHM6Ly9pMi53cC5jb20vZG9nb3F1b2NjdW9uZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDgvRFNDMDk1NDUuanBnP2ZpdD0zMDA4JTJDMjAwMCZzc2w9MVwiLFxyXG4gICAgICB0aXRsZTogJ1V5IFTDrW4gQ2jhuqV0IEzGsOG7o25nJyxcclxuICAgfSxcclxuXVxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgfVxyXG5cclxuICAgcmVuZGVyKCkge1xyXG4gICAgICBsZXQgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgIC8vIGxldCBpbWcgPSBcInVybCgnaHR0cDovL25vaXRoYXRkYW5nY2FwLnZuL2FwcC93ZWJyb290L3VwbG9hZHMvZmlsZXMvMS1waG9uZy1raGFjaC1ub2ktdGhhdC1jby1kaWVuLWNoYXUtYXUtZGluaC10aHUtdGFpLU5hbS1EaW5oLmpwZycpXCJcclxuICAgICAgbGV0IGltZyA9IFwidXJsKCdodHRwczovL3RhbWNodXBoaW5oc2FucGhhbS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDUvNDA3NzkwNTVfNzE5ODk2NDQ1MDEyOTEzXzQzNjQ0NDk0OTg3OTgyMjc0NTZfbi5qcGcnKVwiXHJcbiAgICAgIC8vIGxldCBpbWcgPSBcInVybCgnaHR0cHM6Ly9wbmcucG5ndHJlZS5jb20vNThwaWMvMzIvNDkvNjcvMjBVNThQSUNJOWRXY2Q3WDd5WDhlX1BJQzIwMTguanBnJylcIlxyXG4gICAgICBjb25zdCBhcnJheSA9IFt7IGl0ZW06IDEgfSwgeyBpdGVtOiAxIH0sIHsgaXRlbTogMSB9LCB7IGl0ZW06IDEgfSwgeyBpdGVtOiAxIH0sIHsgaXRlbTogMSB9XTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBpbWcsIGhlaWdodDogMjgwLCB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kUmVwZWF0OiAncmVwZWF0JyB9fSA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjMjE5NmYzJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSA+XHJcbiAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD0naDQnIGNvbXBvbmVudD0naDQnPlxyXG4gICAgICAgICAgICAgICAgICBIw4NZIMSQ4bq+TiBW4buaSSBDSMOaTkcgVMOUSVxyXG4gICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgIHthcnJheS5tYXAoKGl0ZW0sIGluZGV4KSA9PiA8U3RhclJhdGVJY29uIGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jc3NJY29ufSAvPil9XHJcbiAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gYWxpZ25JdGVtcz0nY2VudGVyJyBqdXN0aWZ5PSdjZW50ZXInIGRpcmVjdGlvbj0ncm93JyA+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJySW1nLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezN9IG1kPXszfSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2NsYXNzZXMudmlld1Bob25lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ1pvb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNvbnRlbXBsYXRpdmUgUmVwdGlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtlbGVtZW50LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17ZWxlbWVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjE5NmYzJywgcGFkZGluZzogNCB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTYsIGZvbnRXZWlnaHQ6IDUwMCB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICB9XHJcbn1cclxuXHJcbkluZGV4LnByb3BUeXBlcyA9IHtcclxuICAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSW5kZXgpIiwiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxvY2FsU3RvcmFnZVByb2plY3RWaWV3ZWQsIGxvY2FsU3RvcmFnZVZpZXdlZCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi4vLi4vbW9kdWxlcy92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBhcG9sbG9DbGllbnQgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7XHJcbiAgR0VUX0FEX1NFTExfTEVBU0VfV0lTSF9MSVNULFxyXG4gIEhPTUVfR0VUX0FEX1NFTExfTEVBU0VTLFxyXG59IGZyb20gJy4uLy4uL2dyYXBocWwvYWRfc2VsbF9sZWFzZXMvcXVlcmllcyc7XHJcbmltcG9ydCB7IEhPTUVfR0VUX1BST0pFQ1RfTElTVCB9IGZyb20gJy4uLy4uL2dyYXBocWwvcHJvamVjdC9xdWVyaWVzJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB7IEFkU2VsbExlYXNlc0xpc3RQcm9wcyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW50ZXJmYWNlJztcclxuaW1wb3J0IFRpdGxlQmxvY2sgZnJvbSAnLi9UaXRsZUJsb2NrJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5cclxuaW50ZXJmYWNlIEFkU2VsbExlYXNlSW5kZXhQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZyxcclxuICBwYXRoOiBzdHJpbmcsXHJcbiAgaHJlZjogc3RyaW5nLFxyXG4gIHR5cGU6IFwiaDFcIiB8IFwiaDJcIiB8IFwiaDNcIixcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZyxcclxuICBmaWx0ZXI6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBBZFNlbGxMZWFzZUluZGV4OiBGdW5jdGlvbkNvbXBvbmVudDxBZFNlbGxMZWFzZUluZGV4UHJvcHM+ID0gKHByb3BzOiBBZFNlbGxMZWFzZUluZGV4UHJvcHMpID0+IHtcclxuICBjb25zdCBbZGF0YUFkU2VsbExlYXNlcywgc2V0RGF0YUFkU2VsbExlYXNlXSA9IFJlYWN0LnVzZVN0YXRlPEFkU2VsbExlYXNlc0xpc3RQcm9wc1tdPihbXSk7XHJcbiAgY29uc3QgW3N0YXR1c0xvYWRpbmdBZFNlbGxMZWFzZSwgc2V0U3RhdHVzTG9hZGluZ0FkU2VsbExlYXNlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7XHJcbiAgICAgICAgKHN0YXR1c0xvYWRpbmdBZFNlbGxMZWFzZSB8fCAoZGF0YUFkU2VsbExlYXNlcyAmJiBkYXRhQWRTZWxsTGVhc2VzLmxlbmd0aCA+IDApKSAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImJhbm5lcl9ibG9ja1wifT5cclxuICAgICAgICAgIDxUaXRsZUJsb2NrIHRpdGxlPXtwcm9wcy50aXRsZX0gZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9uID8gcHJvcHMuZGVzY3JpcHRpb24gOiAnJ30gcGF0aD17cHJvcHMucGF0aH0gaHJlZj17cHJvcHMuaHJlZn0gdHlwZT17cHJvcHMudHlwZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkU2VsbExlYXNlSW5kZXg7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IE5hdmlnYXRlTmV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0JztcclxuaW1wb3J0IE5hdmlnYXRlQmVmb3JlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZUJlZm9yZSc7XHJcblxyXG5pbnRlcmZhY2UgSG90TG9jYXRpb25Qcm9wcyB7IH07XHJcbmludGVyZmFjZSBMb2NhdGlvblByb3BzIHtcclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgcGF0aDogc3RyaW5nXHJcbn1cclxuXHJcbi8vSW1wb3J0IER5bmFtaWNcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuLy9JbXBvcnQgd2l0aG91dCBTU1IgU2xpZGVyXHJcbmNvbnN0IFNsaWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1zbGljaycpLCB7XHJcbiAgc3NyOiBmYWxzZVxyXG59KTtcclxuXHJcbmNvbnN0IEhvdExvY2F0aW9uOiBGdW5jdGlvbkNvbXBvbmVudDxIb3RMb2NhdGlvblByb3BzPiA9IChwcm9wczogSG90TG9jYXRpb25Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IE5leHRBcnJvdyA9IChwcm9wczogeyBjbGFzc05hbWU6IGFueTsgb25DbGljazogYW55OyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXsnaG90LWxvY2F0aW9uc19fbmV4dF9fYXJyb3cnfVxyXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIDxOYXZpZ2F0ZU5leHQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgUHJldkFycm93ID0gKHByb3BzOiB7IGNsYXNzTmFtZTogYW55OyBvbkNsaWNrOiBhbnk7IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9eydob3QtbG9jYXRpb25zX19wcmV2X19hcnJvdyd9XHJcbiAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgPE5hdmlnYXRlQmVmb3JlIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBsZXQgc2V0dGluZ3MgPSB7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgaW5pdGlhbFNsaWRlOiAwLFxyXG4gICAgbmV4dEFycm93OiA8TmV4dEFycm93IGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e1tdfSAvPixcclxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXtbXX0gLz4sXHJcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTI5MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA4NzUsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDU5OSxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG4gIGxldCBkYXRhTG9jYXRpb24gPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkjDoCBO4buZaVwiLFxyXG4gICAgICBpbWFnZTogXCJodHRwczovL2luaG9tZS52bi9obV9jb250ZW50L3VwbG9hZHMvdGluLXR1Yy80L3RoaWV0LWtlLW5vaS10aGF0LXBob25nLWtoYWNoLWJhbmctZ28taGllbi1kYWktZGVwL3RoaWV0LWtlLW5vaS10aGF0LXBob25nLWtoYWNoLWRvbi1naWFuLW1hLWRlcC00LmpwZ1wiLFxyXG4gICAgICBwYXRoOiBcIi9uaGEtZGF0LWJhbi9uaGEtZGF0LWJhbi10YWktaGEtbm9pXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkjhu5MgQ2jDrSBNaW5oXCIsXHJcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vbm9pdGhhdG1hbmhoZS52bi9tZWRpYS8xNzUzMS9zYW5nLXRyb25nLWJvaS1waG9uZy1raGFjaC1ub2ktdGhhdC1nby10dS1uaGllbi1ub2ktdGhhdC1tYW5oLWhlLmpwZz93aWR0aD03MDAmaGVpZ2h0PTQyMi40NDE4NjA0NjUxMTYzXCIsXHJcbiAgICAgIHBhdGg6IFwiL25oYS1kYXQtYmFuL25oYS1kYXQtYmFuLXRhaS1oby1jaGktbWluaFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCLEkMOgIE7hurVuZ1wiLFxyXG4gICAgICBpbWFnZTogXCJodHRwczovL2tpZW50cnVjcm9tYW4uY29tLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy9waG9uZy1raGFjaC1iYW5nLWdvLWNhby1jYXAtMi5qcGdcIixcclxuICAgICAgcGF0aDogXCIvbmhhLWRhdC1iYW4vbmhhLWRhdC1iYW4tdGFpLWRhLW5hbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTMOibSDEkOG7k25nXCIsXHJcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vbmhhYmVwaG9hbmdnaWEudm4vY29udGVudHMvcG9zdHMvMjM5MC5qcGdcIixcclxuICAgICAgcGF0aDogXCIvbmhhLWRhdC1iYW4vbmhhLWRhdC1iYW4tdGFpLWxhbS1kb25nXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob3QtbG9jYXRpb25zXCI+XHJcbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBkYXRhTG9jYXRpb24ubWFwKChpbWFnZU9iamVjdDogTG9jYXRpb25Qcm9wcywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17XCJsb2NhdGlvbl9cIiArIFN0cmluZyhpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL25oYS1kYXQtYmFuL1tzbHVnXScgYXM9e2ltYWdlT2JqZWN0LnBhdGh9PjxhPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdC1sb2NhdGlvbnNfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJob3QtbG9jYXRpb25zX19pdGVtX190aXRsZVwiPntpbWFnZU9iamVjdC50aXRsZX08L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3QtbG9jYXRpb25zX19pdGVtX19pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3QtbG9jYXRpb25zX19pdGVtX19pbWFnZV9fYmFja2dyb3VuZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17U3RyaW5nKGltYWdlT2JqZWN0LmltYWdlKX0gYWx0PXtcIlTDrG0ga2nhur9tIG5ow6AgxJDhuqV0IHThuqFpIFwiICsgaW1hZ2VPYmplY3QudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvdExvY2F0aW9uO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICAgIElucHV0QmFzZSxcclxuICAgIEljb25CdXR0b24sXHJcbiAgICBCdXR0b24sXHJcbiAgICBHcmlkLFxyXG4gICAgTGlzdCxcclxuICAgIExpc3RJdGVtLFxyXG4gICAgTGlzdEl0ZW1JY29uLFxyXG4gICAgTGlzdEl0ZW1UZXh0LFxyXG4gICAgRGl2aWRlcixcclxuICAgIFBvcG92ZXIsXHJcbiAgICBUeXBvZ3JhcGh5LFxyXG4gICAgSGlkZGVuLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5pbXBvcnQgQXJyb3dEcm9wVXAgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcFVwJztcclxuaW1wb3J0IEFycm93RHJvcERvd24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcERvd24nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEVjb0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FY29cIjtcclxuaW1wb3J0IFZpZXdMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld0xpc3RcIjtcclxuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xyXG5pbXBvcnQgR2FtZXBhZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dhbWVwYWQnO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGlucHV0YmFzZToge1xyXG4gICAgICAgIHdpZHRoOiAnNTAwcHgnLFxyXG4gICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcclxuICAgIH0sXHJcbiAgICBzZWFyY2hIb21lOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICc0MDBweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICAgICAgb3BhY2l0eTogJzEnLFxyXG4gICAgICAgIC8vIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vaTIud3AuY29tL2RvZ29xdW9jY3VvbmcuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA4L0RTQzA5NTQ1LmpwZz9maXQ9MzAwOCUyQzIwMDAmc3NsPTFcIiknXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoSG9tZUJvZHk6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB0b3A6IDEwMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgICB2aWV3U2VhcmNoOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzE5NzZkMicsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIHdpZHRoOiA2MCxcclxuICAgIH0sXHJcbiAgICBpY29uU2VhcmNoOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDI1LFxyXG4gICAgICAgIG1hcmdpblRvcDogOCxcclxuICAgIH0sXHJcbiAgICBpY29uQnV0dG9uOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzRweCAxNnB4JyxcclxuICAgICAgICBtYXJnaW5Ub3A6IDQsXHJcbiAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2UzZjJmZCcsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAnIzkwY2FmOScsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRleHRJdGVtOiB7XHJcbiAgICAgICAgY29sb3I6ICcjMTk3NmQyJyxcclxuICAgIH0sXHJcbiAgICBwb3BvdmVyOiB7XHJcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ2F1dG8nLCAvLyBub25lXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTZWFyY2hIb21lcGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBvbkNoYW5nZVdhcmRzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT0gXCJFbnRlclwiIHx8IGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgLy8gb25DbGlja1NlYXJjaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW1hZ2VCYWNrZ3JvdW5kID0gW1xyXG4gICAgICAgICdodHRwczovL2kyLndwLmNvbS9kb2dvcXVvY2N1b25nLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wOC9EU0MwOTU0NS5qcGc/Zml0PTMwMDglMkMyMDAwJnNzbD0xJyxcclxuICAgICAgICAnaHR0cHM6Ly93d3cubm9pdGhhdGhvYW5teS5jb20udm4vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9ub2ktdGhhdC1nby1waG9uZy1raGFjaC1kZXAuanBnJyxcclxuICAgICAgICAnaHR0cHM6Ly92YXRsaWV1eGF5ZHVuZy5vcmcudm4vVXBsb2FkLzQ4L05hbV8yMDE4L1RoYW5nXzEyL05nYXlfMTkvdmx4ZC5vcmdfbmd1eWVudGFjMi5qcGcnLFxyXG4gICAgICAgICdodHRwczovL3d3dy5ub2l0aGF0aG9hbm15LmNvbS52bi9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL25vaS10aGF0LWdvLXBob25nLWtoYWNoLWRlcC5qcGcnLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IFtcclxuICAgICAgICB7IHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIGhp4buHbiDEkeG6oWknLCBsaW5rOiAnL2JhZCcgfSxcclxuICAgICAgICB7IHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIGPhu5UgxJFp4buDbicsIGxpbms6ICcvYmFkJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdCw6BuIMSDbiA0IGdo4bq/JywgbGluazogJy9iYWQnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ0LDoG4gxINuIDYgZ2jhur8nLCBsaW5rOiAnL2JhZCcgfSxcclxuICAgICAgICB7IHRpdGxlOiAnQsOgbiDEg24gaGnhu4duIMSR4bqhaScsIGxpbms6ICcvYmFkJyB9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGhpc3RvcnkgPSBbXHJcbiAgICAgICAgeyB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pycsIGxpbms6ICcvaGlzdG9yeScgfSxcclxuICAgICAgICB7IHRpdGxlOiAnYsOgbiDEg24nLCBsaW5rOiAnL2hpc3RvcnknIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ3Thu6cgcXXhuqduIMOhbycsIGxpbms6ICcvaGlzdG9yeScgfSxcclxuICAgICAgICB7IHRpdGxlOiAndOG7pyBnacOgeScsIGxpbms6ICcvaGlzdG9yeScgfSxcclxuICAgICAgICB7IHRpdGxlOiAndOG7pyBnaOG6vyBuaMOgIGjDoG5nJywgbGluazogJy9oaXN0b3J5JyB9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IHJlbmRlclN1Z2dlc3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzU3MHB4JywgcG9pbnRlckV2ZW50czogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj0nbGVmdCcgdmFyaWFudD0nc3VidGl0bGUyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICc0cHggOHB4JywgY3Vyc29yOiAnZGVmYXVsdCcsIGRpc3BsYXk6ICdpbmxpbmUnLCBjb2xvcjogJyMxOTc2ZDInLCBmb250U2l6ZTogMTQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgVOG7qiBLSMOTQSBIT1RcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7IHBhZGRpbmc6IDQsIGN1cnNvcjogJ2RlZmF1bHQnLCBkaXNwbGF5OiAnaW5saW5lJywgZmxvYXQ6ICdyaWdodCcsIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnMubWFwKChpdGVtLCBjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e2NvdW50fSBzdHlsZT17eyBmb250U2l6ZTogMTQsIHBhZGRpbmc6ICc0cHggMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckhpc3RvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzU3MHB4JywgcG9pbnRlckV2ZW50czogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj0nbGVmdCcgdmFyaWFudD0nc3VidGl0bGUyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICc0cHggOHB4JywgY3Vyc29yOiAnZGVmYXVsdCcsIGRpc3BsYXk6ICdpbmxpbmUnLCBjb2xvcjogJyMxOTc2ZDInLCBmb250U2l6ZTogMTQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgTOG7ikNIIFPhu6wgVMOMTSBLSeG7gk1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249J3JpZ2h0JyB2YXJpYW50PSdzdWJ0aXRsZTInXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogNCwgY29sb3I6ICdyZWQnLCBjdXJzb3I6ICdkZWZhdWx0JywgZGlzcGxheTogJ2lubGluZScsIGZsb2F0OiAncmlnaHQnLCB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFjDs2FcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIHtoaXN0b3J5Lmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5Lm1hcCgoaXRlbSwgY291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtjb3VudH0gc3R5bGU9e3sgZm9udFNpemU6IDE0LCBwYWRkaW5nOiAnNHB4IDEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtjb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBLaMO0bmcgY8OzIGzhu4tjaCBz4butIHTDrG0ga2nhur9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUG9wb3Zlck9wZW4gPSAoZXZlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9J2NlbnRlcicgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEhvbWV9ID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSG9tZUJvZHl9IG9uQ2xpY2s9e2hhbmRsZVBvcG92ZXJPcGVufT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGJhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnVMOsbSBz4bqjbiBwaOG6qW0gbW9uZyBtdeG7kW4gLi4uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdUw6xtIHPhuqNuIHBo4bqpbSBtb25nIG114buRbiAuLi4nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e2UgPT4gb25DaGFuZ2VXYXJkcyhlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnZpZXdTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvblNlYXJjaH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvSWNvbkJ1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ2JvdHRvbScsIGhvcml6b250YWw6ICdsZWZ0JyB9fSAvLyBHaGltXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdsZWZ0JyB9fSAvLyBWaSB0cmkgaGllbiB0aGlcclxuICAgICAgICAgICAgICAgICAgICAvLyBvbk1vdXNlTGVhdmU9e2hhbmRsZVBvcG92ZXJDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJTdWdnZXN0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJIaXN0b3J5KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEhvbWVwYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtGdW5jdGlvbkNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW50ZXJmYWNlIFRpdGxlQmxvY2tQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0eXBlOiBcImgxXCIgfCBcImgyXCIgfCBcImgzXCI7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgcGF0aDogc3RyaW5nO1xyXG4gIGhyZWY/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgVGl0bGVCbG9jazogRnVuY3Rpb25Db21wb25lbnQ8VGl0bGVCbG9ja1Byb3BzPiA9IChwcm9wczogVGl0bGVCbG9ja1Byb3BzKSA9PiB7XHJcbiAgbGV0IGRvbVRpdGxlID0gKDw+PC8+KTtcclxuICBpZiAocHJvcHMudHlwZSA9PT0gXCJoMVwiKSB7XHJcbiAgICBkb21UaXRsZSA9ICg8aDEgY2xhc3NOYW1lPVwidGl0bGVfYmxvY2tfX2JpZ190aXRsZVwiPntwcm9wcy50aXRsZX08L2gxPik7XHJcbiAgfVxyXG4gIGlmIChwcm9wcy50eXBlID09PSBcImgyXCIpIHtcclxuICAgIGRvbVRpdGxlID0gKDxoMiBjbGFzc05hbWU9XCJ0aXRsZV9ibG9ja19fYmlnX3RpdGxlXCI+e3Byb3BzLnRpdGxlfTwvaDI+KTtcclxuICB9XHJcbiAgaWYgKHByb3BzLnR5cGUgPT09IFwiaDNcIikge1xyXG4gICAgZG9tVGl0bGUgPSAoPGgyIGNsYXNzTmFtZT1cInRpdGxlX2Jsb2NrX19iaWdfdGl0bGVcIj57cHJvcHMudGl0bGV9PC9oMj4pO1xyXG4gIH1cclxuICBsZXQgZG9tQmxvY2tUaXRsZSA9ICg8PjwvPik7XHJcbiAgaWYgKHByb3BzLnBhdGguaW5kZXhPZignaHR0cHM6Ly8nKSAhPT0gLTEpIHtcclxuICAgIGRvbUJsb2NrVGl0bGUgPSAoXHJcbiAgICAgIDxhIGhyZWY9e3Byb3BzLnBhdGh9PlxyXG4gICAgICAgIHtkb21UaXRsZX1cclxuICAgICAgPC9hPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKHByb3BzLnBhdGggPT09ICcnKSB7XHJcbiAgICBkb21CbG9ja1RpdGxlID0gZG9tVGl0bGU7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvbUJsb2NrVGl0bGUgPSAoXHJcbiAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLmhyZWY/cHJvcHMuaHJlZjpwcm9wcy5wYXRofSBhcz17U3RyaW5nKHByb3BzLnBhdGgpfT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIHtkb21UaXRsZX1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gaXRlbSB4cz17MTJ9IGRpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY2xhc3NOYW1lPVwidGl0bGVfYmxvY2tcIj5cclxuICAgICAge2RvbUJsb2NrVGl0bGV9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVfYmxvY2tfX2JpZ19kZXNjcmlwdGlvblwiPntwcm9wcy5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGVCbG9jaztcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBQaG9uZUlwaG9uZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lSXBob25lXCI7XHJcbmltcG9ydCBFbWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FbWFpbFwiO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7RnVuY3Rpb25Db21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBJRm9vdGVyUHJvcHMge1xyXG5cclxufVxyXG5jb25zdCBGb290ZXJQYWdlOiBGdW5jdGlvbkNvbXBvbmVudDxJRm9vdGVyUHJvcHM+ID0gKHByb3BzOiBJRm9vdGVyUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImZvb3RlclwiIGRpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlcIlxyXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezR9IHNtPXsxMn0gY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW0gYm9yZGVyX2JvdHRvbV9tb2JpbGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV90aXRsZVwiPlxyXG4gICAgICAgICAgICAgIEPDlE5HIFRZIEPhu5QgUEjhuqZOIE7hu5hJIFRI4bqkVCBET0RPXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl9pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzg0IDUxMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTcyLjI2OCA1MDEuNjdDMjYuOTcgMjkxLjAzMSAwIDI2OS40MTMgMCAxOTIgMCA4NS45NjEgODUuOTYxIDAgMTkyIDBzMTkyIDg1Ljk2MSAxOTIgMTkyYzAgNzcuNDEzLTI2Ljk3IDk5LjAzMS0xNzIuMjY4IDMwOS42Ny05LjUzNSAxMy43NzQtMjkuOTMgMTMuNzczLTM5LjQ2NCAwek0xOTIgMjcyYzQ0LjE4MyAwIDgwLTM1LjgxNyA4MC04MHMtMzUuODE3LTgwLTgwLTgwLTgwIDM1LjgxNy04MCA4MCAzNS44MTcgODAgODAgODB6XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl90ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl90ZXh0X3RpdGxlXCI+xJDhu4thIGNo4buJPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIFPhu5EgMTIgS2h14bqldCBEdXkgVGnhur9uLCBUaGFuaCBYdcOibiwgSMOgIE7hu5lpXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl9pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8UGhvbmVJcGhvbmUvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dF90aXRsZVwiPsSQaeG7h24gdGhv4bqhaTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAwMzc3IDUzNSA3MTdcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX2ljb25cIj5cclxuICAgICAgICAgICAgICAgIDxFbWFpbEljb24vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dF90aXRsZVwiPkUtbWFpbDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICBub2l0aGF0ZG9kb0BnbWFpbC5jb21cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fYnJhbmNoXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJnb3ZcIiBzcmM9XCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvYm9jb25ndGh1b25nLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICBhbHQ9XCLEkMOjIHRow7RuZyBiw6FvIHbhu5tpIELhu5kgQ8O0bmcgVGjGsMahbmdcIi8+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vd3d3LmRtY2EuY29tL1Byb3RlY3Rpb24vU3RhdHVzLmFzcHg/SUQ9NzgxNjYwNWQtZmJkMi00NWY4LWEzOTctZWVhYzQyNjQyYjc1JnJlZnVybD1odHRwczovL25oYWRhdG1vaS5uZXQvJ30gdGFyZ2V0PXsnX2JsYW5rJ30gcmVsPXsnbm9mb2xsb3cnfSA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9kbWNhLnBuZ1wiIGFsdD1cIkRNQ0FcIiBjbGFzc05hbWU9XCJkbWNhXCIvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs4fSBzbT17MTJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30geHM9ezZ9IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIEPDtG5nIHR5XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9hYm91dC11cyd9IGFzPXsnL2Fib3V0LXVzJ30+PGE+VuG7gSBC4bqldCDEkOG7mW5nIFPhuqNuIE3hu5tpPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly9oZWxwLm5oYWRhdG1vaS5uZXQvdHV5ZW4tZHVuZyd9IHJlbD17J25vZm9sbG93J30+VHV54buDbiBk4bulbmc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vaGVscC5uaGFkYXRtb2kubmV0L2xpZW4taGUvdGhvbmctdGluLWxpZW4taGUnfSByZWw9eydub2ZvbGxvdyd9PlRow7RuZyB0aW4gbGnDqm4gaOG7hzwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3NpdGVtYXAnfSBhcz17Jy9zaXRlbWFwJ30+PGE+U2l0ZW1hcDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30geHM9ezZ9IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIMSQaeG7gXUga2hv4bqjblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL2hlbHAubmhhZGF0bW9pLm5ldC9kaWV1LWtob2FuL3F1eS1jaGUtaG9hdC1kb25nJ30gcmVsPXsnbm9mb2xsb3cnfT5RdXkgY2jhur8gaG/huqF0IMSR4buZbmc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vaGVscC5uaGFkYXRtb2kubmV0L2RpZXUta2hvYW4vY2hpbmgtc2FjaC1iYW8tbWF0J30gcmVsPXsnbm9mb2xsb3cnfT5DaMOtbmggc8OhY2ggYuG6o28gbeG6rXQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vaGVscC5uaGFkYXRtb2kubmV0L2RpZXUta2hvYW4vY2hpbmgtc2FjaC1jb29raWUnfSByZWw9eydub2ZvbGxvdyd9PkNow61uaCBzw6FjaCBDb29raWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vaGVscC5uaGFkYXRtb2kubmV0L2RpZXUta2hvYW4vZGlldS1raG9hbi1zdS1kdW5nJ30gcmVsPXsnbm9mb2xsb3cnfT7EkGnhu4F1IGtob+G6o24gc+G7rSBk4bulbmc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30geHM9ezZ9IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIFRow7RuZyB0aW5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly9uaGFkYXRtb2kubmV0L3Rpbi10dWMvdGluLXR1Yyd9PlRpbiB04bupYyB0aOG7iyB0csaw4budbmc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vbmhhZGF0bW9pLm5ldC90aW4tdHVjL2Jsb2cnfT5Cw6FvIGPDoW8gJiBQaMOibiB0w61jaDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly9uaGFkYXRtb2kubmV0L3Rpbi10dWMva2llbi10aHVjLW1vaS1naW9pJ30+S2nhur9uIHRo4bupYyBjaG8gbcO0aSBnaeG7m2k8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vaGVscC5uaGFkYXRtb2kubmV0L2h1b25nLWRhbid9IHJlbD17J25vZm9sbG93J30+SMaw4bubbmcgZOG6q24gc+G7rSBk4bulbmc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30geHM9ezZ9IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIE3huqFuZyB4w6MgaOG7mWlcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL25oYWRhdG1vaS5uZXQvJ30gcmVsPXsnbm9mb2xsb3cnfSB0YXJnZXQ9eydfYmxhbmsnfT5GYWNlYm9vazwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ0N2bE9EN3ZUUEplWVJZOElySU5ndVEnfSByZWw9eydub2ZvbGxvdyd9IHRhcmdldD17J19ibGFuayd9PllvdXR1YmU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vdHdpdHRlci5jb20vbmhhZGF0bW9pJ30gcmVsPXsnbm9mb2xsb3cnfSB0YXJnZXQ9eydfYmxhbmsnfT5Ud2l0dGVyPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbmhhZGF0bW9pLyd9IHJlbD17J25vZm9sbG93J30gdGFyZ2V0PXsnX2JsYW5rJ30+TGlua2VkSW48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfSBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9fYXBwc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9fYXBwc190aXRsZVwiPlBoxrDGoW5nIHRo4bupYyB0aGFuaCB0b8OhbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9fYXBwc19wYXltZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L3Zpc2EucG5nXCIgYWx0PVwiVmlzYVwiLz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvbWFzdGVyY2FyZC5wbmdcIiBhbHQ9XCJNYXN0ZXJjYXJkXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9hdG0ucG5nXCIgYWx0PVwiQVRNXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0gY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2FwcHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2FwcHNfdGl0bGVcIj7hu6huZyBk4bulbmcgZGkgxJHhu5luZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9fYXBwc19wYXltZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibm9fYm9yZGVyXCIgc3JjPVwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L2FwcGxlLXN0b3JlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXBwbGUgU3RvcmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibm9fYm9yZGVyXCIgc3JjPVwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L2dvb2dsZS1wbGF5LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiR29vZ2xlIFBsYXlcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyUGFnZVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWRMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0JztcclxuaW1wb3J0IEdyaWRMaXN0VGlsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGUnO1xyXG5pbXBvcnQgR3JpZExpc3RUaWxlQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZUJhcic7XHJcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXInO1xyXG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luZm8nO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlcyc7XHJcbmltcG9ydCB7IEkxOG4gfSBmcm9tICdyZWFjdC1yZWR1eC1pMThuJztcclxuaW1wb3J0IHtcclxuICBJY29uQnV0dG9uLFxyXG4gIEljb24sXHJcbiAgVG9vbHRpcCxcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBHcmlkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgQXBwQmFyLFxyXG4gIFRvb2xiYXIsXHJcbiAgSGlkZGVuLFxyXG4gIFBvcG92ZXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgU3RhckJvcmRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IHsgdGl0bGVzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2luZGV4JztcclxuaW1wb3J0IEdhbWVwYWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HYW1lcGFkJztcclxuaW1wb3J0IE1vZGFsTG9naW4gZnJvbSAnLi4vTG9naW4vTW9kYWwnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgQ2xpY2tBd2F5TGlzdGVuZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCI7XHJcbmltcG9ydCBHcm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Hcm93XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IFBvcHBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IE1lbnVMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdFBvcG92ZXI6IHtcclxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbWFyZ2luVG9wOiAxMCxcclxuICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlM2YyZmQnLFxyXG4gICAgcG9pbnRlckV2ZW50czogJ2F1dG8nLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTBjYWY5JyxcclxuICAgIH1cclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lJyxcclxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgICBwYWRkaW5nOiAnMCAxMnB4JyxcclxuICAgIC8vIGJvcmRlckxlZnQ6ICcycHggc29saWQgd2hpdGUnLFxyXG4gIH0sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICBoZWlnaHQ6IDQwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMxOTc2ZDInXHJcbiAgfSxcclxuICBkaXZpZGVyOiB7XHJcbiAgICBoZWlnaHQ6IDI4LFxyXG4gICAgbWFyZ2luOiA0LFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lJyxcclxuICB9LFxyXG4gIHRleHRJdGVtOiB7XHJcbiAgICBjb2xvcjogJyMxOTc2ZDInLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAyMCxcclxuICB9LFxyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgekluZGV4OiA5OTk5OTk4ODg4ODg4ODg4OCxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKVxyXG4gIH1cclxufSkpO1xyXG5cclxuXHJcbmNvbnN0IEFjdGlvbnMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2NvdW50TWVudSwgc2V0Q291bnRNZW51XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGFuY2hvclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRPcGVuTWVudShwcmV2T3BlbiA9PiAhcHJldk9wZW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gZXZlbnQgPT4ge1xyXG4gICAgaWYgKGFuY2hvclJlZi5jdXJyZW50ICYmIGFuY2hvclJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0T3Blbk1lbnUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUxpc3RLZXlEb3duKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIlRhYlwiKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNldE9wZW5NZW51KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHJldHVybiBmb2N1cyB0byB0aGUgYnV0dG9uIHdoZW4gd2UgdHJhbnNpdGlvbmVkIGZyb20gIW9wZW4gLT4gb3BlblxyXG4gIGNvbnN0IHByZXZPcGVuID0gUmVhY3QudXNlUmVmKG9wZW5NZW51KTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByZXZPcGVuLmN1cnJlbnQgPT09IHRydWUgJiYgb3Blbk1lbnUgPT09IGZhbHNlKSB7XHJcbiAgICAgIGFuY2hvclJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBwcmV2T3Blbi5jdXJyZW50ID0gb3Blbk1lbnU7XHJcbiAgfSwgW29wZW5NZW51XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0gYWxpZ25JdGVtcz0nY2VudGVyJyBqdXN0aWZ5PSdjZW50ZXInIGRpcmVjdGlvbj0ncm93JyA+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPSdpbmhlcml0J1xyXG4gICAgICAgICAgYXJpYS1vd25zPXtvcGVuTWVudSA/ICdtb3VzZS1vdmVyLXBvcG92ZXInIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRXZWlnaHQ6IDUwMCwgcGFkZGluZzogJzAgMjBweCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R2FtZXBhZEljb24gc3R5bGU9e3sgcGFkZGluZzogJzAgNHB4JyB9fSAvPiBO4buZaSBUaOG6pXQgRG9kb1xyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezh9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgcmVmPXthbmNob3JSZWZ9XHJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e29wZW5NZW51ID8gXCJtZW51LWxpc3QtZ3Jvd1wiIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlVG9nZ2xlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAvLyBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogaW5kZXhPcGVuID09PSBpbmRleCA/ICd1bmRlcmxpbmUgJyA6ICdub25lJyB9fVxyXG4gICAgICAgICAgLy8gb25Nb3VzZUxlYXZlPXtwb3BvdmVyQ2xvc2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxQb3BwZXJcclxuICAgICAgICAgICAgb3Blbj17b3Blbk1lbnV9XHJcbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JSZWYuY3VycmVudH1cclxuICAgICAgICAgICAgcm9sZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uXHJcbiAgICAgICAgICAgIGRpc2FibGVQb3J0YWxcclxuICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiA5OTk5IH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEdyb3dcclxuICAgICAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46IHBsYWNlbWVudCA9PT0gXCJib3R0b21cIiA/IFwiY2VudGVyIHRvcFwiIDogXCJjZW50ZXIgYm90dG9tXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzSXRlbT17b3Blbk1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1lbnUtbGlzdC1ncm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlTGlzdEtleURvd259XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Qcm9maWxlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TXkgYWNjb3VudDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PkxvZ291dDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cclxuICAgICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Qb3BwZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgPE1vZGFsTG9naW4gLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbnM7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSBcIi4uLy4uL21vZHVsZXMvdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IGdvb2dsZVNlYXJjaENvbnNvbGUsIGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgTG9nbyA9IHJlcXVpcmUoXCIuL2xvZ28ucG5nXCIpO1xyXG5cclxuaW50ZXJmYWNlIExheW91dFBhZ2VQcm9wcyB7XHJcbiAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcsXHJcbiAgaW1hZ2U/OiBzdHJpbmcsXHJcbiAgY2Fub25pY2FsOiBzdHJpbmcsXHJcbiAgcGF0aDogc3RyaW5nLFxyXG4gIGNoaWxkcmVuPzogYW55LFxyXG4gIHVzZXI/OiB7XHJcbiAgICBlbWFpbDogc3RyaW5nLFxyXG4gICAgX2lkOiBzdHJpbmcsXHJcbiAgICBmaXJzdF9uYW1lOiBzdHJpbmcsXHJcbiAgICBsYXN0X25hbWU6IHN0cmluZyxcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBhdmF0YXI6IHN0cmluZ1xyXG4gIH0sXHJcbiAgdXBkYXRlTW9kYWw/OiAoZGF0YTogYm9vbGVhbikgPT4gdm9pZDtcclxuICBzdGF0dXNNb2RhbD86IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgTGF5b3V0UGFnZTogRnVuY3Rpb25Db21wb25lbnQ8TGF5b3V0UGFnZVByb3BzPiA9IChwcm9wczogTGF5b3V0UGFnZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3N0YXR1c01vZGFsLCBzZXRNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdXBkYXRlTW9kYWwgPSAoZGF0YTogYm9vbGVhbikgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBwcm9wcy51cGRhdGVNb2RhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBwcm9wcy51cGRhdGVNb2RhbChkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE1vZGFsKGRhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgW2RhdGFDb21wYXJlTG9jYWwsIHNldERhdGFDb21wYXJlTG9jYWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5KSAmJiAhVmFsaWRhdG9yLmlzQmxhbmsobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSkpKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0RGF0YUNvbXBhcmVMb2NhbChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkpIGFzIHN0cmluZykpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICBsZXQgc2NoZW1hT2JqZWN0ID0gJ3tcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsIFwiQHR5cGVcIjogXCJMb2NhbEJ1c2luZXNzXCIsIFwibmFtZVwiOiBcIkLhuqV0IMSQ4buZbmcgU+G6o24gTuG7mWkgdGjhuqV0IERvZG9cIiwgXCJpbWFnZVwiOiBcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8xMjMwMTIwMTEzODg3NTMxMDA4L0JQSDc1YlcwXzQwMHg0MDAuanBnXCIsIFwiYWRkaXRpb25hbFR5cGVcIjpbXCJodHRwczovL3ZpLndpa2lwZWRpYS5vcmcvd2lraS9CJUUxJUJBJUE1dF8lQzQlOTElRTElQkIlOTluZ19zJUUxJUJBJUEzblwiLFwiaHR0cHM6Ly92aS53aWtpcGVkaWEub3JnL3dpa2kvTSVDMyVCNGlfZ2klRTElQkIlOUJpX2IlRTElQkElQTV0XyVDNCU5MSVFMSVCQiU5OW5nX3MlRTElQkElQTNuXCIsXCJodHRwczovL3ZpLndpa2lwZWRpYS5vcmcvd2lraS9OZyVDNiVCMCVFMSVCQiU5RGlfbSVDMyVCNGlfZ2klRTElQkIlOUJpXCJdLCBcInBheW1lbnRBY2NlcHRlZFwiOlwiQ2FzaCwgVmlzYSwgTWFzdGVyY2FyZCwgQW1lcmljYW4gRXhwcmVzcywgRGViaXQsIFBheVBhbCwgQXBwbGUgUGF5XCIsIFwibWFpbkVudGl0eU9mUGFnZVwiOlwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzP2NpZD02MjU1MDU0OTM4OTY5NjIwNDc1XCIsIFwiaGFzbWFwXCI6XCJodHRwczovL3NlYXJjaC5nb29nbGUuY29tL2xvY2FsL3dyaXRlcmV2aWV3P3BsYWNlaWQ9Q2hJSi1VSTZNaDVUTkRFUi16X1doMU5yemxZXCIsIFwiZGVzY3JpcHRpb25cIjpcIk7hu5lpIHRo4bqldCBEb2RvIMSRw7NuIMSR4bqndSB4dSBoxrDhu5tuZyBi4bqldCDEkeG7mW5nIHPhuqNuIDQuMCB04bqhaSBWaeG7h3QgTmFtLCB0w61jaCBo4bujcCB0csOtIHR14buHIG5ow6JuIHThuqFvIMSR4buDIHjhu60gbMO9IGPDoWMgZOG7ryBsaeG7h3UsIHBow6JuIHTDrWNoIG5odSBj4bqndSBj4bunYSBj4bqjIG5nxrDhu51pIG11YSBs4bqrbiBuZ8aw4budaSBiw6FuXCIsIFwiQGlkXCI6IFwiaHR0cHM6Ly9uaGFkYXRtb2kubmV0L1wiLCBcInVybFwiOiBcImh0dHBzOi8vbmhhZGF0bW9pLm5ldC9cIiwgXCJ0ZWxlcGhvbmVcIjogXCIwMzc3IDUzNSA3MTdcIiwgXCJwcmljZVJhbmdlXCI6IFwiMTAwMCAkXCIsIFwiYWRkcmVzc1wiOiB7IFwiQHR5cGVcIjogXCJQb3N0YWxBZGRyZXNzXCIsIFwic3RyZWV0QWRkcmVzc1wiOiBcIlPhu5EgMzQ4IFThu5EgSOG7r3UsIHBoxrDhu51uZyBMYSBLaMOqLCBxdeG6rW4gSMOgIMSQw7RuZ1wiLCBcImFkZHJlc3NMb2NhbGl0eVwiOiBcIkjDoCBO4buZaVwiLCBcInBvc3RhbENvZGVcIjogXCIxMDAwMDBcIiwgXCJhZGRyZXNzQ291bnRyeVwiOiBcIlZOXCJ9LCBcImdlb1wiOiB7IFwiQHR5cGVcIjogXCJHZW9Db29yZGluYXRlc1wiLCBcImxhdGl0dWRlXCI6IDIwLjk3MDk0OTYsIFwibG9uZ2l0dWRlXCI6IDEwNS43NTMxNjE3IH0sIFwib3BlbmluZ0hvdXJzU3BlY2lmaWNhdGlvblwiOiB7IFwiQHR5cGVcIjogXCJPcGVuaW5nSG91cnNTcGVjaWZpY2F0aW9uXCIsXCJkYXlPZldlZWtcIjogWyBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCIsIFwiU3VuZGF5XCJdLCBcIm9wZW5zXCI6IFwiMDA6MDBcIiwgXCJjbG9zZXNcIjogXCIyMzo1OVwiIH0sIFwic2FtZUFzXCI6IFtcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNDdmxPRDd2VFBKZVlSWThJcklOZ3VRXCIsXCJodHRwczovL2Jkc25oYWRhdG1vaS5ibG9nc3BvdC5jb21cIiwgXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbmhhZGF0bW9pLm5ldFwiLCBcImh0dHBzOi8vYmRzbmhhZGF0bW9pLmJsb2dzcG90LmNvbVwiLCBcImh0dHBzOi8vdmkuZ3JhdmF0YXIuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vYmRzbmhhZGF0bW9pLnR1bWJsci5jb21cIiwgXCJodHRwczovL2Jkc25oYWRhdG1vaS53ZWVibHkuY29tXCIsIFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5yZWRkaXQuY29tL3VzZXIvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuZGlpZ28uY29tL3Byb2ZpbGUvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuYXJ0ZmlyZS5jb20vZXh0L3Blb3BsZS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5zbWFzaHdvcmRzLmNvbS9wcm9maWxlL3ZpZXcvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cDovL3BsYXkuZm0vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cubGFzdC5mbS91c2VyL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LnN0cmF2YS5jb20vYXRobGV0ZXMvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LnRyaXBhZHZpc29yLmNvbS52bi9Qcm9maWxlL2Jkc25oYWRhdG1vaVwiLCBcImh0dHA6Ly9iaXQubHkvMnVhWlBMbVwiLCBcImh0dHBzOi8vZ2V0cG9ja2V0LmNvbS9AYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cucGludGVyZXN0LmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuZmxpY2tyLmNvbS9wZW9wbGUvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9hYm91dC5tZS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5pbnN0YXBhcGVyLmNvbS9wL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LmJlaGFuY2UubmV0L2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vbXlzcGFjZS5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuZ29vZHJlYWRzLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL2RyaWJiYmxlLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5kZXZpYW50YXJ0LmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5wbHVyay5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cDovL3d3dy5mb2xrZC5jb20vdXNlci9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy50ZWQuY29tL3Byb2ZpbGVzLzE5MDI1OTc3XCIsIFwiaHR0cHM6Ly9raW5qYS5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9lbGxvLmNvL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vY291Yi5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9taXguY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHA6Ly93d3cuYXV0aG9yc3RyZWFtLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3NvdW5kY2xvdWQuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vbWVkaXVtLmNvbS9AYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9jb2RlcGVuLmlvL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LmV2ZXJub3RlLmNvbS9wdWIvbmRtaDI2OS90aW50dWNcIiwgXCJodHRwczovL2Rpc3F1cy5jb20vYnkvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuc2Nvb3AuaXQvdS9iLXQtbmctcy1uLW5oYS10LW0taVwiLCBcImh0dHBzOi8vd3d3LnZpbmdsZS5uZXQvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cucXVvcmEuY29tL3Byb2ZpbGUvQmF0LURvbmctU2FuLU5oYS1EYXQtTW9pXCIsIFwiaHR0cHM6Ly9iZHNuaGFkYXRtb2kubGl2ZWpvdXJuYWwuY29tXCIsIFwiaHR0cHM6Ly9hbmdlbC5jby9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5wcm9kdWN0aHVudC5jb20vQGJkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vc3BlYWtlcmRlY2suY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3Lndpa2lob3cuY29tL1VzZXI6QmRzbmhhZGF0bW9pXCIsIFwiaHR0cDovL2Jkc25oYWRhdG1vaS5icmFuZHlvdXJzZWxmLmNvbVwiXX0nO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3Byb3BzLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17cHJvcHMuY2Fub25pY2FsfSAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXtMb2dvfSAvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNDAwaSw1MDAsNzAwLDkwMCZkaXNwbGF5PXN3YXAmc3Vic2V0PXZpZXRuYW1lc2VcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiIGNvbnRlbnQ9e2dvb2dsZVNlYXJjaENvbnNvbGV9IC8+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIVZhbGlkYXRvci5pc0JsYW5rKHByb3BzLmRlc2NyaXB0aW9uKSAmJlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cHJvcHMudGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIHByb3BlcnR5PVwiZmI6YXBwX2lkXCIgY29udGVudD1cIjkzNzIzNDM2NjMzNTUwNFwiIC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJmYjphZG1pbnNcIiBjb250ZW50PVwiMTAwMDA0MjQ0NDc0MDEzXCIgLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJO4buZaSB0aOG6pXQgRG9kb1wiIC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtwcm9wcy5jYW5vbmljYWx9IC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLmltYWdlfSAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQG5oYWRhdG1vaVwiIC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAbmhhZGF0bW9pXCIgLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3Byb3BzLnRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtwcm9wcy5pbWFnZX0gLz5cclxuICAgICAgICA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzY2hlbWFPYmplY3QgfX0gPlxyXG4gICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0UGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjBBQUFBZENBWUFBQUJXazJjUEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFEUlNVUkJWRWhMN1pNeENzSkFFRVc5aHFmVXlsUGtCSG9COVFLQ2xwWjI0Z20wVVlTQXBkWEtEMWt5N254alBoaE1zUTlldFZrZW01MGRoVCtRbzcwaVJZdnROUlM3bTFORmlvNW5SNnBLamxKWUVLb01QN284bEM0NFdWM3ExZTY0S0hzV2kvMjlYbjBQMitEbTlIRDdJTU5GN1NtczAzVVRRTmdHMlIrSU1qcEhvUTFIMm9LUUlVVWhJcEZ6K2FUZldCbFNsQTFOcnlkTjd6QzlZN1lITWx5MG10N0UrWWZwdGVGcWVzbGVob3Uyd1U3RWh1c2JValFOUmxWeWxNS0NVR1g0VWZZa29Jb1UvUlU1MmlNaHZBQ1lmUWtnV3I1ZHJBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgRGlhbG9nLFxyXG4gIEljb25CdXR0b24sXHJcbiAgR3JpZCxcclxuICBQYXBlcixcclxuICBUYWJzLFxyXG4gIFRhYixcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCB7IGdvb2dsZUxvZ2luIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBmYWNlYm9va0xvZ2luIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyB6YWxvTG9naW4gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBJbWFnZUxvZ2luIGZyb20gJy4uLy4uL3B1YmxpYy9JbWFnZS9sb2dpbi5wbmcnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGxvbmdJbjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogNjAwLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIC8vIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9sb2dpbi1iYWNrZ3JvdW5kLnN2Z1wiKScsXHJcbiAgICAvLyBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSBjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZzogJzAgMjBweCcsXHJcbiAgfSxcclxuICBsb2dJbkNsb3NlOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcwcHgnLFxyXG4gICAgcmlnaHQ6ICcwcHgnLFxyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICB3aWR0aDogJzQwcHghaW1wb3J0YW50JyxcclxuICAgIGhlaWdodDogJzQwcHghaW1wb3J0YW50JyxcclxuICB9LFxyXG4gIG1vZGFsOiB7XHJcbiAgICAvLyBtYXhXaWR0aDogJycsXHJcbiAgICBoZWlnaHQ6IDYwMCxcclxuICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZmxvYXQ6ICdsZWZ0JyxcclxuICAgIG1hcmdpbjogJzcwcHggMCA4cHggMCcsXHJcbiAgICAvLyBmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XHJcbiAgICBmb250U2l6ZTogJzMwcHgnLFxyXG4gICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgY29sb3I6ICcjMTk3NmQyJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIGZsb2F0OiAnbGVmdCcsXHJcbiAgICAvLyBmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XHJcbiAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgY29sb3I6ICcjMDAwMDAwOGEnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuXHJcbmNvbnN0IHRhYnMgPSBbXHJcbiAgeyB2YWx1ZTogMSwgbGFiZWw6ICfEkMSDbmcgTmjhuq1wJyB9LFxyXG4gIHsgdmFsdWU6IDIsIGxhYmVsOiAnVOG6oW8gVMOgaSBLaG/huqNuJyB9LFxyXG5dO1xyXG5cclxuXHJcbmNvbnN0IExvZ2luTW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbdmFsdWVUYWIsIHNldFZhbHVlVGFiXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG5cclxuICBjb25zdCByZW5kZXJHb29nbGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luX19tb2RhbF9fYmxvY2tfX2dvb2dsZVwiIGhyZWY9e2dvb2dsZUxvZ2lufT5cclxuICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTMzLjUgNTQ0LjNcIj5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTUzMy41LDI3OC40YzAtMTguNS0xLjUtMzcuMS00LjctNTUuM0gyNzIuMXYxMDQuOGgxNDdjLTYuMSwzMy44LTI1LjcsNjMuNy01NC40LDgyLjd2NjhoODcuNyBDNTAzLjksNDMxLjIsNTMzLjUsMzYxLjIsNTMzLjUsMjc4LjR6XCIgLz5cclxuICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QxXCIgZD1cIk0yNzIuMSw1NDQuM2M3My40LDAsMTM1LjMtMjQuMSwxODAuNC02NS43bC04Ny43LTY4Yy0yNC40LDE2LjYtNTUuOSwyNi05Mi42LDI2Yy03MSwwLTEzMS4yLTQ3LjktMTUyLjgtMTEyLjMgSDI4Ljl2NzAuMUM3NS4xLDQ4Ni4zLDE2OS4yLDU0NC4zLDI3Mi4xLDU0NC4zelwiIC8+XHJcbiAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MlwiIGQ9XCJNMTE5LjMsMzI0LjNjLTExLjQtMzMuOC0xMS40LTcwLjQsMC0xMDQuMlYxNTBIMjguOWMtMzguNiw3Ni45LTM4LjYsMTY3LjUsMCwyNDQuNEwxMTkuMywzMjQuM3pcIiAvPlxyXG4gICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDNcIiBkPVwiTTI3Mi4xLDEwNy43YzM4LjgtMC42LDc2LjMsMTQsMTA0LjQsNDAuOGwwLDBsNzcuNy03Ny43QzQwNSwyNC42LDMzOS43LTAuOCwyNzIuMSwwQzE2OS4yLDAsNzUuMSw1OCwyOC45LDE1MFx0bDkwLjQsNzAuMUMxNDAuOCwxNTUuNiwyMDEuMSwxMDcuNywyNzIuMSwxMDcuN3pcIiAvPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImdvb2dsZVwiPsSQxIJORyBOSOG6rFAgQuG6sE5HIEdPT0dMRTwvcD5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyWmFsbyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibG9naW5fX21vZGFsX19ibG9ja19femFsb1wiIGhyZWY9e3phbG9Mb2dpbn0+XHJcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDQ2MC4xIDQzNi42XCI+XHJcbiAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTgyLjYgMzgwLjljLTEuOC0uOC0zLjEtMS43LTEtMy41IDEuMy0xIDIuNy0xLjkgNC4xLTIuOCAxMy4xLTguNSAyNS40LTE3LjggMzMuNS0zMS41IDYuOC0xMS40IDUuNy0xOC4xLTIuOC0yNi41QzY5IDI2OS4yIDQ4LjIgMjEyLjUgNTguNiAxNDUuNSA2NC41IDEwNy43IDgxLjggNzUgMTA3IDQ2LjZjMTUuMi0xNy4yIDMzLjMtMzEuMSA1My4xLTQyLjcgMS4yLS43IDIuOS0uOSAzLjEtMi43LS40LTEtMS4xLS43LTEuNy0uNy0zMy43IDAtNjcuNC0uNy0xMDEgLjJDMjguMyAxLjcuNSAyNi42LjYgNjIuM2MuMiAxMDQuMyAwIDIwOC42IDAgMzEzIDAgMzIuNCAyNC43IDU5LjUgNTcgNjAuNyAyNy4zIDEuMSA1NC42LjIgODIgLjEgMiAuMSA0IC4yIDYgLjJIMjkwYzM2IDAgNzIgLjIgMTA4IDAgMzMuNCAwIDYwLjUtMjcgNjAuNS02MC4zdi0uNi01OC41YzAtMS40LjUtMi45LS40LTQuNC0xLjguMS0yLjUgMS42LTMuNSAyLjYtMTkuNCAxOS41LTQyLjMgMzUuMi02Ny40IDQ2LjMtNjEuNSAyNy4xLTEyNC4xIDI5LTE4Ny42IDcuMi01LjUtMi0xMS41LTIuMi0xNy4yLS44LTguNCAyLjEtMTYuNyA0LjYtMjUgNy4xLTI0LjQgNy42LTQ5LjMgMTEtNzQuOCA2em03Mi41LTE2OC41YzEuNy0yLjIgMi42LTMuNSAzLjYtNC44IDEzLjEtMTYuNiAyNi4yLTMzLjIgMzkuMy00OS45IDMuOC00LjggNy42LTkuNyAxMC0xNS41IDIuOC02LjYtLjItMTIuOC03LTE1LjItMy0uOS02LjItMS4zLTkuNC0xLjEtMTcuOC0uMS0zNS43LS4xLTUzLjUgMC0yLjUgMC01IC4zLTcuNC45LTUuNiAxLjQtOSA3LjEtNy42IDEyLjggMSAzLjggNCA2LjggNy44IDcuNyAyLjQuNiA0LjkuOSA3LjQuOCAxMC44LjEgMjEuNyAwIDMyLjUuMSAxLjIgMCAyLjctLjggMy42IDEtLjkgMS4yLTEuOCAyLjQtMi43IDMuNS0xNS41IDE5LjYtMzAuOSAzOS4zLTQ2LjQgNTguOS0zLjggNC45LTUuOCAxMC4zLTMgMTYuM3M4LjUgNy4xIDE0LjMgNy41YzQuNi4zIDkuMy4xIDE0IC4xIDE2LjIgMCAzMi4zLjEgNDguNS0uMSA4LjYtLjEgMTMuMi01LjMgMTIuMy0xMy4zLS43LTYuMy01LTkuNi0xMy05LjctMTQuMS0uMS0yOC4yIDAtNDMuMyAwem0xMTYtNTIuNmMtMTIuNS0xMC45LTI2LjMtMTEuNi0zOS44LTMuNi0xNi40IDkuNi0yMi40IDI1LjMtMjAuNCA0My41IDEuOSAxNyA5LjMgMzAuOSAyNy4xIDM2LjYgMTEuMSAzLjYgMjEuNCAyLjMgMzAuNS01LjEgMi40LTEuOSAzLjEtMS41IDQuOC42IDMuMyA0LjIgOSA1LjggMTQgMy45IDUtMS41IDguMy02LjEgOC4zLTExLjMuMS0yMCAuMi00MCAwLTYwLS4xLTgtNy42LTEzLjEtMTUuNC0xMS41LTQuMy45LTYuNyAzLjgtOS4xIDYuOXptNjkuMyAzNy4xYy0uNCAyNSAyMC4zIDQzLjkgNDYuMyA0MS4zIDIzLjktMi40IDM5LjQtMjAuMyAzOC42LTQ1LjYtLjgtMjUtMTkuNC00Mi4xLTQ0LjktNDEuMy0yMy45LjctNDAuOCAxOS45LTQwIDQ1LjZ6bS04LjgtMTkuOWMwLTE1LjcuMS0zMS4zIDAtNDcgMC04LTUuMS0xMy0xMi43LTEyLjktNy40LjEtMTIuMyA1LjEtMTIuNCAxMi44LS4xIDQuNyAwIDkuMyAwIDE0djc5LjVjMCA2LjIgMy44IDExLjYgOC44IDEyLjkgNi45IDEuOSAxNC0yLjIgMTUuOC05LjEuMy0xLjIuNS0yLjQuNC0zLjcuMi0xNS41LjEtMzEgLjEtNDYuNXpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QxXCIgZD1cIk0xMzkuNSA0MzYuMmMtMjcuMyAwLTU0LjcuOS04Mi0uMS0zMi4zLTEuMy01Ny0yOC40LTU3LTYwLjcgMC0xMDQuMy4yLTIwOC42IDAtMzEzQy41IDI2LjcgMjguNCAxLjggNjAuNS45YzMzLjYtLjkgNjcuMy0uMiAxMDEtLjIuNiAwIDEuNC0uMyAxLjcuNy0uMiAxLjgtMiAyLTMuMSAyLjctMTkuOCAxMS42LTM3LjkgMjUuNS01My4xIDQyLjctMjUuMSAyOC40LTQyLjUgNjEtNDguNCA5OC45LTEwLjQgNjYuOSAxMC41IDEyMy43IDU3LjggMTcxLjEgOC40IDguNSA5LjUgMTUuMSAyLjggMjYuNS04LjEgMTMuNy0yMC40IDIzLTMzLjUgMzEuNS0xLjQuOC0yLjggMS44LTQuMiAyLjctMi4xIDEuOC0uOCAyLjcgMSAzLjUuNC45LjkgMS43IDEuNSAyLjUgMTEuNSAxMC4yIDIyLjQgMjEuMSAzMy43IDMxLjUgNS4zIDQuOSAxMC42IDEwIDE1LjcgMTUuMSAyLjEgMS45IDUuNiAyLjUgNi4xIDYuMXpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QyXCIgZD1cIk0xMzkuNSA0MzYuMmMtLjUtMy41LTQtNC4xLTYuMS02LjItNS4xLTUuMi0xMC40LTEwLjItMTUuNy0xNS4xLTExLjMtMTAuNC0yMi4yLTIxLjMtMzMuNy0zMS41LS42LS44LTEuMS0xLjYtMS41LTIuNSAyNS41IDUgNTAuNCAxLjYgNzQuOS01LjkgOC4zLTIuNSAxNi42LTUgMjUtNy4xIDUuNy0xLjUgMTEuNy0xLjIgMTcuMi44IDYzLjQgMjEuOCAxMjYgMTkuOCAxODcuNi03LjIgMjUuMS0xMS4xIDQ4LTI2LjcgNjcuNC00Ni4yIDEtMSAxLjctMi41IDMuNS0yLjYuOSAxLjQuNCAyLjkuNCA0LjR2NTguNWMuMiAzMy40LTI2LjYgNjAuNi02MCA2MC45aC0uNWMtMzYgLjItNzIgMC0xMDggMEgxNDUuNWMtMi0uMi00LS4zLTYtLjN6XCIgLz5cclxuICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MVwiIGQ9XCJNMTU1LjEgMjEyLjRjMTUuMSAwIDI5LjMtLjEgNDMuNCAwIDcuOS4xIDEyLjIgMy40IDEzIDkuNy45IDcuOS0zLjcgMTMuMi0xMi4zIDEzLjMtMTYuMi4yLTMyLjMuMS00OC41LjEtNC43IDAtOS4zLjItMTQtLjEtNS44LS4zLTExLjUtMS41LTE0LjMtNy41cy0uOC0xMS40IDMtMTYuM2MxNS40LTE5LjYgMzAuOS0zOS4zIDQ2LjQtNTguOS45LTEuMiAxLjgtMi40IDIuNy0zLjUtMS0xLjctMi40LS45LTMuNi0xLTEwLjgtLjEtMjEuNyAwLTMyLjUtLjEtMi41IDAtNS0uMy03LjQtLjgtNS43LTEuMy05LjItNy03LjktMTIuNi45LTMuOCAzLjktNi45IDcuNy03LjggMi40LS42IDQuOS0uOSA3LjQtLjkgMTcuOC0uMSAzNS43LS4xIDUzLjUgMCAzLjItLjEgNi4zLjMgOS40IDEuMSA2LjggMi4zIDkuNyA4LjYgNyAxNS4yLTIuNCA1LjctNi4yIDEwLjYtMTAgMTUuNS0xMy4xIDE2LjctMjYuMiAzMy4zLTM5LjMgNDkuOC0xLjEgMS4zLTIuMSAyLjYtMy43IDQuOHpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QxXCIgZD1cIk0yNzEuMSAxNTkuOGMyLjQtMy4xIDQuOS02IDktNi44IDcuOS0xLjYgMTUuMyAzLjUgMTUuNCAxMS41LjMgMjAgLjIgNDAgMCA2MCAwIDUuMi0zLjQgOS44LTguMyAxMS4zLTUgMS45LTEwLjcuNC0xNC0zLjktMS43LTIuMS0yLjQtMi41LTQuOC0uNi05LjEgNy40LTE5LjQgOC43LTMwLjUgNS4xLTE3LjgtNS44LTI1LjEtMTkuNy0yNy4xLTM2LjYtMi4xLTE4LjMgNC0zMy45IDIwLjQtNDMuNSAxMy42LTguMSAyNy40LTcuNCAzOS45IDMuNXptLTM1LjQgMzYuNWMuMiA0LjQgMS42IDguNiA0LjIgMTIuMSA1LjQgNy4yIDE1LjcgOC43IDIzIDMuMyAxLjItLjkgMi4zLTIgMy4zLTMuMyA1LjYtNy42IDUuNi0yMC4xIDAtMjcuNy0yLjgtMy45LTcuMi02LjItMTEuOS02LjMtMTEtLjctMTguNyA3LjgtMTguNiAyMS45ek0zNDAuNCAxOTYuOWMtLjgtMjUuNyAxNi4xLTQ0LjkgNDAuMS00NS42IDI1LjUtLjggNDQuMSAxNi4zIDQ0LjkgNDEuMy44IDI1LjMtMTQuNyA0My4yLTM4LjYgNDUuNi0yNi4xIDIuNi00Ni44LTE2LjMtNDYuNC00MS4zem0yNS4xLTIuNGMtLjIgNSAxLjMgOS45IDQuMyAxNCA1LjUgNy4yIDE1LjggOC42IDIzIDMgMS4xLS44IDItMS44IDIuOS0yLjggNS44LTcuNiA1LjgtMjAuNC4xLTI4LTIuOC0zLjgtNy4yLTYuMi0xMS45LTYuMy0xMC44LS42LTE4LjQgNy42LTE4LjQgMjAuMXpNMzMxLjYgMTc3YzAgMTUuNS4xIDMxIDAgNDYuNS4xIDcuMS01LjUgMTMtMTIuNiAxMy4yLTEuMiAwLTIuNS0uMS0zLjctLjQtNS0xLjMtOC44LTYuNi04LjgtMTIuOXYtNzkuNWMwLTQuNy0uMS05LjMgMC0xNCAuMS03LjcgNS0xMi43IDEyLjQtMTIuNyA3LjYtLjEgMTIuNyA0LjkgMTIuNyAxMi45LjEgMTUuNiAwIDMxLjMgMCA0Ni45elwiIC8+XHJcbiAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTIzNS43IDE5Ni4zYy0uMS0xNC4xIDcuNi0yMi42IDE4LjUtMjIgNC43LjIgOS4xIDIuNSAxMS45IDYuNCA1LjYgNy41IDUuNiAyMC4xIDAgMjcuNy01LjQgNy4yLTE1LjcgOC43LTIzIDMuMy0xLjItLjktMi4zLTItMy4zLTMuMy0yLjUtMy41LTMuOS03LjctNC4xLTEyLjF6TTM2NS41IDE5NC41YzAtMTIuNCA3LjYtMjAuNyAxOC40LTIwLjEgNC43LjEgOS4xIDIuNSAxMS45IDYuMyA1LjcgNy42IDUuNyAyMC41LS4xIDI4LTUuNiA3LjEtMTYgOC4zLTIzLjEgMi43LTEuMS0uOC0yLTEuOC0yLjgtMi45LTMtNC4xLTQuNC05LTQuMy0xNHpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QzXCIgZD1cIk02NiAxaDMyOC4xYzM1LjkgMCA2NSAyOS4xIDY1IDY1djMwM2MwIDM1LjktMjkuMSA2NS02NSA2NUg2NmMtMzUuOSAwLTY1LTI5LjEtNjUtNjVWNjZDMSAzMC4xIDMwLjEgMSA2NiAxelwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiemFsb1wiPsSQxIJORyBOSOG6rFAgQuG6sE5HIFpBTE88L3A+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlckZhY2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luX19tb2RhbF9fYmxvY2tfX2ZhY2Vib29rXCIgaHJlZj17ZmFjZWJvb2tMb2dpbn0+XHJcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNNTA0IDI1NkM1MDQgMTE5IDM5MyA4IDI1NiA4UzggMTE5IDggMjU2YzAgMTIzLjc4IDkwLjY5IDIyNi4zOCAyMDkuMjUgMjQ1VjMyNy42OWgtNjNWMjU2aDYzdi01NC42NGMwLTYyLjE1IDM3LTk2LjQ4IDkzLjY3LTk2LjQ4IDI3LjE0IDAgNTUuNTIgNC44NCA1NS41MiA0Ljg0djYxaC0zMS4yOGMtMzAuOCAwLTQwLjQxIDE5LjEyLTQwLjQxIDM4LjczVjI1Nmg2OC43OGwtMTEgNzEuNjloLTU3Ljc4VjUwMUM0MTMuMzEgNDgyLjM4IDUwNCAzNzkuNzggNTA0IDI1NnpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZhY2Vib29rXCI+xJDEgk5HIE5I4bqsUCBC4bqwTkcgRkFDRUJPT0s8L3A+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUYWJzQ2hhbmdlID0gKGV2ZW50LCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWVUYWIodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclRhYnMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxQYXBlciBzcXVhcmU+XHJcbiAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFic0NoYW5nZX1cclxuICAgICAgICAgICAgc2Nyb2xsQnV0dG9ucz1cImF1dG9cIlxyXG4gICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlVGFifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGFicy5tYXAoKHRhYikgPT4gPFRhYiBrZXk9e3RhYi52YWx1ZX0gbGFiZWw9e3RhYi5sYWJlbH0gdmFsdWU9e3RhYi52YWx1ZX0gLz4pfVxyXG4gICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge3ZhbHVlVGFiID09PSAxICYmIHJlbmRlckxvZ2luKCl9XHJcbiAgICAgICAgICAgIHt2YWx1ZVRhYiA9PT0gMiAmJiByZW5kZXJDcmVhdGVBY2NvdW50KCl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTG9naW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX19tb2RhbF9fYmxvY2tcIiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCA0MHB4JyB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMCcgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBzaXplPVwic21hbGxcIiBsYWJlbD1cIkVtYWlsIC8gU8SQVFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJN4bqtdCBraOG6qXVcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAzMCwgcGFkZGluZzogJzhweCAwJywgZmxvYXQ6ICdsZWZ0Jywgd2lkdGg6IDMwMCB9fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGNvbG9yOiAnIzE5NzZkMicsIGN1cnNvcjogJ2RlZmF1bHQnIH19ID5RdcOqbiBt4bqtdCBraOG6qXU/PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgc3R5bGU9e3sgY29sb3I6ICcjMTk3NmQyJyB9fT7EkMSDbmcgbmjhuq1wPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnNjBweCAwJyB9fT5cclxuICAgICAgICAgIHtyZW5kZXJHb29nbGUoKX1cclxuICAgICAgICAgIHtyZW5kZXJaYWxvKCl9XHJcbiAgICAgICAgICB7cmVuZGVyRmFjZSgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGNvbnN0IHJlbmRlckNyZWF0ZUFjY291bnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX19tb2RhbF9fYmxvY2tcIiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCA0MHB4JyB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMCcgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBzaXplPVwic21hbGxcIiBsYWJlbD1cIkjhu40gdMOqblwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJTxJBUXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMCcgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBzaXplPVwic21hbGxcIiBsYWJlbD1cIkVtYWlsXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMCcgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBzaXplPVwic21hbGxcIiBsYWJlbD1cIk3DoyB4w6FjIHRo4buxY1wiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJN4bqtdCBraOG6qXVcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAwJyB9fT5cclxuICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHNpemU9XCJzbWFsbFwiIGxhYmVsPVwiR2nhu5tpIHTDrW5oXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGNvbG9yOiAnIzE5NzZkMicgfX0+VOG6oW8gdMOgaSBraG/huqNuPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgY29sb3I9J2luaGVyaXQnXHJcbiAgICAgICAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRXZWlnaHQ6IDUwMCwgcGFkZGluZzogJzAgMjBweCcsIGZsb2F0OiAncmlnaHQnLCBjdXJzb3I6ICdkZWZhdWx0JyB9fVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9PsSQxINuZyBuaOG6rXBcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8RGlhbG9nXHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtYXgtd2lkdGgtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICBtYXhXaWR0aD17J21kJ31cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvbmdJbn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dJbkNsb3NlfT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgICAgICAgICAgICB7dmFsdWVUYWIgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IHN0eWxlPXt7IGJvcmRlclJpZ2h0OiAnNHB4IHNvbGlkICNlMGUwZTAnLCBoZWlnaHQ6IDYwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PiDEkMSDbmcgbmjhuq1wIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgxJDEg25nIG5o4bqtcCDEkeG7gyB0aGVvIGTDtWkgxJHGoW4gaMOgbmcsIGzGsHUgZGFuaCBzw6FjaCBz4bqjbiBwaOG6qW0gecOqdSB0aMOtY2gsIG5o4bqtbiBuaGnhu4F1IMawdSDEkcOjaSBo4bqlcCBk4bqrbi5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0ltYWdlTG9naW59IHN0eWxlPXt7IGhlaWdodDogMzUwLCB3aWR0aDogJzEwMCUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHt2YWx1ZVRhYiA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gc3R5bGU9e3sgYm9yZGVyUmlnaHQ6ICc0cHggc29saWQgI2UwZTBlMCcsIGhlaWdodDogNjAwIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+IFThuqFvIHTDoGkga2hv4bqjbiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIFThuqFvIHTDoGkga2hv4bqjbiDEkeG7gyB0aGVvIGTDtWkgxJHGoW4gaMOgbmcsIGzGsHUgZGFuaCBzw6FjaCBz4bqjbiBwaOG6qW0gecOqdSB0aMOtY2gsIG5o4bqtbiBuaGnhu4F1IMawdSDEkcOjaSBo4bqlcCBk4bqrblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17SW1hZ2VMb2dpbn0gc3R5bGU9e3sgaGVpZ2h0OiAzNTAsIHdpZHRoOiAnMTAwJScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OH0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAgMCAwJywgY29sb3I6ICcjMTk3NmQyJywgZm9udFNpemU6IDIwLCBmb250V2VpZ2h0OiA1MDAgfX0+TuG7mWkgdGjhuqV0IERvZG88L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyVGFicygpfVxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRGlhbG9nID5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQgPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luTW9kYWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuaW1wb3J0IE5hdmlnYXRlTmV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0JztcclxuaW1wb3J0IE5hdmlnYXRlQmVmb3JlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZUJlZm9yZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGtleXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxufSkpO1xyXG5cclxuY29uc3QgS2V5d29yZFNsaWRlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IE5leHRBcnJvdyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9eydrZXl3b3JkLXNlYXJjaF9fbmV4dF9fYXJyb3cnfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgIDxOYXZpZ2F0ZU5leHQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IFByZXZBcnJvdyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9eydrZXl3b3JkLXNlYXJjaF9fcHJldl9fYXJyb3cnfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgIDxOYXZpZ2F0ZUJlZm9yZSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRhU2VhcmNoID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJHacaw4budbmcgbmfhu6cgaGnhu4duIMSR4bqhaVwiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi92aW5ob21lcy1jZW50cmFsLXBhcmstcGlkLTM1ODcyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlThu6cgcXXhuqduIMOhbyB0aOG7nWkgdHJhbmdcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdmluaG9tZXMtZ3JhbmQtcGFyay1xdWFuLTktcGlkLTM3NTg0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkLDoG4gdHLDoCBwaMOybmcga2jDoWNoIGhp4buHbiDEkeG6oWlcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdmluaG9tZXMtc21hcnQtY2l0eS1waWQtMzcxOTFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQsOgbiB0csOgIHBow7JuZyBraMOhY2ggY+G7lSDEkWnhu4NuXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3ZpbmhvbWVzLW9jZWFuLXBhcmstZ2lhLWxhbS1waWQtMzc1OTdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVOG7pyBi4bq/cCB0aeG7h24gbmdoaVwiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi92dW5nLXRhdS1wZWFybC1waWQtNDg2NzRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTuG7mWkgdGjhuqV0IHNhbmcgdHLhu41uZ1wiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi9ncmFuZGV1ci1wYWxhY2UtcGlkLTUwMjM0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkdpxrDhu51uZyBuZ+G7pyBj4buVIMSRaeG7g25cIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vZGlhbW9uZC1pc2xhbmQtcGlkLTMzNVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJO4buZaSB0aOG6pXQgc2FuZyB0cuG7jW5nXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3RoZS1zdW4tYXZlbnVlLXBpZC0xNVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCw6BuIMSDbiBj4buVIMSRaeG7g25cIixcclxuICAgICAgcGF0aDogXCIvbmhhLWRhdC1iYW4vbmhhLWRhdC1iYW4tdGFpLWhhaS1waG9uZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCw6BuIMSDbiBoaeG7h24gxJHhuqFpXCIsXHJcbiAgICAgIHBhdGg6IFwiL25oYS1kYXQtYmFuL25oYS1kYXQtYmFuLXRhaS1oYS1ub2lcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyBvbkNsaWNrPXtbXX0gLz4sXHJcbiAgICBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgb25DbGljaz17W119IC8+LFxyXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDE0NDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICBkb3RzOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGluaXRpYWxTbGlkZTogMlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJrZXl3b3JkLXNlYXJjaFwiPlxyXG4gICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250U2l6ZTogMjAsIHBhZGRpbmc6IDEwLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiAnIzE5NzZkMicgfX0+VOG7qyBraMOzYSB0w6xtIGtp4bq/bSBIT1Q8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBkYXRhU2VhcmNoLm1hcCgoc2VhcmNoT2JqZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtzZWFyY2hPYmplY3QucGF0aH0gYXM9e3NlYXJjaE9iamVjdC5wYXRofT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMxOTc2ZDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtleXdvcmQtc2VhcmNoX19pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICA+e3NlYXJjaE9iamVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtleXdvcmRTbGlkZVxyXG4iLCJjb25zdCBtYWluVVJMID0gXCJodHRwczovL25oYWRhdG1vaS5uZXRcIjtcclxuY29uc3QgdXBncmFkZVBsYW5VUkwgPSBcImh0dHBzOi8vbmhhZGF0bW9pLm5ldFwiO1xyXG5cclxuY29uc3QgdXBncmFkZUljb25VUkwgPSBcImh0dHBzOi8vcmVhY3QtbWF0ZXJpYWwtZGFzaGJvYXJkLmRldmlhcy5pby9pbWFnZXMvdW5kcmF3X3Jlc3VtZV9mb2xkZXJfMl9hcnNlLnN2Z1wiO1xyXG5jb25zdCBsb2dvVVJMID0gXCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvbmhhZGF0bW9pLnN2Z1wiO1xyXG5cclxuY29uc3QgYXBpQmFzZVVSTCA9IFwiaHR0cHM6Ly9ncmFwaC5uaGFkYXRtb2kubmV0XCI7XHJcbmNvbnN0IGdvb2dsZUxvZ2luID0gYCR7YXBpQmFzZVVSTH0vYXV0aC9nb29nbGVgO1xyXG5jb25zdCBmYWNlYm9va0xvZ2luID0gYCR7YXBpQmFzZVVSTH0vYXV0aC9mYWNlYm9va2A7XHJcbmNvbnN0IHphbG9Mb2dpbiA9IGAke2FwaUJhc2VVUkx9L2F1dGgvemFsb2A7XHJcbmNvbnN0IGFwaUdyYXBoUUxVUkwgPSBgJHthcGlCYXNlVVJMfS9ncmFwaHFsYDtcclxuXHJcbmNvbnN0IHVybEltYWdlQWRTZWxsTGVhc2UgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGF0YS9hZF9zZWxsX2xlYXNlX2ltYWdlL1wiO1xyXG5jb25zdCB1cmxJbWFnZVByb2plY3QgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGF0YS9wcm9qZWN0X2ltYWdlL1wiO1xyXG5jb25zdCB1cmxJbWFnZUJyb2tlciA9IFwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kYXRhL2Jyb2tlcl9pbWFnZS9cIjtcclxuXHJcbmNvbnN0IGltYWdlRGVmYXVsdFByb2plY3QgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9ob21lX2RlZmF1bHQuanBnXCI7XHJcbmNvbnN0IGltYWdlRGVmYXVsdFNsaWRlciA9IFwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L25oYWRhdG1vaS1kZWZhdWx0LnN2Z1wiO1xyXG5jb25zdCBpbWFnZURlZmF1bHRCcm9rZXIgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC91c2VyLnBuZ1wiO1xyXG5jb25zdCBnb29nbGVBbmFseXRpY3NDb2RlID0gJ1VBLTYwNzY3OTk4LTgnO1xyXG5jb25zdCBnb29nbGVTZWFyY2hDb25zb2xlID0gJ2N5TWtUbmRIZEU5NWNGZ3Y3SDVfb3R1RHktWDZON3FkWEV1Tk9QaUowR1EnO1xyXG5jb25zdCBsb2NhbFN0b3JhZ2VDb21wYXJlS2V5ID0gJ25kbV9jb21wYXJlJztcclxuY29uc3QgbG9jYWxTdG9yYWdlVmlld2VkID0gJ25kbV9hc2xfdmlld2VkJztcclxuY29uc3QgbG9jYWxTdG9yYWdlUHJvamVjdFZpZXdlZCA9ICduZG1fcHJvamVjdF92aWV3ZWQnO1xyXG5cclxuY29uc3QgYWRTZWxsTGVhc2VDYXRlZ29yeSA9IFtcclxuICB7XHJcbiAgICBpZDogJzVlMTFhZjA0NDExZTFlYTcyYTFmY2JkZScsXHJcbiAgICBzbHVnOiAnL25oYS1kYXQtYmFuJyxcclxuICAgIG5hbWU6ICdOaMOgIMSR4bqldCBiw6FuJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYWYwNDQxMWUxZWE3MmExZmNiZGYnLFxyXG4gICAgc2x1ZzogJy9uaGEtZGF0LXRodWUnLFxyXG4gICAgbmFtZTogJ05ow6AgxJHhuqV0IHRodcOqJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYWYwNDQxMWUxZWE3MmExZmNiZTAnLFxyXG4gICAgc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnLFxyXG4gICAgbmFtZTogJ05ow6AgxJHhuqV0IGPhuqduIG11YScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWFmMDQ0MTFlMWVhNzJhMWZjYmUxJyxcclxuICAgIHNsdWc6ICcvbmhhLWRhdC1jYW4tdGh1ZScsXHJcbiAgICBuYW1lOiAnTmjDoCDEkeG6pXQgY+G6p24gdGh1w6onLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnXHJcbiAgfVxyXG5dO1xyXG5jb25zdCBhZFNlbGxMZWFzZVR5cGUgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNWY1NDNmNjYzODc5YzY3NTA5MjcsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFjLDVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYSw1ZTdkNjEzMjNmNjYzODc5YzY3NTA5OTcsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFiJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1uaGEnLFxyXG4gICAgbmFtZTogJ0LDoW4gbmjDoCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWMnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLW5oYS1tYXQtcGhvJyxcclxuICAgIG5hbWU6ICdCw6FuIG5ow6AgbeG6t3QgcGjhu5EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1uaGEnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFhJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1uaGEtcmllbmcnLFxyXG4gICAgbmFtZTogJ0LDoW4gbmjDoCByacOqbmcnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1uaGEnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYxMzIzZjY2Mzg3OWM2NzUwOTk3JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1uaGEtcGhvLXNob3Bob3VzZScsXHJcbiAgICBuYW1lOiAnQsOhbiBuaMOgIHBo4buRIHRoxrDGoW5nIG3huqFpIChzaG9waG91c2UpJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tbmhhJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tbmhhLWxpZW4ta2UnLFxyXG4gICAgbmFtZTogJ0LDoW4gbmjDoCBsaeG7gW4ga+G7gScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLW5oYScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YTksNWU3ZDYyMGYzZjY2Mzg3OWM2NzUwOWY4LDVlN2Q2MjJkM2Y2NjM4NzljNjc1MGEwNyw1ZTdkNjI0YjNmNjYzODc5YzY3NTBhMTUsNWU3ZDYyNmIzZjY2Mzg3OWM2NzUwYTIzLDVlN2Q2MjhiM2Y2NjM4NzljNjc1MGEzNCw1ZTdkNjJhNTNmNjYzODc5YzY3NTBhNDIsNWU3ZDYyY2MzZjY2Mzg3OWM2NzUwYTUxLDVlN2Q2MmZjM2Y2NjM4NzljNjc1MGE2YSw1ZTdkNjMxOTNmNjYzODc5YzY3NTBhN2IsNWU3ZDYzMmYzZjY2Mzg3OWM2NzUwYThkLDVlOTkyNGY2NzE2ZWU5NjRiNWZkY2MyMycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIG5hbWU6IFwiQsOhbiBjxINuIGjhu5ksIGNodW5nIGPGsFwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYyMGYzZjY2Mzg3OWM2NzUwOWY4JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tZ2lhLXJlJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIGNodW5nIGPGsCBnacOhIHLhurtcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MjJkM2Y2NjM4NzljNjc1MGEwNycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLW1pbmknLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgY2h1bmcgY8awIG1pbmlcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MjRiM2Y2NjM4NzljNjc1MGExNScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLXRydW5nLWNhcCcsXHJcbiAgICBuYW1lOiBcIkPEg24gaOG7mSBjaHVuZyBjxrAgdHJ1bmcgY+G6pXBcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MjZiM2Y2NjM4NzljNjc1MGEyMycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLWNhby1jYXAnLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgY2h1bmcgY8awIGNhbyBj4bqlcFwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYyOGIzZjY2Mzg3OWM2NzUwYTM0JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tcGVudGhvdXNlJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIHBlbnRob3VzZVwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYyYTUzZjY2Mzg3OWM2NzUwYTQyJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tc2t5dmlsbGEnLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgU2t5dmlsbGFcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MmNjM2Y2NjM4NzljNjc1MGE1MScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLWxvZnQtaG91c2UnLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgTG9mdCAtIGhvdXNlXCIsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjJmYzNmNjYzODc5YzY3NTBhNmEnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1zdHVkaW8nLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgU3R1ZGlvXCIsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjMxOTNmNjYzODc5YzY3NTBhN2InLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jb25kb3RlbCcsXHJcbiAgICBuYW1lOiBcIkPEg24gaOG7mSBDb25kb3RlbFwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYzMmYzZjY2Mzg3OWM2NzUwYThkJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tb2ZmaWNldGVsJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIE9mZmljZXRlbFwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU5OTI0ZjY3MTZlZTk2NGI1ZmRjYzIzJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tZHVwbGV4JyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIER1cGxleFwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYzNjgzZjY2Mzg3OWM2NzUwYWI2LDVlOTEyMjk0OGM3MWQyNWE4NzlkMzBlNiw1ZTdkNjRhZTNmNjYzODc5YzY3NTBhZWYsNWU3ZDY0YzUzZjY2Mzg3OWM2NzUwYWZlLDVlN2Q2NGUyM2Y2NjM4NzljNjc1MGIwYiw1ZTdkNjU4YTNmNjYzODc5YzY3NTBiNzAsNWU3ZDY1MTAzZjY2Mzg3OWM2NzUwYjI3LDVlN2Q2NTVlM2Y2NjM4NzljNjc1MGI1MSw1ZTdkNjViODNmNjYzODc5YzY3NTBiOGEnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIG5hbWU6ICdCw6FuIGJp4buHdCB0aOG7sScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTkxMjI5NDhjNzFkMjVhODc5ZDMwZTYnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1LWxpZW4ta2UnLFxyXG4gICAgbmFtZTogJ0Jp4buHdCB0aOG7sSBsaeG7gW4ga+G7gScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NGFlM2Y2NjM4NzljNjc1MGFlZicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtc2FuLXZ1b24nLFxyXG4gICAgbmFtZTogJ0Jp4buHdCB0aOG7sSBzw6JuIHbGsOG7nW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjRjNTNmNjYzODc5YzY3NTBhZmUnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1LXNvbmctbGFwJyxcclxuICAgIG5hbWU6ICdCaeG7h3QgdGjhu7Egc29uZyBs4bqtcCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NGUyM2Y2NjM4NzljNjc1MGIwYicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtZG9uLWxhcCcsXHJcbiAgICBuYW1lOiAnQmnhu4d0IHRo4buxIMSRxqFuIGzhuq1wJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tYmlldC10aHUnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDY1OGEzZjY2Mzg3OWM2NzUwYjcwJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1iaWV0LXRodS1uZ2hpLWR1b25nJyxcclxuICAgIG5hbWU6ICdCaeG7h3QgdGjhu7Egbmdo4buJIGTGsOG7oW5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tYmlldC10aHUnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDY1MTAzZjY2Mzg3OWM2NzUwYjI3JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1iaWV0LXRodS1waG8nLFxyXG4gICAgbmFtZTogJ0Jp4buHdCB0aOG7sSBwaOG7kScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NTVlM2Y2NjM4NzljNjc1MGI1MScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtdHUtbGFwJyxcclxuICAgIG5hbWU6ICdCaeG7h3QgdGjhu7EgdOG7qSBs4bqtcCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NWI4M2Y2NjM4NzljNjc1MGI4YScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtbWluaScsXHJcbiAgICBuYW1lOiAnQmnhu4d0IHRo4buxIE1pbmknLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWUsNWU2NzA3N2UxZmVhMjczYTk4NWQxZDM2LDVlNjcwNzBmMWZlYTI3M2E5ODVkMWQzNSw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWQsNWU2NzA3OTgxZmVhMjczYTk4NWQxZDM3JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1kYXQnLFxyXG4gICAgbmFtZTogJ0LDoW4gxJHhuqV0JyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCI1ZTY3MDc3ZTFmZWEyNzNhOTg1ZDFkMzZcIixcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1kYXQtbmVuJyxcclxuICAgIG5hbWU6ICfEkOG6pXQgbuG7gW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1kYXQnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU2NzA3MGYxZmVhMjczYTk4NWQxZDM1JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1kYXQtdGhvLWN1JyxcclxuICAgIG5hbWU6ICdCw6FuIMSR4bqldCB0aOG7lSBjxrAnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1kYXQnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFkJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1kYXQtbmVuLWR1LWFuJyxcclxuICAgIG5hbWU6ICdCw6FuIMSR4bqldCBu4buBbiwgZOG7sSDDoW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1kYXQnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU2NzA3OTgxZmVhMjczYTk4NWQxZDM3JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1kYXQtbm9uZy1sYW0tbmdoaWVwJyxcclxuICAgIG5hbWU6ICdNdWEgYsOhbiDEkeG6pXQgbsO0bmcgbMOibSBuZ2hp4buHcCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWRhdCcsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTY3MDdjMjFmZWEyNzNhOTg1ZDFkMzgsNWU2NzA3ZTAxZmVhMjczYTk4NWQxZDM5LDVlNjcwN2Y4MWZlYTI3M2E5ODVkMWQzYSw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjAsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFmJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICBuYW1lOiAnQsOhbiBjw6FjIGxv4bqhaSBi4bqldCDEkeG7mW5nIHPhuqNuIGtow6FjJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlNjcwN2UwMWZlYTI3M2E5ODVkMWQzOScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tbmhhLWhhbmcta2hhY2gtc2FuJyxcclxuICAgIG5hbWU6ICdCw6FuIG5ow6AgaMOgbmcsIGtow6FjaCBz4bqhbicsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlNjcwN2Y4MWZlYTI3M2E5ODVkMWQzYScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tc2FuZy1uaHVvbmctcXVhbicsXHJcbiAgICBuYW1lOiAnQsOhbi9zYW5nIG5oxrDhu6NuZyBzaG9wLCBraW90LCBxdcOhbicsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViMCcsXHJcbiAgICBzbHVnOiAnL211YS1iYW4ta2hvLW5oYS14dW9uZycsXHJcbiAgICBuYW1lOiAnQsOhbiBuaMOgIGtobywgbmjDoCB4xrDhu59uZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhZicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tdHJhbmctdHJhaS1uZ2hpLWR1b25nJyxcclxuICAgIG5hbWU6ICdCw6FuIHRyYW5nIHRy4bqhaSwgbmdo4buJIGTGsOG7oW5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tYmF0LWRvbmctc2FuLWtoYWMnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWMzJyxcclxuICAgIHNsdWc6ICcvY2FuLXRodWUtY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIG5hbWU6ICdD4bqnbiB0aHXDqiBjxINuIGjhu5kgY2h1bmcgY8awJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWM0JyxcclxuICAgIHNsdWc6ICcvY2FuLXRodWUtbmhhLXJpZW5nJyxcclxuICAgIG5hbWU6ICdD4bqnbiB0aHXDqiBuaMOgIHJpw6puZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjNScsXHJcbiAgICBzbHVnOiAnL2Nhbi10aHVlLW5oYS1tYXQtcGhvJyxcclxuICAgIG5hbWU6ICdD4bqnbiB0aHXDqiBuaMOgIG3hurd0IHBo4buRJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWM2JyxcclxuICAgIHNsdWc6ICcvY2FuLXRodWUtbmhhLXRyby1waG9uZy10cm8nLFxyXG4gICAgbmFtZTogJ0PhuqduIHRodcOqIG5ow6AgdHLhu40sIHBow7JuZyB0cuG7jScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjNycsXHJcbiAgICBzbHVnOiAnL2Nhbi10aHVlLXZhbi1waG9uZycsXHJcbiAgICBuYW1lOiAnQ+G6p24gdGh1w6ogdsSDbiBwaMOybmcnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YzgnLFxyXG4gICAgc2x1ZzogJy9jYW4tdGh1ZS1jdWEtaGFuZy1raW90JyxcclxuICAgIG5hbWU6ICdD4bqnbiB0aHXDqiBj4butYSBow6BuZywga2kg4buRdCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjOScsXHJcbiAgICBzbHVnOiAnL2Nhbi10aHVlLWtoby1uaGEteHVvbmctZGF0JyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6oga2hvLCBuaMOgIHjGsOG7n25nLCDEkeG6pXQnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1Y2EnLFxyXG4gICAgc2x1ZzogJy9jYW4tdGh1ZS1jYWMtbG9haS1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICBuYW1lOiAnQ+G6p24gdGh1w6ogbG/huqFpIGLhuqV0IMSR4buZbmcgc+G6o24ga2jDoWMnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YmEnLFxyXG4gICAgc2x1ZzogJy9tdWEtY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIG5hbWU6ICdNdWEgY8SDbiBo4buZIGNodW5nIGPGsCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWJiJyxcclxuICAgIHNsdWc6ICcvbXVhLW5oYS1yaWVuZycsXHJcbiAgICBuYW1lOiAnTXVhIG5ow6AgcmnDqm5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tbXVhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YmMnLFxyXG4gICAgc2x1ZzogJy9tdWEtbmhhLWJpZXQtdGh1LWxpZW4ta2UnLFxyXG4gICAgbmFtZTogJ011YSBuaMOgIGJp4buHdCB0aMawLCBsaeG7gW4ga+G7gScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWJkJyxcclxuICAgIHNsdWc6ICcvbXVhLW5oYS1tYXQtcGhvJyxcclxuICAgIG5hbWU6ICdNdWEgbmjDoCBt4bq3dCBwaOG7kScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWJlJyxcclxuICAgIHNsdWc6ICcvbXVhLWRhdC1uZW4tZHUtYW4nLFxyXG4gICAgbmFtZTogJ011YSDEkeG6pXQgbuG7gW4gZOG7sSDDoW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViZicsXHJcbiAgICBzbHVnOiAnL211YS1kYXQnLFxyXG4gICAgbmFtZTogJ011YSDEkeG6pXQnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjMCcsXHJcbiAgICBzbHVnOiAnL211YS10cmFuZy10cmFpLWtodS1uZ2hpLWR1b25nJyxcclxuICAgIG5hbWU6ICdNdWEgdHJhbmcgdHLhuqFpLCBraHUgbmdo4buJIGTGsOG7oW5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tbXVhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YzEnLFxyXG4gICAgc2x1ZzogJy9tdWEta2hvLW5oYS14dW9uZycsXHJcbiAgICBuYW1lOiAnTXVhIGtobywgbmjDoCB4xrDhu59uZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWMyJyxcclxuICAgIHNsdWc6ICcvbXVhLWNhYy1sb2FpLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIG5hbWU6ICdNdWEgY8OhYyBsb+G6oWkgYuG6pXQgxJHhu5luZyBz4bqjbiBraMOhYycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWIyJyxcclxuICAgIHNsdWc6ICcvY2hvLXRodWUtY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogY8SDbiBo4buZIGNodW5nIGPGsCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWIzJyxcclxuICAgIHNsdWc6ICcvY2hvLXRodWUtbmhhLXJpZW5nJyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogbmjDoCByacOqbmcnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViNCcsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLW5oYS1tYXQtcGhvJyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogbmjDoCBt4bq3dCBwaOG7kScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWI1JyxcclxuICAgIHNsdWc6ICcvY2hvLXRodWUtbmhhLXRyby1waG9uZy10cm8nLFxyXG4gICAgbmFtZTogJ0NobyB0aHXDqiBuaMOgIHRy4buNLCBwaMOybmcgdHLhu40nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViNicsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLXZhbi1waG9uZycsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIHbEg24gcGjDsm5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjcnLFxyXG4gICAgc2x1ZzogJy9jaG8tdGh1ZS1jdWEtaGFuZy1raW90JyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogY+G7rWEgaMOgbmcsIGtpIOG7kXQnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViOCcsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLWtoby1uaGEteHVvbmctZGF0JyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6oga2hvLCBuaMOgIHjGsOG7n25nLCDEkeG6pXQnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViOScsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLWNhYy1sb2FpLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogY8OhYyBsb+G6oWkgYuG6pXQgxJHhu5luZyBz4bqjbiBraMOhYycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtdGh1ZSdcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCB0aXRsZXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cnLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnR2nGsOG7nW5nIG5n4bunIHThu7Egbmhpw6puJywgaW1hZ2U6ICdodHRwczovL211bmRlY29yLnZuL3VwbG9hZHMvc2FucGhhbS9naXVvbmduZ3Vnb3R1bmhpZW4vZ2l1b25nLW5ndS1nby10dS1uaGllbi1kZXAtR04wMzQuanBlZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnR2nGsOG7nW5nIG5n4bunIGPDtG5nIG5naGnhu4dwJywgaW1hZ2U6ICdodHRwczovL211bmRlY29yLnZuL3VwbG9hZHMvc2FucGhhbS9naXVvbmduZ3Vnb3R1bmhpZW4vZ2l1b25nLW5ndS1nby10dS1uaGllbi1kZXAtR04wMzQuanBlZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnR2nGsOG7nW5nIG5n4bunIGhp4buHbiDEkeG6oWknLCBpbWFnZTogJ2h0dHBzOi8vbXVuZGVjb3Iudm4vdXBsb2Fkcy9zYW5waGFtL2dpdW9uZ25ndWdvdHVuaGllbi9naXVvbmctbmd1LWdvLXR1LW5oaWVuLWRlcC1HTjAzNC5qcGVnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdHacaw4budbmcgbmfhu6cgY+G7lSDEkWnhu4NuJywgaW1hZ2U6ICdodHRwczovL211bmRlY29yLnZuL3VwbG9hZHMvc2FucGhhbS9naXVvbmduZ3Vnb3R1bmhpZW4vZ2l1b25nLW5ndS1nby10dS1uaGllbi1kZXAtR04wMzQuanBlZycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQsOgbiDEg24nLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gdOG7sSBuaGnDqm4nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb25vaXRoYXR2aWV0LmNvbS91cGxvYWQvc2FucGhhbS9sYXJnZS9iby1iYW4tYW4tZ28tdHUtbmhpZW4tY2FtLXhlLW1hdC1nby1jby1kaWVuLTFtOC04LWdoZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIMOpcCBjYW8gY+G6pXAnLCBpbWFnZTogJ2h0dHBzOi8vZG9nb25vaXRoYXR2aWV0LmNvbS91cGxvYWQvc2FucGhhbS9sYXJnZS9iby1iYW4tYW4tZ28tdHUtbmhpZW4tY2FtLXhlLW1hdC1nby1jby1kaWVuLTFtOC04LWdoZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIG5ow6AgaMOgbmcnLCBpbWFnZTogJ2h0dHBzOi8vZG9nb25vaXRoYXR2aWV0LmNvbS91cGxvYWQvc2FucGhhbS9sYXJnZS9iby1iYW4tYW4tZ28tdHUtbmhpZW4tY2FtLXhlLW1hdC1nby1jby1kaWVuLTFtOC04LWdoZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDQgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb25vaXRoYXR2aWV0LmNvbS91cGxvYWQvc2FucGhhbS9sYXJnZS9iby1iYW4tYW4tZ28tdHUtbmhpZW4tY2FtLXhlLW1hdC1nby1jby1kaWVuLTFtOC04LWdoZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDYgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb25vaXRoYXR2aWV0LmNvbS91cGxvYWQvc2FucGhhbS9sYXJnZS9iby1iYW4tYW4tZ28tdHUtbmhpZW4tY2FtLXhlLW1hdC1nby1jby1kaWVuLTFtOC04LWdoZS5qcGcnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0LDoG4gcGjDsm5nIGtow6FjaCcsXHJcbiAgICBlbGVtZW50czogW1xyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiB04buxIG5oacOqbicsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0ZHVvbmdkYWkudm4vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvYmFuLWdoZS1waG9uZy1raGFjaC1nby1vYy1jaG8uanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiDDqXAgY2FvIGPhuqVwJywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRkdW9uZ2RhaS52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9iYW4tZ2hlLXBob25nLWtoYWNoLWdvLW9jLWNoby5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIG5ow6AgaMOgbmcnLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGR1b25nZGFpLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2Jhbi1naGUtcGhvbmcta2hhY2gtZ28tb2MtY2hvLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNCBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0ZHVvbmdkYWkudm4vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvYmFuLWdoZS1waG9uZy1raGFjaC1nby1vYy1jaG8uanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA2IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRkdW9uZ2RhaS52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9iYW4tZ2hlLXBob25nLWtoYWNoLWdvLW9jLWNoby5qcGcnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0vhu4cgdGl2aScsXHJcbiAgICBlbGVtZW50czogW1xyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiB04buxIG5oacOqbicsIGltYWdlOiAnaHR0cHM6Ly9nb2NodWFuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8zMjY4NDFmMzdjNzU5ZDJiYzQ2NC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIMOpcCBjYW8gY+G6pXAnLCBpbWFnZTogJ2h0dHBzOi8vZ29jaHVhbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDkvMzI2ODQxZjM3Yzc1OWQyYmM0NjQuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiBuaMOgIGjDoG5nJywgaW1hZ2U6ICdodHRwczovL2dvY2h1YW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA5LzMyNjg0MWYzN2M3NTlkMmJjNDY0LmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNCBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9nb2NodWFuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8zMjY4NDFmMzdjNzU5ZDJiYzQ2NC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDYgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZ29jaHVhbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDkvMzI2ODQxZjM3Yzc1OWQyYmM0NjQuanBnJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdU4bunIHF14bqnbiDDoW8nLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gdOG7sSBuaGnDqm4nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb2xlZ2lhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMy9NYXUtdHUtcXVhbi1hby1kZXAtTEctVFFBMDMwLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gw6lwIGNhbyBj4bqlcCcsIGltYWdlOiAnaHR0cHM6Ly9kb2dvbGVnaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAzL01hdS10dS1xdWFuLWFvLWRlcC1MRy1UUUEwMzAuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiBuaMOgIGjDoG5nJywgaW1hZ2U6ICdodHRwczovL2RvZ29sZWdpYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDMvTWF1LXR1LXF1YW4tYW8tZGVwLUxHLVRRQTAzMC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDQgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb2xlZ2lhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMy9NYXUtdHUtcXVhbi1hby1kZXAtTEctVFFBMDMwLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNiBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9kb2dvbGVnaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAzL01hdS10dS1xdWFuLWFvLWRlcC1MRy1UUUEwMzAuanBnJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdCw6BuIHRyYW5nIMSRaeG7g20nLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gdOG7sSBuaGnDqm4nLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGx1b25nc29uLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jhbi10cmFuZy1kaWVtLTYwLTEuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiDDqXAgY2FvIGPhuqVwJywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRsdW9uZ3Nvbi52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9iYW4tdHJhbmctZGllbS02MC0xLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gbmjDoCBow6BuZycsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0bHVvbmdzb24udm4vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYmFuLXRyYW5nLWRpZW0tNjAtMS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDQgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGx1b25nc29uLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jhbi10cmFuZy1kaWVtLTYwLTEuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA2IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRsdW9uZ3Nvbi52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9iYW4tdHJhbmctZGllbS02MC0xLmpwZycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnVOG7pyBnacOgeScsXHJcbiAgICBlbGVtZW50czogW1xyXG4gICAgICB7IGVsZW1lbnQ6ICdU4bunIGdpw6B5IHThu7Egbmhpw6puJywgaW1hZ2U6ICdodHRwczovL2ZpbGUuaHN0YXRpYy5uZXQvMTAwMDI5NDE0Ni9maWxlLzNfZ3JhbmRlLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnVOG7pyBnacOgeSDDqXAgY2FvIGPhuqVwJywgaW1hZ2U6ICdodHRwczovL2ZpbGUuaHN0YXRpYy5uZXQvMTAwMDI5NDE0Ni9maWxlLzNfZ3JhbmRlLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnVOG7pyBnacOgeSBuaMOgIGjDoG5nJywgaW1hZ2U6ICdodHRwczovL2ZpbGUuaHN0YXRpYy5uZXQvMTAwMDI5NDE0Ni9maWxlLzNfZ3JhbmRlLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNCBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9maWxlLmhzdGF0aWMubmV0LzEwMDAyOTQxNDYvZmlsZS8zX2dyYW5kZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDYgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZmlsZS5oc3RhdGljLm5ldC8xMDAwMjk0MTQ2L2ZpbGUvM19ncmFuZGUuanBnJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBsaXN0TWVudSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ07hu5lpIFRo4bqldCBQaMOybmcgTmfhu6cnLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ07hu5lpIFRo4bqldCBQaMOybmcgS2jDoWNoJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gZ+G7lycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBHacOgeSBEw6lwJyB9LFxyXG4gICAgICB7IHJvb206ICdL4buHIFRpdmknIH0sXHJcbiAgICAgIHsgcm9vbTogJ0vhu4cgxJHhu4MgZ2nDoHknIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcsaw4bujdScgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnTuG7mWkgVGjhuqV0IE5ow6AgQuG6v3AnLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnVOG7pyBi4bq/cCcgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBiw6BuIMSDbicgfSxcclxuICAgICAgeyByb29tOiAnR2jhur8gcGjDsm5nIMSDbicgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ07hu5lpIFRo4bqldCBQaMOybmcgVGjhu50nLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnQsOgbiBUaOG7nScgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBUaOG7nScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBUaOG7nSBUaOG6p24gVMOgaScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBUaOG7nSBUcmVvIFTGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdT4bqtcCBUaOG7nScgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnTuG7mWkgVGjhuqV0IFbEg24gUGjDsm5nJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICfEkOG7kyBH4buXIE3hu7kgTmdo4buHJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdT4bqjbiBQaOG6qW0gS2h1eeG6v24gTeG6oWknLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1PhuqNuIFBo4bqpbSDEkMOjIFhlbScsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcXXhuqduIMOhbycgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnxJDGoW4gaMOgbmcgxJHDoyDEkeG6t3QnLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1PhuqNuIHBo4bqpbSBiw6FuIGNo4bqheScsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcXXhuqduIMOhbycgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnU+G6o24gcGjhuqltIG3hu5tpJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBwcm9kdWN0cyA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vd3d3Lm5oYWRlcGtpZW50cnVjLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi90dS1xdWFuLWFvLWdvLWRlcC0wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICdU4bunIHF14bqnbiDDoW8gxJHhurlwLSBUUUEwOTknLFxyXG4gICAgbW9uZXlPbGQ6IDUwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNDUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9kaWVubWF5Y2hvbG9uLnZuL3B1YmxpYy91c2VydXBsb2FkL2ltYWdlcy9rZSUyMHRpdmklMjBnbyUyMGNhbyUyMGNhcC5wbmcnLFxyXG4gICAgdGl0bGU6ICdL4buHIFRpdmkgcGjDsm5nIGtow6FjaCcsXHJcbiAgICBtb25leU9sZDogNjAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiA1MDAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL2RpZW5tYXljaG9sb24udm4vcHVibGljL3VzZXJ1cGxvYWQvaW1hZ2VzL2tlJTIwdGl2aSUyMGdvJTIwY2FvJTIwY2FwLnBuZycsXHJcbiAgICB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyBn4buXIHThu7Egbmhpw6puIC0gR05DRDAxJyxcclxuICAgIG1vbmV5T2xkOiAzMDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDIwMDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdHRoYWliaW5oLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9naXVvbmctbmd1LWdvLWdvLWRvLTk2NTYuanBnJyxcclxuICAgIHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIHRo4budaSB0cmFuZyAtIEcwMDMnLFxyXG4gICAgbW9uZXlPbGQ6IDQ1MDAwMDAsXHJcbiAgICBtb25leU5ldzogMzUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9waG9nb3ZpcC52bi91cGxvYWRzL25ld3MvMjAxN18xMi9naXVvbmctbmd1LWdvLXR1LW5oaWVuLTQtY29weS5qcGcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgaGnhu4duIMSR4bqhaSAtIEdOMDAzJyxcclxuICAgIG1vbmV5T2xkOiA0MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDM1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGlob3VzZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvTzFDTjAxWml1ajhGMXlTbHNGV1h2bnlfMjczNjAxNjUuanBnJyxcclxuICAgIHRpdGxlOiAnS+G7hyBUaXZpIHBow7JuZyBraMOhY2gnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTAwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0aWhvdXNlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMS9PMUNOMDFaaXVqOEYxeVNsc0ZXWHZueV8yNzM2MDE2NS5qcGcnLFxyXG4gICAgdGl0bGU6ICdCw6BuIMSDbiA2IGdo4bq/IC0gQkEwMDEnLFxyXG4gICAgbW9uZXlPbGQ6IDQwMDAwMDAsXHJcbiAgICBtb25leU5ldzogMzAwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly93d3cubmhhZGVwa2llbnRydWMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA2L3R1LXF1YW4tYW8tZ28tZGVwLTAxLmpwZycsXHJcbiAgICB0aXRsZTogJ0LDoG4gxINuIGfhu5cgbmjhuq1wIGto4bqpdSAtIEJBMDAyJyxcclxuICAgIG1vbmV5T2xkOiAzNTAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDMwMDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vd3d3Lm5oYWRlcGtpZW50cnVjLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi90dS1xdWFuLWFvLWdvLWRlcC0wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICdU4bunIHF14bqnbiDDoW8gxJHhurlwLSBUUUEwOTknLFxyXG4gICAgbW9uZXlPbGQ6IDQwMDAwMDAsXHJcbiAgICBtb25leU5ldzogMzUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9kaWVubWF5Y2hvbG9uLnZuL3B1YmxpYy91c2VydXBsb2FkL2ltYWdlcy9rZSUyMHRpdmklMjBnbyUyMGNhbyUyMGNhcC5wbmcnLFxyXG4gICAgdGl0bGU6ICdL4buHIFRpdmkgcGjDsm5nIGtow6FjaCcsXHJcbiAgICBtb25leU9sZDogNjAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiA1MDAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL25vaXRoYXR0aGFpYmluaC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvZ2l1b25nLW5ndS1nby1nby1kby05NjU2LmpwZycsXHJcbiAgICB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyBj4buVIMSRaeG7g24gLSBHTkNEMDEnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0dGhhaWJpbmguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2dpdW9uZy1uZ3UtZ28tZ28tZG8tOTY1Ni5qcGcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgdGjhu51pIHRyYW5nIC0gRzAwMycsXHJcbiAgICBtb25leU9sZDogNDUwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAzNTAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL25vaXRoYXR0aGFpYmluaC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvZ2l1b25nLW5ndS1nby1nby1kby05NjU2LmpwZycsXHJcbiAgICB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyBj4buVIMSRaeG7g24gLSBHTkNEMDEnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0dGhhaWJpbmguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2dpdW9uZy1uZ3UtZ28tZ28tZG8tOTY1Ni5qcGcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgdGjhu51pIHRyYW5nIC0gRzAwMycsXHJcbiAgICBtb25leU9sZDogNDUwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAzNTAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL3d3dy5uaGFkZXBraWVudHJ1Yy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDYvdHUtcXVhbi1hby1nby1kZXAtMDEuanBnJyxcclxuICAgIHRpdGxlOiAnVOG7pyBxdeG6p24gw6FvIMSR4bq5cC0gVFFBMDk5JyxcclxuICAgIG1vbmV5T2xkOiA0MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDM1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vZGllbm1heWNob2xvbi52bi9wdWJsaWMvdXNlcnVwbG9hZC9pbWFnZXMva2UlMjB0aXZpJTIwZ28lMjBjYW8lMjBjYXAucG5nJyxcclxuICAgIHRpdGxlOiAnS+G7hyBUaXZpIHBow7JuZyBraMOhY2gnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTAwMDAwMCxcclxuICB9LFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgbWFpblVSTCxcclxuICB1cGdyYWRlUGxhblVSTCxcclxuICB1cGdyYWRlSWNvblVSTCxcclxuICBsb2dvVVJMLFxyXG4gIGFwaUJhc2VVUkwsXHJcbiAgYXBpR3JhcGhRTFVSTCxcclxuICBnb29nbGVMb2dpbixcclxuICB6YWxvTG9naW4sXHJcbiAgZmFjZWJvb2tMb2dpbixcclxuICB1cmxJbWFnZUFkU2VsbExlYXNlLFxyXG4gIHVybEltYWdlQnJva2VyLFxyXG4gIHVybEltYWdlUHJvamVjdCxcclxuICBpbWFnZURlZmF1bHRCcm9rZXIsXHJcbiAgaW1hZ2VEZWZhdWx0UHJvamVjdCxcclxuICBpbWFnZURlZmF1bHRTbGlkZXIsXHJcbiAgZ29vZ2xlQW5hbHl0aWNzQ29kZSxcclxuICBnb29nbGVTZWFyY2hDb25zb2xlLFxyXG4gIGxvY2FsU3RvcmFnZUNvbXBhcmVLZXksXHJcbiAgYWRTZWxsTGVhc2VUeXBlLFxyXG4gIGxvY2FsU3RvcmFnZVZpZXdlZCxcclxuICBsb2NhbFN0b3JhZ2VQcm9qZWN0Vmlld2VkLFxyXG4gIGFkU2VsbExlYXNlQ2F0ZWdvcnksXHJcbiAgdGl0bGVzLFxyXG4gIGxpc3RNZW51LFxyXG4gIHByb2R1Y3RzLFxyXG59O1xyXG4iLCJjb25zdCBpc0JsYW5rID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiIHx8IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IDAgfHwgdmFsdWUgPT09ICcnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiAodmFsdWUubGVuZ3RoIDw9IDAgfHwgdmFsdWUudHJpbSgpLmxlbmd0aCA8PSAwKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHJldHVybiBpc0VtcHR5KHZhbHVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGlzRW1wdHkgPSAob2JqOiBhbnkpID0+IHtcclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5jb25zdCBpc051bWJlciA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKGlzQmxhbmsodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGlzRW1haWwgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmIChpc0JsYW5rKHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBsZXQgZW1haWwgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICByZXR1cm4gZW1haWwudGVzdCh2YWx1ZSk7XHJcbn07XHJcblxyXG5jb25zdCBpc1NsdWcgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmIChpc0JsYW5rKHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBsZXQgc2x1ZyA9IC9eW0EtWmEtejAtOV0rKD86LVtBLVphLXowLTldKykqJC9cclxuICByZXR1cm4gc2x1Zy50ZXN0KHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGlzVXJsID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICBpZiAoaXNCbGFuayh2YWx1ZSkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgbGV0IHJlZ2V4cCA9IC9eKD86KD86aHR0cHM/fGZ0cCk6XFwvXFwvKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykoPzpcXC4oPzpbYS16XFx1MDBhMS1cXHVmZmZmMC05XS0qKSpbYS16XFx1MDBhMS1cXHVmZmZmMC05XSspKig/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmZdezIsfSkpKSg/OjpcXGR7Miw1fSk/KD86XFwvXFxTKik/JC87XHJcbiAgcmV0dXJuIHJlZ2V4cC50ZXN0KHZhbHVlKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBpc0JsYW5rLFxyXG4gIGlzRW1haWwsXHJcbiAgaXNFbXB0eSxcclxuICBpc051bWJlcixcclxuICBpc1VybCxcclxuICBpc1NsdWdcclxufTtcclxuIiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL0ltcG9ydCBDb21wb25lbnRzXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IFNlYXJjaEhvbWVwYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL0luZGV4L1NlYXJjaEhvbWVwYWdlXCI7XHJcbmltcG9ydCBDb250ZW50TWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0NvbnRlbk1lbnVcIjtcclxuaW1wb3J0IFRpdGxlQmxvY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5kZXgvVGl0bGVCbG9ja1wiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgU2VhcmNoS2V5d29yZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2gvS2V5d29yZFNsaWRlXCI7XHJcbmltcG9ydCBIb3RMb2NhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmRleC9Ib3RMb2NhdGlvblwiO1xyXG5pbXBvcnQgTmV3c0luZGV4IGZyb20gXCIuLi9jb21wb25lbnRzL0luZGV4L05ld3NJbmRleFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIFR5cG9ncmFwaHksIEljb24sIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBBZFNlbGxMZWFzZUluZGV4IGZyb20gJy4uL2NvbXBvbmVudHMvSW5kZXgvQWRTZWxsTGVhc2VJbmRleCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGxvY2FsU3RvcmFnZVZpZXdlZCwgbWFpblVSTCwgbG9jYWxTdG9yYWdlUHJvamVjdFZpZXdlZCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaW5kZXhQYWdlU3R5bGUgfSBmcm9tICcuLi9zdHlsZS9JbmRleFBhZ2UnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgV2hhdCBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvV2hhdCc7XHJcbmltcG9ydCBCdXR0b25WaWV3cyBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvQnV0dG9uVmlld3MnO1xyXG5pbXBvcnQgTmV3SG90IGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9OZXdIb3QnO1xyXG5pbXBvcnQgTGlzdFByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0xpc3RQcm9kdWN0JztcclxuaW1wb3J0IFBhcnRuZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9QYXJ0bmVyXCI7XHJcbmltcG9ydCBQb3BvdmVyRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcG92ZXIvSW5kZXhcIjtcclxuaW1wb3J0IExpc3RNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9MaXN0TWVudSc7XHJcbmltcG9ydCBHYW1lcGFkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR2FtZXBhZCc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0cyc7XHJcbi8vSW1wb3J0IFNDU1NcclxuaW1wb3J0IFwiLi4vYXNzZXRzL3Njc3Mvc3R5bGUuc2Nzc1wiO1xyXG4vL0ltcG9ydCBDb25zdFxyXG5pbXBvcnQgeyBhcG9sbG9DbGllbnQgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgR0VUX0FEX1NFTExfTEVBU0VTLCBIT01FX0dFVF9BRF9TRUxMX0xFQVNFUywgR0VUX0FEX1NFTExfTEVBU0VfV0lTSF9MSVNUIH0gZnJvbSBcIi4uL2dyYXBocWwvYWRfc2VsbF9sZWFzZXMvcXVlcmllc1wiO1xyXG5pbXBvcnQgeyBHRVRfUFJPSkVDVF9MSVNULCBIT01FX0dFVF9QUk9KRUNUX0xJU1QgfSBmcm9tIFwiLi4vZ3JhcGhxbC9wcm9qZWN0L3F1ZXJpZXNcIjtcclxuLy9JbXBvcnQgTW9kdWxlXHJcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSBcIi4uL21vZHVsZXMvdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IEFkU2VsbExlYXNlc0xpc3RQcm9wcywgUHJvamVjdExpc3RQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ludGVyZmFjZVwiXHJcblxyXG4vLyBpbnRlcmZhY2UgRGF0YU5ld3NQcm9wcyB7XHJcbi8vICAgc2x1Zzogc3RyaW5nLFxyXG4vLyAgIGxpbms6IHN0cmluZyxcclxuLy8gICB0aXRsZToge1xyXG4vLyAgICAgcmVuZGVyZWQ6IHN0cmluZ1xyXG4vLyAgIH0sXHJcbi8vICAgZXhjZXJwdDoge1xyXG4vLyAgICAgcmVuZGVyZWQ6IHN0cmluZ1xyXG4vLyAgIH0sXHJcbi8vICAgZmVhdHVyZWRfaW1hZ2VfdXJsOiBzdHJpbmcsXHJcbi8vICAgZGF0ZTogc3RyaW5nXHJcbi8vIH1cclxuXHJcbmNvbnN0IEluZGV4UGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtkYXRhQWRTZWxsTGVhc2VzVmlld2VkLCBzZXREYXRhQWRTZWxsTGVhc2VWaWV3ZWRdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtkYXRhUHJvamVjdFZpZXdlZCwgc2V0RGF0YVByb2plY3RWaWV3ZWRdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtkYXRhQWRTZWxsTGVhc2VXaXNobGlzdCwgc2V0RGF0YUFkU2VsbExlYXNlV2lzaGxpc3RdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtkYXRhUHJvamVjdCwgc2V0RGF0YVByb2plY3RdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2UsIHNldFN0YXR1c0xvYWRpbmdBZFNlbGxMZWFzZV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZGF0YU5ld3MsIHNldERhdGFOZXdzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3RhdHVzTG9hZGluZ1Byb2plY3QsIHNldFN0YXR1c0xvYWRpbmdQcm9qZWN0XSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzdGF0dXNMb2FkaW5nTmV3cywgc2V0U3RhdHVzTG9hZGluZ05ld3NdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgbGV0IG5ld3NVcmxBcGkgPSAnaHR0cHM6Ly9uaGFkYXRtb2kubmV0L3Rpbi10dWMvd3AtanNvbi93cC92Mi9wb3N0cz9wZXJfcGFnZT04JztcclxuICBjb25zdCBjbGFzc2VzID0gaW5kZXhQYWdlU3R5bGU7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdmlld2VkSXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZVZpZXdlZCk7XHJcbiAgICBpZiAodmlld2VkSXRlbSAmJiAhVmFsaWRhdG9yLmlzQmxhbmsodmlld2VkSXRlbSkpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgdmlld2VkSXRlbU9iamVjdCA9IEpTT04ucGFyc2Uodmlld2VkSXRlbSk7XHJcbiAgICAgICAgc2V0RGF0YUFkU2VsbExlYXNlVmlld2VkKHZpZXdlZEl0ZW1PYmplY3QpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCB2aWV3ZWRQcm9qZWN0SXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZVByb2plY3RWaWV3ZWQpO1xyXG4gICAgaWYgKHZpZXdlZFByb2plY3RJdGVtICYmICFWYWxpZGF0b3IuaXNCbGFuayh2aWV3ZWRQcm9qZWN0SXRlbSkpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgdmlld2VkSXRlbU9iamVjdCA9IEpTT04ucGFyc2Uodmlld2VkUHJvamVjdEl0ZW0pO1xyXG4gICAgICAgIHNldERhdGFQcm9qZWN0Vmlld2VkKHZpZXdlZEl0ZW1PYmplY3QpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0dldCBEYXRhIE5ld3NcclxuICAgIGZldGNoKG5ld3NVcmxBcGkpXHJcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIHNldERhdGFOZXdzKGRhdGEpO1xyXG4gICAgICAgIHNldFN0YXR1c0xvYWRpbmdOZXdzKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbc3RhdHVzTW9kYWwsIHNldE1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB1cGRhdGVNb2RhbCA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgIHNldE1vZGFsKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IExpc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxBZFNlbGxMZWFzZUluZGV4IGZpbHRlcj17XCJ7J3R5cGUyJzonNWU3ZDVmNTQzZjY2Mzg3OWM2NzUwOTI3LDVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYyw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWEsNWU3ZDYxMzIzZjY2Mzg3OWM2NzUwOTk3LDVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYid9XCJ9IHRpdGxlPXsnQsOhbiBuaMOgJ30gdHlwZT17J2gyJ30gaHJlZj17Jy9bc2x1Z10nfSBwYXRoPXsnL211YS1iYW4tbmhhJ30gLz5cclxuICAgICAgICB7LyogPEFkU2VsbExlYXNlSW5kZXggZmlsdGVyPXtcInsndHlwZTInOic1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWUsNWU2NzA3N2UxZmVhMjczYTk4NWQxZDM2LDVlNjcwNzBmMWZlYTI3M2E5ODVkMWQzNSw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWQsNWU2NzA3OTgxZmVhMjczYTk4NWQxZDM3J31cIn0gdGl0bGU9eydCw6FuIMSR4bqldCd9IHR5cGU9eydoMid9IGhyZWY9eycvW3NsdWddJ30gcGF0aD17Jy9tdWEtYmFuLWRhdCd9Lz4gKi99XHJcbiAgICAgICAgey8qIDxBZFNlbGxMZWFzZUluZGV4IGZpbHRlcj17XCJ7J3R5cGUyJzonNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWE5LDVlN2Q2MjBmM2Y2NjM4NzljNjc1MDlmOCw1ZTdkNjIyZDNmNjYzODc5YzY3NTBhMDcsNWU3ZDYyNGIzZjY2Mzg3OWM2NzUwYTE1LDVlN2Q2MjZiM2Y2NjM4NzljNjc1MGEyMyw1ZTdkNjI4YjNmNjYzODc5YzY3NTBhMzQsNWU3ZDYyYTUzZjY2Mzg3OWM2NzUwYTQyLDVlN2Q2MmNjM2Y2NjM4NzljNjc1MGE1MSw1ZTdkNjJmYzNmNjYzODc5YzY3NTBhNmEsNWU3ZDYzMTkzZjY2Mzg3OWM2NzUwYTdiLDVlN2Q2MzJmM2Y2NjM4NzljNjc1MGE4ZCw1ZTk5MjRmNjcxNmVlOTY0YjVmZGNjMjMnfVwifSB0aXRsZT17J0LDoW4gY8SDbiBo4buZIGNodW5nIGPGsCd9IHR5cGU9eydoMid9IGhyZWY9eycvW3NsdWddJ30gcGF0aD17Jy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdSd9Lz4gKi99XHJcbiAgICAgICAgey8qIDxBZFNlbGxMZWFzZUluZGV4IGZpbHRlcj17XCJ7J3R5cGUyJzonNWU3ZDYzNjgzZjY2Mzg3OWM2NzUwYWI2LDVlOTEyMjk0OGM3MWQyNWE4NzlkMzBlNiw1ZTdkNjRhZTNmNjYzODc5YzY3NTBhZWYsNWU3ZDY0YzUzZjY2Mzg3OWM2NzUwYWZlLDVlN2Q2NGUyM2Y2NjM4NzljNjc1MGIwYiw1ZTdkNjU4YTNmNjYzODc5YzY3NTBiNzAsNWU3ZDY1MTAzZjY2Mzg3OWM2NzUwYjI3LDVlN2Q2NTVlM2Y2NjM4NzljNjc1MGI1MSw1ZTdkNjViODNmNjYzODc5YzY3NTBiOGEnfVwifSB0aXRsZT17J0LDoW4gYmnhu4d0IHRo4buxJ30gdHlwZT17J2gyJ30gaHJlZj17Jy9bc2x1Z10nfSBwYXRoPXsnL211YS1iYW4tYmlldC10aHUnfS8+ICovfVxyXG4gICAgICAgIHsvKiA8QWRTZWxsTGVhc2VJbmRleCBmaWx0ZXI9e1wieyd0eXBlMic6JzVlNjcwN2MyMWZlYTI3M2E5ODVkMWQzOCw1ZTY3MDdlMDFmZWEyNzNhOTg1ZDFkMzksNWU2NzA3ZjgxZmVhMjczYTk4NWQxZDNhLDVlMTFiMDQ2NTIxODEzYTc4Y2RlODViMCw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWYnfVwifSB0aXRsZT17J0LDoW4gY8OhYyBsb+G6oWkgYuG6pXQgxJHhu5luZyBz4bqjbiBraMOhYyd9IHR5cGU9eydoMid9IGhyZWY9eycvW3NsdWddJ30gcGF0aD17Jy9tdWEtYmFuLWJhdC1kb25nLXNhbi1raGFjJ30vPiAqL31cclxuICAgICAgICB7LyogPEFkU2VsbExlYXNlSW5kZXggZmlsdGVyPXtcInsndHlwZTEnOic1ZTExYWYwNDQxMWUxZWE3MmExZmNiZGYnfVwifSB0aXRsZT17J05ow6AgxJHhuqV0IGNobyB0aHXDqid9IHR5cGU9eydoMid9IGhyZWY9eycvW3NsdWddJ30gcGF0aD17Jy9uaGEtZGF0LXRodWUnfS8+ICovfVxyXG4gICAgICAgIHsvKiA8QWRTZWxsTGVhc2VJbmRleCBmaWx0ZXI9e1wieyd0eXBlMic6JzVlMTFhZjA0NDExZTFlYTcyYTFmY2JlMCd9XCJ9IHRpdGxlPXsnTmjDoCDEkeG6pXQgY+G6p24gbXVhJ30gdHlwZT17J2gyJ30gaHJlZj17Jy9bc2x1Z10nfSBwYXRoPXsnL25oYS1kYXQtY2FuLW11YSd9Lz4gKi99XHJcbiAgICAgICAgey8qIDxBZFNlbGxMZWFzZUluZGV4IGZpbHRlcj17XCJ7J3R5cGUyJzonNWUxMWFmMDQ0MTFlMWVhNzJhMWZjYmUxJ31cIn0gdGl0bGU9eydOaMOgIMSR4bqldCBj4bqnbiB0aHXDqid9IHR5cGU9eydoMid9IGhyZWY9eycvW3NsdWddJ30gcGF0aD17Jy9uaGEtZGF0LWNhbi10aHVlJ30vPiAqL31cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCB0cmFuc2FjdGlvbkhvdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFRpdGxlQmxvY2tcclxuICAgICAgICAgIHRpdGxlPVwiU+G6o24gcGjhuqltIHRoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQgaGnhu4duIMSR4bqhaVwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlThu5VuZyBo4bujcCBuaOG7r25nIG3huqt1IHRoaeG6v3Qga+G6vyBoaeG7h24gxJHhuqFpXCJcclxuICAgICAgICAgIHR5cGU9e1wiaDJcIn0gcGF0aD17XCIvZHUtYW4tYmF0LWRvbmctc2FuXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SG90TG9jYXRpb24gLz5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJJY29uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2ZpeGVkJywgYm90dG9tOiAzMCwgcmlnaHQ6IDMwIH19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YSB0aXRsZT1cIlRyw7IgY2h1eeG7h24gRmFjZWJvb2tcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIGhyZWY9XCJodHRwOi8vbS5tZS85MjU3OTAyMjQxNjQ4NTI/cmVmPXpvem92blwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vem96by52bi9wdWJsaWMvdGhlbWUvY2lyY2xlL2ltYWdlcy93aWRnZXRzL2ZibWVzc2VuZ2VyLnN2Z1wiIGFsdD1cImJ0bi1mYWNlYm9va1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxhIHRpdGxlPVwiQ2hhdCB24bubaSBjaMO6bmcgdMO0aSBxdWEgWmFsb1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCIgaHJlZj1cImh0dHBzOi8vemFsby5tZS8wMzc3NTM1NzE3XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly96b3pvLnZuL3B1YmxpYy90aGVtZS9jaXJjbGUvaW1hZ2VzL3dpZGdldHMvemFsby5zdmdcIiBhbHQ9XCJidG4temFsb1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxhIHRpdGxlPVwiR+G7jWkgbmdheVwiIGhyZWY9XCJ0ZWw6MDkzNjA2MjE2NlwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vem96by52bi9wdWJsaWMvdGhlbWUvY2lyY2xlL2ltYWdlcy93aWRnZXRzL2NhbGwuc3ZnXCIgYWx0PVwiYnRuLWNhbGxub3dcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsZXQgcGFnZVRpdGxlID0gJ07hu5lpIHRo4bqldCBEb2RvJztcclxuICBsZXQgcGFnZURlc2NyaXB0aW9uID0gJ07hu5lpIHRo4bqldCBEb2RvIMSRw7NuIMSR4bqndSB4dSBoxrDhu5tuZyc7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRcclxuICAgICAgdGl0bGU9e3BhZ2VUaXRsZX1cclxuICAgICAgZGVzY3JpcHRpb249e3BhZ2VEZXNjcmlwdGlvbn1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBzdGF0dXNNb2RhbD17c3RhdHVzTW9kYWx9XHJcbiAgICAgIHVwZGF0ZU1vZGFsPXt1cGRhdGVNb2RhbH1cclxuICAgICAgY2Fub25pY2FsPXttYWluVVJMfVxyXG4gICAgICBwYXRoPXsnJ31cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgIDxMaXN0TWVudSAvPlxyXG4gICAgICAgICAgPE5ld0hvdCAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICAgIDxTZWFyY2hIb21lcGFnZSAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCAwJyB9fT5cclxuICAgICAgICAgICAgPFdoYXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvblZpZXdzIC8+XHJcbiAgICAgICAgICB7LyogPFByb2R1Y3QgLz4gKi99XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+PC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlfY29udGFpbmVyXCI+XHJcbiAgICAgICAgey8qIDxMaXN0IC8+ICovfVxyXG4gICAgICAgIHsvKiBT4bqjbiBwaOG6qW0gxJHDoyB4ZW0gKi99XHJcbiAgICAgICAgey8qIFPhuqNuIHBo4bqpbSBi4bqhbiB0aMOtY2ggKi99XHJcbiAgICAgICAgey8qIFPhuqNuIHBo4bqpbSBIT1QgKi99XHJcbiAgICAgICAgey8qIHtwcm9qZWN0V2FodGNoZWQoKX0gKi99XHJcbiAgICAgICAge3RyYW5zYWN0aW9uSG90KCl9XHJcbiAgICAgICAgey8qIFRpbiB04bupYyAgdOG7lW5nIGjhu6NwICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFBhcnRuZXIgLz5cclxuICAgICAgPFNlYXJjaEtleXdvcmQgLz5cclxuICAgICAgPExpc3RQcm9kdWN0IC8+XHJcbiAgICAgIHtyZW5kZXJJY29uKCl9XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9iYWQtZGQ2MzVjM2YzOWU0MDI3NzU3MzUxMzg0NjMxNTliMDUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ2luLThiNDFjMzZlMmY0YTIwNDQ3NDY3NTQ3MjdlNGUyNWY0LnBuZ1wiOyIsImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lLCBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgaW5kZXhQYWdlU3R5bGUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgICBidXR0b246IHtcclxuICAgICAgICB3aWR0aDogJzMwMHB4JyxcclxuICAgICAgICBmbG9hdDogJ2xlZnQnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgcGFkZGluZzogJzAgMzBweCcsXHJcbiAgICAgICAgLy8gQGluY2x1ZGUgYnJlYWtwb2ludChtZERvd24pIHtcclxuICAgICAgICAvLyAgIHBhZGRpbmc6ICcwIDIwcHgnLFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJyRmb250RmFtaWx5JyxcclxuICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogJzkwMCcsXHJcbiAgICAgICAgICAgIG1hcmdpbjogJy0xNXB4IDAgMzBweCAwJyxcclxuICAgICAgICAgICAgY29sb3I6ICcjYWFhJyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzEwcHggMTVweCFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgI2U2ZTZlNicsXHJcbiAgICAgICAgICAgIC8vICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAnI2YwZjBmMCcsXHJcbiAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQge1xyXG4gICAgaW5kZXhQYWdlU3R5bGUsXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS93aXRoV2lkdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcERvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcFVwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRHJhZnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FY29cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9HYW1lcGFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbmZvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlQmVmb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZU5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lSXBob25lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlbmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJSYXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9WaWV3TGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vd2wtY2Fyb3VzZWwyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4LWkxOG5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=