"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ServiceBlock =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ServiceBlock, _React$Component);

  function ServiceBlock() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ServiceBlock.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: "service-block"
    }, _react["default"].createElement("div", {
      className: "title"
    }, _react["default"].createElement("h2", null, this.props.title), _react["default"].createElement("div", {
      className: "gray-border"
    }), _react["default"].createElement("div", {
      className: "blue-border"
    })), _react["default"].createElement("div", {
      className: "content"
    }, _react["default"].createElement("p", null, this.props.content)));
  };

  return ServiceBlock;
}(_react["default"].Component);

var _default = ServiceBlock;
exports["default"] = _default;