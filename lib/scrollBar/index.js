"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollBar = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./css/index.css");

var ScrollBar = function ScrollBar(props) {
  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      percent = _useState2[0],
      setPercent = _useState2[1];

  (0, _react.useEffect)(function () {
    function Debounce(fn, delay) {
      var time = null;
      return function () {
        var _arguments = arguments,
            _this = this;

        if (time) {
          clearTimeout(time);
        }

        time = setTimeout(function () {
          fn.call.apply(fn, [_this].concat((0, _toConsumableArray2["default"])(_arguments)));
        }, delay);
      };
    }

    var ScrollProcess = document.getElementById('ui-ball-process');
    var ProcessWidth = document.getElementById('progress-div');

    var mouseDownFn = function mouseDownFn(env) {
      var left = env.clientX - ScrollProcess.offsetLeft;
      document.onmousemove = Debounce(function (env) {
        var realMoveLeft = env.clientX - left;

        if (realMoveLeft < 0) {
          realMoveLeft = 0;
        } else if (realMoveLeft > props.width) {
          realMoveLeft = props.width;
        }

        ScrollProcess.style.left = realMoveLeft + 'px';
        ProcessWidth.style.width = realMoveLeft + 'px';

        if (!!props.onchange) {
          props.onchange(Math.round(parseFloat(ProcessWidth.style.width) / parseFloat(props.width) * 100));
        }

        setPercent(Math.round(parseFloat(ProcessWidth.style.width) / parseFloat(props.width) * 100));
      }, 7);

      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    ScrollProcess.addEventListener('mousedown', mouseDownFn);
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "scroll-container",
    style: {
      width: props.width,
      height: props.height + 10
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "scroll-ball",
    style: {
      marginTop: 5,
      width: props.width,
      backgroundColor: props.scrollColor,
      height: props.height,
      borderRadius: 2
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    id: "ui-ball-process",
    style: {
      display: 'block',
      width: 2 * props.height,
      height: 2 * props.height,
      marginTop: -props.height / 2
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    id: "progress-div",
    style: {
      height: props.height,
      backgroundColor: props.processColor
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    id: "percent-span",
    style: {
      left: props.width + 2 * props.height + 10,
      marginTop: -props.height / 2
    }
  }, percent, "%"));
};

exports.ScrollBar = ScrollBar;
ScrollBar.propTypes = {
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  scrollColor: _propTypes["default"].string,
  processColor: _propTypes["default"].string,
  onchange: _propTypes["default"].func
};
ScrollBar.defaultProps = {
  width: 300,
  height: 10,
  scrollColor: '#ebeef5',
  processColor: 'green'
};