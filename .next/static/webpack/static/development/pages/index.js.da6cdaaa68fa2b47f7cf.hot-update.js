webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/src/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/localuser/.gitcoin/submitted/elastos-dapp/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar IndexPg = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(IndexPg, _Component);\n\n  var _super = _createSuper(IndexPg);\n\n  function IndexPg(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, IndexPg);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"connectWallet\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var eth, web3, accounts, abi;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              localStorage.clear();\n              eth = window.ethereum;\n              _context.prev = 2;\n              web3 = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(eth);\n              _context.next = 6;\n              return eth.enable();\n\n            case 6:\n              _context.next = 8;\n              return web3.eth.getAccounts();\n\n            case 8:\n              accounts = _context.sent;\n\n              _this.setState({\n                account: accounts[0]\n              });\n\n              localStorage.setItem('account', accounts[0]);\n              Router.push('/dashboard'); // ABI, Contract - Connect to SpendPool Pod\n\n              _context.next = 14;\n              return web3.eth.abi.encodeFunctionSignature();\n\n            case 14:\n              abi = _context.sent;\n              _context.next = 20;\n              break;\n\n            case 17:\n              _context.prev = 17;\n              _context.t0 = _context[\"catch\"](2);\n              console.log(_context.t0);\n\n            case 20:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 17]]);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"toggleModal\", function () {\n      _this.setState({\n        toggled: !_this.state.toggled\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"closeModal\", function () {});\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"componentDidMount\", function () {\n      window.document.title = \"Elastic Storage\";\n    });\n\n    _this.state = {\n      isLoggedIn: false,\n      toggled: false\n    };\n    _this.connectWallet = _this.connectWallet.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    _this.toggleModal = _this.toggleModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    _this.closeModal = _this.closeModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(IndexPg, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, this.state.toggled ? __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        connect: this.toggleModal,\n        close: this.closeModal,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 26\n        }\n      }) : null, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 4\n        }\n      }, \"Elastic Storage\"), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 4\n        }\n      }, \"A elastOS dApp built on top of Ionic and Hive with Trinity plugins.\"), __jsx(\"button\", {\n        onClick: this.toggleModal,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 4\n        }\n      }, \"Connect your Metamask wallet\"));\n    }\n  }]);\n\n  return IndexPg;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPg);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4UGciLCJwcm9wcyIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwiZXRoIiwid2luZG93IiwiZXRoZXJldW0iLCJ3ZWIzIiwiV2ViMyIsImVuYWJsZSIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJzZXRTdGF0ZSIsImFjY291bnQiLCJzZXRJdGVtIiwiUm91dGVyIiwicHVzaCIsImFiaSIsImVuY29kZUZ1bmN0aW9uU2lnbmF0dXJlIiwiY29uc29sZSIsImxvZyIsInRvZ2dsZWQiLCJzdGF0ZSIsImRvY3VtZW50IiwidGl0bGUiLCJpc0xvZ2dlZEluIiwiY29ubmVjdFdhbGxldCIsImJpbmQiLCJ0b2dnbGVNb2RhbCIsImNsb3NlTW9kYWwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxPOzs7OztBQUVMLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOOztBQURrQixzWkFXSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZkMsMEJBQVksQ0FBQ0MsS0FBYjtBQUNJQyxpQkFGVyxHQUVMQyxNQUFNLENBQUNDLFFBRkY7QUFBQTtBQUlSQyxrQkFKUSxHQUlELElBQUlDLDRDQUFKLENBQVNKLEdBQVQsQ0FKQztBQUFBO0FBQUEscUJBS1JBLEdBQUcsQ0FBQ0ssTUFBSixFQUxROztBQUFBO0FBQUE7QUFBQSxxQkFNU0YsSUFBSSxDQUFDSCxHQUFMLENBQVNNLFdBQVQsRUFOVDs7QUFBQTtBQU1SQyxzQkFOUTs7QUFRZCxvQkFBS0MsUUFBTCxDQUFjO0FBQUVDLHVCQUFPLEVBQUVGLFFBQVEsQ0FBQyxDQUFEO0FBQW5CLGVBQWQ7O0FBQ0FULDBCQUFZLENBQUNZLE9BQWIsQ0FBcUIsU0FBckIsRUFBZ0NILFFBQVEsQ0FBQyxDQUFELENBQXhDO0FBQ0FJLG9CQUFNLENBQUNDLElBQVAsQ0FBWSxZQUFaLEVBVmMsQ0FZZDs7QUFaYztBQUFBLHFCQWFJVCxJQUFJLENBQUNILEdBQUwsQ0FBU2EsR0FBVCxDQUFhQyx1QkFBYixFQWJKOztBQUFBO0FBYVJELGlCQWJRO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFlZEUscUJBQU8sQ0FBQ0MsR0FBUjs7QUFmYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVhHOztBQUFBLHNOQThCTCxZQUFNO0FBQ25CLFlBQUtSLFFBQUwsQ0FBYztBQUFDUyxlQUFPLEVBQUUsQ0FBQyxNQUFLQyxLQUFMLENBQVdEO0FBQXRCLE9BQWQ7QUFDQSxLQWhDa0I7O0FBQUEscU5Ba0NOLFlBQU0sQ0FBRSxDQWxDRjs7QUFBQSw0TkFvQ0MsWUFBTTtBQUN6QmhCLFlBQU0sQ0FBQ2tCLFFBQVAsQ0FBZ0JDLEtBQWhCLEdBQXdCLGlCQUF4QjtBQUNBLEtBdENrQjs7QUFFbEIsVUFBS0YsS0FBTCxHQUFhO0FBQ1pHLGdCQUFVLEVBQUUsS0FEQTtBQUVaSixhQUFPLEVBQUU7QUFGRyxLQUFiO0FBSUEsVUFBS0ssYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQix5R0FBckI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLHlHQUFuQjtBQUNBLFVBQUtFLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkYsSUFBaEIseUdBQWxCO0FBUmtCO0FBU2xCOzs7OzZCQStCUTtBQUNSLGFBQ0EsbUVBQ0UsS0FBS0wsS0FBTCxDQUFXRCxPQUFYLEdBQXFCLE1BQUMsMERBQUQ7QUFBTyxlQUFPLEVBQUUsS0FBS08sV0FBckI7QUFBa0MsYUFBSyxFQUFFLEtBQUtDLFVBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBckIsR0FBbUYsSUFEckYsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZELEVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRUFIRCxFQUlDO0FBQVEsZUFBTyxFQUFFLEtBQUtELFdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBSkQsQ0FEQTtBQVNBOzs7O0VBcERvQkUsK0M7O0FBd0RQOUIsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbCc7XG5cbmNsYXNzIEluZGV4UGcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc0xvZ2dlZEluOiBmYWxzZSxcblx0XHRcdHRvZ2dsZWQ6IGZhbHNlLFxuXHRcdH1cblx0XHR0aGlzLmNvbm5lY3RXYWxsZXQgPSB0aGlzLmNvbm5lY3RXYWxsZXQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnRvZ2dsZU1vZGFsID0gdGhpcy50b2dnbGVNb2RhbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2xvc2VNb2RhbCA9IHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcblx0XHRsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuXHRcdGxldCBldGggPSB3aW5kb3cuZXRoZXJldW07XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhldGgpO1xuXHRcdFx0YXdhaXQgZXRoLmVuYWJsZSgpO1xuXHRcdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXHRcdFx0XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogYWNjb3VudHNbMF0gfSk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjb3VudCcsIGFjY291bnRzWzBdKTtcblx0XHRcdFJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XG5cblx0XHRcdC8vIEFCSSwgQ29udHJhY3QgLSBDb25uZWN0IHRvIFNwZW5kUG9vbCBQb2Rcblx0XHRcdGNvbnN0IGFiaSA9IGF3YWl0IHdlYjMuZXRoLmFiaS5lbmNvZGVGdW5jdGlvblNpZ25hdHVyZSgpO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHR9XG5cdH07XG5cblx0dG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7dG9nZ2xlZDogIXRoaXMuc3RhdGUudG9nZ2xlZH0pO1xuXHR9O1xuXG5cdGNsb3NlTW9kYWwgPSAoKSA9PiB7fVxuXG5cdGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuXHRcdHdpbmRvdy5kb2N1bWVudC50aXRsZSA9IFwiRWxhc3RpYyBTdG9yYWdlXCJcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHR7dGhpcy5zdGF0ZS50b2dnbGVkID8gPE1vZGFsIGNvbm5lY3Q9e3RoaXMudG9nZ2xlTW9kYWx9IGNsb3NlPXt0aGlzLmNsb3NlTW9kYWx9Lz4gOiBudWxsfVxuXHRcdFx0PGgxPkVsYXN0aWMgU3RvcmFnZTwvaDE+XG5cdFx0XHQ8cD5BIGVsYXN0T1MgZEFwcCBidWlsdCBvbiB0b3Agb2YgSW9uaWMgYW5kIEhpdmUgd2l0aCBUcmluaXR5IHBsdWdpbnMuPC9wPlxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGFsfT5cblx0XHRcdFx0Q29ubmVjdCB5b3VyIE1ldGFtYXNrIHdhbGxldFxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC8+KTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})