"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NavFixedComponent =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(NavFixedComponent, _Component);

  function NavFixedComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NavFixedComponent.prototype;

  _proto.render = function render() {
    var firstLogoStyle = {
      width: this.props.logoWidth
    };
    return _react["default"].createElement("div", {
      className: "fix-top"
    }, _react["default"].createElement("div", {
      className: "logo",
      style: firstLogoStyle
    }, this.props.logo && _react["default"].createElement("img", {
      src: this.props.logo,
      className: "logo-img",
      alt: this.props.brandName
    }), _react["default"].createElement("a", {
      className: "text"
    }, this.props.brandName), _react["default"].createElement("button", {
      className: "browse-btn btn",
      onClick: this.props.onToggleClick
    }, this.props.isToggle ? _react["default"].createElement("i", {
      className: "fas fa-toggle-on"
    }) : _react["default"].createElement("i", {
      className: "fas fa-toggle-off"
    }))), _react["default"].createElement("div", {
      className: "actions"
    }, _react["default"].createElement("ul", {
      className: "nav navbar-nav"
    }, _react["default"].createElement("li", {
      className: "dropdown user user-menu"
    }, _react["default"].createElement("a", {
      href: "/admin"
    }, _react["default"].createElement("span", null, _react["default"].createElement("i", null, "Xin ch\xE0o, "), this.props.loginName, "!"))))));
  };

  return NavFixedComponent;
}(_react.Component);

var _default = NavFixedComponent;
exports["default"] = _default;