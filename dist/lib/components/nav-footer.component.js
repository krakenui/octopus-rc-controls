"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NavFooterComponent =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(NavFooterComponent, _React$Component);

  function NavFooterComponent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavFooterComponent.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: "nav-footer"
    }, _react["default"].createElement("div", {
      className: "copyright text-center"
    }, "Copyright \xA9 ", new Date().getFullYear(), " ", _react["default"].createElement("a", {
      href: this.props.baseHref
    }, this.props.companyName), ". All rights reserved."), _react["default"].createElement("div", {
      className: "powered"
    }));
  };

  return NavFooterComponent;
}(_react["default"].Component);

var _default = NavFooterComponent;
exports["default"] = _default;