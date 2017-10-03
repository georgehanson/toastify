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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levels_success__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__levels_info__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels_warning__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__levels_error__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__levels_default__ = __webpack_require__(14);





var Toastify = (function () {
    function Toastify() {
        this.levels = {
            success: __WEBPACK_IMPORTED_MODULE_0__levels_success__["a" /* default */],
            info: __WEBPACK_IMPORTED_MODULE_1__levels_info__["a" /* default */],
            warning: __WEBPACK_IMPORTED_MODULE_2__levels_warning__["a" /* default */],
            error: __WEBPACK_IMPORTED_MODULE_3__levels_error__["a" /* default */],
            default: __WEBPACK_IMPORTED_MODULE_4__levels_default__["a" /* default */],
        };
        this.options = {
            position: 'bottom-right',
            delay: 5000,
            speed: 10
        };
    }
    Toastify.prototype.setOption = function (key, value) {
        if (this.options.hasOwnProperty(key)) {
            this.options[key] = value;
            return;
        }
        throw "The option key " + key + " is not a valid option";
    };
    Toastify.prototype.success = function (title, body) {
        if (body === void 0) { body = null; }
        this.levels.success.fire(this.options, title, body);
    };
    Toastify.prototype.info = function (title, body) {
        if (body === void 0) { body = null; }
        this.levels.info.fire(this.options, title, body);
    };
    Toastify.prototype.warning = function (title, body) {
        if (body === void 0) { body = null; }
        this.levels.warning.fire(this.options, title, body);
    };
    Toastify.prototype.error = function (title, body) {
        if (body === void 0) { body = null; }
        this.levels.error.fire(this.options, title, body);
    };
    Toastify.prototype.default = function (title, body) {
        if (body === void 0) { body = null; }
        this.levels.default.fire(this.options, title, body);
    };
    return Toastify;
}());
/* harmony default export */ __webpack_exports__["default"] = (new Toastify());


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(0);

__WEBPACK_IMPORTED_MODULE_0__src_index__["default"].default('Test', 'This is the body');


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/* harmony default export */ __webpack_exports__["a"] = (new (function (_super) {
    __extends(Success, _super);
    function Success() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Success.prototype.fire = function (options, title, body) {
        if (body === void 0) { body = null; }
        var notification = this.buildNotification(options, 'success', title, body);
        document.body.appendChild(notification);
        this.showNotification(notification, options);
    };
    return Success;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */])));


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var BaseLevel = (function () {
    function BaseLevel() {
    }
    BaseLevel.prototype.buildNotification = function (options, type, title, body) {
        if (body === void 0) { body = null; }
        var notification = document.createElement('div');
        notification.classList.add('toastify');
        notification.classList.add("toastify-" + options.position);
        notification.classList.add("toastify-" + type);
        var titleArea = document.createElement('span');
        titleArea.classList.add('toastify-title');
        titleArea.innerHTML = title;
        var bodyArea = document.createElement('span');
        bodyArea.classList.add('toastify-content');
        bodyArea.innerHTML = body;
        var cancelIcon = document.createElement('span');
        cancelIcon.classList.add('toastify-cancel-icon');
        cancelIcon.innerHTML = '&#x2716;';
        notification.appendChild(titleArea);
        if (body) {
            notification.appendChild(bodyArea);
        }
        notification.appendChild(cancelIcon);
        return notification;
    };
    BaseLevel.prototype.showNotification = function (notification, options) {
        var _this = this;
        this.fadeIn(notification, options.speed).then(function () {
            _this.setUpEventListener(notification, options);
            setTimeout(function () {
                _this.hideNotification(notification, options);
            }, options.delay);
        });
    };
    BaseLevel.prototype.hideNotification = function (notification, options) {
        this.fadeOut(notification, options.speed).then(function () {
            notification.parentNode.removeChild(notification);
        });
    };
    BaseLevel.prototype.setUpEventListener = function (notification, options) {
        var element = notification.children.item(2);
        element.addEventListener('click', function closeIconClicked(event) {
            event.preventDefault();
            element.removeEventListener("click", closeIconClicked, false);
            this.hideNotification(notification, options);
        }.bind(this));
    };
    BaseLevel.prototype.fadeOut = function (element, speed) {
        return new Promise(function (resolve, reject) {
            var opacity = 1;
            var timer = setInterval(function () {
                if (opacity <= 0.1) {
                    clearInterval(timer);
                    element.style.display = 'none';
                    resolve();
                }
                element.style.opacity = opacity.toString();
                element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
                opacity -= opacity * 0.1;
            }, speed);
        });
    };
    BaseLevel.prototype.fadeIn = function (element, speed) {
        return new Promise(function (resolve, reject) {
            var opacity = 0;
            var timer = setInterval(function () {
                if (opacity > 1) {
                    clearInterval(timer);
                    resolve();
                }
                element.style.opacity = opacity.toString();
                element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
                if (opacity === 0) {
                    opacity = 0.1;
                    return;
                }
                opacity += opacity * 0.1;
            }, speed);
        });
    };
    return BaseLevel;
}());
/* harmony default export */ __webpack_exports__["a"] = (BaseLevel);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/* harmony default export */ __webpack_exports__["a"] = (new (function (_super) {
    __extends(Info, _super);
    function Info() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Info.prototype.fire = function (options, title, body) {
        if (body === void 0) { body = null; }
        var notification = this.buildNotification(options, 'info', title, body);
        document.body.appendChild(notification);
        this.showNotification(notification, options);
    };
    return Info;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */])));


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/* harmony default export */ __webpack_exports__["a"] = (new (function (_super) {
    __extends(Warning, _super);
    function Warning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Warning.prototype.fire = function (options, title, body) {
        if (body === void 0) { body = null; }
        var notification = this.buildNotification(options, 'warning', title, body);
        document.body.appendChild(notification);
        this.showNotification(notification, options);
    };
    return Warning;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */])));


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/* harmony default export */ __webpack_exports__["a"] = (new (function (_super) {
    __extends(Error, _super);
    function Error() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Error.prototype.fire = function (options, title, body) {
        if (body === void 0) { body = null; }
        var notification = this.buildNotification(options, 'error', title, body);
        document.body.appendChild(notification);
        this.showNotification(notification, options);
    };
    return Error;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */])));


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/* harmony default export */ __webpack_exports__["a"] = (new (function (_super) {
    __extends(Default, _super);
    function Default() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Default.prototype.fire = function (options, title, body) {
        if (body === void 0) { body = null; }
        var notification = this.buildNotification(options, 'default', title, body);
        document.body.appendChild(notification);
        this.showNotification(notification, options);
    };
    return Default;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */])));


/***/ })
/******/ ]);