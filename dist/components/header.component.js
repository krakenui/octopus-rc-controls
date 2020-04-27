"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _topMenu = _interopRequireDefault(require("./top-menu.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var HeaderComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(HeaderComponent, _Component);

  function HeaderComponent() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.buildSocials = function () {
      return _this.props.socials && _this.props.socials.map(function (i, idx) {
        return /*#__PURE__*/_react["default"].createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: i.href,
          key: idx
        }, /*#__PURE__*/_react["default"].createElement("i", {
          className: i.iconClassName
        }));
      });
    };

    return _this;
  }

  var _proto = HeaderComponent.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement("header", {
      className: "top-header bg-white"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "top-head"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "clearfix"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "logo-brand float-left"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "/"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "float-left"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: this.props.logo,
      alt: "logo",
      className: "logo-img"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "brand"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title large-text"
    }, this.props.brandName), /*#__PURE__*/_react["default"].createElement("div", {
      className: "slogan small-text"
    }, this.props.brandSlogan)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "contact float-right"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "contact-item"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "tel:" + this.props.hotline
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "float-left"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fas fa-headphones"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "content"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "small-text"
    }, "T\u1ED5ng \u0111\xE0i h\u1ED7 tr\u1EE3"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "medium-text"
    }, this.props.hotline)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "contact-item "
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "float-left"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fas fa-calendar-alt"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "content"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "small-text"
    }, "Gi\u1EDD kh\xE1m: ", /*#__PURE__*/_react["default"].createElement("span", null, this.props.calendar)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "medium-text"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "dat-lich-hen.html"
    }, "\u0110\u1EB6T L\u1ECACH H\u1EB8N")))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "contact-item"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "float-left"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fas fa-map-marker-alt"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "content"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "small-text"
    }, this.props.address), /*#__PURE__*/_react["default"].createElement("div", {
      className: "medium-text"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "lien-he.html#map"
    }, "XEM B\u1EA2N \u0110\u1ED2"))))), this.props.socials && /*#__PURE__*/_react["default"].createElement("div", {
      className: "socials"
    }, this.buildSocials())))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "top-menu"
    }, /*#__PURE__*/_react["default"].createElement(_topMenu["default"], null)));
  };

  return HeaderComponent;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var contactInfo = state.user && state.user.contact;

  var props = _objectSpread({}, contactInfo);

  if (contactInfo) {
    props.socials = contactInfo.socials && JSON.parse(contactInfo.socials);
  }

  return props;
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {})(HeaderComponent);

exports["default"] = _default;