"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ProductItemComponent = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ProductItemComponent, _React$Component);

  function ProductItemComponent() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.addToCartClick = function () {
      if (_this.props.onClickDetail) {
        _this.props.onClickDetail(_this.props.id);
      }
    };

    _this.viewDetailProductClick = function () {
      if (_this.props.onClickDetail) {
        _this.props.onClickDetail(_this.props.id);
      }
    };

    return _this;
  }

  var _proto = ProductItemComponent.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "card product-item"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "overlay"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "card-body actions"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "card-link btn btn-outline-primary",
      onClick: this.addToCartClick
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fas fa-eye"
    }), "Xem chi ti\u1EBFt"))), /*#__PURE__*/_react["default"].createElement("img", {
      src: this.props.srcImage,
      className: "card-img-top",
      alt: this.props.name,
      onClick: this.viewDetailProductClick
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "card-body pt-0 pb-0",
      title: this.props.name
    }, /*#__PURE__*/_react["default"].createElement("h5", {
      className: "card-title title",
      onClick: this.viewDetailProductClick
    }, this.props.name)), /*#__PURE__*/_react["default"].createElement("ul", {
      className: "list-group list-group-flush"
    }, /*#__PURE__*/_react["default"].createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "price"
    }, this.props.price.toLocaleString(), " ", this.props.currencyUnit), ' ')));
  };

  return ProductItemComponent;
}(_react["default"].Component);

var _default = ProductItemComponent;
exports["default"] = _default;