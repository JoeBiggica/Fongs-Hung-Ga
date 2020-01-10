webpackHotUpdate("static/development/pages/classes.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
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
      switch (gradient) {
        case 'top':
          return "linear-gradient(rgba(0, 0, 0, 0.7) 75%, rgba(0, 0, 0, 0) 50%), url(".concat(background_image, ")");

        case 'bottom':
          return "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 75%), url(".concat(background_image, ")");

        default:
          return "url(".concat(background_image, ")");
      }
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
      var container_style = {
        backgroundImage: background_image && this.getBackground(background_image, gradient),
        backgroundPosition: background_position && background_position
      };
      var text_container_classname = _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_11___default()('text-container', {
        'border': title_border
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(container_classname, className),
        style: container_style
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

/***/ })

})
//# sourceMappingURL=classes.js.57f273043c2a388b82fb.hot-update.js.map