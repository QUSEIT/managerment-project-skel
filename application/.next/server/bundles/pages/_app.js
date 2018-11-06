module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/HtmlHead/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__package__ = __webpack_require__("./package.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__package___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__package__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_theme_scss__ = __webpack_require__("./styles/theme.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_theme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_theme_scss__);
var _jsxFileName = "/app/components/HtmlHead/index.js";





var HtmlHead = function HtmlHead() {
  var stylesheets;

  if (false) {
    // In production, serve pre-built CSS file from /assets/{version}/main.css
    var pathToCSS = "/assets/".concat(Package.version, "/main.css");
    stylesheets = React.createElement("link", {
      rel: "stylesheet",
      type: "text/css",
      href: pathToCSS,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    });
  } else {
    // eslint-disable-next-line react/no-danger
    stylesheets = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: __WEBPACK_IMPORTED_MODULE_3__styles_theme_scss___default.a
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    });
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "SystemSeed Technical Assessment"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    type: "image/vnd.microsoft.icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), stylesheets);
};

/* harmony default export */ __webpack_exports__["a"] = (HtmlHead);

/***/ }),

/***/ "./components/PageProgressBar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);



__WEBPACK_IMPORTED_MODULE_1_next_router___default.a.onRouteChangeStart = function () {
  __WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.start();
};

__WEBPACK_IMPORTED_MODULE_1_next_router___default.a.onRouteChangeComplete = function () {
  __WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.done();
};

__WEBPACK_IMPORTED_MODULE_1_next_router___default.a.onRouteChangeError = function () {
  __WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.done();
};

/***/ }),

/***/ "./package.json":
/***/ (function(module, exports) {

module.exports = {"name":"SystemSeed","version":"1.0.0","license":"MIT","dependencies":{"compression":"^1.7.3","express":"^4.16.3","html-loader":"^0.5.5","knex":"^0.15.2","markdown-loader":"^4.0.0","marked":"^0.5.1","mssql":"^4.2.2","next":"^6.1.1","next-redux-saga":"^3.0.0-beta.1","next-redux-wrapper":"^2.0.0","node-sass":"^4.9.2","node-sass-glob-importer":"^5.2.0","nprogress":"^0.2.0","pg":"^7.6.0","prop-types":"^15.6.2","raw-loader":"^0.5.1","react":"^16.4.1","react-dom":"^16.4.1","react-redux":"^5.0.7","redux":"^4.0.0","redux-devtools-extension":"^2.13.5","redux-saga":"^0.16.0","sass-loader":"^7.0.3","webpack":"^4.16.1"},"devDependencies":{"babel-eslint":"^8.2.6","eslint":"4","eslint-config-airbnb":"^17.0.0","eslint-plugin-import":"^2.13.0","eslint-plugin-jsx-a11y":"^6.1.1","eslint-plugin-react":"^7.10.0"},"standard":{"parser":"babel-eslint"},"scripts":{"build":"next build","start":"PORT=3000 NODE_ENV=production node server.js","start:dev":"PORT=3000 NODE_ENV=development node server.js","eslint":"./node_modules/.bin/eslint ./","knex":"./node_modules/knex/bin/cli.js migrate:latest --env development"}}

/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_redux_saga__ = __webpack_require__("next-redux-saga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_HtmlHead__ = __webpack_require__("./components/HtmlHead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_store__ = __webpack_require__("./store/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_PageProgressBar__ = __webpack_require__("./components/PageProgressBar/index.js");

var _jsxFileName = "/app/pages/_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








 // Beautiful page transition indicator.

var Application =
/*#__PURE__*/
function (_App) {
  _inherits(Application, _App);

  function Application() {
    _classCallCheck(this, Application);

    return _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).apply(this, arguments));
  }

  _createClass(Application, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          store = _props.store,
          pageProps = _objectWithoutProperties(_props, ["Component", "store"]);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_HtmlHead__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var Component, ctx, initialProps, childInitialProps;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                initialProps = {
                  isServer: !!ctx.req
                }; // Call to getInitialProps() from the Page component.

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(_objectSpread({}, initialProps, ctx));

              case 5:
                childInitialProps = _context.sent;
                return _context.abrupt("return", _objectSpread({}, initialProps, childInitialProps));

              case 7:
                return _context.abrupt("return", initialProps);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Application;
}(__WEBPACK_IMPORTED_MODULE_2_next_app___default.a);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_7__store_store__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_5_next_redux_saga___default()(Application)));

/***/ }),

/***/ "./store/reducers/example.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    count: 0
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return _objectSpread({}, state, {
        count: state.count + 1
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./store/reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__example__ = __webpack_require__("./store/reducers/example.js");
 // Put all your reducers here.


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  example: __WEBPACK_IMPORTED_MODULE_1__example__["a" /* default */]
}));

/***/ }),

/***/ "./store/sagas/example.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = exampleSagas;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__("redux-saga/effects");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);


var _marked =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(exampleSaga),
    _marked2 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(exampleSagas);


/**
 * React on example action being triggered.
 */

function exampleSaga() {
  var counter;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function exampleSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["select"])(function (reduxStore) {
            return reduxStore.example.count;
          });

        case 2:
          counter = _context.sent;
          _context.next = 5;
          return console.log("Saga triggered. New counter is ".concat(counter));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
/**
 * Main entry point for all example sagas.
 */


function exampleSagas() {
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function exampleSagas$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["all"];
          _context2.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["takeEvery"])('EXAMPLE_ACTION', exampleSaga);

        case 3:
          _context2.t1 = _context2.sent;
          _context2.t2 = [_context2.t1];
          _context2.next = 7;
          return (0, _context2.t0)(_context2.t2);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

/***/ }),

/***/ "./store/sagas/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rootSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__("redux-saga/effects");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__example__ = __webpack_require__("./store/sagas/example.js");


var _marked =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(rootSaga);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

 // Put all your sagas here.


function rootSaga() {
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["all"])(_toConsumableArray(Object(__WEBPACK_IMPORTED_MODULE_2__example__["a" /* default */])()));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

/***/ }),

/***/ "./store/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga__ = __webpack_require__("redux-saga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sagas__ = __webpack_require__("./store/sagas/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__("./store/reducers/index.js");
// Default redux createStore function.
 // Debug.

 // Sagas!

 // Import all our custom sagas.

 // Import all our custom reducers.

 // Create a saga middleware.

var sagaMiddleware = __WEBPACK_IMPORTED_MODULE_2_redux_saga___default()();

function configureStore(initialState) {
  // Build store.
  // TODO: Disable dev tools on production.
  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__reducers__["a" /* default */], initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(sagaMiddleware)));

  store.runSagaTask = function () {
    store.sagaTask = sagaMiddleware.run(__WEBPACK_IMPORTED_MODULE_3__sagas__["a" /* default */]);
  };

  store.runSagaTask();
  return store;
}

/* harmony default export */ __webpack_exports__["a"] = (configureStore);

/***/ }),

/***/ "./styles/theme.scss":
/***/ (function(module, exports) {

module.exports = "body, div, h1, h2, h3, h4, h5, a, img, p, span, ul, li, i, input, textarea {\n  margin: 0;\n  padding: 0;\n  display: block;\n  font-family: PingFangSC-Regular; }\n\nh1, h2, h3, h4, h5 {\n  font-weight: normal; }\n\na {\n  text-decoration: none; }\n\nimg {\n  border: none; }\n\nul li {\n  list-style: none; }\n\ninput, textarea {\n  border: none;\n  outline: none; }\n\n.login-wrapper {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #f5f5f5; }\n  .login-wrapper .login-center {\n    width: 380px;\n    height: auto;\n    padding-top: 120px;\n    margin: 0 auto; }\n    .login-wrapper .login-center .logo {\n      width: 100%;\n      height: auto; }\n      .login-wrapper .login-center .logo h1 {\n        width: 56px;\n        height: 56px;\n        margin: 0 auto;\n        border-radius: 50%;\n        font-size: 14px;\n        line-height: 56px;\n        text-align: center;\n        color: #ECEFF1;\n        background-color: #9e9e9e; }\n    .login-wrapper .login-center .switch-login {\n      width: 100%;\n      height: auto;\n      padding-top: 45px; }\n      .login-wrapper .login-center .switch-login ul {\n        width: 100%;\n        height: auto;\n        padding: 0 25px;\n        cursor: pointer;\n        display: flex;\n        justify-content: space-between;\n        box-sizing: border-box; }\n        .login-wrapper .login-center .switch-login ul li {\n          width: 140px;\n          height: 40px;\n          line-height: 40px;\n          text-align: center;\n          font-size: 16px;\n          border-bottom: 2px solid #f5f5f5;\n          color: rgba(0, 0, 0, 0.65); }\n        .login-wrapper .login-center .switch-login ul .active {\n          border-color: #08979C;\n          color: #08979C; }\n\n.hello {\n  margin-top: 10%;\n  margin-left: 10%;\n  margin-bottom: 10%;\n  /* bring your own prefixes */ }\n\n/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n  /* Fancy blur effect */ }\n  #nprogress .bar {\n    background: #29d;\n    position: fixed;\n    z-index: 9999999;\n    top: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 3px; }\n  #nprogress .peg {\n    display: block;\n    position: absolute;\n    right: 0;\n    width: 100px;\n    height: 100%;\n    box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n    opacity: 1.0;\n    -webkit-transform: rotate(3deg) translate(0px, -4px);\n    -ms-transform: rotate(3deg) translate(0px, -4px);\n    transform: rotate(3deg) translate(0px, -4px); }\n";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-redux-saga":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map