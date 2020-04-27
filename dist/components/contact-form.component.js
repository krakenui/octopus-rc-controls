"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ContactForm = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ContactForm, _React$Component);

  function ContactForm(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      isSubmit: false,
      FullName: '',
      Email: '',
      Phone: '',
      Caption: '',
      Content: '',
      isValidFullName: false,
      isValidEmail: false,
      isValidPhone: false,
      isValidCaption: false,
      isValidContent: false
    };
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = ContactForm.prototype;

  _proto.onInputChange = function onInputChange(event) {
    var target = event.target;

    if (target) {
      var _this$setState;

      var isValid = true;
      var value = target.value;

      if (!value || value.length === 0) {
        isValid = false;
      }

      this.setState((_this$setState = {}, _this$setState[target.name] = value, _this$setState['isValid' + target.name] = isValid, _this$setState));
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "contact-form"
    }, /*#__PURE__*/_react["default"].createElement("h3", null, this.props.contactTitle), /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-md-12"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react["default"].createElement("label", null, "H\u1ECD v\xE0 t\xEAn"), /*#__PURE__*/_react["default"].createElement("input", {
      onChange: function onChange(e) {
        return _this2.onInputChange(e);
      },
      value: this.state.FullName,
      className: "form-control",
      maxLength: "50",
      name: "FullName"
    }), this.state.isSubmit && !this.state.isValidFullName && /*#__PURE__*/_react["default"].createElement("label", {
      className: "error"
    }, "H\u1ECD T\xEAn l\xE0 th\xF4ng tin b\u1EAFt bu\u1ED9c."))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-md-12"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react["default"].createElement("label", null, "Email"), /*#__PURE__*/_react["default"].createElement("input", {
      onChange: function onChange(e) {
        return _this2.onInputChange(e);
      },
      className: "form-control",
      type: "email",
      maxLength: "50",
      name: "Email",
      value: this.state.Email
    }), this.state.isSubmit && !this.state.isValidEmail && /*#__PURE__*/_react["default"].createElement("label", {
      className: "error"
    }, "Email li\xEAn h\u1EC7 l\xE0 th\xF4ng tin b\u1EAFt bu\u1ED9c."))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-md-12"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react["default"].createElement("label", null, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"), /*#__PURE__*/_react["default"].createElement("input", {
      onChange: function onChange(e) {
        return _this2.onInputChange(e);
      },
      value: this.state.Phone,
      className: "form-control",
      maxLength: "20",
      name: "Phone"
    }), this.state.isSubmit && !this.state.isValidPhone && /*#__PURE__*/_react["default"].createElement("label", {
      className: "error"
    }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i l\xE0 th\xF4ng tin b\u1EAFt bu\u1ED9c.")))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-md-12"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react["default"].createElement("label", null, "Ti\xEAu \u0111\u1EC1"), /*#__PURE__*/_react["default"].createElement("input", {
      onChange: function onChange(e) {
        return _this2.onInputChange(e);
      },
      value: this.state.Caption,
      className: "form-control",
      name: "Caption",
      maxLength: "200"
    }), this.state.isSubmit && !this.state.isValidCaption && /*#__PURE__*/_react["default"].createElement("label", {
      className: "error"
    }, "Ti\xEAu \u0111\u1EC1 l\xE0 th\xF4ng tin b\u1EAFt bu\u1ED9c.")))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react["default"].createElement("label", null, "N\u1ED9i dung li\xEAn h\u1EC7"), /*#__PURE__*/_react["default"].createElement("textarea", {
      onChange: function onChange(e) {
        return _this2.onInputChange(e);
      },
      value: this.state.Content,
      className: "form-control",
      rows: "5",
      maxLength: "2000",
      name: "Content"
    }), this.state.isSubmit && !this.state.isValidContent && /*#__PURE__*/_react["default"].createElement("label", {
      className: "error"
    }, "N\u1ED9i dung l\xE0 th\xF4ng tin b\u1EAFt bu\u1ED9c.")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "form-group action"
    }, /*#__PURE__*/_react["default"].createElement("input", {
      onClick: function onClick(e) {
        e.preventDefault();

        _this2.setState({
          isSubmit: true
        });

        var isValid = _this2.state.isValidFullName && _this2.state.isValidEmail && _this2.state.isValidPhone && _this2.state.isValidCaption && _this2.state.isValidContent;
        var data = {
          fullName: _this2.state.FullName,
          email: _this2.state.Email,
          phone: _this2.state.Phone,
          caption: _this2.state.Caption,
          content: _this2.state.Content
        };

        if (!isValid) {
          return;
        }

        _this2.props.onSubmit && _this2.props.onSubmit(e, isValid, data);

        _this2.setState({
          isSubmit: false,
          FullName: '',
          Email: '',
          Phone: '',
          Caption: '',
          Content: '',
          isValidFullName: false,
          isValidEmail: false,
          isValidPhone: false,
          isValidCaption: false,
          isValidContent: false
        });
      },
      type: "submit",
      value: "G\u1EEDi th\xF4ng tin",
      className: "btn btn-primary"
    }))));
  };

  return ContactForm;
}(_react["default"].Component);

var _default = ContactForm;
exports["default"] = _default;