"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

require("./css/index.css");

var _propTypes = _interopRequireWildcard(require("prop-types"));

var Form = function Form(props) {
  var _React$useState = _react["default"].useState(true),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      IsClick = _React$useState2[0],
      setIsClick = _React$useState2[1];

  var Foucs = function Foucs(env) {
    env.target.style.border = '2px solid blue';
  };

  var TextBlur = function TextBlur(env) {
    if (props.usernameRule.test(env.target.value)) {
      env.target.style.border = '2px solid #b7eb8f';
    } else {
      env.target.style.border = '2px solid red';
      warnUSERRef.current.innerHTML = '请输入符合格式账号！';
      setTimeout(function () {
        warnUSERRef.current.innerHTML = null;
        env.target.style.border = '1px solid #d9d9d9';
      }, 3000);
    }
  };

  var PasFocus = function PasFocus() {
    pasDiv.current.style.border = '2px solid blue';
  };

  var PasswordBlur = function PasswordBlur(env) {
    if (props.passwordRule.test(env.target.value)) {
      pasDiv.current.style.border = '2px solid #b7eb8f';
    } else {
      pasDiv.current.style.border = '2px solid red';
      warnPASSRef.current.innerHTML = '请输入符合格式密码！';
      setTimeout(function () {
        warnPASSRef.current.innerHTML = null;
        pasDiv.current.style.border = '1px solid #d9d9d9';
      }, 3000);
    }
  };

  var warnUSERRef = (0, _react.useRef)();
  var warnPASSRef = (0, _react.useRef)();
  var pasDiv = (0, _react.useRef)();
  var pasInput = (0, _react.useRef)();
  var userInput = (0, _react.useRef)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: 230,
      width: 500
    },
    id: "form-ui"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "lyl-nickname-div"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    id: "lyl-ui-nickname-label",
    htmlFor: "input-nickname"
  }, " Username:"), /*#__PURE__*/_react["default"].createElement("input", {
    ref: userInput,
    id: "input-nickname",
    type: "text",
    onFocus: Foucs,
    onBlur: TextBlur
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: warnUSERRef,
    id: "warn-username"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "lyl-nickname-div"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    id: "lyl-password-label",
    htmlFor: "password-input"
  }, "Password:"), /*#__PURE__*/_react["default"].createElement("div", {
    id: "pas-div",
    ref: pasDiv
  }, /*#__PURE__*/_react["default"].createElement("input", {
    ref: pasInput,
    id: "password-input",
    type: "password",
    onFocus: PasFocus,
    onBlur: PasswordBlur
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "eye-svg",
    onClick: function onClick() {
      if (pasInput.current.type === 'text') {
        pasInput.current.type = 'password';
        setIsClick(true);
      } else {
        pasInput.current.type = 'text';
        setIsClick(false);
      }
    }
  }, IsClick ? /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "64 64 896 896",
    focusable: "false",
    width: "20px",
    height: "20px",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"
  })) : /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "64 64 896 896",
    focusable: "false",
    "data-icon": "eye",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    ref: warnPASSRef,
    id: "warn-password"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ui-form-sumbit"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    id: "form-sumbit",
    onClick: props.onSumbit.bind(null, userInput, pasInput)
  }, "\u767B\u5F55"), /*#__PURE__*/_react["default"].createElement("a", {
    href: props.href
  }, "\u5FD8\u8BB0\u5BC6\u7801"))));
};

exports.Form = Form;
Form.propTypes = {
  usernameRule: _propTypes["default"].object,
  passwordRule: _propTypes["default"].object,
  onSumbit: _propTypes["default"].func,
  href: _propTypes["default"].string
};
Form.defaultProps = {
  usernameRule: /^[a-zA-Z0-9_-]{4,16}$/,
  passwordRule: /^(\w){6,20}$/,
  onSumbit: function onSumbit(a, b) {
    console.log(a.current.value, b.current.value);
  },
  href: '#'
};