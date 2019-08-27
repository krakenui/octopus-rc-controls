"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var FurtherInfo =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FurtherInfo, _React$Component);

  function FurtherInfo(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = FurtherInfo.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: "further-info"
    }, _react["default"].createElement("div", {
      className: "support"
    }, _react["default"].createElement("h3", null, "B\u1EA1n c\u1EA7n h\u1ED7 tr\u1EE3 ?"), _react["default"].createElement("a", {
      href: 'tel:' + this.props.phone
    }, this.props.phone), " - ", _react["default"].createElement("a", {
      href: this.props.email
    }, this.props.email)), _react["default"].createElement("div", {
      className: "contact"
    }, _react["default"].createElement("h3", null, "\u0110\u1ECBa ch\u1EC9"), _react["default"].createElement("ul", {
      className: "contact-list"
    }, _react["default"].createElement("li", {
      className: "address"
    }, _react["default"].createElement("i", {
      className: "fas fa-map-marker-alt"
    }), this.props.address), _react["default"].createElement("li", {
      className: "calendar"
    }, _react["default"].createElement("i", {
      className: "fas fa-calendar-alt"
    }), this.props.calendar), _react["default"].createElement("li", {
      className: "phone"
    }, _react["default"].createElement("i", {
      className: "fas fa-headphones"
    }), this.props.phone), _react["default"].createElement("li", {
      className: "email"
    }, _react["default"].createElement("i", {
      className: "fas fa-envelope"
    }), _react["default"].createElement("a", {
      href: 'mailTo:' + this.props.email
    }, this.props.email)))));
  };

  return FurtherInfo;
}(_react["default"].Component);

var _default = FurtherInfo;
exports["default"] = _default;