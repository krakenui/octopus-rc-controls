"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var FurtherInfo = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FurtherInfo, _React$Component);

  function FurtherInfo(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = FurtherInfo.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "further-info"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "support"
    }, /*#__PURE__*/_react["default"].createElement("h3", null, "B\u1EA1n c\u1EA7n h\u1ED7 tr\u1EE3 ?"), /*#__PURE__*/_react["default"].createElement("a", {
      href: 'tel:' + this.props.phone
    }, this.props.phone), " - ", /*#__PURE__*/_react["default"].createElement("a", {
      href: this.props.email
    }, this.props.email)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "contact"
    }, /*#__PURE__*/_react["default"].createElement("h3", null, this.props.contactTitle), /*#__PURE__*/_react["default"].createElement("p", {
      className: "brand"
    }, this.props.companyName), /*#__PURE__*/_react["default"].createElement("ul", {
      className: "contact-list"
    }, /*#__PURE__*/_react["default"].createElement("li", {
      className: "address"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fas fa-map-marker-alt"
    }), this.props.address), /*#__PURE__*/_react["default"].createElement("li", {
      className: "calendar"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fas fa-calendar-alt"
    }), this.props.calendar), /*#__PURE__*/_react["default"].createElement("li", {
      className: "phone"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fas fa-headphones"
    }), this.props.phone), /*#__PURE__*/_react["default"].createElement("li", {
      className: "email"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fas fa-envelope"
    }), /*#__PURE__*/_react["default"].createElement("a", {
      href: 'mailTo:' + this.props.email
    }, this.props.email)))));
  };

  return FurtherInfo;
}(_react["default"].Component);

var _default = FurtherInfo;
exports["default"] = _default;