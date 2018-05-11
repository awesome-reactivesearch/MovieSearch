module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter
        /******/
      });
      /******/
    }
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./pages/_document.js": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "default",
        function() {
          return MyDocument;
        }
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(
        "react"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_react__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__(
        "next/document"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_1_next_document__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emotion_server__ = __webpack_require__(
        "emotion-server"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emotion_server___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_2_emotion_server__
      );
      var _jsxFileName =
        "F:\\Web\\MovieSearch-Appbase\\MovieSearch-master\\pages\\_document.js";

      var _extends =
        Object.assign ||
        function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };

      var _createClass = (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return call && (typeof call === "object" || typeof call === "function")
          ? call
          : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof superClass
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
      }

      var MyDocument = (function(_Document) {
        _inherits(MyDocument, _Document);

        _createClass(MyDocument, null, [
          {
            key: "getInitialProps",
            value: function getInitialProps(_ref) {
              var renderPage = _ref.renderPage;

              // for emotion-js
              var page = renderPage();
              var styles = Object(
                __WEBPACK_IMPORTED_MODULE_2_emotion_server__["extractCritical"]
              )(page.html);
              return _extends({}, page, styles);
            }
          }
        ]);

        function MyDocument(props) {
          _classCallCheck(this, MyDocument);

          var _this = _possibleConstructorReturn(
            this,
            (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).call(
              this,
              props
            )
          );
          // for emotion-js

          var __NEXT_DATA__ = props.__NEXT_DATA__,
            ids = props.ids;

          if (ids) {
            __NEXT_DATA__.ids = ids;
          }
          return _this;
        }

        _createClass(MyDocument, [
          {
            key: "render",
            value: function render() {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "html",
                {
                  lang: "en",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_next_document__["Head"],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "meta",
                    {
                      charSet: "utf-8",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      }
                    }
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "meta",
                    {
                      name: "viewport",
                      content:
                        "width=device-width, initial-scale=1, shrink-to-fit=no",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      }
                    }
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "meta",
                    {
                      name: "theme-color",
                      content: "#000000",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                      }
                    }
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "title",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                      }
                    },
                    "MovieSearch"
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "link",
                    {
                      rel: "stylesheet",
                      href:
                        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                      }
                    }
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "link",
                    {
                      rel: "stylesheet",
                      href:
                        "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
                      integrity:
                        "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
                      crossOrigin: "anonymous",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                      }
                    }
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "link",
                    {
                      rel: "stylesheet",
                      href: "/_next/static/style.css",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                      }
                    }
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "style",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                      }
                    },
                    "body {   background-color: #333333;\n            margin: 0px;\n            padding: 0px;\n            font-family: sans-serif;\n            font-size: 20px;}"
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "link",
                    {
                      rel: "manifest",
                      href: "static/manifest.json",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                      }
                    }
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "link",
                    {
                      rel: "shortcut icon",
                      href: "static/favicon.ico",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                      }
                    }
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "style",
                    {
                      dangerouslySetInnerHTML: { __html: this.props.css },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                      }
                    }
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "body",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_next_document__["Main"],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                      }
                    }
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                      }
                    }
                  )
                )
              );
            }
          }
        ]);

        return MyDocument;
      })(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);

      /***/
    },

    /***/ 0: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__("./pages/_document.js");

      /***/
    },

    /***/ "emotion-server": /***/ function(module, exports) {
      module.exports = require("emotion-server");

      /***/
    },

    /***/ "next/document": /***/ function(module, exports) {
      module.exports = require("next/document");

      /***/
    },

    /***/ react: /***/ function(module, exports) {
      module.exports = require("react");

      /***/
    }

    /******/
  }
);
//# sourceMappingURL=_document.js.map
