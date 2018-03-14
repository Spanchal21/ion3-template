webpackJsonp([10],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_valid_manager_valid_manager__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, isValid) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isValid = isValid;
        this.login = { email: '', password: '' };
    }
    // Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])
    LoginPage.prototype.ngOnInit = function () {
        this.formgroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, this.isValid.checkEmail()])),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10), this.isValid.checkPassword()])),
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.checkLogin = function (form) {
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/pages/login/login.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>form validation</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n		<form novalidate (ngSubmit)="checkLogin(formgroup)" [formGroup]="formgroup">\n				<ion-item [ngClass]="{\'has-error\':!formgroup.controls[\'email\'].valid && formgroup.controls[\'email\'].touched}">\n					<ion-label>Email</ion-label>\n					<ion-input type="email" formControlName="email" name="email" [(ngModel)]="login.email" required></ion-input>\n				</ion-item>\n\n				<!-- <div *ngIf="!formgroup.controls[\'email\'].valid" >not valid</div> -->\n				<div color="danger" *ngIf="( formgroup.get(\'email\').hasError(\'email_check\') || formgroup.get(\'email\').hasError(\'required\') ) && formgroup.get(\'email\').touched">\n			      <p *ngIf="formgroup.get(\'email\').hasError(\'required\') && formgroup.get(\'email\').touched">\n			        Email is required.\n			      </p>\n			      <p *ngIf="formgroup.get(\'email\').hasError(\'email_check\') && formgroup.get(\'email\').touched">\n			        Please enter valid Email.\n			      </p>\n    			</div>\n				<ion-item>\n					<ion-label>password</ion-label>\n					<ion-input type="password" formControlName="password" name="password" [(ngModel)]="login.password" required></ion-input>\n				</ion-item>\n				<div color="danger" *ngIf="( formgroup.get(\'password\').hasError(\'email_check\') || formgroup.get(\'password\').hasError(\'required\') ) && formgroup.get(\'password\').touched">\n			      <p  *ngIf="formgroup.get(\'password\').hasError(\'required\') && formgroup.get(\'password\').touched">\n			        Password is required.\n			      </p>\n			      <!-- <p cplor="danger" *ngIf="formgroup.get(\'password\').hasError(\'password_check\') && formgroup.get(\'password\').touched">\n			        Please enter valid Password.\n			      </p> -->\n    			</div>\n				\n				<button ion-button block>Login</button>\n		</form>\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_valid_manager_valid_manager__["a" /* ValidManagerProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=10.js.map