webpackJsonp([2],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDetailManagePageModule", function() { return WalletDetailManagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_detail_manage__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalletDetailManagePageModule = (function () {
    function WalletDetailManagePageModule() {
    }
    return WalletDetailManagePageModule;
}());
WalletDetailManagePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__wallet_detail_manage__["a" /* WalletDetailManagePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wallet_detail_manage__["a" /* WalletDetailManagePage */]),
        ],
    })
], WalletDetailManagePageModule);

//# sourceMappingURL=wallet-detail-manage.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletDetailManagePage; });
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
 * Generated class for the WalletDetailManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletDetailManagePage = (function () {
    function WalletDetailManagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WalletDetailManagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletDetailManagePage');
    };
    return WalletDetailManagePage;
}());
WalletDetailManagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-wallet-detail-manage',template:/*ion-inline-start:"/Users/piscessera/Documents/me/training/ionic3/git/workshop/saving-book/src/pages/wallet-detail-manage/wallet-detail-manage.html"*/'<!--\n  Generated template for the WalletDetailManagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>WalletDetailManage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        \n      <ion-card-content (click)="viewDetail()">\n        <ion-card-title>\n          Wallet CNX\n        </ion-card-title>\n        <div class="summary">\n          <span class="spend">0$</span> : <span class="receive">0$</span>\n        </div>\n      </ion-card-content>\n\n    </ion-card>\n\n  <ion-list>\n      <ion-item text-center >\n        <img width="100" height="100" src="assets/imgs/ic_wallet.png"/>\n      </ion-item>\n      <ion-item>\n        <button ion-button block color="light" >Upload Image..</button>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Wallet Name</ion-label>\n        <ion-input type="text" value="Wallet CNX"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Active</ion-label>\n        <ion-toggle checked="true"></ion-toggle>\n      </ion-item>\n    </ion-list>\n  \n    <div padding>\n        <button ion-button color="primary" block (click)="save()">Save</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/piscessera/Documents/me/training/ionic3/git/workshop/saving-book/src/pages/wallet-detail-manage/wallet-detail-manage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], WalletDetailManagePage);

//# sourceMappingURL=wallet-detail-manage.js.map

/***/ })

});
//# sourceMappingURL=2.js.map