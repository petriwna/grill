/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Basket.js":
/*!**************************!*\
  !*** ./src/js/Basket.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basket: () => (/* binding */ Basket)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Basket = /*#__PURE__*/function () {
  function Basket() {
    _classCallCheck(this, Basket);
    this.basketFab = document.querySelector('#basket');
    this.countBasket = document.querySelector('#basket-count');
    this.basket = {};
    this.addClickListeners();
  }
  return _createClass(Basket, [{
    key: "addClickListeners",
    value: function addClickListeners() {
      var _this = this;
      this.basketFab.addEventListener('click', function () {
        return _this.handleClickFab();
      });
    }
  }, {
    key: "handleClickFab",
    value: function handleClickFab() {
      this.modal.openModalBasket();
    }
  }, {
    key: "addProductToBasket",
    value: function addProductToBasket(card) {
      console.log(card);
      this.basketFab.style.display = 'flex';
      this.count = this.basket.length;
      this.countBasket.textContent = this.count;
    }
  }]);
}();

/***/ }),

/***/ "./src/js/BasketModal.js":
/*!*******************************!*\
  !*** ./src/js/BasketModal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasketModal: () => (/* binding */ BasketModal)
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/js/Modal.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BasketModal = /*#__PURE__*/function (_Modal) {
  function BasketModal() {
    _classCallCheck(this, BasketModal);
    return _callSuper(this, BasketModal, ['#modal-basket', '#close-basket']);
  }
  _inherits(BasketModal, _Modal);
  return _createClass(BasketModal, [{
    key: "openWithBasket",
    value: function openWithBasket(basketItems) {
      this.populateBasket(basketItems);
      this.open();
    }
  }, {
    key: "populateBasket",
    value: function populateBasket(basketItems) {
      console.log('basket', basketItems);
    }
  }]);
}(_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal);

/***/ }),

/***/ "./src/js/Catalog.js":
/*!***************************!*\
  !*** ./src/js/Catalog.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Catalog: () => (/* binding */ Catalog)
/* harmony export */ });
/* harmony import */ var _Basket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Basket */ "./src/js/Basket.js");
/* harmony import */ var _BasketModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasketModal */ "./src/js/BasketModal.js");
/* harmony import */ var _ProductModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductModal */ "./src/js/ProductModal.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var Catalog = /*#__PURE__*/function () {
  function Catalog() {
    _classCallCheck(this, Catalog);
    this.cards = document.querySelectorAll('.card');
    this.btnDetails = document.querySelectorAll('.details');
    this.btnBuy = document.querySelectorAll('.card__button-buy');
    this.productModal = new _ProductModal__WEBPACK_IMPORTED_MODULE_2__.ProductModal();
    this.basketModal = new _BasketModal__WEBPACK_IMPORTED_MODULE_1__.BasketModal();
    this.basket = new _Basket__WEBPACK_IMPORTED_MODULE_0__.Basket();
    this.addClickListeners();
  }
  return _createClass(Catalog, [{
    key: "addClickListeners",
    value: function addClickListeners() {
      var _this = this;
      this.cards.forEach(function (card) {
        card.addEventListener('click', function (event) {
          return _this.handleCardClick(event);
        });
      });
      this.btnDetails.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
          return _this.handleClickDetails(event);
        });
      });
      this.btnBuy.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
          return _this.handleClickBuy(event);
        });
      });
    }
  }, {
    key: "handleCardClick",
    value: function handleCardClick(event) {
      var card = event.currentTarget.closest('.card');
      this.productModal.openWithProduct(card);
    }
  }, {
    key: "handleClickDetails",
    value: function handleClickDetails(event) {
      event.stopPropagation();
      var card = event.currentTarget.closest('.card');
      if (card) {
        this.productModal.openWithProduct(card);
      }
    }
  }, {
    key: "handleClickBuy",
    value: function handleClickBuy(event) {
      event.stopPropagation();
      var card = event.currentTarget.closest('.card');
      this.modal.openModalBasket(card);
      if (card) {
        this.basketModal.open();
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/js/Modal.js":
/*!*************************!*\
  !*** ./src/js/Modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Modal = /*#__PURE__*/function () {
  function Modal(backdropSelector, closeBtnSelector) {
    var _this = this;
    _classCallCheck(this, Modal);
    this.backdrop = document.querySelector(backdropSelector);
    this.closeBtn = document.querySelector(closeBtnSelector);
    this.closeBtn.addEventListener('click', function () {
      return _this.close();
    });
    this.backdrop.addEventListener('click', function (event) {
      return _this.handleClickOutside(event);
    });
  }
  return _createClass(Modal, [{
    key: "open",
    value: function open() {
      this.backdrop.classList.remove('is-hidden');
    }
  }, {
    key: "close",
    value: function close() {
      this.backdrop.classList.add('is-hidden');
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      if (event.target === this.backdrop) {
        this.close();
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/js/ProductModal.js":
/*!********************************!*\
  !*** ./src/js/ProductModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductModal: () => (/* binding */ ProductModal)
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/js/Modal.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProductModal = /*#__PURE__*/function (_Modal) {
  function ProductModal() {
    var _this;
    _classCallCheck(this, ProductModal);
    _this = _callSuper(this, ProductModal, ['#modal-product', '#close-product']);
    _this.modalTitle = document.querySelector('.modal__title');
    _this.modalCode = document.querySelector('.modal__code');
    _this.modalPrice = document.querySelector('.modal__price');
    _this.modalDescription = document.querySelector('.modal__description');
    return _this;
  }
  _inherits(ProductModal, _Modal);
  return _createClass(ProductModal, [{
    key: "openWithProduct",
    value: function openWithProduct(card) {
      this.getProductDescription(card);
      this.open();
    }
  }, {
    key: "getProductDescription",
    value: function getProductDescription(card) {
      var cardTitle = card.querySelector('.card__title').textContent;
      var cardCode = card.querySelector('.card__code').textContent;
      var cardPriceOld = card.querySelector('.price__old').textContent;
      var cardPriceNew = card.querySelector('.price__new').textContent;
      var cardDescription = card.querySelector('.product');
      var cardDescriptionCopy = cardDescription.cloneNode(true);
      cardDescriptionCopy.classList.remove('visually-hidden');
      this.modalTitle.textContent = cardTitle;
      this.modalCode.textContent = cardCode;
      this.modalPrice.innerHTML = "\n            <p class=\"price__new\">".concat(cardPriceNew, "</p>\n            <p class=\"price__old\">").concat(cardPriceOld, "</p>\n        ");
      this.modalDescription.appendChild(cardDescriptionCopy);
    }
  }]);
}(_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleBtn: () => (/* binding */ toggleBtn)
/* harmony export */ });
function toggleBtn(btn) {
  if (window.scrollY === 0) {
    btn.style.display = 'none';
  } else {
    btn.style.display = 'flex';
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[5].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[4]!./src/scss/main.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[5].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[4]!./src/scss/main.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../public/images/delivery.png */ "./src/public/images/delivery.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.visually-hidden {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.old-price {
  color: #839aa9;
  color: var(--color-secondary-text);
}

.accent {
  font-weight: 600;
}

:root {
  --color-primary-light: #f9f9f9;
  --color-primary-dark: rgb(33, 36, 41);
  --color-brand-normal: #819b57;
  --color-brand-dark: #465929;
  --color-brand-yellow-light: #ff9f0e;
  --color-brand-yellow-dark: #d0810b;
  --color-secondary-dark: #a18268;
  --color-secondary-text: #839aa9;
  --color-secondary-hover: rgba(131, 154, 169, 0.17);
}

.button {
  border-radius: 8px;
  padding: 16px 32px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: #f9f9f9;
  color: var(--color-primary-light);
  font-family: "Poppins", sans-serif;
}
.button:hover {
  background: transparent;
}

.card {
  border-radius: 8px;
  width: 288px;
  box-shadow: 0 8px 16px 0 rgba(24, 24, 23, 0.08);
  background: #fff;
  overflow: hidden;
  cursor: pointer;
}
.card__container {
  padding: 20px;
}
.card__title {
  font-size: 16px;
  font-weight: 400;
  text-align: center;
}
.card__buttons {
  display: flex;
  gap: 5px;
  justify-content: center;
}
.card__button-detail {
  background-color: #819b57;
  background-color: var(--color-brand-normal);
  border: 2px solid #819b57;
  border: 2px solid var(--color-brand-normal);
}
.card__button-detail:hover {
  color: #465929;
  color: var(--color-brand-dark);
}
.card__button-buy {
  background-color: #ff9f0e;
  background-color: var(--color-brand-yellow-light);
  border: 2px solid #ff9f0e;
  border: 2px solid var(--color-brand-yellow-light);
}
.card__button-buy:hover {
  color: #d0810b;
  color: var(--color-brand-yellow-dark);
}

.input {
  position: relative;
}
.input__label {
  position: absolute;
  top: 16px;
  left: 42px;
}
.input__control {
  padding: 8px 24px;
  width: 100%;
  font-size: 16px;
  line-height: 1.17;
  border-radius: 8px;
  border: 1px solid #a18268;
  border: 1px solid var(--color-secondary-dark);
  background-color: transparent;
}
.input__control:focus {
  border-color: #819b57;
  border-color: var(--color-brand-normal);
  outline: none;
}
.input__control::-moz-placeholder {
  color: #a18268;
  color: var(--color-secondary-dark);
  font-size: 16px;
  line-height: 1.17;
}
.input__control::placeholder {
  color: #a18268;
  color: var(--color-secondary-dark);
  font-size: 16px;
  line-height: 1.17;
}
.input__control:focus::-moz-placeholder {
  color: rgb(33, 36, 41);
  color: var(--color-primary-dark);
}
.input__control:focus::placeholder {
  color: rgb(33, 36, 41);
  color: var(--color-primary-dark);
}
@media screen and (min-width: 768px) {
  .input__control {
    padding: 16px 42px;
  }
}

.link {
  color: #f9f9f9;
  color: var(--color-primary-light);
  text-decoration: none;
  transition: color 0.3s;
}
.link:hover {
  color: #819b57;
  color: var(--color-brand-normal);
}

.order-card {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 233px;
}
.order-card__img {
  width: 233px;
  height: 195px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.order-card__description {
  width: 100%;
  text-align: center;
}
.order-card__title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
}

.price {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
}
.price--left {
  justify-content: left;
}
.price__new {
  font-weight: 600;
  font-size: 18px;
  text-align: center;
}
.price__old {
  color: #839aa9;
  color: var(--color-secondary-text);
  font-weight: 400;
  font-size: 14px;
  text-decoration: line-through;
  text-align: center;
}

.product__title {
  font-size: 20px;
  font-weight: 700;
}

.advantages__description {
  display: flex;
}
.advantages__img-slider {
  width: 50%;
}

.basket-modal {
  position: relative;
  width: 100%;
  max-width: 560px;
  height: 100%;
  max-height: 880px;
  background-color: #f9f9f9;
  background-color: var(--color-primary-light);
  border-radius: 32px;
  padding: 64px 48px;
  display: flex;
  gap: 30px;
  overflow-y: auto;
}
@media screen and (min-width: 768px) {
  .basket-modal {
    padding: 48px;
  }
}
.basket-modal__btn-close {
  position: absolute;
  top: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  fill: transparent;
  stroke: rgb(33, 36, 41);
  stroke: var(--color-primary-dark);
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.basket-modal__images {
  width: 50%;
}
.basket-modal__description {
  width: 50%;
}
.basket-modal__title {
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 900;
  line-height: 1.5;
}
@media screen and (min-width: 768px) {
  .basket-modal__title {
    font-size: 24px;
    line-height: 1.3;
  }
}
.basket-modal__code {
  color: #839aa9;
  color: var(--color-secondary-text);
}
.basket-modal__text {
  margin-bottom: 40px;
  text-align: center;
}
@media screen and (min-width: 768px) {
  .basket-modal__text {
    margin-bottom: 72px;
  }
}

.catalog__slider {
  display: flex;
  gap: 32px;
  align-items: center;
}
.catalog__container {
  overflow: hidden;
  width: 100%;
}
.catalog__list {
  margin-bottom: 32px;
  display: flex;
  gap: 30px;
  width: 100%;
  justify-content: space-around;
}
.catalog__button {
  display: none;
}
@media screen and (min-width: 768px) {
  .catalog__button {
    display: flex;
  }
}

.contacts__container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 15px;
}
.contacts__text {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
}
.contacts__paragraph {
  color: #839aa9;
  color: var(--color-secondary-text);
  font-weight: 400;
  font-size: 26px;
}
.contacts__form-field {
  margin-bottom: 24px;
}
.contacts__button {
  display: block;
  background-color: #819b57;
  background-color: var(--color-brand-normal);
  border: 2px solid #819b57;
  border: 2px solid var(--color-brand-normal);
  margin: 0 auto 16px;
}
.contacts__button:hover {
  color: #465929;
  color: var(--color-brand-dark);
}

.container {
  width: 100%;
  max-width: 1288px;
  margin: 0 auto;
  padding: 0 24px;
}

.fabs {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.fabs__item {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.fabs__item:hover {
  transform: scale(1.1);
}
.fabs__counter {
  min-width: 30px;
  width: auto;
  width: initial;
  height: 30px;
  padding: 0 5px;
  background-color: red;
  color: #fff;
  border-radius: 30px;
  position: absolute;
  right: -3px;
  bottom: -3px;
  text-align: center;
  line-height: 30px;
  box-sizing: border-box;
}
.fabs__icon {
  fill: transparent;
  stroke: #ff9f0e;
  stroke: var(--color-brand-yellow-light);
}

.footer {
  background-color: rgb(33, 36, 41);
  background-color: var(--color-primary-dark);
  padding: 32px 0;
  position: relative;
}
.footer__container {
  display: flex;
  gap: 20px;
  flex-direction: column;
}
@media screen and (min-width: 768px) {
  .footer__container {
    flex-direction: row;
  }
}
.footer__nav, .footer__address {
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: center;
}
@media screen and (min-width: 768px) {
  .footer__nav, .footer__address {
    flex-direction: row;
    text-align: left;
  }
}
@media screen and (min-width: 768px) {
  .footer__nav {
    flex-basis: 45%;
  }
}
@media screen and (min-width: 768px) {
  .footer__address {
    flex-basis: 55%;
  }
}
.footer__logo, .footer__menu {
  flex-grow: 1;
}
.footer__menu {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px;
}
.footer__address-list, .footer__address-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.footer__address-link {
  color: #f9f9f9;
  color: var(--color-primary-light);
  font-size: 16px;
  font-weight: 300;
  text-decoration: none;
}
.footer__address-link:hover {
  color: #819b57;
  color: var(--color-brand-normal);
}
.footer__socials {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 16px;
}
@media screen and (min-width: 768px) {
  .footer__socials {
    justify-content: flex-start;
  }
}
.footer__socials-icon {
  fill: #f9f9f9;
  fill: var(--color-primary-light);
}
.footer__socials-icon:hover {
  fill: #819b57;
  fill: var(--color-brand-normal);
}
.footer__schedule {
  font-size: 16px;
  color: #f9f9f9;
  color: var(--color-primary-light);
}
.footer__address-copyright {
  color: #f9f9f9;
  color: var(--color-primary-light);
  font-size: 14px;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 16px;
}
.header__container {
  display: flex;
  align-items: center;
  gap: 40px;
}
.header__nav {
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 40px;
}
.header__menu {
  display: flex;
  gap: 64px;
  flex-grow: 1;
  justify-content: flex-end;
}

.hero-section {
  padding: 124px 0;
  background-color: rgb(33, 36, 41);
  background-color: var(--color-primary-dark);
  font-size: 40px;
  color: #f9f9f9;
  color: var(--color-primary-light);
}
.hero-section__container {
  width: 530px;
  margin-bottom: 38px;
}
.hero-section__title {
  font-size: 58px;
  line-height: 1;
  font-weight: 900;
}
.hero-section__description {
  font-size: 24px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.hero-section__guarantee {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 18px;
  background: rgba(246, 95, 95, 0.1);
  border-radius: 100px;
  width: 190px;
  padding: 8px;
}
.hero-section__guarantee--text {
  margin-bottom: 0;
  color: #f9f9f9;
  color: var(--color-primary-light);
}
.hero-section__icon {
  fill: #d0810b;
  fill: var(--color-brand-yellow-dark);
}
.hero-section__buttons {
  display: flex;
  gap: 29px;
}
.hero-section__button {
  background: #819b57;
  background: var(--color-brand-normal);
  border: 2px solid #819b57;
  border: 2px solid var(--color-brand-normal);
}
.hero-section__button:hover {
  color: #465929;
  color: var(--color-brand-dark);
}
.hero-section__video-btn {
  font-weight: 500;
  font-size: 18px;
  display: flex;
  gap: 10px;
  cursor: pointer;
  align-items: center;
  border-radius: 50px;
  padding: 0 10px 0 5px;
}
.hero-section__video-btn:hover {
  background: rgba(131, 154, 169, 0.17);
  background: var(--color-secondary-hover);
}
.hero-section__btn {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #ff9f0e;
  background: var(--color-brand-yellow-light);
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-section__icon-btn {
  fill: #010F1C;
}

.info__video {
  width: 100%;
  margin-bottom: 20px;
  height: auto;
  border-radius: 10px;
  border: 2px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.info__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-gap: 20px;
  gap: 20px;
}
.info__item {
  display: flex;
  align-items: center;
  gap: 10px;
}
.info__icon {
  fill: #819b57;
  fill: var(--color-brand-normal);
}

.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: opacity 0.3s, visibility 0.3s;
  cursor: pointer;
}
.backdrop.is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.modal {
  position: relative;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  max-height: 880px;
  background-color: #f9f9f9;
  background-color: var(--color-primary-light);
  border-radius: 32px;
  padding: 64px 48px;
  display: flex;
  gap: 30px;
  overflow-y: auto;
}
@media screen and (min-width: 768px) {
  .modal {
    padding: 48px;
  }
}
.modal__btn-close {
  position: absolute;
  top: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  fill: transparent;
  stroke: rgb(33, 36, 41);
  stroke: var(--color-primary-dark);
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.modal__images {
  width: 50%;
}
.modal__description {
  width: 50%;
}
.modal__title {
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 900;
  line-height: 1.5;
}
@media screen and (min-width: 768px) {
  .modal__title {
    font-size: 24px;
    line-height: 1.3;
  }
}
.modal__code {
  color: #839aa9;
  color: var(--color-secondary-text);
}
.modal__text {
  margin-bottom: 40px;
  text-align: center;
}
@media screen and (min-width: 768px) {
  .modal__text {
    margin-bottom: 72px;
  }
}

.order__list {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.sale__prop {
  display: flex;
  justify-content: center;
  gap: 60px;
}
.sale__price {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: 700;
  position: relative;
  padding: 10px 50px;
}
.sale__old {
  font-size: 24px;
  text-decoration: line-through;
}
.sale__new {
  font-size: 30px;
}
.sale__promotion {
  position: absolute;
  top: 0;
  right: 0;
}
.sale__button {
  background: #819b57;
  background: var(--color-brand-normal);
  border: 2px solid #819b57;
  border: 2px solid var(--color-brand-normal);
}
.sale__button:hover {
  color: #465929;
  color: var(--color-brand-dark);
}
.sale__bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
.sale__second-title {
  text-align: center;
  font-size: 30px;
  font-weight: 600;
}

.section {
  padding: 20px 0;
}
@media screen and (min-width: 768px) {
  .section {
    padding: 48px 0;
  }
}
.section__title {
  font-size: 32px;
  font-weight: 900;
  line-height: 1.5;
}
@media screen and (min-width: 768px) {
  .section__title {
    font-size: 64px;
    line-height: 1.3;
  }
}
.section__title--centered {
  text-align: center;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  color: rgb(33, 36, 41);
  color: var(--color-primary-dark);
  background-color: #f9f9f9;
  background-color: var(--color-primary-light);
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
  font-family: "Poppins", sans-serif;
}
@media screen and (min-width: 768px) {
  body {
    font-size: 18px;
    font-weight: 400;
  }
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  -o-object-fit: cover;
     object-fit: cover;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  display: inline-block;
}

address {
  font-style: normal;
}`, "",{"version":3,"sources":["webpack://./src/scss/utils/_utils.scss","webpack://./src/scss/main.scss","webpack://./src/scss/utils/_variable.scss","webpack://./src/scss/components/_button.scss","webpack://./src/scss/components/_card.scss","webpack://./src/scss/components/_input.scss","webpack://./src/scss/components/_link.scss","webpack://./src/scss/components/_order-card.scss","webpack://./src/scss/components/_price.scss","webpack://./src/scss/components/_product.scss","webpack://./src/scss/layouts/_advantages.scss","webpack://./src/scss/layouts/_basket-modal.scss","webpack://./src/scss/layouts/_catalog.scss","webpack://./src/scss/layouts/_contacts.scss","webpack://./src/scss/layouts/_container.scss","webpack://./src/scss/layouts/_fabs.scss","webpack://./src/scss/layouts/_footer.scss","webpack://./src/scss/layouts/_header.scss","webpack://./src/scss/layouts/_hero-section.scss","webpack://./src/scss/layouts/_info.scss","webpack://./src/scss/layouts/_modal.scss","webpack://./src/scss/layouts/_order.scss","webpack://./src/scss/layouts/_sale.scss","webpack://./src/scss/layouts/_section.scss","webpack://./src/scss/_base.scss"],"names":[],"mappings":"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","sourcesContent":[".visually-hidden {\r\n  position: absolute;\r\n  left: -10000px;\r\n  top: auto;\r\n  width: 1px;\r\n  height: 1px;\r\n  overflow: hidden;\r\n}\r\n\r\n.old-price {\r\n  color: var(--color-secondary-text);\r\n}\r\n\r\n.accent {\r\n  font-weight: 600;\r\n}\r\n",".visually-hidden {\n  position: absolute;\n  left: -10000px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n\n.old-price {\n  color: var(--color-secondary-text);\n}\n\n.accent {\n  font-weight: 600;\n}\n\n:root {\n  --color-primary-light: #f9f9f9;\n  --color-primary-dark: rgb(33, 36, 41);\n  --color-brand-normal: #819b57;\n  --color-brand-dark: #465929;\n  --color-brand-yellow-light: #ff9f0e;\n  --color-brand-yellow-dark: #d0810b;\n  --color-secondary-dark: #a18268;\n  --color-secondary-text: #839aa9;\n  --color-secondary-hover: rgba(131, 154, 169, 0.17);\n}\n\n.button {\n  border-radius: 8px;\n  padding: 16px 32px;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--color-primary-light);\n  font-family: \"Poppins\", sans-serif;\n}\n.button:hover {\n  background: transparent;\n}\n\n.card {\n  border-radius: 8px;\n  width: 288px;\n  box-shadow: 0 8px 16px 0 rgba(24, 24, 23, 0.08);\n  background: #fff;\n  overflow: hidden;\n  cursor: pointer;\n}\n.card__container {\n  padding: 20px;\n}\n.card__title {\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n}\n.card__buttons {\n  display: flex;\n  gap: 5px;\n  justify-content: center;\n}\n.card__button-detail {\n  background-color: var(--color-brand-normal);\n  border: 2px solid var(--color-brand-normal);\n}\n.card__button-detail:hover {\n  color: var(--color-brand-dark);\n}\n.card__button-buy {\n  background-color: var(--color-brand-yellow-light);\n  border: 2px solid var(--color-brand-yellow-light);\n}\n.card__button-buy:hover {\n  color: var(--color-brand-yellow-dark);\n}\n\n.input {\n  position: relative;\n}\n.input__label {\n  position: absolute;\n  top: 16px;\n  left: 42px;\n}\n.input__control {\n  padding: 8px 24px;\n  width: 100%;\n  font-size: 16px;\n  line-height: 1.17;\n  border-radius: 8px;\n  border: 1px solid var(--color-secondary-dark);\n  background-color: transparent;\n}\n.input__control:focus {\n  border-color: var(--color-brand-normal);\n  outline: none;\n}\n.input__control::placeholder {\n  color: var(--color-secondary-dark);\n  font-size: 16px;\n  line-height: 1.17;\n}\n.input__control:focus::placeholder {\n  color: var(--color-primary-dark);\n}\n@media screen and (min-width: 768px) {\n  .input__control {\n    padding: 16px 42px;\n  }\n}\n\n.link {\n  color: var(--color-primary-light);\n  text-decoration: none;\n  transition: color 0.3s;\n}\n.link:hover {\n  color: var(--color-brand-normal);\n}\n\n.order-card {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  width: 233px;\n}\n.order-card__img {\n  width: 233px;\n  height: 195px;\n  background-image: url(\"../../public/images/delivery.png\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.order-card__description {\n  width: 100%;\n  text-align: center;\n}\n.order-card__title {\n  font-size: 28px;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n\n.price {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  align-items: center;\n}\n.price--left {\n  justify-content: left;\n}\n.price__new {\n  font-weight: 600;\n  font-size: 18px;\n  text-align: center;\n}\n.price__old {\n  color: var(--color-secondary-text);\n  font-weight: 400;\n  font-size: 14px;\n  text-decoration: line-through;\n  text-align: center;\n}\n\n.product__title {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.advantages__description {\n  display: flex;\n}\n.advantages__img-slider {\n  width: 50%;\n}\n\n.basket-modal {\n  position: relative;\n  width: 100%;\n  max-width: 560px;\n  height: 100%;\n  max-height: 880px;\n  background-color: var(--color-primary-light);\n  border-radius: 32px;\n  padding: 64px 48px;\n  display: flex;\n  gap: 30px;\n  overflow-y: auto;\n}\n@media screen and (min-width: 768px) {\n  .basket-modal {\n    padding: 48px;\n  }\n}\n.basket-modal__btn-close {\n  position: absolute;\n  top: 40px;\n  right: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  fill: transparent;\n  stroke: var(--color-primary-dark);\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n.basket-modal__images {\n  width: 50%;\n}\n.basket-modal__description {\n  width: 50%;\n}\n.basket-modal__title {\n  margin-bottom: 8px;\n  font-size: 12px;\n  font-weight: 900;\n  line-height: 1.5;\n}\n@media screen and (min-width: 768px) {\n  .basket-modal__title {\n    font-size: 24px;\n    line-height: 1.3;\n  }\n}\n.basket-modal__code {\n  color: var(--color-secondary-text);\n}\n.basket-modal__text {\n  margin-bottom: 40px;\n  text-align: center;\n}\n@media screen and (min-width: 768px) {\n  .basket-modal__text {\n    margin-bottom: 72px;\n  }\n}\n\n.catalog__slider {\n  display: flex;\n  gap: 32px;\n  align-items: center;\n}\n.catalog__container {\n  overflow: hidden;\n  width: 100%;\n}\n.catalog__list {\n  margin-bottom: 32px;\n  display: flex;\n  gap: 30px;\n  width: 100%;\n  justify-content: space-around;\n}\n.catalog__button {\n  display: none;\n}\n@media screen and (min-width: 768px) {\n  .catalog__button {\n    display: flex;\n  }\n}\n\n.contacts__container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  gap: 15px;\n}\n.contacts__text {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  gap: 16px;\n}\n.contacts__paragraph {\n  color: var(--color-secondary-text);\n  font-weight: 400;\n  font-size: 26px;\n}\n.contacts__form-field {\n  margin-bottom: 24px;\n}\n.contacts__button {\n  display: block;\n  background-color: var(--color-brand-normal);\n  border: 2px solid var(--color-brand-normal);\n  margin: 0 auto 16px;\n}\n.contacts__button:hover {\n  color: var(--color-brand-dark);\n}\n\n.container {\n  width: 100%;\n  max-width: 1288px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n\n.fabs {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.fabs__item {\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 50px;\n  width: 80px;\n  height: 80px;\n  cursor: pointer;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.fabs__item:hover {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n.fabs__counter {\n  min-width: 30px;\n  width: initial;\n  height: 30px;\n  padding: 0 5px;\n  background-color: red;\n  color: #fff;\n  border-radius: 30px;\n  position: absolute;\n  right: -3px;\n  bottom: -3px;\n  text-align: center;\n  line-height: 30px;\n  box-sizing: border-box;\n}\n.fabs__icon {\n  fill: transparent;\n  stroke: var(--color-brand-yellow-light);\n}\n\n.footer {\n  background-color: var(--color-primary-dark);\n  padding: 32px 0;\n  position: relative;\n}\n.footer__container {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n}\n@media screen and (min-width: 768px) {\n  .footer__container {\n    flex-direction: row;\n  }\n}\n.footer__nav, .footer__address {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  text-align: center;\n}\n@media screen and (min-width: 768px) {\n  .footer__nav, .footer__address {\n    flex-direction: row;\n    text-align: left;\n  }\n}\n@media screen and (min-width: 768px) {\n  .footer__nav {\n    flex-basis: 45%;\n  }\n}\n@media screen and (min-width: 768px) {\n  .footer__address {\n    flex-basis: 55%;\n  }\n}\n.footer__logo, .footer__menu {\n  flex-grow: 1;\n}\n.footer__menu {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  gap: 16px;\n}\n.footer__address-list, .footer__address-info {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.footer__address-link {\n  color: var(--color-primary-light);\n  font-size: 16px;\n  font-weight: 300;\n  text-decoration: none;\n}\n.footer__address-link:hover {\n  color: var(--color-brand-normal);\n}\n.footer__socials {\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n  margin-top: 16px;\n}\n@media screen and (min-width: 768px) {\n  .footer__socials {\n    justify-content: flex-start;\n  }\n}\n.footer__socials-icon {\n  fill: var(--color-primary-light);\n}\n.footer__socials-icon:hover {\n  fill: var(--color-brand-normal);\n}\n.footer__schedule {\n  font-size: 16px;\n  color: var(--color-primary-light);\n}\n.footer__address-copyright {\n  color: var(--color-primary-light);\n  font-size: 14px;\n}\n\n.header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding-top: 16px;\n}\n.header__container {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n}\n.header__nav {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  gap: 40px;\n}\n.header__menu {\n  display: flex;\n  gap: 64px;\n  flex-grow: 1;\n  justify-content: flex-end;\n}\n\n.hero-section {\n  padding: 124px 0;\n  background-color: var(--color-primary-dark);\n  font-size: 40px;\n  color: var(--color-primary-light);\n}\n.hero-section__container {\n  width: 530px;\n  margin-bottom: 38px;\n}\n.hero-section__title {\n  font-size: 58px;\n  line-height: 1;\n  font-weight: 900;\n}\n.hero-section__description {\n  font-size: 24px;\n  font-weight: 400;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.hero-section__guarantee {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 18px;\n  background: rgba(246, 95, 95, 0.1);\n  border-radius: 100px;\n  width: 190px;\n  padding: 8px;\n}\n.hero-section__guarantee--text {\n  margin-bottom: 0;\n  color: var(--color-primary-light);\n}\n.hero-section__icon {\n  fill: var(--color-brand-yellow-dark);\n}\n.hero-section__buttons {\n  display: flex;\n  gap: 29px;\n}\n.hero-section__button {\n  background: var(--color-brand-normal);\n  border: 2px solid var(--color-brand-normal);\n}\n.hero-section__button:hover {\n  color: var(--color-brand-dark);\n}\n.hero-section__video-btn {\n  font-weight: 500;\n  font-size: 18px;\n  display: flex;\n  gap: 10px;\n  cursor: pointer;\n  align-items: center;\n  border-radius: 50px;\n  padding: 0 10px 0 5px;\n}\n.hero-section__video-btn:hover {\n  background: var(--color-secondary-hover);\n}\n.hero-section__btn {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background: var(--color-brand-yellow-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-section__icon-btn {\n  fill: #010F1C;\n}\n\n.info__video {\n  width: 100%;\n  margin-bottom: 20px;\n  height: auto;\n  border-radius: 10px;\n  border: 2px solid #ccc;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.info__list {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 0;\n  grid-row-gap: 0;\n  gap: 20px;\n}\n.info__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.info__icon {\n  fill: var(--color-brand-normal);\n}\n\n.backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  transition: opacity 0.3s, visibility 0.3s;\n  cursor: pointer;\n}\n.backdrop.is-hidden {\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n}\n\n.modal {\n  position: relative;\n  width: 100%;\n  max-width: 1400px;\n  height: 100%;\n  max-height: 880px;\n  background-color: var(--color-primary-light);\n  border-radius: 32px;\n  padding: 64px 48px;\n  display: flex;\n  gap: 30px;\n  overflow-y: auto;\n}\n@media screen and (min-width: 768px) {\n  .modal {\n    padding: 48px;\n  }\n}\n.modal__btn-close {\n  position: absolute;\n  top: 40px;\n  right: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  fill: transparent;\n  stroke: var(--color-primary-dark);\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n.modal__images {\n  width: 50%;\n}\n.modal__description {\n  width: 50%;\n}\n.modal__title {\n  margin-bottom: 8px;\n  font-size: 12px;\n  font-weight: 900;\n  line-height: 1.5;\n}\n@media screen and (min-width: 768px) {\n  .modal__title {\n    font-size: 24px;\n    line-height: 1.3;\n  }\n}\n.modal__code {\n  color: var(--color-secondary-text);\n}\n.modal__text {\n  margin-bottom: 40px;\n  text-align: center;\n}\n@media screen and (min-width: 768px) {\n  .modal__text {\n    margin-bottom: 72px;\n  }\n}\n\n.order__list {\n  display: flex;\n  gap: 20px;\n  justify-content: space-between;\n}\n\n.sale__prop {\n  display: flex;\n  justify-content: center;\n  gap: 60px;\n}\n.sale__price {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-weight: 700;\n  position: relative;\n  padding: 10px 50px;\n}\n.sale__old {\n  font-size: 24px;\n  text-decoration: line-through;\n}\n.sale__new {\n  font-size: 30px;\n}\n.sale__promotion {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.sale__button {\n  background: var(--color-brand-normal);\n  border: 2px solid var(--color-brand-normal);\n}\n.sale__button:hover {\n  color: var(--color-brand-dark);\n}\n.sale__bottom {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 50px;\n}\n.sale__second-title {\n  text-align: center;\n  font-size: 30px;\n  font-weight: 600;\n}\n\n.section {\n  padding: 20px 0;\n}\n@media screen and (min-width: 768px) {\n  .section {\n    padding: 48px 0;\n  }\n}\n.section__title {\n  font-size: 32px;\n  font-weight: 900;\n  line-height: 1.5;\n}\n@media screen and (min-width: 768px) {\n  .section__title {\n    font-size: 64px;\n    line-height: 1.3;\n  }\n}\n.section__title--centered {\n  text-align: center;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  color: var(--color-primary-dark);\n  background-color: var(--color-primary-light);\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.5;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n}\n@media screen and (min-width: 768px) {\n  body {\n    font-size: 18px;\n    font-weight: 400;\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin-top: 0;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  object-fit: cover;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  display: inline-block;\n}\n\naddress {\n  font-style: normal;\n}",":root {\r\n  --color-primary-light: #f9f9f9;\r\n  --color-primary-dark: rgb(33, 36, 41);\r\n  --color-brand-normal: #819b57;\r\n  --color-brand-dark: #465929;\r\n  --color-brand-yellow-light: #ff9f0e;\r\n  --color-brand-yellow-dark: #d0810b;\r\n  --color-secondary-dark: #a18268;\r\n\r\n  --color-secondary-text: #839aa9;\r\n  --color-secondary-hover: rgba(131, 154, 169, 0.17);\r\n}\r\n\r\n$bp-mobile: 480px;\r\n$bp-tablet: 768px;\r\n$bp-desktop: 1280px;\r\n",".button {\r\n  border-radius: 8px;\r\n  padding: 16px 32px;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: var(--color-primary-light);\r\n  font-family: 'Poppins', sans-serif;\r\n\r\n  &:hover {\r\n    background: transparent;\r\n  }\r\n}\r\n",".card {\r\n  border-radius: 8px;\r\n  width: 288px;\r\n  //height: 512px;\r\n  box-shadow: 0 8px 16px 0 rgba(24, 24, 23, 0.08);\r\n  background: #fff;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n\r\n  &__container {\r\n    padding: 20px;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    text-align: center;\r\n  }\r\n\r\n  &__buttons {\r\n    display: flex;\r\n    gap: 5px;\r\n    justify-content: center;\r\n  }\r\n\r\n  &__button-detail {\r\n    background-color: var(--color-brand-normal);\r\n    border: 2px solid var(--color-brand-normal);\r\n\r\n    &:hover {\r\n      color: var(--color-brand-dark);\r\n    }\r\n  }\r\n\r\n  &__button-buy {\r\n    background-color: var(--color-brand-yellow-light);\r\n    border: 2px solid var(--color-brand-yellow-light);\r\n\r\n    &:hover {\r\n      color: var(--color-brand-yellow-dark);\r\n    }\r\n  }\r\n}\r\n",".input {\r\n  position: relative;\r\n\r\n  &__label {\r\n    position: absolute;\r\n    top: 16px;\r\n    left: 42px;\r\n  }\r\n\r\n  &__control {\r\n    padding: 8px 24px;\r\n    width: 100%;\r\n    font-size: 16px;\r\n    line-height: 1.17;\r\n    border-radius: 8px;\r\n    border: 1px solid var(--color-secondary-dark);\r\n    background-color: transparent;\r\n\r\n    &:focus {\r\n      border-color: var(--color-brand-normal);\r\n      outline: none;\r\n    }\r\n\r\n    &::placeholder {\r\n      color: var(--color-secondary-dark);\r\n      font-size: 16px;\r\n      line-height: 1.17;\r\n    }\r\n\r\n    &:focus::placeholder {\r\n      color: var(--color-primary-dark);\r\n    }\r\n\r\n    @media screen and (min-width: $bp-tablet) {\r\n      padding: 16px 42px;\r\n    }\r\n  }\r\n}\r\n",".link {\r\n  color: var(--color-primary-light);\r\n  text-decoration: none;\r\n  transition: color 0.3s;\r\n\r\n  &:hover {\r\n    color: var(--color-brand-normal);\r\n  }\r\n}\r\n",".order-card {\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 233px;\r\n\r\n  &__img {\r\n    width: 233px;\r\n    height: 195px;\r\n    background-image: url(\"../../public/images/delivery.png\");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n  }\r\n\r\n  &__description {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 28px;\r\n    font-weight: 700;\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n",".price {\r\n  display: flex;\r\n  gap: 8px;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  &--left {\r\n    justify-content: left;\r\n  }\r\n\r\n\r\n  &__new {\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    text-align: center;\r\n  }\r\n\r\n  &__old {\r\n    color: var(--color-secondary-text);\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    text-decoration: line-through;\r\n    text-align: center;\r\n  }\r\n}\r\n",".product {\r\n  &__title {\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n  }\r\n}\r\n",".advantages {\r\n  &__description {\r\n    display: flex;\r\n  }\r\n\r\n  &__img-slider {\r\n    width: 50%;\r\n  }\r\n}\r\n",".basket-modal {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 560px;\r\n  height: 100%;\r\n  max-height: 880px;\r\n  background-color: var(--color-primary-light);\r\n  border-radius: 32px;\r\n  padding: 64px 48px;\r\n  display: flex;\r\n  gap: 30px;\r\n  overflow-y: auto;\r\n\r\n  @media screen and (min-width: $bp-tablet) {\r\n    padding: 48px;\r\n  }\r\n\r\n  &__btn-close {\r\n    position: absolute;\r\n    top: 40px;\r\n    right: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0;\r\n    fill: transparent;\r\n    stroke: var(--color-primary-dark);\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  &__images {\r\n    width: 50%;\r\n  }\r\n\r\n  &__description {\r\n    width: 50%;\r\n  }\r\n\r\n  &__title {\r\n    margin-bottom: 8px;\r\n    font-size: 12px;\r\n    font-weight: 900;\r\n    line-height: 1.5;\r\n\r\n    @media screen and (min-width: $bp-tablet) {\r\n      font-size: 24px;\r\n      line-height: 1.3;\r\n    }\r\n  }\r\n\r\n  &__code {\r\n    color: var(--color-secondary-text);\r\n  }\r\n\r\n  &__text {\r\n    margin-bottom: 40px;\r\n    text-align: center;\r\n\r\n    @media screen and (min-width: $bp-tablet) {\r\n      margin-bottom: 72px;\r\n    }\r\n  }\r\n}\r\n",".catalog {\r\n  &__slider {\r\n    display: flex;\r\n    gap: 32px;\r\n    align-items: center;\r\n  }\r\n\r\n  &__container {\r\n    overflow: hidden;\r\n    width: 100%;\r\n  }\r\n\r\n  &__list {\r\n    margin-bottom: 32px;\r\n    display: flex;\r\n    gap: 30px;\r\n    width: 100%;\r\n    justify-content: space-around;\r\n  }\r\n\r\n  &__button {\r\n    display: none;\r\n\r\n    @media screen and (min-width: $bp-tablet){\r\n      display: flex;\r\n    }\r\n  }\r\n}\r\n",".contacts {\r\n  &__container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n  }\r\n\r\n  &__text {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n  }\r\n\r\n  &__paragraph {\r\n    color: var(--color-secondary-text);\r\n    font-weight: 400;\r\n    font-size: 26px;\r\n  }\r\n\r\n  &__form-field {\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  &__button {\r\n    display: block;\r\n    background-color: var(--color-brand-normal);\r\n    border: 2px solid var(--color-brand-normal);\r\n    margin: 0 auto 16px;\r\n\r\n    &:hover {\r\n      color: var(--color-brand-dark);\r\n    }\r\n  }\r\n}\r\n",".container {\r\n  width: 100%;\r\n  max-width: 1288px;\r\n  margin: 0 auto;\r\n  padding: 0 24px;\r\n}\r\n",".fabs {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n\r\n  &__item {\r\n    background-color: rgba(255, 255, 255, .8);\r\n    border-radius: 50px;\r\n    width: 80px;\r\n    height: 80px;\r\n    cursor: pointer;\r\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .2);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n\r\n    &:hover {\r\n      -webkit-transform: scale(1.1);\r\n      transform: scale(1.1);\r\n    }\r\n  }\r\n\r\n  &__counter {\r\n    min-width: 30px;\r\n    width: initial;\r\n    height: 30px;\r\n    padding: 0 5px;\r\n    background-color: red;\r\n    color: #fff;\r\n    border-radius: 30px;\r\n    position: absolute;\r\n    right: -3px;\r\n    bottom: -3px;\r\n    text-align: center;\r\n    line-height: 30px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  &__icon {\r\n    fill: transparent;\r\n    stroke: var(--color-brand-yellow-light);\r\n  }\r\n\r\n}\r\n",".footer {\r\n  background-color: var(--color-primary-dark);\r\n  padding: 32px 0;\r\n  position: relative;\r\n\r\n  &__container {\r\n    display: flex;\r\n    gap: 20px;\r\n    flex-direction: column;\r\n\r\n    @media screen and (min-width: $bp-tablet) {\r\n      flex-direction: row;\r\n    }\r\n  }\r\n\r\n  &__nav,\r\n  &__address {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n    text-align: center;\r\n\r\n    @media screen and (min-width: $bp-tablet) {\r\n      flex-direction: row;\r\n      text-align: left;\r\n    }\r\n  }\r\n\r\n  &__nav {\r\n    @media screen and (min-width: $bp-tablet) {\r\n      flex-basis: 45%;\r\n    }\r\n  }\r\n\r\n  &__address {\r\n    @media screen and (min-width: $bp-tablet) {\r\n      flex-basis: 55%;\r\n    }\r\n  }\r\n\r\n  &__logo,\r\n  &__menu {\r\n    flex-grow: 1;\r\n  }\r\n\r\n  &__menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n    gap: 16px;\r\n  }\r\n\r\n  &__address-list,\r\n  &__address-info {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n  }\r\n\r\n  &__address-link {\r\n    color: var(--color-primary-light);\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    text-decoration: none;\r\n  }\r\n\r\n  &__address-link:hover {\r\n    color: var(--color-brand-normal);\r\n  }\r\n\r\n  &__socials {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 24px;\r\n    margin-top: 16px;\r\n\r\n    @media screen and (min-width: $bp-tablet) {\r\n      justify-content: flex-start;\r\n    }\r\n  }\r\n\r\n  &__socials-icon {\r\n    fill: var(--color-primary-light);\r\n  }\r\n\r\n  &__socials-icon:hover {\r\n    fill: var(--color-brand-normal);\r\n  }\r\n\r\n  &__schedule {\r\n    font-size: 16px;\r\n    color: var(--color-primary-light);\r\n  }\r\n\r\n  &__address-copyright {\r\n    color: var(--color-primary-light);\r\n    font-size: 14px;\r\n  }\r\n}\r\n",".header {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  padding-top: 16px;\r\n\r\n  &__container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 40px;\r\n  }\r\n\r\n  &__nav {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n    gap: 40px;\r\n  }\r\n\r\n  &__menu {\r\n    display: flex;\r\n    gap: 64px;\r\n    flex-grow: 1;\r\n    justify-content: flex-end;\r\n  }\r\n}\r\n",".hero-section {\r\n  padding: 124px 0;\r\n  background-color: var(--color-primary-dark);\r\n  font-size: 40px;\r\n  color: var(--color-primary-light);\r\n\r\n  &__container {\r\n    width: 530px;\r\n    margin-bottom: 38px;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 58px;\r\n    line-height: 1;\r\n    font-weight: 900;\r\n  }\r\n\r\n  &__description {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n  }\r\n\r\n  &__guarantee {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    font-size: 18px;\r\n    background: rgba(246, 95, 95, 0.1);\r\n    border-radius: 100px;\r\n    width: 190px;\r\n    padding: 8px;\r\n\r\n    &--text {\r\n      margin-bottom: 0;\r\n      color: var(--color-primary-light);\r\n    }\r\n  }\r\n\r\n  &__icon {\r\n    fill: var(--color-brand-yellow-dark);\r\n  }\r\n\r\n  &__buttons {\r\n    display: flex;\r\n    gap: 29px;\r\n  }\r\n\r\n  &__button {\r\n    background: var(--color-brand-normal);\r\n    border: 2px solid var(--color-brand-normal);\r\n\r\n    &:hover {\r\n      color: var(--color-brand-dark);\r\n    }\r\n  }\r\n\r\n  &__video-btn {\r\n    font-weight: 500;\r\n    font-size: 18px;\r\n    display: flex;\r\n    gap: 10px;\r\n    cursor: pointer;\r\n    align-items: center;\r\n    border-radius: 50px;\r\n    padding: 0 10px 0 5px;\r\n\r\n    &:hover {\r\n      background: var(--color-secondary-hover);\r\n    }\r\n  }\r\n\r\n  &__btn {\r\n    width: 46px;\r\n    height: 46px;\r\n    border-radius: 50%;\r\n    background: var(--color-brand-yellow-light);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  &__icon-btn {\r\n    fill: #010F1C;\r\n  }\r\n}\r\n",".info {\r\n\r\n  &__video {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n    height: auto;\r\n    border-radius: 10px;\r\n    border: 2px solid #ccc;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  }\r\n\r\n  &__list {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n    grid-column-gap: 0;\r\n    grid-row-gap: 0;\r\n    gap: 20px;\r\n  }\r\n\r\n  &__item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n  }\r\n\r\n  &__icon {\r\n    fill: var(--color-brand-normal);\r\n  }\r\n}\r\n",".backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 20px;\r\n  transition: opacity 0.3s,\r\n  visibility 0.3s;\r\n  cursor: pointer;\r\n\r\n  &.is-hidden {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    pointer-events: none;\r\n  }\r\n}\r\n\r\n.modal {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 1400px;\r\n  height: 100%;\r\n  max-height: 880px;\r\n  background-color: var(--color-primary-light);\r\n  border-radius: 32px;\r\n  padding: 64px 48px;\r\n  display: flex;\r\n  gap: 30px;\r\n  overflow-y: auto;\r\n\r\n  @media screen and (min-width: $bp-tablet) {\r\n    padding: 48px;\r\n  }\r\n\r\n  &__btn-close {\r\n    position: absolute;\r\n    top: 40px;\r\n    right: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0;\r\n    fill: transparent;\r\n    stroke: var(--color-primary-dark);\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  &__images {\r\n    width: 50%;\r\n  }\r\n\r\n  &__description {\r\n    width: 50%;\r\n  }\r\n\r\n  &__title {\r\n    margin-bottom: 8px;\r\n    font-size: 12px;\r\n    font-weight: 900;\r\n    line-height: 1.5;\r\n\r\n    @media screen and (min-width: $bp-tablet) {\r\n      font-size: 24px;\r\n      line-height: 1.3;\r\n    }\r\n  }\r\n\r\n  &__code {\r\n    color: var(--color-secondary-text);\r\n  }\r\n\r\n  &__text {\r\n    margin-bottom: 40px;\r\n    text-align: center;\r\n\r\n    @media screen and (min-width: $bp-tablet) {\r\n      margin-bottom: 72px;\r\n    }\r\n  }\r\n}\r\n",".order {\r\n  &__list {\r\n    display: flex;\r\n    gap: 20px;\r\n    justify-content: space-between;\r\n  }\r\n}\r\n",".sale {\r\n  &__prop {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 60px;\r\n  }\r\n\r\n  &__price {\r\n    //width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    font-weight: 700;\r\n    position: relative;\r\n    padding: 10px 50px;\r\n  }\r\n\r\n  &__old {\r\n    font-size: 24px;\r\n    text-decoration: line-through;\r\n  }\r\n\r\n  &__new {\r\n    font-size: 30px;\r\n  }\r\n\r\n  &__promotion {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n  }\r\n\r\n  &__button {\r\n    background: var(--color-brand-normal);\r\n    border: 2px solid var(--color-brand-normal);\r\n\r\n    &:hover {\r\n      color: var(--color-brand-dark);\r\n    }\r\n  }\r\n\r\n  &__bottom {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  &__second-title {\r\n    text-align: center;\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n  }\r\n}\r\n",".section {\r\n  padding: 20px 0;\r\n\r\n  @media screen and (min-width: $bp-tablet){\r\n    padding: 48px 0;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 32px;\r\n    font-weight: 900;\r\n    line-height: 1.5;\r\n\r\n    @media screen and (min-width: $bp-tablet){\r\n      font-size: 64px;\r\n      line-height: 1.3;\r\n    }\r\n\r\n    &--centered {\r\n      text-align: center;\r\n    }\r\n  }\r\n}\r\n","*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  color: var(--color-primary-dark);\r\n  background-color: var(--color-primary-light);\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  line-height: 1.5;\r\n  margin: 0;\r\n  font-family: 'Poppins', sans-serif;\r\n\r\n  @media screen and (min-width: $bp-tablet){\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n  }\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np {\r\n  margin-top: 0;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n  object-fit: cover;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na {\r\n  display: inline-block;\r\n}\r\n\r\naddress {\r\n  font-style: normal;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_0_oneOf_5_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_4_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[5].use[3]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[4]!./main.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[5].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[4]!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_0_oneOf_5_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_4_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_0_oneOf_5_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_4_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_0_oneOf_5_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_4_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_0_oneOf_5_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_4_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/public/images/delivery.png":
/*!****************************************!*\
  !*** ./src/public/images/delivery.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/delivery.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _Catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Catalog */ "./src/js/Catalog.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");



function init() {
  var moveTopBtn = document.getElementById('up');
  moveTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  window.addEventListener('load', function () {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toggleBtn)(moveTopBtn);
  });
  window.addEventListener('scroll', function () {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toggleBtn)(moveTopBtn);
  });
  new _Catalog__WEBPACK_IMPORTED_MODULE_1__.Catalog();
}
document.addEventListener('DOMContentLoaded', init);
})();

/******/ })()
;
//# sourceMappingURL=main-4ecc0287.js.map