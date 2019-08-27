"use strict";

exports.__esModule = true;
exports["default"] = exports.FormProductComponent = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var FormProductComponent =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FormProductComponent, _React$Component);

  function FormProductComponent(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    props = {
      isView: false
    };
    _this.priceInput = _react["default"].createRef();
    return _this;
  }

  var _proto = FormProductComponent.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("form", {
      onSubmit: this.props.onSubmit,
      className: "form-product"
    }, _react["default"].createElement("div", {
      className: "form-row"
    }, _react["default"].createElement("div", {
      className: "form-group col-md-4"
    }, _react["default"].createElement("label", {
      htmlFor: "name"
    }, "T\xEAn s\u1EA3n ph\u1EA9m"), _react["default"].createElement("input", {
      type: "text",
      className: "form-control",
      id: "name",
      placeholder: "T\xEAn",
      disabled: this.props.isView
    })), _react["default"].createElement("div", {
      className: "form-group col-md-4"
    }, _react["default"].createElement("label", {
      htmlFor: "price"
    }, "Gi\xE1"), _react["default"].createElement("input", {
      type: "number",
      className: "form-control",
      id: "price",
      placeholder: "Gi\xE1",
      disabled: this.props.isView,
      ref: this.priceInput,
      onKeyDown: this.priceKeyDown,
      min: "0"
    })), _react["default"].createElement("div", {
      className: "form-group col-md-4"
    }, _react["default"].createElement("label", {
      htmlFor: "currecy"
    }, "\u0110\u01A1n v\u1ECB ti\u1EC1n t\u1EC7"), _react["default"].createElement("select", {
      id: "currency",
      className: "form-control",
      disabled: this.props.isView
    }, _react["default"].createElement("option", {
      value: "vnd"
    }, "VND"), _react["default"].createElement("option", {
      value: "usd"
    }, "USD")))), _react["default"].createElement("div", {
      className: "form-group"
    }, _react["default"].createElement("label", {
      htmlFor: "summary"
    }, "T\xF3m t\u1EAFt"), _react["default"].createElement("textarea", {
      className: "form-control",
      id: "summary",
      placeholder: "T\xF3m t\u1EAFt s\u1EA3n ph\u1EA9m",
      disabled: this.props.isView
    })), _react["default"].createElement("div", {
      className: "form-group"
    }, _react["default"].createElement("label", {
      htmlFor: "imagePreview"
    }, "H\xECnh \u1EA3nh s\u1EA3n ph\u1EA9m"), _react["default"].createElement("input", {
      type: "file",
      className: "form-control",
      id: "imagePreview",
      disabled: this.props.isView
    }), _react["default"].createElement("input", {
      hidden: true,
      id: "imageUrl",
      name: "imageUrl"
    }), _react["default"].createElement("button", {
      id: "uploadImage",
      name: "uploadImage",
      className: "btn btn-info"
    }, "Upload")), _react["default"].createElement("button", {
      type: "submit"
    }, "Submit"));
  };

  return FormProductComponent;
}(_react["default"].Component);

exports.FormProductComponent = FormProductComponent;
var _default = FormProductComponent;
exports["default"] = _default;