"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var LEFT_PAGE = "LEFT";
var RIGHT_PAGE = "RIGHT";

var range = function range(from, to, step) {
  if (step === void 0) {
    step = 1;
  }

  var i = from;
  var range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

var Pagination = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Pagination, _React$Component);

  function Pagination(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.gotoPage = function (page) {
      var _this$props$onPageCha = _this.props.onPageChanged,
          onPageChanged = _this$props$onPageCha === void 0 ? function (f) {
        return f;
      } : _this$props$onPageCha;
      var currentPage = Math.max(0, Math.min(page, _this.totalPages));
      var paginationData = {
        currentPage: currentPage,
        totalPages: _this.totalPages,
        pageLimit: _this.pageLimit,
        totalRecords: _this.totalRecords
      };

      _this.setState({
        currentPage: currentPage
      }, function () {
        return onPageChanged(paginationData);
      });
    };

    _this.handleClick = function (page, evt) {
      evt.preventDefault();

      _this.gotoPage(page);
    };

    _this.handleMoveLeft = function (evt) {
      evt.preventDefault();

      _this.gotoPage(_this.state.currentPage - _this.pageNeighbours * 2 - 1);
    };

    _this.handleMoveRight = function (evt) {
      evt.preventDefault();

      _this.gotoPage(_this.state.currentPage + _this.pageNeighbours * 2 + 1);
    };

    _this.fetchPageNumbers = function () {
      var totalPages = _this.totalPages;
      var currentPage = _this.state.currentPage;
      var pageNeighbours = _this.pageNeighbours;
      var totalNumbers = _this.pageNeighbours * 2 + 3;
      var totalBlocks = totalNumbers + 2;

      if (totalPages > totalBlocks) {
        var pages = [];
        var leftBound = currentPage - pageNeighbours;
        var rightBound = currentPage + pageNeighbours;
        var beforeLastPage = totalPages - 1;
        var startPage = leftBound > 2 ? leftBound : 2;
        var endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;
        pages = range(startPage, endPage);
        var pagesCount = pages.length;
        var singleSpillOffset = totalNumbers - pagesCount - 1;
        var leftSpill = startPage > 2;
        var rightSpill = endPage < beforeLastPage;
        var leftSpillPage = LEFT_PAGE;
        var rightSpillPage = RIGHT_PAGE;

        if (leftSpill && !rightSpill) {
          var extraPages = range(startPage - singleSpillOffset, startPage - 1);
          pages = [leftSpillPage].concat(extraPages, pages);
        } else if (!leftSpill && rightSpill) {
          var _extraPages = range(endPage + 1, endPage + singleSpillOffset);

          pages = [].concat(pages, _extraPages, [rightSpillPage]);
        } else if (leftSpill && rightSpill) {
          pages = [leftSpillPage].concat(pages, [rightSpillPage]);
        }

        return [1].concat(pages, [totalPages]);
      }

      return range(1, totalPages);
    };

    var _props$totalRecords = props.totalRecords,
        totalRecords = _props$totalRecords === void 0 ? null : _props$totalRecords,
        _props$pageLimit = props.pageLimit,
        pageLimit = _props$pageLimit === void 0 ? 1 : _props$pageLimit,
        _props$pageNeighbours = props.pageNeighbours,
        _pageNeighbours = _props$pageNeighbours === void 0 ? 1 : _props$pageNeighbours;

    _this.pageLimit = typeof pageLimit === "number" ? pageLimit : 1;
    _this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;
    _this.pageNeighbours = typeof _pageNeighbours === "number" ? Math.max(0, Math.min(_pageNeighbours, 2)) : 1;
    _this.totalPages = Math.ceil(_this.totalRecords / _this.pageLimit);
    _this.state = {
      currentPage: 1
    };
    return _this;
  }

  var _proto = Pagination.prototype;

  _proto.componentWillUpdate = function componentWillUpdate() {
    if (this.props.totalRecords != null) {
      this.totalRecords = this.props.totalRecords;
      this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);
      this.state = {
        currentPage: this.state.currentPage
      };
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    this.gotoPage(1);
  };

  _proto.render = function render() {
    var _this2 = this;

    if (!this.totalRecords) return null;
    if (this.totalPages === 1) return null;
    var currentPage = this.state.currentPage;
    var pages = this.fetchPageNumbers();
    return /*#__PURE__*/_react["default"].createElement("ul", {
      className: "pagination"
    }, pages.map(function (page, index) {
      if (page === LEFT_PAGE) return /*#__PURE__*/_react["default"].createElement("li", {
        key: index,
        className: "page-item"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: "page-link",
        href: "#",
        "aria-label": "Previous",
        onClick: _this2.handleMoveLeft
      }, /*#__PURE__*/_react["default"].createElement("span", {
        "aria-hidden": "true"
      }, "\xAB")));
      if (page === RIGHT_PAGE) return /*#__PURE__*/_react["default"].createElement("li", {
        key: index,
        className: "page-item"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: "page-link",
        href: "#",
        "aria-label": "Next",
        onClick: _this2.handleMoveRight
      }, /*#__PURE__*/_react["default"].createElement("span", {
        "aria-hidden": "true"
      }, "\xBB")));
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: index,
        className: "page-item" + (currentPage === page ? " active" : "")
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: "page-link",
        href: "#",
        onClick: function onClick(e) {
          return _this2.handleClick(page, e);
        }
      }, page));
    }));
  };

  return Pagination;
}(_react["default"].Component);

var _default = Pagination;
exports["default"] = _default;