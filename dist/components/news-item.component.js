"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NewsItemComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(NewsItemComponent, _Component);

  function NewsItemComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NewsItemComponent.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "news-item row"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-sm-3 image"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: this.props.href
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: this.props.image,
      alt: this.props.title
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-sm-9 content"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      className: "title",
      href: this.props.href
    }, this.props.title), /*#__PURE__*/_react["default"].createElement("div", {
      className: "action"
    }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fas fa-calendar-day"
    }), this.props.date), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fas fa-user-edit"
    }), this.props.authorName)), /*#__PURE__*/_react["default"].createElement("p", {
      className: "description"
    }, this.props.description), /*#__PURE__*/_react["default"].createElement("a", {
      className: "btn btn-primary btn-detail",
      href: this.props.href
    }, "Xem chi ti\u1EBFt")));
  };

  return NewsItemComponent;
}(_react.Component);

var _default = NewsItemComponent;
exports["default"] = _default;