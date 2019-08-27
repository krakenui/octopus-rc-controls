"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var TopBannerComponent =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TopBannerComponent, _React$Component);

  function TopBannerComponent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TopBannerComponent.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: "top-banner",
      style: {
        backgroundImage: "url(" + this.props.backgroundImg + ")"
      }
    }, this.props.children && this.props.children, !this.props.children && _react["default"].createElement("div", {
      className: "container"
    }, _react["default"].createElement("h2", null, this.props.bannerName)));
  };

  return TopBannerComponent;
}(_react["default"].Component);

var _default = TopBannerComponent;
exports["default"] = _default;