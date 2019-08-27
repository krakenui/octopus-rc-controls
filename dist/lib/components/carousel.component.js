"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var CarouselComponent =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CarouselComponent, _React$Component);

  function CarouselComponent() {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.state = {
      settings: {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
      }
    };
    _this.carouselElmRef = _react["default"].createRef();
    return _this;
  }

  var _proto = CarouselComponent.prototype;

  _proto.componentWillMount = function componentWillMount() {
    if (this.props.settings) {
      this.setState({
        settings: this.props.settings
      });
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var itemTemplates = this.props.src ? this.props.src.map(function (item, idx) {
      return _react["default"].createElement("div", {
        className: "carousel-item",
        key: idx
      }, _react["default"].createElement("img", {
        src: item.image,
        alt: item.title,
        className: "carousel-image"
      }), _react["default"].createElement("div", {
        className: "row altText"
      }, _react["default"].createElement("div", {
        className: "col-md-5"
      }, _react["default"].createElement("h3", {
        className: "title"
      }, item.title), _react["default"].createElement("p", {
        className: "text"
      }, item.text))), _this2.props.children);
    }) : [];
    return _react["default"].createElement("div", {
      className: "carousel"
    }, _react["default"].createElement(_reactSlick["default"], _extends({
      ref: this.carouselElmRef
    }, this.state.settings), itemTemplates));
  };

  return CarouselComponent;
}(_react["default"].Component);

exports["default"] = CarouselComponent;