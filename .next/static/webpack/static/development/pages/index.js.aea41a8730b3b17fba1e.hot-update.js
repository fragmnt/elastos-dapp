webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/src/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/localuser/.gitcoin/submitted/elastos-dapp/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar IndexPg = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(IndexPg, _Component);\n\n  var _super = _createSuper(IndexPg);\n\n  function IndexPg(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, IndexPg);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"connectWallet\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var eth, web3, accounts, abi;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              localStorage.clear();\n              eth = window.ethereum;\n              _context.prev = 2;\n              web3 = new web3__WEBPACK_IMPORTED_MODULE_12___default.a(eth);\n              _context.next = 6;\n              return eth.enable();\n\n            case 6:\n              _context.next = 8;\n              return web3.eth.getAccounts();\n\n            case 8:\n              accounts = _context.sent;\n\n              _this.setState({\n                account: accounts[0]\n              });\n\n              localStorage.setItem('account', accounts[0]);\n              next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/dashboard'); // ABI, Contract - Connect to SpendPool Pod\n\n              _context.next = 14;\n              return web3.eth.abi.encodeFunctionSignature();\n\n            case 14:\n              abi = _context.sent;\n              _this.toggleModal;\n              _context.next = 21;\n              break;\n\n            case 18:\n              _context.prev = 18;\n              _context.t0 = _context[\"catch\"](2);\n              console.log(_context.t0);\n\n            case 21:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 18]]);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"checkAuth\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var account;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return localStorage.getItem('account');\n\n            case 2:\n              account = _context2.sent;\n              _context2.next = 5;\n              return account;\n\n            case 5:\n              if (!_context2.sent) {\n                _context2.next = 9;\n                break;\n              }\n\n              _this.setState({\n                isLoggedIn: true\n              });\n\n              _context2.next = 10;\n              break;\n\n            case 9:\n              _this.setState({\n                isLoggedIn: false\n              });\n\n            case 10:\n              if (!(_this.state.isLoggedIn === true)) {\n                _context2.next = 14;\n                break;\n              }\n\n              console.log('is logged in'); // pass address to navbar\n\n              _context2.next = 15;\n              break;\n\n            case 14:\n              return _context2.abrupt(\"return\");\n\n            case 15:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"toggleModal\", function () {\n      _this.setState({\n        toggled: !_this.state.toggled\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"closeModal\", function (e) {\n      _this.setState({\n        toggled: false\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"componentDidMount\", function () {\n      window.document.title = \"Elastic Storage\";\n\n      _this.checkAuth();\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"componentWillUnmount\", function () {});\n\n    _this.state = {\n      isLoggedIn: false,\n      toggled: false\n    };\n    _this.connectWallet = _this.connectWallet.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    _this.checkAuth = _this.checkAuth.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    _this.toggleModal = _this.toggleModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    _this.closeModal = _this.closeModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(IndexPg, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, this.state.toggled ? __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        connect: this.connectWallet,\n        close: this.closeModal,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 26\n        }\n      }) : null, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 4\n        }\n      }, \"ElastStorage\"), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 4\n        }\n      }, \"A elastOS dApp built on top of Ionic and Hive with Trinity plugins.\"), __jsx(\"button\", {\n        onClick: this.toggleModal,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 4\n        }\n      }, \"Connect your Metamask wallet\"));\n    }\n  }]);\n\n  return IndexPg;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPg);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4UGciLCJwcm9wcyIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwiZXRoIiwid2luZG93IiwiZXRoZXJldW0iLCJ3ZWIzIiwiV2ViMyIsImVuYWJsZSIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJzZXRTdGF0ZSIsImFjY291bnQiLCJzZXRJdGVtIiwiUm91dGVyIiwicHVzaCIsImFiaSIsImVuY29kZUZ1bmN0aW9uU2lnbmF0dXJlIiwidG9nZ2xlTW9kYWwiLCJjb25zb2xlIiwibG9nIiwiZ2V0SXRlbSIsImlzTG9nZ2VkSW4iLCJzdGF0ZSIsInRvZ2dsZWQiLCJlIiwiZG9jdW1lbnQiLCJ0aXRsZSIsImNoZWNrQXV0aCIsImNvbm5lY3RXYWxsZXQiLCJiaW5kIiwiY2xvc2VNb2RhbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7SUFFTUEsTzs7Ozs7QUFFTCxtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjs7QUFEa0Isc1pBWUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZDLDBCQUFZLENBQUNDLEtBQWI7QUFDSUMsaUJBRlcsR0FFTEMsTUFBTSxDQUFDQyxRQUZGO0FBQUE7QUFJUkMsa0JBSlEsR0FJRCxJQUFJQyw0Q0FBSixDQUFTSixHQUFULENBSkM7QUFBQTtBQUFBLHFCQUtSQSxHQUFHLENBQUNLLE1BQUosRUFMUTs7QUFBQTtBQUFBO0FBQUEscUJBTVNGLElBQUksQ0FBQ0gsR0FBTCxDQUFTTSxXQUFULEVBTlQ7O0FBQUE7QUFNUkMsc0JBTlE7O0FBUWQsb0JBQUtDLFFBQUwsQ0FBYztBQUFFQyx1QkFBTyxFQUFFRixRQUFRLENBQUMsQ0FBRDtBQUFuQixlQUFkOztBQUNBVCwwQkFBWSxDQUFDWSxPQUFiLENBQXFCLFNBQXJCLEVBQWdDSCxRQUFRLENBQUMsQ0FBRCxDQUF4QztBQUNBSSxpRUFBTSxDQUFDQyxJQUFQLENBQVksWUFBWixFQVZjLENBWWQ7O0FBWmM7QUFBQSxxQkFhSVQsSUFBSSxDQUFDSCxHQUFMLENBQVNhLEdBQVQsQ0FBYUMsdUJBQWIsRUFiSjs7QUFBQTtBQWFSRCxpQkFiUTtBQWVkLG9CQUFLRSxXQUFMO0FBZmM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFpQmRDLHFCQUFPLENBQUNDLEdBQVI7O0FBakJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWkc7O0FBQUEsa1pBaUNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1NuQixZQUFZLENBQUNvQixPQUFiLENBQXFCLFNBQXJCLENBRFQ7O0FBQUE7QUFDUFQscUJBRE87QUFBQTtBQUFBLHFCQUVMQSxPQUZLOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUssb0JBQUtELFFBQUwsQ0FBYztBQUFFVywwQkFBVSxFQUFFO0FBQWQsZUFBZCxDQUZMOztBQUFBO0FBQUE7O0FBQUE7QUFFMkMsb0JBQUtYLFFBQUwsQ0FBYztBQUFFVywwQkFBVSxFQUFFO0FBQWQsZUFBZCxDQUYzQzs7QUFBQTtBQUFBLG9CQUdQLE1BQUtDLEtBQUwsQ0FBV0QsVUFBWCxLQUEwQixJQUhuQjtBQUFBO0FBQUE7QUFBQTs7QUFJVkgscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFKVSxDQUtWOztBQUxVO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpDTzs7QUFBQSxzTkE0Q0wsWUFBTTtBQUNuQixZQUFLVCxRQUFMLENBQWM7QUFBQ2EsZUFBTyxFQUFFLENBQUMsTUFBS0QsS0FBTCxDQUFXQztBQUF0QixPQUFkO0FBQ0EsS0E5Q2tCOztBQUFBLHFOQWdETixVQUFDQyxDQUFELEVBQU87QUFDbkIsWUFBS2QsUUFBTCxDQUFjO0FBQ2JhLGVBQU8sRUFBRTtBQURJLE9BQWQ7QUFHQSxLQXBEa0I7O0FBQUEsNE5Bc0RDLFlBQU07QUFDekJwQixZQUFNLENBQUNzQixRQUFQLENBQWdCQyxLQUFoQixHQUF3QixpQkFBeEI7O0FBQ0EsWUFBS0MsU0FBTDtBQUNBLEtBekRrQjs7QUFBQSwrTkEyREksWUFBTSxDQUU1QixDQTdEa0I7O0FBRWxCLFVBQUtMLEtBQUwsR0FBYTtBQUNaRCxnQkFBVSxFQUFFLEtBREE7QUFFWkUsYUFBTyxFQUFFO0FBRkcsS0FBYjtBQUlBLFVBQUtLLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIseUdBQXJCO0FBQ0EsVUFBS0YsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVFLElBQWYseUdBQWpCO0FBQ0EsVUFBS1osV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCWSxJQUFqQix5R0FBbkI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLHlHQUFsQjtBQVRrQjtBQVVsQjs7Ozs2QkFxRFE7QUFDUixhQUNBLG1FQUNFLEtBQUtQLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixNQUFDLDBEQUFEO0FBQU8sZUFBTyxFQUFFLEtBQUtLLGFBQXJCO0FBQW9DLGFBQUssRUFBRSxLQUFLRSxVQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXJCLEdBQXFGLElBRHZGLEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRCxFQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0VBSEQsRUFJQztBQUFRLGVBQU8sRUFBRSxLQUFLYixXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUpELENBREE7QUFTQTs7OztFQTNFb0JjLCtDOztBQStFUGpDLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwnO1xuXG5jbGFzcyBJbmRleFBnIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNMb2dnZWRJbjogZmFsc2UsXG5cdFx0XHR0b2dnbGVkOiBmYWxzZSxcblx0XHR9XG5cdFx0dGhpcy5jb25uZWN0V2FsbGV0ID0gdGhpcy5jb25uZWN0V2FsbGV0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jaGVja0F1dGggPSB0aGlzLmNoZWNrQXV0aC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudG9nZ2xlTW9kYWwgPSB0aGlzLnRvZ2dsZU1vZGFsLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jbG9zZU1vZGFsID0gdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpXG5cdFx0bGV0IGV0aCA9IHdpbmRvdy5ldGhlcmV1bTtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qgd2ViMyA9IG5ldyBXZWIzKGV0aCk7XG5cdFx0XHRhd2FpdCBldGguZW5hYmxlKCk7XG5cdFx0XHRjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cdFx0XHRcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBhY2NvdW50c1swXSB9KTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2NvdW50JywgYWNjb3VudHNbMF0pO1xuXHRcdFx0Um91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcblxuXHRcdFx0Ly8gQUJJLCBDb250cmFjdCAtIENvbm5lY3QgdG8gU3BlbmRQb29sIFBvZFxuXHRcdFx0Y29uc3QgYWJpID0gYXdhaXQgd2ViMy5ldGguYWJpLmVuY29kZUZ1bmN0aW9uU2lnbmF0dXJlKCk7XG5cblx0XHRcdHRoaXMudG9nZ2xlTW9kYWw7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH1cblx0fTtcblxuXHRjaGVja0F1dGggPSBhc3luYyAoKSA9PiB7XG5cdFx0dmFyIGFjY291bnQgPSBhd2FpdCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjb3VudCcpO1xuXHRcdGF3YWl0IGFjY291bnQgPyB0aGlzLnNldFN0YXRlKHsgaXNMb2dnZWRJbjogdHJ1ZSB9KSA6IHRoaXMuc2V0U3RhdGUoeyBpc0xvZ2dlZEluOiBmYWxzZX0pO1xuXHRcdGlmICh0aGlzLnN0YXRlLmlzTG9nZ2VkSW4gPT09IHRydWUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdpcyBsb2dnZWQgaW4nKVxuXHRcdFx0Ly8gcGFzcyBhZGRyZXNzIHRvIG5hdmJhclxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7dG9nZ2xlZDogIXRoaXMuc3RhdGUudG9nZ2xlZH0pO1xuXHR9O1xuXG5cdGNsb3NlTW9kYWwgPSAoZSkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dG9nZ2xlZDogZmFsc2Vcblx0XHR9KTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuXHRcdHdpbmRvdy5kb2N1bWVudC50aXRsZSA9IFwiRWxhc3RpYyBTdG9yYWdlXCI7XG5cdFx0dGhpcy5jaGVja0F1dGgoKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuXG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHt0aGlzLnN0YXRlLnRvZ2dsZWQgPyA8TW9kYWwgY29ubmVjdD17dGhpcy5jb25uZWN0V2FsbGV0fSBjbG9zZT17dGhpcy5jbG9zZU1vZGFsfS8+IDogbnVsbH1cblx0XHRcdDxoMT5FbGFzdFN0b3JhZ2U8L2gxPlxuXHRcdFx0PHA+QSBlbGFzdE9TIGRBcHAgYnVpbHQgb24gdG9wIG9mIElvbmljIGFuZCBIaXZlIHdpdGggVHJpbml0eSBwbHVnaW5zLjwvcD5cblx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVNb2RhbH0+XG5cdFx0XHRcdENvbm5lY3QgeW91ciBNZXRhbWFzayB3YWxsZXRcblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvPik7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})