"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SearchFormComponent =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SearchFormComponent, _React$Component);

  function SearchFormComponent() {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.state = {
      keyword: ''
    };
    _this.onTextChange = _this.onTextChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = SearchFormComponent.prototype;

  _proto.onTextChange = function onTextChange(event) {
    this.setState({
      keyword: event.target.value
    });
  };

  _proto.handleSubmit = function handleSubmit(event) {
    event.preventDefault();

    if (event.target) {
      var form = event.target;
      var formControlElms = form.querySelectorAll('[name]');
      var searchData = {};
      formControlElms.forEach(function (elm) {
        var valueProp = elm.getAttribute('value-prop');
        var name = elm.getAttribute('name');

        if (valueProp && name) {
          searchData[name] = elm[valueProp];
        }
      });
      this.props.onSearchSubmit(searchData);
    }
  };

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: "search-form"
    }, _react["default"].createElement("h3", {
      className: "title"
    }, this.props.title), _react["default"].createElement("form", {
      onSubmit: this.handleSubmit
    }, _react["default"].createElement("div", {
      className: "row full-area form-group"
    }, _react["default"].createElement("div", {
      className: "col-sm-12"
    }, _react["default"].createElement("input", {
      type: "text",
      className: "text-input",
      name: "keyword",
      "value-prop": "value",
      placeholder: "Nh\u1EADp t\xEAn b\xE1c s\u0129"
    }))), _react["default"].createElement("div", {
      className: "row filter-area form-group"
    }, this.props.children), _react["default"].createElement("div", {
      className: "row action-area"
    }, _react["default"].createElement("div", {
      className: "col-sm-12"
    }, _react["default"].createElement("button", {
      type: "submit",
      className: "btn btn-primary"
    }, this.props.searchText)))));
  };

  return SearchFormComponent;
}(_react["default"].Component);

exports["default"] = SearchFormComponent;