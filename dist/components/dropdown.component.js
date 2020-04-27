"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var DEFAULT_PLACEHOLDER_STRING = 'Select...';

var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      selected: _this.parseValue(props.value, props.options) || {
        label: typeof props.placeholder === 'undefined' ? DEFAULT_PLACEHOLDER_STRING : props.placeholder,
        value: ''
      },
      isOpen: false
    };
    _this.mounted = true;
    _this.controlElmRef = _react["default"].createRef();
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.fireChangeEvent = _this.fireChangeEvent.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    if (newProps.value) {
      var selected = this.parseValue(newProps.value, newProps.options);

      if (selected !== this.state.selected) {
        this.setState({
          selected: selected
        });
      }
    } else {
      this.setState({
        selected: {
          label: typeof newProps.placeholder === 'undefined' ? DEFAULT_PLACEHOLDER_STRING : newProps.placeholder,
          value: ''
        }
      });
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('touchend', this.handleDocumentClick, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false);
  };

  _proto.handleMouseDown = function handleMouseDown(event) {
    if (this.props.onFocus && typeof this.props.onFocus === 'function') {
      this.props.onFocus(this.state.isOpen);
    }

    if (event.type === 'mousedown' && event.button !== 0) return;
    event.stopPropagation();
    event.preventDefault();

    if (!this.props.disabled) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  };

  _proto.parseValue = function parseValue(value, options) {
    var option;

    if (typeof value === 'string') {
      for (var i = 0, num = options.length; i < num; i++) {
        if (options[i].type === 'group') {
          var match = options[i].items.filter(function (item) {
            return item.value === value;
          });

          if (match.length) {
            option = match[0];
          }
        } else if (typeof options[i].value !== 'undefined' && options[i].value === value) {
          option = options[i];
        }
      }
    }

    return option || value;
  };

  _proto.setValue = function setValue(value, label) {
    var newState = {
      selected: {
        value: value,
        label: label
      },
      isOpen: false
    };
    this.fireChangeEvent(newState);
    this.setState(newState);
  };

  _proto.fireChangeEvent = function fireChangeEvent(newState) {
    if (newState.selected !== this.state.selected) {
      if (this.props.onChange) {
        this.props.onChange(newState.selected);
      }

      if (newState && newState.selected && this.controlElmRef.current) {
        this.controlElmRef.current.value = newState.selected.value;
      }
    }
  };

  _proto.renderOption = function renderOption(option) {
    var value = option.value;

    if (typeof value === 'undefined') {
      value = option.label || option;
    }

    var label = option.label || option.value || option;
    var isSelected = value === this.state.selected.value || value === this.state.selected;
    var optionClass = ("nav-dropdown-option " + (!!option.className ? option.className : '') + " " + (isSelected ? 'is-selected' : '')).trim();
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: value,
      className: optionClass,
      onMouseDown: this.setValue.bind(this, value, label),
      onClick: this.setValue.bind(this, value, label),
      role: "option",
      "aria-selected": isSelected ? 'true' : 'false'
    }, label);
  };

  _proto.buildMenu = function buildMenu() {
    var _this2 = this;

    var options = this.props.options;
    var ops = options.map(function (option) {
      if (option.type === 'group') {
        var groupTitle = /*#__PURE__*/_react["default"].createElement("div", {
          className: "nav-dropdown-title"
        }, option.name);

        var _options = option.items.map(function (item) {
          return _this2.renderOption(item);
        });

        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "nav-dropdown-group",
          key: option.name,
          role: "listbox",
          tabIndex: "-1"
        }, groupTitle, _options);
      } else {
        return _this2.renderOption(option);
      }
    });
    return ops.length ? ops : /*#__PURE__*/_react["default"].createElement("div", {
      className: "nav-dropdown-noresults"
    }, "No options found");
  };

  _proto.handleDocumentClick = function handleDocumentClick(event) {
    if (this.mounted) {
      if (!_reactDom["default"].findDOMNode(this).contains(event.target)) {
        if (this.state.isOpen) {
          this.setState({
            isOpen: false
          });
        }
      }
    }
  };

  _proto.isValueSelected = function isValueSelected() {
    return typeof this.state.selected === 'string' || this.state.selected.value !== '';
  };

  _proto.render = function render() {
    var _this$props = this.props,
        controlClassName = _this$props.controlClassName,
        placeholderClassName = _this$props.placeholderClassName,
        menuClassName = _this$props.menuClassName,
        arrowClassName = _this$props.arrowClassName,
        arrowClosed = _this$props.arrowClosed,
        arrowOpen = _this$props.arrowOpen,
        className = _this$props.className;
    var disabledClass = this.props.disabled ? "nav-dropdown-disabled" : '';
    var placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label;
    var dropdownClass = ("nav-dropdown-root " + (!!className ? className : '') + " " + (this.state.isOpen ? 'is-open' : '')).trim();
    var controlClass = ("nav-dropdown-control " + (!!controlClassName ? controlClassName : '') + " " + (!!disabledClass ? disabledClass : '')).trim();
    var placeholderClass = ("nav-dropdown-placeholder " + (!!placeholderClassName ? placeholderClassName : '') + " " + (this.isValueSelected ? 'is-selected' : '')).trim();
    var menuClass = ("nav-dropdown-menu " + (!!menuClassName ? menuClassName : '') + " ").trim();
    var arrowClass = ("nav-dropdown-arrow " + (!!arrowClassName ? arrowClassName : '') + " ").trim();

    var value = /*#__PURE__*/_react["default"].createElement("div", {
      className: placeholderClass
    }, placeHolderValue);

    var menu = this.state.isOpen ? /*#__PURE__*/_react["default"].createElement("div", {
      className: menuClass,
      "aria-expanded": "true"
    }, this.buildMenu()) : null;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: dropdownClass
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: controlClass,
      ref: this.controlElmRef,
      name: this.props.name,
      "value-prop": this.props['value-prop'],
      onMouseDown: this.handleMouseDown.bind(this),
      onTouchEnd: this.handleMouseDown.bind(this),
      "aria-haspopup": "listbox"
    }, value, /*#__PURE__*/_react["default"].createElement("div", {
      className: "nav-dropdown-arrow-wrapper"
    }, arrowOpen && arrowClosed ? this.state.isOpen ? arrowOpen : arrowClosed : /*#__PURE__*/_react["default"].createElement("span", {
      className: arrowClass
    }))), menu);
  };

  return Dropdown;
}(_react["default"].Component);

var _default = Dropdown;
exports["default"] = _default;