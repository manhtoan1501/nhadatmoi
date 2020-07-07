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

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Chat/Index.tsx":
/*!***********************************!*\
  !*** ./components/Chat/Index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Popper */ "@material-ui/core/Popper");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/AddCircleOutline */ "@material-ui/icons/AddCircleOutline");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_TagFaces__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/TagFaces */ "@material-ui/icons/TagFaces");
/* harmony import */ var _material_ui_icons_TagFaces__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TagFaces__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Send */ "@material-ui/icons/Send");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constant */ "./components/Chat/constant.tsx");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jss-rtl */ "jss-rtl");
/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jss_rtl__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! cross-fetch/polyfill */ "cross-fetch/polyfill");
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../utils */ "./utils/index.ts");
/* harmony import */ var _graphql_chat_mutation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../graphql/chat/mutation */ "./graphql/chat/mutation/index.ts");
/* harmony import */ var _graphql_chat_queries__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../graphql/chat/queries */ "./graphql/chat/queries/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! moment/locale/es */ "moment/locale/es");
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(moment_locale_es__WEBPACK_IMPORTED_MODULE_26__);



var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Chat\\Index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






















const client = axios__WEBPACK_IMPORTED_MODULE_18___default.a.create({
  baseURL: _constants__WEBPACK_IMPORTED_MODULE_19__["apiBaseURL"],
  timeout: 30000
});


moment__WEBPACK_IMPORTED_MODULE_25___default.a.locale('vi'); // @ts-ignore


const jss = Object(jss__WEBPACK_IMPORTED_MODULE_16__["create"])({
  plugins: [...Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["jssPreset"])().plugins, jss_rtl__WEBPACK_IMPORTED_MODULE_17___default()()]
});

function BootstrapTooltip(props) {
  const classes = Object(_constant__WEBPACK_IMPORTED_MODULE_15__["useStylesBootstrap"])();
  return __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_21___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    arrow: true,
    classes: classes
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }));
}

;
;
;
;
;
[];

const Chat = props => {
  const classes = Object(_constant__WEBPACK_IMPORTED_MODULE_15__["useStyles"])();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false);
  const [placement, setPlacement] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState();
  const [internet, setInternet] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(true);
  const [texting, setTexting] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false);
  const [giphyData, setGiphyData] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState();
  const [openEmojiGiphy, setOpenEmojiGiphy] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false);
  const [valueSearchGiphy, setValueSearchGiphy] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState("");
  const [avatarImage, setAvatarImage] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState("https://image.crisp.chat/avatar/operator/da8d4459-5ea3-4119-bca1-9170f49ee69c/240/?1585999578742&quot");
  let [valueInput, setValueInput] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState("");
  const [viewEmoji, setViewEmoji] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false);
  const [reload, setReload] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(true);
  const [checkLogin, setCheckLogin] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(true);
  const [userId, setUserId] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState("");
  const [conversations, setConversations] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState();
  const [conversation, setConversation] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState();
  const [chat, setChat] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]);
  const [name, setName] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState("");
  const [last_activity, setLastActivity] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState("");
  const [chatId, setChatId] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState("");

  const onCloseChat = () => {
    setOpenEmojiGiphy(false);
    setOpen(false);
  };

  const checkUserLogin = () => {
    if (props.userLogin) {
      setCheckLogin(true);
    } else {
      setCheckLogin(false);
    }
  };

  const sendMessageChat = async (value, url) => {
    chat.push({
      id: chatId,
      send_user_id: props.userLogin,
      message: {
        text: value,
        attachment: {
          type: "",
          payload: {
            url: url
          }
        }
      },
      status_check: 0,
      send_at: String(new Date().getTime()),
      read_at: String(new Date().getTime())
    });
    setChat(chat);
    _utils__WEBPACK_IMPORTED_MODULE_22__["apolloClient"].mutate({
      mutation: _graphql_chat_mutation__WEBPACK_IMPORTED_MODULE_23__["CREATE_MESSAGE"],
      variables: {
        "input": {
          "target": userId,
          "message": {
            "text": `${value}`,
            "attachment": {
              "type": "",
              "payload": {
                "url": `${url}`
              }
            }
          }
        }
      }
    }).then(response => {});
    setReload(!reload);
    setValueInput("");
    setScrollTo();
  };

  const renderHeader = () => {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
      className: classes.header,
      avatar: __jsx(_constant__WEBPACK_IMPORTED_MODULE_15__["StyledBadge"], {
        overlap: "circle",
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        },
        variant: "standard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: undefined
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
        src: avatarImage,
        className: classes.sizeAvatarSmall,
        alt: "nhadatmoi.net",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: undefined
      })),
      title: name,
      subheader: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        variant: "caption",
        align: "center",
        className: classes.timeWork,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: undefined
      }, "Ho\u1EA1t \u0111\u1ED9ng: ", moment__WEBPACK_IMPORTED_MODULE_25___default()(Number(last_activity)).format('DD/MM/YYYY')),
      action: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
        color: "inherit",
        "aria-label": "settings",
        onClick: () => onCloseChat(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: undefined
      }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: undefined
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: undefined
    }));
  };

  const searchGiphy = async event => {
    setValueSearchGiphy(event.target.value);
    let url = `https://api.giphy.com/v1/gifs/search?api_key=UgTMyvovmg74m8fPN6qYiB623nwS1IPc&q=${event.target.value}&limit=20&offset=0&rating=G&lang=vi`.then(function (response) {
      setGiphyData(response.data.data);
    });
  };

  let dataSearch = [];

  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(giphyData)) {
    giphyData.map((item, index) => {
      dataSearch.push({
        image: {
          url: item.images.fixed_width.url,
          height: item.images.fixed_width.height,
          width: item.images.fixed_width.width
        }
      });
    });
  }

  ; // Gửi ảnh emoji giphy 

  const setItemGiphy = (index, name) => {
    setOpenEmojiGiphy(!openEmojiGiphy);

    if (name == "giphyDefault") {
      sendMessageChat("", _constant__WEBPACK_IMPORTED_MODULE_15__["giphyDefault"][index].image.url);
    } else if (name == "dataSearch") {
      sendMessageChat("", dataSearch[index].image.url);
    }
  };

  const onClickEmoji = index => {
    valueInput = valueInput + _constant__WEBPACK_IMPORTED_MODULE_15__["dataEmoji"][index].native;
    setValueInput(valueInput);
  };

  const renderEmoji = () => {
    return __jsx("div", {
      className: classes.overflowHeightEmoji,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: undefined
    }, _constant__WEBPACK_IMPORTED_MODULE_15__["dataEmoji"].map((item, index) => {
      return __jsx("div", {
        onClick: () => onClickEmoji(index),
        key: index,
        className: classes.itemEmoji,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: undefined
      }, item.native);
    }));
  };

  const renderGiphy = () => {
    return __jsx("div", {
      className: classes.viewWidthGiphy,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: undefined
    }, __jsx("div", {
      className: classes.searchGiphy,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: undefined
    }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.sizeSearchIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: undefined
    }), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
      theme: _constant__WEBPACK_IMPORTED_MODULE_15__["themeInputBase"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputBase"], {
      onChange: e => searchGiphy(e),
      className: classes.inputBaseGiphy,
      placeholder: "T\xECm ki\u1EBFm ...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: undefined
    }))), __jsx("div", {
      className: classes.viewSizeGiphy,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: undefined
    }, valueSearchGiphy ? dataSearch.map((item, index) => {
      return __jsx("div", {
        className: classes.itemGiphy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: undefined
      }, __jsx("img", {
        className: classes.imgListGiphy,
        alt: "giphy",
        src: item.image.url,
        onClick: () => setItemGiphy(index, "dataSearch"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: undefined
      }));
    }) : _constant__WEBPACK_IMPORTED_MODULE_15__["giphyDefault"].map((item, index) => {
      // view giphy default
      return __jsx("div", {
        className: classes.itemGiphy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: undefined
      }, __jsx("img", {
        className: classes.imgListGiphy,
        alt: "giphy",
        src: item.image.url,
        onClick: () => setItemGiphy(index, "giphyDefault"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: undefined
      }));
    })));
  };

  const renderEmojiGiphy = () => {
    return __jsx("div", {
      className: classes.emojiGiphy,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      },
      __self: undefined
    }, __jsx("div", {
      className: classes.marinButtonEmojiGiphy,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: undefined
    }, __jsx("button", {
      className: classes.buttonEmojiGiphy,
      onClick: () => setViewEmoji(true),
      style: {
        backgroundColor: !viewEmoji ? "#aaa" : ""
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: undefined
    }, " Bi\u1EC3u t\u01B0\u1EE3ng"), __jsx("button", {
      className: classes.buttonEmojiGiphy,
      onClick: () => setViewEmoji(false),
      style: {
        backgroundColor: viewEmoji ? "#aaa" : ""
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: undefined
    }, " \u1EA2nh \u0111\u1ED9ng")), viewEmoji ? renderEmoji() : renderGiphy());
  };

  const getConversations = async () => {
    let response = await _utils__WEBPACK_IMPORTED_MODULE_22__["apolloClient"].query({
      query: _graphql_chat_queries__WEBPACK_IMPORTED_MODULE_24__["GET_LIST_MESSAGE"],
      variables: {
        "page": 1,
        "limit": 5
      }
    }).then(response => {
      let conversations = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(response, "data.conversations", {});

      if (conversations) {
        setConversations(conversations);
      }
    });
  };

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(() => {
    checkUserLogin();
    getConversations();
  }, []);

  const renderImage = (send_at, url, role) => {
    return __jsx("div", {
      className: role === 'take' ? classes.viewContentImageTake : classes.viewContentImageSend,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: undefined
    }, __jsx(BootstrapTooltip, {
      title: moment__WEBPACK_IMPORTED_MODULE_25___default()(Number(send_at)).fromNow(),
      placement: "top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355
      },
      __self: undefined
    }, __jsx("img", {
      src: url,
      className: classes.imgGiphy,
      alt: "giphy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: undefined
    })));
  };

  const renderTextField = (send_at, text, role) => {
    return __jsx(BootstrapTooltip, {
      title: moment__WEBPACK_IMPORTED_MODULE_25___default()(Number(send_at)).fromNow(),
      placement: "top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: undefined
    }, __jsx("div", {
      className: role == "take" ? classes.viewTextTake : classes.viewTextSend,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: undefined
    }, text.trim()));
  };

  const renderText = (send_at, text, role) => {
    if (role === 'take') {
      return renderTextField(send_at, text, role);
    }

    return __jsx("div", {
      className: classes.textFieldUserChatContent,
      dir: `${text.length < 45 ? 'rtl' : ""}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: undefined
    }, renderTextField(send_at, text, role));
  };

  const renderConversation = () => {
    let created_at = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(conversation, "created_at", "");

    return __jsx("div", {
      className: openEmojiGiphy ? classes.openEG : classes.overflowHeightEG,
      style: {
        height: openEmojiGiphy ? "230px" : "430px"
      },
      id: 'ContainerElementID',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386
      },
      __self: undefined
    }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Element"], {
      name: "myScrollToElement",
      id: "test_ndm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
      align: "center",
      className: classes.textSizeNewDate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388
      },
      __self: undefined
    }, " ", moment__WEBPACK_IMPORTED_MODULE_25___default()(Number(created_at)).format('LLL'), " "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389
      },
      __self: undefined
    }), _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(chat) ? chat.map((element, count) => {
      let checkNewDate = false;
      let oldDate = count > 0 ? moment__WEBPACK_IMPORTED_MODULE_25___default()(Number(chat[count - 1].send_at)).format('YYYY-MM-DD') : '';
      let newDate = moment__WEBPACK_IMPORTED_MODULE_25___default()(Number(chat[count].send_at)).format('YYYY-MM-DD');

      if (count > 0 && oldDate !== newDate) {
        checkNewDate = true;
      }

      let url = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(element, "message.attachment.payload.url", "");

      let text = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(element, "message.text", "");

      let send_user_id = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(element, "send_user_id", "");

      let send_at = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(element, "send_at", "");

      let setViewAvatar = send_user_id == props.userLogin ? true : false;
      return __jsx("div", {
        key: count,
        style: {
          display: "block"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: undefined
      }, checkNewDate && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        align: "center",
        className: classes.textSizeNewDate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: undefined
      }, moment__WEBPACK_IMPORTED_MODULE_25___default()(Number(send_at)).format("LLL"), " ", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: undefined
      })), send_user_id !== props.userLogin ? __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
        theme: _constant__WEBPACK_IMPORTED_MODULE_15__["themeTextFieldAdmin"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: undefined
      }, __jsx("div", {
        className: classes.viewAvatarChatContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: undefined
      }, setViewAvatar && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
        className: classes.avatarAdminText,
        alt: "nhadatmoi.net",
        src: avatarImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: undefined
      })), __jsx("div", {
        className: classes.textFieldChatContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: undefined
      }, url ? renderImage(send_at, url, "take") : renderText(send_at, text, "take"))) : __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
        theme: _constant__WEBPACK_IMPORTED_MODULE_15__["themeTextFieldUser"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: undefined
      }, url ? renderImage(send_at, url, "send") : renderText(send_at, text, "send")), __jsx("div", {
        className: classes.clearFloat,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: undefined
      }));
    }) : "", __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424
      },
      __self: undefined
    }, !internet && __jsx("p", {
      className: classes.errInternet,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425
      },
      __self: undefined
    }, __jsx("u", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425
      },
      __self: undefined
    }, "Kh\xF4ng th\u1EC3 g\u1EEDi tin nh\u1EAFn n\xE0y. Ki\u1EC3m tra k\u1EBFt n\u1ED1i internet v\xE0 th\u1EED l\u1EA1i"))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427
      },
      __self: undefined
    }, " ", texting && __jsx("p", {
      className: classes.texting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427
      },
      __self: undefined
    }, "\u0110ang nh\u1EADp ..."))));
  };

  const onClickOpenEmojiGiphy = () => {
    setOpenEmojiGiphy(!openEmojiGiphy);
    setViewEmoji(true);
  };

  const apiBaseURL = "https://graph.nhadatmoi.net";
  const apiUpload = `${apiBaseURL}/private_upload_image_app`;

  const api = (method, url, data) => client.request({
    data: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method,
    url,
    withCredentials: true
  }).then(response => response.data);

  const upLoadImage = files => {
    const reader = new FileReader();
    let file = files.target.files[0];
    reader.readAsDataURL(file);

    reader.onload = () => {
      api("POST", `${apiUpload}`, {
        base64_image: reader.result,
        fileName: new Date().getTime() + "" + file.name,
        typeUpload: "ad_sell_lease"
      }).then(function (res) {
        sendMessageChat("", res.location);
      }).catch(function (err) {
        alert('HTTP Error: ' + err.message);
      });
    };
  };

  const setOnKeyDown = event => {
    if (event.keyCode == 13) {
      sendMessageChat(valueInput, "");
      setValueInput("");
      setScrollTo();
    }
  };

  const setScrollTo = () => {
    let heightChatDiv = 0;
    let elm = document.getElementById("test_ndm");

    if (elm) {
      heightChatDiv = elm.offsetHeight;
    }

    react_scroll__WEBPACK_IMPORTED_MODULE_6__["scroller"].scrollTo('myScrollToElement', {
      duration: 500,
      delay: 100,
      smooth: true,
      containerId: 'ContainerElementID',
      offset: heightChatDiv
    });
  };

  const setChangeInput = value => {
    setValueInput(value);
  };

  const renderInput = () => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Paper"], {
      component: "form",
      className: classes.inputBase,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500
      },
      __self: undefined
    }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
      theme: _constant__WEBPACK_IMPORTED_MODULE_15__["themeInput"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Input"], {
      fullWidth: true,
      disabled: !internet,
      className: classes.inputText,
      margin: "dense",
      id: "outlined-basic",
      autoFocus: true,
      value: valueInput,
      multiline: true,
      onChange: e => setChangeInput(e.target.value),
      onKeyDown: e => setOnKeyDown(e),
      placeholder: "Nh\u1EADp tin nh\u1EAFn ...",
      autoComplete: "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502
      },
      __self: undefined
    }), openEmojiGiphy ? __jsx(BootstrapTooltip, {
      title: "Ch\xE8n bi\u1EC3u t\u01B0\u1EE3ng",
      placement: "top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517
      },
      __self: undefined
    }, __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12___default.a, {
      className: classes.sizeIcon,
      onClick: onClickOpenEmojiGiphy,
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 518
      },
      __self: undefined
    })) : __jsx(BootstrapTooltip, {
      title: "Ch\xE8n bi\u1EC3u t\u01B0\u1EE3ng",
      placement: "top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 520
      },
      __self: undefined
    }, __jsx(_material_ui_icons_TagFaces__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: classes.sizeIcon,
      onClick: onClickOpenEmojiGiphy,
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 521
      },
      __self: undefined
    })), valueInput ? __jsx(BootstrapTooltip, {
      title: "G\u1EEDi tin nh\u1EAFn",
      placement: "top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525
      },
      __self: undefined
    }, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_14___default.a, {
      onClick: () => sendMessageChat(valueInput, ""),
      className: classes.sizeIcon,
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526
      },
      __self: undefined
    })) : __jsx(BootstrapTooltip, {
      title: "Th\xEAm t\u1EADp tin",
      placement: "top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528
      },
      __self: undefined
    }, __jsx("div", {
      className: classes.inputWrapper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529
      },
      __self: undefined
    }, __jsx(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: classes.sizeIcon,
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530
      },
      __self: undefined
    }), __jsx("input", {
      type: "file",
      className: classes.fileInput,
      onChange: upLoadImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531
      },
      __self: undefined
    })))));
  };

  const viewChat = () => {
    let openChat = open && checkLogin ? true : false;
    return __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_4___default.a, {
      open: openChat,
      placement: placement,
      transition: true,
      className: classes.viewChatImpostant,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543
      },
      __self: undefined
    }, ({
      TransitionProps
    }) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Fade"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, TransitionProps, {
      timeout: 300,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545
      },
      __self: undefined
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Paper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546
      },
      __self: undefined
    }, __jsx("div", {
      className: classes.viewChat,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547
      },
      __self: undefined
    }, renderHeader(), renderConversation(), openEmojiGiphy && renderEmojiGiphy(), renderInput()))));
  };

  const handleClick = newPlacement => {
    setOpen(true);
    setPlacement(newPlacement);
  };

  const getConversation = async conversationId => {
    let conversation = await _utils__WEBPACK_IMPORTED_MODULE_22__["apolloClient"].query({
      query: _graphql_chat_queries__WEBPACK_IMPORTED_MODULE_24__["GET_MESSAGE_BY_ID"],
      variables: {
        "id": conversationId
      }
    }).then(response => {
      let conversation = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(response, "data.conversation", {});

      return conversation;
    });

    let chat = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(conversation, "chat", []);

    let avatar = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(conversation, "target.avatar", "");

    let userId = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(conversation, "target.id", "");

    let name = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(conversation, "target.first_name", "") + lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(conversation, "target.last_name", "");

    let last_activity = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(conversation, "target.last_activity", "");

    setChat(chat);
    setAvatarImage(avatar);
    setChatId(conversationId);
    setUserId(userId);
    setName(name);
    setLastActivity(last_activity);
    setConversation(conversation);
  };

  const renderListAvatar = (item, index, numberView) => {
    let avatar = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(item, "node.target.avatar", "");

    let name = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(item, "node.target.first_name", "") + lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(item, "node.target.last_name", "");

    let id = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(item, "node.target.id", "");

    let status = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(item, "node.target.status", "");

    let conversationId = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(item, "node.id", "");

    if (index < numberView) {
      return __jsx("div", {
        key: index,
        style: {
          bottom: `${index * 65 + 80}px`
        },
        className: id === userId ? classes.renderAvatarBorderRadius : classes.renderAvatar,
        onClick: () => getConversation(conversationId),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        },
        __self: undefined
      }, __jsx(BootstrapTooltip, {
        title: name,
        placement: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600
        },
        __self: undefined
      }, __jsx(_constant__WEBPACK_IMPORTED_MODULE_15__["StyledBadge"], {
        overlap: "circle",
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        },
        variant: status == "offline" ? "standard" : "dot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601
        },
        __self: undefined
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
        src: avatar,
        onClick: () => handleClick("top-start"),
        className: classes.large,
        alt: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606
        },
        __self: undefined
      }))));
    }
  };

  const listAvatar = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(conversations, 'edges', []) || [];
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623
    },
    __self: undefined
  }, viewChat(), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    container: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Hidden"], {
    xsDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627
    },
    __self: undefined
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(listAvatar) && listAvatar.map((item, index) => {
    return renderListAvatar(item, index, 5);
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Hidden"], {
    smUp: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634
    },
    __self: undefined
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(listAvatar) && listAvatar.map((item, index) => {
    return renderListAvatar(item, index, 1);
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./components/Chat/constant.tsx":
/*!**************************************!*\
  !*** ./components/Chat/constant.tsx ***!
  \**************************************/
/*! exports provided: dataEmoji, arrChat, giphyDefault, themeTextFieldAdmin, themeTextFieldUser, themeTextHeader, themeInput, StyledBadge, themeInputBase, zIndexMax, useStylesBootstrap, useStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataEmoji", function() { return dataEmoji; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrChat", function() { return arrChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "giphyDefault", function() { return giphyDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeTextFieldAdmin", function() { return themeTextFieldAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeTextFieldUser", function() { return themeTextFieldUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeTextHeader", function() { return themeTextHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeInput", function() { return themeInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledBadge", function() { return StyledBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeInputBase", function() { return themeInputBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndexMax", function() { return zIndexMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStylesBootstrap", function() { return useStylesBootstrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);



const zIndexMax = 999999999999999;
const dataEmoji = [{
  native: '😃'
}, {
  native: "😀"
}, {
  native: "😁"
}, {
  native: '😂'
}, {
  native: '😃'
}, {
  native: "😄"
}, {
  native: "😅"
}, {
  native: '😆'
}, {
  native: '😃'
}, {
  native: "😇"
}, {
  native: "😈	"
}, {
  native: '🎅🏼'
}, {
  native: '😉'
}, {
  native: '😋'
}, {
  native: '😌'
}, {
  native: '😍'
}, {
  native: '😎'
}, {
  native: '😏'
}, {
  native: '😐'
}, {
  native: '😑'
}, {
  native: '😒'
}, {
  native: '😓	'
}, {
  native: '😔'
}, {
  native: '😕'
}, {
  native: '😖'
}, {
  native: '😗'
}, {
  native: '😘'
}, {
  native: '😙'
}, {
  native: '😚'
}, {
  native: '😛'
}, {
  native: '😜'
}, {
  native: '😝'
}, {
  native: '😞'
}, {
  native: '😟'
}, {
  native: '😠'
}, {
  native: '😡'
}, {
  native: '😢'
}, {
  native: '😣'
}, {
  native: '😤'
}, {
  native: '😥'
}, {
  native: '😦'
}, {
  native: '😧'
}, {
  native: '😨'
}, {
  native: '😩'
}, {
  native: '😪'
}, {
  native: '😫'
}, {
  native: '😬'
}, {
  native: '😭'
}, {
  native: '😮'
}, {
  native: '😯	'
}, {
  native: '😰'
}, {
  native: '😱'
}, {
  native: '😲'
}, {
  native: '😳'
}, {
  native: '😴'
}, {
  native: '😵'
}, {
  native: '😶'
}, {
  native: '😷'
}, {
  native: '🙁'
}, {
  native: '🙂'
}, {
  native: '😱'
}, {
  native: '😲'
}, {
  native: '😳'
}, {
  native: '😴'
}, {
  native: '😵'
}, {
  native: '😶'
}, {
  native: '😷'
}, {
  native: '🙁'
}, {
  native: '🙂'
}, {
  native: '🙃'
}, {
  native: '🙄'
}, {
  native: '🤐'
}];
const arrChat = [{
  message: "Nội thất Dodo xin chào quý khách",
  date: "1570164019224",
  image: {
    url: '',
    height: "",
    width: ''
  },
  type: "admin"
}];
const giphyDefault = [{
  image: {
    url: 'https://media3.giphy.com/media/mlvseq9yvZhba/giphy.gif?cid=13984785c0b0951827d991e0244802c1aa7a37da3f7842a2&rid=giphy.gif',
    height: '220',
    width: "180"
  }
}, {
  image: {
    url: "https://media0.giphy.com/media/WXB88TeARFVvi/giphy.gif?cid=13984785c0b0951827d991e0244802c1aa7a37da3f7842a2&rid=giphy.gif",
    height: '230',
    width: "150"
  }
}, {
  image: {
    url: 'https://media3.giphy.com/media/kiBcwEXegBTACmVOnE/giphy.gif?cid=139847857f30fe5e8c9c8f4a605b72af5a4d8c7216516a01&rid=giphy.gif',
    height: '250',
    width: "220"
  }
}, {
  image: {
    url: "https://media3.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif?cid=139847857f30fe5e8c9c8f4a605b72af5a4d8c7216516a01&rid=giphy.gif",
    height: '210',
    width: "190"
  }
}, {
  image: {
    url: "https://media2.giphy.com/media/33OrjzUFwkwEg/giphy.gif?cid=13984785c0b0951827d991e0244802c1aa7a37da3f7842a2&rid=giphy.gif",
    height: '250',
    width: "240"
  }
}, {
  image: {
    url: "https://media3.giphy.com/media/mCRJDo24UvJMA/giphy.gif?cid=139847857f30fe5e8c9c8f4a605b72af5a4d8c7216516a01&rid=giphy.gif",
    height: '200',
    width: "150"
  }
}, {
  image: {
    url: "https://media3.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif?cid=139847857f30fe5e8c9c8f4a605b72af5a4d8c7216516a01&rid=giphy.gif",
    height: '250',
    width: "200"
  }
}, {
  image: {
    url: 'https://media3.giphy.com/media/kiBcwEXegBTACmVOnE/giphy.gif?cid=139847857f30fe5e8c9c8f4a605b72af5a4d8c7216516a01&rid=giphy.gif',
    height: '250',
    width: "200"
  }
}, {
  image: {
    url: "https://media2.giphy.com/media/QvBoMEcQ7DQXK/giphy.gif?cid=139847857f30fe5e8c9c8f4a605b72af5a4d8c7216516a01&rid=giphy.gif",
    height: '250',
    width: "200"
  }
}];
const themeInput = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  overrides: {
    MuiInput: {
      root: {
        position: "initial"
      },
      fullWidth: {
        minHeight: "50px",
        paddingLeft: "10px",
        fontSize: "15px"
      }
    },
    MuiInputBase: {
      inputMultiline: {
        padding: '4px'
      }
    }
  }
});
const themeTextFieldAdmin = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  overrides: {
    MuiTextField: {
      root: {
        borderRadius: "20px!important"
      }
    },
    MuiOutlinedInput: {
      multiline: {
        borderRadius: "20px!important"
      },
      inputMultiline: {
        fontSize: "13px"
      }
    }
  }
});
const themeTextHeader = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  overrides: {
    MuiTypography: {
      colorTextSecondary: {
        color: "white",
        fontSize: "30px"
      },
      root: {
        color: "white"
      }
    }
  }
});
const themeInputBase = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  overrides: {
    MuiInputBase: {
      input: {
        fontSize: "13px"
      }
    }
  }
});
const themeTextFieldUser = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  direction: 'rtl',
  overrides: {
    MuiInput: {
      root: {
        borderRadius: "20px!important"
      }
    },
    MuiOutlinedInput: {
      multiline: {
        borderRadius: "20px!important"
      },
      inputMultiline: {
        fontSize: "13px"
      }
    }
  }
});
const useStylesBootstrap = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  arrow: {
    color: "#444"
  },
  tooltip: {
    backgroundColor: "#444"
  }
}));
const StyledBadge = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}))(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"]);
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  root: {
    width: 550,
    zIndex: 900
  },
  inputWrapper: {
    height: "32px",
    width: "32px",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    marginTop: "5px"
  },
  fileInput: {
    cursor: "pointer",
    position: "absolute",
    top: "0",
    right: "0",
    zIndex: 99,
    fontSize: "20px",
    opacity: "0"
  },
  textAdmin: {
    backgroundColor: "#DBF4FD",
    color: "white"
  },
  textFieldUserChatContent: {
    marginLeft: "36px",
    textAlign: "right"
  },
  textUser: {
    backgroundColor: "white",
    color: "black"
  },
  textFieldChatContent: {
    marginLeft: "36px"
  },
  timeWork: {
    color: "white"
  },
  itemEmoji: {
    display: 'inline-block',
    fontSize: '25px',
    cursor: "pointer",
    padding: '2px',
    border: "1px solid white"
  },
  overflowHeightEG: {
    overflowY: "auto",
    padding: "8px 16px",
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 126px)!important'
    }
  },
  openEG: {
    overflowY: "auto",
    padding: "8px 16px",
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 320px)!important'
    }
  },
  overflowHeightEmoji: {
    overflowX: 'auto',
    height: '155px',
    padding: "4px",
    width: "350px"
  },
  viewSizeGiphy: {
    overflowX: 'auto',
    height: '125px'
  },
  viewWidthGiphy: {
    width: "350px"
  },
  searchGiphy: {
    display: 'flex',
    margin: "0px 0px 4px 12px",
    borderRadius: '4px',
    backgroundColor: "#f0f0f0",
    height: "28px",
    width: "308px",
    [theme.breakpoints.down('xl')]: {
      margin: "0px 0px 4px 16px",
      width: "308px"
    },
    [theme.breakpoints.down('lg')]: {
      margin: "0px 0px 4px 12px",
      width: "308px"
    },
    [theme.breakpoints.down('md')]: {
      margin: "0px 0px 4px 20px",
      width: "308px"
    },
    [theme.breakpoints.down('sm')]: {
      margin: "0px 0px 4px 22px",
      width: "306px"
    }
  },
  inputBaseGiphy: {
    marginleft: theme.spacing(1),
    flex: 1
  },
  itemGiphy: {
    width: "78px",
    height: "55px",
    display: 'inline-block',
    padding: '2px'
  },
  imgListGiphy: {
    width: "100%",
    height: "100%",
    borderRadius: '4px'
  },
  viewContentImageTake: {
    maxWidth: "250px",
    height: `auto`,
    padding: "5px 0px 5px 0px",
    float: "left"
  },
  viewContentImageSend: {
    maxWidth: "250px",
    height: `auto`,
    float: "right",
    padding: "5px 0px 5px 0px"
  },
  imgGiphy: {
    width: "100%",
    height: "100%"
  },
  errInternet: {
    padding: "20px",
    color: "red",
    fontSize: '13px'
  },
  texting: {
    fontSize: '13px',
    color: '#aaa',
    padding: "5px",
    textAlign: 'right'
  },
  iconWaring: {
    fontSize: "20px"
  },
  sizeSearchIcon: {
    fontSize: "20px",
    margin: "4px",
    color: "#aaa"
  },
  viewConversation: {
    display: "block"
  },
  buttonEmojiGiphy: {
    border: '1px solid white',
    backgroundColor: "#045EA8",
    color: 'white',
    padding: "5px 10px",
    borderRadius: "5px",
    marginLeft: "5px"
  },
  marinButtonEmojiGiphy: {
    marginBottom: "5px",
    marginTop: "5px"
  },
  iconSearch: {
    padding: 2
  },
  inputBase: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    position: "absolute",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    boxShadow: "0px -1px 3px #e8e8e8",
    outline: 'none',
    bottom: "0px",
    ':before': {
      border: '0px!important'
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    height: 50,
    flex: 1
  },
  divider: {
    height: 28,
    margin: 4
  },
  inputText: {
    width: "300px"
  },
  typography: {
    padding: theme.spacing(2)
  },
  viewChatImpostant: {
    zIndex: 9999999999999
  },
  viewChat: {
    borderRadius: "4px 4px",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    backgroundColor: "white",
    zIndex: 900,
    height: "550px",
    width: "350px",
    position: "fixed",
    right: '80px',
    bottom: "15px",
    boxShadow: "0px -1px 3px #444",
    [theme.breakpoints.down('sm')]: {
      position: "fixed",
      right: '14px',
      bottom: "80px"
    },
    [theme.breakpoints.down('xs')]: {
      position: "fixed",
      right: '0',
      bottom: "0",
      width: '100%',
      height: '100vh'
    }
  },
  emojiGiphy: {
    height: "210px",
    width: "350px",
    textAlign: 'center',
    display: "block",
    borderTop: '1px solid gray'
  },
  textField: {
    position: "absolute",
    bottom: "0px"
  },
  exampleWrapper: {
    position: 'fixed',
    right: "60px",
    bottom: "2px"
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  avatarAdminText: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  sizeAvatarSmall: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  positionAvatar: {
    position: 'fixed',
    right: "15px",
    bottom: "80px",
    zIndex: 999999999999999
  },
  viewAvatarChatContent: {
    float: "left",
    margin: "10px 0px 0px 0"
  },
  radioGroup: {
    margin: theme.spacing(1, 0)
  },
  avatar: {
    backgroundColor: "blue"
  },
  media: {
    height: 100,
    backgroundColor: "blue"
  },
  header: {
    backgroundColor: "#1a75ff",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    color: "white"
  },
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2)
    }
  },
  sizeIcon: {
    fontSize: '27px'
  },
  textSizeNewDate: {
    fontSize: "13px",
    color: 'black',
    padding: "4px 0px"
  },
  renderAvatar: {
    position: 'fixed',
    right: "15px",
    zIndex: zIndexMax
  },
  renderAvatarBorderRadius: {
    boxSizing: "content-box",
    position: 'fixed',
    right: "15px",
    zIndex: zIndexMax,
    borderRadius: "50%",
    border: "2px solid #59a832"
  },
  clearFloat: {
    clear: "both"
  },
  viewTextTake: {
    maxWidth: 'calc(100% - 20px)',
    height: 'auto',
    background: "rgb(242, 246, 249)",
    borderRadius: '20px',
    padding: '10px 15px',
    margin: '5px 0 5px 0',
    fontSize: '15px',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    float: "left"
  },
  viewTextSend: {
    maxWidth: 'calc(100% - 20px)',
    height: 'auto',
    background: 'rgb(219, 244, 253)',
    borderRadius: '20px',
    padding: '10px 15px',
    margin: '5px 0 5px 0',
    fontSize: '15px',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    float: 'right'
  }
}));


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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "rect",
    className: "grid__list__item__img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default.a, {
    pt: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    width: "60%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: undefined
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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "@material-ui/icons/FavoriteBorder");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/CalendarToday */ "@material-ui/icons/CalendarToday");
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/validator */ "./modules/validator.tsx");
/* harmony import */ var _modules_AdSellLease_Tracking__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modules/AdSellLease/Tracking */ "./modules/AdSellLease/Tracking.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./utils/index.ts");
/* harmony import */ var _graphql_project_mutation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../graphql/project/mutation */ "./graphql/project/mutation/index.ts");
/* harmony import */ var _graphql_ad_sell_leases_mutation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../graphql/ad_sell_leases/mutation */ "./graphql/ad_sell_leases/mutation/index.ts");

var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\GridList\\GridItemASL.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // Material- UI

 // Icon














const GridItemASL = props => {
  const [dataCompareLocal, setDataCompareLocal] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
  const [likeStatus, setLikeStatus] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(props.dataGird.like_status);
  const [statusCompare, setStatusCompare] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__["localStorageCompareKey"]) && !_modules_validator__WEBPACK_IMPORTED_MODULE_9__["default"].isBlank(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__["localStorageCompareKey"]))) {
      try {
        let dataStatusCompare = JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__["localStorageCompareKey"]));
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

    if (addSellLeaseId && !_modules_validator__WEBPACK_IMPORTED_MODULE_9__["default"].isBlank(addSellLeaseId) && typeGrid === 'ad_sell_lease') {
      _modules_AdSellLease_Tracking__WEBPACK_IMPORTED_MODULE_10__["default"].addTracking(String(addSellLeaseId), type);
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
    if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__["localStorageCompareKey"]) && !_modules_validator__WEBPACK_IMPORTED_MODULE_9__["default"].isBlank(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__["localStorageCompareKey"]))) {
      let dataToCompare = JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__["localStorageCompareKey"]));
      let dataNewCompare = [];

      for (let index in dataToCompare) {
        if (dataToCompare[index].id !== dataCompare.id) {
          dataNewCompare.push(dataToCompare[index]);
        }
      }

      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_8__["localStorageCompareKey"], _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(dataNewCompare));
      location.reload();
    }
  };

  let updateCompareData = data => {
    let dataToCompare = [];
    let isAddToLocal = true;

    if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__["localStorageCompareKey"]) && !_modules_validator__WEBPACK_IMPORTED_MODULE_9__["default"].isBlank(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__["localStorageCompareKey"]))) {
      dataToCompare = JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__["localStorageCompareKey"]));

      for (let index in dataToCompare) {
        if (dataToCompare[index].id === data.id) {
          isAddToLocal = false;
        }

        if (dataToCompare[index].type !== data.type) {
          localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_8__["localStorageCompareKey"]);
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
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_8__["localStorageCompareKey"], _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(dataToCompare));
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
      _utils__WEBPACK_IMPORTED_MODULE_11__["apolloClient"].mutate({
        mutation: _graphql_ad_sell_leases_mutation__WEBPACK_IMPORTED_MODULE_13__["ADD_AD_SELL_LEASE_WISH_LIST"],
        variables: {
          "input": {
            "ad_sell_lease_id": props.dataGird.id,
            "status": "like"
          }
        }
      }).then(response => {});
    } else {
      _utils__WEBPACK_IMPORTED_MODULE_11__["apolloClient"].mutate({
        mutation: _graphql_project_mutation__WEBPACK_IMPORTED_MODULE_12__["ADD_PROJECT_WISH_LIST"],
        variables: {
          "input": {
            "project_id": props.dataGird.id,
            "status": "like"
          }
        }
      }).then(response => {});
    }
  };

  let componentsItem = __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    direction: props.grid ? "column" : "row",
    spacing: 0,
    className: "grid__list__item u-margin-bottom-small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: linkHref,
    as: linkAs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, __jsx("div", {
    className: "grid__list__item__img background block_float",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, __jsx("div", {
    className: 'grid__list__item__img__date',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, __jsx(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }), __jsx(react_moment__WEBPACK_IMPORTED_MODULE_6___default.a, {
    unix: true,
    format: "DD/MM/YYYY",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, Number(props.dataGird.created_at) / 1000)), __jsx("div", {
    className: 'grid__list__item__img__favorite',
    onClick: handleClickLike,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  }, likeStatus && __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }), !likeStatus && __jsx(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  })), props.dataGird.image && props.dataGird.image !== 'null' && props.dataGird.image !== '' && __jsx("img", {
    src: props.dataGird.image,
    alt: props.dataGird.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }), (!props.dataGird.image || props.dataGird.image === 'null' || props.dataGird.image === '') && __jsx("img", {
    src: "https://static.nhadatmoi.net/default/home_default.jpg",
    alt: props.dataGird.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "grid__list__item__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  }, __jsx("div", {
    className: "grid__list__item__content__title u-flexSpaceBetween",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: linkHref,
    as: linkAs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }, __jsx("div", {
    className: "grid__list__item__content__title__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, props.dataGird.title))))), __jsx("div", {
    className: "grid__list__item__content__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }, props.dataGird.address), props.dataGird.area && props.dataGird.area != "0" && __jsx("div", {
    className: "grid__list__item__content__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: undefined
  }, "Di\u1EC7n t\xEDch: ", props.dataGird.area, " m", __jsx("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  }, "2"), " -  L\u01B0\u1EE3t xem: ", props.dataGird.view_count), (!props.dataGird.area || props.dataGird.area == "0") && __jsx("div", {
    className: "grid__list__item__content__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: undefined
  }, "Di\u1EC7n t\xEDch: \u0110ang c\u1EADp nh\u1EADt -  L\u01B0\u1EE3t xem: ", props.dataGird.view_count), __jsx("div", {
    className: "grid__list__item__content__price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }, props.dataGird.price && props.dataGird.price !== '0' && props.dataGird.price !== '0 ' && props.dataGird.price !== '0 đồng' ? props.dataGird.price : 'Giá: Liên hệ'), !statusCompare && __jsx("div", {
    className: "grid__list__item__content__compare",
    onClick: () => clickAddToCompare(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }, "SO S\xC1NH"), statusCompare && __jsx("div", {
    className: "grid__list__item__content__compare",
    onClick: () => handleClickRemoveCompare(dataPrepare),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }, "HU\u1EF6"))));

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xl: props.grid.xl,
    lg: props.grid.lg,
    md: props.grid.md,
    sm: props.grid.sm,
    xs: props.grid.xs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
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
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Index\\TitleBlock.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TitleBlock = props => {
  let domTitle = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);

  if (props.type === "h1") {
    domTitle = __jsx("h1", {
      className: "title_block__big_title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, props.title);
  }

  if (props.type === "h2") {
    domTitle = __jsx("h2", {
      className: "title_block__big_title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, props.title);
  }

  if (props.type === "h3") {
    domTitle = __jsx("h2", {
      className: "title_block__big_title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }, props.title);
  }

  let domBlockTitle = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);

  if (props.path.indexOf('https://') !== -1) {
    domBlockTitle = __jsx("a", {
      href: props.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, domTitle);
  } else if (props.path === '') {
    domBlockTitle = domTitle;
  } else {
    domBlockTitle = __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: props.href ? props.href : props.path,
      as: String(props.path),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, domBlockTitle, __jsx("div", {
    className: "title_block__big_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/scss/style.scss */ "./assets/scss/style.scss");
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout/Layout */ "./components/Layout/Layout.tsx");
/* harmony import */ var _components_Layout_ErrorPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout/ErrorPage */ "./components/Layout/ErrorPage.tsx");
/* harmony import */ var _components_Index_TitleBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Index/TitleBlock */ "./components/Index/TitleBlock.tsx");
/* harmony import */ var _components_Display_LoadingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Display/LoadingPage */ "./components/Display/LoadingPage.tsx");
/* harmony import */ var _components_GridList_GridAdSellLeases__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/GridList/GridAdSellLeases */ "./components/GridList/GridAdSellLeases.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./utils/index.ts");
/* harmony import */ var _graphql_ad_sell_leases_queries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../graphql/ad_sell_leases/queries */ "./graphql/ad_sell_leases/queries/index.ts");
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../modules/validator */ "./modules/validator.tsx");

var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Layout\\ErrorMainPage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














const ErrorMainPage = props => {
  console.log("PAGE ERROR");
  let pageTitle = 'Đã xảy ra lỗi, vui lòng thử lại';
  let pageDescription = 'Hiện đã xảy ra lỗi, vui lòng thử lại sau';
  const [dataAdSellLeases, setDataAdSellLease] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [statusLoadingAdSellLease, setStatusLoadingAdSellLease] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _utils__WEBPACK_IMPORTED_MODULE_11__["apolloClient"].query({
      query: _graphql_ad_sell_leases_queries__WEBPACK_IMPORTED_MODULE_12__["HOME_GET_AD_SELL_LEASES"],
      variables: {
        "page": 1,
        "limit": 8,
        "filter": "'{}'"
      }
    }).then(response => {
      setStatusLoadingAdSellLease(false);

      if (!_modules_validator__WEBPACK_IMPORTED_MODULE_13__["default"].isBlank(response.data) && !_modules_validator__WEBPACK_IMPORTED_MODULE_13__["default"].isBlank(response.data.adSellLeases.edges)) {
        setDataAdSellLease(response.data.adSellLeases.edges);
      }
    });
  }, []);
  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: pageTitle,
    description: pageDescription
  }, props, {
    canonical: _constants__WEBPACK_IMPORTED_MODULE_3__["mainURL"],
    path: '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), __jsx(_components_Layout_ErrorPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx(_components_Index_TitleBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Tin rao ph\xF9 h\u1EE3p v\u1EDBi b\u1EA1n",
    description: "Xem th\xEAm m\u1ED9t s\u1ED1 tin rao ph\xF9 h\u1EE3p v\u1EDBi b\u1EA1n",
    path: "/tim-tin-rao",
    type: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), statusLoadingAdSellLease && __jsx(_components_Display_LoadingPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "loading_page",
    grid: {
      xl: 3,
      lg: 3,
      md: 4,
      sm: 6,
      xs: 12
    },
    numberLimit: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), !statusLoadingAdSellLease && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_GridList_GridAdSellLeases__WEBPACK_IMPORTED_MODULE_8__["default"], {
    grid: {
      xl: 3,
      lg: 3,
      md: 4,
      sm: 6,
      xs: 12
    },
    gridData: dataAdSellLeases,
    className: "grid__list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("div", {
    className: "content_index_button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/[slug]",
    as: '/tim-tin-rao',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
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
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Layout\\ErrorPage.tsx";
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("div", {
    className: 'error_page__image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("img", {
    src: 'https://static.nhadatmoi.net/default/error-image.svg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  })), __jsx("div", {
    className: 'error_page__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "\u0110\xC3 X\u1EA2Y RA L\u1ED6I, VUI L\xD2NG TH\u1EEC L\u1EA0I"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 0,
    item: true,
    xs: 12,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: true,
    className: "error_page__search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("div", {
    className: "search_homepage__body__box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xsDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("div", {
    className: "search_homepage__body__box__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleClickSearchType,
    "aria-describedby": id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, typeSearch.name, __jsx("svg", {
    viewBox: "0 0 320 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("path", {
    d: "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: 'span',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    button: true,
    onClick: event => handleChangeType(dropdownSearch[0]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: dropdownSearch[0].name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    button: true,
    onClick: event => handleChangeType(dropdownSearch[1]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: dropdownSearch[1].name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  })))))), __jsx("div", {
    className: "search_homepage__body_box_input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: "search_homepage__body_box_input_base",
    placeholder: placeholderSearch,
    inputProps: {
      'aria-label': placeholderSearch
    },
    onKeyUp: e => onChangeWards(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "search_homepage__body_box_button",
    variant: "outlined",
    onClick: onClickSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
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
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 0,
    className: "footer_body",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 4,
    sm: 12,
    className: "footer_body__item border_bottom_mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer_body__item_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "C\xD4NG TY C\u1ED4 PH\u1EA6N B\u1EA4T \u0110\u1ED8NG S\u1EA2N M\u1EDAI"), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer_body__item_description_icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 384 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("path", {
    d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }))), __jsx("div", {
    className: "footer_body__item_description_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("p", {
    className: "footer_body__item_description_text_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "\u0110\u1ECBa ch\u1EC9"), __jsx("p", {
    className: "footer_body__item_description_text_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "S\u1ED1 12 Khu\u1EA5t Duy Ti\u1EBFn, Thanh Xu\xE2n, H\xE0 N\u1ED9i"))), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer_body__item_description_icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_material_ui_icons_PhoneIphone__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  })), __jsx("div", {
    className: "footer_body__item_description_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("p", {
    className: "footer_body__item_description_text_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "\u0110i\u1EC7n tho\u1EA1i"), __jsx("p", {
    className: "footer_body__item_description_text_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "0936.33.81.39"))), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer_body__item_description_icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })), __jsx("div", {
    className: "footer_body__item_description_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("p", {
    className: "footer_body__item_description_text_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "E-mail"), __jsx("p", {
    className: "footer_body__item_description_text_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "noithatdodo@gmail.com"))), __jsx("div", {
    className: "footer_body__item_branch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("img", {
    className: "gov",
    src: "https://static.nhadatmoi.net/default/bocongthuong.png",
    alt: "\u0110\xE3 th\xF4ng b\xE1o v\u1EDBi B\u1ED9 C\xF4ng Th\u01B0\u01A1ng",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx("a", {
    href: 'https://www.dmca.com/Protection/Status.aspx?ID=7816605d-fbd2-45f8-a397-eeac42642b75&refurl=https://nhadatmoi.net/',
    target: '_blank',
    rel: 'nofollow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://static.nhadatmoi.net/default/dmca.png",
    alt: "DMCA",
    className: "dmca",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 8,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 3,
    xs: 6,
    className: "footer_body__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer_body__item_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "C\xF4ng ty"), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: '/about-us',
    as: '/about-us',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "V\u1EC1 B\u1EA5t \u0110\u1ED9ng S\u1EA3n M\u1EDBi"))), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://help.nhadatmoi.net/tuyen-dung',
    rel: 'nofollow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "Tuy\u1EC3n d\u1EE5ng")), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://help.nhadatmoi.net/lien-he/thong-tin-lien-he',
    rel: 'nofollow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "Th\xF4ng tin li\xEAn h\u1EC7")), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: '/sitemap',
    as: '/sitemap',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "Sitemap")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 3,
    xs: 6,
    className: "footer_body__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer_body__item_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "\u0110i\u1EC1u kho\u1EA3n"), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://help.nhadatmoi.net/dieu-khoan/quy-che-hoat-dong',
    rel: 'nofollow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "Quy ch\u1EBF ho\u1EA1t \u0111\u1ED9ng")), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://help.nhadatmoi.net/dieu-khoan/chinh-sach-bao-mat',
    rel: 'nofollow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt")), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://help.nhadatmoi.net/dieu-khoan/chinh-sach-cookie',
    rel: 'nofollow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, "Ch\xEDnh s\xE1ch Cookie")), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://help.nhadatmoi.net/dieu-khoan/dieu-khoan-su-dung',
    rel: 'nofollow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 3,
    xs: 6,
    className: "footer_body__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer_body__item_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "Th\xF4ng tin"), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://nhadatmoi.net/tin-tuc/tin-tuc',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, "Tin t\u1EE9c th\u1ECB tr\u01B0\u1EDDng")), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://nhadatmoi.net/tin-tuc/blog',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "B\xE1o c\xE1o & Ph\xE2n t\xEDch")), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://nhadatmoi.net/tin-tuc/kien-thuc-moi-gioi',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, "Ki\u1EBFn th\u1EE9c cho m\xF4i gi\u1EDBi")), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://help.nhadatmoi.net/huong-dan',
    rel: 'nofollow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 3,
    xs: 6,
    className: "footer_body__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer_body__item_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "M\u1EA1ng x\xE3 h\u1ED9i"), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://www.facebook.com/nhadatmoi.net/',
    rel: 'nofollow',
    target: '_blank',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Facebook")), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://www.youtube.com/channel/UCCvlOD7vTPJeYRY8IrINguQ',
    rel: 'nofollow',
    target: '_blank',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, "Youtube")), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://twitter.com/nhadatmoi',
    rel: 'nofollow',
    target: '_blank',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "Twitter")), __jsx("div", {
    className: "footer_body__item_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://www.linkedin.com/in/nhadatmoi/',
    rel: 'nofollow',
    target: '_blank',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, "LinkedIn"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 6,
    xs: 12,
    className: "footer_body__apps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer_body__apps_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, "Ph\u01B0\u01A1ng th\u1EE9c thanh to\xE1n"), __jsx("div", {
    className: "footer_body__apps_payment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://static.nhadatmoi.net/default/visa.png",
    alt: "Visa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), __jsx("img", {
    src: "https://static.nhadatmoi.net/default/mastercard.png",
    alt: "Mastercard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }), __jsx("img", {
    src: "https://static.nhadatmoi.net/default/atm.png",
    alt: "ATM",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 6,
    xs: 12,
    className: "footer_body__apps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer_body__apps_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "\u1EE8ng d\u1EE5ng di \u0111\u1ED9ng"), __jsx("div", {
    className: "footer_body__apps_payment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, __jsx("img", {
    className: "no_border",
    src: "https://static.nhadatmoi.net/default/apple-store.svg",
    alt: "Apple Store",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }), __jsx("img", {
    className: "no_border",
    src: "https://static.nhadatmoi.net/default/google-play.svg",
    alt: "Google Play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  })))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 0,
    className: "footer_bottom",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    smDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    className: "footer_bottom__left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, "\xA9 2020 - B\u1EA3n quy\u1EC1n c\u1EE7a c\xF4ng ty C\u1ED5 ph\u1EA7n N\u1ED9i Th\u1EA5t \u0110\xF4 \u0110\xF4 - noithatdodo.com"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    className: "footer_bottom__right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, "Ph\u1EA3n h\u1ED3i"), __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, "\u0110i\u1EC1u kho\u1EA3n"), __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lgUp: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    className: "footer_bottom__center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, "\xA9 2019 - B\u1EA3n quy\u1EC1n c\u1EE7a c\xF4ng ty C\u1ED5 ph\u1EA7n B\u1EA5t \u0110\u1ED9ng S\u1EA3n M\u1EDBi"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterPage);

/***/ }),

/***/ "./components/Layout/Header.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Header.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Login_Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Login/Modal */ "./components/Login/Modal.tsx");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ListAlt */ "@material-ui/icons/ListAlt");
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_FilterVintage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/FilterVintage */ "@material-ui/icons/FilterVintage");
/* harmony import */ var _material_ui_icons_FilterVintage__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterVintage__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "@material-ui/icons/AddCircle");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/ViewList */ "@material-ui/icons/ViewList");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Eco */ "@material-ui/icons/Eco");
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "@material-ui/icons/ArrowForward");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../modules/validator */ "./modules/validator.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/icons/GroupAdd */ "@material-ui/icons/GroupAdd");
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "@material-ui/icons/ExitToApp");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/icons/List */ "@material-ui/icons/List");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../utils */ "./utils/index.ts");
/* harmony import */ var _graphql_profile_queries__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../graphql/profile/queries */ "./graphql/profile/queries/index.ts");
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! nextjs-progressbar */ "nextjs-progressbar");
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
/* harmony import */ var _Chat_Index__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../Chat/Index */ "./components/Chat/Index.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_42__);








var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Layout\\Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






























 // @ts-ignore







const defaultUser = {
  _id: "",
  email: "",
  avatar: "",
  first_name: "",
  last_name: ""
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_26__["makeStyles"])(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarItem: {
    marginRight: theme.spacing(1)
  },
  typography: {
    padding: theme.spacing(2)
  },
  inline: {
    display: "inline"
  }
}));

const HeaderPage = props => {
  var _props$dataQuery, _props$dataQuery2;

  const setModal = dataModal => {
    props.updateModal(dataModal);
  };

  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_8__["useState"](null);
  const [anchorElSearchType, setAnchorElSearchType] = react__WEBPACK_IMPORTED_MODULE_8__["useState"](null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [userInfo, setUserInfo] = react__WEBPACK_IMPORTED_MODULE_8__["useState"](defaultUser);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClickSearchType = event => {
    setAnchorElSearchType(event.currentTarget);
  };

  const handleCloseSearchType = () => {
    setAnchorElSearchType(null);
  };

  const openSearchType = Boolean(anchorElSearchType);
  const classes = useStyles();
  const [dataCompare, setDataCompare] = react__WEBPACK_IMPORTED_MODULE_8__["useState"](props.dataCompare);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    if (props.user) {
      setUserInfo(props.user);
    }

    setDataCompare(props.dataCompare);
  }, [props.dataCompare]);

  const handleClickOpen = () => {
    setModal(true);
  };

  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_8__["useState"]({
    top: false,
    left: false,
    bottom: false,
    right: false
  }); // @ts-ignore

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(_objectSpread({}, state, {
      [side]: open
    }));
  };

  const logout = () => {
    setUserInfo(defaultUser);
    _utils__WEBPACK_IMPORTED_MODULE_35__["apolloClient"].query({
      query: _graphql_profile_queries__WEBPACK_IMPORTED_MODULE_36__["LOG_OUT"]
    }).then(r => {});
  };

  const dropdownSearch = [{
    type: 'du-an-bat-dong-san',
    name: 'Dự án'
  }, {
    type: 'tim-tin-rao',
    name: 'Tin rao'
  }];
  let defaultDropdown = dropdownSearch[0];

  if (props.path === 'tin-rao' || props.path === 'nha-dat-ban') {
    defaultDropdown = dropdownSearch[1];
  }

  const [typeSearch, setType] = react__WEBPACK_IMPORTED_MODULE_8__["useState"](defaultDropdown);

  const handleChangeType = inputType => {
    setType(inputType);
    handleCloseSearchType();
  };

  let keywordNew = '';

  if ((_props$dataQuery = props.dataQuery) === null || _props$dataQuery === void 0 ? void 0 : _props$dataQuery.title) {
    keywordNew = props.dataQuery.title;
  }

  if ((_props$dataQuery2 = props.dataQuery) === null || _props$dataQuery2 === void 0 ? void 0 : _props$dataQuery2.name) {
    keywordNew = props.dataQuery.name;
  }

  const [keywordSearch, setKeywordSearch] = react__WEBPACK_IMPORTED_MODULE_8__["useState"](keywordNew);
  let placeholderSearch = 'Tìm kiếm';
  let isHomepage = false;

  const onChangeWards = event => {
    setKeywordSearch(event.target.value);

    if (event.key == "Enter" || event.keyCode == 13) {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    if (typeSearch.type === 'tim-tin-rao') {
      let urlProcess = {
        pathname: '/[slug]',
        query: {
          title: keywordSearch
        }
      };
      let slugAs = '/tim-tin-rao?title=' + keywordSearch;

      if (props.path === 'tim-tin-rao') {
        window.location.href = '/tim-tin-rao?title=' + keywordSearch;
        return true;
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_39___default.a.replace(urlProcess, slugAs, {
          shallow: true
        });
      }
    } else {
      let urlProcess = {
        pathname: '/du-an-bat-dong-san',
        query: {
          name: keywordSearch
        }
      };
      let slugAs = '/du-an-bat-dong-san?name=' + keywordSearch;

      if (props.path === 'du-an-bat-dong-san') {
        window.location.href = '/du-an-bat-dong-san?name=' + keywordSearch;
        return true;
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_39___default.a.replace(urlProcess, slugAs, {
          shallow: true
        });
      }
    }
  };

  const clickCancelCompare = () => {
    localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_40__["localStorageCompareKey"]);
    setDataCompare(null);
  };

  const clickToCompare = () => {
    if (props.dataCompare && !_modules_validator__WEBPACK_IMPORTED_MODULE_25__["default"].isBlank(props.dataCompare)) {
      let dataCompareId = [];

      for (let index in props.dataCompare) {
        dataCompareId.push(props.dataCompare[index].id);
      }

      let dataQuery = query_string__WEBPACK_IMPORTED_MODULE_27___default.a.stringify({
        ids: dataCompareId
      }, {
        arrayFormat: 'none'
      });
      let urlProcessCompare = '/compare/asl?' + dataQuery;
      next_router__WEBPACK_IMPORTED_MODULE_39___default.a.push(urlProcessCompare, urlProcessCompare, {
        shallow: false
      });
      localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_40__["localStorageCompareKey"]);
      setDataCompare(null);
    }
  };

  const handleClickRemoveCompare = dataCompare => {
    if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_40__["localStorageCompareKey"]) && !_modules_validator__WEBPACK_IMPORTED_MODULE_25__["default"].isBlank(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_40__["localStorageCompareKey"]))) {
      let dataToCompare = JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_40__["localStorageCompareKey"]));
      let dataNewCompare = [];

      for (let index in dataToCompare) {
        if (dataToCompare[index].id !== dataCompare.id) {
          dataNewCompare.push(dataToCompare[index]);
        }
      }

      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_40__["localStorageCompareKey"], _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(dataNewCompare));
      location.reload();
    }
  };

  let userLogin = lodash__WEBPACK_IMPORTED_MODULE_42___default.a.get(props, "user._id", "");

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  }, __jsx(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_37___default.a, {
    color: "#1A4684",
    startPosition: 0,
    stopDelayMs: 200,
    height: "2",
    showSpinner: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }), __jsx(_Chat_Index__WEBPACK_IMPORTED_MODULE_41__["default"], {
    userLogin: userLogin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: undefined
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    spacing: 0,
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: undefined
  }, __jsx(_Login_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    statusModal: props.statusModal,
    onClose: () => setModal(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: undefined
  }), __jsx("div", {
    className: "header__left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: undefined
  }, __jsx("div", {
    className: "header_logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 173.7 40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: undefined
  }, __jsx("path", {
    className: "st0",
    d: "M15.9,38c-1.9-1.4-6.5-4.6-7.5-10.1c-0.5-2.7,0.2-5.5,1.9-7.7c1.8-2.2,4.5-3.5,7.4-3.7c0.1,0,0.2,0,0.3,0c2.7,0,5.3,1.2,7,3.3c1.9,2.2,2.7,5.1,2.3,7.9c-0.9,5.3-5,8.4-7.4,10.2l-2,1.5L15.9,38z M18,20.3c-0.1,0-0.1,0-0.2,0c-1.9,0.1-3.6,0.9-4.7,2.3c-1.1,1.3-1.5,3-1.2,4.7c0.7,3.5,3.3,5.8,5.8,7.7c2.8-2.1,5.3-4.2,5.8-7.7c0.3-1.7-0.3-3.6-1.4-5C21.2,21,19.7,20.3,18,20.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: undefined
  }), __jsx("path", {
    className: "st0",
    d: "M17.9,22.7c1.9,0,3.4,1.6,3.4,3.4c0,1.9-1.6,3.4-3.4,3.4c-1.9,0-3.5-1.6-3.5-3.4C14.5,24.2,16,22.7,17.9,22.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: undefined
  }), isHomepage && __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  }, __jsx("path", {
    className: "st1",
    d: "M54.2,34.1v-7.5c0-0.9-0.1-1.6-0.4-2c-0.3-0.6-0.9-0.8-1.8-0.8c-0.9,0-1.5,0.3-1.9,0.8c-0.3,0.4-0.5,1.1-0.5,2v7.4h-4.1V20.4h3.8v1.5h0.1c0.8-1.3,2-1.9,3.7-1.9c1.4,0,2.6,0.4,3.5,1.2c0.6,0.5,1,1.2,1.3,2c0.2,0.7,0.3,1.5,0.3,2.4v8.6H54.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: undefined
  }), __jsx("path", {
    className: "st1",
    d: "M68.8,34.1v-7.4c0-0.9-0.1-1.5-0.4-2c-0.4-0.6-1-0.9-1.8-0.9c-0.8,0-1.4,0.3-1.8,0.8c-0.3,0.4-0.5,1.1-0.5,1.9v7.6h-4.1V15.8h4.1v5.8h0c0.3-0.6,0.8-1.1,1.5-1.3c0.6-0.3,1.2-0.4,2-0.4c1.6,0,2.9,0.5,3.7,1.5c0.6,0.7,1,1.5,1.1,2.4c0.1,0.4,0.1,0.8,0.1,1.3c0,0.2,0,0.4,0,0.7v8.3H68.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  }), __jsx("path", {
    className: "st1",
    d: "M85,34.1v-1.5h0c-0.3,0.7-0.9,1.2-1.7,1.5c-0.7,0.3-1.4,0.4-2.3,0.4c-2.1,0-3.7-0.7-5-2.1c-1.2-1.4-1.9-3.1-1.9-5.2c0-2,0.6-3.8,1.9-5.2c1.3-1.4,3-2.2,5-2.2c0.8,0,1.6,0.2,2.3,0.5c0.8,0.3,1.3,0.8,1.7,1.5h0v-1.5h4.1v13.7H85z M84.1,24.7c-0.6-0.7-1.5-1-2.5-1c-1,0-1.8,0.3-2.4,1c-0.6,0.7-0.9,1.5-0.9,2.5c0,1,0.3,1.8,1,2.4c0.7,0.7,1.5,1,2.4,1c1,0,1.8-0.3,2.5-1c0.6-0.7,1-1.5,1-2.5C85,26.2,84.7,25.4,84.1,24.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: undefined
  }), __jsx("path", {
    className: "st1",
    d: "M101.5,34.1v-1.5h0c-0.4,0.7-1,1.2-1.8,1.5c-0.7,0.3-1.4,0.4-2.3,0.4c-2,0-3.7-0.7-5-2.1c-1.2-1.4-1.9-3.1-1.9-5.2c0-2,0.6-3.7,1.8-5.1c1.3-1.4,2.9-2.2,4.9-2.2c1.6,0,3,0.5,4,1.6v-5.7h4.1v18.2H101.5z M100.5,24.7c-0.7-0.6-1.5-1-2.5-1c-1,0-1.8,0.3-2.5,1c-0.7,0.6-1,1.5-1,2.5c0,1,0.3,1.8,1,2.5c0.6,0.7,1.5,1,2.5,1c1,0,1.9-0.3,2.5-1c0.6-0.7,1-1.5,1-2.5C101.5,26.2,101.2,25.4,100.5,24.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: undefined
  }), __jsx("path", {
    className: "st1",
    d: "M117.6,34.1v-1.5h0c-0.3,0.7-0.9,1.2-1.7,1.5c-0.7,0.3-1.4,0.4-2.3,0.4c-2.1,0-3.7-0.7-5-2.1c-1.2-1.4-1.9-3.1-1.9-5.2c0-2,0.6-3.8,1.9-5.2c1.3-1.4,3-2.2,5-2.2c0.8,0,1.6,0.2,2.3,0.5c0.8,0.3,1.3,0.8,1.7,1.5h0v-1.5h4.1v13.7H117.6z M116.6,24.7c-0.6-0.7-1.5-1-2.5-1c-1,0-1.8,0.3-2.4,1c-0.6,0.7-0.9,1.5-0.9,2.5c0,1,0.3,1.8,1,2.4c0.7,0.7,1.5,1,2.4,1c1,0,1.8-0.3,2.5-1c0.6-0.7,1-1.5,1-2.5C117.6,26.2,117.3,25.4,116.6,24.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: undefined
  }), __jsx("path", {
    className: "st1",
    d: "M128.6,23.5v10.6h-4.1V23.5h-2v-3.1h2v-4.6h4.1v4.6h2v3.1H128.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: undefined
  }), __jsx("path", {
    className: "st1",
    d: "M148.3,34.1v-7.3c0-0.9-0.1-1.6-0.3-2.1c-0.3-0.6-0.9-1-1.8-1c-0.8,0-1.4,0.3-1.8,0.8c-0.3,0.5-0.5,1.1-0.5,2v7.5h-4.1v-7.4c0-0.9-0.1-1.5-0.4-2c-0.3-0.6-0.9-0.9-1.7-0.9c-0.9,0-1.5,0.3-1.9,0.9c-0.3,0.5-0.4,1.2-0.4,2.1v7.3h-4.1V20.4h3.8v1.5h0.1c0.4-0.7,0.9-1.2,1.6-1.5c0.6-0.3,1.3-0.4,2.2-0.4c1.7,0,3.1,0.8,3.9,2.4c1-1.6,2.5-2.4,4.3-2.4c1.5,0,2.7,0.5,3.6,1.4c0.7,0.7,1.1,1.5,1.3,2.5c0.1,0.4,0.1,0.8,0.1,1.4c0,0.2,0,0.4,0,0.7v8.2H148.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: undefined
  }), __jsx("path", {
    className: "st1",
    d: "M166.2,32.4c-1.4,1.4-3.2,2.1-5.3,2.1c-2.1,0-3.9-0.7-5.2-2.1c-1.4-1.4-2.1-3.1-2.1-5.2c0-2.1,0.7-3.8,2.1-5.2c1.4-1.4,3.1-2.1,5.2-2.1c2.1,0,3.9,0.7,5.3,2.1c1.4,1.4,2.1,3.1,2.1,5.2C168.3,29.3,167.6,31.1,166.2,32.4z M163.3,24.8c-0.6-0.7-1.4-1-2.4-1c-0.9,0-1.7,0.3-2.3,1c-0.6,0.7-0.9,1.5-0.9,2.4c0,0.9,0.3,1.7,0.9,2.4c0.6,0.7,1.4,1,2.3,1c0.9,0,1.7-0.3,2.4-1c0.6-0.7,0.9-1.5,0.9-2.4C164.2,26.3,163.9,25.5,163.3,24.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: undefined
  }), __jsx("path", {
    className: "st1",
    d: "M169.7,19v-3.1h4.1V19H169.7z M169.7,34.1V20.4h4.1v13.7H169.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: undefined
  })), __jsx("path", {
    className: "st0",
    d: "M34.6,13.3L20,0.8c-1.2-1.1-3-1.1-4.3,0L1.2,13.3C0.4,13.9,0,14.8,0,15.8v21C0,38.5,1.5,40,3.3,40h12.6l-0.9-0.6c-1.1-0.8-3-2.2-4.8-4.2h-2c-1.8,0-3.3-1.5-3.3-3.3V18c0-1,0.4-1.9,1.2-2.5l9.7-8.3c1.2-1.1,3-1.1,4.3,0l9.6,8.3c0.7,0.6,1.1,1.5,1.1,2.5v13.8c0,1.8-1.5,3.3-3.3,3.3h-2c-1.6,1.9-3.4,3.2-4.7,4.2L19.9,40h12.5c1.8,0,3.3-1.5,3.3-3.3v-21C35.7,14.8,35.3,13.9,34.6,13.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: undefined
  }))))))), __jsx("div", {
    className: "header__center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: undefined
  }, __jsx("div", {
    className: "header__center__search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: undefined
  }, __jsx("div", {
    className: "header__center__search__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: undefined
  }, __jsx("path", {
    d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: undefined
  }))), __jsx("div", {
    className: "header__center__search__box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_38___default.a, {
    placeholder: placeholderSearch,
    defaultValue: keywordSearch,
    onKeyUp: e => onChangeWards(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: undefined
  })), __jsx("div", {
    className: "header__center__search__type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: handleClickSearchType,
    "aria-describedby": id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 320 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: undefined
  }, __jsx("path", {
    d: "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: undefined
  })), typeSearch.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Popover"], {
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
    className: "header__center__search__type__popup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Typography"], {
    component: 'span',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    button: true,
    onClick: event => handleChangeType(dropdownSearch[0]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    primary: dropdownSearch[0].name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    button: true,
    onClick: event => handleChangeType(dropdownSearch[1]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    primary: dropdownSearch[1].name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: undefined
  }))))), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: "header__center__search__button",
    variant: "outlined",
    onClick: onClickSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: undefined
  }, __jsx("path", {
    d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "header__right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: undefined
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_24___default.a, {
    smDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: undefined
  }, userInfo._id && __jsx("a", {
    href: "https://moigioi.nhadatmoi.net/asl/create",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: "header_button _full",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: undefined
  }, "\u0110\u0103ng tin")), !userInfo._id && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: "header_button _full",
    variant: "outlined",
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: undefined
  }, "\u0110\u0103ng tin"), userInfo._id ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: "header_button _no_padding",
    "aria-describedby": id,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Avatar"], {
    alt: userInfo.first_name,
    src: userInfo.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Popover"], {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    className: "header_button__popup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Typography"], {
    component: 'span',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://moigioi.nhadatmoi.net",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    alignItems: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemAvatar"], {
    className: "header_button__popup__avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Avatar"], {
    alt: userInfo.first_name,
    src: userInfo.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    className: "header_button__popup__title",
    primary: `${userInfo.first_name} ${userInfo.last_name}`,
    secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Typography"], {
      component: "span",
      variant: "body2",
      color: "textPrimary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: undefined
    }, userInfo.email)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: undefined
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: undefined
  }), __jsx("a", {
    href: "https://moigioi.nhadatmoi.net",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: undefined
  }, __jsx(_material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_31___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    primary: "N\xE2ng c\u1EA5p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }))), __jsx("a", {
    href: "https://moigioi.nhadatmoi.net/asl/list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: undefined
  }, __jsx(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_34___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    primary: "Qu\u1EA3n l\xFD tin rao",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: undefined
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: undefined
  }), __jsx("a", {
    href: "https://moigioi.nhadatmoi.net/user_info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_33___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    primary: "C\xE0i \u0111\u1EB7t",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    button: true,
    onClick: () => logout(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_32___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    primary: "\u0110\u0103ng xu\u1EA5t",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: undefined
  }))))) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: "header_button _border",
    variant: "outlined",
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    },
    __self: undefined
  }, "\u0110\u0103ng nh\u1EADp"), __jsx("div", {
    className: 'mega_menu_asl',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/[slug]",
    as: '/tim-tin-rao',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: "header_button _empty" + (props.path === 'tin-rao' || props.path === 'nha-dat-ban' ? ' active' : ''),
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: undefined
  }, "Tin rao"))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_28___default.a, {
    className: 'card_asl',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: undefined
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_29___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    spacing: 2,
    className: 'card_asl__body',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://nhadatmoi.net/nha-dat-ban",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: undefined
  }, "Nh\xE0 \u0111\u1EA5t b\xE1n")), __jsx("a", {
    href: "https://nhadatmoi.net/mua-ban-nha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: undefined
  }, "B\xE1n nh\xE0")), __jsx("a", {
    href: 'https://nhadatmoi.net/mua-ban-can-ho-chung-cu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: undefined
  }, "B\xE1n c\u0103n h\u1ED9, chung c\u01B0")), __jsx("a", {
    href: 'https://nhadatmoi.net/mua-ban-biet-thu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: undefined
  }, "B\xE1n bi\u1EC7t th\u1EF1")), __jsx("a", {
    href: 'https://nhadatmoi.net/mua-ban-dat',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485
    },
    __self: undefined
  }, "B\xE1n \u0111\u1EA5t")), __jsx("a", {
    href: 'https://nhadatmoi.net/mua-ban-bat-dong-san-khac',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: undefined
  }, "B\xE1n c\xE1c lo\u1EA1i b\u1EA5t \u0111\u1ED9ng s\u1EA3n kh\xE1c"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://nhadatmoi.net/nha-dat-thue',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: undefined
  }, "Nh\xE0 \u0111\u1EA5t thu\xEA")), __jsx("a", {
    href: 'https://nhadatmoi.net/cho-thue-can-ho-chung-cu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: undefined
  }, "Cho thu\xEA c\u0103n h\u1ED9 chung c\u01B0")), __jsx("a", {
    href: 'https://nhadatmoi.net/cho-thue-nha-rieng',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: undefined
  }, "Cho thu\xEA nh\xE0 ri\xEAng")), __jsx("a", {
    href: 'https://nhadatmoi.net/cho-thue-nha-mat-pho',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: undefined
  }, "Cho thu\xEA nh\xE0 m\u1EB7t ph\u1ED1")), __jsx("a", {
    href: 'https://nhadatmoi.net/cho-thue-nha-tro-phong-tro',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: undefined
  }, "Cho thu\xEA nh\xE0 tr\u1ECD, ph\xF2ng tr\u1ECD")), __jsx("a", {
    href: 'https://nhadatmoi.net/cho-thue-van-phong',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: undefined
  }, "Cho thu\xEA v\u0103n ph\xF2ng")), __jsx("a", {
    href: 'https://nhadatmoi.net/cho-thue-cua-hang-kiot',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512
    },
    __self: undefined
  }, "Cho thu\xEA c\u1EEDa h\xE0ng, kiot")), __jsx("a", {
    href: 'https://nhadatmoi.net/cho-thue-kho-nha-xuong-dat',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515
    },
    __self: undefined
  }, "Cho thu\xEA kho, nh\xE0 x\u01B0\u1EDFng, \u0111\u1EA5t")), __jsx("a", {
    href: 'https://nhadatmoi.net/cho-thue-cac-loai-bat-dong-san-khac',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: undefined
  }, "Cho thu\xEA c\xE1c lo\u1EA1i b\u1EA5t \u0111\u1ED9ng s\u1EA3n kh\xE1c"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://nhadatmoi.net/nha-dat-can-mua',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: undefined
  }, "Nh\xE0 \u0111\u1EA5t c\u1EA7n mua")), __jsx("a", {
    href: 'https://nhadatmoi.net/mua-can-ho-chung-cu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: undefined
  }, "Mua c\u0103n h\u1ED9 chung c\u01B0")), __jsx("a", {
    href: 'https://nhadatmoi.net/mua-nha-rieng',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: undefined
  }, "Mua nh\xE0 ri\xEAng")), __jsx("a", {
    href: 'https://nhadatmoi.net/mua-nha-biet-thu-lien-ke',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: undefined
  }, "Mua nh\xE0 bi\u1EC7t th\u1EF1, li\u1EC1n k\u1EC1")), __jsx("a", {
    href: 'https://nhadatmoi.net/mua-nha-mat-pho',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535
    },
    __self: undefined
  }, "Mua nh\xE0 m\u1EB7t ph\u1ED1")), __jsx("a", {
    href: 'https://nhadatmoi.net/mua-dat-nen-du-an',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: undefined
  }, "Mua \u0111\u1EA5t n\u1EC1n d\u1EF1 \xE1n")), __jsx("a", {
    href: 'https://nhadatmoi.net/mua-dat',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: undefined
  }, "Mua \u0111\u1EA5t")), __jsx("a", {
    href: 'https://nhadatmoi.net/mua-trang-trai-khu-nghi-duong',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: undefined
  }, "Mua trang tr\u1EA1i, khu ngh\u1EC9 d\u01B0\u1EE1ng")), __jsx("a", {
    href: 'https://nhadatmoi.net/mua-kho-nha-xuong',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: undefined
  }, "Mua kho, nh\xE0 x\u01B0\u1EDFng")), __jsx("a", {
    href: 'https://nhadatmoi.net/mua-cac-loai-bat-dong-san-khac',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: undefined
  }, "Mua c\xE1c lo\u1EA1i b\u1EA5t \u0111\u1ED9ng s\u1EA3n kh\xE1c"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: undefined
  }, __jsx("a", {
    href: 'https://nhadatmoi.net/nha-dat-can-thue',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: undefined
  }, "Nh\xE0 \u0111\u1EA5t c\u1EA7n thu\xEA")), __jsx("a", {
    href: 'https://nhadatmoi.net/can-thue-can-ho-chung-cu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: undefined
  }, "C\u1EA7n thu\xEA c\u0103n h\u1ED9 chung c\u01B0")), __jsx("a", {
    href: 'https://nhadatmoi.net/can-thue-nha-rieng',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: undefined
  }, "C\u1EA7n thu\xEA nh\xE0 ri\xEAng")), __jsx("a", {
    href: 'https://nhadatmoi.net/can-thue-nha-mat-pho',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564
    },
    __self: undefined
  }, "C\u1EA7n thu\xEA nh\xE0 m\u1EB7t ph\u1ED1")), __jsx("a", {
    href: 'https://nhadatmoi.net/can-thue-nha-tro-phong-tro',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
    },
    __self: undefined
  }, "C\u1EA7n thu\xEA nh\xE0 tr\u1ECD, ph\xF2ng tr\u1ECD")), __jsx("a", {
    href: 'https://nhadatmoi.net/can-thue-van-phong',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570
    },
    __self: undefined
  }, "C\u1EA7n thu\xEA v\u0103n ph\xF2ng")), __jsx("a", {
    href: 'https://nhadatmoi.net/can-thue-cua-hang-kiot',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573
    },
    __self: undefined
  }, "C\u1EA7n thu\xEA c\u1EEDa h\xE0ng, kiot")), __jsx("a", {
    href: 'https://nhadatmoi.net/can-thue-kho-nha-xuong-dat',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
    },
    __self: undefined
  }, "C\u1EA7n thu\xEA kho, nh\xE0 x\u01B0\u1EDFng, \u0111\u1EA5t")), __jsx("a", {
    href: 'https://nhadatmoi.net/can-thue-cac-loai-bat-dong-san-khac',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578
    },
    __self: undefined
  }, __jsx("div", {
    className: 'card_asl__body__item__child',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579
    },
    __self: undefined
  }, "C\u1EA7n thu\xEA c\xE1c lo\u1EA1i b\u1EA5t \u0111\u1ED9ng s\u1EA3n kh\xE1c"))))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/du-an-bat-dong-san",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: "header_button _empty" + (props.path === 'du-an' || props.path === 'du-an-bat-dong-san' ? ' active' : ''),
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: undefined
  }, "D\u1EF1 \xE1n")))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_24___default.a, {
    mdUp: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default.a, {
    edge: "start",
    className: "header_button _menu",
    "aria-label": "open drawer",
    onClick: toggleDrawer('right', true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597
    },
    __self: undefined
  })))), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13___default.a, {
    anchor: "right",
    open: state.right,
    onClose: toggleDrawer('right', false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: undefined
  }, __jsx("div", {
    className: "header__menu_mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Typography"], {
    className: "header__menu_mobile__body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
    },
    __self: undefined
  }, userInfo._id && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    alignItems: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemAvatar"], {
    className: "header__menu_mobile__avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Avatar"], {
    alt: userInfo.first_name,
    src: userInfo.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    className: "header__menu_mobile__title",
    primary: `${userInfo.first_name} ${userInfo.last_name}`,
    secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Typography"], {
      component: "span",
      variant: "body2",
      color: "textPrimary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 615
      },
      __self: undefined
    }, userInfo.email)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610
    },
    __self: undefined
  })), !userInfo._id && __jsx(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, __jsx("a", {
    href: "https://moigioi.nhadatmoi.net/settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    alignItems: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemAvatar"], {
    className: "header__menu_mobile__avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Avatar"], {
    alt: "Kh\xE1ch gh\xE9 th\u0103m",
    src: "https://static.nhadatmoi.net/default/user.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    className: "header__menu_mobile__title",
    primary: "Ch\xE0o m\u1EEBng Kh\xE1ch",
    secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 639
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Typography"], {
      component: "span",
      variant: "body2",
      className: classes.inline,
      color: "textPrimary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 640
      },
      __self: undefined
    }, "B\u1EA5t \u0110\u1ED9ng S\u1EA3n M\u1EDBi")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635
    },
    __self: undefined
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654
    },
    __self: undefined
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/[slug]",
    as: '/tim-tin-rao',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    primary: "Tin rao",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661
    },
    __self: undefined
  })))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/du-an-bat-dong-san",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668
    },
    __self: undefined
  }, __jsx(_material_ui_icons_FilterVintage__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    primary: "D\u1EF1 \xE1n",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671
    },
    __self: undefined
  })))), userInfo._id && __jsx("a", {
    href: "https://moigioi.nhadatmoi.net/asl/create",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678
    },
    __self: undefined
  }, __jsx(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    primary: "\u0110\u0103ng tin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: undefined
  }))), !userInfo._id && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    button: true,
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689
    },
    __self: undefined
  }, __jsx(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    primary: "\u0110\u0103ng tin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692
    },
    __self: undefined
  })), !userInfo._id && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    button: true,
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_22___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    primary: "\u0110\u0103ng nh\u1EADp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701
    },
    __self: undefined
  })), userInfo._id && __jsx("a", {
    href: "https://moigioi.nhadatmoi.net",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709
    },
    __self: undefined
  }, __jsx(_material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_31___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    primary: "N\xE2ng c\u1EA5p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712
    },
    __self: undefined
  }))), userInfo._id && __jsx("a", {
    href: "https://moigioi.nhadatmoi.net/asl/list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721
    },
    __self: undefined
  }, __jsx(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_34___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    primary: "Qu\u1EA3n l\xFD tin rao",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724
    },
    __self: undefined
  }))), userInfo._id && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 731
    },
    __self: undefined
  }), userInfo._id && __jsx("a", {
    href: "https://moigioi.nhadatmoi.net/settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_33___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    primary: "C\xE0i \u0111\u1EB7t",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740
    },
    __self: undefined
  }))), userInfo._id && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItem"], {
    button: true,
    onClick: () => logout(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_32___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["ListItemText"], {
    primary: "\u0110\u0103ng xu\u1EA5t",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750
    },
    __self: undefined
  })))))), dataCompare && !_modules_validator__WEBPACK_IMPORTED_MODULE_25__["default"].isBlank(dataCompare) && dataCompare.length !== 0 && __jsx("div", {
    className: "footer_compare",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759
    },
    __self: undefined
  }, __jsx("div", {
    className: 'footer_compare_boder',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer_compare__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761
    },
    __self: undefined
  }, __jsx("div", {
    className: 'footer_compare__content__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762
    },
    __self: undefined
  }, dataCompare && dataCompare.length > 0 && dataCompare[0] && __jsx("div", {
    className: 'footer_compare__content__item__avatar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 352 512",
    onClick: () => handleClickRemoveCompare(dataCompare[0]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766
    },
    __self: undefined
  }, __jsx("path", {
    d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766
    },
    __self: undefined
  })), __jsx("img", {
    src: dataCompare[0].avatar,
    alt: dataCompare[0].title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767
    },
    __self: undefined
  }))), __jsx("div", {
    className: 'footer_compare__content__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771
    },
    __self: undefined
  }, dataCompare && dataCompare.length > 0 && dataCompare[1] && __jsx("div", {
    className: 'footer_compare__content__item__avatar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 352 512",
    onClick: () => handleClickRemoveCompare(dataCompare[1]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775
    },
    __self: undefined
  }, __jsx("path", {
    d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775
    },
    __self: undefined
  })), __jsx("img", {
    src: dataCompare[1].avatar,
    alt: dataCompare[1].title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776
    },
    __self: undefined
  }))), __jsx("div", {
    className: 'footer_compare__content__item hide_mobile',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780
    },
    __self: undefined
  }, dataCompare && dataCompare.length > 0 && dataCompare[2] && __jsx("div", {
    className: 'footer_compare__content__item__avatar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 352 512",
    onClick: () => handleClickRemoveCompare(dataCompare[2]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 784
    },
    __self: undefined
  }, __jsx("path", {
    d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 784
    },
    __self: undefined
  })), __jsx("img", {
    src: dataCompare[2].avatar,
    alt: dataCompare[2].title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 785
    },
    __self: undefined
  }))), __jsx("div", {
    className: 'footer_compare__content__item hide_mobile',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789
    },
    __self: undefined
  }, dataCompare && dataCompare.length > 0 && dataCompare[3] && __jsx("div", {
    className: 'footer_compare__content__item__avatar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 352 512",
    onClick: () => handleClickRemoveCompare(dataCompare[3]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793
    },
    __self: undefined
  }, __jsx("path", {
    d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793
    },
    __self: undefined
  })), __jsx("img", {
    src: dataCompare[3].avatar,
    alt: dataCompare[3].title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794
    },
    __self: undefined
  })))), __jsx("div", {
    className: "footer_compare__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: 'btn_compare',
    onClick: () => clickToCompare(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800
    },
    __self: undefined
  }, "SO S\xC1NH"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: 'btn_cancel',
    onClick: () => clickCancelCompare(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 801
    },
    __self: undefined
  }, "HU\u1EF6 B\u1ECE")))), __jsx("div", {
    className: "header_background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806
    },
    __self: undefined
  }), (props.path === '' || props.path === 'tim-tin-rao' || props.path === 'du-an-bat-dong-san') && __jsx(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, userInfo._id && __jsx("a", {
    href: "https://moigioi.nhadatmoi.net/asl/create",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812
    },
    __self: undefined
  }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_23___default.a, {
    "aria-label": "Đăng bài mới",
    className: "header_button__float",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_21___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814
    },
    __self: undefined
  }))), !userInfo._id && __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_23___default.a, {
    "aria-label": "Đăng bài mới",
    className: "header_button__float",
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 820
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_21___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 821
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderPage);

/***/ }),

/***/ "./components/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Layout/Header.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Layout/Footer.tsx");
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/validator */ "./modules/validator.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");

var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Layout\\Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];




 //Import Constants




const LayoutPage = props => {
  const [statusModal, setModal] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);

  const updateModal = data => {
    if (typeof props.updateModal !== "undefined") {
      props.updateModal(data);
    } else {
      setModal(data);
    }
  };

  const [dataCompareLocal, setDataCompareLocal] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__["localStorageCompareKey"]) && !_modules_validator__WEBPACK_IMPORTED_MODULE_5__["default"].isBlank(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__["localStorageCompareKey"]))) {
      try {
        setDataCompareLocal(JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__["localStorageCompareKey"])));
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  let schemaObject = '{"@context": "https://schema.org", "@type": "LocalBusiness", "name": "Bất Động Sản Nội thất Dodo", "image": "https://pbs.twimg.com/profile_images/1230120113887531008/BPH75bW0_400x400.jpg", "additionalType":["https://vi.wikipedia.org/wiki/B%E1%BA%A5t_%C4%91%E1%BB%99ng_s%E1%BA%A3n","https://vi.wikipedia.org/wiki/M%C3%B4i_gi%E1%BB%9Bi_b%E1%BA%A5t_%C4%91%E1%BB%99ng_s%E1%BA%A3n","https://vi.wikipedia.org/wiki/Ng%C6%B0%E1%BB%9Di_m%C3%B4i_gi%E1%BB%9Bi"], "paymentAccepted":"Cash, Visa, Mastercard, American Express, Debit, PayPal, Apple Pay", "mainEntityOfPage":"https://www.google.com/maps?cid=6255054938969620475", "hasmap":"https://search.google.com/local/writereview?placeid=ChIJ-UI6Mh5TNDER-z_Wh1NrzlY", "description":"Nội thất Dodo đón đầu xu hướng bất động sản 4.0 tại Việt Nam, tích hợp trí tuệ nhân tạo để xử lý các dữ liệu, phân tích nhu cầu của cả người mua lẫn người bán", "@id": "https://nhadatmoi.net/", "url": "https://nhadatmoi.net/", "telephone": "0936.33.81.39", "priceRange": "1000 $", "address": { "@type": "PostalAddress", "streetAddress": "Số 348 Tố Hữu, phường La Khê, quận Hà Đông", "addressLocality": "Hà Nội", "postalCode": "100000", "addressCountry": "VN"}, "geo": { "@type": "GeoCoordinates", "latitude": 20.9709496, "longitude": 105.7531617 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification","dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" }, "sameAs": ["https://www.youtube.com/channel/UCCvlOD7vTPJeYRY8IrINguQ","https://bdsnhadatmoi.blogspot.com", "https://www.facebook.com/nhadatmoi.net", "https://bdsnhadatmoi.blogspot.com", "https://vi.gravatar.com/bdsnhadatmoi", "https://bdsnhadatmoi.tumblr.com", "https://bdsnhadatmoi.weebly.com", "https://twitter.com/bdsnhadatmoi", "https://www.reddit.com/user/bdsnhadatmoi", "https://www.diigo.com/profile/bdsnhadatmoi", "https://www.artfire.com/ext/people/bdsnhadatmoi", "https://www.smashwords.com/profile/view/bdsnhadatmoi", "http://play.fm/bdsnhadatmoi", "https://www.last.fm/user/bdsnhadatmoi", "https://www.strava.com/athletes/bdsnhadatmoi", "https://github.com/bdsnhadatmoi", "https://www.tripadvisor.com.vn/Profile/bdsnhadatmoi", "http://bit.ly/2uaZPLm", "https://getpocket.com/@bdsnhadatmoi", "https://www.pinterest.com/bdsnhadatmoi", "https://www.linkedin.com/in/bdsnhadatmoi", "https://www.flickr.com/people/bdsnhadatmoi", "https://about.me/bdsnhadatmoi", "https://www.instapaper.com/p/bdsnhadatmoi", "https://www.behance.net/bdsnhadatmoi", "https://myspace.com/bdsnhadatmoi", "https://www.goodreads.com/bdsnhadatmoi", "https://dribbble.com/bdsnhadatmoi", "https://www.deviantart.com/bdsnhadatmoi", "https://www.plurk.com/bdsnhadatmoi", "http://www.folkd.com/user/bdsnhadatmoi", "https://www.ted.com/profiles/19025977", "https://kinja.com/bdsnhadatmoi", "https://ello.co/bdsnhadatmoi", "https://coub.com/bdsnhadatmoi", "https://mix.com/bdsnhadatmoi", "http://www.authorstream.com/bdsnhadatmoi", "https://soundcloud.com/bdsnhadatmoi", "https://medium.com/@bdsnhadatmoi", "https://codepen.io/bdsnhadatmoi", "https://www.evernote.com/pub/ndmh269/tintuc", "https://disqus.com/by/bdsnhadatmoi", "https://www.scoop.it/u/b-t-ng-s-n-nha-t-m-i", "https://www.vingle.net/bdsnhadatmoi", "https://www.quora.com/profile/Bat-Dong-San-Nha-Dat-Moi", "https://bdsnhadatmoi.livejournal.com", "https://angel.co/bdsnhadatmoi", "https://www.producthunt.com/@bdsnhadatmoi", "https://speakerdeck.com/bdsnhadatmoi", "https://www.wikihow.com/User:Bdsnhadatmoi", "http://bdsnhadatmoi.brandyourself.com"]}';
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, props.title), __jsx("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx("link", {
    rel: "canonical",
    href: props.canonical,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "https://static.nhadatmoi.net/default/icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900&display=swap&subset=vietnamese",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx("meta", {
    name: "google-site-verification",
    content: _constants__WEBPACK_IMPORTED_MODULE_6__["googleSearchConsole"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), !_modules_validator__WEBPACK_IMPORTED_MODULE_5__["default"].isBlank(props.description) && __jsx("meta", {
    name: "description",
    content: props.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:title",
    content: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "fb:app_id",
    content: "937234366335504",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "fb:admins",
    content: "100004244474013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:site_name",
    content: "N\u1ED9i th\u1EA5t Dodo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:url",
    content: props.canonical,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:image",
    content: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), __jsx("meta", {
    "data-n-head": "true",
    property: "og:description",
    content: props.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:card",
    content: "summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:site",
    content: "@nhadatmoi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:creator",
    content: "@nhadatmoi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:title",
    content: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:description",
    content: props.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), __jsx("meta", {
    "data-n-head": "true",
    name: "twitter:image",
    content: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }), __jsx("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: schemaObject
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    statusModal: typeof props.statusModal !== "undefined" ? props.statusModal : statusModal,
    updateModal: updateModal,
    dataCompare: dataCompareLocal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  })), props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutPage);

/***/ }),

/***/ "./components/Login/Modal.tsx":
/*!************************************!*\
  !*** ./components/Login/Modal.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\components\\Login\\Modal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content'
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120
  },
  formControlLabel: {
    marginTop: theme.spacing(1)
  }
}));

const LoginModal = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fullWidth: true,
    open: props.statusModal,
    onClose: props.onClose,
    "aria-labelledby": "max-width-dialog-title",
    maxWidth: 'md',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("div", {
    className: "login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("div", {
    className: "login__close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "outlined",
    className: "login__close__button",
    onClick: props.onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }))), __jsx("div", {
    className: "login__modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("div", {
    className: "login__modal__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "\u0110\u0103ng nh\u1EADp N\u1ED9i th\u1EA5t Dodo"), __jsx("div", {
    className: "login__modal__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Khi \u0110\u0103ng nh\u1EADp b\u1EA1n c\xF3 th\u1EC3 \u0111\u0103ng tin, theo d\xF5i, b\xECnh lu\u1EADn v\xE0 \u0111\xE1nh gi\xE1 c\xE1c tin rao v\xE0 r\u1EA5t nhi\u1EC1u t\xEDnh n\u0103ng h\u1EEFu \xEDch."), __jsx("div", {
    className: "login__modal__block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "login__modal__block__google",
    href: _constants__WEBPACK_IMPORTED_MODULE_5__["googleLogin"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 533.5 544.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("path", {
    className: "st0",
    d: "M533.5,278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1,33.8-25.7,63.7-54.4,82.7v68h87.7\r C503.9,431.2,533.5,361.2,533.5,278.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx("path", {
    className: "st1",
    d: "M272.1,544.3c73.4,0,135.3-24.1,180.4-65.7l-87.7-68c-24.4,16.6-55.9,26-92.6,26c-71,0-131.2-47.9-152.8-112.3\r H28.9v70.1C75.1,486.3,169.2,544.3,272.1,544.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx("path", {
    className: "st2",
    d: "M119.3,324.3c-11.4-33.8-11.4-70.4,0-104.2V150H28.9c-38.6,76.9-38.6,167.5,0,244.4L119.3,324.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx("path", {
    className: "st3",
    d: "M272.1,107.7c38.8-0.6,76.3,14,104.4,40.8l0,0l77.7-77.7C405,24.6,339.7-0.8,272.1,0C169.2,0,75.1,58,28.9,150\r l90.4,70.1C140.8,155.6,201.1,107.7,272.1,107.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }))), __jsx("p", {
    className: "google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "\u0110\u0102NG NH\u1EACP B\u1EB0NG GOOGLE")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "login__modal__block__zalo",
    href: _constants__WEBPACK_IMPORTED_MODULE_5__["zaloLogin"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 460.1 436.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("path", {
    className: "st0",
    d: "M82.6 380.9c-1.8-.8-3.1-1.7-1-3.5 1.3-1 2.7-1.9 4.1-2.8 13.1-8.5 25.4-17.8 33.5-31.5 6.8-11.4 5.7-18.1-2.8-26.5C69 269.2 48.2 212.5 58.6 145.5 64.5 107.7 81.8 75 107 46.6c15.2-17.2 33.3-31.1 53.1-42.7 1.2-.7 2.9-.9 3.1-2.7-.4-1-1.1-.7-1.7-.7-33.7 0-67.4-.7-101 .2C28.3 1.7.5 26.6.6 62.3c.2 104.3 0 208.6 0 313 0 32.4 24.7 59.5 57 60.7 27.3 1.1 54.6.2 82 .1 2 .1 4 .2 6 .2H290c36 0 72 .2 108 0 33.4 0 60.5-27 60.5-60.3v-.6-58.5c0-1.4.5-2.9-.4-4.4-1.8.1-2.5 1.6-3.5 2.6-19.4 19.5-42.3 35.2-67.4 46.3-61.5 27.1-124.1 29-187.6 7.2-5.5-2-11.5-2.2-17.2-.8-8.4 2.1-16.7 4.6-25 7.1-24.4 7.6-49.3 11-74.8 6zm72.5-168.5c1.7-2.2 2.6-3.5 3.6-4.8 13.1-16.6 26.2-33.2 39.3-49.9 3.8-4.8 7.6-9.7 10-15.5 2.8-6.6-.2-12.8-7-15.2-3-.9-6.2-1.3-9.4-1.1-17.8-.1-35.7-.1-53.5 0-2.5 0-5 .3-7.4.9-5.6 1.4-9 7.1-7.6 12.8 1 3.8 4 6.8 7.8 7.7 2.4.6 4.9.9 7.4.8 10.8.1 21.7 0 32.5.1 1.2 0 2.7-.8 3.6 1-.9 1.2-1.8 2.4-2.7 3.5-15.5 19.6-30.9 39.3-46.4 58.9-3.8 4.9-5.8 10.3-3 16.3s8.5 7.1 14.3 7.5c4.6.3 9.3.1 14 .1 16.2 0 32.3.1 48.5-.1 8.6-.1 13.2-5.3 12.3-13.3-.7-6.3-5-9.6-13-9.7-14.1-.1-28.2 0-43.3 0zm116-52.6c-12.5-10.9-26.3-11.6-39.8-3.6-16.4 9.6-22.4 25.3-20.4 43.5 1.9 17 9.3 30.9 27.1 36.6 11.1 3.6 21.4 2.3 30.5-5.1 2.4-1.9 3.1-1.5 4.8.6 3.3 4.2 9 5.8 14 3.9 5-1.5 8.3-6.1 8.3-11.3.1-20 .2-40 0-60-.1-8-7.6-13.1-15.4-11.5-4.3.9-6.7 3.8-9.1 6.9zm69.3 37.1c-.4 25 20.3 43.9 46.3 41.3 23.9-2.4 39.4-20.3 38.6-45.6-.8-25-19.4-42.1-44.9-41.3-23.9.7-40.8 19.9-40 45.6zm-8.8-19.9c0-15.7.1-31.3 0-47 0-8-5.1-13-12.7-12.9-7.4.1-12.3 5.1-12.4 12.8-.1 4.7 0 9.3 0 14v79.5c0 6.2 3.8 11.6 8.8 12.9 6.9 1.9 14-2.2 15.8-9.1.3-1.2.5-2.4.4-3.7.2-15.5.1-31 .1-46.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx("path", {
    className: "st1",
    d: "M139.5 436.2c-27.3 0-54.7.9-82-.1-32.3-1.3-57-28.4-57-60.7 0-104.3.2-208.6 0-313C.5 26.7 28.4 1.8 60.5.9c33.6-.9 67.3-.2 101-.2.6 0 1.4-.3 1.7.7-.2 1.8-2 2-3.1 2.7-19.8 11.6-37.9 25.5-53.1 42.7-25.1 28.4-42.5 61-48.4 98.9-10.4 66.9 10.5 123.7 57.8 171.1 8.4 8.5 9.5 15.1 2.8 26.5-8.1 13.7-20.4 23-33.5 31.5-1.4.8-2.8 1.8-4.2 2.7-2.1 1.8-.8 2.7 1 3.5.4.9.9 1.7 1.5 2.5 11.5 10.2 22.4 21.1 33.7 31.5 5.3 4.9 10.6 10 15.7 15.1 2.1 1.9 5.6 2.5 6.1 6.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx("path", {
    className: "st2",
    d: "M139.5 436.2c-.5-3.5-4-4.1-6.1-6.2-5.1-5.2-10.4-10.2-15.7-15.1-11.3-10.4-22.2-21.3-33.7-31.5-.6-.8-1.1-1.6-1.5-2.5 25.5 5 50.4 1.6 74.9-5.9 8.3-2.5 16.6-5 25-7.1 5.7-1.5 11.7-1.2 17.2.8 63.4 21.8 126 19.8 187.6-7.2 25.1-11.1 48-26.7 67.4-46.2 1-1 1.7-2.5 3.5-2.6.9 1.4.4 2.9.4 4.4v58.5c.2 33.4-26.6 60.6-60 60.9h-.5c-36 .2-72 0-108 0H145.5c-2-.2-4-.3-6-.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), __jsx("path", {
    className: "st1",
    d: "M155.1 212.4c15.1 0 29.3-.1 43.4 0 7.9.1 12.2 3.4 13 9.7.9 7.9-3.7 13.2-12.3 13.3-16.2.2-32.3.1-48.5.1-4.7 0-9.3.2-14-.1-5.8-.3-11.5-1.5-14.3-7.5s-.8-11.4 3-16.3c15.4-19.6 30.9-39.3 46.4-58.9.9-1.2 1.8-2.4 2.7-3.5-1-1.7-2.4-.9-3.6-1-10.8-.1-21.7 0-32.5-.1-2.5 0-5-.3-7.4-.8-5.7-1.3-9.2-7-7.9-12.6.9-3.8 3.9-6.9 7.7-7.8 2.4-.6 4.9-.9 7.4-.9 17.8-.1 35.7-.1 53.5 0 3.2-.1 6.3.3 9.4 1.1 6.8 2.3 9.7 8.6 7 15.2-2.4 5.7-6.2 10.6-10 15.5-13.1 16.7-26.2 33.3-39.3 49.8-1.1 1.3-2.1 2.6-3.7 4.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), __jsx("path", {
    className: "st1",
    d: "M271.1 159.8c2.4-3.1 4.9-6 9-6.8 7.9-1.6 15.3 3.5 15.4 11.5.3 20 .2 40 0 60 0 5.2-3.4 9.8-8.3 11.3-5 1.9-10.7.4-14-3.9-1.7-2.1-2.4-2.5-4.8-.6-9.1 7.4-19.4 8.7-30.5 5.1-17.8-5.8-25.1-19.7-27.1-36.6-2.1-18.3 4-33.9 20.4-43.5 13.6-8.1 27.4-7.4 39.9 3.5zm-35.4 36.5c.2 4.4 1.6 8.6 4.2 12.1 5.4 7.2 15.7 8.7 23 3.3 1.2-.9 2.3-2 3.3-3.3 5.6-7.6 5.6-20.1 0-27.7-2.8-3.9-7.2-6.2-11.9-6.3-11-.7-18.7 7.8-18.6 21.9zM340.4 196.9c-.8-25.7 16.1-44.9 40.1-45.6 25.5-.8 44.1 16.3 44.9 41.3.8 25.3-14.7 43.2-38.6 45.6-26.1 2.6-46.8-16.3-46.4-41.3zm25.1-2.4c-.2 5 1.3 9.9 4.3 14 5.5 7.2 15.8 8.6 23 3 1.1-.8 2-1.8 2.9-2.8 5.8-7.6 5.8-20.4.1-28-2.8-3.8-7.2-6.2-11.9-6.3-10.8-.6-18.4 7.6-18.4 20.1zM331.6 177c0 15.5.1 31 0 46.5.1 7.1-5.5 13-12.6 13.2-1.2 0-2.5-.1-3.7-.4-5-1.3-8.8-6.6-8.8-12.9v-79.5c0-4.7-.1-9.3 0-14 .1-7.7 5-12.7 12.4-12.7 7.6-.1 12.7 4.9 12.7 12.9.1 15.6 0 31.3 0 46.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }), __jsx("path", {
    className: "st0",
    d: "M235.7 196.3c-.1-14.1 7.6-22.6 18.5-22 4.7.2 9.1 2.5 11.9 6.4 5.6 7.5 5.6 20.1 0 27.7-5.4 7.2-15.7 8.7-23 3.3-1.2-.9-2.3-2-3.3-3.3-2.5-3.5-3.9-7.7-4.1-12.1zM365.5 194.5c0-12.4 7.6-20.7 18.4-20.1 4.7.1 9.1 2.5 11.9 6.3 5.7 7.6 5.7 20.5-.1 28-5.6 7.1-16 8.3-23.1 2.7-1.1-.8-2-1.8-2.8-2.9-3-4.1-4.4-9-4.3-14z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), __jsx("path", {
    className: "st3",
    d: "M66 1h328.1c35.9 0 65 29.1 65 65v303c0 35.9-29.1 65-65 65H66c-35.9 0-65-29.1-65-65V66C1 30.1 30.1 1 66 1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  })), __jsx("p", {
    className: "zalo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "\u0110\u0102NG NH\u1EACP B\u1EB0NG ZALO")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "login__modal__block__facebook",
    href: _constants__WEBPACK_IMPORTED_MODULE_5__["facebookLogin"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("path", {
    d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  })), __jsx("p", {
    className: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "\u0110\u0102NG NH\u1EACP B\u1EB0NG FACEBOOK"))), __jsx("div", {
    className: "login__modal__footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, "Khi \u1EA5n v\xE0o n\xFAt \u0110\u0103ng nh\u1EADp b\u1EA1n c\u1EA7n \u0111\u1ED3ng \xFD c\xE1c \u0110i\u1EC1u kho\u1EA3n v\xE0 Quy \u0111\u1ECBnh c\u1EE7a N\u1ED9i th\u1EA5t Dodo.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ }),

/***/ "./constants/index.ts":
/*!****************************!*\
  !*** ./constants/index.ts ***!
  \****************************/
/*! exports provided: mainURL, upgradePlanURL, upgradeIconURL, logoURL, apiBaseURL, apiGraphQLURL, googleLogin, zaloLogin, facebookLogin, urlImageAdSellLease, urlImageBroker, urlImageProject, imageDefaultBroker, imageDefaultProject, imageDefaultSlider, googleAnalyticsCode, googleSearchConsole, localStorageCompareKey, adSellLeaseType, localStorageViewed, localStorageProjectViewed, adSellLeaseCategory */
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

/***/ "./graphql/chat/mutation/index.ts":
/*!****************************************!*\
  !*** ./graphql/chat/mutation/index.ts ***!
  \****************************************/
/*! exports provided: CREATE_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_MESSAGE", function() { return CREATE_MESSAGE; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const CREATE_MESSAGE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation conversation($input: ConversationInput!) {
    conversation(input: $input) {
      id
      chat {
        send_user_id
        message {
          text
        }
      }
    }
  }
`;


/***/ }),

/***/ "./graphql/chat/queries/index.ts":
/*!***************************************!*\
  !*** ./graphql/chat/queries/index.ts ***!
  \***************************************/
/*! exports provided: GET_LIST_MESSAGE, GET_MESSAGE_BY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_MESSAGE", function() { return GET_LIST_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MESSAGE_BY_ID", function() { return GET_MESSAGE_BY_ID; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_LIST_MESSAGE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query conversations ($page: Int!, $limit: Int!) {
    conversations (page: $page, limit: $limit) {
      pageInfo {
        length
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          target {
            id
            avatar
            first_name
            last_name
            status
            last_activity
          }
        }
      }
    }
  }
`;
const GET_MESSAGE_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query conversation ($id: String!) {
    conversation (id: $id) {
      id
      target{
        id
        avatar
        first_name
        last_name
        status
        last_activity
      }
      chat{
        id
        send_user_id
        message{
          text
          attachment{
            type
            payload{
              url
            }
          }
        }
        status_check
        send_at
        read_at 
      }
      created_at
      updated_at
    }
  }
`;


/***/ }),

/***/ "./graphql/profile/queries/index.ts":
/*!******************************************!*\
  !*** ./graphql/profile/queries/index.ts ***!
  \******************************************/
/*! exports provided: GET_PROFILE, LOG_OUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE", function() { return GET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_PROFILE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query getProfile {
        profile {
            id,
            first_name,
            last_name,
            email,
            avatar,
        }
    }
`;
const LOG_OUT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query logoutProfile {
    logout {
      status
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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);


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

  return !isNaN(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(value)) && isFinite(value);
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

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
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

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

      var cb = listeners.get(entry.target);

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

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

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
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
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
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
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

        this.prefetch();
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

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
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

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

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

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
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
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
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
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
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
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
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
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
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

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
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
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
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
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
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
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

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

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
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
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;

__webpack_require__(/*! ../client/router */ "./node_modules/next/dist/client/router.js");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
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
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
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

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
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

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

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
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
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

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
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

exports.typeOf = typeOf;
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
exports.isValidElementType = isValidElementType;
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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-ga */ "next-ga");
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_ga__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./constants/index.ts");
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/validator */ "./modules/validator.tsx");
/* harmony import */ var _components_Layout_ErrorMainPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout/ErrorMainPage */ "./components/Layout/ErrorMainPage.tsx");


var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




 // @ts-ignore





const projectDetailPathname = '/chi-tiet-du-an.aspx';
const newLandDetailPathname = '/newland/project_detail.aspx';
const newLandAdSellLeasePathname = '/newland/properties_detail.aspx';
const adSellLeaseDetailPathname = '/chi-tiet-tin-rao.aspx';
const projectDetailNew = '/du-an/';
const adSellLeaseDetailNew = '/tin-rao/';
const projectCategory = '/du-an.aspx';
const adSellLeaseCategory = '/tin-rao.aspx';

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  static async getInitialProps({
    Component,
    ctx,
    res
  }) {
    if (ctx.asPath) {
      let urlObject = url__WEBPACK_IMPORTED_MODULE_3___default.a.parse(ctx.asPath);
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
    } = next_cookies__WEBPACK_IMPORTED_MODULE_5___default()(ctx);
    pageProps = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(pageProps, {
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

    if (!_modules_validator__WEBPACK_IMPORTED_MODULE_9__["default"].isBlank(pageProps.statusCode) && pageProps.statusCode !== 200) {
      return __jsx(_components_Layout_ErrorMainPage__WEBPACK_IMPORTED_MODULE_10__["default"], {
        statusCode: pageProps.statusCode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      });
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_ga__WEBPACK_IMPORTED_MODULE_7___default()(_constants__WEBPACK_IMPORTED_MODULE_8__["googleAnalyticsCode"], next_router__WEBPACK_IMPORTED_MODULE_6___default.a)(MyApp));

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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./constants/index.ts");
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cross-fetch/polyfill */ "cross-fetch/polyfill");
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_4__);





const client = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: _constants__WEBPACK_IMPORTED_MODULE_2__["apiBaseURL"],
  timeout: 30000
});

const api = (method, url, data) => client.request({
  data: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data),
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  method,
  url,
  withCredentials: true
}).then(response => response.data);

const apolloClient = new apollo_boost__WEBPACK_IMPORTED_MODULE_4___default.a({
  uri: _constants__WEBPACK_IMPORTED_MODULE_2__["apiGraphQLURL"],
  credentials: 'include',
  cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]({
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

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/InputBase":
/*!**********************************************!*\
  !*** external "@material-ui/core/InputBase" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),

/***/ "@material-ui/core/Popper":
/*!*******************************************!*\
  !*** external "@material-ui/core/Popper" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/icons/AddCircle":
/*!***********************************************!*\
  !*** external "@material-ui/icons/AddCircle" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddCircle");

/***/ }),

/***/ "@material-ui/icons/AddCircleOutline":
/*!******************************************************!*\
  !*** external "@material-ui/icons/AddCircleOutline" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddCircleOutline");

/***/ }),

/***/ "@material-ui/icons/ArrowForward":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowForward" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowForward");

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

/***/ "@material-ui/icons/ExitToApp":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ExitToApp" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

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

/***/ "@material-ui/icons/FilterVintage":
/*!***************************************************!*\
  !*** external "@material-ui/icons/FilterVintage" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterVintage");

/***/ }),

/***/ "@material-ui/icons/GroupAdd":
/*!**********************************************!*\
  !*** external "@material-ui/icons/GroupAdd" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GroupAdd");

/***/ }),

/***/ "@material-ui/icons/List":
/*!******************************************!*\
  !*** external "@material-ui/icons/List" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/List");

/***/ }),

/***/ "@material-ui/icons/ListAlt":
/*!*********************************************!*\
  !*** external "@material-ui/icons/ListAlt" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ListAlt");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

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

/***/ "@material-ui/icons/Settings":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Settings" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "@material-ui/icons/TagFaces":
/*!**********************************************!*\
  !*** external "@material-ui/icons/TagFaces" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TagFaces");

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

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

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

/***/ "jss":
/*!**********************!*\
  !*** external "jss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "jss-rtl":
/*!**************************!*\
  !*** external "jss-rtl" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss-rtl");

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

/***/ "moment/locale/es":
/*!***********************************!*\
  !*** external "moment/locale/es" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment/locale/es");

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

/***/ "nextjs-progressbar":
/*!*************************************!*\
  !*** external "nextjs-progressbar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nextjs-progressbar");

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

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

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

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

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
//# sourceMappingURL=_app.js.map