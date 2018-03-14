webpackJsonp([2],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpndHeaderPageModule", function() { return ExpndHeaderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expnd_header__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExpndHeaderPageModule = (function () {
    function ExpndHeaderPageModule() {
    }
    ExpndHeaderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__expnd_header__["a" /* ExpndHeaderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expnd_header__["a" /* ExpndHeaderPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__expnd_header__["a" /* ExpndHeaderPage */]
            ]
        })
    ], ExpndHeaderPageModule);
    return ExpndHeaderPageModule;
}());

//# sourceMappingURL=expnd-header.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ion_flip_card_ion_flip_card__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expandable_header_expandable_header__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__ion_flip_card_ion_flip_card__["a" /* IonFlipCardComponent */],
                __WEBPACK_IMPORTED_MODULE_2__expandable_header_expandable_header__["a" /* ExpandableHeaderComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__ion_flip_card_ion_flip_card__["a" /* IonFlipCardComponent */],
                __WEBPACK_IMPORTED_MODULE_2__expandable_header_expandable_header__["a" /* ExpandableHeaderComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonFlipCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IonFlipCardComponent = (function () {
    function IonFlipCardComponent() {
        console.log('Hello IonFlipCardComponent Component');
        this.text = 'Hello this is ion-flip-component content';
    }
    IonFlipCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-flip-card',template:/*ion-inline-start:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/components/ion-flip-card/ion-flip-card.html"*/'<div>\n			<img src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/p160x160/12321684_1085795864818063_4637316190415645808_n.jpg?oh=459c0d8a9fe8d99da6fe58fb6fa5413f&oe=5B1BB8E3" />\n		\n			<h2>Sagar Panchal</h2>\n			<p>Ionic Developer <a href="http://atozinfoway.com/">@AtoZ Infoway LLP</a></p>\n\n			\n\n</div>\n'/*ion-inline-end:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/components/ion-flip-card/ion-flip-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], IonFlipCardComponent);
    return IonFlipCardComponent;
}());

//# sourceMappingURL=ion-flip-card.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandableHeaderComponent = (function () {
    function ExpandableHeaderComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ExpandableHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    ExpandableHeaderComponent.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
            for (var _i = 0, _a = _this.element.nativeElement.children; _i < _a.length; _i++) {
                var headerElement = _a[_i];
                var totalHeight = headerElement.offsetTop + headerElement.clientHeight;
                if (totalHeight > _this.newHeaderHeight && !headerElement.isHidden) {
                    headerElement.isHidden = true;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '0');
                }
                else if (totalHeight <= _this.newHeaderHeight && headerElement.isHidden) {
                    headerElement.isHidden = false;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '1');
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('scrollArea'),
        __metadata("design:type", Object)
    ], ExpandableHeaderComponent.prototype, "scrollArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('headerHeight'),
        __metadata("design:type", Number)
    ], ExpandableHeaderComponent.prototype, "headerHeight", void 0);
    ExpandableHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'expandable-header',template:/*ion-inline-start:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/components/expandable-header/expandable-header.html"*/'<ng-content></ng-content>'/*ion-inline-end:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/components/expandable-header/expandable-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ExpandableHeaderComponent);
    return ExpandableHeaderComponent;
}());

//# sourceMappingURL=expandable-header.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpndHeaderPage; });
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


var ExpndHeaderPage = (function () {
    function ExpndHeaderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExpndHeaderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExpndHeaderPage');
    };
    ExpndHeaderPage.prototype.onInput = function () {
        console.log('onInput()');
    };
    ExpndHeaderPage.prototype.onCancel = function () {
        console.log('onCancel()');
    };
    ExpndHeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-expnd-header',template:/*ion-inline-start:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/pages/expnd-header/expnd-header.html"*/'<ion-header>\n \n    <expandable-header [scrollArea]="mycontent" headerHeight="60">\n        <ion-searchbar\n          [showCancelButton]="shouldShowCancel"\n          (ionInput)="onInput($event)"\n          (ionCancel)="onCancel($event)">\n        </ion-searchbar>\n\n \n       <!--  <ion-item>\n            <ion-label><ion-icon name="funnel-outline"></ion-icon></ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item> -->\n    </expandable-header>\n \n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Expandable Heador</ion-title>\n       <ion-buttons end>\n        <button ion-button menuToggle="right" >\n          <ion-icon name="ios-mail"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n \n<ion-content fullscreen #mycontent>\n \n   <ion-card padding>\n    <b>1 - Reference Link</b>\n    <p>\n      <a href="https://www.joshmorony.com/creating-a-custom-expandable-header-component-for-ionic-2/"> Expandable Header Animation </a>\n    </p>\n    \n    </ion-card>\n    <ion-card padding>\n\n    <b>4 - Dummy content for scrolling</b>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n    <br/>\n \n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n <br/>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n <br/>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n </ion-card>\n \n</ion-content>'/*ion-inline-end:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/pages/expnd-header/expnd-header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], ExpndHeaderPage);
    return ExpndHeaderPage;
}());

//# sourceMappingURL=expnd-header.js.map

/***/ })

});
//# sourceMappingURL=2.js.map