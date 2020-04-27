"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ServiceItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ServiceItem, _React$Component);

  function ServiceItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ServiceItem.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "service-item row"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-sm-3 image"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: this.props.srcImg,
      alt: this.props.title
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-sm-9 content"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      className: "link",
      href: this.props.url
    }, this.props.title), /*#__PURE__*/_react["default"].createElement("p", {
      className: "description"
    }, this.props.description), /*#__PURE__*/_react["default"].createElement("a", {
      className: "btn btn-primary btn-more",
      href: this.props.url
    }, "Xem chi ti\u1EBFt")));
  };

  return ServiceItem;
}(_react["default"].Component);

var _default = ServiceItem;
exports["default"] = _default;