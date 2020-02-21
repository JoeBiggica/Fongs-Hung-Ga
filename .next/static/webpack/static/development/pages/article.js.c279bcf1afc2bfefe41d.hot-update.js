webpackHotUpdate("static/development/pages/article.js",{

/***/ "./components/article/article-header/ArticleHeader.jsx":
/*!*************************************************************!*\
  !*** ./components/article/article-header/ArticleHeader.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../image */ "./components/image/index.js");
/* harmony import */ var _ArticleHeader_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ArticleHeader.scss */ "./components/article/article-header/ArticleHeader.scss");
/* harmony import */ var _ArticleHeader_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ArticleHeader_scss__WEBPACK_IMPORTED_MODULE_12__);














var ArticleHeader =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ArticleHeader, _PureComponent);

  function ArticleHeader() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ArticleHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ArticleHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderByline", function (byline) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _ArticleHeader_scss__WEBPACK_IMPORTED_MODULE_12___default()('byline')
      }, byline.image && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _ArticleHeader_scss__WEBPACK_IMPORTED_MODULE_12___default()('image'),
        style: {
          backgroundImage: "url(".concat(byline.image, ")")
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: _ArticleHeader_scss__WEBPACK_IMPORTED_MODULE_12___default()('name')
      }, byline.url ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: byline.url
      }, byline.name) : byline.name));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderPrimaryAsset", function (asset) {
      var type = asset.type;
      var content = asset.content;

      switch (asset.type) {
        case 'image':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_image__WEBPACK_IMPORTED_MODULE_11__["default"], {
            style: {
              width: '100%'
            },
            fill_mode: _image__WEBPACK_IMPORTED_MODULE_11__["default"].FillMode.COVER,
            src: content.src,
            alt: content.caption,
            aspect_ratio: 16 / 9
          });

        default:
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null);
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ArticleHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          title = _this$props.title,
          byline = _this$props.byline,
          primary_asset = _this$props.primary_asset;
      console.log(primary_asset, 'byline');
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_ArticleHeader_scss__WEBPACK_IMPORTED_MODULE_12___default()('container'), className)
      }, title && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: _ArticleHeader_scss__WEBPACK_IMPORTED_MODULE_12___default()('title')
      }, title), byline && this.renderByline(byline), primary_asset && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _ArticleHeader_scss__WEBPACK_IMPORTED_MODULE_12___default()('primary-asset')
      }, this.renderPrimaryAsset(primary_asset)));
    }
  }]);

  return ArticleHeader;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ArticleHeader, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  byline: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  primary_asset: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
});

/* harmony default export */ __webpack_exports__["default"] = (ArticleHeader);

/***/ })

})
//# sourceMappingURL=article.js.c279bcf1afc2bfefe41d.hot-update.js.map