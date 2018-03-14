webpackJsonp([9],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyformPageModule", function() { return MyformPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myform__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyformPageModule = (function () {
    function MyformPageModule() {
    }
    MyformPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myform__["a" /* MyformPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myform__["a" /* MyformPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__myform__["a" /* MyformPage */]
            ]
        })
    ], MyformPageModule);
    return MyformPageModule;
}());

//# sourceMappingURL=myform.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyformPage = (function () {
    // accrodionlist : any = {showDetails: false,icon: 'ios-remove-circle-outline' };
    function MyformPage(navCtrl, navParams, androidPermissions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.androidPermissions = androidPermissions;
        this.accrodion = { showDetails: false, icon: 'ios-remove-circle-outline' };
        this.isActive = true;
        this.data = [{ name: 'one', detail: 'one detail' },
            { name: 'two', detail: 'two detail' },
            { name: 'three', detail: 'three detail' },
            { name: 'four', detail: 'four detail' }];
    }
    MyformPage.prototype.fnIcon = function () {
        this.isActive = this.isActive == true ? false : true;
    };
    MyformPage.prototype.tapEvent = function (event) {
        alert(JSON.stringify(event));
    };
    MyformPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyformPage');
    };
    MyformPage.prototype.fnPermission = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_CONTACTS).then(function (success) { return alert('Permission granted'); }, function (err) { return _this.androidPermissions.requestPermissions(_this.androidPermissions.PERMISSION.READ_CONTACTS); });
    };
    //============ accrodion ===============
    MyformPage.prototype.accrodionDetails = function (data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'ios-add-circle-outline';
        }
        else {
            data.showDetails = true;
            data.icon = 'ios-remove-circle-outline';
        }
    };
    MyformPage.prototype.accrodionListDetails = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    MyformPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    MyformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myform',template:/*ion-inline-start:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/pages/myform/myform.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n   \n    <ion-title>Platform Events</ion-title>\n    <ion-buttons end>\n    <button ion-button menuToggle="right" >\n      <ion-icon name="ios-mail"></ion-icon>\n   </button>\n </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  This plugin is designed to support Android new permissions checking mechanism.\n\n   <button ion-button (click)="fnPermission()">Android permission</button>\n\n  <!--  <button showWhen="ios" ion-button (click)="fn3DTouch()">ios 3D Touch</button>\n   <button showWhen="android" ion-button (click)="fnPermission()">Android permission</button> -->\n\n<ion-list>\n  \n    <ion-item  showWhen="android">\n     I am visible on Android!\n     <ion-icon item-right name="logo-android"></ion-icon>\n    </ion-item>\n\n    <ion-item showWhen="ios">\n     I am visible on iOS!\n     <ion-icon item-right name="logo-apple"></ion-icon>\n    </ion-item>\n\n    <ion-item showWhen="android,ios">\n     I am visible on Android and iOS!\n    <ion-icon item-right name="logo-android"></ion-icon>\n    <ion-icon item-right name="logo-apple"></ion-icon>\n    </ion-item>\n\n    <ion-item showWhen="portrait">\n     I am visible on Portrait Mode!\n     <ion-icon item-right name="ios-phone-portrait"></ion-icon>\n    </ion-item>\n\n    <ion-item showWhen="landscape">\n     I am visible on Landscape Mode!\n     <ion-icon item-right name="ios-phone-landscape"></ion-icon>\n    </ion-item>\n\n</ion-list>\n\n\n  <!-- =========  tap, press, pan, swipe, rotate, pinch ========= -->\n  <ion-row>\n    <ion-col col-6>\n      <button ion-button block (swipe)="tapEvent($event)">\n       sipe event\n      </button>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button block (click)="tapEvent($event)">\n       click event\n      </button>\n      </ion-col>\n    <ion-col col-6>\n      <button ion-button block (press)="tapEvent($event)">\n       press event\n      </button>\n      </ion-col>\n    <ion-col col-6>\n      <button ion-button block (pan)="tapEvent($event)">\n       pan event\n      </button>\n      </ion-col>\n    <ion-col col-6>\n      <button ion-button block (pinch)="tapEvent($event)">\n       pinch event\n      </button>\n      </ion-col>\n    <ion-col col-6>\n      <button ion-button block (rotate)="tapEvent($event)">\n        rotate event\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-col text-center>\n    <br/>\n    <h1>\n      <ion-icon name="heart" color="danger" (click)="fnIcon()" [isActive]="isActive"> </ion-icon> \n    </h1>\n    <p> click to active/inactive </p>\n  </ion-col>\n\n\n\n  <ion-fab bottom right>\n    <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon><ion-label>facebook</ion-label></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon><ion-label>twitter</ion-label></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon><ion-label>vimeo</ion-label></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon><ion-label>googleplus</ion-label></button>\n    </ion-fab-list>\n  </ion-fab>\n\n\n\n\n\n\n\n\n<ion-list>\n    <ion-list-header (click)="accrodionDetails(accrodion)">\n      Accordion Example.\n      <ion-icon color="primary" item-end [name]="accrodion.icon"></ion-icon>\n    </ion-list-header>\n    <ion-item no-padding *ngIf="accrodion.showDetails">\n      <h2>Ionic 2 Accordion Example this is content area of Accordion.</h2>\n    </ion-item>\n\n    <div *ngFor="let d of data let i=index ">\n      <ion-list-header (click)="accrodionListDetails(i)" [ngClass]="{active: isGroupShown(i)}">\n            Accordion List item {{d.name}}\n        <ion-icon color="primary" item-end [name]="isGroupShown(i) ? \'ios-arrow-dropdown\' : \'ios-arrow-dropup\'"></ion-icon>\n      </ion-list-header>\n      <ion-item *ngIf="isGroupShown(i)">\n              <h2>This is Accordion {{d.detail}} content area.</h2>\n      </ion-item>\n    </div>\n</ion-list>\n\n          \n\n</ion-content>\n'/*ion-inline-end:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/pages/myform/myform.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], MyformPage);
    return MyformPage;
}());

//# sourceMappingURL=myform.js.map

/***/ })

});
//# sourceMappingURL=9.js.map