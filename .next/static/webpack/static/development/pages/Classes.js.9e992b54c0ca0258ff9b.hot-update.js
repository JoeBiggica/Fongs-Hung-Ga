webpackHotUpdate("static/development/pages/Classes.js",{

/***/ "./components/table/Table.jsx":
/*!************************************!*\
  !*** ./components/table/Table.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Table_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Table.scss */ "./components/table/Table.scss");
/* harmony import */ var _Table_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Table_scss__WEBPACK_IMPORTED_MODULE_12__);














var Table =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Table, _PureComponent);

  function Table() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Table);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Table)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renderHeader", function (header) {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _Table_scss__WEBPACK_IMPORTED_MODULE_12___default()('header')
      }, header.name);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renderRows", function (row, index) {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        key: "".concat(row.name, "-").concat(index),
        className: _Table_scss__WEBPACK_IMPORTED_MODULE_12___default()('row')
      }, row.cells.map(_this.renderCell));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renderCell", function (cell, index) {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        key: "".concat(cell.name, "-").concat(index),
        className: _Table_scss__WEBPACK_IMPORTED_MODULE_12___default()('cell-container')
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _Table_scss__WEBPACK_IMPORTED_MODULE_12___default()('cell')
      }, cell.name), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _Table_scss__WEBPACK_IMPORTED_MODULE_12___default()('subcell')
      }, cell.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renderColumns", function (data) {
      data.headers.forEach(function (header, index) {
        var cells = data.rows.map(function (row) {
          return row.cells[index];
        });
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          key: "".concat(header.name, "-").concat(index),
          className: _Table_scss__WEBPACK_IMPORTED_MODULE_12___default()('column')
        }, _this.renderHeader(header), cells && cells.map(_this.renderCell));
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          title = _this$props.title,
          description = _this$props.description,
          data = _this$props.data;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(_Table_scss__WEBPACK_IMPORTED_MODULE_12___default()('container'), className)
      }, title && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        className: _Table_scss__WEBPACK_IMPORTED_MODULE_12___default()('title')
      }, title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _Table_scss__WEBPACK_IMPORTED_MODULE_12___default()('table-container')
      }, this.renderColumns(data)));
    }
  }]);

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Table, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  color: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string
});

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ })

})
//# sourceMappingURL=Classes.js.9e992b54c0ca0258ff9b.hot-update.js.map