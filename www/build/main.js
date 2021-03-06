webpackJsonp([12],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_globle__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThemeProvider = (function () {
    function ThemeProvider(event) {
        var _this = this;
        this.event = event;
        console.log('Hello ThemeProvider Provider');
        this.event.subscribe('theme', function () {
            _this.setTheme();
        });
    }
    ThemeProvider.prototype.setTheme = function () {
        if (this.theme == 'dark-theme') {
            this.theme = 'light-theme';
        }
        else {
            this.theme = 'dark-theme';
        }
        __WEBPACK_IMPORTED_MODULE_2__models_globle__["a" /* GlobleVariable */].globleTheme = this.theme;
        this.theme = __WEBPACK_IMPORTED_MODULE_2__models_globle__["a" /* GlobleVariable */].globleTheme;
        console.log('theme provider : ' + this.theme);
        return this.theme;
    };
    ThemeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
    ], ThemeProvider);
    return ThemeProvider;
}());

//# sourceMappingURL=theme.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		313,
		3
	],
	"../pages/expnd-header/expnd-header.module": [
		314,
		2
	],
	"../pages/home/home.module": [
		315,
		1
	],
	"../pages/language/language.module": [
		316,
		11
	],
	"../pages/list/list.module": [
		317,
		0
	],
	"../pages/login/login.module": [
		318,
		10
	],
	"../pages/myform/myform.module": [
		319,
		9
	],
	"../pages/pera-header/pera-header.module": [
		320,
		4
	],
	"../pages/supertab/supertab.module": [
		321,
		8
	],
	"../pages/sweetalert/sweetalert.module": [
		322,
		5
	],
	"../pages/tab/tab.module": [
		323,
		7
	],
	"../pages/theme/theme.module": [
		324,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_transitions_transition_controller__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__super_tabs__ = __webpack_require__(82);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SuperTab = (function (_super) {
    __extends(SuperTab, _super);
    function SuperTab(parent, app, config, plt, el, zone, rnd, cfr, gestureCtrl, transCtrl, errorHandler, linker, _dom, cd) {
        var _this = _super.call(this, parent, app, config, plt, el, zone, rnd, cfr, gestureCtrl, transCtrl, linker, _dom, errorHandler) || this;
        _this.linker = linker;
        _this._dom = _dom;
        _this.cd = cd;
        /**
         * Indicates whether the tab has been loaded
         * @type {boolean}
         */
        _this.loaded = false;
        _this.init = new Promise(function (resolve) { return _this.initResolve = resolve; });
        return _this;
    }
    Object.defineProperty(SuperTab.prototype, "tabTitle", {
        // TODO find less hacky approach
        // needed to make Ionic Framework think this is a tabs component... needed for Deeplinking
        get: function () {
            return this.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperTab.prototype, "index", {
        // needed to make Ionic Framework think this is a tabs component... needed for Deeplinking
        get: function () {
            return this.parent.getTabIndexById(this.tabId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperTab.prototype, "_tabId", {
        get: function () {
            return this.tabId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperTab.prototype, "swipeBackEnabled", {
        /**
         * Enable/disable swipe to go back for iOS
         * @return {boolean}
         */
        get: function () {
            return this._sbEnabled;
        },
        set: function (val) {
            this._sbEnabled = Boolean(val);
            this._swipeBackCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperTab.prototype, "_vp", {
        /**
         * @hidden
         */
        set: function (val) {
            this.setViewport(val);
        },
        enumerable: true,
        configurable: true
    });
    SuperTab.prototype._didEnter = function (view) {
        if (this.loaded) {
            _super.prototype._didEnter.call(this, view);
        }
    };
    SuperTab.prototype._willEnter = function (view) {
        if (this.loaded) {
            _super.prototype._willEnter.call(this, view);
        }
    };
    SuperTab.prototype.ngOnInit = function () {
        this.parent.addTab(this);
    };
    SuperTab.prototype.ngAfterViewInit = function () {
        this.initResolve();
    };
    SuperTab.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    SuperTab.prototype.setActive = function (active) {
        if (active) {
            this.cd.reattach();
            this.cd.detectChanges();
        }
        else if (!active) {
            this.cd.detach();
        }
    };
    SuperTab.prototype.load = function (load) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(load && !this.loaded)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.init];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.push(this.root, this.rootParams, { animate: false })];
                    case 2:
                        _a.sent();
                        this.loaded = true;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SuperTab.prototype.setBadge = function (value) {
        this.badge = value;
    };
    SuperTab.prototype.clearBadge = function () {
        delete this.badge;
    };
    SuperTab.prototype.increaseBadge = function (increaseBy) {
        if (increaseBy === void 0) { increaseBy = 1; }
        this.badge += increaseBy;
    };
    SuperTab.prototype.decreaseBadge = function (decreaseBy) {
        if (decreaseBy === void 0) { decreaseBy = 1; }
        this.badge = Math.max(0, this.badge - decreaseBy);
    };
    SuperTab.prototype.setWidth = function (width) {
        this.setElementStyle('width', width + 'px');
    };
    SuperTab.prototype.goToRoot = function (opts) {
        return this.setRoot(this.root, this.rootParams, opts, null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTab.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTab.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SuperTab.prototype, "root", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SuperTab.prototype, "rootParams", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('id'),
        __metadata("design:type", String)
    ], SuperTab.prototype, "tabId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], SuperTab.prototype, "badge", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SuperTab.prototype, "swipeBackEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('viewport', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], SuperTab.prototype, "_vp", null);
    SuperTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'super-tab',
            template: '<div #viewport></div><div class="nav-decor"></div>',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __param(11, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__super_tabs__["a" /* SuperTabs */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Config */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* GestureController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_transitions_transition_controller__["a" /* TransitionController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* DeepLinker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* DomController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], SuperTab);
    return SuperTab;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavControllerBase */]));

//# sourceMappingURL=super-tab.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTabsToolbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__super_tabs_pan_gesture__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__super_tab_button__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SuperTabsToolbar = (function () {
    function SuperTabsToolbar(el, plt, rnd, domCtrl) {
        this.el = el;
        this.plt = plt;
        this.rnd = rnd;
        this.domCtrl = domCtrl;
        this.color = '';
        this.tabsColor = '';
        this.badgeColor = '';
        this.scrollTabs = false;
        this.indicatorColor = '';
        this.selectedTab = 0;
        this.indicatorPosition = 0;
        this.indicatorWidth = 0;
        this.tabSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        /**
         * @private
         */
        this.segmentPosition = 0;
        /**
         * The width of each button
         */
        this.segmentButtonWidths = [];
        /**
         * The segment width
         */
        this.segmentWidth = 0;
        this.tabs = [];
        this.animationState = {
            indicator: false,
            segment: false
        };
    }
    SuperTabsToolbar.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.gesture = new __WEBPACK_IMPORTED_MODULE_2__super_tabs_pan_gesture__["a" /* SuperTabsPanGesture */](this.plt, this.tabButtonsContainer.nativeElement, this.config, this.rnd);
        this.gesture.onMove = function (delta) {
            var newCPos = _this.segmentPosition + delta;
            var mw = _this.el.nativeElement.offsetWidth, cw = _this.segmentWidth;
            newCPos = Math.max(0, Math.min(newCPos, cw - mw));
            _this.setSegmentPosition(newCPos);
        };
        if (this.scrollTabs) {
            this.plt.timeout(function () {
                _this.indexSegmentButtonWidths();
            }, 10);
        }
    };
    SuperTabsToolbar.prototype.ngOnDestroy = function () {
        this.gesture && this.gesture.destroy();
    };
    SuperTabsToolbar.prototype.onTabSelect = function (index) {
        this.tabSelect.emit(index);
    };
    SuperTabsToolbar.prototype.alignIndicator = function (position, width, animate) {
        this.setIndicatorProperties(width, position, animate);
    };
    SuperTabsToolbar.prototype.setIndicatorPosition = function (position, animate) {
        this.setIndicatorProperties(this.indicatorWidth, position, animate);
    };
    SuperTabsToolbar.prototype.setIndicatorWidth = function (width, animate) {
        this.setIndicatorProperties(width, this.indicatorPosition, animate);
    };
    SuperTabsToolbar.prototype.setIndicatorProperties = function (width, position, animate) {
        this.indicatorWidth = width;
        this.indicatorPosition = position;
        var scale = width / 100;
        this.toggleAnimation('indicator', animate);
        this.rnd.setStyle(this.indicator.nativeElement, this.plt.Css.transform, 'translate3d(' + (position - this.segmentPosition) + 'px, 0, 0) scale3d(' + scale + ', 1, 1)');
    };
    SuperTabsToolbar.prototype.setSegmentPosition = function (position, animate) {
        this.segmentPosition = position;
        this.toggleAnimation('segment', animate);
        this.rnd.setStyle(this.tabButtonsBar.nativeElement, this.plt.Css.transform, "translate3d(" + -1 * position + "px,0,0)");
        this.setIndicatorPosition(this.indicatorPosition, animate);
    };
    /**
     * Enables/disables animation
     * @param el
     * @param animate
     */
    SuperTabsToolbar.prototype.toggleAnimation = function (el, animate) {
        if (!this.config || this.config.transitionDuration === 0)
            return;
        // only change style if the value changed
        if (this.animationState[el] === animate)
            return;
        this.animationState[el] = animate;
        var _el = el === 'indicator' ? this.indicator.nativeElement : this.tabButtonsBar.nativeElement;
        var value = animate ? "all " + this.config.transitionDuration + "ms " + this.config.transitionEase : 'initial';
        this.rnd.setStyle(_el, this.plt.Css.transition, value);
    };
    /**
     * Indexes the segment button widths
     */
    SuperTabsToolbar.prototype.indexSegmentButtonWidths = function () {
        var index = [], total = 0;
        this.tabButtons.forEach(function (btn, i) {
            index[i] = btn.getNativeElement().offsetWidth;
            total += index[i];
        });
        this.segmentButtonWidths = index;
        this.segmentWidth = total;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabsToolbar.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabsToolbar.prototype, "tabsColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabsToolbar.prototype, "badgeColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SuperTabsToolbar.prototype, "scrollTabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabsToolbar.prototype, "indicatorColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], SuperTabsToolbar.prototype, "selectedTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SuperTabsToolbar.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabsToolbar.prototype, "tabsPlacement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SuperTabsToolbar.prototype, "tabSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__super_tab_button__["a" /* SuperTabButton */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], SuperTabsToolbar.prototype, "tabButtons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('tabButtonsContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SuperTabsToolbar.prototype, "tabButtonsContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('indicator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SuperTabsToolbar.prototype, "indicator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('tabButtons'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SuperTabsToolbar.prototype, "tabButtonsBar", void 0);
    SuperTabsToolbar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'super-tabs-toolbar',
            template: "\n    <ion-toolbar [color]=\"color\" mode=\"md\" [class.scroll-tabs]=\"scrollTabs\">\n      <div class=\"tab-buttons-container\" #tabButtonsContainer>\n        <div *ngIf=\"tabsPlacement === 'bottom'\" class=\"indicator {{ 'button-md-' + indicatorColor }}\" #indicator></div>\n        <div class=\"tab-buttons\" #tabButtons>\n          <super-tab-button *ngFor=\"let tab of tabs; let i = index\" (select)=\"onTabSelect(i)\" [title]=\"tab.title\" [icon]=\"tab.icon\" [badge]=\"tab.badge\" [selected]=\"selectedTab === i\" [color]=\"tabsColor\" [badgeColor]=\"badgeColor\"></super-tab-button>\n        </div>\n        <div *ngIf=\"tabsPlacement === 'top'\" class=\"indicator {{ 'button-md-' + indicatorColor }}\" #indicator></div>\n      </div>\n    </ion-toolbar>\n  ",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* DomController */]])
    ], SuperTabsToolbar);
    return SuperTabsToolbar;
}());

//# sourceMappingURL=super-tabs-toolbar.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTabsPanGesture; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_util_dom__ = __webpack_require__(10);

var SuperTabsPanGesture = (function () {
    function SuperTabsPanGesture(plt, el, config, rnd) {
        this.plt = plt;
        this.el = el;
        this.config = config;
        this.rnd = rnd;
        this.leftThreshold = 0;
        this.rightThreshold = 0;
        this.listeners = [];
        this.listeners.push(rnd.listen(el, 'touchstart', this._onStart.bind(this)), rnd.listen(el, 'touchmove', this._onMove.bind(this)), rnd.listen(el, 'touchend', this._onEnd.bind(this)));
        if (config.sideMenu === 'both' || config.sideMenu === 'left') {
            this.leftThreshold = config.sideMenuThreshold;
        }
        if (config.sideMenu === 'both' || config.sideMenu === 'right') {
            this.rightThreshold = config.sideMenuThreshold;
        }
    }
    SuperTabsPanGesture.prototype.destroy = function () {
        this.listeners.forEach(function (fn) { return fn(); });
    };
    SuperTabsPanGesture.prototype._onStart = function (ev) {
        var coords = Object(__WEBPACK_IMPORTED_MODULE_0_ionic_angular_util_dom__["f" /* pointerCoord */])(ev), vw = this.plt.width();
        if (coords.x < this.leftThreshold || coords.x > vw - this.rightThreshold) {
            // ignore this gesture, it started in the side menu touch zone
            this.shouldCapture = false;
            return;
        }
        // the starting point looks good, let's see what happens when we move
        this.initialCoords = coords;
        if (this.config.shortSwipeDuration > 0)
            this.initialTimestamp = Date.now();
        this.lastPosX = coords.x;
    };
    SuperTabsPanGesture.prototype._onMove = function (ev) {
        var coords = Object(__WEBPACK_IMPORTED_MODULE_0_ionic_angular_util_dom__["f" /* pointerCoord */])(ev);
        if (!this.isDragging) {
            if (typeof this.shouldCapture !== 'boolean')
                // we haven't decided yet if we want to capture this gesture
                this.checkGesture(coords);
            if (this.shouldCapture === true)
                // gesture is good, let's capture all next onTouchMove events
                this.isDragging = true;
            else
                return;
        }
        // stop anything else from capturing these events, to make sure the content doesn't slide
        ev.stopPropagation();
        ev.preventDefault();
        // get delta X
        var deltaX = this.lastPosX - coords.x;
        // emit value
        this.onMove && this.onMove(deltaX);
        // update last X value
        this.lastPosX = coords.x;
    };
    SuperTabsPanGesture.prototype._onEnd = function (ev) {
        var coords = Object(__WEBPACK_IMPORTED_MODULE_0_ionic_angular_util_dom__["f" /* pointerCoord */])(ev);
        if (this.shouldCapture === true) {
            if (this.config.shortSwipeDuration > 0) {
                var deltaTime = Date.now() - this.initialTimestamp;
                if (deltaTime <= this.config.shortSwipeDuration)
                    this.onEnd && this.onEnd(true, coords.x - this.initialCoords.x);
                else
                    this.onEnd && this.onEnd(false);
            }
            else
                this.onEnd && this.onEnd(false);
        }
        this.isDragging = false;
        this.shouldCapture = undefined;
    };
    SuperTabsPanGesture.prototype.checkGesture = function (newCoords) {
        var radians = this.config.maxDragAngle * (Math.PI / 180), maxCosine = Math.cos(radians), deltaX = newCoords.x - this.initialCoords.x, deltaY = newCoords.y - this.initialCoords.y, distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (distance >= this.config.dragThreshold) {
            // swipe is long enough so far
            // lets check the angle
            var angle = Math.atan2(deltaY, deltaX), cosine = Math.cos(angle);
            this.shouldCapture = Math.abs(cosine) > maxCosine;
        }
    };
    return SuperTabsPanGesture;
}());

//# sourceMappingURL=super-tabs-pan-gesture.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTabButton; });
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

var SuperTabButton = (function () {
    function SuperTabButton(_el) {
        this._el = _el;
        this.selected = false;
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SuperTabButton.prototype.onClick = function () {
        this.select.emit(this);
    };
    SuperTabButton.prototype.getNativeElement = function () {
        return this._el.nativeElement;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SuperTabButton.prototype, "selected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabButton.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabButton.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], SuperTabButton.prototype, "badge", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabButton.prototype, "badgeColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabButton.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SuperTabButton.prototype, "select", void 0);
    SuperTabButton = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'super-tab-button',
            template: "\n    <ion-icon *ngIf=\"!!icon\" [name]=\"icon\" [color]=\"color\"></ion-icon>\n    <span class=\"title\" *ngIf=\"!!title\" ion-text [color]=\"color\">{{ title }}</span>\n    <ion-badge mode=\"md\" [color]=\"badgeColor\">{{ badge }}</ion-badge>\n    <div class=\"button-effect\"></div>\n  ",
            host: {
                '[class.selected]': 'selected',
                '(click)': 'onClick()',
                '[class.title-only]': '!!title && !icon',
                '[class.icon-only]': '!title && !!icon',
                '[class.title-and-icon]': '!!title && !!icon',
                'tappable': '',
                'role': 'button'
            },
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SuperTabButton);
    return SuperTabButton;
}());

//# sourceMappingURL=super-tab-button.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTabsContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__super_tabs_pan_gesture__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SuperTabsContainer = (function () {
    function SuperTabsContainer(el, rnd, plt, ngZone) {
        this.el = el;
        this.rnd = rnd;
        this.plt = plt;
        this.ngZone = ngZone;
        /**
         * Number of tabs
         * @type {number}
         */
        this.tabsCount = 0;
        /**
         * Notifies when a tab is selected
         * @type {EventEmitter<Object>}
         */
        this.tabSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        /**
         * Notifies when the container is being dragged
         * @type {EventEmitter<TouchEvent>}
         */
        this.onDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // View bindings
        /**
         * Container position
         * @type {number}
         */
        this.containerPosition = 0;
        /**
         * Single tab width
         * @type {number}
         */
        this.tabWidth = 0;
        /**
         * Container width (sum of tab widths)
         * @type {number}
         */
        this.containerWidth = 0;
        /**
         * Boolean indicating whether swiping is globally enabled
         * @type {boolean}
         */
        this.globalSwipeEnabled = true;
        /**
         * Set of booleans to indicate whether swiping is enabled on each tab
         * @type {{}}
         */
        this.swipeEnabledPerTab = {};
    }
    SuperTabsContainer.prototype.ngAfterViewInit = function () {
        this.init();
    };
    SuperTabsContainer.prototype.ngOnDestroy = function () {
        this.gesture && this.gesture.destroy();
    };
    /**
     * Enable or disable swiping globally
     * @param enable {boolean} set to true to enable
     */
    SuperTabsContainer.prototype.enableTabsSwipe = function (enable) {
        this.globalSwipeEnabled = enable;
    };
    /**
     * Enable or disable swiping when a tab is selected
     * @param tabIndex {number} tab index
     * @param enable {boolean} set to true to enable
     */
    SuperTabsContainer.prototype.enableTabSwipe = function (tabIndex, enable) {
        this.swipeEnabledPerTab[tabIndex] = enable;
    };
    SuperTabsContainer.prototype.refreshDimensions = function () {
        this.calculateContainerWidth();
        this.setContainerWidth();
        this.refreshMinMax();
    };
    SuperTabsContainer.prototype.getNativeElement = function () {
        return this.el.nativeElement;
    };
    SuperTabsContainer.prototype.init = function () {
        var _this = this;
        this.refreshDimensions();
        this.gesture = new __WEBPACK_IMPORTED_MODULE_2__super_tabs_pan_gesture__["a" /* SuperTabsPanGesture */](this.plt, this.container.nativeElement, this.config, this.rnd);
        this.gesture.onMove = function (delta) {
            if (_this.globalSwipeEnabled === false)
                return;
            if (_this.swipeEnabledPerTab[_this.selectedTabIndex] === false)
                return;
            if ((_this.containerPosition === _this.maxPosX && delta >= 0) || (_this.containerPosition === _this.minPosX && delta <= 0))
                return;
            _this.containerPosition += delta;
            _this.plt.raf(function () {
                _this.onDrag.emit();
                _this.moveContainer();
            });
        };
        this.gesture.onEnd = function (shortSwipe, shortSwipeDelta) {
            if (_this.globalSwipeEnabled === false)
                return;
            if (_this.swipeEnabledPerTab[_this.selectedTabIndex] === false)
                return;
            // get tab index based on container position
            var tabIndex = Math.round(_this.containerPosition / _this.tabWidth);
            // handle short swipes
            // only short swipe if we didn't change tab already in this gesture
            (tabIndex === _this.selectedTabIndex) && shortSwipe && ((shortSwipeDelta < 0 && tabIndex++) || (shortSwipeDelta > 0 && tabIndex--));
            // get location based on tab index
            var position = Math.max(_this.minPosX, Math.min(_this.maxPosX, tabIndex * _this.tabWidth));
            tabIndex = position / _this.tabWidth;
            // move container if we changed position
            if (position !== _this.containerPosition) {
                _this.plt.raf(function () {
                    return _this.moveContainer(true, position)
                        .then(function () {
                        return _this.ngZone.run(function () { return _this.setSelectedTab(tabIndex); });
                    });
                });
            }
            else
                _this.setSelectedTab(tabIndex);
        };
    };
    /**
     * Set the selected tab.
     * Emits a tabSelect event with the tab index, and a boolean indicating whether the tab changed or not.
     * @param index {number} tab index
     */
    SuperTabsContainer.prototype.setSelectedTab = function (index) {
        this.tabSelect.emit({ index: index, changed: index !== this.selectedTabIndex });
        this.selectedTabIndex = index;
    };
    /**
     * Calculate the container's width.
     * It's usually the number of tabs x tab width.
     */
    SuperTabsContainer.prototype.calculateContainerWidth = function () {
        this.containerWidth = this.tabWidth * this.tabsCount;
    };
    /**
     * Set the container's width via CSS property
     */
    SuperTabsContainer.prototype.setContainerWidth = function () {
        this.rnd.setStyle(this.container.nativeElement, 'width', this.containerWidth + 'px');
    };
    /**
     * Slide to a specific tab
     * @param index {number} tab index
     * @param [animate=true] {boolean} set to true to animate
     */
    SuperTabsContainer.prototype.slideTo = function (index, animate) {
        var _this = this;
        if (animate === void 0) { animate = true; }
        this.plt.raf(function () { return _this.moveContainer(animate, index * _this.tabWidth); });
    };
    /**
     * Moves the container to a specified position
     * @param [animate=false] {boolean} set to true to animate
     * @param [positionX] {number} position on x-axis
     */
    SuperTabsContainer.prototype.moveContainer = function (animate, positionX) {
        if (animate === void 0) { animate = false; }
        return __awaiter(this, void 0, void 0, function () {
            var el;
            return __generator(this, function (_a) {
                el = this.container.nativeElement;
                if (animate) {
                    if (el.style[this.plt.Css.transform].indexOf('all') === -1) {
                        this.rnd.setStyle(el, this.plt.Css.transition, "all " + this.config.transitionDuration + "ms " + this.config.transitionEase);
                    }
                    this.rnd.setStyle(el, this.plt.Css.transform, "translate3d(" + -1 * positionX + "px, 0, 0)");
                    this.containerPosition = positionX;
                }
                else {
                    if (positionX) {
                        this.containerPosition = positionX;
                    }
                    if (el.style[this.plt.Css.transform] !== 'initial') {
                        this.rnd.setStyle(el, this.plt.Css.transition, 'initial');
                    }
                    this.containerPosition = Math.max(this.minPosX, Math.min(this.maxPosX, this.containerPosition));
                    this.rnd.setStyle(el, this.plt.Css.transform, "translate3d(" + -1 * this.containerPosition + "px, 0, 0)");
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Refresh the min and max positions that the container can be at.
     * The minimum position is always 0, the maximum position is the number of tabs x tab width.
     */
    SuperTabsContainer.prototype.refreshMinMax = function () {
        this.minPosX = 0;
        this.maxPosX = (this.tabsCount - 1) * this.tabWidth;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SuperTabsContainer.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], SuperTabsContainer.prototype, "tabsCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], SuperTabsContainer.prototype, "selectedTabIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SuperTabsContainer.prototype, "tabSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SuperTabsContainer.prototype, "onDrag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SuperTabsContainer.prototype, "container", void 0);
    SuperTabsContainer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'super-tabs-container',
            template: '<div #container><ng-content></ng-content></div>',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], SuperTabsContainer);
    return SuperTabsContainer;
}());

//# sourceMappingURL=super-tabs-container.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobleVariable; });
var GlobleVariable = {
    globleTheme: "",
};
//# sourceMappingURL=globle.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticlesProvider; });
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

var ParticlesProvider = (function () {
    function ParticlesProvider() {
    }
    ParticlesProvider.prototype.renderParticle = function (context, canvasWidth, canvasHeight) {
        // Define particle properties
        var startingX = Math.round(canvasWidth / 2) + Math.random() * 225, startingY = Math.round(canvasHeight / 2) + Math.random() * 115 - 57, radius = this.generateRandomValue(7, 3), startAngle = 0, endAngle = 2 * Math.PI, clockwise = true, 
        // Define the colour value for each generated particle using the HSLA CSS property
        hue = this.generateRandomValue(50, 0), saturation = 80 + '%', lightness = 50 + '%', alpha = 1, colourFill = "hsla(" + hue + "," + saturation + "," + lightness + "," + alpha + ")";
        // Update the X * Y axis values for the particle
        startingX = startingX + Math.random() * 310 - 245;
        startingY = startingY + Math.random() * 410 - 225;
        // Generate the shape
        // - startingX 	(position on X axis)
        // - startingY 	(position on Y axis)
        // - radius    	(width of particle)
        // - startAngle   (starts from)
        // - endAngle   	(ends at)
        // - clockwise    (direction - clockwise or not)
        context.beginPath();
        context.arc(startingX, startingY, radius, startAngle, endAngle, clockwise);
        context.fillStyle = colourFill;
        context.fill();
    };
    ParticlesProvider.prototype.generateRandomValue = function (min, max) {
        var maxVal = max, minVal = min, genVal;
        // Generate max value
        if (maxVal === 0) {
            maxVal = maxVal;
        }
        else {
            maxVal = 1;
        }
        // Generate min value
        if (minVal) {
            minVal = minVal;
        }
        else {
            minVal = 0;
        }
        genVal = minVal + (maxVal - minVal) * Math.random();
        return genVal;
    };
    ParticlesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ParticlesProvider);
    return ParticlesProvider;
}());

//# sourceMappingURL=particles.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidManagerProvider; });
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

var ValidManagerProvider = (function () {
    function ValidManagerProvider() {
        console.log('Hello ValidManagerProvider Provider');
    }
    ValidManagerProvider.prototype.checkEmail = function () {
        return function (control) {
            var re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var input = control.value;
            var isValid = re.test(input);
            console.log('va: ', isValid);
            if (!isValid)
                return { 'email_check': { isValid: isValid } };
            else
                return null;
        };
    };
    ValidManagerProvider.prototype.checkPassword = function () {
        return function (control) {
            var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
            var input = control.value;
            var isValid = re.test(input);
            console.log('va: ', isValid);
            if (!isValid)
                return { 'newpassword_check': { isValid: isValid } };
            else
                return null;
        };
    };
    ValidManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ValidManagerProvider);
    return ValidManagerProvider;
}());

//# sourceMappingURL=valid-manager.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_super_tab__ = __webpack_require__(168);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_super_tabs__ = __webpack_require__(82);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_super_tabs_controller__ = __webpack_require__(83);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__super_tabs_module__ = __webpack_require__(285);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__super_tabs_module__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_permissions__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_sweetalert_service__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_theme_theme__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_particles_particles__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic2_super_tabs_src__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_valid_manager_valid_manager__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_http_manager_http_manager__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//=================== translate ========================
function HttpLoaderFactory(http) {
    // return new TranslateHttpLoader(http);
    return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
//------------------------------------------------------
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* SgrApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* SgrApp */], { backButtonText: '',
                    iconMode: 'ios',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    menuType: 'overlay',
                    tabsHighlight: true,
                    swipeBackEnabled: true,
                    activator: 'ripple',
                    pageTransition: 'ios-transition' }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expnd-header/expnd-header.module#ExpndHeaderPageModule', name: 'ExpndHeaderPage', segment: 'expnd-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/language/language.module#LanguagePageModule', name: 'LanguagePage', segment: 'language', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myform/myform.module#MyformPageModule', name: 'MyformPage', segment: 'myform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pera-header/pera-header.module#PeraHeaderPageModule', name: 'PeraHeaderPage', segment: 'pera-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/supertab/supertab.module#SupertabPageModule', name: 'SupertabPage', segment: 'supertab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sweetalert/sweetalert.module#SweetalertPageModule', name: 'SweetalertPage', segment: 'sweetalert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab/tab.module#TabPageModule', name: 'TabPage', segment: 'tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/theme/theme.module#ThemePageModule', name: 'ThemePage', segment: 'theme', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic2_super_tabs_src__["a" /* SuperTabsModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* SgrApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_particles_particles__["a" /* ParticlesProvider */],
                __WEBPACK_IMPORTED_MODULE_10_angular_sweetalert_service__["a" /* SweetAlertService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_theme_theme__["a" /* ThemeProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_valid_manager_valid_manager__["a" /* ValidManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_http_manager_http_manager__["a" /* HttpManagerProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_super_tab__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_super_tabs__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_super_tabs_controller__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_super_tabs_toolbar__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_super_tabs_container__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_super_tab_button__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SuperTabsModule = (function () {
    function SuperTabsModule() {
    }
    SuperTabsModule_1 = SuperTabsModule;
    SuperTabsModule.forRoot = function () {
        return {
            ngModule: SuperTabsModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_super_tabs_controller__["a" /* SuperTabsController */]
            ]
        };
    };
    SuperTabsModule = SuperTabsModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__components_super_tab__["a" /* SuperTab */],
                __WEBPACK_IMPORTED_MODULE_3__components_super_tabs__["a" /* SuperTabs */],
                __WEBPACK_IMPORTED_MODULE_5__components_super_tabs_toolbar__["a" /* SuperTabsToolbar */],
                __WEBPACK_IMPORTED_MODULE_6__components_super_tabs_container__["a" /* SuperTabsContainer */],
                __WEBPACK_IMPORTED_MODULE_7__components_super_tab_button__["a" /* SuperTabButton */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__components_super_tab__["a" /* SuperTab */],
                __WEBPACK_IMPORTED_MODULE_3__components_super_tabs__["a" /* SuperTabs */]
            ]
        })
    ], SuperTabsModule);
    return SuperTabsModule;
    var SuperTabsModule_1;
}());

//# sourceMappingURL=super-tabs.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SgrApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_theme_theme__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_globle__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SgrApp = (function () {
    function SgrApp(platform, statusBar, event, modalCtrl, splashScreen, themeCtrl, translateService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.event = event;
        this.modalCtrl = modalCtrl;
        this.splashScreen = splashScreen;
        this.themeCtrl = themeCtrl;
        this.translateService = translateService;
        this.theme = 'dark-theme';
        this.shownGroup = null;
        this.rootPage = 'LoginPage';
        this.initializeApp();
        this.pages = [
            { title: 'Expandable Header', component: 'ExpndHeaderPage', icon: 'ios-analytics' },
            { title: 'Sweet Alert', component: 'SweetalertPage', icon: 'alert' },
            { title: 'Perallax Header', component: 'PeraHeaderPage', icon: 'image' },
            { title: 'Login', component: 'LoginPage', icon: 'form' },
        ];
        this.acrodianmenu = [
            { headername: 'Super Tabs', component: 'SupertabPage', page: [], icon: 'logo-css3' },
            { headername: 'Language', component: 'LanguagePage', page: [], icon: 'ios-analytics' },
            { headername: "Auther Info", component: '', icon: 'code-working',
                page: [{ title: 'Profile', component: '', icon: 'user' },
                ]
            }
        ];
    }
    //========= menu Acrodian ==========
    SgrApp.prototype.toggleDetails = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    SgrApp.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    SgrApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.translateService.setDefaultLang('en');
            _this.translateService.use('en');
            _this.event.subscribe('theme', function () {
                _this.toggleTheme();
            });
        });
    };
    SgrApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    //============== theme apply function ==============
    SgrApp.prototype.toggleTheme = function () {
        //this.theme = 
        this.themeCtrl.setTheme();
        this.theme = __WEBPACK_IMPORTED_MODULE_6__models_globle__["a" /* GlobleVariable */].globleTheme;
    };
    SgrApp.prototype.fnAboutModel = function () {
        var modal = this.modalCtrl.create('AboutPage');
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], SgrApp.prototype, "nav", void 0);
    SgrApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/app/app.html"*/'\n<div class="{{theme}}">\n<ion-split-pane>\n<ion-menu type="push" [content]="content">  <!-- style="max-width: 270px;" -->\n  <ion-header>\n    <ion-navbar>\n      <ion-title>Ionic Corner</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <div *ngFor="let d of acrodianmenu let i=index ">\n        <ion-item *ngIf="d.component == \'\'"  (click)="toggleDetails(i)" [ngClass]="{active: isGroupShown(i)}">\n           <ion-icon item-start [name]="d.icon"></ion-icon>\n            {{d.headername}}\n            <ion-icon  item-right [name]="isGroupShown(i) ? \'ios-arrow-down\' : \'ios-arrow-forward\'"></ion-icon>\n        </ion-item>\n\n        <button ion-item *ngIf="d.component != \'\'"  menuClose ion-item (click)="openPage(d)">\n        <ion-icon item-start [name]="d.icon"></ion-icon>\n          {{d.headername}}\n        </button>\n\n        <div *ngIf="isGroupShown(i)">\n           <button ion-item menuClose *ngFor="let p of d.page" (click)="fnAboutModel()">\n              <ion-icon item-start [name]="p.icon"></ion-icon>\n              {{p.title}}\n           </button>\n        </div>\n    </div>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage"  main #content swipeBackEnabled="false" ></ion-nav> \n</ion-split-pane>\n\n<!-- ====================== Right Menu =========================== -->\n<ion-menu type="overlay" [content]="content" side="right">\n  <ion-header >\n    <ion-toolbar>\n      <ion-title>Ionic Advanced</ion-title>\n      <ion-buttons end>\n    <button ion-button icon-only menuClose="right" >\n      <ion-icon name="md-close"></ion-icon>\n    </button>\n    </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n        <ion-item menuClose="right" *ngFor="let d of pages" (click)="openPage(d)">\n           <ion-icon item-start [name]="d.icon"></ion-icon>\n            {{d.title}}\n        </ion-item>\n\n        <ion-item>\n              <ion-icon item-start name="color-palette"></ion-icon>\n              Set Theme\n              <button item-end *ngIf="theme ==\'light-theme\'" menuClose="right" ion-button round color="dark" (click)="toggleTheme()">dark</button>\n              <button item-end *ngIf="theme ==\'dark-theme\'" menuClose="right" ion-button round outline color="light" (click)="toggleTheme()">light</button>\n        </ion-item>\n  </ion-content>\n\n</ion-menu>\n</div>\n<!-- <ion-nav [root]="rootPage" #mycontent swipeBackEnabled="false"></ion-nav> -->'/*ion-inline-end:"/Volumes/TimeMachine/AtoZ_Projects/IONIC_DEBUG/ion-panview/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_theme_theme__["a" /* ThemeProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], SgrApp);
    return SgrApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HttpManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpManagerProvider = (function () {
    function HttpManagerProvider(http) {
        this.http = http;
        console.log('Hello HttpManagerProvider Provider');
    }
    HttpManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HttpManagerProvider);
    return HttpManagerProvider;
}());

//# sourceMappingURL=http-manager.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__super_tabs_toolbar__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__super_tabs_container__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_super_tabs_controller__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_navigation_nav_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var SuperTabs = (function () {
    function SuperTabs(parent, viewCtrl, _app, el, rnd, superTabsCtrl, linker, domCtrl, _plt) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this._app = _app;
        this.el = el;
        this.rnd = rnd;
        this.superTabsCtrl = superTabsCtrl;
        this.linker = linker;
        this.domCtrl = domCtrl;
        this._plt = _plt;
        /**
         * Color of the slider that moves based on what tab is selected
         */
        this.indicatorColor = 'primary';
        /**
         * Badge color
         */
        this.badgeColor = 'primary';
        /**
         * Configuration
         */
        this.config = {};
        /**
         * Tab buttons placement. Can be `top` or `bottom`.
         * @type {string}
         */
        this.tabsPlacement = 'top';
        /**
         * Emits the tab index when the selected tab changes
         * @type {EventEmitter<Object>}
         */
        this.tabSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        /**
         * Indicates whether the toolbar is visible
         * @private
         */
        this._isToolbarVisible = true;
        /**
         * @private
         */
        this._tabs = [];
        /**
         * Indicates whether the tab buttons should scroll
         * @type {boolean}
         * @private
         */
        this._scrollTabs = false;
        /**
         * Selected tab index
         * @type {number}
         * @private
         */
        this._selectedTabIndex = 0;
        /**
         * Any observable subscriptions that we should unsubscribe from when destroying this component
         * @type {Array<Subscription>}
         * @private
         */
        this.watches = [];
        /**
         * Indicates whether any of the tabs has an icon
         * @type {boolean}
         * @private
         */
        this.hasIcons = false;
        /**
         * Indicates whether any of the tabs has a title
         * @type {boolean}
         * @private
         */
        this.hasTitles = false;
        /**
         * Indicates whether the component has finished initializing
         * @type {boolean}
         * @private
         */
        this.init = false;
        this.parent = parent;
        if (this.parent) {
            this.parent.registerChildNav(this);
        }
        else if (viewCtrl && viewCtrl.getNav()) {
            this.parent = viewCtrl.getNav();
            this.parent.registerChildNav(this);
        }
        else if (this._app) {
            this._app.registerRootNav(this);
        }
        var obsToMerge = [
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(window, 'orientationchange'),
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(window, 'resize')
        ];
        if (viewCtrl) {
            obsToMerge.push(viewCtrl.didEnter);
        }
        // re-adjust the height of the slider when the orientation changes
        var $windowResize = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].merge.apply(this, obsToMerge).debounceTime(10);
        var windowResizeSub = $windowResize.subscribe(function () {
            _this.resize();
        });
        this.watches.push(windowResizeSub);
    }
    SuperTabs_1 = SuperTabs;
    SuperTabs.prototype.getType = function () { return; };
    SuperTabs.prototype.getSecondaryIdentifier = function () { return; };
    SuperTabs.prototype.getAllChildNavs = function () {
        return this._tabs;
    };
    Object.defineProperty(SuperTabs.prototype, "height", {
        get: function () {
            return this.el.nativeElement.offsetHeight;
        },
        /**
         * Height of the tabs
         */
        set: function (val) {
            this.rnd.setStyle(this.el.nativeElement, 'height', val + 'px');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperTabs.prototype, "selectedTabIndex", {
        get: function () {
            return this._selectedTabIndex;
        },
        /**
         * The initial selected tab index
         * @param val {number} tab index
         */
        set: function (val) {
            this._selectedTabIndex = Number(val);
            this.init && this.alignIndicatorPosition(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperTabs.prototype, "scrollTabs", {
        get: function () {
            return this._scrollTabs;
        },
        /**
         * Set to true to enable tab buttons scrolling
         * @param val
         */
        set: function (val) {
            this._scrollTabs = typeof val !== 'boolean' || val === true;
        },
        enumerable: true,
        configurable: true
    });
    SuperTabs.prototype.ngOnInit = function () {
        var defaultConfig = {
            dragThreshold: 10,
            maxDragAngle: 40,
            sideMenuThreshold: 50,
            transitionDuration: 300,
            transitionEase: 'cubic-bezier(0.35, 0, 0.25, 1)',
            shortSwipeDuration: 300
        };
        for (var prop in this.config) {
            defaultConfig[prop] = this.config[prop];
        }
        this.config = defaultConfig;
        this.id = this.id || "super-tabs-" + ++superTabsIds;
        this.superTabsCtrl.registerInstance(this);
        if (this.tabsPlacement === 'bottom') {
            this.rnd.addClass(this.getElementRef().nativeElement, 'tabs-placement-bottom');
        }
    };
    SuperTabs.prototype.ngAfterContentInit = function () {
        this.updateTabWidth();
        this.toolbar.tabs = this._tabs;
    };
    SuperTabs.prototype.ngAfterViewInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var tabsSegment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tabsSegment = this.linker.getSegmentByNavIdOrName(this.id, this.name);
                        if (tabsSegment) {
                            this.selectedTabIndex = this.getTabIndexById(tabsSegment.id);
                        }
                        this.linker.navChange(__WEBPACK_IMPORTED_MODULE_6_ionic_angular_navigation_nav_util__["c" /* DIRECTION_SWITCH */]);
                        if (!this.hasTitles && !this.hasIcons)
                            this._isToolbarVisible = false;
                        this.tabsContainer.slideTo(this.selectedTabIndex, false);
                        return [4 /*yield*/, this.refreshTabStates()];
                    case 1:
                        _a.sent();
                        this.fireLifecycleEvent(['willEnter', 'didEnter']);
                        this.setFixedIndicatorWidth();
                        // we need this to make sure the "slide" thingy doesn't move outside the screen
                        this.setMaxIndicatorPosition();
                        setTimeout(function () { return _this.alignIndicatorPosition(); }, 100);
                        this.refreshContainerHeight();
                        this.init = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    SuperTabs.prototype.ngOnDestroy = function () {
        this.watches.forEach(function (watch) {
            watch.unsubscribe && watch.unsubscribe();
        });
        this.parent.unregisterChildNav(this);
        this.superTabsCtrl.unregisterInstance(this.id);
    };
    SuperTabs.prototype.resize = function () {
        if (this.el.nativeElement.offsetParent === null)
            return;
        this.setMaxIndicatorPosition();
        this.updateTabWidth();
        this.setFixedIndicatorWidth();
        this.refreshTabWidths();
        this.tabsContainer.refreshDimensions();
        this.tabsContainer.slideTo(this.selectedTabIndex);
        this.alignIndicatorPosition();
        this.refreshContainerHeight();
    };
    /**
     * Sets the badge number for a specific tab
     * @param tabId {string} tab ID
     * @param value {number} badge number
     */
    SuperTabs.prototype.setBadge = function (tabId, value) {
        this.getTabById(tabId).setBadge(value);
    };
    /**
     * Clears the badge for a specific tab
     * @param tabId {string} tab ID
     */
    SuperTabs.prototype.clearBadge = function (tabId) {
        this.getTabById(tabId).clearBadge();
    };
    /**
     * Increases the badge value for a specific tab
     * @param tabId {string} tab ID
     * @param increaseBy {number} the number to increase by
     */
    SuperTabs.prototype.increaseBadge = function (tabId, increaseBy) {
        this.getTabById(tabId).increaseBadge(increaseBy);
    };
    SuperTabs.prototype.decreaseBadge = function (tabId, decreaseBy) {
        this.getTabById(tabId).decreaseBadge(decreaseBy);
    };
    SuperTabs.prototype.enableTabsSwipe = function (enable) {
        this.tabsContainer.enableTabsSwipe(enable);
    };
    SuperTabs.prototype.enableTabSwipe = function (tabId, enable) {
        this.tabsContainer.enableTabSwipe(this.getTabIndexById(tabId), enable);
    };
    SuperTabs.prototype.showToolbar = function (show) {
        this._isToolbarVisible = show;
        this.refreshContainerHeight();
    };
    SuperTabs.prototype.slideTo = function (indexOrId, fireEvent) {
        if (fireEvent === void 0) { fireEvent = true; }
        typeof indexOrId === 'string' && (indexOrId = this.getTabIndexById(indexOrId));
        fireEvent && this.onToolbarTabSelect(indexOrId);
    };
    SuperTabs.prototype.getActiveChildNavs = function () {
        return [this._tabs[this.selectedTabIndex]];
    };
    SuperTabs.prototype.addTab = function (tab) {
        tab.rootParams = tab.rootParams || {};
        tab.rootParams.rootNavCtrl = this.parent;
        tab.tabId = tab.tabId || "super-tabs-" + this.id + "-tab-" + this._tabs.length;
        this._tabs.push(tab);
        if (tab.icon) {
            this.hasIcons = true;
        }
        if (tab.title) {
            this.hasTitles = true;
        }
        tab.setWidth(this.el.nativeElement.offsetWidth);
    };
    /**
     * We listen to drag events to move the "slide" thingy along with the slides
     */
    SuperTabs.prototype.onDrag = function () {
        var _this = this;
        if (!this._isToolbarVisible)
            return;
        this.domCtrl.write(function () {
            var singleSlideWidth = _this.tabsContainer.tabWidth, slidesWidth = _this.tabsContainer.containerWidth;
            var percentage = Math.abs(_this.tabsContainer.containerPosition / slidesWidth);
            if (_this.scrollTabs) {
                var originalSlideStart = singleSlideWidth * _this.selectedTabIndex, originalPosition = _this.getRelativeIndicatorPosition(), originalWidth = _this.getSegmentButtonWidth();
                var nextPosition = void 0, nextWidth = void 0, indicatorPosition = void 0, indicatorWidth = void 0;
                var deltaTabPos = originalSlideStart - Math.abs(_this.tabsContainer.containerPosition);
                percentage = Math.abs(deltaTabPos / singleSlideWidth);
                if (deltaTabPos < 0) {
                    // going to next slide
                    nextPosition = _this.getRelativeIndicatorPosition(_this.selectedTabIndex + 1);
                    nextWidth = _this.getSegmentButtonWidth(_this.selectedTabIndex + 1);
                    indicatorPosition = originalPosition + percentage * (nextPosition - originalPosition);
                }
                else {
                    // going to previous slide
                    nextPosition = _this.getRelativeIndicatorPosition(_this.selectedTabIndex - 1);
                    nextWidth = _this.getSegmentButtonWidth(_this.selectedTabIndex - 1);
                    indicatorPosition = originalPosition - percentage * (originalPosition - nextPosition);
                }
                var deltaWidth = nextWidth - originalWidth;
                indicatorWidth = originalWidth + percentage * deltaWidth;
                if ((originalWidth > nextWidth && indicatorWidth < nextWidth) || (originalWidth < nextWidth && indicatorWidth > nextWidth)) {
                    // this is only useful on desktop, because you are able to drag and swipe through multiple tabs at once
                    // which results in the indicator width to be super small/big since it's changing based on the current/next widths
                    indicatorWidth = nextWidth;
                }
                _this.alignTabButtonsContainer();
                _this.toolbar.setIndicatorProperties(indicatorWidth, indicatorPosition);
            }
            else {
                _this.toolbar.setIndicatorPosition(Math.min(percentage * singleSlideWidth, _this.maxIndicatorPosition));
            }
        });
    };
    /**
     * Runs when the user clicks on a segment button
     * @param index
     */
    SuperTabs.prototype.onTabChange = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = Number(index);
                        if (index === this.selectedTabIndex) {
                            this.tabSelect.emit({
                                index: index,
                                id: this._tabs[index].tabId,
                                changed: false
                            });
                            return [2 /*return*/];
                        }
                        if (!(index <= this._tabs.length)) return [3 /*break*/, 2];
                        this.fireLifecycleEvent(['willLeave', 'didLeave']);
                        this.selectedTabIndex = index;
                        this.linker.navChange(__WEBPACK_IMPORTED_MODULE_6_ionic_angular_navigation_nav_util__["c" /* DIRECTION_SWITCH */]);
                        return [4 /*yield*/, this.refreshTabStates()];
                    case 1:
                        _a.sent();
                        this.fireLifecycleEvent(['willEnter', 'didEnter']);
                        this.tabSelect.emit({
                            index: index,
                            id: this._tabs[index].tabId,
                            changed: true
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SuperTabs.prototype.onToolbarTabSelect = function (index) {
        if (index !== this.selectedTabIndex) {
            this.tabsContainer.slideTo(index);
        }
        return this.onTabChange(index);
    };
    SuperTabs.prototype.onContainerTabSelect = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!ev.changed) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onTabChange(ev.index)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.alignIndicatorPosition(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    SuperTabs.prototype.fireLifecycleEvent = function (events) {
        var activeView = this.getActiveTab().getActive();
        events.forEach(function (event) {
            switch (event) {
                case 'willEnter':
                    activeView._willEnter();
                    break;
                case 'didEnter':
                    activeView._didEnter();
                    break;
                case 'willLeave':
                    activeView._willLeave(false);
                    break;
                case 'didLeave':
                    activeView._didLeave();
                    break;
            }
        });
    };
    SuperTabs.prototype.refreshTabStates = function () {
        var _this = this;
        return Promise.all(this._tabs.map(function (tab, i) {
            tab.setActive(i === _this.selectedTabIndex);
            return tab.load(Math.abs(_this.selectedTabIndex - i) < 2);
        }));
    };
    SuperTabs.prototype.updateTabWidth = function () {
        this.tabsContainer.tabWidth = this.el.nativeElement.offsetWidth;
    };
    SuperTabs.prototype.refreshContainerHeight = function () {
        var heightOffset = 0;
        if (this._isToolbarVisible) {
            if (this.hasTitles && this.hasIcons) {
                heightOffset = 72;
            }
            else if (this.hasTitles || this.hasIcons) {
                heightOffset = 48;
            }
        }
        this.rnd.setStyle(this.tabsContainer.getNativeElement(), 'height', "calc(100% - " + heightOffset + "px)");
    };
    SuperTabs.prototype.refreshTabWidths = function () {
        var width = this.el.nativeElement.offsetWidth;
        this._tabs.forEach(function (tab) { return tab.setWidth(width); });
    };
    SuperTabs.prototype.alignTabButtonsContainer = function (animate) {
        var mw = this.el.nativeElement.offsetWidth, // max width
        iw = this.toolbar.indicatorWidth, // indicator width
        ip = this.toolbar.indicatorPosition, // indicatorPosition
        sp = this.toolbar.segmentPosition; // segment position
        if (mw === 0)
            return;
        if (this.toolbar.segmentWidth <= mw) {
            if (this.toolbar.segmentPosition !== 0) {
                this.toolbar.setSegmentPosition(0, animate);
            }
            return;
        }
        var pos;
        if (ip + iw + (mw / 2 - iw / 2) > mw + sp) {
            // we need to move the segment container to the left
            var delta = (ip + iw + (mw / 2 - iw / 2)) - mw - sp, max = this.toolbar.segmentWidth - mw;
            pos = sp + delta;
            pos = pos < max ? pos : max;
        }
        else if (ip - (mw / 2 - iw / 2) < sp) {
            // we need to move the segment container to the right
            pos = ip - (mw / 2 - iw / 2);
            // pos = pos >= 0? pos : 0;
            pos = pos < 0 ? 0 : pos > ip ? (ip - mw + iw) : pos;
            // pos = pos < 0? 0 : pos > maxPos? maxPos : pos;
        }
        else
            return; // no need to move the segment container
        this.toolbar.setSegmentPosition(pos, animate);
    };
    SuperTabs.prototype.getRelativeIndicatorPosition = function (index) {
        if (index === void 0) { index = this.selectedTabIndex; }
        var position = 0;
        for (var i = 0; i < this.toolbar.segmentButtonWidths.length; i++) {
            if (index > Number(i)) {
                position += this.toolbar.segmentButtonWidths[i];
            }
        }
        return position;
    };
    SuperTabs.prototype.getAbsoluteIndicatorPosition = function () {
        var position = this.selectedTabIndex * this.tabsContainer.tabWidth / this._tabs.length;
        return position <= this.maxIndicatorPosition ? position : this.maxIndicatorPosition;
    };
    /**
     * Gets the width of a tab button when `scrollTabs` is set to `true`
     */
    SuperTabs.prototype.getSegmentButtonWidth = function (index) {
        if (index === void 0) { index = this.selectedTabIndex; }
        if (!this._isToolbarVisible)
            return;
        return this.toolbar.segmentButtonWidths[index];
    };
    SuperTabs.prototype.setMaxIndicatorPosition = function () {
        if (this.el && this.el.nativeElement) {
            this.maxIndicatorPosition = this.el.nativeElement.offsetWidth - (this.el.nativeElement.offsetWidth / this._tabs.length);
        }
    };
    SuperTabs.prototype.setFixedIndicatorWidth = function () {
        if (this.scrollTabs || !this._isToolbarVisible)
            return;
        // the width of the "slide", should be equal to the width of a single `ion-segment-button`
        // we'll just calculate it instead of querying for a segment button
        this.toolbar.setIndicatorWidth(this.el.nativeElement.offsetWidth / this._tabs.length, false);
    };
    /**
     * Aligns slide position with selected tab
     */
    SuperTabs.prototype.alignIndicatorPosition = function (animate) {
        if (animate === void 0) { animate = false; }
        if (!this._isToolbarVisible)
            return;
        if (this.scrollTabs) {
            this.toolbar.alignIndicator(this.getRelativeIndicatorPosition(), this.getSegmentButtonWidth(), animate);
            this.alignTabButtonsContainer(animate);
        }
        else {
            this.toolbar.setIndicatorPosition(this.getAbsoluteIndicatorPosition(), animate);
        }
    };
    SuperTabs.prototype.getTabIndexById = function (tabId) {
        return this._tabs.findIndex(function (tab) { return tab.tabId === tabId; });
    };
    SuperTabs.prototype.getTabById = function (tabId) {
        return this._tabs.find(function (tab) { return tab.tabId === tabId; });
    };
    SuperTabs.prototype.getActiveTab = function () {
        return this._tabs[this.selectedTabIndex];
    };
    // needed since we're implementing RootNode
    SuperTabs.prototype.getElementRef = function () { return this.el; };
    // needed since we're implementing RootNode
    SuperTabs.prototype.initPane = function () { return true; };
    // needed since we're implementing RootNode
    SuperTabs.prototype.paneChanged = function () { };
    // needed to make Ionic Framework think this is a tabs component... needed for Deeplinking
    SuperTabs.prototype.getSelected = function () { };
    // needed to make Ionic Framework think this is a tabs component... needed for Deeplinking
    SuperTabs.prototype.setTabbarPosition = function () { };
    // update segment button widths manually
    SuperTabs.prototype.indexSegmentButtonWidths = function () {
        var _this = this;
        this._plt.raf(function () { return _this.toolbar.indexSegmentButtonWidths(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabs.prototype, "toolbarBackground", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabs.prototype, "toolbarColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabs.prototype, "indicatorColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabs.prototype, "badgeColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SuperTabs.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabs.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabs.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SuperTabs.prototype, "height", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SuperTabs.prototype, "selectedTabIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SuperTabs.prototype, "scrollTabs", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SuperTabs.prototype, "tabsPlacement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SuperTabs.prototype, "tabSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__super_tabs_toolbar__["a" /* SuperTabsToolbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__super_tabs_toolbar__["a" /* SuperTabsToolbar */])
    ], SuperTabs.prototype, "toolbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__super_tabs_container__["a" /* SuperTabsContainer */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__super_tabs_container__["a" /* SuperTabsContainer */])
    ], SuperTabs.prototype, "tabsContainer", void 0);
    SuperTabs = SuperTabs_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'super-tabs',
            template: "\n    <super-tabs-toolbar [tabsPlacement]=\"tabsPlacement\" [hidden]=\"!_isToolbarVisible\" [config]=\"config\"\n                        [color]=\"toolbarBackground\"\n                        [tabsColor]=\"toolbarColor\" [indicatorColor]=\"indicatorColor\" [badgeColor]=\"badgeColor\"\n                        [scrollTabs]=\"scrollTabs\"\n                        [selectedTab]=\"selectedTabIndex\"\n                        (tabSelect)=\"onToolbarTabSelect($event)\"></super-tabs-toolbar>\n    <super-tabs-container [config]=\"config\" [tabsCount]=\"_tabs.length\" [selectedTabIndex]=\"selectedTabIndex\"\n                          (tabSelect)=\"onContainerTabSelect($event)\" (onDrag)=\"onDrag()\">\n      <ng-content></ng-content>\n    </super-tabs-container>\n  ",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* RootNode */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return SuperTabs_1; })
                }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_5__providers_super_tabs_controller__["a" /* SuperTabsController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* DeepLinker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* DomController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */]])
    ], SuperTabs);
    return SuperTabs;
    var SuperTabs_1;
}());

var superTabsIds = -1;
//# sourceMappingURL=super-tabs.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTabsController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SuperTabsController = (function () {
    function SuperTabsController() {
        this.instances = [];
    }
    SuperTabsController.prototype.setBadge = function (tabId, value, tabsId) {
        var instance = this.getInstance(tabsId);
        instance && instance.setBadge(tabId, value);
    };
    SuperTabsController.prototype.clearBadge = function (tabId, tabsId) {
        var instance = this.getInstance(tabsId);
        instance && instance.clearBadge(tabId);
    };
    SuperTabsController.prototype.increaseBadge = function (tabId, increaseBy, tabsId) {
        if (increaseBy === void 0) { increaseBy = 1; }
        var instance = this.getInstance(tabsId);
        instance && instance.increaseBadge(tabId, increaseBy);
    };
    SuperTabsController.prototype.decreaseBadge = function (tabId, decreaseBy, tabsId) {
        if (decreaseBy === void 0) { decreaseBy = 1; }
        var instance = this.getInstance(tabsId);
        instance && instance.decreaseBadge(tabId, decreaseBy);
    };
    /**
     * Enables/disables swiping on a specific tabs instance
     * @param enable
     * @param [tabsId]
     */
    SuperTabsController.prototype.enableTabsSwipe = function (enable, tabsId) {
        var instance = this.getInstance(tabsId);
        instance && instance.enableTabsSwipe(enable);
    };
    /**
     * Enables/disables swiping when this tab is active
     * @param tabId
     * @param enable
     * @param [tabsId]
     */
    SuperTabsController.prototype.enableTabSwipe = function (tabId, enable, tabsId) {
        var instance = this.getInstance(tabsId);
        instance && instance.enableTabSwipe(tabId, enable);
    };
    SuperTabsController.prototype.showToolbar = function (show, tabsId) {
        var instance = this.getInstance(tabsId);
        instance && instance.showToolbar(show);
    };
    SuperTabsController.prototype.slideTo = function (tabIndexOrId, tabsId) {
        var instance = this.getInstance(tabsId);
        instance && instance.slideTo(tabIndexOrId);
    };
    /**
     * @private
     */
    SuperTabsController.prototype.registerInstance = function (instance) {
        this.instances.push(instance);
    };
    /**
     * @private
     */
    SuperTabsController.prototype.unregisterInstance = function (id) {
        var instanceIndex = this.getInstanceIndex(id);
        if (instanceIndex > -1)
            this.instances.splice(instanceIndex, 1);
    };
    SuperTabsController.prototype.getInstanceIndex = function (id) {
        return this.instances.findIndex(function (instance) { return instance.id === id; });
    };
    SuperTabsController.prototype.getInstance = function (id) {
        return (!!id && this.instances[this.getInstanceIndex(id)]) || this.instances[0];
    };
    SuperTabsController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SuperTabsController);
    return SuperTabsController;
}());

//# sourceMappingURL=super-tabs-controller.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map