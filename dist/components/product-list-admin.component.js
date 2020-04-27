"use strict";

exports.__esModule = true;
exports["default"] = exports.ProductListAdminComponent = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ProductListAdminComponent = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ProductListAdminComponent, _React$Component);

  function ProductListAdminComponent() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.d = void 0;
    return _this;
  }

  var _proto = ProductListAdminComponent.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var productTemplates = this.props.dataSource && this.props.dataSource.map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement("tr", {
        key: index
      }, /*#__PURE__*/_react["default"].createElement("td", null, item.name), /*#__PURE__*/_react["default"].createElement("td", null, item.price), /*#__PURE__*/_react["default"].createElement("td", null, item.summary), /*#__PURE__*/_react["default"].createElement("td", {
        className: "command-area"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-light",
        onClick: _this2.editProduct.bind(_this2, item.id)
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-edit"
      })), /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-light",
        onClick: _this2.detailProduct.bind(_this2, item.id)
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-info"
      })), /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-light",
        onClick: _this2.deleteProduct.bind(_this2, item.id)
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-trash-alt"
      }))));
    });
    return /*#__PURE__*/_react["default"].createElement("table", {
      className: "table table-dark table-product"
    }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "T\xEAn s\u1EA3m ph\u1EA9m"), /*#__PURE__*/_react["default"].createElement("th", null, "Gi\xE1"), /*#__PURE__*/_react["default"].createElement("th", null, "T\xF3m t\u1EAFt"))), /*#__PURE__*/_react["default"].createElement("tbody", null, productTemplates));
  };

  return ProductListAdminComponent;
}(_react["default"].Component);

exports.ProductListAdminComponent = ProductListAdminComponent;
var _default = ProductListAdminComponent;
exports["default"] = _default;