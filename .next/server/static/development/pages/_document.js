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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

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

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
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

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/vercel/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, /*#__PURE__*/_react.default.createElement(Document, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];

        if ((child === null || child === void 0 ? void 0 : child.type) === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    const appScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  const startingUrl = page === '/' ? '/index' : page;
  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/validator */ "./modules/validator.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\toan\\Desktop\\nhadatmoi\\pages\\_document.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Querystring = __webpack_require__(/*! querystring */ "querystring");


 // @ts-ignore

class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps(ctx) {
    let urlObject = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(ctx.asPath);
    let dataUrl = '';

    if (typeof urlObject.query === "string") {
      let urlString = Querystring.parse(urlObject.query);

      if (urlString && !_modules_validator__WEBPACK_IMPORTED_MODULE_3__["default"].isBlank(urlString.url)) {
        dataUrl = urlString.url;
      }
    }

    const sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["ServerStyleSheets"]();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => sheets.collect(__jsx(App, _extends({}, props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 66
        }
      })))
    });

    let initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
    initialProps = _objectSpread(_objectSpread({}, initialProps), {}, {
      styles: [__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        key: "styles",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }, initialProps.styles, sheets.getStyleElement())]
    });

    let dataReturn = _objectSpread({
      url_string: ''
    }, initialProps);

    dataReturn.url_string = dataUrl;
    return dataReturn;
  }

  render() {
    // @ts-ignore
    let urlString = this.props.url_string;
    return __jsx("html", {
      lang: "vi-VN",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "zalo_share",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "zalo-share__logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, __jsx("svg", {
      viewBox: "0 0 173.7 40",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, __jsx("g", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }, __jsx("path", {
      className: "st0",
      d: "M15.9,38c-1.9-1.4-6.5-4.6-7.5-10.1c-0.5-2.7,0.2-5.5,1.9-7.7c1.8-2.2,4.5-3.5,7.4-3.7c0.1,0,0.2,0,0.3,0c2.7,0,5.3,1.2,7,3.3c1.9,2.2,2.7,5.1,2.3,7.9c-0.9,5.3-5,8.4-7.4,10.2l-2,1.5L15.9,38z M18,20.3c-0.1,0-0.1,0-0.2,0c-1.9,0.1-3.6,0.9-4.7,2.3c-1.1,1.3-1.5,3-1.2,4.7c0.7,3.5,3.3,5.8,5.8,7.7c2.8-2.1,5.3-4.2,5.8-7.7c0.3-1.7-0.3-3.6-1.4-5C21.2,21,19.7,20.3,18,20.3z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }), __jsx("path", {
      className: "st0",
      d: "M17.9,22.7c1.9,0,3.4,1.6,3.4,3.4c0,1.9-1.6,3.4-3.4,3.4c-1.9,0-3.5-1.6-3.5-3.4C14.5,24.2,16,22.7,17.9,22.7z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }), __jsx("g", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, __jsx("path", {
      className: "st1",
      d: "M54.2,34.1v-7.5c0-0.9-0.1-1.6-0.4-2c-0.3-0.6-0.9-0.8-1.8-0.8c-0.9,0-1.5,0.3-1.9,0.8c-0.3,0.4-0.5,1.1-0.5,2v7.4h-4.1V20.4h3.8v1.5h0.1c0.8-1.3,2-1.9,3.7-1.9c1.4,0,2.6,0.4,3.5,1.2c0.6,0.5,1,1.2,1.3,2c0.2,0.7,0.3,1.5,0.3,2.4v8.6H54.2z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 19
      }
    }), __jsx("path", {
      className: "st1",
      d: "M68.8,34.1v-7.4c0-0.9-0.1-1.5-0.4-2c-0.4-0.6-1-0.9-1.8-0.9c-0.8,0-1.4,0.3-1.8,0.8c-0.3,0.4-0.5,1.1-0.5,1.9v7.6h-4.1V15.8h4.1v5.8h0c0.3-0.6,0.8-1.1,1.5-1.3c0.6-0.3,1.2-0.4,2-0.4c1.6,0,2.9,0.5,3.7,1.5c0.6,0.7,1,1.5,1.1,2.4c0.1,0.4,0.1,0.8,0.1,1.3c0,0.2,0,0.4,0,0.7v8.3H68.8z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 19
      }
    }), __jsx("path", {
      className: "st1",
      d: "M85,34.1v-1.5h0c-0.3,0.7-0.9,1.2-1.7,1.5c-0.7,0.3-1.4,0.4-2.3,0.4c-2.1,0-3.7-0.7-5-2.1c-1.2-1.4-1.9-3.1-1.9-5.2c0-2,0.6-3.8,1.9-5.2c1.3-1.4,3-2.2,5-2.2c0.8,0,1.6,0.2,2.3,0.5c0.8,0.3,1.3,0.8,1.7,1.5h0v-1.5h4.1v13.7H85z M84.1,24.7c-0.6-0.7-1.5-1-2.5-1c-1,0-1.8,0.3-2.4,1c-0.6,0.7-0.9,1.5-0.9,2.5c0,1,0.3,1.8,1,2.4c0.7,0.7,1.5,1,2.4,1c1,0,1.8-0.3,2.5-1c0.6-0.7,1-1.5,1-2.5C85,26.2,84.7,25.4,84.1,24.7z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 19
      }
    }), __jsx("path", {
      className: "st1",
      d: "M101.5,34.1v-1.5h0c-0.4,0.7-1,1.2-1.8,1.5c-0.7,0.3-1.4,0.4-2.3,0.4c-2,0-3.7-0.7-5-2.1c-1.2-1.4-1.9-3.1-1.9-5.2c0-2,0.6-3.7,1.8-5.1c1.3-1.4,2.9-2.2,4.9-2.2c1.6,0,3,0.5,4,1.6v-5.7h4.1v18.2H101.5z M100.5,24.7c-0.7-0.6-1.5-1-2.5-1c-1,0-1.8,0.3-2.5,1c-0.7,0.6-1,1.5-1,2.5c0,1,0.3,1.8,1,2.5c0.6,0.7,1.5,1,2.5,1c1,0,1.9-0.3,2.5-1c0.6-0.7,1-1.5,1-2.5C101.5,26.2,101.2,25.4,100.5,24.7z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 19
      }
    }), __jsx("path", {
      className: "st1",
      d: "M117.6,34.1v-1.5h0c-0.3,0.7-0.9,1.2-1.7,1.5c-0.7,0.3-1.4,0.4-2.3,0.4c-2.1,0-3.7-0.7-5-2.1c-1.2-1.4-1.9-3.1-1.9-5.2c0-2,0.6-3.8,1.9-5.2c1.3-1.4,3-2.2,5-2.2c0.8,0,1.6,0.2,2.3,0.5c0.8,0.3,1.3,0.8,1.7,1.5h0v-1.5h4.1v13.7H117.6z M116.6,24.7c-0.6-0.7-1.5-1-2.5-1c-1,0-1.8,0.3-2.4,1c-0.6,0.7-0.9,1.5-0.9,2.5c0,1,0.3,1.8,1,2.4c0.7,0.7,1.5,1,2.4,1c1,0,1.8-0.3,2.5-1c0.6-0.7,1-1.5,1-2.5C117.6,26.2,117.3,25.4,116.6,24.7z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }
    }), __jsx("path", {
      className: "st1",
      d: "M128.6,23.5v10.6h-4.1V23.5h-2v-3.1h2v-4.6h4.1v4.6h2v3.1H128.6z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 19
      }
    }), __jsx("path", {
      className: "st1",
      d: "M148.3,34.1v-7.3c0-0.9-0.1-1.6-0.3-2.1c-0.3-0.6-0.9-1-1.8-1c-0.8,0-1.4,0.3-1.8,0.8c-0.3,0.5-0.5,1.1-0.5,2v7.5h-4.1v-7.4c0-0.9-0.1-1.5-0.4-2c-0.3-0.6-0.9-0.9-1.7-0.9c-0.9,0-1.5,0.3-1.9,0.9c-0.3,0.5-0.4,1.2-0.4,2.1v7.3h-4.1V20.4h3.8v1.5h0.1c0.4-0.7,0.9-1.2,1.6-1.5c0.6-0.3,1.3-0.4,2.2-0.4c1.7,0,3.1,0.8,3.9,2.4c1-1.6,2.5-2.4,4.3-2.4c1.5,0,2.7,0.5,3.6,1.4c0.7,0.7,1.1,1.5,1.3,2.5c0.1,0.4,0.1,0.8,0.1,1.4c0,0.2,0,0.4,0,0.7v8.2H148.3z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 19
      }
    }), __jsx("path", {
      className: "st1",
      d: "M166.2,32.4c-1.4,1.4-3.2,2.1-5.3,2.1c-2.1,0-3.9-0.7-5.2-2.1c-1.4-1.4-2.1-3.1-2.1-5.2c0-2.1,0.7-3.8,2.1-5.2c1.4-1.4,3.1-2.1,5.2-2.1c2.1,0,3.9,0.7,5.3,2.1c1.4,1.4,2.1,3.1,2.1,5.2C168.3,29.3,167.6,31.1,166.2,32.4z M163.3,24.8c-0.6-0.7-1.4-1-2.4-1c-0.9,0-1.7,0.3-2.3,1c-0.6,0.7-0.9,1.5-0.9,2.4c0,0.9,0.3,1.7,0.9,2.4c0.6,0.7,1.4,1,2.3,1c0.9,0,1.7-0.3,2.4-1c0.6-0.7,0.9-1.5,0.9-2.4C164.2,26.3,163.9,25.5,163.3,24.8z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 19
      }
    }), __jsx("path", {
      className: "st1",
      d: "M169.7,19v-3.1h4.1V19H169.7z M169.7,34.1V20.4h4.1v13.7H169.7z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 19
      }
    })), __jsx("path", {
      className: "st0",
      d: "M34.6,13.3L20,0.8c-1.2-1.1-3-1.1-4.3,0L1.2,13.3C0.4,13.9,0,14.8,0,15.8v21C0,38.5,1.5,40,3.3,40h12.6l-0.9-0.6c-1.1-0.8-3-2.2-4.8-4.2h-2c-1.8,0-3.3-1.5-3.3-3.3V18c0-1,0.4-1.9,1.2-2.5l9.7-8.3c1.2-1.1,3-1.1,4.3,0l9.6,8.3c0.7,0.6,1.1,1.5,1.1,2.5v13.8c0,1.8-1.5,3.3-3.3,3.3h-2c-1.6,1.9-3.4,3.2-4.7,4.2L19.9,40h12.5c1.8,0,3.3-1.5,3.3-3.3v-21C35.7,14.8,35.3,13.9,34.6,13.3z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    })))), __jsx("div", {
      className: "zalo-share__input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }
    }, __jsx("input", {
      type: "text",
      value: urlString,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "zalo-share__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }, "Chia s\u1EBB B\xE0i vi\u1EBFt n\xE0y l\xEAn Zalo c\u1EE7a b\u1EA1n"), __jsx("div", {
      className: "zalo-share__click",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "zalo-share-button",
      "data-href": urlString,
      id: "zalo_share_ndm",
      "data-oaid": "665488348785625865",
      "data-layout": "2",
      "data-color": "blue",
      "data-customize": true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, "CHIA S\u1EBA"), __jsx("a", {
      href: urlString,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "zalo-share__close",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 33
      }
    }, "QUAY L\u1EA0I")))), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi private-next-pages/_document.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.tsx */"./pages/_document.tsx");


/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovLy8uL21vZHVsZXMvdmFsaWRhdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2RvY3VtZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19kb2N1bWVudC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5c3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbImlzQmxhbmsiLCJ2YWx1ZSIsImxlbmd0aCIsInRyaW0iLCJpc0VtcHR5Iiwib2JqIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJpc051bWJlciIsImlzTmFOIiwicGFyc2VGbG9hdCIsImlzRmluaXRlIiwiaXNFbWFpbCIsImVtYWlsIiwidGVzdCIsImlzU2x1ZyIsInNsdWciLCJpc1VybCIsInJlZ2V4cCIsImZpbGVzIiwia2VwdCIsImJ1bmRsZSIsInByb2Nlc3MiLCJDb21wb25lbnQiLCJlbmhhbmNlcnMiLCJlbmhhbmNlQXBwIiwiQXBwIiwiZW5oYW5jZXIiLCJwcm9wcyIsImN0eCIsInN0eWxlcyIsIl9kb2N1bWVudFByb3BzIiwiX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyIsIkRhdGUiLCJyZW5kZXIiLCJEb2N1bWVudCIsImhlYWRUYWdzTWlkZGxld2FyZSIsImJvZHlUYWdzTWlkZGxld2FyZSIsImh0bWxQcm9wc01pZGRsZXdhcmUiLCJpbkFtcE1vZGUiLCJIdG1sIiwiY29udGV4dFR5cGUiLCJEb2N1bWVudENvbXBvbmVudENvbnRleHQiLCJwcm9wVHlwZXMiLCJjaGlsZHJlbiIsIlByb3BUeXBlcyIsImdldENzc0xpbmtzIiwiY3NzRmlsZXMiLCJmIiwiY3NzTGlua0VsZW1lbnRzIiwiZmlsZSIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQiLCJnZXRQcmVsb2FkTWFpbkxpbmtzIiwicHJlbG9hZEZpbGVzIiwiZGlzYWJsZVJ1bnRpbWVKUyIsInVuc3RhYmxlX3J1bnRpbWVKUyIsIlJlYWN0IiwiY2hpbGQiLCJpc1JlYWN0SGVsbWV0IiwiY29uc29sZSIsImhhc0FtcGh0bWxSZWwiLCJoYXNDYW5vbmljYWxSZWwiLCJoZWFkIiwiYmFkUHJvcCIsInR5cGUiLCJPYmplY3QiLCJwcm9wIiwiX19ORVhUX0RBVEFfXyIsInBhZ2UiLCJjdXJTdHlsZXMiLCJBcnJheSIsImhhc1N0eWxlcyIsImVsIiwiX19odG1sIiwiY2Fub25pY2FsQmFzZSIsInN0eWxlIiwiZ2V0QW1wUGF0aCIsImJ1aWxkSWQiLCJnZXRQYWdlRmlsZSIsImhlYWRUYWdzIiwiSGVhZCIsIm5vbmNlIiwiY3Jvc3NPcmlnaW4iLCJBTVBfUkVOREVSX1RBUkdFVCIsIk1haW4iLCJnZXREeW5hbWljQ2h1bmtzIiwiZGVkdXBlIiwibW9kZXJuUHJvcHMiLCJnZXRTY3JpcHRzIiwibm9ybWFsU2NyaXB0cyIsImxvd1ByaW9yaXR5U2NyaXB0cyIsImxvd1ByaW9yaXR5RmlsZXMiLCJnZXRQb2x5ZmlsbFNjcmlwdHMiLCJwb2x5ZmlsbEZpbGVzIiwicG9seWZpbGwiLCJkYXRhIiwiSlNPTiIsImVyciIsImRldkZpbGVzIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1JFQUNUX1JFRlJFU0giLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfQU1QIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1dFQlBBQ0siLCJzdGF0aWNNYXJrdXAiLCJOZXh0U2NyaXB0IiwiYm9keVRhZ3MiLCJwYWdlU2NyaXB0IiwiYXBwU2NyaXB0Iiwic2FmYXJpTm9tb2R1bGVGaXgiLCJhbXBQYXRoIiwiYXNQYXRoIiwic3RhcnRpbmdVcmwiLCJRdWVyeXN0cmluZyIsInJlcXVpcmUiLCJNeURvY3VtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwidXJsT2JqZWN0IiwiVXJsIiwicGFyc2UiLCJkYXRhVXJsIiwicXVlcnkiLCJ1cmxTdHJpbmciLCJWYWxpZGF0b3IiLCJ1cmwiLCJzaGVldHMiLCJTZXJ2ZXJTdHlsZVNoZWV0cyIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsInJlbmRlclBhZ2UiLCJjb2xsZWN0IiwiaW5pdGlhbFByb3BzIiwiZ2V0U3R5bGVFbGVtZW50IiwiZGF0YVJldHVybiIsInVybF9zdHJpbmciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSxtRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSxNQUFNQSxPQUFPLEdBQUlDLEtBQUQsSUFBZ0I7QUFDOUIsTUFBSSxPQUFPQSxLQUFQLEtBQWlCLFdBQWpCLElBQWdDQSxLQUFLLElBQUksSUFBekMsSUFBaURBLEtBQUssS0FBSyxDQUEzRCxJQUFnRUEsS0FBSyxLQUFLLEVBQTlFLEVBQWtGO0FBQ2hGLFdBQU8sSUFBUDtBQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsS0FBOEJBLEtBQUssQ0FBQ0MsTUFBTixJQUFnQixDQUFoQixJQUFxQkQsS0FBSyxDQUFDRSxJQUFOLEdBQWFELE1BQWIsSUFBdUIsQ0FBMUUsQ0FBSixFQUFrRjtBQUN2RixXQUFPLElBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSSxPQUFPRCxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQ3BDLFdBQU9HLE9BQU8sQ0FBQ0gsS0FBRCxDQUFkO0FBQ0QsR0FGTSxNQUVBO0FBQ0wsV0FBTyxLQUFQO0FBQ0Q7QUFDRixDQVZEOztBQVlBLE1BQU1HLE9BQU8sR0FBSUMsR0FBRCxJQUFjO0FBQzVCLE9BQUssSUFBSUMsR0FBVCxJQUFnQkQsR0FBaEIsRUFBcUI7QUFDbkIsUUFBSUEsR0FBRyxDQUFDRSxjQUFKLENBQW1CRCxHQUFuQixDQUFKLEVBQ0UsT0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0FORDs7QUFRQSxNQUFNRSxRQUFRLEdBQUlQLEtBQUQsSUFBZ0I7QUFDL0IsTUFBSUQsT0FBTyxDQUFDQyxLQUFELENBQVgsRUFBb0I7QUFDbEIsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxDQUFDUSxLQUFLLENBQUNDLFVBQVUsQ0FBQ1QsS0FBRCxDQUFYLENBQU4sSUFBNkJVLFFBQVEsQ0FBQ1YsS0FBRCxDQUE1QztBQUNELENBTEQ7O0FBT0EsTUFBTVcsT0FBTyxHQUFJWCxLQUFELElBQWdCO0FBQzlCLE1BQUlELE9BQU8sQ0FBQ0MsS0FBRCxDQUFYLEVBQW9CO0FBQ2xCLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQUlZLEtBQUssR0FBRyx3SkFBWjtBQUNBLFNBQU9BLEtBQUssQ0FBQ0MsSUFBTixDQUFXYixLQUFYLENBQVA7QUFDRCxDQU5EOztBQVFBLE1BQU1jLE1BQU0sR0FBSWQsS0FBRCxJQUFnQjtBQUM3QixNQUFJRCxPQUFPLENBQUNDLEtBQUQsQ0FBWCxFQUFvQjtBQUNsQixXQUFPLEtBQVA7QUFDRDs7QUFDRCxNQUFJZSxJQUFJLEdBQUcsa0NBQVg7QUFDQSxTQUFPQSxJQUFJLENBQUNGLElBQUwsQ0FBVWIsS0FBVixDQUFQO0FBQ0QsQ0FORDs7QUFRQSxNQUFNZ0IsS0FBSyxHQUFJaEIsS0FBRCxJQUFnQjtBQUM1QixNQUFJRCxPQUFPLENBQUNDLEtBQUQsQ0FBWCxFQUFvQjtBQUNsQixXQUFPLEtBQVA7QUFDRDs7QUFDRCxNQUFJaUIsTUFBTSxHQUFHLDhhQUFiO0FBQ0EsU0FBT0EsTUFBTSxDQUFDSixJQUFQLENBQVliLEtBQVosQ0FBUDtBQUNELENBTkQ7O0FBUWU7QUFDYkQsU0FEYTtBQUViWSxTQUZhO0FBR2JSLFNBSGE7QUFJYkksVUFKYTtBQUtiUyxPQUxhO0FBTWJGO0FBTmEsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBTUE7O0FBQ0E7Ozs7OztBQUtBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU087O0FBQUEsMEJBQTBCO0FBQUE7QUFBMUI7QUFBMEIsQ0FBMUIsRUFBeUQsQ0FFaEU7O0FBQUEseUJBQXVDO0FBQ3JDLFFBQU1JLEtBQUssR0FBRyxJQUFkLEdBQWMsRUFBZDtBQUNBLFFBQU1DLElBQUksR0FBVjs7QUFFQSxPQUFLLE1BQUwsbUJBQThCO0FBQzVCLFFBQUlELEtBQUssQ0FBTEEsSUFBVUUsTUFBTSxDQUFwQixJQUFJRixDQUFKLEVBQTRCO0FBQzVCQSxTQUFLLENBQUxBLElBQVVFLE1BQU0sQ0FBaEJGO0FBQ0FDLFFBQUksQ0FBSkE7QUFFRjs7QUFBQTtBQUdGOztBQUFBLDhDQUE4RDtBQUM1RCxNQUFJRSxLQUFKLEVBQXFDLEVBR3JDOztBQUFBO0FBR0Y7QUFBQTs7Ozs7O0FBSWUsdUJBQStCQyxnQkFBL0IsQ0FBNEQ7QUFvQnpFOzs7O0FBSUEsb0NBRWlDO0FBQy9CLFVBQU1DLFNBQVMsR0FBR0YsU0FDZCxTQURjQSxHQUFsQjs7QUFPQSxVQUFNRyxVQUFVLEdBQUlDLEdBQUQsSUFBYztBQUMvQixXQUFLLE1BQUwsdUJBQWtDO0FBQ2hDQSxXQUFHLEdBQUdDLFFBQVEsQ0FBZEQsR0FBYyxDQUFkQTtBQUVGOztBQUFBLGFBQVFFLEtBQUQsaUJBQWdCLGtDQUF2QixLQUF1QixDQUF2QjtBQUpGOztBQU9BLFVBQU07QUFBQTtBQUFBO0FBQUEsUUFBaUIsTUFBTUMsR0FBRyxDQUFIQSxXQUFlO0FBQTVDO0FBQTRDLEtBQWZBLENBQTdCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLENBQ2IsR0FBRyxZQURVLE9BQ1YsR0FEVSxFQUViLElBQUlSLFNBQ0EsU0FEQUEsR0FGTixFQUVFLENBRmEsQ0FBZjtBQVNBLFdBQU87QUFBQTtBQUFBO0FBQVA7QUFBTyxLQUFQO0FBR0Y7O0FBQUEseUNBR3NCO0FBQ3BCLHdCQUNFLDZCQUFDLGlCQUFELGVBQUMsQ0FBRDtBQUNFLFdBQUssRUFBRTtBQUNMUyxzQkFBYyxFQURUO0FBRUw7QUFDQTtBQUNBO0FBQ0FDLDBDQUFrQyxFQUNoQ1YsT0FBd0MsU0FBU1csSUFBSSxDQUFyRFgsR0FBaURXLEVBQWpEWCxHQVBOO0FBQ1M7QUFEVCxvQkFVRSx1Q0FYSixLQVdJLENBVkYsQ0FERjtBQWdCRlk7O0FBQUFBLFFBQU0sR0FBRztBQUNQLHdCQUNFLHNEQUNFLG1DQURGLElBQ0UsQ0FERixlQUVFLHdEQUNFLG1DQURGLElBQ0UsQ0FERixlQUVFLHlDQUxOLElBS00sQ0FGRixDQUZGLENBREY7QUEzRXVFOztBQUFBOzs7QUFBdERDLFEsQ0FDWkMsa0JBRFlELEdBQ1NiLHFCQUt4QixNQUFNLEVBTlNhO0FBQUFBLFEsQ0FPWkUsa0JBUFlGLEdBT1NiLHFCQUt4QixNQUFNLEVBWlNhO0FBQUFBLFEsQ0FhWkcsbUJBYllILEdBYVViLHFCQUt6QixNQUFNLEVBbEJTYTs7QUF1RmQsbUJBQW1CWixnQkFBbkIsQ0FLTDtBQUFBO0FBQUE7QUFBQTtBQVNBVzs7QUFBQUEsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFBO0FBQUE7QUFBQSxRQUEyQixhQUFqQztBQUNBLHdCQUNFLGtFQUVNLEtBRk47QUFHRSxTQUFHLEVBQUVLLFNBQVMsUUFIaEI7QUFJRSx5QkFDRUEseUJBTk47QUFDRSxPQURGO0FBWEY7O0FBQUE7OztBQUxXQyxJLENBTUpDLFdBTklELEdBTVVFLGdDQU5WRjtBQUFBQSxJLENBUUpHLFNBUklILEdBUVE7QUFDakJJLFVBQVEsRUFBRUMsd0JBRE87QUFBQSxDQVJSTDs7QUE2Qk4sbUJBQW1CakIsZ0JBQW5CLENBTUw7QUFBQTtBQUFBO0FBQUE7QUFVQXVCOztBQUFBQSxhQUFXLEdBQXlCO0FBQ2xDLFVBQU07QUFBQTtBQUFBO0FBQUEsUUFBeUIsYUFBL0I7QUFDQSxVQUFNO0FBQUE7QUFBQSxRQUF5QyxLQUEvQztBQUNBLFVBQU1DLFFBQVEsR0FDWjVCLEtBQUssSUFBSUEsS0FBSyxDQUFkQSxTQUF3QkEsS0FBSyxDQUFMQSxPQUFjNkIsQ0FBRCxJQUFPLGNBQTVDN0IsQ0FBNEMsQ0FBcEJBLENBQXhCQSxHQURGO0FBR0EsVUFBTThCLGVBQThCLEdBQXBDO0FBQ0FGLFlBQVEsQ0FBUkEsUUFBa0JHLElBQUQsSUFBVTtBQUN6QkQscUJBQWUsQ0FBZkEsbUJBQ0U7QUFDRSxXQUFHLEVBQUcsR0FBRUMsSUFEVjtBQUVFLGFBQUssRUFBRSxXQUZUO0FBR0UsV0FBRyxFQUhMO0FBSUUsWUFBSSxFQUFHLEdBQUVDLFdBQVksVUFBU0MsU0FBUyxNQUVyQyxHQUFFcEIsa0NBTk47QUFPRSxVQUFFLEVBUEo7QUFRRSxtQkFBVyxFQUFFLDBCQUEwQlYsU0FUM0MyQjtBQUNFLFFBREZBLGVBV0U7QUFDRSxXQUFHLEVBREw7QUFFRSxhQUFLLEVBQUUsV0FGVDtBQUdFLFdBQUcsRUFITDtBQUlFLFlBQUksRUFBRyxHQUFFRSxXQUFZLFVBQVNDLFNBQVMsTUFFckMsR0FBRXBCLGtDQU5OO0FBT0UsbUJBQVcsRUFBRSwwQkFBMEJWLFNBbEIzQzJCO0FBV0UsUUFYRkE7QUFERkY7QUF3QkEsV0FBT0UsZUFBZSxDQUFmQSxzQkFBUDtBQUdGSTs7QUFBQUEseUJBQXVCLEdBQUc7QUFDeEIsVUFBTTtBQUFBO0FBQUE7QUFBQSxRQUFrQyxhQUF4QztBQUNBLFVBQU07QUFBQTtBQUFBLFFBQXlDLEtBQS9DO0FBRUEsV0FDRSxNQUFNLENBQU4sY0FBTSxDQUFOLEtBQ1FoQyxNQUFELElBQWlCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFVBQUksQ0FBQ0EsTUFBTSxDQUFOQSxjQUFxQmlDLDhCQUE4QixDQUF4RCxLQUF3RCxDQUFuRGpDLENBQUwsRUFBa0U7QUFDaEU7QUFHRjs7QUFBQSwwQkFDRTtBQUNFLFdBQUcsRUFETDtBQUVFLFdBQUcsRUFBRUEsTUFBTSxDQUZiO0FBR0UsWUFBSSxFQUFHLEdBQUU4QixXQUFZLFVBQVNDLFNBQVMsQ0FDckMvQixNQUFNLENBRCtCLEtBRXJDLEdBQUVXLGtDQUxOO0FBTUUsVUFBRSxFQU5KO0FBT0UsYUFBSyxFQUFFLFdBUFQ7QUFRRSxtQkFBVyxFQUFFLDBCQUEwQlYsU0FUM0M7QUFDRSxRQURGO0FBVEosT0FzQkU7QUF0QkYsWUFERixPQUNFLENBREY7QUE0QkZpQzs7QUFBQUEscUJBQW1CLEdBQXlCO0FBQzFDLFVBQU07QUFBQTtBQUFBO0FBQUEsUUFBeUIsYUFBL0I7QUFDQSxVQUFNO0FBQUE7QUFBQSxRQUF5QyxLQUEvQztBQUVBLFVBQU1DLFlBQVksR0FDaEIsS0FBSyxJQUFJckMsS0FBSyxDQUFkLFNBQ0ksS0FBSyxDQUFMLE9BQWMrQixJQUFELElBQWtCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGFBQU9BLElBQUksQ0FBSkEsU0FBY0ksOEJBQThCLENBQW5ELEtBQW1ELENBQTVDSixDQUFQO0FBTE4sS0FDSSxDQURKLEdBREY7QUFVQSxXQUFPLENBQUNNLFlBQVksQ0FBYixnQkFFSEEsWUFBWSxDQUFaQSxJQUFrQk4sSUFBRCxpQkFDZjtBQUNFLFNBQUcsRUFETDtBQUVFLFdBQUssRUFBRSxXQUZUO0FBR0UsU0FBRyxFQUhMO0FBSUUsVUFBSSxFQUFHLEdBQUVDLFdBQVksVUFBU0MsU0FBUyxNQUVyQyxHQUFFcEIsa0NBTk47QUFPRSxRQUFFLEVBUEo7QUFRRSxpQkFBVyxFQUFFLDBCQUEwQlYsU0FYL0M7QUFHTSxNQURGa0MsQ0FGSjtBQWdCRnRCOztBQUFBQSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVdGLGFBWEo7QUFZQSxVQUFNdUIsZ0JBQWdCLEdBQUdDLGtCQUFrQixLQUEzQztBQUNBLFVBQU07QUFBQTtBQUFBLFFBQXlDLEtBQS9DO0FBQ0EsVUFBTTtBQUFBO0FBQUE7QUFBQSxRQUFOO0FBRUEsUUFBSTtBQUFBO0FBQUEsUUFBVyxhQUFmO0FBQ0EsUUFBSWQsUUFBUSxHQUFHLFdBQWYsU0FsQk8sQ0FtQlA7O0FBQ0EsY0FBMkM7QUFDekNBLGNBQVEsR0FBR2Usc0NBQThCQyxLQUFELElBQWdCO0FBQUE7O0FBQ3RELGNBQU1DLGFBQWEsR0FBR0QsS0FBSCxTQUFHQSxTQUFILFdBQUdBLEdBQUgsTUFBR0EsR0FBSCxnQkFBR0EsS0FBSyxDQUFSLHNEQUFHQSxhQUF0QixtQkFBc0JBLENBQXRCOztBQUNBLFlBQUksTUFBSyxLQUFMLGFBQUssVUFBTCxrQkFBSyxDQUFMLHFCQUEyQixDQUEvQixlQUErQztBQUM3Q0UsaUJBQU8sQ0FBUEE7QUFJRjs7QUFBQTtBQVBGbEIsT0FBV2UsQ0FBWGY7QUFTQSxVQUFJLFdBQUosYUFDRWtCLE9BQU8sQ0FBUEE7QUFLSjs7QUFBQSxRQUFJQyxhQUFhLEdBQWpCO0FBQ0EsUUFBSUMsZUFBZSxHQUFuQixNQXJDTyxDQXVDUDs7QUFDQUMsUUFBSSxHQUFHTiw0QkFBbUJNLElBQUksSUFBdkJOLElBQWdDQyxLQUFELElBQVc7QUFDL0MsVUFBSSxDQUFKLE9BQVk7QUFDWixZQUFNO0FBQUE7QUFBQTtBQUFBLFVBQU47O0FBRUEscUJBQWU7QUFDYixZQUFJTSxPQUFlLEdBQW5COztBQUVBLFlBQUlDLElBQUksS0FBSkEsVUFBbUJ2QyxLQUFLLENBQUxBLFNBQXZCLFlBQWtEO0FBQ2hEc0MsaUJBQU8sR0FBUEE7QUFERixlQUVPLElBQUlDLElBQUksS0FBSkEsVUFBbUJ2QyxLQUFLLENBQUxBLFFBQXZCLGFBQWtEO0FBQ3ZEb0MseUJBQWUsR0FBZkE7QUFESyxlQUVBLElBQUlHLElBQUksS0FBUixVQUF1QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQ0d2QyxLQUFLLENBQUxBLE9BQWFBLEtBQUssQ0FBTEEsNEJBQWtDLENBQWhELENBQUNBLElBQ0FBLEtBQUssQ0FBTEEsNEJBQ0UsQ0FBQ0EsS0FBSyxDQUFOLFFBQWVBLEtBQUssQ0FBTEEsU0FIcEIsaUJBRUdBLENBRkgsRUFJRTtBQUNBc0MsbUJBQU8sR0FBUEE7QUFDQUUsa0JBQU0sQ0FBTkEsb0JBQTRCQyxJQUFELElBQVU7QUFDbkNILHFCQUFPLElBQUssSUFBR0csSUFBSyxLQUFJekMsS0FBSyxNQUE3QnNDO0FBREZFO0FBR0FGLG1CQUFPLElBQVBBO0FBRUg7QUFFRDs7QUFBQSxxQkFBYTtBQUNYSixpQkFBTyxDQUFQQSxLQUNHLDhCQUE2QkYsS0FBSyxDQUFDTyxJQUFLLDJCQUEwQkQsT0FBUSxPQUFNSSxhQUFhLENBQUNDLElBRGpHVDtBQUdBO0FBRUg7QUEvQkQsYUErQk87QUFDTDtBQUNBLFlBQUlLLElBQUksS0FBSkEsVUFBbUJ2QyxLQUFLLENBQUxBLFFBQXZCLFdBQWdEO0FBQzlDbUMsdUJBQWEsR0FBYkE7QUFFSDtBQUNEOztBQUFBO0FBekNGRSxLQUFPTixDQUFQTSxDQXhDTyxDQW9GUDs7QUFDQSxVQUFNTyxTQUErQixHQUFHQyxLQUFLLENBQUxBLDJCQUF4Qzs7QUFHQSxRQUNFLFNBQVMsSUFBVCxVQUVBO0FBQ0EzQyxVQUFNLENBSE4sU0FJQTtBQUNBMkMsU0FBSyxDQUFMQSxRQUFjM0MsTUFBTSxDQUFOQSxNQU5oQixRQU1FMkMsQ0FORixFQU9FO0FBQ0EsWUFBTUMsU0FBUyxHQUFJQyxFQUFEO0FBQUE7O0FBQUEsZUFDaEJBLEVBRGdCLFNBQ2hCQSxNQURnQixXQUNoQkEsR0FEZ0IsTUFDaEJBLEdBRGdCLGFBQ2hCQSxFQUFFLENBRGMsNEVBQ2hCQSxVQURnQixpRkFDaEJBLHNCQURnQjtBQUFsQixRQURBLENBR0E7OztBQUNBN0MsWUFBTSxDQUFOQSx1QkFBK0I4QixLQUFELElBQStCO0FBQzNELFlBQUlhLEtBQUssQ0FBTEEsUUFBSixLQUFJQSxDQUFKLEVBQTBCO0FBQ3hCYixlQUFLLENBQUxBLFFBQWVlLEVBQUQsSUFBUUQsU0FBUyxDQUFUQSxFQUFTLENBQVRBLElBQWlCRixTQUFTLENBQVRBLEtBQXZDWixFQUF1Q1ksQ0FBdkNaO0FBREYsZUFFTyxJQUFJYyxTQUFTLENBQWIsS0FBYSxDQUFiLEVBQXNCO0FBQzNCRixtQkFBUyxDQUFUQTtBQUVIO0FBTkQxQztBQVNGOztBQUFBLHdCQUNFLHFDQUFVLEtBQVYsT0FDRywwREFDQyx5RUFDRTtBQUNFLDZCQURGO0FBRUUseUJBQWlCUyxTQUFTLFlBRjVCO0FBR0UsNkJBQXVCLEVBQUU7QUFDdkJxQyxjQUFNLEVBTFo7QUFJNkI7QUFIM0IsTUFERixlQVFFO0FBQ0UsNkJBREY7QUFFRSx5QkFBaUJyQyxTQUFTLFlBRjVCO0FBQUEsb0JBSUU7QUFDRSw2QkFBdUIsRUFBRTtBQUN2QnFDLGNBQU0sRUFoQmxCO0FBZW1DO0FBRDNCLE1BSkYsQ0FSRixDQUZKLCtCQXdCRTtBQUNFLFVBQUksRUFETjtBQUVFLGFBQU8sRUFBRWpCLDhCQUFxQk0sSUFBSSxJQUF6Qk4sSUExQmIsUUEwQmFBO0FBRlgsTUF4QkYsRUE0QkdwQixTQUFTLGlCQUNSLHlFQUNFO0FBQ0UsVUFBSSxFQUROO0FBRUUsYUFBTyxFQUhYO0FBQ0UsTUFERixFQUtHLGlDQUNDO0FBQ0UsU0FBRyxFQURMO0FBRUUsVUFBSSxFQUFFc0MsYUFBYSxHQUFHLDBCQVI1QixlQVE0QjtBQUZ4QixNQU5KLGVBWUU7QUFDRSxTQUFHLEVBREw7QUFFRSxRQUFFLEVBRko7QUFHRSxVQUFJLEVBZlI7QUFZRSxNQVpGLEVBa0JHL0MsTUFBTSxpQkFDTDtBQUNFLG9CQURGO0FBRUUsNkJBQXVCLEVBQUU7QUFDdkI4QyxjQUFNLEVBQUVKLFNBQVMsQ0FBVEEsSUFDQU0sS0FBRCxJQUFXQSxLQUFLLENBQUxBLDhCQURWTixtR0F0QmhCLEVBc0JnQkE7QUFEZTtBQUYzQixNQW5CSixlQThCRTtBQUNFLHlCQURGO0FBRUUsNkJBQXVCLEVBQUU7QUFDdkJJLGNBQU0sRUFqQ1o7QUFnQzZCO0FBRjNCLE1BOUJGLGVBb0NFLDREQUNFO0FBQ0UseUJBREY7QUFFRSw2QkFBdUIsRUFBRTtBQUN2QkEsY0FBTSxFQXhDZDtBQXVDK0I7QUFGM0IsTUFERixDQXBDRixlQTRDRTtBQUFRLFdBQUssRUFBYjtBQUFjLFNBQUcsRUF6RXZCO0FBeUVNLE1BNUNGLENBN0JKLEVBNEVHLDJCQUNDLDREQUNHLDRDQUNDO0FBQ0UsU0FBRyxFQURMO0FBRUUsVUFBSSxFQUFFQyxhQUFhLEdBQUdFLFVBQVUsVUFKdEMsZUFJc0M7QUFGbEMsTUFGSixFQU9HLEtBUEgsV0FPRyxFQVBILEVBUUcsa0NBQ0M7QUFDRSxTQUFHLEVBREw7QUFFRSxVQUFJLEVBQ0Y1QixXQUFXLEdBQ1hHLDhCQUE4QixDQUM1QkYsU0FBUyxDQUFFLGlCQUFnQjRCLE9BRjdCN0IsZ0JBRVcsQ0FEbUIsQ0FEOUJBLEdBSEo7QUFTRSxRQUFFLEVBVEo7QUFVRSxXQUFLLEVBQUUsV0FWVDtBQVdFLGlCQUFXLEVBQUUsMEJBQTBCN0IsU0FwQjdDO0FBU0ksTUFUSixFQXVCRyxxQkFBcUJpRCxJQUFJLEtBQXpCLDBCQUNDO0FBQ0UsU0FBRyxFQURMO0FBRUUsVUFBSSxFQUNGcEIsV0FBVyxHQUNYRyw4QkFBOEIsQ0FDNUJGLFNBQVMsQ0FDTixpQkFBZ0I0QixPQUFRLFNBQVFDLFdBQVcsTUFIaEQ5QixFQUVXLENBRG1CLENBRDlCQSxHQUhKO0FBV0UsUUFBRSxFQVhKO0FBWUUsV0FBSyxFQUFFLFdBWlQ7QUFhRSxpQkFBVyxFQUFFLDBCQUEwQjdCLFNBckM3QztBQXdCSSxNQXhCSixFQXdDRyxxQkFBcUIsS0F4Q3hCLHVCQXdDd0IsRUF4Q3hCLEVBeUNHLHFCQUFxQixLQXpDeEIsbUJBeUN3QixFQXpDeEIsRUEwQ0c7QUFBQTtBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBQVUsUUFBRSxFQTlDaEI7QUE4Q0ksTUE5Q0osRUFnREdRLE1BQU0sSUE3SGIsSUE2RUksQ0E3RUosRUFnSUc2Qiw2QkFBb0JBLGVBQXBCQSxjQUF3QyxJQUFJdUIsUUFBUSxJQWpJekQsRUFpSTZDLENBQXhDdkIsQ0FoSUgsQ0FERjtBQXRORjs7QUFBQTs7O0FBTld3QixJLENBT0oxQyxXQVBJMEMsR0FPVXpDLGdDQVBWeUM7QUFBQUEsSSxDQVNKeEMsU0FUSXdDLEdBU1E7QUFDakJDLE9BQUssRUFBRXZDLG1CQURVO0FBRWpCd0MsYUFBVyxFQUFFeEMsbUJBRkk7QUFBQSxDQVRSc0M7O0FBbVdOLG1CQUFtQjVELGdCQUFuQixDQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUtsQ1c7O0FBQUFBLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBQTtBQUFBO0FBQUEsUUFBc0IsYUFBNUI7QUFDQSxtQkFBZSxPQUFPb0QsV0FBUDtBQUNmLHdCQUFPO0FBQUssUUFBRSxFQUFQO0FBQWlCLDZCQUF1QixFQUFFO0FBQUVWLGNBQU0sRUFBekQ7QUFBaUQ7QUFBMUMsTUFBUDtBQVJnQzs7QUFBQTs7O0FBQXZCVyxJLENBQ0o5QyxXQURJOEMsR0FDVTdDLGdDQURWNkM7O0FBWU4seUJBQXlCaEUsZ0JBQXpCLENBQWdEO0FBQUE7QUFBQTtBQUFBO0FBY3JEaUU7O0FBQUFBLGtCQUFnQixHQUFHO0FBQ2pCLFVBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUF5QyxhQUEvQztBQUNBLFVBQU07QUFBQTtBQUFBLFFBQXlDLEtBQS9DO0FBRUEsV0FBT0MsTUFBTSxDQUFOQSxjQUFNLENBQU5BLEtBQTRCcEUsTUFBRCxJQUFpQjtBQUNqRCxVQUFJcUUsV0FBVyxHQUFmOztBQUNBLFVBQUlwRSxLQUFKLEVBQXFDLEVBTXJDOztBQUFBLFVBQUksQ0FBQyxhQUFhRCxNQUFNLENBQXBCLElBQUMsQ0FBRCxJQUE4QkYsS0FBSyxDQUFMQSxTQUFlRSxNQUFNLENBQXZELElBQWtDRixDQUFsQyxFQUErRDtBQUUvRCwwQkFDRTtBQUNFLGFBQUssRUFEUDtBQUVFLFdBQUcsRUFBRUUsTUFBTSxDQUZiO0FBR0UsV0FBRyxFQUFHLEdBQUU4QixXQUFZLFVBQVNDLFNBQVMsQ0FDcEMvQixNQUFNLENBRDhCLEtBRXBDLEdBQUVXLGtDQUxOO0FBTUUsYUFBSyxFQUFFLFdBTlQ7QUFPRSxtQkFBVyxFQUFFLDBCQUEwQlYsU0FQekM7QUFBQSxTQURGLFdBQ0UsRUFERjtBQVZGLEtBQU9tRSxDQUFQO0FBeUJGRTs7QUFBQUEsWUFBVSxHQUFHO0FBQ1gsVUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTJDLGFBQWpEO0FBQ0EsVUFBTTtBQUFBO0FBQUEsUUFBeUMsS0FBL0M7QUFFQSxVQUFNQyxhQUFhLEdBQUd6RSxLQUFILFNBQUdBLFNBQUgsV0FBR0EsR0FBSCxNQUFHQSxRQUFLLENBQUxBLE9BQWUrQixJQUFELElBQVVBLElBQUksQ0FBSkEsU0FBOUMsS0FBOENBLENBQXhCL0IsQ0FBdEI7QUFDQSxVQUFNMEUsa0JBQWtCLEdBQUdDLGdCQUFILFNBQUdBLG9CQUFILFdBQUdBLEdBQUgsTUFBR0EsbUJBQWdCLENBQWhCQSxPQUEwQjVDLElBQUQsSUFDbERBLElBQUksQ0FBSkEsU0FERixLQUNFQSxDQUR5QjRDLENBQTNCO0FBSUEsV0FBTyxDQUFDLEdBQUQsZUFBbUIsR0FBbkIsd0JBQStDNUMsSUFBRCxJQUFVO0FBQzdELFVBQUl3QyxXQUFXLEdBQWY7O0FBQ0EsVUFBSXBFLEtBQUosRUFBcUMsRUFLckM7O0FBQUEsMEJBQ0U7QUFDRSxXQUFHLEVBREw7QUFFRSxXQUFHLEVBQUcsR0FBRTZCLFdBQVksVUFBU0MsU0FBUyxNQUVwQyxHQUFFcEIsa0NBSk47QUFLRSxhQUFLLEVBQUUsV0FMVDtBQU1FLGFBQUssRUFOUDtBQU9FLG1CQUFXLEVBQUUsMEJBQTBCVixTQVB6QztBQUFBLFNBREYsV0FDRSxFQURGO0FBUEYsS0FBTyxDQUFQO0FBc0JGeUU7O0FBQUFBLG9CQUFrQixHQUFHO0FBQ25CO0FBQ0E7QUFDQSxVQUFNO0FBQUE7QUFBQTtBQUFBLFFBQWlDLGFBQXZDO0FBQ0EsVUFBTTtBQUFBO0FBQUEsUUFBeUMsS0FBL0M7QUFFQSxXQUFPQyxhQUFhLENBQWJBLE9BRUZDLFFBQUQsSUFDRUEsUUFBUSxDQUFSQSxtQkFBNEIsQ0FBQyxxQkFINUJELFFBRzRCLENBSDVCQSxNQUtDQyxRQUFELGlCQUNIO0FBQ0UsU0FBRyxFQURMO0FBRUUsV0FBSyxFQUFFLFdBRlQ7QUFHRSxpQkFBVyxFQUFFLDBCQUEwQjNFLFNBSHpDO0FBSUUsY0FBUSxFQUpWO0FBS0UsU0FBRyxFQUFHLEdBQUU2QixXQUFZLFVBQVM4QyxRQUFTLEdBQUVqRSxrQ0FYOUM7QUFNSSxNQU5HZ0UsQ0FBUDtBQWdCRjs7QUFBQSw4Q0FBbUU7QUFDakUsVUFBTTtBQUFBO0FBQUEsUUFBTjs7QUFDQSxRQUFJO0FBQ0YsWUFBTUUsSUFBSSxHQUFHQyxJQUFJLENBQUpBLFVBQWIsYUFBYUEsQ0FBYjtBQUNBLGFBQU8sc0NBQVAsSUFBTyxDQUFQO0FBQ0EsS0FIRixDQUdFLFlBQVk7QUFDWixVQUFJQyxHQUFHLENBQUhBLGdCQUFKLG9CQUFJQSxDQUFKLEVBQStDO0FBQzdDLGNBQU0sVUFDSCwyREFBMEQ5QixhQUFhLENBQUNDLElBRDNFLHFEQUFNLENBQU47QUFJRjs7QUFBQTtBQUVIO0FBRURyQzs7QUFBQUEsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFRRixhQVJKO0FBU0EsVUFBTXVCLGdCQUFnQixHQUFHQyxrQkFBa0IsS0FBM0M7QUFFQSxVQUFNO0FBQUE7QUFBQSxRQUF5QyxLQUEvQzs7QUFFQSxtQkFBZTtBQUNiLGlCQUEyQyxFQUkzQzs7QUFBQSxZQUFNMkMsUUFBUSxHQUFHLENBQ2ZDLFdBRGUsMkNBRWZDLFdBRmUsaUNBR2ZDLFdBSEYsbUNBQWlCLENBQWpCO0FBTUEsMEJBQ0UsNERBQ0dDLFlBQVksSUFBWkEsdUNBQ0M7QUFDRSxVQUFFLEVBREo7QUFFRSxZQUFJLEVBRk47QUFHRSxhQUFLLEVBQUUsV0FIVDtBQUlFLG1CQUFXLEVBQUUsMEJBQTBCbkYsU0FKekM7QUFLRSwrQkFBdUIsRUFBRTtBQUN2QnNELGdCQUFNLEVBQUU4QixVQUFVLENBQVZBLHNCQUNOLGFBUE4sY0FNWUE7QUFEZSxTQUwzQjtBQVVFLDJCQVpOO0FBRUksUUFGSixFQWVHTCxRQUFRLEdBQ0xBLFFBQVEsQ0FBUkEsSUFBY25ELElBQUQsaUJBQ1g7QUFDRSxXQUFHLEVBREw7QUFFRSxXQUFHLEVBQUcsR0FBRUMsV0FBWSxVQUFTRCxJQUFLLEdBQUVsQixrQ0FGdEM7QUFHRSxhQUFLLEVBQUUsV0FIVDtBQUlFLG1CQUFXLEVBQUUsMEJBQTBCVixTQUp6QztBQUtFLDJCQVBDO0FBRUgsUUFERitFLENBREssR0FmWCxNQTBCRzFDLDZCQUFvQkEsZUFBcEJBLGNBQXdDLElBQUlnRCxRQUFRLElBM0J6RCxFQTJCNkMsQ0FBeENoRCxDQTFCSCxDQURGO0FBZ0NGOztBQUFBLFVBQU07QUFBQTtBQUFBO0FBQUEsUUFBTjs7QUFFQSxjQUEyQztBQUN6QyxVQUFJLFdBQUosYUFDRUcsT0FBTyxDQUFQQTtBQUtKOztBQUFBLFVBQU04QyxVQUFVLEdBQUcsY0FDakI7QUFDRSxXQUFLLEVBRFA7QUFFRSx3QkFGRjtBQUdFLFNBQUcsRUFITDtBQUlFLFNBQUcsRUFDRHpELFdBQVcsR0FDWEMsU0FBUyxDQUFFLGlCQUFnQjRCLE9BQVEsU0FBUUMsV0FBVyxNQUR0RDlCLEVBQ1MsQ0FEVEEsR0FMSjtBQVNFLFdBQUssRUFBRSxXQVRUO0FBVUUsaUJBQVcsRUFBRSwwQkFBMEI3QixTQVZ6QztBQUFBLE9BV09BLFNBQWtDLFNBQWxDQSxHQVpVLEVBQ2pCLEVBRGlCLEVBY2pCQSx1QkFDRSxLQWZlLENBQW5CO0FBaUNBLFVBQU11RixTQUFTLEdBQUcsY0FDaEI7QUFDRSxXQUFLLEVBRFA7QUFFRSx3QkFGRjtBQUdFLFNBQUcsRUFDRDFELFdBQVcsR0FDVixpQkFBZ0I2QixPQURqQjdCLG1CQUpKO0FBUUUsU0FBRyxFQVJMO0FBU0UsV0FBSyxFQUFFLFdBVFQ7QUFVRSxpQkFBVyxFQUFFLDBCQUEwQjdCLFNBVnpDO0FBQUEsT0FXT0EsU0FBa0MsU0FBbENBLEdBWlMsRUFDaEIsRUFEZ0IsRUFjaEJBLHVCQUNFLEtBZmMsQ0FBbEI7QUErQkEsd0JBQ0UsNERBQ0csZ0NBQ0crRSxRQUFRLENBQVJBLElBQ0duRCxJQUFELElBQ0UsQ0FBQ0EsSUFBSSxDQUFKQSxNQUFELFdBQUNBLENBQUQsaUJBQ0U7QUFDRSxTQUFHLEVBREw7QUFFRSxTQUFHLEVBQUcsR0FBRUMsV0FBWSxVQUFTQyxTQUFTLE1BRXBDLEdBQUVwQixrQ0FKTjtBQUtFLFdBQUssRUFBRSxXQUxUO0FBTUUsaUJBQVcsRUFBRSwwQkFBMEJWLFNBVmxEO0FBSVMsTUFITitFLENBREgsR0FESCxNQWdCR0ksWUFBWSxJQUFaQSx1Q0FDQztBQUNFLFFBQUUsRUFESjtBQUVFLFVBQUksRUFGTjtBQUdFLFdBQUssRUFBRSxXQUhUO0FBSUUsaUJBQVcsRUFBRSwwQkFBMEJuRixTQUp6QztBQUtFLDZCQUF1QixFQUFFO0FBQ3ZCc0QsY0FBTSxFQUFFOEIsVUFBVSxDQUFWQSxzQkFDTixhQXhCVixjQXVCZ0JBO0FBRGU7QUFMM0IsTUFqQkosRUE2QkdwRixzQkFDQyxTQUREQSxHQTdCSCxNQXVDRyxxQkFBcUIsS0F2Q3hCLGtCQXVDd0IsRUF2Q3hCLEVBd0NHLHFCQXhDSCxXQXlDRyxxQkFBcUJpRCxJQUFJLEtBQXpCLGFBekNILFlBMENHZCxnQkFBZ0IsSUFBaEJBLHNCQUEwQyxLQTFDN0MsZ0JBMEM2QyxFQTFDN0MsRUEyQ0dBLGdCQUFnQixJQUFoQkEsc0JBQTBDLEtBM0M3QyxVQTJDNkMsRUEzQzdDLEVBNENHRSw2QkFBb0JBLGVBQXBCQSxjQUF3QyxJQUFJZ0QsUUFBUSxJQTdDekQsRUE2QzZDLENBQXhDaEQsQ0E1Q0gsQ0FERjtBQWpQbUQ7O0FBQUE7OztBQUExQytDLFUsQ0FDSmpFLFdBRElpRSxHQUNVaEUsZ0NBRFZnRTtBQUFBQSxVLENBR0ovRCxTQUhJK0QsR0FHUTtBQUNqQnRCLE9BQUssRUFBRXZDLG1CQURVO0FBRWpCd0MsYUFBVyxFQUFFeEMsbUJBRkk7QUFBQSxDQUhSNkQ7QUFBQUEsVSxDQVdKSSxpQkFYSUosR0FZVCwwVEFaU0E7O0FBb1NiLHFDQUE2RDtBQUMzRCxTQUFPSyxPQUFPLElBQUssR0FBRUMsTUFBTyxHQUFFQSxNQUFNLENBQU5BLHNCQUE2QixHQUEzRDtBQUdGOztBQUFBLG9DQUE2RDtBQUMzRCxRQUFNQyxXQUFXLEdBQUcxQyxJQUFJLEtBQUpBLGlCQUFwQjtBQUNBLFNBQU9TLE9BQU8sR0FBSSxHQUFFaUMsV0FBWSxJQUFHakMsT0FBckIsUUFBcUMsR0FBRWlDLFdBQXJEO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDaDBCWSx3QkFBd0Isa0RBQWtEO0FBQ3ZGO0FBQ0EscUJBQXFCLGlGQUFpRix3Q0FBd0MsbUNBQW1DO0FBQ2pMLHNDOzs7Ozs7Ozs7OztBQ0hBLGlCQUFpQixtQkFBTyxDQUFDLDJFQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FqRDtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQTNCOztBQUNBO0NBS0E7O0FBQ0EsTUFBTUMsVUFBTixTQUF5QmpGLG9EQUF6QixDQUFrQztBQUNoQyxlQUFha0YsZUFBYixDQUE2QnhGLEdBQTdCLEVBQXVDO0FBQ3JDLFFBQUl5RixTQUFTLEdBQUdDLDBDQUFHLENBQUNDLEtBQUosQ0FBVTNGLEdBQUcsQ0FBQ21GLE1BQWQsQ0FBaEI7QUFDQSxRQUFJUyxPQUFPLEdBQUcsRUFBZDs7QUFDQSxRQUFJLE9BQU9ILFNBQVMsQ0FBQ0ksS0FBakIsS0FBMkIsUUFBL0IsRUFBeUM7QUFDdkMsVUFBSUMsU0FBUyxHQUFHVCxXQUFXLENBQUNNLEtBQVosQ0FBa0JGLFNBQVMsQ0FBQ0ksS0FBNUIsQ0FBaEI7O0FBQ0EsVUFBSUMsU0FBUyxJQUFJLENBQUNDLDBEQUFTLENBQUM1SCxPQUFWLENBQWtCMkgsU0FBUyxDQUFDRSxHQUE1QixDQUFsQixFQUFvRDtBQUNsREosZUFBTyxHQUFJRSxTQUFTLENBQUNFLEdBQXJCO0FBQ0Q7QUFDRjs7QUFFRCxVQUFNQyxNQUFNLEdBQUcsSUFBSUMsMEVBQUosRUFBZjtBQUNBLFVBQU1DLGtCQUFrQixHQUFHbkcsR0FBRyxDQUFDb0csVUFBL0I7O0FBQ0FwRyxPQUFHLENBQUNvRyxVQUFKLEdBQWlCLE1BQ2ZELGtCQUFrQixDQUFDO0FBQ2pCdkcsZ0JBQVUsRUFBR0MsR0FBRCxJQUFlRSxLQUFELElBQWdCa0csTUFBTSxDQUFDSSxPQUFQLENBQWUsTUFBQyxHQUFELGVBQVN0RyxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBZjtBQUR6QixLQUFELENBRHBCOztBQUtBLFFBQUl1RyxZQUFZLEdBQUcsTUFBTWhHLG9EQUFRLENBQUNrRixlQUFULENBQXlCeEYsR0FBekIsQ0FBekI7QUFDQXNHLGdCQUFZLG1DQUNQQSxZQURPO0FBQ09yRyxZQUFNLEVBQUUsQ0FDdkIsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBZ0IsV0FBRyxFQUFDLFFBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR3FHLFlBQVksQ0FBQ3JHLE1BRGhCLEVBRUdnRyxNQUFNLENBQUNNLGVBQVAsRUFGSCxDQUR1QjtBQURmLE1BQVo7O0FBUUEsUUFBSUMsVUFBVTtBQUNaQyxnQkFBVSxFQUFFO0FBREEsT0FFVEgsWUFGUyxDQUFkOztBQUlBRSxjQUFVLENBQUNDLFVBQVgsR0FBd0JiLE9BQXhCO0FBQ0EsV0FBT1ksVUFBUDtBQUNEOztBQUNEbkcsUUFBTSxHQUFHO0FBQ1A7QUFDQSxRQUFJeUYsU0FBUyxHQUFHLEtBQUsvRixLQUFMLENBQVcwRyxVQUEzQjtBQUNBLFdBQ0U7QUFBTSxVQUFJLEVBQUUsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFLLGVBQVMsRUFBRSxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUUsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGFBQU8sRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsS0FBaEI7QUFDRSxPQUFDLEVBQUMsd1dBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBR0U7QUFBTSxlQUFTLEVBQUMsS0FBaEI7QUFDRSxPQUFDLEVBQUMsNEdBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQ0UsT0FBQyxFQUFDLHdPQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUdFO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQ0UsT0FBQyxFQUFDLGtSQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixFQUtFO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQ0UsT0FBQyxFQUFDLGdaQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRixFQU9FO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQ0UsT0FBQyxFQUFDLDBYQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQRixFQVNFO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQ0UsT0FBQyxFQUFDLDRaQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFURixFQVdFO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQXNCLE9BQUMsRUFBQyxnRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVhGLEVBWUU7QUFBTSxlQUFTLEVBQUMsS0FBaEI7QUFDRSxPQUFDLEVBQUMsK2FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVpGLEVBY0U7QUFBTSxlQUFTLEVBQUMsS0FBaEI7QUFDRSxPQUFDLEVBQUMsMlpBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWRGLEVBZ0JFO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQXNCLE9BQUMsRUFBQywrREFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWhCRixDQUxGLEVBdUJFO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQ0UsT0FBQyxFQUFDLCtXQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF2QkYsQ0FERixDQURGLENBREYsRUErQkU7QUFBSyxlQUFTLEVBQUUsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFdBQUssRUFBRVgsU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBL0JGLEVBa0NFO0FBQUssZUFBUyxFQUFFLG1CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQWxDRixFQW1DRTtBQUFLLGVBQVMsRUFBRSxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQW1DLG1CQUFXQSxTQUE5QztBQUF5RCxRQUFFLEVBQUUsZ0JBQTdEO0FBQStFLG1CQUFVLG9CQUF6RjtBQUE4RyxxQkFBWSxHQUExSDtBQUE4SCxvQkFBVyxNQUF6STtBQUNFLHdCQUFnQixJQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBSUU7QUFBRyxVQUFJLEVBQUVBLFNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFvQjtBQUFLLGVBQVMsRUFBRSxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBcEIsQ0FKRixDQW5DRixDQUZGLEVBNENFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBNUNGLENBREY7QUFtREQ7O0FBeEYrQjs7QUEyRm5CUCx5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTsiLCJjb25zdCBpc0JsYW5rID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiIHx8IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IDAgfHwgdmFsdWUgPT09ICcnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiAodmFsdWUubGVuZ3RoIDw9IDAgfHwgdmFsdWUudHJpbSgpLmxlbmd0aCA8PSAwKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHJldHVybiBpc0VtcHR5KHZhbHVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGlzRW1wdHkgPSAob2JqOiBhbnkpID0+IHtcclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5jb25zdCBpc051bWJlciA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKGlzQmxhbmsodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGlzRW1haWwgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmIChpc0JsYW5rKHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBsZXQgZW1haWwgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICByZXR1cm4gZW1haWwudGVzdCh2YWx1ZSk7XHJcbn07XHJcblxyXG5jb25zdCBpc1NsdWcgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmIChpc0JsYW5rKHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBsZXQgc2x1ZyA9IC9eW0EtWmEtejAtOV0rKD86LVtBLVphLXowLTldKykqJC9cclxuICByZXR1cm4gc2x1Zy50ZXN0KHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGlzVXJsID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICBpZiAoaXNCbGFuayh2YWx1ZSkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgbGV0IHJlZ2V4cCA9IC9eKD86KD86aHR0cHM/fGZ0cCk6XFwvXFwvKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykoPzpcXC4oPzpbYS16XFx1MDBhMS1cXHVmZmZmMC05XS0qKSpbYS16XFx1MDBhMS1cXHVmZmZmMC05XSspKig/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmZdezIsfSkpKSg/OjpcXGR7Miw1fSk/KD86XFwvXFxTKik/JC87XHJcbiAgcmV0dXJuIHJlZ2V4cC50ZXN0KHZhbHVlKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBpc0JsYW5rLFxyXG4gIGlzRW1haWwsXHJcbiAgaXNFbXB0eSxcclxuICBpc051bWJlcixcclxuICBpc1VybCxcclxuICBpc1NsdWdcclxufTtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZsdXNoIGZyb20gJ3N0eWxlZC1qc3gvc2VydmVyJ1xuaW1wb3J0IHtcbiAgQU1QX1JFTkRFUl9UQVJHRVQsXG4gIENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9BTVAsXG4gIENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9SRUFDVF9SRUZSRVNILFxuICBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfV0VCUEFDSyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cydcbmltcG9ydCB7IERvY3VtZW50Q29udGV4dCBhcyBEb2N1bWVudENvbXBvbmVudENvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dCdcbmltcG9ydCB7XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IGNsZWFuQW1wUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci91dGlscydcbmltcG9ydCB7IGh0bWxFc2NhcGVKc29uU3RyaW5nIH0gZnJvbSAnLi4vc2VydmVyL2h0bWxlc2NhcGUnXG5cbmV4cG9ydCB7IERvY3VtZW50Q29udGV4dCwgRG9jdW1lbnRJbml0aWFsUHJvcHMsIERvY3VtZW50UHJvcHMgfVxuXG5leHBvcnQgdHlwZSBPcmlnaW5Qcm9wcyA9IHtcbiAgbm9uY2U/OiBzdHJpbmdcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUoeyByZXEsIHJlcyB9OiBEb2N1bWVudENvbnRleHQpIHt9XG5cbmZ1bmN0aW9uIGRlZHVwZShidW5kbGVzOiBhbnlbXSk6IGFueVtdIHtcbiAgY29uc3QgZmlsZXMgPSBuZXcgU2V0KClcbiAgY29uc3Qga2VwdCA9IFtdXG5cbiAgZm9yIChjb25zdCBidW5kbGUgb2YgYnVuZGxlcykge1xuICAgIGlmIChmaWxlcy5oYXMoYnVuZGxlLmZpbGUpKSBjb250aW51ZVxuICAgIGZpbGVzLmFkZChidW5kbGUuZmlsZSlcbiAgICBrZXB0LnB1c2goYnVuZGxlKVxuICB9XG4gIHJldHVybiBrZXB0XG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLmpzJC8sICcubW9kdWxlLmpzJylcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIGBEb2N1bWVudGAgY29tcG9uZW50IGhhbmRsZXMgdGhlIGluaXRpYWwgYGRvY3VtZW50YCBtYXJrdXAgYW5kIHJlbmRlcnMgb25seSBvbiB0aGUgc2VydmVyIHNpZGUuXG4gKiBDb21tb25seSB1c2VkIGZvciBpbXBsZW1lbnRpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGZvciBgY3NzLWluLWpzYCBsaWJyYXJpZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50PFAgPSB7fT4gZXh0ZW5kcyBDb21wb25lbnQ8RG9jdW1lbnRQcm9wcyAmIFA+IHtcbiAgc3RhdGljIGhlYWRUYWdzTWlkZGxld2FyZSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgPyBpbXBvcnQoXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtaGVhZC10YWdzLXNlcnZlciEnXG4gICAgICApXG4gICAgOiAoKSA9PiBbXVxuICBzdGF0aWMgYm9keVRhZ3NNaWRkbGV3YXJlID0gcHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlNcbiAgICA/IGltcG9ydChcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBsb2FkZXIgc3ludGF4XG4gICAgICAgICduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1ib2R5LXRhZ3Mtc2VydmVyISdcbiAgICAgIClcbiAgICA6ICgpID0+IFtdXG4gIHN0YXRpYyBodG1sUHJvcHNNaWRkbGV3YXJlID0gcHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlNcbiAgICA/IGltcG9ydChcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBsb2FkZXIgc3ludGF4XG4gICAgICAgICduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1odG1sLXByb3BzLXNlcnZlciEnXG4gICAgICApXG4gICAgOiAoKSA9PiBbXVxuXG4gIC8qKlxuICAgKiBgZ2V0SW5pdGlhbFByb3BzYCBob29rIHJldHVybnMgdGhlIGNvbnRleHQgb2JqZWN0IHdpdGggdGhlIGFkZGl0aW9uIG9mIGByZW5kZXJQYWdlYC5cbiAgICogYHJlbmRlclBhZ2VgIGNhbGxiYWNrIGV4ZWN1dGVzIGBSZWFjdGAgcmVuZGVyaW5nIGxvZ2ljIHN5bmNocm9ub3VzbHkgdG8gc3VwcG9ydCBzZXJ2ZXItcmVuZGVyaW5nIHdyYXBwZXJzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKFxuICAgIGN0eDogRG9jdW1lbnRDb250ZXh0XG4gICk6IFByb21pc2U8RG9jdW1lbnRJbml0aWFsUHJvcHM+IHtcbiAgICBjb25zdCBlbmhhbmNlcnMgPSBwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgICAgPyBhd2FpdCBpbXBvcnQoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBsb2FkZXIgc3ludGF4XG4gICAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPXVuc3RhYmxlLWVuaGFuY2UtYXBwLXNlcnZlciEnXG4gICAgICAgICkudGhlbigobW9kKSA9PiBtb2QuZGVmYXVsdChjdHgpKVxuICAgICAgOiBbXVxuXG4gICAgY29uc3QgZW5oYW5jZUFwcCA9IChBcHA6IGFueSkgPT4ge1xuICAgICAgZm9yIChjb25zdCBlbmhhbmNlciBvZiBlbmhhbmNlcnMpIHtcbiAgICAgICAgQXBwID0gZW5oYW5jZXIoQXBwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIChwcm9wczogYW55KSA9PiA8QXBwIHsuLi5wcm9wc30gLz5cbiAgICB9XG5cbiAgICBjb25zdCB7IGh0bWwsIGhlYWQgfSA9IGF3YWl0IGN0eC5yZW5kZXJQYWdlKHsgZW5oYW5jZUFwcCB9KVxuICAgIGNvbnN0IHN0eWxlcyA9IFtcbiAgICAgIC4uLmZsdXNoKCksXG4gICAgICAuLi4ocHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlNcbiAgICAgICAgPyBhd2FpdCBpbXBvcnQoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgICAgICduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT11bnN0YWJsZS1nZXQtc3R5bGVzLXNlcnZlciEnXG4gICAgICAgICAgKS50aGVuKChtb2QpID0+IG1vZC5kZWZhdWx0KGN0eCkpXG4gICAgICAgIDogW10pLFxuICAgIF1cbiAgICByZXR1cm4geyBodG1sLCBoZWFkLCBzdHlsZXMgfVxuICB9XG5cbiAgc3RhdGljIHJlbmRlckRvY3VtZW50PFA+KFxuICAgIERvY3VtZW50OiBuZXcgKCkgPT4gRG9jdW1lbnQ8UD4sXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHMgJiBQXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2N1bWVudENvbXBvbmVudENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICBfZG9jdW1lbnRQcm9wczogcHJvcHMsXG4gICAgICAgICAgLy8gSW4gZGV2IHdlIGludmFsaWRhdGUgdGhlIGNhY2hlIGJ5IGFwcGVuZGluZyBhIHRpbWVzdGFtcCB0byB0aGUgcmVzb3VyY2UgVVJMLlxuICAgICAgICAgIC8vIFRoaXMgaXMgYSB3b3JrYXJvdW5kIHRvIGZpeCBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvaXNzdWVzLzU4NjBcbiAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgdGhpcyB3b3JrYXJvdW5kIHdoZW4gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE4NzcyNiBpcyBmaXhlZC5cbiAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nOlxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICc/dHM9JyArIERhdGUubm93KCkgOiAnJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPERvY3VtZW50IHsuLi5wcm9wc30gLz5cbiAgICAgIDwvRG9jdW1lbnRDb21wb25lbnRDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWw+XG4gICAgICAgIDxIZWFkIC8+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSHRtbCBleHRlbmRzIENvbXBvbmVudDxcbiAgUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gICAgUmVhY3QuSHRtbEhUTUxBdHRyaWJ1dGVzPEhUTUxIdG1sRWxlbWVudD4sXG4gICAgSFRNTEh0bWxFbGVtZW50XG4gID5cbj4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5BbXBNb2RlLCBodG1sUHJvcHMgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8aHRtbFxuICAgICAgICB7Li4uaHRtbFByb3BzfVxuICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgYW1wPXtpbkFtcE1vZGUgPyAnJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtcbiAgICAgICAgICBpbkFtcE1vZGUgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICcnIDogdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkIGV4dGVuZHMgQ29tcG9uZW50PFxuICBPcmlnaW5Qcm9wcyAmXG4gICAgUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gICAgICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MSGVhZEVsZW1lbnQ+LFxuICAgICAgSFRNTEhlYWRFbGVtZW50XG4gICAgPlxuPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbm9uY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3Jvc3NPcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICBnZXRDc3NMaW5rcygpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3QgeyBhc3NldFByZWZpeCwgZmlsZXMgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgY3NzRmlsZXMgPVxuICAgICAgZmlsZXMgJiYgZmlsZXMubGVuZ3RoID8gZmlsZXMuZmlsdGVyKChmKSA9PiAvXFwuY3NzJC8udGVzdChmKSkgOiBbXVxuXG4gICAgY29uc3QgY3NzTGlua0VsZW1lbnRzOiBKU1guRWxlbWVudFtdID0gW11cbiAgICBjc3NGaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBjc3NMaW5rRWxlbWVudHMucHVzaChcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2Ake2ZpbGV9LXByZWxvYWRgfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGFzPVwic3R5bGVcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgIC8+LFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY3NzTGlua0VsZW1lbnRzLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBjc3NMaW5rRWxlbWVudHNcbiAgfVxuXG4gIGdldFByZWxvYWREeW5hbWljQ2h1bmtzKCkge1xuICAgIGNvbnN0IHsgZHluYW1pY0ltcG9ydHMsIGFzc2V0UHJlZml4IH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBjb25zdCB7IF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIChcbiAgICAgIGRlZHVwZShkeW5hbWljSW1wb3J0cylcbiAgICAgICAgLm1hcCgoYnVuZGxlOiBhbnkpID0+IHtcbiAgICAgICAgICAvLyBgZHluYW1pY0ltcG9ydHNgIHdpbGwgY29udGFpbiBib3RoIGAuanNgIGFuZCBgLm1vZHVsZS5qc2Agd2hlbiB0aGVcbiAgICAgICAgICAvLyBmZWF0dXJlIGlzIGVuYWJsZWQuIFRoaXMgY2xhdXNlIHdpbGwgZmlsdGVyIGRvd24gdG8gdGhlIG1vZGVyblxuICAgICAgICAgIC8vIHZhcmlhbnRzIG9ubHkuXG4gICAgICAgICAgaWYgKCFidW5kbGUuZmlsZS5lbmRzV2l0aChnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoJy5qcycpKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGtleT17YnVuZGxlLmZpbGV9XG4gICAgICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgICBidW5kbGUuZmlsZVxuICAgICAgICAgICAgICApfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIC8vIEZpbHRlciBvdXQgbnVsbGVkIHNjcmlwdHNcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgIClcbiAgfVxuXG4gIGdldFByZWxvYWRNYWluTGlua3MoKTogSlNYLkVsZW1lbnRbXSB8IG51bGwge1xuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXgsIGZpbGVzIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBjb25zdCB7IF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgY29uc3QgcHJlbG9hZEZpbGVzID1cbiAgICAgIGZpbGVzICYmIGZpbGVzLmxlbmd0aFxuICAgICAgICA/IGZpbGVzLmZpbHRlcigoZmlsZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAvLyBgZHluYW1pY0ltcG9ydHNgIHdpbGwgY29udGFpbiBib3RoIGAuanNgIGFuZCBgLm1vZHVsZS5qc2Agd2hlblxuICAgICAgICAgICAgLy8gdGhlIGZlYXR1cmUgaXMgZW5hYmxlZC4gVGhpcyBjbGF1c2Ugd2lsbCBmaWx0ZXIgZG93biB0byB0aGVcbiAgICAgICAgICAgIC8vIG1vZGVybiB2YXJpYW50cyBvbmx5LlxuICAgICAgICAgICAgcmV0dXJuIGZpbGUuZW5kc1dpdGgoZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KCcuanMnKSlcbiAgICAgICAgICB9KVxuICAgICAgICA6IFtdXG5cbiAgICByZXR1cm4gIXByZWxvYWRGaWxlcy5sZW5ndGhcbiAgICAgID8gbnVsbFxuICAgICAgOiBwcmVsb2FkRmlsZXMubWFwKChmaWxlOiBzdHJpbmcpID0+IChcbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdHlsZXMsXG4gICAgICBhbXBQYXRoLFxuICAgICAgaW5BbXBNb2RlLFxuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBoeWJyaWRBbXAsXG4gICAgICBjYW5vbmljYWxCYXNlLFxuICAgICAgX19ORVhUX0RBVEFfXyxcbiAgICAgIGRhbmdlcm91c0FzUGF0aCxcbiAgICAgIGhlYWRUYWdzLFxuICAgICAgdW5zdGFibGVfcnVudGltZUpTLFxuICAgIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgeyBwYWdlLCBidWlsZElkIH0gPSBfX05FWFRfREFUQV9fXG5cbiAgICBsZXQgeyBoZWFkIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgLy8gc2hvdyBhIHdhcm5pbmcgaWYgSGVhZCBjb250YWlucyA8dGl0bGU+IChvbmx5IGluIGRldmVsb3BtZW50KVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgaXNSZWFjdEhlbG1ldCA9IGNoaWxkPy5wcm9wcz8uWydkYXRhLXJlYWN0LWhlbG1ldCddXG4gICAgICAgIGlmIChjaGlsZD8udHlwZSA9PT0gJ3RpdGxlJyAmJiAhaXNSZWFjdEhlbG1ldCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiV2FybmluZzogPHRpdGxlPiBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL2Vyci5zaC9uZXh0LmpzL25vLWRvY3VtZW50LXRpdGxlXCJcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogYEhlYWRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL25leHQuanMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgaGFzQW1waHRtbFJlbCA9IGZhbHNlXG4gICAgbGV0IGhhc0Nhbm9uaWNhbFJlbCA9IGZhbHNlXG5cbiAgICAvLyBzaG93IHdhcm5pbmcgYW5kIHJlbW92ZSBjb25mbGljdGluZyBhbXAgaGVhZCB0YWdzXG4gICAgaGVhZCA9IFJlYWN0LkNoaWxkcmVuLm1hcChoZWFkIHx8IFtdLCAoY2hpbGQpID0+IHtcbiAgICAgIGlmICghY2hpbGQpIHJldHVybiBjaGlsZFxuICAgICAgY29uc3QgeyB0eXBlLCBwcm9wcyB9ID0gY2hpbGRcblxuICAgICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgICBsZXQgYmFkUHJvcDogc3RyaW5nID0gJydcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ21ldGEnICYmIHByb3BzLm5hbWUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgICBiYWRQcm9wID0gJ25hbWU9XCJ2aWV3cG9ydFwiJ1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdjYW5vbmljYWwnKSB7XG4gICAgICAgICAgaGFzQ2Fub25pY2FsUmVsID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzY3JpcHQnKSB7XG4gICAgICAgICAgLy8gb25seSBibG9jayBpZlxuICAgICAgICAgIC8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuICAgICAgICAgIC8vIDIuIGl0IGlzIHVzaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIHdpdGhvdXQgYSB0eXBlIG9yXG4gICAgICAgICAgLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChwcm9wcy5zcmMgJiYgcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKSA8IC0xKSB8fFxuICAgICAgICAgICAgKHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICYmXG4gICAgICAgICAgICAgICghcHJvcHMudHlwZSB8fCBwcm9wcy50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0JykpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBiYWRQcm9wID0gJzxzY3JpcHQnXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICAgICAgICBiYWRQcm9wICs9IGAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYmFkUHJvcCArPSAnLz4nXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJhZFByb3ApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvY29uZmxpY3RpbmctYW1wLXRhZ2BcbiAgICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm9uLWFtcCBtb2RlXG4gICAgICAgIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnYW1waHRtbCcpIHtcbiAgICAgICAgICBoYXNBbXBodG1sUmVsID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9KVxuXG4gICAgLy8gdHJ5IHRvIHBhcnNlIHN0eWxlcyBmcm9tIGZyYWdtZW50IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgY29uc3QgY3VyU3R5bGVzOiBSZWFjdC5SZWFjdEVsZW1lbnRbXSA9IEFycmF5LmlzQXJyYXkoc3R5bGVzKVxuICAgICAgPyAoc3R5bGVzIGFzIFJlYWN0LlJlYWN0RWxlbWVudFtdKVxuICAgICAgOiBbXVxuICAgIGlmIChcbiAgICAgIGluQW1wTW9kZSAmJlxuICAgICAgc3R5bGVzICYmXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIHN0eWxlcy5wcm9wcyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBBcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbilcbiAgICApIHtcbiAgICAgIGNvbnN0IGhhc1N0eWxlcyA9IChlbDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PlxuICAgICAgICBlbD8ucHJvcHM/LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPy5fX2h0bWxcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWwpID0+IGhhc1N0eWxlcyhlbCkgJiYgY3VyU3R5bGVzLnB1c2goZWwpKVxuICAgICAgICB9IGVsc2UgaWYgKGhhc1N0eWxlcyhjaGlsZCkpIHtcbiAgICAgICAgICBjdXJTdHlsZXMucHVzaChjaGlsZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWQgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICB7dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzLmlzRGV2ZWxvcG1lbnQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6bm9uZX1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxub3NjcmlwdFxuICAgICAgICAgICAgICBkYXRhLW5leHQtaGlkZS1mb3VjXG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZT17aW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5OmJsb2NrfWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge2hlYWR9XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cIm5leHQtaGVhZC1jb3VudFwiXG4gICAgICAgICAgY29udGVudD17UmVhY3QuQ2hpbGRyZW4uY291bnQoaGVhZCB8fCBbXSkudG9TdHJpbmcoKX1cbiAgICAgICAgLz5cbiAgICAgICAge2luQW1wTW9kZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsbWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgeyFoYXNDYW5vbmljYWxSZWwgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImNhbm9uaWNhbFwiXG4gICAgICAgICAgICAgICAgaHJlZj17Y2Fub25pY2FsQmFzZSArIGNsZWFuQW1wUGF0aChkYW5nZXJvdXNBc1BhdGgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsvKiBodHRwczovL3d3dy5hbXBwcm9qZWN0Lm9yZy9kb2NzL2Z1bmRhbWVudGFscy9vcHRpbWl6ZV9hbXAjb3B0aW1pemUtdGhlLWFtcC1ydW50aW1lLWxvYWRpbmcgKi99XG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiBBZGQgY3VzdG9tIHN0eWxlcyBiZWZvcmUgQU1QIHN0eWxlcyB0byBwcmV2ZW50IGFjY2lkZW50YWwgb3ZlcnJpZGVzICovfVxuICAgICAgICAgICAge3N0eWxlcyAmJiAoXG4gICAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICAgIGFtcC1jdXN0b209XCJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGN1clN0eWxlc1xuICAgICAgICAgICAgICAgICAgICAubWFwKChzdHlsZSkgPT4gc3R5bGUucHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sKVxuICAgICAgICAgICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcKiMgc291cmNlTWFwcGluZ1VSTD0uKlxcKlxcLy9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcKkAgc291cmNlVVJMPS4qP1xcKlxcLy9nLCAnJyksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgYW1wLWJvaWxlcnBsYXRlPVwiXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1vei1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbXMtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7YW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGh9QC13ZWJraXQta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbW96LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1zLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW8ta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUBrZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICAgIGFtcC1ib2lsZXJwbGF0ZT1cIlwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246bm9uZTstbW96LWFuaW1hdGlvbjpub25lOy1tcy1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX1gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHshaW5BbXBNb2RlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgeyFoYXNBbXBodG1sUmVsICYmIGh5YnJpZEFtcCAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwiYW1waHRtbFwiXG4gICAgICAgICAgICAgICAgaHJlZj17Y2Fub25pY2FsQmFzZSArIGdldEFtcFBhdGgoYW1wUGF0aCwgZGFuZ2Vyb3VzQXNQYXRoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7dGhpcy5nZXRDc3NMaW5rcygpfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMvX2FwcC5qc2ApXG4gICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgIF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHBhZ2UgIT09ICcvX2Vycm9yJyAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoXG4gICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSShcbiAgICAgICAgICAgICAgICAgICAgICBgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzJHtnZXRQYWdlRmlsZShwYWdlKX1gXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UHJlbG9hZE1haW5MaW5rcygpfVxuICAgICAgICAgICAge3RoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcy5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICAgICAgLy8gdGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gbW91bnQgZGV2ZWxvcG1lbnQgc3R5bGVzIHNvIHRoZVxuICAgICAgICAgICAgICAvLyBvcmRlcmluZyBtYXRjaGVzIHByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgLy8gKGJ5IGRlZmF1bHQsIHN0eWxlLWxvYWRlciBpbmplY3RzIGF0IHRoZSBib3R0b20gb2YgPGhlYWQgLz4pXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBpZD1cIl9fbmV4dF9jc3NfX0RPX05PVF9VU0VfX1wiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3N0eWxlcyB8fCBudWxsfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIC4uLihoZWFkVGFncyB8fCBbXSkpfVxuICAgICAgPC9oZWFkPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0PlxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGluQW1wTW9kZSwgaHRtbCB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgaWYgKGluQW1wTW9kZSkgcmV0dXJuIEFNUF9SRU5ERVJfVEFSR0VUXG4gICAgcmV0dXJuIDxkaXYgaWQ9XCJfX25leHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0gLz5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV4dFNjcmlwdCBleHRlbmRzIENvbXBvbmVudDxPcmlnaW5Qcm9wcz4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5vbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyb3NzT3JpZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgLy8gU291cmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9zYW10aG9yLzY0YjExNGU0YTRmNTM5OTE1YTk1YjkxZmZkMzQwYWNjXG4gIHN0YXRpYyBzYWZhcmlOb21vZHVsZUZpeCA9XG4gICAgJyFmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LHQ9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKCEoXCJub01vZHVsZVwiaW4gdCkmJlwib25iZWZvcmVsb2FkXCJpbiB0KXt2YXIgbj0hMTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVsb2FkXCIsZnVuY3Rpb24oZSl7aWYoZS50YXJnZXQ9PT10KW49ITA7ZWxzZSBpZighZS50YXJnZXQuaGFzQXR0cmlidXRlKFwibm9tb2R1bGVcIil8fCFuKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCl9LCEwKSx0LnR5cGU9XCJtb2R1bGVcIix0LnNyYz1cIi5cIixlLmhlYWQuYXBwZW5kQ2hpbGQodCksdC5yZW1vdmUoKX19KCk7J1xuXG4gIGdldER5bmFtaWNDaHVua3MoKSB7XG4gICAgY29uc3QgeyBkeW5hbWljSW1wb3J0cywgYXNzZXRQcmVmaXgsIGZpbGVzIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBjb25zdCB7IF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIGRlZHVwZShkeW5hbWljSW1wb3J0cykubWFwKChidW5kbGU6IGFueSkgPT4ge1xuICAgICAgbGV0IG1vZGVyblByb3BzID0ge31cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKSB7XG4gICAgICAgIG1vZGVyblByb3BzID0gL1xcLm1vZHVsZVxcLmpzJC8udGVzdChidW5kbGUuZmlsZSlcbiAgICAgICAgICA/IHsgdHlwZTogJ21vZHVsZScgfVxuICAgICAgICAgIDogeyBub01vZHVsZTogdHJ1ZSB9XG4gICAgICB9XG5cbiAgICAgIGlmICghL1xcLmpzJC8udGVzdChidW5kbGUuZmlsZSkgfHwgZmlsZXMuaW5jbHVkZXMoYnVuZGxlLmZpbGUpKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBrZXk9e2J1bmRsZS5maWxlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgYnVuZGxlLmZpbGVcbiAgICAgICAgICApfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgey4uLm1vZGVyblByb3BzfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBnZXRTY3JpcHRzKCkge1xuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXgsIGZpbGVzLCBsb3dQcmlvcml0eUZpbGVzIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBjb25zdCB7IF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgY29uc3Qgbm9ybWFsU2NyaXB0cyA9IGZpbGVzPy5maWx0ZXIoKGZpbGUpID0+IGZpbGUuZW5kc1dpdGgoJy5qcycpKVxuICAgIGNvbnN0IGxvd1ByaW9yaXR5U2NyaXB0cyA9IGxvd1ByaW9yaXR5RmlsZXM/LmZpbHRlcigoZmlsZSkgPT5cbiAgICAgIGZpbGUuZW5kc1dpdGgoJy5qcycpXG4gICAgKVxuXG4gICAgcmV0dXJuIFsuLi5ub3JtYWxTY3JpcHRzLCAuLi5sb3dQcmlvcml0eVNjcmlwdHNdLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgbGV0IG1vZGVyblByb3BzID0ge31cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKSB7XG4gICAgICAgIG1vZGVyblByb3BzID0gZmlsZS5lbmRzV2l0aCgnLm1vZHVsZS5qcycpXG4gICAgICAgICAgPyB7IHR5cGU6ICdtb2R1bGUnIH1cbiAgICAgICAgICA6IHsgbm9Nb2R1bGU6IHRydWUgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICB7Li4ubW9kZXJuUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGdldFBvbHlmaWxsU2NyaXB0cygpIHtcbiAgICAvLyBwb2x5ZmlsbHMuanMgaGFzIHRvIGJlIHJlbmRlcmVkIGFzIG5vbW9kdWxlIHdpdGhvdXQgYXN5bmNcbiAgICAvLyBJdCBhbHNvIGhhcyB0byBiZSB0aGUgZmlyc3Qgc2NyaXB0IHRvIGxvYWRcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4LCBwb2x5ZmlsbEZpbGVzIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBjb25zdCB7IF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIHBvbHlmaWxsRmlsZXNcbiAgICAgIC5maWx0ZXIoXG4gICAgICAgIChwb2x5ZmlsbCkgPT5cbiAgICAgICAgICBwb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykgJiYgIS9cXC5tb2R1bGVcXC5qcyQvLnRlc3QocG9seWZpbGwpXG4gICAgICApXG4gICAgICAubWFwKChwb2x5ZmlsbCkgPT4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAga2V5PXtwb2x5ZmlsbH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIG5vTW9kdWxlPXt0cnVlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgIC8+XG4gICAgICApKVxuICB9XG5cbiAgc3RhdGljIGdldElubGluZVNjcmlwdFNvdXJjZShkb2N1bWVudFByb3BzOiBEb2N1bWVudFByb3BzKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IF9fTkVYVF9EQVRBX18gfSA9IGRvY3VtZW50UHJvcHNcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KF9fTkVYVF9EQVRBX18pXG4gICAgICByZXR1cm4gaHRtbEVzY2FwZUpzb25TdHJpbmcoZGF0YSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZS5pbmRleE9mKCdjaXJjdWxhciBzdHJ1Y3R1cmUnKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2NpcmN1bGFyLXN0cnVjdHVyZWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0YXRpY01hcmt1cCxcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgaW5BbXBNb2RlLFxuICAgICAgZGV2RmlsZXMsXG4gICAgICBfX05FWFRfREFUQV9fLFxuICAgICAgYm9keVRhZ3MsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG5cbiAgICBjb25zdCB7IF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV2RmlsZXMgPSBbXG4gICAgICAgIENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9SRUFDVF9SRUZSRVNILFxuICAgICAgICBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfQU1QLFxuICAgICAgICBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfV0VCUEFDSyxcbiAgICAgIF1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7c3RhdGljTWFya3VwIHx8IGRpc2FibGVSdW50aW1lSlMgPyBudWxsIDogKFxuICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICBpZD1cIl9fTkVYVF9EQVRBX19cIlxuICAgICAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UoXG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7ZGV2RmlsZXNcbiAgICAgICAgICAgID8gZGV2RmlsZXMubWFwKChmaWxlKSA9PiAoXG4gICAgICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIC4uLihib2R5VGFncyB8fCBbXSkpfVxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCB7IHBhZ2UsIGJ1aWxkSWQgfSA9IF9fTkVYVF9EQVRBX19cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VTY3JpcHQgPSBbXG4gICAgICA8c2NyaXB0XG4gICAgICAgIGFzeW5jXG4gICAgICAgIGRhdGEtbmV4dC1wYWdlPXtwYWdlfVxuICAgICAgICBrZXk9e3BhZ2V9XG4gICAgICAgIHNyYz17XG4gICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgIGVuY29kZVVSSShgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzJHtnZXRQYWdlRmlsZShwYWdlKX1gKSArXG4gICAgICAgICAgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ1xuICAgICAgICB9XG4gICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICB7Li4uKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQgPyB7IG5vTW9kdWxlOiB0cnVlIH0gOiB7fSl9XG4gICAgICAvPixcbiAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQgJiYgKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBkYXRhLW5leHQtcGFnZT17cGFnZX1cbiAgICAgICAgICBrZXk9e2Ake3BhZ2V9LW1vZGVybmB9XG4gICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAgIGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChcbiAgICAgICAgICAgICAgZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWApXG4gICAgICAgICAgICApICtcbiAgICAgICAgICAgIF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmdcbiAgICAgICAgICB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICB0eXBlPVwibW9kdWxlXCJcbiAgICAgICAgLz5cbiAgICAgICksXG4gICAgXVxuXG4gICAgY29uc3QgYXBwU2NyaXB0ID0gW1xuICAgICAgPHNjcmlwdFxuICAgICAgICBhc3luY1xuICAgICAgICBkYXRhLW5leHQtcGFnZT1cIi9fYXBwXCJcbiAgICAgICAgc3JjPXtcbiAgICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcy9fYXBwLmpzYCArXG4gICAgICAgICAgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ1xuICAgICAgICB9XG4gICAgICAgIGtleT1cIl9hcHBcIlxuICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgey4uLihwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEID8geyBub01vZHVsZTogdHJ1ZSB9IDoge30pfVxuICAgICAgLz4sXG4gICAgICBwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEICYmIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgZGF0YS1uZXh0LXBhZ2U9XCIvX2FwcFwiXG4gICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAgIGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMvX2FwcC5tb2R1bGUuanNgICtcbiAgICAgICAgICAgIF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmdcbiAgICAgICAgICB9XG4gICAgICAgICAga2V5PVwiX2FwcC1tb2Rlcm5cIlxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgdHlwZT1cIm1vZHVsZVwiXG4gICAgICAgIC8+XG4gICAgICApLFxuICAgIF1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgZGV2RmlsZXNcbiAgICAgICAgICA/IGRldkZpbGVzLm1hcChcbiAgICAgICAgICAgICAgKGZpbGU6IHN0cmluZykgPT5cbiAgICAgICAgICAgICAgICAhZmlsZS5tYXRjaCgvXFwuanNcXC5tYXAvKSAmJiAoXG4gICAgICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICAgICAgICAgICApfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgICAge3N0YXRpY01hcmt1cCB8fCBkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBpZD1cIl9fTkVYVF9EQVRBX19cIlxuICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZShcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQgJiYgIWRpc2FibGVSdW50aW1lSlMgPyAoXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgICAgbm9Nb2R1bGU9e3RydWV9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuc2FmYXJpTm9tb2R1bGVGaXgsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKX1cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIGFwcFNjcmlwdH1cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHBhZ2UgIT09ICcvX2Vycm9yJyAmJiBwYWdlU2NyaXB0fVxuICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyB8fCBzdGF0aWNNYXJrdXAgPyBudWxsIDogdGhpcy5nZXREeW5hbWljQ2h1bmtzKCl9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTIHx8IHN0YXRpY01hcmt1cCA/IG51bGwgOiB0aGlzLmdldFNjcmlwdHMoKX1cbiAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCAuLi4oYm9keVRhZ3MgfHwgW10pKX1cbiAgICAgIDwvPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbXBQYXRoKGFtcFBhdGg6IHN0cmluZywgYXNQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYW1wUGF0aCB8fCBgJHthc1BhdGh9JHthc1BhdGguaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J31hbXA9MWBcbn1cblxuZnVuY3Rpb24gZ2V0UGFnZUZpbGUocGFnZTogc3RyaW5nLCBidWlsZElkPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgc3RhcnRpbmdVcmwgPSBwYWdlID09PSAnLycgPyAnL2luZGV4JyA6IHBhZ2VcbiAgcmV0dXJuIGJ1aWxkSWQgPyBgJHtzdGFydGluZ1VybH0uJHtidWlsZElkfS5qc2AgOiBgJHtzdGFydGluZ1VybH0uanNgXG59XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmh0bWxFc2NhcGVKc29uU3RyaW5nPWh0bWxFc2NhcGVKc29uU3RyaW5nOy8vIFRoaXMgdXRpbGl0eSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlXG4vLyBMaWNlbnNlOiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlL2Jsb2IvMDUyN2NhNzE1NmE1MjRkMjU2MTAxYmIzMTBhOWY5NzBmNjMwNzhhZC9MSUNFTlNFXG5jb25zdCBFU0NBUEVfTE9PS1VQPXsnJic6J1xcXFx1MDAyNicsJz4nOidcXFxcdTAwM2UnLCc8JzonXFxcXHUwMDNjJywnXFx1MjAyOCc6J1xcXFx1MjAyOCcsJ1xcdTIwMjknOidcXFxcdTIwMjknfTtjb25zdCBFU0NBUEVfUkVHRVg9L1smPjxcXHUyMDI4XFx1MjAyOV0vZztmdW5jdGlvbiBodG1sRXNjYXBlSnNvblN0cmluZyhzdHIpe3JldHVybiBzdHIucmVwbGFjZShFU0NBUEVfUkVHRVgsbWF0Y2g9PkVTQ0FQRV9MT09LVVBbbWF0Y2hdKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sZXNjYXBlLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19kb2N1bWVudCcpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xyXG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XHJcbmNvbnN0IFF1ZXJ5c3RyaW5nID0gcmVxdWlyZSgncXVlcnlzdHJpbmcnKTtcclxuaW1wb3J0IFZhbGlkYXRvciBmcm9tIFwiLi4vbW9kdWxlcy92YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIHJlc3BvbnNpdmVGb250U2l6ZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXRzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHg6IGFueSkge1xyXG4gICAgbGV0IHVybE9iamVjdCA9IFVybC5wYXJzZShjdHguYXNQYXRoKTtcclxuICAgIGxldCBkYXRhVXJsID0gJyc7XHJcbiAgICBpZiAodHlwZW9mIHVybE9iamVjdC5xdWVyeSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBsZXQgdXJsU3RyaW5nID0gUXVlcnlzdHJpbmcucGFyc2UodXJsT2JqZWN0LnF1ZXJ5KTtcclxuICAgICAgaWYgKHVybFN0cmluZyAmJiAhVmFsaWRhdG9yLmlzQmxhbmsodXJsU3RyaW5nLnVybCkpIHtcclxuICAgICAgICBkYXRhVXJsID0gKHVybFN0cmluZy51cmwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hlZXRzID0gbmV3IFNlcnZlclN0eWxlU2hlZXRzKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFJlbmRlclBhZ2UgPSBjdHgucmVuZGVyUGFnZTtcclxuICAgIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cclxuICAgICAgb3JpZ2luYWxSZW5kZXJQYWdlKHtcclxuICAgICAgICBlbmhhbmNlQXBwOiAoQXBwOiBhbnkpID0+IChwcm9wczogYW55KSA9PiBzaGVldHMuY29sbGVjdCg8QXBwIHsuLi5wcm9wc30gLz4pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBsZXQgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgICBpbml0aWFsUHJvcHMgPSB7XHJcbiAgICAgIC4uLmluaXRpYWxQcm9wcywgc3R5bGVzOiBbXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT1cInN0eWxlc1wiPlxyXG4gICAgICAgICAge2luaXRpYWxQcm9wcy5zdHlsZXN9XHJcbiAgICAgICAgICB7c2hlZXRzLmdldFN0eWxlRWxlbWVudCgpfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIF1cclxuICAgIH1cclxuICAgIGxldCBkYXRhUmV0dXJuID0ge1xyXG4gICAgICB1cmxfc3RyaW5nOiAnJyxcclxuICAgICAgLi4uaW5pdGlhbFByb3BzXHJcbiAgICB9O1xyXG4gICAgZGF0YVJldHVybi51cmxfc3RyaW5nID0gZGF0YVVybDtcclxuICAgIHJldHVybiBkYXRhUmV0dXJuO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgdXJsU3RyaW5nID0gdGhpcy5wcm9wcy51cmxfc3RyaW5nO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGh0bWwgbGFuZz17XCJ2aS1WTlwifT5cclxuICAgICAgICA8SGVhZCAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInphbG9fc2hhcmVcIn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ6YWxvLXNoYXJlX19sb2dvXCJ9PlxyXG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTczLjcgNDBcIj5cclxuICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MFwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTUuOSwzOGMtMS45LTEuNC02LjUtNC42LTcuNS0xMC4xYy0wLjUtMi43LDAuMi01LjUsMS45LTcuN2MxLjgtMi4yLDQuNS0zLjUsNy40LTMuN2MwLjEsMCwwLjIsMCwwLjMsMGMyLjcsMCw1LjMsMS4yLDcsMy4zYzEuOSwyLjIsMi43LDUuMSwyLjMsNy45Yy0wLjksNS4zLTUsOC40LTcuNCwxMC4ybC0yLDEuNUwxNS45LDM4eiBNMTgsMjAuM2MtMC4xLDAtMC4xLDAtMC4yLDBjLTEuOSwwLjEtMy42LDAuOS00LjcsMi4zYy0xLjEsMS4zLTEuNSwzLTEuMiw0LjdjMC43LDMuNSwzLjMsNS44LDUuOCw3LjdjMi44LTIuMSw1LjMtNC4yLDUuOC03LjdjMC4zLTEuNy0wLjMtMy42LTEuNC01QzIxLjIsMjEsMTkuNywyMC4zLDE4LDIwLjN6XCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MFwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTcuOSwyMi43YzEuOSwwLDMuNCwxLjYsMy40LDMuNGMwLDEuOS0xLjYsMy40LTMuNCwzLjRjLTEuOSwwLTMuNS0xLjYtMy41LTMuNEMxNC41LDI0LjIsMTYsMjIuNywxNy45LDIyLjd6XCIgLz5cclxuICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNTQuMiwzNC4xdi03LjVjMC0wLjktMC4xLTEuNi0wLjQtMmMtMC4zLTAuNi0wLjktMC44LTEuOC0wLjhjLTAuOSwwLTEuNSwwLjMtMS45LDAuOGMtMC4zLDAuNC0wLjUsMS4xLTAuNSwydjcuNGgtNC4xVjIwLjRoMy44djEuNWgwLjFjMC44LTEuMywyLTEuOSwzLjctMS45YzEuNCwwLDIuNiwwLjQsMy41LDEuMmMwLjYsMC41LDEsMS4yLDEuMywyYzAuMiwwLjcsMC4zLDEuNSwwLjMsMi40djguNkg1NC4yelwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk02OC44LDM0LjF2LTcuNGMwLTAuOS0wLjEtMS41LTAuNC0yYy0wLjQtMC42LTEtMC45LTEuOC0wLjljLTAuOCwwLTEuNCwwLjMtMS44LDAuOGMtMC4zLDAuNC0wLjUsMS4xLTAuNSwxLjl2Ny42aC00LjFWMTUuOGg0LjF2NS44aDBjMC4zLTAuNiwwLjgtMS4xLDEuNS0xLjNjMC42LTAuMywxLjItMC40LDItMC40YzEuNiwwLDIuOSwwLjUsMy43LDEuNWMwLjYsMC43LDEsMS41LDEuMSwyLjRjMC4xLDAuNCwwLjEsMC44LDAuMSwxLjNjMCwwLjIsMCwwLjQsMCwwLjd2OC4zSDY4Ljh6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QxXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTg1LDM0LjF2LTEuNWgwYy0wLjMsMC43LTAuOSwxLjItMS43LDEuNWMtMC43LDAuMy0xLjQsMC40LTIuMywwLjRjLTIuMSwwLTMuNy0wLjctNS0yLjFjLTEuMi0xLjQtMS45LTMuMS0xLjktNS4yYzAtMiwwLjYtMy44LDEuOS01LjJjMS4zLTEuNCwzLTIuMiw1LTIuMmMwLjgsMCwxLjYsMC4yLDIuMywwLjVjMC44LDAuMywxLjMsMC44LDEuNywxLjVoMHYtMS41aDQuMXYxMy43SDg1eiBNODQuMSwyNC43Yy0wLjYtMC43LTEuNS0xLTIuNS0xYy0xLDAtMS44LDAuMy0yLjQsMWMtMC42LDAuNy0wLjksMS41LTAuOSwyLjVjMCwxLDAuMywxLjgsMSwyLjRjMC43LDAuNywxLjUsMSwyLjQsMWMxLDAsMS44LTAuMywyLjUtMWMwLjYtMC43LDEtMS41LDEtMi41Qzg1LDI2LjIsODQuNywyNS40LDg0LjEsMjQuN3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAxLjUsMzQuMXYtMS41aDBjLTAuNCwwLjctMSwxLjItMS44LDEuNWMtMC43LDAuMy0xLjQsMC40LTIuMywwLjRjLTIsMC0zLjctMC43LTUtMi4xYy0xLjItMS40LTEuOS0zLjEtMS45LTUuMmMwLTIsMC42LTMuNywxLjgtNS4xYzEuMy0xLjQsMi45LTIuMiw0LjktMi4yYzEuNiwwLDMsMC41LDQsMS42di01LjdoNC4xdjE4LjJIMTAxLjV6IE0xMDAuNSwyNC43Yy0wLjctMC42LTEuNS0xLTIuNS0xYy0xLDAtMS44LDAuMy0yLjUsMWMtMC43LDAuNi0xLDEuNS0xLDIuNWMwLDEsMC4zLDEuOCwxLDIuNWMwLjYsMC43LDEuNSwxLDIuNSwxYzEsMCwxLjktMC4zLDIuNS0xYzAuNi0wLjcsMS0xLjUsMS0yLjVDMTAxLjUsMjYuMiwxMDEuMiwyNS40LDEwMC41LDI0Ljd6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QxXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTExNy42LDM0LjF2LTEuNWgwYy0wLjMsMC43LTAuOSwxLjItMS43LDEuNWMtMC43LDAuMy0xLjQsMC40LTIuMywwLjRjLTIuMSwwLTMuNy0wLjctNS0yLjFjLTEuMi0xLjQtMS45LTMuMS0xLjktNS4yYzAtMiwwLjYtMy44LDEuOS01LjJjMS4zLTEuNCwzLTIuMiw1LTIuMmMwLjgsMCwxLjYsMC4yLDIuMywwLjVjMC44LDAuMywxLjMsMC44LDEuNywxLjVoMHYtMS41aDQuMXYxMy43SDExNy42eiBNMTE2LjYsMjQuN2MtMC42LTAuNy0xLjUtMS0yLjUtMWMtMSwwLTEuOCwwLjMtMi40LDFjLTAuNiwwLjctMC45LDEuNS0wLjksMi41YzAsMSwwLjMsMS44LDEsMi40YzAuNywwLjcsMS41LDEsMi40LDFjMSwwLDEuOC0wLjMsMi41LTFjMC42LTAuNywxLTEuNSwxLTIuNUMxMTcuNiwyNi4yLDExNy4zLDI1LjQsMTE2LjYsMjQuN3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDFcIiBkPVwiTTEyOC42LDIzLjV2MTAuNmgtNC4xVjIzLjVoLTJ2LTMuMWgydi00LjZoNC4xdjQuNmgydjMuMUgxMjguNnpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTQ4LjMsMzQuMXYtNy4zYzAtMC45LTAuMS0xLjYtMC4zLTIuMWMtMC4zLTAuNi0wLjktMS0xLjgtMWMtMC44LDAtMS40LDAuMy0xLjgsMC44Yy0wLjMsMC41LTAuNSwxLjEtMC41LDJ2Ny41aC00LjF2LTcuNGMwLTAuOS0wLjEtMS41LTAuNC0yYy0wLjMtMC42LTAuOS0wLjktMS43LTAuOWMtMC45LDAtMS41LDAuMy0xLjksMC45Yy0wLjMsMC41LTAuNCwxLjItMC40LDIuMXY3LjNoLTQuMVYyMC40aDMuOHYxLjVoMC4xYzAuNC0wLjcsMC45LTEuMiwxLjYtMS41YzAuNi0wLjMsMS4zLTAuNCwyLjItMC40YzEuNywwLDMuMSwwLjgsMy45LDIuNGMxLTEuNiwyLjUtMi40LDQuMy0yLjRjMS41LDAsMi43LDAuNSwzLjYsMS40YzAuNywwLjcsMS4xLDEuNSwxLjMsMi41YzAuMSwwLjQsMC4xLDAuOCwwLjEsMS40YzAsMC4yLDAsMC40LDAsMC43djguMkgxNDguM3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTY2LjIsMzIuNGMtMS40LDEuNC0zLjIsMi4xLTUuMywyLjFjLTIuMSwwLTMuOS0wLjctNS4yLTIuMWMtMS40LTEuNC0yLjEtMy4xLTIuMS01LjJjMC0yLjEsMC43LTMuOCwyLjEtNS4yYzEuNC0xLjQsMy4xLTIuMSw1LjItMi4xYzIuMSwwLDMuOSwwLjcsNS4zLDIuMWMxLjQsMS40LDIuMSwzLjEsMi4xLDUuMkMxNjguMywyOS4zLDE2Ny42LDMxLjEsMTY2LjIsMzIuNHogTTE2My4zLDI0LjhjLTAuNi0wLjctMS40LTEtMi40LTFjLTAuOSwwLTEuNywwLjMtMi4zLDFjLTAuNiwwLjctMC45LDEuNS0wLjksMi40YzAsMC45LDAuMywxLjcsMC45LDIuNGMwLjYsMC43LDEuNCwxLDIuMywxYzAuOSwwLDEuNy0wLjMsMi40LTFjMC42LTAuNywwLjktMS41LDAuOS0yLjRDMTY0LjIsMjYuMywxNjMuOSwyNS41LDE2My4zLDI0Ljh6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QxXCIgZD1cIk0xNjkuNywxOXYtMy4xaDQuMVYxOUgxNjkuN3ogTTE2OS43LDM0LjFWMjAuNGg0LjF2MTMuN0gxNjkuN3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0zNC42LDEzLjNMMjAsMC44Yy0xLjItMS4xLTMtMS4xLTQuMywwTDEuMiwxMy4zQzAuNCwxMy45LDAsMTQuOCwwLDE1Ljh2MjFDMCwzOC41LDEuNSw0MCwzLjMsNDBoMTIuNmwtMC45LTAuNmMtMS4xLTAuOC0zLTIuMi00LjgtNC4yaC0yYy0xLjgsMC0zLjMtMS41LTMuMy0zLjNWMThjMC0xLDAuNC0xLjksMS4yLTIuNWw5LjctOC4zYzEuMi0xLjEsMy0xLjEsNC4zLDBsOS42LDguM2MwLjcsMC42LDEuMSwxLjUsMS4xLDIuNXYxMy44YzAsMS44LTEuNSwzLjMtMy4zLDMuM2gtMmMtMS42LDEuOS0zLjQsMy4yLTQuNyw0LjJMMTkuOSw0MGgxMi41YzEuOCwwLDMuMy0xLjUsMy4zLTMuM3YtMjFDMzUuNywxNC44LDM1LjMsMTMuOSwzNC42LDEzLjN6XCIgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ6YWxvLXNoYXJlX19pbnB1dFwifT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VybFN0cmluZ30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiemFsby1zaGFyZV9fdGl0bGVcIn0+Q2hpYSBz4bq7IELDoGkgdmnhur90IG7DoHkgbMOqbiBaYWxvIGPhu6dhIGLhuqFuPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ6YWxvLXNoYXJlX19jbGlja1wifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6YWxvLXNoYXJlLWJ1dHRvblwiIGRhdGEtaHJlZj17dXJsU3RyaW5nfSBpZD17XCJ6YWxvX3NoYXJlX25kbVwifSBkYXRhLW9haWQ9XCI2NjU0ODgzNDg3ODU2MjU4NjVcIiBkYXRhLWxheW91dD1cIjJcIiBkYXRhLWNvbG9yPVwiYmx1ZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1jdXN0b21pemU9e3RydWV9PkNISUEgU+G6ulxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGEgaHJlZj17dXJsU3RyaW5nfT48ZGl2IGNsYXNzTmFtZT17XCJ6YWxvLXNoYXJlX19jbG9zZVwifT5RVUFZIEzhuqBJPC9kaXY+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvaHRtbD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9