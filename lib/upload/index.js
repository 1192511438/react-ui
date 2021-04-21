"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Upload = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

require("./css/index.css");

var Upload = function Upload(props) {
  var uploadInput = (0, _react.useRef)();
  var uploadContainer = (0, _react.useRef)();
  var UploadText = (0, _react.useRef)();

  var UploadClick = function UploadClick(env) {
    var file = env.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
      uploadContainer.current.style.backgroundImage = "url(".concat(event.target.result, ")");
      UploadText.current.innerHTML = null;
      console.log(uploadInput.current.value);

      if (props.callback) {
        props.callback(uploadInput.current.value);
      }
    };

    reader.onprogress = function (e) {
      UploadText.current.style.fontSize = '14px';
      UploadText.current.innerHTML = '正在加载' + "".concat(e.loaded / e.total * 100, "% ");
    };

    reader.readAsDataURL(file);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "upload",
    ref: uploadContainer,
    onClick: function onClick() {
      uploadInput.current.click();
    },
    style: {
      width: props.width,
      height: props.height,
      textAlign: 'center',
      lineHeight: "".concat(props.height, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    ref: UploadText,
    id: "upload-font"
  }, "+"), /*#__PURE__*/_react["default"].createElement("input", {
    onChange: UploadClick,
    ref: uploadInput,
    type: "file",
    style: {
      display: 'none'
    }
  }));
};

exports.Upload = Upload;
Upload.propTypes = {
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  callback: _propTypes["default"].func
};
Upload.defaultProps = {
  width: 100,
  height: 100
};