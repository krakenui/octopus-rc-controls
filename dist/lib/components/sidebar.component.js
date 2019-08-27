"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SubMenu = _antd.Menu.SubMenu;

var SidebarComponent =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SidebarComponent, _React$Component);

  function SidebarComponent(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.getPrefixCls = function () {
      return _this.props ? _this.props.prefixClass : '';
    };

    _this.state = {
      collapsed: false
    };
    _this.sub = null;
    _this.flatSource = [];

    if (props && props.src.length > 0) {
      _this.flatSource = props.src.map(function (item, idx) {
        return _this.flatItem(item, idx);
      }).reduce(function (acc, curr) {
        acc.push.apply(acc, curr);
        return acc;
      }, []);

      _this.getDefaultSubmenu();
    }

    return _this;
  }

  var _proto = SidebarComponent.prototype;

  _proto.flatItem = function flatItem(item, idx) {
    if (!item.children || item.children.length === 0) {
      return [{
        sub: "sub" + idx,
        key: idx,
        href: item.href
      }];
    }

    return item.children.map(function (i, idex) {
      return {
        sub: "sub" + idx,
        key: idex + '',
        href: i.href
      };
    });
  };

  _proto.buildLeaf = function buildLeaf(key, item) {
    return _react["default"].createElement(_antd.Menu.Item, {
      key: key
    }, _react["default"].createElement("a", {
      className: "item-link",
      href: item.href
    }, item.icon != null && _react["default"].createElement("span", null, _react["default"].createElement("i", {
      className: item.icon
    })), _react["default"].createElement("span", {
      className: "text"
    }, item.title)));
  };

  _proto.buildNode = function buildNode(key, item) {
    var _self = this;

    return _react["default"].createElement(SubMenu, {
      key: "sub" + key,
      title: _react["default"].createElement("span", null, item.icon != null && _react["default"].createElement("span", null, _react["default"].createElement("i", {
        className: item.icon
      })), _react["default"].createElement("span", {
        className: "text"
      }, item.title))
    }, item.children.map(function (child, idx) {
      return _self.buildLeaf(idx, child);
    }));
  };

  _proto.getDefaultSubmenu = function getDefaultSubmenu() {
    var sub = this.flatSource.find(function (s) {
      return s.href === window.location.pathname;
    });

    if (sub) {
      this.sub = sub;
    }
  };

  _proto.render = function render() {
    var props = this.props;
    var baseClassName = (0, _classnames["default"])('sidebar', this.getPrefixCls(), props.className);
    var menuItems = props.src;

    var _self = this;

    return _react["default"].createElement("div", {
      className: baseClassName,
      style: {
        width: this.props.width
      }
    }, _react["default"].createElement(_antd.Menu, {
      defaultSelectedKeys: this.sub != null ? [this.sub.key] : ['0'],
      defaultOpenKeys: this.sub != null ? [this.sub.sub] : ['sub0'],
      forceSubMenuRender: true,
      mode: "inline",
      theme: "dark",
      inlineCollapsed: this.props.collapsed
    }, menuItems.map(function (item, idx) {
      if (item.children) {
        return _self.buildNode(idx, item);
      }

      return _self.buildLeaf(idx, item);
    })));
  };

  return SidebarComponent;
}(_react["default"].Component);

exports["default"] = SidebarComponent;