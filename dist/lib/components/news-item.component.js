"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NewsItemComponent =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(NewsItemComponent, _Component);

  function NewsItemComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NewsItemComponent.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: "news-item row"
    }, _react["default"].createElement("div", {
      className: "col-sm-3 image"
    }, _react["default"].createElement("a", {
      href: this.props.href
    }, _react["default"].createElement("img", {
      src: this.props.image,
      alt: this.props.title
    }))), _react["default"].createElement("div", {
      className: "col-sm-9 content"
    }, _react["default"].createElement("a", {
      className: "title",
      href: this.props.href
    }, this.props.title), _react["default"].createElement("div", {
      className: "action"
    }, _react["default"].createElement("span", null, _react["default"].createElement("i", {
      className: "fas fa-calendar-day"
    }), this.props.date), _react["default"].createElement("span", null, _react["default"].createElement("i", {
      className: "fas fa-user-edit"
    }), this.props.authorName)), _react["default"].createElement("p", {
      className: "description"
    }, this.props.description), _react["default"].createElement("a", {
      className: "btn btn-primary btn-detail",
      href: this.props.href
    }, "Xem chi ti\u1EBFt")));
  };

  return NewsItemComponent;
}(_react.Component);

var _default = NewsItemComponent;
exports["default"] = _default;