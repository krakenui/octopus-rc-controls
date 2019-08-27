"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _topMenu = _interopRequireDefault(require("./top-menu.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var HeaderComponent =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(HeaderComponent, _Component);

  function HeaderComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = HeaderComponent.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("header", {
      className: "top-header bg-white"
    }, _react["default"].createElement("div", {
      className: "top-head"
    }, _react["default"].createElement("div", {
      className: "container"
    }, _react["default"].createElement("div", {
      className: "clearfix"
    }, _react["default"].createElement("div", {
      className: "logo-brand float-left"
    }, _react["default"].createElement("a", {
      href: "/"
    }, _react["default"].createElement("div", {
      className: "float-left"
    }, _react["default"].createElement("img", {
      src: this.props.logo,
      alt: "logo",
      className: "logo-img"
    })), _react["default"].createElement("div", {
      className: "brand"
    }, _react["default"].createElement("div", {
      className: "title large-text"
    }, this.props.brandName), _react["default"].createElement("div", {
      className: "slogan small-text"
    }, this.props.brandSlogan)))), _react["default"].createElement("div", {
      className: "contact float-right"
    }, _react["default"].createElement("div", {
      className: "contact-item"
    }, _react["default"].createElement("span", {
      className: "float-left"
    }, _react["default"].createElement("i", {
      className: "fas fa-headphones"
    })), _react["default"].createElement("div", {
      className: "content"
    }, _react["default"].createElement("div", {
      className: "small-text"
    }, "T\u1ED5ng \u0111\xE0i h\u1ED7 tr\u1EE3"), _react["default"].createElement("div", {
      className: "medium-text"
    }, this.props.hotline))), _react["default"].createElement("div", {
      className: "contact-item "
    }, _react["default"].createElement("span", {
      className: "float-left"
    }, _react["default"].createElement("i", {
      className: "fas fa-calendar-alt"
    })), _react["default"].createElement("div", {
      className: "content"
    }, _react["default"].createElement("div", {
      className: "small-text"
    }, "Gi\u1EDD kh\xE1m: ", _react["default"].createElement("span", null, this.props.calendar)), _react["default"].createElement("div", {
      className: "medium-text"
    }, _react["default"].createElement("a", {
      href: "dat-lich-hen.html"
    }, "\u0110\u1EB6T L\u1ECACH H\u1EB8N")))), _react["default"].createElement("div", {
      className: "contact-item"
    }, _react["default"].createElement("span", {
      className: "float-left"
    }, _react["default"].createElement("i", {
      className: "fas fa-map-marker-alt"
    })), _react["default"].createElement("div", {
      className: "content"
    }, _react["default"].createElement("div", {
      className: "small-text"
    }, this.props.address), _react["default"].createElement("div", {
      className: "medium-text"
    }, _react["default"].createElement("a", {
      href: "lien-he.html#map"
    }, "XEM B\u1EA2N \u0110\u1ED2")))))))), _react["default"].createElement("div", {
      className: "top-menu"
    }, _react["default"].createElement(_topMenu["default"], null)));
  };

  return HeaderComponent;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var contactInfo = state.user && state.user.contact;

  var props = _objectSpread({}, contactInfo);

  return props;
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {})(HeaderComponent);

exports["default"] = _default;