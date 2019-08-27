"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var VerticalTopNewsComponent =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(VerticalTopNewsComponent, _React$Component);

  function VerticalTopNewsComponent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = VerticalTopNewsComponent.prototype;

  _proto.listNewsBuilder = function listNewsBuilder() {
    return this.props.src ? this.props.src.map(function (item, idx) {
      return _react["default"].createElement("li", {
        className: "item",
        key: idx
      }, _react["default"].createElement("a", {
        href: item.href
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-md-4"
      }, _react["default"].createElement("img", {
        src: item.image,
        title: item.headLine
      })), _react["default"].createElement("div", {
        className: "col-md-8"
      }, _react["default"].createElement("p", {
        className: "text"
      }, item.headLine), _react["default"].createElement("p", {
        className: "date"
      }, item.lastModifiedTime)))));
    }) : [];
  };

  _proto.render = function render() {
    var lstItemTemplates = this.listNewsBuilder();
    return _react["default"].createElement("div", {
      className: "vertical-top-menu"
    }, _react["default"].createElement("h3", {
      className: "title"
    }, "B\xC0I \u0110\u0102NG M\u1EDAI"), _react["default"].createElement("ul", {
      className: "content"
    }, lstItemTemplates));
  };

  return VerticalTopNewsComponent;
}(_react["default"].Component);

var _default = VerticalTopNewsComponent;
exports["default"] = _default;