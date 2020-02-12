webpackHotUpdate("static/development/pages/LionDance.js",{

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
/* harmony import */ var _static_lion_dance_article_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../static/lion_dance_article.json */ "./static/lion_dance_article.json");
var _static_lion_dance_article_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/lion_dance_article.json */ "./static/lion_dance_article.json", 1);
/* harmony import */ var _LionDance_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LionDance.scss */ "./pages/LionDance.scss");
/* harmony import */ var _LionDance_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_LionDance_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);



















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
        className: _LionDance_scss__WEBPACK_IMPORTED_MODULE_15___default()('herobanner'),
        title: "Lion Dance",
        text_position: _components_herobanner__WEBPACK_IMPORTED_MODULE_11__["default"].TextPosition.BOTTOM,
        background_image: "https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/three-lions.jpg",
        background_position: _components_herobanner__WEBPACK_IMPORTED_MODULE_11__["default"].BackgroundPosition.CENTER,
        hero_height: _components_herobanner__WEBPACK_IMPORTED_MODULE_11__["default"].HeroHeight.HALF,
        gradient: _components_herobanner__WEBPACK_IMPORTED_MODULE_11__["default"].Gradient.BOTTOM
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_pageheader__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "An Intro to Lion Dance"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _LionDance_scss__WEBPACK_IMPORTED_MODULE_15___default()('content')
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

  return LionDance;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(LionDance, "propTypes", {
  router: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object
});

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(LionDance));

/***/ }),

/***/ "./static/lion_dance_article.json":
/*!****************************************!*\
  !*** ./static/lion_dance_article.json ***!
  \****************************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = {"items":[{"type":"paragraph","content":"The lion dance is a traditional style of dance performed in Chinese culture and is usually an integral part of most Chinese Kung Fu schools. The lion dance typically consists of two performers, one in the head of the lion, and the other in the tail as they perform sequenced steps, movements and acrobatics to accompanying music on drums, cymbals and gongs from their classmates. The head is typically made of papier-mache, and the performers’ faces are rarely seen during the actual performance, giving illusion that the lion has come to life."},{"type":"subheader","content":"Why perform lion dances"},{"type":"paragraph","content":"Lion dances are mostly performed around the time of Chinese New Year, as a means of symbolizing the wishing of good fortune and celebration of the new year. However, lion dances serve many other purposes such as blessing a business with good fortune, sanctioning the grand-opening of a building, and celebratory events like the anniversary of an establishment, or even a birthday party."},{"type":"subheader","content":"Why we do it"},{"type":"paragraph","content":"Lion dancing at Fong’s Hung Ga is an experience that takes students to many different places and allows them to express an art form not commonly seen on a daily basis. Lion dance is also an intense physical workout that is integral to Hung Ga as it conditions and builds muscles gained by our students during their regular classroom training. It also further instills in our students the importance of proper stances as lion dancing utilizes each stance in the Hung Ga system and is dependent on the performer not only having knowledge of each stance, but also having trained enough to execute each movement without losing their balance or falling short on stamina."}]};

/***/ })

})
//# sourceMappingURL=LionDance.js.67daa5afe8adfba3d043.hot-update.js.map