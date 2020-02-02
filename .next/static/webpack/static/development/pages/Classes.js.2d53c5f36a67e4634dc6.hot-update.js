webpackHotUpdate("static/development/pages/Classes.js",{

/***/ "./pages/Classes.jsx":
/*!***************************!*\
  !*** ./pages/Classes.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_class_schedule_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/class_schedule.json */ "./static/class_schedule.json");
var _static_class_schedule_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/class_schedule.json */ "./static/class_schedule.json", 1);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/header */ "./components/header/index.js");
/* harmony import */ var _components_herobanner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/herobanner */ "./components/herobanner/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_pageheader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/pageheader */ "./components/pageheader/index.js");
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/table */ "./components/table/index.js");
/* harmony import */ var _Classes_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Classes.scss */ "./pages/Classes.scss");
/* harmony import */ var _Classes_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Classes_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);




















var Classes =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Classes, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Classes, null, [{
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

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Classes);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Classes).call(this, props));
    _this.classes_table = _static_class_schedule_json__WEBPACK_IMPORTED_MODULE_10__;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Classes, [{
    key: "render",
    value: function render() {
      var router = this.props.router;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        router: router
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_herobanner__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: _Classes_scss__WEBPACK_IMPORTED_MODULE_16___default()('herobanner'),
        title: "Classes",
        text_position: _components_herobanner__WEBPACK_IMPORTED_MODULE_12__["default"].TextPosition.BOTTOM,
        background_image: "https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/fongs-doyers-pose.jpg",
        background_position: _components_herobanner__WEBPACK_IMPORTED_MODULE_12__["default"].BackgroundPosition.CENTER,
        hero_height: _components_herobanner__WEBPACK_IMPORTED_MODULE_12__["default"].HeroHeight.HALF,
        gradient: _components_herobanner__WEBPACK_IMPORTED_MODULE_12__["default"].Gradient.BOTTOM
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_pageheader__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Class Schedules"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_table__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: "Staten Island, New York",
        data: this.classes_table
      })));
    }
  }]);

  return Classes;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Classes, "propTypes", {
  router: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.object
});

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Classes));

/***/ })

})
//# sourceMappingURL=Classes.js.2d53c5f36a67e4634dc6.hot-update.js.map