"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _bottomMenu = _interopRequireDefault(require("./bottom-menu.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var FooterComponent =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(FooterComponent, _Component);

  function FooterComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = FooterComponent.prototype;

  _proto.render = function render() {
    var socialLinks = this.props.socials ? this.props.socials.map(function (i, idx) {
      return _react["default"].createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: i.href,
        key: idx
      }, _react["default"].createElement("i", {
        className: i.iconClassName
      }));
    }) : [];
    var emailToLink = "mailTo:" + this.props.email;
    return _react["default"].createElement("footer", {
      className: "footer"
    }, _react["default"].createElement("div", {
      className: "top-sitemap"
    }, _react["default"].createElement("div", {
      className: "container"
    }, _react["default"].createElement("div", {
      className: "row"
    }, _react["default"].createElement("div", {
      className: "col-lg-12"
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
    }, this.props.brandSlogan)))))), _react["default"].createElement("div", {
      className: "row"
    }, _react["default"].createElement("div", {
      className: "col-lg-6 col-md-6 col-sm-12"
    }, _react["default"].createElement("ul", {
      className: "contact-list"
    }, _react["default"].createElement("h4", null, "Th\xF4ng tin li\xEAn h\u1EC7"), _react["default"].createElement("li", {
      className: "address"
    }, _react["default"].createElement("i", {
      className: "fas fa-map-marker-alt"
    }), this.props.address), _react["default"].createElement("li", {
      className: "address"
    }, _react["default"].createElement("i", {
      className: "fas fa-calendar-alt"
    }), this.props.calendar), _react["default"].createElement("li", {
      className: "phone"
    }, _react["default"].createElement("i", {
      className: "fas fa-headphones"
    }), this.props.hotline), _react["default"].createElement("li", {
      className: "email"
    }, _react["default"].createElement("i", {
      className: "fas fa-envelope"
    }), _react["default"].createElement("a", {
      href: emailToLink
    }, this.props.email))), _react["default"].createElement("div", {
      className: "embeded-map"
    }, _react["default"].createElement("iframe", {
      src: this.props.map,
      title: this.props.brandName
    }))), this.props.bottomMenuInfo && _react["default"].createElement("div", {
      className: "col-lg-3 col-md-3 col-sm-12"
    }, _react["default"].createElement(_bottomMenu["default"], {
      title: "Ch\u1EE9c n\u0103ng",
      menuInfo: this.props.bottomMenuInfo
    })), this.props.serviceMenuInfo && _react["default"].createElement("div", {
      className: "col-lg-3 col-md-3 col-sm-12"
    }, _react["default"].createElement(_bottomMenu["default"], {
      title: "D\u1ECBch v\u1EE5",
      menuInfo: this.props.serviceMenuInfo
    }))))), _react["default"].createElement("div", {
      className: "bottom-copyright"
    }, _react["default"].createElement("div", {
      className: "container"
    }, _react["default"].createElement("div", {
      className: "row"
    }, _react["default"].createElement("div", {
      className: "col-sm-6"
    }, _react["default"].createElement("div", {
      className: "copyright"
    }, "\xA9 ", new Date().getFullYear(), " B\u1EA3n quy\u1EC1n thu\u1ED9c v\u1EC1 ", _react["default"].createElement("a", {
      href: "/"
    }, this.props.brandName), ".")), socialLinks && socialLinks.length > 0 && _react["default"].createElement("div", {
      className: "col-sm-6"
    }, _react["default"].createElement("div", {
      className: "social"
    }, _react["default"].createElement("span", null, "K\u1EBFt n\u1ED1i v\u1EDBi ch\xFAng t\xF4i"), socialLinks))))));
  };

  return FooterComponent;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var contactInfo = state.user && state.user.contact;
  var bottomMenuInfo = state.setting && state.setting.bottomMenuInfo;
  var serviceMenuInfo = state.setting && state.setting.serviceMenuInfo;
  var socials = contactInfo && contactInfo.socials && JSON.parse(contactInfo.socials);

  var props = _objectSpread({}, contactInfo, {
    socials: socials,
    bottomMenuInfo: bottomMenuInfo,
    serviceMenuInfo: serviceMenuInfo
  });

  return props;
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {})(FooterComponent);

exports["default"] = _default;