"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NavFixedComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(NavFixedComponent, _Component);

  function NavFixedComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NavFixedComponent.prototype;

  _proto.render = function render() {
    var firstLogoStyle = {
      width: this.props.logoWidth
    };
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "fix-top"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "logo",
      style: firstLogoStyle
    }, this.props.logo && /*#__PURE__*/_react["default"].createElement("img", {
      src: this.props.logo,
      className: "logo-img",
      alt: this.props.brandName
    }), /*#__PURE__*/_react["default"].createElement("a", {
      className: "text"
    }, this.props.brandName), /*#__PURE__*/_react["default"].createElement("button", {
      className: "browse-btn btn",
      onClick: this.props.onToggleClick
    }, this.props.isToggle ? /*#__PURE__*/_react["default"].createElement("i", {
      className: "fas fa-toggle-on"
    }) : /*#__PURE__*/_react["default"].createElement("i", {
      className: "fas fa-toggle-off"
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "actions"
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: "nav navbar-nav"
    }, /*#__PURE__*/_react["default"].createElement("li", {
      className: "dropdown user user-menu"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "/admin"
    }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("i", null, "Xin ch\xE0o, "), this.props.loginName, "!"))))));
  };

  return NavFixedComponent;
}(_react.Component);

var _default = NavFixedComponent;
exports["default"] = _default;