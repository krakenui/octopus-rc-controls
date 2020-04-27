"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ProductDetailComponent = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ProductDetailComponent, _React$Component);

  function ProductDetailComponent() {
    var _this;

    _this = _React$Component.call(this) || this;

    _this.changeImagePreview = function (srcImage, altImage) {
      _this.imagePreview.current.src = srcImage;
      _this.imagePreview.current.alt = altImage;
    };

    _this.buildImages = function () {
      var _this$props = _this.props,
          srcImages = _this$props.srcImages,
          name = _this$props.name;
      return srcImages ? srcImages.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: index,
          onClick: function onClick() {
            return _this.changeImagePreview(item, name);
          }
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: item,
          alt: name
        }));
      }) : [];
    };

    _this.imagePreview = _react["default"].createRef();
    return _this;
  }

  var _proto = ProductDetailComponent.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-detail"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "row product-summary"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-md-4 col-sm-12 product-images"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "images-list col-sm-12 col-md-4"
    }, /*#__PURE__*/_react["default"].createElement("ul", null, this.buildImages())), /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-image col-sm-12 col-md-8"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      ref: this.imagePreview,
      src: this.props.srcImages && this.props.srcImages[0],
      alt: this.props.name
    })))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-md-8 col-sm-12 product-cart"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react["default"].createElement("h1", {
      className: "product-name col-sm-12 display-4"
    }, this.props.name)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: "price col-sm-12"
    }, /*#__PURE__*/_react["default"].createElement("li", null, this.props.price, " ", this.props.currencyUnit))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description col-sm-12"
    }, this.props.trailer)))), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description col-sm-12",
      dangerouslySetInnerHTML: {
        __html: this.props.descriptions
      }
    })));
  };

  return ProductDetailComponent;
}(_react["default"].Component);

var _default = ProductDetailComponent;
exports["default"] = _default;