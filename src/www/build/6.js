webpackJsonp([6],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemePageModule", function() { return ThemePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThemePageModule = (function () {
    function ThemePageModule() {
    }
    ThemePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__theme__["a" /* ThemePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__theme__["a" /* ThemePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__theme__["a" /* ThemePage */]
            ]
        })
    ], ThemePageModule);
    return ThemePageModule;
}());

//# sourceMappingURL=theme.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_theme_theme__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThemePage = (function () {
    function ThemePage(navCtrl, navParams, event, themeCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = event;
        this.themeCtrl = themeCtrl;
    }
    ThemePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThemePage');
    };
    ThemePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-theme',template:/*ion-inline-start:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/pages/theme/theme.html"*/'<ion-header >\n\n <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Themeing your app</ion-title>\n     <ion-buttons end>\n      <button ion-button menuToggle="right" >\n        <ion-icon name="ios-mail"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card padding>\n\n	<b>1- reference link</b>\n	<p>\n		<a color="light" href="https://robferguson.org/blog/2017/11/12/theming-your-ionic-3-app/">back ground shade theme</a>\n		<br/>\n		<a color="light" href="https://robferguson.org/blog/2017/11/13/theming-your-ionic-3-app-part-2/">dynamic theme change</a>\n	</p>\n\n\n  <b>2- theme file added path</b>\n  <p>\n    src > theme > dark-theme.scss , light-theme.scss, gradient-mixins.scss and gradient.scss \n  </p>\n\n</ion-card>\n  <!-- <button ion-button (click)="fnChangeTheme()">Change theme</button> -->\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/pages/theme/theme.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_theme_theme__["a" /* ThemeProvider */]])
    ], ThemePage);
    return ThemePage;
}());

//# sourceMappingURL=theme.js.map

/***/ })

});
//# sourceMappingURL=6.js.map