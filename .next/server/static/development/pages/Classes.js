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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./components/table/Table.jsx":
/*!************************************!*\
  !*** ./components/table/Table.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _Table_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Table.scss */ "./components/table/Table.scss");
/* harmony import */ var _Table_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Table_scss__WEBPACK_IMPORTED_MODULE_11__);













var Table =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Table, _PureComponent);

  function Table() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Table);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Table)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderHeader", function (header) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Table_scss__WEBPACK_IMPORTED_MODULE_11___default()('header')
      }, header);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderCell", function (cell, index) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        key: "".concat(cell.name, "-").concat(index),
        className: _Table_scss__WEBPACK_IMPORTED_MODULE_11___default()('cell-container')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Table_scss__WEBPACK_IMPORTED_MODULE_11___default()('cell')
      }, cell.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Table_scss__WEBPACK_IMPORTED_MODULE_11___default()('subcell')
      }, cell.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderColumn", function (column, index) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        key: "".concat(column.name, "-").concat(index),
        className: _Table_scss__WEBPACK_IMPORTED_MODULE_11___default()('column')
      }, column.header && _this.renderHeader(column.header), column.cells && column.cells.map(_this.renderCell));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          title = _this$props.title,
          description = _this$props.description,
          table_data = _this$props.table_data;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_Table_scss__WEBPACK_IMPORTED_MODULE_11___default()('container'), className)
      }, title && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: _Table_scss__WEBPACK_IMPORTED_MODULE_11___default()('title')
      }, title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Table_scss__WEBPACK_IMPORTED_MODULE_11___default()('table-container')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Table_scss__WEBPACK_IMPORTED_MODULE_11___default()('table-columns')
      }, table_data.table.columns && table_data.table.columns.map(this.renderColumn))));
    }
  }]);

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Table, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  table_data: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  color: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
});

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./components/table/Table.scss":
/*!*************************************!*\
  !*** ./components/table/Table.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        // classnames-loader: automatically bind css-modules to classnames
        var classNames = __webpack_require__(/*! ../../node_modules/classnames/bind.js */ "./node_modules/classnames/bind.js");
        var locals = __webpack_require__(/*! !../../node_modules/css-loader/locals.js??ref--6-0!../../node_modules/sass-loader/lib/loader.js??ref--6-1!./Table.scss */ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/table/Table.scss");
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

/***/ "./components/table/index.js":
/*!***********************************!*\
  !*** ./components/table/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table */ "./components/table/Table.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Table__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./components/table/Table.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/locals.js??ref--6-0!./node_modules/sass-loader/lib/loader.js??ref--6-1!./components/table/Table.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "Table-container-4bHKy",
	"title": "Table-title-30c42",
	"table-columns": "Table-table-columns-1UKoT",
	"column": "Table-column-1Jb8H",
	"header": "Table-header-2i1gN",
	"cell-container": "Table-cell-container-2YrHW",
	"cell": "Table-cell-1lyKe",
	"subcell": "Table-subcell-3-zj9"
};

/***/ }),

/***/ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./pages/Classes.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/locals.js??ref--6-0!./node_modules/sass-loader/lib/loader.js??ref--6-1!./pages/Classes.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"herobanner": "Classes-herobanner-hGTqS",
	"page-header": "Classes-page-header-1ipoY",
	"content": "Classes-content-1new4",
	"schools-container": "Classes-schools-container-2daf4",
	"school": "Classes-school-3pmtP",
	"title": "Classes-title-3uCC9",
	"info-container": "Classes-info-container-1VUpl",
	"instructor": "Classes-instructor-1W08x",
	"label": "Classes-label-2F5hW",
	"name": "Classes-name-1emSx",
	"address": "Classes-address-6bSH0",
	"contact": "Classes-contact-1cTKz",
	"table-container": "Classes-table-container-2IxAi",
	"disclaimer": "Classes-disclaimer-VCtLL"
};

/***/ }),

/***/ "./pages/Classes.jsx":
/*!***************************!*\
  !*** ./pages/Classes.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_class_schedule_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/class_schedule.json */ "./static/class_schedule.json");
var _static_class_schedule_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/class_schedule.json */ "./static/class_schedule.json", 1);
/* harmony import */ var _static_schools_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/schools.json */ "./static/schools.json");
var _static_schools_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/schools.json */ "./static/schools.json", 1);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/header */ "./components/header/index.js");
/* harmony import */ var _components_herobanner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/herobanner */ "./components/herobanner/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_pageheader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/pageheader */ "./components/pageheader/index.js");
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/table */ "./components/table/index.js");
/* harmony import */ var _Classes_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Classes.scss */ "./pages/Classes.scss");
/* harmony import */ var _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_Classes_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_20__);























var Classes =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Classes, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Classes, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var reduxStore = _ref.reduxStore,
          req = _ref.req;
      var isServer = !!req;
      return {};
    }
  }]);

  function Classes(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Classes);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Classes).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderInstructor", function (instructor, i) {
      var name = i && i !== 0 ? ", ".concat(instructor.name) : instructor.name;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        key: "".concat(instructor.name),
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('name'),
        href: "".concat(instructor.url)
      }, name);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderSchool", function (school, i) {
      var head = school.head,
          instructors = school.instructors,
          address = school.address,
          number = school.number,
          email = school.email,
          class_schedule = school.class_schedule;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        key: "school-".concat(i),
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('school')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('title')
      }, school.address.city), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('info-container')
      }, head && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('instructor')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('label')
      }, "Head Instructor"), _this.renderInstructor(head)), instructors && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('instructor')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('label')
      }, instructors.length > 1 ? 'Instructors' : 'Instructor'), instructors.map(_this.renderInstructor)), address.street && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: address.google_maps_url && address.google_maps_url,
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('address')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, school.address.street), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, school.address.city, " ", school.address.zipcode))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('contact')
      }, number && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "tel:".concat(number)
      }, number), email && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "mailto:".concat(email)
      }, email))), class_schedule && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('table-container')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_table__WEBPACK_IMPORTED_MODULE_18__["default"], {
        table_data: _this.classes_table
      })), !class_schedule && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('more-info')
      }, "Please call or email for more class information."));
    });

    _this.classes_table = _static_class_schedule_json__WEBPACK_IMPORTED_MODULE_12__;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Classes, [{
    key: "render",
    value: function render() {
      var router = this.props.router;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_14__["default"], {
        router: router
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_herobanner__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('herobanner'),
        title: "Classes",
        text_position: _components_herobanner__WEBPACK_IMPORTED_MODULE_15__["default"].TextPosition.BOTTOM,
        background_image: "https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/adult-class.jpg",
        background_position: _components_herobanner__WEBPACK_IMPORTED_MODULE_15__["default"].BackgroundPosition.CENTER,
        hero_height: _components_herobanner__WEBPACK_IMPORTED_MODULE_15__["default"].HeroHeight.THREE_QUATER,
        gradient: _components_herobanner__WEBPACK_IMPORTED_MODULE_15__["default"].Gradient.BOTTOM
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_16__["default"], {
        padding: true
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_pageheader__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('page-header'),
        title: "Class Schedules"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('schools-container')
      }, _static_schools_json__WEBPACK_IMPORTED_MODULE_13__.locations && _static_schools_json__WEBPACK_IMPORTED_MODULE_13__.locations.map(this.renderSchool)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_19___default()('disclaimer')
      }, "All locations have group and private lessons available.")));
    }
  }]);

  return Classes;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Classes, "propTypes", {
  router: prop_types__WEBPACK_IMPORTED_MODULE_20___default.a.object
});

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Classes));

/***/ }),

/***/ "./pages/Classes.scss":
/*!****************************!*\
  !*** ./pages/Classes.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        // classnames-loader: automatically bind css-modules to classnames
        var classNames = __webpack_require__(/*! ../node_modules/classnames/bind.js */ "./node_modules/classnames/bind.js");
        var locals = __webpack_require__(/*! !../node_modules/css-loader/locals.js??ref--6-0!../node_modules/sass-loader/lib/loader.js??ref--6-1!./Classes.scss */ "./node_modules/css-loader/locals.js?!./node_modules/sass-loader/lib/loader.js?!./pages/Classes.scss");
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

/***/ "./static/class_schedule.json":
/*!************************************!*\
  !*** ./static/class_schedule.json ***!
  \************************************/
/*! exports provided: table, default */
/***/ (function(module) {

module.exports = {"table":{"columns":[{"name":"monday","header":"Monday","cells":[{"name":"Kids I","value":"5:30PM-6:30pm"},{"name":"Kids II","value":"6:30PM-7:30pm"},{"name":"Adults","value":"7:35PM-8:45PM"}]},{"name":"tuesday","header":"Tuesday","cells":[{"name":"Kids I","value":"5:30PM-6:30pm"},{"name":"Kids II","value":"6:30PM-7:30pm"},{"name":"Adults","value":"7:35PM-8:45PM"}]},{"name":"wednesday","header":"Wednesday","cells":[{"name":"Closed","value":""}]},{"name":"thursday","header":"Thursday","cells":[{"name":"Kids I","value":"5:30PM-6:30pm"},{"name":"Kids II","value":"6:30PM-7:30pm"},{"name":"Adults","value":"No Class"}]},{"name":"friday","header":"Friday","cells":[{"name":"Closed","value":""}]},{"name":"saturday","header":"Saturday","cells":[{"name":"Adults","value":"10:00AM-11:30AM"},{"name":"Kids","value":"11:30AM-12:30PM"}]},{"name":"sunday","header":"Sunday","cells":[{"name":"Kids","value":"1:00PM-2:00PM"}]}]}};

/***/ }),

/***/ "./static/schools.json":
/*!*****************************!*\
  !*** ./static/schools.json ***!
  \*****************************/
/*! exports provided: locations, default */
/***/ (function(module) {

module.exports = {"locations":[{"name":"Fong's Hung Ga Kung Fu","head":{"name":"Sifu Bill Fong","url":"/about/sifu-bill-fong"},"address":{"street":"95 Lincoln Ave","city":"Staten Island, New York","zipcode":"10306","google_maps_url":"https://goo.gl/maps/xCZ6vMvwBzzAvup3A"},"number":"(718) 668-2478","email":"sifu.fong@fonghungga.com","class_schedule":true},{"name":"Fong's Hung Ga Kung Fu","head":{"name":"Sifu Bill Fong","url":"/about/sifu-bill-fong"},"address":{"street":"","city":"Central New Jersey","zipcode":""},"number":"(973) 204-6602","email":"sifu.fong@fonghungga.com"},{"name":"Fong's Hung Ga Kung Fu","instructors":[{"name":"Sifu Maurice Morrison","url":"/about/sifu-maurice-morrison"}],"address":{"street":"","city":"Broward County Florida","zipcode":""},"number":"(754) 707-1898","email":"sifu.morrison@fonghungga.com"},{"name":"Fong's Hung Ga Kung Fu","instructors":[{"name":"Sifu Maurice Morrison","url":"/about/sifu-maurice-morrison"},{"name":"Carlos Gonzalez","url":"/about/carlos-gonzalez"}],"address":{"street":"","city":"Miami County Florida","zipcode":""},"number":"(754) 707-1898","email":"sifu.morrison@fonghungga.com"}]};

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/Classes.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joebiggica/Engineering/Apps/Fongs_Hung_Ga/pages/Classes.jsx */"./pages/Classes.jsx");


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
//# sourceMappingURL=Classes.js.map