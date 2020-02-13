webpackHotUpdate("static/development/pages/About.js",{

/***/ "./pages/About.jsx":
/*!*************************!*\
  !*** ./pages/About.jsx ***!
  \*************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/header */ "./components/header/index.js");
/* harmony import */ var _components_herobanner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/herobanner */ "./components/herobanner/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_pageheader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/pageheader */ "./components/pageheader/index.js");
/* harmony import */ var _static_about_article_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../static/about_article.json */ "./static/about_article.json");
var _static_about_article_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/about_article.json */ "./static/about_article.json", 1);
/* harmony import */ var _About_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./About.scss */ "./pages/About.scss");
/* harmony import */ var _About_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_About_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);



















var About =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(About, _Component);

  function About() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(About).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
    key: "render",
    value: function render() {
      var router = this.props.router;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        router: router
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_herobanner__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: _About_scss__WEBPACK_IMPORTED_MODULE_15___default()('herobanner'),
        title: "Classes",
        text_position: _components_herobanner__WEBPACK_IMPORTED_MODULE_11__["default"].TextPosition.BOTTOM,
        background_image: "https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/fongs-doyers-pose.jpg",
        background_position: _components_herobanner__WEBPACK_IMPORTED_MODULE_11__["default"].BackgroundPosition.CENTER,
        hero_height: _components_herobanner__WEBPACK_IMPORTED_MODULE_11__["default"].HeroHeight.HALF,
        gradient: _components_herobanner__WEBPACK_IMPORTED_MODULE_11__["default"].Gradient.BOTTOM
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_pageheader__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: _About_scss__WEBPACK_IMPORTED_MODULE_15___default()('page-header'),
        title: "Who We Are"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Article, {
        className: _About_scss__WEBPACK_IMPORTED_MODULE_15___default()('article'),
        article_data: _static_about_article_json__WEBPACK_IMPORTED_MODULE_14__
      })));
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

  return About;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(About, "propTypes", {
  router: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object
});

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(About));

/***/ }),

/***/ "./static/about_article.json":
/*!***********************************!*\
  !*** ./static/about_article.json ***!
  \***********************************/
/*! exports provided: body_items, default */
/***/ (function(module) {

module.exports = {"body_items":[{"type":"paragraph","content":{"text":"Fong’s Hung Ga Kung Fu Association based out of New York City is dedicated to teach and present only the purest, most traditional Chinese Hung Ga Kung Fu in the United States. We offer classes for kids, teens and adults, from beginner to advanced levels."}},{"type":"subheader","content":{"text":"What is Hung Ga Kung Fu?"}},{"type":"paragraph","content":{"text":"Hung Ga is one of the most popular kung-fu systems to originate from Kwang Tung (Canton), China. It is one of the five family systems passed down from the teachings of the Siu Lum Monk, Gee Shim, who taught five disciples surnamed Hung, Choy, Lay, Lau, and Mok. Hung- Ga, named after Hung Hei Guen, is a powerful style which encompasses the hard, long range offense of the Fu Ying (tiger form) and the soft, short range fluid defense of the Hok Ying (crane form), the evasiveness of the Lung (dragon), the precision of the Sae (snake), the swiftness of the Pao, (leopard) and the application of the Ng Hang Kuen (five element fist)."}},{"type":"paragraph","content":{"text":"Additional information on the history of Hung Ga and Shaolin can be found here:"}},{"type":"image","content":{"size":"small","alignment":"left","src":"https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/three-lions-02.jpg"}}]};

/***/ }),

/***/ "./static/lion_dance_article.json":
false

})
//# sourceMappingURL=About.js.f9e0cf3bd42155b6fc3d.hot-update.js.map