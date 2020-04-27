"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var TopMenuComponent = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TopMenuComponent, _React$Component);

  function TopMenuComponent() {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.navElmRef = _react["default"].createRef();
    _this.collapseChange = _this.collapseChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = TopMenuComponent.prototype;

  _proto.collapseChange = function collapseChange() {
    if (this.navElmRef.current) {
      var navElm = this.navElmRef.current;

      if (navElm.className === 'top-nav') {
        navElm.className += ' responsive';
      } else {
        navElm.className = 'top-nav';
      }
    }
  };

  _proto.render = function render() {
    var currentHref = window.location.pathname;
    var lstItemTemplates = this.props.children == null && this.props.menuInfo ? this.props.menuInfo.map(function (i, idx) {
      if (currentHref === i.href) {
        return /*#__PURE__*/_react["default"].createElement("a", {
          href: i.href,
          className: "active",
          key: idx
        }, i.text);
      }

      return /*#__PURE__*/_react["default"].createElement("a", {
        href: i.href,
        key: idx
      }, i.text);
    }) : [];
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      ref: this.navElmRef,
      className: "top-nav"
    }, this.props.children == null ? lstItemTemplates : this.props.children, /*#__PURE__*/_react["default"].createElement("span", {
      className: "icon",
      onClick: this.collapseChange
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fa fa-bars"
    }))));
  };

  return TopMenuComponent;
}(_react["default"].Component);

var mapStateToProps = function mapStateToProps(state) {
  var menuInfo = state.setting && state.setting.menuInfo;
  var props = {
    menuInfo: menuInfo
  };
  return props;
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {})(TopMenuComponent);

exports["default"] = _default;