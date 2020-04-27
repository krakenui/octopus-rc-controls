"use strict";

exports.__esModule = true;
exports["default"] = exports.ProductListComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _productItem = _interopRequireDefault(require("./product-item.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ProductListComponent = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ProductListComponent, _React$Component);

  function ProductListComponent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ProductListComponent.prototype;

  _proto.render = function render() {
    var _this = this;

    var productTemplates = this.props.dataSource && this.props.dataSource.map(function (item, index) {
      item.srcImages = JSON.parse(item.srcImages);
      return /*#__PURE__*/_react["default"].createElement(_productItem["default"], {
        key: index,
        srcImage: item.srcImages && item.srcImages.length > 0 ? item.srcImages[0] : null,
        altImage: item.name,
        name: item.name,
        summary: item.trailer,
        price: item.price,
        currencyUnit: item.currencyUnit,
        id: item.id,
        onClickDetail: _this.props.onClickDetail
      });
    });
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "card-columns content-product-list"
    }, productTemplates);
  };

  return ProductListComponent;
}(_react["default"].Component);

exports.ProductListComponent = ProductListComponent;
var _default = ProductListComponent;
exports["default"] = _default;