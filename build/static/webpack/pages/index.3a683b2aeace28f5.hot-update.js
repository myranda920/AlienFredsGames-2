"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout_NavbarTwo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/NavbarTwo */ \"./components/Layout/NavbarTwo.js\");\n/* harmony import */ var _components_HomeNine_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HomeNine/Banner */ \"./components/HomeNine/Banner.js\");\n/* harmony import */ var _components_HomeNine_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomeNine/Projects */ \"./components/HomeNine/Projects.js\");\n/* harmony import */ var _components_Common_TestimonialsTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/TestimonialsTwo */ \"./components/Common/TestimonialsTwo.js\");\n/* harmony import */ var _components_Pricing_PricingStyleFive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Pricing/PricingStyleFive */ \"./components/Pricing/PricingStyleFive.js\");\n/* harmony import */ var _components_Common_OurTeamTwo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Common/OurTeamTwo */ \"./components/Common/OurTeamTwo.js\");\n/* harmony import */ var _components_Common_LetsGetToWork__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Common/LetsGetToWork */ \"./components/Common/LetsGetToWork.js\");\n/* harmony import */ var _components_HomeSeven_Clients__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/HomeSeven/Clients */ \"./components/HomeSeven/Clients.js\");\n/* harmony import */ var _components_Common_SubscribeBoxed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Common/SubscribeBoxed */ \"./components/Common/SubscribeBoxed.js\");\n/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout/Footer */ \"./components/Layout/Footer.js\");\n/* harmony import */ var _components_Contact_ContactInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Contact/ContactInfo */ \"./components/Contact/ContactInfo.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Index = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(Index, Component1);\n    var _super = _createSuper(Index);\n    function Index() {\n        _classCallCheck(this, Index);\n        return _super.apply(this, arguments);\n    }\n    _createClass(Index, [\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NavbarTwo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/myrandapalomino/Desktop/AlienFredsGames-2/pages/index.js\",\n                            lineNumber: 18,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HomeNine_Banner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/myrandapalomino/Desktop/AlienFredsGames-2/pages/index.js\",\n                            lineNumber: 19,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact_ContactInfo__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/myrandapalomino/Desktop/AlienFredsGames-2/pages/index.js\",\n                            lineNumber: 20,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HomeNine_Projects__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/myrandapalomino/Desktop/AlienFredsGames-2/pages/index.js\",\n                            lineNumber: 21,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pricing_PricingStyleFive__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/myrandapalomino/Desktop/AlienFredsGames-2/pages/index.js\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_OurTeamTwo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/myrandapalomino/Desktop/AlienFredsGames-2/pages/index.js\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_LetsGetToWork__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/myrandapalomino/Desktop/AlienFredsGames-2/pages/index.js\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HomeSeven_Clients__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/myrandapalomino/Desktop/AlienFredsGames-2/pages/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_SubscribeBoxed__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/myrandapalomino/Desktop/AlienFredsGames-2/pages/index.js\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/myrandapalomino/Desktop/AlienFredsGames-2/pages/index.js\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true);\n            }\n        }\n    ]);\n    return Index;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2M7QUFDSjtBQUNJO0FBQ1k7QUFDRztBQUNiO0FBQ007QUFDVDtBQUNXO0FBQ2hCO0FBQ1c7QUFFNUQsU0FBVyxpQkFtQlI7Ozs7YUFuQkdhLEtBQUs7Ozs7OztZQUNQQyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDTCxxQkFDSTs7c0NBQ0ksOERBQUNaLG9FQUFTOzs7O2dDQUFHO3NDQUNiLDhEQUFDQyxtRUFBTTs7OztnQ0FBRztzQ0FDViw4REFBQ1Msd0VBQVc7Ozs7Z0NBQUc7c0NBQ2YsOERBQUNSLHFFQUFROzs7O2dDQUFHO3NDQUNaLDhEQUFDRSw0RUFBZ0I7Ozs7Z0NBQUc7c0NBQ3BCLDhEQUFDQyxxRUFBVTs7OztnQ0FBRztzQ0FDZCw4REFBQ0Msd0VBQWE7Ozs7Z0NBQUc7c0NBQ2pCLDhEQUFDQyxxRUFBTzs7OztnQ0FBRztzQ0FDWCw4REFBQ0MsMEVBQWM7Ozs7Z0NBQUc7c0NBQ2xCLDhEQUFDQyxrRUFBTTs7OztnQ0FBRTs7Z0NBQ1YsQ0FDTDthQUNMOzs7O0NBQ0osQ0FqQm1CViw0Q0FBUyxDQWlCNUI7QUFFRCwrREFBZVksS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZiYXJUd28gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyVHdvJztcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lTmluZS9CYW5uZXInO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZU5pbmUvUHJvamVjdHMnO1xuaW1wb3J0IFRlc3RpbW9uaWFsc1R3byBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9UZXN0aW1vbmlhbHNUd28nO1xuaW1wb3J0IFByaWNpbmdTdHlsZUZpdmUgZnJvbSAnLi4vY29tcG9uZW50cy9QcmljaW5nL1ByaWNpbmdTdHlsZUZpdmUnO1xuaW1wb3J0IE91clRlYW1Ud28gZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vT3VyVGVhbVR3byc7XG5pbXBvcnQgTGV0c0dldFRvV29yayBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9MZXRzR2V0VG9Xb3JrJztcbmltcG9ydCBDbGllbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZVNldmVuL0NsaWVudHMnO1xuaW1wb3J0IFN1YnNjcmliZUJveGVkIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL1N1YnNjcmliZUJveGVkJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyJztcbmltcG9ydCBDb250YWN0SW5mbyBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3QvQ29udGFjdEluZm8nO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyVHdvIC8+XG4gICAgICAgICAgICAgICAgPEJhbm5lciAvPlxuICAgICAgICAgICAgICAgIDxDb250YWN0SW5mbyAvPlxuICAgICAgICAgICAgICAgIDxQcm9qZWN0cyAvPlxuICAgICAgICAgICAgICAgIDxQcmljaW5nU3R5bGVGaXZlIC8+XG4gICAgICAgICAgICAgICAgPE91clRlYW1Ud28gLz5cbiAgICAgICAgICAgICAgICA8TGV0c0dldFRvV29yayAvPiBcbiAgICAgICAgICAgICAgICA8Q2xpZW50cyAvPlxuICAgICAgICAgICAgICAgIDxTdWJzY3JpYmVCb3hlZCAvPlxuICAgICAgICAgICAgICAgIDxGb290ZXIvPiBcbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJOYXZiYXJUd28iLCJCYW5uZXIiLCJQcm9qZWN0cyIsIlRlc3RpbW9uaWFsc1R3byIsIlByaWNpbmdTdHlsZUZpdmUiLCJPdXJUZWFtVHdvIiwiTGV0c0dldFRvV29yayIsIkNsaWVudHMiLCJTdWJzY3JpYmVCb3hlZCIsIkZvb3RlciIsIkNvbnRhY3RJbmZvIiwiSW5kZXgiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});