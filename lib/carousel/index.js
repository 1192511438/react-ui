"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./css/index.css");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Carousel = function Carousel(props) {
  var Div = (0, _react.useRef)();
  var AutoChange = (0, _react.useRef)();
  var NumberArray = new Array(props.methods.length).fill(0).map(function (val, key) {
    return key;
  });

  var _React$useState = _react["default"].useState(1),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      Index = _React$useState2[0],
      setIndex = _React$useState2[1];

  var settimefn = function settimefn() {
    var Carousel = document.getElementById('Carousel');
    var AllI = Carousel.getElementsByTagName('i');

    var _iterator = _createForOfIteratorHelper(AllI),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var val = _step.value;
        val.style.backgroundColor = '#ffffff';
        val.style.width = '20px';
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    setIndex(function (state) {
      if (state == NumberArray.length) {
        AllI[0].style.backgroundColor = 'black';
        AllI[0].style.width = '40px';
        Div.current.style.transform = "translateX(0px)";
        return 1;
      }

      Div.current.style.transform = "translateX(".concat(-props.width * state, "px)");
      AllI[state].style.backgroundColor = 'black';
      AllI[state].style.width = '40px';
      return state + 1;
    });
  };

  var setIkey = function setIkey(key) {
    var Carousel = document.getElementById('Carousel');
    var AllI = Carousel.getElementsByTagName('i');

    var _iterator2 = _createForOfIteratorHelper(AllI),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var val = _step2.value;
        val.style.backgroundColor = '#ffffff';
        val.style.width = '20px';
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    AllI[key].style.width = '40px';
    AllI[key].style.backgroundColor = 'black';
  };

  (0, _react.useEffect)(function () {
    AutoChange.current = setInterval(settimefn, props.time);
    return function () {
      clearInterval(AutoChange.current);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "Carousel",
    style: {
      position: 'relative',
      width: props.width,
      height: props.height,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "all-Carousel",
    ref: Div,
    style: {
      width: props.width * NumberArray.length,
      height: props.height
    }
  }, "  ", props.methods.map(function (val, key) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: key,
      style: {
        textAlign: 'center',
        display: 'inline-block',
        width: props.width,
        height: props.height,
        verticalAlign: 'middle',
        overflow: 'hidden'
      }
    }, val);
  })), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      display: 'block',
      width: '100%',
      height: 5,
      textAlign: 'center',
      position: 'absolute',
      top: '80%'
    }
  }, NumberArray.map(function (_, key) {
    if (key === 0) {
      return /*#__PURE__*/_react["default"].createElement("i", {
        key: key,
        id: "Carousel-button",
        onMouseEnter: function onMouseEnter(env) {
          setIkey(key);
          Div.current.style.transform = "translateX(".concat(-key * props.width, "px)");
          setIndex(function () {
            return key + 1;
          });
          clearInterval(AutoChange.current);
          AutoChange.current = setInterval(settimefn, props.time);
        },
        onMouseLeave: function onMouseLeave() {},
        style: {
          display: 'inline-block',
          width: 40,
          height: 5,
          borderRadius: 2,
          backgroundColor: 'black',
          marginRight: 5,
          cursor: 'pointer'
        }
      });
    }

    return /*#__PURE__*/_react["default"].createElement("i", {
      key: key,
      id: "Carousel-button",
      onMouseEnter: function onMouseEnter(env) {
        setIkey(key);
        Div.current.style.transform = "translateX(".concat(-key * props.width, "px)");
        setIndex(function () {
          return key + 1;
        });
        clearInterval(AutoChange.current);
        AutoChange.current = setInterval(settimefn, props.time);
      },
      onMouseLeave: function onMouseLeave() {},
      style: {
        display: 'inline-block',
        width: 20,
        height: 5,
        borderRadius: 2,
        backgroundColor: '#ffffff',
        marginRight: 5,
        cursor: 'pointer'
      }
    });
  })));
};

exports.Carousel = Carousel;
Carousel.propTypes = {
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  methods: _propTypes["default"].array,
  time: _propTypes["default"].number
};
Carousel.defaultProps = {
  width: 400,
  height: 160,
  time: 2000,
  methods: [1, 2, 3, 4, 5, 6]
};