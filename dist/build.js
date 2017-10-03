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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class BaseLevel {
    buildNotification(options, type, title, body = null) {
        let notification = document.createElement('div');
        notification.classList.add('toastify');
        notification.classList.add(`toastify-${options.position}`);
        notification.classList.add(`toastify-${type}`);
        let titleArea = document.createElement('span');
        titleArea.classList.add('toastify-title');
        titleArea.innerHTML = title;
        let bodyArea = document.createElement('span');
        bodyArea.classList.add('toastify-content');
        bodyArea.innerHTML = body;
        let cancelIcon = document.createElement('span');
        cancelIcon.classList.add('toastify-cancel-icon');
        cancelIcon.innerHTML = '&#x2716;';
        notification.appendChild(titleArea);
        if (body) {
            notification.appendChild(bodyArea);
        }
        notification.appendChild(cancelIcon);
        return notification;
    }
    showNotification(notification, options) {
        this.fadeIn(notification, options.speed).then(() => {
            this.setUpEventListener(notification, options);
            setTimeout(() => {
                this.hideNotification(notification, options);
            }, options.delay);
        });
    }
    hideNotification(notification, options) {
        this.fadeOut(notification, options.speed).then(() => {
            notification.parentNode.removeChild(notification);
        });
    }
    setUpEventListener(notification, options) {
        let element = notification.children.item(2);
        element.addEventListener('click', function closeIconClicked(event) {
            event.preventDefault();
            element.removeEventListener("click", closeIconClicked, false);
            this.hideNotification(notification, options);
        }.bind(this));
    }
    fadeOut(element, speed) {
        return new Promise((resolve, reject) => {
            let opacity = 1;
            let timer = setInterval(() => {
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
    }
    fadeIn(element, speed) {
        return new Promise((resolve, reject) => {
            let opacity = 0;
            let timer = setInterval(() => {
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
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseLevel;



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(8);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levels_success__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__levels_info__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels_warning__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__levels_error__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__levels_default__ = __webpack_require__(7);





class Toastify {
    constructor() {
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
    setOption(key, value) {
        if (this.options.hasOwnProperty(key)) {
            this.options[key] = value;
            return;
        }
        throw `The option key ${key} is not a valid option`;
    }
    success(title, body = null) {
        this.levels.success.fire(this.options, title, body);
    }
    info(title, body = null) {
        this.levels.info.fire(this.options, title, body);
    }
    warning(title, body = null) {
        this.levels.warning.fire(this.options, title, body);
    }
    error(title, body = null) {
        this.levels.error.fire(this.options, title, body);
    }
    default(title, body = null) {
        return this.levels.default.fire(this.options, title, body);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (new Toastify());


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = (new class Success extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    fire(options, title, body = null) {
        let notification = this.buildNotification(options, 'success', title, body);
        document.body.appendChild(notification);
        this.showNotification(notification, options);
    }
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = (new class Info extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    fire(options, title, body = null) {
        let notification = this.buildNotification(options, 'info', title, body);
        document.body.appendChild(notification);
        this.showNotification(notification, options);
    }
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = (new class Warning extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    fire(options, title, body = null) {
        let notification = this.buildNotification(options, 'warning', title, body);
        document.body.appendChild(notification);
        this.showNotification(notification, options);
    }
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = (new class Error extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    fire(options, title, body = null) {
        let notification = this.buildNotification(options, 'error', title, body);
        document.body.appendChild(notification);
        this.showNotification(notification, options);
    }
});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = (new class Default extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    fire(options, title, body = null) {
        let notification = this.buildNotification(options, 'default', title, body);
        document.body.appendChild(notification);
        this.showNotification(notification, options);
    }
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);