"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ServiceOther = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ServiceOther, _React$Component);

  function ServiceOther() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ServiceOther.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "service-other"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-md-5"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: props.img
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-md-7",
      dangerouslySetInnerHTML: {
        __html: this.props.other
      }
    })));
  };

  return ServiceOther;
}(_react["default"].Component);

var _default = ServiceOther;
exports["default"] = _default;