"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var BottomMenuComponent =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BottomMenuComponent, _React$Component);

  function BottomMenuComponent() {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.navElmRef = _react["default"].createRef();
    return _this;
  }

  var _proto = BottomMenuComponent.prototype;

  _proto.render = function render() {
    var lstItemTemplates = this.props.menuInfo ? this.props.menuInfo.map(function (i, idx) {
      return _react["default"].createElement("li", {
        className: "item",
        key: idx
      }, _react["default"].createElement("a", {
        href: i.href
      }, _react["default"].createElement("i", {
        className: i.iconClassName
      }), i.text));
    }) : [];
    return _react["default"].createElement("ul", {
      className: "bottom-menu"
    }, _react["default"].createElement("h4", null, this.props.title), lstItemTemplates);
  };

  return BottomMenuComponent;
}(_react["default"].Component);

var _default = BottomMenuComponent;
exports["default"] = _default;