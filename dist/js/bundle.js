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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bmShow.js":
/*!**************************!*\
  !*** ./src/js/bmShow.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var popupMenu = document.querySelector('.burger-menu');
var menuOpen = document.querySelector('.modal-button__btn_menu');
var body = document.querySelector('.burger-menu__wrapper');
var burgerMenuClose = document.querySelector('.modal-button__btn_close');

var showMenu = function showMenu(close, show, page) {
  popupMenu.classList.remove(close);
  popupMenu.classList.add(show);
  body.classList.add(page);
};

var closeMenu = function closeMenu(hide, open, del) {
  popupMenu.classList.add(hide);
  popupMenu.classList.remove(open);
  body.classList.remove(del);
};

menuOpen.addEventListener('click', function () {
  showMenu('closeBgMenu', 'showBgMenu', 'whole-page');
});
burgerMenuClose.addEventListener('click', function () {
  closeMenu('closeBgMenu', 'showBgMenu', 'whole-page');
});
body.addEventListener('click', function () {
  closeMenu('closeBgMenu', 'showBgMenu', 'whole-page');
});

/***/ }),

/***/ "./src/js/feedback.js":
/*!****************************!*\
  !*** ./src/js/feedback.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var settings = document.querySelector('.modal-button__btn_settings');
var feedback = document.querySelector('.feedback');
var feedbackWrapper = document.querySelector('.feedback-wrapper');
var feedbackClose = document.querySelector('.feedback-close');
var settings1440 = document.querySelector('.modal-button__btn_settings-feedback');

var showFeedback = function showFeedback(closeFeedback, showFeedbackCall, showOverlay) {
  feedback.classList.remove(closeFeedback);
  feedback.classList.add(showFeedbackCall);
  feedbackWrapper.classList.add(showOverlay);
};

var closeFeedback = function closeFeedback(openFeedbackCall, hideFeedback, cloaseOverlay) {
  feedback.classList.remove(openFeedbackCall);
  feedback.classList.add(hideFeedback);
  feedbackWrapper.classList.remove(cloaseOverlay);
};

settings.addEventListener('click', function () {
  showFeedback('closeFeedback', 'showFeedbackCall', 'feedback-overlay');
});
settings1440.addEventListener('click', function () {
  showFeedback('closeFeedback', 'showFeedbackCall', 'feedback-overlay');
});
feedbackClose.addEventListener('click', function () {
  closeFeedback('showFeedbackCall', 'closeFeedback', 'feedback-overlay');
});
feedbackWrapper.addEventListener('click', function () {
  closeFeedback('showFeedbackCall', 'closeFeedback', 'feedback-overlay');
});

/***/ }),

/***/ "./src/js/feedbackCall.js":
/*!********************************!*\
  !*** ./src/js/feedbackCall.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var callBack = document.querySelector('.modal-button__btn_search-callBack');
var feedbackCall = document.querySelector('.feedbackCall');
var feedbackCallWrapper = document.querySelector('.feedbackCall-wrapper');
var callBackClose = document.querySelector('.modal-button__btn_close-callBack');
var callBack1440 = document.querySelector('.modal-button__btn_services-callBack1440');

var openCallBack = function openCallBack(closeFeedbackCall, showFeedbackCall, overlayCallBack) {
  feedbackCall.classList.remove(closeFeedbackCall);
  feedbackCall.classList.add(showFeedbackCall);
  feedbackCallWrapper.classList.add(overlayCallBack);
};

var closeCallBack = function closeCallBack(hideFeedbackCall, openFeedbackCall, closelayCallBack) {
  feedbackCall.classList.remove(hideFeedbackCall);
  feedbackCall.classList.add(openFeedbackCall);
  feedbackCallWrapper.classList.remove(closelayCallBack);
};

callBack.addEventListener('click', function () {
  openCallBack('closeFeedbackCall', 'showFeedbackCall', 'feedback-overlay');
});
callBack1440.addEventListener('click', function () {
  openCallBack('closeFeedbackCall', 'showFeedbackCall', 'feedback-overlay');
});
callBackClose.addEventListener('click', function () {
  closeCallBack('showFeedbackCall', 'closeFeedbackCall', 'feedback-overlay');
});
feedbackCallWrapper.addEventListener('click', function () {
  closeCallBack('showFeedbackCall', 'closeFeedbackCall', 'feedback-overlay');
});

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bmShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bmShow.js */ "./src/js/bmShow.js");
/* harmony import */ var _bmShow_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bmShow_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _showBrands_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showBrands.js */ "./src/js/showBrands.js");
/* harmony import */ var _showBrands_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_showBrands_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _swiper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swiper.js */ "./src/js/swiper.js");
/* harmony import */ var _swiper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swiper_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _showServices_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showServices.js */ "./src/js/showServices.js");
/* harmony import */ var _showServices_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_showServices_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _feedback_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback.js */ "./src/js/feedback.js");
/* harmony import */ var _feedback_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_feedback_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _feedbackCall_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedbackCall.js */ "./src/js/feedbackCall.js");
/* harmony import */ var _feedbackCall_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_feedbackCall_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _readMore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./readMore.js */ "./src/js/readMore.js");
/* harmony import */ var _readMore_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_readMore_js__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./src/js/readMore.js":
/*!****************************!*\
  !*** ./src/js/readMore.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var readMore = document.querySelector('.read-more_btn');
var textMore = document.querySelector('.content-text__txt-more');
readMore.addEventListener('click', function () {
  if (readMore.innerHTML === 'Читать далее') {
    console.log('jnsjec');
    readMore.innerHTML = 'Скрыть';
    textMore.classList.add('content-text__txt-show');
  } else {
    console.log('jnsjec');
    textMore.classList.remove('content-text__txt-show');
    readMore.innerHTML = 'Читать далее';
  }
});

/***/ }),

/***/ "./src/js/showBrands.js":
/*!******************************!*\
  !*** ./src/js/showBrands.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var popup = document.querySelectorAll('.swiper-slide__popup');
var openPopup = document.querySelector('.control-btn');
var tablet = window.innerWidth;
var desktop = window.innerWidth;

var show = function show(hide) {
  for (var i = 0; i < popup.length; i++) {
    popup[i].classList.remove(hide);
  }

  ;
  openPopup.innerHTML = 'Скрыть';
  openPopup.classList.add('control-btn__popup-close');
};

openPopup.addEventListener('click', function () {
  if (tablet > 767 && tablet < 1120) {
    if (openPopup.innerHTML === 'Показать все') {
      show('tablet-hide');
    } else {
      for (var i = 0; i < popup.length; i++) {
        popup[i].classList.add('tablet-hide');
        openPopup.innerHTML = 'Показать все';
      }

      ;
    }
  } else if (desktop >= 1120) {
    if (openPopup.innerHTML === 'Показать все') {
      show('desktop-hide');
    } else {
      for (var _i = 2; _i < popup.length; _i++) {
        popup[_i].classList.add('desktop-hide');

        openPopup.innerHTML = 'Показать все';
      }

      ;
    }
  }
});

/***/ }),

/***/ "./src/js/showServices.js":
/*!********************************!*\
  !*** ./src/js/showServices.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var popupElse = document.querySelectorAll('.swiper-slide__else');
var openPopupMore = document.querySelector('.control-btn__more');
openPopupMore.addEventListener('click', function () {
  console.log('sdljnkfl');

  if (openPopupMore.innerHTML === 'Показать все') {
    for (var i = 0; i < popupElse.length; i++) {
      popupElse[i].classList.remove('tablet-hide');
    }

    ;
    openPopupMore.innerHTML = 'Скрыть';
    openPopupMore.classList.add('control-btn__popup-close');
  } else if (openPopupMore.innerHTML === 'Скрыть') {
    for (var _i = 3; _i < popupElse.length; _i++) {
      popupElse[_i].classList.add('tablet-hide');

      openPopupMore.innerHTML = 'Показать все';
    }

    ;
  }
});

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var swiper;
var mobile = window.innerWidth;

function initSwiper() {
  if (mobile <= 550) {
    if (!swiper) {
      swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          type: 'bullets',
          clickable: true
        }
      });
    }

    return;
  }

  if (swiper) {
    swiper.destroy();
    swiper = null;
  }
}

window.addEventListener("resize", initSwiper);
initSwiper();

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map