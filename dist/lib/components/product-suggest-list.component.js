"use strict";

exports.__esModule = true;
exports["default"] = exports.ProductSuggestListComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _productItem = _interopRequireDefault(require("./product-item.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ProductSuggestListComponent =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ProductSuggestListComponent, _React$Component);

  function ProductSuggestListComponent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ProductSuggestListComponent.prototype;

  _proto.render = function render() {
    var _this = this;

    var productTemplates = this.props.dataSource && this.props.dataSource.map(function (item, index) {
      item.srcImages = JSON.parse(item.srcImages);
      return _react["default"].createElement(_productItem["default"], {
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
    return _react["default"].createElement("div", {
      className: "card-columns content-product-suggest-list"
    }, productTemplates);
  };

  return ProductSuggestListComponent;
}(_react["default"].Component);

exports.ProductSuggestListComponent = ProductSuggestListComponent;
var _default = ProductSuggestListComponent;
exports["default"] = _default;