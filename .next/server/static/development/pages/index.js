module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/localuser/.gitcoin/submitted/elastos-dapp/components/Modal.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Modal = props => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    style: {\n      filter: 'blur(2px)',\n      background: 'rgba(0,0,0,0.575)',\n      position: 'fixed',\n      zIndex: '1',\n      paddingTop: '100px',\n      left: 0,\n      top: 0,\n      width: '100%',\n      height: '100%',\n      overflow: 'auto'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }), __jsx(\"div\", {\n    style: {\n      position: 'fixed',\n      zIndex: '1000',\n      width: '80%',\n      maxWidth: '20vw',\n      maxHeight: '50vh',\n      display: 'flex',\n      flexDirection: 'column',\n      boxShadow: '0 4px 10px rgba(0,0,0,.2)',\n      alignSelf: 'center',\n      margin: 'auto',\n      top: '0',\n      left: '0',\n      right: '0',\n      bottom: '0',\n      background: 'rgba(255,255,255,1)',\n      borderRadius: '10px'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: props.close,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, \"X\"), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, \"Connect your wallet\"), __jsx(\"button\", {\n    onClick: props.connect,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, \"MetaMask\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsLmpzP2RjNTQiXSwibmFtZXMiOlsiTW9kYWwiLCJwcm9wcyIsImZpbHRlciIsImJhY2tncm91bmQiLCJwb3NpdGlvbiIsInpJbmRleCIsInBhZGRpbmdUb3AiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJib3hTaGFkb3ciLCJhbGlnblNlbGYiLCJtYXJnaW4iLCJyaWdodCIsImJvdHRvbSIsImJvcmRlclJhZGl1cyIsImNsb3NlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUlDLEtBQUQsSUFBVztBQUVyQixTQUNBLG1FQUNBO0FBQUssU0FBSyxFQUFFO0FBQ05DLFlBQU0sRUFBRSxXQURGO0FBRVJDLGdCQUFVLEVBQUUsbUJBRko7QUFHUkMsY0FBUSxFQUFFLE9BSEY7QUFJUkMsWUFBTSxFQUFFLEdBSkE7QUFLUkMsZ0JBQVUsRUFBRSxPQUxKO0FBTVJDLFVBQUksRUFBRSxDQU5FO0FBT1JDLFNBQUcsRUFBRSxDQVBHO0FBUVJDLFdBQUssRUFBRSxNQVJDO0FBU1JDLFlBQU0sRUFBRSxNQVRBO0FBVVJDLGNBQVEsRUFBRTtBQVZGLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBZUE7QUFBSyxTQUFLLEVBQUU7QUFDUlAsY0FBUSxFQUFFLE9BREY7QUFHUkMsWUFBTSxFQUFFLE1BSEE7QUFLUkksV0FBSyxFQUFFLEtBTEM7QUFPUkcsY0FBUSxFQUFFLE1BUEY7QUFTUkMsZUFBUyxFQUFFLE1BVEg7QUFXUkMsYUFBTyxFQUFFLE1BWEQ7QUFhUkMsbUJBQWEsRUFBRSxRQWJQO0FBZVJDLGVBQVMsRUFBRSwyQkFmSDtBQWlCUkMsZUFBUyxFQUFFLFFBakJIO0FBbUJSQyxZQUFNLEVBQUUsTUFuQkE7QUFxQlJWLFNBQUcsRUFBRSxHQXJCRztBQXNCUkQsVUFBSSxFQUFFLEdBdEJFO0FBdUJSWSxXQUFLLEVBQUUsR0F2QkM7QUF3QlJDLFlBQU0sRUFBRSxHQXhCQTtBQTBCUmpCLGdCQUFVLEVBQUUscUJBMUJKO0FBNEJSa0Isa0JBQVksRUFBRTtBQTVCTixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E4Qkk7QUFBUSxXQUFPLEVBQUVwQixLQUFLLENBQUNxQixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBOUJKLEVBaUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBakNKLEVBa0NJO0FBQVEsV0FBTyxFQUFFckIsS0FBSyxDQUFDc0IsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQ0osQ0FmQSxDQURBO0FBd0RILENBMUREOztBQTREZXZCLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Nb2RhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE1vZGFsID0gKHByb3BzKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgIGZpbHRlcjogJ2JsdXIoMnB4KScsXG4gICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDAuNTc1KScsXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICB6SW5kZXg6ICcxJyxcbiAgICAgICAgcGFkZGluZ1RvcDogJzEwMHB4JyxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgIH19PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBzdHlsZT17e1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcblxuICAgICAgICB6SW5kZXg6ICcxMDAwJyxcblxuICAgICAgICB3aWR0aDogJzgwJScsXG5cbiAgICAgICAgbWF4V2lkdGg6ICcyMHZ3JyxcblxuICAgICAgICBtYXhIZWlnaHQ6ICc1MHZoJyxcblxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG5cbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cbiAgICAgICAgYm94U2hhZG93OiAnMCA0cHggMTBweCByZ2JhKDAsMCwwLC4yKScsXG5cbiAgICAgICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcblxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICByaWdodDogJzAnLFxuICAgICAgICBib3R0b206ICcwJyxcblxuICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXG5cbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcbiAgICB9fT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5jbG9zZX0+XG4gICAgICAgICAgICBYXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8aDE+Q29ubmVjdCB5b3VyIHdhbGxldDwvaDE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuY29ubmVjdH0+XG4gICAgICAgICAgICBNZXRhTWFza1xuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Modal.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.js\");\nvar _jsxFileName = \"/home/localuser/.gitcoin/submitted/elastos-dapp/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass IndexPg extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"connectWallet\", async () => {\n      localStorage.clear();\n      let eth = window.ethereum;\n\n      try {\n        const web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(eth);\n        await eth.enable();\n        const accounts = await web3.eth.getAccounts();\n        this.setState({\n          account: accounts[0]\n        });\n        localStorage.setItem('account', accounts[0]);\n        Router.push('/dashboard'); // ABI, Contract - Connect to SpendPool Pod\n\n        const abi = await web3.eth.abi.encodeFunctionSignature();\n      } catch (err) {\n        console.log(err);\n      }\n    });\n\n    _defineProperty(this, \"toggleModal\", () => {\n      this.setState({\n        toggled: !this.state.toggled\n      });\n    });\n\n    _defineProperty(this, \"closeModal\", e => {\n      this.setState({\n        toggled: false\n      });\n    });\n\n    _defineProperty(this, \"componentDidMount\", () => {\n      window.document.title = \"Elastic Storage\";\n    });\n\n    _defineProperty(this, \"componentWillUnmount\", () => {});\n\n    this.state = {\n      isLoggedIn: false,\n      toggled: false\n    };\n    this.connectWallet = this.connectWallet.bind(this);\n    this.toggleModal = this.toggleModal.bind(this);\n    this.closeModal = this.closeModal.bind(this);\n  }\n\n  render() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.toggled ? __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      connect: this.toggleModal,\n      close: this.closeModal,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 26\n      }\n    }) : null, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 4\n      }\n    }, \"Elastic Storage\"), __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 4\n      }\n    }, \"A elastOS dApp built on top of Ionic and Hive with Trinity plugins.\"), __jsx(\"button\", {\n      onClick: this.toggleModal,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 4\n      }\n    }, \"Connect your Metamask wallet\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPg);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4UGciLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJldGgiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIndlYjMiLCJXZWIzIiwiZW5hYmxlIiwiYWNjb3VudHMiLCJnZXRBY2NvdW50cyIsInNldFN0YXRlIiwiYWNjb3VudCIsInNldEl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwiYWJpIiwiZW5jb2RlRnVuY3Rpb25TaWduYXR1cmUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlZCIsInN0YXRlIiwiZSIsImRvY3VtZW50IiwidGl0bGUiLCJpc0xvZ2dlZEluIiwiY29ubmVjdFdhbGxldCIsImJpbmQiLCJ0b2dnbGVNb2RhbCIsImNsb3NlTW9kYWwiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFOLFNBQXNCQywrQ0FBdEIsQ0FBZ0M7QUFFL0JDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2xCLFVBQU1BLEtBQU47O0FBRGtCLDJDQVdILFlBQVk7QUFDM0JDLGtCQUFZLENBQUNDLEtBQWI7QUFDQSxVQUFJQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBakI7O0FBQ0EsVUFBSTtBQUNILGNBQU1DLElBQUksR0FBRyxJQUFJQywyQ0FBSixDQUFTSixHQUFULENBQWI7QUFDQSxjQUFNQSxHQUFHLENBQUNLLE1BQUosRUFBTjtBQUNBLGNBQU1DLFFBQVEsR0FBRyxNQUFNSCxJQUFJLENBQUNILEdBQUwsQ0FBU08sV0FBVCxFQUF2QjtBQUVBLGFBQUtDLFFBQUwsQ0FBYztBQUFFQyxpQkFBTyxFQUFFSCxRQUFRLENBQUMsQ0FBRDtBQUFuQixTQUFkO0FBQ0FSLG9CQUFZLENBQUNZLE9BQWIsQ0FBcUIsU0FBckIsRUFBZ0NKLFFBQVEsQ0FBQyxDQUFELENBQXhDO0FBQ0FLLGNBQU0sQ0FBQ0MsSUFBUCxDQUFZLFlBQVosRUFQRyxDQVNIOztBQUNBLGNBQU1DLEdBQUcsR0FBRyxNQUFNVixJQUFJLENBQUNILEdBQUwsQ0FBU2EsR0FBVCxDQUFhQyx1QkFBYixFQUFsQjtBQUNBLE9BWEQsQ0FXRSxPQUFPQyxHQUFQLEVBQVk7QUFDYkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQTtBQUNELEtBNUJrQjs7QUFBQSx5Q0E4QkwsTUFBTTtBQUNuQixXQUFLUCxRQUFMLENBQWM7QUFBQ1UsZUFBTyxFQUFFLENBQUMsS0FBS0MsS0FBTCxDQUFXRDtBQUF0QixPQUFkO0FBQ0EsS0FoQ2tCOztBQUFBLHdDQWtDTEUsQ0FBRCxJQUFPO0FBQ25CLFdBQUtaLFFBQUwsQ0FBYztBQUNiVSxlQUFPLEVBQUU7QUFESSxPQUFkO0FBR0EsS0F0Q2tCOztBQUFBLCtDQXdDQyxNQUFNO0FBQ3pCakIsWUFBTSxDQUFDb0IsUUFBUCxDQUFnQkMsS0FBaEIsR0FBd0IsaUJBQXhCO0FBQ0EsS0ExQ2tCOztBQUFBLGtEQTRDSSxNQUFNLENBRTVCLENBOUNrQjs7QUFFbEIsU0FBS0gsS0FBTCxHQUFhO0FBQ1pJLGdCQUFVLEVBQUUsS0FEQTtBQUVaTCxhQUFPLEVBQUU7QUFGRyxLQUFiO0FBSUEsU0FBS00sYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLRSxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsQ0FBZ0JGLElBQWhCLENBQXFCLElBQXJCLENBQWxCO0FBQ0E7O0FBdUNERyxRQUFNLEdBQUc7QUFDUixXQUNBLG1FQUNFLEtBQUtULEtBQUwsQ0FBV0QsT0FBWCxHQUFxQixNQUFDLHlEQUFEO0FBQU8sYUFBTyxFQUFFLEtBQUtRLFdBQXJCO0FBQWtDLFdBQUssRUFBRSxLQUFLQyxVQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXJCLEdBQW1GLElBRHJGLEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRCxFQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkVBSEQsRUFJQztBQUFRLGFBQU8sRUFBRSxLQUFLRCxXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUpELENBREE7QUFTQTs7QUE1RDhCOztBQWdFakJoQyxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwnO1xuXG5jbGFzcyBJbmRleFBnIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNMb2dnZWRJbjogZmFsc2UsXG5cdFx0XHR0b2dnbGVkOiBmYWxzZSxcblx0XHR9XG5cdFx0dGhpcy5jb25uZWN0V2FsbGV0ID0gdGhpcy5jb25uZWN0V2FsbGV0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy50b2dnbGVNb2RhbCA9IHRoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNsb3NlTW9kYWwgPSB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0bG9jYWxTdG9yYWdlLmNsZWFyKClcblx0XHRsZXQgZXRoID0gd2luZG93LmV0aGVyZXVtO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB3ZWIzID0gbmV3IFdlYjMoZXRoKTtcblx0XHRcdGF3YWl0IGV0aC5lbmFibGUoKTtcblx0XHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XHRcdFxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRzWzBdIH0pO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY291bnQnLCBhY2NvdW50c1swXSk7XG5cdFx0XHRSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xuXG5cdFx0XHQvLyBBQkksIENvbnRyYWN0IC0gQ29ubmVjdCB0byBTcGVuZFBvb2wgUG9kXG5cdFx0XHRjb25zdCBhYmkgPSBhd2FpdCB3ZWIzLmV0aC5hYmkuZW5jb2RlRnVuY3Rpb25TaWduYXR1cmUoKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0fVxuXHR9O1xuXG5cdHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3RvZ2dsZWQ6ICF0aGlzLnN0YXRlLnRvZ2dsZWR9KTtcblx0fTtcblxuXHRjbG9zZU1vZGFsID0gKGUpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHRvZ2dsZWQ6IGZhbHNlXG5cdFx0fSk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcblx0XHR3aW5kb3cuZG9jdW1lbnQudGl0bGUgPSBcIkVsYXN0aWMgU3RvcmFnZVwiO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0e3RoaXMuc3RhdGUudG9nZ2xlZCA/IDxNb2RhbCBjb25uZWN0PXt0aGlzLnRvZ2dsZU1vZGFsfSBjbG9zZT17dGhpcy5jbG9zZU1vZGFsfS8+IDogbnVsbH1cblx0XHRcdDxoMT5FbGFzdGljIFN0b3JhZ2U8L2gxPlxuXHRcdFx0PHA+QSBlbGFzdE9TIGRBcHAgYnVpbHQgb24gdG9wIG9mIElvbmljIGFuZCBIaXZlIHdpdGggVHJpbml0eSBwbHVnaW5zLjwvcD5cblx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVNb2RhbH0+XG5cdFx0XHRcdENvbm5lY3QgeW91ciBNZXRhbWFzayB3YWxsZXRcblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvPik7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/localuser/.gitcoin/submitted/elastos-dapp/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIj81ZTlhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom\n");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"web3\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCI/NjFiNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///web3\n");

/***/ })

/******/ });