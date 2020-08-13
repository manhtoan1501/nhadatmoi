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

/***/ "./components/Home/Products.jsx":
/*!**************************************!*\
  !*** ./components/Home/Products.jsx ***!
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
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "@material-ui/icons/StarBorder");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../constants/index */ "./constants/index.ts");
/* harmony import */ var _material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Gamepad */ "@material-ui/icons/Gamepad");
/* harmony import */ var _material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_19__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Home\\Products.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  product: {
    // border: '1px solid white',
    borderRadius: 2,
    '&:hover': {
      boxShadow: '2px 2px 8px 2px #aaa'
    }
  }
}));

const Actions = props => {
  const classes = useStyles();
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    container: true,
    spacing: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, _constants_index__WEBPACK_IMPORTED_MODULE_16__["products"].map((item, index) => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      itrem: true,
      xs: 3,
      style: {
        padding: 10
      },
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: classes.product,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: item.image,
      style: {
        height: 200,
        width: '100%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 33
      }
    }), __jsx("div", {
      style: {
        padding: '4px 8px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 33
      }
    }, __jsx("div", {
      style: {
        height: 50,
        width: "100%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 37
      }
    }, __jsx(_material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_17___default.a, {
      style: {
        fontSize: 15,
        color: '#1976d2'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 41
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      style: {
        display: 'inline',
        padding: 4,
        color: '#aaa'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 41
      }
    }, item.title)), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 37
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      style: {
        display: 'inline-block',
        fontWeight: 500
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 41
      }
    }, item.moneyNew.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."), " ", ' đ '), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "subtitle2",
      style: {
        display: 'inline-block',
        color: '#aaa',
        textDecoration: 'line-through',
        padding: 4
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 41
      }
    }, ` ${item.moneyOld}`)))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Actions);

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
/* harmony import */ var _material_ui_icons_Https__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/icons/Https */ "@material-ui/icons/Https");
/* harmony import */ var _material_ui_icons_Https__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Https__WEBPACK_IMPORTED_MODULE_28__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Layout\\Header.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





























const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  rootPopover: {
    pointerEvents: 'none',
    position: 'absolute',
    marginTop: 10,
    overflow: 'auto'
  },
  menus: {
    display: 'inline-block',
    color: 'white',
    padding: 8,
    // fontWeight: 500,
    cursor: 'pointer',
    // fontFamily: 'Sans-serif',
    "&:hover": {
      // color: '#33eaff',
      textDecoration: 'underline'
    }
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
const menus = [{
  name: 'Giường ngủ'
}, {
  name: 'Tủ quàn áo'
}, {
  name: 'Bàn trà phòng khách'
}, {
  name: 'Kệ tủ tivi'
}, {
  name: 'Bàn ăn'
}, {
  name: 'Bàn trang điểm'
}, {
  name: 'Tủ giày'
}, {
  name: 'Bàn trang điểm'
}];

const Actions = props => {
  const classes = useStyles();
  const [countMenu, setCountMenu] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [openMenu, setOpenMenu] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const anchorRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null); // return focus to the button when we transitioned from !open -> open

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
  }, menus.map((item, index) => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      key: index,
      className: classes.menus,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }
    }, item.name);
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, __jsx(_Login_Modal__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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

/***/ "./components/Public/Title.jsx":
/*!*************************************!*\
  !*** ./components/Public/Title.jsx ***!
  \*************************************/
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
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Grow */ "@material-ui/core/Grow");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Popper */ "@material-ui/core/Popper");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_Https__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/Https */ "@material-ui/icons/Https");
/* harmony import */ var _material_ui_icons_Https__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Https__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_28__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Public\\Title.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





























const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  title: {
    fontSize: 25,
    fontWeight: 600,
    cursor: 'default',
    color: '#1976d2'
  }
}));

const Actions = props => {
  const classes = useStyles();
  const {
    title
  } = props;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
    className: classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (Actions);

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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./constants/index.ts");
/* harmony import */ var _style_IndexPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../style/IndexPage */ "./style/IndexPage.jsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Home_What__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Home/What */ "./components/Home/What.jsx");
/* harmony import */ var _components_Home_ButtonViews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Home/ButtonViews */ "./components/Home/ButtonViews.jsx");
/* harmony import */ var _components_Home_NewHot__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Home/NewHot */ "./components/Home/NewHot.jsx");
/* harmony import */ var _components_Home_ListProduct__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Home/ListProduct */ "./components/Home/ListProduct.jsx");
/* harmony import */ var _components_Home_Partner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Home/Partner */ "./components/Home/Partner.jsx");
/* harmony import */ var _components_Home_ListMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Home/ListMenu */ "./components/Home/ListMenu.jsx");
/* harmony import */ var _components_Home_Products__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Home/Products */ "./components/Home/Products.jsx");
/* harmony import */ var _components_Public_Title__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Public/Title */ "./components/Public/Title.jsx");
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/scss/style.scss */ "./assets/scss/style.scss");
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../modules/validator */ "./modules/validator.tsx");
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
  const classes = _style_IndexPage__WEBPACK_IMPORTED_MODULE_8__["indexPageStyle"];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let viewedItem = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageViewed"]);

    if (viewedItem && !_modules_validator__WEBPACK_IMPORTED_MODULE_19__["default"].isBlank(viewedItem)) {
      try {
        let viewedItemObject = JSON.parse(viewedItem);
        setDataAdSellLeaseViewed(viewedItemObject);
      } catch (e) {
        console.log(e);
      }
    }

    let viewedProjectItem = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["localStorageProjectViewed"]);

    if (viewedProjectItem && !_modules_validator__WEBPACK_IMPORTED_MODULE_19__["default"].isBlank(viewedProjectItem)) {
      try {
        let viewedItemObject = JSON.parse(viewedProjectItem);
        setDataProjectViewed(viewedItemObject);
      } catch (e) {
        console.log(e);
      }
    } //Get Data News


    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()(newsUrlApi).then(r => r.json()).then(data => {
      setDataNews(data);
      setStatusLoadingNews(false);
    });
  }, []);
  const [statusModal, setModal] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);

  const updateModal = data => {
    setModal(data);
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
        lineNumber: 100,
        columnNumber: 9
      }
    }), __jsx(_components_Index_HotLocation__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
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
        lineNumber: 112,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
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
        lineNumber: 114,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "https://zozo.vn/public/theme/circle/images/widgets/fbmessenger.svg",
      alt: "btn-facebook",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    }))), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
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
        lineNumber: 119,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "https://zozo.vn/public/theme/circle/images/widgets/zalo.svg",
      alt: "btn-zalo",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }
    }))), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }
    }, __jsx("a", {
      title: "G\u1ECDi ngay",
      href: "tel:0936062166",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "https://zozo.vn/public/theme/circle/images/widgets/call.svg",
      alt: "btn-callnow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
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
    canonical: _constants__WEBPACK_IMPORTED_MODULE_7__["mainURL"],
    path: '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 0,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
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
      lineNumber: 145,
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
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx(_components_Home_ListMenu__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }), __jsx(_components_Home_NewHot__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, __jsx(_components_Index_SearchHomepage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      padding: '20px 0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, __jsx(_components_Home_What__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  })), __jsx(_components_Home_ButtonViews__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }), __jsx(_components_Public_Title__WEBPACK_IMPORTED_MODULE_17__["default"], {
    title: 'Sản phẩm bán chạy',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }), __jsx(_components_Home_Products__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
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
      lineNumber: 159,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "body_container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, transactionHot()), __jsx(_components_Home_Partner__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }), __jsx(_components_Search_KeywordSlide__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }), __jsx(_components_Home_ListProduct__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
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

/***/ "@material-ui/icons/Https":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Https" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Https");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvQnV0dG9uVmlld3MuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS9hMS5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL2EyLmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2UvYTMuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS9hNC5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL2E1LmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2UvYTYuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS9hNy5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL2E4LmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2UvYTkuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9JbWFnZS93aGF0Mi5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ltYWdlL3doYXQzLmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSW1hZ2Uvd2hhdDQuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9MaXN0TWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0xpc3RQcm9kdWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvTmV3SG90LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvUGFydG5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3RzLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvV2hhdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbmRleC9Ib3RMb2NhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbmRleC9TZWFyY2hIb21lcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbmRleC9UaXRsZUJsb2NrLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1YmxpYy9UaXRsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2gvS2V5d29yZFNsaWRlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy92YWxpZGF0b3IudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL0ltYWdlL2JhZC5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL0ltYWdlL2xvZ2luLnBuZyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9JbmRleFBhZ2UuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZUJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvd2l0aFdpZHRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcERvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEcm9wVXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRHJhZnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Vjb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FbWFpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2FtZXBhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9IdHRwc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9JbmZvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlQmVmb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlTmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG9uZUlwaG9uZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJSYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZpZXdMaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtb3dsLWNhcm91c2VsMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4LWkxOG5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWluV2lkdGgiLCJ3aWR0aCIsImltYWdlIiwicG9zaXRpb24iLCJoZWlnaHQiLCJicmVha3BvaW50cyIsImRvd24iLCJ6SW5kZXgiLCJvcGFjaXR5IiwiYm9yZGVyIiwiZm9jdXNWaXNpYmxlIiwiaW1hZ2VCdXR0b24iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsImltYWdlU3JjIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJpbWFnZUJhY2tkcm9wIiwiYmFja2dyb3VuZENvbG9yIiwiYmxhY2siLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJpbWFnZVRpdGxlIiwicGFkZGluZyIsImltYWdlTWFya2VkIiwiQnV0dG9uVmlld3MiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJpbWFnZXMiLCJ1cmwiLCJ0aXRsZSIsImNsYXNzZXMiLCJtYXAiLCJmb250U2l6ZSIsImJhY2tncm91bmRJbWFnZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoU3R5bGVzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImxpc3RJdGVtIiwidGV4dEl0ZW0iLCJwYWRkaW5nUmlnaHQiLCJwb3BvdmVyIiwicG9pbnRlckV2ZW50cyIsIk5lc3RlZExpc3QiLCJvcGVuIiwic2V0T3BlbiIsInVzZVN0YXRlIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImluZGV4TWVudSIsInNldEluZGV4TWVudSIsImNvdW50TWVudSIsInNldENvdW50TWVudSIsImhhbmRsZVBvcG92ZXJPcGVuIiwiZXZlbnQiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVQb3BvdmVyQ2xvc2UiLCJzZXRIb3Zlck1lbnUiLCJjb3VudCIsImlkIiwidW5kZWZpbmVkIiwibGlzdE1lbnUiLCJpdGVtIiwicm9vbXMiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJjb3Jzb3IiLCJlbGVtZW50Iiwicm9vbSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInBhcGVyIiwiZ3JpZExpc3QiLCJ0cmFuc2Zvcm0iLCJwcmltYXJ5IiwibGlnaHQiLCJ0aXRsZUJhciIsIkFjdGlvbnMiLCJzdGF0ZSIsInRpbGVEYXRhIiwiaW1nIiwiYXV0aG9yIiwidGlsZSIsImNhcmQiLCJtYXhXaWR0aCIsImltZ1pvb20iLCJib3hTaGFkb3ciLCJjb250ZW50IiwiSW5kZXgiLCJ0ZXh0QWxpZ24iLCJpY29uIiwiZmlsdGVyIiwiS2V5d29yZFNsaWRlIiwiTmV4dEFycm93Iiwib25DbGljayIsIlByZXZBcnJvdyIsImRhdGFTZWFyY2giLCJwYXRoIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW5pdGlhbFNsaWRlIiwibmV4dEFycm93IiwicHJldkFycm93IiwidmFyaWFibGVXaWR0aCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiYTEiLCJhMiIsImEzIiwiYTQiLCJhNSIsImE2IiwiYTciLCJhOCIsImE5IiwiZm9udFdlaWdodCIsInByb2R1Y3QiLCJib3JkZXJSYWRpdXMiLCJwcm9kdWN0cyIsIm1vbmV5TmV3IiwidG9TdHJpbmciLCJyZXBsYWNlIiwidGV4dERlY29yYXRpb24iLCJtb25leU9sZCIsInZpZXdQaG9uZSIsImNzc0ljb24iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJhcnJJbWciLCJ3aGF0NCIsIndoYXQyIiwid2hhdDMiLCJhcnJheSIsImJhY2tncm91bmRSZXBlYXQiLCJTbGlkZXIiLCJkeW5hbWljIiwic3NyIiwiSG90TG9jYXRpb24iLCJkYXRhTG9jYXRpb24iLCJpbWFnZU9iamVjdCIsIlN0cmluZyIsImlucHV0YmFzZSIsImZsb2F0IiwibWFyZ2luTGVmdCIsInNlYXJjaEhvbWUiLCJtaW5IZWlnaHQiLCJzZWFyY2hIb21lQm9keSIsInZpZXdTZWFyY2giLCJpY29uU2VhcmNoIiwibWFyZ2luVG9wIiwiaWNvbkJ1dHRvbiIsIlNlYXJjaEhvbWVwYWdlIiwib25DaGFuZ2VXYXJkcyIsImtleSIsImtleUNvZGUiLCJpbWFnZUJhY2tncm91bmQiLCJzdWdnZXN0aW9ucyIsImxpbmsiLCJoaXN0b3J5IiwicmVuZGVyU3VnZ2VzdGlvbiIsImN1cnNvciIsInJlbmRlckhpc3RvcnkiLCJsZW5ndGgiLCJlIiwiVGl0bGVCbG9jayIsImRvbVRpdGxlIiwidHlwZSIsImRvbUJsb2NrVGl0bGUiLCJpbmRleE9mIiwiaHJlZiIsImRlc2NyaXB0aW9uIiwiRm9vdGVyUGFnZSIsInJvb3RQb3BvdmVyIiwibWVudXMiLCJvdmVyZmxvd1giLCJoZWFkZXIiLCJkaXZpZGVyIiwibWFyZ2luIiwic3BhY2luZyIsIm5hbWUiLCJvcGVuTWVudSIsInNldE9wZW5NZW51IiwiYW5jaG9yUmVmIiwidXNlUmVmIiwicHJldk9wZW4iLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZm9jdXMiLCJMb2dvIiwicmVxdWlyZSIsIkxheW91dFBhZ2UiLCJzdGF0dXNNb2RhbCIsInNldE1vZGFsIiwidXBkYXRlTW9kYWwiLCJkYXRhIiwiZGF0YUNvbXBhcmVMb2NhbCIsInNldERhdGFDb21wYXJlTG9jYWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYWxTdG9yYWdlQ29tcGFyZUtleSIsIlZhbGlkYXRvciIsImlzQmxhbmsiLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzY2hlbWFPYmplY3QiLCJjYW5vbmljYWwiLCJnb29nbGVTZWFyY2hDb25zb2xlIiwiX19odG1sIiwiY2hpbGRyZW4iLCJsb25nSW4iLCJsb2dJbkNsb3NlIiwibW9kYWwiLCJsaW5lSGVpZ2h0IiwidGFicyIsInZhbHVlIiwibGFiZWwiLCJMb2dpbk1vZGFsIiwidmFsdWVUYWIiLCJzZXRWYWx1ZVRhYiIsInJlbmRlckdvb2dsZSIsImdvb2dsZUxvZ2luIiwicmVuZGVyWmFsbyIsInphbG9Mb2dpbiIsInJlbmRlckZhY2UiLCJmYWNlYm9va0xvZ2luIiwiaGFuZGxlVGFic0NoYW5nZSIsInJlbmRlclRhYnMiLCJ0YWIiLCJyZW5kZXJMb2dpbiIsInJlbmRlckNyZWF0ZUFjY291bnQiLCJib3JkZXJSaWdodCIsIkltYWdlTG9naW4iLCJzZWFyY2hPYmplY3QiLCJtYWluVVJMIiwidXBncmFkZVBsYW5VUkwiLCJ1cGdyYWRlSWNvblVSTCIsImxvZ29VUkwiLCJhcGlCYXNlVVJMIiwiYXBpR3JhcGhRTFVSTCIsInVybEltYWdlQWRTZWxsTGVhc2UiLCJ1cmxJbWFnZVByb2plY3QiLCJ1cmxJbWFnZUJyb2tlciIsImltYWdlRGVmYXVsdFByb2plY3QiLCJpbWFnZURlZmF1bHRTbGlkZXIiLCJpbWFnZURlZmF1bHRCcm9rZXIiLCJnb29nbGVBbmFseXRpY3NDb2RlIiwibG9jYWxTdG9yYWdlVmlld2VkIiwibG9jYWxTdG9yYWdlUHJvamVjdFZpZXdlZCIsImFkU2VsbExlYXNlQ2F0ZWdvcnkiLCJzbHVnIiwicGFyZW50X3NsdWciLCJhZFNlbGxMZWFzZVR5cGUiLCJ0eXBlMV9zbHVnIiwidGl0bGVzIiwiZWxlbWVudHMiLCJ0cmltIiwiaXNFbXB0eSIsIm9iaiIsImhhc093blByb3BlcnR5IiwiaXNOdW1iZXIiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJpc0Zpbml0ZSIsImlzRW1haWwiLCJlbWFpbCIsInRlc3QiLCJpc1NsdWciLCJpc1VybCIsInJlZ2V4cCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsImVyciIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwicHJvY2VzcyIsIndhcm4iLCJleGFjdCIsIkxpbmsiLCJwYXNzSHJlZiIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJnZXRSZXNwb25zZSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkluZGV4UGFnZSIsImRhdGFBZFNlbGxMZWFzZXNWaWV3ZWQiLCJzZXREYXRhQWRTZWxsTGVhc2VWaWV3ZWQiLCJkYXRhUHJvamVjdFZpZXdlZCIsInNldERhdGFQcm9qZWN0Vmlld2VkIiwiZGF0YUFkU2VsbExlYXNlV2lzaGxpc3QiLCJzZXREYXRhQWRTZWxsTGVhc2VXaXNobGlzdCIsImRhdGFQcm9qZWN0Iiwic2V0RGF0YVByb2plY3QiLCJzdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2UiLCJzZXRTdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2UiLCJkYXRhTmV3cyIsInNldERhdGFOZXdzIiwic3RhdHVzTG9hZGluZ1Byb2plY3QiLCJzZXRTdGF0dXNMb2FkaW5nUHJvamVjdCIsInN0YXR1c0xvYWRpbmdOZXdzIiwic2V0U3RhdHVzTG9hZGluZ05ld3MiLCJuZXdzVXJsQXBpIiwiaW5kZXhQYWdlU3R5bGUiLCJ2aWV3ZWRJdGVtIiwidmlld2VkSXRlbU9iamVjdCIsInZpZXdlZFByb2plY3RJdGVtIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJ0cmFuc2FjdGlvbkhvdCIsInJlbmRlckljb24iLCJwYWdlVGl0bGUiLCJwYWdlRGVzY3JpcHRpb24iLCJjcmVhdGVNdWlUaGVtZSIsImZvbnRGYW1pbHkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHQyxLQUFLLEtBQUs7QUFDckJDLFFBQU0sRUFBRTtBQUNKQyxlQUFXLEVBQUU7QUFEVCxHQURhO0FBSXJCQyxNQUFJLEVBQUU7QUFDRkMsV0FBTyxFQUFFLE1BRFA7QUFFRkMsWUFBUSxFQUFFLE1BRlI7QUFHRkMsWUFBUSxFQUFFLEdBSFI7QUFJRkMsU0FBSyxFQUFFO0FBSkwsR0FKZTtBQVVyQkMsT0FBSyxFQUFFO0FBQ0hDLFlBQVEsRUFBRSxVQURQO0FBRUhDLFVBQU0sRUFBRSxHQUZMO0FBR0gsS0FBQ1YsS0FBSyxDQUFDVyxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQzVCRixZQUFNLEVBQUU7QUFEb0IsS0FIN0I7QUFNSCwrQkFBMkI7QUFDdkJHLFlBQU0sRUFBRSxDQURlO0FBRXZCLDBCQUFvQjtBQUNoQkMsZUFBTyxFQUFFO0FBRE8sT0FGRztBQUt2Qix3QkFBa0I7QUFDZEEsZUFBTyxFQUFFO0FBREssT0FMSztBQVF2Qix1QkFBaUI7QUFDYkMsY0FBTSxFQUFFLHdCQURLO0FBRWIsU0FBQ2YsS0FBSyxDQUFDVyxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQzVCRyxnQkFBTSxFQUFFO0FBRG9CO0FBRm5CO0FBUk07QUFOeEIsR0FWYztBQWdDckJDLGNBQVksRUFBRSxFQWhDTztBQWlDckJDLGFBQVcsRUFBRTtBQUNUUixZQUFRLEVBQUUsVUFERDtBQUVUUyxRQUFJLEVBQUUsQ0FGRztBQUdUQyxTQUFLLEVBQUUsQ0FIRTtBQUlUQyxPQUFHLEVBQUUsQ0FKSTtBQUtUQyxVQUFNLEVBQUUsQ0FMQztBQU1UakIsV0FBTyxFQUFFLE1BTkE7QUFPVGtCLGNBQVUsRUFBRSxRQVBIO0FBUVRDLGtCQUFjLEVBQUUsUUFSUDtBQVNUQyxTQUFLLEVBQUV4QixLQUFLLENBQUN5QixPQUFOLENBQWNDLE1BQWQsQ0FBcUJDO0FBVG5CLEdBakNRO0FBNENyQkMsVUFBUSxFQUFFO0FBQ05uQixZQUFRLEVBQUUsVUFESjtBQUVOUyxRQUFJLEVBQUUsQ0FGQTtBQUdOQyxTQUFLLEVBQUUsQ0FIRDtBQUlOQyxPQUFHLEVBQUUsQ0FKQztBQUtOQyxVQUFNLEVBQUUsQ0FMRjtBQU1OUSxrQkFBYyxFQUFFLE9BTlY7QUFPTkMsc0JBQWtCLEVBQUU7QUFQZCxHQTVDVztBQXFEckJDLGVBQWEsRUFBRTtBQUNYdEIsWUFBUSxFQUFFLFVBREM7QUFFWFMsUUFBSSxFQUFFLENBRks7QUFHWEMsU0FBSyxFQUFFLENBSEk7QUFJWEMsT0FBRyxFQUFFLENBSk07QUFLWEMsVUFBTSxFQUFFLENBTEc7QUFNWFcsbUJBQWUsRUFBRWhDLEtBQUssQ0FBQ3lCLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQk8sS0FOM0I7QUFPWG5CLFdBQU8sRUFBRSxHQVBFO0FBUVhvQixjQUFVLEVBQUVsQyxLQUFLLENBQUNtQyxXQUFOLENBQWtCQyxNQUFsQixDQUF5QixTQUF6QjtBQVJELEdBckRNO0FBK0RyQkMsWUFBVSxFQUFFO0FBQ1I1QixZQUFRLEVBQUUsVUFERjtBQUVSNkIsV0FBTyxFQUFHLGlCQUZGO0FBR1IsS0FBQ3RDLEtBQUssQ0FBQ1csV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM1QjBCLGFBQU8sRUFBRztBQURrQjtBQUh4QixHQS9EUztBQXNFckJDLGFBQVcsRUFBRTtBQUNUN0IsVUFBTSxFQUFFLENBREM7QUFFVEgsU0FBSyxFQUFFLEVBRkU7QUFHVHlCLG1CQUFlLEVBQUVoQyxLQUFLLENBQUN5QixPQUFOLENBQWNDLE1BQWQsQ0FBcUJDLEtBSDdCO0FBSVRsQixZQUFRLEVBQUUsVUFKRDtBQUtUWSxVQUFNLEVBQUUsQ0FBQyxDQUxBO0FBTVRILFFBQUksRUFBRSxpQkFORztBQU9UZ0IsY0FBVSxFQUFFbEMsS0FBSyxDQUFDbUMsV0FBTixDQUFrQkMsTUFBbEIsQ0FBeUIsU0FBekI7QUFQSDtBQXRFUSxDQUFMLENBQXBCOztBQWtGQSxNQUFNSSxXQUFOLFNBQTBCQyw0Q0FBSyxDQUFDQyxTQUFoQyxDQUEwQztBQUN0Q0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDZixVQUFNQSxLQUFOO0FBQ0g7O0FBRURDLFFBQU0sR0FBRztBQUNMLFVBQU1DLE1BQU0sR0FBRyxDQUNYO0FBQ0lDLFNBQUcsRUFBRSwrR0FEVDtBQUVJQyxXQUFLLEVBQUUsNEJBRlg7QUFHSXpDLFdBQUssRUFBRTtBQUhYLEtBRFcsRUFNWDtBQUNJd0MsU0FBRyxFQUFFLG1HQURUO0FBRUlDLFdBQUssRUFBRSx1QkFGWDtBQUdJekMsV0FBSyxFQUFFO0FBSFgsS0FOVyxFQVdYO0FBQ0l3QyxTQUFHLEVBQUUsK0VBRFQ7QUFFSUMsV0FBSyxFQUFFLHlCQUZYO0FBR0l6QyxXQUFLLEVBQUU7QUFIWCxLQVhXLENBQWY7QUFpQkEsVUFBTTtBQUFFMEM7QUFBRixRQUFjLEtBQUtMLEtBQXpCO0FBQ0EsV0FDSTtBQUFLLGVBQVMsRUFBRUssT0FBTyxDQUFDOUMsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsd0RBQUQ7QUFBUSxZQUFNLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVRMkMsTUFBTSxDQUFDSSxHQUFQLENBQVcxQyxLQUFLLElBQUk7QUFDaEIsYUFDSSxNQUFDLG1FQUFEO0FBQ0ksbUJBQVcsTUFEZjtBQUVJLFdBQUcsRUFBRUEsS0FBSyxDQUFDd0MsS0FGZjtBQUdJLGlCQUFTLEVBQUVDLE9BQU8sQ0FBQ3pDLEtBSHZCO0FBSUksNkJBQXFCLEVBQUV5QyxPQUFPLENBQUNqQyxZQUpuQztBQUtJLGFBQUssRUFBRTtBQUFFVCxlQUFLLEVBQUVDLEtBQUssQ0FBQ0QsS0FBZjtBQUFzQjRDLGtCQUFRLEVBQUU7QUFBaEMsU0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBT0k7QUFDSSxpQkFBUyxFQUFFRixPQUFPLENBQUNyQixRQUR2QjtBQUVJLGFBQUssRUFBRTtBQUFFd0IseUJBQWUsRUFBRyxPQUFNNUMsS0FBSyxDQUFDdUMsR0FBSTtBQUFwQyxTQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFQSixFQVdJO0FBQU0saUJBQVMsRUFBRUUsT0FBTyxDQUFDbEIsYUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVhKLEVBWUk7QUFBTSxpQkFBUyxFQUFFa0IsT0FBTyxDQUFDaEMsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsbUVBQUQ7QUFBWSxhQUFLLEVBQUMsU0FBbEI7QUFBNEIsaUJBQVMsRUFBRWdDLE9BQU8sQ0FBQ1osVUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLN0IsS0FBSyxDQUFDd0MsS0FEWCxFQUVJO0FBQU0saUJBQVMsRUFBRUMsT0FBTyxDQUFDVixXQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0FESixDQVpKLENBREo7QUFxQkgsS0F0QkQsQ0FGUixDQURKLENBREo7QUErQkg7O0FBdkRxQzs7QUEyRDFDQyxXQUFXLENBQUNhLFNBQVosR0FBd0I7QUFDcEJKLFNBQU8sRUFBRUssaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFETixDQUF4QjtBQUllQyx5SUFBVSxDQUFDMUQsTUFBRCxDQUFWLENBQW1CeUMsV0FBbkIsQ0FBZixFOzs7Ozs7Ozs7OztBQzNKQSxnRjs7Ozs7Ozs7Ozs7QUNBQSxnRjs7Ozs7Ozs7Ozs7QUNBQSxnRjs7Ozs7Ozs7Ozs7QUNBQSxnRjs7Ozs7Ozs7Ozs7QUNBQSxnRjs7Ozs7Ozs7Ozs7QUNBQSxnRjs7Ozs7Ozs7Ozs7QUNBQSxnRjs7Ozs7Ozs7Ozs7QUNBQSxnRjs7Ozs7Ozs7Ozs7QUNBQSxnRjs7Ozs7Ozs7Ozs7QUNBQSxtRjs7Ozs7Ozs7Ozs7QUNBQSxtRjs7Ozs7Ozs7Ozs7QUNBQSxtRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1rQixTQUFTLEdBQUdDLDJFQUFVLENBQUUzRCxLQUFELEtBQVk7QUFDckM0RCxVQUFRLEVBQUU7QUFDTjVCLG1CQUFlLEVBQUUsU0FEWDtBQUVOLGVBQVcsQ0FDUDtBQURPO0FBRkwsR0FEMkI7QUFPckM2QixVQUFRLEVBQUU7QUFDTnJDLFNBQUssRUFBRSxTQUREO0FBRU4yQixZQUFRLEVBQUUsRUFGSjtBQUdOVyxnQkFBWSxFQUFFO0FBSFIsR0FQMkI7QUFZckNDLFNBQU8sRUFBRTtBQUNMQyxpQkFBYSxFQUFFLE1BRFYsQ0FDa0I7O0FBRGxCO0FBWjRCLENBQVosQ0FBRCxDQUE1Qjs7QUFpQkEsU0FBU0MsVUFBVCxHQUFzQjtBQUNsQixRQUFNaEIsT0FBTyxHQUFHUyxTQUFTLEVBQXpCO0FBQ0EsUUFBTSxDQUFDUSxJQUFELEVBQU9DLE9BQVAsSUFBa0IxQiw0Q0FBSyxDQUFDMkIsUUFBTixDQUFlLEtBQWYsQ0FBeEI7QUFDQSxRQUFNLENBQUNDLFFBQUQsRUFBV0MsV0FBWCxJQUEwQjdCLDRDQUFLLENBQUMyQixRQUFOLENBQWUsSUFBZixDQUFoQztBQUNBLFFBQU0sQ0FBQ0csU0FBRCxFQUFZQyxZQUFaLElBQTRCL0IsNENBQUssQ0FBQzJCLFFBQU4sQ0FBZSxJQUFmLENBQWxDO0FBQ0EsUUFBTSxDQUFDSyxTQUFELEVBQVlDLFlBQVosSUFBNEJqQyw0Q0FBSyxDQUFDMkIsUUFBTixDQUFlLElBQWYsQ0FBbEM7O0FBQ0EsUUFBTU8saUJBQWlCLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQWtCO0FBQ3hDUCxlQUFXLENBQUNNLEtBQUssQ0FBQ0UsYUFBUCxDQUFYO0FBQ0FYLFdBQU8sQ0FBQ1MsS0FBSyxDQUFDRSxhQUFQLENBQVA7QUFDQUosZ0JBQVksQ0FBQyxDQUFELENBQVo7QUFDQUYsZ0JBQVksQ0FBQ0ssS0FBRCxDQUFaO0FBQ0gsR0FMRDs7QUFPQSxRQUFNRSxrQkFBa0IsR0FBRyxNQUFNO0FBQzdCVCxlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0FILFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQUssZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDSCxHQUpEOztBQU1BLFFBQU1RLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQzVCUCxnQkFBWSxDQUFDTyxLQUFELENBQVo7QUFDSCxHQUZEOztBQUdBLFFBQU1DLEVBQUUsR0FBR2hCLElBQUksR0FBR0ssU0FBSCxHQUFlWSxTQUE5QjtBQUNBLFNBQ0ksTUFBQyxzREFBRDtBQUNJLGFBQVMsRUFBQyxLQURkO0FBRUksdUJBQWdCLHVCQUZwQixDQUdJO0FBSEo7QUFJSSxTQUFLLEVBQUU7QUFBRTdDLGFBQU8sRUFBRTtBQUFYLEtBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1LOEMsMERBQVEsQ0FBQ2xDLEdBQVQsQ0FBYSxDQUFDbUMsSUFBRCxFQUFPUixLQUFQLEtBQWlCO0FBQzNCLFVBQU07QUFBRVM7QUFBRixRQUFZRCxJQUFsQjtBQUNBLFdBQ0k7QUFBSyxTQUFHLEVBQUVSLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsMERBQUQ7QUFDSSxlQUFTLEVBQUU1QixPQUFPLENBQUNXLFFBRHZCO0FBQ2lDLFlBQU0sTUFEdkM7QUFDd0MsUUFBRSxFQUFFc0IsRUFENUMsQ0FFSTtBQUZKO0FBR0ksV0FBSyxFQUFFO0FBQUVsRCx1QkFBZSxFQUFFeUMsU0FBUyxLQUFLSSxLQUFkLEdBQXNCLFNBQXRCLEdBQWtDLFNBQXJEO0FBQWdFbkUsY0FBTSxFQUFFLEVBQXhFO0FBQTRFNEIsZUFBTyxFQUFFO0FBQXJGLE9BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtJLE1BQUMsaUVBQUQ7QUFBYSxXQUFLLEVBQUU7QUFBRWEsZ0JBQVEsRUFBRSxFQUFaO0FBQWdCM0IsYUFBSyxFQUFFLFNBQXZCO0FBQWtDYyxlQUFPLEVBQUU7QUFBM0MsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxKLEVBTUksTUFBQyw0REFBRDtBQUFZLGVBQVMsRUFBRVcsT0FBTyxDQUFDWSxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0t3QixJQUFJLENBQUNyQyxLQURWLENBTkosQ0FESixFQVdJLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVhKLEVBWUt1QixTQUFTLEtBQUtNLEtBQWQsSUFDRyxNQUFDLHlEQUFEO0FBQ0ksUUFBRSxFQUFFSyxFQURSO0FBRUksZUFBUyxFQUFFakMsT0FBTyxDQUFDYyxPQUZ2QjtBQUdJLFVBQUksRUFBRUcsSUFIVjtBQUlJLGNBQVEsRUFBRUcsUUFKZDtBQUtJLGtCQUFZLEVBQUU7QUFBRWtCLGdCQUFRLEVBQUUsT0FBWjtBQUFxQkMsa0JBQVUsRUFBRTtBQUFqQyxPQUxsQixDQUs4RDtBQUw5RDtBQU1JLHFCQUFlLEVBQUU7QUFBRUQsZ0JBQVEsRUFBRSxLQUFaO0FBQW1CQyxrQkFBVSxFQUFFO0FBQS9CLE9BTnJCLENBTThEO0FBTjlEO0FBT0ksa0JBQVksRUFBRVQsa0JBUGxCLENBUUE7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BVUksTUFBQyxzREFBRDtBQUNJLGVBQVMsRUFBQyxLQURkO0FBRUkseUJBQWdCLHVCQUZwQjtBQUdJLFdBQUssRUFBRTtBQUFFekMsZUFBTyxFQUFFLENBQVg7QUFBYzBCLHFCQUFhLEVBQUUsTUFBN0I7QUFBcUN5QixjQUFNLEVBQUU7QUFBN0MsT0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTVFILEtBQUssQ0FBQ3BDLEdBQU4sQ0FBVSxDQUFDd0MsT0FBRCxFQUFVVCxLQUFWLEtBQW9CO0FBQzFCLGFBQU87QUFBSyxXQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNILE1BQUMsMERBQUQ7QUFDSSxpQkFBUyxFQUFFLElBRGY7QUFFSSxjQUFNLEVBQUUsSUFGWjtBQUdJLGVBQU8sRUFBR0EsS0FBRCxJQUFXRCxZQUFZLENBQUNDLEtBQUQsQ0FIcEM7QUFJSSxhQUFLLEVBQUU7QUFBRWpELHlCQUFlLEVBQUV5QyxTQUFTLEtBQUtRLEtBQWQsR0FBc0IsU0FBdEIsR0FBa0MsU0FBckQ7QUFBZ0V2RSxnQkFBTSxFQUFFLEVBQXhFO0FBQTRFNEIsaUJBQU8sRUFBRTtBQUFyRixTQUpYO0FBS0ksb0JBQVksRUFBRSxNQUFNMEMsWUFBWSxDQUFDQyxLQUFELENBTHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FPSSxNQUFDLGlFQUFEO0FBQWEsYUFBSyxFQUFFO0FBQUU5QixrQkFBUSxFQUFFLEVBQVo7QUFBZ0IzQixlQUFLLEVBQUUsU0FBdkI7QUFBa0NjLGlCQUFPLEVBQUU7QUFBM0MsU0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVBKLEVBUUksTUFBQyw0REFBRDtBQUFZLGlCQUFTLEVBQUVXLE9BQU8sQ0FBQ1ksUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLNkIsT0FBTyxDQUFDQyxJQURiLENBUkosQ0FERyxFQWFILE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWJHLENBQVA7QUFlSCxLQWhCRCxDQU5SLENBVkosQ0FiUixDQURKO0FBcURILEdBdkRBLENBTkwsQ0FESjtBQWlFSDs7QUFFYzFCLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNbEUsTUFBTSxHQUFHQyxLQUFLLEtBQUs7QUFDdEJHLE1BQUksRUFBRTtBQUNIQyxXQUFPLEVBQUUsTUFETjtBQUVIQyxZQUFRLEVBQUUsTUFGUDtBQUdIa0Isa0JBQWMsRUFBRSxjQUhiO0FBSUhxRSxZQUFRLEVBQUUsUUFKUDtBQUtINUQsbUJBQWUsRUFBRWhDLEtBQUssQ0FBQ3lCLE9BQU4sQ0FBY29FLFVBQWQsQ0FBeUJDO0FBTHZDLEdBRGdCO0FBUXRCQyxVQUFRLEVBQUU7QUFDUDFGLFlBQVEsRUFBRSxRQURIO0FBRVA7QUFDQTtBQUNBMkYsYUFBUyxFQUFFO0FBSkosR0FSWTtBQWN0QmhELE9BQUssRUFBRTtBQUNKeEIsU0FBSyxFQUFFeEIsS0FBSyxDQUFDeUIsT0FBTixDQUFjd0UsT0FBZCxDQUFzQkM7QUFEekIsR0FkZTtBQWlCdEJDLFVBQVEsRUFBRTtBQUNQTixjQUFVLEVBQ1A7QUFGSTtBQWpCWSxDQUFMLENBQXBCOztBQXdCQSxNQUFNTyxPQUFOLFNBQXNCM0QsNENBQUssQ0FBQ0MsU0FBNUIsQ0FBc0M7QUFDbkNDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2hCLFVBQU1BLEtBQU47QUFDQSxTQUFLeUQsS0FBTCxHQUFhLEVBQWI7QUFFRjs7QUFFRHhELFFBQU0sR0FBRztBQUNOLFFBQUk7QUFBRUk7QUFBRixRQUFjLEtBQUtMLEtBQXZCO0FBQ0EsUUFBSTBELFFBQVEsR0FBRyxDQUNaO0FBQ0dDLFNBQUcsRUFBRSx1R0FEUjtBQUVHdkQsV0FBSyxFQUFFLG9CQUZWO0FBR0d3RCxZQUFNLEVBQUU7QUFIWCxLQURZLEVBTVo7QUFDR0QsU0FBRyxFQUFFLGdHQURSO0FBRUd2RCxXQUFLLEVBQUUsaUJBRlY7QUFHR3dELFlBQU0sRUFBRTtBQUhYLEtBTlksRUFXWjtBQUNHRCxTQUFHLEVBQUUsa0dBRFI7QUFFR3ZELFdBQUssRUFBRSxtQkFGVjtBQUdHd0QsWUFBTSxFQUFFO0FBSFgsS0FYWSxFQWdCWjtBQUNHRCxTQUFHLEVBQUUsdUdBRFI7QUFFR3ZELFdBQUssRUFBRSxvQkFGVjtBQUdHd0QsWUFBTSxFQUFFO0FBSFgsS0FoQlksRUFxQlo7QUFDR0QsU0FBRyxFQUFFLGdHQURSO0FBRUd2RCxXQUFLLEVBQUUsaUJBRlY7QUFHR3dELFlBQU0sRUFBRTtBQUhYLEtBckJZLEVBMEJaO0FBQ0dELFNBQUcsRUFBRSxrR0FEUjtBQUVHdkQsV0FBSyxFQUFFLG1CQUZWO0FBR0d3RCxZQUFNLEVBQUU7QUFIWCxLQTFCWSxFQStCWjtBQUNHRCxTQUFHLEVBQUUsdUdBRFI7QUFFR3ZELFdBQUssRUFBRSxvQkFGVjtBQUdHd0QsWUFBTSxFQUFFO0FBSFgsS0EvQlksRUFvQ1o7QUFDR0QsU0FBRyxFQUFFLGdHQURSO0FBRUd2RCxXQUFLLEVBQUUsaUJBRlY7QUFHR3dELFlBQU0sRUFBRTtBQUhYLEtBcENZLEVBeUNaO0FBQ0dELFNBQUcsRUFBRSxrR0FEUjtBQUVHdkQsV0FBSyxFQUFFLG1CQUZWO0FBR0d3RCxZQUFNLEVBQUU7QUFIWCxLQXpDWSxFQThDWjtBQUNHRCxTQUFHLEVBQUUsdUdBRFI7QUFFR3ZELFdBQUssRUFBRSxvQkFGVjtBQUdHd0QsWUFBTSxFQUFFO0FBSFgsS0E5Q1ksRUFtRFo7QUFDR0QsU0FBRyxFQUFFLGdHQURSO0FBRUd2RCxXQUFLLEVBQUUsaUJBRlY7QUFHR3dELFlBQU0sRUFBRTtBQUhYLEtBbkRZLEVBd0RaO0FBQ0dELFNBQUcsRUFBRSxrR0FEUjtBQUVHdkQsV0FBSyxFQUFFLG1CQUZWO0FBR0d3RCxZQUFNLEVBQUU7QUFIWCxLQXhEWSxDQUFmO0FBK0RBLFdBQ0c7QUFBSyxlQUFTLEVBQUV2RCxPQUFPLENBQUM5QyxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csTUFBQyx5REFBRDtBQUFRLFVBQUksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csTUFBQyxpRUFBRDtBQUFVLGVBQVMsRUFBRThDLE9BQU8sQ0FBQzhDLFFBQTdCO0FBQXVDLFVBQUksRUFBRSxDQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRU1PLFFBQVEsQ0FBQ3BELEdBQVQsQ0FBYSxDQUFDdUQsSUFBRCxFQUFPNUIsS0FBUCxLQUNWLE1BQUMscUVBQUQ7QUFBYyxTQUFHLEVBQUVBLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRztBQUFLLFNBQUcsRUFBRTRCLElBQUksQ0FBQ0YsR0FBZjtBQUFvQixTQUFHLEVBQUVFLElBQUksQ0FBQ3pELEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESCxFQUVHLE1BQUMsd0VBQUQ7QUFDRyxXQUFLLEVBQUV5RCxJQUFJLENBQUN6RCxLQURmO0FBRUcsYUFBTyxFQUFFO0FBQUU3QyxZQUFJLEVBQUU4QyxPQUFPLENBQUNrRCxRQUFoQjtBQUEwQm5ELGFBQUssRUFBRUMsT0FBTyxDQUFDRDtBQUF6QyxPQUZaO0FBR0csZ0JBQVUsRUFDUCxNQUFDLDZEQUFEO0FBQVksc0JBQWEsUUFBT3lELElBQUksQ0FBQ3pELEtBQU0sRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLE1BQUMscUVBQUQ7QUFBZ0IsaUJBQVMsRUFBRUMsT0FBTyxDQUFDRCxLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREgsQ0FKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkgsQ0FESCxDQUZOLENBREgsQ0FESCxFQXFCRyxNQUFDLHlEQUFEO0FBQVEsWUFBTSxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRyxNQUFDLHlEQUFEO0FBQVEsVUFBSSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRyxNQUFDLGlFQUFEO0FBQVUsZUFBUyxFQUFFQyxPQUFPLENBQUM4QyxRQUE3QjtBQUF1QyxVQUFJLEVBQUUsQ0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJTyxRQUFRLENBQUNwRCxHQUFULENBQWEsQ0FBQ3VELElBQUQsRUFBTzVCLEtBQVAsS0FDWCxNQUFDLHFFQUFEO0FBQWMsU0FBRyxFQUFFQSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0c7QUFBSyxTQUFHLEVBQUU0QixJQUFJLENBQUNGLEdBQWY7QUFBb0IsU0FBRyxFQUFFRSxJQUFJLENBQUN6RCxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREgsRUFFRyxNQUFDLHdFQUFEO0FBQ0csV0FBSyxFQUFFeUQsSUFBSSxDQUFDekQsS0FEZjtBQUVHLGFBQU8sRUFBRTtBQUNON0MsWUFBSSxFQUFFOEMsT0FBTyxDQUFDa0QsUUFEUjtBQUVObkQsYUFBSyxFQUFFQyxPQUFPLENBQUNEO0FBRlQsT0FGWjtBQU1HLGdCQUFVLEVBQ1AsTUFBQyw2REFBRDtBQUFZLHNCQUFhLFFBQU95RCxJQUFJLENBQUN6RCxLQUFNLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxNQUFDLHFFQUFEO0FBQWdCLGlCQUFTLEVBQUVDLE9BQU8sQ0FBQ0QsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURILENBUE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZILENBREYsQ0FESixDQURILENBREgsRUFzQkcsTUFBQyx5REFBRDtBQUFRLFlBQU0sTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csTUFBQyxpRUFBRDtBQUFVLGVBQVMsRUFBRUMsT0FBTyxDQUFDOEMsUUFBN0I7QUFBdUMsVUFBSSxFQUFFLENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSU8sUUFBUSxDQUFDcEQsR0FBVCxDQUFhLENBQUN1RCxJQUFELEVBQU81QixLQUFQLEtBQ1gsTUFBQyxxRUFBRDtBQUFjLFNBQUcsRUFBRUEsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHO0FBQUssU0FBRyxFQUFFNEIsSUFBSSxDQUFDRixHQUFmO0FBQW9CLFNBQUcsRUFBRUUsSUFBSSxDQUFDekQsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURILEVBRUcsTUFBQyx3RUFBRDtBQUNHLFdBQUssRUFBRXlELElBQUksQ0FBQ3pELEtBRGY7QUFFRyxhQUFPLEVBQUU7QUFDTjdDLFlBQUksRUFBRThDLE9BQU8sQ0FBQ2tELFFBRFI7QUFFTm5ELGFBQUssRUFBRUMsT0FBTyxDQUFDRDtBQUZULE9BRlo7QUFNRyxnQkFBVSxFQUNQLE1BQUMsNkRBQUQ7QUFBWSxzQkFBYSxRQUFPeUQsSUFBSSxDQUFDekQsS0FBTSxFQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csTUFBQyxxRUFBRDtBQUFnQixpQkFBUyxFQUFFQyxPQUFPLENBQUNELEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESCxDQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSCxDQURGLENBREosQ0FESCxDQXRCSCxDQXJCSCxDQURIO0FBb0VGOztBQTVJa0M7O0FBK0l0Q29ELE9BQU8sQ0FBQy9DLFNBQVIsR0FBb0I7QUFDakJKLFNBQU8sRUFBRUssaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEVCxDQUFwQjtBQUllQyx5SUFBVSxDQUFDMUQsTUFBRCxDQUFWLENBQW1CcUcsT0FBbkIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTXJHLE1BQU0sR0FBR0MsS0FBSyxLQUFLO0FBQ3ZCMEcsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRTtBQUROLEdBRGlCO0FBSXZCQyxTQUFPLEVBQUU7QUFDUHJHLFNBQUssRUFBRSxNQURBO0FBRVBHLFVBQU0sRUFBRSxPQUZEO0FBR1AsZUFBVztBQUNUbUcsZUFBUyxFQUFFO0FBREY7QUFISjtBQUpjLENBQUwsQ0FBcEI7O0FBYUEsTUFBTU4sR0FBRyxHQUFHLENBQ1Y7QUFDRUEsS0FBRyxFQUFFLGtHQURQO0FBRUV2RCxPQUFLLEVBQUUsc0NBRlQ7QUFHRThELFNBQU8sRUFBRTtBQUhYLENBRFUsRUFNVjtBQUNFUCxLQUFHLEVBQUUsMEZBRFA7QUFFRXZELE9BQUssRUFBRSx3Q0FGVDtBQUdFOEQsU0FBTyxFQUFFO0FBSFgsQ0FOVSxFQVdWO0FBQ0VQLEtBQUcsRUFBRSxzRUFEUDtBQUVFdkQsT0FBSyxFQUFFLCtCQUZUO0FBR0U4RCxTQUFPLEVBQUU7QUFIWCxDQVhVLEVBZ0JWO0FBQ0VQLEtBQUcsRUFBRSxnR0FEUDtBQUVFdkQsT0FBSyxFQUFFLG1DQUZUO0FBR0U4RCxTQUFPLEVBQUU7QUFIWCxDQWhCVSxFQXFCVjtBQUNFUCxLQUFHLEVBQUUsMkZBRFA7QUFFRXZELE9BQUssRUFBRSxFQUZUO0FBR0U4RCxTQUFPLEVBQUU7QUFIWCxDQXJCVSxFQTBCVjtBQUNFUCxLQUFHLEVBQUUsNEVBRFA7QUFFRXZELE9BQUssRUFBRSxFQUZUO0FBR0U4RCxTQUFPLEVBQUU7QUFIWCxDQTFCVSxFQStCVjtBQUNFUCxLQUFHLEVBQUUscUZBRFA7QUFFRXZELE9BQUssRUFBRSxFQUZUO0FBR0U4RCxTQUFPLEVBQUU7QUFIWCxDQS9CVSxFQW9DVjtBQUNFUCxLQUFHLEVBQUUsZ0dBRFA7QUFFRXZELE9BQUssRUFBRSxFQUZUO0FBR0U4RCxTQUFPLEVBQUU7QUFIWCxDQXBDVSxDQUFaOztBQTJDQSxNQUFNQyxLQUFOLFNBQW9CdEUsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFDbENDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLeUQsS0FBTCxHQUFhLEVBQWI7QUFFRDs7QUFFRHhELFFBQU0sR0FBRztBQUNQLFFBQUk7QUFBRUk7QUFBRixRQUFjLEtBQUtMLEtBQXZCO0FBQ0EsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw0REFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixXQUFLLEVBQUMsU0FBL0I7QUFBeUMsV0FBSyxFQUFFO0FBQUVvRSxpQkFBUyxFQUFFO0FBQWIsT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixFQUtFLE1BQUMsc0RBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsYUFBTyxFQUFFLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFSVQsR0FBRyxDQUFDckQsR0FBSixDQUFRLENBQUNtQyxJQUFELEVBQU9SLEtBQVAsS0FBaUI7QUFDdkIsYUFDRSxNQUFDLHNEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsV0FBRyxFQUFFQSxLQUFoQjtBQUF1QixhQUFLLEVBQUU7QUFBRXZDLGlCQUFPLEVBQUU7QUFBWCxTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxpQkFBUyxFQUFFVyxPQUFPLENBQUMyRCxPQURyQjtBQUVFLFdBQUcsRUFBRXZCLElBQUksQ0FBQ2tCLEdBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREY7QUFRRCxLQVRELENBRkosQ0FMRixDQURGO0FBc0JEOztBQS9CaUM7O0FBa0NwQ1EsS0FBSyxDQUFDMUQsU0FBTixHQUFrQjtBQUNoQkosU0FBTyxFQUFFSyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURWLENBQWxCO0FBSWVDLHlJQUFVLENBQUMxRCxNQUFELENBQVYsQ0FBbUJnSCxLQUFuQixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1yRCxTQUFTLEdBQUdDLDJFQUFVLENBQUUzRCxLQUFELEtBQVk7QUFDdkNHLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsTUFETDtBQUVKQyxZQUFRLEVBQUUsTUFGTjtBQUdKa0Isa0JBQWMsRUFBRSxjQUhaO0FBSUpxRSxZQUFRLEVBQUUsUUFKTixDQUtKOztBQUxJLEdBRGlDO0FBUXZDRyxVQUFRLEVBQUU7QUFDUnhGLFNBQUssRUFBRSxNQURDO0FBRVJHLFVBQU0sRUFBRTtBQUZBLEdBUjZCO0FBWXZDdUcsTUFBSSxFQUFFO0FBQ0p6RixTQUFLLEVBQUU7QUFESCxHQVppQztBQWV2Q3dCLE9BQUssRUFBRTtBQUNMVixXQUFPLEVBQUUsS0FESjtBQUVMTixtQkFBZSxFQUFFLFNBRlo7QUFHTFIsU0FBSyxFQUFFO0FBSEYsR0FmZ0M7QUFvQnZDb0YsU0FBTyxFQUFFO0FBQ1AxRSxjQUFVLEVBQUUsc0NBREw7QUFFUGdGLFVBQU0sRUFBRTtBQUZELEdBcEI4QixDQXdCdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUEvQnVDLENBQVosQ0FBRCxDQUE1Qjs7QUFrQ0EsTUFBTUMsWUFBWSxHQUFJdkUsS0FBRCxJQUFXO0FBQzlCLFFBQU1LLE9BQU8sR0FBR1MsU0FBUyxFQUF6Qjs7QUFFQSxRQUFNMEQsU0FBUyxHQUFJeEUsS0FBRCxJQUFXO0FBQzNCLFVBQU07QUFBRXlFO0FBQUYsUUFBY3pFLEtBQXBCO0FBQ0EsV0FDRTtBQUNFLGVBQVMsRUFBRSxzQkFEYjtBQUVFLGFBQU8sRUFBRXlFLE9BRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBREY7QUFPRCxHQVREOztBQVdBLFFBQU1DLFNBQVMsR0FBSTFFLEtBQUQsSUFBVztBQUMzQixVQUFNO0FBQUV5RTtBQUFGLFFBQWN6RSxLQUFwQjtBQUNBLFdBQ0U7QUFDRSxlQUFTLEVBQUUsc0JBRGI7QUFFRSxhQUFPLEVBQUV5RSxPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHRSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQURGO0FBT0QsR0FURDs7QUFXQSxRQUFNRSxVQUFVLEdBQUcsQ0FDakI7QUFDRXZFLFNBQUssRUFBRSxxQkFEVDtBQUVFd0UsUUFBSSxFQUFFO0FBRlIsR0FEaUIsRUFLakI7QUFDRXhFLFNBQUssRUFBRSx1QkFEVDtBQUVFd0UsUUFBSSxFQUFFO0FBRlIsR0FMaUIsRUFTakI7QUFDRXhFLFNBQUssRUFBRSw4QkFEVDtBQUVFd0UsUUFBSSxFQUFFO0FBRlIsR0FUaUIsRUFhakI7QUFDRXhFLFNBQUssRUFBRSw2QkFEVDtBQUVFd0UsUUFBSSxFQUFFO0FBRlIsR0FiaUIsRUFpQmpCO0FBQ0V4RSxTQUFLLEVBQUUsa0JBRFQ7QUFFRXdFLFFBQUksRUFBRTtBQUZSLEdBakJpQixFQXFCakI7QUFDRXhFLFNBQUssRUFBRSxxQkFEVDtBQUVFd0UsUUFBSSxFQUFFO0FBRlIsR0FyQmlCLEVBeUJqQjtBQUNFeEUsU0FBSyxFQUFFLG9CQURUO0FBRUV3RSxRQUFJLEVBQUU7QUFGUixHQXpCaUIsRUE2QmpCO0FBQ0V4RSxTQUFLLEVBQUUscUJBRFQ7QUFFRXdFLFFBQUksRUFBRTtBQUZSLEdBN0JpQixFQWlDakI7QUFDRXhFLFNBQUssRUFBRSxnQkFEVDtBQUVFd0UsUUFBSSxFQUFFO0FBRlIsR0FqQ2lCLEVBcUNqQjtBQUNFeEUsU0FBSyxFQUFFLGlCQURUO0FBRUV3RSxRQUFJLEVBQUU7QUFGUixHQXJDaUIsQ0FBbkI7QUEyQ0EsUUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLFFBQUksRUFBRSxLQURTO0FBRWZDLFlBQVEsRUFBRSxJQUZLO0FBR2ZDLFNBQUssRUFBRSxHQUhRO0FBSWZDLGdCQUFZLEVBQUUsQ0FKQztBQUtmQyxrQkFBYyxFQUFFLENBTEQ7QUFNZkMsZ0JBQVksRUFBRSxDQU5DO0FBT2ZDLGFBQVMsRUFBRSxNQUFDLFNBQUQ7QUFBVyxhQUFPLEVBQUUsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVBJO0FBUWZDLGFBQVMsRUFBRSxNQUFDLFNBQUQ7QUFBVyxhQUFPLEVBQUUsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJJO0FBU2ZDLGlCQUFhLEVBQUUsSUFUQTtBQVVmQyxjQUFVLEVBQUUsQ0FDVjtBQUNFQyxnQkFBVSxFQUFFLElBRGQ7QUFFRVgsY0FBUSxFQUFFO0FBQ1JJLG9CQUFZLEVBQUUsQ0FETjtBQUVSQyxzQkFBYyxFQUFFLENBRlI7QUFHUkgsZ0JBQVEsRUFBRSxJQUhGO0FBSVJELFlBQUksRUFBRTtBQUpFO0FBRlosS0FEVSxFQVVWO0FBQ0VVLGdCQUFVLEVBQUUsR0FEZDtBQUVFWCxjQUFRLEVBQUU7QUFDUkksb0JBQVksRUFBRSxDQUROO0FBRVJDLHNCQUFjLEVBQUUsQ0FGUjtBQUdSQyxvQkFBWSxFQUFFO0FBSE47QUFGWixLQVZVLEVBa0JWO0FBQ0VLLGdCQUFVLEVBQUUsR0FEZDtBQUVFWCxjQUFRLEVBQUU7QUFDUkksb0JBQVksRUFBRSxDQUROO0FBRVJDLHNCQUFjLEVBQUU7QUFGUjtBQUZaLEtBbEJVO0FBVkcsR0FBakI7QUFzQ0EsTUFBSXhCLFFBQVEsR0FBRyxDQUNiO0FBQUVDLE9BQUcsRUFBRThCLHFEQUFFQTtBQUFULEdBRGEsRUFFYjtBQUFFOUIsT0FBRyxFQUFFK0IscURBQUVBO0FBQVQsR0FGYSxFQUdiO0FBQUUvQixPQUFHLEVBQUVnQyxxREFBRUE7QUFBVCxHQUhhLEVBSWI7QUFBRWhDLE9BQUcsRUFBRWlDLHFEQUFFQTtBQUFULEdBSmEsRUFLYjtBQUFFakMsT0FBRyxFQUFFa0MscURBQUVBO0FBQVQsR0FMYSxFQU1iO0FBQUVsQyxPQUFHLEVBQUVtQyxxREFBRUE7QUFBVCxHQU5hLEVBT2I7QUFBRW5DLE9BQUcsRUFBRW9DLHFEQUFFQTtBQUFULEdBUGEsRUFRYjtBQUFFcEMsT0FBRyxFQUFFcUMscURBQUVBO0FBQVQsR0FSYSxFQVNiO0FBQUVyQyxPQUFHLEVBQUVzQyxxREFBRUE7QUFBVCxHQVRhLEVBVWI7QUFBRXRDLE9BQUcsRUFBRThCLHFEQUFFQTtBQUFULEdBVmEsRUFXYjtBQUFFOUIsT0FBRyxFQUFFK0IscURBQUVBO0FBQVQsR0FYYSxFQVliO0FBQUUvQixPQUFHLEVBQUVnQyxxREFBRUE7QUFBVCxHQVphLEVBYWI7QUFBRWhDLE9BQUcsRUFBRWlDLHFEQUFFQTtBQUFULEdBYmEsRUFjYjtBQUFFakMsT0FBRyxFQUFFa0MscURBQUVBO0FBQVQsR0FkYSxFQWViO0FBQUVsQyxPQUFHLEVBQUVtQyxxREFBRUE7QUFBVCxHQWZhLEVBZ0JiO0FBQUVuQyxPQUFHLEVBQUVvQyxxREFBRUE7QUFBVCxHQWhCYSxFQWlCYjtBQUFFcEMsT0FBRyxFQUFFcUMscURBQUVBO0FBQVQsR0FqQmEsRUFrQmI7QUFBRXJDLE9BQUcsRUFBRXNDLHFEQUFFQTtBQUFULEdBbEJhLENBQWY7QUFzQkEsU0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQXlCLFNBQUssRUFBRTtBQUFFbkksWUFBTSxFQUFFO0FBQVYsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBWSxTQUFLLEVBQUU7QUFBRXlDLGNBQVEsRUFBRSxFQUFaO0FBQWdCYixhQUFPLEVBQUUsRUFBekI7QUFBNkJ3RyxnQkFBVSxFQUFFLEdBQXpDO0FBQThDdEgsV0FBSyxFQUFFO0FBQXJELEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBREYsRUFJRSxNQUFDLGtEQUFELGVBQVlpRyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFSW5CLFFBQVEsQ0FBQ3BELEdBQVQsQ0FBYSxDQUFDbUMsSUFBRCxFQUFPUixLQUFQLEtBQWlCO0FBQzVCLFdBQ0U7QUFDRSxTQUFHLEVBQUVBLEtBRFA7QUFFRSxlQUFTLEVBQUMsZUFGWjtBQUdFLFdBQUssRUFBRTtBQUFFbkUsY0FBTSxFQUFFO0FBQVYsT0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0U7QUFBSyxTQUFHLEVBQUUyRSxJQUFJLENBQUNrQixHQUFmO0FBQW9CLFdBQUssRUFBRTtBQUFFN0YsY0FBTSxFQUFFLE1BQVY7QUFBa0JILGFBQUssRUFBRTtBQUF6QixPQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsQ0FERjtBQVNELEdBVkQsQ0FGSixDQUpGLENBREY7QUFzQkQsQ0F0SkQ7O0FBd0plNEcsMkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU16RCxTQUFTLEdBQUdDLDJFQUFVLENBQUUzRCxLQUFELEtBQVk7QUFDckMrSSxTQUFPLEVBQUU7QUFDTDtBQUNBQyxnQkFBWSxFQUFFLENBRlQ7QUFHTCxlQUFXO0FBQ1BuQyxlQUFTLEVBQUU7QUFESjtBQUhOO0FBRDRCLENBQVosQ0FBRCxDQUE1Qjs7QUFXQSxNQUFNVCxPQUFPLEdBQUl4RCxLQUFELElBQVc7QUFDdkIsUUFBTUssT0FBTyxHQUFHUyxTQUFTLEVBQXpCO0FBQ0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx1REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLdUYsMERBQVEsQ0FBQy9GLEdBQVQsQ0FBYSxDQUFDbUMsSUFBRCxFQUFPUixLQUFQLEtBQWlCO0FBQzNCLFdBQ0ksTUFBQyx1REFBRDtBQUFNLFdBQUssTUFBWDtBQUFZLFFBQUUsRUFBRSxDQUFoQjtBQUFtQixXQUFLLEVBQUU7QUFBRXZDLGVBQU8sRUFBRTtBQUFYLE9BQTFCO0FBQTJDLFNBQUcsRUFBRXVDLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBRTVCLE9BQU8sQ0FBQzhGLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRTFELElBQUksQ0FBQzdFLEtBQWY7QUFBc0IsV0FBSyxFQUFFO0FBQUVFLGNBQU0sRUFBRSxHQUFWO0FBQWVILGFBQUssRUFBRTtBQUF0QixPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFLLFdBQUssRUFBRTtBQUFFK0IsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxXQUFLLEVBQUU7QUFBRTVCLGNBQU0sRUFBRSxFQUFWO0FBQWNILGFBQUssRUFBRTtBQUFyQixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLGtFQUFEO0FBQWEsV0FBSyxFQUFFO0FBQUU0QyxnQkFBUSxFQUFFLEVBQVo7QUFBZ0IzQixhQUFLLEVBQUU7QUFBdkIsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUksTUFBQyw2REFBRDtBQUFZLFdBQUssRUFBRTtBQUFFcEIsZUFBTyxFQUFFLFFBQVg7QUFBcUJrQyxlQUFPLEVBQUUsQ0FBOUI7QUFBaUNkLGFBQUssRUFBRTtBQUF4QyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0s2RCxJQUFJLENBQUNyQyxLQURWLENBRkosQ0FESixFQU9JLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDZEQUFEO0FBQVksV0FBSyxFQUFFO0FBQUU1QyxlQUFPLEVBQUUsY0FBWDtBQUEyQjBJLGtCQUFVLEVBQUU7QUFBdkMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLekQsSUFBSSxDQUFDNkQsUUFBTCxDQUFjQyxRQUFkLEdBQXlCQyxPQUF6QixDQUFpQyx5QkFBakMsRUFBNEQsS0FBNUQsQ0FETCxPQUMwRSxLQUQxRSxDQURKLEVBSUksTUFBQyw2REFBRDtBQUFZLGFBQU8sRUFBQyxXQUFwQjtBQUFnQyxXQUFLLEVBQUU7QUFBRWhKLGVBQU8sRUFBRSxjQUFYO0FBQTJCb0IsYUFBSyxFQUFFLE1BQWxDO0FBQTBDNkgsc0JBQWMsRUFBRSxjQUExRDtBQUEwRS9HLGVBQU8sRUFBRTtBQUFuRixPQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ00sSUFBRytDLElBQUksQ0FBQ2lFLFFBQVMsRUFEdkIsQ0FKSixDQVBKLENBRkosQ0FESixDQURKO0FBdUJILEdBeEJBLENBREwsQ0FESixDQURKO0FBK0JILENBakNEOztBQW1DZWxELHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1yRyxNQUFNLEdBQUdDLEtBQUssS0FBSztBQUN0QnVKLFdBQVMsRUFBRTtBQUNSLEtBQUN2SixLQUFLLENBQUNXLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsR0FBZ0M7QUFDN0IwQixhQUFPLEVBQUU7QUFEb0I7QUFEeEIsR0FEVztBQU10Qm9FLE1BQUksRUFBRTtBQUNIQyxZQUFRLEVBQUUsR0FEUDtBQUVINUYsVUFBTSxFQUFFLGlCQUZMO0FBR0gsS0FBQ2YsS0FBSyxDQUFDVyxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQzdCO0FBQ0ErRixjQUFRLEVBQUU7QUFGbUI7QUFIN0IsR0FOZ0I7QUFjdEIzRCxPQUFLLEVBQUU7QUFDSnhCLFNBQUssRUFBRSxPQURIO0FBRUpjLFdBQU8sRUFBRTtBQUZMLEdBZGU7QUFrQnRCa0gsU0FBTyxFQUFFO0FBQ05oSSxTQUFLLEVBQUUsT0FERDtBQUVOMkIsWUFBUSxFQUFFO0FBRkosR0FsQmE7QUFzQnRCeUQsU0FBTyxFQUFFO0FBQ04xRSxjQUFVLEVBQUUsc0NBRE47QUFFTmdGLFVBQU0sRUFBRTtBQUZGLEdBdEJhO0FBMEJ0Qk4sU0FBTyxFQUFFO0FBQ04sZUFBVztBQUNSTSxZQUFNLEVBQUUsY0FEQTtBQUVSbEIsZUFBUyxFQUFFLFlBRkg7QUFHUnlELHdCQUFrQixFQUFFLElBSFo7QUFJUkMsOEJBQXdCLEVBQUU7QUFKbEI7QUFETDtBQTFCYSxDQUFMLENBQXBCOztBQW9DQSxNQUFNQyxNQUFNLEdBQUcsQ0FDWjtBQUNHbkosT0FBSyxFQUFFLHFIQURWO0FBRUd3QyxPQUFLLEVBQUU7QUFGVixDQURZLEVBS1o7QUFDR3hDLE9BQUssRUFBRW9KLHdEQURWO0FBQ2lCO0FBQ2Q1RyxPQUFLLEVBQUU7QUFGVixDQUxZLEVBU1o7QUFDR3hDLE9BQUssRUFBRXFKLHVEQURWO0FBQ2lCO0FBQ2Q3RyxPQUFLLEVBQUU7QUFGVixDQVRZLEVBYVo7QUFDR3hDLE9BQUssRUFBRXNKLHVEQURWO0FBQ2lCO0FBQ2Q5RyxPQUFLLEVBQUU7QUFGVixDQWJZLENBQWY7O0FBa0JBLE1BQU0rRCxLQUFOLFNBQW9CdEUsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFDakNDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2hCLFVBQU1BLEtBQU47QUFDRjs7QUFFREMsUUFBTSxHQUFHO0FBQ04sUUFBSTtBQUFFSTtBQUFGLFFBQWMsS0FBS0wsS0FBdkIsQ0FETSxDQUVOOztBQUNBLFFBQUkyRCxHQUFHLEdBQUcscUhBQVYsQ0FITSxDQUlOOztBQUNBLFVBQU13RCxLQUFLLEdBQUcsQ0FBQztBQUFFMUUsVUFBSSxFQUFFO0FBQVIsS0FBRCxFQUFjO0FBQUVBLFVBQUksRUFBRTtBQUFSLEtBQWQsRUFBMkI7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FBM0IsRUFBd0M7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FBeEMsRUFBcUQ7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FBckQsRUFBa0U7QUFBRUEsVUFBSSxFQUFFO0FBQVIsS0FBbEUsQ0FBZDtBQUVBLFdBQ0c7QUFBSyxXQUFLLEVBQUU7QUFBRWpDLHVCQUFlLEVBQUVtRCxHQUFuQjtBQUF3QjdGLGNBQU0sRUFBRSxHQUFoQztBQUFxQ0gsYUFBSyxFQUFFLE1BQTVDO0FBQW9EeUosd0JBQWdCLEVBQUU7QUFBdEUsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0c7QUFBSyxXQUFLLEVBQUU7QUFBRXhJLGFBQUssRUFBRSxTQUFUO0FBQW9Cd0YsaUJBQVMsRUFBRTtBQUEvQixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRyxNQUFDLDREQUFEO0FBQVksZUFBUyxFQUFFL0QsT0FBTyxDQUFDRCxLQUEvQjtBQUFzQyxhQUFPLEVBQUMsSUFBOUM7QUFBbUQsZUFBUyxFQUFDLElBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdURBREgsRUFJSStHLEtBQUssQ0FBQzdHLEdBQU4sQ0FBVSxDQUFDbUMsSUFBRCxFQUFPUixLQUFQLEtBQWlCLE1BQUMsa0VBQUQ7QUFBYyxTQUFHLEVBQUVBLEtBQW5CO0FBQTBCLGVBQVMsRUFBRTVCLE9BQU8sQ0FBQ3VHLE9BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBM0IsQ0FKSixFQUtHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMSCxFQU1HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRyxNQUFDLHNEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGFBQU8sRUFBRSxDQUF6QjtBQUE0QixnQkFBVSxFQUFDLFFBQXZDO0FBQWdELGFBQU8sRUFBQyxRQUF4RDtBQUFpRSxlQUFTLEVBQUMsS0FBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVNRyxNQUFNLENBQUN6RyxHQUFQLENBQVcsQ0FBQ3dDLE9BQUQsRUFBVWIsS0FBVixLQUFvQjtBQUM1QixhQUNHLE1BQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsQ0FBZjtBQUFrQixVQUFFLEVBQUUsQ0FBdEI7QUFBeUIsVUFBRSxFQUFFLENBQTdCO0FBQWdDLFdBQUcsRUFBRUEsS0FBckM7QUFBNEMsaUJBQVMsRUFBRTVCLE9BQU8sQ0FBQ3NHLFNBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxNQUFDLHNEQUFEO0FBQU0saUJBQVMsRUFBRXRHLE9BQU8sQ0FBQ3lELElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxNQUFDLDJEQUFEO0FBQ0csaUJBQVMsRUFBRXpELE9BQU8sQ0FBQzJELE9BRHRCO0FBRUcsaUJBQVMsRUFBQyxLQUZiO0FBR0csV0FBRyxFQUFDLHVCQUhQO0FBSUcsY0FBTSxFQUFDLEtBSlY7QUFLRyxhQUFLLEVBQUVsQixPQUFPLENBQUNsRixLQUxsQjtBQU1HLGFBQUssRUFBRWtGLE9BQU8sQ0FBQzFDLEtBTmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESCxFQVNHO0FBQUssYUFBSyxFQUFFO0FBQUVoQix5QkFBZSxFQUFFLFNBQW5CO0FBQThCTSxpQkFBTyxFQUFFO0FBQXZDLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLE1BQUMsNERBQUQ7QUFBWSxlQUFPLEVBQUMsT0FBcEI7QUFBNEIsYUFBSyxFQUFFO0FBQUVkLGVBQUssRUFBRSxPQUFUO0FBQWtCMkIsa0JBQVEsRUFBRSxFQUE1QjtBQUFnQzJGLG9CQUFVLEVBQUU7QUFBNUMsU0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJcEQsT0FBTyxDQUFDMUMsS0FEWixDQURILENBVEgsQ0FESCxDQURILENBREg7QUFxQkYsS0F0QkQsQ0FGTixDQURILENBTkgsQ0FESCxDQURIO0FBd0NGOztBQXBEZ0M7O0FBdURwQytELEtBQUssQ0FBQzFELFNBQU4sR0FBa0I7QUFDZkosU0FBTyxFQUFFSyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURYLENBQWxCO0FBSWVDLHlJQUFVLENBQUMxRCxNQUFELENBQVYsQ0FBbUJnSCxLQUFuQixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUE7QUFFQTtBQUNBO0FBRThCO0FBTzlCO0FBQ0E7Q0FHQTs7QUFDQSxNQUFNa0QsTUFBTSxHQUFHQyxtREFBTyxDQUFDLE1BQU0sNEdBQVAsRUFBOEI7QUFDbERDLEtBQUcsRUFBRSxLQUQ2QztBQUFBO0FBQUEsd0NBQWhCLGdDQUFnQjtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUF0Qjs7QUFJQSxNQUFNQyxXQUFnRCxHQUFJeEgsS0FBRCxJQUE2QjtBQUNwRixRQUFNd0UsU0FBUyxHQUFJeEUsS0FBRCxJQUE4QztBQUM5RCxXQUNFO0FBQ0UsZUFBUyxFQUFFLDRCQURiO0FBRUUsYUFBTyxFQUFFQSxLQUFLLENBQUN5RSxPQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0UsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0FERjtBQU9ELEdBUkQ7O0FBU0EsUUFBTUMsU0FBUyxHQUFJMUUsS0FBRCxJQUE4QztBQUM5RCxXQUNFO0FBQ0UsZUFBUyxFQUFFLDRCQURiO0FBRUUsYUFBTyxFQUFFQSxLQUFLLENBQUN5RSxPQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0UsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0FERjtBQU9ELEdBUkQ7O0FBVUEsTUFBSUksUUFBUSxHQUFHO0FBQ2JDLFFBQUksRUFBRSxLQURPO0FBRWJDLFlBQVEsRUFBRSxJQUZHO0FBR2JDLFNBQUssRUFBRSxHQUhNO0FBSWJFLGtCQUFjLEVBQUUsQ0FKSDtBQUtiQyxnQkFBWSxFQUFFLENBTEQ7QUFNYkMsYUFBUyxFQUFFLE1BQUMsU0FBRDtBQUFXLGVBQVMsRUFBQyxFQUFyQjtBQUF3QixhQUFPLEVBQUUsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5FO0FBT2JDLGFBQVMsRUFBRSxNQUFDLFNBQUQ7QUFBVyxlQUFTLEVBQUMsRUFBckI7QUFBd0IsYUFBTyxFQUFFLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQRTtBQVFiQyxpQkFBYSxFQUFFLElBUkY7QUFTYkMsY0FBVSxFQUFFLENBQ1Y7QUFDRUMsZ0JBQVUsRUFBRSxJQURkO0FBRUVYLGNBQVEsRUFBRTtBQUNSSyxzQkFBYyxFQUFFO0FBRFI7QUFGWixLQURVLEVBT1Y7QUFDRU0sZ0JBQVUsRUFBRSxHQURkO0FBRUVYLGNBQVEsRUFBRTtBQUNSSyxzQkFBYyxFQUFFO0FBRFI7QUFGWixLQVBVLEVBYVY7QUFDRU0sZ0JBQVUsRUFBRSxHQURkO0FBRUVYLGNBQVEsRUFBRTtBQUNSSyxzQkFBYyxFQUFFLENBRFI7QUFFUkQsb0JBQVksRUFBRTtBQUZOO0FBRlosS0FiVTtBQVRDLEdBQWY7QUErQkEsTUFBSXdDLFlBQVksR0FBRyxDQUNqQjtBQUNFckgsU0FBSyxFQUFFLFFBRFQ7QUFFRXhDLFNBQUssRUFBRSx1SkFGVDtBQUdFZ0gsUUFBSSxFQUFFO0FBSFIsR0FEaUIsRUFNakI7QUFDRXhFLFNBQUssRUFBRSxhQURUO0FBRUV4QyxTQUFLLEVBQUUsOElBRlQ7QUFHRWdILFFBQUksRUFBRTtBQUhSLEdBTmlCLEVBV2pCO0FBQ0V4RSxTQUFLLEVBQUUsU0FEVDtBQUVFeEMsU0FBSyxFQUFFLG1GQUZUO0FBR0VnSCxRQUFJLEVBQUU7QUFIUixHQVhpQixFQWdCakI7QUFDRXhFLFNBQUssRUFBRSxVQURUO0FBRUV4QyxTQUFLLEVBQUUsbURBRlQ7QUFHRWdILFFBQUksRUFBRTtBQUhSLEdBaEJpQixDQUFuQjtBQXVCQSxTQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsTUFBRCxlQUFZQyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFSTRDLFlBQVksQ0FBQ25ILEdBQWIsQ0FBaUIsQ0FBQ29ILFdBQUQsRUFBNkJ6RixLQUE3QixLQUF1QztBQUN0RCxXQUNFO0FBQUssU0FBRyxFQUFFLGNBQWMwRixNQUFNLENBQUMxRixLQUFELENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLHFCQUFYO0FBQWlDLFFBQUUsRUFBRXlGLFdBQVcsQ0FBQzlDLElBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNyRDtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUU7QUFBSyxlQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUssU0FBRyxFQUFFK0MsTUFBTSxDQUFDRCxXQUFXLENBQUM5SixLQUFiLENBQWhCO0FBQXFDLFNBQUcsRUFBRSwwQkFBMEI4SixXQUFXLENBQUN0SCxLQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FGRixDQURxRCxDQUF2RCxDQURGLENBREY7QUFZRCxHQWJELENBRkosQ0FERixDQURGO0FBc0JELENBaEdEOztBQWtHZW9ILDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNMUcsU0FBUyxHQUFHQywyRUFBVSxDQUFFM0QsS0FBRCxLQUFZO0FBQ3JDd0ssV0FBUyxFQUFFO0FBQ1BqSyxTQUFLLEVBQUUsT0FEQTtBQUVQRyxVQUFNLEVBQUUsRUFGRDtBQUdQK0osU0FBSyxFQUFFLE1BSEE7QUFJUEMsY0FBVSxFQUFFO0FBSkwsR0FEMEI7QUFPckNDLFlBQVUsRUFBRTtBQUNScEssU0FBSyxFQUFFLE1BREM7QUFFUnFLLGFBQVMsRUFBRSxPQUZIO0FBR1JaLG9CQUFnQixFQUFFLFdBSFY7QUFJUmxJLHNCQUFrQixFQUFFLGVBSlo7QUFLUmhCLFdBQU8sRUFBRSxHQUxEO0FBTVI7QUFDQWUsa0JBQWMsRUFBRSxPQVBSO0FBUVJ1QixtQkFBZSxFQUFFO0FBUlQsR0FQeUI7QUFpQnJDeUgsZ0JBQWMsRUFBRTtBQUNacEssWUFBUSxFQUFFLFVBREU7QUFFWlcsT0FBRyxFQUFFLEdBRk87QUFHWlksbUJBQWUsRUFBRSxPQUhMO0FBSVoyRSxZQUFRLEVBQUU7QUFKRSxHQWpCcUI7QUF1QnJDbUUsWUFBVSxFQUFFO0FBQ1IxSyxXQUFPLEVBQUUsY0FERDtBQUVSNEIsbUJBQWUsRUFBRSxTQUZUO0FBR1JnRixhQUFTLEVBQUUsUUFISDtBQUlSdEcsVUFBTSxFQUFFLEVBSkE7QUFLUmMsU0FBSyxFQUFFLE9BTEM7QUFNUmpCLFNBQUssRUFBRTtBQU5DLEdBdkJ5QjtBQStCckN3SyxZQUFVLEVBQUU7QUFDUjVILFlBQVEsRUFBRSxFQURGO0FBRVI2SCxhQUFTLEVBQUU7QUFGSCxHQS9CeUI7QUFtQ3JDQyxZQUFVLEVBQUU7QUFDUjNJLFdBQU8sRUFBRSxVQUREO0FBRVIwSSxhQUFTLEVBQUUsQ0FGSDtBQUdSN0gsWUFBUSxFQUFFO0FBSEYsR0FuQ3lCO0FBd0NyQ1MsVUFBUSxFQUFFO0FBQ041QixtQkFBZSxFQUFFLFNBRFg7QUFFTixlQUFXLENBQ1A7QUFETztBQUZMLEdBeEMyQjtBQThDckM2QixVQUFRLEVBQUU7QUFDTnJDLFNBQUssRUFBRTtBQURELEdBOUMyQjtBQWlEckN1QyxTQUFPLEVBQUU7QUFDTEMsaUJBQWEsRUFBRSxNQURWLENBQ2tCOztBQURsQjtBQWpENEIsQ0FBWixDQUFELENBQTVCOztBQXNEQSxNQUFNa0gsY0FBYyxHQUFHLE1BQU07QUFDekIsUUFBTWpJLE9BQU8sR0FBR1MsU0FBUyxFQUF6QjtBQUNBLFFBQU0sQ0FBQ1EsSUFBRCxFQUFPQyxPQUFQLElBQWtCMUIsOENBQUEsQ0FBZSxLQUFmLENBQXhCO0FBQ0EsUUFBTSxDQUFDNEIsUUFBRCxFQUFXQyxXQUFYLElBQTBCN0IsOENBQUEsQ0FBZSxJQUFmLENBQWhDOztBQUNBLFFBQU0wSSxhQUFhLEdBQUcsTUFBTTtBQUN4QixRQUFJdkcsS0FBSyxDQUFDd0csR0FBTixJQUFhLE9BQWIsSUFBd0J4RyxLQUFLLENBQUN5RyxPQUFOLElBQWlCLEVBQTdDLEVBQWlELENBQzdDO0FBQ0g7QUFDSixHQUpEOztBQU1BLFFBQU1DLGVBQWUsR0FBRyxDQUNwQixtR0FEb0IsRUFFcEIsa0dBRm9CLEVBR3BCLDJGQUhvQixFQUlwQixrR0FKb0IsQ0FBeEI7QUFPQSxRQUFNQyxXQUFXLEdBQUcsQ0FDaEI7QUFBRXZJLFNBQUssRUFBRSxxQkFBVDtBQUFnQ3dJLFFBQUksRUFBRTtBQUF0QyxHQURnQixFQUVoQjtBQUFFeEksU0FBSyxFQUFFLG9CQUFUO0FBQStCd0ksUUFBSSxFQUFFO0FBQXJDLEdBRmdCLEVBR2hCO0FBQUV4SSxTQUFLLEVBQUUsY0FBVDtBQUF5QndJLFFBQUksRUFBRTtBQUEvQixHQUhnQixFQUloQjtBQUFFeEksU0FBSyxFQUFFLGNBQVQ7QUFBeUJ3SSxRQUFJLEVBQUU7QUFBL0IsR0FKZ0IsRUFLaEI7QUFBRXhJLFNBQUssRUFBRSxpQkFBVDtBQUE0QndJLFFBQUksRUFBRTtBQUFsQyxHQUxnQixDQUFwQjtBQVFBLFFBQU1DLE9BQU8sR0FBRyxDQUNaO0FBQUV6SSxTQUFLLEVBQUUsWUFBVDtBQUF1QndJLFFBQUksRUFBRTtBQUE3QixHQURZLEVBRVo7QUFBRXhJLFNBQUssRUFBRSxRQUFUO0FBQW1Cd0ksUUFBSSxFQUFFO0FBQXpCLEdBRlksRUFHWjtBQUFFeEksU0FBSyxFQUFFLFlBQVQ7QUFBdUJ3SSxRQUFJLEVBQUU7QUFBN0IsR0FIWSxFQUlaO0FBQUV4SSxTQUFLLEVBQUUsU0FBVDtBQUFvQndJLFFBQUksRUFBRTtBQUExQixHQUpZLEVBS1o7QUFBRXhJLFNBQUssRUFBRSxpQkFBVDtBQUE0QndJLFFBQUksRUFBRTtBQUFsQyxHQUxZLENBQWhCOztBQVFBLFFBQU1FLGdCQUFnQixHQUFHLE1BQU07QUFDM0IsV0FDSTtBQUFLLFdBQUssRUFBRTtBQUFFbkwsYUFBSyxFQUFFLE9BQVQ7QUFBa0J5RCxxQkFBYSxFQUFFO0FBQWpDLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsNERBQUQ7QUFDSSxXQUFLLEVBQUMsTUFEVjtBQUNpQixhQUFPLEVBQUMsV0FEekI7QUFFSSxXQUFLLEVBQUU7QUFBRTFCLGVBQU8sRUFBRSxTQUFYO0FBQXNCcUosY0FBTSxFQUFFLFNBQTlCO0FBQXlDdkwsZUFBTyxFQUFFLFFBQWxEO0FBQTREb0IsYUFBSyxFQUFFLFNBQW5FO0FBQThFMkIsZ0JBQVEsRUFBRTtBQUF4RixPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosRUFNSSxNQUFDLDREQUFEO0FBQVksV0FBSyxFQUFFO0FBQUViLGVBQU8sRUFBRSxDQUFYO0FBQWNxSixjQUFNLEVBQUUsU0FBdEI7QUFBaUN2TCxlQUFPLEVBQUUsUUFBMUM7QUFBb0RxSyxhQUFLLEVBQUU7QUFBM0QsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsZ0VBQUQ7QUFBVyxhQUFPLEVBQUUsTUFBTXRHLE9BQU8sQ0FBQyxLQUFELENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQU5KLEVBVVFvSCxXQUFXLENBQUNySSxHQUFaLENBQWdCLENBQUNtQyxJQUFELEVBQU9KLEtBQVAsS0FBaUI7QUFDN0IsYUFDSSxNQUFDLDBEQUFEO0FBQVUsY0FBTSxNQUFoQjtBQUFpQixXQUFHLEVBQUVBLEtBQXRCO0FBQTZCLGFBQUssRUFBRTtBQUFFOUIsa0JBQVEsRUFBRSxFQUFaO0FBQWdCYixpQkFBTyxFQUFFO0FBQXpCLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSytDLElBQUksQ0FBQ3JDLEtBRFYsQ0FESjtBQUtILEtBTkQsQ0FWUixDQURKO0FBcUJILEdBdEJEOztBQXdCQSxRQUFNNEksYUFBYSxHQUFHLE1BQU07QUFDeEIsV0FDSTtBQUFLLFdBQUssRUFBRTtBQUFFckwsYUFBSyxFQUFFLE9BQVQ7QUFBa0J5RCxxQkFBYSxFQUFFO0FBQWpDLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsNERBQUQ7QUFDSSxXQUFLLEVBQUMsTUFEVjtBQUNpQixhQUFPLEVBQUMsV0FEekI7QUFFSSxXQUFLLEVBQUU7QUFBRTFCLGVBQU8sRUFBRSxTQUFYO0FBQXNCcUosY0FBTSxFQUFFLFNBQTlCO0FBQXlDdkwsZUFBTyxFQUFFLFFBQWxEO0FBQTREb0IsYUFBSyxFQUFFLFNBQW5FO0FBQThFMkIsZ0JBQVEsRUFBRTtBQUF4RixPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREosRUFNSSxNQUFDLDREQUFEO0FBQ0ksV0FBSyxFQUFDLE9BRFY7QUFDa0IsYUFBTyxFQUFDLFdBRDFCO0FBRUksV0FBSyxFQUFFO0FBQUViLGVBQU8sRUFBRSxDQUFYO0FBQWNkLGFBQUssRUFBRSxLQUFyQjtBQUE0Qm1LLGNBQU0sRUFBRSxTQUFwQztBQUErQ3ZMLGVBQU8sRUFBRSxRQUF4RDtBQUFrRXFLLGFBQUssRUFBRTtBQUF6RSxPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkosRUFZS2dCLE9BQU8sQ0FBQ0ksTUFBUixHQUNHSixPQUFPLENBQUN2SSxHQUFSLENBQVksQ0FBQ21DLElBQUQsRUFBT0osS0FBUCxLQUFpQjtBQUN6QixhQUNJLE1BQUMsMERBQUQ7QUFBVSxjQUFNLE1BQWhCO0FBQWlCLFdBQUcsRUFBRUEsS0FBdEI7QUFBNkIsYUFBSyxFQUFFO0FBQUU5QixrQkFBUSxFQUFFLEVBQVo7QUFBZ0JiLGlCQUFPLEVBQUU7QUFBekIsU0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLK0MsSUFBSSxDQUFDckMsS0FEVixDQURKO0FBS0gsS0FORCxDQURILEdBU08sTUFBQywwREFBRDtBQUFVLFlBQU0sTUFBaEI7QUFBaUIsU0FBRyxFQUFFaUMsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyREFyQlosQ0FESjtBQTRCSCxHQTdCRDs7QUErQkEsUUFBTU4saUJBQWlCLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQWtCO0FBQ3hDUCxlQUFXLENBQUNNLEtBQUssQ0FBQ0UsYUFBUCxDQUFYO0FBQ0FYLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDSCxHQUhEOztBQUtBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLGNBQVUsRUFBQyxRQUF2QztBQUFnRCxXQUFPLEVBQUMsUUFBeEQ7QUFBaUUsYUFBUyxFQUFFbEIsT0FBTyxDQUFDMEgsVUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixhQUFTLEVBQUUxSCxPQUFPLENBQUM0SCxjQUF0QztBQUFzRCxXQUFPLEVBQUVsRyxpQkFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkRBQUQ7QUFDSSxhQUFTLEVBQUUxQixPQUFPLENBQUN1SCxTQUR2QjtBQUVJLGVBQVcsRUFBRSw0QkFGakI7QUFHSSxjQUFVLEVBQUU7QUFBRSxvQkFBYztBQUFoQixLQUhoQjtBQUlJLFdBQU8sRUFBRXNCLENBQUMsSUFBSVgsYUFBYSxDQUFDVyxDQUFELENBSi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQU9JO0FBQUssYUFBUyxFQUFFN0ksT0FBTyxDQUFDNkgsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0VBQUQ7QUFBWSxhQUFTLEVBQUU3SCxPQUFPLENBQUM4SCxVQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FQSixDQURKLENBREosRUFlSSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUE0QixjQUFVLEVBQUMsUUFBdkM7QUFBZ0QsV0FBTyxFQUFDLFFBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFDSSxTQUFLLEVBQUU7QUFBRS9CLGtCQUFZLEVBQUU7QUFBaEIsS0FEWDtBQUVJLFFBQUksRUFBRTlFLElBRlY7QUFHSSxZQUFRLEVBQUVHLFFBSGQ7QUFJSSxnQkFBWSxFQUFFO0FBQUVrQixjQUFRLEVBQUUsUUFBWjtBQUFzQkMsZ0JBQVUsRUFBRTtBQUFsQyxLQUpsQixDQUk4RDtBQUo5RDtBQUtJLG1CQUFlLEVBQUU7QUFBRUQsY0FBUSxFQUFFLEtBQVo7QUFBbUJDLGdCQUFVLEVBQUU7QUFBL0IsS0FMckIsQ0FLOEQ7QUFDOUQ7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUtrRyxnQkFBZ0IsRUFSckIsRUFTSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixFQVVLRSxhQUFhLEVBVmxCLENBREosQ0FESixDQWZKLENBREo7QUFtQ0gsQ0FoSUQ7O0FBa0llViw2RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTkE7QUFDQTtBQUNBOztBQVVBLE1BQU1hLFVBQThDLEdBQUluSixLQUFELElBQTRCO0FBQ2pGLE1BQUlvSixRQUFRLEdBQUksa0VBQWhCOztBQUNBLE1BQUlwSixLQUFLLENBQUNxSixJQUFOLEtBQWUsSUFBbkIsRUFBeUI7QUFDdkJELFlBQVEsR0FBSTtBQUFJLGVBQVMsRUFBQyx3QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXdDcEosS0FBSyxDQUFDSSxLQUE5QyxDQUFaO0FBQ0Q7O0FBQ0QsTUFBSUosS0FBSyxDQUFDcUosSUFBTixLQUFlLElBQW5CLEVBQXlCO0FBQ3ZCRCxZQUFRLEdBQUk7QUFBSSxlQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF3Q3BKLEtBQUssQ0FBQ0ksS0FBOUMsQ0FBWjtBQUNEOztBQUNELE1BQUlKLEtBQUssQ0FBQ3FKLElBQU4sS0FBZSxJQUFuQixFQUF5QjtBQUN2QkQsWUFBUSxHQUFJO0FBQUksZUFBUyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0NwSixLQUFLLENBQUNJLEtBQTlDLENBQVo7QUFDRDs7QUFDRCxNQUFJa0osYUFBYSxHQUFJLGtFQUFyQjs7QUFDQSxNQUFJdEosS0FBSyxDQUFDNEUsSUFBTixDQUFXMkUsT0FBWCxDQUFtQixVQUFuQixNQUFtQyxDQUFDLENBQXhDLEVBQTJDO0FBQ3pDRCxpQkFBYSxHQUNYO0FBQUcsVUFBSSxFQUFFdEosS0FBSyxDQUFDNEUsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0d3RSxRQURILENBREY7QUFLRCxHQU5ELE1BTU8sSUFBSXBKLEtBQUssQ0FBQzRFLElBQU4sS0FBZSxFQUFuQixFQUF1QjtBQUM1QjBFLGlCQUFhLEdBQUdGLFFBQWhCO0FBQ0QsR0FGTSxNQUVBO0FBQ0xFLGlCQUFhLEdBQ1gsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRXRKLEtBQUssQ0FBQ3dKLElBQU4sR0FBV3hKLEtBQUssQ0FBQ3dKLElBQWpCLEdBQXNCeEosS0FBSyxDQUFDNEUsSUFBeEM7QUFBOEMsUUFBRSxFQUFFK0MsTUFBTSxDQUFDM0gsS0FBSyxDQUFDNEUsSUFBUCxDQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHd0UsUUFESCxDQURGLENBREY7QUFPRDs7QUFDRCxTQUNFLE1BQUMsNkRBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLFFBQUksTUFBaEM7QUFBaUMsTUFBRSxFQUFFLEVBQXJDO0FBQXlDLGFBQVMsRUFBQyxLQUFuRDtBQUNNLGNBQVUsRUFBQyxRQURqQjtBQUMwQixhQUFTLEVBQUMsYUFEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVHRSxhQUZILEVBR0U7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQ3RKLEtBQUssQ0FBQ3lKLFdBQXJELENBSEYsQ0FERjtBQU9ELENBcENEOztBQXNDZU4seUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQU1BLE1BQU1PLFVBQTJDLEdBQUkxSixLQUFELElBQXlCO0FBQzNFLFNBQ0ksTUFBQyw2REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsUUFBSSxNQUFoQztBQUFpQyxNQUFFLEVBQUUsRUFBckM7QUFBeUMsYUFBUyxFQUFDLFFBQW5EO0FBQTRELGFBQVMsRUFBQyxLQUF0RTtBQUNJLFdBQU8sRUFBQyxRQURaO0FBRUksY0FBVSxFQUFDLFFBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMsNkRBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLGFBQVMsRUFBQyxhQUF0QztBQUNNLFdBQU8sRUFBQyxRQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDZEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBa0IsTUFBRSxFQUFFLEVBQXRCO0FBQTBCLGFBQVMsRUFBQyx3Q0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNERBREYsRUFJRTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssV0FBTyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsS0FBQyxFQUFDLHNQQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFPRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsMENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixFQUVFO0FBQUcsYUFBUyxFQUFDLDRDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEVBRkYsQ0FQRixDQUpGLEVBa0JFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLG9DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQywwQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsNENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixDQUpGLENBbEJGLEVBNkJFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLG9DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQywwQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFHLGFBQVMsRUFBQyw0Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGLENBSkYsQ0E3QkYsRUF3Q0U7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsT0FBRyxFQUFDLHVEQUF6QjtBQUNLLE9BQUcsRUFBQyxzRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRTtBQUFHLFFBQUksRUFBRSxtSEFBVDtBQUE4SCxVQUFNLEVBQUUsUUFBdEk7QUFBZ0osT0FBRyxFQUFFLFVBQXJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQywrQ0FBVDtBQUF5RCxPQUFHLEVBQUMsTUFBN0Q7QUFBb0UsYUFBUyxFQUFDLE1BQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUhGLENBeENGLENBRkYsRUFrREUsTUFBQyw2REFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQWtCLE1BQUUsRUFBRSxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFrQixNQUFFLEVBQUUsQ0FBdEI7QUFBeUIsYUFBUyxFQUFDLG1CQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUlFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLFdBQVo7QUFBeUIsTUFBRSxFQUFFLFdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFBMUMsQ0FERixDQUpGLEVBT0U7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFFLHVDQUFUO0FBQWtELE9BQUcsRUFBRSxVQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLENBUEYsRUFVRTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUUsc0RBQVQ7QUFBaUUsT0FBRyxFQUFFLFVBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsQ0FWRixFQWFFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLFVBQVo7QUFBd0IsTUFBRSxFQUFFLFVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF4QyxDQURGLENBYkYsQ0FERixFQWtCRSxNQUFDLDZEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBa0IsTUFBRSxFQUFFLENBQXRCO0FBQXlCLGFBQVMsRUFBQyxtQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsRUFJRTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUUseURBQVQ7QUFBb0UsT0FBRyxFQUFFLFVBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBREYsQ0FKRixFQU9FO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBRSwwREFBVDtBQUFxRSxPQUFHLEVBQUUsVUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FERixDQVBGLEVBVUU7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFFLHlEQUFUO0FBQW9FLE9BQUcsRUFBRSxVQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLENBVkYsRUFhRTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUUsMERBQVQ7QUFBcUUsT0FBRyxFQUFFLFVBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBREYsQ0FiRixDQWxCRixFQW1DRSxNQUFDLDZEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBa0IsTUFBRSxFQUFFLENBQXRCO0FBQXlCLGFBQVMsRUFBQyxtQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFJRTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUUsdUNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FERixDQUpGLEVBT0U7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFFLG9DQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBREYsQ0FQRixFQVVFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBRSxrREFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQURGLENBVkYsRUFhRTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUUsc0NBQVQ7QUFBaUQsT0FBRyxFQUFFLFVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBREYsQ0FiRixDQW5DRixFQW9ERSxNQUFDLDZEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBa0IsTUFBRSxFQUFFLENBQXRCO0FBQXlCLGFBQVMsRUFBQyxtQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREYsRUFJRTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUUseUNBQVQ7QUFBb0QsT0FBRyxFQUFFLFVBQXpEO0FBQXFFLFVBQU0sRUFBRSxRQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBSkYsRUFPRTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUUsMERBQVQ7QUFBcUUsT0FBRyxFQUFFLFVBQTFFO0FBQXNGLFVBQU0sRUFBRSxRQUE5RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FQRixFQVVFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBRSwrQkFBVDtBQUEwQyxPQUFHLEVBQUUsVUFBL0M7QUFBMkQsVUFBTSxFQUFFLFFBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQVZGLEVBYUU7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFFLHdDQUFUO0FBQW1ELE9BQUcsRUFBRSxVQUF4RDtBQUFvRSxVQUFNLEVBQUUsUUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQWJGLENBcERGLEVBcUVFLE1BQUMsNkRBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFrQixNQUFFLEVBQUUsRUFBdEI7QUFBMEIsYUFBUyxFQUFDLG1CQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFERixFQUVFO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQywrQ0FBVDtBQUF5RCxPQUFHLEVBQUMsTUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxPQUFHLEVBQUMscURBQVQ7QUFBK0QsT0FBRyxFQUFDLFlBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUssT0FBRyxFQUFDLDhDQUFUO0FBQXdELE9BQUcsRUFBQyxLQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FGRixDQXJFRixFQTZFRSxNQUFDLDZEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBa0IsTUFBRSxFQUFFLEVBQXRCO0FBQTBCLGFBQVMsRUFBQyxtQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREYsRUFFRTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixPQUFHLEVBQUMsc0RBQS9CO0FBQ0ssT0FBRyxFQUFDLGFBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixPQUFHLEVBQUMsc0RBQS9CO0FBQ0ssT0FBRyxFQUFDLGFBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBRkYsQ0E3RUYsQ0FERixDQWxERixDQUhGLENBREo7QUFrSkQsQ0FuSkQ7O0FBcUplMEoseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNNUksU0FBUyxHQUFHQywyRUFBVSxDQUFFM0QsS0FBRCxLQUFZO0FBQ3ZDdU0sYUFBVyxFQUFFO0FBQ1h2SSxpQkFBYSxFQUFFLE1BREo7QUFFWHZELFlBQVEsRUFBRSxVQUZDO0FBR1h1SyxhQUFTLEVBQUUsRUFIQTtBQUlYcEYsWUFBUSxFQUFFO0FBSkMsR0FEMEI7QUFPdkM0RyxPQUFLLEVBQUU7QUFDTHBNLFdBQU8sRUFBRSxjQURKO0FBRUxvQixTQUFLLEVBQUUsT0FGRjtBQUdMYyxXQUFPLEVBQUUsQ0FISjtBQUlMO0FBQ0FxSixVQUFNLEVBQUUsU0FMSDtBQU1MO0FBQ0EsZUFBVztBQUNUO0FBQ0F0QyxvQkFBYyxFQUFFO0FBRlA7QUFQTixHQVBnQztBQW1CdkN6RixVQUFRLEVBQUU7QUFDUnhELFdBQU8sRUFBRSxPQUREO0FBRVI0QixtQkFBZSxFQUFFLFNBRlQ7QUFHUmdDLGlCQUFhLEVBQUUsTUFIUDtBQUlSYixZQUFRLEVBQUUsRUFKRjtBQUtSYixXQUFPLEVBQUUsQ0FMRDtBQU1SbUssYUFBUyxFQUFFLFFBTkg7QUFPUixlQUFXO0FBQ1R6SyxxQkFBZSxFQUFFO0FBRFI7QUFQSCxHQW5CNkI7QUE4QnZDZ0IsT0FBSyxFQUFFO0FBQ0w1QyxXQUFPLEVBQUUsUUFESjtBQUVMdUwsVUFBTSxFQUFFLFNBRkg7QUFHTG5LLFNBQUssRUFBRSxPQUhGO0FBSUxzSCxjQUFVLEVBQUUsR0FKUDtBQUtMM0YsWUFBUSxFQUFFLEVBTEw7QUFNTGIsV0FBTyxFQUFFLFFBTkosQ0FPTDs7QUFQSyxHQTlCZ0M7QUF1Q3ZDb0ssUUFBTSxFQUFFO0FBQ05oTSxVQUFNLEVBQUUsRUFERjtBQUVOSCxTQUFLLEVBQUUsTUFGRDtBQUdOeUIsbUJBQWUsRUFBRTtBQUhYLEdBdkMrQjtBQTRDdkMySyxTQUFPLEVBQUU7QUFDUGpNLFVBQU0sRUFBRSxFQUREO0FBRVBrTSxVQUFNLEVBQUUsQ0FGRDtBQUdQcEwsU0FBSyxFQUFFLE9BSEE7QUFJUFEsbUJBQWUsRUFBRSxPQUpWO0FBS1A1QixXQUFPLEVBQUU7QUFMRixHQTVDOEI7QUFtRHZDeUQsVUFBUSxFQUFFO0FBQ1JyQyxTQUFLLEVBQUUsU0FEQztBQUVSMkIsWUFBUSxFQUFFLEVBRkY7QUFHUlcsZ0JBQVksRUFBRTtBQUhOLEdBbkQ2QjtBQXdEdkMzRCxNQUFJLEVBQUU7QUFDSkMsV0FBTyxFQUFFLGNBREw7QUFFSlMsVUFBTSxFQUFFO0FBRkosR0F4RGlDO0FBNER2Q2lGLE9BQUssRUFBRTtBQUNMNUYsZUFBVyxFQUFFRixLQUFLLENBQUM2TSxPQUFOLENBQWMsQ0FBZDtBQURSO0FBNURnQyxDQUFaLENBQUQsQ0FBNUI7QUFpRUEsTUFBTUwsS0FBSyxHQUFHLENBQ1o7QUFBRU0sTUFBSSxFQUFFO0FBQVIsQ0FEWSxFQUNZO0FBQUVBLE1BQUksRUFBRTtBQUFSLENBRFosRUFFWjtBQUFFQSxNQUFJLEVBQUU7QUFBUixDQUZZLEVBRXFCO0FBQUVBLE1BQUksRUFBRTtBQUFSLENBRnJCLEVBR1o7QUFBRUEsTUFBSSxFQUFFO0FBQVIsQ0FIWSxFQUdRO0FBQUVBLE1BQUksRUFBRTtBQUFSLENBSFIsRUFJWjtBQUFFQSxNQUFJLEVBQUU7QUFBUixDQUpZLEVBSVM7QUFBRUEsTUFBSSxFQUFFO0FBQVIsQ0FKVCxDQUFkOztBQU1BLE1BQU0xRyxPQUFPLEdBQUl4RCxLQUFELElBQVc7QUFDekIsUUFBTUssT0FBTyxHQUFHUyxTQUFTLEVBQXpCO0FBQ0EsUUFBTSxDQUFDZSxTQUFELEVBQVlDLFlBQVosSUFBNEJqQyw0Q0FBSyxDQUFDMkIsUUFBTixDQUFlLElBQWYsQ0FBbEM7QUFDQSxRQUFNLENBQUMySSxRQUFELEVBQVdDLFdBQVgsSUFBMEJ2Syw0Q0FBSyxDQUFDMkIsUUFBTixDQUFlLEtBQWYsQ0FBaEM7QUFDQSxRQUFNNkksU0FBUyxHQUFHeEssNENBQUssQ0FBQ3lLLE1BQU4sQ0FBYSxJQUFiLENBQWxCLENBSnlCLENBTXpCOztBQUNBLFFBQU1DLFFBQVEsR0FBRzFLLDRDQUFLLENBQUN5SyxNQUFOLENBQWFILFFBQWIsQ0FBakI7QUFDQXRLLDhDQUFLLENBQUMySyxTQUFOLENBQWdCLE1BQU07QUFDcEIsUUFBSUQsUUFBUSxDQUFDRSxPQUFULEtBQXFCLElBQXJCLElBQTZCTixRQUFRLEtBQUssS0FBOUMsRUFBcUQ7QUFDbkRFLGVBQVMsQ0FBQ0ksT0FBVixDQUFrQkMsS0FBbEI7QUFDRDs7QUFDREgsWUFBUSxDQUFDRSxPQUFULEdBQW1CTixRQUFuQjtBQUNELEdBTEQsRUFLRyxDQUFDQSxRQUFELENBTEg7QUFPQSxTQUNFLE1BQUMsdURBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLGFBQVMsRUFBRTlKLE9BQU8sQ0FBQ3lKLE1BQS9DO0FBQXVELGNBQVUsRUFBQyxRQUFsRTtBQUEyRSxXQUFPLEVBQUMsUUFBbkY7QUFBNEYsYUFBUyxFQUFDLEtBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBWSxTQUFLLEVBQUMsU0FBbEI7QUFDRSxpQkFBV0ssUUFBUSxHQUFHLG9CQUFILEdBQTBCNUgsU0FEL0M7QUFFRSxxQkFBYyxNQUZoQjtBQUdFLFNBQUssRUFBRTtBQUFFM0QsV0FBSyxFQUFFLE9BQVQ7QUFBa0JzSCxnQkFBVSxFQUFFLEdBQTlCO0FBQW1DeEcsYUFBTyxFQUFFLFFBQTVDO0FBQXNEbEMsYUFBTyxFQUFFLE1BQS9EO0FBQXVFa0IsZ0JBQVUsRUFBRTtBQUFuRixLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLGtFQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUVnQixhQUFPLEVBQUU7QUFBWCxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsNkJBREYsQ0FERixFQVVFLE1BQUMsdURBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0drSyxLQUFLLENBQUN0SixHQUFOLENBQVUsQ0FBQ21DLElBQUQsRUFBT1IsS0FBUCxLQUFpQjtBQUMxQixXQUNFLE1BQUMsNkRBQUQ7QUFBWSxTQUFHLEVBQUVBLEtBQWpCO0FBQXdCLGVBQVMsRUFBRTVCLE9BQU8sQ0FBQ3VKLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR25ILElBQUksQ0FBQ3lILElBRFIsQ0FERjtBQUtELEdBTkEsQ0FESCxDQVZGLEVBbUJFLE1BQUMsdURBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FuQkYsQ0FERjtBQXlCRCxDQXhDRDs7QUEwQ2UxRyxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9KQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNbUgsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGdEQUFELENBQXBCOztBQXFCQSxNQUFNQyxVQUE4QyxHQUFJN0ssS0FBRCxJQUE0QjtBQUNqRixRQUFNLENBQUM4SyxXQUFELEVBQWNDLFFBQWQsSUFBMEJsTCw4Q0FBQSxDQUFlLEtBQWYsQ0FBaEM7O0FBQ0EsUUFBTW1MLFdBQVcsR0FBSUMsSUFBRCxJQUFtQjtBQUNyQyxRQUFJLE9BQU9qTCxLQUFLLENBQUNnTCxXQUFiLEtBQTZCLFdBQWpDLEVBQThDO0FBQzVDaEwsV0FBSyxDQUFDZ0wsV0FBTixDQUFrQkMsSUFBbEI7QUFDRCxLQUZELE1BRU87QUFDTEYsY0FBUSxDQUFDRSxJQUFELENBQVI7QUFDRDtBQUNGLEdBTkQ7O0FBT0EsUUFBTSxDQUFDQyxnQkFBRCxFQUFtQkMsbUJBQW5CLElBQTBDdEwsOENBQUEsQ0FBZSxJQUFmLENBQWhEO0FBQ0EySyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJWSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJDLGlFQUFyQixLQUFnRCxDQUFDQywwREFBUyxDQUFDQyxPQUFWLENBQWtCSixZQUFZLENBQUNDLE9BQWIsQ0FBcUJDLGlFQUFyQixDQUFsQixDQUFyRCxFQUFzSDtBQUNwSCxVQUFJO0FBQ0ZILDJCQUFtQixDQUFDTSxJQUFJLENBQUNDLEtBQUwsQ0FBV04sWUFBWSxDQUFDQyxPQUFiLENBQXFCQyxpRUFBckIsQ0FBWCxDQUFELENBQW5CO0FBQ0QsT0FGRCxDQUVFLE9BQU9LLEtBQVAsRUFBYztBQUNkQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEO0FBQ0Y7QUFDRixHQVJRLEVBUU4sRUFSTSxDQUFUO0FBU0EsTUFBSUcsWUFBWSxHQUFHLDArR0FBbkI7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVE5TCxLQUFLLENBQUNJLEtBQWQsQ0FERixFQUVFO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsdUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQU0sT0FBRyxFQUFDLFdBQVY7QUFBc0IsUUFBSSxFQUFFSixLQUFLLENBQUMrTCxTQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUFNLE9BQUcsRUFBQyxlQUFWO0FBQTBCLFFBQUksRUFBRXBCLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQU0sUUFBSSxFQUFDLHdHQUFYO0FBQW9ILE9BQUcsRUFBQyxZQUF4SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxVQUE1QjtBQUF1QyxRQUFJLEVBQUMsMkVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLFVBQTVCO0FBQXVDLFFBQUksRUFBQyxpRkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0U7QUFBTSxRQUFJLEVBQUMsMEJBQVg7QUFBc0MsV0FBTyxFQUFFcUIsOERBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVdJLENBQUNULDBEQUFTLENBQUNDLE9BQVYsQ0FBa0J4TCxLQUFLLENBQUN5SixXQUF4QixDQUFELElBQ0E7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUV6SixLQUFLLENBQUN5SixXQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosRUFlRTtBQUFNLG1CQUFZLE1BQWxCO0FBQXlCLFlBQVEsRUFBQyxVQUFsQztBQUE2QyxXQUFPLEVBQUV6SixLQUFLLENBQUNJLEtBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixFQWdCRTtBQUFNLG1CQUFZLE1BQWxCO0FBQXlCLFlBQVEsRUFBQyxTQUFsQztBQUE0QyxXQUFPLEVBQUMsU0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQWlCRTtBQUFNLG1CQUFZLE1BQWxCO0FBQXlCLFlBQVEsRUFBQyxXQUFsQztBQUE4QyxXQUFPLEVBQUMsaUJBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsRUFrQkU7QUFBTSxtQkFBWSxNQUFsQjtBQUF5QixZQUFRLEVBQUMsV0FBbEM7QUFBOEMsV0FBTyxFQUFDLGlCQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJGLEVBbUJFO0FBQU0sbUJBQVksTUFBbEI7QUFBeUIsWUFBUSxFQUFDLGNBQWxDO0FBQWlELFdBQU8sRUFBQyx5QkFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CRixFQW9CRTtBQUFNLG1CQUFZLE1BQWxCO0FBQXlCLFlBQVEsRUFBQyxRQUFsQztBQUEyQyxXQUFPLEVBQUVKLEtBQUssQ0FBQytMLFNBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQkYsRUFxQkU7QUFBTSxtQkFBWSxNQUFsQjtBQUF5QixZQUFRLEVBQUMsVUFBbEM7QUFBNkMsV0FBTyxFQUFFL0wsS0FBSyxDQUFDcEMsS0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCRixFQXNCRTtBQUFNLG1CQUFZLE1BQWxCO0FBQXlCLFlBQVEsRUFBQyxnQkFBbEM7QUFBbUQsV0FBTyxFQUFFb0MsS0FBSyxDQUFDeUosV0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixFQXVCRTtBQUFNLG1CQUFZLE1BQWxCO0FBQXlCLFFBQUksRUFBQyxjQUE5QjtBQUE2QyxXQUFPLEVBQUMsU0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRixFQXdCRTtBQUFNLG1CQUFZLE1BQWxCO0FBQXlCLFFBQUksRUFBQyxjQUE5QjtBQUE2QyxXQUFPLEVBQUMsWUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhCRixFQXlCRTtBQUFNLG1CQUFZLE1BQWxCO0FBQXlCLFFBQUksRUFBQyxpQkFBOUI7QUFBZ0QsV0FBTyxFQUFDLFlBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6QkYsRUEwQkU7QUFBTSxtQkFBWSxNQUFsQjtBQUF5QixRQUFJLEVBQUMsZUFBOUI7QUFBOEMsV0FBTyxFQUFFekosS0FBSyxDQUFDSSxLQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJGLEVBMkJFO0FBQU0sbUJBQVksTUFBbEI7QUFBeUIsUUFBSSxFQUFDLHFCQUE5QjtBQUFvRCxXQUFPLEVBQUVKLEtBQUssQ0FBQ3lKLFdBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkYsRUE0QkU7QUFBTSxtQkFBWSxNQUFsQjtBQUF5QixRQUFJLEVBQUMsZUFBOUI7QUFBOEMsV0FBTyxFQUFFekosS0FBSyxDQUFDcEMsS0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVCRixFQTZCRTtBQUFRLFFBQUksRUFBQyxxQkFBYjtBQUFtQywyQkFBdUIsRUFBRTtBQUFFcU8sWUFBTSxFQUFFSDtBQUFWLEtBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QkYsQ0FERixFQWlDRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQ0YsRUFrQ0c5TCxLQUFLLENBQUNrTSxRQWxDVCxFQW1DRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQ0YsQ0FERjtBQXVDRCxDQTNERDs7QUE2RGVyQix5RUFBZixFOzs7Ozs7Ozs7OztBQzFGQSxpQ0FBaUMsZ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakM7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTS9KLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQzNELEtBQUssS0FBSztBQUNyQytPLFFBQU0sRUFBRTtBQUNOeE8sU0FBSyxFQUFFLE1BREQ7QUFFTkcsVUFBTSxFQUFFLEdBRkY7QUFHTnNHLGFBQVMsRUFBRSxRQUhMO0FBSU5wQixZQUFRLEVBQUUsUUFKSjtBQUtOO0FBQ0E7QUFDQTlELHNCQUFrQixFQUFFLGVBUGQ7QUFRTkQsa0JBQWMsRUFBRSxNQVJWO0FBU05wQixZQUFRLEVBQUUsVUFUSjtBQVVONkIsV0FBTyxFQUFFO0FBVkgsR0FENkI7QUFhckMwTSxZQUFVLEVBQUU7QUFDVnpPLFNBQUssRUFBRSxNQURHO0FBRVZFLFlBQVEsRUFBRSxVQUZBO0FBR1ZXLE9BQUcsRUFBRSxLQUhLO0FBSVZELFNBQUssRUFBRSxLQUpHO0FBS1Y2RixhQUFTLEVBQUU7QUFMRCxHQWJ5QjtBQW9CckMvRyxRQUFNLEVBQUU7QUFDTk0sU0FBSyxFQUFFLGdCQUREO0FBRU5HLFVBQU0sRUFBRTtBQUZGLEdBcEI2QjtBQXdCckN1TyxPQUFLLEVBQUU7QUFDTDtBQUNBdk8sVUFBTSxFQUFFLEdBRkg7QUFHTGtNLFVBQU0sRUFBRTtBQUhILEdBeEI4QjtBQTZCckM1SixPQUFLLEVBQUU7QUFDTHlILFNBQUssRUFBRSxNQURGO0FBRUxtQyxVQUFNLEVBQUUsY0FGSDtBQUdMO0FBQ0F6SixZQUFRLEVBQUUsTUFKTDtBQUtMMkYsY0FBVSxFQUFFLEdBTFA7QUFNTHRILFNBQUssRUFBRSxTQU5GO0FBT0xqQixTQUFLLEVBQUUsTUFQRjtBQVFMeUcsYUFBUyxFQUFFO0FBUk4sR0E3QjhCO0FBdUNyQ3FGLGFBQVcsRUFBRTtBQUNYNUIsU0FBSyxFQUFFLE1BREk7QUFFWDtBQUNBdEgsWUFBUSxFQUFFLE1BSEM7QUFJWDJGLGNBQVUsRUFBRSxHQUpEO0FBS1hvRyxjQUFVLEVBQUUsR0FMRDtBQU1YMU4sU0FBSyxFQUFFLFdBTkk7QUFPWGpCLFNBQUssRUFBRSxNQVBJO0FBUVh5RyxhQUFTLEVBQUU7QUFSQTtBQXZDd0IsQ0FBTCxDQUFOLENBQTVCO0FBb0RBLE1BQU1tSSxJQUFJLEdBQUcsQ0FDWDtBQUFFQyxPQUFLLEVBQUUsQ0FBVDtBQUFZQyxPQUFLLEVBQUU7QUFBbkIsQ0FEVyxFQUVYO0FBQUVELE9BQUssRUFBRSxDQUFUO0FBQVlDLE9BQUssRUFBRTtBQUFuQixDQUZXLENBQWI7O0FBTUEsTUFBTUMsVUFBVSxHQUFHLE1BQU07QUFDdkIsUUFBTSxDQUFDcEwsSUFBRCxFQUFPQyxPQUFQLElBQWtCMUIsNENBQUssQ0FBQzJCLFFBQU4sQ0FBZSxLQUFmLENBQXhCO0FBQ0EsUUFBTW5CLE9BQU8sR0FBR1MsU0FBUyxFQUF6QjtBQUNBLFFBQU0sQ0FBQzZMLFFBQUQsRUFBV0MsV0FBWCxJQUEwQi9NLDRDQUFLLENBQUMyQixRQUFOLENBQWUsQ0FBZixDQUFoQzs7QUFFQSxRQUFNcUwsWUFBWSxHQUFHLE1BQU07QUFDekIsV0FDRSxNQUFDLHdEQUFEO0FBQVEsZUFBUyxFQUFDLDZCQUFsQjtBQUFnRCxVQUFJLEVBQUVDLHNEQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxhQUFPLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxLQUFoQjtBQUFzQixPQUFDLEVBQUMsbUlBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQXNCLE9BQUMsRUFBQywySkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0U7QUFBTSxlQUFTLEVBQUMsS0FBaEI7QUFBc0IsT0FBQyxFQUFDLCtGQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsRUFJRTtBQUFNLGVBQVMsRUFBQyxLQUFoQjtBQUFzQixPQUFDLEVBQUMsNkpBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixDQURGLENBREYsRUFTRTtBQUFHLGVBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBVEYsQ0FERjtBQWFELEdBZEQ7O0FBZUEsUUFBTUMsVUFBVSxHQUFHLE1BQU07QUFDdkIsV0FDRSxNQUFDLHdEQUFEO0FBQVEsZUFBUyxFQUFDLDJCQUFsQjtBQUE4QyxVQUFJLEVBQUVDLG9EQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxhQUFPLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQXNCLE9BQUMsRUFBQyw4bERBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQXNCLE9BQUMsRUFBQyxrY0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0U7QUFBTSxlQUFTLEVBQUMsS0FBaEI7QUFBc0IsT0FBQyxFQUFDLHNXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsRUFJRTtBQUFNLGVBQVMsRUFBQyxLQUFoQjtBQUFzQixPQUFDLEVBQUMsd2VBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixFQUtFO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQXNCLE9BQUMsRUFBQyx3MkJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRixFQU1FO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQXNCLE9BQUMsRUFBQyxtVEFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5GLEVBT0U7QUFBTSxlQUFTLEVBQUMsS0FBaEI7QUFBc0IsT0FBQyxFQUFDLDJHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUEYsQ0FERixFQVVFO0FBQUcsZUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFWRixDQURGO0FBY0QsR0FmRDs7QUFnQkEsUUFBTUMsVUFBVSxHQUFHLE1BQU07QUFDdkIsV0FDRSxNQUFDLHdEQUFEO0FBQVEsZUFBUyxFQUFDLCtCQUFsQjtBQUFrRCxVQUFJLEVBQUVDLHdEQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxhQUFPLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxPQUFDLEVBQUMsMFFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFJRTtBQUFHLGVBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBSkYsQ0FERjtBQVFELEdBVEQ7O0FBV0EsUUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQ25MLEtBQUQsRUFBUXdLLEtBQVIsS0FBa0I7QUFDekNJLGVBQVcsQ0FBQ0osS0FBRCxDQUFYO0FBQ0QsR0FGRDs7QUFJQSxRQUFNWSxVQUFVLEdBQUcsTUFBTTtBQUN2QixXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHVEQUFEO0FBQU8sWUFBTSxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHNEQUFEO0FBQ0UsY0FBUSxFQUFFRCxnQkFEWjtBQUVFLG1CQUFhLEVBQUMsTUFGaEI7QUFHRSxvQkFBYyxFQUFDLFNBSGpCO0FBSUUsZUFBUyxFQUFDLFNBSlo7QUFLRSxhQUFPLEVBQUMsVUFMVjtBQU1FLGNBQVEsTUFOVjtBQU9FLFdBQUssRUFBRVIsUUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BU0dKLElBQUksQ0FBQ2pNLEdBQUwsQ0FBVStNLEdBQUQsSUFBUyxNQUFDLHFEQUFEO0FBQUssU0FBRyxFQUFFQSxHQUFHLENBQUNiLEtBQWQ7QUFBcUIsV0FBSyxFQUFFYSxHQUFHLENBQUNaLEtBQWhDO0FBQXVDLFdBQUssRUFBRVksR0FBRyxDQUFDYixLQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWxCLENBVEgsQ0FERixFQVlFLG1FQUNHRyxRQUFRLEtBQUssQ0FBYixJQUFrQlcsV0FBVyxFQURoQyxFQUVHWCxRQUFRLEtBQUssQ0FBYixJQUFrQlksbUJBQW1CLEVBRnhDLENBWkYsQ0FERixDQURGO0FBcUJELEdBdEJEOztBQXdCQSxRQUFNRCxXQUFXLEdBQUcsTUFBTTtBQUN4QixXQUNFO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQXFDLFdBQUssRUFBRTtBQUFFNU4sZUFBTyxFQUFFO0FBQVgsT0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsa0VBQUQ7QUFBVyxlQUFTLE1BQXBCO0FBQXFCLFVBQUksRUFBQyxPQUExQjtBQUFrQyxXQUFLLEVBQUMsa0JBQXhDO0FBQXNELGFBQU8sRUFBQyxVQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixFQUlFO0FBQUssV0FBSyxFQUFFO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsa0VBQUQ7QUFBVyxlQUFTLE1BQXBCO0FBQXFCLFVBQUksRUFBQyxPQUExQjtBQUFrQyxXQUFLLEVBQUMsb0JBQXhDO0FBQW1ELGFBQU8sRUFBQyxVQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FKRixFQU9FO0FBQUssV0FBSyxFQUFFO0FBQUU1QixjQUFNLEVBQUUsRUFBVjtBQUFjNEIsZUFBTyxFQUFFLE9BQXZCO0FBQWdDbUksYUFBSyxFQUFFLE1BQXZDO0FBQStDbEssYUFBSyxFQUFFO0FBQXRELE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFLLEVBQUU7QUFBRWlCLGFBQUssRUFBRSxTQUFUO0FBQW9CbUssY0FBTSxFQUFFO0FBQTVCLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBREYsQ0FQRixFQVVFO0FBQUssV0FBSyxFQUFFO0FBQUVsQixhQUFLLEVBQUU7QUFBVCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHdEQUFEO0FBQVEsYUFBTyxFQUFDLFdBQWhCO0FBQTRCLFdBQUssRUFBRTtBQUFFakosYUFBSyxFQUFFO0FBQVQsT0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQVZGLEVBYUU7QUFBSyxXQUFLLEVBQUU7QUFBRWMsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dtTixZQUFZLEVBRGYsRUFFR0UsVUFBVSxFQUZiLEVBR0dFLFVBQVUsRUFIYixDQWJGLENBREY7QUFxQkQsR0F0QkQ7O0FBMEJBLFFBQU1NLG1CQUFtQixHQUFHLE1BQU07QUFDaEMsV0FDRTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFxQyxXQUFLLEVBQUU7QUFBRTdOLGVBQU8sRUFBRTtBQUFYLE9BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFdBQUssRUFBRTtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGtFQUFEO0FBQVcsZUFBUyxNQUFwQjtBQUFxQixVQUFJLEVBQUMsT0FBMUI7QUFBa0MsV0FBSyxFQUFDLGdCQUF4QztBQUFpRCxhQUFPLEVBQUMsVUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFJRTtBQUFLLFdBQUssRUFBRTtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGtFQUFEO0FBQVcsZUFBUyxNQUFwQjtBQUFxQixVQUFJLEVBQUMsT0FBMUI7QUFBa0MsV0FBSyxFQUFDLFVBQXhDO0FBQThDLGFBQU8sRUFBQyxVQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FKRixFQU9FO0FBQUssV0FBSyxFQUFFO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsa0VBQUQ7QUFBVyxlQUFTLE1BQXBCO0FBQXFCLFVBQUksRUFBQyxPQUExQjtBQUFrQyxXQUFLLEVBQUMsT0FBeEM7QUFBZ0QsYUFBTyxFQUFDLFVBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQVBGLEVBVUU7QUFBSyxXQUFLLEVBQUU7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrRUFBRDtBQUFXLGVBQVMsTUFBcEI7QUFBcUIsVUFBSSxFQUFDLE9BQTFCO0FBQWtDLFdBQUssRUFBQyx3QkFBeEM7QUFBc0QsYUFBTyxFQUFDLFVBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQVZGLEVBYUU7QUFBSyxXQUFLLEVBQUU7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrRUFBRDtBQUFXLGVBQVMsTUFBcEI7QUFBcUIsVUFBSSxFQUFDLE9BQTFCO0FBQWtDLFdBQUssRUFBQyxvQkFBeEM7QUFBbUQsYUFBTyxFQUFDLFVBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQWJGLEVBZ0JFO0FBQUssV0FBSyxFQUFFO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsa0VBQUQ7QUFBVyxlQUFTLE1BQXBCO0FBQXFCLFVBQUksRUFBQyxPQUExQjtBQUFrQyxXQUFLLEVBQUMsbUJBQXhDO0FBQW9ELGFBQU8sRUFBQyxVQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FoQkYsRUFtQkUsTUFBQyx3REFBRDtBQUFRLGFBQU8sRUFBQyxXQUFoQjtBQUE0QixXQUFLLEVBQUU7QUFBRW1JLGFBQUssRUFBRSxPQUFUO0FBQWtCakosYUFBSyxFQUFFO0FBQXpCLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBbkJGLENBREY7QUF1QkQsR0F4QkQ7O0FBMEJBLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFDRSxTQUFLLEVBQUMsU0FEUjtBQUVFLFNBQUssRUFBRTtBQUFFQSxXQUFLLEVBQUUsT0FBVDtBQUFrQnNILGdCQUFVLEVBQUUsR0FBOUI7QUFBbUN4RyxhQUFPLEVBQUUsUUFBNUM7QUFBc0RtSSxXQUFLLEVBQUUsT0FBN0Q7QUFBc0VrQixZQUFNLEVBQUU7QUFBOUUsS0FGVDtBQUdFLFdBQU8sRUFBRSxNQUFNeEgsT0FBTyxDQUFDLElBQUQsQ0FIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQU1FLE1BQUMsd0RBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxRQUFJLEVBQUVELElBRlI7QUFHRSxXQUFPLEVBQUUsTUFBTUMsT0FBTyxDQUFDLEtBQUQsQ0FIeEI7QUFJRSx1QkFBZ0Isd0JBSmxCO0FBS0UsWUFBUSxFQUFFLElBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQUssYUFBUyxFQUFFbEIsT0FBTyxDQUFDOEwsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFOUwsT0FBTyxDQUFDK0wsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsVUFBcEI7QUFBK0IsYUFBUyxFQUFFL0wsT0FBTyxDQUFDaEQsTUFBbEQ7QUFBMEQsV0FBTyxFQUFFLE1BQU1rRSxPQUFPLENBQUMsS0FBRCxDQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUVsQixPQUFPLENBQUNnTSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTSxRQUFRLEtBQUssQ0FBYixJQUNDLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFrQixTQUFLLEVBQUU7QUFBRWEsaUJBQVcsRUFBRSxtQkFBZjtBQUFvQzFQLFlBQU0sRUFBRTtBQUE1QyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUV1QyxPQUFPLENBQUNELEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUMsT0FBTyxDQUFDb0osV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzTUFGRixFQUtFO0FBQUssT0FBRyxFQUFFZ0UsOERBQVY7QUFBc0IsU0FBSyxFQUFFO0FBQUUzUCxZQUFNLEVBQUUsR0FBVjtBQUFlSCxXQUFLLEVBQUU7QUFBdEIsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBRkosRUFVR2dQLFFBQVEsS0FBSyxDQUFiLElBQ0MsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQWtCLFNBQUssRUFBRTtBQUFFYSxpQkFBVyxFQUFFLG1CQUFmO0FBQW9DMVAsWUFBTSxFQUFFO0FBQTVDLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRXVDLE9BQU8sQ0FBQ0QsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FERixFQUVFO0FBQUssYUFBUyxFQUFFQyxPQUFPLENBQUNvSixXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVNQUZGLEVBS0U7QUFBSyxPQUFHLEVBQUVnRSw4REFBVjtBQUFzQixTQUFLLEVBQUU7QUFBRTNQLFlBQU0sRUFBRSxHQUFWO0FBQWVILFdBQUssRUFBRTtBQUF0QixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FYSixFQW1CRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxTQUFLLEVBQUU7QUFBRStCLGFBQU8sRUFBRSxXQUFYO0FBQXdCZCxXQUFLLEVBQUUsU0FBL0I7QUFBMEMyQixjQUFRLEVBQUUsRUFBcEQ7QUFBd0QyRixnQkFBVSxFQUFFO0FBQXBFLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsRUFFR2tILFVBQVUsRUFGYixDQW5CRixDQURGLENBTkYsQ0FQRixDQU5GLENBREY7QUFrREQsQ0FqTEQ7O0FBa0xlVix5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTTVMLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRTNELEtBQUQsS0FBWTtBQUNyQ2dELE9BQUssRUFBRTtBQUNIRyxZQUFRLEVBQUUsRUFEUDtBQUVIMkYsY0FBVSxFQUFFLEdBRlQ7QUFHSDZDLFVBQU0sRUFBRSxTQUhMO0FBSUhuSyxTQUFLLEVBQUU7QUFKSjtBQUQ4QixDQUFaLENBQUQsQ0FBNUI7O0FBVUEsTUFBTTRFLE9BQU8sR0FBSXhELEtBQUQsSUFBVztBQUN2QixRQUFNSyxPQUFPLEdBQUdTLFNBQVMsRUFBekI7QUFDQSxRQUFNO0FBQUVWO0FBQUYsTUFBWUosS0FBbEI7QUFDQSxTQUNJLE1BQUMsNkRBQUQ7QUFBWSxhQUFTLEVBQUVLLE9BQU8sQ0FBQ0QsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxLQURMLENBREo7QUFLSCxDQVJEOztBQVVlb0Qsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTFDLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRTNELEtBQUQsS0FBWSxFQUFaLENBQUQsQ0FBNUI7O0FBR0EsTUFBTW1ILFlBQVksR0FBSXZFLEtBQUQsSUFBVztBQUM5QixRQUFNSyxPQUFPLEdBQUdTLFNBQVMsRUFBekI7O0FBQ0EsUUFBTTBELFNBQVMsR0FBSXhFLEtBQUQsSUFBVztBQUMzQixVQUFNO0FBQUV5RTtBQUFGLFFBQWN6RSxLQUFwQjtBQUNBLFdBQ0U7QUFDRSxlQUFTLEVBQUUsNkJBRGI7QUFFRSxhQUFPLEVBQUV5RSxPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQURGO0FBT0QsR0FURDs7QUFZQSxRQUFNQyxTQUFTLEdBQUkxRSxLQUFELElBQVc7QUFDM0IsVUFBTTtBQUFFeUU7QUFBRixRQUFjekUsS0FBcEI7QUFDQSxXQUNFO0FBQ0UsZUFBUyxFQUFFLDZCQURiO0FBRUUsYUFBTyxFQUFFeUUsT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0UsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0FERjtBQU9ELEdBVEQ7O0FBV0EsUUFBTUUsVUFBVSxHQUFHLENBQ2pCO0FBQ0V2RSxTQUFLLEVBQUUscUJBRFQ7QUFFRXdFLFFBQUksRUFBRTtBQUZSLEdBRGlCLEVBS2pCO0FBQ0V4RSxTQUFLLEVBQUUsdUJBRFQ7QUFFRXdFLFFBQUksRUFBRTtBQUZSLEdBTGlCLEVBU2pCO0FBQ0V4RSxTQUFLLEVBQUUsOEJBRFQ7QUFFRXdFLFFBQUksRUFBRTtBQUZSLEdBVGlCLEVBYWpCO0FBQ0V4RSxTQUFLLEVBQUUsNkJBRFQ7QUFFRXdFLFFBQUksRUFBRTtBQUZSLEdBYmlCLEVBaUJqQjtBQUNFeEUsU0FBSyxFQUFFLGtCQURUO0FBRUV3RSxRQUFJLEVBQUU7QUFGUixHQWpCaUIsRUFxQmpCO0FBQ0V4RSxTQUFLLEVBQUUscUJBRFQ7QUFFRXdFLFFBQUksRUFBRTtBQUZSLEdBckJpQixFQXlCakI7QUFDRXhFLFNBQUssRUFBRSxvQkFEVDtBQUVFd0UsUUFBSSxFQUFFO0FBRlIsR0F6QmlCLEVBNkJqQjtBQUNFeEUsU0FBSyxFQUFFLHFCQURUO0FBRUV3RSxRQUFJLEVBQUU7QUFGUixHQTdCaUIsRUFpQ2pCO0FBQ0V4RSxTQUFLLEVBQUUsZ0JBRFQ7QUFFRXdFLFFBQUksRUFBRTtBQUZSLEdBakNpQixFQXFDakI7QUFDRXhFLFNBQUssRUFBRSxpQkFEVDtBQUVFd0UsUUFBSSxFQUFFO0FBRlIsR0FyQ2lCLENBQW5CO0FBMkNBLFFBQU1DLFFBQVEsR0FBRztBQUNmQyxRQUFJLEVBQUUsS0FEUztBQUVmQyxZQUFRLEVBQUUsSUFGSztBQUdmQyxTQUFLLEVBQUUsR0FIUTtBQUlmQyxnQkFBWSxFQUFFLENBSkM7QUFLZkMsa0JBQWMsRUFBRSxDQUxEO0FBTWZDLGdCQUFZLEVBQUUsQ0FOQztBQU9mQyxhQUFTLEVBQUUsTUFBQyxTQUFEO0FBQVcsYUFBTyxFQUFFLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQSTtBQVFmQyxhQUFTLEVBQUUsTUFBQyxTQUFEO0FBQVcsYUFBTyxFQUFFLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSSTtBQVNmQyxpQkFBYSxFQUFFLElBVEE7QUFVZkMsY0FBVSxFQUFFLENBQ1Y7QUFDRUMsZ0JBQVUsRUFBRSxJQURkO0FBRUVYLGNBQVEsRUFBRTtBQUNSSSxvQkFBWSxFQUFFLENBRE47QUFFUkMsc0JBQWMsRUFBRSxDQUZSO0FBR1JILGdCQUFRLEVBQUUsSUFIRjtBQUlSRCxZQUFJLEVBQUU7QUFKRTtBQUZaLEtBRFUsRUFVVjtBQUNFVSxnQkFBVSxFQUFFLEdBRGQ7QUFFRVgsY0FBUSxFQUFFO0FBQ1JJLG9CQUFZLEVBQUUsQ0FETjtBQUVSQyxzQkFBYyxFQUFFLENBRlI7QUFHUkMsb0JBQVksRUFBRTtBQUhOO0FBRlosS0FWVSxFQWtCVjtBQUNFSyxnQkFBVSxFQUFFLEdBRGQ7QUFFRVgsY0FBUSxFQUFFO0FBQ1JJLG9CQUFZLEVBQUUsQ0FETjtBQUVSQyxzQkFBYyxFQUFFO0FBRlI7QUFGWixLQWxCVTtBQVZHLEdBQWpCO0FBc0NBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxTQUFLLEVBQUU7QUFBRTNFLGNBQVEsRUFBRSxFQUFaO0FBQWdCYixhQUFPLEVBQUUsRUFBekI7QUFBNkJ3RyxnQkFBVSxFQUFFLEdBQXpDO0FBQThDdEgsV0FBSyxFQUFFO0FBQXJELEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREYsRUFFRSxNQUFDLGtEQUFELGVBQVlpRyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFSUYsVUFBVSxDQUFDckUsR0FBWCxDQUFlLENBQUNvTixZQUFELEVBQWV6TCxLQUFmLEtBQXlCO0FBQ3RDLFdBQ0U7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUV5TCxZQUFZLENBQUM5SSxJQUF6QjtBQUErQixRQUFFLEVBQUU4SSxZQUFZLENBQUM5SSxJQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsV0FBSyxFQUFFO0FBQ0x4Rix1QkFBZSxFQUFFLFNBRFo7QUFFTFIsYUFBSyxFQUFFLE9BRkY7QUFHTEYsa0JBQVUsRUFBRSxRQUhQO0FBSUxsQixlQUFPLEVBQUUsTUFKSjtBQUtMK0MsZ0JBQVEsRUFBRSxFQUxMO0FBTUwyRixrQkFBVSxFQUFFO0FBTlAsT0FEVDtBQVNFLGVBQVMsRUFBQyxzQkFUWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BVUV3SCxZQUFZLENBQUN0TixLQVZmLENBREYsQ0FERixDQURGLENBREY7QUFvQkQsR0FyQkQsQ0FGSixDQUZGLENBREY7QUErQkQsQ0F6SUQ7O0FBMkllbUUsMkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFNb0osT0FBTyxHQUFHLHVCQUFoQjtBQUNBLE1BQU1DLGNBQWMsR0FBRyx1QkFBdkI7QUFFQSxNQUFNQyxjQUFjLEdBQUcsbUZBQXZCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLG9EQUFoQjtBQUVBLE1BQU1DLFVBQVUsR0FBRyw2QkFBbkI7QUFDQSxNQUFNakIsV0FBVyxHQUFJLEdBQUVpQixVQUFXLGNBQWxDO0FBQ0EsTUFBTWIsYUFBYSxHQUFJLEdBQUVhLFVBQVcsZ0JBQXBDO0FBQ0EsTUFBTWYsU0FBUyxHQUFJLEdBQUVlLFVBQVcsWUFBaEM7QUFDQSxNQUFNQyxhQUFhLEdBQUksR0FBRUQsVUFBVyxVQUFwQztBQUVBLE1BQU1FLG1CQUFtQixHQUFHLHdEQUE1QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxrREFBeEI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsaURBQXZCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcsdURBQTVCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsNERBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsK0NBQTNCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsZUFBNUI7QUFDQSxNQUFNdkMsbUJBQW1CLEdBQUcsNkNBQTVCO0FBQ0EsTUFBTVYsc0JBQXNCLEdBQUcsYUFBL0I7QUFDQSxNQUFNa0Qsa0JBQWtCLEdBQUcsZ0JBQTNCO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsb0JBQWxDO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcsQ0FDMUI7QUFDRXBNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLGNBRlI7QUFHRXpFLE1BQUksRUFBRSxhQUhSO0FBSUUwRSxhQUFXLEVBQUU7QUFKZixDQUQwQixFQU8xQjtBQUNFdE0sSUFBRSxFQUFFLDBCQUROO0FBRUVxTSxNQUFJLEVBQUUsZUFGUjtBQUdFekUsTUFBSSxFQUFFLGNBSFI7QUFJRTBFLGFBQVcsRUFBRTtBQUpmLENBUDBCLEVBYTFCO0FBQ0V0TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSxrQkFGUjtBQUdFekUsTUFBSSxFQUFFLGlCQUhSO0FBSUUwRSxhQUFXLEVBQUU7QUFKZixDQWIwQixFQW1CMUI7QUFDRXRNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLG1CQUZSO0FBR0V6RSxNQUFJLEVBQUUsa0JBSFI7QUFJRTBFLGFBQVcsRUFBRTtBQUpmLENBbkIwQixDQUE1QjtBQTBCQSxNQUFNQyxlQUFlLEdBQUcsQ0FDdEI7QUFDRXZNLElBQUUsRUFBRSw4SEFETjtBQUVFcU0sTUFBSSxFQUFFLGNBRlI7QUFHRXpFLE1BQUksRUFBRSxTQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQURzQixFQVF0QjtBQUNFeE0sSUFBRSxFQUFFLDBCQUROO0FBRUVxTSxNQUFJLEVBQUUsc0JBRlI7QUFHRXpFLE1BQUksRUFBRSxpQkFIUjtBQUlFMEUsYUFBVyxFQUFFLGNBSmY7QUFLRUUsWUFBVSxFQUFFO0FBTGQsQ0FSc0IsRUFldEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLG9CQUZSO0FBR0V6RSxNQUFJLEVBQUUsZUFIUjtBQUlFMEUsYUFBVyxFQUFFLGNBSmY7QUFLRUUsWUFBVSxFQUFFO0FBTGQsQ0Fmc0IsRUFzQnRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSw0QkFGUjtBQUdFekUsTUFBSSxFQUFFLG9DQUhSO0FBSUUwRSxhQUFXLEVBQUUsY0FKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXRCc0IsRUE2QnRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSxzQkFGUjtBQUdFekUsTUFBSSxFQUFFLGlCQUhSO0FBSUUwRSxhQUFXLEVBQUUsY0FKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQTdCc0IsRUFvQ3RCO0FBQ0V4TSxJQUFFLEVBQUUsNlNBRE47QUFFRXFNLE1BQUksRUFBRSwwQkFGUjtBQUdFekUsTUFBSSxFQUFFLHNCQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXBDc0IsRUEyQ3RCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSx3QkFGUjtBQUdFekUsTUFBSSxFQUFFLHdCQUhSO0FBSUUwRSxhQUFXLEVBQUUsMEJBSmY7QUFLRUUsWUFBVSxFQUFFO0FBTGQsQ0EzQ3NCLEVBa0R0QjtBQUNFeE0sSUFBRSxFQUFFLDBCQUROO0FBRUVxTSxNQUFJLEVBQUUsc0JBRlI7QUFHRXpFLE1BQUksRUFBRSxzQkFIUjtBQUlFMEUsYUFBVyxFQUFFLDBCQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBbERzQixFQXlEdEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLDJCQUZSO0FBR0V6RSxNQUFJLEVBQUUsMkJBSFI7QUFJRTBFLGFBQVcsRUFBRSwwQkFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXpEc0IsRUFnRXRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSx5QkFGUjtBQUdFekUsTUFBSSxFQUFFLHlCQUhSO0FBSUUwRSxhQUFXLEVBQUUsMEJBSmY7QUFLRUUsWUFBVSxFQUFFO0FBTGQsQ0FoRXNCLEVBdUV0QjtBQUNFeE0sSUFBRSxFQUFFLDBCQUROO0FBRUVxTSxNQUFJLEVBQUUsMkJBRlI7QUFHRXpFLE1BQUksRUFBRSxrQkFIUjtBQUlFMEUsYUFBVyxFQUFFLDBCQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBdkVzQixFQThFdEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLDBCQUZSO0FBR0V6RSxNQUFJLEVBQUUsaUJBSFI7QUFJRTBFLGFBQVcsRUFBRSwwQkFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQTlFc0IsRUFxRnRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSw0QkFGUjtBQUdFekUsTUFBSSxFQUFFLHFCQUhSO0FBSUUwRSxhQUFXLEVBQUUsMEJBSmY7QUFLRUUsWUFBVSxFQUFFO0FBTGQsQ0FyRnNCLEVBNEZ0QjtBQUNFeE0sSUFBRSxFQUFFLDBCQUROO0FBRUVxTSxNQUFJLEVBQUUsd0JBRlI7QUFHRXpFLE1BQUksRUFBRSxlQUhSO0FBSUUwRSxhQUFXLEVBQUUsMEJBSmY7QUFLRUUsWUFBVSxFQUFFO0FBTGQsQ0E1RnNCLEVBbUd0QjtBQUNFeE0sSUFBRSxFQUFFLDBCQUROO0FBRUVxTSxNQUFJLEVBQUUsMEJBRlI7QUFHRXpFLE1BQUksRUFBRSxpQkFIUjtBQUlFMEUsYUFBVyxFQUFFLDBCQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBbkdzQixFQTBHdEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLDJCQUZSO0FBR0V6RSxNQUFJLEVBQUUsa0JBSFI7QUFJRTBFLGFBQVcsRUFBRSwwQkFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQTFHc0IsRUFpSHRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSx3QkFGUjtBQUdFekUsTUFBSSxFQUFFLGVBSFI7QUFJRTBFLGFBQVcsRUFBRSwwQkFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQWpIc0IsRUF3SHRCO0FBQ0V4TSxJQUFFLEVBQUUsa09BRE47QUFFRXFNLE1BQUksRUFBRSxtQkFGUjtBQUdFekUsTUFBSSxFQUFFLGNBSFI7QUFJRTBFLGFBQVcsRUFBRSxFQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBeEhzQixFQStIdEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLDJCQUZSO0FBR0V6RSxNQUFJLEVBQUUsa0JBSFI7QUFJRTBFLGFBQVcsRUFBRSxtQkFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQS9Ic0IsRUFzSXRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSw0QkFGUjtBQUdFekUsTUFBSSxFQUFFLG1CQUhSO0FBSUUwRSxhQUFXLEVBQUUsbUJBSmY7QUFLRUUsWUFBVSxFQUFFO0FBTGQsQ0F0SXNCLEVBNkl0QjtBQUNFeE0sSUFBRSxFQUFFLDBCQUROO0FBRUVxTSxNQUFJLEVBQUUsNEJBRlI7QUFHRXpFLE1BQUksRUFBRSxtQkFIUjtBQUlFMEUsYUFBVyxFQUFFLG1CQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBN0lzQixFQW9KdEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLDJCQUZSO0FBR0V6RSxNQUFJLEVBQUUsa0JBSFI7QUFJRTBFLGFBQVcsRUFBRSxtQkFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXBKc0IsRUEySnRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSw4QkFGUjtBQUdFekUsTUFBSSxFQUFFLHFCQUhSO0FBSUUwRSxhQUFXLEVBQUUsbUJBSmY7QUFLRUUsWUFBVSxFQUFFO0FBTGQsQ0EzSnNCLEVBa0t0QjtBQUNFeE0sSUFBRSxFQUFFLDBCQUROO0FBRUVxTSxNQUFJLEVBQUUsdUJBRlI7QUFHRXpFLE1BQUksRUFBRSxjQUhSO0FBSUUwRSxhQUFXLEVBQUUsbUJBSmY7QUFLRUUsWUFBVSxFQUFFO0FBTGQsQ0FsS3NCLEVBeUt0QjtBQUNFeE0sSUFBRSxFQUFFLDBCQUROO0FBRUVxTSxNQUFJLEVBQUUsMEJBRlI7QUFHRXpFLE1BQUksRUFBRSxpQkFIUjtBQUlFMEUsYUFBVyxFQUFFLG1CQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBektzQixFQWdMdEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLHdCQUZSO0FBR0V6RSxNQUFJLEVBQUUsZUFIUjtBQUlFMEUsYUFBVyxFQUFFLG1CQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBaExzQixFQXVMdEI7QUFDRXhNLElBQUUsRUFBRSw4SEFETjtBQUVFcU0sTUFBSSxFQUFFLGNBRlI7QUFHRXpFLE1BQUksRUFBRSxTQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXZMc0IsRUE4THRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSxrQkFGUjtBQUdFekUsTUFBSSxFQUFFLFNBSFI7QUFJRTBFLGFBQVcsRUFBRSxjQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBOUxzQixFQXFNdEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLHFCQUZSO0FBR0V6RSxNQUFJLEVBQUUsZ0JBSFI7QUFJRTBFLGFBQVcsRUFBRSxjQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBck1zQixFQTRNdEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLHdCQUZSO0FBR0V6RSxNQUFJLEVBQUUsb0JBSFI7QUFJRTBFLGFBQVcsRUFBRSxjQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBNU1zQixFQW1OdEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLDhCQUZSO0FBR0V6RSxNQUFJLEVBQUUsNkJBSFI7QUFJRTBFLGFBQVcsRUFBRSxjQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBbk5zQixFQTBOdEI7QUFDRXhNLElBQUUsRUFBRSw4SEFETjtBQUVFcU0sTUFBSSxFQUFFLDRCQUZSO0FBR0V6RSxNQUFJLEVBQUUsZ0NBSFI7QUFJRTBFLGFBQVcsRUFBRSxFQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBMU5zQixFQWlPdEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLDZCQUZSO0FBR0V6RSxNQUFJLEVBQUUseUJBSFI7QUFJRTBFLGFBQVcsRUFBRSw0QkFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQWpPc0IsRUF3T3RCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSwyQkFGUjtBQUdFekUsTUFBSSxFQUFFLGtDQUhSO0FBSUUwRSxhQUFXLEVBQUUsNEJBSmY7QUFLRUUsWUFBVSxFQUFFO0FBTGQsQ0F4T3NCLEVBK090QjtBQUNFeE0sSUFBRSxFQUFFLDBCQUROO0FBRUVxTSxNQUFJLEVBQUUsd0JBRlI7QUFHRXpFLE1BQUksRUFBRSx3QkFIUjtBQUlFMEUsYUFBVyxFQUFFLDRCQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBL09zQixFQXNQdEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLGdDQUZSO0FBR0V6RSxNQUFJLEVBQUUsNEJBSFI7QUFJRTBFLGFBQVcsRUFBRSw0QkFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXRQc0IsRUE2UHRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSwyQkFGUjtBQUdFekUsTUFBSSxFQUFFLDBCQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQTdQc0IsRUFvUXRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSxxQkFGUjtBQUdFekUsTUFBSSxFQUFFLG9CQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXBRc0IsRUEyUXRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSx1QkFGUjtBQUdFekUsTUFBSSxFQUFFLHNCQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQTNRc0IsRUFrUnRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSw2QkFGUjtBQUdFekUsTUFBSSxFQUFFLDZCQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQWxSc0IsRUF5UnRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSxxQkFGUjtBQUdFekUsTUFBSSxFQUFFLG9CQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXpSc0IsRUFnU3RCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSx5QkFGUjtBQUdFekUsTUFBSSxFQUFFLDBCQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQWhTc0IsRUF1U3RCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSw2QkFGUjtBQUdFekUsTUFBSSxFQUFFLDhCQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXZTc0IsRUE4U3RCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSxzQ0FGUjtBQUdFekUsTUFBSSxFQUFFLGlDQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQTlTc0IsRUFxVHRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSxzQkFGUjtBQUdFekUsTUFBSSxFQUFFLHFCQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXJUc0IsRUE0VHRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSxnQkFGUjtBQUdFekUsTUFBSSxFQUFFLGVBSFI7QUFJRTBFLGFBQVcsRUFBRSxFQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBNVRzQixFQW1VdEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLDJCQUZSO0FBR0V6RSxNQUFJLEVBQUUsMkJBSFI7QUFJRTBFLGFBQVcsRUFBRSxFQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBblVzQixFQTBVdEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLGtCQUZSO0FBR0V6RSxNQUFJLEVBQUUsaUJBSFI7QUFJRTBFLGFBQVcsRUFBRSxFQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBMVVzQixFQWlWdEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLG9CQUZSO0FBR0V6RSxNQUFJLEVBQUUsbUJBSFI7QUFJRTBFLGFBQVcsRUFBRSxFQUpmO0FBS0VFLFlBQVUsRUFBRTtBQUxkLENBalZzQixFQXdWdEI7QUFDRXhNLElBQUUsRUFBRSwwQkFETjtBQUVFcU0sTUFBSSxFQUFFLFVBRlI7QUFHRXpFLE1BQUksRUFBRSxTQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXhWc0IsRUErVnRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSxnQ0FGUjtBQUdFekUsTUFBSSxFQUFFLGdDQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQS9Wc0IsRUFzV3RCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSxvQkFGUjtBQUdFekUsTUFBSSxFQUFFLG9CQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXRXc0IsRUE2V3RCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSxpQ0FGUjtBQUdFekUsTUFBSSxFQUFFLGdDQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQTdXc0IsRUFvWHRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSwyQkFGUjtBQUdFekUsTUFBSSxFQUFFLDBCQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXBYc0IsRUEyWHRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSxxQkFGUjtBQUdFekUsTUFBSSxFQUFFLG9CQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQTNYc0IsRUFrWXRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSx1QkFGUjtBQUdFekUsTUFBSSxFQUFFLHNCQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQWxZc0IsRUF5WXRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSw2QkFGUjtBQUdFekUsTUFBSSxFQUFFLDZCQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXpZc0IsRUFnWnRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSxxQkFGUjtBQUdFekUsTUFBSSxFQUFFLG9CQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQWhac0IsRUF1WnRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSx5QkFGUjtBQUdFekUsTUFBSSxFQUFFLDBCQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXZac0IsRUE4WnRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSw2QkFGUjtBQUdFekUsTUFBSSxFQUFFLDhCQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQTlac0IsRUFxYXRCO0FBQ0V4TSxJQUFFLEVBQUUsMEJBRE47QUFFRXFNLE1BQUksRUFBRSxzQ0FGUjtBQUdFekUsTUFBSSxFQUFFLHFDQUhSO0FBSUUwRSxhQUFXLEVBQUUsRUFKZjtBQUtFRSxZQUFVLEVBQUU7QUFMZCxDQXJhc0IsQ0FBeEI7QUE4YUEsTUFBTUMsTUFBTSxHQUFHLENBQ2I7QUFDRTNPLE9BQUssRUFBRSxZQURUO0FBRUU0TyxVQUFRLEVBQUUsQ0FDUjtBQUFFbE0sV0FBTyxFQUFFLHFCQUFYO0FBQWtDbEYsU0FBSyxFQUFFO0FBQXpDLEdBRFEsRUFFUjtBQUFFa0YsV0FBTyxFQUFFLHdCQUFYO0FBQXFDbEYsU0FBSyxFQUFFO0FBQTVDLEdBRlEsRUFHUjtBQUFFa0YsV0FBTyxFQUFFLHFCQUFYO0FBQWtDbEYsU0FBSyxFQUFFO0FBQXpDLEdBSFEsRUFJUjtBQUFFa0YsV0FBTyxFQUFFLG9CQUFYO0FBQWlDbEYsU0FBSyxFQUFFO0FBQXhDLEdBSlE7QUFGWixDQURhLEVBVWI7QUFDRXdDLE9BQUssRUFBRSxRQURUO0FBRUU0TyxVQUFRLEVBQUUsQ0FDUjtBQUFFbE0sV0FBTyxFQUFFLGlCQUFYO0FBQThCbEYsU0FBSyxFQUFFO0FBQXJDLEdBRFEsRUFFUjtBQUFFa0YsV0FBTyxFQUFFLG1CQUFYO0FBQWdDbEYsU0FBSyxFQUFFO0FBQXZDLEdBRlEsRUFHUjtBQUFFa0YsV0FBTyxFQUFFLGlCQUFYO0FBQThCbEYsU0FBSyxFQUFFO0FBQXJDLEdBSFEsRUFJUjtBQUFFa0YsV0FBTyxFQUFFLGNBQVg7QUFBMkJsRixTQUFLLEVBQUU7QUFBbEMsR0FKUSxFQUtSO0FBQUVrRixXQUFPLEVBQUUsY0FBWDtBQUEyQmxGLFNBQUssRUFBRTtBQUFsQyxHQUxRO0FBRlosQ0FWYSxFQW9CYjtBQUNFd0MsT0FBSyxFQUFFLGlCQURUO0FBRUU0TyxVQUFRLEVBQUUsQ0FDUjtBQUFFbE0sV0FBTyxFQUFFLGlCQUFYO0FBQThCbEYsU0FBSyxFQUFFO0FBQXJDLEdBRFEsRUFFUjtBQUFFa0YsV0FBTyxFQUFFLG1CQUFYO0FBQWdDbEYsU0FBSyxFQUFFO0FBQXZDLEdBRlEsRUFHUjtBQUFFa0YsV0FBTyxFQUFFLGlCQUFYO0FBQThCbEYsU0FBSyxFQUFFO0FBQXJDLEdBSFEsRUFJUjtBQUFFa0YsV0FBTyxFQUFFLGNBQVg7QUFBMkJsRixTQUFLLEVBQUU7QUFBbEMsR0FKUSxFQUtSO0FBQUVrRixXQUFPLEVBQUUsY0FBWDtBQUEyQmxGLFNBQUssRUFBRTtBQUFsQyxHQUxRO0FBRlosQ0FwQmEsRUE4QmI7QUFDRXdDLE9BQUssRUFBRSxTQURUO0FBRUU0TyxVQUFRLEVBQUUsQ0FDUjtBQUFFbE0sV0FBTyxFQUFFLGlCQUFYO0FBQThCbEYsU0FBSyxFQUFFO0FBQXJDLEdBRFEsRUFFUjtBQUFFa0YsV0FBTyxFQUFFLG1CQUFYO0FBQWdDbEYsU0FBSyxFQUFFO0FBQXZDLEdBRlEsRUFHUjtBQUFFa0YsV0FBTyxFQUFFLGlCQUFYO0FBQThCbEYsU0FBSyxFQUFFO0FBQXJDLEdBSFEsRUFJUjtBQUFFa0YsV0FBTyxFQUFFLGNBQVg7QUFBMkJsRixTQUFLLEVBQUU7QUFBbEMsR0FKUSxFQUtSO0FBQUVrRixXQUFPLEVBQUUsY0FBWDtBQUEyQmxGLFNBQUssRUFBRTtBQUFsQyxHQUxRO0FBRlosQ0E5QmEsRUF3Q2I7QUFDRXdDLE9BQUssRUFBRSxZQURUO0FBRUU0TyxVQUFRLEVBQUUsQ0FDUjtBQUFFbE0sV0FBTyxFQUFFLGlCQUFYO0FBQThCbEYsU0FBSyxFQUFFO0FBQXJDLEdBRFEsRUFFUjtBQUFFa0YsV0FBTyxFQUFFLG1CQUFYO0FBQWdDbEYsU0FBSyxFQUFFO0FBQXZDLEdBRlEsRUFHUjtBQUFFa0YsV0FBTyxFQUFFLGlCQUFYO0FBQThCbEYsU0FBSyxFQUFFO0FBQXJDLEdBSFEsRUFJUjtBQUFFa0YsV0FBTyxFQUFFLGNBQVg7QUFBMkJsRixTQUFLLEVBQUU7QUFBbEMsR0FKUSxFQUtSO0FBQUVrRixXQUFPLEVBQUUsY0FBWDtBQUEyQmxGLFNBQUssRUFBRTtBQUFsQyxHQUxRO0FBRlosQ0F4Q2EsRUFrRGI7QUFDRXdDLE9BQUssRUFBRSxnQkFEVDtBQUVFNE8sVUFBUSxFQUFFLENBQ1I7QUFBRWxNLFdBQU8sRUFBRSxpQkFBWDtBQUE4QmxGLFNBQUssRUFBRTtBQUFyQyxHQURRLEVBRVI7QUFBRWtGLFdBQU8sRUFBRSxtQkFBWDtBQUFnQ2xGLFNBQUssRUFBRTtBQUF2QyxHQUZRLEVBR1I7QUFBRWtGLFdBQU8sRUFBRSxpQkFBWDtBQUE4QmxGLFNBQUssRUFBRTtBQUFyQyxHQUhRLEVBSVI7QUFBRWtGLFdBQU8sRUFBRSxjQUFYO0FBQTJCbEYsU0FBSyxFQUFFO0FBQWxDLEdBSlEsRUFLUjtBQUFFa0YsV0FBTyxFQUFFLGNBQVg7QUFBMkJsRixTQUFLLEVBQUU7QUFBbEMsR0FMUTtBQUZaLENBbERhLEVBNERiO0FBQ0V3QyxPQUFLLEVBQUUsU0FEVDtBQUVFNE8sVUFBUSxFQUFFLENBQ1I7QUFBRWxNLFdBQU8sRUFBRSxrQkFBWDtBQUErQmxGLFNBQUssRUFBRTtBQUF0QyxHQURRLEVBRVI7QUFBRWtGLFdBQU8sRUFBRSxvQkFBWDtBQUFpQ2xGLFNBQUssRUFBRTtBQUF4QyxHQUZRLEVBR1I7QUFBRWtGLFdBQU8sRUFBRSxrQkFBWDtBQUErQmxGLFNBQUssRUFBRTtBQUF0QyxHQUhRLEVBSVI7QUFBRWtGLFdBQU8sRUFBRSxjQUFYO0FBQTJCbEYsU0FBSyxFQUFFO0FBQWxDLEdBSlEsRUFLUjtBQUFFa0YsV0FBTyxFQUFFLGNBQVg7QUFBMkJsRixTQUFLLEVBQUU7QUFBbEMsR0FMUTtBQUZaLENBNURhLENBQWY7QUF3RUEsTUFBTTRFLFFBQVEsR0FBRyxDQUNmO0FBQ0VwQyxPQUFLLEVBQUUsb0JBRFQ7QUFFRXNDLE9BQUssRUFBRSxDQUNMO0FBQUVLLFFBQUksRUFBRTtBQUFSLEdBREssRUFFTDtBQUFFQSxRQUFJLEVBQUU7QUFBUixHQUZLLEVBR0w7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FISyxFQUlMO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBSkssRUFLTDtBQUFFQSxRQUFJLEVBQUU7QUFBUixHQUxLLEVBTUw7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FOSyxFQU9MO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBUEs7QUFGVCxDQURlLEVBYWY7QUFDRTNDLE9BQUssRUFBRSxzQkFEVDtBQUVFc0MsT0FBSyxFQUFFLENBQ0w7QUFBRUssUUFBSSxFQUFFO0FBQVIsR0FESyxFQUVMO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBRkssRUFHTDtBQUFFQSxRQUFJLEVBQUU7QUFBUixHQUhLLEVBSUw7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FKSyxFQUtMO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBTEs7QUFGVCxDQWJlLEVBdUJmO0FBQ0UzQyxPQUFLLEVBQUUsa0JBRFQ7QUFFRXNDLE9BQUssRUFBRSxDQUNMO0FBQUVLLFFBQUksRUFBRTtBQUFSLEdBREssRUFFTDtBQUFFQSxRQUFJLEVBQUU7QUFBUixHQUZLLEVBR0w7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FISyxFQUlMO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBSkssRUFLTDtBQUFFQSxRQUFJLEVBQUU7QUFBUixHQUxLLEVBTUw7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FOSyxFQU9MO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBUEs7QUFGVCxDQXZCZSxFQW1DZjtBQUNFM0MsT0FBSyxFQUFFLG9CQURUO0FBRUVzQyxPQUFLLEVBQUUsQ0FDTDtBQUFFSyxRQUFJLEVBQUU7QUFBUixHQURLLEVBRUw7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FGSyxFQUdMO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBSEssRUFJTDtBQUFFQSxRQUFJLEVBQUU7QUFBUixHQUpLLEVBS0w7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FMSztBQUZULENBbkNlLEVBNkNmO0FBQ0UzQyxPQUFLLEVBQUUsb0JBRFQ7QUFFRXNDLE9BQUssRUFBRSxDQUNMO0FBQUVLLFFBQUksRUFBRTtBQUFSLEdBREssRUFFTDtBQUFFQSxRQUFJLEVBQUU7QUFBUixHQUZLLEVBR0w7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FISyxFQUlMO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBSkssRUFLTDtBQUFFQSxRQUFJLEVBQUU7QUFBUixHQUxLLEVBTUw7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FOSyxFQU9MO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBUEs7QUFGVCxDQTdDZSxFQXlEZjtBQUNFM0MsT0FBSyxFQUFFLGVBRFQ7QUFFRXNDLE9BQUssRUFBRSxDQUNMO0FBQUVLLFFBQUksRUFBRTtBQUFSLEdBREssRUFFTDtBQUFFQSxRQUFJLEVBQUU7QUFBUixHQUZLLEVBR0w7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FISyxFQUlMO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBSkssRUFLTDtBQUFFQSxRQUFJLEVBQUU7QUFBUixHQUxLLEVBTUw7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FOSyxFQU9MO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBUEs7QUFGVCxDQXpEZSxFQXFFZjtBQUNFM0MsT0FBSyxFQUFFLHFCQURUO0FBRUVzQyxPQUFLLEVBQUUsQ0FDTDtBQUFFSyxRQUFJLEVBQUU7QUFBUixHQURLLEVBRUw7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FGSyxFQUdMO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBSEssRUFJTDtBQUFFQSxRQUFJLEVBQUU7QUFBUixH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RUFBRSxtQkFYSixDQVlKO0FBQ0E7QUFDQTs7QUFkSTtBQVJKO0FBRDBCLENBQUQsQ0FBckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLDhDOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXMnXHJcbmltcG9ydCB7IEljb25CdXR0b24sIEljb24sIFRvb2x0aXAsIEJ1dHRvbiwgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBIaWRkZW4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IGJhZCBmcm9tICcuLi8uLi9wdWJsaWMvSW1hZ2UvYmFkLmpwZyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XHJcbiAgICBidXR0b246IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogJzVweCdcclxuICAgIH0sXHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAgbWluV2lkdGg6IDMwMCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyY6aG92ZXIsICYkZm9jdXNWaXNpYmxlJzoge1xyXG4gICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgICAgICcmICRpbWFnZUJhY2tkcm9wJzoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4xNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYgJGltYWdlTWFya2VkJzoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYgJGltYWdlVGl0bGUnOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICc0cHggc29saWQgY3VycmVudENvbG9yJyxcclxuICAgICAgICAgICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCBjdXJyZW50Q29sb3InLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvY3VzVmlzaWJsZToge30sXHJcbiAgICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVNyYzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgNDAlJyxcclxuICAgIH0sXHJcbiAgICBpbWFnZUJhY2tkcm9wOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxyXG4gICAgfSxcclxuICAgIGltYWdlVGl0bGU6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBwYWRkaW5nOiBgM3B4IDRweCA1cHggNXB4YCxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgICAgcGFkZGluZzogYDFweCAxcHggMXB4IDFweGAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBpbWFnZU1hcmtlZDoge1xyXG4gICAgICAgIGhlaWdodDogMyxcclxuICAgICAgICB3aWR0aDogMTgsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBib3R0b206IC0yLFxyXG4gICAgICAgIGxlZnQ6ICdjYWxjKDUwJSAtIDlweCknLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxyXG4gICAgfSxcclxufSlcclxuXHJcblxyXG5jbGFzcyBCdXR0b25WaWV3cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBpbWFnZXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9ub2l0aGF0Z2lhZGluaGJpbmhkdW9uZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDkvZ2klQzYlQjAlRTElQkIlOURuZy1nJUMzJUI1LSVDNCU5MSVFMSVCQiU4Ri5qcGcnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdHaeG6o20gMTAlIFThu6sgxJDGoW4gSMOgbmcgVGjhu6kgMicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzMwJScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vaTIud3AuY29tL2RvZ29xdW9jY3VvbmcuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA4L0RTQzA5NTQ1LmpwZz9maXQ9MzAwOCUyQzIwMDAmc3NsPTEnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUaGnhur90IEvhur8gVGhlbyBZw6p1IEPhuqd1JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnNDAlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3RoaWNvbmdkb2dvaGFub2kuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAzL25odS15LXRheS1ob3AtNm1vbi5qcGcnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfEkOG6t3QgSMOgbmcgS2jDtG5nIEdp4bubaSBI4bqhbicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzMwJScsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8SGlkZGVuIHhzRG93bj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcy5tYXAoaW1hZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uQmFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c1JpcHBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ltYWdlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZT17Y2xhc3Nlcy5mb2N1c1Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBpbWFnZS53aWR0aCwgZm9udFNpemU6IDMwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2UudXJsfSlgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJhY2tkcm9wfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VNYXJrZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkJ1dHRvblZpZXdzLnByb3BUeXBlcyA9IHtcclxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEJ1dHRvblZpZXdzKVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYTEtYzcwYTk5ODg3OWU2NTY3NTFjZmJmN2VlZWE5MTA2NTUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2EyLWQyN2M1OGFiNDRlZTJlMGUzYzc2MmNlYzEwOWMwMzUwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hMy04OTE2Zjc1MWRkYzZkYjE5NjJmNDdhNDZiZTJlN2Q3NC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYTQtODRjNmI2ZDU5ZDc1N2ZlYTIxZjZjNmY5MGUyYzUwNWEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2E1LTQ4ODQwNTI3YjUzM2I3MjgwOTQwMjg3YTNmNTgyMTI5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hNi01MzU1NzVlMTFiYzZmYTYyMzAzYmEwNzZhMTA2OTM3Ny5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYTctNTgxODA3N2JmYTA1ZmYwMjY1OTY4NmE3ZTM1MTNiYjMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2E4LTFiYzBkODc0ZjkyNjE1MjUyYTkzOTI1MjljOTRkNjgwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hOS1lMDFiNTQwMjBiMjQxYjcxNzZiNWUwMzBiOTExM2M4My5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvd2hhdDItZmJkOTM0NWFlY2RlNWMwYTA1MjVmMTIwNTNlMTgwNmIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3doYXQzLTM2NDVlMzcxMTVmNzc4NjY1NTI4NDM0Y2EzZWYzMTkwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy93aGF0NC03NzdhMmY4NjU0YjI4ZDMwN2Q4ODljZWNhOGMxMzk5NS5qcGdcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgICBMaXN0LFxyXG4gICAgRGl2aWRlcixcclxuICAgIExpc3RJdGVtSWNvbixcclxuICAgIExpc3RJdGVtLFxyXG4gICAgTGlzdEl0ZW1UZXh0LFxyXG4gICAgQ29sbGFwc2UsXHJcbiAgICBCdXR0b24sXHJcbiAgICBMaXN0U3ViaGVhZGVyLFxyXG4gICAgUG9wb3ZlcixcclxuICAgIFR5cG9ncmFwaHksXHJcbiAgICBNZW51SXRlbSxcclxuXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveCc7XHJcbmltcG9ydCBEcmFmdHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EcmFmdHMnO1xyXG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlbmQnO1xyXG5pbXBvcnQgRXhwYW5kTGVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzcyc7XHJcbmltcG9ydCBFeHBhbmRNb3JlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcclxuaW1wb3J0IFN0YXJCb3JkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXInO1xyXG5pbXBvcnQgR2FtZXBhZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dhbWVwYWQnO1xyXG5pbXBvcnQgeyBsaXN0TWVudSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9pbmRleCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGxpc3RJdGVtOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2UzZjJmZCcsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAnIzkwY2FmOScsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRleHRJdGVtOiB7XHJcbiAgICAgICAgY29sb3I6ICcjMTk3NmQyJyxcclxuICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAyMCxcclxuICAgIH0sXHJcbiAgICBwb3BvdmVyOiB7XHJcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLCAvLyBub25lXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBOZXN0ZWRMaXN0KCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtpbmRleE1lbnUsIHNldEluZGV4TWVudV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtjb3VudE1lbnUsIHNldENvdW50TWVudV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGhhbmRsZVBvcG92ZXJPcGVuID0gKGV2ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIHNldE9wZW4oZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgc2V0Q291bnRNZW51KDApO1xyXG4gICAgICAgIHNldEluZGV4TWVudShpbmRleCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBvcG92ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICBzZXRJbmRleE1lbnUobnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldEhvdmVyTWVudSA9IChjb3VudCkgPT4ge1xyXG4gICAgICAgIHNldENvdW50TWVudShjb3VudClcclxuICAgIH1cclxuICAgIGNvbnN0IGlkID0gb3BlbiA/IGluZGV4TWVudSA6IHVuZGVmaW5lZDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgY29tcG9uZW50PVwibmF2XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmVzdGVkLWxpc3Qtc3ViaGVhZGVyXCJcclxuICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsaXN0TWVudS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJvb21zIH0gPSBpdGVtXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBidXR0b24gaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25Nb3VzZUVudGVyPXsoZXZlbnQpID0+IGhhbmRsZVBvcG92ZXJPcGVuKGV2ZW50LCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvdW50TWVudSA9PT0gaW5kZXggPyAnIzkwY2FmOScgOiAnI2UzZjJmZCcsIGhlaWdodDogMzUsIHBhZGRpbmc6ICcwIDRweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdhbWVwYWRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAyNSwgY29sb3I6ICcjMTk3NmQyJywgcGFkZGluZzogNCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4TWVudSA9PT0gaW5kZXggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3BvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ3JpZ2h0JywgaG9yaXpvbnRhbDogJ3JpZ2h0JyB9fSAvLyBHaGltXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ2xlZnQnIH19IC8vIFZpIHRyaSBoaWVuIHRoaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlUG9wb3ZlckNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25Nb3VzZU91dD17aGFuZGxlUG9wb3ZlckNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cIm5hdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5lc3RlZC1saXN0LXN1YmhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDAsIHBvaW50ZXJFdmVudHM6ICdhdXRvJywgY29yc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb21zLm1hcCgoZWxlbWVudCwgY291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoY291bnQpID0+IHNldEhvdmVyTWVudShjb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvdW50TWVudSA9PT0gY291bnQgPyAnIzkwY2FmOScgOiAnI2UzZjJmZCcsIGhlaWdodDogMzUsIHBhZGRpbmc6ICcwIDRweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJNZW51KGNvdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdhbWVwYWRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAyNSwgY29sb3I6ICcjMTk3NmQyJywgcGFkZGluZzogNCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5yb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvTGlzdCA+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXN0ZWRMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBHcmlkTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdCdcclxuaW1wb3J0IEdyaWRMaXN0VGlsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGUnXHJcbmltcG9ydCBHcmlkTGlzdFRpbGVCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlQmFyJ1xyXG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyJ1xyXG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luZm8nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXMnXHJcbmltcG9ydCB7IEkxOG4gfSBmcm9tICdyZWFjdC1yZWR1eC1pMThuJ1xyXG5pbXBvcnQge1xyXG4gICBJY29uQnV0dG9uLFxyXG4gICBJY29uLFxyXG4gICBUb29sdGlwLFxyXG4gICBCdXR0b24sXHJcbiAgIENhcmQsXHJcbiAgIEdyaWQsXHJcbiAgIENhcmRDb250ZW50LFxyXG4gICBDYXJkQWN0aW9ucyxcclxuICAgVHlwb2dyYXBoeSxcclxuICAgQXBwQmFyLFxyXG4gICBUb29sYmFyLFxyXG4gICBIaWRkZW4sXHJcblxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgU3RhckJvcmRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXInXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xyXG4gICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICB9LFxyXG4gICBncmlkTGlzdDoge1xyXG4gICAgICBmbGV4V3JhcDogJ25vd3JhcCcsXHJcbiAgICAgIC8vIGhlaWdodDogJzUwMHB4JyxcclxuICAgICAgLy8gUHJvbW90ZSB0aGUgbGlzdCBpbnRvIGhpcyBvd24gbGF5ZXIgb24gQ2hyb21lLiBUaGlzIGNvc3QgbWVtb3J5IGJ1dCBoZWxwcyBrZWVwaW5nIGhpZ2ggRlBTLlxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVaKDApJyxcclxuICAgfSxcclxuICAgdGl0bGU6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCxcclxuICAgfSxcclxuICAgdGl0bGVCYXI6IHtcclxuICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAgJ2xpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwwLDAsMC43KSAwJSwgcmdiYSgwLDAsMCwwLjMpIDcwJSwgcmdiYSgwLDAsMCwwKSAxMDAlKScsXHJcbiAgIH0sXHJcbn0pXHJcblxyXG5cclxuY2xhc3MgQWN0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHJlbmRlcigpIHtcclxuICAgICAgbGV0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICBsZXQgdGlsZURhdGEgPSBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cDovL2JpendlYi5ka3RjZG4ubmV0LzEwMC8wNjAvOTY2L3Byb2R1Y3RzL2dpdW9uZy1uZ3UtZ28tY2FvLWNhcC10YWktaGEtbm9pLTEwLmpwZz92PTE0NjI5ODIxNTAzNzAnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0dpxrDhu51uZyBn4buXIHThu7Egbmhpw6puJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9jZG4ubXVhYmFubmhhbmguY29tL2Fzc2V0L2Zyb250ZW5kL2ltZy9nYWxsZXJ5LzIwMTgvMDkvMDQvNWI4ZTU1OTU0Njk5MF8xNTM2MDU0Njc3LmpwZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQsOgbiBwaMOybmcga2jDoWNoJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly93d3cubm9pdGhhdGhvYW5teS5jb20udm4vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9ub2ktdGhhdC1nby1waG9uZy1raGFjaC1kZXAuanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0JyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cDovL2JpendlYi5ka3RjZG4ubmV0LzEwMC8wNjAvOTY2L3Byb2R1Y3RzL2dpdW9uZy1uZ3UtZ28tY2FvLWNhcC10YWktaGEtbm9pLTEwLmpwZz92PTE0NjI5ODIxNTAzNzAnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0dpxrDhu51uZyBn4buXIHThu7Egbmhpw6puJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9jZG4ubXVhYmFubmhhbmguY29tL2Fzc2V0L2Zyb250ZW5kL2ltZy9nYWxsZXJ5LzIwMTgvMDkvMDQvNWI4ZTU1OTU0Njk5MF8xNTM2MDU0Njc3LmpwZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQsOgbiBwaMOybmcga2jDoWNoJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly93d3cubm9pdGhhdGhvYW5teS5jb20udm4vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9ub2ktdGhhdC1nby1waG9uZy1raGFjaC1kZXAuanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0JyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cDovL2JpendlYi5ka3RjZG4ubmV0LzEwMC8wNjAvOTY2L3Byb2R1Y3RzL2dpdW9uZy1uZ3UtZ28tY2FvLWNhcC10YWktaGEtbm9pLTEwLmpwZz92PTE0NjI5ODIxNTAzNzAnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0dpxrDhu51uZyBn4buXIHThu7Egbmhpw6puJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9jZG4ubXVhYmFubmhhbmguY29tL2Fzc2V0L2Zyb250ZW5kL2ltZy9nYWxsZXJ5LzIwMTgvMDkvMDQvNWI4ZTU1OTU0Njk5MF8xNTM2MDU0Njc3LmpwZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQsOgbiBwaMOybmcga2jDoWNoJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly93d3cubm9pdGhhdGhvYW5teS5jb20udm4vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9ub2ktdGhhdC1nby1waG9uZy1raGFjaC1kZXAuanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0JyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cDovL2JpendlYi5ka3RjZG4ubmV0LzEwMC8wNjAvOTY2L3Byb2R1Y3RzL2dpdW9uZy1uZ3UtZ28tY2FvLWNhcC10YWktaGEtbm9pLTEwLmpwZz92PTE0NjI5ODIxNTAzNzAnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0dpxrDhu51uZyBn4buXIHThu7Egbmhpw6puJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9jZG4ubXVhYmFubmhhbmguY29tL2Fzc2V0L2Zyb250ZW5kL2ltZy9nYWxsZXJ5LzIwMTgvMDkvMDQvNWI4ZTU1OTU0Njk5MF8xNTM2MDU0Njc3LmpwZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQsOgbiBwaMOybmcga2jDoWNoJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly93d3cubm9pdGhhdGhvYW5teS5jb20udm4vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9ub2ktdGhhdC1nby1waG9uZy1raGFjaC1kZXAuanBnJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0JyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTeG6oW5oIE5o4bqrbicsXHJcbiAgICAgICAgIH0sXHJcblxyXG4gICAgICBdXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8SGlkZGVuIHNtVXA+XHJcbiAgICAgICAgICAgICAgIDxHcmlkTGlzdCBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZExpc3R9IGNvbHM9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRpbGVEYXRhLm1hcCgodGlsZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMaXN0VGlsZSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RpbGUuaW1nfSBhbHQ9e3RpbGUudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGlzdFRpbGVCYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy50aXRsZUJhciwgdGl0bGU6IGNsYXNzZXMudGl0bGUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uSWNvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9e2BzdGFyICR7dGlsZS50aXRsZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJCb3JkZXJJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExpc3RUaWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIDwvR3JpZExpc3Q+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8SGlkZGVuIHhzRG93biA+XHJcbiAgICAgICAgICAgICAgIDxIaWRkZW4gbWRVcD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkTGlzdH0gY29scz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHt0aWxlRGF0YS5tYXAoKHRpbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGlzdFRpbGUga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aWxlLmltZ30gYWx0PXt0aWxlLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExpc3RUaWxlQmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aWxlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMudGl0bGVCYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBjbGFzc2VzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25JY29uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD17YHN0YXIgJHt0aWxlLnRpdGxlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhckJvcmRlckljb24gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGlzdFRpbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRMaXN0PlxyXG4gICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgPEhpZGRlbiBzbURvd24+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkTGlzdCBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZExpc3R9IGNvbHM9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICB7dGlsZURhdGEubWFwKCh0aWxlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExpc3RUaWxlIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGlsZS5pbWd9IGFsdD17dGlsZS50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMaXN0VGlsZUJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGlsZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLnRpdGxlQmFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogY2xhc3Nlcy50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uSWNvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9e2BzdGFyICR7dGlsZS50aXRsZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJCb3JkZXJJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExpc3RUaWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkTGlzdD5cclxuICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICB9XHJcbn1cclxuXHJcbkFjdGlvbnMucHJvcFR5cGVzID0ge1xyXG4gICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShBY3Rpb25zKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlcydcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgd2l0aFdpZHRoLCB7IGlzV2lkdGhVcCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3dpdGhXaWR0aCdcclxuaW1wb3J0IHtcclxuICBJY29uQnV0dG9uLFxyXG4gIEljb24sXHJcbiAgVG9vbHRpcCxcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBHcmlkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgQXBwQmFyLFxyXG4gIFRvb2xiYXIsXHJcbiAgQ2FyZEFjdGlvbkFyZWEsXHJcbiAgQ2FyZE1lZGlhLFxyXG4gIEF2YXRhcixcclxuXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0J1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvbidcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XHJcbiAgY2FyZDoge1xyXG4gICAgbWF4V2lkdGg6IDMwMCxcclxuICB9LFxyXG4gIGltZ1pvb206IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMjBweCcsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OiAnMnB4IDJweCA4cHggMnB4ICNhYWEnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG5cclxuY29uc3QgaW1nID0gW1xyXG4gIHtcclxuICAgIGltZzogJ2h0dHBzOi8vd3d3Lm5vaXRoYXRob2FubXkuY29tLnZuL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvbm9pLXRoYXQtZ28tcGhvbmcta2hhY2gtZGVwLmpwZycsXHJcbiAgICB0aXRsZTogJ0hp4buHbiDEkeG6oWkgdnXDtG5nIHbhuq9uIGzhu4tjaCBsw6NtIHF1w70gcGjDoWknLFxyXG4gICAgY29udGVudDogJydcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJ2h0dHBzOi8vc2RrLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL3MlQzYlQTFuLWclRTElQkIlOTctcGglRTElQkIlQTctbSVFMSVCQiU5RC5qcGcnLFxyXG4gICAgdGl0bGU6ICdQaG9uZyBjw6FjaCBob8OgbmcgZ2lhLCDEkeG6rW0gY2jhuqV0IGPhu5UgxJFp4buDbicsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJ2h0dHBzOi8vbmhhZGVwbmhheGluaC52bi9pbWFnZXMvcC5raCVDMyVBMWNoX3QlRTElQkElQTduZ18xXy4yXzEuanBnJyxcclxuICAgIHRpdGxlOiAnVGhp4bq/dCBr4bq/IHRp4buHbiBuZ2hpIHNhbmcgdHLhu41uZycsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJ2h0dHBzOi8vY2RuLm11YWJhbm5oYW5oLmNvbS9hc3NldC9mcm9udGVuZC9pbWcvZ2FsbGVyeS8yMDE3LzEwLzA0LzU5ZDQ1NjQzNzNhNGZfMTUwNzA4NzkzOS5qcGcnLFxyXG4gICAgdGl0bGU6ICdTYW5nIHRy4buNbmcgduG7m2kgZ2nGsOG7nW5nIG5n4bunIGPhu5UgxJFp4buDbicsXHJcbiAgICBjb250ZW50OiAnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnaHR0cHM6Ly92YXRsaWV1eGF5ZHVuZy5vcmcudm4vVXBsb2FkLzQ4L05hbV8yMDE4L1RoYW5nXzEyL05nYXlfMTkvdmx4ZC5vcmdfbmd1eWVudGFjMi5qcGcnLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY29udGVudDogJydcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJ2h0dHBzOi8vdmVjdG8uY29tLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA0L3R1X2JlcF9zb2lfbmdhLTUwMHg0OTUuanBnJyxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICdodHRwOi8vbm9pdGhhdGRlcGhhbm9pLmNvbS52bi91cGxvYWRzL2ltYWdlcy90dS1iZXAtZ28tc29uLW1hdS1jaHUtbC1jby1kaWVuL245LmpwZycsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnaHR0cHM6Ly9jZG4ubXVhYmFubmhhbmguY29tL2Fzc2V0L2Zyb250ZW5kL2ltZy9nYWxsZXJ5LzIwMTgvMDkvMDQvNWI4ZTU1OTU0Njk5MF8xNTM2MDU0Njc3LmpwZycsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJ1xyXG4gIH1cclxuXVxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBjb2xvcj0ncHJpbWFyeScgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgIEtodXnhur9uIG3Do2lcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWcubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGtleT17aW5kZXh9IHN0eWxlPXt7IHBhZGRpbmc6IDQgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nWm9vbX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuSW5kZXgucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEluZGV4KTsiLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IE5hdmlnYXRlTmV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0JztcclxuaW1wb3J0IE5hdmlnYXRlQmVmb3JlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZUJlZm9yZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGtleXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBHcmlkTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdCdcclxuaW1wb3J0IEdyaWRMaXN0VGlsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGUnXHJcbmltcG9ydCBHcmlkTGlzdFRpbGVCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlQmFyJ1xyXG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyJ1xyXG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luZm8nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXMnXHJcbmltcG9ydCB7XHJcbiAgSWNvbkJ1dHRvbixcclxuICBJY29uLFxyXG4gIFRvb2x0aXAsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgR3JpZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBUeXBvZ3JhcGh5XHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBPd2xDYXJvdXNlbCBmcm9tICdyZWFjdC1vd2wtY2Fyb3VzZWwyJ1xyXG5pbXBvcnQgYTEgZnJvbSAnLi9JbWFnZS9hMS5qcGcnXHJcbmltcG9ydCBhMiBmcm9tICcuL0ltYWdlL2EyLmpwZydcclxuaW1wb3J0IGEzIGZyb20gJy4vSW1hZ2UvYTMuanBnJ1xyXG5pbXBvcnQgYTQgZnJvbSAnLi9JbWFnZS9hNC5qcGcnXHJcbmltcG9ydCBhNSBmcm9tICcuL0ltYWdlL2E1LmpwZydcclxuaW1wb3J0IGE2IGZyb20gJy4vSW1hZ2UvYTYuanBnJ1xyXG5pbXBvcnQgYTcgZnJvbSAnLi9JbWFnZS9hNy5qcGcnXHJcbmltcG9ydCBhOCBmcm9tICcuL0ltYWdlL2E4LmpwZydcclxuaW1wb3J0IGE5IGZyb20gJy4vSW1hZ2UvYTkuanBnJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIGdyaWRMaXN0OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41NCknLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIHBhZGRpbmc6ICc1cHgnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAzOWJlNScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICB9LFxyXG4gIGltZ1pvb206IHtcclxuICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIC41cywgZmlsdGVyIDNzIGVhc2UtaW4tb3V0XCIsXHJcbiAgICBmaWx0ZXI6IFwiZ3JheXNjYWxlKDEwMCUpXCIsXHJcbiAgfSxcclxuICAvLyBpbWdab29tOiB7XHJcbiAgLy8gICBcIiY6aG92ZXJcIjoge1xyXG4gIC8vICAgICBmaWx0ZXI6IFwiZ3JheXNjYWxlKDApXCIsXHJcbiAgLy8gICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjEpXCIsXHJcbiAgLy8gICAgIHRyYW5zaXRpb25EdXJhdGlvbjogXCIxc1wiLFxyXG4gIC8vICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IFwibGluZWFyXCIsXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG59KSk7XHJcblxyXG5jb25zdCBLZXl3b3JkU2xpZGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IE5leHRBcnJvdyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9eydwYXJ0bmVyX19uZXh0X19hcnJvdyd9XHJcbiAgICAgICAgb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgPE5hdmlnYXRlTmV4dCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBQcmV2QXJyb3cgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXsncGFydG5lcl9fcHJldl9fYXJyb3cnfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgIDxOYXZpZ2F0ZUJlZm9yZSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRhU2VhcmNoID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJHacaw4budbmcgbmfhu6cgaGnhu4duIMSR4bqhaVwiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi92aW5ob21lcy1jZW50cmFsLXBhcmstcGlkLTM1ODcyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlThu6cgcXXhuqduIMOhbyB0aOG7nWkgdHJhbmdcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdmluaG9tZXMtZ3JhbmQtcGFyay1xdWFuLTktcGlkLTM3NTg0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkLDoG4gdHLDoCBwaMOybmcga2jDoWNoIGhp4buHbiDEkeG6oWlcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdmluaG9tZXMtc21hcnQtY2l0eS1waWQtMzcxOTFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQsOgbiB0csOgIHBow7JuZyBraMOhY2ggY+G7lSDEkWnhu4NuXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3ZpbmhvbWVzLW9jZWFuLXBhcmstZ2lhLWxhbS1waWQtMzc1OTdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVOG7pyBi4bq/cCB0aeG7h24gbmdoaVwiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi92dW5nLXRhdS1wZWFybC1waWQtNDg2NzRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTuG7mWkgdGjhuqV0IHNhbmcgdHLhu41uZ1wiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi9ncmFuZGV1ci1wYWxhY2UtcGlkLTUwMjM0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkdpxrDhu51uZyBuZ+G7pyBj4buVIMSRaeG7g25cIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vZGlhbW9uZC1pc2xhbmQtcGlkLTMzNVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJO4buZaSB0aOG6pXQgc2FuZyB0cuG7jW5nXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3RoZS1zdW4tYXZlbnVlLXBpZC0xNVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCw6BuIMSDbiBj4buVIMSRaeG7g25cIixcclxuICAgICAgcGF0aDogXCIvbmhhLWRhdC1iYW4vbmhhLWRhdC1iYW4tdGFpLWhhaS1waG9uZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCw6BuIMSDbiBoaeG7h24gxJHhuqFpXCIsXHJcbiAgICAgIHBhdGg6IFwiL25oYS1kYXQtYmFuL25oYS1kYXQtYmFuLXRhaS1oYS1ub2lcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyBvbkNsaWNrPXtbXX0gLz4sXHJcbiAgICBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgb25DbGljaz17W119IC8+LFxyXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDE0NDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICBkb3RzOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGluaXRpYWxTbGlkZTogMlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG5cclxuICBsZXQgdGlsZURhdGEgPSBbXHJcbiAgICB7IGltZzogYTEgfSxcclxuICAgIHsgaW1nOiBhMiB9LFxyXG4gICAgeyBpbWc6IGEzIH0sXHJcbiAgICB7IGltZzogYTQgfSxcclxuICAgIHsgaW1nOiBhNSB9LFxyXG4gICAgeyBpbWc6IGE2IH0sXHJcbiAgICB7IGltZzogYTcgfSxcclxuICAgIHsgaW1nOiBhOCB9LFxyXG4gICAgeyBpbWc6IGE5IH0sXHJcbiAgICB7IGltZzogYTEgfSxcclxuICAgIHsgaW1nOiBhMiB9LFxyXG4gICAgeyBpbWc6IGEzIH0sXHJcbiAgICB7IGltZzogYTQgfSxcclxuICAgIHsgaW1nOiBhNSB9LFxyXG4gICAgeyBpbWc6IGE2IH0sXHJcbiAgICB7IGltZzogYTcgfSxcclxuICAgIHsgaW1nOiBhOCB9LFxyXG4gICAgeyBpbWc6IGE5IH1cclxuICBdXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyXCIgc3R5bGU9e3sgaGVpZ2h0OiAyMDAgfX0gPlxyXG4gICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250U2l6ZTogMjAsIHBhZGRpbmc6IDEwLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiAnIzE5NzZkMicgfX0+XHJcbiAgICAgICAgS2jDoWNoIGjDoG5nIC0gxJHhu5FpIHTDoWNcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGlsZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXJ0bmVyX19pdGVtXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAwIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nfSBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG4gICAgPC9kaXYgPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtleXdvcmRTbGlkZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdCc7XHJcbmltcG9ydCBHcmlkTGlzdFRpbGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlJztcclxuaW1wb3J0IEdyaWRMaXN0VGlsZUJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGVCYXInO1xyXG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyJztcclxuaW1wb3J0IEluZm9JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbmZvJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXMnO1xyXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAncmVhY3QtcmVkdXgtaTE4bic7XHJcbmltcG9ydCB7XHJcbiAgICBJY29uQnV0dG9uLFxyXG4gICAgSWNvbixcclxuICAgIFRvb2x0aXAsXHJcbiAgICBCdXR0b24sXHJcbiAgICBDYXJkLFxyXG4gICAgR3JpZCxcclxuICAgIENhcmRDb250ZW50LFxyXG4gICAgQ2FyZEFjdGlvbnMsXHJcbiAgICBUeXBvZ3JhcGh5LFxyXG4gICAgQXBwQmFyLFxyXG4gICAgVG9vbGJhcixcclxuICAgIEhpZGRlbixcclxuICAgIFBvcG92ZXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgU3RhckJvcmRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IHsgdGl0bGVzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2luZGV4JztcclxuaW1wb3J0IEdhbWVwYWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HYW1lcGFkJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBwcm9kdWN0cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9pbmRleCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHByb2R1Y3Q6IHtcclxuICAgICAgICAvLyBib3JkZXI6ICcxcHggc29saWQgd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgYm94U2hhZG93OiAnMnB4IDJweCA4cHggMnB4ICNhYWEnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5cclxuY29uc3QgQWN0aW9ucyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0cmVtIHhzPXszfSBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBzdHlsZT17eyBoZWlnaHQ6IDIwMCwgd2lkdGg6ICcxMDAlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzRweCA4cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNTAsIHdpZHRoOiBcIjEwMCVcIiB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2FtZXBhZEljb24gc3R5bGU9e3sgZm9udFNpemU6IDE1LCBjb2xvcjogJyMxOTc2ZDInIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lJywgcGFkZGluZzogNCwgY29sb3I6ICcjYWFhJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBmb250V2VpZ2h0OiA1MDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubW9uZXlOZXcudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiJDEuXCIpfSB7JyDEkSAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgY29sb3I6ICcjYWFhJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnLCBwYWRkaW5nOiA0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgICR7aXRlbS5tb25leU9sZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXMnXHJcbmltcG9ydCB7XHJcbiAgIENhcmRDb250ZW50LFxyXG4gICBUeXBvZ3JhcGh5LFxyXG4gICBDYXJkQWN0aW9uQXJlYSxcclxuICAgQ2FyZE1lZGlhLFxyXG4gICBDYXJkLFxyXG4gICBBdmF0YXIsXHJcbiAgIEhpZGRlbixcclxuICAgR3JpZCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnQnXHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uJ1xyXG5pbXBvcnQgU3RhclJhdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyUmF0ZSdcclxuaW1wb3J0IHdoYXQyIGZyb20gJy4vSW1hZ2Uvd2hhdDIuanBnJ1xyXG5pbXBvcnQgd2hhdDMgZnJvbSAnLi9JbWFnZS93aGF0My5qcGcnXHJcbmltcG9ydCB3aGF0NCBmcm9tICcuL0ltYWdlL3doYXQ0LmpwZydcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XHJcbiAgIHZpZXdQaG9uZToge1xyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgcGFkZGluZzogJzhweCdcclxuICAgICAgfSxcclxuICAgfSxcclxuICAgY2FyZDoge1xyXG4gICAgICBtYXhXaWR0aDogMjAwLFxyXG4gICAgICBib3JkZXI6ICczcHggc29saWQgd2hpdGUnLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgICAgLy8gcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgIG1heFdpZHRoOiAxNzAsXHJcbiAgICAgIH1cclxuICAgfSxcclxuICAgdGl0bGU6IHtcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIHBhZGRpbmc6IDIwLFxyXG4gICB9LFxyXG4gICBjc3NJY29uOiB7XHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBmb250U2l6ZTogJzMwcHgnXHJcbiAgIH0sXHJcbiAgIGltZ1pvb206IHtcclxuICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gLjVzLCBmaWx0ZXIgM3MgZWFzZS1pbi1vdXRcIixcclxuICAgICAgZmlsdGVyOiBcImdyYXlzY2FsZSgxMDAlKVwiLFxyXG4gICB9LFxyXG4gICBpbWdab29tOiB7XHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgIGZpbHRlcjogXCJncmF5c2NhbGUoMClcIixcclxuICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMSlcIixcclxuICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBcIjFzXCIsXHJcbiAgICAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogXCJsaW5lYXJcIixcclxuICAgICAgfVxyXG4gICB9XHJcbn0pXHJcblxyXG5jb25zdCBhcnJJbWcgPSBbXHJcbiAgIHtcclxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly90aGViYW5rLnZuL3N0YXRpYy82LzExMzUvNzE0LzkwLzIwMTgvMTAvMTYvdGhlYmFua19zdXRoYXR2ZXBoaXF1ZXR0aGV0aW5kdW5na2hpdGhhbmh0b2FuMW1pbl8xNTM5NjU0MjMxLmpwZ1wiLFxyXG4gICAgICB0aXRsZTogJ011YSBIw6BuZyBUaeG7h24gTOG7o2knLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIGltYWdlOiB3aGF0NCwgLy9cImh0dHBzOi8vd3d3LnRoaWV0a2VraWVudHJ1Y2dyb3VwLmNvbS9wdWJsaWMvdXBsb2FkL2ltYWdlcy9ub2ktdGhhdC1nby1waG9uZy1raGFjaCUyMCg3NikuanBnXCIsXHJcbiAgICAgIHRpdGxlOiAnQuG6o28gSMOgbmggSOG6rXUgTcOjaScsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgaW1hZ2U6IHdoYXQyLCAvL1wiaHR0cHM6Ly93d3cubm9pdGhhdGhvYW5teS5jb20udm4vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9ub2ktdGhhdC1nby1waG9uZy1raGFjaC1kZXAuanBnXCIsXHJcbiAgICAgIHRpdGxlOiAnR2nDoSBD4bqjIEjhu6NwIEzDvScsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgaW1hZ2U6IHdoYXQzLCAvL1wiaHR0cHM6Ly9pMi53cC5jb20vZG9nb3F1b2NjdW9uZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDgvRFNDMDk1NDUuanBnP2ZpdD0zMDA4JTJDMjAwMCZzc2w9MVwiLFxyXG4gICAgICB0aXRsZTogJ1V5IFTDrW4gQ2jhuqV0IEzGsOG7o25nJyxcclxuICAgfSxcclxuXVxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgfVxyXG5cclxuICAgcmVuZGVyKCkge1xyXG4gICAgICBsZXQgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgIC8vIGxldCBpbWcgPSBcInVybCgnaHR0cDovL25vaXRoYXRkYW5nY2FwLnZuL2FwcC93ZWJyb290L3VwbG9hZHMvZmlsZXMvMS1waG9uZy1raGFjaC1ub2ktdGhhdC1jby1kaWVuLWNoYXUtYXUtZGluaC10aHUtdGFpLU5hbS1EaW5oLmpwZycpXCJcclxuICAgICAgbGV0IGltZyA9IFwidXJsKCdodHRwczovL3RhbWNodXBoaW5oc2FucGhhbS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDUvNDA3NzkwNTVfNzE5ODk2NDQ1MDEyOTEzXzQzNjQ0NDk0OTg3OTgyMjc0NTZfbi5qcGcnKVwiXHJcbiAgICAgIC8vIGxldCBpbWcgPSBcInVybCgnaHR0cHM6Ly9wbmcucG5ndHJlZS5jb20vNThwaWMvMzIvNDkvNjcvMjBVNThQSUNJOWRXY2Q3WDd5WDhlX1BJQzIwMTguanBnJylcIlxyXG4gICAgICBjb25zdCBhcnJheSA9IFt7IGl0ZW06IDEgfSwgeyBpdGVtOiAxIH0sIHsgaXRlbTogMSB9LCB7IGl0ZW06IDEgfSwgeyBpdGVtOiAxIH0sIHsgaXRlbTogMSB9XTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBpbWcsIGhlaWdodDogMjgwLCB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kUmVwZWF0OiAncmVwZWF0JyB9fSA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjMjE5NmYzJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSA+XHJcbiAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD0naDQnIGNvbXBvbmVudD0naDQnPlxyXG4gICAgICAgICAgICAgICAgICBIw4NZIMSQ4bq+TiBW4buaSSBDSMOaTkcgVMOUSVxyXG4gICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgIHthcnJheS5tYXAoKGl0ZW0sIGluZGV4KSA9PiA8U3RhclJhdGVJY29uIGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jc3NJY29ufSAvPil9XHJcbiAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gYWxpZ25JdGVtcz0nY2VudGVyJyBqdXN0aWZ5PSdjZW50ZXInIGRpcmVjdGlvbj0ncm93JyA+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJySW1nLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezN9IG1kPXszfSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2NsYXNzZXMudmlld1Bob25lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ1pvb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNvbnRlbXBsYXRpdmUgUmVwdGlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtlbGVtZW50LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17ZWxlbWVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjE5NmYzJywgcGFkZGluZzogNCB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTYsIGZvbnRXZWlnaHQ6IDUwMCB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICB9XHJcbn1cclxuXHJcbkluZGV4LnByb3BUeXBlcyA9IHtcclxuICAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSW5kZXgpIiwiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgTmF2aWdhdGVOZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZU5leHQnO1xyXG5pbXBvcnQgTmF2aWdhdGVCZWZvcmUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlQmVmb3JlJztcclxuXHJcbmludGVyZmFjZSBIb3RMb2NhdGlvblByb3BzIHsgfTtcclxuaW50ZXJmYWNlIExvY2F0aW9uUHJvcHMge1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmdcclxufVxyXG5cclxuLy9JbXBvcnQgRHluYW1pY1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG4vL0ltcG9ydCB3aXRob3V0IFNTUiBTbGlkZXJcclxuY29uc3QgU2xpZGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXNsaWNrJyksIHtcclxuICBzc3I6IGZhbHNlXHJcbn0pO1xyXG5cclxuY29uc3QgSG90TG9jYXRpb246IEZ1bmN0aW9uQ29tcG9uZW50PEhvdExvY2F0aW9uUHJvcHM+ID0gKHByb3BzOiBIb3RMb2NhdGlvblByb3BzKSA9PiB7XHJcbiAgY29uc3QgTmV4dEFycm93ID0gKHByb3BzOiB7IGNsYXNzTmFtZTogYW55OyBvbkNsaWNrOiBhbnk7IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9eydob3QtbG9jYXRpb25zX19uZXh0X19hcnJvdyd9XHJcbiAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgPE5hdmlnYXRlTmV4dCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCBQcmV2QXJyb3cgPSAocHJvcHM6IHsgY2xhc3NOYW1lOiBhbnk7IG9uQ2xpY2s6IGFueTsgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17J2hvdC1sb2NhdGlvbnNfX3ByZXZfX2Fycm93J31cclxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICA8TmF2aWdhdGVCZWZvcmUgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGxldCBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgY2xhc3NOYW1lPVwiXCIgb25DbGljaz17W119IC8+LFxyXG4gICAgcHJldkFycm93OiA8UHJldkFycm93IGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e1tdfSAvPixcclxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMjkwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDg3NSxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNTk5LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcbiAgbGV0IGRhdGFMb2NhdGlvbiA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiSMOgIE7hu5lpXCIsXHJcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaW5ob21lLnZuL2htX2NvbnRlbnQvdXBsb2Fkcy90aW4tdHVjLzQvdGhpZXQta2Utbm9pLXRoYXQtcGhvbmcta2hhY2gtYmFuZy1nby1oaWVuLWRhaS1kZXAvdGhpZXQta2Utbm9pLXRoYXQtcGhvbmcta2hhY2gtZG9uLWdpYW4tbWEtZGVwLTQuanBnXCIsXHJcbiAgICAgIHBhdGg6IFwiL25oYS1kYXQtYmFuL25oYS1kYXQtYmFuLXRhaS1oYS1ub2lcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiSOG7kyBDaMOtIE1pbmhcIixcclxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9ub2l0aGF0bWFuaGhlLnZuL21lZGlhLzE3NTMxL3NhbmctdHJvbmctYm9pLXBob25nLWtoYWNoLW5vaS10aGF0LWdvLXR1LW5oaWVuLW5vaS10aGF0LW1hbmgtaGUuanBnP3dpZHRoPTcwMCZoZWlnaHQ9NDIyLjQ0MTg2MDQ2NTExNjNcIixcclxuICAgICAgcGF0aDogXCIvbmhhLWRhdC1iYW4vbmhhLWRhdC1iYW4tdGFpLWhvLWNoaS1taW5oXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIsSQw6AgTuG6tW5nXCIsXHJcbiAgICAgIGltYWdlOiBcImh0dHBzOi8va2llbnRydWNyb21hbi5jb20udm4vd3AtY29udGVudC91cGxvYWRzL3Bob25nLWtoYWNoLWJhbmctZ28tY2FvLWNhcC0yLmpwZ1wiLFxyXG4gICAgICBwYXRoOiBcIi9uaGEtZGF0LWJhbi9uaGEtZGF0LWJhbi10YWktZGEtbmFuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJMw6JtIMSQ4buTbmdcIixcclxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9uaGFiZXBob2FuZ2dpYS52bi9jb250ZW50cy9wb3N0cy8yMzkwLmpwZ1wiLFxyXG4gICAgICBwYXRoOiBcIi9uaGEtZGF0LWJhbi9uaGEtZGF0LWJhbi10YWktbGFtLWRvbmdcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdC1sb2NhdGlvbnNcIj5cclxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRhdGFMb2NhdGlvbi5tYXAoKGltYWdlT2JqZWN0OiBMb2NhdGlvblByb3BzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtcImxvY2F0aW9uX1wiICsgU3RyaW5nKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvbmhhLWRhdC1iYW4vW3NsdWddJyBhcz17aW1hZ2VPYmplY3QucGF0aH0+PGE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG90LWxvY2F0aW9uc19faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImhvdC1sb2NhdGlvbnNfX2l0ZW1fX3RpdGxlXCI+e2ltYWdlT2JqZWN0LnRpdGxlfTwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdC1sb2NhdGlvbnNfX2l0ZW1fX2ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdC1sb2NhdGlvbnNfX2l0ZW1fX2ltYWdlX19iYWNrZ3JvdW5kXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtTdHJpbmcoaW1hZ2VPYmplY3QuaW1hZ2UpfSBhbHQ9e1wiVMOsbSBraeG6v20gbmjDoCDEkOG6pXQgdOG6oWkgXCIgKyBpbWFnZU9iamVjdC50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9TbGlkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG90TG9jYXRpb247XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gICAgSW5wdXRCYXNlLFxyXG4gICAgSWNvbkJ1dHRvbixcclxuICAgIEJ1dHRvbixcclxuICAgIEdyaWQsXHJcbiAgICBMaXN0LFxyXG4gICAgTGlzdEl0ZW0sXHJcbiAgICBMaXN0SXRlbUljb24sXHJcbiAgICBMaXN0SXRlbVRleHQsXHJcbiAgICBEaXZpZGVyLFxyXG4gICAgUG9wb3ZlcixcclxuICAgIFR5cG9ncmFwaHksXHJcbiAgICBIaWRkZW4sXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcbmltcG9ydCBBcnJvd0Ryb3BVcCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEcm9wVXAnO1xyXG5pbXBvcnQgQXJyb3dEcm9wRG93biBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEcm9wRG93bic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgRWNvSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Vjb1wiO1xyXG5pbXBvcnQgVmlld0xpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9WaWV3TGlzdFwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XHJcbmltcG9ydCBHYW1lcGFkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR2FtZXBhZCc7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgaW5wdXRiYXNlOiB7XHJcbiAgICAgICAgd2lkdGg6ICc1MDBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICBmbG9hdDogJ2xlZnQnLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IDEwLFxyXG4gICAgfSxcclxuICAgIHNlYXJjaEhvbWU6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzQwMHB4JyxcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgICAgICBvcGFjaXR5OiAnMScsXHJcbiAgICAgICAgLy8gcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiaHR0cHM6Ly9pMi53cC5jb20vZG9nb3F1b2NjdW9uZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDgvRFNDMDk1NDUuanBnP2ZpdD0zMDA4JTJDMjAwMCZzc2w9MVwiKSdcclxuICAgIH0sXHJcbiAgICBzZWFyY2hIb21lQm9keToge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogMTAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIHZpZXdTZWFyY2g6IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTk3NmQyJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgd2lkdGg6IDYwLFxyXG4gICAgfSxcclxuICAgIGljb25TZWFyY2g6IHtcclxuICAgICAgICBmb250U2l6ZTogMjUsXHJcbiAgICAgICAgbWFyZ2luVG9wOiA4LFxyXG4gICAgfSxcclxuICAgIGljb25CdXR0b246IHtcclxuICAgICAgICBwYWRkaW5nOiAnNHB4IDE2cHgnLFxyXG4gICAgICAgIG1hcmdpblRvcDogNCxcclxuICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9LFxyXG4gICAgbGlzdEl0ZW06IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTNmMmZkJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjOTBjYWY5JyxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGV4dEl0ZW06IHtcclxuICAgICAgICBjb2xvcjogJyMxOTc2ZDInLFxyXG4gICAgfSxcclxuICAgIHBvcG92ZXI6IHtcclxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnYXV0bycsIC8vIG5vbmVcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFNlYXJjaEhvbWVwYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlV2FyZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PSBcIkVudGVyXCIgfHwgZXZlbnQua2V5Q29kZSA9PSAxMykge1xyXG4gICAgICAgICAgICAvLyBvbkNsaWNrU2VhcmNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUJhY2tncm91bmQgPSBbXHJcbiAgICAgICAgJ2h0dHBzOi8vaTIud3AuY29tL2RvZ29xdW9jY3VvbmcuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA4L0RTQzA5NTQ1LmpwZz9maXQ9MzAwOCUyQzIwMDAmc3NsPTEnLFxyXG4gICAgICAgICdodHRwczovL3d3dy5ub2l0aGF0aG9hbm15LmNvbS52bi9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL25vaS10aGF0LWdvLXBob25nLWtoYWNoLWRlcC5qcGcnLFxyXG4gICAgICAgICdodHRwczovL3ZhdGxpZXV4YXlkdW5nLm9yZy52bi9VcGxvYWQvNDgvTmFtXzIwMTgvVGhhbmdfMTIvTmdheV8xOS92bHhkLm9yZ19uZ3V5ZW50YWMyLmpwZycsXHJcbiAgICAgICAgJ2h0dHBzOi8vd3d3Lm5vaXRoYXRob2FubXkuY29tLnZuL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvbm9pLXRoYXQtZ28tcGhvbmcta2hhY2gtZGVwLmpwZycsXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgaGnhu4duIMSR4bqhaScsIGxpbms6ICcvYmFkJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgY+G7lSDEkWnhu4NuJywgbGluazogJy9iYWQnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ0LDoG4gxINuIDQgZ2jhur8nLCBsaW5rOiAnL2JhZCcgfSxcclxuICAgICAgICB7IHRpdGxlOiAnQsOgbiDEg24gNiBnaOG6vycsIGxpbms6ICcvYmFkJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdCw6BuIMSDbiBoaeG7h24gxJHhuqFpJywgbGluazogJy9iYWQnIH0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgaGlzdG9yeSA9IFtcclxuICAgICAgICB7IHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunJywgbGluazogJy9oaXN0b3J5JyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdiw6BuIMSDbicsIGxpbms6ICcvaGlzdG9yeScgfSxcclxuICAgICAgICB7IHRpdGxlOiAndOG7pyBxdeG6p24gw6FvJywgbGluazogJy9oaXN0b3J5JyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICd04bunIGdpw6B5JywgbGluazogJy9oaXN0b3J5JyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICd04bunIGdo4bq/IG5ow6AgaMOgbmcnLCBsaW5rOiAnL2hpc3RvcnknIH0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgcmVuZGVyU3VnZ2VzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNTcwcHgnLCBwb2ludGVyRXZlbnRzOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPSdsZWZ0JyB2YXJpYW50PSdzdWJ0aXRsZTInXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzRweCA4cHgnLCBjdXJzb3I6ICdkZWZhdWx0JywgZGlzcGxheTogJ2lubGluZScsIGNvbG9yOiAnIzE5NzZkMicsIGZvbnRTaXplOiAxNCB9fT5cclxuICAgICAgICAgICAgICAgICAgICBU4buqIEtIw5NBIEhPVFxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gc3R5bGU9e3sgcGFkZGluZzogNCwgY3Vyc29yOiAnZGVmYXVsdCcsIGRpc3BsYXk6ICdpbmxpbmUnLCBmbG9hdDogJ3JpZ2h0JywgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucy5tYXAoKGl0ZW0sIGNvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT17Y291bnR9IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgcGFkZGluZzogJzRweCAxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVySGlzdG9yeSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNTcwcHgnLCBwb2ludGVyRXZlbnRzOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPSdsZWZ0JyB2YXJpYW50PSdzdWJ0aXRsZTInXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzRweCA4cHgnLCBjdXJzb3I6ICdkZWZhdWx0JywgZGlzcGxheTogJ2lubGluZScsIGNvbG9yOiAnIzE5NzZkMicsIGZvbnRTaXplOiAxNCB9fT5cclxuICAgICAgICAgICAgICAgICAgICBM4buKQ0ggU+G7rCBUw4xNIEtJ4buCTVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj0ncmlnaHQnIHZhcmlhbnQ9J3N1YnRpdGxlMidcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiA0LCBjb2xvcjogJ3JlZCcsIGN1cnNvcjogJ2RlZmF1bHQnLCBkaXNwbGF5OiAnaW5saW5lJywgZmxvYXQ6ICdyaWdodCcsIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgWMOzYVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAge2hpc3RvcnkubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkubWFwKChpdGVtLCBjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e2NvdW50fSBzdHlsZT17eyBmb250U2l6ZTogMTQsIHBhZGRpbmc6ICc0cHggMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtow7RuZyBjw7MgbOG7i2NoIHPhu60gdMOsbSBraeG6v21cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbSA+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVQb3BvdmVyT3BlbiA9IChldmVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT0nY2VudGVyJyBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSG9tZX0gPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hIb21lQm9keX0gb25DbGljaz17aGFuZGxlUG9wb3Zlck9wZW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0YmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydUw6xtIHPhuqNuIHBo4bqpbSBtb25nIG114buRbiAuLi4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ1TDrG0gc+G6o24gcGjhuqltIG1vbmcgbXXhu5FuIC4uLicgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17ZSA9PiBvbkNoYW5nZVdhcmRzKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudmlld1NlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uU2VhcmNofSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9JY29uQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAnYm90dG9tJywgaG9yaXpvbnRhbDogJ2xlZnQnIH19IC8vIEdoaW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ2xlZnQnIH19IC8vIFZpIHRyaSBoaWVuIHRoaVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uTW91c2VMZWF2ZT17aGFuZGxlUG9wb3ZlckNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlclN1Z2dlc3Rpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckhpc3RvcnkoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoSG9tZXBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwge0Z1bmN0aW9uQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbnRlcmZhY2UgVGl0bGVCbG9ja1Byb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHR5cGU6IFwiaDFcIiB8IFwiaDJcIiB8IFwiaDNcIjtcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgaHJlZj86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBUaXRsZUJsb2NrOiBGdW5jdGlvbkNvbXBvbmVudDxUaXRsZUJsb2NrUHJvcHM+ID0gKHByb3BzOiBUaXRsZUJsb2NrUHJvcHMpID0+IHtcclxuICBsZXQgZG9tVGl0bGUgPSAoPD48Lz4pO1xyXG4gIGlmIChwcm9wcy50eXBlID09PSBcImgxXCIpIHtcclxuICAgIGRvbVRpdGxlID0gKDxoMSBjbGFzc05hbWU9XCJ0aXRsZV9ibG9ja19fYmlnX3RpdGxlXCI+e3Byb3BzLnRpdGxlfTwvaDE+KTtcclxuICB9XHJcbiAgaWYgKHByb3BzLnR5cGUgPT09IFwiaDJcIikge1xyXG4gICAgZG9tVGl0bGUgPSAoPGgyIGNsYXNzTmFtZT1cInRpdGxlX2Jsb2NrX19iaWdfdGl0bGVcIj57cHJvcHMudGl0bGV9PC9oMj4pO1xyXG4gIH1cclxuICBpZiAocHJvcHMudHlwZSA9PT0gXCJoM1wiKSB7XHJcbiAgICBkb21UaXRsZSA9ICg8aDIgY2xhc3NOYW1lPVwidGl0bGVfYmxvY2tfX2JpZ190aXRsZVwiPntwcm9wcy50aXRsZX08L2gyPik7XHJcbiAgfVxyXG4gIGxldCBkb21CbG9ja1RpdGxlID0gKDw+PC8+KTtcclxuICBpZiAocHJvcHMucGF0aC5pbmRleE9mKCdodHRwczovLycpICE9PSAtMSkge1xyXG4gICAgZG9tQmxvY2tUaXRsZSA9IChcclxuICAgICAgPGEgaHJlZj17cHJvcHMucGF0aH0+XHJcbiAgICAgICAge2RvbVRpdGxlfVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAocHJvcHMucGF0aCA9PT0gJycpIHtcclxuICAgIGRvbUJsb2NrVGl0bGUgPSBkb21UaXRsZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9tQmxvY2tUaXRsZSA9IChcclxuICAgICAgPExpbmsgaHJlZj17cHJvcHMuaHJlZj9wcm9wcy5ocmVmOnByb3BzLnBhdGh9IGFzPXtTdHJpbmcocHJvcHMucGF0aCl9PlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAge2RvbVRpdGxlfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfSBpdGVtIHhzPXsxMn0gZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBjbGFzc05hbWU9XCJ0aXRsZV9ibG9ja1wiPlxyXG4gICAgICB7ZG9tQmxvY2tUaXRsZX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZV9ibG9ja19fYmlnX2Rlc2NyaXB0aW9uXCI+e3Byb3BzLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZUJsb2NrO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IFBob25lSXBob25lIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvbmVJcGhvbmVcIjtcclxuaW1wb3J0IEVtYWlsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCI7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtGdW5jdGlvbkNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIElGb290ZXJQcm9wcyB7XHJcblxyXG59XHJcbmNvbnN0IEZvb3RlclBhZ2U6IEZ1bmN0aW9uQ29tcG9uZW50PElGb290ZXJQcm9wcz4gPSAocHJvcHM6IElGb290ZXJQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfSBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiZm9vdGVyXCIgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfSBjbGFzc05hbWU9XCJmb290ZXJfYm9keVwiXHJcbiAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBtZD17NH0gc209ezEyfSBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbSBib3JkZXJfYm90dG9tX21vYmlsZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgQ8OUTkcgVFkgQ+G7lCBQSOG6pk4gTuG7mEkgVEjhuqRUIERPRE9cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX2ljb25cIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAzODQgNTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xNzIuMjY4IDUwMS42N0MyNi45NyAyOTEuMDMxIDAgMjY5LjQxMyAwIDE5MiAwIDg1Ljk2MSA4NS45NjEgMCAxOTIgMHMxOTIgODUuOTYxIDE5MiAxOTJjMCA3Ny40MTMtMjYuOTcgOTkuMDMxLTE3Mi4yNjggMzA5LjY3LTkuNTM1IDEzLjc3NC0yOS45MyAxMy43NzMtMzkuNDY0IDB6TTE5MiAyNzJjNDQuMTgzIDAgODAtMzUuODE3IDgwLTgwcy0zNS44MTctODAtODAtODAtODAgMzUuODE3LTgwIDgwIDM1LjgxNyA4MCA4MCA4MHpcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX3RleHRfdGl0bGVcIj7EkOG7i2EgY2jhu4k8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl90ZXh0X2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgU+G7kSAxMiBLaHXhuqV0IER1eSBUaeG6v24sIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWlcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uX2ljb25cIj5cclxuICAgICAgICAgICAgICAgIDxQaG9uZUlwaG9uZS8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl90ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl90ZXh0X3RpdGxlXCI+xJBp4buHbiB0aG/huqFpPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDAzNzcgNTM1IDcxN1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPEVtYWlsSWNvbi8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl90ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvbl90ZXh0X3RpdGxlXCI+RS1tYWlsPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25fdGV4dF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIG5vaXRoYXRkb2RvQGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9icmFuY2hcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdvdlwiIHNyYz1cImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9ib2Nvbmd0aHVvbmcucG5nXCJcclxuICAgICAgICAgICAgICAgICAgIGFsdD1cIsSQw6MgdGjDtG5nIGLDoW8gduG7m2kgQuG7mSBDw7RuZyBUaMawxqFuZ1wiLz5cclxuICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly93d3cuZG1jYS5jb20vUHJvdGVjdGlvbi9TdGF0dXMuYXNweD9JRD03ODE2NjA1ZC1mYmQyLTQ1ZjgtYTM5Ny1lZWFjNDI2NDJiNzUmcmVmdXJsPWh0dHBzOi8vbmhhZGF0bW9pLm5ldC8nfSB0YXJnZXQ9eydfYmxhbmsnfSByZWw9eydub2ZvbGxvdyd9ID5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L2RtY2EucG5nXCIgYWx0PVwiRE1DQVwiIGNsYXNzTmFtZT1cImRtY2FcIi8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezh9IHNtPXsxMn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXszfSB4cz17Nn0gY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgQ8O0bmcgdHlcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2Fib3V0LXVzJ30gYXM9eycvYWJvdXQtdXMnfT48YT5W4buBIELhuqV0IMSQ4buZbmcgU+G6o24gTeG7m2k8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL2hlbHAubmhhZGF0bW9pLm5ldC90dXllbi1kdW5nJ30gcmVsPXsnbm9mb2xsb3cnfT5UdXnhu4NuIGThu6VuZzwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly9oZWxwLm5oYWRhdG1vaS5uZXQvbGllbi1oZS90aG9uZy10aW4tbGllbi1oZSd9IHJlbD17J25vZm9sbG93J30+VGjDtG5nIHRpbiBsacOqbiBo4buHPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvc2l0ZW1hcCd9IGFzPXsnL3NpdGVtYXAnfT48YT5TaXRlbWFwPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXszfSB4cz17Nn0gY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgxJBp4buBdSBraG/huqNuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vaGVscC5uaGFkYXRtb2kubmV0L2RpZXUta2hvYW4vcXV5LWNoZS1ob2F0LWRvbmcnfSByZWw9eydub2ZvbGxvdyd9PlF1eSBjaOG6vyBob+G6oXQgxJHhu5luZzwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly9oZWxwLm5oYWRhdG1vaS5uZXQvZGlldS1raG9hbi9jaGluaC1zYWNoLWJhby1tYXQnfSByZWw9eydub2ZvbGxvdyd9PkNow61uaCBzw6FjaCBi4bqjbyBt4bqtdDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly9oZWxwLm5oYWRhdG1vaS5uZXQvZGlldS1raG9hbi9jaGluaC1zYWNoLWNvb2tpZSd9IHJlbD17J25vZm9sbG93J30+Q2jDrW5oIHPDoWNoIENvb2tpZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly9oZWxwLm5oYWRhdG1vaS5uZXQvZGlldS1raG9hbi9kaWV1LWtob2FuLXN1LWR1bmcnfSByZWw9eydub2ZvbGxvdyd9PsSQaeG7gXUga2hv4bqjbiBz4butIGThu6VuZzwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXszfSB4cz17Nn0gY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgVGjDtG5nIHRpblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL25oYWRhdG1vaS5uZXQvdGluLXR1Yy90aW4tdHVjJ30+VGluIHThu6ljIHRo4buLIHRyxrDhu51uZzwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly9uaGFkYXRtb2kubmV0L3Rpbi10dWMvYmxvZyd9PkLDoW8gY8OhbyAmIFBow6JuIHTDrWNoPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL25oYWRhdG1vaS5uZXQvdGluLXR1Yy9raWVuLXRodWMtbW9pLWdpb2knfT5LaeG6v24gdGjhu6ljIGNobyBtw7RpIGdp4bubaTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly9oZWxwLm5oYWRhdG1vaS5uZXQvaHVvbmctZGFuJ30gcmVsPXsnbm9mb2xsb3cnfT5IxrDhu5tuZyBk4bqrbiBz4butIGThu6VuZzwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXszfSB4cz17Nn0gY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgTeG6oW5nIHjDoyBo4buZaVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL3d3dy5mYWNlYm9vay5jb20vbmhhZGF0bW9pLm5ldC8nfSByZWw9eydub2ZvbGxvdyd9IHRhcmdldD17J19ibGFuayd9PkZhY2Vib29rPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19pdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDQ3ZsT0Q3dlRQSmVZUlk4SXJJTmd1USd9IHJlbD17J25vZm9sbG93J30gdGFyZ2V0PXsnX2JsYW5rJ30+WW91dHViZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9faXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly90d2l0dGVyLmNvbS9uaGFkYXRtb2knfSByZWw9eydub2ZvbGxvdyd9IHRhcmdldD17J19ibGFuayd9PlR3aXR0ZXI8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2JvZHlfX2l0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9uaGFkYXRtb2kvJ30gcmVsPXsnbm9mb2xsb3cnfSB0YXJnZXQ9eydfYmxhbmsnfT5MaW5rZWRJbjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19hcHBzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19hcHBzX3RpdGxlXCI+UGjGsMahbmcgdGjhu6ljIHRoYW5oIHRvw6FuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19hcHBzX3BheW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvdmlzYS5wbmdcIiBhbHQ9XCJWaXNhXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9tYXN0ZXJjYXJkLnBuZ1wiIGFsdD1cIk1hc3RlcmNhcmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L2F0bS5wbmdcIiBhbHQ9XCJBVE1cIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfSBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9fYXBwc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfYm9keV9fYXBwc190aXRsZVwiPuG7qG5nIGThu6VuZyBkaSDEkeG7mW5nPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9ib2R5X19hcHBzX3BheW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJub19ib3JkZXJcIiBzcmM9XCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvYXBwbGUtc3RvcmUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBcHBsZSBTdG9yZVwiLz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJub19ib3JkZXJcIiBzcmM9XCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvZ29vZ2xlLXBsYXkuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJHb29nbGUgUGxheVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJQYWdlXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3QnO1xyXG5pbXBvcnQgR3JpZExpc3RUaWxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZSc7XHJcbmltcG9ydCBHcmlkTGlzdFRpbGVCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlQmFyJztcclxuaW1wb3J0IExpc3RTdWJoZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlcic7XHJcbmltcG9ydCBJbmZvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mbyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzJztcclxuaW1wb3J0IHsgSTE4biB9IGZyb20gJ3JlYWN0LXJlZHV4LWkxOG4nO1xyXG5pbXBvcnQge1xyXG4gIEljb25CdXR0b24sXHJcbiAgSWNvbixcclxuICBUb29sdGlwLFxyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIEdyaWQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBBcHBCYXIsXHJcbiAgVG9vbGJhcixcclxuICBIaWRkZW4sXHJcbiAgUG9wb3ZlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcbmltcG9ydCBTdGFyQm9yZGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgeyB0aXRsZXMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvaW5kZXgnO1xyXG5pbXBvcnQgR2FtZXBhZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dhbWVwYWQnO1xyXG5pbXBvcnQgTW9kYWxMb2dpbiBmcm9tICcuLi9Mb2dpbi9Nb2RhbCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIjtcclxuaW1wb3J0IEdyb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgUG9wcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xyXG5pbXBvcnQgTWVudUxpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCI7XHJcbmltcG9ydCBIdHRwc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0h0dHBzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3RQb3BvdmVyOiB7XHJcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgbWVudXM6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBwYWRkaW5nOiA4LFxyXG4gICAgLy8gZm9udFdlaWdodDogNTAwLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAvLyBmb250RmFtaWx5OiAnU2Fucy1zZXJpZicsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAvLyBjb2xvcjogJyMzM2VhZmYnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICB9XHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlM2YyZmQnLFxyXG4gICAgcG9pbnRlckV2ZW50czogJ2F1dG8nLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTBjYWY5JyxcclxuICAgIH1cclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lJyxcclxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgICBwYWRkaW5nOiAnMCAxMnB4JyxcclxuICAgIC8vIGJvcmRlckxlZnQ6ICcycHggc29saWQgd2hpdGUnLFxyXG4gIH0sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICBoZWlnaHQ6IDQwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMxOTc2ZDInXHJcbiAgfSxcclxuICBkaXZpZGVyOiB7XHJcbiAgICBoZWlnaHQ6IDI4LFxyXG4gICAgbWFyZ2luOiA0LFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lJyxcclxuICB9LFxyXG4gIHRleHRJdGVtOiB7XHJcbiAgICBjb2xvcjogJyMxOTc2ZDInLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAyMCxcclxuICB9LFxyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgekluZGV4OiA5OTk5OTk4ODg4ODg4ODg4OCxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKVxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IG1lbnVzID0gW1xyXG4gIHsgbmFtZTogJ0dpxrDhu51uZyBuZ+G7pycgfSwgeyBuYW1lOiAnVOG7pyBxdcOgbiDDoW8nIH0sXHJcbiAgeyBuYW1lOiAnQsOgbiB0csOgIHBow7JuZyBraMOhY2gnIH0sIHsgbmFtZTogJ0vhu4cgdOG7pyB0aXZpJyB9LFxyXG4gIHsgbmFtZTogJ0LDoG4gxINuJyB9LCB7IG5hbWU6ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgeyBuYW1lOiAnVOG7pyBnacOgeScgfSwgeyBuYW1lOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG5dXHJcbmNvbnN0IEFjdGlvbnMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2NvdW50TWVudSwgc2V0Q291bnRNZW51XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGFuY2hvclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgLy8gcmV0dXJuIGZvY3VzIHRvIHRoZSBidXR0b24gd2hlbiB3ZSB0cmFuc2l0aW9uZWQgZnJvbSAhb3BlbiAtPiBvcGVuXHJcbiAgY29uc3QgcHJldk9wZW4gPSBSZWFjdC51c2VSZWYob3Blbk1lbnUpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJldk9wZW4uY3VycmVudCA9PT0gdHJ1ZSAmJiBvcGVuTWVudSA9PT0gZmFsc2UpIHtcclxuICAgICAgYW5jaG9yUmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIHByZXZPcGVuLmN1cnJlbnQgPSBvcGVuTWVudTtcclxuICB9LCBbb3Blbk1lbnVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfSBhbGlnbkl0ZW1zPSdjZW50ZXInIGp1c3RpZnk9J2NlbnRlcicgZGlyZWN0aW9uPSdyb3cnID5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9J2luaGVyaXQnXHJcbiAgICAgICAgICBhcmlhLW93bnM9e29wZW5NZW51ID8gJ21vdXNlLW92ZXItcG9wb3ZlcicgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgZm9udFdlaWdodDogNTAwLCBwYWRkaW5nOiAnMCAyMHB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxHYW1lcGFkSWNvbiBzdHlsZT17eyBwYWRkaW5nOiAnMCA0cHgnIH19IC8+IE7hu5lpIFRo4bqldCBEb2RvXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezh9PlxyXG4gICAgICAgIHttZW51cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2NsYXNzZXMubWVudXN9PlxyXG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgPE1vZGFsTG9naW4gLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbnM7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSBcIi4uLy4uL21vZHVsZXMvdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IGdvb2dsZVNlYXJjaENvbnNvbGUsIGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgTG9nbyA9IHJlcXVpcmUoXCIuL2xvZ28ucG5nXCIpO1xyXG5cclxuaW50ZXJmYWNlIExheW91dFBhZ2VQcm9wcyB7XHJcbiAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcsXHJcbiAgaW1hZ2U/OiBzdHJpbmcsXHJcbiAgY2Fub25pY2FsOiBzdHJpbmcsXHJcbiAgcGF0aDogc3RyaW5nLFxyXG4gIGNoaWxkcmVuPzogYW55LFxyXG4gIHVzZXI/OiB7XHJcbiAgICBlbWFpbDogc3RyaW5nLFxyXG4gICAgX2lkOiBzdHJpbmcsXHJcbiAgICBmaXJzdF9uYW1lOiBzdHJpbmcsXHJcbiAgICBsYXN0X25hbWU6IHN0cmluZyxcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBhdmF0YXI6IHN0cmluZ1xyXG4gIH0sXHJcbiAgdXBkYXRlTW9kYWw/OiAoZGF0YTogYm9vbGVhbikgPT4gdm9pZDtcclxuICBzdGF0dXNNb2RhbD86IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgTGF5b3V0UGFnZTogRnVuY3Rpb25Db21wb25lbnQ8TGF5b3V0UGFnZVByb3BzPiA9IChwcm9wczogTGF5b3V0UGFnZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3N0YXR1c01vZGFsLCBzZXRNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdXBkYXRlTW9kYWwgPSAoZGF0YTogYm9vbGVhbikgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBwcm9wcy51cGRhdGVNb2RhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBwcm9wcy51cGRhdGVNb2RhbChkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE1vZGFsKGRhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgW2RhdGFDb21wYXJlTG9jYWwsIHNldERhdGFDb21wYXJlTG9jYWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VDb21wYXJlS2V5KSAmJiAhVmFsaWRhdG9yLmlzQmxhbmsobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlQ29tcGFyZUtleSkpKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0RGF0YUNvbXBhcmVMb2NhbChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUNvbXBhcmVLZXkpIGFzIHN0cmluZykpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICBsZXQgc2NoZW1hT2JqZWN0ID0gJ3tcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsIFwiQHR5cGVcIjogXCJMb2NhbEJ1c2luZXNzXCIsIFwibmFtZVwiOiBcIkLhuqV0IMSQ4buZbmcgU+G6o24gTuG7mWkgdGjhuqV0IERvZG9cIiwgXCJpbWFnZVwiOiBcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8xMjMwMTIwMTEzODg3NTMxMDA4L0JQSDc1YlcwXzQwMHg0MDAuanBnXCIsIFwiYWRkaXRpb25hbFR5cGVcIjpbXCJodHRwczovL3ZpLndpa2lwZWRpYS5vcmcvd2lraS9CJUUxJUJBJUE1dF8lQzQlOTElRTElQkIlOTluZ19zJUUxJUJBJUEzblwiLFwiaHR0cHM6Ly92aS53aWtpcGVkaWEub3JnL3dpa2kvTSVDMyVCNGlfZ2klRTElQkIlOUJpX2IlRTElQkElQTV0XyVDNCU5MSVFMSVCQiU5OW5nX3MlRTElQkElQTNuXCIsXCJodHRwczovL3ZpLndpa2lwZWRpYS5vcmcvd2lraS9OZyVDNiVCMCVFMSVCQiU5RGlfbSVDMyVCNGlfZ2klRTElQkIlOUJpXCJdLCBcInBheW1lbnRBY2NlcHRlZFwiOlwiQ2FzaCwgVmlzYSwgTWFzdGVyY2FyZCwgQW1lcmljYW4gRXhwcmVzcywgRGViaXQsIFBheVBhbCwgQXBwbGUgUGF5XCIsIFwibWFpbkVudGl0eU9mUGFnZVwiOlwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzP2NpZD02MjU1MDU0OTM4OTY5NjIwNDc1XCIsIFwiaGFzbWFwXCI6XCJodHRwczovL3NlYXJjaC5nb29nbGUuY29tL2xvY2FsL3dyaXRlcmV2aWV3P3BsYWNlaWQ9Q2hJSi1VSTZNaDVUTkRFUi16X1doMU5yemxZXCIsIFwiZGVzY3JpcHRpb25cIjpcIk7hu5lpIHRo4bqldCBEb2RvIMSRw7NuIMSR4bqndSB4dSBoxrDhu5tuZyBi4bqldCDEkeG7mW5nIHPhuqNuIDQuMCB04bqhaSBWaeG7h3QgTmFtLCB0w61jaCBo4bujcCB0csOtIHR14buHIG5ow6JuIHThuqFvIMSR4buDIHjhu60gbMO9IGPDoWMgZOG7ryBsaeG7h3UsIHBow6JuIHTDrWNoIG5odSBj4bqndSBj4bunYSBj4bqjIG5nxrDhu51pIG11YSBs4bqrbiBuZ8aw4budaSBiw6FuXCIsIFwiQGlkXCI6IFwiaHR0cHM6Ly9uaGFkYXRtb2kubmV0L1wiLCBcInVybFwiOiBcImh0dHBzOi8vbmhhZGF0bW9pLm5ldC9cIiwgXCJ0ZWxlcGhvbmVcIjogXCIwMzc3IDUzNSA3MTdcIiwgXCJwcmljZVJhbmdlXCI6IFwiMTAwMCAkXCIsIFwiYWRkcmVzc1wiOiB7IFwiQHR5cGVcIjogXCJQb3N0YWxBZGRyZXNzXCIsIFwic3RyZWV0QWRkcmVzc1wiOiBcIlPhu5EgMzQ4IFThu5EgSOG7r3UsIHBoxrDhu51uZyBMYSBLaMOqLCBxdeG6rW4gSMOgIMSQw7RuZ1wiLCBcImFkZHJlc3NMb2NhbGl0eVwiOiBcIkjDoCBO4buZaVwiLCBcInBvc3RhbENvZGVcIjogXCIxMDAwMDBcIiwgXCJhZGRyZXNzQ291bnRyeVwiOiBcIlZOXCJ9LCBcImdlb1wiOiB7IFwiQHR5cGVcIjogXCJHZW9Db29yZGluYXRlc1wiLCBcImxhdGl0dWRlXCI6IDIwLjk3MDk0OTYsIFwibG9uZ2l0dWRlXCI6IDEwNS43NTMxNjE3IH0sIFwib3BlbmluZ0hvdXJzU3BlY2lmaWNhdGlvblwiOiB7IFwiQHR5cGVcIjogXCJPcGVuaW5nSG91cnNTcGVjaWZpY2F0aW9uXCIsXCJkYXlPZldlZWtcIjogWyBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCIsIFwiU3VuZGF5XCJdLCBcIm9wZW5zXCI6IFwiMDA6MDBcIiwgXCJjbG9zZXNcIjogXCIyMzo1OVwiIH0sIFwic2FtZUFzXCI6IFtcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNDdmxPRDd2VFBKZVlSWThJcklOZ3VRXCIsXCJodHRwczovL2Jkc25oYWRhdG1vaS5ibG9nc3BvdC5jb21cIiwgXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbmhhZGF0bW9pLm5ldFwiLCBcImh0dHBzOi8vYmRzbmhhZGF0bW9pLmJsb2dzcG90LmNvbVwiLCBcImh0dHBzOi8vdmkuZ3JhdmF0YXIuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vYmRzbmhhZGF0bW9pLnR1bWJsci5jb21cIiwgXCJodHRwczovL2Jkc25oYWRhdG1vaS53ZWVibHkuY29tXCIsIFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5yZWRkaXQuY29tL3VzZXIvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuZGlpZ28uY29tL3Byb2ZpbGUvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuYXJ0ZmlyZS5jb20vZXh0L3Blb3BsZS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5zbWFzaHdvcmRzLmNvbS9wcm9maWxlL3ZpZXcvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cDovL3BsYXkuZm0vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cubGFzdC5mbS91c2VyL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LnN0cmF2YS5jb20vYXRobGV0ZXMvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LnRyaXBhZHZpc29yLmNvbS52bi9Qcm9maWxlL2Jkc25oYWRhdG1vaVwiLCBcImh0dHA6Ly9iaXQubHkvMnVhWlBMbVwiLCBcImh0dHBzOi8vZ2V0cG9ja2V0LmNvbS9AYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cucGludGVyZXN0LmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuZmxpY2tyLmNvbS9wZW9wbGUvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9hYm91dC5tZS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5pbnN0YXBhcGVyLmNvbS9wL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LmJlaGFuY2UubmV0L2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vbXlzcGFjZS5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuZ29vZHJlYWRzLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL2RyaWJiYmxlLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5kZXZpYW50YXJ0LmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5wbHVyay5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cDovL3d3dy5mb2xrZC5jb20vdXNlci9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy50ZWQuY29tL3Byb2ZpbGVzLzE5MDI1OTc3XCIsIFwiaHR0cHM6Ly9raW5qYS5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9lbGxvLmNvL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vY291Yi5jb20vYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9taXguY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHA6Ly93d3cuYXV0aG9yc3RyZWFtLmNvbS9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3NvdW5kY2xvdWQuY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vbWVkaXVtLmNvbS9AYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly9jb2RlcGVuLmlvL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3LmV2ZXJub3RlLmNvbS9wdWIvbmRtaDI2OS90aW50dWNcIiwgXCJodHRwczovL2Rpc3F1cy5jb20vYnkvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cuc2Nvb3AuaXQvdS9iLXQtbmctcy1uLW5oYS10LW0taVwiLCBcImh0dHBzOi8vd3d3LnZpbmdsZS5uZXQvYmRzbmhhZGF0bW9pXCIsIFwiaHR0cHM6Ly93d3cucXVvcmEuY29tL3Byb2ZpbGUvQmF0LURvbmctU2FuLU5oYS1EYXQtTW9pXCIsIFwiaHR0cHM6Ly9iZHNuaGFkYXRtb2kubGl2ZWpvdXJuYWwuY29tXCIsIFwiaHR0cHM6Ly9hbmdlbC5jby9iZHNuaGFkYXRtb2lcIiwgXCJodHRwczovL3d3dy5wcm9kdWN0aHVudC5jb20vQGJkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vc3BlYWtlcmRlY2suY29tL2Jkc25oYWRhdG1vaVwiLCBcImh0dHBzOi8vd3d3Lndpa2lob3cuY29tL1VzZXI6QmRzbmhhZGF0bW9pXCIsIFwiaHR0cDovL2Jkc25oYWRhdG1vaS5icmFuZHlvdXJzZWxmLmNvbVwiXX0nO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3Byb3BzLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17cHJvcHMuY2Fub25pY2FsfSAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXtMb2dvfSAvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNDAwaSw1MDAsNzAwLDkwMCZkaXNwbGF5PXN3YXAmc3Vic2V0PXZpZXRuYW1lc2VcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiIGNvbnRlbnQ9e2dvb2dsZVNlYXJjaENvbnNvbGV9IC8+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIVZhbGlkYXRvci5pc0JsYW5rKHByb3BzLmRlc2NyaXB0aW9uKSAmJlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cHJvcHMudGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIHByb3BlcnR5PVwiZmI6YXBwX2lkXCIgY29udGVudD1cIjkzNzIzNDM2NjMzNTUwNFwiIC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJmYjphZG1pbnNcIiBjb250ZW50PVwiMTAwMDA0MjQ0NDc0MDEzXCIgLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJO4buZaSB0aOG6pXQgRG9kb1wiIC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtwcm9wcy5jYW5vbmljYWx9IC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLmltYWdlfSAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQG5oYWRhdG1vaVwiIC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAbmhhZGF0bW9pXCIgLz5cclxuICAgICAgICA8bWV0YSBkYXRhLW4taGVhZD1cInRydWVcIiBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3Byb3BzLnRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIGRhdGEtbi1oZWFkPVwidHJ1ZVwiIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgZGF0YS1uLWhlYWQ9XCJ0cnVlXCIgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtwcm9wcy5pbWFnZX0gLz5cclxuICAgICAgICA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzY2hlbWFPYmplY3QgfX0gPlxyXG4gICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0UGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjBBQUFBZENBWUFBQUJXazJjUEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFEUlNVUkJWRWhMN1pNeENzSkFFRVc5aHFmVXlsUGtCSG9COVFLQ2xwWjI0Z20wVVlTQXBkWEtEMWt5N254alBoaE1zUTlldFZrZW01MGRoVCtRbzcwaVJZdnROUlM3bTFORmlvNW5SNnBLamxKWUVLb01QN284bEM0NFdWM3ExZTY0S0hzV2kvMjlYbjBQMitEbTlIRDdJTU5GN1NtczAzVVRRTmdHMlIrSU1qcEhvUTFIMm9LUUlVVWhJcEZ6K2FUZldCbFNsQTFOcnlkTjd6QzlZN1lITWx5MG10N0UrWWZwdGVGcWVzbGVob3Uyd1U3RWh1c2JValFOUmxWeWxNS0NVR1g0VWZZa29Jb1UvUlU1MmlNaHZBQ1lmUWtnV3I1ZHJBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgRGlhbG9nLFxyXG4gIEljb25CdXR0b24sXHJcbiAgR3JpZCxcclxuICBQYXBlcixcclxuICBUYWJzLFxyXG4gIFRhYixcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCB7IGdvb2dsZUxvZ2luIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBmYWNlYm9va0xvZ2luIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyB6YWxvTG9naW4gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBJbWFnZUxvZ2luIGZyb20gJy4uLy4uL3B1YmxpYy9JbWFnZS9sb2dpbi5wbmcnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGxvbmdJbjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogNjAwLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIC8vIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9sb2dpbi1iYWNrZ3JvdW5kLnN2Z1wiKScsXHJcbiAgICAvLyBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSBjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZzogJzAgMjBweCcsXHJcbiAgfSxcclxuICBsb2dJbkNsb3NlOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcwcHgnLFxyXG4gICAgcmlnaHQ6ICcwcHgnLFxyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICB3aWR0aDogJzQwcHghaW1wb3J0YW50JyxcclxuICAgIGhlaWdodDogJzQwcHghaW1wb3J0YW50JyxcclxuICB9LFxyXG4gIG1vZGFsOiB7XHJcbiAgICAvLyBtYXhXaWR0aDogJycsXHJcbiAgICBoZWlnaHQ6IDYwMCxcclxuICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZmxvYXQ6ICdsZWZ0JyxcclxuICAgIG1hcmdpbjogJzcwcHggMCA4cHggMCcsXHJcbiAgICAvLyBmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XHJcbiAgICBmb250U2l6ZTogJzMwcHgnLFxyXG4gICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgY29sb3I6ICcjMTk3NmQyJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIGZsb2F0OiAnbGVmdCcsXHJcbiAgICAvLyBmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XHJcbiAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgY29sb3I6ICcjMDAwMDAwOGEnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuXHJcbmNvbnN0IHRhYnMgPSBbXHJcbiAgeyB2YWx1ZTogMSwgbGFiZWw6ICfEkMSDbmcgTmjhuq1wJyB9LFxyXG4gIHsgdmFsdWU6IDIsIGxhYmVsOiAnVOG6oW8gVMOgaSBLaG/huqNuJyB9LFxyXG5dO1xyXG5cclxuXHJcbmNvbnN0IExvZ2luTW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbdmFsdWVUYWIsIHNldFZhbHVlVGFiXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG5cclxuICBjb25zdCByZW5kZXJHb29nbGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luX19tb2RhbF9fYmxvY2tfX2dvb2dsZVwiIGhyZWY9e2dvb2dsZUxvZ2lufT5cclxuICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTMzLjUgNTQ0LjNcIj5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTUzMy41LDI3OC40YzAtMTguNS0xLjUtMzcuMS00LjctNTUuM0gyNzIuMXYxMDQuOGgxNDdjLTYuMSwzMy44LTI1LjcsNjMuNy01NC40LDgyLjd2NjhoODcuNyBDNTAzLjksNDMxLjIsNTMzLjUsMzYxLjIsNTMzLjUsMjc4LjR6XCIgLz5cclxuICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QxXCIgZD1cIk0yNzIuMSw1NDQuM2M3My40LDAsMTM1LjMtMjQuMSwxODAuNC02NS43bC04Ny43LTY4Yy0yNC40LDE2LjYtNTUuOSwyNi05Mi42LDI2Yy03MSwwLTEzMS4yLTQ3LjktMTUyLjgtMTEyLjMgSDI4Ljl2NzAuMUM3NS4xLDQ4Ni4zLDE2OS4yLDU0NC4zLDI3Mi4xLDU0NC4zelwiIC8+XHJcbiAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MlwiIGQ9XCJNMTE5LjMsMzI0LjNjLTExLjQtMzMuOC0xMS40LTcwLjQsMC0xMDQuMlYxNTBIMjguOWMtMzguNiw3Ni45LTM4LjYsMTY3LjUsMCwyNDQuNEwxMTkuMywzMjQuM3pcIiAvPlxyXG4gICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDNcIiBkPVwiTTI3Mi4xLDEwNy43YzM4LjgtMC42LDc2LjMsMTQsMTA0LjQsNDAuOGwwLDBsNzcuNy03Ny43QzQwNSwyNC42LDMzOS43LTAuOCwyNzIuMSwwQzE2OS4yLDAsNzUuMSw1OCwyOC45LDE1MFx0bDkwLjQsNzAuMUMxNDAuOCwxNTUuNiwyMDEuMSwxMDcuNywyNzIuMSwxMDcuN3pcIiAvPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImdvb2dsZVwiPsSQxIJORyBOSOG6rFAgQuG6sE5HIEdPT0dMRTwvcD5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyWmFsbyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibG9naW5fX21vZGFsX19ibG9ja19femFsb1wiIGhyZWY9e3phbG9Mb2dpbn0+XHJcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDQ2MC4xIDQzNi42XCI+XHJcbiAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTgyLjYgMzgwLjljLTEuOC0uOC0zLjEtMS43LTEtMy41IDEuMy0xIDIuNy0xLjkgNC4xLTIuOCAxMy4xLTguNSAyNS40LTE3LjggMzMuNS0zMS41IDYuOC0xMS40IDUuNy0xOC4xLTIuOC0yNi41QzY5IDI2OS4yIDQ4LjIgMjEyLjUgNTguNiAxNDUuNSA2NC41IDEwNy43IDgxLjggNzUgMTA3IDQ2LjZjMTUuMi0xNy4yIDMzLjMtMzEuMSA1My4xLTQyLjcgMS4yLS43IDIuOS0uOSAzLjEtMi43LS40LTEtMS4xLS43LTEuNy0uNy0zMy43IDAtNjcuNC0uNy0xMDEgLjJDMjguMyAxLjcuNSAyNi42LjYgNjIuM2MuMiAxMDQuMyAwIDIwOC42IDAgMzEzIDAgMzIuNCAyNC43IDU5LjUgNTcgNjAuNyAyNy4zIDEuMSA1NC42LjIgODIgLjEgMiAuMSA0IC4yIDYgLjJIMjkwYzM2IDAgNzIgLjIgMTA4IDAgMzMuNCAwIDYwLjUtMjcgNjAuNS02MC4zdi0uNi01OC41YzAtMS40LjUtMi45LS40LTQuNC0xLjguMS0yLjUgMS42LTMuNSAyLjYtMTkuNCAxOS41LTQyLjMgMzUuMi02Ny40IDQ2LjMtNjEuNSAyNy4xLTEyNC4xIDI5LTE4Ny42IDcuMi01LjUtMi0xMS41LTIuMi0xNy4yLS44LTguNCAyLjEtMTYuNyA0LjYtMjUgNy4xLTI0LjQgNy42LTQ5LjMgMTEtNzQuOCA2em03Mi41LTE2OC41YzEuNy0yLjIgMi42LTMuNSAzLjYtNC44IDEzLjEtMTYuNiAyNi4yLTMzLjIgMzkuMy00OS45IDMuOC00LjggNy42LTkuNyAxMC0xNS41IDIuOC02LjYtLjItMTIuOC03LTE1LjItMy0uOS02LjItMS4zLTkuNC0xLjEtMTcuOC0uMS0zNS43LS4xLTUzLjUgMC0yLjUgMC01IC4zLTcuNC45LTUuNiAxLjQtOSA3LjEtNy42IDEyLjggMSAzLjggNCA2LjggNy44IDcuNyAyLjQuNiA0LjkuOSA3LjQuOCAxMC44LjEgMjEuNyAwIDMyLjUuMSAxLjIgMCAyLjctLjggMy42IDEtLjkgMS4yLTEuOCAyLjQtMi43IDMuNS0xNS41IDE5LjYtMzAuOSAzOS4zLTQ2LjQgNTguOS0zLjggNC45LTUuOCAxMC4zLTMgMTYuM3M4LjUgNy4xIDE0LjMgNy41YzQuNi4zIDkuMy4xIDE0IC4xIDE2LjIgMCAzMi4zLjEgNDguNS0uMSA4LjYtLjEgMTMuMi01LjMgMTIuMy0xMy4zLS43LTYuMy01LTkuNi0xMy05LjctMTQuMS0uMS0yOC4yIDAtNDMuMyAwem0xMTYtNTIuNmMtMTIuNS0xMC45LTI2LjMtMTEuNi0zOS44LTMuNi0xNi40IDkuNi0yMi40IDI1LjMtMjAuNCA0My41IDEuOSAxNyA5LjMgMzAuOSAyNy4xIDM2LjYgMTEuMSAzLjYgMjEuNCAyLjMgMzAuNS01LjEgMi40LTEuOSAzLjEtMS41IDQuOC42IDMuMyA0LjIgOSA1LjggMTQgMy45IDUtMS41IDguMy02LjEgOC4zLTExLjMuMS0yMCAuMi00MCAwLTYwLS4xLTgtNy42LTEzLjEtMTUuNC0xMS41LTQuMy45LTYuNyAzLjgtOS4xIDYuOXptNjkuMyAzNy4xYy0uNCAyNSAyMC4zIDQzLjkgNDYuMyA0MS4zIDIzLjktMi40IDM5LjQtMjAuMyAzOC42LTQ1LjYtLjgtMjUtMTkuNC00Mi4xLTQ0LjktNDEuMy0yMy45LjctNDAuOCAxOS45LTQwIDQ1LjZ6bS04LjgtMTkuOWMwLTE1LjcuMS0zMS4zIDAtNDcgMC04LTUuMS0xMy0xMi43LTEyLjktNy40LjEtMTIuMyA1LjEtMTIuNCAxMi44LS4xIDQuNyAwIDkuMyAwIDE0djc5LjVjMCA2LjIgMy44IDExLjYgOC44IDEyLjkgNi45IDEuOSAxNC0yLjIgMTUuOC05LjEuMy0xLjIuNS0yLjQuNC0zLjcuMi0xNS41LjEtMzEgLjEtNDYuNXpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QxXCIgZD1cIk0xMzkuNSA0MzYuMmMtMjcuMyAwLTU0LjcuOS04Mi0uMS0zMi4zLTEuMy01Ny0yOC40LTU3LTYwLjcgMC0xMDQuMy4yLTIwOC42IDAtMzEzQy41IDI2LjcgMjguNCAxLjggNjAuNS45YzMzLjYtLjkgNjcuMy0uMiAxMDEtLjIuNiAwIDEuNC0uMyAxLjcuNy0uMiAxLjgtMiAyLTMuMSAyLjctMTkuOCAxMS42LTM3LjkgMjUuNS01My4xIDQyLjctMjUuMSAyOC40LTQyLjUgNjEtNDguNCA5OC45LTEwLjQgNjYuOSAxMC41IDEyMy43IDU3LjggMTcxLjEgOC40IDguNSA5LjUgMTUuMSAyLjggMjYuNS04LjEgMTMuNy0yMC40IDIzLTMzLjUgMzEuNS0xLjQuOC0yLjggMS44LTQuMiAyLjctMi4xIDEuOC0uOCAyLjcgMSAzLjUuNC45LjkgMS43IDEuNSAyLjUgMTEuNSAxMC4yIDIyLjQgMjEuMSAzMy43IDMxLjUgNS4zIDQuOSAxMC42IDEwIDE1LjcgMTUuMSAyLjEgMS45IDUuNiAyLjUgNi4xIDYuMXpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QyXCIgZD1cIk0xMzkuNSA0MzYuMmMtLjUtMy41LTQtNC4xLTYuMS02LjItNS4xLTUuMi0xMC40LTEwLjItMTUuNy0xNS4xLTExLjMtMTAuNC0yMi4yLTIxLjMtMzMuNy0zMS41LS42LS44LTEuMS0xLjYtMS41LTIuNSAyNS41IDUgNTAuNCAxLjYgNzQuOS01LjkgOC4zLTIuNSAxNi42LTUgMjUtNy4xIDUuNy0xLjUgMTEuNy0xLjIgMTcuMi44IDYzLjQgMjEuOCAxMjYgMTkuOCAxODcuNi03LjIgMjUuMS0xMS4xIDQ4LTI2LjcgNjcuNC00Ni4yIDEtMSAxLjctMi41IDMuNS0yLjYuOSAxLjQuNCAyLjkuNCA0LjR2NTguNWMuMiAzMy40LTI2LjYgNjAuNi02MCA2MC45aC0uNWMtMzYgLjItNzIgMC0xMDggMEgxNDUuNWMtMi0uMi00LS4zLTYtLjN6XCIgLz5cclxuICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MVwiIGQ9XCJNMTU1LjEgMjEyLjRjMTUuMSAwIDI5LjMtLjEgNDMuNCAwIDcuOS4xIDEyLjIgMy40IDEzIDkuNy45IDcuOS0zLjcgMTMuMi0xMi4zIDEzLjMtMTYuMi4yLTMyLjMuMS00OC41LjEtNC43IDAtOS4zLjItMTQtLjEtNS44LS4zLTExLjUtMS41LTE0LjMtNy41cy0uOC0xMS40IDMtMTYuM2MxNS40LTE5LjYgMzAuOS0zOS4zIDQ2LjQtNTguOS45LTEuMiAxLjgtMi40IDIuNy0zLjUtMS0xLjctMi40LS45LTMuNi0xLTEwLjgtLjEtMjEuNyAwLTMyLjUtLjEtMi41IDAtNS0uMy03LjQtLjgtNS43LTEuMy05LjItNy03LjktMTIuNi45LTMuOCAzLjktNi45IDcuNy03LjggMi40LS42IDQuOS0uOSA3LjQtLjkgMTcuOC0uMSAzNS43LS4xIDUzLjUgMCAzLjItLjEgNi4zLjMgOS40IDEuMSA2LjggMi4zIDkuNyA4LjYgNyAxNS4yLTIuNCA1LjctNi4yIDEwLjYtMTAgMTUuNS0xMy4xIDE2LjctMjYuMiAzMy4zLTM5LjMgNDkuOC0xLjEgMS4zLTIuMSAyLjYtMy43IDQuOHpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QxXCIgZD1cIk0yNzEuMSAxNTkuOGMyLjQtMy4xIDQuOS02IDktNi44IDcuOS0xLjYgMTUuMyAzLjUgMTUuNCAxMS41LjMgMjAgLjIgNDAgMCA2MCAwIDUuMi0zLjQgOS44LTguMyAxMS4zLTUgMS45LTEwLjcuNC0xNC0zLjktMS43LTIuMS0yLjQtMi41LTQuOC0uNi05LjEgNy40LTE5LjQgOC43LTMwLjUgNS4xLTE3LjgtNS44LTI1LjEtMTkuNy0yNy4xLTM2LjYtMi4xLTE4LjMgNC0zMy45IDIwLjQtNDMuNSAxMy42LTguMSAyNy40LTcuNCAzOS45IDMuNXptLTM1LjQgMzYuNWMuMiA0LjQgMS42IDguNiA0LjIgMTIuMSA1LjQgNy4yIDE1LjcgOC43IDIzIDMuMyAxLjItLjkgMi4zLTIgMy4zLTMuMyA1LjYtNy42IDUuNi0yMC4xIDAtMjcuNy0yLjgtMy45LTcuMi02LjItMTEuOS02LjMtMTEtLjctMTguNyA3LjgtMTguNiAyMS45ek0zNDAuNCAxOTYuOWMtLjgtMjUuNyAxNi4xLTQ0LjkgNDAuMS00NS42IDI1LjUtLjggNDQuMSAxNi4zIDQ0LjkgNDEuMy44IDI1LjMtMTQuNyA0My4yLTM4LjYgNDUuNi0yNi4xIDIuNi00Ni44LTE2LjMtNDYuNC00MS4zem0yNS4xLTIuNGMtLjIgNSAxLjMgOS45IDQuMyAxNCA1LjUgNy4yIDE1LjggOC42IDIzIDMgMS4xLS44IDItMS44IDIuOS0yLjggNS44LTcuNiA1LjgtMjAuNC4xLTI4LTIuOC0zLjgtNy4yLTYuMi0xMS45LTYuMy0xMC44LS42LTE4LjQgNy42LTE4LjQgMjAuMXpNMzMxLjYgMTc3YzAgMTUuNS4xIDMxIDAgNDYuNS4xIDcuMS01LjUgMTMtMTIuNiAxMy4yLTEuMiAwLTIuNS0uMS0zLjctLjQtNS0xLjMtOC44LTYuNi04LjgtMTIuOXYtNzkuNWMwLTQuNy0uMS05LjMgMC0xNCAuMS03LjcgNS0xMi43IDEyLjQtMTIuNyA3LjYtLjEgMTIuNyA0LjkgMTIuNyAxMi45LjEgMTUuNiAwIDMxLjMgMCA0Ni45elwiIC8+XHJcbiAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTIzNS43IDE5Ni4zYy0uMS0xNC4xIDcuNi0yMi42IDE4LjUtMjIgNC43LjIgOS4xIDIuNSAxMS45IDYuNCA1LjYgNy41IDUuNiAyMC4xIDAgMjcuNy01LjQgNy4yLTE1LjcgOC43LTIzIDMuMy0xLjItLjktMi4zLTItMy4zLTMuMy0yLjUtMy41LTMuOS03LjctNC4xLTEyLjF6TTM2NS41IDE5NC41YzAtMTIuNCA3LjYtMjAuNyAxOC40LTIwLjEgNC43LjEgOS4xIDIuNSAxMS45IDYuMyA1LjcgNy42IDUuNyAyMC41LS4xIDI4LTUuNiA3LjEtMTYgOC4zLTIzLjEgMi43LTEuMS0uOC0yLTEuOC0yLjgtMi45LTMtNC4xLTQuNC05LTQuMy0xNHpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QzXCIgZD1cIk02NiAxaDMyOC4xYzM1LjkgMCA2NSAyOS4xIDY1IDY1djMwM2MwIDM1LjktMjkuMSA2NS02NSA2NUg2NmMtMzUuOSAwLTY1LTI5LjEtNjUtNjVWNjZDMSAzMC4xIDMwLjEgMSA2NiAxelwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiemFsb1wiPsSQxIJORyBOSOG6rFAgQuG6sE5HIFpBTE88L3A+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlckZhY2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luX19tb2RhbF9fYmxvY2tfX2ZhY2Vib29rXCIgaHJlZj17ZmFjZWJvb2tMb2dpbn0+XHJcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNNTA0IDI1NkM1MDQgMTE5IDM5MyA4IDI1NiA4UzggMTE5IDggMjU2YzAgMTIzLjc4IDkwLjY5IDIyNi4zOCAyMDkuMjUgMjQ1VjMyNy42OWgtNjNWMjU2aDYzdi01NC42NGMwLTYyLjE1IDM3LTk2LjQ4IDkzLjY3LTk2LjQ4IDI3LjE0IDAgNTUuNTIgNC44NCA1NS41MiA0Ljg0djYxaC0zMS4yOGMtMzAuOCAwLTQwLjQxIDE5LjEyLTQwLjQxIDM4LjczVjI1Nmg2OC43OGwtMTEgNzEuNjloLTU3Ljc4VjUwMUM0MTMuMzEgNDgyLjM4IDUwNCAzNzkuNzggNTA0IDI1NnpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZhY2Vib29rXCI+xJDEgk5HIE5I4bqsUCBC4bqwTkcgRkFDRUJPT0s8L3A+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUYWJzQ2hhbmdlID0gKGV2ZW50LCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWVUYWIodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclRhYnMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxQYXBlciBzcXVhcmU+XHJcbiAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFic0NoYW5nZX1cclxuICAgICAgICAgICAgc2Nyb2xsQnV0dG9ucz1cImF1dG9cIlxyXG4gICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlVGFifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGFicy5tYXAoKHRhYikgPT4gPFRhYiBrZXk9e3RhYi52YWx1ZX0gbGFiZWw9e3RhYi5sYWJlbH0gdmFsdWU9e3RhYi52YWx1ZX0gLz4pfVxyXG4gICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge3ZhbHVlVGFiID09PSAxICYmIHJlbmRlckxvZ2luKCl9XHJcbiAgICAgICAgICAgIHt2YWx1ZVRhYiA9PT0gMiAmJiByZW5kZXJDcmVhdGVBY2NvdW50KCl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTG9naW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX19tb2RhbF9fYmxvY2tcIiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCA0MHB4JyB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMCcgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBzaXplPVwic21hbGxcIiBsYWJlbD1cIkVtYWlsIC8gU8SQVFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJN4bqtdCBraOG6qXVcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAzMCwgcGFkZGluZzogJzhweCAwJywgZmxvYXQ6ICdsZWZ0Jywgd2lkdGg6IDMwMCB9fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGNvbG9yOiAnIzE5NzZkMicsIGN1cnNvcjogJ2RlZmF1bHQnIH19ID5RdcOqbiBt4bqtdCBraOG6qXU/PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgc3R5bGU9e3sgY29sb3I6ICcjMTk3NmQyJyB9fT7EkMSDbmcgbmjhuq1wPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnNjBweCAwJyB9fT5cclxuICAgICAgICAgIHtyZW5kZXJHb29nbGUoKX1cclxuICAgICAgICAgIHtyZW5kZXJaYWxvKCl9XHJcbiAgICAgICAgICB7cmVuZGVyRmFjZSgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGNvbnN0IHJlbmRlckNyZWF0ZUFjY291bnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX19tb2RhbF9fYmxvY2tcIiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCA0MHB4JyB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMCcgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBzaXplPVwic21hbGxcIiBsYWJlbD1cIkjhu40gdMOqblwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJTxJBUXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMCcgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBzaXplPVwic21hbGxcIiBsYWJlbD1cIkVtYWlsXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMCcgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBzaXplPVwic21hbGxcIiBsYWJlbD1cIk3DoyB4w6FjIHRo4buxY1wiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2l6ZT1cInNtYWxsXCIgbGFiZWw9XCJN4bqtdCBraOG6qXVcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzhweCAwJyB9fT5cclxuICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHNpemU9XCJzbWFsbFwiIGxhYmVsPVwiR2nhu5tpIHTDrW5oXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGNvbG9yOiAnIzE5NzZkMicgfX0+VOG6oW8gdMOgaSBraG/huqNuPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgY29sb3I9J2luaGVyaXQnXHJcbiAgICAgICAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRXZWlnaHQ6IDUwMCwgcGFkZGluZzogJzAgMjBweCcsIGZsb2F0OiAncmlnaHQnLCBjdXJzb3I6ICdkZWZhdWx0JyB9fVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9PsSQxINuZyBuaOG6rXBcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8RGlhbG9nXHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtYXgtd2lkdGgtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICBtYXhXaWR0aD17J21kJ31cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvbmdJbn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dJbkNsb3NlfT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgICAgICAgICAgICB7dmFsdWVUYWIgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IHN0eWxlPXt7IGJvcmRlclJpZ2h0OiAnNHB4IHNvbGlkICNlMGUwZTAnLCBoZWlnaHQ6IDYwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PiDEkMSDbmcgbmjhuq1wIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgxJDEg25nIG5o4bqtcCDEkeG7gyB0aGVvIGTDtWkgxJHGoW4gaMOgbmcsIGzGsHUgZGFuaCBzw6FjaCBz4bqjbiBwaOG6qW0gecOqdSB0aMOtY2gsIG5o4bqtbiBuaGnhu4F1IMawdSDEkcOjaSBo4bqlcCBk4bqrbi5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0ltYWdlTG9naW59IHN0eWxlPXt7IGhlaWdodDogMzUwLCB3aWR0aDogJzEwMCUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHt2YWx1ZVRhYiA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gc3R5bGU9e3sgYm9yZGVyUmlnaHQ6ICc0cHggc29saWQgI2UwZTBlMCcsIGhlaWdodDogNjAwIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+IFThuqFvIHTDoGkga2hv4bqjbiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIFThuqFvIHTDoGkga2hv4bqjbiDEkeG7gyB0aGVvIGTDtWkgxJHGoW4gaMOgbmcsIGzGsHUgZGFuaCBzw6FjaCBz4bqjbiBwaOG6qW0gecOqdSB0aMOtY2gsIG5o4bqtbiBuaGnhu4F1IMawdSDEkcOjaSBo4bqlcCBk4bqrblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17SW1hZ2VMb2dpbn0gc3R5bGU9e3sgaGVpZ2h0OiAzNTAsIHdpZHRoOiAnMTAwJScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OH0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDAgMCAwJywgY29sb3I6ICcjMTk3NmQyJywgZm9udFNpemU6IDIwLCBmb250V2VpZ2h0OiA1MDAgfX0+TuG7mWkgdGjhuqV0IERvZG88L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyVGFicygpfVxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRGlhbG9nID5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQgPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luTW9kYWw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3QnO1xyXG5pbXBvcnQgR3JpZExpc3RUaWxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZSc7XHJcbmltcG9ydCBHcmlkTGlzdFRpbGVCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RUaWxlQmFyJztcclxuaW1wb3J0IExpc3RTdWJoZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlcic7XHJcbmltcG9ydCBJbmZvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mbyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzJztcclxuaW1wb3J0IHsgSTE4biB9IGZyb20gJ3JlYWN0LXJlZHV4LWkxOG4nO1xyXG5pbXBvcnQge1xyXG4gICAgSWNvbkJ1dHRvbixcclxuICAgIEljb24sXHJcbiAgICBUb29sdGlwLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgQ2FyZCxcclxuICAgIEdyaWQsXHJcbiAgICBDYXJkQ29udGVudCxcclxuICAgIENhcmRBY3Rpb25zLFxyXG4gICAgVHlwb2dyYXBoeSxcclxuICAgIEFwcEJhcixcclxuICAgIFRvb2xiYXIsXHJcbiAgICBIaWRkZW4sXHJcbiAgICBQb3BvdmVyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgU3RhckJvcmRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IHsgdGl0bGVzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2luZGV4JztcclxuaW1wb3J0IEdhbWVwYWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HYW1lcGFkJztcclxuaW1wb3J0IE1vZGFsTG9naW4gZnJvbSAnLi4vTG9naW4vTW9kYWwnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIjtcclxuaW1wb3J0IEdyb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgUG9wcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xyXG5pbXBvcnQgTWVudUxpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCI7XHJcbmltcG9ydCBIdHRwc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0h0dHBzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDI1LFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcclxuICAgICAgICBjb2xvcjogJyMxOTc2ZDInXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5cclxuY29uc3QgQWN0aW9ucyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyB0aXRsZSB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcbmltcG9ydCBOYXZpZ2F0ZU5leHQgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlTmV4dCc7XHJcbmltcG9ydCBOYXZpZ2F0ZUJlZm9yZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVCZWZvcmUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBrZXlzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50c1wiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbn0pKTtcclxuXHJcbmNvbnN0IEtleXdvcmRTbGlkZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBOZXh0QXJyb3cgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXsna2V5d29yZC1zZWFyY2hfX25leHRfX2Fycm93J31cclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICA8TmF2aWdhdGVOZXh0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBQcmV2QXJyb3cgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXsna2V5d29yZC1zZWFyY2hfX3ByZXZfX2Fycm93J31cclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICA8TmF2aWdhdGVCZWZvcmUgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0YVNlYXJjaCA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiR2nGsOG7nW5nIG5n4bunIGhp4buHbiDEkeG6oWlcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdmluaG9tZXMtY2VudHJhbC1wYXJrLXBpZC0zNTg3MlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJU4bunIHF14bqnbiDDoW8gdGjhu51pIHRyYW5nXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3ZpbmhvbWVzLWdyYW5kLXBhcmstcXVhbi05LXBpZC0zNzU4NFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCw6BuIHRyw6AgcGjDsm5nIGtow6FjaCBoaeG7h24gxJHhuqFpXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL3ZpbmhvbWVzLXNtYXJ0LWNpdHktcGlkLTM3MTkxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkLDoG4gdHLDoCBwaMOybmcga2jDoWNoIGPhu5UgxJFp4buDblwiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi92aW5ob21lcy1vY2Vhbi1wYXJrLWdpYS1sYW0tcGlkLTM3NTk3XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlThu6cgYuG6v3AgdGnhu4duIG5naGlcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vdnVuZy10YXUtcGVhcmwtcGlkLTQ4Njc0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk7hu5lpIHRo4bqldCBzYW5nIHRy4buNbmdcIixcclxuICAgICAgcGF0aDogXCIvZHUtYW4vZ3JhbmRldXItcGFsYWNlLXBpZC01MDIzNFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJHacaw4budbmcgbmfhu6cgY+G7lSDEkWnhu4NuXCIsXHJcbiAgICAgIHBhdGg6IFwiL2R1LWFuL2RpYW1vbmQtaXNsYW5kLXBpZC0zMzVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTuG7mWkgdGjhuqV0IHNhbmcgdHLhu41uZ1wiLFxyXG4gICAgICBwYXRoOiBcIi9kdS1hbi90aGUtc3VuLWF2ZW51ZS1waWQtMTVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQsOgbiDEg24gY+G7lSDEkWnhu4NuXCIsXHJcbiAgICAgIHBhdGg6IFwiL25oYS1kYXQtYmFuL25oYS1kYXQtYmFuLXRhaS1oYWktcGhvbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQsOgbiDEg24gaGnhu4duIMSR4bqhaVwiLFxyXG4gICAgICBwYXRoOiBcIi9uaGEtZGF0LWJhbi9uaGEtZGF0LWJhbi10YWktaGEtbm9pXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgb25DbGljaz17W119IC8+LFxyXG4gICAgcHJldkFycm93OiA8UHJldkFycm93IG9uQ2xpY2s9e1tdfSAvPixcclxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxNDQwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgZG90czogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5d29yZC1zZWFyY2hcIj5cclxuICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udFNpemU6IDIwLCBwYWRkaW5nOiAxMCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogJyMxOTc2ZDInIH19PlThu6sga2jDs2EgdMOsbSBraeG6v20gSE9UPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGF0YVNlYXJjaC5tYXAoKHNlYXJjaE9iamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17c2VhcmNoT2JqZWN0LnBhdGh9IGFzPXtzZWFyY2hPYmplY3QucGF0aH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMTk3NmQyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrZXl3b3JkLXNlYXJjaF9faXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPntzZWFyY2hPYmplY3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L1NsaWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZXl3b3JkU2xpZGVcclxuIiwiY29uc3QgbWFpblVSTCA9IFwiaHR0cHM6Ly9uaGFkYXRtb2kubmV0XCI7XHJcbmNvbnN0IHVwZ3JhZGVQbGFuVVJMID0gXCJodHRwczovL25oYWRhdG1vaS5uZXRcIjtcclxuXHJcbmNvbnN0IHVwZ3JhZGVJY29uVVJMID0gXCJodHRwczovL3JlYWN0LW1hdGVyaWFsLWRhc2hib2FyZC5kZXZpYXMuaW8vaW1hZ2VzL3VuZHJhd19yZXN1bWVfZm9sZGVyXzJfYXJzZS5zdmdcIjtcclxuY29uc3QgbG9nb1VSTCA9IFwiaHR0cHM6Ly9zdGF0aWMubmhhZGF0bW9pLm5ldC9kZWZhdWx0L25oYWRhdG1vaS5zdmdcIjtcclxuXHJcbmNvbnN0IGFwaUJhc2VVUkwgPSBcImh0dHBzOi8vZ3JhcGgubmhhZGF0bW9pLm5ldFwiO1xyXG5jb25zdCBnb29nbGVMb2dpbiA9IGAke2FwaUJhc2VVUkx9L2F1dGgvZ29vZ2xlYDtcclxuY29uc3QgZmFjZWJvb2tMb2dpbiA9IGAke2FwaUJhc2VVUkx9L2F1dGgvZmFjZWJvb2tgO1xyXG5jb25zdCB6YWxvTG9naW4gPSBgJHthcGlCYXNlVVJMfS9hdXRoL3phbG9gO1xyXG5jb25zdCBhcGlHcmFwaFFMVVJMID0gYCR7YXBpQmFzZVVSTH0vZ3JhcGhxbGA7XHJcblxyXG5jb25zdCB1cmxJbWFnZUFkU2VsbExlYXNlID0gXCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RhdGEvYWRfc2VsbF9sZWFzZV9pbWFnZS9cIjtcclxuY29uc3QgdXJsSW1hZ2VQcm9qZWN0ID0gXCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RhdGEvcHJvamVjdF9pbWFnZS9cIjtcclxuY29uc3QgdXJsSW1hZ2VCcm9rZXIgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGF0YS9icm9rZXJfaW1hZ2UvXCI7XHJcblxyXG5jb25zdCBpbWFnZURlZmF1bHRQcm9qZWN0ID0gXCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvaG9tZV9kZWZhdWx0LmpwZ1wiO1xyXG5jb25zdCBpbWFnZURlZmF1bHRTbGlkZXIgPSBcImh0dHBzOi8vc3RhdGljLm5oYWRhdG1vaS5uZXQvZGVmYXVsdC9uaGFkYXRtb2ktZGVmYXVsdC5zdmdcIjtcclxuY29uc3QgaW1hZ2VEZWZhdWx0QnJva2VyID0gXCJodHRwczovL3N0YXRpYy5uaGFkYXRtb2kubmV0L2RlZmF1bHQvdXNlci5wbmdcIjtcclxuY29uc3QgZ29vZ2xlQW5hbHl0aWNzQ29kZSA9ICdVQS02MDc2Nzk5OC04JztcclxuY29uc3QgZ29vZ2xlU2VhcmNoQ29uc29sZSA9ICdjeU1rVG5kSGRFOTVjRmd2N0g1X290dUR5LVg2TjdxZFhFdU5PUGlKMEdRJztcclxuY29uc3QgbG9jYWxTdG9yYWdlQ29tcGFyZUtleSA9ICduZG1fY29tcGFyZSc7XHJcbmNvbnN0IGxvY2FsU3RvcmFnZVZpZXdlZCA9ICduZG1fYXNsX3ZpZXdlZCc7XHJcbmNvbnN0IGxvY2FsU3RvcmFnZVByb2plY3RWaWV3ZWQgPSAnbmRtX3Byb2plY3Rfdmlld2VkJztcclxuXHJcbmNvbnN0IGFkU2VsbExlYXNlQ2F0ZWdvcnkgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYWYwNDQxMWUxZWE3MmExZmNiZGUnLFxyXG4gICAgc2x1ZzogJy9uaGEtZGF0LWJhbicsXHJcbiAgICBuYW1lOiAnTmjDoCDEkeG6pXQgYsOhbicsXHJcbiAgICBwYXJlbnRfc2x1ZzogJydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWFmMDQ0MTFlMWVhNzJhMWZjYmRmJyxcclxuICAgIHNsdWc6ICcvbmhhLWRhdC10aHVlJyxcclxuICAgIG5hbWU6ICdOaMOgIMSR4bqldCB0aHXDqicsXHJcbiAgICBwYXJlbnRfc2x1ZzogJydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWFmMDQ0MTFlMWVhNzJhMWZjYmUwJyxcclxuICAgIHNsdWc6ICcvbmhhLWRhdC1jYW4tbXVhJyxcclxuICAgIG5hbWU6ICdOaMOgIMSR4bqldCBj4bqnbiBtdWEnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFhZjA0NDExZTFlYTcyYTFmY2JlMScsXHJcbiAgICBzbHVnOiAnL25oYS1kYXQtY2FuLXRodWUnLFxyXG4gICAgbmFtZTogJ05ow6AgxJHhuqV0IGPhuqduIHRodcOqJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJ1xyXG4gIH1cclxuXTtcclxuY29uc3QgYWRTZWxsTGVhc2VUeXBlID0gW1xyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDVmNTQzZjY2Mzg3OWM2NzUwOTI3LDVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYyw1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWEsNWU3ZDYxMzIzZjY2Mzg3OWM2NzUwOTk3LDVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tbmhhJyxcclxuICAgIG5hbWU6ICdCw6FuIG5ow6AnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFjJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1uaGEtbWF0LXBobycsXHJcbiAgICBuYW1lOiAnQsOhbiBuaMOgIG3hurd0IHBo4buRJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tbmhhJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhYScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tbmhhLXJpZW5nJyxcclxuICAgIG5hbWU6ICdCw6FuIG5ow6AgcmnDqm5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tbmhhJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MTMyM2Y2NjM4NzljNjc1MDk5NycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tbmhhLXBoby1zaG9waG91c2UnLFxyXG4gICAgbmFtZTogJ0LDoW4gbmjDoCBwaOG7kSB0aMawxqFuZyBt4bqhaSAoc2hvcGhvdXNlKScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLW5oYScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWInLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLW5oYS1saWVuLWtlJyxcclxuICAgIG5hbWU6ICdCw6FuIG5ow6AgbGnhu4FuIGvhu4EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1uaGEnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWE5LDVlN2Q2MjBmM2Y2NjM4NzljNjc1MDlmOCw1ZTdkNjIyZDNmNjYzODc5YzY3NTBhMDcsNWU3ZDYyNGIzZjY2Mzg3OWM2NzUwYTE1LDVlN2Q2MjZiM2Y2NjM4NzljNjc1MGEyMyw1ZTdkNjI4YjNmNjYzODc5YzY3NTBhMzQsNWU3ZDYyYTUzZjY2Mzg3OWM2NzUwYTQyLDVlN2Q2MmNjM2Y2NjM4NzljNjc1MGE1MSw1ZTdkNjJmYzNmNjYzODc5YzY3NTBhNmEsNWU3ZDYzMTkzZjY2Mzg3OWM2NzUwYTdiLDVlN2Q2MzJmM2Y2NjM4NzljNjc1MGE4ZCw1ZTk5MjRmNjcxNmVlOTY0YjVmZGNjMjMnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICBuYW1lOiBcIkLDoW4gY8SDbiBo4buZLCBjaHVuZyBjxrBcIixcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MjBmM2Y2NjM4NzljNjc1MDlmOCcsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLWdpYS1yZScsXHJcbiAgICBuYW1lOiBcIkPEg24gaOG7mSBjaHVuZyBjxrAgZ2nDoSBy4bq7XCIsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjIyZDNmNjYzODc5YzY3NTBhMDcnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1taW5pJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIGNodW5nIGPGsCBtaW5pXCIsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjI0YjNmNjYzODc5YzY3NTBhMTUnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby10cnVuZy1jYXAnLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgY2h1bmcgY8awIHRydW5nIGPhuqVwXCIsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjI2YjNmNjYzODc5YzY3NTBhMjMnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jYW8tY2FwJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIGNodW5nIGPGsCBjYW8gY+G6pXBcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MjhiM2Y2NjM4NzljNjc1MGEzNCcsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLXBlbnRob3VzZScsXHJcbiAgICBuYW1lOiBcIkPEg24gaOG7mSBwZW50aG91c2VcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MmE1M2Y2NjM4NzljNjc1MGE0MicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLXNreXZpbGxhJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIFNreXZpbGxhXCIsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjJjYzNmNjYzODc5YzY3NTBhNTEnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWNhbi1oby1sb2Z0LWhvdXNlJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIExvZnQgLSBob3VzZVwiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYyZmMzZjY2Mzg3OWM2NzUwYTZhJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tc3R1ZGlvJyxcclxuICAgIG5hbWU6IFwiQ8SDbiBo4buZIFN0dWRpb1wiLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1jYW4taG8tY2h1bmctY3UnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDYzMTkzZjY2Mzg3OWM2NzUwYTdiJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1jYW4taG8tY29uZG90ZWwnLFxyXG4gICAgbmFtZTogXCJDxINuIGjhu5kgQ29uZG90ZWxcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MzJmM2Y2NjM4NzljNjc1MGE4ZCcsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLW9mZmljZXRlbCcsXHJcbiAgICBuYW1lOiBcIkPEg24gaOG7mSBPZmZpY2V0ZWxcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlOTkyNGY2NzE2ZWU5NjRiNWZkY2MyMycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tY2FuLWhvLWR1cGxleCcsXHJcbiAgICBuYW1lOiBcIkPEg24gaOG7mSBEdXBsZXhcIixcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tY2FuLWhvLWNodW5nLWN1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2MzY4M2Y2NjM4NzljNjc1MGFiNiw1ZTkxMjI5NDhjNzFkMjVhODc5ZDMwZTYsNWU3ZDY0YWUzZjY2Mzg3OWM2NzUwYWVmLDVlN2Q2NGM1M2Y2NjM4NzljNjc1MGFmZSw1ZTdkNjRlMjNmNjYzODc5YzY3NTBiMGIsNWU3ZDY1OGEzZjY2Mzg3OWM2NzUwYjcwLDVlN2Q2NTEwM2Y2NjM4NzljNjc1MGIyNyw1ZTdkNjU1ZTNmNjYzODc5YzY3NTBiNTEsNWU3ZDY1YjgzZjY2Mzg3OWM2NzUwYjhhJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICBuYW1lOiAnQsOhbiBiaeG7h3QgdGjhu7EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU5MTIyOTQ4YzcxZDI1YTg3OWQzMGU2JyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1iaWV0LXRodS1saWVuLWtlJyxcclxuICAgIG5hbWU6ICdCaeG7h3QgdGjhu7EgbGnhu4FuIGvhu4EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjRhZTNmNjYzODc5YzY3NTBhZWYnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1LXNhbi12dW9uJyxcclxuICAgIG5hbWU6ICdCaeG7h3QgdGjhu7Egc8OibiB2xrDhu51uJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tYmlldC10aHUnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU3ZDY0YzUzZjY2Mzg3OWM2NzUwYWZlJyxcclxuICAgIHNsdWc6ICcvbXVhLWJhbi1iaWV0LXRodS1zb25nLWxhcCcsXHJcbiAgICBuYW1lOiAnQmnhu4d0IHRo4buxIHNvbmcgbOG6rXAnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjRlMjNmNjYzODc5YzY3NTBiMGInLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1LWRvbi1sYXAnLFxyXG4gICAgbmFtZTogJ0Jp4buHdCB0aOG7sSDEkcahbiBs4bqtcCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NThhM2Y2NjM4NzljNjc1MGI3MCcsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtbmdoaS1kdW9uZycsXHJcbiAgICBuYW1lOiAnQmnhu4d0IHRo4buxIG5naOG7iSBkxrDhu6FuZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlN2Q2NTEwM2Y2NjM4NzljNjc1MGIyNycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmlldC10aHUtcGhvJyxcclxuICAgIG5hbWU6ICdCaeG7h3QgdGjhu7EgcGjhu5EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjU1ZTNmNjYzODc5YzY3NTBiNTEnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1LXR1LWxhcCcsXHJcbiAgICBuYW1lOiAnQmnhu4d0IHRo4buxIHThu6kgbOG6rXAnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iaWV0LXRodScsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTdkNjViODNmNjYzODc5YzY3NTBiOGEnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWJpZXQtdGh1LW1pbmknLFxyXG4gICAgbmFtZTogJ0Jp4buHdCB0aOG7sSBNaW5pJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tYmlldC10aHUnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFlLDVlNjcwNzdlMWZlYTI3M2E5ODVkMWQzNiw1ZTY3MDcwZjFmZWEyNzNhOTg1ZDFkMzUsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWFkLDVlNjcwNzk4MWZlYTI3M2E5ODVkMWQzNycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tZGF0JyxcclxuICAgIG5hbWU6ICdCw6FuIMSR4bqldCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiNWU2NzA3N2UxZmVhMjczYTk4NWQxZDM2XCIsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tZGF0LW5lbicsXHJcbiAgICBuYW1lOiAnxJDhuqV0IG7hu4FuJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tZGF0JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlNjcwNzBmMWZlYTI3M2E5ODVkMWQzNScsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tZGF0LXRoby1jdScsXHJcbiAgICBuYW1lOiAnQsOhbiDEkeG6pXQgdGjhu5UgY8awJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tZGF0JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhZCcsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tZGF0LW5lbi1kdS1hbicsXHJcbiAgICBuYW1lOiAnQsOhbiDEkeG6pXQgbuG7gW4sIGThu7Egw6FuJyxcclxuICAgIHBhcmVudF9zbHVnOiAnL211YS1iYW4tZGF0JyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlNjcwNzk4MWZlYTI3M2E5ODVkMWQzNycsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tZGF0LW5vbmctbGFtLW5naGllcCcsXHJcbiAgICBuYW1lOiAnTXVhIGLDoW4gxJHhuqV0IG7DtG5nIGzDom0gbmdoaeG7h3AnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1kYXQnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWJhbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWU2NzA3YzIxZmVhMjczYTk4NWQxZDM4LDVlNjcwN2UwMWZlYTI3M2E5ODVkMWQzOSw1ZTY3MDdmODFmZWEyNzNhOTg1ZDFkM2EsNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWIwLDVlMTFiMDQ2NTIxODEzYTc4Y2RlODVhZicsXHJcbiAgICBzbHVnOiAnL211YS1iYW4tYmF0LWRvbmctc2FuLWtoYWMnLFxyXG4gICAgbmFtZTogJ0LDoW4gY8OhYyBsb+G6oWkgYuG6pXQgxJHhu5luZyBz4bqjbiBraMOhYycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTY3MDdlMDFmZWEyNzNhOTg1ZDFkMzknLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLW5oYS1oYW5nLWtoYWNoLXNhbicsXHJcbiAgICBuYW1lOiAnQsOhbiBuaMOgIGjDoG5nLCBraMOhY2ggc+G6oW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTY3MDdmODFmZWEyNzNhOTg1ZDFkM2EnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLXNhbmctbmh1b25nLXF1YW4nLFxyXG4gICAgbmFtZTogJ0LDoW4vc2FuZyBuaMaw4bujbmcgc2hvcCwga2lvdCwgcXXDoW4nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjAnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLWtoby1uaGEteHVvbmcnLFxyXG4gICAgbmFtZTogJ0LDoW4gbmjDoCBraG8sIG5ow6AgeMaw4bufbmcnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcvbXVhLWJhbi1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtYmFuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YWYnLFxyXG4gICAgc2x1ZzogJy9tdWEtYmFuLXRyYW5nLXRyYWktbmdoaS1kdW9uZycsXHJcbiAgICBuYW1lOiAnQsOhbiB0cmFuZyB0cuG6oWksIG5naOG7iSBkxrDhu6FuZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJy9tdWEtYmFuLWJhdC1kb25nLXNhbi1raGFjJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1iYW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjMycsXHJcbiAgICBzbHVnOiAnL2Nhbi10aHVlLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICBuYW1lOiAnQ+G6p24gdGh1w6ogY8SDbiBo4buZIGNodW5nIGPGsCcsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjNCcsXHJcbiAgICBzbHVnOiAnL2Nhbi10aHVlLW5oYS1yaWVuZycsXHJcbiAgICBuYW1lOiAnQ+G6p24gdGh1w6ogbmjDoCByacOqbmcnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YzUnLFxyXG4gICAgc2x1ZzogJy9jYW4tdGh1ZS1uaGEtbWF0LXBobycsXHJcbiAgICBuYW1lOiAnQ+G6p24gdGh1w6ogbmjDoCBt4bq3dCBwaOG7kScsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjNicsXHJcbiAgICBzbHVnOiAnL2Nhbi10aHVlLW5oYS10cm8tcGhvbmctdHJvJyxcclxuICAgIG5hbWU6ICdD4bqnbiB0aHXDqiBuaMOgIHRy4buNLCBwaMOybmcgdHLhu40nLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YzcnLFxyXG4gICAgc2x1ZzogJy9jYW4tdGh1ZS12YW4tcGhvbmcnLFxyXG4gICAgbmFtZTogJ0PhuqduIHRodcOqIHbEg24gcGjDsm5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWM4JyxcclxuICAgIHNsdWc6ICcvY2FuLXRodWUtY3VhLWhhbmcta2lvdCcsXHJcbiAgICBuYW1lOiAnQ+G6p24gdGh1w6ogY+G7rWEgaMOgbmcsIGtpIOG7kXQnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YzknLFxyXG4gICAgc2x1ZzogJy9jYW4tdGh1ZS1raG8tbmhhLXh1b25nLWRhdCcsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIGtobywgbmjDoCB4xrDhu59uZywgxJHhuqV0JyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWNhJyxcclxuICAgIHNsdWc6ICcvY2FuLXRodWUtY2FjLWxvYWktYmF0LWRvbmctc2FuLWtoYWMnLFxyXG4gICAgbmFtZTogJ0PhuqduIHRodcOqIGxv4bqhaSBi4bqldCDEkeG7mW5nIHPhuqNuIGtow6FjJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWJhJyxcclxuICAgIHNsdWc6ICcvbXVhLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICBuYW1lOiAnTXVhIGPEg24gaOG7mSBjaHVuZyBjxrAnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViYicsXHJcbiAgICBzbHVnOiAnL211YS1uaGEtcmllbmcnLFxyXG4gICAgbmFtZTogJ011YSBuaMOgIHJpw6puZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWJjJyxcclxuICAgIHNsdWc6ICcvbXVhLW5oYS1iaWV0LXRodS1saWVuLWtlJyxcclxuICAgIG5hbWU6ICdNdWEgbmjDoCBiaeG7h3QgdGjGsCwgbGnhu4FuIGvhu4EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViZCcsXHJcbiAgICBzbHVnOiAnL211YS1uaGEtbWF0LXBobycsXHJcbiAgICBuYW1lOiAnTXVhIG5ow6AgbeG6t3QgcGjhu5EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViZScsXHJcbiAgICBzbHVnOiAnL211YS1kYXQtbmVuLWR1LWFuJyxcclxuICAgIG5hbWU6ICdNdWEgxJHhuqV0IG7hu4FuIGThu7Egw6FuJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tbXVhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YmYnLFxyXG4gICAgc2x1ZzogJy9tdWEtZGF0JyxcclxuICAgIG5hbWU6ICdNdWEgxJHhuqV0JyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC1jYW4tbXVhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YzAnLFxyXG4gICAgc2x1ZzogJy9tdWEtdHJhbmctdHJhaS1raHUtbmdoaS1kdW9uZycsXHJcbiAgICBuYW1lOiAnTXVhIHRyYW5nIHRy4bqhaSwga2h1IG5naOG7iSBkxrDhu6FuZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtY2FuLW11YSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWMxJyxcclxuICAgIHNsdWc6ICcvbXVhLWtoby1uaGEteHVvbmcnLFxyXG4gICAgbmFtZTogJ011YSBraG8sIG5ow6AgeMaw4bufbmcnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODVjMicsXHJcbiAgICBzbHVnOiAnL211YS1jYWMtbG9haS1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICBuYW1lOiAnTXVhIGPDoWMgbG/huqFpIGLhuqV0IMSR4buZbmcgc+G6o24ga2jDoWMnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LWNhbi1tdWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViMicsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLWNhbi1oby1jaHVuZy1jdScsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIGPEg24gaOG7mSBjaHVuZyBjxrAnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViMycsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLW5oYS1yaWVuZycsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIG5ow6AgcmnDqm5nJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjQnLFxyXG4gICAgc2x1ZzogJy9jaG8tdGh1ZS1uaGEtbWF0LXBobycsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIG5ow6AgbeG6t3QgcGjhu5EnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlMTFiMDQ2NTIxODEzYTc4Y2RlODViNScsXHJcbiAgICBzbHVnOiAnL2Noby10aHVlLW5oYS10cm8tcGhvbmctdHJvJyxcclxuICAgIG5hbWU6ICdDaG8gdGh1w6ogbmjDoCB0cuG7jSwgcGjDsm5nIHRy4buNJyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjYnLFxyXG4gICAgc2x1ZzogJy9jaG8tdGh1ZS12YW4tcGhvbmcnLFxyXG4gICAgbmFtZTogJ0NobyB0aHXDqiB2xINuIHBow7JuZycsXHJcbiAgICBwYXJlbnRfc2x1ZzogJycsXHJcbiAgICB0eXBlMV9zbHVnOiAnL25oYS1kYXQtdGh1ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWUxMWIwNDY1MjE4MTNhNzhjZGU4NWI3JyxcclxuICAgIHNsdWc6ICcvY2hvLXRodWUtY3VhLWhhbmcta2lvdCcsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIGPhu61hIGjDoG5nLCBraSDhu5F0JyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjgnLFxyXG4gICAgc2x1ZzogJy9jaG8tdGh1ZS1raG8tbmhhLXh1b25nLWRhdCcsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIGtobywgbmjDoCB4xrDhu59uZywgxJHhuqV0JyxcclxuICAgIHBhcmVudF9zbHVnOiAnJyxcclxuICAgIHR5cGUxX3NsdWc6ICcvbmhhLWRhdC10aHVlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZTExYjA0NjUyMTgxM2E3OGNkZTg1YjknLFxyXG4gICAgc2x1ZzogJy9jaG8tdGh1ZS1jYWMtbG9haS1iYXQtZG9uZy1zYW4ta2hhYycsXHJcbiAgICBuYW1lOiAnQ2hvIHRodcOqIGPDoWMgbG/huqFpIGLhuqV0IMSR4buZbmcgc+G6o24ga2jDoWMnLFxyXG4gICAgcGFyZW50X3NsdWc6ICcnLFxyXG4gICAgdHlwZTFfc2x1ZzogJy9uaGEtZGF0LXRodWUnXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgdGl0bGVzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunJyxcclxuICAgIGVsZW1lbnRzOiBbXHJcbiAgICAgIHsgZWxlbWVudDogJ0dpxrDhu51uZyBuZ+G7pyB04buxIG5oacOqbicsIGltYWdlOiAnaHR0cHM6Ly9tdW5kZWNvci52bi91cGxvYWRzL3NhbnBoYW0vZ2l1b25nbmd1Z290dW5oaWVuL2dpdW9uZy1uZ3UtZ28tdHUtbmhpZW4tZGVwLUdOMDM0LmpwZWcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0dpxrDhu51uZyBuZ+G7pyBjw7RuZyBuZ2hp4buHcCcsIGltYWdlOiAnaHR0cHM6Ly9tdW5kZWNvci52bi91cGxvYWRzL3NhbnBoYW0vZ2l1b25nbmd1Z290dW5oaWVuL2dpdW9uZy1uZ3UtZ28tdHUtbmhpZW4tZGVwLUdOMDM0LmpwZWcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0dpxrDhu51uZyBuZ+G7pyBoaeG7h24gxJHhuqFpJywgaW1hZ2U6ICdodHRwczovL211bmRlY29yLnZuL3VwbG9hZHMvc2FucGhhbS9naXVvbmduZ3Vnb3R1bmhpZW4vZ2l1b25nLW5ndS1nby10dS1uaGllbi1kZXAtR04wMzQuanBlZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnR2nGsOG7nW5nIG5n4bunIGPhu5UgxJFp4buDbicsIGltYWdlOiAnaHR0cHM6Ly9tdW5kZWNvci52bi91cGxvYWRzL3NhbnBoYW0vZ2l1b25nbmd1Z290dW5oaWVuL2dpdW9uZy1uZ3UtZ28tdHUtbmhpZW4tZGVwLUdOMDM0LmpwZWcnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0LDoG4gxINuJyxcclxuICAgIGVsZW1lbnRzOiBbXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIHThu7Egbmhpw6puJywgaW1hZ2U6ICdodHRwczovL2RvZ29ub2l0aGF0dmlldC5jb20vdXBsb2FkL3NhbnBoYW0vbGFyZ2UvYm8tYmFuLWFuLWdvLXR1LW5oaWVuLWNhbS14ZS1tYXQtZ28tY28tZGllbi0xbTgtOC1naGUuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiDDqXAgY2FvIGPhuqVwJywgaW1hZ2U6ICdodHRwczovL2RvZ29ub2l0aGF0dmlldC5jb20vdXBsb2FkL3NhbnBoYW0vbGFyZ2UvYm8tYmFuLWFuLWdvLXR1LW5oaWVuLWNhbS14ZS1tYXQtZ28tY28tZGllbi0xbTgtOC1naGUuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiBuaMOgIGjDoG5nJywgaW1hZ2U6ICdodHRwczovL2RvZ29ub2l0aGF0dmlldC5jb20vdXBsb2FkL3NhbnBoYW0vbGFyZ2UvYm8tYmFuLWFuLWdvLXR1LW5oaWVuLWNhbS14ZS1tYXQtZ28tY28tZGllbi0xbTgtOC1naGUuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA0IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL2RvZ29ub2l0aGF0dmlldC5jb20vdXBsb2FkL3NhbnBoYW0vbGFyZ2UvYm8tYmFuLWFuLWdvLXR1LW5oaWVuLWNhbS14ZS1tYXQtZ28tY28tZGllbi0xbTgtOC1naGUuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA2IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL2RvZ29ub2l0aGF0dmlldC5jb20vdXBsb2FkL3NhbnBoYW0vbGFyZ2UvYm8tYmFuLWFuLWdvLXR1LW5oaWVuLWNhbS14ZS1tYXQtZ28tY28tZGllbi0xbTgtOC1naGUuanBnJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdCw6BuIHBow7JuZyBraMOhY2gnLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gdOG7sSBuaGnDqm4nLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGR1b25nZGFpLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2Jhbi1naGUtcGhvbmcta2hhY2gtZ28tb2MtY2hvLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gw6lwIGNhbyBj4bqlcCcsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0ZHVvbmdkYWkudm4vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvYmFuLWdoZS1waG9uZy1raGFjaC1nby1vYy1jaG8uanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiBuaMOgIGjDoG5nJywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRkdW9uZ2RhaS52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9iYW4tZ2hlLXBob25nLWtoYWNoLWdvLW9jLWNoby5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDQgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGR1b25nZGFpLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2Jhbi1naGUtcGhvbmcta2hhY2gtZ28tb2MtY2hvLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNiBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0ZHVvbmdkYWkudm4vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvYmFuLWdoZS1waG9uZy1raGFjaC1nby1vYy1jaG8uanBnJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdL4buHIHRpdmknLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gdOG7sSBuaGnDqm4nLCBpbWFnZTogJ2h0dHBzOi8vZ29jaHVhbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDkvMzI2ODQxZjM3Yzc1OWQyYmM0NjQuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiDDqXAgY2FvIGPhuqVwJywgaW1hZ2U6ICdodHRwczovL2dvY2h1YW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA5LzMyNjg0MWYzN2M3NTlkMmJjNDY0LmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gbmjDoCBow6BuZycsIGltYWdlOiAnaHR0cHM6Ly9nb2NodWFuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8zMjY4NDFmMzdjNzU5ZDJiYzQ2NC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDQgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZ29jaHVhbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDkvMzI2ODQxZjM3Yzc1OWQyYmM0NjQuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA2IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL2dvY2h1YW4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA5LzMyNjg0MWYzN2M3NTlkMmJjNDY0LmpwZycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnVOG7pyBxdeG6p24gw6FvJyxcclxuICAgIGVsZW1lbnRzOiBbXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIHThu7Egbmhpw6puJywgaW1hZ2U6ICdodHRwczovL2RvZ29sZWdpYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDMvTWF1LXR1LXF1YW4tYW8tZGVwLUxHLVRRQTAzMC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIMOpcCBjYW8gY+G6pXAnLCBpbWFnZTogJ2h0dHBzOi8vZG9nb2xlZ2lhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMy9NYXUtdHUtcXVhbi1hby1kZXAtTEctVFFBMDMwLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gbmjDoCBow6BuZycsIGltYWdlOiAnaHR0cHM6Ly9kb2dvbGVnaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAzL01hdS10dS1xdWFuLWFvLWRlcC1MRy1UUUEwMzAuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA0IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL2RvZ29sZWdpYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDMvTWF1LXR1LXF1YW4tYW8tZGVwLUxHLVRRQTAzMC5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDYgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZG9nb2xlZ2lhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMy9NYXUtdHUtcXVhbi1hby1kZXAtTEctVFFBMDMwLmpwZycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyxcclxuICAgIGVsZW1lbnRzOiBbXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIHThu7Egbmhpw6puJywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRsdW9uZ3Nvbi52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9iYW4tdHJhbmctZGllbS02MC0xLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gw6lwIGNhbyBj4bqlcCcsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0bHVvbmdzb24udm4vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYmFuLXRyYW5nLWRpZW0tNjAtMS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIG5ow6AgaMOgbmcnLCBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGx1b25nc29uLnZuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jhbi10cmFuZy1kaWVtLTYwLTEuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA0IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL25vaXRoYXRsdW9uZ3Nvbi52bi93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9iYW4tdHJhbmctZGllbS02MC0xLmpwZycgfSxcclxuICAgICAgeyBlbGVtZW50OiAnQsOgbiDEg24gNiBnaOG6vycsIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0bHVvbmdzb24udm4vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYmFuLXRyYW5nLWRpZW0tNjAtMS5qcGcnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1Thu6cgZ2nDoHknLFxyXG4gICAgZWxlbWVudHM6IFtcclxuICAgICAgeyBlbGVtZW50OiAnVOG7pyBnacOgeSB04buxIG5oacOqbicsIGltYWdlOiAnaHR0cHM6Ly9maWxlLmhzdGF0aWMubmV0LzEwMDAyOTQxNDYvZmlsZS8zX2dyYW5kZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ1Thu6cgZ2nDoHkgw6lwIGNhbyBj4bqlcCcsIGltYWdlOiAnaHR0cHM6Ly9maWxlLmhzdGF0aWMubmV0LzEwMDAyOTQxNDYvZmlsZS8zX2dyYW5kZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ1Thu6cgZ2nDoHkgbmjDoCBow6BuZycsIGltYWdlOiAnaHR0cHM6Ly9maWxlLmhzdGF0aWMubmV0LzEwMDAyOTQxNDYvZmlsZS8zX2dyYW5kZS5qcGcnIH0sXHJcbiAgICAgIHsgZWxlbWVudDogJ0LDoG4gxINuIDQgZ2jhur8nLCBpbWFnZTogJ2h0dHBzOi8vZmlsZS5oc3RhdGljLm5ldC8xMDAwMjk0MTQ2L2ZpbGUvM19ncmFuZGUuanBnJyB9LFxyXG4gICAgICB7IGVsZW1lbnQ6ICdCw6BuIMSDbiA2IGdo4bq/JywgaW1hZ2U6ICdodHRwczovL2ZpbGUuaHN0YXRpYy5uZXQvMTAwMDI5NDE0Ni9maWxlLzNfZ3JhbmRlLmpwZycgfSxcclxuICAgIF1cclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgbGlzdE1lbnUgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdO4buZaSBUaOG6pXQgUGjDsm5nIE5n4bunJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdO4buZaSBUaOG6pXQgUGjDsm5nIEtow6FjaCcsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IGfhu5cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgR2nDoHkgRMOpcCcgfSxcclxuICAgICAgeyByb29tOiAnS+G7hyBUaXZpJyB9LFxyXG4gICAgICB7IHJvb206ICdL4buHIMSR4buDIGdpw6B5JyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHLGsOG7o3UnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ07hu5lpIFRo4bqldCBOaMOgIELhur9wJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgYuG6v3AnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgYsOgbiDEg24nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0do4bq/IHBow7JuZyDEg24nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdO4buZaSBUaOG6pXQgUGjDsm5nIFRo4budJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gVGjhu50nIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgVGjhu50nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gVGjhu50gVGjhuqduIFTDoGknIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gVGjhu50gVHJlbyBUxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnU+G6rXAgVGjhu50nIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ07hu5lpIFRo4bqldCBWxINuIFBow7JuZycsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcXXhuqduIMOhbycgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnxJDhu5MgR+G7lyBN4bu5IE5naOG7hycsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcXXhuqduIMOhbycgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnU+G6o24gUGjhuqltIEtodXnhur9uIE3huqFpJyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdT4bqjbiBQaOG6qW0gxJDDoyBYZW0nLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ8SQxqFuIGjDoG5nIMSRw6MgxJHhurd0JyxcclxuICAgIHJvb21zOiBbXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyBxdeG6p24gw6FvJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIHRyYW5nIMSRaeG7g20nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gZ2jhur8gcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIMSR4bqndSBnacaw4budbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0dpxrDhu51uZyB04bqnbmcnIH0sXHJcbiAgICAgIHsgcm9vbTogJ0Lhu5kgcGjDsm5nIG5n4bunJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdT4bqjbiBwaOG6qW0gYsOhbiBjaOG6oXknLFxyXG4gICAgcm9vbXM6IFtcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIG5n4bunJyB9LFxyXG4gICAgICB7IHJvb206ICdU4bunIHF14bqnbiDDoW8nIH0sXHJcbiAgICAgIHsgcm9vbTogJ0LDoG4gdHJhbmcgxJFp4buDbScgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiBnaOG6vyBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgxJHhuqd1IGdpxrDhu51uZycgfSxcclxuICAgICAgeyByb29tOiAnR2nGsOG7nW5nIHThuqduZycgfSxcclxuICAgICAgeyByb29tOiAnQuG7mSBwaMOybmcgbmfhu6cnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1PhuqNuIHBo4bqpbSBt4bubaScsXHJcbiAgICByb29tczogW1xyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgbmfhu6cnIH0sXHJcbiAgICAgIHsgcm9vbTogJ1Thu6cgcXXhuqduIMOhbycgfSxcclxuICAgICAgeyByb29tOiAnQsOgbiB0cmFuZyDEkWnhu4NtJyB9LFxyXG4gICAgICB7IHJvb206ICdCw6BuIGdo4bq/IHBow7JuZyBuZ+G7pycgfSxcclxuICAgICAgeyByb29tOiAnVOG7pyDEkeG6p3UgZ2nGsOG7nW5nJyB9LFxyXG4gICAgICB7IHJvb206ICdHacaw4budbmcgdOG6p25nJyB9LFxyXG4gICAgICB7IHJvb206ICdC4buZIHBow7JuZyBuZ+G7pycgfSxcclxuICAgIF1cclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgcHJvZHVjdHMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL3d3dy5uaGFkZXBraWVudHJ1Yy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDYvdHUtcXVhbi1hby1nby1kZXAtMDEuanBnJyxcclxuICAgIHRpdGxlOiAnVOG7pyBxdeG6p24gw6FvIMSR4bq5cC0gVFFBMDk5JyxcclxuICAgIG1vbmV5T2xkOiA1MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDQ1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vZGllbm1heWNob2xvbi52bi9wdWJsaWMvdXNlcnVwbG9hZC9pbWFnZXMva2UlMjB0aXZpJTIwZ28lMjBjYW8lMjBjYXAucG5nJyxcclxuICAgIHRpdGxlOiAnS+G7hyBUaXZpIHBow7JuZyBraMOhY2gnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTAwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9kaWVubWF5Y2hvbG9uLnZuL3B1YmxpYy91c2VydXBsb2FkL2ltYWdlcy9rZSUyMHRpdmklMjBnbyUyMGNhbyUyMGNhcC5wbmcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgZ+G7lyB04buxIG5oacOqbiAtIEdOQ0QwMScsXHJcbiAgICBtb25leU9sZDogMzAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAyMDAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL25vaXRoYXR0aGFpYmluaC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvZ2l1b25nLW5ndS1nby1nby1kby05NjU2LmpwZycsXHJcbiAgICB0aXRsZTogJ0dpxrDhu51uZyBuZ+G7pyB0aOG7nWkgdHJhbmcgLSBHMDAzJyxcclxuICAgIG1vbmV5T2xkOiA0NTAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDM1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vcGhvZ292aXAudm4vdXBsb2Fkcy9uZXdzLzIwMTdfMTIvZ2l1b25nLW5ndS1nby10dS1uaGllbi00LWNvcHkuanBnJyxcclxuICAgIHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIGhp4buHbiDEkeG6oWkgLSBHTjAwMycsXHJcbiAgICBtb25leU9sZDogNDAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAzNTAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL25vaXRoYXRpaG91c2UuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzExL08xQ04wMVppdWo4RjF5U2xzRldYdm55XzI3MzYwMTY1LmpwZycsXHJcbiAgICB0aXRsZTogJ0vhu4cgVGl2aSBwaMOybmcga2jDoWNoJyxcclxuICAgIG1vbmV5T2xkOiA2MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDUwMDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdGlob3VzZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvTzFDTjAxWml1ajhGMXlTbHNGV1h2bnlfMjczNjAxNjUuanBnJyxcclxuICAgIHRpdGxlOiAnQsOgbiDEg24gNiBnaOG6vyAtIEJBMDAxJyxcclxuICAgIG1vbmV5T2xkOiA0MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDMwMDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vd3d3Lm5oYWRlcGtpZW50cnVjLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi90dS1xdWFuLWFvLWdvLWRlcC0wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICdCw6BuIMSDbiBn4buXIG5o4bqtcCBraOG6qXUgLSBCQTAwMicsXHJcbiAgICBtb25leU9sZDogMzUwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAzMDAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL3d3dy5uaGFkZXBraWVudHJ1Yy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDYvdHUtcXVhbi1hby1nby1kZXAtMDEuanBnJyxcclxuICAgIHRpdGxlOiAnVOG7pyBxdeG6p24gw6FvIMSR4bq5cC0gVFFBMDk5JyxcclxuICAgIG1vbmV5T2xkOiA0MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDM1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vZGllbm1heWNob2xvbi52bi9wdWJsaWMvdXNlcnVwbG9hZC9pbWFnZXMva2UlMjB0aXZpJTIwZ28lMjBjYW8lMjBjYXAucG5nJyxcclxuICAgIHRpdGxlOiAnS+G7hyBUaXZpIHBow7JuZyBraMOhY2gnLFxyXG4gICAgbW9uZXlPbGQ6IDYwMDAwMDAsXHJcbiAgICBtb25leU5ldzogNTAwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0dGhhaWJpbmguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2dpdW9uZy1uZ3UtZ28tZ28tZG8tOTY1Ni5qcGcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgY+G7lSDEkWnhu4NuIC0gR05DRDAxJyxcclxuICAgIG1vbmV5T2xkOiA2MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDU1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdHRoYWliaW5oLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9naXVvbmctbmd1LWdvLWdvLWRvLTk2NTYuanBnJyxcclxuICAgIHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIHRo4budaSB0cmFuZyAtIEcwMDMnLFxyXG4gICAgbW9uZXlPbGQ6IDQ1MDAwMDAsXHJcbiAgICBtb25leU5ldzogMzUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9ub2l0aGF0dGhhaWJpbmguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2dpdW9uZy1uZ3UtZ28tZ28tZG8tOTY1Ni5qcGcnLFxyXG4gICAgdGl0bGU6ICdHacaw4budbmcgbmfhu6cgY+G7lSDEkWnhu4NuIC0gR05DRDAxJyxcclxuICAgIG1vbmV5T2xkOiA2MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDU1MDAwMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vbm9pdGhhdHRoYWliaW5oLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9naXVvbmctbmd1LWdvLWdvLWRvLTk2NTYuanBnJyxcclxuICAgIHRpdGxlOiAnR2nGsOG7nW5nIG5n4bunIHRo4budaSB0cmFuZyAtIEcwMDMnLFxyXG4gICAgbW9uZXlPbGQ6IDQ1MDAwMDAsXHJcbiAgICBtb25leU5ldzogMzUwMDAwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly93d3cubmhhZGVwa2llbnRydWMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA2L3R1LXF1YW4tYW8tZ28tZGVwLTAxLmpwZycsXHJcbiAgICB0aXRsZTogJ1Thu6cgcXXhuqduIMOhbyDEkeG6uXAtIFRRQTA5OScsXHJcbiAgICBtb25leU9sZDogNDAwMDAwMCxcclxuICAgIG1vbmV5TmV3OiAzNTAwMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL2RpZW5tYXljaG9sb24udm4vcHVibGljL3VzZXJ1cGxvYWQvaW1hZ2VzL2tlJTIwdGl2aSUyMGdvJTIwY2FvJTIwY2FwLnBuZycsXHJcbiAgICB0aXRsZTogJ0vhu4cgVGl2aSBwaMOybmcga2jDoWNoJyxcclxuICAgIG1vbmV5T2xkOiA2MDAwMDAwLFxyXG4gICAgbW9uZXlOZXc6IDUwMDAwMDAsXHJcbiAgfSxcclxuXTtcclxuXHJcblxyXG5leHBvcnQge1xyXG4gIG1haW5VUkwsXHJcbiAgdXBncmFkZVBsYW5VUkwsXHJcbiAgdXBncmFkZUljb25VUkwsXHJcbiAgbG9nb1VSTCxcclxuICBhcGlCYXNlVVJMLFxyXG4gIGFwaUdyYXBoUUxVUkwsXHJcbiAgZ29vZ2xlTG9naW4sXHJcbiAgemFsb0xvZ2luLFxyXG4gIGZhY2Vib29rTG9naW4sXHJcbiAgdXJsSW1hZ2VBZFNlbGxMZWFzZSxcclxuICB1cmxJbWFnZUJyb2tlcixcclxuICB1cmxJbWFnZVByb2plY3QsXHJcbiAgaW1hZ2VEZWZhdWx0QnJva2VyLFxyXG4gIGltYWdlRGVmYXVsdFByb2plY3QsXHJcbiAgaW1hZ2VEZWZhdWx0U2xpZGVyLFxyXG4gIGdvb2dsZUFuYWx5dGljc0NvZGUsXHJcbiAgZ29vZ2xlU2VhcmNoQ29uc29sZSxcclxuICBsb2NhbFN0b3JhZ2VDb21wYXJlS2V5LFxyXG4gIGFkU2VsbExlYXNlVHlwZSxcclxuICBsb2NhbFN0b3JhZ2VWaWV3ZWQsXHJcbiAgbG9jYWxTdG9yYWdlUHJvamVjdFZpZXdlZCxcclxuICBhZFNlbGxMZWFzZUNhdGVnb3J5LFxyXG4gIHRpdGxlcyxcclxuICBsaXN0TWVudSxcclxuICBwcm9kdWN0cyxcclxufTtcclxuIiwiY29uc3QgaXNCbGFuayA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAwIHx8IHZhbHVlID09PSAnJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgKHZhbHVlLmxlbmd0aCA8PSAwIHx8IHZhbHVlLnRyaW0oKS5sZW5ndGggPD0gMCkpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICByZXR1cm4gaXNFbXB0eSh2YWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBpc0VtcHR5ID0gKG9iajogYW55KSA9PiB7XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuY29uc3QgaXNOdW1iZXIgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmIChpc0JsYW5rKHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSk7XHJcbn07XHJcblxyXG5jb25zdCBpc0VtYWlsID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICBpZiAoaXNCbGFuayh2YWx1ZSkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgbGV0IGVtYWlsID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgcmV0dXJuIGVtYWlsLnRlc3QodmFsdWUpO1xyXG59O1xyXG5cclxuY29uc3QgaXNTbHVnID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICBpZiAoaXNCbGFuayh2YWx1ZSkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgbGV0IHNsdWcgPSAvXltBLVphLXowLTldKyg/Oi1bQS1aYS16MC05XSspKiQvXHJcbiAgcmV0dXJuIHNsdWcudGVzdCh2YWx1ZSk7XHJcbn07XHJcblxyXG5jb25zdCBpc1VybCA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKGlzQmxhbmsodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGxldCByZWdleHAgPSAvXig/Oig/Omh0dHBzP3xmdHApOlxcL1xcLyk/KD86KD8hKD86MTB8MTI3KSg/OlxcLlxcZHsxLDN9KXszfSkoPyEoPzoxNjlcXC4yNTR8MTkyXFwuMTY4KSg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16XFx1MDBhMS1cXHVmZmZmMC05XS0qKSpbYS16XFx1MDBhMS1cXHVmZmZmMC05XSspKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSooPzpcXC4oPzpbYS16XFx1MDBhMS1cXHVmZmZmXXsyLH0pKSkoPzo6XFxkezIsNX0pPyg/OlxcL1xcUyopPyQvO1xyXG4gIHJldHVybiByZWdleHAudGVzdCh2YWx1ZSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaXNCbGFuayxcclxuICBpc0VtYWlsLFxyXG4gIGlzRW1wdHksXHJcbiAgaXNOdW1iZXIsXHJcbiAgaXNVcmwsXHJcbiAgaXNTbHVnXHJcbn07XHJcbiIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL0ltcG9ydCBDb21wb25lbnRzXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IFNlYXJjaEhvbWVwYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL0luZGV4L1NlYXJjaEhvbWVwYWdlXCI7XHJcbmltcG9ydCBDb250ZW50TWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0NvbnRlbk1lbnVcIjtcclxuaW1wb3J0IFRpdGxlQmxvY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5kZXgvVGl0bGVCbG9ja1wiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgU2VhcmNoS2V5d29yZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2gvS2V5d29yZFNsaWRlXCI7XHJcbmltcG9ydCBIb3RMb2NhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmRleC9Ib3RMb2NhdGlvblwiO1xyXG5pbXBvcnQgTmV3c0luZGV4IGZyb20gXCIuLi9jb21wb25lbnRzL0luZGV4L05ld3NJbmRleFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIFR5cG9ncmFwaHksIEljb24sIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBBZFNlbGxMZWFzZUluZGV4IGZyb20gJy4uL2NvbXBvbmVudHMvSW5kZXgvQWRTZWxsTGVhc2VJbmRleCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGxvY2FsU3RvcmFnZVZpZXdlZCwgbWFpblVSTCwgbG9jYWxTdG9yYWdlUHJvamVjdFZpZXdlZCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaW5kZXhQYWdlU3R5bGUgfSBmcm9tICcuLi9zdHlsZS9JbmRleFBhZ2UnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgV2hhdCBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvV2hhdCc7XHJcbmltcG9ydCBCdXR0b25WaWV3cyBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvQnV0dG9uVmlld3MnO1xyXG5pbXBvcnQgTmV3SG90IGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9OZXdIb3QnO1xyXG5pbXBvcnQgTGlzdFByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0xpc3RQcm9kdWN0JztcclxuaW1wb3J0IFBhcnRuZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9QYXJ0bmVyXCI7XHJcbmltcG9ydCBQb3BvdmVyRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcG92ZXIvSW5kZXhcIjtcclxuaW1wb3J0IExpc3RNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9MaXN0TWVudSc7XHJcbmltcG9ydCBHYW1lcGFkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR2FtZXBhZCc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0cyc7XHJcbmltcG9ydCBUaXRsZUJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy9QdWJsaWMvVGl0bGUnO1xyXG4vL0ltcG9ydCBTQ1NTXHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3NcIjtcclxuLy9JbXBvcnQgQ29uc3RcclxuaW1wb3J0IHsgYXBvbGxvQ2xpZW50IH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IEdFVF9BRF9TRUxMX0xFQVNFUywgSE9NRV9HRVRfQURfU0VMTF9MRUFTRVMsIEdFVF9BRF9TRUxMX0xFQVNFX1dJU0hfTElTVCB9IGZyb20gXCIuLi9ncmFwaHFsL2FkX3NlbGxfbGVhc2VzL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgR0VUX1BST0pFQ1RfTElTVCwgSE9NRV9HRVRfUFJPSkVDVF9MSVNUIH0gZnJvbSBcIi4uL2dyYXBocWwvcHJvamVjdC9xdWVyaWVzXCI7XHJcbi8vSW1wb3J0IE1vZHVsZVxyXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gXCIuLi9tb2R1bGVzL3ZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBBZFNlbGxMZWFzZXNMaXN0UHJvcHMsIFByb2plY3RMaXN0UHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VcIlxyXG5cclxuLy8gaW50ZXJmYWNlIERhdGFOZXdzUHJvcHMge1xyXG4vLyAgIHNsdWc6IHN0cmluZyxcclxuLy8gICBsaW5rOiBzdHJpbmcsXHJcbi8vICAgdGl0bGU6IHtcclxuLy8gICAgIHJlbmRlcmVkOiBzdHJpbmdcclxuLy8gICB9LFxyXG4vLyAgIGV4Y2VycHQ6IHtcclxuLy8gICAgIHJlbmRlcmVkOiBzdHJpbmdcclxuLy8gICB9LFxyXG4vLyAgIGZlYXR1cmVkX2ltYWdlX3VybDogc3RyaW5nLFxyXG4vLyAgIGRhdGU6IHN0cmluZ1xyXG4vLyB9XHJcblxyXG5jb25zdCBJbmRleFBhZ2UgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbZGF0YUFkU2VsbExlYXNlc1ZpZXdlZCwgc2V0RGF0YUFkU2VsbExlYXNlVmlld2VkXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGF0YVByb2plY3RWaWV3ZWQsIHNldERhdGFQcm9qZWN0Vmlld2VkXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGF0YUFkU2VsbExlYXNlV2lzaGxpc3QsIHNldERhdGFBZFNlbGxMZWFzZVdpc2hsaXN0XSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGF0YVByb2plY3QsIHNldERhdGFQcm9qZWN0XSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3RhdHVzTG9hZGluZ0FkU2VsbExlYXNlLCBzZXRTdGF0dXNMb2FkaW5nQWRTZWxsTGVhc2VdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2RhdGFOZXdzLCBzZXREYXRhTmV3c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3N0YXR1c0xvYWRpbmdQcm9qZWN0LCBzZXRTdGF0dXNMb2FkaW5nUHJvamVjdF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc3RhdHVzTG9hZGluZ05ld3MsIHNldFN0YXR1c0xvYWRpbmdOZXdzXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGxldCBuZXdzVXJsQXBpID0gJ2h0dHBzOi8vbmhhZGF0bW9pLm5ldC90aW4tdHVjL3dwLWpzb24vd3AvdjIvcG9zdHM/cGVyX3BhZ2U9OCc7XHJcbiAgY29uc3QgY2xhc3NlcyA9IGluZGV4UGFnZVN0eWxlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHZpZXdlZEl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VWaWV3ZWQpO1xyXG4gICAgaWYgKHZpZXdlZEl0ZW0gJiYgIVZhbGlkYXRvci5pc0JsYW5rKHZpZXdlZEl0ZW0pKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHZpZXdlZEl0ZW1PYmplY3QgPSBKU09OLnBhcnNlKHZpZXdlZEl0ZW0pO1xyXG4gICAgICAgIHNldERhdGFBZFNlbGxMZWFzZVZpZXdlZCh2aWV3ZWRJdGVtT2JqZWN0KTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgdmlld2VkUHJvamVjdEl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VQcm9qZWN0Vmlld2VkKTtcclxuICAgIGlmICh2aWV3ZWRQcm9qZWN0SXRlbSAmJiAhVmFsaWRhdG9yLmlzQmxhbmsodmlld2VkUHJvamVjdEl0ZW0pKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHZpZXdlZEl0ZW1PYmplY3QgPSBKU09OLnBhcnNlKHZpZXdlZFByb2plY3RJdGVtKTtcclxuICAgICAgICBzZXREYXRhUHJvamVjdFZpZXdlZCh2aWV3ZWRJdGVtT2JqZWN0KTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9HZXQgRGF0YSBOZXdzXHJcbiAgICBmZXRjaChuZXdzVXJsQXBpKVxyXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBzZXREYXRhTmV3cyhkYXRhKTtcclxuICAgICAgICBzZXRTdGF0dXNMb2FkaW5nTmV3cyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW3N0YXR1c01vZGFsLCBzZXRNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdXBkYXRlTW9kYWwgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICBzZXRNb2RhbChkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0cmFuc2FjdGlvbkhvdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFRpdGxlQmxvY2tcclxuICAgICAgICAgIHRpdGxlPVwiU+G6o24gcGjhuqltIHRoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQgaGnhu4duIMSR4bqhaVwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlThu5VuZyBo4bujcCBuaOG7r25nIG3huqt1IHRoaeG6v3Qga+G6vyBoaeG7h24gxJHhuqFpXCJcclxuICAgICAgICAgIHR5cGU9e1wiaDJcIn0gcGF0aD17XCIvZHUtYW4tYmF0LWRvbmctc2FuXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SG90TG9jYXRpb24gLz5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJJY29uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2ZpeGVkJywgYm90dG9tOiAzMCwgcmlnaHQ6IDMwIH19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YSB0aXRsZT1cIlRyw7IgY2h1eeG7h24gRmFjZWJvb2tcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIGhyZWY9XCJodHRwOi8vbS5tZS85MjU3OTAyMjQxNjQ4NTI/cmVmPXpvem92blwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vem96by52bi9wdWJsaWMvdGhlbWUvY2lyY2xlL2ltYWdlcy93aWRnZXRzL2ZibWVzc2VuZ2VyLnN2Z1wiIGFsdD1cImJ0bi1mYWNlYm9va1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxhIHRpdGxlPVwiQ2hhdCB24bubaSBjaMO6bmcgdMO0aSBxdWEgWmFsb1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCIgaHJlZj1cImh0dHBzOi8vemFsby5tZS8wMzc3NTM1NzE3XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly96b3pvLnZuL3B1YmxpYy90aGVtZS9jaXJjbGUvaW1hZ2VzL3dpZGdldHMvemFsby5zdmdcIiBhbHQ9XCJidG4temFsb1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxhIHRpdGxlPVwiR+G7jWkgbmdheVwiIGhyZWY9XCJ0ZWw6MDkzNjA2MjE2NlwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vem96by52bi9wdWJsaWMvdGhlbWUvY2lyY2xlL2ltYWdlcy93aWRnZXRzL2NhbGwuc3ZnXCIgYWx0PVwiYnRuLWNhbGxub3dcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsZXQgcGFnZVRpdGxlID0gJ07hu5lpIHRo4bqldCBEb2RvJztcclxuICBsZXQgcGFnZURlc2NyaXB0aW9uID0gJ07hu5lpIHRo4bqldCBEb2RvIMSRw7NuIMSR4bqndSB4dSBoxrDhu5tuZyc7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRcclxuICAgICAgdGl0bGU9e3BhZ2VUaXRsZX1cclxuICAgICAgZGVzY3JpcHRpb249e3BhZ2VEZXNjcmlwdGlvbn1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBzdGF0dXNNb2RhbD17c3RhdHVzTW9kYWx9XHJcbiAgICAgIHVwZGF0ZU1vZGFsPXt1cGRhdGVNb2RhbH1cclxuICAgICAgY2Fub25pY2FsPXttYWluVVJMfVxyXG4gICAgICBwYXRoPXsnJ31cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgIDxMaXN0TWVudSAvPlxyXG4gICAgICAgICAgPE5ld0hvdCAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICAgIDxTZWFyY2hIb21lcGFnZSAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCAwJyB9fT5cclxuICAgICAgICAgICAgPFdoYXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvblZpZXdzIC8+XHJcbiAgICAgICAgICA8VGl0bGVCYXNlIHRpdGxlPXsnU+G6o24gcGjhuqltIGLDoW4gY2jhuqF5J30gLz5cclxuICAgICAgICAgIDxQcm9kdWN0IC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+PC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlfY29udGFpbmVyXCI+XHJcbiAgICAgICAgey8qIFPhuqNuIHBo4bqpbSDEkcOjIHhlbSAqL31cclxuICAgICAgICB7LyogU+G6o24gcGjhuqltIGLhuqFuIHRow61jaCAqL31cclxuICAgICAgICB7LyogU+G6o24gcGjhuqltIEhPVCAqL31cclxuICAgICAgICB7Lyoge3Byb2plY3RXYWh0Y2hlZCgpfSAqL31cclxuICAgICAgICB7dHJhbnNhY3Rpb25Ib3QoKX1cclxuICAgICAgICB7LyogVGluIHThu6ljICB04buVbmcgaOG7o3AgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UGFydG5lciAvPlxyXG4gICAgICA8U2VhcmNoS2V5d29yZCAvPlxyXG4gICAgICA8TGlzdFByb2R1Y3QgLz5cclxuICAgICAge3JlbmRlckljb24oKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2JhZC1kZDYzNWMzZjM5ZTQwMjc3NTczNTEzODQ2MzE1OWIwNS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbG9naW4tOGI0MWMzNmUyZjRhMjA0NDc0Njc1NDcyN2U0ZTI1ZjQucG5nXCI7IiwiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUsIG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBpbmRleFBhZ2VTdHlsZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIHdpZHRoOiAnMzAwcHgnLFxyXG4gICAgICAgIGZsb2F0OiAnbGVmdCcsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBwYWRkaW5nOiAnMCAzMHB4JyxcclxuICAgICAgICAvLyBAaW5jbHVkZSBicmVha3BvaW50KG1kRG93bikge1xyXG4gICAgICAgIC8vICAgcGFkZGluZzogJzAgMjBweCcsXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnJGZvbnRGYW1pbHknLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnOTAwJyxcclxuICAgICAgICAgICAgbWFyZ2luOiAnLTE1cHggMCAzMHB4IDAnLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNhYWEnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTBweCAxNXB4IWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjZTZlNmU2JyxcclxuICAgICAgICAgICAgLy8gICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6ICcjZjBmMGYwJyxcclxuICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBpbmRleFBhZ2VTdHlsZSxcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGVCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3Jvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3dpdGhXaWR0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEcm9wRG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEcm9wVXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9EcmFmdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Vjb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRW1haWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0dhbWVwYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0h0dHBzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbmZvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlQmVmb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZU5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lSXBob25lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlbmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJSYXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9WaWV3TGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vd2wtY2Fyb3VzZWwyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4LWkxOG5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=