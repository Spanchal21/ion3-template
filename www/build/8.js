webpackJsonp([8],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupertabPageModule", function() { return SupertabPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__supertab__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic2_super_tabs_src__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { SuperTabsModule } from 'ionic2-super-tabs';
var SupertabPageModule = (function () {
    function SupertabPageModule() {
    }
    SupertabPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__supertab__["a" /* SupertabPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__supertab__["a" /* SupertabPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ionic2_super_tabs_src__["a" /* SuperTabsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__supertab__["a" /* SupertabPage */]
            ]
        })
    ], SupertabPageModule);
    return SupertabPageModule;
}());

//# sourceMappingURL=supertab.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupertabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupertabPage = (function () {
    function SupertabPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = 'ListPage';
        this.tab2Root = 'LanguagePage';
        this.tab3Root = 'MyformPage';
        this.tab4Root = 'HomePage';
        this.tab5Root = 'TabPage';
    }
    SupertabPage.prototype.onTabSelect = function (tab) {
    };
    SupertabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-supertab',template:/*ion-inline-start:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/pages/supertab/supertab.html"*/'<!-- <ion-tabs selectedIndex="2" tabsHighlight="true" tabsPlacement="top">\n	<ion-tab [root]="tab4Root" tabTitle="Super Tab" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab1Root" tabTitle="Animation" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Theaming" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Sweet Alert" tabIcon="information-circle"></ion-tab>\n</ion-tabs> -->\n\n <super-tabs toolbarColor="light" indicatorColor="light" (tabSelect)="onTabSelect($event)" [config]="{ sideMenu: \'left\' }" scrollTabs="true" tabsPlacement="bottom" >\n      <super-tab [root]="tab1Root" title="sorting"  id="tab1Root"></super-tab>\n      <super-tab [root]="tab2Root" title="Language"  id="tab2Root"></super-tab>\n      <super-tab [root]="tab3Root" title="Events"  id="tab3Root"></super-tab>\n      <super-tab [root]="tab4Root" title="Animation"  id="tab4Root"></super-tab>\n      <super-tab [root]="tab5Root" title="Tabs"  id="tab5Root"></super-tab>\n      \n    </super-tabs> \n'/*ion-inline-end:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/pages/supertab/supertab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SupertabPage);
    return SupertabPage;
}());

//# sourceMappingURL=supertab.js.map

/***/ })

});
//# sourceMappingURL=8.js.map