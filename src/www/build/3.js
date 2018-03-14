webpackJsonp([3],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]
            ]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

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

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.fnCloseModel = function () {
        this.viewCtrl.dismiss();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/pages/about/about.html"*/'\n<ion-content padding>\n\n\n	<ion-fab top right>\n    <button color="myheader"  ion-fab mini (click)="fnCloseModel()"><ion-icon name="close"></ion-icon></button>\n  </ion-fab>\n\n\n	<ion-row text-center>\n		<ion-col>\n				<ion-flip-card></ion-flip-card>\n\n				<p>\n				\n		<ion-chip>\n			<ion-label color="primary">#ionic</ion-label>\n		</ion-chip>\n		<ion-chip>\n			<ion-label color="danger">#angularJS</ion-label>\n		</ion-chip>\n		<ion-chip>\n			<ion-label color="primary">#ionic2</ion-label>\n		</ion-chip>\n		<ion-chip>\n			<ion-label color="danger">#angular2</ion-label>\n		</ion-chip>\n		<ion-chip>\n			<ion-label color="primary">#ionic3</ion-label>\n		</ion-chip>\n		<ion-chip>\n			<ion-label color="danger">#angular4</ion-label>\n		</ion-chip>\n		<ion-chip>\n			<ion-label color="danger">#angular5</ion-label>\n		</ion-chip>\n		<ion-chip>\n			<ion-label color="primary">#javaScript</ion-label>\n		</ion-chip>\n		<ion-chip>\n			<ion-label color="danger">#Scss</ion-label>\n		</ion-chip>\n	</p>\n\n\n	<ion-list>\n		<p>\n		  <ion-list-header>\n		    follow me\n		  </ion-list-header>\n		</p>\n		<a href="https://forum.ionicframework.com/u/spanchal">\n	  	<ion-chip color="myheader" >\n		  <ion-icon color="light"><img src="assets/images/ionic.png" /></ion-icon>\n		  <ion-label >Ionic Forum</ion-label>\n		</ion-chip>\n		</a>\n		<a href="https://github.com/Spanchal21">\n		<ion-chip color="myheader">\n		  <ion-icon color="light"><img src="assets/images/git.png" /></ion-icon>\n		  <ion-label>GitHub</ion-label>\n		</ion-chip>\n		</a>\n		<a href="https://stackoverflow.com/users/6796942/spanchal">\n		<ion-chip color="myheader">\n		  <ion-icon color="light"><img src="assets/images/stack.png" /></ion-icon>\n		  <ion-label>Stack Overflow</ion-label>\n		</ion-chip>\n		</a>\n		<a href="https://www.facebook.com/Spanchal21">\n		<ion-chip color="myheader">\n		  <ion-icon color="light"><img src="assets/images/facebook.png" /></ion-icon>\n		  <ion-label>Facebook</ion-label>\n		</ion-chip>\n		</a>\n		<a href="https://www.linkedin.com/in/sagar-panchal-a329b3b6/">\n		<ion-chip color="myheader">\n		  <ion-icon color="light"><img src="assets/images/linkdin.png" /></ion-icon>\n		  <ion-label>LinkedIn</ion-label>\n		</ion-chip>\n		</a>\n	</ion-list>\n		</ion-col>\n	</ion-row>\n</ion-content>\n'/*ion-inline-end:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=3.js.map