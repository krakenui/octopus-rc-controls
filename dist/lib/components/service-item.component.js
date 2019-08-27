"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ServiceItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ServiceItem, _React$Component);

  function ServiceItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.getImageLeft = function () {
      return _react["default"].createElement("div", {
        className: "service-item"
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-sm-2"
      }, _react["default"].createElement("div", {
        className: "image"
      }, _react["default"].createElement("img", {
        src: _this.props.srcImg,
        alt: _this.props.title
      }))), _react["default"].createElement("div", {
        className: "col-sm-10 text-left"
      }, _react["default"].createElement("a", {
        className: "link",
        href: _this.props.url
      }, _this.props.title), _react["default"].createElement("div", {
        dangerouslySetInnerHTML: {
          __html: _this.props.description
        }
      }), _react["default"].createElement("div", {
        className: "extra text-left"
      }, _react["default"].createElement("a", {
        className: "btn btn-primary btn-more",
        href: _this.props.url
      }, "Xem chi ti\u1EBFt")))));
    };

    _this.getImageRight = function () {
      return _react["default"].createElement("div", {
        className: "service-item"
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-sm-9"
      }, _react["default"].createElement("a", {
        className: "link",
        href: _this.props.url
      }, _this.props.title), _react["default"].createElement("div", {
        dangerouslySetInnerHTML: {
          __html: _this.props.description
        }
      })), _react["default"].createElement("div", {
        className: "col-sm-3"
      }, _react["default"].createElement("div", {
        className: "image"
      }, _react["default"].createElement("img", {
        src: _this.props.srcImg,
        alt: _this.props.title
      })))));
    };

    return _this;
  }

  var _proto = ServiceItem.prototype;

  _proto.render = function render() {
    return this.getImageLeft();
  };

  return ServiceItem;
}(_react["default"].Component);

var _default = ServiceItem;
exports["default"] = _default;