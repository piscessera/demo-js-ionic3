webpackJsonp([1],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDetailTransactionPageModule", function() { return WalletDetailTransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_detail_transaction__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalletDetailTransactionPageModule = (function () {
    function WalletDetailTransactionPageModule() {
    }
    return WalletDetailTransactionPageModule;
}());
WalletDetailTransactionPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__wallet_detail_transaction__["a" /* WalletDetailTransactionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wallet_detail_transaction__["a" /* WalletDetailTransactionPage */]),
        ],
    })
], WalletDetailTransactionPageModule);

//# sourceMappingURL=wallet-detail-transaction.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletDetailTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WalletDetailTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletDetailTransactionPage = (function () {
    function WalletDetailTransactionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WalletDetailTransactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletDetailTransactionPage');
    };
    return WalletDetailTransactionPage;
}());
WalletDetailTransactionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-wallet-detail-transaction',template:/*ion-inline-start:"/Users/piscessera/Documents/me/training/ionic3/git/workshop/saving-book/src/pages/wallet-detail-transaction/wallet-detail-transaction.html"*/'<!--\n  Generated template for the WalletDetailTransactionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>WalletDetailTransaction</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-item ion-fixed> <!-- USE FOR FIXED ELEMENT TO NOT SCROLLABLE -->\n      <ion-card > \n          \n        <ion-card-content (click)="viewDetail()">\n          <ion-card-title>\n            Wallet CNX\n          </ion-card-title>\n          <div class="summary">\n            <span class="spend">0$</span> : <span class="receive">0$</span>\n          </div>\n        </ion-card-content>\n\n      </ion-card>\n\n      Transaction\n    </ion-item>\n\n    <div class="wrapper">\n      <ion-list>\n        <ion-item class="spend">\n          <ion-thumbnail item-start>\n            <img src="assets/imgs/ic_wallet.png">\n          </ion-thumbnail>\n          <div>Buy Coin</div>\n          <div>100$</div>\n          <ion-icon item-end name="ios-arrow-round-down-outline"></ion-icon>\n        </ion-item>\n        <ion-item class="receive">\n          <ion-thumbnail item-start>\n            <img src="assets/imgs/ic_wallet.png">\n          </ion-thumbnail>\n          <div>Sell Coin</div>\n          <div>100$</div>\n          <ion-icon item-end name="ios-arrow-round-up-outline"></ion-icon>\n        </ion-item>\n        <ion-item class="receive">\n          <ion-thumbnail item-start>\n            <img src="assets/imgs/ic_wallet.png">\n          </ion-thumbnail>\n          <div>Sell Coin</div>\n          <div>100$</div>\n          <ion-icon item-end name="ios-arrow-round-up-outline"></ion-icon>\n        </ion-item>\n        <ion-item class="receive">\n          <ion-thumbnail item-start>\n            <img src="assets/imgs/ic_wallet.png">\n          </ion-thumbnail>\n          <div>Sell Coin</div>\n          <div>100$</div>\n          <ion-icon item-end name="ios-arrow-round-up-outline"></ion-icon>\n        </ion-item>\n        <ion-item class="receive">\n          <ion-thumbnail item-start>\n            <img src="assets/imgs/ic_wallet.png">\n          </ion-thumbnail>\n          <div>Sell Coin</div>\n          <div>100$</div>\n          <ion-icon item-end name="ios-arrow-round-up-outline"></ion-icon>\n        </ion-item>\n        <ion-item class="receive">\n          <ion-thumbnail item-start>\n            <img src="assets/imgs/ic_wallet.png">\n          </ion-thumbnail>\n          <div>Sell Coin</div>\n          <div>100$</div>\n          <ion-icon item-end name="ios-arrow-round-up-outline"></ion-icon>\n        </ion-item>\n        <ion-item class="receive">\n          <ion-thumbnail item-start>\n            <img src="assets/imgs/ic_wallet.png">\n          </ion-thumbnail>\n          <div>Sell Coin</div>\n          <div>100$</div>\n          <ion-icon item-end name="ios-arrow-round-up-outline"></ion-icon>\n        </ion-item>\n        <ion-item class="receive">\n          <ion-thumbnail item-start>\n            <img src="assets/imgs/ic_wallet.png">\n          </ion-thumbnail>\n          <div>Sell Coin</div>\n          <div>100$</div>\n          <ion-icon item-end name="ios-arrow-round-up-outline"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </div>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/piscessera/Documents/me/training/ionic3/git/workshop/saving-book/src/pages/wallet-detail-transaction/wallet-detail-transaction.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], WalletDetailTransactionPage);

//# sourceMappingURL=wallet-detail-transaction.js.map

/***/ })

});
//# sourceMappingURL=1.js.map