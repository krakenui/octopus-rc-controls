"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var BreadCrumbComponent = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(BreadCrumbComponent, _React$Component);

  function BreadCrumbComponent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BreadCrumbComponent.prototype;

  _proto.itemsBuilder = function itemsBuilder() {
    return this.props.items ? this.props.items.map(function (item, idx) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        className: "item",
        key: idx
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: item.href
      }, item.text));
    }) : [];
  };

  _proto.render = function render() {
    var itemTempates = this.itemsBuilder();
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "bread-cumb"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "container"
    }, itemTempates && itemTempates.length > 0 && /*#__PURE__*/_react["default"].createElement("ul", null, itemTempates)));
  };

  return BreadCrumbComponent;
}(_react["default"].Component);

var _default = BreadCrumbComponent;
exports["default"] = _default;