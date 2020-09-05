(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timetable = exports.CounterYandex = exports.NamedniYear = exports.EventsList = exports.EventItem = exports.Footer = exports.Menu = undefined;

var _counter = __webpack_require__(17);

Object.defineProperty(exports, 'CounterYandex', {
  enumerable: true,
  get: function get() {
    return _counter.CounterYandex;
  }
});

var _menu = __webpack_require__(19);

var _menu2 = _interopRequireDefault(_menu);

var _footer = __webpack_require__(24);

var _footer2 = _interopRequireDefault(_footer);

var _eventItem = __webpack_require__(26);

var _eventItem2 = _interopRequireDefault(_eventItem);

var _eventsList = __webpack_require__(28);

var _eventsList2 = _interopRequireDefault(_eventsList);

var _namedniYear = __webpack_require__(30);

var _namedniYear2 = _interopRequireDefault(_namedniYear);

var _timetable = __webpack_require__(32);

var _timetable2 = _interopRequireDefault(_timetable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Menu = _menu2.default;
exports.Footer = _footer2.default;
exports.EventItem = _eventItem2.default;
exports.EventsList = _eventsList2.default;
exports.NamedniYear = _namedniYear2.default;
exports.Timetable = _timetable2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(5);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
var _default = _App2.default;

// Your top level component

exports.default = _default;

// Render your app

if (typeof document !== 'undefined') {
  var render = function render(Comp) {
    _reactDom2.default.hydrate(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/index.js');
}();

;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactStaticRoutes = __webpack_require__(7);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _components = __webpack_require__(1);

__webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      { className: 'app' },
      _react2.default.createElement(
        'div',
        { className: 'app__menu' },
        _react2.default.createElement(_components.Menu, null)
      ),
      _react2.default.createElement(
        'div',
        { className: 'app__content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      ),
      _react2.default.createElement(
        'div',
        { className: 'app__footer' },
        _react2.default.createElement(_components.Footer, null)
      ),
      _react2.default.createElement(_components.CounterYandex, null)
    )
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/App.js');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

var _Home = __webpack_require__(9);

var _Home2 = _interopRequireDefault(_Home);

var _Geo = __webpack_require__(11);

var _Geo2 = _interopRequireDefault(_Geo);

var _Photos = __webpack_require__(12);

var _Photos2 = _interopRequireDefault(_Photos);

var _Memories = __webpack_require__(14);

var _Memories2 = _interopRequireDefault(_Memories);

var _Bus = __webpack_require__(35);

var _Bus2 = _interopRequireDefault(_Bus);

var _NotFound = __webpack_require__(38);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var templateMap = {
  t_0: _Home2.default,
  t_1: _Geo2.default,
  t_2: _Photos2.default,
  t_3: _Memories2.default,
  t_4: _Bus2.default,
  t_5: _NotFound2.default
};
var templateTree = { c: { "404": { t: "t_5" }, "/": { t: "t_0" }, "geo": { t: "t_1" }, "photos": { t: "t_2" }, "memories": { t: "t_3" }, "timetables": { c: { "bus": { t: "t_4" } } } } };

var getTemplateForPath = function getTemplateForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Template = getTemplateForPath(props.location.pathname);
          if (!Template) {
            Template = getTemplateForPath('404');
          }
          return Template && _react2.default.createElement(Template, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

var _default = Routes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(templateMap, 'templateMap', '/home/travis/build/krechi-sila/krechi-sila.github.io/dist/react-static-routes.js');

  __REACT_HOT_LOADER__.register(templateTree, 'templateTree', '/home/travis/build/krechi-sila/krechi-sila.github.io/dist/react-static-routes.js');

  __REACT_HOT_LOADER__.register(getTemplateForPath, 'getTemplateForPath', '/home/travis/build/krechi-sila/krechi-sila.github.io/dist/react-static-routes.js');

  __REACT_HOT_LOADER__.register(Routes, 'Routes', '/home/travis/build/krechi-sila/krechi-sila.github.io/dist/react-static-routes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/travis/build/krechi-sila/krechi-sila.github.io/dist/react-static-routes.js');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var script = document.createElement('script');
      script.src = '//vk.com/js/api/openapi.js?72';
      script.onload = function () {
        if (window.VK) {
          VK.Widgets.Group('vk_groups', {
            mode: 2,
            wide: 1,
            width: '550',
            height: '400'
          }, 239849);
        }
      };

      document.body.appendChild(script);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'page page_type_home' },
        _react2.default.createElement(
          'h1',
          { className: 'page__header' },
          '\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435'
        ),
        _react2.default.createElement(
          'div',
          { className: 'page__content' },
          _react2.default.createElement(
            'p',
            null,
            '\u0412\u0441\u0435\u043C \u043F\u0440\u0438\u0432\u0435\u0442!'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u042D\u0442\u043E \u2014 \u043D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u0432 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u043D\u0430\u0448\u0435\u0433\u043E \u043B\u044E\u0431\u0438\u043C\u043E\u0433\u043E \u0430\u0432\u0438\u0430\u0433\u043E\u0440\u043E\u0434\u043E\u043A\u0430 \u041A\u0440\u0435\u0447\u0435\u0432\u0438\u0446\u044B (\u0434\u043B\u044F \u0434\u0440\u0443\u0437\u0435\u0439 \u043E\u043D \u043F\u0440\u043E\u0441\u0442\u043E \u2014 \u041A\u0440\u0435\u0447\u0438).'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u0418\u0434\u0435\u044F \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0430\u0439\u0442 \u043E \u041A\u0440\u0435\u0447\u0430\u0445 \u043F\u0440\u0438\u0448\u043B\u0430 \u043A \u043D\u0430\u043C \u043D\u0435 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E. \u041A\u0430\u043A-\u0442\u043E \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043A\u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043B\u0430\u0441\u044C \u0438\u043D\u0444\u0430 \u043F\u0440\u043E \u0440\u043E\u0434\u043D\u043E\u0439 \u0413\u043E\u0440\u043E\u0434\u043E\u043A, \u043D \u043E \u0443\u0442\u043E\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0438\u0441\u043A\u0438 \u043F\u043E \u0432\u0441\u0435\u043C\u0438\u0440\u043D\u043E\u0439 \u043D\u0438 \u043A \u0447\u0435\u043C\u0443 \u043D\u0435 \u043F\u0440\u0438\u0432\u0435\u043B\u0438. \u041D\u0430\u043C \u044D\u0442\u043E \u043F\u043E\u043A\u0430\u0437\u0430\u043B\u0430\u0441\u044C \u043D\u0435\u0441\u043F\u0440\u0430\u0432\u0435\u0434\u043B\u0438\u0432\u044B\u043C \u2014 \u0443\u043C\u0430\u043B\u0447\u0438\u0432\u0430\u0442\u044C \u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0437 \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u0435\u0439\u0448\u0438\u0445 \u043C\u0435\u0441\u0442 \u043D\u0430 \u0417\u0435\u043C\u043B\u0435 \u2014 \u041A\u0440\u0435\u0447\u0435\u0432\u0438\u0446\u0430\u0445. \u042D\u0442\u043E \u0431\u044B\u043B \u043F\u043E\u0432\u043E\u0434. \u041D\u0443 \u0430 \u043A\u043E\u043B\u0438 \u0435\u0441\u0442\u044C \u043F\u043E\u0432\u043E\u0434... \u0433\u0440\u0435\u0445 \u043D\u0435 \u0432\u044B\u043F\u0438\u0442\u044C, \u0442\u043E \u0435\u0441\u0442\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0430\u0439\u0442. \u0412\u043E\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0438 \u0432\u0441\u0435 \u0432\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435.'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u0422\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0438 \u041A\u041F\u041F \u0432\u044B \u0443\u0436\u0435 \u043F\u0440\u043E\u0448\u043B\u0438. \u0422\u0435\u043F\u0435\u0440\u044C \u0431\u0443\u0434\u044C\u0442\u0435 \u0441\u043C\u0435\u043B\u0435\u0435 \u2014 \u0438 \u0432\u043F\u0435\u0440\u0435\u0434 \u043F\u043E \u041A\u0440\u0435\u0447\u0430\u043C!!!'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'vkVidget', style: { width: '100%' } },
          _react2.default.createElement('div', { id: 'vk_groups', style: { width: '100%' } })
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

var _default = Home;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Home, 'Home', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/routes/Home/Home.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/routes/Home/Home.jsx');
}();

;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Geo = function (_Component) {
  _inherits(Geo, _Component);

  function Geo() {
    _classCallCheck(this, Geo);

    return _possibleConstructorReturn(this, (Geo.__proto__ || Object.getPrototypeOf(Geo)).apply(this, arguments));
  }

  _createClass(Geo, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "page page_type_geo" },
        _react2.default.createElement(
          "h1",
          { className: "page__header" },
          "\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F"
        ),
        _react2.default.createElement(
          "div",
          { className: "page__content" },
          _react2.default.createElement(
            "p",
            null,
            "\xAB\u041A\u0440\u0435\u0447\u0435\u0432\u0438\u0446\u044B \u2014 \u043F\u043E\u0441\u0451\u043B\u043E\u043A \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0433\u043E \u0442\u0438\u043F\u0430 \u0432 \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0420\u0421\u0424\u0421\u0420. \u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u043D\u0430 \u0440. \u0412\u043E\u043B\u0445\u043E\u0432, \u0432 15 \u043A\u043C \u043A \u0421. \u043E\u0442 \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434\u0430. \u0416\u0438\u0442\u0435\u043B\u0438 \u043F\u043E\u0441\u0451\u043B\u043A\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043D\u0430 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F\u0445 \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434\u0430.\xBB \u2014 \u0442\u0430\u043A \u043E\u0431 \u044D\u0442\u043E\u043C \u0441\u043E\u043E\u0431\u0449\u0430\u0435\u0442 \u0421\u043E\u0432\u0435\u0442\u0441\u043A\u0430\u044F \u042D\u043D\u0446\u0438\u043A\u043B\u043E\u043F\u0435\u0434\u0438\u044F."
          ),
          _react2.default.createElement(
            "p",
            null,
            "\u0412\u043E\u0442 \u0443\u0436\u0435 \u043D\u0435 \u043F\u0435\u0440\u0432\u044B\u0439 \u0434\u0435\u0441\u044F\u0442\u043E\u043A \u043B\u0435\u0442 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0420\u0421\u0424\u0421\u0420, \u0438 \u0432 \u041A\u0440\u0435\u0447\u0430\u0445 \u0442\u043E\u0436\u0435 \u0441 \u0442\u0435\u0445 \u043F\u043E\u0440 \u043C\u043D\u043E\u0433\u043E\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u043E\u0441\u044C. \u0416\u0430\u043B\u044C, \u043D\u0435 \u0432 \u043B\u0443\u0447\u0448\u0443\u044E \u0441\u0442\u043E\u0440\u043E\u043D\u0443. \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043D\u043E\u0435 \u0434\u043B\u044F \u0432\u0441\u0435\u0439 \u0420\u043E\u0441\u0441\u0438\u0438 \u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u2014 \u0440\u0430\u0437\u0440\u0443\u0445\u0430, \u043D\u0435 \u043E\u0431\u043E\u0448\u043B\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u043E\u0439 \u0438 \u043D\u0430\u0448 \u0433\u043E\u0440\u043E\u0434\u043E\u043A. \u041E\u0431\u0432\u0435\u0442\u0448\u0430\u043B\u0438 \u043C\u043D\u043E\u0433\u0438\u0435 \u0437\u0434\u0430\u043D\u0438\u044F, \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u0437 \u043D\u0438\u0445 \u0432\u043E\u043E\u0431\u0449\u0435 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043B\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C, \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u0440\u043E\u0433 \u043F\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u043B\u0438\u0441\u044C \u0432 \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F. \u042F\u0431\u043B\u043E\u043D\u0435\u0432\u044B\u0439 \u0441\u0430\u0434 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0433\u043E\u0440\u043E\u0434\u043A\u0430 \u0431\u0435\u0437 \u0434\u043E\u043B\u0436\u043D\u043E\u0433\u043E \u0443\u0445\u043E\u0434\u0430 \u043E\u0434\u0438\u0447\u0430\u043B, \u0434\u0430 \u0438 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u043E\u0442 \u043D\u0435\u0433\u043E \u043F\u0430\u0440\u0430 \u0434\u0435\u0440\u0435\u0432\u0446\u0435\u0432."
          ),
          _react2.default.createElement(
            "p",
            null,
            "\u041D\u043E \u0432\u0441\u0435 \u0436\u0435, \u041A\u0440\u0435\u0447\u0435\u0432\u0438\u0446\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u043F\u043E-\u043F\u0440\u0435\u0436\u043D\u0435\u043C\u0443 \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u043C \u0438 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u043C \u043C\u0435\u0441\u0442\u043E\u043C, \u0441 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u043E\u0439 \u0441\u043A\u043E\u0440\u0435\u0435 \u0441\u0435\u043B\u0430, \u043D\u0435\u0436\u0435\u043B\u0438 \u0433\u043E\u0440\u043E\u0434\u0430. \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0432\u0441\u0435 \u0432\u0438\u0434\u044B \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430, \u043A\u0440\u043E\u043C\u0435 \u043F\u043E\u0434\u0437\u0435\u043C\u043D\u043E\u0433\u043E \u2014 \u0432\u043E\u0434\u043D\u044B\u0439, \u0436\u0435\u043B\u0435\u0437\u043D\u043E\u0434\u043E\u0440\u043E\u0436\u043D\u044B\u0439, \u0430\u0432\u0438\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439, \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439."
          ),
          _react2.default.createElement(
            "p",
            null,
            "\u0412 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0435, \u0442\u0435 10\u201315 \u043A\u043C, \u0447\u0442\u043E \u043E\u0442\u0434\u0435\u043B\u044F\u044E\u0442 \u041A\u0440\u0435\u0447\u0435\u0432\u0438\u0446\u044B \u043E\u0442 \u0412\u0435\u043B\u0438\u043A\u043E\u0433\u043E \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434\u0430 \u043D\u0435 \u0432\u044B\u0437\u044B\u0432\u0430\u044E\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043E\u0442\u043B\u0438\u0447\u0438\u0439 \u0432 \u043F\u0440\u0438\u0440\u043E\u0434\u0435 \u043C\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u0438. \u0422\u0430\u043A \u0447\u0442\u043E \u0432\u0441\u0435, \u0447\u0442\u043E \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u043A \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434\u0443 \u0432\u0435\u0440\u043D\u043E \u0438 \u0434\u043B\u044F \u041A\u0440\u0435\u0447\u0435\u0432\u0438\u0446, \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u043D\u044B\u0445 \u0440\u0430\u0437\u043B\u0438\u0447\u0438\u0439."
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
              "a",
              { href: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9_%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4#%D0%93%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F" },
              "\u041F\u0440\u0438\u0440\u043E\u0434\u0430 \u0412\u0435\u043B\u0438\u043A\u043E\u0433\u043E \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0412\u0438\u043A\u0438\u043F\u0435\u0434\u0438\u044F"
            ),
            "."
          )
        )
      );
    }
  }]);

  return Geo;
}(_react.Component);

var _default = Geo;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Geo, "Geo", "/home/travis/build/krechi-sila/krechi-sila.github.io/src/routes/Geo/Geo.jsx");

  __REACT_HOT_LOADER__.register(_default, "default", "/home/travis/build/krechi-sila/krechi-sila.github.io/src/routes/Geo/Geo.jsx");
}();

;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Photos = function (_Component) {
  _inherits(Photos, _Component);

  function Photos() {
    _classCallCheck(this, Photos);

    return _possibleConstructorReturn(this, (Photos.__proto__ || Object.getPrototypeOf(Photos)).apply(this, arguments));
  }

  _createClass(Photos, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'page page_type_photos' },
        _react2.default.createElement(
          'h1',
          { className: 'page__header' },
          '\u0424\u043E\u0442\u043E\u0430\u043B\u044C\u0431\u043E\u043C\u044B'
        ),
        _react2.default.createElement(
          'div',
          { className: 'page__content' },
          [{
            link: 'https://mikhail.krivyy.com/tag/кречевицы/',
            title: 'Заметки Михаила Кривых о Кречевицах'
          }, {
            link: 'https://110vtap.ucoz.ru/index/istorija_v_fotografijakh/0-14',
            title: '110 ВОЕННО-ТРАНСПОРТНЫЙ АВИАЦИОННЫЙ ПОЛК',
            about: 'Очень много фотографий разных эпох военной жизни Кречевиц.'
          }, {
            link: 'https://fotki.yandex.ru/users/nwb282/album/23269/',
            title: 'Кречевицы, 20.01.2008'
          }, {
            link: 'https://fotki.yandex.ru/users/nwb282/album/10559/',
            title: 'Кречевицы, 22.10.2007 — 7.08.2008'
          }, {
            link: 'https://fotki.yandex.ru/users/nwb282/album/37043/',
            title: 'Кречевицы, 2008, снег'
          }, {
            link: 'https://vk.com/albums-239849',
            title: 'Кречевицы, фотографии Вконтакте-группы'
          }].map(function (item, index) {
            return _react2.default.createElement(
              'div',
              { className: 'photo-item', key: index },
              _react2.default.createElement(
                'a',
                { className: 'photo-item__link', href: item.link },
                item.title
              ),
              item.about && _react2.default.createElement(
                'div',
                { className: 'photo-item__about' },
                item.about
              )
            );
          })
        )
      );
    }
  }]);

  return Photos;
}(_react.Component);

var _default = Photos;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Photos, 'Photos', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/routes/Photos/Photos.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/routes/Photos/Photos.jsx');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _index = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Memories = function (_Component) {
  _inherits(Memories, _Component);

  function Memories() {
    _classCallCheck(this, Memories);

    return _possibleConstructorReturn(this, (Memories.__proto__ || Object.getPrototypeOf(Memories)).apply(this, arguments));
  }

  _createClass(Memories, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'page page_type_memories' },
        _react2.default.createElement(
          'h1',
          { className: 'page__header' },
          '\u0418\u0441\u0442\u043E\u0440\u0438\u044F'
        ),
        _react2.default.createElement(_index.Namedni, null)
      );
    }
  }]);

  return Memories;
}(_react.Component);

var _default = Memories;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Memories, 'Memories', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/routes/Memories/Memories.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/routes/Memories/Memories.jsx');
}();

;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Namedni = undefined;

var _namedni = __webpack_require__(16);

var _namedni2 = _interopRequireDefault(_namedni);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Namedni = _namedni2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Namedni = function (_Component) {
  _inherits(Namedni, _Component);

  function Namedni() {
    _classCallCheck(this, Namedni);

    return _possibleConstructorReturn(this, (Namedni.__proto__ || Object.getPrototypeOf(Namedni)).apply(this, arguments));
  }

  _createClass(Namedni, [{
    key: 'render',
    value: function render() {
      var events = [{
        date: new Date('2009').getTime(),
        title: '110 Военно-транспортный авиационный полк расформирован',
        text: 'В связи с проводимыми мероприятиями по переходу на перспективный облик, возникшей необходимостью - 110 ' + 'Военно-транспортный авиационный полк был расформирован 14 октября 2009 года.'
      }, {
        date: new Date('1966').getTime(),
        title: 'Сформирован 110 Военно-транспортный авиационный полк',
        text: '110 \u0412\u043E\u0435\u043D\u043D\u043E-\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0439 \u0430\u0432\u0438\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043F\u043E\u043B\u043A \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D \u0432\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432 \u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0428\u0442\u0430\u0431\u0430 \u2116 \u041E\u0420\u0413/9/110816 \u043E\u0442 21 \u0430\u043F\u0440\u0435\u043B\u044F 1966 \u0433\u043E\u0434\u0430, \u2116 86050 \u043E\u0442 26 \u043C\u0430\u044F 1966 \u0433\u043E\u0434\u0430. \n        \u0413\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0428\u0442\u0430\u0431\u0430 \u0412\u0412\u0421 \u2116 627135 \u043E\u0442 30 \u043C\u0430\u044F 1966 \u0433\u043E\u0434\u0430 \u0438 \u041A\u043E\u043C\u0430\u043D\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0412\u043E\u0435\u043D\u043D\u043E-\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439 \u0430\u0432\u0438\u0430\u0446\u0438\u0435\u0439 \u0412\u0412\u0421 \u2116 682154 \u043E\u0442 6 \u0438\u044E\u043D\u044F 1966 \u0433\u043E\u0434\u0430. \n        \u0424\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0447\u0430\u0441\u0442\u0438 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u043E\u0441\u044C \u0432 \u043D\u043E\u044F\u0431\u0440\u0435 1966 \u0433\u043E\u0434\u0430 \u0432 \u043F\u043E\u0441\u0435\u043B\u043A\u0435 \u041A\u0440\u0435\u0447\u0435\u0432\u0438\u0446\u044B \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438. \u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043B \u0447\u0430\u0441\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u0438\u0440 110 \u0412\u043E\u0435\u043D\u043D\u043E-\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0430\u0432\u0438\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u043A\u0430 \u043F\u043E\u043B\u043A\u043E\u0432\u043D\u0438\u043A \u0418\u0412\u0410\u041D\u041E\u0412 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440 \u0422\u0438\u0445\u043E\u043D\u043E\u0432\u0438\u0447.'
      }, {
        date: new Date('2004').getTime(),
        title: 'Кречевицы стали микрорайном Великого Новгорода',
        text: '\u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u043D\u043E\u0439 \u0414\u0443\u043C\u044B 28 \u0430\u043F\u0440\u0435\u043B\u044F 2004 \u0433\u043E\u0434\u0430 \u2116 668-III \u041E\u0414 \u043F\u043E\u0441\u0435\u043B\u043E\u043A \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0433\u043E \u0442\u0438\u043F\u0430 \n\u041A\u0440\u0435\u0447\u0435\u0432\u0438\u0446\u044B, \u0431\u044B\u043B \u0443\u043F\u0440\u0430\u0437\u0434\u043D\u0451\u043D, \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u043E-\u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0435\u0434\u0438\u043D\u0438\u0446\u0430 \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438.\n\u0420\u0435\u0448\u0435\u043D\u0438\u0435\u043C \u0414\u0443\u043C\u044B \u0412\u0435\u043B\u0438\u043A\u043E\u0433\u043E \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434\u0430 21 \u043C\u0430\u044F 2004 \u0433\u043E\u0434\u0430 \u2116 728 \u0431\u044B\u043B \u0441\u043E\u0437\u0434\u0430\u043D \u043C\u0438\u043A\u0440\u043E\u0440\u0430\u0439\u043E\u043D \u041A\u0440\u0435\u0447\u0435\u0432\u0438\u0446\u044B'
      }, {
        date: new Date('1788').getTime(),
        title: 'Кривцовичи переименовали в Кречевицы',
        text: 'Кривцовичи переименовали в Кречевицы и далее название не менялось'
      }, {
        date: new Date('1976').getTime(),
        title: 'Решено перенести гражданский аэропорт на военный аэродром Кречевицы',
        text: 'После авиакатастрофы 22 октября 1975 года на проспекте Карла Маркса в Новгороде с самолётом Як-40'
      }, {
        date: new Date('1926').getTime(),
        title: 'Разместился аэродром и гарнизон для летных частей Красной Армии'
      }, {
        date: new Date('1914').getTime(),
        title: 'Проходил службу российский поэт Николай Гумилёв',
        text: 'В августе 1914 года, когда в Гвардейском кавалерийском запас́ном полку проходил службу российский поэт Николай Гумилёв. К нему в Кречевицкие казармы приезжала его жена — поэтесса Анна Ахматова. ' + 'Этому событию посвящено стихотворение «Пустых небес прозрачное стекло».',
        photos: ['akhmatova_1914.png']
      }, {
        date: new Date('1500').getTime(),
        title: 'Первое упоминание в Писцовой книгой Водской пятины Земли Новгородской',
        text: 'Кривцовичи Ивановского Переездовского погосту. Назвались "деревня Кривцовичи Ивановского Переездовского погосту." Впоследствии название неоднократно менялось.',
        photos: ['krechevitzy_1500_year.png']
      }];

      var years = {};

      events.forEach(function (event) {
        var year = new Date(event.date).getFullYear();

        if (years[year]) {
          years[year].events.push(event);
        } else {
          years[year] = {
            events: [event]
          };
        }
      });

      return _react2.default.createElement(
        'div',
        { className: 'namedni' },
        Object.keys(years).reverse().map(function (yearDataKey, index) {
          return _react2.default.createElement(_components.NamedniYear, {
            key: index,
            year: yearDataKey,
            yearData: years[yearDataKey]
          });
        })
      );
    }
  }]);

  return Namedni;
}(_react.Component);

var _default = Namedni;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Namedni, 'Namedni', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/containers/namedni/namedni.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/containers/namedni/namedni.jsx');
}();

;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CounterYandex = undefined;

var _counter_yandex = __webpack_require__(18);

var _counter_yandex2 = _interopRequireDefault(_counter_yandex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CounterYandex = _counter_yandex2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterYandex = function (_Component) {
  _inherits(CounterYandex, _Component);

  function CounterYandex() {
    _classCallCheck(this, CounterYandex);

    return _possibleConstructorReturn(this, (CounterYandex.__proto__ || Object.getPrototypeOf(CounterYandex)).apply(this, arguments));
  }

  _createClass(CounterYandex, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var script = document.createElement('script');
      script.src = '//mc.yandex.ru/metrika/watch.js';
      script.onload = function (e) {
        try {
          window.yaCounter414633 = new window.Ya.Metrika(414633);
        } catch (e) {
          console.log('e: ', e);
        }
      };

      document.body.appendChild(script);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'noscript',
        null,
        _react2.default.createElement(
          'div',
          { style: { position: 'absolute' } },
          _react2.default.createElement('img', { src: '//mc.yandex.ru/watch/414633', alt: '' })
        )
      );
    }
  }]);

  return CounterYandex;
}(_react.Component);

var _default = CounterYandex;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CounterYandex, 'CounterYandex', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/counter/counter_yandex.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/counter/counter_yandex.jsx');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

__webpack_require__(20);

var _item = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  to: '/',
  title: 'Главная'
}, {
  to: '/geo',
  title: 'География'
}, {
  to: '/photos',
  title: 'Фото'
}, {
  to: '/memories',
  title: 'Истории'
}, {
  to: '/timetables/bus',
  title: '101 автобус'
}];

var Menu = function Menu(props) {
  return _react2.default.createElement(
    'nav',
    { className: 'menu' },
    items.map(function (item) {
      return _react2.default.createElement(_item.MenuItem, { key: item.title, to: item.to, title: item.title });
    })
  );
};

var _default = Menu;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(items, 'items', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/menu/menu.jsx');

  __REACT_HOT_LOADER__.register(Menu, 'Menu', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/menu/menu.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/menu/menu.jsx');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu__item = __webpack_require__(22);

Object.defineProperty(exports, 'MenuItem', {
  enumerable: true,
  get: function get() {
    return _menu__item.MenuItem;
  }
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = function MenuItem(_ref) {
  var to = _ref.to,
      title = _ref.title,
      icon = _ref.icon;

  return _react2.default.createElement(
    'span',
    { className: 'menu__item' },
    icon && _react2.default.createElement(
      'span',
      { className: 'menu__item-icon' },
      icon
    ),
    _react2.default.createElement(
      _reactStatic.Link,
      { className: 'menu__item-link', to: to },
      title
    )
  );
};

exports.MenuItem = MenuItem;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MenuItem, 'MenuItem', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/menu/__item/menu__item.jsx');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  return _react2.default.createElement(
    'footer',
    { className: 'footer' },
    _react2.default.createElement(
      'span',
      { className: 'copyright footer__item' },
      '2003 \u2014 2017, ',
      _react2.default.createElement(
        'a',
        { href: '//metrika.yandex.ru/stat/?id=414633' },
        '\u041A\u0440\u0435\u0447\u0435\u0432\u0438\u0446\u044B \u0432 \u0441\u0435\u0442\u0438'
      )
    ),
    _react2.default.createElement(
      'span',
      { className: 'feedback footer__item' },
      '\u041F\u0438\u0448\u0438\u0442\u0435: ',
      _react2.default.createElement(
        'a',
        { href: 'mailto:krechi-sila@yandex.ru' },
        'krechi-sila@yandex.ru'
      )
    )
  );
};

var _default = Footer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Footer, 'Footer', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/footer/footer.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/footer/footer.jsx');
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventItem = function EventItem(_ref) {
  var event = _ref.event;


  return _react2.default.createElement(
    'div',
    { className: 'event-item' },
    _react2.default.createElement(
      'div',
      { className: 'event-item__title' },
      event.title
    ),
    _react2.default.createElement(
      'div',
      { className: 'event-item__content' },
      _react2.default.createElement(
        'div',
        { className: 'event-item__text' },
        event.text
      ),
      _react2.default.createElement(
        'div',
        { className: 'event-item__photos' },
        event.photos && event.photos.map(function (photo) {
          return _react2.default.createElement('img', { key: photo, className: 'event-photo',
            src: '/photos/memories/' + photo });
        })
      )
    )
  );
};

var _default = EventItem;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EventItem, 'EventItem', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/event-item/event-item.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/event-item/event-item.jsx');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(1);

__webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventsList = function EventsList(props) {
  return _react2.default.createElement(
    'ul',
    { className: 'event-list' },
    props.events.map(function (event, index) {
      return _react2.default.createElement(
        'li',
        {
          key: index,
          className: 'event-list__item'
        },
        _react2.default.createElement(_components.EventItem, { event: event
        })
      );
    })
  );
};

EventsList.defaultProps = {
  events: [{
    title: 'title'
  }]
};

var _default = EventsList;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EventsList, 'EventsList', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/events-list/events-list.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/events-list/events-list.jsx');
}();

;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(1);

__webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NamedniYear = function NamedniYear(props) {
  return _react2.default.createElement(
    'div',
    { className: 'namedni-year' },
    _react2.default.createElement(
      'h1',
      { className: 'namedni-year__header' },
      props.year
    ),
    _react2.default.createElement(
      'div',
      { className: 'namedni-year__events' },
      _react2.default.createElement(_components.EventsList, { events: props.yearData.events })
    )
  );
};

NamedniYear.defaultProps = {
  yearData: {
    events: [{
      date: 'date',
      title: 'title',
      text: 'text',
      photos: []
    }],
    year: '20!8'
  }
};

var _default = NamedniYear;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NamedniYear, 'NamedniYear', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/namedni-year/namedni-year.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/namedni-year/namedni-year.jsx');
}();

;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(33);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BusStop = function BusStop(_ref) {
  var currentHour = _ref.currentHour,
      name = _ref.name,
      title = _ref.title,
      center = _ref.center,
      departure = _ref.departure;


  return _react2.default.createElement(
    'div',
    { className: 'bus-stop' },
    _react2.default.createElement(
      'h2',
      { className: 'bus-stop__name', title: name },
      title
    ),
    _react2.default.createElement(
      'div',
      { className: 'bus-stop__times' },
      _react2.default.createElement(
        'div',
        { className: 'bus-stop__time bus-stop__time_departure' },
        _react2.default.createElement(
          'h3',
          { className: 'bus-stop__direction' },
          '\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435'
        ),
        Object.keys(departure).map(function (hour, index) {
          var numericHour = parseInt(hour, 10);
          var nextHourCount = 3;
          var isTimeCurrentAndNext = numericHour >= currentHour && numericHour < currentHour + nextHourCount;

          var displayedHour = hour === '24' ? 0 : hour;

          return _react2.default.createElement(
            'div',
            {
              key: index,
              className: 'time ' + (isTimeCurrentAndNext ? 'time_available' : '') },
            _react2.default.createElement(
              'div',
              { className: 'time__hour' },
              displayedHour
            ),
            _react2.default.createElement(
              'div',
              { className: 'time__minutes' },
              departure[hour].map(function (minute, index) {
                var displayedMinute = minute > 9 ? minute : '0' + minute;

                return _react2.default.createElement(
                  'div',
                  {
                    key: index,
                    className: 'time__minute'
                  },
                  displayedMinute
                );
              })
            )
          );
        })
      )
    )
  );
};

var Timetable = function (_Component) {
  _inherits(Timetable, _Component);

  function Timetable(props) {
    _classCallCheck(this, Timetable);

    var _this = _possibleConstructorReturn(this, (Timetable.__proto__ || Object.getPrototypeOf(Timetable)).call(this, props));

    _this.state = {
      currentHour: null,
      selectedStop: 0
    };

    _this.getCurrentHourInterval = null;
    return _this;
  }

  _createClass(Timetable, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.getCurrentHourInterval);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = this.props.data;

      return _react2.default.createElement(
        'div',
        { className: 'timetable' },
        _react2.default.createElement(
          'div',
          { className: 'timetable__info' },
          _react2.default.createElement(
            'h3',
            { className: 'timetable__title' },
            data.stops[0].title,
            ' \u2014 ',
            data.stops[data.stops.length - 1].title
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'timetable__stops' },
          data.stops.map(function (stop, index) {
            return stop.departure && _react2.default.createElement(BusStop, {
              currentHour: _this2.state.currentHour,
              key: index,
              name: stop.name,
              title: stop.title,
              center: stop.center,
              departure: stop.departure
            });
          })
        )
      );
    }
  }, {
    key: 'onSelect',
    value: function onSelect(e) {
      console.log(e.target.value); // eslint-disable-line
    }
  }]);

  return Timetable;
}(_react.Component);

Timetable.propTypes = {
  selectedStop: _propTypes2.default.number,
  data: _propTypes2.default.shape({
    stops: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      name: _propTypes2.default.string,
      title: _propTypes2.default.string,
      center: _propTypes2.default.array,
      departure: _propTypes2.default.object
    }))
  })
};

var _default = Timetable;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BusStop, 'BusStop', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/timetable/timetable.jsx');

  __REACT_HOT_LOADER__.register(Timetable, 'Timetable', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/timetable/timetable.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/components/timetable/timetable.jsx');
}();

;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(36);

var _components = __webpack_require__(1);

var _ = __webpack_require__(37);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bus = function (_Component) {
  _inherits(Bus, _Component);

  function Bus() {
    _classCallCheck(this, Bus);

    return _possibleConstructorReturn(this, (Bus.__proto__ || Object.getPrototypeOf(Bus)).apply(this, arguments));
  }

  _createClass(Bus, [{
    key: 'render',
    value: function render() {

      var forward = _2.default.forward;
      var backward = _2.default.backward;

      return _react2.default.createElement(
        'div',
        { className: 'page page_type_bus' },
        _react2.default.createElement(
          'h1',
          { className: 'page__header' },
          '\u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435'
        ),
        _react2.default.createElement(
          'div',
          { className: 'page__content' },
          _react2.default.createElement(
            'div',
            { className: 'schedule' },
            _react2.default.createElement(
              'div',
              { className: 'schedule__timetables' },
              _react2.default.createElement(
                'div',
                { className: 'schedule__timetable' },
                _react2.default.createElement(_components.Timetable, { data: forward })
              ),
              _react2.default.createElement(
                'div',
                { className: 'schedule__timetable' },
                _react2.default.createElement(_components.Timetable, { data: backward })
              )
            )
          )
        )
      );
    }
  }]);

  return Bus;
}(_react.Component);

var _default = Bus;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Bus, 'Bus', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/routes/Bus/Bus.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/travis/build/krechi-sila/krechi-sila.github.io/src/routes/Bus/Bus.jsx');
}();

;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {"bus":"101","forward":{"stops":[{"name":"Октябрьская д. 5","title":"Вокзал","center":[58.526708,31.251403],"departure":{"5":[18,38,58],"6":[18,33,45,59],"7":[13,32,51],"8":[5,18,30,42],"9":[2,22,46],"10":[10,34,53],"11":[10,25,45],"12":[5,20,55],"13":[15,22,35,55],"14":[15,35,55],"15":[13,30,47],"16":[2,17,34,49],"17":[5,21,37,57],"18":[17,37,57],"19":[17,37,57],"20":[20,43],"21":[13,50],"22":[37],"23":[18]}},{"name":" Чудинцева, 11 / Черняховского, 62","title":"Чудинцева","center":[58.523617,31.261828]},{"name":"Чудинцева д.3","title":"Пл. Победы-Софийская","center":[]},{"name":"Большая Санкт-Петербургская улица, 10","title":"Козьмодемьянская ул.","center":[58.528056,31.272426]},{"name":"Большая Санкт-Петербургская улица, 24","title":"Кооперативная (ул. Большая Санкт-Петербургская)","center":[58.535292,31.267019]},{"name":"Большая Санкт-Петербургская д.42","title":"Большая Санкт-Петербургская д.42","center":[58.539077,31.264179]},{"name":"","title":"пл. Строителей","center":[58.544354,31.263075]},{"name":"Большая Санкт-Петербургская д.88/1","title":"Большая Санкт-Петербургская д.88","center":[58.552017,31.268412]},{"name":"Большая Санкт-Петербургская ул., 96 к1","title":"Павла Левитта","center":[58.554667,31.270555]},{"name":"","title":"Сенная","center":[58.559688,31.274702]},{"name":"Большая Санкт-Петербургская улица, 130","title":"Щусева","center":[58.56535,31.279345]},{"name":"","title":"Большая Санкт-Петербургская д.117","center":[58.56989,31.283098]},{"name":"Троллейбусное депо","title":"Троллейбусный парк","center":[58.573969,31.286472]},{"name":"деревня Трубичино, 9","title":"По требованию (ул. Наволоцкая)","center":[58.582909,31.293863]},{"name":"Трубичино-1","title":"Трубичино-1","center":[58.594816,31.303729]},{"name":"Трубичино-2","title":"Трубичино-2","center":[58.599981,31.309739]},{"name":"Трубичино-3","title":"По требованию (Дачи)","center":[58.598363,31.32624]},{"name":"","title":"Майское-1","center":[58.59888,31.343366]},{"name":"","title":"Майское-4","center":[58.602352,31.357564]},{"name":"","title":"Стрелка","center":[58.606149,31.372842]},{"name":"Михайловская улица, 1В","title":"Кречевицы","center":[58.611651,31.395319]},{"name":"Михайловская улица, 1В","title":"Кречевицы, д 139","center":[58.614226,31.401014]}]},"backward":{"stops":[{"name":"Кречевицы д. 139","title":"Кречевицы д. 139","center":[58.614216,31.401039],"departure":{"5":[55],"6":[15,40],"7":[5,20,32,48],"8":[2,20,40,54],"9":[7,20,32,50],"10":[11,36,57],"11":[18,57],"12":[9,29,35,52],"13":[6,42,59],"14":[22,42,59],"15":[22,42,59],"16":[14,34,46],"17":[3,36,55],"18":[11,26,44],"19":[4,27,45],"20":[6,24,47],"21":[3,26,56],"22":[33],"23":[20],"24":[1]}},{"name":"пос. Кречевицы","title":"пос. Кречевицы"},{"name":"д. Стрелка","title":"д. Стрелка"},{"name":"По требованию (Дачи)","title":"По требованию (Дачи)","optional":true},{"name":"пос. Трубичино","title":"пос. Трубичино"},{"name":"По требованию","title":"По требованию","optional":true},{"name":"По требованию (ул. Наволоцкая)","title":"По требованию (ул. Наволоцкая)","optional":true},{"name":"Троллейбусный парк","title":"Троллейбусный парк"},{"name":"Большая Санкт-Петербургская д.117","title":"Большая Санкт-Петербургская д.117"},{"name":"Щусева","title":"Щусева"},{"name":"Сенная","title":"Сенная"},{"name":"Павла Левитта","title":"Павла Левитта"},{"name":"Колмово","title":"Колмово"},{"name":"Черепичная","title":"Черепичная"},{"name":"Большая Санкт-Петербургская д.41","title":"Большая Санкт-Петербургская д.41"},{"name":"Чудовская","title":"Чудовская"},{"name":"Набережная р. Гзень","title":"Набережная р. Гзень"},{"name":"Козьмодемьянская ул","title":"Козьмодемьянская ул","center":[58.528062,31.272413]},{"name":"Победы-Софийская пл.","title":"Победы-Софийская пл.","center":[58.524174,31.268235]},{"name":"Воскресенский бульвар","title":"Воскресенский бульвар","center":[58.524149,31.268194]},{"name":"Октябрьская д.5","title":"Вокзал"}]}}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return _react2.default.createElement(
    "div",
    { className: "not-found-route page" },
    _react2.default.createElement(
      "h1",
      { className: "header" },
      "\u042D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043D\u0435\u0442. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0430\u0434\u0440\u0435\u0441."
    )
  );
};

var _default = NotFound;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NotFound, "NotFound", "/home/travis/build/krechi-sila/krechi-sila.github.io/src/routes/NotFound.jsx");

  __REACT_HOT_LOADER__.register(_default, "default", "/home/travis/build/krechi-sila/krechi-sila.github.io/src/routes/NotFound.jsx");
}();

;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.1a85830a.js.map