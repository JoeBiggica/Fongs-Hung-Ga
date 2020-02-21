webpackHotUpdate("static/development/pages/article.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
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

/***/ })

})
//# sourceMappingURL=article.js.d54d437b4f80a7fad3a4.hot-update.js.map