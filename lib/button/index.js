"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./css/index.css");

var Button = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var type;

  if (props.type == 'small') {
    type = 60;
  } else if (props.type == 'big') {
    type = 200;
  } else if (props.type == 'middle') {
    type = 124;
  } else {
    type = props.type;
  }

  var radius;

  if (props.shape) {
    radius = props.shape === 'round' ? 0 : 5;
  }

  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.onClick,
    id: "button",
    onMouseOut: function onMouseOut(env) {
      env.target.style.backgroundColor = props.color;
    },
    onMouseEnter: function onMouseEnter(env) {
      env.target.style.backgroundColor = '#40a9ff';
    },
    ref: ref,
    style: {
      width: type,
      height: 32,
      backgroundColor: props.color,
      borderRadius: radius
    }
  }, props.children);
});
exports.Button = Button;
Button.propTypes = {
  type: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  shape: _propTypes["default"].string
};
Button.defaultProps = {
  type: 'middle',
  color: "#1890ff",
  shape: 'round'
};