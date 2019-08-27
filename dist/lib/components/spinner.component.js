"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _spinner = require("../core/services/spinner.service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SpinnerComponent =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SpinnerComponent, _React$Component);

  function SpinnerComponent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SpinnerComponent.prototype;

  _proto.componentWillMount = function componentWillMount() {
    (0, _spinner.showSpinner)();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _spinner.hideSpinner)();
  };

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: "hidden"
    });
  };

  return SpinnerComponent;
}(_react["default"].Component);

var _default = SpinnerComponent;
exports["default"] = _default;