"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("antd/dist/antd.css");

var _antd2 = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SubMenu = _antd2.Menu.SubMenu;

var SidebarComponent = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SidebarComponent, _React$Component);

  function SidebarComponent(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.getPrefixCls = function () {
      return _this.props ? _this.props.prefixClass : "";
    };

    _this.defaultSelectedKeys = function (items) {
      var node = 0,
          leaf = 1;

      var flatItem = function flatItem(item) {
        if (item.children && item.children.length > 0) {
          node++;
          return item.children.map(function (i) {
            return {
              node: node,
              key: leaf++,
              href: i.href
            };
          });
        } else {
          return [{
            node: 0,
            key: leaf++,
            href: item.href
          }];
        }
      };

      var flatSource = items.map(function (item, idx) {
        return flatItem(item, idx);
      }).reduce(function (acc, curr) {
        acc.push.apply(acc, curr);
        return acc;
      }, []);
      var sub = flatSource.find(function (s) {
        return s.href === window.location.pathname;
      });

      if (!sub) {
        return {
          node: 1,
          key: 0
        };
      }

      return sub;
    };

    _this.firstActive = function () {
      if (_this.props.src.length > 0 && _this.state.selectedKeys.length === 0) {
        var _this$defaultSelected = _this.defaultSelectedKeys(_this.props.src),
            key = _this$defaultSelected.key,
            node = _this$defaultSelected.node;

        _this.setState({
          selectedKeys: ["" + key],
          selectedSubs: ["sub" + node]
        });
      }
    };

    _this.onOpenChange = function (e) {
      _this.setState({
        selectedSubs: e
      });
    };

    _this.state = {
      collapsed: false,
      selectedKeys: [],
      selectedSubs: []
    };
    _this.leafKey = 1;
    _this.subKey = 1;
    return _this;
  }

  var _proto = SidebarComponent.prototype;

  _proto.buildLeaf = function buildLeaf(key, item) {
    return /*#__PURE__*/_react["default"].createElement(_antd2.Menu.Item, {
      key: this.leafKey++
    }, /*#__PURE__*/_react["default"].createElement("a", {
      className: "item-link",
      href: item.href
    }, item.icon != null && /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("i", {
      className: item.icon
    })), /*#__PURE__*/_react["default"].createElement("span", {
      className: "text"
    }, item.title)));
  };

  _proto.buildNode = function buildNode(key, item) {
    var _self = this;

    return /*#__PURE__*/_react["default"].createElement(SubMenu, {
      key: "sub" + this.subKey++,
      title: /*#__PURE__*/_react["default"].createElement("span", null, item.icon != null && /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("i", {
        className: item.icon
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "text"
      }, item.title))
    }, item.children.map(function (child, idx) {
      return _self.buildLeaf(idx, child);
    }));
  };

  _proto.render = function render() {
    var props = this.props;
    var baseClassName = (0, _classnames["default"])("sidebar", this.getPrefixCls(), props.className);
    var menuItems = props.src;

    var _self = this;

    this.leafKey = 1;
    this.subKey = 1;
    this.firstActive();
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: baseClassName,
      style: {
        width: this.props.width
      }
    }, /*#__PURE__*/_react["default"].createElement(_antd2.Menu, {
      ref: this.primaryRef,
      openKeys: this.state.selectedSubs,
      selectedKeys: this.state.selectedKeys,
      forceSubMenuRender: true,
      mode: "inline",
      theme: "dark",
      inlineCollapsed: this.props.collapsed,
      onOpenChange: this.onOpenChange
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