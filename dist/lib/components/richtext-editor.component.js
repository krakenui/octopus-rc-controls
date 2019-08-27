"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _draftJs = require("draft-js");

var _reactDraftWysiwyg = require("react-draft-wysiwyg");

var _draftjsToHtml = _interopRequireDefault(require("draftjs-to-html"));

var _htmlToDraftjs = _interopRequireDefault(require("html-to-draftjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var RichtextEditorComponent =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(RichtextEditorComponent, _React$Component);

  function RichtextEditorComponent(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.initFromHtml = function (html, encode) {
      if (encode === void 0) {
        encode = true;
      }

      if (encode) {
        html = decodeURI(html);
      }

      var contentBlock = (0, _htmlToDraftjs["default"])(html);

      if (contentBlock) {
        var contentState = _draftJs.ContentState.createFromBlockArray(contentBlock.contentBlocks);

        var editorState = _draftJs.EditorState.createWithContent(contentState);

        _this.setState({
          editorState: editorState
        });
      }
    };

    _this.uploadImageCallBack = function (file) {
      var _self = _assertThisInitialized(_this);

      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.imgur.com/3/image');
        xhr.setRequestHeader('Authorization', "Client-ID " + (_this.props.imgurId ? _this.props.imgurId : '3aae9208fae2a49'));
        var data = new FormData();
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', function () {
          var response = JSON.parse(xhr.responseText);

          if (response.data && response.data.link) {
            _self.quickUploadShow(response.data.link);
          }

          resolve(response);
        });
        xhr.addEventListener('error', function () {
          var error = JSON.parse(xhr.responseText);
          reject(error);
        });
      });
    };

    _this.quickUploadShow = function (url) {
      var elms = document.getElementsByClassName('rdw-image-modal-upload-option-label');

      if (elms && elms.length > 0) {
        var elm = elms.item(0);
        var parentElm = elm.parentElement;
        parentElm.innerHTML = "<img src=\"" + url + "\" alt=\"" + url + "\" class=\"rdw-image-modal-upload-option-image-preview\">";
      }
    };

    _this.onEditorStateChange = function (editorState) {
      _this.setState({
        editorState: editorState
      });
    };

    _this.toHtml = function (encode) {
      if (encode === void 0) {
        encode = true;
      }

      var editorState = _this.state.editorState;
      var html = (0, _draftjsToHtml["default"])((0, _draftJs.convertToRaw)(editorState.getCurrentContent()));

      if (encode) {
        html = encodeURI(html);
      }

      return html;
    };

    _this.onPrimaryClick = function (event) {
      var contentElms = event.target.getElementsByClassName('sc-content');

      if (contentElms && contentElms.length > 0) {
        var contentElm = contentElms.item(0);
        contentElm.click();
      }
    };

    _this.state = {
      editorState: _draftJs.EditorState.createEmpty()
    };

    if (props.defaultContent) {
      _this.initFromHtml(props.defaultContent);
    }

    return _this;
  }

  var _proto = RichtextEditorComponent.prototype;

  _proto.render = function render() {
    var editorState = this.state.editorState;
    return _react["default"].createElement("div", {
      className: "sc-editor",
      onClick: this.onPrimaryClick
    }, _react["default"].createElement("div", {
      className: "content"
    }, _react["default"].createElement(_reactDraftWysiwyg.Editor, {
      editorState: editorState,
      wrapperClassName: "sc-wrapper",
      editorClassName: "sc-content",
      onEditorStateChange: this.onEditorStateChange,
      toolbar: {
        image: {
          uploadCallback: this.uploadImageCallBack,
          alt: {
            present: true,
            mandatory: true
          }
        }
      }
    })), this.props.children && _react["default"].createElement("div", {
      className: "children"
    }, this.props.children));
  };

  return RichtextEditorComponent;
}(_react["default"].Component);

var _default = RichtextEditorComponent;
exports["default"] = _default;