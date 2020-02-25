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

/***/ "!../../../node_modules/classnames/bind.js":
/*!************************************************************!*\
  !*** external "!../../../node_modules/classnames/bind.js" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("!../../../node_modules/classnames/bind.js");

/***/ }),

/***/ "./components/article/article-body/ArticleBody.jsx":
/*!*********************************************************!*\
  !*** ./components/article/article-body/ArticleBody.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../image */ "./components/image/index.js");
/* harmony import */ var _ArticleBody_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ArticleBody.scss */ "./components/article/article-body/ArticleBody.scss");
/* harmony import */ var _ArticleBody_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ArticleBody_scss__WEBPACK_IMPORTED_MODULE_11__);













var ArticleBody =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ArticleBody, _PureComponent);

  function ArticleBody() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ArticleBody);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ArticleBody)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderSubHeader", function (content) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: _ArticleBody_scss__WEBPACK_IMPORTED_MODULE_11___default()('subheader')
      }, content.text);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderParagraph", function (content) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: _ArticleBody_scss__WEBPACK_IMPORTED_MODULE_11___default()('paragraph')
      }, content.text);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderList", function (content) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: _ArticleBody_scss__WEBPACK_IMPORTED_MODULE_11___default()('list', content.list_type)
      }, content.items && content.items.map(_this.renderListItem));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderListItem", function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        key: "".concat(item.text, "-").concat(index)
      }, item.url ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: item.url
      }, item.text) : item.text);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderImage", function (content) {
      var size = content.size;
      var alignment = content.alignment;
      var image_container_classname = _ArticleBody_scss__WEBPACK_IMPORTED_MODULE_11___default()('image-container', "".concat(size), "".concat(alignment));
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _ArticleBody_scss__WEBPACK_IMPORTED_MODULE_11___default()(image_container_classname)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_image__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          width: '100%'
        },
        fill_mode: _image__WEBPACK_IMPORTED_MODULE_10__["default"].FillMode.COVER,
        src: content.src,
        alt: content.caption
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderItems", function (item, index) {
      switch (item.type) {
        case 'paragraph':
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            key: "".concat(item.type, "-").concat(index)
          }, _this.renderParagraph(item.content));

        case 'subheader':
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            key: "".concat(item.type, "-").concat(index)
          }, _this.renderSubHeader(item.content));

        case 'list':
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            key: "".concat(item.type, "-").concat(index)
          }, _this.renderList(item.content));

        case 'image':
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            key: "".concat(item.type, "-").concat(index)
          }, _this.renderImage(item.content));

        default:
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null);
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ArticleBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          items = _this$props.items;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_ArticleBody_scss__WEBPACK_IMPORTED_MODULE_11___default()('container'), className)
      }, items.map(this.renderItems));
    }
  }]);

  return ArticleBody;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(ArticleBody, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  items: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array
});

/* harmony default export */ __webpack_exports__["default"] = (ArticleBody);

/***/ }),

/***/ "./components/article/article-body/ArticleBody.scss":
/*!**********************************************************!*\
  !*** ./components/article/article-body/ArticleBody.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        // classnames-loader: automatically bind css-modules to classnames
        var classNames = __webpack_require__(/*! ../../../node_modules/classnames/bind.js */ "!../../../node_modules/classnames/bind.js");
        var locals = __webpack_require__(/*! !../../../node_modules/css-loader/locals.js??ref--6-0!../../../node_modules/sass-loader/lib/loader.js??ref--6-1!./ArticleBody.scss */ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/article/article-body/ArticleBody.scss");
        var css = classNames.bind(locals);
        for (var style in locals) {
            if (!locals.hasOwnProperty(style)) {
                continue;
            }
            if (typeof Object.defineProperty === 'function') {
                Object.defineProperty(css, style, {value: locals[style]});
            }
            else {
                css[style] = locals[style];
            }
        }
        module.exports = css;
    

/***/ }),

/***/ "./components/article/article-body/index.js":
/*!**************************************************!*\
  !*** ./components/article/article-body/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleBody */ "./components/article/article-body/ArticleBody.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ArticleBody__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/header/Header.jsx":
/*!**************************************!*\
  !*** ./components/header/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.fixed */ "core-js/modules/es6.string.fixed");
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hamburgerbutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hamburgerbutton */ "./components/header/hamburgerbutton/index.js");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Header.scss */ "./components/header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_13__);















var Header =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Header, _PureComponent);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Header).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      menu_active: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onClick", function () {
      _this.setState({
        menu_active: !_this.state.menu_active
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "renderMenuItem", function (item) {
      var path = item.id === 'index' ? '/' : "/".concat(item.id);
      var item_classname = _Header_scss__WEBPACK_IMPORTED_MODULE_13___default()({
        'active': item.id === _this.route
      });
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: item_classname,
        key: "".concat(item.id)
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "".concat(path)
      }, item.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: _Header_scss__WEBPACK_IMPORTED_MODULE_13___default()('underline')
      }));
    });

    _this.route = _this.props.router && _this.props.router.pathname.toLowerCase().replace('/', '');
    _this.menu_items = [{
      name: 'Home',
      id: 'index'
    }, {
      name: 'Classes',
      id: 'classes'
    }, {
      name: 'Lion Dance',
      id: 'liondance'
    }, {
      name: 'About',
      id: 'about'
    }, {
      name: 'Contact',
      id: 'contact'
    }];
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          gradient = _this$props.gradient,
          fixed = _this$props.fixed,
          dark_mode = _this$props.dark_mode;
      var container_classname = _Header_scss__WEBPACK_IMPORTED_MODULE_13___default()('container', {
        'gradient': gradient,
        'fixed': fixed,
        'dark-mode': dark_mode
      });
      var banner_styles = {
        backgroundImage: "url(/static/fongs-banner-logo-long.png)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      };
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: container_classname
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: _Header_scss__WEBPACK_IMPORTED_MODULE_13___default()('inner')
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: _Header_scss__WEBPACK_IMPORTED_MODULE_13___default()('banner'),
        style: banner_styles
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("nav", {
        className: _Header_scss__WEBPACK_IMPORTED_MODULE_13___default()('nav')
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", null, this.menu_items.map(this.renderMenuItem))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: _Header_scss__WEBPACK_IMPORTED_MODULE_13___default()('menu-container')
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_hamburgerbutton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: _Header_scss__WEBPACK_IMPORTED_MODULE_13___default()('button'),
        onClick: this.onClick
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: _Header_scss__WEBPACK_IMPORTED_MODULE_13___default()('menu', {
          'active': this.state.menu_active
        })
      }, this.menu_items.map(this.renderMenuItem)))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_10__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Header, "propTypes", {
  router: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,
  gradient: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  dark_mode: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool
});

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/header/Header.scss":
/*!***************************************!*\
  !*** ./components/header/Header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        // classnames-loader: automatically bind css-modules to classnames
        var classNames = __webpack_require__(/*! ../../node_modules/classnames/bind.js */ "./node_modules/classnames/bind.js");
        var locals = __webpack_require__(/*! !../../node_modules/css-loader/locals.js??ref--6-0!../../node_modules/sass-loader/lib/loader.js??ref--6-1!./Header.scss */ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/header/Header.scss");
        var css = classNames.bind(locals);
        for (var style in locals) {
            if (!locals.hasOwnProperty(style)) {
                continue;
            }
            if (typeof Object.defineProperty === 'function') {
                Object.defineProperty(css, style, {value: locals[style]});
            }
            else {
                css[style] = locals[style];
            }
        }
        module.exports = css;
    

/***/ }),

/***/ "./components/header/hamburgerbutton/HamburgerButton.jsx":
/*!***************************************************************!*\
  !*** ./components/header/hamburgerbutton/HamburgerButton.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _HamburgerButton_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HamburgerButton.scss */ "./components/header/hamburgerbutton/HamburgerButton.scss");
/* harmony import */ var _HamburgerButton_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_HamburgerButton_scss__WEBPACK_IMPORTED_MODULE_10__);












var HamburgerButton =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HamburgerButton, _PureComponent);

  function HamburgerButton() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HamburgerButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HamburgerButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      active: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function (e) {
      var active = !_this.state.active;

      _this.setState({
        active: active
      });

      _this.props.onClick(e);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HamburgerButton, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      var active = this.state.active;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_HamburgerButton_scss__WEBPACK_IMPORTED_MODULE_10___default()('button', {
          active: active
        }), className),
        onClick: this.handleClick
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _HamburgerButton_scss__WEBPACK_IMPORTED_MODULE_10___default()('hamburger')
      }));
    }
  }]);

  return HamburgerButton;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(HamburgerButton, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(HamburgerButton, "defaultProps", {
  onClick: function onClick() {}
});

/* harmony default export */ __webpack_exports__["default"] = (HamburgerButton);

/***/ }),

/***/ "./components/header/hamburgerbutton/HamburgerButton.scss":
/*!****************************************************************!*\
  !*** ./components/header/hamburgerbutton/HamburgerButton.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        // classnames-loader: automatically bind css-modules to classnames
        var classNames = __webpack_require__(/*! ../../../node_modules/classnames/bind.js */ "!../../../node_modules/classnames/bind.js");
        var locals = __webpack_require__(/*! !../../../node_modules/css-loader/locals.js??ref--6-0!../../../node_modules/sass-loader/lib/loader.js??ref--6-1!./HamburgerButton.scss */ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/header/hamburgerbutton/HamburgerButton.scss");
        var css = classNames.bind(locals);
        for (var style in locals) {
            if (!locals.hasOwnProperty(style)) {
                continue;
            }
            if (typeof Object.defineProperty === 'function') {
                Object.defineProperty(css, style, {value: locals[style]});
            }
            else {
                css[style] = locals[style];
            }
        }
        module.exports = css;
    

/***/ }),

/***/ "./components/header/hamburgerbutton/index.js":
/*!****************************************************!*\
  !*** ./components/header/hamburgerbutton/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HamburgerButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HamburgerButton */ "./components/header/hamburgerbutton/HamburgerButton.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HamburgerButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/header/Header.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/herobanner/HeroBanner.jsx":
/*!**********************************************!*\
  !*** ./components/herobanner/HeroBanner.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HeroBanner.scss */ "./components/herobanner/HeroBanner.scss");
/* harmony import */ var _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_HeroBanner_scss__WEBPACK_IMPORTED_MODULE_11__);












var HeroHeight = {
  FULL: 'full',
  THREE_QUATER: 'three-quater',
  HALF: 'half',
  AUTO: 'auto'
};
var TextPosition = {
  TOP: 'top',
  BOTTOM: 'bottom',
  CENTER: 'center'
};
var ButtonDirection = {
  ROW: 'row',
  COLUMN: 'column'
};
var BackgroundPosition = {
  TOP: 'top',
  BOTTOM: 'bottom',
  CENTER: 'center'
};
var Gradient = {
  TOP: 'top',
  BOTTOM: 'bottom'
};

var HeroBanner =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(HeroBanner, _PureComponent);

  function HeroBanner() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HeroBanner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(HeroBanner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getBackground", function (background_image, gradient) {
      return "url(".concat(background_image, ")");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderButton", function (button, index) {
      var button_container_classname = _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_11___default()('button-container', {
        'border': _this.props.button_border,
        'column': _this.props.button_direction === 'column',
        'row': _this.props.button_direction === 'row'
      });
      var button_classname = _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_11___default()('button', {
        'border': _this.props.button_border
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: button_container_classname
      }, button.label && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_11___default()('label')
      }, button.label), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: button_classname
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: button.url,
        target: button.target,
        onClick: button.onClick
      }, button.text)));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(HeroBanner, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          title = _this$props.title,
          title_border = _this$props.title_border,
          text_position = _this$props.text_position,
          buttons = _this$props.buttons,
          button_border = _this$props.button_border,
          image = _this$props.image,
          background_image = _this$props.background_image,
          background_position = _this$props.background_position,
          hero_height = _this$props.hero_height,
          gradient = _this$props.gradient;
      var container_classname = _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_11___default()('container', {
        'justify-top': text_position === 'top',
        'justify-bottom': text_position === 'bottom',
        'full': hero_height === 'full',
        'three-quater': hero_height === 'three-quater',
        'half': hero_height === 'half',
        'auto': hero_height === 'auto'
      });
      var background_style = {
        backgroundImage: background_image && this.getBackground(background_image, gradient),
        backgroundPosition: background_position && background_position
      };
      var text_container_classname = _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_11___default()('text-container', 'parallax-layer', 'parallax-base', {
        'border': title_border
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(container_classname, className),
        style: background_style
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: text_container_classname
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_11___default()('title')
      }, this.props.title)), buttons && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_11___default()('buttons-container')
      }, buttons.map(this.renderButton)), image && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_11___default()('image-container'),
        onClick: image.onClick
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        className: _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_11___default()('image'),
        src: image.src
      })));
    }
  }]);

  return HeroBanner;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(HeroBanner, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  title_border: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  text_position: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(TextPosition)),
  buttons: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,
  button_border: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  button_direction: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  background_image: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  background_position: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(BackgroundPosition)),
  hero_height: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(HeroHeight)),
  gradient: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(Gradient))
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(HeroBanner, "defaultProps", {
  button_direction: ButtonDirection.ROW,
  hero_height: HeroHeight.FULL
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(HeroBanner, "HeroHeight", HeroHeight);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(HeroBanner, "TextPosition", TextPosition);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(HeroBanner, "ButtonDirection", ButtonDirection);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(HeroBanner, "BackgroundPosition", BackgroundPosition);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(HeroBanner, "Gradient", Gradient);

/* harmony default export */ __webpack_exports__["default"] = (HeroBanner);

/***/ }),

/***/ "./components/herobanner/HeroBanner.scss":
/*!***********************************************!*\
  !*** ./components/herobanner/HeroBanner.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        // classnames-loader: automatically bind css-modules to classnames
        var classNames = __webpack_require__(/*! ../../node_modules/classnames/bind.js */ "./node_modules/classnames/bind.js");
        var locals = __webpack_require__(/*! !../../node_modules/css-loader/locals.js??ref--6-0!../../node_modules/sass-loader/lib/loader.js??ref--6-1!./HeroBanner.scss */ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/herobanner/HeroBanner.scss");
        var css = classNames.bind(locals);
        for (var style in locals) {
            if (!locals.hasOwnProperty(style)) {
                continue;
            }
            if (typeof Object.defineProperty === 'function') {
                Object.defineProperty(css, style, {value: locals[style]});
            }
            else {
                css[style] = locals[style];
            }
        }
        module.exports = css;
    

/***/ }),

/***/ "./components/herobanner/index.js":
/*!****************************************!*\
  !*** ./components/herobanner/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroBanner */ "./components/herobanner/HeroBanner.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HeroBanner__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/image/Image.jsx":
/*!************************************!*\
  !*** ./components/image/Image.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Image_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Image.scss */ "./components/image/Image.scss");
/* harmony import */ var _Image_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Image_scss__WEBPACK_IMPORTED_MODULE_10__);











var FillMode = {
  EXACT: 'exact',
  FIT: 'fit',
  COVER: 'cover'
};

var Image =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Image, _PureComponent);

  function Image(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Image);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Image).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleImageLoad", function () {
      _this.setState({
        loaded: true
      });
    });

    _this.state = {
      loaded: false,
      src: _this.props.src
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Image, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          alt = _this$props.alt,
          aspect_ratio = _this$props.aspect_ratio,
          fill_mode = _this$props.fill_mode,
          forwarded_ref = _this$props.forwarded_ref;
      var _this$state = this.state,
          src = _this$state.src,
          loaded = _this$state.loaded;
      var container_style = aspect_ratio ? {
        height: 0,
        paddingBottom: "".concat(1 / aspect_ratio * 100, "%")
      } : undefined;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: className,
        style: style,
        ref: forwarded_ref
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _Image_scss__WEBPACK_IMPORTED_MODULE_10___default.a['size-container']
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_Image_scss__WEBPACK_IMPORTED_MODULE_10___default.a['image-container'], _Image_scss__WEBPACK_IMPORTED_MODULE_10___default.a['placeholder'], aspect_ratio && _Image_scss__WEBPACK_IMPORTED_MODULE_10___default.a['lock-ratio'], loaded && _Image_scss__WEBPACK_IMPORTED_MODULE_10___default.a['loaded']),
        style: container_style
      }, src && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        key: src,
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_Image_scss__WEBPACK_IMPORTED_MODULE_10___default.a['image'], _Image_scss__WEBPACK_IMPORTED_MODULE_10___default.a[fill_mode]),
        src: src,
        alt: alt,
        title: alt,
        onLoad: this.handleImageLoad
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.src !== state.src) {
        return {
          src: props.src,
          loaded: false
        };
      }

      return null;
    }
  }]);

  return Image;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Image, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  src: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  aspect_ratio: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  fill_mode: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  forwarded_ref: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Image, "defaultProps", {
  fill_mode: FillMode.EXACT
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Image, "FillMode", FillMode);

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/image/Image.scss":
/*!*************************************!*\
  !*** ./components/image/Image.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        // classnames-loader: automatically bind css-modules to classnames
        var classNames = __webpack_require__(/*! ../../node_modules/classnames/bind.js */ "./node_modules/classnames/bind.js");
        var locals = __webpack_require__(/*! !../../node_modules/css-loader/locals.js??ref--6-0!../../node_modules/sass-loader/lib/loader.js??ref--6-1!./Image.scss */ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/image/Image.scss");
        var css = classNames.bind(locals);
        for (var style in locals) {
            if (!locals.hasOwnProperty(style)) {
                continue;
            }
            if (typeof Object.defineProperty === 'function') {
                Object.defineProperty(css, style, {value: locals[style]});
            }
            else {
                css[style] = locals[style];
            }
        }
        module.exports = css;
    

/***/ }),

/***/ "./components/image/index.js":
/*!***********************************!*\
  !*** ./components/image/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ "./components/image/Image.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Image__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/layout/Layout.jsx":
/*!**************************************!*\
  !*** ./components/layout/Layout.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Layout.scss */ "./components/layout/Layout.scss");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Layout_scss__WEBPACK_IMPORTED_MODULE_9__);











var Layout =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _PureComponent);

  function Layout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          padding = _this$props.padding;
      var inner_classname = _Layout_scss__WEBPACK_IMPORTED_MODULE_9___default()('inner', {
        'padding': padding
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_Layout_scss__WEBPACK_IMPORTED_MODULE_9___default()('container'), className)
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: inner_classname
      }, children));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
  padding: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
});

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/layout/Layout.scss":
/*!***************************************!*\
  !*** ./components/layout/Layout.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        // classnames-loader: automatically bind css-modules to classnames
        var classNames = __webpack_require__(/*! ../../node_modules/classnames/bind.js */ "./node_modules/classnames/bind.js");
        var locals = __webpack_require__(/*! !../../node_modules/css-loader/locals.js??ref--6-0!../../node_modules/sass-loader/lib/loader.js??ref--6-1!./Layout.scss */ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/layout/Layout.scss");
        var css = classNames.bind(locals);
        for (var style in locals) {
            if (!locals.hasOwnProperty(style)) {
                continue;
            }
            if (typeof Object.defineProperty === 'function') {
                Object.defineProperty(css, style, {value: locals[style]});
            }
            else {
                css[style] = locals[style];
            }
        }
        module.exports = css;
    

/***/ }),

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ "./components/layout/Layout.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Layout__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/pageheader/PageHeader.jsx":
/*!**********************************************!*\
  !*** ./components/pageheader/PageHeader.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _PageHeader_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PageHeader.scss */ "./components/pageheader/PageHeader.scss");
/* harmony import */ var _PageHeader_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_PageHeader_scss__WEBPACK_IMPORTED_MODULE_9__);











var PageHeader =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PageHeader, _PureComponent);

  function PageHeader() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PageHeader);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PageHeader).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PageHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          title = _this$props.title;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_PageHeader_scss__WEBPACK_IMPORTED_MODULE_9___default()('container'), className)
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _PageHeader_scss__WEBPACK_IMPORTED_MODULE_9___default()('inner')
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: _PageHeader_scss__WEBPACK_IMPORTED_MODULE_9___default()('title')
      }, title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _PageHeader_scss__WEBPACK_IMPORTED_MODULE_9___default()('underline')
      })));
    }
  }]);

  return PageHeader;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(PageHeader, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
});

/* harmony default export */ __webpack_exports__["default"] = (PageHeader);

/***/ }),

/***/ "./components/pageheader/PageHeader.scss":
/*!***********************************************!*\
  !*** ./components/pageheader/PageHeader.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        // classnames-loader: automatically bind css-modules to classnames
        var classNames = __webpack_require__(/*! ../../node_modules/classnames/bind.js */ "./node_modules/classnames/bind.js");
        var locals = __webpack_require__(/*! !../../node_modules/css-loader/locals.js??ref--6-0!../../node_modules/sass-loader/lib/loader.js??ref--6-1!./PageHeader.scss */ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/pageheader/PageHeader.scss");
        var css = classNames.bind(locals);
        for (var style in locals) {
            if (!locals.hasOwnProperty(style)) {
                continue;
            }
            if (typeof Object.defineProperty === 'function') {
                Object.defineProperty(css, style, {value: locals[style]});
            }
            else {
                css[style] = locals[style];
            }
        }
        module.exports = css;
    

/***/ }),

/***/ "./components/pageheader/index.js":
/*!****************************************!*\
  !*** ./components/pageheader/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageHeader */ "./components/pageheader/PageHeader.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PageHeader__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/classnames/bind.js":
/*!*****************************************!*\
  !*** ./node_modules/classnames/bind.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(this && this[arg] || arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(this, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(this && this[key] || key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/article/article-body/ArticleBody.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/locals.js??ref--6-0!./node_modules/sass-loader/lib/loader.js??ref--6-1!./components/article/article-body/ArticleBody.scss ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "ArticleBody-container-1MHeD",
	"paragraph": "ArticleBody-paragraph-2I40G",
	"subheader": "ArticleBody-subheader-2d5PN",
	"list": "ArticleBody-list-2Rrd-",
	"ordered": "ArticleBody-ordered-1BE_-",
	"image-container": "ArticleBody-image-container-1w9XO",
	"small": "ArticleBody-small-uu_-_",
	"left": "ArticleBody-left-2suTo",
	"right": "ArticleBody-right-1cP21"
};

/***/ }),

/***/ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/header/Header.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/locals.js??ref--6-0!./node_modules/sass-loader/lib/loader.js??ref--6-1!./components/header/Header.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "Header-container-3ZpuA",
	"fixed": "Header-fixed-39ltI",
	"gradient": "Header-gradient-2Ht_W",
	"dark-mode": "Header-dark-mode-1DaGR",
	"inner": "Header-inner-2A1qX",
	"banner": "Header-banner-3w3mF",
	"nav": "Header-nav-3jI7E",
	"active": "Header-active-1uMAQ",
	"underline": "Header-underline-1IEy8",
	"menu-container": "Header-menu-container-2rqw1",
	"button": "Header-button-3USmz",
	"menu": "Header-menu-sKL0B"
};

/***/ }),

/***/ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/header/hamburgerbutton/HamburgerButton.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/locals.js??ref--6-0!./node_modules/sass-loader/lib/loader.js??ref--6-1!./components/header/hamburgerbutton/HamburgerButton.scss ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"button": "HamburgerButton-button-3Kmsn",
	"hamburger": "HamburgerButton-hamburger-1b52a",
	"active": "HamburgerButton-active-2_wpj"
};

/***/ }),

/***/ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/herobanner/HeroBanner.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/locals.js??ref--6-0!./node_modules/sass-loader/lib/loader.js??ref--6-1!./components/herobanner/HeroBanner.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "HeroBanner-container-fYWwV",
	"justify-top": "HeroBanner-justify-top-3VB1M",
	"text-container": "HeroBanner-text-container-3UaLg",
	"justify-bottom": "HeroBanner-justify-bottom-l4RcU",
	"full": "HeroBanner-full-1ZTji",
	"three-quater": "HeroBanner-three-quater-1uIgj",
	"half": "HeroBanner-half-1V9GZ",
	"auto": "HeroBanner-auto-3Alws",
	"border": "HeroBanner-border-1PvtJ",
	"title": "HeroBanner-title-2n_0g",
	"buttons-container": "HeroBanner-buttons-container-2bvpJ",
	"button-container": "HeroBanner-button-container-2xSm3",
	"row": "HeroBanner-row-1TEvL",
	"label": "HeroBanner-label-2R3I0",
	"button": "HeroBanner-button-1GnDi",
	"image-container": "HeroBanner-image-container-3HA7n"
};

/***/ }),

/***/ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/image/Image.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/locals.js??ref--6-0!./node_modules/sass-loader/lib/loader.js??ref--6-1!./components/image/Image.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"size-container": "Image-size-container-1F01j",
	"image-container": "Image-image-container-3XUvb",
	"placeholder": "Image-placeholder-2QHot",
	"loaded": "Image-loaded-2w56Y",
	"image": "Image-image-6wPci",
	"fadein": "Image-fadein-agl3V",
	"fit": "Image-fit-1uHCx",
	"cover": "Image-cover-2NcXy",
	"lock-ratio": "Image-lock-ratio-s5qTP"
};

/***/ }),

/***/ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/layout/Layout.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/locals.js??ref--6-0!./node_modules/sass-loader/lib/loader.js??ref--6-1!./components/layout/Layout.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "Layout-container-1Z389",
	"inner": "Layout-inner-d3Io5",
	"padding": "Layout-padding-1J6cR"
};

/***/ }),

/***/ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/pageheader/PageHeader.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/locals.js??ref--6-0!./node_modules/sass-loader/lib/loader.js??ref--6-1!./components/pageheader/PageHeader.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "PageHeader-container-3ktzp",
	"inner": "PageHeader-inner-3_Dcy",
	"title": "PageHeader-title-1UdnQ",
	"underline": "PageHeader-underline-2Ki7C"
};

/***/ }),

/***/ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./pages/LionDance.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/locals.js??ref--6-0!./node_modules/sass-loader/lib/loader.js??ref--6-1!./pages/LionDance.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"herobanner": "LionDance-herobanner-2rUbW",
	"page-header": "LionDance-page-header-1LNYG",
	"article": "LionDance-article-2PHL_",
	"clients-container": "LionDance-clients-container-3XRUu"
};

/***/ }),

/***/ "./pages/LionDance.jsx":
/*!*****************************!*\
  !*** ./pages/LionDance.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/header */ "./components/header/index.js");
/* harmony import */ var _components_herobanner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/herobanner */ "./components/herobanner/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_pageheader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/pageheader */ "./components/pageheader/index.js");
/* harmony import */ var _components_article_article_body__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/article/article-body */ "./components/article/article-body/index.js");
/* harmony import */ var _static_articles_lion_dance_article_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../static/articles/lion_dance_article.json */ "./static/articles/lion_dance_article.json");
var _static_articles_lion_dance_article_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/articles/lion_dance_article.json */ "./static/articles/lion_dance_article.json", 1);
/* harmony import */ var _LionDance_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LionDance.scss */ "./pages/LionDance.scss");
/* harmony import */ var _LionDance_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_LionDance_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);




















var LionDance =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LionDance, _Component);

  function LionDance() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LionDance);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LionDance).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LionDance, [{
    key: "render",
    value: function render() {
      var router = this.props.router;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        router: router
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_herobanner__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: _LionDance_scss__WEBPACK_IMPORTED_MODULE_16___default()('herobanner'),
        title: "Lion Dance",
        text_position: _components_herobanner__WEBPACK_IMPORTED_MODULE_11__["default"].TextPosition.BOTTOM,
        background_image: "https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/three-lions.jpg",
        background_position: _components_herobanner__WEBPACK_IMPORTED_MODULE_11__["default"].BackgroundPosition.CENTER,
        hero_height: _components_herobanner__WEBPACK_IMPORTED_MODULE_11__["default"].HeroHeight.THREE_QUATER,
        gradient: _components_herobanner__WEBPACK_IMPORTED_MODULE_11__["default"].Gradient.BOTTOM
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        padding: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_pageheader__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: _LionDance_scss__WEBPACK_IMPORTED_MODULE_16___default()('page-header'),
        title: "An Intro to Lion Dance"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_article_article_body__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: _LionDance_scss__WEBPACK_IMPORTED_MODULE_16___default()('article'),
        items: _static_articles_lion_dance_article_json__WEBPACK_IMPORTED_MODULE_15__.items
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_pageheader__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: _LionDance_scss__WEBPACK_IMPORTED_MODULE_16___default()('page-header'),
        title: "Our Clients"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _LionDance_scss__WEBPACK_IMPORTED_MODULE_16___default()('clients-container')
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/client-logos.png",
        alt: "Client Logos"
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var reduxStore = _ref.reduxStore,
          req = _ref.req;
      var isServer = !!req;
      return {};
    }
  }]);

  return LionDance;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(LionDance, "propTypes", {
  router: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.object
});

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(LionDance));

/***/ }),

/***/ "./pages/LionDance.scss":
/*!******************************!*\
  !*** ./pages/LionDance.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        // classnames-loader: automatically bind css-modules to classnames
        var classNames = __webpack_require__(/*! ../node_modules/classnames/bind.js */ "./node_modules/classnames/bind.js");
        var locals = __webpack_require__(/*! !../node_modules/css-loader/locals.js??ref--6-0!../node_modules/sass-loader/lib/loader.js??ref--6-1!./LionDance.scss */ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./pages/LionDance.scss");
        var css = classNames.bind(locals);
        for (var style in locals) {
            if (!locals.hasOwnProperty(style)) {
                continue;
            }
            if (typeof Object.defineProperty === 'function') {
                Object.defineProperty(css, style, {value: locals[style]});
            }
            else {
                css[style] = locals[style];
            }
        }
        module.exports = css;
    

/***/ }),

/***/ "./static/articles/lion_dance_article.json":
/*!*************************************************!*\
  !*** ./static/articles/lion_dance_article.json ***!
  \*************************************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = {"items":[{"type":"paragraph","content":{"text":"The lion dance is a traditional style of dance performed in Chinese culture and is usually an integral part of most Chinese Kung Fu schools. The lion dance typically consists of two performers, one in the head of the lion, and the other in the tail as they perform sequenced steps, movements and acrobatics to accompanying music on drums, cymbals and gongs from their classmates. The head is typically made of papier-mache, and the performers’ faces are rarely seen during the actual performance, giving illusion that the lion has come to life."}},{"type":"image","content":{"size":"small","alignment":"left","src":"https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/three-lions-02.jpg"}},{"type":"subheader","content":{"text":"Why perform lion dances"}},{"type":"paragraph","content":{"text":"Lion dances are mostly performed around the time of Chinese New Year, as a means of symbolizing the wishing of good fortune and celebration of the new year. However, lion dances serve many other purposes such as blessing a business with good fortune, sanctioning the grand-opening of a building, and celebratory events like the anniversary of an establishment, or even a birthday party."}},{"type":"subheader","content":{"text":"Why we do it"}},{"type":"paragraph","content":{"text":"Lion dancing at Fong’s Hung Ga is an experience that takes students to many different places and allows them to express an art form not commonly seen on a daily basis. Lion dance is also an intense physical workout that is integral to Hung Ga as it conditions and builds muscles gained by our students during their regular classroom training. It also further instills in our students the importance of proper stances as lion dancing utilizes each stance in the Hung Ga system and is dependent on the performer not only having knowledge of each stance, but also having trained enough to execute each movement without losing their balance or falling short on stamina."}}]};

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./pages/LionDance.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joebiggica/Engineering/Apps/Fongs_Hung_Ga/pages/LionDance.jsx */"./pages/LionDance.jsx");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

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

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.function.name");

/***/ }),

/***/ "core-js/modules/es6.regexp.replace":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.regexp.replace" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.replace");

/***/ }),

/***/ "core-js/modules/es6.string.fixed":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.string.fixed" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.fixed");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=LionDance.js.map